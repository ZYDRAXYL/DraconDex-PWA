# เลนเดสก์ท็อป — DraconDex ฝั่ง Electron ทำงานในเบราว์เซอร์ได้อย่างไร

> เอกสารนี้อธิบาย **หลักการ** ของเลน `/d/` เป็นหลัก (เลน `/m/` คือ
> `flutter build web` ของโค้ด Flutter ชุดเดิม — อ่าน `docs/PWA.md` ใน
> DraconDex-APP ได้โดยตรง ไม่มีอะไรเพิ่มจากฝั่งนี้นอกจาก
> `--no-web-resources-cdn` ที่อธิบายไว้ท้ายเอกสาร)

## 1. โจทย์

DraconDex ฝั่งเดสก์ท็อปแบ่งเป็นสองซีก:

```
renderer (vanilla JS, ~19k บรรทัด)   ← เป็น "เว็บ" อยู่แล้ว 100%
        │ window.api.<ns>.<fn>()  (preload.js)
        │ ipcRenderer.invoke
main process (main.js + src/db/**)   ← เป็น Node ล้วน: fs, node-sqlite3-wasm, Electron
```

ซีกบนรันในเบราว์เซอร์ได้ทันทีโดยไม่ต้องแก้อะไรเลย (สคริปต์ธรรมดา + CSS ธรรมดา)
ซีกล่างรันไม่ได้ — ไม่มี Node, ไม่มีไฟล์ระบบ, ไม่มี Electron

ทางเลือกที่ **ไม่** ใช้: เขียน data layer ใหม่สำหรับเว็บ นั่นคือการ fork
โค้ด 9,500 บรรทัดที่จะ drift ออกจากต้นทางทันทีที่แอปหลักขยับ และจะกลายเป็น
"เวอร์ชันเว็บที่พฤติกรรมไม่ตรงกับแอปจริง" ภายในไม่กี่รอบ

สิ่งที่ทำแทนคือ **ยกซีกล่างทั้งซีกมารันในหน้าเว็บ** แล้วเปลี่ยนเฉพาะสี่อย่าง
ที่เบราว์เซอร์ไม่มีจริง ๆ ข้างใต้มัน — ไม่แตะโค้ดแอปแม้แต่บรรทัดเดียว

```
renderer (ไฟล์เดิม)  →  window.api (preload.js ตัวจริง)
                      →  __ddxInvoke            (shim/entry.js)
                      →  IPC handlers ของ main.js ตัวจริง
                      →  src/db/** ตัวจริง  บน sql.js + virtual filesystem
```

แนวคิดนี้ไม่ใช่ของใหม่ในโปรเจกต์ — `.claude/skills/run-dracondex/web-driver.mjs`
ของ DraconDex-APP ก็รัน renderer จริงใน Chromium โดย stub เฉพาะเปลือก Electron
ต่างกันตรงที่ตัวนั้นยังมี Node เป็น main process อยู่หลัง bridge ส่วนอันนี้
ย้ายทั้งหมดเข้ามาในหน้าเว็บ

## 2. สี่อย่างที่ถูกสลับข้างใต้

| ของจริงบนเดสก์ท็อป | ตัวแทนในเบราว์เซอร์ | ไฟล์ |
|---|---|---|
| `require('electron')` — app/BrowserWindow/ipcMain/dialog/Menu/shell | สตับที่เก็บ handler ลง Map แทน `ipcMain.handle` | `shim/electron.js` |
| `require('fs')` — ไฟล์ `.ddx` จริงบนดิสก์ | virtual filesystem ในหน่วยความจำ + IndexedDB | `shim/fs.js`, `shim/vfs.js` |
| `node-sqlite3-wasm` | `sql.js` (SQLite ตัวเดียวกัน คนละ binding) | `shim/sqlite.js` |
| หน้าต่าง (เปิด/ปิด/ย่อ/ขยาย) | การนำทางของหน้าเว็บ (`?nexus=`, แท็บใหม่) | `shim/entry.js` |

ที่เหลือเป็นของประกอบ: `path`/`os`/`crypto`/`http`/`node:async_hooks`/`Buffer`
— ทั้งหมดเขียนเท่าที่ `src/db/**` เรียกใช้จริง (นับจากซอร์ส ไม่ใช่เดา) และ
อะไรที่ไม่มีทางทำได้ก็โยน error ที่บอกเหตุผลตรง ๆ แทนที่จะเงียบ

`esbuild` เป็นตัวประกอบทั้งหมดนี้เป็นไฟล์เดียว (`dist/d/ddx-bridge.js`,
~370 KB) โดย alias ชื่อโมดูล Node ไปที่ shim และ inject `process`/`__dirname`
ให้ main.js เดินเข้า branch ของ build แบบ packaged (branch dev ของมันอ้าง
`__dirname/../tmp-user-data` ซึ่งไม่มีอยู่ในเบราว์เซอร์)

## 3. ไฟล์ `.ddx` ในเบราว์เซอร์

ตั้งแต่ v4.9.0 แอปเก็บข้อมูลเป็น `app.ddx` หนึ่งไฟล์ + `.ddx` ต่อหนึ่ง Nexus
(อ่าน `docs/VAULTS.md` ต้นทาง) โค้ดชั้นนี้เรียก `fs.existsSync`,
`fs.renameSync`, `fs.copyFileSync` ตรง ๆ ~28 จุด — เลยให้มัน "มีไฟล์ระบบ" ไปเลย

```
shim/vfs.js     path -> Uint8Array ในหน่วยความจำ, mirror ลง IndexedDB
shim/fs.js      fs API ที่ src/db/** ใช้จริง แปะบน vfs
shim/sqlite.js  new Database(path) = อ่าน bytes จาก vfs -> sql.js
                เขียนกลับ = db.export() -> vfs -> IndexedDB
```

โครงพาธที่ได้ (มาจาก branch packaged ของ main.js เอง):

```
/ddx/DraconDex/novel-manager-data/app.ddx
/ddx/DraconDex/novel-manager-data/vaults/<ชื่อ>-<id>.ddx
```

การเขียนถูก **หน่วง (debounce)** สองชั้น — sql.js serialize ทั้งฐานทุกครั้งที่
export ถ้าเขียนทุก statement การพิมพ์ใน editor จะกลายเป็น O(n²) ทันที:
250ms ที่ระดับ sqlite → vfs, 400ms ที่ระดับ vfs → IndexedDB และ flush ทันที
เมื่อ `pagehide`/`visibilitychange` หรือเมื่อ IPC ที่เขียนข้อมูลจบ

### ข้อควรรู้: `export()` ของ sql.js ฆ่า prepared statement

`conn.js` แคช prepared statement ไว้ถึง 256 ตัวต่อ connection (ต้นทางอธิบาย
เหตุผลด้าน performance ไว้ละเอียด) แต่ `Database.export()` ของ sql.js
**ปิดแล้วเปิดฐานใหม่** — statement ที่ค้างอยู่ตายทั้งหมด (วัดจริง ไม่ใช่เดา)

`shim/sqlite.js` จึงทำ statement เป็น **lazy** ทุกตัว: เก็บแค่ตัว SQL กับเลข
generation ถ้า generation ขยับ (เพราะเพิ่ง export) ก็ prepare ใหม่ให้เอง
แคชของ `conn.js` จึงยังใช้ได้เหมือนเดิมโดยไม่รู้เรื่องอะไรเลย

### `VACUUM INTO` — จุดเดียวที่ semantics ไม่ตรงเป๊ะ

export/duplicate Nexus ใช้ `VACUUM INTO ?` ให้ sqlite เขียนไฟล์ที่สองผ่าน VFS
ของมันเอง ซึ่งของ sql.js คือหน่วยความจำใน wasm ไม่ใช่ vfs ของเรา
`shim/sqlite.js` จึงดักคำสั่งนี้แล้วเขียน `db.export()` ลงพาธปลายทางแทน —
ได้ไฟล์ที่ "สมบูรณ์และเปิดได้จริง" เท่ากัน ต่างแค่ไม่ได้ถูกบีบอัด (compact)
แบบที่ VACUUM ตัวจริงทำ

## 4. Vault context (AsyncLocalStorage)

`src/db/vault-context.js` ใช้ ALS เพราะบนเดสก์ท็อปสองหน้าต่างที่เปิดคนละ Nexus
ใช้ event loop เดียวกัน — handler ที่ `await` แล้วกลับมาต้องเห็น vault ของตัวเอง
ไม่ใช่ของหน้าต่างอื่น (ต้นทางอธิบายไว้ว่าทำไม module-scoped variable ถึงผิด)

เบราว์เซอร์ไม่มี ALS จริง `shim/async_hooks.js` จึงเก็บ store ไว้ตลอดช่วง
promise ของ `run()` แล้วคืนค่าเดิมเมื่อ settle (ถ้าใช้ try/finally เฉย ๆ store
จะหลุดตั้งแต่ `await` แรก และ vault resolution จะพังทันที) สิ่งที่มันทำไม่ได้คือ
`run()` สอง call ที่ vault ต่างกันซ้อนเวลากัน — ซึ่งในหนึ่งแท็บมีแค่ `?nexus=`
เดียว และ dialog ในเบราว์เซอร์ไม่ค้างรอ picker แบบฝั่งเดสก์ท็อป กรณีนั้นจึง
ไม่เกิดในทางปฏิบัติ (เขียนไว้ตรง ๆ ในไฟล์ว่านี่คือขอบเขตของมัน)

`windowNexus` ถูก seed ด้วย window id ปลอม (1) จาก `?nexus=` ตอนบูต —
เหมือนที่ `createWindow()` ทำ ถ้าไม่ทำ ทุก handler ที่แตะ vault จะโยน
"no active vault" เพราะ vault-context ตั้งใจ fail closed

## 5. หน้าต่าง → การนำทาง

`window:*` เป็น IPC channel ปกติ จึงถูก **แทนที่ตามชื่อ channel** ใน
`shim/entry.js` ไม่ใช่ด้วยการแก้ main.js

| channel | ในเบราว์เซอร์ |
|---|---|
| `window:openNexus` | เปิดแท็บใหม่ `?nexus=<id>` |
| `window:openNexusReplace` | เปลี่ยน URL ของแท็บนี้ (Welcome → vault) |
| `window:openWelcome` | `?welcome=1` |
| `window:openBuilderTab` | แท็บใหม่ `?nexus&tab&popup=1` |
| `window:toggleMaximize` | fullscreen ของเบราว์เซอร์ |
| `window:minimize` / `close` | ไม่ทำอะไร (ปุ่มถูกซ่อนด้วย `web.css`) |
| `window:moveTabToMain` | คืน `false` — ไม่มี IPC ข้ามแท็บ |
| `update:check` | ตอบ "เป็นเวอร์ชันล่าสุด" — service worker อัปเดตเองอยู่แล้ว |

URL เปล่า (ไม่มี `?welcome=` และไม่มี `?nexus=`) ไม่ใช่สถานะที่แอปมี — บนเดสก์ท็อป
main.js เป็นคนตัดสินใจแล้วส่งมาเป็น query string หน้าเว็บจึงต้องตัดสินใจแทน
ก่อนสคริปต์ renderer ตัวแรกจะอ่าน `location.search` (ทำใน `shim/entry.js`)

## 6. Save / Open dialog

- **Save** — ไม่มีขั้นตอน "เลือกที่เก็บ" handler จะได้พาธใน `/ddx/downloads/`
  เขียนไฟล์ลงไปตามปกติ แล้ว bridge ค่อยส่งไฟล์นั้นให้เบราว์เซอร์
  (`showSaveFilePicker` ถ้ามี ไม่งั้นเป็นลิงก์ดาวน์โหลด) แล้วลบทิ้งจาก vfs
  โค้ด export ของแอปจึงไม่ต้องแก้อะไรเลย
- **Open** — `<input type="file">` จริง ไฟล์ที่เลือกถูกคัดลอกเข้า vfs แล้วคืน
  พาธเสมือน โค้ดที่ `readFileSync`/`copyFileSync` ต่อจากนั้นทำงานได้ตามเดิม
  (โฟลเดอร์ใช้ `webkitdirectory` เพื่อให้ Import Dock ยังเพิ่มทั้งโฟลเดอร์ได้)

หมายเหตุที่วัดมาแล้ว: Chromium ตัด **ชื่อไฟล์ที่ไม่ใช่ ASCII** ทิ้งเมื่อใช้
`a[download]` กับ blob URL (ชื่อ Nexus ภาษาไทยจะกลายเป็น `download`) เส้นทาง
ลิงก์จึงมีชื่อสำรองเป็น ASCII ให้ ส่วน `showSaveFilePicker` ไม่มีปัญหานี้

## 7. `ddx-file://` และรูปภาพ

โปรโตคอลนี้ลงทะเบียนไม่ได้ในหน้าเว็บ — `shim/electron.js` จึงไม่ export
`protocol` เลย (main.js มี `if (protocol)` ครอบอยู่แล้ว) ผลคือ `<img>` ที่ชี้
`ddx-file://` จะ error แล้วตกลง fallback `importdock:readFiles` ที่ renderer
มีอยู่แล้ว — เป็นเส้นทางที่แอปรองรับอยู่แล้ว ไม่ใช่ของที่เพิ่มใหม่

## 8. สิ่งที่ทำไม่ได้จริง ๆ (และทำไม)

| ฟีเจอร์ | เหตุผล |
|---|---|
| Google Drive backup / Google sign-in | flow เดสก์ท็อปต้องเปิด loopback HTTP server (`shim/http.js` โยน error ที่บอกแบบนี้ตรง ๆ) |
| Plugins | เป็นหน้าต่าง/โปรเซสแยกที่แตะไฟล์ระบบและติดตั้งจาก git |
| Reveal in folder / เปิดด้วยแอปอื่น | ไม่มี OS file manager ให้เรียก |
| ไฟล์ที่ import ยังลิงก์กับพาธเดิมบนดิสก์ | เบราว์เซอร์ไม่ให้พาธจริง ไฟล์จึงถูก "คัดลอกเข้ามา" แทน |
| Cloud Sync | ปิดทั้งโปรเจกต์อยู่แล้วตั้งแต่ต้นทาง ไม่ใช่ข้อจำกัดของเว็บ |

## 9. Content-Security-Policy

`index.html` ของแอปมี CSP ที่ตั้งใจให้ `connect-src 'none'` (renderer เดสก์ท็อป
ไม่ต้องต่อเน็ตเองเลย ทุกอย่างผ่าน IPC) บนเว็บต้องผ่อนสองข้อ เพราะไม่งั้น
sqlite ไม่ทำงาน:

- `script-src` เพิ่ม `'wasm-unsafe-eval'` (คอมไพล์ wasm)
- `connect-src 'self'` (โหลด `sql-wasm.wasm` และไฟล์ของตัวเอง)
- `manifest-src 'self'` (ติดตั้งเป็นแอปได้)

ยังคง `default-src 'none'` และไม่มี host ภายนอกในรายการใด ๆ ทั้งสิ้น — build
นี้ไม่ต่อออกไปไหนเลยนอกจาก origin ตัวเอง

## 10. เลนมือถือ: `--no-web-resources-cdn`

`flutter build web` ปกติจะให้ตัว loader ไปดึง CanvasKit จาก
`www.gstatic.com` ตอน runtime (โฟลเดอร์ `canvaskit/` ถูก emit ไว้ก็จริง
แต่ไม่ถูกใช้ — วัดแล้ว: ปิดเน็ตแล้วแอปไม่ขึ้นเลย) แฟล็กนี้ทำให้ `buildConfig`
มี `useLocalCanvasKit` แล้วโหลดจากไฟล์ข้าง ๆ แทน ซึ่งเป็นเงื่อนไขของทั้ง
"ใช้งาน offline ได้" และ "ไม่ยิงไปหา third-party ทุกครั้งที่เปิด"

manifest ของเลนมือถือถูกชี้กลับไปที่ manifest ของทั้งไซต์ด้วย เพื่อให้
"ติดตั้งจากมือถือ" กับ "ติดตั้งจากเดสก์ท็อป" เป็นแอปเดียวกัน (start_url คือ
router ซึ่งเลือกเลนให้ใหม่ทุกครั้งที่เปิด)

## 11. ตรวจว่าใช้ได้จริง

`npm run verify` เปิดไซต์ที่ build แล้วด้วย Chromium จริง แล้วเดินจริงทั้งเส้น:
ผ่าน wizard → สร้าง Nexus → สร้าง module → export `.ddx` (เช็ค header ว่าเป็น
`SQLite format 3`) → เลือกไฟล์เข้ามา → **reload** → ยืนยันว่าข้อมูลยังอยู่
ข้อสุดท้ายคือข้อที่สำคัญที่สุด เพราะมันจะจริงได้ก็ต่อเมื่อ sqlite ทำงานจริงและ
virtual filesystem ลง IndexedDB จริงเท่านั้น สกรีนช็อตทุกขั้นอยู่ใน `.verify/`
