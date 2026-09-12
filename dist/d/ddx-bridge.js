"use strict";(()=>{var pu=Object.create;var Ur=Object.defineProperty;var _u=Object.getOwnPropertyDescriptor;var mu=Object.getOwnPropertyNames;var fu=Object.getPrototypeOf,Tu=Object.prototype.hasOwnProperty;var Ce=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(o){throw r=[o],o}};var H=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},ze=(e,t)=>{for(var r in t)Ur(e,r,{get:t[r],enumerable:!0})},li=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of mu(t))!Tu.call(e,n)&&n!==r&&Ur(e,n,{get:()=>t[n],enumerable:!(o=_u(t,n))||o.enumerable});return e};var di=(e,t,r)=>(r=e!=null?pu(fu(e)):{},li(t||!e||!e.__esModule?Ur(r,"default",{value:e,enumerable:!0}):r,e)),X=e=>li(Ur({},"__esModule",{value:!0}),e);function gu(e){let t="";for(let r=0;r<e.length;r+=32768)t+=String.fromCharCode.apply(null,e.subarray(r,r+32768));return btoa(t)}function ui(e){let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}var Ei,Nu,Oe,Mr=Ce(()=>{"use strict";A();Ei=new TextEncoder,Nu=new TextDecoder;Oe=class e extends Uint8Array{static alloc(t,r=0){let o=new e(t);return r&&o.fill(r),o}static allocUnsafe(t){return new e(t)}static from(t,r){if(typeof t=="string"){if(r==="base64")return new e(ui(t));if(r==="hex"){let o=new e(t.length>>1);for(let n=0;n<o.length;n++)o[n]=parseInt(t.substr(n*2,2),16);return o}return new e(Ei.encode(t))}return t instanceof Uint8Array?new e(t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)):t instanceof ArrayBuffer?new e(t):Array.isArray(t)?new e(Uint8Array.from(t)):new e(0)}static concat(t,r){let o=r??t.reduce((i,s)=>i+s.length,0),n=new e(o),a=0;for(let i of t)n.set(i.subarray(0,Math.min(i.length,o-a)),a),a+=i.length;return n}static byteLength(t,r){return typeof t!="string"?t.length:r==="base64"?ui(t).length:Ei.encode(t).length}static isBuffer(t){return t instanceof e}toString(t="utf8",r=0,o=this.length){let n=this.subarray(r,o);return t==="base64"?gu(n):t==="hex"?[...n].map(a=>a.toString(16).padStart(2,"0")).join(""):Nu.decode(n)}readUInt8(t=0){return this[t]}readUInt16BE(t=0){return this[t]<<8|this[t+1]}readUInt32BE(t=0){return(this[t]<<24>>>0)+(this[t+1]<<16)+(this[t+2]<<8)+this[t+3]}readUInt32LE(t=0){return(this[t+3]<<24>>>0)+(this[t+2]<<16)+(this[t+1]<<8)+this[t]}writeUInt32BE(t,r=0){return this[r]=t>>>24&255,this[r+1]=t>>>16&255,this[r+2]=t>>>8&255,this[r+3]=t&255,r+4}slice(t,r){return e.from(super.slice(t,r))}equals(t){if(this.length!==t.length)return!1;for(let r=0;r<this.length;r++)if(this[r]!==t[r])return!1;return!0}};typeof globalThis.Buffer>"u"&&(globalThis.Buffer=Oe)});var U,M,D,A=Ce(()=>{"use strict";Mr();U={env:{},platform:"linux",arch:"wasm32",version:"v0.0.0",versions:{node:"0.0.0"},argv:[],execPath:"/ddx/DraconDex.exe",cwd:()=>"/ddx",on:()=>U,once:()=>U,emit:()=>!1,nextTick:(e,...t)=>queueMicrotask(()=>e(...t)),exit:()=>{},hrtime:Object.assign(()=>[0,0],{bigint:()=>0n}),memoryUsage:()=>({heapUsed:0,heapTotal:0,rss:0})},M="/ddx/app",D=Oe});var xe={};ze(xe,{basename:()=>Pe,default:()=>Ru,dirname:()=>Qe,extname:()=>jr,isAbsolute:()=>sn,join:()=>st,normalize:()=>Tt,parse:()=>mi,posix:()=>wt,relative:()=>_i,resolve:()=>vr,sep:()=>hu});function pi(e,t){let r=[];for(let o of e)!o||o==="."||(o===".."?r.length&&r[r.length-1]!==".."?r.pop():t&&r.push(".."):r.push(o));return r}function Tt(e){if(!e)return".";let t=e.startsWith("/"),r=e.endsWith("/"),o=pi(e.split("/"),!t).join("/");return!o&&!t&&(o="."),o&&r&&(o+="/"),(t?"/":"")+o}function st(...e){let t=e.filter(r=>r!=null&&r!=="").join("/");return t?Tt(t):"."}function vr(...e){let t="",r=!1;for(let n=e.length-1;n>=0&&!r;n--){let a=e[n];a&&(t=t?`${a}/${t}`:a,r=a.startsWith("/"))}let o=pi(t.split("/"),!r).join("/");return r?"/"+o:o||"."}function Qe(e){let t=Tt(e).replace(/\/+$/,""),r=t.lastIndexOf("/");return r===-1?".":r===0?"/":t.slice(0,r)}function Pe(e,t){let r=Tt(e).replace(/\/+$/,"").split("/").pop()||"";return t&&r.endsWith(t)&&r!==t&&(r=r.slice(0,-t.length)),r}function jr(e){let t=Pe(e),r=t.lastIndexOf(".");return r<=0?"":t.slice(r)}function _i(e,t){let r=vr(e).split("/").filter(Boolean),o=vr(t).split("/").filter(Boolean),n=0;for(;n<r.length&&n<o.length&&r[n]===o[n];)n++;return[...r.slice(n).map(()=>".."),...o.slice(n)].join("/")}var hu,sn,mi,wt,Ru,ge=Ce(()=>{"use strict";A();hu="/";sn=e=>!!e&&e.startsWith("/"),mi=e=>({root:sn(e)?"/":"",dir:Qe(e),base:Pe(e),ext:jr(e),name:Pe(e,jr(e))}),wt={sep:"/",delimiter:":",normalize:Tt,join:st,resolve:vr,dirname:Qe,basename:Pe,extname:jr,relative:_i,isAbsolute:sn,parse:mi};wt.posix=wt;wt.win32=wt;Ru=wt});function Lu(){return new Promise((e,t)=>{let r=indexedDB.open(Su,Ou);r.onupgradeneeded=()=>{let o=r.result;o.objectStoreNames.contains(kt)||o.createObjectStore(kt)},r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}function Wr(e){let t=We(e);for(;t&&t!=="/"&&!Me.has(t);)Me.add(t),t=Qe(t)}async function fi(){try{Kt=await Lu()}catch(t){return console.warn("[vfs] IndexedDB unavailable, running in memory only:",t?.message||t),!1}let e=await new Promise((t,r)=>{let n=Kt.transaction(kt,"readonly").objectStore(kt),a=[],i=n.openCursor();i.onsuccess=()=>{let s=i.result;if(!s)return t(a);a.push([s.key,s.value]),s.continue()},i.onerror=()=>r(i.error)});for(let[t,r]of e){if(r&&r.dir){Wr(t);continue}let o=r instanceof ArrayBuffer?new Uint8Array(r):r?.bytes?new Uint8Array(r.bytes):new Uint8Array(0);Ue.set(t,o),Wr(Qe(t))}return!0}function cn(){Kt&&(Pr&&clearTimeout(Pr),Pr=setTimeout(()=>{Pr=null,Nt()},400))}function Nt(){if(!Kt||!Ct.size&&!bt.size)return Promise.resolve();if(Jt)return Jt.then(()=>Nt());let e=[...Ct],t=[...bt];return Ct.clear(),bt.clear(),Jt=new Promise(r=>{let o;try{o=Kt.transaction(kt,"readwrite")}catch(a){return console.warn("[vfs] flush failed:",a?.message||a),r()}let n=o.objectStore(kt);for(let a of e){let i=Ue.get(a);i&&n.put({bytes:i.slice().buffer,mtime:Date.now()},a)}for(let a of t)n.delete(a);for(let a of Me)n.put({dir:!0},a);o.oncomplete=()=>r(),o.onerror=()=>{console.warn("[vfs] flush error:",o.error),r()},o.onabort=()=>r()}).then(()=>{Jt=null;for(let r of ln)r()}),Jt}var Su,kt,Ou,Ue,Me,Ct,bt,Kt,Pr,Jt,ln,We,Iu,$,zt=Ce(()=>{"use strict";A();ge();Su="dracondex-pwa",kt="files",Ou=1,Ue=new Map,Me=new Set(["/"]),Ct=new Set,bt=new Set,Kt=null,Pr=null,Jt=null,ln=new Set,We=e=>Tt(String(e));Iu={files:Ue,dirs:Me,exists:e=>Ue.has(We(e))||Me.has(We(e)),isDir:e=>Me.has(We(e)),isFile:e=>Ue.has(We(e)),read:e=>Ue.get(We(e)),write(e,t){let r=We(e);Ue.set(r,t instanceof Uint8Array?t:new Uint8Array(t)),Wr(Qe(r)),Ct.add(r),bt.delete(r),cn()},mkdir(e){Wr(We(e)),cn()},remove(e,t){let r=We(e);if(Ue.delete(r)&&(Ct.delete(r),bt.add(r)),Me.has(r))if(t){let o=r.endsWith("/")?r:r+"/";for(let n of[...Ue.keys()])n.startsWith(o)&&(Ue.delete(n),Ct.delete(n),bt.add(n));for(let n of[...Me])(n===r||n.startsWith(o))&&Me.delete(n)}else Me.delete(r);cn()},list(e){let t=We(e).replace(/\/+$/,"")||"/",r=t==="/"?"/":t+"/",o=new Set;for(let n of Ue.keys())n.startsWith(r)&&o.add(n.slice(r.length).split("/")[0]);for(let n of Me)n!==t&&n.startsWith(r)&&o.add(n.slice(r.length).split("/")[0]);return[...o]},join:st,flushNow:Nt,onFlush(e){return ln.add(e),()=>ln.delete(e)}};typeof addEventListener=="function"&&(addEventListener("pagehide",()=>Nt()),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Nt()}));$=Iu});var me={};ze(me,{BrowserWindow:()=>Xr,Menu:()=>gi,app:()=>Hr,clipboard:()=>Oi,contextBridge:()=>Ii,default:()=>Au,dialog:()=>Dt,ipcHandlers:()=>Br,ipcMain:()=>Ni,ipcRenderer:()=>Ai,nativeTheme:()=>Ri,protocol:()=>Li,session:()=>Si,shell:()=>hi});var Zt,Br,Ti,Hr,Qt,Xr,Ni,Dt,gi,hi,Ri,Si,Oi,Li,Ii,Ai,Au,le=Ce(()=>{"use strict";A();Zt=new Map,Br=Zt,Ti={home:"/ddx/home",appData:"/ddx",userData:"/ddx/electron-user-data",temp:"/ddx/tmp",exe:"/ddx/DraconDex.exe",documents:"/ddx/home/Documents",downloads:"/ddx/home/Downloads",desktop:"/ddx/home/Desktop",logs:"/ddx/logs"},Hr={isPackaged:!0,getPath:e=>Ti[e]??"/ddx",setPath:(e,t)=>{Ti[e]=t},getVersion:()=>"4.18.0",getName:()=>"DraconDex",getAppPath:()=>"/ddx/app",commandLine:{appendSwitch:()=>{}},requestSingleInstanceLock:()=>!0,on:()=>Hr,once:()=>Hr,whenReady:()=>new Promise(()=>{}),quit:()=>{},exit:()=>{},relaunch:()=>{},focus:()=>{}},Qt={id:1,isDestroyed:()=>!1,isMinimized:()=>!1,isMaximized:()=>!1,minimize:()=>{},maximize:()=>{},unmaximize:()=>{},restore:()=>{},focus:()=>{},close:()=>{},on:()=>{},webContents:{send:()=>{},id:1,on:()=>{},session:{setPermissionRequestHandler:()=>{}}},loadFile:()=>{}},Xr=class{constructor(){return Qt}static getAllWindows(){return[Qt]}static getFocusedWindow(){return Qt}static fromWebContents(){return Qt}static fromId(t){return t===1?Qt:null}},Ni={handle:(e,t)=>{Zt.set(e,t)},handleOnce:(e,t)=>{Zt.set(e,t)},removeHandler:e=>{Zt.delete(e)},on:()=>{}},Dt={showSaveDialog:async(...e)=>Dt._save(...e),showOpenDialog:async(...e)=>Dt._open(...e),showMessageBox:async()=>({response:0}),showErrorBox:(e,t)=>console.error(`[dialog] ${e}: ${t}`),_save:async()=>({canceled:!0}),_open:async()=>({canceled:!0,filePaths:[]})},gi={buildFromTemplate:()=>({}),setApplicationMenu:()=>{}},hi={openExternal:async e=>{globalThis.open(e,"_blank","noopener")},showItemInFolder:e=>{console.warn("[shell] showItemInFolder is not available in the web build:",e)},openPath:async e=>(console.warn("[shell] openPath is not available in the web build:",e),"unsupported"),beep:()=>{}},Ri={shouldUseDarkColors:!0,on:()=>{}},Si={defaultSession:{setPermissionRequestHandler:()=>{}}},Oi={writeText:e=>navigator.clipboard?.writeText(e),readText:()=>""},Li=void 0,Ii={exposeInMainWorld:(e,t)=>{globalThis[e]=t}},Ai={invoke:(e,...t)=>globalThis.__ddxInvoke(e,t),on:()=>{},send:()=>{}},Au={app:Hr,BrowserWindow:Xr,ipcMain:Ni,dialog:Dt,Menu:gi,shell:hi,protocol:Li,nativeTheme:Ri,session:Si,clipboard:Oi,contextBridge:Ii,ipcRenderer:Ai,ipcHandlers:Zt}});var be={};ze(be,{__quota:()=>er,__setQuota:()=>Vr,basename:()=>Pe,closeSync:()=>vi,constants:()=>Pi,copyFileSync:()=>pn,createReadStream:()=>fn,createWriteStream:()=>Wi,default:()=>Du,dirname:()=>Qe,existsSync:()=>wi,fsyncSync:()=>Mi,lstatSync:()=>ki,mkdirSync:()=>un,openSync:()=>Fi,promises:()=>ji,readFileSync:()=>dn,readSync:()=>xi,readdirSync:()=>mn,realpathSync:()=>$r,renameSync:()=>_n,rmSync:()=>xt,rmdirSync:()=>bi,statSync:()=>Yr,statfsSync:()=>Di,unlinkSync:()=>Ci,vfs:()=>$,writeFileSync:()=>En,writeSync:()=>Ui});function dn(e,t){let r=$.read(e);if(!r)throw Ze(e);return(typeof t=="string"?t:t?.encoding)?Cu.decode(r):Oe.from(r)}function En(e,t){$.write(e,typeof t=="string"?wu.encode(t):new Uint8Array(t.buffer?t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength):t))}function un(e){$.mkdir(e)}function xt(e,t={}){if(!$.exists(e)){if(t.force)return;throw Ze(e)}$.remove(e,!!t.recursive)}function pn(e,t){let r=$.read(e);if(!r)throw Ze(e);$.write(t,r.slice())}function _n(e,t){if($.isFile(e)){let r=$.read(e);$.write(t,r),$.remove(e,!1);return}if($.isDir(e)){let r=e.replace(/\/+$/,"")+"/";for(let o of[...$.files.keys()])o.startsWith(r)&&$.write(t.replace(/\/+$/,"")+"/"+o.slice(r.length),$.read(o));$.remove(e,!0);return}throw Ze(e)}function Yr(e){if($.isFile(e))return new Gr(e,$.read(e).length,!1);if($.isDir(e))return new Gr(e,0,!0);throw Ze(e)}function Vr(e){er=e}function Di(){let e=Math.max(0,er.total-er.used);return{bsize:4096,blocks:Math.floor(er.total/4096),bfree:Math.floor(e/4096),bavail:Math.floor(e/4096)}}function mn(e,t){if(!$.isDir(e))throw Ze(e);let r=$.list(e);return t?.withFileTypes?r.map(o=>{let n=(e.replace(/\/+$/,"")||"")+"/"+o,a=$.isDir(n);return{name:o,isDirectory:()=>a,isFile:()=>!a,parentPath:e,path:e}}):r}function $r(e){if(!$.exists(e))throw Ze(e);return String(e)}function Fi(e,t="r"){if(!$.exists(e)&&!/[wa+]/.test(t))throw Ze(e);$.exists(e)||$.write(e,new Uint8Array(0));let r=bu++;return qr.set(r,{path:String(e),pos:0}),r}function xi(e,t,r,o,n){let a=qr.get(e);if(!a)throw new Ft("EBADF","EBADF: bad file descriptor");let i=$.read(a.path)||new Uint8Array(0),s=n??a.pos,u=i.subarray(s,s+o);return t.set(u,r),n==null&&(a.pos+=u.length),u.length}function Ui(e,t,r=0,o=t.length,n=null){let a=qr.get(e);if(!a)throw new Ft("EBADF","EBADF: bad file descriptor");let i=$.read(a.path)||new Uint8Array(0),s=n??a.pos,u=Math.max(i.length,s+o),l=new Uint8Array(u);return l.set(i,0),l.set(t.subarray(r,r+o),s),$.write(a.path,l),n==null&&(a.pos+=o),o}function vi(e){qr.delete(e)}var wu,Cu,Ft,Ze,wi,Ci,bi,Gr,ki,er,qr,bu,Mi,ji,Pi,fn,Wi,ku,Du,Le=Ce(()=>{"use strict";A();Mr();ge();zt();wu=new TextEncoder,Cu=new TextDecoder,Ft=class extends Error{constructor(t,r){super(r),this.code=t}},Ze=e=>new Ft("ENOENT",`ENOENT: no such file or directory, '${e}'`),wi=e=>$.exists(e);Ci=e=>xt(e,{}),bi=(e,t)=>xt(e,{recursive:!0,force:!0,...t});Gr=class{constructor(t,r,o){this._path=t,this.size=r,this._isDir=o,this.mtimeMs=Date.now(),this.mtime=new Date(this.mtimeMs)}isDirectory(){return this._isDir}isFile(){return!this._isDir}};ki=Yr,er={total:2*1024**3,used:0};$r.native=$r;qr=new Map,bu=3;Mi=()=>{};ji={stat:async e=>Yr(e),readFile:async(e,t)=>dn(e,t),writeFile:async(e,t)=>En(e,t),mkdir:async e=>un(e),rm:async(e,t)=>xt(e,t),unlink:async e=>xt(e,{}),copyFile:async(e,t)=>pn(e,t),rename:async(e,t)=>_n(e,t),readdir:async(e,t)=>mn(e,t),access:async e=>{if(!$.exists(e))throw Ze(e)}},Pi={F_OK:0,R_OK:4,W_OK:2,X_OK:1},fn=()=>{throw new Ft("ENOSYS","createReadStream is not available in the web build")},Wi=fn,ku={existsSync:wi,readFileSync:dn,writeFileSync:En,mkdirSync:un,rmSync:xt,unlinkSync:Ci,rmdirSync:bi,copyFileSync:pn,renameSync:_n,statSync:Yr,lstatSync:ki,statfsSync:Di,readdirSync:mn,realpathSync:$r,openSync:Fi,readSync:xi,writeSync:Ui,fsyncSync:Mi,closeSync:vi,promises:ji,constants:Pi,createReadStream:fn,createWriteStream:Wi,__setQuota:Vr},Du=ku});var Qr={};ze(Qr,{Database:()=>Kr,default:()=>Uu,initSqlite:()=>zr,persistAll:()=>ve});async function zr(e){if(Ut)return Ut;let t=globalThis.initSqlJs;if(typeof t!="function")throw new Error("sql.js was not loaded (vendor/sql-wasm.js missing)");return Ut=await t({locateFile:e}),Ut}function ve(){for(let e of Tn)try{e.persist()}catch{}return $.flushNow()}var Ut,Fu,Jr,xu,Tn,Nn,Kr,Uu,tr=Ce(()=>{"use strict";A();zt();Ut=null;Fu=e=>e===void 0?null:typeof e=="boolean"?e?1:0:typeof e=="bigint"?Number(e):e instanceof Date?e.toISOString():e,Jr=e=>e==null?[]:(Array.isArray(e)?e:[e]).map(Fu),xu=/^\s*VACUUM\s+INTO\b/i,Tn=new Set,Nn=class{constructor(t,r){this.db=t,this.sql=r,this.isFinalized=!1,this._st=null,this._gen=-1}_live(){if(this.isFinalized)throw new Error("statement is finalized");return(!this._st||this._gen!==this.db._gen)&&(this._st=this.db._raw.prepare(this.sql),this._gen=this.db._gen),this._st}all(t){let r=this._live();r.reset(),r.bind(Jr(t));let o=[];for(;r.step();)o.push(r.getAsObject());return r.reset(),o}get(t){let r=this._live();r.reset(),r.bind(Jr(t));let o=r.step()?r.getAsObject():null;return r.reset(),o}run(t){let r=xu.test(this.sql)?Jr(t)[0]:null;if(r)return $.write(String(r),this.db._raw.export()),this.db._gen++,{changes:0,lastInsertRowid:0};let o=this._live();return o.reset(),o.bind(Jr(t)),o.step(),o.reset(),this.db._touch(),{changes:this.db._raw.getRowsModified(),lastInsertRowid:this.db._lastInsertRowid()}}_reset(){this._st&&this._gen===this.db._gen&&this._st.reset()}finalize(){if(!this.isFinalized){if(this.isFinalized=!0,this._st&&this._gen===this.db._gen)try{this._st.free()}catch{}this._st=null,this.db._statements.delete(this)}}},Kr=class{constructor(t,r={}){if(!Ut)throw new Error("initSqlite() must finish before a Database is opened");this.filePath=String(t);let o=$.read(this.filePath);this._raw=new Ut.Database(o&&o.length?o:void 0),this._gen=0,this._statements=new Set,this._dirty=!1,this._persistTimer=null,this._rowidStmt=null,this.isOpen=!0,Tn.add(this),o||$.write(this.filePath,this._raw.export()),this._gen++,r.readOnly&&(this.readOnly=!0)}_lastInsertRowid(){(!this._rowidStmt||this._rowidGen!==this._gen)&&(this._rowidStmt=this._raw.prepare("SELECT last_insert_rowid() AS id"),this._rowidGen=this._gen),this._rowidStmt.reset(),this._rowidStmt.step();let{id:t}=this._rowidStmt.getAsObject();return this._rowidStmt.reset(),t}_touch(){this._dirty=!0,!this._persistTimer&&(this._persistTimer=setTimeout(()=>{this._persistTimer=null,this.persist()},250))}persist(){if(!this.isOpen||!this._dirty)return;this._dirty=!1;let t=this._raw.export();this._gen++,$.write(this.filePath,t)}prepare(t){let r=new Nn(this,t);return this._statements.add(r),r}exec(t){this._raw.run(String(t));let r=String(t).trimStart().slice(0,6).toUpperCase();!r.startsWith("BEGIN")&&!r.startsWith("ROLLBA")&&this._touch()}run(t,r){if(r===void 0)return this.exec(t),{changes:this._raw.getRowsModified(),lastInsertRowid:this._lastInsertRowid()};let o=this.prepare(t);try{return o.run(r)}finally{o.finalize()}}all(t,r){let o=this.prepare(t);try{return o.all(r)}finally{o.finalize()}}get(t,r){let o=this.prepare(t);try{return o.get(r)}finally{o.finalize()}}close(){if(this.isOpen){this.persist();for(let t of[...this._statements])t.finalize();try{this._raw.close()}catch{}this.isOpen=!1,Tn.delete(this)}}};Uu={Database:Kr,initSqlite:zr,persistAll:ve}});var Zr={};ze(Zr,{EOL:()=>Bu,cpus:()=>qi,default:()=>Gu,homedir:()=>Yi,platform:()=>Vi,tmpdir:()=>$i});var $i,Yi,Vi,Bu,qi,Gu,eo=Ce(()=>{"use strict";A();$i=()=>"/ddx/tmp",Yi=()=>"/ddx/home",Vi=()=>"browser",Bu=`
`,qi=()=>[],Gu={tmpdir:$i,homedir:Yi,platform:Vi,EOL:`
`,cpus:qi}});var Ki={};ze(Ki,{AsyncLocalStorage:()=>to,AsyncResource:()=>ro,default:()=>$u,executionAsyncId:()=>Ji});var to,ro,Ji,$u,zi=Ce(()=>{"use strict";A();to=class{constructor(){this._store=void 0}run(t,r){let o=this._store;this._store=t;let n;try{n=r()}catch(a){throw this._store=o,a}return n&&typeof n.then=="function"?n.then(a=>(this._store=o,a),a=>{throw this._store=o,a}):(this._store=o,n)}getStore(){return this._store}enterWith(t){this._store=t}exit(t){let r=this._store;this._store=void 0;try{return t()}finally{this._store=r}}},ro=class{constructor(){}runInAsyncScope(t,r,...o){return t.apply(r,o)}},Ji=()=>0,$u={AsyncLocalStorage:to,AsyncResource:ro,executionAsyncId:Ji}});var gt=H((UL,es)=>{"use strict";A();var{AsyncLocalStorage:Yu}=(zi(),X(Ki)),Qi=new Yu,Vu=new Map,oo=class extends Error{constructor(){super("no active vault for this call \u2014 a vault-scoped db function ran outside a vault context"),this.code="no_active_vault"}},qu=(e,t)=>Qi.run({nexusId:e??null},t),Zi=()=>Qi.getStore()?.nexusId??null;function Ju(){let e=Zi();if(e==null)throw new oo;return e}es.exports={windowNexus:Vu,runWithVault:qu,currentNexusId:Zi,requireNexusId:Ju,NoActiveVaultError:oo}});var ns=H((vL,os)=>{"use strict";A();var Ku=/^\s*INSERT\s+INTO\s+["'`]?(\w+)["'`]?/i,zu=/^\s*UPDATE\s+["'`]?(\w+)["'`]?\s+SET\b/i,Qu=/^\s*DELETE\s+FROM\s+["'`]?(\w+)["'`]?\s+WHERE\b/i,Zu=/^\s*(INSERT|UPDATE|DELETE)\b/i,ep=/(?:^|[\s(]|\bAND\s|\bOR\s)(?:\w+\.)?["'`]?id["'`]?\s*=\s*\?/i;function ts(e){let t=e.search(/\bWHERE\b/i);if(t===-1)return-1;let r=e.slice(t),o=ep.exec(r);if(!o)return-1;let n=o.index+o[0].length-1,a=t+n;return(e.slice(0,a).match(/\?/g)||[]).length}function rs(e){let t;return(t=Ku.exec(e))?{op:"insert",table:t[1]}:(t=zu.exec(e))?{op:"update",table:t[1],idIdx:ts(e)}:(t=Qu.exec(e))?{op:"delete",table:t[1],idIdx:ts(e)}:Zu.test(e)?{op:"other"}:null}function tp(e){let t=[],r=[],o=null,n=0,a=!1;function i(R,T){let _=e(R);try{return T(_)}finally{try{_.finalize()}catch{}}}function s(R,T){try{return i(`SELECT * FROM ${R} WHERE id = ?`,_=>_.get([T]))}catch{return null}}function u(R,T){if(!T)return;let _=Object.keys(T);i(`INSERT INTO ${R} (${_.join(",")}) VALUES (${_.map(()=>"?").join(",")})`,S=>S.run(_.map(b=>T[b])))}function l(R,T,_){if(!_)return;let S=Object.keys(_).filter(b=>b!=="id");S.length&&i(`UPDATE ${R} SET ${S.map(b=>`${b} = ?`).join(",")} WHERE id = ?`,b=>b.run([...S.map(W=>_[W]),T]))}function g(R,T){i(`DELETE FROM ${R} WHERE id = ?`,_=>_.run([T]))}function m(){o&&(o.irreversible=!0)}function L(){n++,n===1&&(o={entries:[],irreversible:!1})}function I(R){n=Math.max(0,n-1),n===0&&(R&&o&&(o.entries.length||o.irreversible)&&(t.push(o),t.length>200&&t.shift(),r=[]),o=null)}function N(R,T){if(!a)return null;let _=rs(R);if(!_||_.op!=="update"&&_.op!=="delete"||_.idIdx<0)return null;let S=Array.isArray(T)?T[_.idIdx]:T;return{table:_.table,id:S,before:s(_.table,S)}}function h(R,T,_,S){if(!a)return;let b=!o;b&&L();let W=rs(R);if(W?.op==="insert"){let B=S&&S.lastInsertRowid;B!=null?o.entries.push({table:W.table,id:B,op:"insert",before:null,after:s(W.table,B)}):m()}else W?.op==="update"?_?o.entries.push({table:_.table,id:_.id,op:"update",before:_.before,after:s(_.table,_.id)}):m():W?.op==="delete"?_&&_.before?o.entries.push({table:_.table,id:_.id,op:"delete",before:_.before,after:null}):m():W?.op==="other"&&m();b&&I(!0)}function O(R,T){let _=T==="undo"?[...R.entries].reverse():R.entries;for(let S of _)T==="undo"?S.op==="insert"?g(S.table,S.id):S.op==="delete"?u(S.table,S.before):l(S.table,S.id,S.before):S.op==="insert"?u(S.table,S.after):S.op==="delete"?g(S.table,S.id):l(S.table,S.id,S.after)}function f(){let R=t.pop();return R?R.irreversible?(t.push(R),{ok:!1,reason:"irreversible"}):(O(R,"undo"),r.push(R),{ok:!0}):{ok:!1,reason:"nothing"}}function y(){let R=r.pop();return R?(O(R,"redo"),t.push(R),{ok:!0}):{ok:!1,reason:"nothing"}}return{beginGroup:L,endGroup:I,beforeRun:N,afterRun:h,undo:f,redo:y,canUndo:()=>t.length>0,canRedo:()=>r.length>0,setEnabled:R=>{a=!!R}}}os.exports={createUndoRecorder:tp}});var hn=H((PL,as)=>{"use strict";A();var rp=`
-- src/schema/vault.sql \u2014 the CANONICAL, shared vault-level SQLite schema.
--
-- This is the single source of truth for every table a Nexus/vault owns \u2014
-- the actual creative-writing data model (project, object, timeline, map,
-- relation, hashtag, world_*, game_*, write_*, note, wiki_link, module*,
-- story_*, book_chapter, chat_*, sketch_*, design_*, entity_relation,
-- classifier_*). Both apps generate their own runtime schema FROM this file
-- via 'node src/schema/generate.mjs' \u2014 see src/schema/README.md.
--
-- Deliberately NOT included here: Electron's install-level tables (plugin,
-- plugin_table, plugin_dependency, app_setting, nexus_file) \u2014 those live in
-- app.ddx, a separate database file that only exists on the Electron side
-- (no plugin system, no multi-file vault registry on Flutter, which keeps
-- every Nexus as a row in one shared file). Those stay hand-maintained in
-- electron/src/db/schema/ddl.js's APP_DDL_SQL, same as before.
--
-- This text was reconstructed to match the REAL, currently-live Electron
-- vault schema \u2014 not just electron/src/db/schema/ddl.js's literal CREATE
-- TABLE text (which had drifted stale relative to what
-- electron/src/db/schema/migrations.js additively ALTERs onto it over time \u2014
-- e.g. module.cat_type, project.nexus_ref, map.module_ref, etc. existed
-- only as ALTER TABLE statements, never folded back into ddl.js's base
-- CREATE TABLE text). It was generated by actually running ddl.js's
-- VAULT_DDL_SQL + every migrations.js function against a fresh in-memory
-- database and reading the resulting authoritative CREATE TABLE text back
-- out of sqlite_master \u2014 not hand-transcribed \u2014 then cross-verified
-- column-for-column against that same ground truth. See docs/CHANGELOG.md
-- for the date this was established.
--
-- Editing a table here: this is the base shape only. An EXISTING column can
-- never change type/constraints here without a real migration on both
-- sides (electron/src/db/schema/migrations.js and a Flutter equivalent) \u2014
-- SQLite's ALTER TABLE can't modify a column in place. Adding a NEW column
-- to a table real users already have still needs an additive migration on
-- both sides; only bump src/schema/version.json's vaultSchemaVersion once
-- both sides' migrations are in place, so neither app re-runs its init path
-- against a half-migrated file.

    CREATE TABLE IF NOT EXISTS use_color (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      color_code TEXT UNIQUE NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Nexus (v2.8): vault grouping projects from every module --
    CREATE TABLE IF NOT EXISTS nexus (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      memo TEXT,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS project_folder (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      folder_memo TEXT,
      folder_color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      codename TEXT UNIQUE,
      name TEXT NOT NULL,
      project_memo TEXT,
      folder_id INTEGER REFERENCES project_folder(id) ON DELETE SET NULL,
      project_color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      migrated_v3 INTEGER NOT NULL DEFAULT 0,
      nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS project_description (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
      attribute_name TEXT,
      attribute_text TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS object_category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_name TEXT NOT NULL,
      project_id INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(category_name, project_id)
    );

    CREATE TABLE IF NOT EXISTS object_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL REFERENCES object_category(id) ON DELETE CASCADE,
      description TEXT NOT NULL,
      attribute_type TEXT DEFAULT 'text',
      display_order INTEGER DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      project_id INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      category_id INTEGER NOT NULL REFERENCES object_category(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      note TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS object_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      object_id INTEGER NOT NULL REFERENCES object(id) ON DELETE CASCADE,
      template_id INTEGER NOT NULL REFERENCES object_template(id) ON DELETE CASCADE,
      attribute_value TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(object_id, template_id)
    );

    INSERT OR IGNORE INTO use_color (color_code) VALUES
      ('#6366f1'),('#8b5cf6'),('#ec4899'),('#f43f5e'),
      ('#f97316'),('#eab308'),('#22c55e'),('#06b6d4'),
      ('#3b82f6'),('#64748b'),('#a78bfa'),('#34d399'),
      ('#fb923c'),('#f472b6'),('#38bdf8'),('#a3e635');

    CREATE TABLE IF NOT EXISTS timeline (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      line_name TEXT,
      project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
      module_ref INTEGER REFERENCES module(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS timeline_date (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day INTEGER NOT NULL,
      month INTEGER NOT NULL,
      years INTEGER NOT NULL,
      hour INTEGER NOT NULL DEFAULT 0,
      minute INTEGER NOT NULL DEFAULT 0,
      UNIQUE(day,month,years,hour,minute)
    );

    CREATE TABLE IF NOT EXISTS timeline_event (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timeline_id INTEGER NOT NULL REFERENCES timeline(id) ON DELETE CASCADE,
      event_name TEXT,
      start_at INTEGER NOT NULL REFERENCES timeline_date(id),
      end_at INTEGER REFERENCES timeline_date(id),
      color INTEGER REFERENCES use_color(id),
      story TEXT,
      icon TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS map (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      map_name TEXT,
      project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
      module_ref INTEGER REFERENCES module(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS map_area (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      map_id INTEGER NOT NULL REFERENCES map(id) ON DELETE CASCADE,
      area_name TEXT,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS map_point (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      area_id INTEGER NOT NULL REFERENCES map_area(id) ON DELETE CASCADE,
      point_order INTEGER NOT NULL DEFAULT 0,
      x REAL NOT NULL,
      y REAL NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS relation_type (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      relation_name TEXT NOT NULL UNIQUE,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS relation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      relation_type INTEGER REFERENCES relation_type(id),
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS relation_obob (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      relation_id INTEGER NOT NULL REFERENCES relation(id) ON DELETE CASCADE,
      object_from INTEGER NOT NULL REFERENCES object(id),
      object_to INTEGER NOT NULL REFERENCES object(id)
    );

    CREATE TABLE IF NOT EXISTS relation_obtl (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      relation_id INTEGER NOT NULL REFERENCES relation(id) ON DELETE CASCADE,
      object_from INTEGER NOT NULL REFERENCES object(id),
      timeline_to INTEGER NOT NULL REFERENCES timeline_event(id)
    );

    CREATE TABLE IF NOT EXISTS relation_tltl (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      relation_id INTEGER NOT NULL REFERENCES relation(id) ON DELETE CASCADE,
      timeline_from INTEGER NOT NULL REFERENCES timeline_event(id),
      timeline_to INTEGER NOT NULL REFERENCES timeline_event(id)
    );

    CREATE TABLE IF NOT EXISTS hashtag (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tag_name TEXT NOT NULL UNIQUE,
      tag_color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS project_hashtag (
      project_id INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(project_id,hashtag_id)
    );

    CREATE TABLE IF NOT EXISTS object_hashtag (
      object_id INTEGER NOT NULL REFERENCES object(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(object_id,hashtag_id)
    );

    CREATE TABLE IF NOT EXISTS event_hashtag (
      event_id INTEGER NOT NULL REFERENCES timeline_event(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(event_id,hashtag_id)
    );

    -- Navigator (v2.5.2 "World") --
    CREATE TABLE IF NOT EXISTS world_project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      codename TEXT UNIQUE,
      name TEXT NOT NULL,
      memo TEXT,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      migrated_v3 INTEGER NOT NULL DEFAULT 0,
      nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS world_novel (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      project_ref INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      char_category_ref INTEGER REFERENCES object_category(id) ON DELETE SET NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_ref,project_ref)
    );

    CREATE TABLE IF NOT EXISTS world_character (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      symbol TEXT,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS world_character_category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      category_ref INTEGER NOT NULL REFERENCES object_category(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_ref,category_ref)
    );

    CREATE TABLE IF NOT EXISTS world_character_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      character_ref INTEGER NOT NULL REFERENCES world_character(id) ON DELETE CASCADE,
      object_ref INTEGER NOT NULL REFERENCES object(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(character_ref,object_ref)
    );

    CREATE TABLE IF NOT EXISTS world_category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      category_ref INTEGER NOT NULL REFERENCES object_category(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_ref,category_ref)
    );

    CREATE TABLE IF NOT EXISTS world_object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_ref INTEGER NOT NULL REFERENCES world_category(id) ON DELETE CASCADE,
      object_ref INTEGER NOT NULL REFERENCES object(id) ON DELETE CASCADE,
      symbol TEXT,
      symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(category_ref,object_ref)
    );

    CREATE TABLE IF NOT EXISTS symbol_collection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      glyph TEXT NOT NULL UNIQUE,
      label TEXT
    );

    CREATE TABLE IF NOT EXISTS world_map (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      map_ref INTEGER NOT NULL REFERENCES map(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_ref,map_ref)
    );

    CREATE TABLE IF NOT EXISTS world_map_area (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_map_ref INTEGER NOT NULL REFERENCES world_map(id) ON DELETE CASCADE,
      area_ref INTEGER NOT NULL REFERENCES map_area(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_map_ref,area_ref)
    );

    CREATE TABLE IF NOT EXISTS world_map_point (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_map_area_ref INTEGER NOT NULL REFERENCES world_map_area(id) ON DELETE CASCADE,
      point_ref INTEGER NOT NULL REFERENCES map_point(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(world_map_area_ref,point_ref)
    );

    CREATE TABLE IF NOT EXISTS world_timeline (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      world_map_ref INTEGER REFERENCES world_map(id) ON DELETE SET NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS world_timeline_date (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day INTEGER NOT NULL,
      month INTEGER NOT NULL,
      years INTEGER NOT NULL,
      hour INTEGER NOT NULL DEFAULT 0,
      minute INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(day,month,years,hour,minute)
    );

    CREATE TABLE IF NOT EXISTS world_timeline_event (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timeline_ref INTEGER NOT NULL REFERENCES world_timeline(id) ON DELETE CASCADE,
      date_ref INTEGER NOT NULL REFERENCES world_timeline_date(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(timeline_ref,date_ref)
    );

    CREATE TABLE IF NOT EXISTS world_timeline_point (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      x REAL NOT NULL,
      y REAL NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS world_timeline_object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_ref INTEGER NOT NULL REFERENCES world_timeline_event(id) ON DELETE CASCADE,
      world_object_ref INTEGER REFERENCES world_object(id) ON DELETE CASCADE,
      world_character_ref INTEGER REFERENCES world_character(id) ON DELETE CASCADE,
      point_ref INTEGER REFERENCES world_timeline_point(id) ON DELETE SET NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      CHECK ((world_object_ref IS NOT NULL) + (world_character_ref IS NOT NULL) = 1),
      UNIQUE(event_ref,point_ref)
    );

    -- Navigator world-owned ("original") data: category\u2192object\u2192attribute\u2192template,
    -- mirroring the Director schema but keyed to world_project (not borrowed from novels). --
    CREATE TABLE IF NOT EXISTS world_orig_category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      category_name TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(category_name, world_ref)
    );

    CREATE TABLE IF NOT EXISTS world_orig_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL REFERENCES world_orig_category(id) ON DELETE CASCADE,
      description TEXT NOT NULL,
      attribute_type TEXT DEFAULT 'text',
      display_order INTEGER DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS world_orig_object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      category_id INTEGER NOT NULL REFERENCES world_orig_category(id) ON DELETE CASCADE,
      color INTEGER REFERENCES use_color(id),
      note TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS world_orig_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      object_id INTEGER NOT NULL REFERENCES world_orig_object(id) ON DELETE CASCADE,
      template_id INTEGER NOT NULL REFERENCES world_orig_template(id) ON DELETE CASCADE,
      attribute_value TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(object_id, template_id)
    );

    CREATE TABLE IF NOT EXISTS world_description (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      attribute_name TEXT,
      attribute_text TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Navigator tags (v2.5.7) \u2014 mirror of Director's project_hashtag/object_hashtag,
    -- sharing the same global hashtag table. --
    CREATE TABLE IF NOT EXISTS world_tag (
      world_ref INTEGER NOT NULL REFERENCES world_project(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(world_ref,hashtag_id)
    );

    CREATE TABLE IF NOT EXISTS world_charactor_tag (
      character_ref INTEGER NOT NULL REFERENCES world_character(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(character_ref,hashtag_id)
    );

    -- Hero (v2.6) --
    CREATE TABLE IF NOT EXISTS game_project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      codename TEXT,
      name TEXT NOT NULL,
      memo TEXT,
      color_ref INTEGER REFERENCES use_color(id),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      migrated_v3 INTEGER NOT NULL DEFAULT 0,
      nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS game_novel_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      project_ref INTEGER REFERENCES project(id) ON DELETE SET NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(game_ref)
    );

    CREATE TABLE IF NOT EXISTS game_category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      category_ref INTEGER NOT NULL REFERENCES object_category(id) ON DELETE CASCADE,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(game_ref,category_ref)
    );

    CREATE TABLE IF NOT EXISTS game_cat_object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      gamecat_ref INTEGER NOT NULL REFERENCES game_category(id) ON DELETE CASCADE,
      object_ref INTEGER NOT NULL REFERENCES object(id) ON DELETE CASCADE,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(gamecat_ref,object_ref)
    );

    CREATE TABLE IF NOT EXISTS game_character (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      object_link INTEGER REFERENCES game_cat_object(id) ON DELETE SET NULL,
      name TEXT NOT NULL,
      memo TEXT,
      color_ref INTEGER REFERENCES use_color(id),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_char_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      attribute_name TEXT NOT NULL,
      attribute_type TEXT NOT NULL DEFAULT 'text',
      levelable INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_char_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      char_ref INTEGER NOT NULL REFERENCES game_character(id) ON DELETE CASCADE,
      template_ref INTEGER NOT NULL REFERENCES game_char_template(id) ON DELETE CASCADE,
      attribute_text TEXT,
      level INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(char_ref,template_ref,level)
    );

    CREATE TABLE IF NOT EXISTS game_collection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      color_ref INTEGER REFERENCES use_color(id),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_col_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collection_ref INTEGER NOT NULL REFERENCES game_collection(id) ON DELETE CASCADE,
      attribute_name TEXT NOT NULL,
      attribute_type TEXT NOT NULL DEFAULT 'text',
      levelable INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_col_element (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collection_ref INTEGER NOT NULL REFERENCES game_collection(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      color_ref INTEGER REFERENCES use_color(id),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_col_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      element_ref INTEGER NOT NULL REFERENCES game_col_element(id) ON DELETE CASCADE,
      template_ref INTEGER NOT NULL REFERENCES game_col_template(id) ON DELETE CASCADE,
      attribute_text TEXT,
      level INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(element_ref,template_ref,level)
    );

    CREATE TABLE IF NOT EXISTS game_char_element (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      char_ref INTEGER NOT NULL REFERENCES game_character(id) ON DELETE CASCADE,
      element_ref INTEGER NOT NULL REFERENCES game_col_element(id) ON DELETE CASCADE,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(char_ref,element_ref)
    );

    CREATE TABLE IF NOT EXISTS game_story (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_ref INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      memo TEXT,
      color_ref INTEGER REFERENCES use_color(id),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_dialogue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      story_ref INTEGER NOT NULL REFERENCES game_story(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      memo TEXT,
      color_ref INTEGER REFERENCES use_color(id),
      pos_x REAL DEFAULT 0,
      pos_y REAL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS game_conversation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dialogue_ref INTEGER NOT NULL REFERENCES game_dialogue(id) ON DELETE CASCADE,
      char_ref INTEGER REFERENCES game_character(id) ON DELETE SET NULL,
      talk_sentence TEXT,
      talk_order INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(dialogue_ref,talk_order)
    );

    CREATE TABLE IF NOT EXISTS game_storyline (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      story_ref INTEGER NOT NULL REFERENCES game_story(id) ON DELETE CASCADE,
      from_ref INTEGER NOT NULL REFERENCES game_dialogue(id) ON DELETE CASCADE,
      to_ref INTEGER NOT NULL REFERENCES game_dialogue(id) ON DELETE CASCADE,
      color_ref INTEGER REFERENCES use_color(id),
      symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL,
      symbol TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(from_ref,to_ref)
    );

    CREATE TABLE IF NOT EXISTS game_project_hashtag (
      game_id INTEGER NOT NULL REFERENCES game_project(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(game_id,hashtag_id)
    );

    CREATE TABLE IF NOT EXISTS game_char_hashtag (
      char_id INTEGER NOT NULL REFERENCES game_character(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(char_id,hashtag_id)
    );

    CREATE TABLE IF NOT EXISTS game_element_hashtag (
      element_id INTEGER NOT NULL REFERENCES game_col_element(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(element_id,hashtag_id)
    );

    -- Writer (v2.7) --
    CREATE TABLE IF NOT EXISTS write_project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_name TEXT NOT NULL,
      codename TEXT,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      migrated_v3 INTEGER NOT NULL DEFAULT 0,
      nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL,
      UNIQUE(codename)
    );
    CREATE TABLE IF NOT EXISTS write_series (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER NOT NULL REFERENCES write_project(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS write_book (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      series_id INTEGER NOT NULL REFERENCES write_series(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS write_chapter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      book_id INTEGER NOT NULL REFERENCES write_book(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      chapter_order INTEGER NOT NULL DEFAULT 0,
      color INTEGER REFERENCES use_color(id),
      chapter_content TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(book_id,chapter_order)
    );
    CREATE TABLE IF NOT EXISTS write_novel_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      series_id INTEGER NOT NULL REFERENCES write_series(id) ON DELETE CASCADE,
      novel_id INTEGER NOT NULL REFERENCES project(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(series_id,novel_id),
      UNIQUE(series_id)
    );
    CREATE TABLE IF NOT EXISTS write_wiki_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chapter_id INTEGER NOT NULL REFERENCES write_chapter(id) ON DELETE CASCADE,
      object_id INTEGER REFERENCES object(id) ON DELETE CASCADE,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(chapter_id,object_id)
    );
    CREATE TABLE IF NOT EXISTS write_word_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      wiki_id INTEGER NOT NULL REFERENCES write_wiki_link(id) ON DELETE CASCADE,
      text_link TEXT NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS write_note (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER NOT NULL REFERENCES write_project(id) ON DELETE CASCADE,
      notename TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS write_chat (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      note_id INTEGER NOT NULL REFERENCES write_note(id) ON DELETE CASCADE,
      chat TEXT NOT NULL,
      chat_order INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(note_id,chat_order)
    );

    -- Scribe (v2.8): markdown notes per nexus --
    CREATE TABLE IF NOT EXISTS note_folder (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      parent_ref INTEGER REFERENCES note_folder(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS note (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      folder_ref INTEGER REFERENCES note_folder(id) ON DELETE SET NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      color INTEGER REFERENCES use_color(id),
      pinned INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      migrated_v3 INTEGER NOT NULL DEFAULT 0,
      UNIQUE(nexus_ref,title)
    );

    -- Wiki-link index (v2.8): [[Name]] references parsed out of markdown
    -- content on save. Rebuildable from content (src/db/wiki.js).
    CREATE TABLE IF NOT EXISTS wiki_link (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER REFERENCES nexus(id) ON DELETE CASCADE,
      src_key TEXT NOT NULL,
      target_key TEXT,
      target_text TEXT NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- v3 module system (progress.md M1): module tree living in the Nexus
    -- nest, independent of the legacy project/world_project/game_project/
    -- write_project trees. parent_id NULL = Main module (top-level, freely
    -- reorderable via display_order), set = a nested module (locked one
    -- level under its parent). Every row in this tree, at any depth
    -- including the Main module itself, is a "Major module" \u2014 free-form
    -- content living inside one (a classifier's objects, a locator's areas,
    -- ...) is a "Minor element", a separate concept from this table.
    CREATE TABLE IF NOT EXISTS module (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      parent_id INTEGER REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      -- Optional short id a user can type instead of the name (Process 8 part 1).
      -- Unique per vault when set, NULLs stay free \u2014 enforced by the partial
      -- index idx_module_handle, created in migrations.js rather than here so
      -- pre-existing duplicate data can't abort the whole index pass.
      handle TEXT,
      kind TEXT NOT NULL CHECK(kind IN ('collector','manager','inspector','classifier',
        'locator','chronicler','wanderer','narrator','author','scribe','drafter',
        'viewer','connector','sketcher','designer')),
      icon TEXT,
      icon_color INTEGER REFERENCES use_color(id),
      color INTEGER REFERENCES use_color(id),
      description TEXT,
      display_order INTEGER NOT NULL DEFAULT 0,
      pinned INTEGER NOT NULL DEFAULT 0,
      cat_type TEXT CHECK(cat_type IN ('object','element','character')),
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Module Inspector (Phase 4): free-form attributes, per-kind UI spec
    -- (active view etc., populated from Phase 5 onward) and tag links.
    CREATE TABLE IF NOT EXISTS module_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      attr_name TEXT NOT NULL,
      attr_value TEXT,
      display_order INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS module_ui (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      ui_key TEXT NOT NULL,
      ui_value TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(module_ref, ui_key)
    );

    CREATE TABLE IF NOT EXISTS module_hashtag (
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      hashtag_id INTEGER NOT NULL REFERENCES hashtag(id) ON DELETE CASCADE,
      UNIQUE(module_ref, hashtag_id)
    );

    -- TimeMap "Wanderer" (Phase 9). A Link pin placed on the referenced
    -- Locator's map at (x,y); event_ref picks which Chronicler event sets
    -- the pin's displayed time. The wanderer's chosen Locator/Chronicler
    -- pair lives in module_ui (keys mapModule/timelineModule), so this row
    -- only carries the pin itself. area_ref optionally anchors the pin to
    -- an area for future use; deleting the event or area clears the ref
    -- instead of dropping the pin.
    CREATE TABLE IF NOT EXISTS map_event (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      event_ref INTEGER REFERENCES timeline_event(id) ON DELETE SET NULL,
      area_ref INTEGER REFERENCES map_area(id) ON DELETE SET NULL,
      label TEXT,
      linker_key TEXT,
      x REAL NOT NULL DEFAULT 0,
      y REAL NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Story "Narrator" (Phase 10). Module-scoped mirrors of the legacy
    -- game_story board (game_dialogue/game_conversation/game_storyline):
    -- Dialogue nodes at (x,y) on the route board, directed edges between
    -- them, and ordered conversation lines inside each node. Parallel
    -- schema, same reasoning as Classifier (progress.md Section C).
    CREATE TABLE IF NOT EXISTS story_dialogue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT,
      color INTEGER REFERENCES use_color(id),
      pos_x REAL NOT NULL DEFAULT 0,
      pos_y REAL NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS story_edge (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      from_ref INTEGER NOT NULL REFERENCES story_dialogue(id) ON DELETE CASCADE,
      to_ref INTEGER NOT NULL REFERENCES story_dialogue(id) ON DELETE CASCADE,
      label TEXT,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(from_ref, to_ref)
    );

    -- Process 8 part 2: a dialogue is an ordered list of two kinds of row --
    -- a spoken line ('talk') and a player 'choice'. They share this table and
    -- therefore share ONE talk_order sequence, which is what lets a choice be
    -- inserted anywhere between two lines. row_type carries no CHECK on
    -- purpose: SQLite's ALTER TABLE ADD COLUMN cannot take one, so a CHECK
    -- here would exist in fresh vaults and not in migrated ones -- the two
    -- values are enforced in electron/src/db/narrator.js instead.
    CREATE TABLE IF NOT EXISTS story_talk (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dialogue_ref INTEGER NOT NULL REFERENCES story_dialogue(id) ON DELETE CASCADE,
      speaker TEXT,
      linker_key TEXT,
      talk_sentence TEXT,
      row_type TEXT NOT NULL DEFAULT 'talk',
      talk_order INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- The options under one 'choice' row. effect_kind says which of the three
    -- effect shapes an option carries: 'text' is a plain consequence line
    -- ("+10 relation"), 'reply' is an extra spoken line appended after the
    -- choice, and 'jump' points at another dialogue -- a jump also owns a
    -- story_edge so the route board shows where the choice leads.
    CREATE TABLE IF NOT EXISTS story_choice_option (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      talk_ref INTEGER NOT NULL REFERENCES story_talk(id) ON DELETE CASCADE,
      option_text TEXT,
      effect_kind TEXT NOT NULL DEFAULT 'none',
      effect_text TEXT,
      jump_ref INTEGER REFERENCES story_dialogue(id) ON DELETE SET NULL,
      option_order INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Book "Author" (Phase 11). An Author module IS a book; its chapters
    -- carry the long-form markdown content (wikilink-indexed under the
    -- bchp_<id> key kind \u2014 see src/db/wiki.js).
    CREATE TABLE IF NOT EXISTS book_chapter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      chapter_label TEXT,
      chapter_content TEXT,
      chapter_order INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Chat "Scribe" (Phase 12). A Scribe module holds chat sessions
    -- ("1 session = 1 note", mockup 06); each session is a stream of
    -- timestamped bubble messages. Session content (the concatenated
    -- messages) is wikilink-indexed under the chss_<id> key kind.
    CREATE TABLE IF NOT EXISTS chat_session (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      session_order INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS chat_message (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_ref INTEGER NOT NULL REFERENCES chat_session(id) ON DELETE CASCADE,
      message TEXT NOT NULL,
      color INTEGER REFERENCES use_color(id),
      side TEXT DEFAULT 'r',
      create_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Drawing "Sketcher" (Phase 15). Freehand canvas pages: strokes are
    -- polylines (points = JSON [x,y,x,y,...]) drawn with pen; the eraser
    -- deletes whole strokes (never pixels). Pins are module-link chips
    -- anchored on the canvas by wiki key (linker_key).
    CREATE TABLE IF NOT EXISTS sketch_page (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      page_order INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS sketch_stroke (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page_ref INTEGER NOT NULL REFERENCES sketch_page(id) ON DELETE CASCADE,
      color TEXT,
      width REAL NOT NULL DEFAULT 3,
      points TEXT NOT NULL,
      create_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS sketch_pin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page_ref INTEGER NOT NULL REFERENCES sketch_page(id) ON DELETE CASCADE,
      linker_key TEXT NOT NULL,
      x REAL NOT NULL DEFAULT 0,
      y REAL NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Version control (Phase 21). Every hooked edit records a version row
    -- per module: action code + human detail + a JSON restore payload
    -- (the before-state). Restore re-applies that payload through a
    -- whitelisted op (src/db/versions.js) and records a NEW version \u2014
    -- history is never overwritten. Retention comes from app_setting
    -- 'versionLimit' (default 50), oldest pruned beyond it.
    CREATE TABLE IF NOT EXISTS module_version (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      seq INTEGER NOT NULL,
      action TEXT NOT NULL,
      detail TEXT,
      payload TEXT,
      create_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Import Dock (Phase 18). Files imported from a folder, listed in the
    -- hub section. linker_key optionally binds a file to a nest entity
    -- (module_5, cobj_3, ...); use_as_image marks an image file as that
    -- entity's display picture (cards / List+Detail / Grid).
    CREATE TABLE IF NOT EXISTS import_file (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      file_name TEXT NOT NULL,
      file_path TEXT NOT NULL,
      file_type TEXT,
      file_size INTEGER NOT NULL DEFAULT 0,
      folder TEXT,
      linker_key TEXT,
      use_as_image INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Graph "Designer" (Phase 16). Free-form diagram: shaped nodes
    -- (box/circle/diamond/text) at (x,y), optionally standing in for a
    -- vault entity via linker_key, and labeled directed edges.
    CREATE TABLE IF NOT EXISTS design_node (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      -- No CHECK on purpose (Process 8 part 2): the shape vocabulary lives in
      -- the renderer's DG_SHAPES, which is where a new shape is added, and a
      -- SQL allowlist here made every addition a table rebuild for every
      -- existing vault (SQLite cannot ALTER a CHECK).
      shape TEXT NOT NULL DEFAULT 'box',
      x REAL NOT NULL DEFAULT 0,
      y REAL NOT NULL DEFAULT 0,
      node_text TEXT,
      color TEXT,
      linker_key TEXT,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS design_edge (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      from_ref INTEGER NOT NULL REFERENCES design_node(id) ON DELETE CASCADE,
      to_ref INTEGER NOT NULL REFERENCES design_node(id) ON DELETE CASCADE,
      label TEXT,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(from_ref, to_ref)
    );

    -- Relation "Connector" (Phase 14). Labeled key->key relations between
    -- any two vault entities (cobj_3, module_5, bchp_1, ...), authored from
    -- the Connector's graph; the entities themselves stay read-only.
    -- Calendar templates (Process 8 part 1). A Chronicler's own calendar lives
    -- in module_ui.calendarConfig \u2014 it is per-module display config with no
    -- ids, which is what that JSON blob is for. Templates are the one part
    -- that must be SHARED across every module in the Nexus, which module_ui
    -- cannot express, so they get a real nexus-scoped table. spec holds the
    -- same JSON a module stores; builtin marks the seeded international
    -- calendar so the UI can offer it without letting it be renamed away.
    CREATE TABLE IF NOT EXISTS calendar_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      spec TEXT NOT NULL,
      builtin INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(nexus_ref, name)
    );

    CREATE TABLE IF NOT EXISTS entity_relation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nexus_ref INTEGER NOT NULL REFERENCES nexus(id) ON DELETE CASCADE,
      from_key TEXT NOT NULL,
      to_key TEXT NOT NULL,
      label TEXT,
      color INTEGER REFERENCES use_color(id),
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(from_key, to_key, label)
    );

    -- Category "Classifier" (Phase 5). A Classifier module IS its category --
    -- one 'classifier'-kind module row owns one set of objects/templates.
    -- Deliberately a *parallel* schema rather than reusing Director's
    -- object_category/object_template/object/object_attribute: those tables
    -- are read via INNER JOINs (wiki.js's obj resolver, Director's own
    -- project-scoped queries, relation.js, hashtag.js) that all assume every
    -- object belongs to a real legacy project row, so relaxing that would
    -- have meant auditing/patching every one of those call sites. See
    -- progress.md Section C for the full writeup of this decision.
    CREATE TABLE IF NOT EXISTS classifier_object (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      icon TEXT,
      color INTEGER REFERENCES use_color(id),
      note TEXT,
      display_order INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- object_ref NULL = shared category template (Object/Element default);
    -- set = the one private attribute a Character-type object may carry.
    CREATE TABLE IF NOT EXISTS classifier_template (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
      object_ref INTEGER REFERENCES classifier_object(id) ON DELETE CASCADE,
      description TEXT NOT NULL,
      attribute_type TEXT DEFAULT 'text',
      levelable INTEGER NOT NULL DEFAULT 0,
      has_condition INTEGER NOT NULL DEFAULT 0,
      level_steps TEXT,
      display_order INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS classifier_attribute (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      object_ref INTEGER NOT NULL REFERENCES classifier_object(id) ON DELETE CASCADE,
      template_ref INTEGER NOT NULL REFERENCES classifier_template(id) ON DELETE CASCADE,
      attribute_value TEXT,
      condition_value TEXT,
      update_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(object_ref, template_ref)
    );

    -- Per-element level/condition rows (Process 8 part 1). Supersedes
    -- classifier_template.level_steps, which defined one shared set of stages
    -- for the whole classifier: stages are now authored per element, and
    -- level_label is free text rather than a number. Which columns the UI
    -- shows depends on the template's flags \u2014 levelable: level+info,
    -- has_condition: condition+info, both: level+condition+info.
    CREATE TABLE IF NOT EXISTS classifier_level (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      object_ref INTEGER NOT NULL REFERENCES classifier_object(id) ON DELETE CASCADE,
      template_ref INTEGER NOT NULL REFERENCES classifier_template(id) ON DELETE CASCADE,
      level_label TEXT,
      condition_value TEXT,
      info_value TEXT,
      display_order INTEGER NOT NULL DEFAULT 0,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );


`;as.exports={VAULT_SCHEMA_VERSION:4,VAULT_DDL_SQL:rp}});var ls=H((HL,cs)=>{"use strict";A();var is=`
    CREATE TABLE IF NOT EXISTS use_color (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      color_code TEXT UNIQUE NOT NULL,
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    INSERT OR IGNORE INTO use_color (color_code) VALUES
      ('#6366f1'),('#8b5cf6'),('#ec4899'),('#f43f5e'),
      ('#f97316'),('#eab308'),('#22c55e'),('#06b6d4'),
      ('#3b82f6'),('#64748b'),('#a78bfa'),('#34d399'),
      ('#fb923c'),('#f472b6'),('#38bdf8'),('#a3e635');

    CREATE TABLE IF NOT EXISTS app_setting (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    -- The vault index (v4.9.0). One row per Nexus, holding everything the
    -- Welcome window needs to draw the list WITHOUT opening a single vault
    -- file \u2014 name, colour, and a cached item count refreshed whenever that
    -- vault is open. Opening N databases to render a list of N rows would be
    -- unacceptable, and would fail outright for a vault on a disconnected
    -- drive.
    --
    -- id is the SAME id as the single "nexus" row inside the vault file, and
    -- the same id the renderer already passes around (?nexus=<id>, the MRU
    -- list, window:openNexus) \u2014 so nothing downstream has to learn a new
    -- identifier. AUTOINCREMENT so an id is never REUSED after a delete: a
    -- reused id would collide with a stale vault file the user later re-adds.
    --
    -- file_path NULL means: still inside the pre-split single database. The
    -- split migration fills it in. color_code is stored literally rather than
    -- as a use_color FK because a vault's colour has to be readable with no
    -- vault open.
    CREATE TABLE IF NOT EXISTS nexus_file (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      memo TEXT,
      color_code TEXT,
      file_path TEXT UNIQUE,
      project_count INTEGER NOT NULL DEFAULT 0,
      counts_at TEXT,
      last_opened_at TEXT,
      missing INTEGER NOT NULL DEFAULT 0,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- Plugins (v4.0.0 as "Github extensions", renamed v4.2.0 \u2014 see
    -- migratePluginV42 in schema/migrations.js): a downloaded plugin owns its
    -- own plg_<key>_<name> table(s), tracked here so src/db/plugin.js can
    -- enforce ownership before any dynamic SQL touches a plugin-derived
    -- identifier. table_name is the ONLY identifier ever spliced into a query
    -- \u2014 always resolved by ?-bound lookup on (plugin_ref, local_name), never
    -- reconstructed by string concatenation from renderer/plugin-window input.
    CREATE TABLE IF NOT EXISTS plugin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      plugin_key TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      version TEXT,
      repo_host TEXT NOT NULL DEFAULT 'github',
      repo_owner TEXT NOT NULL,
      repo_name TEXT NOT NULL,
      repo_ref TEXT NOT NULL DEFAULT 'main',
      entry_html TEXT NOT NULL,
      manifest_json TEXT NOT NULL,
      installed_at TEXT NOT NULL DEFAULT (datetime('now')),
      update_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS plugin_table (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      plugin_ref INTEGER NOT NULL REFERENCES plugin(id) ON DELETE CASCADE,
      local_name TEXT NOT NULL,
      table_name TEXT NOT NULL UNIQUE,
      columns_json TEXT NOT NULL,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(plugin_ref, local_name)
    );

    -- One row per entry in a plugin manifest's "dependencies" array, resolved
    -- at install time. manifest_json already holds the raw URLs, but "is this
    -- dependency installed?" needs the plugin id a URL resolves to, and that
    -- costs a network fetch \u2014 so the resolution is recorded here once and the
    -- check stays local SQL afterwards. dep_key NULL means the URL could not
    -- be resolved at install time (fail_code says why); such a row counts as
    -- missing, so the plugin stays un-launchable until the user retries it.
    -- (No backticks in this file \u2014 DDL_SQL is one template literal.)
    -- Packages installed from ZYDRAXYL/DraconDex-PKG (themes, locales, view
    -- presets). App-level like plugin/app_setting, NOT vault-level: a package
    -- belongs to the install, not to one Nexus, so it deliberately stays out of
    -- the shared vault.sql the Flutter side also generates from.
    --
    -- payload_json holds the whole payload rather than a path on disk. These
    -- are a few KB of JSON, they are read at boot on every start, and keeping
    -- them in the DB means an install is one transaction that either happened
    -- or did not \u2014 no half-written file to reconcile.
    --
    -- source_sha256 is the hash the catalog declared, recorded so a later
    -- integrity re-check can tell "this payload was tampered with on disk"
    -- apart from "PKG republished this package".
    CREATE TABLE IF NOT EXISTS installed_package (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pkg_id TEXT NOT NULL UNIQUE,
      kind TEXT NOT NULL,
      name TEXT NOT NULL,
      version TEXT NOT NULL,
      display_json TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      source_repo TEXT NOT NULL,
      source_release TEXT NOT NULL,
      source_asset TEXT NOT NULL,
      source_sha256 TEXT NOT NULL,
      enabled INTEGER NOT NULL DEFAULT 1,
      installed_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS plugin_dependency (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      plugin_ref INTEGER NOT NULL REFERENCES plugin(id) ON DELETE CASCADE,
      dep_url TEXT NOT NULL,
      dep_key TEXT,
      dep_name TEXT,
      fail_code TEXT,
      create_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(plugin_ref, dep_url)
    );
`,{VAULT_DDL_SQL:ss}=hn(),op=is+ss;cs.exports={APP_DDL_SQL:is,VAULT_DDL_SQL:ss,DDL_SQL:op}});var Rn=H((BL,ds)=>{"use strict";A();var np=`
    -- Director
    CREATE INDEX IF NOT EXISTS idx_project_nexus             ON project(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_world_project_nexus       ON world_project(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_game_project_nexus        ON game_project(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_write_project_nexus       ON write_project(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_project_folder            ON project(folder_id);
    CREATE INDEX IF NOT EXISTS idx_project_description_proj  ON project_description(project_id);
    CREATE INDEX IF NOT EXISTS idx_object_category_project   ON object_category(project_id);
    CREATE INDEX IF NOT EXISTS idx_object_template_category  ON object_template(category_id);
    CREATE INDEX IF NOT EXISTS idx_object_project            ON object(project_id);
    CREATE INDEX IF NOT EXISTS idx_object_category           ON object(category_id);
    CREATE INDEX IF NOT EXISTS idx_object_attribute_template ON object_attribute(template_id);
    CREATE INDEX IF NOT EXISTS idx_timeline_project          ON timeline(project_id);
    CREATE INDEX IF NOT EXISTS idx_timeline_module            ON timeline(module_ref);
    CREATE INDEX IF NOT EXISTS idx_timeline_event_timeline   ON timeline_event(timeline_id);
    CREATE INDEX IF NOT EXISTS idx_timeline_event_start      ON timeline_event(start_at);
    CREATE INDEX IF NOT EXISTS idx_timeline_event_end        ON timeline_event(end_at);
    CREATE INDEX IF NOT EXISTS idx_map_project               ON map(project_id);
    CREATE INDEX IF NOT EXISTS idx_map_module                ON map(module_ref);
    CREATE INDEX IF NOT EXISTS idx_map_area_map              ON map_area(map_id);
    CREATE INDEX IF NOT EXISTS idx_map_point_area            ON map_point(area_id);
    CREATE INDEX IF NOT EXISTS idx_relation_project          ON relation(project_id);
    CREATE INDEX IF NOT EXISTS idx_relation_type_ref         ON relation(relation_type);
    CREATE INDEX IF NOT EXISTS idx_relation_obob_relation    ON relation_obob(relation_id);
    CREATE INDEX IF NOT EXISTS idx_relation_obob_from        ON relation_obob(object_from);
    CREATE INDEX IF NOT EXISTS idx_relation_obob_to          ON relation_obob(object_to);
    CREATE INDEX IF NOT EXISTS idx_relation_obtl_relation    ON relation_obtl(relation_id);
    CREATE INDEX IF NOT EXISTS idx_relation_obtl_from        ON relation_obtl(object_from);
    CREATE INDEX IF NOT EXISTS idx_relation_obtl_to          ON relation_obtl(timeline_to);
    CREATE INDEX IF NOT EXISTS idx_relation_tltl_relation    ON relation_tltl(relation_id);
    CREATE INDEX IF NOT EXISTS idx_relation_tltl_from        ON relation_tltl(timeline_from);
    CREATE INDEX IF NOT EXISTS idx_relation_tltl_to          ON relation_tltl(timeline_to);
    CREATE INDEX IF NOT EXISTS idx_project_hashtag_tag       ON project_hashtag(hashtag_id);
    CREATE INDEX IF NOT EXISTS idx_object_hashtag_tag        ON object_hashtag(hashtag_id);
    CREATE INDEX IF NOT EXISTS idx_event_hashtag_tag         ON event_hashtag(hashtag_id);

    -- Navigator (World)
    CREATE INDEX IF NOT EXISTS idx_world_novel_project       ON world_novel(project_ref);
    CREATE INDEX IF NOT EXISTS idx_world_character_world     ON world_character(world_ref);
    CREATE INDEX IF NOT EXISTS idx_world_char_cat_category   ON world_character_category(category_ref);
    CREATE INDEX IF NOT EXISTS idx_world_char_link_object    ON world_character_link(object_ref);
    CREATE INDEX IF NOT EXISTS idx_world_category_category   ON world_category(category_ref);
    CREATE INDEX IF NOT EXISTS idx_world_object_object       ON world_object(object_ref);
    CREATE INDEX IF NOT EXISTS idx_world_object_symbol       ON world_object(symbol_ref);
    CREATE INDEX IF NOT EXISTS idx_world_map_map             ON world_map(map_ref);
    CREATE INDEX IF NOT EXISTS idx_world_map_area_area       ON world_map_area(area_ref);
    CREATE INDEX IF NOT EXISTS idx_world_map_point_point     ON world_map_point(point_ref);
    CREATE INDEX IF NOT EXISTS idx_world_timeline_world      ON world_timeline(world_ref);
    CREATE INDEX IF NOT EXISTS idx_world_timeline_map        ON world_timeline(world_map_ref);
    CREATE INDEX IF NOT EXISTS idx_world_tl_event_date       ON world_timeline_event(date_ref);
    CREATE INDEX IF NOT EXISTS idx_world_tl_object_object    ON world_timeline_object(world_object_ref);
    CREATE INDEX IF NOT EXISTS idx_world_tl_object_char      ON world_timeline_object(world_character_ref);
    CREATE INDEX IF NOT EXISTS idx_world_tl_object_point     ON world_timeline_object(point_ref);
    CREATE INDEX IF NOT EXISTS idx_world_orig_cat_world      ON world_orig_category(world_ref);
    CREATE INDEX IF NOT EXISTS idx_world_orig_tmpl_category  ON world_orig_template(category_id);
    CREATE INDEX IF NOT EXISTS idx_world_orig_obj_world      ON world_orig_object(world_ref);
    CREATE INDEX IF NOT EXISTS idx_world_orig_obj_category   ON world_orig_object(category_id);
    CREATE INDEX IF NOT EXISTS idx_world_orig_attr_template  ON world_orig_attribute(template_id);
    CREATE INDEX IF NOT EXISTS idx_world_description_world   ON world_description(world_ref);
    CREATE INDEX IF NOT EXISTS idx_world_tag_tag             ON world_tag(hashtag_id);
    CREATE INDEX IF NOT EXISTS idx_world_char_tag_tag        ON world_charactor_tag(hashtag_id);

    -- Hero (Game)
    CREATE INDEX IF NOT EXISTS idx_game_category_category    ON game_category(category_ref);
    CREATE INDEX IF NOT EXISTS idx_game_cat_object_object    ON game_cat_object(object_ref);
    CREATE INDEX IF NOT EXISTS idx_game_character_game       ON game_character(game_ref);
    CREATE INDEX IF NOT EXISTS idx_game_character_objlink    ON game_character(object_link);
    CREATE INDEX IF NOT EXISTS idx_game_char_template_game   ON game_char_template(game_ref);
    CREATE INDEX IF NOT EXISTS idx_game_char_attr_template   ON game_char_attribute(template_ref);
    CREATE INDEX IF NOT EXISTS idx_game_collection_game      ON game_collection(game_ref);
    CREATE INDEX IF NOT EXISTS idx_game_col_template_col     ON game_col_template(collection_ref);
    CREATE INDEX IF NOT EXISTS idx_game_col_element_col      ON game_col_element(collection_ref);
    CREATE INDEX IF NOT EXISTS idx_game_col_attr_template    ON game_col_attribute(template_ref);
    CREATE INDEX IF NOT EXISTS idx_game_char_element_element ON game_char_element(element_ref);
    CREATE INDEX IF NOT EXISTS idx_game_story_game           ON game_story(game_ref);
    CREATE INDEX IF NOT EXISTS idx_game_dialogue_story       ON game_dialogue(story_ref);
    CREATE INDEX IF NOT EXISTS idx_game_conversation_char    ON game_conversation(char_ref);
    CREATE INDEX IF NOT EXISTS idx_game_storyline_story      ON game_storyline(story_ref);
    CREATE INDEX IF NOT EXISTS idx_game_storyline_to         ON game_storyline(to_ref);
    CREATE INDEX IF NOT EXISTS idx_game_project_hashtag_tag  ON game_project_hashtag(hashtag_id);
    CREATE INDEX IF NOT EXISTS idx_game_char_hashtag_tag     ON game_char_hashtag(hashtag_id);
    CREATE INDEX IF NOT EXISTS idx_game_element_hashtag_tag  ON game_element_hashtag(hashtag_id);

    -- Writer (v2.7)
    CREATE INDEX IF NOT EXISTS idx_write_series_project      ON write_series(project_id);
    CREATE INDEX IF NOT EXISTS idx_write_book_series         ON write_book(series_id);
    CREATE INDEX IF NOT EXISTS idx_write_novel_link_novel    ON write_novel_link(novel_id);
    CREATE INDEX IF NOT EXISTS idx_write_wiki_link_object    ON write_wiki_link(object_id);
    CREATE INDEX IF NOT EXISTS idx_write_word_link_wiki      ON write_word_link(wiki_id);
    CREATE INDEX IF NOT EXISTS idx_write_note_project        ON write_note(project_id);

    -- Scribe (v2.8)
    CREATE INDEX IF NOT EXISTS idx_note_nexus                ON note(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_note_folder_ref           ON note(folder_ref);
    CREATE INDEX IF NOT EXISTS idx_note_folder_nexus         ON note_folder(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_note_folder_parent        ON note_folder(parent_ref);
    CREATE INDEX IF NOT EXISTS idx_wiki_link_src             ON wiki_link(src_key);
    CREATE INDEX IF NOT EXISTS idx_wiki_link_target          ON wiki_link(target_key);

    -- Module system (v3)
    CREATE INDEX IF NOT EXISTS idx_module_nexus            ON module(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_module_parent           ON module(parent_id);
    CREATE INDEX IF NOT EXISTS idx_module_attribute_module ON module_attribute(module_ref);
    CREATE INDEX IF NOT EXISTS idx_module_ui_module        ON module_ui(module_ref);
    CREATE INDEX IF NOT EXISTS idx_module_hashtag_tag      ON module_hashtag(hashtag_id);

    -- Classifier (Phase 5)
    CREATE INDEX IF NOT EXISTS idx_classifier_object_module    ON classifier_object(module_ref);
    CREATE INDEX IF NOT EXISTS idx_classifier_template_module  ON classifier_template(module_ref);
    CREATE INDEX IF NOT EXISTS idx_classifier_template_object  ON classifier_template(object_ref);
    CREATE INDEX IF NOT EXISTS idx_classifier_attribute_object ON classifier_attribute(object_ref);
    CREATE INDEX IF NOT EXISTS idx_classifier_attribute_tmpl   ON classifier_attribute(template_ref);
    CREATE INDEX IF NOT EXISTS idx_classifier_level_object   ON classifier_level(object_ref, template_ref);

    -- FK columns that were queried in WHERE/JOIN but had no index. These matter
    -- twice over: once for the lookups themselves, and once because
    -- foreign_keys=ON with ON DELETE CASCADE makes SQLite full-scan every child
    -- table on each parent-row delete when its FK column is unindexed.
    CREATE INDEX IF NOT EXISTS idx_book_chapter_module    ON book_chapter(module_ref);
    CREATE INDEX IF NOT EXISTS idx_chat_session_module    ON chat_session(module_ref);
    CREATE INDEX IF NOT EXISTS idx_chat_message_session   ON chat_message(session_ref);
    CREATE INDEX IF NOT EXISTS idx_story_dialogue_module  ON story_dialogue(module_ref);
    CREATE INDEX IF NOT EXISTS idx_story_talk_dialogue    ON story_talk(dialogue_ref);
    CREATE INDEX IF NOT EXISTS idx_story_edge_module      ON story_edge(module_ref);
    CREATE INDEX IF NOT EXISTS idx_story_choice_opt_talk  ON story_choice_option(talk_ref);
    CREATE INDEX IF NOT EXISTS idx_design_node_module     ON design_node(module_ref);
    CREATE INDEX IF NOT EXISTS idx_design_edge_module     ON design_edge(module_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_page_module     ON sketch_page(module_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_stroke_page     ON sketch_stroke(page_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_pin_page        ON sketch_pin(page_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_module       ON map_event(module_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_event        ON map_event(event_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_area         ON map_event(area_ref);
    -- Not optional: with foreign_keys=ON, an unindexed FK makes SQLite
    -- full-scan this table on every nexus-row delete.
    CREATE INDEX IF NOT EXISTS idx_calendar_template_nexus ON calendar_template(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_entity_relation_nexus  ON entity_relation(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_wiki_link_nexus        ON wiki_link(nexus_ref);
    -- Composite on purpose: _recordVersion does MAX(seq) WHERE module_ref=? and
    -- ORDER BY seq DESC LIMIT ? in its prune subquery, so this covers both and
    -- turns 3 full scans per edit into 3 seeks.
    CREATE INDEX IF NOT EXISTS idx_module_version_module  ON module_version(module_ref, seq);
    -- Composite matches addImportFiles' dedupe probe exactly (nexus_ref + file_path).
    CREATE INDEX IF NOT EXISTS idx_import_file_nexus      ON import_file(nexus_ref, file_path);
`;ds.exports={INDEX_SQL:np}});var Sn=H(($L,Es)=>{"use strict";A();var ap=["\u2694\uFE0F Sword","\u{1F6E1}\uFE0F Shield","\u{1F3F9} Bow","\u{1F5E1}\uFE0F Dagger","\u{1F525} Fire","\u{1F4A7} Water","\u{1F33F} Nature","\u26A1 Lightning","\u{1F319} Moon","\u2600\uFE0F Sun","\u2B50 Star","\u{1F451} Crown","\u{1F480} Skull","\u{1F52E} Orb","\u{1F4DC} Scroll","\u{1F48E} Gem","\u{1F409} Dragon","\u{1F981} Lion","\u{1F43A} Wolf","\u{1F985} Eagle","\u{1F3F0} Castle","\u2693 Anchor","\u{1F56F}\uFE0F Candle","\u2696\uFE0F Scale","\u{1FA84} Magic","\u{1F9FF} Talisman","\u{1FAB6} Feather","\u{1F573}\uFE0F Portal","\u{1F9ED} Compass","\u{1FAA8} Stone","\u{1F30A} Wave","\u{1F32A}\uFE0F Storm","\u{1F338} Bloom","\u{1F33E} Grain","\u{1F340} Clover","\u{1FA90} Planet","\u{1F9E9} Puzzle","\u{1FA99} Coin","\u{1F511} Key","\u{1F9F1} Brick","\u{1F6F6} Boat","\u{1F9FA} Basket","\u{1F9EC} DNA","\u{1FAE7} Bubble","\u{1FA9E} Mirror","\u{1F4E1} Signal","\u{1F9EF} Extinguisher","\u{1F5DD}\uFE0F Key"];Es.exports={SEED_SYMBOLS:ap}});var On=H((VL,gs)=>{"use strict";A();var{hasTable:ae,hasColumn:Q}=et(),{INDEX_SQL:ip}=Rn(),{SEED_SYMBOLS:sp}=Sn();function cp(e){if(!Q(e,"module","cat_type"))try{e.prepare("ALTER TABLE module ADD COLUMN cat_type TEXT CHECK(cat_type IN ('object','element','character'))").run()}catch{}if(!Q(e,"module","pinned"))try{e.prepare("ALTER TABLE module ADD COLUMN pinned INTEGER NOT NULL DEFAULT 0").run()}catch{}if(!Q(e,"module","handle"))try{e.prepare("ALTER TABLE module ADD COLUMN handle TEXT").run()}catch{}try{e.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_module_handle ON module(nexus_ref, handle COLLATE NOCASE) WHERE handle IS NOT NULL").run()}catch{}if(ps(e),_s(e),ms(e),fs(e),!Q(e,"relation_type","color"))try{e.prepare("ALTER TABLE relation_type ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"classifier_object","icon"))try{e.prepare("ALTER TABLE classifier_object ADD COLUMN icon TEXT").run()}catch{}if(!Q(e,"timeline_event","icon"))try{e.prepare("ALTER TABLE timeline_event ADD COLUMN icon TEXT").run()}catch{}if(!Q(e,"map_event","linker_key"))try{e.prepare("ALTER TABLE map_event ADD COLUMN linker_key TEXT").run()}catch{}if(!Q(e,"chat_message","color"))try{e.prepare("ALTER TABLE chat_message ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"chat_message","side"))try{e.prepare("ALTER TABLE chat_message ADD COLUMN side TEXT DEFAULT 'r'").run()}catch{}if(!Q(e,"story_talk","linker_key"))try{e.prepare("ALTER TABLE story_talk ADD COLUMN linker_key TEXT").run()}catch{}if(!Q(e,"story_dialogue","description"))try{e.prepare("ALTER TABLE story_dialogue ADD COLUMN description TEXT").run()}catch{}if(!Q(e,"story_talk","row_type"))try{e.prepare("ALTER TABLE story_talk ADD COLUMN row_type TEXT NOT NULL DEFAULT 'talk'").run()}catch{}if(!Q(e,"book_chapter","chapter_label"))try{e.prepare("ALTER TABLE book_chapter ADD COLUMN chapter_label TEXT").run()}catch{}if(!Q(e,"classifier_template","level_steps"))try{e.prepare("ALTER TABLE classifier_template ADD COLUMN level_steps TEXT").run()}catch{}if(!Q(e,"classifier_attribute","condition_value"))try{e.prepare("ALTER TABLE classifier_attribute ADD COLUMN condition_value TEXT").run()}catch{}if(!Q(e,"entity_relation","color"))try{e.prepare("ALTER TABLE entity_relation ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(ae(e,"world_project")&&!Q(e,"world_project","color"))try{e.prepare("ALTER TABLE world_project ADD COLUMN color INTEGER REFERENCES use_color(id)").run(),Q(e,"world_project","color_ref")&&e.prepare("UPDATE world_project SET color=color_ref WHERE color IS NULL").run()}catch{}for(let o of["project","world_project","game_project","write_project","note"])if(ae(e,o)&&!Q(e,o,"migrated_v3"))try{e.prepare(`ALTER TABLE ${o} ADD COLUMN migrated_v3 INTEGER NOT NULL DEFAULT 0`).run()}catch{}if(ae(e,"world_novel")&&!Q(e,"world_novel","char_category_ref"))try{e.prepare("ALTER TABLE world_novel ADD COLUMN char_category_ref INTEGER REFERENCES object_category(id) ON DELETE SET NULL").run()}catch{}if(ae(e,"world_object")&&!Q(e,"world_object","symbol_ref"))try{e.prepare("ALTER TABLE world_object ADD COLUMN symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL").run()}catch{}if(ae(e,"symbol_collection")&&e.transaction(()=>{let o=e.prepare("INSERT OR IGNORE INTO symbol_collection (glyph,label) VALUES (?,?)");for(let n of sp){let[a,...i]=n.split(" ");o.run(a,i.join(" "))}})(),e.prepare("PRAGMA table_info(timeline_event)").all().some(o=>o.name==="story")||e.prepare("ALTER TABLE timeline_event ADD COLUMN story TEXT").run(),!e.prepare("PRAGMA table_info(object)").all().some(o=>o.name==="note"))try{e.prepare("ALTER TABLE object ADD COLUMN note TEXT").run()}catch{}Ns(e),Ts(e),us(e)}var no=["project","world_project","game_project","write_project"];function us(e){try{for(let r of no)if(ae(e,r)&&!Q(e,r,"nexus_ref"))try{e.prepare(`ALTER TABLE ${r} ADD COLUMN nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL`).run()}catch{}if(no.some(r=>ae(e,r)&&e.prepare(`SELECT 1 FROM ${r} WHERE nexus_ref IS NULL LIMIT 1`).get())){let r=e.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get();r||(r={id:e.prepare("INSERT INTO nexus (name) VALUES ('Nexus')").run().lastInsertRowid});for(let o of no)ae(e,o)&&e.prepare(`UPDATE ${o} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(r.id)}}catch(t){console.error("Nexus v2.8 migration error:",t)}}function ps(e){if(!(!ae(e,"classifier_level")||!ae(e,"classifier_attribute")))try{e.prepare(`
      INSERT INTO classifier_level (object_ref, template_ref, level_label, condition_value, info_value, display_order)
      SELECT ca.object_ref, ca.template_ref, ca.attribute_value, ca.condition_value, NULL, 0
      FROM classifier_attribute ca
      JOIN classifier_template ct ON ct.id = ca.template_ref
      WHERE (ct.levelable = 1 OR ct.has_condition = 1)
        AND (COALESCE(ca.attribute_value,'') <> '' OR COALESCE(ca.condition_value,'') <> '')
        AND NOT EXISTS (
          SELECT 1 FROM classifier_level cl
          WHERE cl.object_ref = ca.object_ref AND cl.template_ref = ca.template_ref
        )
    `).run()}catch(t){console.error("Classifier level migration error:",t)}}function _s(e){if(ae(e,"design_node"))try{let t=e.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name='design_node'").get();if(!t||!/CHECK\s*\(\s*shape/i.test(t.sql||""))return;e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
      CREATE TABLE design_node_new (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        module_ref INTEGER NOT NULL REFERENCES module(id) ON DELETE CASCADE,
        shape TEXT NOT NULL DEFAULT 'box',
        x REAL NOT NULL DEFAULT 0,
        y REAL NOT NULL DEFAULT 0,
        node_text TEXT,
        color TEXT,
        linker_key TEXT,
        create_at TEXT NOT NULL DEFAULT (datetime('now')),
        update_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      INSERT INTO design_node_new (id, module_ref, shape, x, y, node_text, color, linker_key, create_at, update_at)
        SELECT id, module_ref, shape, x, y, node_text, color, linker_key, create_at, update_at FROM design_node;
      DROP TABLE design_node;
      ALTER TABLE design_node_new RENAME TO design_node;
    `),e.exec("PRAGMA foreign_keys = ON")}catch(t){console.error("design_node shape migration error:",t)}}function ms(e){if(!(!ae(e,"map")||Q(e,"map","module_ref")))try{e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
      CREATE TABLE map_new (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        map_name TEXT,
        project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
        module_ref INTEGER REFERENCES module(id) ON DELETE CASCADE,
        color INTEGER REFERENCES use_color(id),
        update_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      INSERT INTO map_new (id, map_name, project_id, color, update_at)
        SELECT id, map_name, project_id, color, update_at FROM map;
      DROP TABLE map;
      ALTER TABLE map_new RENAME TO map;
    `),e.exec("PRAGMA foreign_keys = ON")}catch(t){console.error("Map v3 migration error:",t)}}function fs(e){if(!(!ae(e,"timeline")||Q(e,"timeline","module_ref")))try{e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
      CREATE TABLE timeline_new (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        line_name TEXT,
        project_id INTEGER REFERENCES project(id) ON DELETE CASCADE,
        module_ref INTEGER REFERENCES module(id) ON DELETE CASCADE,
        color INTEGER REFERENCES use_color(id),
        update_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
      INSERT INTO timeline_new (id, line_name, project_id, color, update_at)
        SELECT id, line_name, project_id, color, update_at FROM timeline;
      DROP TABLE timeline;
      ALTER TABLE timeline_new RENAME TO timeline;
    `),e.exec("PRAGMA foreign_keys = ON")}catch(t){console.error("Timeline v3 migration error:",t)}}function Ts(e){try{if(!ae(e,"library_project"))return;e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
      DROP TABLE IF EXISTS document_hashtag;
      DROP TABLE IF EXISTS library_document;
      DROP TABLE IF EXISTS series_hashtag;
      DROP TABLE IF EXISTS series_object_link;
      DROP TABLE IF EXISTS series_char_link;
      DROP TABLE IF EXISTS series_novel_link;
      DROP TABLE IF EXISTS series_description;
      DROP TABLE IF EXISTS library_series;
      DROP TABLE IF EXISTS library_world_link;
      DROP TABLE IF EXISTS library_description;
      DROP TABLE IF EXISTS library_project;
    `),e.exec("PRAGMA foreign_keys = ON")}catch{}}function lp(e){e.exec(ip)}function Ns(e){try{if(!Q(e,"game_project","codename"))try{e.prepare("ALTER TABLE game_project ADD COLUMN codename TEXT").run()}catch{}if(!Q(e,"game_character","object_link"))try{e.prepare("ALTER TABLE game_character ADD COLUMN object_link INTEGER REFERENCES game_cat_object(id) ON DELETE SET NULL").run()}catch{}if(!Q(e,"game_character","color_ref"))try{e.prepare("ALTER TABLE game_character ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_story","color_ref"))try{e.prepare("ALTER TABLE game_story ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_dialogue","color_ref"))try{e.prepare("ALTER TABLE game_dialogue ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_storyline","symbol_ref"))try{e.prepare("ALTER TABLE game_storyline ADD COLUMN symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL").run()}catch{}if(!Q(e,"game_storyline","symbol"))try{e.prepare("ALTER TABLE game_storyline ADD COLUMN symbol TEXT").run()}catch{}try{e.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_game_novel_link_project ON game_novel_link(project_ref)").run()}catch{}ae(e,"game_item_category")&&(e.prepare("INSERT OR IGNORE INTO game_collection (id,game_ref,name) SELECT id,game_ref,name FROM game_item_category").run(),e.prepare("INSERT OR IGNORE INTO game_col_template (id,collection_ref,attribute_name,attribute_type) SELECT id,item_cat_ref,attr_name,CASE WHEN attr_type='number' THEN 'num' ELSE 'text' END FROM game_item_template").run(),e.prepare("INSERT OR IGNORE INTO game_col_element (id,collection_ref,name) SELECT id,item_cat_ref,name FROM game_item").run(),e.prepare("INSERT OR IGNORE INTO game_col_attribute (element_ref,template_ref,attribute_text,level) SELECT item_ref,template_ref,value,0 FROM game_item_attr").run(),e.prepare("INSERT OR IGNORE INTO game_element_hashtag (element_id,hashtag_id) SELECT item_id,hashtag_id FROM game_item_hashtag").run()),ae(e,"game_dial_line")&&e.prepare(`INSERT OR IGNORE INTO game_conversation (dialogue_ref,char_ref,talk_sentence,talk_order)
        SELECT dial_ref, speaker_ref, text, ROW_NUMBER() OVER (PARTITION BY dial_ref ORDER BY order_index, id)-1 FROM game_dial_line`).run(),ae(e,"game_dial_next")&&e.prepare(`INSERT OR IGNORE INTO game_storyline (story_ref,from_ref,to_ref)
        SELECT gd.story_ref, gdn.from_ref, gdn.to_ref FROM game_dial_next gdn JOIN game_dialogue gd ON gd.id=gdn.from_ref`).run();for(let t of["game_dial_line","game_dial_next","game_item_attr","game_item_hashtag","game_item","game_item_template","game_item_category","game_stat_levelup","game_stat_template","game_char_link","game_function","game_func_category","game_description"])if(ae(e,t))try{e.prepare(`DROP TABLE ${t}`).run()}catch{}}catch(t){console.error("Hero v2.6 migration error:",t)}}var dp=/^ext_[a-z0-9_]{1,41}$/,Ep=/^plg_[a-z0-9_]{1,41}$/;function up(e){try{if(ae(e,"extension")&&!ae(e,"plugin")&&(e.prepare("ALTER TABLE extension RENAME TO plugin").run(),e.prepare("ALTER TABLE plugin RENAME COLUMN ext_key TO plugin_key").run(),ae(e,"extension_table")&&(e.prepare("ALTER TABLE extension_table RENAME TO plugin_table").run(),e.prepare("ALTER TABLE plugin_table RENAME COLUMN extension_ref TO plugin_ref").run())),ae(e,"plugin")&&!Q(e,"plugin","repo_host")&&e.prepare("ALTER TABLE plugin ADD COLUMN repo_host TEXT NOT NULL DEFAULT 'github'").run(),ae(e,"plugin_table")){let t=e.prepare("SELECT id, table_name FROM plugin_table WHERE table_name LIKE 'ext\\_%' ESCAPE '\\'").all();for(let r of t){let o=String(r.table_name||""),n=`plg_${o.slice(4)}`;!dp.test(o)||!Ep.test(n)||!ae(e,o)||ae(e,n)||(e.prepare(`ALTER TABLE ${o} RENAME TO ${n}`).run(),e.prepare("UPDATE plugin_table SET table_name=? WHERE id=?").run(n,r.id))}}}catch(t){console.error("plugin v4.2 migration error:",t)}}gs.exports={migrateInlineColumns:cp,NEXUS_PROJECT_TABLES:no,migrateNexusV28:us,migrateMapV3:ms,migrateTimelineV3:fs,migrateWriterV27:Ts,ensureIndexes:lp,migrateHeroV26:Ns,migratePluginV42:up,migrateClassifierLevels:ps,migrateDesignNodeShapes:_s}});var tt={};ze(tt,{createHash:()=>Os,default:()=>Tp,randomBytes:()=>hs,randomInt:()=>Ss,randomUUID:()=>Rs,webcrypto:()=>Ls});function hs(e){let t=new Uint8Array(e);return crypto.getRandomValues(t),Oe.from(t)}function Ss(e,t){let[r,o]=t===void 0?[0,e]:[e,t],n=o-r,a=new Uint32Array(1);return crypto.getRandomValues(a),r+a[0]%n}function _p(e){let t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),r=e.length*8,o=new Uint8Array((e.length+9>>6)+1<<6);o.set(e),o[e.length]=128,new DataView(o.buffer).setUint32(o.length-4,r>>>0,!1),new DataView(o.buffer).setUint32(o.length-8,Math.floor(r/2**32),!1);let n=new Uint32Array(64),a=new DataView(o.buffer);for(let u=0;u<o.length;u+=64){for(let f=0;f<16;f++)n[f]=a.getUint32(u+f*4,!1);for(let f=16;f<64;f++){let y=He(n[f-15],7)^He(n[f-15],18)^n[f-15]>>>3,F=He(n[f-2],17)^He(n[f-2],19)^n[f-2]>>>10;n[f]=n[f-16]+y+n[f-7]+F>>>0}let[l,g,m,L,I,N,h,O]=t;for(let f=0;f<64;f++){let y=He(I,6)^He(I,11)^He(I,25),F=I&N^~I&h,C=O+y+F+pp[f]+n[f]>>>0,w=He(l,2)^He(l,13)^He(l,22),R=l&g^l&m^g&m,T=w+R>>>0;O=h,h=N,N=I,I=L+C>>>0,L=m,m=g,g=l,l=C+T>>>0}t[0]=t[0]+l>>>0,t[1]=t[1]+g>>>0,t[2]=t[2]+m>>>0,t[3]=t[3]+L>>>0,t[4]=t[4]+I>>>0,t[5]=t[5]+N>>>0,t[6]=t[6]+h>>>0,t[7]=t[7]+O>>>0}let i=new Uint8Array(32),s=new DataView(i.buffer);for(let u=0;u<8;u++)s.setUint32(u*4,t[u],!1);return i}function mp(e){let t=new Uint32Array([1732584193,4023233417,2562383102,271733878,3285377520]),r=e.length*8,o=new Uint8Array((e.length+9>>6)+1<<6);o.set(e),o[e.length]=128;let n=new DataView(o.buffer);n.setUint32(o.length-4,r>>>0,!1),n.setUint32(o.length-8,Math.floor(r/2**32),!1);let a=new Uint32Array(80),i=(l,g)=>l<<g|l>>>32-g;for(let l=0;l<o.length;l+=64){for(let h=0;h<16;h++)a[h]=n.getUint32(l+h*4,!1);for(let h=16;h<80;h++)a[h]=i(a[h-3]^a[h-8]^a[h-14]^a[h-16],1);let[g,m,L,I,N]=t;for(let h=0;h<80;h++){let O,f;h<20?(O=m&L|~m&I,f=1518500249):h<40?(O=m^L^I,f=1859775393):h<60?(O=m&L|m&I|L&I,f=2400959708):(O=m^L^I,f=3395469782);let y=i(g,5)+O+N+f+a[h]>>>0;N=I,I=L,L=i(m,30),m=g,g=y}t[0]=t[0]+g>>>0,t[1]=t[1]+m>>>0,t[2]=t[2]+L>>>0,t[3]=t[3]+I>>>0,t[4]=t[4]+N>>>0}let s=new Uint8Array(20),u=new DataView(s.buffer);for(let l=0;l<5;l++)u.setUint32(l*4,t[l],!1);return s}function Os(e){let t=String(e).toLowerCase().replace("-",""),r=fp[t];if(!r)throw new Error(`crypto.createHash: only sha1 and sha256 are available in the web build (asked for ${e})`);let o=[];return{update(n){return o.push(typeof n=="string"?Oe.from(n):Oe.from(n)),this},digest(n){let a=Oe.from(r(Oe.concat(o)));return n?a.toString(n):a}}}var Rs,pp,He,fp,Ls,Tp,rt=Ce(()=>{"use strict";A();Mr();Rs=()=>crypto.randomUUID?crypto.randomUUID():("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16));pp=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),He=(e,t)=>e>>>t|e<<32-t;fp={sha256:_p,sha1:mp};Ls=globalThis.crypto,Tp={randomBytes:hs,randomUUID:Rs,randomInt:Ss,createHash:Os,webcrypto:Ls}});var ao=H((zL,As)=>{"use strict";A();var rr=/\(\s*\?\s+IS\s+NULL\s+OR\s+([A-Za-z_][\w.]*)\s*=\s*\?\s*\)/i,Is=new Map;function Ln(e){let t=Is.get(e);if(t)return t;let r=e.match(rr),n=!!r&&!rr.test(e.replace(rr,""))?{split:!0,on:e.replace(rr,`${r[1]}=?`),off:e.replace(rr,"1=1")}:{split:!1};return Is.set(e,n),n}function Np(e,t,r,...o){let n=Ln(t);return n.split?r==null?e.prepare(n.off).all(...o):e.prepare(n.on).all(r,...o):e.prepare(t).all(r,r,...o)}function gp(e,t,r,...o){let n=Ln(t);return n.split?r==null?e.prepare(n.off).get(...o):e.prepare(n.on).get(r,...o):e.prepare(t).get(r,r,...o)}As.exports={scopedAll:Np,scopedGet:gp,variants:Ln}});var Ie=H((ZL,Ds)=>{"use strict";A();var{getDB:de}=te(),{scopedAll:Cs,scopedGet:Te}=ao(),ys=/\[\[([^\[\]|]+?)(?:\|([^\[\]]+?))?\]\]/g,ws=[["note",(e,t,r)=>e.prepare("SELECT id FROM note WHERE nexus_ref=? AND title=? COLLATE NOCASE").get(r,t)?.id,"note_"],["obj",(e,t,r)=>Te(e,"SELECT o.id FROM object o JOIN project p ON o.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"obj_"],["wchar",(e,t,r)=>Te(e,"SELECT c.id FROM world_character c JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?) AND c.name=? COLLATE NOCASE",r,t)?.id,"wchar_"],["wobj",(e,t,r)=>Te(e,"SELECT o.id FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"wobj_"],["gchar",(e,t,r)=>Te(e,"SELECT c.id FROM game_character c JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?) AND c.name=? COLLATE NOCASE",r,t)?.id,"gchar_"],["gel",(e,t,r)=>Te(e,"SELECT e.id FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?) AND e.name=? COLLATE NOCASE",r,t)?.id,"gel_"],["wchp",(e,t,r)=>Te(e,"SELECT ch.id FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND ch.name=? COLLATE NOCASE",r,t)?.id,"wchp_"],["wnote",(e,t,r)=>Te(e,"SELECT wn.id FROM write_note wn JOIN write_project p ON wn.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND wn.notename=? COLLATE NOCASE",r,t)?.id,"wnote_"],["proj",(e,t,r)=>Te(e,"SELECT id FROM project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"proj_"],["world",(e,t,r)=>Te(e,"SELECT id FROM world_project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"world_"],["game",(e,t,r)=>Te(e,"SELECT id FROM game_project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"game_"],["write",(e,t,r)=>Te(e,"SELECT id FROM write_project WHERE (? IS NULL OR nexus_ref=?) AND project_name=? COLLATE NOCASE",r,t)?.id,"write_"],["module",(e,t,r)=>Te(e,"SELECT id FROM module WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"module_"],["bchp",(e,t,r)=>Te(e,"SELECT ch.id FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND ch.name=? COLLATE NOCASE",r,t)?.id,"bchp_"],["chss",(e,t,r)=>Te(e,"SELECT s.id FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND s.name=? COLLATE NOCASE",r,t)?.id,"chss_"],["cobj",(e,t,r)=>Te(e,"SELECT o.id FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"cobj_"]],ht=null;function bs(e){let t=ht;ht=new Map;try{return e()}finally{ht=t}}function An(e,t){let r=de(),o=t??null,n=String(e||"").trim();if(!n)return null;let a=ht&&`${o}::${n.toLowerCase()}`;if(a!=null&&ht.has(a))return ht.get(a);let i=hp(r,o,n);return a!=null&&ht.set(a,i),i}function hp(e,t,r){let o=r.match(/^(\w+):(.+)$/);if(o){let n=ws.find(([a])=>a===o[1].toLowerCase());if(n){let a=n[1](e,o[2].trim(),t);return a?n[2]+a:null}}for(let[,n,a]of ws)try{let i=n(e,r,t);if(i)return a+i}catch{}return null}function Xe(e,t,r){let o=de(),n=[];ys.lastIndex=0;let a;for(;(a=ys.exec(String(t||"")))!==null;){let s=a[1].trim();s&&n.push(s)}o.transaction(()=>{o.prepare("DELETE FROM wiki_link WHERE src_key=?").run(e);let s=new Set;for(let u of n){let l=u.toLowerCase();s.has(l)||(s.add(l),o.prepare("INSERT INTO wiki_link (nexus_ref, src_key, target_key, target_text) VALUES (?,?,?,?)").run(r??null,e,An(u,r),u))}})()}var Rp=e=>de().prepare("SELECT nexus_ref FROM note WHERE id=?").get(e)?.nexus_ref??null,Sp=e=>de().prepare("SELECT p.nexus_ref FROM object o JOIN project p ON o.project_id=p.id WHERE o.id=?").get(e)?.nexus_ref??null,Op=e=>de().prepare(`
  SELECT p.nexus_ref FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id
  JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE ch.id=?
`).get(e)?.nexus_ref??null;function Lp(){let e=de();return bs(()=>e.transaction(Ip)())}function Ip(){let e=de();e.prepare("DELETE FROM wiki_link").run();for(let t of e.prepare("SELECT id, content, nexus_ref FROM note WHERE content LIKE '%[[%'").all())Xe(`note_${t.id}`,t.content,t.nexus_ref);for(let t of e.prepare("SELECT o.id, o.note, p.nexus_ref FROM object o JOIN project p ON o.project_id=p.id WHERE o.note LIKE '%[[%'").all())Xe(`obj_${t.id}`,t.note,t.nexus_ref);for(let t of e.prepare(`
    SELECT ch.id, ch.chapter_content, p.nexus_ref FROM write_chapter ch
    JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id
    JOIN write_project p ON s.project_id=p.id WHERE ch.chapter_content LIKE '%[[%'
  `).all())Xe(`wchp_${t.id}`,t.chapter_content,t.nexus_ref);for(let t of e.prepare("SELECT id, description, nexus_ref FROM module WHERE description LIKE '%[[%'").all())Xe(`module_${t.id}`,t.description,t.nexus_ref);for(let t of e.prepare("SELECT ch.id, ch.chapter_content, m.nexus_ref FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE ch.chapter_content LIKE '%[[%'").all())Xe(`bchp_${t.id}`,t.chapter_content,t.nexus_ref);for(let t of e.prepare(`
    SELECT s.id, m.nexus_ref, COALESCE(GROUP_CONCAT(g.message, char(10)), '') AS content
    FROM chat_session s JOIN module m ON s.module_ref=m.id
    JOIN chat_message g ON g.session_ref=s.id
    GROUP BY s.id HAVING content LIKE '%[[%'
  `).all())Xe(`chss_${t.id}`,t.content,t.nexus_ref);for(let t of e.prepare("SELECT o.id, o.note, m.nexus_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE o.note LIKE '%[[%'").all())Xe(`cobj_${t.id}`,t.note,t.nexus_ref)}var In={note:{sql:"SELECT id, title AS name FROM note WHERE id=?",type:"note",module:"scribe"},obj:{sql:"SELECT id, name FROM object WHERE id=?",type:"object",module:"director"},wchar:{sql:"SELECT id, name FROM world_character WHERE id=?",type:"character",module:"navigator"},wobj:{sql:"SELECT id, name FROM world_orig_object WHERE id=?",type:"object",module:"navigator"},gchar:{sql:"SELECT id, name FROM game_character WHERE id=?",type:"character",module:"hero"},gel:{sql:"SELECT id, name FROM game_col_element WHERE id=?",type:"object",module:"hero"},wchp:{sql:"SELECT id, name FROM write_chapter WHERE id=?",type:"chapter",module:"writer"},wnote:{sql:"SELECT id, notename AS name FROM write_note WHERE id=?",type:"note",module:"writer"},proj:{sql:"SELECT id, name FROM project WHERE id=?",type:"project",module:"director"},world:{sql:"SELECT id, name FROM world_project WHERE id=?",type:"project",module:"navigator"},game:{sql:"SELECT id, name FROM game_project WHERE id=?",type:"project",module:"hero"},write:{sql:"SELECT id, project_name AS name FROM write_project WHERE id=?",type:"project",module:"writer"},module:{sql:"SELECT id, name FROM module WHERE id=?",type:"module",module:"hub"},bchp:{sql:"SELECT id, name FROM book_chapter WHERE id=?",type:"chapter",module:"author"},chss:{sql:"SELECT id, name FROM chat_session WHERE id=?",type:"chat",module:"scribe"},cobj:{sql:"SELECT id, name FROM classifier_object WHERE id=?",type:"object",module:"classifier"},tlev:{sql:"SELECT id, event_name AS name FROM timeline_event WHERE id=?",type:"event",module:"chronicler"},sdlg:{sql:"SELECT id, name FROM story_dialogue WHERE id=?",type:"dialogue",module:"narrator"}},io=64,Ap=Object.fromEntries(Object.entries(In).map(([e,t])=>{if(!/WHERE id=\?$/.test(t.sql))throw new Error(`KEY_LOOKUPS.${e}.sql must end in "WHERE id=?"`);return[e,`${t.sql.replace(/WHERE id=\?$/,"")}WHERE id IN (${Array(io).fill("?").join(",")})`]}));function yn(e){let t=de(),r=e||[],o=new Map,n=new Map;for(let s of r){if(n.has(s))continue;let u=String(s).match(/^([a-z]+)_(\d+)$/);if(!u||!In[u[1]])continue;let l=Number(u[2]);n.set(s,{prefix:u[1],id:l}),o.has(u[1])||o.set(u[1],[]),o.get(u[1]).push(l)}let a=new Map;for(let[s,u]of o){let l=In[s],g=Ap[s];try{for(let m=0;m<u.length;m+=io){let L=u.slice(m,m+io);for(;L.length<io;)L.push(L[L.length-1]);for(let I of t.prepare(g).all(...L))a.set(`${s}_${I.id}`,{name:I.name,type:l.type,module:l.module})}}catch{}}let i=[];for(let s of r){let u=a.get(s);u&&i.push({key:s,...u})}return i}var yp=e=>{let t=de().prepare("SELECT DISTINCT src_key FROM wiki_link WHERE target_key=?").all(e);return yn(t.map(r=>r.src_key))},wp=e=>{let t=de().prepare("SELECT target_key, target_text FROM wiki_link WHERE src_key=?").all(e),r=yn(t.filter(n=>n.target_key).map(n=>n.target_key)),o=new Map(r.map(n=>[n.key,n]));return t.map(n=>n.target_key&&o.has(n.target_key)?o.get(n.target_key):{key:null,name:n.target_text,type:"unresolved",module:null})};function Cp(e){let t=de().prepare(`
    SELECT target_key k, COUNT(*) c FROM wiki_link
    WHERE target_key IS NOT NULL AND (? IS NULL OR nexus_ref=?) GROUP BY target_key
  `).all(e??null,e??null);return Object.fromEntries(t.map(r=>[r.k,r.c]))}function ks(e){return de().readTx(()=>bp(e))()}function bp(e){let t=de(),r=e??null,o=[],n=(a,i,s,u)=>{try{for(let l of Cs(t,a,r))o.push({key:`${i}${l.id}`,name:l.name,type:s,module:u,color:l.color_code||null})}catch{}};return n("SELECT n.id, n.title AS name, uc.color_code FROM note n LEFT JOIN use_color uc ON uc.id=n.color WHERE (? IS NULL OR n.nexus_ref=?)","note_","note","scribe"),n("SELECT o.id, o.name, uc.color_code FROM object o JOIN project p ON o.project_id=p.id LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR p.nexus_ref=?)","obj_","object","director"),n("SELECT c.id, c.name, uc.color_code FROM world_character c JOIN world_project w ON c.world_ref=w.id LEFT JOIN use_color uc ON uc.id=c.color WHERE (? IS NULL OR w.nexus_ref=?)","wchar_","character","navigator"),n("SELECT o.id, o.name, NULL AS color_code FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)","wobj_","object","navigator"),n("SELECT c.id, c.name, uc.color_code FROM game_character c JOIN game_project g ON c.game_ref=g.id LEFT JOIN use_color uc ON uc.id=c.color_ref WHERE (? IS NULL OR g.nexus_ref=?)","gchar_","character","hero"),n("SELECT e.id, e.name, NULL AS color_code FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)","gel_","object","hero"),n("SELECT ch.id, ch.name, uc.color_code FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id LEFT JOIN use_color uc ON uc.id=ch.color WHERE (? IS NULL OR p.nexus_ref=?)","wchp_","chapter","writer"),n("SELECT id, name, NULL AS color_code FROM project WHERE (? IS NULL OR nexus_ref=?)","proj_","project","director"),n("SELECT id, name, NULL AS color_code FROM world_project WHERE (? IS NULL OR nexus_ref=?)","world_","project","navigator"),n("SELECT id, name, NULL AS color_code FROM game_project WHERE (? IS NULL OR nexus_ref=?)","game_","project","hero"),n("SELECT id, project_name AS name, NULL AS color_code FROM write_project WHERE (? IS NULL OR nexus_ref=?)","write_","project","writer"),n("SELECT m.id, m.name, uc.color_code FROM module m LEFT JOIN use_color uc ON uc.id=m.color WHERE (? IS NULL OR m.nexus_ref=?)","module_","module","hub"),n("SELECT ch.id, ch.name, NULL AS color_code FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)","bchp_","chapter","author"),n("SELECT s.id, s.name, NULL AS color_code FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)","chss_","chat","scribe"),n("SELECT o.id, o.name, uc.color_code FROM classifier_object o JOIN module m ON o.module_ref=m.id LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR m.nexus_ref=?)","cobj_","object","classifier"),o}function kp(e){return de().readTx(()=>Dp(e))()}function Dp(e){let t=de(),r=e??null,o=[],n=new Map;for(let l of ks(e))n.has(l.key)||(n.set(l.key,o.length),o.push({id:o.length,key:l.key,label:l.name,type:l.type,module:l.module}));let a=[],i=new Set,s=(l,g,m)=>{let L=n.get(l),I=n.get(g);if(L==null||I==null||L===I)return;let N=(L<I?`${L}-${I}`:`${I}-${L}`)+(m?"w":"");i.has(N)||(i.add(N),a.push({source:L,target:I,wiki:!!m}))},u=(l,g)=>{try{Cs(t,l,r).forEach(g)}catch{}};return u("SELECT o.id, o.project_id FROM object o JOIN project p ON o.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",l=>s(`obj_${l.id}`,`proj_${l.project_id}`)),u("SELECT c.id, c.world_ref FROM world_character c JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",l=>s(`wchar_${l.id}`,`world_${l.world_ref}`)),u("SELECT o.id, c.world_ref FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",l=>s(`wobj_${l.id}`,`world_${l.world_ref}`)),u("SELECT c.id, c.game_ref FROM game_character c JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",l=>s(`gchar_${l.id}`,`game_${l.game_ref}`)),u("SELECT e.id, c.game_ref FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",l=>s(`gel_${l.id}`,`game_${l.game_ref}`)),u("SELECT ch.id, s.project_id FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",l=>s(`wchp_${l.id}`,`write_${l.project_id}`)),u("SELECT ch.id, ch.module_ref FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",l=>s(`bchp_${l.id}`,`module_${l.module_ref}`)),u("SELECT s.id, s.module_ref FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",l=>s(`chss_${l.id}`,`module_${l.module_ref}`)),u("SELECT o.id, o.module_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",l=>s(`cobj_${l.id}`,`module_${l.module_ref}`)),u("SELECT wn.world_ref, wn.project_ref FROM world_novel wn JOIN world_project w ON wn.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",l=>s(`world_${l.world_ref}`,`proj_${l.project_ref}`)),u("SELECT gl.game_ref, gl.project_ref FROM game_novel_link gl JOIN game_project g ON gl.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",l=>s(`game_${l.game_ref}`,`proj_${l.project_ref}`)),u("SELECT s.project_id, l.novel_id FROM write_novel_link l JOIN write_series s ON l.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",l=>s(`write_${l.project_id}`,`proj_${l.novel_id}`)),u("SELECT ro.object_from, ro.object_to FROM relation_obob ro JOIN relation rl ON ro.relation_id=rl.id JOIN project p ON rl.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",l=>s(`obj_${l.object_from}`,`obj_${l.object_to}`)),u("SELECT cl.character_ref, cl.object_ref FROM world_character_link cl JOIN world_character c ON cl.character_ref=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",l=>s(`wchar_${l.character_ref}`,`obj_${l.object_ref}`)),u("SELECT src_key, target_key FROM wiki_link WHERE target_key IS NOT NULL AND (? IS NULL OR nexus_ref=?)",l=>s(l.src_key,l.target_key,!0)),{nodes:o,edges:a}}function Fp(e){let t=de(),r=String(e).match(/^([a-z]+)_(\d+)$/);if(!r)return null;let o=Number(r[2]);try{switch(r[1]){case"note":return{kind:"note",noteId:o};case"obj":{let n=t.prepare("SELECT id, project_id, category_id FROM object WHERE id=?").get(o);return n&&{kind:"obj",projectId:n.project_id,categoryId:n.category_id,objectId:o}}case"proj":return{kind:"proj",projectId:o};case"world":return{kind:"world",worldId:o};case"game":return{kind:"game",gameId:o};case"write":return{kind:"write",writeId:o};case"wchar":{let n=t.prepare("SELECT world_ref FROM world_character WHERE id=?").get(o);return n&&{kind:"world",worldId:n.world_ref,charId:o}}case"wobj":{let n=t.prepare("SELECT c.world_ref FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id WHERE o.id=?").get(o);return n&&{kind:"world",worldId:n.world_ref,objId:o}}case"gchar":{let n=t.prepare("SELECT game_ref FROM game_character WHERE id=?").get(o);return n&&{kind:"game",gameId:n.game_ref,charId:o}}case"gel":{let n=t.prepare("SELECT c.game_ref FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id WHERE e.id=?").get(o);return n&&{kind:"game",gameId:n.game_ref,elementId:o}}case"wchp":{let n=t.prepare(`
          SELECT ch.book_id, b.series_id, s.project_id FROM write_chapter ch
          JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id WHERE ch.id=?
        `).get(o);return n&&{kind:"wchp",writeId:n.project_id,seriesId:n.series_id,bookId:n.book_id,chapterId:o}}case"wnote":{let n=t.prepare("SELECT project_id FROM write_note WHERE id=?").get(o);return n&&{kind:"write",writeId:n.project_id,wnoteId:o}}case"module":return{kind:"module",moduleId:o};case"bchp":{let n=t.prepare("SELECT module_ref FROM book_chapter WHERE id=?").get(o);return n&&{kind:"bchp",moduleId:n.module_ref,chapterId:o}}case"chss":{let n=t.prepare("SELECT module_ref FROM chat_session WHERE id=?").get(o);return n&&{kind:"chss",moduleId:n.module_ref,sessionId:o}}case"cobj":{let n=t.prepare("SELECT module_ref FROM classifier_object WHERE id=?").get(o);return n&&{kind:"cobj",moduleId:n.module_ref,objectId:o}}case"tlev":{let n=t.prepare(`
          SELECT tl.module_ref FROM timeline_event te
          JOIN timeline tl ON te.timeline_id=tl.id WHERE te.id=?
        `).get(o);return n&&{kind:"tlev",moduleId:n.module_ref,eventId:o}}case"sdlg":{let n=t.prepare("SELECT module_ref FROM story_dialogue WHERE id=?").get(o);return n&&{kind:"sdlg",moduleId:n.module_ref,dialogueId:o}}}}catch{}return null}function xp(e,t){let r=de();return bs(()=>r.transaction(()=>{let o=r.prepare("SELECT id, target_text FROM wiki_link WHERE target_key IS NULL AND (? IS NULL OR nexus_ref=?)").all(t??null,t??null),n=s=>String(s).replace(/^\w+:/,"").trim().toLowerCase(),a=String(e).trim().toLowerCase(),i=0;for(let s of o){if(n(s.target_text)!==a)continue;let u=An(s.target_text,t);u&&(r.prepare("UPDATE wiki_link SET target_key=?, update_at=datetime('now') WHERE id=?").run(u,s.id),i++)}return i})())}var Up={note:{get:"SELECT content AS c FROM note WHERE id=?",set:"UPDATE note SET content=?, update_at=datetime('now') WHERE id=?"},obj:{get:"SELECT note AS c FROM object WHERE id=?",set:"UPDATE object SET note=?, update_at=datetime('now') WHERE id=?"},wchp:{get:"SELECT chapter_content AS c FROM write_chapter WHERE id=?",set:"UPDATE write_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?"},module:{get:"SELECT description AS c FROM module WHERE id=?",set:"UPDATE module SET description=?, update_at=datetime('now') WHERE id=?"},bchp:{get:"SELECT chapter_content AS c FROM book_chapter WHERE id=?",set:"UPDATE book_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?"},cobj:{get:"SELECT note AS c FROM classifier_object WHERE id=?",set:"UPDATE classifier_object SET note=?, update_at=datetime('now') WHERE id=?"},chss:{rewrite:(e,t,r)=>{let o=!1;for(let n of e.prepare("SELECT id, message FROM chat_message WHERE session_ref=?").all(t)){let a=r(n.message);a!==n.message&&(e.prepare("UPDATE chat_message SET message=? WHERE id=?").run(a,n.id),o=!0)}return o?e.prepare("SELECT COALESCE(GROUP_CONCAT(message, char(10)), '') AS c FROM chat_message WHERE session_ref=?").get(t)?.c??"":null}}};function Mp(e,t,r){let o=de();if(!t||!r||t===r)return 0;let n=String(t).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`\\[\\[((?:\\w+:)?)\\s*${n}\\s*(\\||\\]\\])`,"gi"),i=o.prepare("SELECT DISTINCT src_key, nexus_ref FROM wiki_link WHERE target_key=?").all(e),s=0;for(let u of i){let l=String(u.src_key).match(/^([a-z]+)_(\d+)$/),g=l&&Up[l[1]];if(!g)continue;let m=Number(l[2]);if(g.rewrite){let N=g.rewrite(o,m,h=>String(h||"").replace(a,(O,f,y)=>`[[${f}${r}${y}`));N!==null&&(Xe(u.src_key,N,u.nexus_ref),s++);continue}let L=o.prepare(g.get).get(m);if(!L||!L.c)continue;let I=L.c.replace(a,(N,h,O)=>`[[${h}${r}${O}`);I!==L.c&&(o.prepare(g.set).run(I,m),Xe(u.src_key,I,u.nexus_ref),s++)}return s}Ds.exports={renameWikiTarget:Mp,resolveDanglingLinks:xp,resolveWikiName:An,reindexWikiLinks:Xe,rebuildWikiIndex:Lp,nexusOfNote:Rp,nexusOfObject:Sp,nexusOfChapter:Op,getBacklinks:yp,getOutgoingLinks:wp,resolveEntityKeys:yn,quickIndex:ks,getEntityPath:Fp,getGraph:kp,getLinkCounts:Cp}});var Mn=H((tI,Hs)=>{"use strict";A();var{_now:Be,_t:Ge,hasTable:Fs,hasColumn:xs,hasAnyMissingColumns:vp}=et(),{APP_DDL_SQL:Us,VAULT_DDL_SQL:Ms}=ls(),{VAULT_SCHEMA_VERSION:jp}=hn(),{INDEX_SQL:Pp}=Rn(),{SEED_SYMBOLS:Wp}=Sn(),{migrateInlineColumns:vs,migrateNexusV28:Hp,migrateMapV3:Xp,migrateTimelineV3:Bp,migrateWriterV27:Gp,migrateHeroV26:$p,migratePluginV42:js,ensureIndexes:Ps,migrateDesignNodeShapes:Yp}=On(),Dn=2;function Fn(e){return(rt(),X(tt)).createHash("sha1").update(e.join("\0")).digest().readUInt32BE(0)&2147483647||1}var wn=null;function so(){return wn===null&&(wn=Fn([String(Dn),Us,String(xn),String(js)])),wn}var Cn=null;function co(){return Cn===null&&(Cn=Fn([String(Dn),String(jp),Ms,Pp,Wp.join(""),String(Un),String(vs),String(Hp),String(Xp),String(Bp),String(Gp),String($p),String(Yp),String(Ps)])),Cn}var bn=null;function kn(){return bn===null&&(bn=Fn([String(so()),String(co()),String(Ws)])),bn}function xn(e){let t=so();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){Ge("initAppDB (skipped, stamp match)",Be());return}let o=Be();js(e),Ge("plugin v4.2 rename",o);let n=Be();e.exec(Us),Ge("app DDL exec",n),e.exec(`PRAGMA user_version = ${so()|0}`)}function Un(e){let t=co();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){Ge("initVaultDB (skipped, stamp match)",Be());return}let o=Be(),n=Fs(e,"wiki_link");try{(Fs(e,"world_cat_object")||xs(e,"world_project","color_ref")&&!xs(e,"world_project","codename")||vp(e,[["world_project",["codename","name","memo","color"]],["world_novel",["world_ref","project_ref"]],["world_character",["world_ref","name","symbol","color"]],["world_character_category",["world_ref","category_ref"]],["world_character_link",["character_ref","object_ref"]],["world_category",["world_ref","category_ref"]],["world_object",["category_ref","object_ref","symbol"]],["world_map",["world_ref","map_ref"]],["world_map_area",["world_map_ref","area_ref","color"]],["world_map_point",["world_map_area_ref","point_ref"]],["world_timeline",["world_ref","name","world_map_ref"]],["world_timeline_date",["day","month","years","hour","minute"]],["world_timeline_event",["timeline_ref","date_ref"]],["world_timeline_point",["x","y"]],["world_timeline_object",["event_ref","world_object_ref","world_character_ref","point_ref"]]]))&&(e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
        DROP TABLE IF EXISTS library_world_link;
        DROP TABLE IF EXISTS world_timeline_object;
        DROP TABLE IF EXISTS world_timeline_point;
        DROP TABLE IF EXISTS world_timeline_event;
        DROP TABLE IF EXISTS world_timeline_date;
        DROP TABLE IF EXISTS world_timeline;
        DROP TABLE IF EXISTS world_map_point;
        DROP TABLE IF EXISTS world_map_area;
        DROP TABLE IF EXISTS world_object;
        DROP TABLE IF EXISTS world_character_link;
        DROP TABLE IF EXISTS world_character_category;
        DROP TABLE IF EXISTS world_novel;
        DROP TABLE IF EXISTS world_maptl_obj;
        DROP TABLE IF EXISTS world_maptl_event;
        DROP TABLE IF EXISTS world_map_timeline;
        DROP TABLE IF EXISTS world_map_link;
        DROP TABLE IF EXISTS world_cat_object;
        DROP TABLE IF EXISTS world_cat_link;
        DROP TABLE IF EXISTS world_obj_hashtag;
        DROP TABLE IF EXISTS world_char_hashtag;
        DROP TABLE IF EXISTS world_char_link;
        DROP TABLE IF EXISTS world_character;
        DROP TABLE IF EXISTS world_category;
        DROP TABLE IF EXISTS world_novel_link;
        DROP TABLE IF EXISTS world_description;
        DROP TABLE IF EXISTS world_project_hashtag;
        DROP TABLE IF EXISTS world_map;
        DROP TABLE IF EXISTS world_project;
      `),e.exec("PRAGMA foreign_keys = ON"))}catch{}Ge("legacy-nav probe",o);let a=Be();e.exec(Ms),Ge("vault DDL exec",a);let i=Be();vs(e),Ge("migrations + seed",i);let s=Be();if(Ps(e),Ge("ensureIndexes",s),!n){let u=Be();try{Ie().rebuildWikiIndex()}catch(l){console.error("wiki backfill error:",l)}Ge("wiki backfill",u)}e.exec(`PRAGMA user_version = ${co()|0}`)}function Ws(e){let t=kn();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){Ge("initDB (skipped, stamp match)",Be());return}e.exec("PRAGMA user_version = 0"),xn(e),Un(e),e.exec(`PRAGMA user_version = ${kn()|0}`)}Hs.exports={SCHEMA_EPOCH:Dn,schemaStamp:kn,appSchemaStamp:so,vaultSchemaStamp:co,initDB:Ws,initAppDB:xn,initVaultDB:Un}});var jn=H((oI,Vs)=>{"use strict";A();var lo=(Le(),X(be)),vn=(ge(),X(xe)),{getAppDB:$e,getVaultDB:Vp,dataDir:qp,openVaultIds:Jp}=et(),Xs=()=>vn.join(qp(),"vaults");function Kp(e,t){let r=String(e||"nexus").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"-").slice(0,60)||"nexus";return vn.join(Xs(),`${r}-${t}.ddx`)}var Bs=e=>e.file_path?!lo.existsSync(e.file_path):!1;function zp(){return $e().prepare(`
    SELECT * FROM nexus_file ORDER BY name COLLATE NOCASE
  `).all().map(e=>({...e,missing:Bs(e)?1:0}))}function Qp(e){let t=$e().prepare("SELECT * FROM nexus_file WHERE id=?").get(e);return t?{...t,missing:Bs(t)?1:0}:null}function Zp({name:e,memo:t=null,colorCode:r=null,filePath:o=null}){return $e().prepare(`
    INSERT INTO nexus_file (name, memo, color_code, file_path) VALUES (?,?,?,?)
  `).run(e,t,r,o).lastInsertRowid}function e_({id:e,name:t,memo:r=null,colorCode:o=null,filePath:n=null}){return $e().prepare(`
    INSERT INTO nexus_file (id, name, memo, color_code, file_path) VALUES (?,?,?,?,?)
  `).run(e,t,r,o,n),e}var t_=(e,{name:t,memo:r,colorCode:o})=>$e().prepare(`
  UPDATE nexus_file SET name=?, memo=?, color_code=?, update_at=datetime('now') WHERE id=?
`).run(t,r??null,o??null,e),r_=(e,t)=>$e().prepare(`
  UPDATE nexus_file SET file_path=?, missing=0, update_at=datetime('now') WHERE id=?
`).run(t,e),o_=e=>$e().prepare(`
  UPDATE nexus_file SET last_opened_at=datetime('now') WHERE id=?
`).run(e),n_=e=>$e().prepare("DELETE FROM nexus_file WHERE id=?").run(e);function a_(e,t=null){let r=n=>{try{return lo.realpathSync.native?lo.realpathSync.native(n):lo.realpathSync(n)}catch{return vn.resolve(n)}},o=r(e);return $e().prepare("SELECT id, file_path FROM nexus_file WHERE file_path IS NOT NULL").all().some(n=>n.id!==t&&r(n.file_path)===o)}var Gs=["project","world_project","game_project","write_project"];function $s(e,t){let r=0;for(let o of Gs)r+=e.prepare(`SELECT COUNT(*) AS c FROM ${o} WHERE nexus_ref=?`).get(t).c;return r+=e.prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=? AND parent_id IS NULL").get(t).c,r}function Ys(e){try{let t=$s(Vp(e),e);return $e().prepare(`
      UPDATE nexus_file SET project_count=?, counts_at=datetime('now') WHERE id=?
    `).run(t,e),t}catch{return null}}function i_(){for(let e of Jp())Ys(e)}Vs.exports={NEXUS_PROJECT_TABLES:Gs,refreshOpenVaultCounts:i_,vaultDefaultPath:Kp,vaultsDir:Xs,listVaults:zp,getVault:Qp,insertVault:Zp,insertVaultWithId:e_,updateVaultMeta:t_,setVaultPath:r_,touchVaultOpened:o_,removeVault:n_,vaultPathInUse:a_,countVaultItems:$s,refreshVaultCounts:Ys}});var zs=H((aI,Ks)=>{"use strict";A();var Ee=(Le(),X(be)),ct=(ge(),X(xe)),{Database:s_}=(tr(),X(Qr)),{adaptDb:c_,forceLegacyJournalMode:l_}=et(),{NEXUS_PROJECT_TABLES:Pn}=jn(),d_=new Set(["use_color","app_setting","nexus_file","plugin","plugin_table","plugin_dependency","sqlite_sequence"]),E_=new Set(["app_setting","nexus_file","plugin","plugin_table","plugin_dependency"]),qs=/^(plg|ext)_[a-z0-9_]{1,41}$/,u_=["DELETE FROM relation_obob WHERE object_from NOT IN (SELECT id FROM object) OR object_to NOT IN (SELECT id FROM object)","DELETE FROM relation_obtl WHERE object_from NOT IN (SELECT id FROM object) OR timeline_to NOT IN (SELECT id FROM timeline_event)","DELETE FROM relation_tltl WHERE timeline_from NOT IN (SELECT id FROM timeline_event) OR timeline_to NOT IN (SELECT id FROM timeline_event)"],p_=e=>String(e||"nexus").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"-").slice(0,60)||"nexus";function Wn(e){Ee.existsSync(e)&&!Ee.existsSync(e+"-wal")&&l_(e);let t=c_(new s_(e));return t.exec("PRAGMA busy_timeout = 5000"),t.exec("PRAGMA journal_mode = DELETE"),t}var Js=e=>e.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(t=>t.name);function __(e){let t=Wn(e);try{t.exec("PRAGMA foreign_keys = ON");let r=t.prepare("SELECT MIN(id) AS m FROM nexus").get()?.m;if(r!=null)for(let o of Pn)try{t.prepare(`UPDATE ${o} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(r)}catch{}return t.prepare(`
      SELECT n.id, n.name, n.memo, c.color_code
      FROM nexus n LEFT JOIN use_color c ON c.id = n.color
      ORDER BY n.id
    `).all()}finally{try{t.close()}catch{}}}function m_(e,t,r){Ee.copyFileSync(e,t);let o=Wn(t);try{o.exec("PRAGMA foreign_keys = ON"),o.transaction(()=>{o.exec("PRAGMA defer_foreign_keys = ON");for(let i of Pn)o.prepare(`DELETE FROM ${i} WHERE nexus_ref IS NOT ?`).run(r);o.prepare("DELETE FROM nexus WHERE id <> ?").run(r);for(let i of u_)try{o.prepare(i).run()}catch{}})();let n=o.prepare("PRAGMA foreign_key_check").all();if(n.length)throw new Error(`foreign_key_check failed for nexus ${r}: ${JSON.stringify(n[0])}`);let a=0;for(let i of Pn)a+=o.prepare(`SELECT COUNT(*) AS c FROM ${i} WHERE nexus_ref=?`).get(r).c;a+=o.prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=? AND parent_id IS NULL").get(r).c;for(let i of Js(o))(E_.has(i)||qs.test(i))&&o.prepare(`DROP TABLE IF EXISTS ${i}`).run();return o.exec("PRAGMA user_version = 0"),o.exec("VACUUM"),a}finally{try{o.close()}catch{}}}function f_(e,t,r,o,n){Ee.copyFileSync(e,t);let a=Wn(t);try{a.exec("PRAGMA foreign_keys = OFF");for(let i of Js(a))d_.has(i)||qs.test(i)||a.prepare(`DROP TABLE IF EXISTS ${i}`).run();return a.exec("PRAGMA user_version = 0"),a.exec("PRAGMA foreign_keys = ON"),a.exec("VACUUM"),Mn().initAppDB(a),a.transaction(()=>{a.prepare("DELETE FROM nexus_file").run();for(let i of r)a.prepare(`
          INSERT INTO nexus_file (id, name, memo, color_code, file_path, project_count, counts_at)
          VALUES (?,?,?,?,?,?,datetime('now'))
        `).run(i.id,i.name,i.memo??null,i.color_code??null,o.get(i.id),n.get(i.id)??0)})(),a.prepare("SELECT COUNT(*) AS c FROM nexus_file").get().c}finally{try{a.close()}catch{}}}function T_(e){let t=ct.join(e,"novel-manager.ddx"),r=ct.join(e,"app.ddx"),o=ct.join(e,"vaults"),n=ct.join(e,".ddx-split-tmp");if(Ee.existsSync(r)||!Ee.existsSync(t))return{ok:!1,code:"not_applicable"};let a=Ee.statSync(t).size;try{let i=Ee.statfsSync(e),s=i.bavail*i.bsize;if(s<a*3)throw new Error(`not enough free disk space: need ~${Math.ceil(a*3/1e6)}MB, have ${Math.floor(s/1e6)}MB`)}catch(i){if(/not enough free disk space/.test(String(i&&i.message)))throw i}Ee.rmSync(n,{recursive:!0,force:!0}),Ee.mkdirSync(n,{recursive:!0});try{let i=__(t),s=new Map,u=new Map,l=[];for(let g of i){let m=ct.join(n,`vault-${g.id}.ddx`);u.set(g.id,m_(t,m,g.id));let L=ct.join(o,`${p_(g.name)}-${g.id}.ddx`);s.set(g.id,L),l.push([m,L])}f_(t,ct.join(n,"app.ddx"),i,s,u),Ee.mkdirSync(o,{recursive:!0});for(let[g,m]of l)Ee.renameSync(g,m);Ee.renameSync(ct.join(n,"app.ddx"),r);try{Ee.renameSync(t,t+".bak");for(let g of["-wal","-shm"])Ee.existsSync(t+g)&&Ee.renameSync(t+g,t+".bak"+g)}catch{}return Ee.rmSync(n,{recursive:!0,force:!0}),console.log(`[split] ${i.length} nexus(es) split into ${o}; original kept as novel-manager.ddx.bak`),{ok:!0,vaults:i.length}}catch(i){throw Ee.rmSync(n,{recursive:!0,force:!0}),i}}Ks.exports={splitLegacyDatabase:T_}});var et=H((cI,cc)=>{"use strict";A();var{Database:tc}=(tr(),X(Qr)),ne=(Le(),X(be)),or=(ge(),X(xe)),sI=(eo(),X(Zr)),{app:N_}=(le(),X(me)),{currentNexusId:g_}=gt(),{createUndoRecorder:h_}=ns(),rc=!!U.env.DDX_PERF,oc=[],uo=()=>rc?performance.now():0,po=rc?(e,t)=>{let r=+(performance.now()-t).toFixed(1);oc.push({label:e,ms:r}),console.log(`[perf] ${e.padEnd(28)} ${r}ms`)}:()=>{},R_=()=>oc,Qs=256;function Hn(e,t){let r=e.prepare.bind(e),o=e.exec.bind(e),n=typeof e.close=="function"?e.close.bind(e):null,a=t==="vault"||t==="single"?h_(r):null,i=new Map,s=new Map,u=!1,l=null,g=()=>{for(let N of i.values())try{N.isFinalized||N.finalize()}catch{}i.clear()},m=/^\s*(?:--[^\n]*\n|\/\*[\s\S]*?\*\/|\s)*(CREATE|ALTER|DROP|REINDEX|VACUUM|ATTACH|DETACH|PRAGMA)\b/i,L=N=>{let h=i.get(N);if(h)return i.delete(N),i.set(N,h),h;let O=r(N);if(l===null&&(l=typeof O._reset=="function"),!l)return O;if(i.set(N,O),i.size>Qs){let f=i.keys().next().value,y=i.get(f);i.delete(f);try{y.finalize()}catch{}}return O};e.prepare=N=>{let h=s.get(N);if(h)return h;let O=(y,F,C)=>{if(!u||l===!1||m.test(N)){m.test(N)&&g();let T=r(N);try{let _=T[y](F);return C?C(_):_}finally{T.finalize()}}let R=L(N);if(!i.has(N))try{let T=R[y](F);return C?C(T):T}finally{R.finalize()}try{let T=R[y](F);return C?C(T):T}finally{try{R._reset()}catch{i.delete(N);try{R.finalize()}catch{}}}},f={all:(...y)=>O("all",y),get:(...y)=>O("get",y,F=>F===null?void 0:F),run:a?(...y)=>{let F=a.beforeRun(N,y),C=O("run",y);return a.afterRun(N,y,F,C),C}:(...y)=>O("run",y)};return s.size<Qs*4&&s.set(N,f),f},e.exec=N=>{let h=String(N).trimStart().slice(0,9).toUpperCase();return h.startsWith("BEGIN")||h.startsWith("COMMIT")||h.startsWith("ROLLBACK")||g(),o(N)},n&&(e.close=(...N)=>(g(),s.clear(),n(...N))),e.setStatementCache=N=>{N||g(),u=!!N},e.statementCacheSize=()=>i.size,e.readTx=N=>e.transaction(N);let I=0;return e.transaction=N=>(...h)=>{if(I>0)return N(...h);I++,a&&a.beginGroup(),e.exec("BEGIN");try{let O=N(...h);return e.exec("COMMIT"),a&&a.endGroup(!0),O}catch(O){try{e.exec("ROLLBACK")}catch{}throw a&&a.endGroup(!1),O}finally{I--}},e.undo=()=>a?a.undo():{ok:!1,reason:"unsupported"},e.redo=()=>a?a.redo():{ok:!1,reason:"unsupported"},e.canUndo=()=>!!a&&a.canUndo(),e.canRedo=()=>!!a&&a.canRedo(),e.setUndoTracking=N=>{a&&a.setEnabled(N)},e}function Xn(e){try{let t=D.alloc(2),r=ne.openSync(e,"r+");ne.readSync(r,t,0,2,18),(t[0]===2||t[1]===2)&&(t[0]=1,t[1]=1,ne.writeSync(r,t,0,2,18),ne.fsyncSync(r)),ne.closeSync(r)}catch{}}var nr=()=>or.dirname(N_.getPath("userData")),vt=class extends Error{constructor(t){super(`vault file not found: ${t}`),this.code="vault_file_missing",this.filePath=t}};function ar(e,{kind:t,create:r=!1,register:o=null}={}){let n=or.dirname(e);if(!ne.existsSync(n)){if(!r)throw new vt(e);ne.mkdirSync(n,{recursive:!0})}if(!r&&!ne.existsSync(e))throw new vt(e);ne.existsSync(e)&&!ne.existsSync(e+"-wal")&&Xn(e);try{ne.rmSync(e+".lock",{recursive:!0,force:!0})}catch{}let a=uo(),i=Hn(new tc(e),t);po(`open ${t}`,a);let s=uo();i.exec("PRAGMA busy_timeout = 5000"),i.exec("PRAGMA journal_mode = DELETE"),i.exec("PRAGMA foreign_keys = ON"),i.exec(`PRAGMA cache_size = ${t==="app"?-2e3:-4e3}`),i.exec("PRAGMA temp_store = MEMORY"),po("pragmas",s),o&&o(i);let u=uo(),l=Mn();return t==="app"?l.initAppDB(i):t==="vault"?l.initVaultDB(i):l.initDB(i),po(`init ${t} (total)`,u),i.setStatementCache(!0),i.setUndoTracking(!0),i}var Zs=()=>or.join(nr(),"app.ddx"),nc=()=>or.join(nr(),"novel-manager.ddx"),Eo=null,Ye=new Map,Bn=new Set,ec=4;function S_(){let e=nr();ne.existsSync(e)||ne.mkdirSync(e,{recursive:!0});let t=nc(),r=or.join(e,"novel-manager.db");if(!ne.existsSync(t)&&ne.existsSync(r))try{ne.renameSync(r,t),ne.existsSync(r+"-wal")&&ne.renameSync(r+"-wal",t+"-wal"),ne.existsSync(r+"-shm")&&ne.renameSync(r+"-shm",t+"-shm")}catch{}let o=null;return ar(t,{kind:"single",create:!0,register:n=>{o=n}}),o}function ac(){if(Eo)return Eo;let e=nr();if(ne.existsSync(e)||ne.mkdirSync(e,{recursive:!0}),!ne.existsSync(Zs())&&ne.existsSync(nc())){let t=S_();try{t.close()}catch{}zs().splitLegacyDatabase(e)}return ar(Zs(),{kind:"app",create:!0,register:t=>{Eo=t}}),Eo}function ic(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)throw new Mt(e);let r=Ye.get(t);if(r)return r.lastUsed=Date.now(),r.conn;let o=ac().prepare("SELECT file_path FROM nexus_file WHERE id=?").get(t);if(!o)throw new Mt(t);if(!o.file_path)throw new Mt(t);let n=null;return ar(o.file_path,{kind:"vault",create:!1,register:a=>{n=a,Ye.set(t,{conn:a,filePath:o.file_path,lastUsed:Date.now()})}}),I_(),n}function O_(e,t){let r=Number(e),o=null;return ar(t,{kind:"vault",create:!0,register:n=>{o=n,Ye.set(r,{conn:n,filePath:t,lastUsed:Date.now()})}}),o}function L_(e){if(!ne.existsSync(e))throw new vt(e);ne.existsSync(e+"-wal")||Xn(e);let t=Hn(new tc(e));if(t.exec("PRAGMA busy_timeout = 5000"),!["nexus","module"].every(o=>_o(t,o))){try{t.close()}catch{}throw new Error("not a vault file")}return t}function I_(){if(Ye.size<=ec)return;let e=[...Ye.entries()].filter(([t])=>!Bn.has(t)).sort((t,r)=>t[1].lastUsed-r[1].lastUsed);for(;Ye.size>ec&&e.length;){let[t]=e.shift();Gn(t)}}function Gn(e){let t=Ye.get(Number(e));if(!t)return!1;Ye.delete(Number(e));try{t.conn.close()}catch{}return!0}var A_=()=>[...Ye.keys()],y_=e=>Bn.add(Number(e)),w_=e=>Bn.delete(Number(e)),C_=()=>{for(let e of[...Ye.keys()])Gn(e)},Mt=class extends Error{constructor(t){super(`no vault for id ${t} \u2014 a vault-scoped call ran with no vault context, or the vault is not registered`),this.code="no_vault"}};function b_(){return ic(g_())}function _o(e,t){return!!e.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get(t)}function sc(e,t,r){return _o(e,t)?e.prepare(`PRAGMA table_info(${t})`).all().some(o=>o.name===r):!1}function k_(e,t){return t.some(([r,o])=>_o(e,r)&&o.some(n=>!sc(e,r,n)))}cc.exports={adaptDb:Hn,getDB:b_,getAppDB:ac,getVaultDB:ic,openDdx:ar,dataDir:nr,createVaultDB:O_,openVaultProbe:L_,closeVault:Gn,closeAllVaults:C_,pinVault:y_,unpinVault:w_,openVaultIds:A_,VaultFileMissingError:vt,NoVaultError:Mt,perfLog:R_,forceLegacyJournalMode:Xn,hasTable:_o,hasColumn:sc,hasAnyMissingColumns:k_,_now:uo,_t:po}});var $n=H((EI,Ec)=>{"use strict";A();var{Database:D_}=(tr(),X(Qr)),jt=(Le(),X(be)),lc=(ge(),X(xe)),F_=(eo(),X(Zr)),{app:dI}=(le(),X(me)),{getDB:dc,getVaultDB:x_,getAppDB:U_,adaptDb:M_,forceLegacyJournalMode:v_,hasTable:x,hasColumn:ir,dataDir:j_}=et(),{NEXUS_PROJECT_TABLES:P_}=On(),W_=()=>lc.join(j_(),"app.ddx"),H_=e=>U_().prepare("SELECT file_path FROM nexus_file WHERE id=?").get(e)?.file_path??null,X_=async e=>{try{jt.rmSync(e,{force:!0})}catch{}dc().prepare("VACUUM INTO ?").run(e)};function B_(e,t){let r=t!=null?x_(t):dc(),o=lc.join(F_.tmpdir(),`dracondex-import-${Date.now()}-${Math.random().toString(36).slice(2)}.db`);if(jt.copyFileSync(e,o),jt.existsSync(e+"-wal")){try{jt.copyFileSync(e+"-wal",o+"-wal")}catch{}try{jt.copyFileSync(e+"-shm",o+"-shm")}catch{}}else v_(o);let n=()=>{for(let u of["","-wal","-shm"])try{jt.rmSync(o+u,{force:!0})}catch{}},a;try{a=M_(new D_(o,{readOnly:!0}))}catch(u){throw n(),u}let i={colors:0,folders:0,projects:0,categories:0,templates:0,objects:0,timelines:0,events:0,hashtags:0,descriptions:0,relationTypes:0,relations:0,mappings:0,nexuses:0,noteFolders:0,notes:0,world_projects:0,game_projects:0,write_projects:0,chapters:0,dialogues:0},s=r.transaction(()=>{if(x(a,"use_color")){let m=a.prepare("SELECT color_code FROM use_color WHERE color_code IS NOT NULL").all(),L=r.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)");for(let I of m)i.colors+=L.run(I.color_code).changes}if(x(a,"nexus")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((O,f)=>(O.set(f.id,f.color_code),O),new Map):new Map,L=a.prepare("SELECT id, name, memo, color FROM nexus").all(),I=r.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get()?.id??null;i.nexuses=0,i.nexusesFolded=I?L.length:0;let N=new Map(L.map(O=>[O.name,I])),h=new Map(L.map(O=>[O.id,O.name]));if(x(a,"note_folder"))for(let O of a.prepare("SELECT nexus_ref, name, color FROM note_folder").all()){let f=N.get(h.get(O.nexus_ref));!f||r.prepare("SELECT 1 FROM note_folder WHERE nexus_ref=? AND name=?").get(f,O.name)||(i.noteFolders+=r.prepare("INSERT INTO note_folder (nexus_ref, name, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(f,O.name,m.get(O.color)||null).changes)}if(x(a,"note")){let O=x(a,"note_folder")?a.prepare("SELECT id, name FROM note_folder").all().reduce((f,y)=>(f.set(y.id,y.name),f),new Map):new Map;for(let f of a.prepare("SELECT nexus_ref, folder_ref, title, content, color, pinned FROM note").all()){let y=N.get(h.get(f.nexus_ref));if(!y)continue;let F=f.folder_ref?r.prepare("SELECT id FROM note_folder WHERE nexus_ref=? AND name=?").get(y,O.get(f.folder_ref))?.id:null;i.notes+=r.prepare("INSERT OR IGNORE INTO note (nexus_ref, folder_ref, title, content, color, pinned) VALUES (?, ?, ?, ?, (SELECT id FROM use_color WHERE color_code=?), ?)").run(y,F||null,f.title,f.content||"",m.get(f.color)||null,f.pinned?1:0).changes}}}if(x(a,"project_folder")){let m=a.prepare("SELECT name, folder_memo, folder_color FROM project_folder WHERE name IS NOT NULL").all(),L=a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,h)=>(N.set(h.id,h.color_code),N),new Map),I=r.prepare("INSERT OR IGNORE INTO project_folder (name, folder_memo, folder_color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let N of m)i.folders+=I.run(N.name,N.folder_memo||null,L.get(N.folder_color)||null).changes}if(x(a,"project")){let m=a.prepare("SELECT codename, name, project_memo, folder_id, project_color FROM project WHERE name IS NOT NULL").all(),L=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((f,y)=>(f.set(y.id,y.color_code),f),new Map):new Map,I=x(a,"project_folder")?a.prepare("SELECT id, name FROM project_folder").all().reduce((f,y)=>(f.set(y.id,y.name),f),new Map):new Map,N=r.prepare("SELECT id FROM project WHERE codename = ?"),h=r.prepare("SELECT id FROM project WHERE codename IS NULL AND name = ?"),O=r.prepare("INSERT INTO project (codename, name, project_memo, folder_id, project_color) VALUES (?,?,?,(SELECT id FROM project_folder WHERE name=?),(SELECT id FROM use_color WHERE color_code=?))");for(let f of m)(f.codename?N.get(f.codename):h.get(f.name))||(i.projects+=O.run(f.codename||null,f.name,f.project_memo||null,I.get(f.folder_id)||null,L.get(f.project_color)||null).changes)}if(x(a,"project_description")){let m=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all():[],L=new Map(m.map(N=>[N.id,N.codename?`code:${N.codename}`:`name:${N.name}`])),I=a.prepare("SELECT project_id, attribute_name, attribute_text FROM project_description").all();for(let N of I){let h=L.get(N.project_id);if(!h)continue;let O=h.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(h.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(h.slice(5));!O||r.prepare("SELECT 1 FROM project_description WHERE project_id=? AND attribute_name IS ? AND attribute_text IS ?").get(O.id,N.attribute_name||null,N.attribute_text||null)||(i.descriptions+=r.prepare("INSERT INTO project_description (project_id, attribute_name, attribute_text) VALUES (?,?,?)").run(O.id,N.attribute_name||null,N.attribute_text||null).changes)}}if(x(a,"object_category")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,h)=>(N.set(h.id,h.color_code),N),new Map):new Map,L=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((N,h)=>(N.set(h.id,h.codename?`code:${h.codename}`:`name:${h.name}`),N),new Map):new Map,I=a.prepare("SELECT category_name, project_id, color FROM object_category").all();for(let N of I){let h=L.get(N.project_id);if(!h)continue;let O=h.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(h.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(h.slice(5));O&&(i.categories+=r.prepare("INSERT OR IGNORE INTO object_category (category_name, project_id, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(N.category_name,O.id,m.get(N.color)||null).changes)}}if(x(a,"object_template")&&x(a,"object_category")){let m=a.prepare("SELECT id, category_name, project_id FROM object_category").all(),L=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((O,f)=>(O.set(f.id,f.codename?`code:${f.codename}`:`name:${f.name}`),O),new Map):new Map,I=new Map(m.map(O=>[O.id,`${L.get(O.project_id)}::${O.category_name}`])),h=ir(a,"object_template","attribute_type")?a.prepare("SELECT category_id, description, attribute_type FROM object_template").all():a.prepare("SELECT category_id, description, 'text' AS attribute_type FROM object_template").all();for(let O of h){let f=I.get(O.category_id);if(!f)continue;let[y,F]=f.split("::"),C=y?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(y.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get((y||"").slice(5));if(!C)continue;let w=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(C.id,F);!w||r.prepare("SELECT 1 FROM object_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=COALESCE(?,'text')").get(w.id,O.description,O.attribute_type||"text")||(i.templates+=r.prepare("INSERT INTO object_template (category_id, description, attribute_type) VALUES (?,?,?)").run(w.id,O.description,O.attribute_type||"text").changes)}}if(x(a,"object")&&x(a,"object_category")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((O,f)=>(O.set(f.id,f.color_code),O),new Map):new Map,L=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((O,f)=>(O.set(f.id,f.codename?`code:${f.codename}`:`name:${f.name}`),O),new Map):new Map,I=a.prepare("SELECT id, category_name, project_id FROM object_category").all(),N=new Map(I.map(O=>[O.id,`${L.get(O.project_id)}::${O.category_name}`])),h=a.prepare("SELECT name, project_id, category_id, color FROM object").all();for(let O of h){let f=L.get(O.project_id),y=N.get(O.category_id);if(!f||!y)continue;let F=f.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(f.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(f.slice(5));if(!F)continue;let C=y.split("::")[1],w=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(F.id,C);!w||r.prepare("SELECT 1 FROM object WHERE name=? AND project_id=? AND category_id=?").get(O.name,F.id,w.id)||(i.objects+=r.prepare("INSERT INTO object (name, project_id, category_id, color) VALUES (?, ?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(O.name,F.id,w.id,m.get(O.color)||null).changes)}}if(x(a,"timeline")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,h)=>(N.set(h.id,h.color_code),N),new Map):new Map,L=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((N,h)=>(N.set(h.id,h.codename?`code:${h.codename}`:`name:${h.name}`),N),new Map):new Map,I=a.prepare("SELECT line_name, project_id, color FROM timeline").all();for(let N of I){let h=L.get(N.project_id);if(!h)continue;let O=h.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(h.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(h.slice(5));!O||r.prepare("SELECT 1 FROM timeline WHERE project_id=? AND line_name=?").get(O.id,N.line_name||null)||(i.timelines+=r.prepare("INSERT INTO timeline (line_name, project_id, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(N.line_name||null,O.id,m.get(N.color)||null).changes)}}if(x(a,"timeline_date")){let m=a.prepare("SELECT day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all(),L=r.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)");for(let I of m)L.run(I.day,I.month,I.years,I.hour,I.minute)}if(x(a,"timeline_event")&&x(a,"timeline_date")&&x(a,"timeline")){let m=ir(a,"timeline_event","story"),L=ir(a,"timeline_event","end_at"),I=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all().reduce((C,w)=>(C.set(w.id,w),C),new Map),N=x(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((C,w)=>(C.set(w.id,w.codename?`code:${w.codename}`:`name:${w.name}`),C),new Map):new Map,h=a.prepare("SELECT id, line_name, project_id FROM timeline").all().reduce((C,w)=>(C.set(w.id,{line_name:w.line_name,pKey:N.get(w.project_id)}),C),new Map),O=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((C,w)=>(C.set(w.id,w.color_code),C),new Map):new Map,f=`SELECT id, timeline_id, event_name, start_at, ${L?"end_at":"NULL AS end_at"}, color, ${m?"story":"NULL AS story"} FROM timeline_event`,y=a.prepare(f).all(),F=(C,w,R,T,_)=>(r.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(C,w,R,T||0,_||0),r.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(C,w,R,T||0,_||0).id);for(let C of y){let w=h.get(C.timeline_id),R=I.get(C.start_at);if(!w||!R)continue;let T=w.pKey?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(w.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get((w.pKey||"").slice(5));if(!T)continue;let _=r.prepare("SELECT id FROM timeline WHERE project_id=? AND line_name=?").get(T.id,w.line_name);if(!_)continue;let S=F(R.day,R.month,R.years,R.hour,R.minute),b=null;if(C.end_at&&I.has(C.end_at)){let B=I.get(C.end_at);b=F(B.day,B.month,B.years,B.hour,B.minute)}r.prepare("SELECT 1 FROM timeline_event WHERE timeline_id=? AND COALESCE(event_name,'')=COALESCE(?,'') AND start_at=? AND COALESCE(end_at,0)=COALESCE(?,0)").get(_.id,C.event_name||null,S,b||null)||(i.events+=r.prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,end_at,color,story) VALUES (?,?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)").run(_.id,C.event_name||null,S,b,O.get(C.color)||null,C.story||null).changes)}}if(x(a,"hashtag")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,h)=>(N.set(h.id,h.color_code),N),new Map):new Map,I=ir(a,"hashtag","tag_color")?a.prepare("SELECT tag_name, tag_color FROM hashtag").all():a.prepare("SELECT tag_name, NULL AS tag_color FROM hashtag").all();for(let N of I)i.hashtags+=r.prepare("INSERT OR IGNORE INTO hashtag (tag_name, tag_color) VALUES (?, (SELECT id FROM use_color WHERE color_code=?))").run(N.tag_name,m.get(N.tag_color)||null).changes}if(x(a,"object_attribute")&&x(a,"object")&&x(a,"object_template")&&x(a,"object_category")&&x(a,"project")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((O,f)=>(O.set(f.id,f.codename?`code:${f.codename}`:`name:${f.name}`),O),new Map),L=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((O,f)=>(O.set(f.id,{category_name:f.category_name,pKey:m.get(f.project_id)}),O),new Map),I=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((O,f)=>(O.set(f.id,{name:f.name,pKey:m.get(f.project_id),cat:L.get(f.category_id)?.category_name}),O),new Map),N=a.prepare("SELECT ot.id, ot.description, COALESCE(ot.attribute_type,'text') AS attribute_type, oc.category_name, oc.project_id FROM object_template ot JOIN object_category oc ON ot.category_id=oc.id").all().reduce((O,f)=>(O.set(f.id,{description:f.description,attribute_type:f.attribute_type,category_name:f.category_name,pKey:m.get(f.project_id)}),O),new Map),h=a.prepare("SELECT object_id, template_id, attribute_value FROM object_attribute").all();for(let O of h){let f=I.get(O.object_id),y=N.get(O.template_id);if(!f||!y||f.pKey!==y.pKey||f.cat!==y.category_name)continue;let F=f.pKey.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(f.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(f.pKey.slice(5));if(!F)continue;let C=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(F.id,f.cat);if(!C)continue;let w=r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(f.name,F.id,C.id),R=r.prepare("SELECT id FROM object_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=?").get(C.id,y.description,y.attribute_type);!w||!R||(i.mappings+=r.prepare("INSERT OR IGNORE INTO object_attribute (object_id, template_id, attribute_value) VALUES (?,?,?)").run(w.id,R.id,O.attribute_value||null).changes)}}if(x(a,"project_hashtag")&&x(a,"project")&&x(a,"hashtag")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((N,h)=>(N.set(h.id,h.codename?`code:${h.codename}`:`name:${h.name}`),N),new Map),L=a.prepare("SELECT id, tag_name FROM hashtag").all().reduce((N,h)=>(N.set(h.id,h.tag_name),N),new Map),I=a.prepare("SELECT project_id, hashtag_id FROM project_hashtag").all();for(let N of I){let h=m.get(N.project_id),O=L.get(N.hashtag_id);if(!h||!O)continue;let f=h.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(h.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(h.slice(5)),y=r.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(O);!f||!y||(i.mappings+=r.prepare("INSERT OR IGNORE INTO project_hashtag (project_id, hashtag_id) VALUES (?,?)").run(f.id,y.id).changes)}}if(x(a,"object_hashtag")&&x(a,"object")&&x(a,"object_category")&&x(a,"project")&&x(a,"hashtag")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((O,f)=>(O.set(f.id,f.codename?`code:${f.codename}`:`name:${f.name}`),O),new Map),L=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((O,f)=>(O.set(f.id,{category_name:f.category_name,pKey:m.get(f.project_id)}),O),new Map),I=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((O,f)=>(O.set(f.id,{name:f.name,pKey:m.get(f.project_id),cat:L.get(f.category_id)?.category_name}),O),new Map),N=a.prepare("SELECT id, tag_name FROM hashtag").all().reduce((O,f)=>(O.set(f.id,f.tag_name),O),new Map),h=a.prepare("SELECT object_id, hashtag_id FROM object_hashtag").all();for(let O of h){let f=I.get(O.object_id),y=N.get(O.hashtag_id);if(!f||!y)continue;let F=f.pKey.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(f.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(f.pKey.slice(5));if(!F)continue;let C=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(F.id,f.cat),w=C?r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(f.name,F.id,C.id):null,R=r.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(y);!w||!R||(i.mappings+=r.prepare("INSERT OR IGNORE INTO object_hashtag (object_id, hashtag_id) VALUES (?,?)").run(w.id,R.id).changes)}}if(x(a,"relation_type")){let m=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,h)=>(N.set(h.id,h.color_code),N),new Map):new Map,L=ir(a,"relation_type","color"),I=a.prepare(`SELECT relation_name, ${L?"color":"NULL AS color"} FROM relation_type`).all();for(let N of I)i.relationTypes+=r.prepare("INSERT OR IGNORE INTO relation_type (relation_name, color) VALUES (?, (SELECT id FROM use_color WHERE color_code=?))").run(N.relation_name,m.get(N.color)||null).changes}let u=x(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((m,L)=>(m.set(L.id,L.color_code),m),new Map):new Map,l=m=>u.get(m)||null;if(x(a,"world_project")){let m=r.prepare("SELECT id FROM world_project WHERE codename = ?"),L=r.prepare("SELECT id FROM world_project WHERE codename IS NULL AND name = ?"),I=r.prepare("INSERT INTO world_project (codename, name, memo, color) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let F of a.prepare("SELECT id, codename, name, memo, color FROM world_project").all()){let C=F.codename?m.get(F.codename):L.get(F.name);if(!C){let w=I.run(F.codename||null,F.name,F.memo||null,l(F.color)).lastInsertRowid;i.world_projects++,C={id:w}}N.set(F.id,C.id)}if(x(a,"world_character")){let F=r.prepare("SELECT 1 FROM world_character WHERE world_ref=? AND name=?"),C=r.prepare("INSERT INTO world_character (world_ref, name, symbol, color) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let w of a.prepare("SELECT world_ref, name, symbol, color FROM world_character").all()){let R=N.get(w.world_ref);!R||F.get(R,w.name)||C.run(R,w.name,w.symbol||null,l(w.color))}}let h=new Map;if(x(a,"world_orig_category")){let F=r.prepare("SELECT id FROM world_orig_category WHERE world_ref=? AND category_name=?"),C=r.prepare("INSERT INTO world_orig_category (world_ref, category_name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let w of a.prepare("SELECT id, world_ref, category_name, color FROM world_orig_category").all()){let R=N.get(w.world_ref);if(!R)continue;let T=F.get(R,w.category_name);T||(T={id:C.run(R,w.category_name,l(w.color)).lastInsertRowid}),h.set(w.id,T.id)}}let O=new Map;if(x(a,"world_orig_template")){let F=r.prepare("SELECT id FROM world_orig_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=COALESCE(?,'text')"),C=r.prepare("INSERT INTO world_orig_template (category_id, description, attribute_type, display_order) VALUES (?,?,?,?)");for(let w of a.prepare("SELECT id, category_id, description, attribute_type, display_order FROM world_orig_template").all()){let R=h.get(w.category_id);if(!R)continue;let T=F.get(R,w.description,w.attribute_type||"text");T||(T={id:C.run(R,w.description,w.attribute_type||"text",w.display_order||0).lastInsertRowid}),O.set(w.id,T.id)}}let f=new Map;if(x(a,"world_orig_object")){let F=r.prepare("SELECT id FROM world_orig_object WHERE world_ref=? AND category_id=? AND name=?"),C=r.prepare("INSERT INTO world_orig_object (name, world_ref, category_id, color, note) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)");for(let w of a.prepare("SELECT id, name, world_ref, category_id, color, note FROM world_orig_object").all()){let R=N.get(w.world_ref),T=h.get(w.category_id);if(!R||!T)continue;let _=F.get(R,T,w.name);_||(_={id:C.run(w.name,R,T,l(w.color),w.note||null).lastInsertRowid}),f.set(w.id,_.id)}}if(x(a,"world_orig_attribute")){let F=r.prepare("INSERT OR IGNORE INTO world_orig_attribute (object_id, template_id, attribute_value) VALUES (?,?,?)");for(let C of a.prepare("SELECT object_id, template_id, attribute_value FROM world_orig_attribute").all()){let w=f.get(C.object_id),R=O.get(C.template_id);!w||!R||(i.mappings+=F.run(w,R,C.attribute_value||null).changes)}}let y=new Map;if(x(a,"world_timeline")){let F=r.prepare("SELECT id FROM world_timeline WHERE world_ref=? AND name=?"),C=r.prepare("INSERT INTO world_timeline (world_ref, name) VALUES (?,?)");for(let w of a.prepare("SELECT id, world_ref, name FROM world_timeline").all()){let R=N.get(w.world_ref);if(!R)continue;let T=F.get(R,w.name);T||(T={id:C.run(R,w.name).lastInsertRowid}),y.set(w.id,T.id)}}if(x(a,"world_timeline_event")&&x(a,"world_timeline_date")){let F=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM world_timeline_date").all().reduce((T,_)=>(T.set(_.id,_),T),new Map),C=(T,_,S,b,W)=>(r.prepare("INSERT OR IGNORE INTO world_timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(T,_,S,b||0,W||0),r.prepare("SELECT id FROM world_timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(T,_,S,b||0,W||0).id),w=r.prepare("SELECT 1 FROM world_timeline_event WHERE timeline_ref=? AND date_ref=?"),R=r.prepare("INSERT INTO world_timeline_event (timeline_ref, date_ref) VALUES (?,?)");for(let T of a.prepare("SELECT timeline_ref, date_ref FROM world_timeline_event").all()){let _=y.get(T.timeline_ref),S=F.get(T.date_ref);if(!_||!S)continue;let b=C(S.day,S.month,S.years,S.hour,S.minute);w.get(_,b)||(i.events+=R.run(_,b).changes)}}if(x(a,"world_description")){let F=r.prepare("SELECT 1 FROM world_description WHERE world_ref=? AND COALESCE(attribute_name,'')=COALESCE(?,'') AND COALESCE(attribute_text,'')=COALESCE(?,'')"),C=r.prepare("INSERT INTO world_description (world_ref, attribute_name, attribute_text) VALUES (?,?,?)");for(let w of a.prepare("SELECT world_ref, attribute_name, attribute_text FROM world_description").all()){let R=N.get(w.world_ref);!R||F.get(R,w.attribute_name||null,w.attribute_text||null)||(i.descriptions+=C.run(R,w.attribute_name||null,w.attribute_text||null).changes)}}}if(x(a,"game_project")){let m=r.prepare("SELECT id FROM game_project WHERE codename = ?"),L=r.prepare("SELECT id FROM game_project WHERE codename IS NULL AND name = ?"),I=r.prepare("INSERT INTO game_project (codename, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let R of a.prepare("SELECT id, codename, name, memo, color_ref FROM game_project").all()){let T=R.codename?m.get(R.codename):L.get(R.name);if(!T){let _=I.run(R.codename||null,R.name,R.memo||null,l(R.color_ref)).lastInsertRowid;i.game_projects++,T={id:_}}N.set(R.id,T.id)}let h=new Map;if(x(a,"game_char_template")){let R=r.prepare("SELECT id FROM game_char_template WHERE game_ref=? AND attribute_name=?"),T=r.prepare("INSERT INTO game_char_template (game_ref, attribute_name, attribute_type, levelable) VALUES (?,?,?,?)");for(let _ of a.prepare("SELECT id, game_ref, attribute_name, attribute_type, levelable FROM game_char_template").all()){let S=N.get(_.game_ref);if(!S)continue;let b=R.get(S,_.attribute_name);b||(b={id:T.run(S,_.attribute_name,_.attribute_type||"text",_.levelable?1:0).lastInsertRowid}),h.set(_.id,b.id)}}let O=new Map;if(x(a,"game_character")){let R=r.prepare("SELECT id FROM game_character WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_character (game_ref, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let _ of a.prepare("SELECT id, game_ref, name, memo, color_ref FROM game_character").all()){let S=N.get(_.game_ref);if(!S)continue;let b=R.get(S,_.name);b||(b={id:T.run(S,_.name,_.memo||null,l(_.color_ref)).lastInsertRowid}),O.set(_.id,b.id)}}if(x(a,"game_char_attribute")){let R=r.prepare("INSERT OR IGNORE INTO game_char_attribute (char_ref, template_ref, attribute_text, level) VALUES (?,?,?,?)");for(let T of a.prepare("SELECT char_ref, template_ref, attribute_text, level FROM game_char_attribute").all()){let _=O.get(T.char_ref),S=h.get(T.template_ref);!_||!S||(i.mappings+=R.run(_,S,T.attribute_text||null,T.level||0).changes)}}let f=new Map;if(x(a,"game_collection")){let R=r.prepare("SELECT id FROM game_collection WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_collection (game_ref, name, color_ref) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let _ of a.prepare("SELECT id, game_ref, name, color_ref FROM game_collection").all()){let S=N.get(_.game_ref);if(!S)continue;let b=R.get(S,_.name);b||(b={id:T.run(S,_.name,l(_.color_ref)).lastInsertRowid}),f.set(_.id,b.id)}}let y=new Map;if(x(a,"game_col_template")){let R=r.prepare("SELECT id FROM game_col_template WHERE collection_ref=? AND attribute_name=?"),T=r.prepare("INSERT INTO game_col_template (collection_ref, attribute_name, attribute_type, levelable) VALUES (?,?,?,?)");for(let _ of a.prepare("SELECT id, collection_ref, attribute_name, attribute_type, levelable FROM game_col_template").all()){let S=f.get(_.collection_ref);if(!S)continue;let b=R.get(S,_.attribute_name);b||(b={id:T.run(S,_.attribute_name,_.attribute_type||"text",_.levelable?1:0).lastInsertRowid}),y.set(_.id,b.id)}}let F=new Map;if(x(a,"game_col_element")){let R=r.prepare("SELECT id FROM game_col_element WHERE collection_ref=? AND name=?"),T=r.prepare("INSERT INTO game_col_element (collection_ref, name, color_ref) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let _ of a.prepare("SELECT id, collection_ref, name, color_ref FROM game_col_element").all()){let S=f.get(_.collection_ref);if(!S)continue;let b=R.get(S,_.name);b||(b={id:T.run(S,_.name,l(_.color_ref)).lastInsertRowid}),F.set(_.id,b.id)}}if(x(a,"game_col_attribute")){let R=r.prepare("INSERT OR IGNORE INTO game_col_attribute (element_ref, template_ref, attribute_text, level) VALUES (?,?,?,?)");for(let T of a.prepare("SELECT element_ref, template_ref, attribute_text, level FROM game_col_attribute").all()){let _=F.get(T.element_ref),S=y.get(T.template_ref);!_||!S||(i.mappings+=R.run(_,S,T.attribute_text||null,T.level||0).changes)}}let C=new Map;if(x(a,"game_story")){let R=r.prepare("SELECT id FROM game_story WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_story (game_ref, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let _ of a.prepare("SELECT id, game_ref, name, memo, color_ref FROM game_story").all()){let S=N.get(_.game_ref);if(!S)continue;let b=R.get(S,_.name);b||(b={id:T.run(S,_.name,_.memo||null,l(_.color_ref)).lastInsertRowid}),C.set(_.id,b.id)}}let w=new Map;if(x(a,"game_dialogue")){let R=r.prepare("SELECT id FROM game_dialogue WHERE story_ref=? AND name=?"),T=r.prepare("INSERT INTO game_dialogue (story_ref, name, memo, color_ref, pos_x, pos_y) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?,?)");for(let _ of a.prepare("SELECT id, story_ref, name, memo, color_ref, pos_x, pos_y FROM game_dialogue").all()){let S=C.get(_.story_ref);if(!S)continue;let b=R.get(S,_.name);b||(b={id:T.run(S,_.name,_.memo||null,l(_.color_ref),_.pos_x||0,_.pos_y||0).lastInsertRowid}),w.set(_.id,b.id)}}if(x(a,"game_conversation")){let R=r.prepare("SELECT 1 FROM game_conversation WHERE dialogue_ref=? AND talk_order=?"),T=r.prepare("INSERT INTO game_conversation (dialogue_ref, char_ref, talk_sentence, talk_order) VALUES (?,?,?,?)");for(let _ of a.prepare("SELECT dialogue_ref, char_ref, talk_sentence, talk_order FROM game_conversation").all()){let S=w.get(_.dialogue_ref);if(!S||R.get(S,_.talk_order))continue;let b=_.char_ref?O.get(_.char_ref):null;i.dialogues+=T.run(S,b||null,_.talk_sentence||null,_.talk_order||0).changes}}if(x(a,"game_storyline")){let R=r.prepare("INSERT OR IGNORE INTO game_storyline (story_ref, from_ref, to_ref, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let T of a.prepare("SELECT story_ref, from_ref, to_ref, color_ref FROM game_storyline").all()){let _=C.get(T.story_ref),S=w.get(T.from_ref),b=w.get(T.to_ref);!_||!S||!b||R.run(_,S,b,l(T.color_ref))}}}if(x(a,"write_project")){let m=r.prepare("SELECT id FROM write_project WHERE codename = ?"),L=r.prepare("SELECT id FROM write_project WHERE codename IS NULL AND project_name = ?"),I=r.prepare("INSERT INTO write_project (project_name, codename, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let y of a.prepare("SELECT id, project_name, codename, color FROM write_project").all()){let F=y.codename?m.get(y.codename):L.get(y.project_name);if(!F){let C=I.run(y.project_name,y.codename||null,l(y.color)).lastInsertRowid;i.write_projects++,F={id:C}}N.set(y.id,F.id)}let h=new Map;if(x(a,"write_series")){let y=r.prepare("SELECT id FROM write_series WHERE project_id=? AND name=?"),F=r.prepare("INSERT INTO write_series (project_id, name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let C of a.prepare("SELECT id, project_id, name, color FROM write_series").all()){let w=N.get(C.project_id);if(!w)continue;let R=y.get(w,C.name);R||(R={id:F.run(w,C.name,l(C.color)).lastInsertRowid}),h.set(C.id,R.id)}}let O=new Map;if(x(a,"write_book")){let y=r.prepare("SELECT id FROM write_book WHERE series_id=? AND name=?"),F=r.prepare("INSERT INTO write_book (series_id, name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let C of a.prepare("SELECT id, series_id, name, color FROM write_book").all()){let w=h.get(C.series_id);if(!w)continue;let R=y.get(w,C.name);R||(R={id:F.run(w,C.name,l(C.color)).lastInsertRowid}),O.set(C.id,R.id)}}if(x(a,"write_chapter")){let y=r.prepare("SELECT 1 FROM write_chapter WHERE book_id=? AND chapter_order=?"),F=r.prepare("INSERT INTO write_chapter (book_id, name, chapter_order, color, chapter_content) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)");for(let C of a.prepare("SELECT book_id, name, chapter_order, color, chapter_content FROM write_chapter").all()){let w=O.get(C.book_id);!w||y.get(w,C.chapter_order)||(i.chapters+=F.run(w,C.name,C.chapter_order||0,l(C.color),C.chapter_content||null).changes)}}let f=new Map;if(x(a,"write_note")){let y=r.prepare("SELECT id FROM write_note WHERE project_id=? AND notename=?"),F=r.prepare("INSERT INTO write_note (project_id, notename, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let C of a.prepare("SELECT id, project_id, notename, color FROM write_note").all()){let w=N.get(C.project_id);if(!w)continue;let R=y.get(w,C.notename);R||(R={id:F.run(w,C.notename,l(C.color)).lastInsertRowid}),f.set(C.id,R.id)}}if(x(a,"write_chat")){let y=r.prepare("SELECT 1 FROM write_chat WHERE note_id=? AND chat_order=?"),F=r.prepare("INSERT INTO write_chat (note_id, chat, chat_order) VALUES (?,?,?)");for(let C of a.prepare("SELECT note_id, chat, chat_order FROM write_chat").all()){let w=f.get(C.note_id);!w||y.get(w,C.chat_order)||F.run(w,C.chat,C.chat_order||0)}}}if(x(a,"relation")&&x(a,"object")&&x(a,"object_category")&&x(a,"project")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((R,T)=>(R.set(T.id,T.codename?`code:${T.codename}`:`name:${T.name}`),R),new Map),L=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((R,T)=>(R.set(T.id,{category_name:T.category_name,pKey:m.get(T.project_id)}),R),new Map),I=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((R,T)=>(R.set(T.id,{name:T.name,pKey:m.get(T.project_id),cat:L.get(T.category_id)?.category_name}),R),new Map),N=R=>R?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(R.slice(5)):R?r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(R.slice(5)):null,h=R=>{let T=I.get(R);if(!T||!T.pKey||!T.cat)return null;let _=N(T.pKey);if(!_)return null;let S=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(_.id,T.cat);return S&&r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(T.name,_.id,S.id)?.id||null},O=new Map;if(x(a,"timeline_event")&&x(a,"timeline")&&x(a,"timeline_date")){let R=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all().reduce((_,S)=>(_.set(S.id,S),_),new Map),T=a.prepare("SELECT id, line_name, project_id FROM timeline").all().reduce((_,S)=>(_.set(S.id,{line_name:S.line_name,pKey:m.get(S.project_id)}),_),new Map);O=a.prepare("SELECT id, timeline_id, event_name, start_at FROM timeline_event").all().reduce((_,S)=>(_.set(S.id,{event_name:S.event_name,tl:T.get(S.timeline_id),sDate:R.get(S.start_at)}),_),new Map)}let f=R=>{let T=O.get(R);if(!T||!T.tl||!T.sDate)return null;let _=N(T.tl.pKey);if(!_)return null;let S=r.prepare("SELECT id FROM timeline WHERE project_id=? AND line_name=?").get(_.id,T.tl.line_name);if(!S)return null;let b=r.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(T.sDate.day,T.sDate.month,T.sDate.years,T.sDate.hour,T.sDate.minute);return b&&r.prepare("SELECT id FROM timeline_event WHERE timeline_id=? AND COALESCE(event_name,'')=COALESCE(?,'') AND start_at=?").get(S.id,T.event_name||null,b.id)?.id||null},y=x(a,"relation_type")?a.prepare("SELECT id, relation_name FROM relation_type").all().reduce((R,T)=>(R.set(T.id,T.relation_name),R),new Map):new Map,F=new Map,C=r.prepare("SELECT id FROM relation WHERE project_id=? AND relation_type IS ?"),w=r.prepare("INSERT INTO relation (project_id, relation_type, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let R of a.prepare("SELECT id, project_id, relation_type, color FROM relation").all()){let T=N(m.get(R.project_id));if(!T)continue;let _=y.get(R.relation_type),S=_?r.prepare("SELECT id FROM relation_type WHERE relation_name=?").get(_)?.id:null,b=C.get(T.id,S??null);b||(b={id:w.run(T.id,S||null,l(R.color)).lastInsertRowid}),F.set(R.id,b.id)}if(x(a,"relation_obob")){let R=r.prepare("INSERT OR IGNORE INTO relation_obob (relation_id, object_from, object_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, object_from, object_to FROM relation_obob").all()){let _=F.get(T.relation_id),S=h(T.object_from),b=h(T.object_to);!_||!S||!b||(i.relations+=R.run(_,S,b).changes)}}if(x(a,"relation_obtl")){let R=r.prepare("INSERT OR IGNORE INTO relation_obtl (relation_id, object_from, timeline_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, object_from, timeline_to FROM relation_obtl").all()){let _=F.get(T.relation_id),S=h(T.object_from),b=f(T.timeline_to);!_||!S||!b||(i.relations+=R.run(_,S,b).changes)}}if(x(a,"relation_tltl")){let R=r.prepare("INSERT OR IGNORE INTO relation_tltl (relation_id, timeline_from, timeline_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, timeline_from, timeline_to FROM relation_tltl").all()){let _=F.get(T.relation_id),S=f(T.timeline_from),b=f(T.timeline_to);!_||!S||!b||(i.relations+=R.run(_,S,b).changes)}}}let g=r.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get();if(g)for(let m of P_)r.prepare(`UPDATE ${m} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(g.id)});r.exec("PRAGMA foreign_keys = OFF");try{s()}finally{try{r.exec("PRAGMA foreign_keys = ON")}catch{}try{a.close()}catch{}n()}try{Ie().rebuildWikiIndex()}catch(u){console.error("wiki reindex after merge:",u)}return i}Ec.exports={getAppDatabasePath:W_,getVaultPath:H_,exportDatabaseTo:X_,importDatabaseMerge:B_}});var te=H((pI,uc)=>{"use strict";A();var{getDB:sr,getAppDB:G_,getVaultDB:$_,createVaultDB:Y_,closeVault:V_,closeAllVaults:q_,pinVault:J_,unpinVault:K_,adaptDb:z_,perfLog:Q_}=et(),{exportDatabaseTo:Z_,importDatabaseMerge:em,getAppDatabasePath:tm,getVaultPath:rm}=$n(),om=()=>sr().undo(),nm=()=>sr().redo(),am=()=>sr().canUndo(),im=()=>sr().canRedo();uc.exports={getDB:sr,getAppDB:G_,getVaultDB:$_,createVaultDB:Y_,closeVault:V_,closeAllVaults:q_,pinVault:J_,unpinVault:K_,adaptDb:z_,exportDatabaseTo:Z_,importDatabaseMerge:em,getAppDatabasePath:tm,getVaultPath:rm,perfLog:Q_,historyUndo:om,historyRedo:nm,historyCanUndo:am,historyCanRedo:im}});var Kn=H((mI,Lc)=>{"use strict";A();var lt=(Le(),X(be)),{getAppDB:Yn,getVaultDB:Pt,createVaultDB:_c,closeVault:fo}=te(),{currentNexusId:pc}=gt(),{NEXUS_PROJECT_TABLES:mc,listVaults:fc,getVault:dt,insertVault:Tc,insertVaultWithId:sm,updateVaultMeta:Nc,removeVault:mo,refreshVaultCounts:gc,countVaultItems:hc,vaultDefaultPath:Vn,vaultsDir:cm,setVaultPath:qn,vaultPathInUse:Rc,refreshOpenVaultCounts:lm,touchVaultOpened:dm}=jn(),{openVaultProbe:Em}=et();function Sc(e,t){return t?(e.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(t),e.prepare("SELECT id FROM use_color WHERE color_code=?").get(t)?.id??null):null}function Oc(e){return e?(pc()?Pt(pc()):Yn()).prepare("SELECT color_code FROM use_color WHERE id=?").get(e)?.color_code??null:null}function Jn(e,t=null){if(Yn().prepare("SELECT id FROM nexus_file WHERE name=? COLLATE NOCASE AND id IS NOT ?").get(e,t))throw new Error("nexus name already in use")}function um(){let e=Yn();if(e.prepare("SELECT id FROM nexus_file LIMIT 1").get())return;let t;try{t=e.prepare(`
      SELECT n.id, n.name, n.memo, c.color_code
      FROM nexus n LEFT JOIN use_color c ON c.id = n.color
      ORDER BY n.id
    `).all()}catch{return}t.length&&e.transaction(()=>{for(let r of t){sm({id:r.id,name:r.name,memo:r.memo,colorCode:r.color_code,filePath:null});let o=hc(e,r.id);e.prepare("UPDATE nexus_file SET project_count=?, counts_at=datetime('now') WHERE id=?").run(o,r.id)}})()}var pm=()=>(um(),lm(),fc().map(e=>({id:e.id,name:e.name,memo:e.memo,color:null,color_code:e.color_code,update_at:e.update_at,project_count:e.project_count,file_path:e.file_path,missing:e.missing}))),_m=e=>{let t=dt(e);if(!t)return;let r={id:t.id,name:t.name,memo:t.memo,color:null,color_code:t.color_code,update_at:t.update_at,project_count:t.project_count,file_path:t.file_path,missing:t.missing};try{let o=Pt(e).prepare(`
      SELECT n.name, n.memo, c.color_code FROM nexus n LEFT JOIN use_color c ON c.id = n.color WHERE n.id=?
    `).get(e);o&&Object.assign(r,{name:o.name,memo:o.memo,color_code:o.color_code})}catch{}return r},mm=(e,t,r,o=null)=>{Jn(e);let n=Oc(r),a=Tc({name:e,memo:t||null,colorCode:n,filePath:null}),i=o||Vn(e,a);if(Rc(i,a))throw mo(a),new Error("vault file already registered");try{let s=_c(a,i);s.prepare("INSERT INTO nexus (id, name, memo, color) VALUES (?,?,?,?)").run(a,e,t||null,Sc(s,n)),qn(a,i)}catch(s){fo(a);try{lt.rmSync(i,{force:!0})}catch{}throw mo(a),s}return a},fm=(e,t,r,o)=>{Jn(t,e);let n=Oc(o),a=Pt(e);a.prepare("UPDATE nexus SET name=?, memo=?, color=?, update_at=datetime('now') WHERE id=?").run(t,r||null,Sc(a,n),e),Nc(e,{name:t,memo:r||null,colorCode:n})},Tm=e=>{let t;try{t=hc(Pt(e),e)}catch{t=dt(e)?.project_count??0}if(t>0)return{blocked:!0,count:t};let r=dt(e)?.file_path||null;if(fo(e),r)try{lt.rmSync(r,{force:!0})}catch{}return mo(e),{blocked:!1,count:0,filePath:r}};function Nm(e,t){if(!dt(e))return{ok:!1,code:"not_found"};if(!lt.existsSync(t))return{ok:!1,code:"file_missing"};if(Rc(t,e))return{ok:!1,code:"already_registered"};let r;try{r=Em(t)}catch{return{ok:!1,code:"not_a_vault"}}try{let o=r.prepare("SELECT id, name FROM nexus").all();return o.length!==1?{ok:!1,code:"not_a_vault"}:(fo(e),qn(e,t),Nc(e,{name:o[0].name,memo:dt(e)?.memo??null,colorCode:dt(e)?.color_code??null}),{ok:!0,filePath:t,name:o[0].name})}catch{return{ok:!1,code:"not_a_vault"}}finally{try{r.close()}catch{}}}var gm=["note_folder","note","wiki_link","module","import_file","entity_relation","calendar_template"];function hm(e){let t=dt(e);if(!t||!t.file_path)return{ok:!1,code:"not_found"};if(!lt.existsSync(t.file_path))return{ok:!1,code:"file_missing"};let r=`${t.name} (copy)`;for(let a=2;;a++){try{Jn(r);break}catch{r=`${t.name} (copy ${a})`}if(a>50)return{ok:!1,code:"name_taken"}}let o=Tc({name:r,memo:t.memo,colorCode:t.color_code,filePath:null}),n=Vn(r,o);try{lt.mkdirSync((ge(),X(xe)).dirname(n),{recursive:!0}),Pt(e).prepare("VACUUM INTO ?").run(n);let a=_c(o,n);return a.transaction(()=>{a.exec("PRAGMA defer_foreign_keys = ON"),a.prepare("UPDATE nexus SET id=?, name=? WHERE id=?").run(o,r,e);for(let i of gm)try{a.prepare(`UPDATE ${i} SET nexus_ref=? WHERE nexus_ref=?`).run(o,e)}catch{}for(let i of mc)try{a.prepare(`UPDATE ${i} SET nexus_ref=? WHERE nexus_ref=?`).run(o,e)}catch{}})(),qn(o,n),gc(o),{ok:!0,id:o,name:r,filePath:n}}catch(a){fo(o);try{lt.rmSync(n,{force:!0})}catch{}return mo(o),{ok:!1,code:"copy_failed",error:String(a?.message||a)}}}function Rm(e,t){let r=dt(e);if(!r||!r.file_path)return{ok:!1,code:"not_found"};if(!lt.existsSync(r.file_path))return{ok:!1,code:"file_missing"};try{return lt.rmSync(t,{force:!0}),Pt(e).prepare("VACUUM INTO ?").run(t),{ok:!0,filePath:t}}catch(o){return{ok:!1,code:"copy_failed",error:String(o?.message||o)}}}Lc.exports={getNexuses:pm,getNexus:_m,createNexus:mm,updateNexus:fm,deleteNexus:Tm,relinkNexusFile:Nm,duplicateNexus:hm,exportNexusVaultFile:Rm,vaultDefaultPath:Vn,vaultsDir:cm,refreshVaultCounts:gc,NEXUS_PROJECT_TABLES:mc,touchVaultOpened:dm,listVaults:fc}});var Ac=H((TI,Ic)=>{"use strict";A();var{getDB:Ve}=te(),Sm=e=>Ve().prepare(`
  SELECT nf.*, uc.color_code FROM note_folder nf
  LEFT JOIN use_color uc ON uc.id = nf.color
  WHERE nf.nexus_ref=? ORDER BY nf.name COLLATE NOCASE
`).all(e),Om=(e,t,r,o)=>Ve().prepare("INSERT INTO note_folder (nexus_ref,parent_ref,name,color) VALUES (?,?,?,?)").run(e,r||null,t,o||null).lastInsertRowid,Lm=(e,t,r,o)=>Ve().prepare("UPDATE note_folder SET name=?,parent_ref=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,e),Im=e=>Ve().prepare("DELETE FROM note_folder WHERE id=?").run(e),Am=e=>Ve().prepare(`
  SELECT n.id, n.nexus_ref, n.folder_ref, n.title, n.color, n.pinned, n.update_at, uc.color_code
  FROM note n LEFT JOIN use_color uc ON uc.id = n.color
  WHERE n.nexus_ref=? ORDER BY n.pinned DESC, n.title COLLATE NOCASE
`).all(e),ym=e=>Ve().prepare(`
  SELECT n.*, uc.color_code FROM note n LEFT JOIN use_color uc ON uc.id = n.color WHERE n.id=?
`).get(e),wm=(e,t,r,o)=>{let n=Ve(),a=(t||"Untitled").trim()||"Untitled";for(let i=1;i<=200;i++){let s=i===1?a:`${a} ${i}`;try{let u=n.prepare("INSERT INTO note (nexus_ref,folder_ref,title,color) VALUES (?,?,?,?)").run(e,r||null,s,o||null).lastInsertRowid;return Ie().resolveDanglingLinks(s,e),u}catch(u){if(!/UNIQUE/i.test(String(u.message)))throw u}}throw new Error("could not find a free note title")},Cm=(e,t,r,o,n)=>{let a=Ve().prepare("UPDATE note SET title=?,folder_ref=?,color=?,pinned=?,update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,n?1:0,e),i=Ie();return i.resolveDanglingLinks(t,i.nexusOfNote(e)),a},bm=(e,t)=>{let r=Ve().prepare("UPDATE note SET content=?,update_at=datetime('now') WHERE id=?").run(t??"",e),o=Ie();return o.reindexWikiLinks(`note_${e}`,t,o.nexusOfNote(e)),r},km=e=>Ve().prepare("DELETE FROM note WHERE id=?").run(e);Ic.exports={getNoteFolders:Sm,createNoteFolder:Om,updateNoteFolder:Lm,deleteNoteFolder:Im,getNotes:Am,getNote:ym,createNote:wm,updateNote:Cm,updateNoteContent:bm,deleteNote:km}});var bc=H((gI,Cc)=>{"use strict";A();var{getDB:yc,getAppDB:Dm}=te(),{currentNexusId:wc}=gt(),cr=()=>wc()?yc():Dm(),Fm=()=>cr().prepare("SELECT * FROM use_color ORDER BY id").all(),xm=e=>cr().prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(e),Um=e=>cr().prepare("UPDATE use_color SET update_at=datetime('now') WHERE id=?").run(e),Mm=()=>cr().prepare("SELECT * FROM use_color ORDER BY update_at DESC LIMIT 10").all(),vm=e=>{let t=cr();return wc()&&t.prepare(`
    SELECT 1 FROM (
      SELECT project_color FROM project WHERE project_color=?
      UNION ALL SELECT folder_color FROM project_folder WHERE folder_color=?
      UNION ALL SELECT color FROM object_category WHERE color=?
      UNION ALL SELECT color FROM object WHERE color=?
      UNION ALL SELECT color FROM timeline WHERE color=?
      UNION ALL SELECT color FROM timeline_event WHERE color=?
      UNION ALL SELECT color FROM relation WHERE color=?
      UNION ALL SELECT tag_color FROM hashtag WHERE tag_color=?
    ) LIMIT 1
  `).get(e,e,e,e,e,e,e,e)?!1:(t.prepare("DELETE FROM use_color WHERE id=?").run(e),!0)},jm=()=>yc().prepare("SELECT id, glyph, label FROM symbol_collection ORDER BY id").all();Cc.exports={getColors:Fm,addColor:xm,markColorUsed:Um,getRecentColors:Mm,deleteColor:vm,getSymbolCollection:jm}});var zn=H((RI,kc)=>{"use strict";A();var{getDB:ue}=te(),Pm=e=>ue().prepare("SELECT t.*, uc.color_code FROM timeline t LEFT JOIN use_color uc ON t.color=uc.id WHERE t.project_id=? ORDER BY t.line_name").all(e),Wm=(e,t,r)=>ue().prepare("INSERT INTO timeline (line_name,project_id,color) VALUES (?,?,?)").run(t,e,r||null),Hm=e=>ue().prepare("SELECT t.*, uc.color_code FROM timeline t LEFT JOIN use_color uc ON t.color=uc.id WHERE t.module_ref=? ORDER BY t.line_name").all(e),Xm=(e,t,r)=>ue().prepare("INSERT INTO timeline (line_name,module_ref,color) VALUES (?,?,?)").run(t,e,r||null),Bm=(e,t,r)=>ue().prepare("UPDATE timeline SET line_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),Gm=e=>ue().prepare("DELETE FROM timeline WHERE id=?").run(e),$m=(e,t,r,o,n)=>{let a=ue();return a.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(e,t,r,o||0,n||0),a.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(e,t,r,o||0,n||0).id},Ym=e=>ue().prepare(`
    SELECT te.*, te.story, uc.color_code,
      s.day s_day, s.month s_month, s.years s_years, s.hour s_hour, s.minute s_minute,
      e.day e_day, e.month e_month, e.years e_years, e.hour e_hour, e.minute e_minute
    FROM timeline_event te
    LEFT JOIN use_color uc ON te.color=uc.id
    LEFT JOIN timeline_date s ON te.start_at=s.id
    LEFT JOIN timeline_date e ON te.end_at=e.id
    WHERE te.timeline_id=?
    ORDER BY s.years,s.month,s.day,s.hour,s.minute
  `).all(e),Vm=(e,t,r,o,n,a)=>ue().prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,end_at,color,story) VALUES (?,?,?,?,?,?)").run(e,t,r,o||null,n||null,a||null),qm=(e,t,r,o,n,a)=>ue().prepare("UPDATE timeline_event SET event_name=?,start_at=?,end_at=?,color=?,story=?,update_at=datetime('now') WHERE id=?").run(t,r,o||null,n||null,a||null,e),Jm=(e,t)=>ue().prepare("UPDATE timeline_event SET story=?, update_at=datetime('now') WHERE id=?").run(t||null,e),Km=(e,t,r)=>ue().prepare("UPDATE timeline_event SET icon=?, color=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,e),zm=e=>ue().prepare("DELETE FROM timeline_event WHERE id=?").run(e),Qm=e=>ue().prepare("SELECT h.*, uc.color_code FROM hashtag h LEFT JOIN use_color uc ON h.tag_color=uc.id JOIN event_hashtag eh ON h.id=eh.hashtag_id WHERE eh.event_id=? ORDER BY h.tag_name").all(e),Zm=(e,t)=>{let r=ue();return r.transaction(()=>{r.prepare("DELETE FROM event_hashtag WHERE event_id=?").run(e);let o=r.prepare("INSERT INTO event_hashtag (event_id,hashtag_id) VALUES (?,?)");for(let n of t||[])o.run(e,n)})(),!0},ef=(e,t)=>ue().prepare("INSERT OR IGNORE INTO event_hashtag (event_id,hashtag_id) VALUES (?,?)").run(e,t),tf=(e,t)=>ue().prepare("DELETE FROM event_hashtag WHERE event_id=? AND hashtag_id=?").run(e,t),rf=(e,t)=>ue().prepare(`
    SELECT te.id, te.event_name, tl.line_name, uc.color_code
    FROM timeline_event te JOIN event_hashtag eh ON eh.event_id = te.id
    JOIN timeline tl ON te.timeline_id = tl.id LEFT JOIN use_color uc ON te.color = uc.id
    WHERE eh.hashtag_id = ? AND tl.project_id = ? ORDER BY tl.line_name, te.event_name
  `).all(e,t);kc.exports={getTimelines:Pm,createTimeline:Wm,updateTimeline:Bm,deleteTimeline:Gm,getModuleTimelines:Hm,createModuleTimeline:Xm,getOrCreateDate:$m,getEvents:Ym,createEvent:Vm,updateEvent:qm,updateEventStory:Jm,updateEventIcon:Km,deleteEvent:zm,getEventTags:Qm,setEventTags:Zm,addEventTag:ef,removeEventTag:tf,getEventsByHashtag:rf}});var Zn=H((OI,Dc)=>{"use strict";A();var{getDB:ke}=te(),of=e=>ke().prepare("SELECT m.*, uc.color_code FROM map m LEFT JOIN use_color uc ON m.color=uc.id WHERE m.project_id=? ORDER BY m.map_name").all(e),nf=(e,t,r)=>ke().prepare("INSERT INTO map (map_name,project_id,color) VALUES (?,?,?)").run(t,e,r||null),af=(e,t,r)=>ke().prepare("UPDATE map SET map_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),sf=e=>ke().prepare("DELETE FROM map WHERE id=?").run(e),cf=e=>ke().prepare("SELECT a.*, uc.color_code FROM map_area a LEFT JOIN use_color uc ON a.color=uc.id WHERE a.map_id=? ORDER BY a.area_name").all(e),lf=(e,t,r)=>ke().prepare("INSERT INTO map_area (map_id,area_name,color) VALUES (?,?,?)").run(e,t,r||null),df=(e,t,r)=>ke().prepare("UPDATE map_area SET area_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),Ef=e=>ke().prepare("DELETE FROM map_area WHERE id=?").run(e),uf=e=>ke().prepare("SELECT id, area_id, point_order, x, y FROM map_point WHERE area_id=? ORDER BY point_order, id").all(e),pf=(e,t=[])=>{let r=ke();r.transaction((n,a)=>{r.prepare("DELETE FROM map_point WHERE area_id=?").run(n);let i=r.prepare("INSERT INTO map_point (area_id,point_order,x,y) VALUES (?,?,?,?)");a.forEach((s,u)=>i.run(n,u,Number(s.x)||0,Number(s.y)||0))})(e,Array.isArray(t)?t:[])},Qn=e=>ke().prepare("SELECT m.*, uc.color_code FROM map m LEFT JOIN use_color uc ON m.color=uc.id WHERE m.module_ref=?").get(e);function _f(e){let t=Qn(e);return t||(ke().prepare("INSERT INTO map (module_ref) VALUES (?)").run(e),Qn(e))}Dc.exports={getMaps:of,createMap:nf,updateMap:af,deleteMap:sf,getMapAreas:cf,createMapArea:lf,updateMapArea:df,deleteMapArea:Ef,getMapAreaPoints:uf,setMapAreaPoints:pf,getModuleMap:Qn,getOrCreateModuleMap:_f}});var xc=H((II,Fc)=>{"use strict";A();var{getDB:lr}=te(),mf=()=>lr().prepare("SELECT h.*, uc.color_code FROM hashtag h LEFT JOIN use_color uc ON h.tag_color=uc.id ORDER BY h.tag_name").all(),ff=(e,t)=>lr().prepare("INSERT INTO hashtag (tag_name,tag_color) VALUES (?,?)").run(e,t||null),Tf=(e,t,r)=>lr().prepare("UPDATE hashtag SET tag_name=?,tag_color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),Nf=e=>lr().prepare("DELETE FROM hashtag WHERE id=?").run(e),gf=(e,t)=>lr().prepare(`
    SELECT o.*, oc.category_name, uc.color_code
    FROM object o JOIN object_hashtag oh ON oh.object_id = o.id
    JOIN object_category oc ON o.category_id = oc.id LEFT JOIN use_color uc ON o.color = uc.id
    WHERE oh.hashtag_id = ? AND o.project_id = ? ORDER BY oc.category_name, o.name
  `).all(e,t);Fc.exports={getHashtags:mf,createHashtag:ff,updateHashtag:Tf,deleteHashtag:Nf,getObjectsByHashtag:gf}});var Mc=H((yI,Uc)=>{A();function hf(e){let{getDB:t}=te();return t().readTx(()=>Rf(e))()}function Rf(e){let{getDB:t}=te(),{scopedAll:r}=ao(),o=t(),n=e??null,a=o.prepare(`
    SELECT m.id, m.name, m.kind, uc.color_code, COALESCE(LENGTH(m.description),0) AS desc_bytes FROM module m
    LEFT JOIN use_color uc ON uc.id=m.color
    WHERE (? IS NULL OR m.nexus_ref=?) ORDER BY m.display_order, m.id
  `).all(n,n),i=new Map(a.map(({desc_bytes:g,...m})=>[m.id,{...m,items:0,bytes:g||0}])),s=(g,m,L,I)=>{try{for(let N of r(o,g,n)){let h=i.get(N[m]);h&&(h.items+=N[L]||0,h.bytes+=N[I]||0)}}catch{}};s(`SELECT o.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(o.name) + COALESCE(LENGTH(o.note),0)) AS b
      FROM classifier_object o JOIN module m ON o.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY o.module_ref`,"mid","c","b"),s(`SELECT tl.module_ref AS mid, COUNT(*) AS c,
        SUM(COALESCE(LENGTH(te.event_name),0) + COALESCE(LENGTH(te.story),0)) AS b
      FROM timeline_event te JOIN timeline tl ON te.timeline_id=tl.id
      JOIN module m ON tl.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY tl.module_ref`,"mid","c","b"),s(`SELECT sd.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(sd.name) + COALESCE((SELECT SUM(COALESCE(LENGTH(st.speaker),0)+COALESCE(LENGTH(st.talk_sentence),0)) FROM story_talk st WHERE st.dialogue_ref=sd.id),0)) AS b
      FROM story_dialogue sd JOIN module m ON sd.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY sd.module_ref`,"mid","c","b"),s(`SELECT ch.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(ch.name) + COALESCE(LENGTH(ch.chapter_content),0)) AS b
      FROM book_chapter ch JOIN module m ON ch.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY ch.module_ref`,"mid","c","b"),s(`SELECT s.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(s.name) + COALESCE((SELECT SUM(LENGTH(g.message)) FROM chat_message g WHERE g.session_ref=s.id),0)) AS b
      FROM chat_session s JOIN module m ON s.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY s.module_ref`,"mid","c","b"),s(`SELECT sp.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(sp.name) + COALESCE((SELECT SUM(LENGTH(ss.points)) FROM sketch_stroke ss WHERE ss.page_ref=sp.id),0)) AS b
      FROM sketch_page sp JOIN module m ON sp.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY sp.module_ref`,"mid","c","b"),s(`SELECT dn.module_ref AS mid, COUNT(*) AS c,
        SUM(COALESCE(LENGTH(dn.node_text),0) + 16) AS b
      FROM design_node dn JOIN module m ON dn.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY dn.module_ref`,"mid","c","b"),s(`SELECT me.module_ref AS mid, COUNT(*) AS c, SUM(COALESCE(LENGTH(me.label),0) + 16) AS b
      FROM map_event me JOIN module m ON me.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY me.module_ref`,"mid","c","b"),s(`SELECT mp.module_ref AS mid, COUNT(*) AS c, SUM(COALESCE(LENGTH(mp.point_name),0) + 16) AS b
      FROM map_point mp JOIN module m ON mp.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY mp.module_ref`,"mid","c","b");let u=o.prepare("SELECT COUNT(*) AS c FROM wiki_link WHERE (? IS NULL OR nexus_ref=?)").get(n,n).c,l=[...i.values()];return{objects:l.reduce((g,m)=>g+m.items,0),modules:a.length,links:u,bytes:l.reduce((g,m)=>g+m.bytes,0),perModule:l}}function Sf(e){let{getDB:t}=te();return t().readTx(()=>Of(e))()}function Of(e){let{getDB:t}=te(),r=Ie(),n=t().prepare(`
    SELECT id, src_key, target_key, target_text FROM wiki_link
    WHERE (? IS NULL OR nexus_ref=?) ORDER BY id DESC LIMIT 500
  `).all(e??null,e??null),a=new Set;for(let s of n)a.add(s.src_key),s.target_key&&a.add(s.target_key);let i=new Map(r.resolveEntityKeys([...a]).map(s=>[s.key,s]));return n.map(s=>({id:s.id,from:i.get(s.src_key)||{key:s.src_key,name:s.src_key,type:"?"},to:s.target_key&&i.get(s.target_key)||null,text:s.target_text}))}Uc.exports={sageHutStats:hf,sageHutLinkerList:Sf}});var jc=H((CI,vc)=>{"use strict";A();vc.exports={}});var Et=H((kI,Bc)=>{"use strict";A();var{getDB:oe}=te(),ea=Ie(),dr=Ae(),Lf=(e,t)=>oe().prepare("UPDATE module SET cat_type=?, update_at=datetime('now') WHERE id=?").run(t,e),Pc=e=>oe().prepare(`
  SELECT o.*, uc.color_code FROM classifier_object o
  LEFT JOIN use_color uc ON uc.id = o.color
  WHERE o.module_ref=? ORDER BY o.display_order, o.id
`).all(e),If=e=>oe().prepare(`
  SELECT o.*, uc.color_code FROM classifier_object o LEFT JOIN use_color uc ON uc.id = o.color WHERE o.id=?
`).get(e),Wc=e=>oe().prepare(`
  SELECT m.nexus_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE o.id=?
`).get(e)?.nexus_ref??null;function Af(e,t,r,o){let n=oe(),a=n.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM classifier_object WHERE module_ref=?").get(e).m,i=n.prepare("INSERT INTO classifier_object (module_ref, name, color, icon, display_order) VALUES (?,?,?,?,?)").run(e,t,r||null,o||null,a+1).lastInsertRowid;return ea.resolveDanglingLinks(t,Wc(i)),dr.recordVersion(e,"object",`+ ${t}`,{op:"classifierObjectDelete",args:{objectId:i}}),i}var yf=(e,t,r,o)=>{let n=oe().prepare("SELECT name, color, icon, module_ref FROM classifier_object WHERE id=?").get(e),a=oe().prepare("UPDATE classifier_object SET name=?, color=?, icon=?, update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,e);return n&&n.name!==t&&ea.renameWikiTarget(`cobj_${e}`,n.name,t),n&&(n.name!==t||(n.color||null)!==(r||null)||(n.icon||null)!==(o||null))&&dr.recordVersion(n.module_ref,"objectEdit",`${n.name}${n.name!==t?` \u2192 ${t}`:""}`,{op:"classifierObject",args:{objectId:e,name:n.name,colorId:n.color,icon:n.icon}}),a},wf=(e,t)=>{let r=oe().prepare("UPDATE classifier_object SET note=?, update_at=datetime('now') WHERE id=?").run(t,e);return ea.reindexWikiLinks(`cobj_${e}`,t,Wc(e)),r},Cf=e=>{let t=oe().prepare("SELECT * FROM classifier_object WHERE id=?").get(e),r=oe().prepare("DELETE FROM classifier_object WHERE id=?").run(e);return oe().prepare("DELETE FROM wiki_link WHERE src_key=?").run(`cobj_${e}`),t&&dr.recordVersion(t.module_ref,"objectDel",t.name,{op:"classifierObjectInsert",args:{moduleRef:t.module_ref,name:t.name,colorId:t.color,icon:t.icon,note:t.note}}),r},Hc=e=>oe().prepare(`
  SELECT * FROM classifier_template WHERE module_ref=? AND object_ref IS NULL ORDER BY display_order, id
`).all(e),bf=(e,t)=>oe().prepare(`
  SELECT * FROM classifier_template WHERE module_ref=? AND (object_ref IS NULL OR object_ref=?) ORDER BY display_order, id
`).all(e,t);function kf(e,t,r,o,n,a,i){let s=oe(),u=s.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM classifier_template WHERE module_ref=?").get(e).m;return s.prepare(`
    INSERT INTO classifier_template (module_ref, object_ref, description, attribute_type, levelable, has_condition, level_steps, display_order)
    VALUES (?,?,?,?,?,?,?,?)
  `).run(e,a||null,t,r||"text",o?1:0,n?1:0,i||null,u+1).lastInsertRowid}var Df=(e,t,r,o,n,a)=>{let i=oe().prepare("SELECT * FROM classifier_template WHERE id=?").get(e),s=oe().prepare(`
    UPDATE classifier_template SET description=?, attribute_type=?, levelable=?, has_condition=?, level_steps=?, update_at=datetime('now') WHERE id=?
  `).run(t,r||"text",o?1:0,n?1:0,a||null,e);return i&&dr.recordVersion(i.module_ref,"template",`${i.description} \u2192 ${t}`,{op:"classifierTemplate",args:{templateId:e,description:i.description,attributeType:i.attribute_type,levelable:i.levelable,hasCondition:i.has_condition,levelSteps:i.level_steps}}),s},Ff=e=>oe().prepare("DELETE FROM classifier_template WHERE id=?").run(e),xf=e=>oe().prepare("SELECT COUNT(*) AS c FROM classifier_template WHERE object_ref=?").get(e).c,Uf=e=>oe().prepare(`
  SELECT ca.*, ct.description, ct.attribute_type, ct.levelable, ct.has_condition, ct.object_ref AS template_object_ref
  FROM classifier_attribute ca JOIN classifier_template ct ON ca.template_ref = ct.id
  WHERE ca.object_ref=?
`).all(e);function Mf(e){let t=oe();return t.readTx(()=>{let r=Pc(e),o=Hc(e),n=t.prepare(`
      SELECT ca.*, ct.description, ct.attribute_type, ct.levelable, ct.has_condition, ct.object_ref AS template_object_ref
      FROM classifier_attribute ca
      JOIN classifier_template ct ON ca.template_ref = ct.id
      JOIN classifier_object o ON ca.object_ref = o.id
      WHERE o.module_ref=?
    `).all(e),a=t.prepare(`
      SELECT * FROM classifier_template
      WHERE module_ref=? AND object_ref IS NOT NULL ORDER BY display_order, id
    `).all(e),i=new Map;for(let l of n)i.has(l.object_ref)||i.set(l.object_ref,[]),i.get(l.object_ref).push(l);let s=new Map;for(let l of a)s.has(l.object_ref)||s.set(l.object_ref,[]),s.get(l.object_ref).push(l);let u=new Map;for(let l of Xc(e)){u.has(l.object_ref)||u.set(l.object_ref,{});let g=u.get(l.object_ref);(g[l.template_ref]||=[]).push(l)}for(let l of r){l.attrMap={},l.conditionMap={},l.levelMap=u.get(l.id)||{};for(let g of i.get(l.id)||[])l.attrMap[g.template_ref]=g.attribute_value,l.conditionMap[g.template_ref]=g.condition_value;l.privateTemplates=(s.get(l.id)||[]).map(g=>({id:g.id,description:g.description,value:l.attrMap[g.id]||""}))}return{objects:r,templates:o}})()}var vf=(e,t,r)=>{let o=oe(),n=o.prepare("SELECT name, module_ref FROM classifier_object WHERE id=?").get(e),a=o.prepare("SELECT description FROM classifier_template WHERE id=?").get(t),i=o.prepare("SELECT attribute_value FROM classifier_attribute WHERE object_ref=? AND template_ref=?").get(e,t),s=o.prepare(`
    INSERT INTO classifier_attribute (object_ref, template_ref, attribute_value) VALUES (?,?,?)
    ON CONFLICT(object_ref, template_ref) DO UPDATE SET attribute_value=excluded.attribute_value, update_at=datetime('now')
  `).run(e,t,r);return n&&(i?.attribute_value??"")!==(r??"")&&dr.recordVersion(n.module_ref,"attr",`${n.name} \xB7 ${a?.description??""}: ${i?.attribute_value??"\u2014"} \u2192 ${r??""}`,{op:"classifierAttr",args:{objectId:e,templateId:t,value:i?.attribute_value??""}}),s},jf=(e,t,r)=>oe().prepare(`
  INSERT INTO classifier_attribute (object_ref, template_ref, condition_value) VALUES (?,?,?)
  ON CONFLICT(object_ref, template_ref) DO UPDATE SET condition_value=excluded.condition_value, update_at=datetime('now')
`).run(e,t,r),Pf=e=>oe().prepare(`
  SELECT * FROM classifier_level WHERE object_ref=? ORDER BY display_order, id
`).all(e),Xc=e=>oe().prepare(`
  SELECT cl.* FROM classifier_level cl
  JOIN classifier_object o ON cl.object_ref = o.id
  WHERE o.module_ref=? ORDER BY cl.display_order, cl.id
`).all(e);function Wf(e,t){let r=oe(),o=r.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM classifier_level WHERE object_ref=? AND template_ref=?").get(e,t).m;return r.prepare("INSERT INTO classifier_level (object_ref, template_ref, display_order) VALUES (?,?,?)").run(e,t,o+1).lastInsertRowid}var Hf=(e,t,r)=>{if(!["level_label","condition_value","info_value"].includes(t))throw new Error("bad level field");return oe().prepare(`UPDATE classifier_level SET ${t}=?, update_at=datetime('now') WHERE id=?`).run(r,e)},Xf=e=>oe().prepare("DELETE FROM classifier_level WHERE id=?").run(e);function Bf(e,t,r){let o=oe(),n=o.prepare(`UPDATE classifier_level SET display_order=?, update_at=datetime('now')
    WHERE id=? AND object_ref=? AND template_ref=?`);o.transaction(()=>{(r||[]).forEach((a,i)=>n.run(i,a,e,t))})()}Bc.exports={setCatType:Lf,getObjects:Pc,getObject:If,createObject:Af,updateObject:yf,updateObjectNote:wf,deleteObject:Cf,getTemplates:Hc,getObjectTemplates:bf,createTemplate:kf,updateTemplate:Df,deleteTemplate:Ff,countObjectTemplates:xf,getAttrs:Uf,getObjectsFull:Mf,upsertAttr:vf,upsertAttrCondition:jf,getLevels:Pf,getLevelsForModule:Xc,createLevel:Wf,updateLevelField:Hf,deleteLevel:Xf,moveLevels:Bf}});var Er=H((FI,Yc)=>{"use strict";A();var{getDB:qe}=te(),Gc=Ie(),$c=Ae(),Gf=e=>qe().prepare(`
  SELECT m.nexus_ref FROM book_chapter ch JOIN module m ON ch.module_ref = m.id WHERE ch.id = ?
`).get(e)?.nexus_ref??null,$f=e=>qe().prepare(`
  SELECT * FROM book_chapter WHERE module_ref = ? ORDER BY chapter_order, id
`).all(e),Yf=(e,t)=>{let r=qe(),o=r.prepare("SELECT chapter_order, chapter_label FROM book_chapter WHERE module_ref=? ORDER BY chapter_order DESC LIMIT 1").get(e),n=o?.chapter_order??-1,a=o?parseFloat(o.chapter_label):NaN,i=String(Number.isFinite(a)?Math.floor(a)+1:n+2);return r.prepare("INSERT INTO book_chapter (module_ref,name,chapter_order,chapter_label) VALUES (?,?,?,?)").run(e,t,n+1,i).lastInsertRowid},Vf=(e,t)=>{let r=qe().prepare("SELECT name, module_ref FROM book_chapter WHERE id=?").get(e),o=qe().prepare("UPDATE book_chapter SET name=?, update_at=datetime('now') WHERE id=?").run(t,e);return r&&r.name!==t&&(Gc.renameWikiTarget(`bchp_${e}`,r.name,t),$c.recordVersion(r.module_ref,"chapterName",`${r.name} \u2192 ${t}`,{op:"authorChapterName",args:{chapterId:e,name:r.name}})),o},qf=(e,t)=>qe().prepare("UPDATE book_chapter SET chapter_label=?, update_at=datetime('now') WHERE id=?").run(t||null,e),Jf=(e,t)=>{let r=qe().prepare("SELECT name, module_ref, chapter_content FROM book_chapter WHERE id=?").get(e),o=qe().prepare("UPDATE book_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?").run(t,e);return Gc.reindexWikiLinks(`bchp_${e}`,t,Gf(e)),r&&(r.chapter_content??"")!==(t??"")&&$c.recordVersion(r.module_ref,"chapter",r.name,{op:"authorChapterContent",args:{chapterId:e,content:r.chapter_content??""}}),o},Kf=e=>qe().prepare("DELETE FROM book_chapter WHERE id=?").run(e),zf=(e,t)=>{let r=qe();r.transaction(()=>{t.forEach((n,a)=>r.prepare("UPDATE book_chapter SET chapter_order=? WHERE id=? AND module_ref=?").run(a,n,e))})()};Yc.exports={getBookChapters:$f,createBookChapter:Yf,renameBookChapter:Vf,setBookChapterLabel:qf,updateBookChapterContent:Jf,deleteBookChapter:Kf,moveBookChapter:zf}});var Ae=H((UI,Kc)=>{"use strict";A();var{getDB:To,getAppDB:Vc}=te(),qc=e=>Vc().prepare("SELECT value FROM app_setting WHERE key=?").get(e)?.value??null,Qf=(e,t)=>Vc().prepare(`
  INSERT INTO app_setting (key, value) VALUES (?,?)
  ON CONFLICT(key) DO UPDATE SET value=excluded.value
`).run(e,String(t)),Zf=()=>{let e=Number(qc("versionLimit"));return Number.isFinite(e)&&e>=1?Math.floor(e):50},ta=!1;function eT(e,t,r,o){ta||Jc(e,t,r,o)}function Jc(e,t,r,o){try{let n=To();n.transaction(()=>{let a=n.prepare("SELECT COALESCE(MAX(seq),0) AS m FROM module_version WHERE module_ref=?").get(e).m+1;n.prepare("INSERT INTO module_version (module_ref, seq, action, detail, payload) VALUES (?,?,?,?,?)").run(e,a,t,r||null,o?JSON.stringify(o):null);let i=Zf();n.prepare(`
        DELETE FROM module_version WHERE module_ref=? AND id NOT IN (
          SELECT id FROM module_version WHERE module_ref=? ORDER BY seq DESC LIMIT ?)
      `).run(e,e,i)})()}catch{}}var tT=e=>To().prepare(`
  SELECT id, module_ref, seq, action, detail, create_at FROM module_version
  WHERE module_ref=? ORDER BY seq DESC
`).all(e),rT={moduleDescription:e=>Rt().updateModuleDescription(e.id,e.value),moduleAttr:e=>{let t=To(),r=e.attrId?t.prepare("SELECT id FROM module_attribute WHERE id=?").get(e.attrId):null;Rt().upsertModuleAttr(e.moduleId,r?e.attrId:null,e.name,e.value)},moduleAttrDelete:e=>Rt().deleteModuleAttr(e.attrId),moduleTags:e=>Rt().setModuleTags(e.moduleId,e.tagIds),classifierAttr:e=>Et().upsertAttr(e.objectId,e.templateId,e.value),classifierObject:e=>Et().updateObject(e.objectId,e.name,e.colorId,e.icon),classifierObjectInsert:e=>{let t=Et(),r=t.createObject(e.moduleRef,e.name,e.colorId,e.icon);e.note&&t.updateObjectNote(r,e.note)},classifierObjectDelete:e=>Et().deleteObject(e.objectId),classifierTemplate:e=>Et().updateTemplate(e.templateId,e.description,e.attributeType,e.levelable,e.hasCondition,e.levelSteps),authorChapterContent:e=>Er().updateBookChapterContent(e.chapterId,e.content),authorChapterName:e=>Er().renameBookChapter(e.chapterId,e.name)};function oT(e){let r=To().prepare("SELECT * FROM module_version WHERE id=?").get(e);if(!r||!r.payload)return{ok:!1};let o;try{o=JSON.parse(r.payload)}catch{return{ok:!1}}let n=rT[o.op];if(!n)return{ok:!1};ta=!0;try{n(o.args||{})}catch(a){return{ok:!1,error:String(a.message||a)}}finally{ta=!1}return Jc(r.module_ref,"restore",`v${r.seq}`,null),{ok:!0}}Kc.exports={recordVersion:eT,listVersions:tT,restoreVersion:oT,getAppSetting:qc,setAppSetting:Qf}});var Rt=H((vI,cl)=>{"use strict";A();var{getDB:ie}=te(),No=Ie(),ur=Ae(),zc=e=>ie().prepare("SELECT nexus_ref FROM module WHERE id=?").get(e)?.nexus_ref??null,Qc=`
  SELECT m.*, c.color_code, ic.color_code AS icon_color_code
  FROM module m
  LEFT JOIN use_color c  ON c.id  = m.color
  LEFT JOIN use_color ic ON ic.id = m.icon_color
`;function nT(e){let t=ie().prepare(`${Qc} WHERE m.nexus_ref = ? ORDER BY m.parent_id IS NOT NULL, m.display_order, m.id`).all(e),r=new Map;for(let n of t){let a=n.parent_id??null;r.has(a)||r.set(a,[]),r.get(a).push(n)}let o=n=>({...n,children:(r.get(n.id)||[]).map(o)});return(r.get(null)||[]).map(o)}var aT=e=>ie().prepare(`${Qc} WHERE m.id = ?`).get(e);function Zc(e){let t=String(e??"").trim();if(!t)return null;if(!/^[A-Za-z0-9_-]+$/.test(t))throw new Error("handle invalid");return t}function el(e,t,r=null){if(e==null)return;if(ie().prepare("SELECT id FROM module WHERE nexus_ref=? AND handle=? COLLATE NOCASE AND id IS NOT ?").get(t,e,r))throw new Error("handle already in use")}function tl(e){let t=ie(),{nexus_ref:r,parent_id:o=null,name:n,kind:a,icon:i=null,icon_color:s=null,color:u=null,cat_type:l=null}=e,g=Zc(e.handle);el(g,r);let m=t.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM module WHERE nexus_ref=? AND parent_id IS ?").get(r,o).m,L=t.prepare(`
    INSERT INTO module (nexus_ref, parent_id, name, kind, icon, icon_color, color, cat_type, handle, display_order)
    VALUES (?,?,?,?,?,?,?,?,?,?)
  `).run(r,o,n,a,i,s,u,l,g,m+1).lastInsertRowid;if(a==="chronicler")try{t.prepare("INSERT INTO timeline (line_name, module_ref, color) VALUES (?,?,?)").run(n,L,u)}catch(I){console.error("chronicler timeline seed error:",I)}return L}function iT(e,t){let r=ie().prepare("SELECT * FROM module WHERE id=?").get(e);if(!r)return;let{name:o=r.name,icon:n=r.icon,icon_color:a=r.icon_color,color:i=r.color,pinned:s=r.pinned}=t,u="handle"in t?Zc(t.handle):r.handle;el(u,r.nexus_ref,e),ie().prepare("UPDATE module SET name=?, icon=?, icon_color=?, color=?, pinned=?, handle=?, update_at=datetime('now') WHERE id=?").run(o,n,a,i,s,u,e),o!==r.name&&No.renameWikiTarget(`module_${e}`,r.name,o)}function rl(e,t,r){let o=ie(),n=o.prepare("SELECT * FROM module WHERE id=?").get(e);if(!n)return null;let a=tl({nexus_ref:n.nexus_ref,parent_id:t,name:r?`${n.name} (Copy)`:n.name,kind:n.kind,icon:n.icon,icon_color:n.icon_color,color:n.color,cat_type:n.cat_type});n.description&&ol(a,n.description);let i=o.prepare("SELECT id FROM module WHERE parent_id=? ORDER BY display_order, id").all(e);for(let s of i)rl(s.id,a,!1);return a}function sT(e){let t=ie(),r=t.prepare("SELECT parent_id FROM module WHERE id=?").get(e);if(!r)return null;let o;return t.transaction(()=>{o=rl(e,r.parent_id,!0)})(),o}function ol(e,t){let r=ie().prepare("SELECT description FROM module WHERE id=?").get(e)?.description??"";ie().prepare("UPDATE module SET description=?, update_at=datetime('now') WHERE id=?").run(t,e),No.reindexWikiLinks(`module_${e}`,t,zc(e)),r!==(t??"")&&ur.recordVersion(e,"note",String(r).slice(0,60),{op:"moduleDescription",args:{id:e,value:r}})}var cT=e=>ie().prepare("DELETE FROM module WHERE id=?").run(e);function lT(e,t,r,o){let n=ie();n.transaction(()=>{n.prepare("UPDATE module SET parent_id=? WHERE id=? AND nexus_ref=?").run(r,t,e),o.forEach((i,s)=>{n.prepare("UPDATE module SET display_order=? WHERE id=? AND nexus_ref=?").run(s,i,e)})})()}var dT=e=>ie().prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=?").get(e).c;function ET(e){let t=ie();return t.readTx(()=>{let r={},o=n=>{for(let a of n){let{module_ref:i,...s}=a;(r[i]||(r[i]=[])).push(s)}};return o(t.prepare(`
      SELECT o.module_ref, o.id, o.name FROM classifier_object o
      JOIN module m ON o.module_ref=m.id WHERE m.nexus_ref=?
      ORDER BY o.module_ref, o.display_order, o.id
    `).all(e)),o(t.prepare(`
      SELECT tl.module_ref, te.id, te.event_name, tl.id AS __parentId FROM timeline_event te
      JOIN timeline tl ON te.timeline_id=tl.id
      JOIN module m ON tl.module_ref=m.id
      LEFT JOIN timeline_date s ON te.start_at=s.id
      WHERE m.nexus_ref=?
      ORDER BY tl.module_ref, tl.line_name, s.years, s.month, s.day, s.hour, s.minute
    `).all(e)),o(t.prepare(`
      SELECT ch.module_ref, ch.id, ch.name FROM book_chapter ch
      JOIN module m ON ch.module_ref=m.id WHERE m.nexus_ref=?
      ORDER BY ch.module_ref, ch.chapter_order, ch.id
    `).all(e)),o(t.prepare(`
      SELECT s.module_ref, s.id, s.name FROM chat_session s
      JOIN module m ON s.module_ref=m.id WHERE m.nexus_ref=?
      ORDER BY s.module_ref, s.session_order, s.id
    `).all(e)),o(t.prepare(`
      SELECT n.module_ref, n.id, SUBSTR(n.node_text,1,64) AS node_text, n.shape FROM design_node n
      JOIN module m ON n.module_ref=m.id WHERE m.nexus_ref=?
      ORDER BY n.module_ref, n.id
    `).all(e)),r})()}var nl=e=>ie().prepare("SELECT * FROM module_attribute WHERE module_ref=? ORDER BY display_order, id").all(e);function uT(e,t,r,o){let n=ie();if(t){let s=n.prepare("SELECT * FROM module_attribute WHERE id=?").get(t);return n.prepare("UPDATE module_attribute SET attr_name=?, attr_value=?, update_at=datetime('now') WHERE id=?").run(r,o,t),s&&ur.recordVersion(e,"attr",`${s.attr_name}: ${s.attr_value??""} \u2192 ${o??""}`,{op:"moduleAttr",args:{moduleId:e,attrId:t,name:s.attr_name,value:s.attr_value}}),t}let a=n.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM module_attribute WHERE module_ref=?").get(e).m,i=n.prepare("INSERT INTO module_attribute (module_ref, attr_name, attr_value, display_order) VALUES (?,?,?,?)").run(e,r,o,a+1).lastInsertRowid;return ur.recordVersion(e,"attr",`+ ${r}`,{op:"moduleAttrDelete",args:{attrId:i}}),i}function pT(e){let t=ie().prepare("SELECT * FROM module_attribute WHERE id=?").get(e),r=ie().prepare("DELETE FROM module_attribute WHERE id=?").run(e);return t&&ur.recordVersion(t.module_ref,"attrDel",t.attr_name,{op:"moduleAttr",args:{moduleId:t.module_ref,attrId:null,name:t.attr_name,value:t.attr_value}}),r}function al(e){return ie().prepare("SELECT ui_key, ui_value FROM module_ui WHERE module_ref=?").all(e).reduce((r,o)=>(r[o.ui_key]=o.ui_value,r),{})}var _T=(e,t,r)=>ie().prepare(`
  INSERT INTO module_ui (module_ref, ui_key, ui_value) VALUES (?,?,?)
  ON CONFLICT(module_ref, ui_key) DO UPDATE SET ui_value=excluded.ui_value, update_at=datetime('now')
`).run(e,t,r),il=e=>ie().prepare(`
  SELECT h.*, uc.color_code FROM hashtag h
  LEFT JOIN use_color uc ON h.tag_color = uc.id
  JOIN module_hashtag mh ON h.id = mh.hashtag_id WHERE mh.module_ref=? ORDER BY h.tag_name
`).all(e);function mT(e,t){let r=ie();return r.transaction(()=>{let o=r.prepare("SELECT hashtag_id FROM module_hashtag WHERE module_ref=?").all(e).map(a=>a.hashtag_id);ur.recordVersion(e,"tags",null,{op:"moduleTags",args:{moduleId:e,tagIds:o}}),r.prepare("DELETE FROM module_hashtag WHERE module_ref=?").run(e);let n=r.prepare("INSERT INTO module_hashtag (module_ref, hashtag_id) VALUES (?,?)");for(let a of t||[])n.run(e,a);return!0})()}var sl=e=>({outgoing:No.getOutgoingLinks(`module_${e}`),backlinks:No.getBacklinks(`module_${e}`)}),fT=e=>ie().readTx(()=>({attrs:nl(e),tags:il(e),links:sl(e),ui:al(e)}))(),TT=[`SELECT o.module_ref AS mid, COUNT(*) AS c FROM classifier_object o
     JOIN module m ON o.module_ref=m.id WHERE m.parent_id=? GROUP BY o.module_ref`,`SELECT tl.module_ref AS mid, COUNT(*) AS c FROM timeline_event te
     JOIN timeline tl ON te.timeline_id=tl.id JOIN module m ON tl.module_ref=m.id
     WHERE m.parent_id=? GROUP BY tl.module_ref`,`SELECT sd.module_ref AS mid, COUNT(*) AS c FROM story_dialogue sd
     JOIN module m ON sd.module_ref=m.id WHERE m.parent_id=? GROUP BY sd.module_ref`,`SELECT ch.module_ref AS mid, COUNT(*) AS c FROM book_chapter ch
     JOIN module m ON ch.module_ref=m.id WHERE m.parent_id=? GROUP BY ch.module_ref`,`SELECT s.module_ref AS mid, COUNT(*) AS c FROM chat_session s
     JOIN module m ON s.module_ref=m.id WHERE m.parent_id=? GROUP BY s.module_ref`,`SELECT sp.module_ref AS mid, COUNT(*) AS c FROM sketch_page sp
     JOIN module m ON sp.module_ref=m.id WHERE m.parent_id=? GROUP BY sp.module_ref`,`SELECT dn.module_ref AS mid, COUNT(*) AS c FROM design_node dn
     JOIN module m ON dn.module_ref=m.id WHERE m.parent_id=? GROUP BY dn.module_ref`,`SELECT me.module_ref AS mid, COUNT(*) AS c FROM map_event me
     JOIN module m ON me.module_ref=m.id WHERE m.parent_id=? GROUP BY me.module_ref`,`SELECT mp.module_ref AS mid, COUNT(*) AS c FROM map_point mp
     JOIN module m ON mp.module_ref=m.id WHERE m.parent_id=? GROUP BY mp.module_ref`];function NT(e){let t=ie();return t.readTx(()=>{let r={},o=n=>r[n]||(r[n]={majors:0,minors:0});for(let n of t.prepare("SELECT id FROM module WHERE parent_id=?").all(e))o(n.id);for(let n of t.prepare(`
      WITH RECURSIVE sub(id, root) AS (
        SELECT id, id FROM module WHERE parent_id=?
        UNION ALL
        SELECT m.id, s.root FROM module m JOIN sub s ON m.parent_id=s.id
      )
      SELECT root, COUNT(*) - 1 AS majors FROM sub GROUP BY root
    `).all(e))o(n.root).majors=n.majors;for(let n of TT)try{for(let a of t.prepare(n).all(e))o(a.mid).minors+=a.c}catch{}return r})()}cl.exports={getTree:nT,getModule:aT,createModule:tl,updateModule:iT,updateModuleDescription:ol,deleteModule:cT,duplicateModule:sT,moveModule:lT,countModules:dT,nexusOfModule:zc,getNestItems:ET,getModuleAttrs:nl,upsertModuleAttr:uT,deleteModuleAttr:pT,getModuleUi:al,setModuleUi:_T,getModuleTags:il,setModuleTags:mT,getModuleLinks:sl,getModuleInspector:fT,getChildModuleStats:NT}});var ra=H((PI,ll)=>{"use strict";A();var{getDB:go}=te(),gT=e=>go().prepare(`
  SELECT me.*, te.event_name, te.timeline_id, uc.color_code AS event_color_code,
    s.day s_day, s.month s_month, s.years s_years, s.hour s_hour, s.minute s_minute
  FROM map_event me
  LEFT JOIN timeline_event te ON me.event_ref = te.id
  LEFT JOIN use_color uc ON te.color = uc.id
  LEFT JOIN timeline_date s ON te.start_at = s.id
  WHERE me.module_ref = ?
  ORDER BY me.id
`).all(e),hT=(e,t,r,o,n,a)=>go().prepare("INSERT INTO map_event (module_ref,event_ref,linker_key,x,y,area_ref) VALUES (?,?,?,?,?,?)").run(e,t||null,r||null,Number(o)||0,Number(n)||0,a||null).lastInsertRowid,RT=(e,t,r,o,n,a)=>go().prepare("UPDATE map_event SET event_ref=?, linker_key=?, x=?, y=?, area_ref=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,Number(o)||0,Number(n)||0,a||null,e),ST=e=>go().prepare("DELETE FROM map_event WHERE id=?").run(e);ll.exports={getMapEvents:gT,createMapEvent:hT,updateMapEvent:RT,deleteMapEvent:ST}});var El=H((HI,dl)=>{"use strict";A();var{getDB:ce}=te(),OT=["talk","choice"],LT=e=>OT.includes(e)?e:"talk",IT=["none","text","jump","reply"],AT=e=>IT.includes(e)?e:"none",yT=e=>ce().prepare(`
  SELECT d.*, uc.color_code,
    (SELECT COUNT(*) FROM story_talk t WHERE t.dialogue_ref = d.id AND t.row_type = 'talk') AS talk_count,
    (SELECT COUNT(*) FROM story_talk t WHERE t.dialogue_ref = d.id AND t.row_type = 'choice') AS choice_count,
    (SELECT COUNT(DISTINCT speaker) FROM story_talk t WHERE t.dialogue_ref = d.id AND t.row_type = 'talk' AND speaker IS NOT NULL AND speaker != '') AS speaker_count,
    (SELECT t.speaker || CASE WHEN t.speaker IS NOT NULL AND t.speaker != '' THEN ': ' ELSE '' END || COALESCE(t.talk_sentence,'')
       FROM story_talk t WHERE t.dialogue_ref = d.id AND t.row_type = 'talk' ORDER BY t.talk_order, t.id LIMIT 1) AS snippet
  FROM story_dialogue d
  LEFT JOIN use_color uc ON d.color = uc.id
  WHERE d.module_ref = ?
  ORDER BY d.id
`).all(e),wT=(e,t,r,o,n)=>ce().prepare("INSERT INTO story_dialogue (module_ref,name,color,pos_x,pos_y) VALUES (?,?,?,?,?)").run(e,t,r||null,Number(o)||0,Number(n)||0).lastInsertRowid,CT=(e,t,r)=>ce().prepare("UPDATE story_dialogue SET name=?, color=?, update_at=datetime('now') WHERE id=?").run(t,r||null,e),bT=(e,t)=>ce().prepare("UPDATE story_dialogue SET description=?, update_at=datetime('now') WHERE id=?").run(t||null,e),kT=(e,t,r)=>ce().prepare("UPDATE story_dialogue SET pos_x=?, pos_y=?, update_at=datetime('now') WHERE id=?").run(Number(t)||0,Number(r)||0,e),DT=e=>ce().prepare("DELETE FROM story_dialogue WHERE id=?").run(e),FT=e=>ce().prepare(`
  SELECT * FROM story_edge WHERE module_ref = ? ORDER BY id
`).all(e),xT=(e,t,r,o)=>ce().prepare(`
    INSERT INTO story_edge (module_ref,from_ref,to_ref,label) VALUES (?,?,?,?)
    ON CONFLICT(from_ref,to_ref) DO UPDATE SET label=excluded.label
  `).run(e,t,r,o||null).lastInsertRowid,UT=(e,t)=>ce().prepare("UPDATE story_edge SET label=? WHERE id=?").run(t||null,e),MT=e=>ce().prepare("DELETE FROM story_edge WHERE id=?").run(e),vT=e=>ce().prepare(`
  SELECT * FROM story_talk WHERE dialogue_ref = ? ORDER BY talk_order, id
`).all(e),jT=(e,t,r,o,n)=>{let a=ce(),i=a.prepare("SELECT COALESCE(MAX(talk_order),-1) AS m FROM story_talk WHERE dialogue_ref=?").get(e).m;return a.prepare("INSERT INTO story_talk (dialogue_ref,speaker,talk_sentence,talk_order,linker_key,row_type) VALUES (?,?,?,?,?,?)").run(e,t||null,r||null,i+1,o||null,LT(n)).lastInsertRowid},PT=(e,t)=>{let r=ce(),o=r.prepare("UPDATE story_talk SET talk_order=?, update_at=datetime('now') WHERE id=? AND dialogue_ref=?");r.transaction(()=>{(t||[]).forEach((n,a)=>o.run(a,n,e))})()},WT=(e,t,r,o)=>ce().prepare("UPDATE story_talk SET speaker=?, talk_sentence=?, linker_key=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,o||null,e),HT=e=>ce().prepare("DELETE FROM story_talk WHERE id=?").run(e),XT=e=>ce().prepare(`
  SELECT o.* FROM story_choice_option o
  JOIN story_talk t ON o.talk_ref = t.id
  WHERE t.dialogue_ref = ? ORDER BY o.talk_ref, o.option_order, o.id
`).all(e),BT=(e,t)=>{let r=ce(),o=r.prepare("SELECT COALESCE(MAX(option_order),-1) AS m FROM story_choice_option WHERE talk_ref=?").get(e).m;return r.prepare("INSERT INTO story_choice_option (talk_ref,option_text,option_order) VALUES (?,?,?)").run(e,t||null,o+1).lastInsertRowid},GT=(e,t,r,o,n)=>ce().prepare(`
    UPDATE story_choice_option SET option_text=?, effect_kind=?, effect_text=?, jump_ref=?, update_at=datetime('now')
    WHERE id=?
  `).run(t||null,AT(r),o||null,n||null,e),$T=e=>ce().prepare("DELETE FROM story_choice_option WHERE id=?").run(e);dl.exports={getDialogues:yT,createDialogue:wT,updateDialogue:CT,updateDialogueDescription:bT,updateDialoguePos:kT,deleteDialogue:DT,getEdges:FT,createEdge:xT,updateEdgeLabel:UT,deleteEdge:MT,getTalks:vT,createTalk:jT,updateTalk:WT,deleteTalk:HT,moveTalks:PT,getChoiceOptions:XT,createChoiceOption:BT,updateChoiceOption:GT,deleteChoiceOption:$T}});var aa=H((BI,pl)=>{"use strict";A();var{getDB:ye}=te(),oa=Ie(),ul=e=>ye().prepare(`
  SELECT m.nexus_ref FROM chat_session s JOIN module m ON s.module_ref = m.id WHERE s.id = ?
`).get(e)?.nexus_ref??null,YT=e=>ye().prepare(`
  SELECT COALESCE(GROUP_CONCAT(message, char(10)), '') AS c FROM chat_message WHERE session_ref=?
`).get(e)?.c??"",na=e=>oa.reindexWikiLinks(`chss_${e}`,YT(e),ul(e)),VT=e=>ye().prepare(`
  SELECT s.*,
    (SELECT COUNT(*) FROM chat_message g WHERE g.session_ref = s.id) AS message_count,
    (SELECT g.message FROM chat_message g WHERE g.session_ref = s.id ORDER BY g.id DESC LIMIT 1) AS last_message
  FROM chat_session s WHERE s.module_ref = ? ORDER BY s.session_order, s.id
`).all(e),qT=(e,t)=>{let r=ye(),o=r.prepare("SELECT COALESCE(MAX(session_order),-1) AS m FROM chat_session WHERE module_ref=?").get(e).m,n=r.prepare("INSERT INTO chat_session (module_ref,name,session_order) VALUES (?,?,?)").run(e,t,o+1).lastInsertRowid;return oa.resolveDanglingLinks(t,ul(n)),n},JT=(e,t)=>{let r=ye().prepare("SELECT name FROM chat_session WHERE id=?").get(e),o=ye().prepare("UPDATE chat_session SET name=?, update_at=datetime('now') WHERE id=?").run(t,e);return r&&r.name!==t&&oa.renameWikiTarget(`chss_${e}`,r.name,t),o},KT=e=>{let t=ye().prepare("DELETE FROM chat_session WHERE id=?").run(e);return ye().prepare("DELETE FROM wiki_link WHERE src_key=?").run(`chss_${e}`),t},zT=e=>ye().prepare(`
  SELECT g.*, uc.color_code FROM chat_message g LEFT JOIN use_color uc ON g.color=uc.id
  WHERE g.session_ref = ? ORDER BY g.id
`).all(e),QT=(e,t)=>{let r=ye(),o=r.prepare("INSERT INTO chat_message (session_ref,message) VALUES (?,?)").run(e,t).lastInsertRowid;return r.prepare("UPDATE chat_session SET update_at=datetime('now') WHERE id=?").run(e),na(e),o},ZT=(e,t)=>{let r=ye(),o=r.prepare("SELECT session_ref FROM chat_message WHERE id=?").get(e),n=r.prepare("UPDATE chat_message SET message=? WHERE id=?").run(t,e);return o&&na(o.session_ref),n},eN=e=>{let t=ye(),r=t.prepare("SELECT session_ref FROM chat_message WHERE id=?").get(e),o=t.prepare("DELETE FROM chat_message WHERE id=?").run(e);return r&&na(r.session_ref),o},tN=(e,t,r)=>ye().prepare("UPDATE chat_message SET color=?, side=? WHERE id=?").run(t||null,r||"r",e);pl.exports={getChatSessions:VT,createChatSession:qT,renameChatSession:JT,deleteChatSession:KT,getChatMessages:zT,createChatMessage:QT,updateChatMessage:ZT,deleteChatMessage:eN,updateMessageStyle:tN}});var ia=H(($I,_l)=>{"use strict";A();var{getDB:St}=te(),{scopedAll:rN}=ao();function oN(e){return St().readTx(()=>nN(e))()}function nN(e){let t=St(),r=e??null,o=[],n=(s,u,l)=>{try{for(let g of rN(t,s,r))o.push({kind:u,...l(g)})}catch{}};n(`SELECT o.id, o.name, uc.color_code, m.id mid, m.name mname, m.kind mkind
    FROM classifier_object o JOIN module m ON o.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR m.nexus_ref=?)`,"object",s=>({key:`cobj_${s.id}`,name:s.name,color:s.color_code,moduleId:s.mid,moduleName:s.mname,moduleKind:s.mkind})),n(`SELECT te.id, te.event_name AS name, uc.color_code, m.id mid, m.name mname, m.kind mkind,
      s.day, s.month, s.years, s.hour, s.minute
    FROM timeline_event te JOIN timeline tl ON te.timeline_id=tl.id
    JOIN module m ON tl.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=te.color
    LEFT JOIN timeline_date s ON te.start_at=s.id WHERE (? IS NULL OR m.nexus_ref=?)`,"event",s=>({key:`tlev_${s.id}`,name:s.name,color:s.color_code,moduleId:s.mid,moduleName:s.mname,moduleKind:s.mkind,time:{day:s.day,month:s.month,years:s.years,hour:s.hour,minute:s.minute}})),n(`SELECT sd.id, sd.name, uc.color_code, m.id mid, m.name mname, m.kind mkind
    FROM story_dialogue sd JOIN module m ON sd.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=sd.color WHERE (? IS NULL OR m.nexus_ref=?)`,"dialogue",s=>({key:`sdlg_${s.id}`,name:s.name,color:s.color_code,moduleId:s.mid,moduleName:s.mname,moduleKind:s.mkind})),n(`SELECT ch.id, ch.name, ch.chapter_order, m.id mid, m.name mname, m.kind mkind
    FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)`,"chapter",s=>({key:`bchp_${s.id}`,name:s.name,color:null,moduleId:s.mid,moduleName:s.mname,moduleKind:s.mkind})),n(`SELECT s.id, s.name, m.id mid, m.name mname, m.kind mkind
    FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)`,"chat",s=>({key:`chss_${s.id}`,name:s.name,color:null,moduleId:s.mid,moduleName:s.mname,moduleKind:s.mkind})),n(`SELECT m.id, m.name, m.kind, m.handle, uc.color_code, pm.id mid, pm.name mname, pm.kind mkind
    FROM module m LEFT JOIN module pm ON m.parent_id=pm.id
    LEFT JOIN use_color uc ON uc.id=m.color WHERE (? IS NULL OR m.nexus_ref=?)`,"module",s=>({key:`module_${s.id}`,name:s.name,handle:s.handle,color:s.color_code,moduleId:s.mid??s.id,moduleName:s.mname??s.name,moduleKind:s.mkind??s.kind}));let a=(()=>{try{return t.prepare(`
        SELECT mh.module_ref, h.tag_name FROM module_hashtag mh
        JOIN hashtag h ON h.id=mh.hashtag_id
        JOIN module m ON m.id=mh.module_ref WHERE (? IS NULL OR m.nexus_ref=?)
      `).all(r,r)}catch{return[]}})(),i=new Map;for(let s of a)i.has(s.module_ref)||i.set(s.module_ref,[]),i.get(s.module_ref).push(s.tag_name);for(let s of o)s.tags=i.get(s.kind==="module"?Number(s.key.slice(7)):s.moduleId)||[];return o}var aN=e=>St().prepare(`
  SELECT er.*, uc.color_code FROM entity_relation er
  LEFT JOIN use_color uc ON uc.id = er.color
  WHERE er.nexus_ref=? ORDER BY er.id
`).all(e),iN=(e,t,r,o,n)=>St().prepare(`
  INSERT INTO entity_relation (nexus_ref, from_key, to_key, label, color) VALUES (?,?,?,?,?)
  ON CONFLICT(from_key, to_key, label) DO NOTHING
`).run(e,t,r,o||null,n||null).lastInsertRowid,sN=(e,t,r)=>r===void 0?St().prepare("UPDATE entity_relation SET label=? WHERE id=?").run(t||null,e):St().prepare("UPDATE entity_relation SET label=?, color=? WHERE id=?").run(t||null,r||null,e),cN=e=>St().prepare("DELETE FROM entity_relation WHERE id=?").run(e);_l.exports={viewerIndex:oN,getEntityRelations:aN,createEntityRelation:iN,updateEntityRelation:sN,deleteEntityRelation:cN}});var fl=H((VI,ml)=>{"use strict";A();var{getDB:ho}=te(),lN=e=>ho().prepare(`
  SELECT * FROM calendar_template WHERE nexus_ref=? ORDER BY builtin DESC, name COLLATE NOCASE
`).all(e),dN=(e,t,r)=>ho().prepare(`
  INSERT INTO calendar_template (nexus_ref, name, spec) VALUES (?,?,?)
  ON CONFLICT(nexus_ref, name) DO UPDATE SET spec=excluded.spec, update_at=datetime('now')
`).run(e,t,r).lastInsertRowid,EN=e=>ho().prepare("DELETE FROM calendar_template WHERE id=? AND builtin=0").run(e);function uN(e,t,r){let o=ho(),n=o.prepare("SELECT id FROM calendar_template WHERE nexus_ref=? AND builtin=1").get(e);return n?n.id:o.prepare("INSERT INTO calendar_template (nexus_ref, name, spec, builtin) VALUES (?,?,?,1)").run(e,t,r).lastInsertRowid}ml.exports={listCalendarTemplates:lN,saveCalendarTemplate:dN,deleteCalendarTemplate:EN,ensureBuiltinCalendarTemplate:uN}});var Nl=H((JI,Tl)=>{"use strict";A();var{getDB:De}=te(),pN=e=>De().prepare(`
  SELECT p.*,
    (SELECT COUNT(*) FROM sketch_stroke s WHERE s.page_ref = p.id) AS stroke_count
  FROM sketch_page p WHERE p.module_ref = ? ORDER BY p.page_order, p.id
`).all(e),_N=(e,t)=>{let r=De(),o=r.prepare("SELECT COALESCE(MAX(page_order),-1) AS m FROM sketch_page WHERE module_ref=?").get(e).m;return r.prepare("INSERT INTO sketch_page (module_ref,name,page_order) VALUES (?,?,?)").run(e,t,o+1).lastInsertRowid},mN=(e,t)=>De().prepare("UPDATE sketch_page SET name=?, update_at=datetime('now') WHERE id=?").run(t,e),fN=(e,t)=>{let r=De(),o=r.prepare("SELECT * FROM sketch_page WHERE id=?").get(e);if(!o)return;let n=r.prepare(`
    SELECT * FROM sketch_page WHERE module_ref=? AND page_order ${t<0?"<":">"} ?
    ORDER BY page_order ${t<0?"DESC":"ASC"} LIMIT 1
  `).get(o.module_ref,o.page_order);n&&(r.prepare("UPDATE sketch_page SET page_order=? WHERE id=?").run(n.page_order,o.id),r.prepare("UPDATE sketch_page SET page_order=? WHERE id=?").run(o.page_order,n.id))},TN=e=>De().prepare("DELETE FROM sketch_page WHERE id=?").run(e),NN=e=>De().prepare(`
  SELECT * FROM sketch_stroke WHERE page_ref=? ORDER BY id
`).all(e),gN=(e,t,r,o)=>{let n=De(),a=n.prepare("INSERT INTO sketch_stroke (page_ref,color,width,points) VALUES (?,?,?,?)").run(e,t,r,JSON.stringify(o)).lastInsertRowid;return n.prepare("UPDATE sketch_page SET update_at=datetime('now') WHERE id=?").run(e),a},hN=e=>De().prepare("DELETE FROM sketch_stroke WHERE id=?").run(e),RN=e=>De().prepare(`
  SELECT * FROM sketch_pin WHERE page_ref=? ORDER BY id
`).all(e),SN=(e,t,r,o)=>De().prepare(`
  INSERT INTO sketch_pin (page_ref,linker_key,x,y) VALUES (?,?,?,?)
`).run(e,t,r,o).lastInsertRowid,ON=(e,t,r)=>De().prepare("UPDATE sketch_pin SET x=?, y=? WHERE id=?").run(t,r,e),LN=e=>De().prepare("DELETE FROM sketch_pin WHERE id=?").run(e);Tl.exports={getSketchPages:pN,createSketchPage:_N,renameSketchPage:mN,moveSketchPage:fN,deleteSketchPage:TN,getSketchStrokes:NN,createSketchStroke:gN,deleteSketchStroke:hN,getSketchPins:RN,createSketchPin:SN,moveSketchPin:ON,deleteSketchPin:LN}});var hl=H((zI,gl)=>{"use strict";A();var{getDB:ot}=te(),IN=e=>ot().prepare(`
  SELECT * FROM design_node WHERE module_ref=? ORDER BY id
`).all(e),AN=(e,t,r,o,n,a,i)=>ot().prepare(`
  INSERT INTO design_node (module_ref,shape,x,y,node_text,color,linker_key) VALUES (?,?,?,?,?,?,?)
`).run(e,t||"box",r,o,n||null,a||null,i||null).lastInsertRowid,yN=(e,t,r,o)=>ot().prepare(`
  UPDATE design_node SET shape=?, node_text=?, color=?, update_at=datetime('now') WHERE id=?
`).run(t,r||null,o||null,e),wN=(e,t,r)=>ot().prepare(`
  UPDATE design_node SET x=?, y=?, update_at=datetime('now') WHERE id=?
`).run(t,r,e),CN=e=>ot().prepare("DELETE FROM design_node WHERE id=?").run(e),bN=e=>ot().prepare(`
  SELECT * FROM design_edge WHERE module_ref=? ORDER BY id
`).all(e),kN=(e,t,r,o)=>ot().prepare(`
  INSERT INTO design_edge (module_ref,from_ref,to_ref,label) VALUES (?,?,?,?)
  ON CONFLICT(from_ref,to_ref) DO UPDATE SET label=excluded.label
`).run(e,t,r,o||null).lastInsertRowid,DN=(e,t)=>ot().prepare("UPDATE design_edge SET label=? WHERE id=?").run(t||null,e),FN=e=>ot().prepare("DELETE FROM design_edge WHERE id=?").run(e);gl.exports={getDesignNodes:IN,createDesignNode:AN,updateDesignNode:yN,moveDesignNode:wN,deleteDesignNode:CN,getDesignEdges:bN,createDesignEdge:kN,updateDesignEdgeLabel:DN,deleteDesignEdge:FN}});var Sl=H((ZI,Rl)=>{"use strict";A();var{getDB:Ot}=te(),xN=e=>Ot().prepare(`
  SELECT * FROM import_file WHERE nexus_ref=? ORDER BY folder, file_name COLLATE NOCASE
`).all(e),UN=e=>Ot().prepare("SELECT * FROM import_file WHERE id=?").get(e);function MN(e,t){let r=Ot(),o=r.prepare(`
    INSERT INTO import_file (nexus_ref, file_name, file_path, file_type, file_size, folder)
    VALUES (?,?,?,?,?,?)
  `),n=r.prepare("SELECT id FROM import_file WHERE nexus_ref=? AND file_path=?");return r.transaction(()=>{let a=0;for(let i of t||[])n.get(e,i.path)||(o.run(e,i.name,i.path,i.type||null,i.size||0,i.folder||null),a++);return a})()}var vN=(e,t)=>Ot().prepare(`
  UPDATE import_file SET linker_key=?, use_as_image=CASE WHEN ? IS NULL THEN 0 ELSE use_as_image END WHERE id=?
`).run(t||null,t||null,e);function jN(e,t){let r=Ot(),o=r.prepare("SELECT linker_key FROM import_file WHERE id=?").get(e);o&&(t&&o.linker_key&&r.prepare("UPDATE import_file SET use_as_image=0 WHERE linker_key=? AND id<>?").run(o.linker_key,e),r.prepare("UPDATE import_file SET use_as_image=? WHERE id=?").run(t?1:0,e))}var PN=e=>Ot().prepare("DELETE FROM import_file WHERE id=?").run(e),WN=e=>Ot().prepare(`
  SELECT id, linker_key, file_path FROM import_file
  WHERE nexus_ref=? AND use_as_image=1 AND linker_key IS NOT NULL
`).all(e);Rl.exports={getImportFiles:xN,getImportFile:UN,addImportFiles:MN,setImportLinker:vN,setImportUseAsImage:jN,deleteImportFile:PN,getDisplayImages:WN}});var yl=H((tA,Al)=>{"use strict";A();var{app:Ol}=(le(),X(me)),{getDB:sa}=te(),{getAppSetting:HN,setAppSetting:XN}=Ae(),BN={director:"project",navigator:"world_project",hero:"game_project",writer:"write_project",scribe:"note"},Ll="legacyPrompt:seen:";function GN(e,t,r,o){let n=sa(),a=Rt(),i=ia(),s=Er(),u=Et(),l=zn(),g=Zn(),m=ra(),L=aa(),I={modules:0,objects:0,events:0,areas:0,chapters:0,dialogues:0,relations:0,wandererPins:0,chatMessages:0},N=(T,_,S,b,W)=>{let B=n.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS ? AND kind=? AND name=?").get(e,T,S,_);return B?B.id:(I.modules++,a.createModule({nexus_ref:e,parent_id:T,name:_,kind:S,cat_type:b||null,color:W||null}))},h=(T,_,S)=>N(T,_,S),O=(T,_,S,b,W)=>{let B=N(T,_.name,"classifier",S,_.color),k=new Map;for(let v of b){let j=u.createTemplate(B,v.description,v.attribute_type,!1,!1,null);k.set(v.id,j)}let J=new Map;for(let v of W){let j=u.createObject(B,v.name,v.color);v.note&&u.updateObjectNote(j,v.note);for(let[G,Y]of v.values){if(Y==null||Y==="")continue;let K=k.get(G);K&&u.upsertAttr(j,K,Y)}v.legacyId!=null&&J.set(v.legacyId,j),I.objects++}return{cid:B,objMap:J}},f=(T,_)=>{let S=l.getOrCreateDate(_.day,_.month,_.years,_.hour,_.minute),b=n.prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,color,story) VALUES (?,?,?,?,?)").run(T,_.name,S,_.color||null,_.story||null).lastInsertRowid;return I.events++,b},y=(T,_)=>{let S=g.createMapArea(T,_.name,_.color).lastInsertRowid,b=n.prepare("INSERT INTO map_point (area_id,point_order,x,y) VALUES (?,?,?,?)");return(_.points||[]).forEach((W,B)=>b.run(S,B,W.x,W.y)),I.areas++,S},F=(T,_,S)=>{let b=S.map(B=>`## ${B.attribute_name||"\u2014"}

${B.attribute_text||""}`).join(`

`);if(!b.trim())return null;let W=N(T,_,"inspector");return a.updateModuleDescription(W,b),W},C=(T,_,S,b,W,B)=>{let k=n.prepare("SELECT * FROM relation WHERE project_id=?").all(S);if(!k.length||!b.length)return null;let J=N(T,_,"connector");a.setModuleUi(J,"filterDef",JSON.stringify({query:"",kinds:[],moduleIds:b,tag:""}));for(let v of k){let j=v.relation_type?n.prepare("SELECT relation_name FROM relation_type WHERE id=?").get(v.relation_type)?.relation_name:null;for(let G of n.prepare("SELECT * FROM relation_obob WHERE relation_id=?").all(v.id)){let Y=W.get(G.object_from),K=W.get(G.object_to);Y&&K&&(i.createEntityRelation(e,`cobj_${Y}`,`cobj_${K}`,j),I.relations++)}for(let G of n.prepare("SELECT * FROM relation_obtl WHERE relation_id=?").all(v.id)){let Y=W.get(G.object_from),K=B.get(G.timeline_to);Y&&K&&(i.createEntityRelation(e,`cobj_${Y}`,`tlev_${K}`,j),I.relations++)}for(let G of n.prepare("SELECT * FROM relation_tltl WHERE relation_id=?").all(v.id)){let Y=B.get(G.timeline_from),K=B.get(G.timeline_to);Y&&K&&(i.createEntityRelation(e,`tlev_${Y}`,`tlev_${K}`,j),I.relations++)}}return J};return{id:n.transaction(()=>{let T=null;if(t==="director"){let _=n.prepare("SELECT * FROM project WHERE id=?").get(r);if(!_)throw new Error("project not found");let S=h(null,"Director","collector"),b=S;if(_.folder_id){let j=n.prepare("SELECT * FROM project_folder WHERE id=?").get(_.folder_id);j&&(b=h(S,j.name,"collector"))}T=N(b,_.name,"manager",null,_.project_color);let W=[],B=new Map,k=new Map;for(let j of n.prepare("SELECT * FROM object_category WHERE project_id=?").all(r)){let G=n.prepare("SELECT * FROM object_template WHERE category_id=? ORDER BY display_order, id").all(j.id),Y=n.prepare("SELECT * FROM object WHERE category_id=?").all(j.id).map(fe=>({legacyId:fe.id,name:fe.name,color:fe.color,note:fe.note,values:G.map(Je=>[Je.id,n.prepare("SELECT attribute_value FROM object_attribute WHERE object_id=? AND template_id=?").get(fe.id,Je.id)?.attribute_value])})),{cid:K,objMap:re}=O(T,{name:j.category_name,color:j.color},"object",G,Y);W.push(K);for(let[fe,Je]of re)B.set(fe,Je)}for(let j of n.prepare("SELECT * FROM timeline WHERE project_id=?").all(r)){let G=N(T,j.line_name||_.name,"chronicler"),Y=n.prepare("INSERT INTO timeline (line_name, module_ref, color) VALUES (?,?,?)").run(j.line_name||_.name,G,j.color||null).lastInsertRowid;W.push(G);let K=n.prepare(`
          SELECT te.id, te.event_name, te.story, te.color, td.day, td.month, td.years, td.hour, td.minute
          FROM timeline_event te JOIN timeline_date td ON te.start_at=td.id WHERE te.timeline_id=?
        `).all(j.id);for(let re of K)k.set(re.id,f(Y,{name:re.event_name||"\u2014",story:re.story,color:re.color,...re}))}for(let j of n.prepare("SELECT * FROM map WHERE project_id=?").all(r)){let G=N(T,j.map_name||_.name,"locator"),Y=n.prepare("INSERT INTO map (map_name, module_ref, color) VALUES (?,?,?)").run(j.map_name||_.name,G,j.color||null).lastInsertRowid;for(let K of n.prepare("SELECT * FROM map_area WHERE map_id=?").all(j.id)){let re=n.prepare("SELECT x, y FROM map_point WHERE area_id=? ORDER BY point_order").all(K.id);y(Y,{name:K.area_name||"\u2014",color:K.color,points:re})}}let J=n.prepare("SELECT * FROM project_description WHERE project_id=?").all(r);J.length&&F(T,_.name,J);let v=C(T,`${_.name} Relations`,r,W,B,k);v&&o&&(o.directorConnectors||=[],o.directorConnectors.push({id:v,moduleIds:W}))}else if(t==="navigator"){let _=n.prepare("SELECT * FROM world_project WHERE id=?").get(r);if(!_)throw new Error("world not found");let S=h(null,"Navigator","collector");T=N(S,_.name,"manager",null,_.color);let b=[],W=n.prepare("SELECT * FROM world_character WHERE world_ref=?").all(r).map(v=>({legacyId:v.id,name:v.name,color:v.color,note:null,values:[]}));if(W.length){let{cid:v}=O(T,{name:"Characters",color:null},"character",[],W);b.push(v)}for(let v of n.prepare("SELECT * FROM world_orig_category WHERE world_ref=?").all(r)){let j=n.prepare("SELECT * FROM world_orig_template WHERE category_id=? ORDER BY display_order, id").all(v.id),G=n.prepare("SELECT * FROM world_orig_object WHERE category_id=?").all(v.id).map(K=>({legacyId:K.id,name:K.name,color:K.color,note:K.note,values:j.map(re=>[re.id,n.prepare("SELECT attribute_value FROM world_orig_attribute WHERE object_id=? AND template_id=?").get(K.id,re.id)?.attribute_value])})),{cid:Y}=O(T,{name:v.category_name,color:v.color},"object",j,G);b.push(Y)}let B=new Map;for(let v of n.prepare(`
        SELECT wm.id AS wmid, m.id AS map_id, m.map_name FROM world_map wm JOIN map m ON wm.map_ref=m.id
        WHERE wm.world_ref=?`).all(r)){let j=N(T,v.map_name||_.name,"locator"),G=n.prepare("INSERT INTO map (map_name, module_ref) VALUES (?,?)").run(v.map_name||_.name,j).lastInsertRowid;B.set(v.map_id,j);for(let Y of n.prepare("SELECT * FROM map_area WHERE map_id=?").all(v.map_id)){let K=n.prepare("SELECT x, y FROM map_point WHERE area_id=? ORDER BY point_order").all(Y.id);y(G,{name:Y.area_name||"\u2014",color:Y.color,points:K})}}let k=new Map;for(let v of n.prepare("SELECT * FROM world_timeline WHERE world_ref=?").all(r)){let j=N(T,v.name,"chronicler"),G=n.prepare("INSERT INTO timeline (line_name, module_ref) VALUES (?,?)").run(v.name,j).lastInsertRowid;b.push(j);let Y=n.prepare(`
          SELECT wte.id, td.day, td.month, td.years, td.hour, td.minute
          FROM world_timeline_event wte JOIN world_timeline_date td ON wte.date_ref=td.id WHERE wte.timeline_ref=?
        `).all(v.id),K=new Map;for(let re of Y)K.set(re.id,f(G,{name:`${re.day}/${re.month}/${re.years}`,...re}));k.set(v.id,{moduleId:j,eventMap:K,worldMapRef:v.world_map_ref})}for(let[v,j]of k){if(!j.worldMapRef)continue;let G=n.prepare("SELECT map_ref FROM world_map WHERE id=?").get(j.worldMapRef),Y=G?B.get(G.map_ref):null,K=n.prepare("SELECT name FROM world_timeline WHERE id=?").get(v),re=N(T,K?.name||"Wanderer","wanderer");Y&&a.setModuleUi(re,"mapModule",String(Y)),a.setModuleUi(re,"timelineModule",String(j.moduleId));for(let[fe,Je]of j.eventMap)for(let Ke of n.prepare("SELECT * FROM world_timeline_object WHERE event_ref=?").all(fe)){let it=Ke.point_ref?n.prepare("SELECT x, y FROM world_timeline_point WHERE id=?").get(Ke.point_ref):null,qt=Ke.world_object_ref?n.prepare("SELECT ob.name FROM world_object wo JOIN object ob ON wo.object_ref=ob.id WHERE wo.id=?").get(Ke.world_object_ref)?.name:Ke.world_character_ref?n.prepare("SELECT name FROM world_character WHERE id=?").get(Ke.world_character_ref)?.name:null;m.createMapEvent(re,Je,qt||null,it?.x||0,it?.y||0,null),I.wandererPins++}}let J=n.prepare("SELECT * FROM world_description WHERE world_ref=?").all(r);if(J.length&&F(T,_.name,J),b.length&&o?.directorConnectors?.length)for(let v of o.directorConnectors){let j=JSON.parse(a.getModuleUi(v.id).filterDef||"{}"),G=Array.from(new Set([...j.moduleIds||[],...b]));a.setModuleUi(v.id,"filterDef",JSON.stringify({...j,moduleIds:G}))}}else if(t==="hero"){let _=n.prepare("SELECT * FROM game_project WHERE id=?").get(r);if(!_)throw new Error("game not found");let S=h(null,"Hero","collector");T=N(S,_.name,"manager",null,_.color_ref);let b=n.prepare("SELECT * FROM game_char_template WHERE game_ref=?").all(r),W=n.prepare("SELECT * FROM game_character WHERE game_ref=?").all(r);if(W.length||b.length){let k=W.map(v=>({legacyId:v.id,name:v.name,color:v.color_ref,note:v.memo,values:b.map(j=>[j.id,n.prepare(`
            SELECT attribute_text FROM game_char_attribute WHERE char_ref=? AND template_ref=? ORDER BY level DESC LIMIT 1
          `).get(v.id,j.id)?.attribute_text])})),J=b.map(v=>({id:v.id,description:v.attribute_name,attribute_type:v.attribute_type}));O(T,{name:"Characters",color:null},"character",J,k)}for(let k of n.prepare("SELECT * FROM game_collection WHERE game_ref=?").all(r)){let J=n.prepare("SELECT * FROM game_col_template WHERE collection_ref=?").all(k.id),v=n.prepare("SELECT * FROM game_col_element WHERE collection_ref=?").all(k.id).map(G=>({legacyId:G.id,name:G.name,color:G.color_ref,note:null,values:J.map(Y=>[Y.id,n.prepare(`
            SELECT attribute_text FROM game_col_attribute WHERE element_ref=? AND template_ref=? ORDER BY level DESC LIMIT 1
          `).get(G.id,Y.id)?.attribute_text])})),j=J.map(G=>({id:G.id,description:G.attribute_name,attribute_type:G.attribute_type}));O(T,{name:k.name,color:k.color_ref},"element",j,v)}let B=new Map(n.prepare("SELECT id, name FROM game_character WHERE game_ref=?").all(r).map(k=>[k.id,k.name]));for(let k of n.prepare("SELECT * FROM game_story WHERE game_ref=?").all(r)){let J=N(T,k.name,"narrator"),v=new Map;for(let j of n.prepare("SELECT * FROM game_dialogue WHERE story_ref=?").all(k.id)){let G=n.prepare("INSERT INTO story_dialogue (module_ref, name, pos_x, pos_y) VALUES (?,?,?,?)").run(J,j.name,j.pos_x||0,j.pos_y||0).lastInsertRowid;v.set(j.id,G),I.dialogues++;for(let Y of n.prepare("SELECT * FROM game_conversation WHERE dialogue_ref=? ORDER BY talk_order").all(j.id))n.prepare("INSERT INTO story_talk (dialogue_ref, speaker, talk_sentence, talk_order) VALUES (?,?,?,?)").run(G,Y.char_ref&&B.get(Y.char_ref)||null,Y.talk_sentence,Y.talk_order)}for(let j of n.prepare("SELECT * FROM game_storyline WHERE story_ref=?").all(k.id)){let G=v.get(j.from_ref),Y=v.get(j.to_ref);G&&Y&&n.prepare(`INSERT INTO story_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)
              ON CONFLICT(from_ref, to_ref) DO NOTHING`).run(J,G,Y,j.symbol||null)}}}else if(t==="writer"){let _=n.prepare("SELECT * FROM write_project WHERE id=?").get(r);if(!_)throw new Error("write project not found");let S=h(null,"Writer","collector");T=N(S,_.project_name,"manager",null,_.color);for(let W of n.prepare("SELECT * FROM write_series WHERE project_id=?").all(r)){let B=h(T,W.name,"collector");for(let k of n.prepare("SELECT * FROM write_book WHERE series_id=?").all(W.id)){let J=N(B,k.name,"author",null,k.color);for(let v of n.prepare("SELECT * FROM write_chapter WHERE book_id=? ORDER BY chapter_order, id").all(k.id)){let j=s.createBookChapter(J,v.name);v.chapter_content&&s.updateBookChapterContent(j,v.chapter_content),I.chapters++}}}let b=n.prepare("SELECT * FROM write_note WHERE project_id=?").all(r);if(b.length){let W=h(T,"Chat","scribe");for(let B of b){let k=L.createChatSession(W,B.notename),J=n.prepare("SELECT chat FROM write_chat WHERE note_id=? ORDER BY chat_order").all(B.id);for(let v of J)v.chat&&(L.createChatMessage(k,v.chat),I.chatMessages++)}}}else if(t==="scribe"){T=N(null,"Scribe","collector");let _=n.prepare("SELECT * FROM note_folder WHERE nexus_ref=?").all(e),S=new Map,b=new Map;for(let k of _){let J=k.parent_ref??null;b.has(J)||b.set(J,[]),b.get(J).push(k)}let W=(k,J)=>{for(let v of b.get(k)||[]){let j=N(J,v.name,"collector");S.set(v.id,j),W(v.id,j)}};W(null,T);let B=n.prepare("SELECT * FROM note WHERE nexus_ref=? AND migrated_v3=0").all(e);for(let k of B){let J=k.folder_ref&&S.get(k.folder_ref)||T,v=N(J,k.title,"inspector");k.content&&a.updateModuleDescription(v,k.content)}return n.prepare("UPDATE note SET migrated_v3=1 WHERE nexus_ref=? AND migrated_v3=0").run(e),T}else throw new Error(`unknown target ${t}`);return n.prepare(`UPDATE ${BN[t]} SET migrated_v3=1 WHERE id=?`).run(r),T})(),counts:I,batchCtx:o||null}}function Il(e,t){let r=sa();if(e==="scribe"){if(!t)return[];try{let n=r.prepare("SELECT COUNT(*) AS n FROM note WHERE nexus_ref=? AND migrated_v3=0").get(t);return n?.n?[{id:t,name:`Scribe (${n.n})`}]:[]}catch{return[]}}let o={director:"SELECT id, name FROM project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",navigator:"SELECT id, name FROM world_project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",hero:"SELECT id, name FROM game_project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",writer:"SELECT id, project_name AS name FROM write_project WHERE migrated_v3=0 ORDER BY project_name COLLATE NOCASE"};try{return r.prepare(o[e]).all()}catch{return[]}}var $N={director:"Director",navigator:"Navigator",hero:"Hero",writer:"Writer"};function YN(e,t,r){let o=[],n=(a,i)=>{let s=e.prepare(i).get(r)?.n||0;s&&o.push(`${s} ${a}`)};return t==="director"?(n("categories","SELECT COUNT(*) AS n FROM object_category WHERE project_id=?"),n("timelines","SELECT COUNT(*) AS n FROM timeline WHERE project_id=?"),n("maps","SELECT COUNT(*) AS n FROM map WHERE project_id=?")):t==="navigator"?(n("characters","SELECT COUNT(*) AS n FROM world_character WHERE world_ref=?"),n("categories","SELECT COUNT(*) AS n FROM world_orig_category WHERE world_ref=?"),n("timelines","SELECT COUNT(*) AS n FROM world_timeline WHERE world_ref=?"),n("maps","SELECT COUNT(*) AS n FROM world_map WHERE world_ref=?")):t==="hero"?(n("characters","SELECT COUNT(*) AS n FROM game_character WHERE game_ref=?"),n("collections","SELECT COUNT(*) AS n FROM game_collection WHERE game_ref=?"),n("stories","SELECT COUNT(*) AS n FROM game_story WHERE game_ref=?")):t==="writer"&&(n("series","SELECT COUNT(*) AS n FROM write_series WHERE project_id=?"),n("notes","SELECT COUNT(*) AS n FROM write_note WHERE project_id=?")),o.join(" \xB7 ")}function VN(e){let t=sa(),r=[];for(let o of["director","navigator","hero","writer","scribe"])for(let n of Il(o,e)){if(o==="scribe"){let u=t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS NULL AND kind='collector' AND name=?").get(e,"Scribe");r.push({target:o,legacyId:n.id,legacyName:n.name,kind:"collector",willMergeInto:u?"Scribe":null,willCreateNew:!u,summary:""});continue}let a=$N[o],i=t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS NULL AND kind='collector' AND name=?").get(e,a),s=i?t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id=? AND kind='manager' AND name=?").get(e,i.id,n.name):null;r.push({target:o,legacyId:n.id,legacyName:n.name,kind:"manager",willMergeInto:s?n.name:null,willCreateNew:!s,summary:YN(t,o,n.id)})}return r}function qN(e){return HN(`${Ll}${e}`)===Ol.getVersion()}function JN(e){return XN(`${Ll}${e}`,Ol.getVersion()),{ok:!0}}Al.exports={migrateLegacy:GN,listLegacyProjects:Il,previewLegacyMigration:VN,getLegacyPromptSeen:qN,setLegacyPromptSeen:JN}});var pr=H((oA,Dl)=>{"use strict";A();var{safeStorage:la}=(le(),X(me)),{getAppSetting:KN,setAppSetting:Ro}=Ae(),ca="enc:v1:",Cl=new Set(["drive:refreshToken","drive:clientSecret","drive:clientId","google:refreshToken","sync:anonKey"]),zN=/^cloud:[a-z0-9_]+:(clientId|clientSecret|refreshToken|token|password|secretKey)$/,QN=e=>Cl.has(e)||zN.test(String(e||"")),wl=!1;function bl(){let e=!1;try{e=la.isEncryptionAvailable()}catch{e=!1}return!e&&!wl&&(wl=!0,console.warn("[secret-store] OS encryption unavailable \u2014 credentials stored unencrypted")),e}function kl(e,t){let r=String(t??"");if(!r)return Ro(e,"");if(!bl())return Ro(e,r);try{return Ro(e,ca+la.encryptString(r).toString("base64"))}catch{return Ro(e,r)}}function ZN(e){let t=KN(e);if(!t)return t;if(!String(t).startsWith(ca)){if(bl())try{kl(e,t)}catch{}return t}try{return la.decryptString(D.from(String(t).slice(ca.length),"base64"))}catch{return null}}Dl.exports={SECRET_KEYS:Cl,isSecretKey:QN,getSecret:ZN,setSecret:kl}});var So={};ze(So,{createServer:()=>Fl,default:()=>eg,get:()=>Ul,request:()=>xl});var da,Fl,xl,Ul,eg,Oo=Ce(()=>{"use strict";A();da=e=>()=>{throw Object.assign(new Error(`${e} is not available in the web build (no local HTTP server in a browser)`),{code:"ERR_WEB_UNSUPPORTED"})},Fl=da("http.createServer"),xl=da("http.request"),Ul=da("http.get"),eg={createServer:Fl,request:xl,get:Ul}});var Lo=H((iA,vl)=>{"use strict";A();var Ea=(rt(),X(tt)),tg=(Oo(),X(So)),Ml=e=>e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function rg(){let e=Ml(Ea.randomBytes(32)),t=Ml(Ea.createHash("sha256").update(e).digest());return{verifier:e,challenge:t}}var og=()=>Ea.randomBytes(16).toString("hex");function ng(e,{timeoutMs:t=300*1e3,state:r=null}={}){return new Promise((o,n)=>{let a=!1,i,s=(g,m)=>{a||(a=!0,clearTimeout(l),u.close(),g(m))},u=tg.createServer((g,m)=>{let L;try{L=new URL(g.url,"http://127.0.0.1")}catch{m.writeHead(400),m.end();return}if(L.pathname!=="/callback"){m.writeHead(404),m.end();return}if(r!==null&&L.searchParams.get("state")!==r){m.writeHead(400,{"Content-Type":"text/html; charset=utf-8"}),m.end('<html><body style="font-family:sans-serif;padding:2rem">Login failed \u2014 the request could not be verified. Please try again.</body></html>'),s(n,new Error("state_mismatch"));return}let I=L.searchParams.get("code"),N=L.searchParams.get("error_description")||L.searchParams.get("error");m.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),m.end('<html><body style="font-family:sans-serif;padding:2rem">Login complete \u2014 you can close this tab.</body></html>'),I?s(o,{code:I,redirectUri:i}):s(n,new Error(N||"no_code"))}),l=setTimeout(()=>s(n,new Error("login_timeout")),t);u.on("error",g=>s(n,g)),u.unref(),u.listen(0,"127.0.0.1",()=>{i=`http://127.0.0.1:${u.address().port}/callback`,(le(),X(me)).shell.openExternal(e(i))})})}vl.exports={makePkcePair:rg,makeState:og,runOAuthLoopback:ng}});var Vl=H((cA,Yl)=>{"use strict";A();var ag=(Oo(),X(So)),ua=(rt(),X(tt)),Gl=(Le(),X(be)),jl=(ge(),X(xe)),{app:ig}=(le(),X(me)),sg=4320*60*1e3,cg=8,lg=900*1e3,Pl=3,$l=e=>e==="pro"?20971520:10485760,Wl=e=>e==="pro"?3:1,Z=null,Io=null,_r=null,mr=null;function dg(){Io=jl.join(jl.dirname(ig.getPath("userData")),"dev-sync-server.json");try{Z=JSON.parse(Gl.readFileSync(Io,"utf8"))}catch{Z=null}(!Z||typeof Z!="object"||Z.schema!==Pl)&&(Z={schema:Pl,vaults:{},tokens:{}}),Z.vaults=Z.vaults||{},Z.tokens=Z.tokens||{}}function Wt(){try{Gl.writeFileSync(Io,JSON.stringify(Z))}catch(e){console.error("dev-sync-server: persist failed:",e)}}var Hl=e=>ua.createHash("sha256").update(String(e||""),"utf8").digest("hex"),Xl=e=>ua.createHash("sha256").update(String(e||""),"utf8").digest("hex"),he=e=>new Error(e);function Eg(e,t){if(D.byteLength(JSON.stringify(e??null))>$l(t))throw he("too_large")}function Bl(e){let t=!1;for(let[r,o]of Object.entries(Z.vaults))o.owner_id===e&&new Date(o.expires_at).getTime()<Date.now()&&(delete Z.tokens[o.token_hash],delete Z.vaults[r],t=!0);t&&Wt()}var ug={token_sync_push(e,t){let{uid:r,tier:o}=t;if(!r)throw he("not_authenticated");Eg(e.p_snapshot,o);let n=String(e.p_token||"");if(!/^[0-9]{16}$/.test(n))throw he("bad_token");let a=Hl(n),i=e.p_vault_id||null;if(i){let m=Z.vaults[i];if(!m||m.owner_id!==r)throw he("not_owner")}else{if(Object.values(Z.vaults).filter(L=>L.owner_id===r).length>=Wl(o))throw he("quota_exceeded");i=ua.randomUUID()}let s=Z.tokens[a];if(s&&s!==i)throw he("token_collision");let u=Z.vaults[i];u&&delete Z.tokens[u.token_hash];let l=new Date().toISOString(),g={id:i,owner_id:r,name:e.p_name||"vault",snapshot:e.p_snapshot,snapshot_at:l,token_hash:a,password_hash:e.p_password?Xl(e.p_password):null,expires_at:new Date(Date.now()+sg).toISOString(),pull_fail_count:0,pull_locked_until:null};return Z.vaults[i]=g,Z.tokens[a]=i,Wt(),{vault_id:i,snapshot_at:g.snapshot_at,expires_at:g.expires_at}},token_sync_status(e,t){let{uid:r,tier:o}=t;if(!r)throw he("not_authenticated");Bl(r);let n=Object.values(Z.vaults).filter(a=>a.owner_id===r).sort((a,i)=>a.snapshot_at<i.snapshot_at?1:-1).map(a=>({vault_id:a.id,name:a.name,snapshot_at:a.snapshot_at,expires_at:a.expires_at,size_bytes:D.byteLength(JSON.stringify(a.snapshot)),has_password:!!a.password_hash}));return{tier:o,max_slots:Wl(o),max_bytes:$l(o),uploads:n}},token_sync_delete(e,t){if(!t.uid)throw he("not_authenticated");let r=Z.vaults[e.p_vault_id];return r&&r.owner_id===t.uid&&(delete Z.tokens[r.token_hash],delete Z.vaults[e.p_vault_id],Wt()),{ok:!0}},token_sync_pull_own(e,t){if(!t.uid)throw he("not_authenticated");Bl(t.uid);let r=Z.vaults[e.p_vault_id];if(!r||r.owner_id!==t.uid)throw he("no_upload");return{name:r.name,snapshot:r.snapshot,snapshot_at:r.snapshot_at}},token_sync_pull_by_token(e,t){let r=Z.tokens[Hl(e.p_token)],o=r?Z.vaults[r]:null;if(!o)throw he("bad_token");if(new Date(o.expires_at).getTime()<Date.now())throw delete Z.tokens[o.token_hash],delete Z.vaults[r],Wt(),he("bad_token");if(o.pull_locked_until&&new Date(o.pull_locked_until).getTime()>Date.now())throw he("locked");if(t.uid&&t.uid===o.owner_id)return{vault_id:o.id,name:o.name,snapshot:o.snapshot,snapshot_at:o.snapshot_at};if(o.password_hash&&(!e.p_password||Xl(e.p_password)!==o.password_hash))throw o.pull_fail_count=(o.pull_fail_count||0)+1,o.pull_fail_count>=cg&&(o.pull_locked_until=new Date(Date.now()+lg).toISOString()),Wt(),he("bad_password");return o.pull_fail_count=0,o.pull_locked_until=null,Wt(),{vault_id:o.id,name:o.name,snapshot:o.snapshot,snapshot_at:o.snapshot_at}}},pg=["not_authenticated","bad_token","bad_password","locked","token_collision","no_upload","too_large","quota_exceeded","not_owner"];function _g(e){let t=/^Bearer\s+(.+)$/.exec(e.headers.authorization||"");if(!t||t[1]==="dev-local")return{uid:null,tier:"free"};let[r,o]=t[1].split(":");return{uid:r,tier:o==="pro"?"pro":"free"}}function mg(e,t){let r=(s,u)=>{t.writeHead(s,{"Content-Type":"application/json"}),t.end(JSON.stringify(u))},o=/^\/rest\/v1\/rpc\/(\w+)$/.exec(e.url);if(!o||e.method!=="POST")return r(404,{message:"not found"});if(!e.headers.apikey)return r(401,{message:"No API key found in request"});let n=ug[o[1]];if(!n)return r(404,{message:`function ${o[1]} not found`});let a=_g(e),i="";e.on("data",s=>{i+=s}),e.on("end",()=>{let s;try{s=JSON.parse(i||"{}")}catch{return r(400,{message:"bad json"})}try{r(200,n(s,a))}catch(u){let l=String(u.message||u);r(pg.includes(l)?400:500,{message:l})}})}function fg(){return _r?Promise.resolve(_r):mr||(mr=new Promise((e,t)=>{dg();let r=ag.createServer(mg);r.on("error",o=>{mr=null,t(o)}),r.unref(),r.listen(0,"127.0.0.1",()=>{_r=`http://127.0.0.1:${r.address().port}`,console.log(`dev-sync-server: token sync backend at ${_r} (state: ${Io})`),e(_r)})}),mr)}Yl.exports={ensureDevSyncServer:fg}});var ql=H((dA,Tg)=>{Tg.exports={name:"@zydraxyl/dracondex",productName:"DraconDex",version:"4.18.0",description:"Novel data management app",main:"electron/main.js",license:"MIT",author:"ZYDRAXYL",repository:{type:"git",url:"https://github.com/ZYDRAXYL/DraconDex-EXE.git"},publishConfig:{registry:"https://npm.pkg.github.com"},files:["electron/**/*","!electron/test/**","src/assets/brand/**/*","src/schema/generated/**/*"],scripts:{start:"node ./electron/start.js",postinstall:"node ./electron/ensure-electron.js","sdb:check":"node tools/sdb-check.mjs","sdb:vendor":"node tools/sdb-vendor.mjs","chain:survey":"node tools/chain-survey.mjs","chain:propagate":"node tools/chain-propagate.mjs","build:portable":"electron-builder --win dir --publish never && node electron/scripts/finish-portable.mjs","build:exe":"electron-builder --win portable --publish never","build:installer":"electron-builder --win nsis --publish never"},dependencies:{"node-sqlite3-wasm":"^0.8.59"},devDependencies:{electron:"^42.5.0","electron-builder":"^26.15.3","playwright-core":"^1.61.1"},build:{appId:"com.dracondex.app",productName:"DraconDex",asar:!0,directories:{output:"DraconDexPortable"},files:["package.json","electron/**/*","!electron/test/**","!electron/scripts/**","src/assets/brand/**/*","src/schema/generated/**/*"],electronLanguages:["en-US","th"],win:{signAndEditExecutable:!1,icon:"src/assets/brand/DraconDex_Icon.ico",target:[{target:"dir",arch:["x64"]}]},nsis:{oneClick:!1,allowToChangeInstallationDirectory:!0,createDesktopShortcut:!0,createStartMenuShortcut:!0,artifactName:"DraconDex-Setup-${version}.${ext}"},portable:{artifactName:"DraconDex-Portable-${version}.${ext}"}}}});var gr=H((uA,sd)=>{"use strict";A();var Ng=(rt(),X(tt)),{app:gg}=(le(),X(me)),{getDB:EA,getVaultDB:ma}=te(),{getAppSetting:Jl,setAppSetting:fa}=Ae(),{getSecret:Kl,setSecret:Tr}=pr(),{makePkcePair:hg,runOAuthLoopback:Rg}=Lo(),zl="dracondex-vault-snapshot",Ql=1,Ht=!gg.isPackaged,_a=null;async function Sg(){!Ht||_a||(_a=await Vl().ensureDevSyncServer())}function Lt(){if(Ht)return{url:_a||"",anonKey:"dev-local",configured:!0,dev:!0};let e=(Jl("sync:url")||"").replace(/\/+$/,""),t=Kl("sync:anonKey")||"";return{url:e,anonKey:t,configured:!!(e&&t),dev:!1}}function Zl(e){let t;try{t=new URL(String(e))}catch{return!1}return t.protocol==="https:"?!0:t.protocol==="http:"&&["localhost","127.0.0.1","[::1]","::1"].includes(t.hostname)}function Og(e,t){let r=String(e||"").trim().replace(/\/+$/,"");return r&&!Zl(r)?{ok:!1,error:"invalid_url"}:(fa("sync:url",r),Tr("sync:anonKey",String(t||"").trim()),{ok:!0})}var Ta="sync:slotMap";function yo(){try{return JSON.parse(Jl(Ta)||"{}")||{}}catch{return{}}}function ed(e,t){let r=yo();r[String(e)]=t,fa(Ta,JSON.stringify(r))}function Lg(e){let t=yo(),r=!1;for(let o of Object.keys(t))t[o]===e&&(delete t[o],r=!0);r&&fa(Ta,JSON.stringify(t))}function Ig(){return Array.from({length:16},()=>Ng.randomInt(10)).join("")}var fr="google:refreshToken",Ag=300*1e3,se=null;async function yg(e,t){if(Ht){let g=String(e||"dev-user-1");return se={accessToken:`${g}:${t==="pro"?"pro":"free"}`,accessTokenExp:1/0,uid:g,email:`${g}@local.test`},{ok:!0,email:se.email}}let{url:r,anonKey:o,configured:n}=Lt();if(!n)return{ok:!1,code:"no_config"};let{verifier:a,challenge:i}=hg(),s;try{({code:s}=await Rg(g=>`${r}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(g)}&code_challenge=${i}&code_challenge_method=s256`,{timeoutMs:Ag}))}catch(g){return{ok:!1,code:g.message==="login_timeout"?"login_timeout":"auth",error:String(g?.message||g)}}let u;try{u=await fetch(`${r}/auth/v1/token?grant_type=pkce`,{method:"POST",headers:{apikey:o,"Content-Type":"application/json"},body:JSON.stringify({auth_code:s,code_verifier:a}),signal:AbortSignal.timeout(15e3)})}catch(g){return{ok:!1,code:"network",error:String(g?.message||g)}}if(!u.ok){let g=await u.json().catch(()=>({}));return{ok:!1,code:"auth",error:g.error_description||g.msg||`HTTP ${u.status}`}}let l=await u.json();return se={accessToken:l.access_token,accessTokenExp:Date.now()+(l.expires_in||3600)*1e3,uid:l.user?.id,email:l.user?.email},Tr(fr,l.refresh_token||""),{ok:!0,email:se.email}}async function wg(){if(!Ht){let{url:e,anonKey:t,configured:r}=Lt();if(r&&se?.accessToken)try{await fetch(`${e}/auth/v1/logout`,{method:"POST",headers:{apikey:t,Authorization:`Bearer ${se.accessToken}`},signal:AbortSignal.timeout(1e4)})}catch{}Tr(fr,"")}return se=null,{ok:!0}}async function td(){if(Ht)return se?se.accessToken:null;if(se&&se.accessTokenExp>Date.now()+5e3)return se.accessToken;let e=Kl(fr);if(!e)return se=null,null;let{url:t,anonKey:r,configured:o}=Lt();if(!o)return null;let n;try{n=await fetch(`${t}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:r,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:e}),signal:AbortSignal.timeout(15e3)})}catch{return se?se.accessToken:null}if(!n.ok)return(n.status===400||n.status===401)&&(Tr(fr,""),se=null),null;let a=await n.json();return se={accessToken:a.access_token,accessTokenExp:Date.now()+(a.expires_in||3600)*1e3,uid:a.user?.id,email:a.user?.email},a.refresh_token&&Tr(fr,a.refresh_token),se.accessToken}async function rd(){let{configured:e,dev:t}=Lt();return Ht?{ok:!0,configured:!0,dev:!0,loggedIn:!!se,email:se?.email||null}:e?{ok:!0,configured:!0,dev:!1,loggedIn:!!await td(),email:se?.email||null}:{ok:!0,configured:!1,dev:!1,loggedIn:!1,email:null}}var Cg=["not_authenticated","bad_token","bad_password","locked","token_collision","no_upload","too_large","quota_exceeded","not_owner"];async function Nr(e,t){try{await Sg()}catch(l){return{ok:!1,code:"network",error:`dev sync server failed: ${String(l?.message||l)}`}}let{url:r,anonKey:o,configured:n}=Lt();if(!n||!r)return{ok:!1,code:"no_config"};let a=await td(),i;try{i=await fetch(`${r}/rest/v1/rpc/${e}`,{method:"POST",headers:{apikey:o,Authorization:`Bearer ${a||o}`,"Content-Type":"application/json"},body:JSON.stringify(t),signal:AbortSignal.timeout(3e4)})}catch(l){return{ok:!1,code:"network",error:String(l?.message||l)}}if(i.ok)try{return{ok:!0,data:await i.json()}}catch{return{ok:!1,code:"server",error:"bad response body"}}let s=await i.json().catch(()=>({}));return i.status===401||i.status===403?{ok:!1,code:"auth",error:s.message||`HTTP ${i.status}`}:{ok:!1,code:Cg.includes(s.message)?s.message:"server",error:s.message||`HTTP ${i.status}`}}var pa=e=>`${e.day}|${e.month}|${e.years}|${e.hour}|${e.minute}`;function od(e,t=null){let r=ma(e),o=r.prepare(`
    SELECT n.name, n.memo, c.color_code AS colorCode
    FROM nexus n LEFT JOIN use_color c ON n.color = c.id WHERE n.id=?`).get(e);if(!o)return null;let n=Array.isArray(t)&&t.length>0,a=k=>{if(n){let J=`m.id IN (${t.map(()=>"?").join(",")})`;return r.prepare(k.replace("m.nexus_ref=?",J)).all(...t)}return r.prepare(k).all(e)},i=k=>n?[]:r.prepare(k).all(e),s=a(`
    SELECT m.id, m.parent_id AS parentId, m.name, m.kind, m.icon,
           ic.color_code AS iconColorCode, cc.color_code AS colorCode,
           m.description, m.display_order AS displayOrder, m.pinned,
           m.cat_type AS catType, m.handle, m.create_at AS createAt, m.update_at AS updateAt
    FROM module m
    LEFT JOIN use_color ic ON m.icon_color = ic.id
    LEFT JOIN use_color cc ON m.color = cc.id
    WHERE m.nexus_ref=? ORDER BY m.id`),u=a(`
    SELECT a.module_ref AS moduleId, a.attr_name AS name, a.attr_value AS value,
           a.display_order AS displayOrder
    FROM module_attribute a JOIN module m ON a.module_ref=m.id
    WHERE m.nexus_ref=? ORDER BY a.id`),l=a(`
    SELECT u.module_ref AS moduleId, u.ui_key AS key, u.ui_value AS value
    FROM module_ui u JOIN module m ON u.module_ref=m.id WHERE m.nexus_ref=?`),g=a(`
    SELECT mh.module_ref AS moduleId, h.tag_name AS tagName, hc.color_code AS colorCode
    FROM module_hashtag mh
    JOIN module m ON mh.module_ref=m.id
    JOIN hashtag h ON mh.hashtag_id=h.id
    LEFT JOIN use_color hc ON h.tag_color=hc.id
    WHERE m.nexus_ref=?`),m={objects:a(`
      SELECT o.id, o.module_ref AS moduleId, o.name, c.color_code AS colorCode,
             o.note, o.display_order AS displayOrder
      FROM classifier_object o JOIN module m ON o.module_ref=m.id
      LEFT JOIN use_color c ON o.color=c.id WHERE m.nexus_ref=? ORDER BY o.id`),templates:a(`
      SELECT t.id, t.module_ref AS moduleId, t.object_ref AS objectId, t.description,
             t.attribute_type AS attributeType, t.levelable, t.has_condition AS hasCondition,
             t.display_order AS displayOrder
      FROM classifier_template t JOIN module m ON t.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY t.id`),attributes:a(`
      SELECT a.object_ref AS objectId, a.template_ref AS templateId,
             a.attribute_value AS value
      FROM classifier_attribute a
      JOIN classifier_object o ON a.object_ref=o.id
      JOIN module m ON o.module_ref=m.id WHERE m.nexus_ref=?`)},L={maps:a(`
      SELECT mp.id, mp.module_ref AS moduleId, mp.map_name AS name, c.color_code AS colorCode
      FROM map mp JOIN module m ON mp.module_ref=m.id
      LEFT JOIN use_color c ON mp.color=c.id WHERE m.nexus_ref=? ORDER BY mp.id`),areas:a(`
      SELECT a.id, a.map_id AS mapId, a.area_name AS name, c.color_code AS colorCode
      FROM map_area a JOIN map mp ON a.map_id=mp.id JOIN module m ON mp.module_ref=m.id
      LEFT JOIN use_color c ON a.color=c.id WHERE m.nexus_ref=? ORDER BY a.id`),points:a(`
      SELECT p.area_id AS areaId, p.point_order AS "order", p.x, p.y
      FROM map_point p JOIN map_area a ON p.area_id=a.id
      JOIN map mp ON a.map_id=mp.id JOIN module m ON mp.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY p.id`)},I={timelines:a(`
      SELECT t.id, t.module_ref AS moduleId, t.line_name AS name, c.color_code AS colorCode
      FROM timeline t JOIN module m ON t.module_ref=m.id
      LEFT JOIN use_color c ON t.color=c.id WHERE m.nexus_ref=? ORDER BY t.id`),events:a(`
      SELECT e.id, e.timeline_id AS timelineId, e.event_name AS name,
             sd.day AS sDay, sd.month AS sMonth, sd.years AS sYears, sd.hour AS sHour, sd.minute AS sMinute,
             ed.day AS eDay, ed.month AS eMonth, ed.years AS eYears, ed.hour AS eHour, ed.minute AS eMinute,
             c.color_code AS colorCode, e.story
      FROM timeline_event e
      JOIN timeline t ON e.timeline_id=t.id JOIN module m ON t.module_ref=m.id
      JOIN timeline_date sd ON e.start_at=sd.id
      LEFT JOIN timeline_date ed ON e.end_at=ed.id
      LEFT JOIN use_color c ON e.color=c.id
      WHERE m.nexus_ref=? ORDER BY e.id`).map(k=>({id:k.id,timelineId:k.timelineId,name:k.name,startKey:pa({day:k.sDay,month:k.sMonth,years:k.sYears,hour:k.sHour,minute:k.sMinute}),endKey:k.eDay==null?null:pa({day:k.eDay,month:k.eMonth,years:k.eYears,hour:k.eHour,minute:k.eMinute}),colorCode:k.colorCode,story:k.story}))},N=a(`
    SELECT DISTINCT d.day, d.month, d.years, d.hour, d.minute
    FROM timeline_date d
    JOIN timeline_event e ON e.start_at=d.id OR e.end_at=d.id
    JOIN timeline t ON e.timeline_id=t.id JOIN module m ON t.module_ref=m.id
    WHERE m.nexus_ref=?`).map(k=>({key:pa(k),...k})),h={mapEvents:a(`
      SELECT me.module_ref AS moduleId, me.event_ref AS eventId, me.area_ref AS areaId,
             me.label, me.x, me.y
      FROM map_event me JOIN module m ON me.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY me.id`)},O={dialogues:a(`
      SELECT d.id, d.module_ref AS moduleId, d.name, c.color_code AS colorCode,
             d.pos_x AS posX, d.pos_y AS posY
      FROM story_dialogue d JOIN module m ON d.module_ref=m.id
      LEFT JOIN use_color c ON d.color=c.id WHERE m.nexus_ref=? ORDER BY d.id`),edges:a(`
      SELECT e.module_ref AS moduleId, e.from_ref AS fromId, e.to_ref AS toId, e.label
      FROM story_edge e JOIN module m ON e.module_ref=m.id WHERE m.nexus_ref=?`),talks:a(`
      SELECT tk.id, tk.dialogue_ref AS dialogueId, tk.speaker, tk.talk_sentence AS sentence,
             tk.row_type AS rowType, tk.talk_order AS "order"
      FROM story_talk tk JOIN story_dialogue d ON tk.dialogue_ref=d.id
      JOIN module m ON d.module_ref=m.id WHERE m.nexus_ref=? ORDER BY tk.id`),choiceOptions:a(`
      SELECT o.talk_ref AS talkId, o.option_text AS text, o.effect_kind AS effectKind,
             o.effect_text AS effectText, o.jump_ref AS jumpId, o.option_order AS "order"
      FROM story_choice_option o
      JOIN story_talk tk ON o.talk_ref=tk.id JOIN story_dialogue d ON tk.dialogue_ref=d.id
      JOIN module m ON d.module_ref=m.id WHERE m.nexus_ref=? ORDER BY o.id`)},f={chapters:a(`
      SELECT ch.id, ch.module_ref AS moduleId, ch.name, ch.chapter_content AS content,
             ch.chapter_order AS "order"
      FROM book_chapter ch JOIN module m ON ch.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY ch.id`)},y={sessions:a(`
      SELECT s.id, s.module_ref AS moduleId, s.name, s.session_order AS "order",
             s.create_at AS createAt
      FROM chat_session s JOIN module m ON s.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY s.id`),messages:a(`
      SELECT msg.session_ref AS sessionId, msg.message, msg.create_at AS createAt
      FROM chat_message msg JOIN chat_session s ON msg.session_ref=s.id
      JOIN module m ON s.module_ref=m.id WHERE m.nexus_ref=? ORDER BY msg.id`)},F={pages:a(`
      SELECT p.id, p.module_ref AS moduleId, p.name, p.page_order AS "order"
      FROM sketch_page p JOIN module m ON p.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY p.id`),strokes:a(`
      SELECT st.page_ref AS pageId, st.color, st.width, st.points
      FROM sketch_stroke st JOIN sketch_page p ON st.page_ref=p.id
      JOIN module m ON p.module_ref=m.id WHERE m.nexus_ref=? ORDER BY st.id`),pins:a(`
      SELECT pn.page_ref AS pageId, pn.linker_key AS linkerKey, pn.x, pn.y
      FROM sketch_pin pn JOIN sketch_page p ON pn.page_ref=p.id
      JOIN module m ON p.module_ref=m.id WHERE m.nexus_ref=? ORDER BY pn.id`)},C={nodes:a(`
      SELECT n.id, n.module_ref AS moduleId, n.shape, n.x, n.y, n.node_text AS text,
             n.color, n.linker_key AS linkerKey
      FROM design_node n JOIN module m ON n.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY n.id`),edges:a(`
      SELECT e.module_ref AS moduleId, e.from_ref AS fromId, e.to_ref AS toId, e.label
      FROM design_edge e JOIN module m ON e.module_ref=m.id WHERE m.nexus_ref=?`)},w=i(`
    SELECT from_key AS fromKey, to_key AS toKey, label
    FROM entity_relation WHERE nexus_ref=? ORDER BY id`),R=i(`
    SELECT name, spec, builtin FROM calendar_template WHERE nexus_ref=? ORDER BY id`),T={folders:i(`
      SELECT f.id, f.parent_ref AS parentId, f.name, c.color_code AS colorCode
      FROM note_folder f LEFT JOIN use_color c ON f.color=c.id
      WHERE f.nexus_ref=? ORDER BY f.id`),notes:i(`
      SELECT n.id, n.folder_ref AS folderId, n.title, n.content,
             c.color_code AS colorCode, n.pinned
      FROM note n LEFT JOIN use_color c ON n.color=c.id
      WHERE n.nexus_ref=? ORDER BY n.id`)},_=new Set,S=k=>{k&&_.add(k)};S(o.colorCode),s.forEach(k=>{S(k.iconColorCode),S(k.colorCode)}),g.forEach(k=>S(k.colorCode)),m.objects.forEach(k=>S(k.colorCode)),L.maps.forEach(k=>S(k.colorCode)),L.areas.forEach(k=>S(k.colorCode)),I.timelines.forEach(k=>S(k.colorCode)),I.events.forEach(k=>S(k.colorCode)),O.dialogues.forEach(k=>S(k.colorCode)),T.folders.forEach(k=>S(k.colorCode)),T.notes.forEach(k=>S(k.colorCode));let b=[],W=new Set;g.forEach(k=>{W.has(k.tagName)||(W.add(k.tagName),b.push({name:k.tagName,colorCode:k.colorCode||null}))});let B=null;try{B=ql().version}catch{}return{format:zl,version:Ql,app:B,exportedAt:new Date().toISOString(),nexus:{name:o.name,memo:o.memo,colorCode:o.colorCode},lookups:{colors:[..._],hashtags:b,dates:N},modules:s,moduleAttrs:u,moduleUi:l,moduleTags:g,classifier:m,locator:L,chronicler:I,wanderer:h,narrator:O,author:f,chatscribe:y,sketcher:F,designer:C,relations:w,notes:T,calendarTemplates:R}}function bg(e,t){let o=ma(e).prepare("SELECT id, parent_id AS parentId FROM module WHERE nexus_ref=?").all(e),n=new Map;for(let s of o)n.has(s.parentId)||n.set(s.parentId,[]),n.get(s.parentId).push(s.id);let a=[],i=[t];for(;i.length;){let s=i.pop();a.push(s);for(let u of n.get(s)||[])i.push(u)}return a}function kg(e){return!e||e.format!==zl||e.version!==Ql?!1:Array.isArray(e.modules)&&e.nexus&&typeof e.nexus=="object"}function Ao(e,t){let r=/^([a-z]+)_(\d+)$/.exec(String(e||""));if(!r)return null;let o=t[r[1]];if(!o)return null;let n=o.get(Number(r[2]));return n==null?null:`${r[1]}_${n}`}function nd(e,t,r={}){let{wipe:o=!1,updateNexusMeta:n=!1,reparentRootTo:a=null}=r;if(!kg(t))return{ok:!1,code:"bad_snapshot"};let i=ma(e),s=g=>Array.isArray(g)?g:[],u=g=>g&&typeof g=="object"?g:{},l=i.transaction(()=>{o&&(i.prepare("DELETE FROM module WHERE nexus_ref=?").run(e),i.prepare("DELETE FROM entity_relation WHERE nexus_ref=?").run(e),i.prepare("DELETE FROM note WHERE nexus_ref=?").run(e),i.prepare("DELETE FROM note_folder WHERE nexus_ref=?").run(e),i.prepare("DELETE FROM wiki_link WHERE nexus_ref=?").run(e),i.prepare("DELETE FROM calendar_template WHERE nexus_ref=?").run(e));let g=u(t.lookups),m=new Map;for(let p of s(g.colors))p&&(i.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(p),m.set(p,i.prepare("SELECT id FROM use_color WHERE color_code=?").get(p).id));let L=p=>p&&m.has(p)?m.get(p):null,I=new Map;for(let p of s(g.hashtags))p?.name&&(i.prepare("INSERT OR IGNORE INTO hashtag (tag_name, tag_color) VALUES (?,?)").run(p.name,L(p.colorCode)),I.set(p.name,i.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(p.name).id));let N=new Map;for(let p of s(g.dates))i.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(p.day,p.month,p.years,p.hour,p.minute),N.set(p.key,i.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(p.day,p.month,p.years,p.hour,p.minute).id);n&&i.prepare("UPDATE nexus SET memo=?, color=?, update_at=datetime('now') WHERE id=?").run(t.nexus.memo??null,L(t.nexus.colorCode),e);let h=new Map,O=s(t.modules).slice();for(;O.length;){let p=[],q=!1;for(let z of O){if(z.parentId!=null&&!h.has(z.parentId)){p.push(z);continue}let an=z.parentId!=null?h.get(z.parentId):a,xr=z.handle??null;xr!=null&&i.prepare("SELECT id FROM module WHERE nexus_ref=? AND handle=? COLLATE NOCASE").get(e,xr)&&(xr=null);let uu=i.prepare(`
          INSERT INTO module (nexus_ref, parent_id, name, kind, icon, icon_color, color,
                              description, display_order, pinned, cat_type, handle, create_at, update_at)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,COALESCE(?,datetime('now')),COALESCE(?,datetime('now')))`).run(e,an,z.name,z.kind,z.icon??null,L(z.iconColorCode),L(z.colorCode),z.description??null,z.displayOrder??0,z.pinned??0,z.catType??null,xr,z.createAt??null,z.updateAt??null);h.set(z.id,uu.lastInsertRowid),q=!0}if(!q)break;O=p}let f=p=>h.get(p);for(let p of s(t.moduleAttrs))f(p.moduleId)!=null&&i.prepare("INSERT INTO module_attribute (module_ref, attr_name, attr_value, display_order) VALUES (?,?,?,?)").run(f(p.moduleId),p.name,p.value??null,p.displayOrder??0);for(let p of s(t.moduleTags))f(p.moduleId)==null||!I.has(p.tagName)||i.prepare("INSERT OR IGNORE INTO module_hashtag (module_ref, hashtag_id) VALUES (?,?)").run(f(p.moduleId),I.get(p.tagName));let y=u(t.classifier),F=new Map;for(let p of s(y.objects)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO classifier_object (module_ref, name, color, note, display_order) VALUES (?,?,?,?,?)").run(f(p.moduleId),p.name,L(p.colorCode),p.note??null,p.displayOrder??0);F.set(p.id,q.lastInsertRowid)}let C=new Map;for(let p of s(y.templates)){if(f(p.moduleId)==null||p.objectId!=null&&!F.has(p.objectId))continue;let q=i.prepare(`
        INSERT INTO classifier_template (module_ref, object_ref, description, attribute_type,
                                         levelable, has_condition, display_order)
        VALUES (?,?,?,?,?,?,?)`).run(f(p.moduleId),p.objectId!=null?F.get(p.objectId):null,p.description,p.attributeType??"text",p.levelable??0,p.hasCondition??0,p.displayOrder??0);C.set(p.id,q.lastInsertRowid)}for(let p of s(y.attributes))!F.has(p.objectId)||!C.has(p.templateId)||i.prepare("INSERT OR IGNORE INTO classifier_attribute (object_ref, template_ref, attribute_value) VALUES (?,?,?)").run(F.get(p.objectId),C.get(p.templateId),p.value??null);let w=u(t.locator),R=new Map;for(let p of s(w.maps)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO map (map_name, module_ref, color) VALUES (?,?,?)").run(p.name??null,f(p.moduleId),L(p.colorCode));R.set(p.id,q.lastInsertRowid)}let T=new Map;for(let p of s(w.areas)){if(!R.has(p.mapId))continue;let q=i.prepare("INSERT INTO map_area (map_id, area_name, color) VALUES (?,?,?)").run(R.get(p.mapId),p.name??null,L(p.colorCode));T.set(p.id,q.lastInsertRowid)}for(let p of s(w.points))T.has(p.areaId)&&i.prepare("INSERT INTO map_point (area_id, point_order, x, y) VALUES (?,?,?,?)").run(T.get(p.areaId),p.order??0,p.x,p.y);let _=u(t.chronicler),S=new Map;for(let p of s(_.timelines)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO timeline (line_name, module_ref, color) VALUES (?,?,?)").run(p.name??null,f(p.moduleId),L(p.colorCode));S.set(p.id,q.lastInsertRowid)}let b=new Map;for(let p of s(_.events)){if(!S.has(p.timelineId)||!N.has(p.startKey))continue;let q=i.prepare(`
        INSERT INTO timeline_event (timeline_id, event_name, start_at, end_at, color, story)
        VALUES (?,?,?,?,?,?)`).run(S.get(p.timelineId),p.name??null,N.get(p.startKey),p.endKey!=null&&N.has(p.endKey)?N.get(p.endKey):null,L(p.colorCode),p.story??null);b.set(p.id,q.lastInsertRowid)}for(let p of s(u(t.wanderer).mapEvents))f(p.moduleId)!=null&&i.prepare("INSERT INTO map_event (module_ref, event_ref, area_ref, label, x, y) VALUES (?,?,?,?,?,?)").run(f(p.moduleId),p.eventId!=null&&b.has(p.eventId)?b.get(p.eventId):null,p.areaId!=null&&T.has(p.areaId)?T.get(p.areaId):null,p.label??null,p.x??0,p.y??0);let W=u(t.narrator),B=new Map;for(let p of s(W.dialogues)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO story_dialogue (module_ref, name, color, pos_x, pos_y) VALUES (?,?,?,?,?)").run(f(p.moduleId),p.name,L(p.colorCode),p.posX??0,p.posY??0);B.set(p.id,q.lastInsertRowid)}for(let p of s(W.edges))f(p.moduleId)==null||!B.has(p.fromId)||!B.has(p.toId)||i.prepare("INSERT OR IGNORE INTO story_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)").run(f(p.moduleId),B.get(p.fromId),B.get(p.toId),p.label??null);let k=new Map;for(let p of s(W.talks)){if(!B.has(p.dialogueId))continue;let q=i.prepare("INSERT INTO story_talk (dialogue_ref, speaker, talk_sentence, row_type, talk_order) VALUES (?,?,?,?,?)").run(B.get(p.dialogueId),p.speaker??null,p.sentence??null,p.rowType==="choice"?"choice":"talk",p.order??0);p.id!=null&&k.set(p.id,q.lastInsertRowid)}for(let p of s(W.choiceOptions))k.has(p.talkId)&&i.prepare("INSERT INTO story_choice_option (talk_ref, option_text, effect_kind, effect_text, jump_ref, option_order) VALUES (?,?,?,?,?,?)").run(k.get(p.talkId),p.text??null,p.effectKind??"none",p.effectText??null,p.jumpId!=null?B.get(p.jumpId)??null:null,p.order??0);let J=new Map;for(let p of s(u(t.author).chapters)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO book_chapter (module_ref, name, chapter_content, chapter_order) VALUES (?,?,?,?)").run(f(p.moduleId),p.name,p.content??null,p.order??0);J.set(p.id,q.lastInsertRowid)}let v=u(t.chatscribe),j=new Map;for(let p of s(v.sessions)){if(f(p.moduleId)==null)continue;let q=i.prepare(`
        INSERT INTO chat_session (module_ref, name, session_order, create_at)
        VALUES (?,?,?,COALESCE(?,datetime('now')))`).run(f(p.moduleId),p.name,p.order??0,p.createAt??null);j.set(p.id,q.lastInsertRowid)}for(let p of s(v.messages))j.has(p.sessionId)&&i.prepare("INSERT INTO chat_message (session_ref, message, create_at) VALUES (?,?,COALESCE(?,datetime('now')))").run(j.get(p.sessionId),p.message,p.createAt??null);let G=u(t.sketcher),Y=new Map;for(let p of s(G.pages)){if(f(p.moduleId)==null)continue;let q=i.prepare("INSERT INTO sketch_page (module_ref, name, page_order) VALUES (?,?,?)").run(f(p.moduleId),p.name,p.order??0);Y.set(p.id,q.lastInsertRowid)}for(let p of s(G.strokes))Y.has(p.pageId)&&i.prepare("INSERT INTO sketch_stroke (page_ref, color, width, points) VALUES (?,?,?,?)").run(Y.get(p.pageId),p.color??null,p.width??3,p.points);let K=u(t.designer),re=new Map,fe={module:h,cobj:F,bchp:J,chss:j},Je=0;for(let p of s(G.pins)){if(!Y.has(p.pageId))continue;let q=Ao(p.linkerKey,fe);if(!q){Je++;continue}i.prepare("INSERT INTO sketch_pin (page_ref, linker_key, x, y) VALUES (?,?,?,?)").run(Y.get(p.pageId),q,p.x??0,p.y??0)}for(let p of s(K.nodes)){if(f(p.moduleId)==null)continue;let q=p.linkerKey?Ao(p.linkerKey,fe):null,z=i.prepare(`
        INSERT INTO design_node (module_ref, shape, x, y, node_text, color, linker_key)
        VALUES (?,?,?,?,?,?,?)`).run(f(p.moduleId),p.shape??"box",p.x??0,p.y??0,p.text??null,p.color??null,q);re.set(p.id,z.lastInsertRowid)}for(let p of s(K.edges))f(p.moduleId)==null||!re.has(p.fromId)||!re.has(p.toId)||i.prepare("INSERT OR IGNORE INTO design_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)").run(f(p.moduleId),re.get(p.fromId),re.get(p.toId),p.label??null);let Ke=u(t.notes),it=new Map,qt=s(Ke.folders).slice();for(;qt.length;){let p=[],q=!1;for(let z of qt){if(z.parentId!=null&&!it.has(z.parentId)){p.push(z);continue}let an=i.prepare("INSERT INTO note_folder (nexus_ref, parent_ref, name, color) VALUES (?,?,?,?)").run(e,z.parentId!=null?it.get(z.parentId):null,z.name,L(z.colorCode));it.set(z.id,an.lastInsertRowid),q=!0}if(!q)break;qt=p}let on=new Map;for(let p of s(Ke.notes)){let q=i.prepare(`
        INSERT OR IGNORE INTO note (nexus_ref, folder_ref, title, content, color, pinned)
        VALUES (?,?,?,?,?,?)`).run(e,p.folderId!=null&&it.has(p.folderId)?it.get(p.folderId):null,p.title,p.content??"",L(p.colorCode),p.pinned??0);q.changes&&on.set(p.id,q.lastInsertRowid)}fe.note=on;let nn=0;for(let p of s(t.relations)){let q=Ao(p.fromKey,fe),z=Ao(p.toKey,fe);if(!q||!z){nn++;continue}i.prepare("INSERT OR IGNORE INTO entity_relation (nexus_ref, from_key, to_key, label) VALUES (?,?,?,?)").run(e,q,z,p.label??null)}for(let p of s(t.calendarTemplates))!p||!p.name||!p.spec||i.prepare("INSERT OR IGNORE INTO calendar_template (nexus_ref, name, spec, builtin) VALUES (?,?,?,?)").run(e,p.name,p.spec,p.builtin?1:0);for(let p of s(t.moduleUi)){if(f(p.moduleId)==null)continue;let q=p.value;if(p.key==="mapModule"||p.key==="timelineModule"){let z=h.get(Number(p.value));if(z==null)continue;q=String(z)}i.prepare("INSERT OR IGNORE INTO module_ui (module_ref, ui_key, ui_value) VALUES (?,?,?)").run(f(p.moduleId),p.key,q??null)}return{modules:h.size,notes:on.size,relations:s(t.relations).length-nn,droppedRelations:nn,droppedPins:Je}})();try{Ie().rebuildWikiIndex()}catch(g){console.error("sync: wiki rebuild after pull failed:",g)}return{ok:!0,summary:l}}function ad(e,t){return nd(e,t,{wipe:!0,updateNexusMeta:!0,reparentRootTo:null})}function Dg(e,t,r){return nd(e,r,{wipe:!1,updateNexusMeta:!1,reparentRootTo:t??null})}async function Fg(e){let{configured:t,dev:r}=Lt(),o=await rd(),n={ok:!0,configured:t,dev:r,loggedIn:o.loggedIn,email:o.email,tier:null,maxSlots:0,maxBytes:0,uploads:[],mappedVaultId:null};if(!t&&!r||!o.loggedIn)return n;let a=await Nr("token_sync_status",{});if(!a.ok)return n.remoteError=a.code,n;n.tier=a.data.tier,n.maxSlots=a.data.max_slots,n.maxBytes=a.data.max_bytes,n.uploads=(a.data.uploads||[]).map(s=>({vaultId:s.vault_id,name:s.name,snapshotAt:s.snapshot_at,expiresAt:s.expires_at,sizeBytes:s.size_bytes,hasPassword:s.has_password}));let i=yo()[String(e)];return n.mappedVaultId=n.uploads.some(s=>s.vaultId===i)?i:null,n}async function xg(e,t){let r=od(e);if(!r)return{ok:!1,code:"bad_snapshot",error:"nexus not found"};let o=yo()[String(e)]||null,n=null;for(let a=0;a<5;a++){let i=Ig(),s=await Nr("token_sync_push",{p_snapshot:r,p_name:r.nexus.name,p_token:i,p_password:t?String(t):null,p_vault_id:o});if(s.ok)return ed(e,s.data.vault_id),{ok:!0,token:i,vaultId:s.data.vault_id,pushedAt:s.data.snapshot_at,expiresAt:s.data.expires_at};if(s.code!=="token_collision")return s;n=s}return n||{ok:!1,code:"server"}}function id(e,t,r){let o;try{o=ad(e,r.snapshot)}catch(n){return console.error("sync: applySnapshot failed:",n),{ok:!1,code:"bad_snapshot",error:String(n?.message||n)}}return o.ok?(t&&ed(e,t),{ok:!0,pulledAt:new Date().toISOString(),cloudName:r.name,summary:o.summary}):o}async function Ug(e,t){if(!t)return{ok:!1,code:"no_upload"};let r=await Nr("token_sync_pull_own",{p_vault_id:t});return r.ok?id(e,t,r.data):r}async function Mg(e,t,r){let o=String(t||"").replace(/[^0-9]/g,"");if(!/^\d{16}$/.test(o))return{ok:!1,code:"bad_token"};let n=await Nr("token_sync_pull_by_token",{p_token:o,p_password:r?String(r):null});return n.ok?id(e,n.data.vault_id||null,n.data):n}async function vg(e){if(!e)return{ok:!1,code:"no_upload"};let t=await Nr("token_sync_delete",{p_vault_id:e});return t.ok?(Lg(e),{ok:!0}):t}sd.exports={getSyncConfig:Lt,setSyncConfig:Og,isAllowedSyncUrl:Zl,serializeVault:od,applySnapshot:ad,collectModuleSubtreeIds:bg,importModuleSnapshot:Dg,syncGoogleLogin:yg,syncGoogleLogout:wg,syncAuthStatus:rd,syncStatus:Fg,syncPushVault:xg,syncPullVault:Ug,syncPullByToken:Mg,syncDeleteUpload:vg}});var ld=H((_A,cd)=>{"use strict";A();var jg=["sync_vault","sync_account","dracondex_meta"],Pg=["token_sync_push","token_sync_status","token_sync_delete","token_sync_pull_own","token_sync_pull_by_token"],Wg=`-- =============================================================================
-- DraconDex \u2014 "bring your own Supabase project" installer.
--
-- ONE idempotent script that brings an empty (or partially set-up) Supabase
-- project to the schema DraconDex's Cloud Sync expects. Running it twice is a
-- no-op; running it on a project that still carries the 20260717 access-key
-- prototype upgrades it in place. It is the same object set as
-- ../migrations/20260717000000_dracondex_sync_prototype.sql +
-- ../migrations/20260730000000_dracondex_token_sync.sql, rewritten in
-- create-if-not-exists / create-or-replace form, PLUS the two things the
-- in-app setup flow needs that the migrations never had:
--
--   * public.dracondex_meta          \u2014 records which schema version is installed
--   * public.dracondex_schema_status \u2014 anon-callable probe the app uses to
--                                      "check tables" without any elevated key
--
-- The probe is what makes automatic checking possible at all: sync_vault and
-- sync_account are RLS-locked with every grant revoked, so PostgREST does not
-- expose them in its OpenAPI document and a publishable key can never see
-- them. A SECURITY DEFINER function that reports nothing but "does object X
-- exist" is the smallest hole that answers the question.
--
-- Generated artifacts (do not hand-edit \u2014 run \`node src/supabase/setup/gen.mjs\`):
--   electron/src/db/supabase-schema.js
--   flutter/lib/data/services/supabase_schema.dart
-- DRACONDEX_SCHEMA_VERSION: 2
-- =============================================================================

create extension if not exists pgcrypto; -- crypt()/gen_salt() for slot passwords

-- ---------------------------------------------------------------------------
-- Drop the 20260717 access-key prototype if this project still has it. These
-- objects are unreachable once the token RPCs below exist, and _sync_check_size
-- has to go regardless because its signature changed (jsonb) -> (jsonb, uuid),
-- which \`create or replace\` cannot do.
-- ---------------------------------------------------------------------------
drop function if exists public.sync_create_read_key(text, text);
drop function if exists public.sync_create_vault(text, jsonb, text);
drop function if exists public.sync_push_vault(text, text, jsonb);
drop function if exists public.sync_pull_vault(text);
drop function if exists public.sync_vault_status(text);
drop function if exists public._sync_auth(text, boolean);
drop function if exists public._sync_check_size(jsonb);
drop table if exists public.sync_key;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------
create table if not exists public.sync_vault (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  snapshot    jsonb not null,
  snapshot_at timestamptz not null default now(),
  created_at  timestamptz not null default now()
);

-- Columns the token-sync layer added on top of the prototype table. Separate
-- statements (not part of the create above) so an existing prototype table is
-- upgraded rather than skipped.
alter table public.sync_vault add column if not exists owner_id          uuid references auth.users(id) on delete cascade;
alter table public.sync_vault add column if not exists token_hash        text;
alter table public.sync_vault add column if not exists password_hash     text;
alter table public.sync_vault add column if not exists expires_at        timestamptz;
alter table public.sync_vault add column if not exists pull_fail_count   integer not null default 0;
alter table public.sync_vault add column if not exists pull_locked_until timestamptz;

-- Prototype rows have no owner and no token, so nothing can ever read them
-- again once the old RPCs are gone. Clearing them is what lets the NOT NULLs
-- below hold. On a fresh project this deletes nothing.
delete from public.sync_vault where owner_id is null or token_hash is null or expires_at is null;

alter table public.sync_vault alter column owner_id   set not null;
alter table public.sync_vault alter column token_hash set not null;
alter table public.sync_vault alter column expires_at set not null;

create table if not exists public.sync_account (
  owner_id   uuid primary key references auth.users(id) on delete cascade,
  tier       text not null default 'free' check (tier in ('free', 'pro')),
  created_at timestamptz not null default now()
);

-- Installed-schema bookkeeping. Read back through dracondex_schema_status()
-- so the app can tell "never installed" from "installed but out of date".
create table if not exists public.dracondex_meta (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);

create index if not exists sync_vault_owner_idx  on public.sync_vault(owner_id);
create unique index if not exists sync_vault_token_idx on public.sync_vault(token_hash);
create index if not exists sync_vault_expiry_idx on public.sync_vault(expires_at);

-- RLS on with zero policies + revoked grants: the SECURITY DEFINER RPCs below
-- are the only door in. Re-running these is harmless.
alter table public.sync_vault     enable row level security;
alter table public.sync_account   enable row level security;
alter table public.dracondex_meta enable row level security;
revoke all on table public.sync_vault     from anon, authenticated;
revoke all on table public.sync_account   from anon, authenticated;
revoke all on table public.dracondex_meta from anon, authenticated;

-- ---------------------------------------------------------------------------
-- Private helpers (never granted to anon/authenticated)
-- ---------------------------------------------------------------------------
create or replace function public._sync_hash_key(p_key text) returns text
language sql immutable set search_path = '' as $$
  select encode(sha256(convert_to(p_key, 'UTF8')), 'hex')
$$;

create or replace function public._sync_tier(p_owner uuid) returns text
language sql stable set search_path = '' as $$
  select coalesce((select tier from public.sync_account where owner_id = p_owner), 'free')
$$;

create or replace function public._sync_max_bytes(p_owner uuid) returns bigint
language sql stable set search_path = '' as $$
  select case when public._sync_tier(p_owner) = 'pro' then 20971520 else 10485760 end -- pro 20MB / free 10MB
$$;

create or replace function public._sync_max_slots(p_owner uuid) returns int
language sql stable set search_path = '' as $$
  select case when public._sync_tier(p_owner) = 'pro' then 3 else 1 end -- pro 3 slots / free 1 slot
$$;

create or replace function public._sync_check_size(p_snapshot jsonb, p_owner uuid) returns void
language plpgsql stable set search_path = '' as $$
begin
  if octet_length(p_snapshot::text) > public._sync_max_bytes(p_owner) then
    raise exception 'too_large';
  end if;
end
$$;

revoke execute on function public._sync_hash_key(text) from public, anon, authenticated;
revoke execute on function public._sync_tier(uuid) from public, anon, authenticated;
revoke execute on function public._sync_max_bytes(uuid) from public, anon, authenticated;
revoke execute on function public._sync_max_slots(uuid) from public, anon, authenticated;
revoke execute on function public._sync_check_size(jsonb, uuid) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Public RPCs (POST /rest/v1/rpc/<fn>)
-- ---------------------------------------------------------------------------

-- Push. p_vault_id targets an existing slot owned by the caller to overwrite
-- it in place (rotating its token); omitted/null requests a NEW slot, which is
-- rejected with quota_exceeded once the caller's tier limit is reached.
create or replace function public.token_sync_push(
  p_snapshot jsonb, p_name text, p_token text, p_password text default null, p_vault_id uuid default null
)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  v public.sync_vault;
  n_slots int;
begin
  if uid is null then
    raise exception 'not_authenticated';
  end if;
  perform public._sync_check_size(p_snapshot, uid);
  if p_token is null or p_token !~ '^[0-9]{16}$' then
    raise exception 'bad_token';
  end if;

  if p_vault_id is not null and not exists (
    select 1 from public.sync_vault where id = p_vault_id and owner_id = uid
  ) then
    raise exception 'not_owner';
  end if;

  if p_vault_id is null then
    select count(*) into n_slots from public.sync_vault where owner_id = uid;
    if n_slots >= public._sync_max_slots(uid) then
      raise exception 'quota_exceeded';
    end if;
  end if;

  begin
    if p_vault_id is null then
      insert into public.sync_vault (owner_id, name, snapshot, token_hash, password_hash, expires_at)
        values (
          uid, coalesce(p_name, 'vault'), p_snapshot, public._sync_hash_key(p_token),
          case when p_password is not null and p_password <> '' then crypt(p_password, gen_salt('bf')) else null end,
          now() + interval '72 hours'
        )
        returning * into v;
    else
      update public.sync_vault
        set name = coalesce(p_name, name),
            snapshot = p_snapshot,
            snapshot_at = now(),
            token_hash = public._sync_hash_key(p_token),
            password_hash = case when p_password is not null and p_password <> '' then crypt(p_password, gen_salt('bf')) else null end,
            expires_at = now() + interval '72 hours',
            pull_fail_count = 0,
            pull_locked_until = null
        where id = p_vault_id and owner_id = uid
        returning * into v;
    end if;
  exception when unique_violation then
    raise exception 'token_collision';
  end;
  return jsonb_build_object('vault_id', v.id, 'snapshot_at', v.snapshot_at, 'expires_at', v.expires_at);
end
$$;

-- Auth'd caller's own upload slots + quota (no token needed).
create or replace function public.token_sync_status()
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not_authenticated';
  end if;
  delete from public.sync_vault where owner_id = uid and expires_at < now();
  return jsonb_build_object(
    'tier', public._sync_tier(uid),
    'max_slots', public._sync_max_slots(uid),
    'max_bytes', public._sync_max_bytes(uid),
    'uploads', coalesce((
      select jsonb_agg(jsonb_build_object(
        'vault_id', id, 'name', name, 'snapshot_at', snapshot_at, 'expires_at', expires_at,
        'size_bytes', octet_length(snapshot::text), 'has_password', password_hash is not null
      ) order by snapshot_at desc)
      from public.sync_vault where owner_id = uid
    ), '[]'::jsonb)
  );
end
$$;

-- Auth'd caller deletes one of their own slots.
create or replace function public.token_sync_delete(p_vault_id uuid)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'not_authenticated';
  end if;
  delete from public.sync_vault where id = p_vault_id and owner_id = auth.uid();
  return jsonb_build_object('ok', true);
end
$$;

-- Auth'd caller pulls one of their OWN live slots \u2014 no token required.
create or replace function public.token_sync_pull_own(p_vault_id uuid)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  v public.sync_vault;
begin
  if auth.uid() is null then
    raise exception 'not_authenticated';
  end if;
  select * into v from public.sync_vault
    where id = p_vault_id and owner_id = auth.uid() and expires_at >= now();
  if v.id is null then
    raise exception 'no_upload';
  end if;
  return jsonb_build_object('name', v.name, 'snapshot', v.snapshot, 'snapshot_at', v.snapshot_at);
end
$$;

-- Cross-account/cross-device entry point. 8 wrong passwords lock the slot for
-- 15 minutes; the owner's own account skips the password check entirely.
create or replace function public.token_sync_pull_by_token(p_token text, p_password text default null)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  v public.sync_vault;
begin
  select * into v from public.sync_vault where token_hash = public._sync_hash_key(p_token);
  if v.id is null then
    raise exception 'bad_token';
  end if;
  if v.expires_at < now() then
    delete from public.sync_vault where id = v.id;
    raise exception 'bad_token';
  end if;
  if v.pull_locked_until is not null and v.pull_locked_until > now() then
    raise exception 'locked';
  end if;
  if auth.uid() is not null and auth.uid() = v.owner_id then
    return jsonb_build_object('vault_id', v.id, 'name', v.name, 'snapshot', v.snapshot, 'snapshot_at', v.snapshot_at);
  end if;
  if v.password_hash is not null then
    if p_password is null or crypt(p_password, v.password_hash) <> v.password_hash then
      update public.sync_vault
        set pull_fail_count = pull_fail_count + 1,
            pull_locked_until = case when pull_fail_count + 1 >= 8 then now() + interval '15 minutes' else pull_locked_until end
        where id = v.id;
      raise exception 'bad_password';
    end if;
  end if;
  update public.sync_vault set pull_fail_count = 0, pull_locked_until = null where id = v.id;
  return jsonb_build_object('vault_id', v.id, 'name', v.name, 'snapshot', v.snapshot, 'snapshot_at', v.snapshot_at);
end
$$;

-- ---------------------------------------------------------------------------
-- Setup probe. Deliberately the ONLY thing in this schema an unauthenticated
-- publishable key may call: it reports object presence and the installed
-- schema version, and nothing else \u2014 no row data, no counts, no names beyond
-- the fixed list this app owns.
-- ---------------------------------------------------------------------------
create or replace function public.dracondex_schema_status()
returns jsonb
language sql security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'app', 'dracondex',
    'schema_version', coalesce((select value from public.dracondex_meta where key = 'schema_version'), '0'),
    'tables', (
      select jsonb_object_agg(name, to_regclass('public.' || name) is not null)
      from unnest(array['sync_vault', 'sync_account', 'dracondex_meta']) as name
    ),
    'functions', (
      select jsonb_object_agg(name, exists (
        select 1 from pg_proc p
        join pg_namespace n on n.oid = p.pronamespace
        where n.nspname = 'public' and p.proname = name
      ))
      from unnest(array[
        'token_sync_push', 'token_sync_status', 'token_sync_delete',
        'token_sync_pull_own', 'token_sync_pull_by_token'
      ]) as name
    )
  )
$$;

grant execute on function
  public.token_sync_push(jsonb, text, text, text, uuid),
  public.token_sync_status(),
  public.token_sync_delete(uuid),
  public.token_sync_pull_own(uuid),
  public.token_sync_pull_by_token(text, text),
  public.dracondex_schema_status()
to anon, authenticated;

-- Stamp last: if anything above failed the whole script rolls back and the
-- version never moves, so a partial install still reports its old version.
insert into public.dracondex_meta (key, value)
  values ('schema_version', '2')
  on conflict (key) do update set value = excluded.value, updated_at = now();
`;cd.exports={SUPABASE_SCHEMA_VERSION:2,SUPABASE_REQUIRED_TABLES:jg,SUPABASE_REQUIRED_FUNCTIONS:Pg,SUPABASE_SETUP_SQL:Wg}});var md=H((fA,_d)=>{"use strict";A();var{shell:Hg}=(le(),X(me)),{getAppSetting:Na,setAppSetting:ut}=Ae(),{getSecret:ga,setSecret:dd}=pr(),{isAllowedSyncUrl:Ed}=gr(),{SUPABASE_SCHEMA_VERSION:bo,SUPABASE_REQUIRED_TABLES:Xg,SUPABASE_REQUIRED_FUNCTIONS:Bg,SUPABASE_SETUP_SQL:ud}=ld(),ha="sync:url",hr="sync:anonKey",ko="supabase:schemaVersion",Do="supabase:checkedAt",Gg="https://api.supabase.com",$g=2e4,Yg=6e4;function Ra(e){try{let t=new URL(String(e)).hostname,r=/^([a-z0-9]{16,40})\.supabase\.(co|in|red)$/.exec(t);return r?r[1]:null}catch{return null}}function Rr(){let e=(Na(ha)||"").replace(/\/+$/,""),t=ga(hr)||"";return{url:e,keySet:!!t,keyPreview:t?`\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022${t.slice(-6)}`:"",projectRef:Ra(e),configured:!!(e&&t),schemaVersion:Number(Na(ko)||0),requiredVersion:bo,checkedAt:Na(Do)||null}}function Vg(e,t){let r=String(e||"").trim().replace(/\/+$/,""),o=String(t||"").trim()||ga(hr)||"";return!r||!o?{ok:!1,code:"no_config"}:Ed(r)?(ut(ha,r),dd(hr,o),ut(ko,"0"),ut(Do,""),{ok:!0,...Rr()}):{ok:!1,code:"invalid_url"}}function qg(){return ut(ha,""),dd(hr,""),ut(ko,"0"),ut(Do,""),{ok:!0}}function Jg(){return{sql:ud,version:bo}}async function wo(e,t,r=$g){try{return{ok:!0,res:await fetch(e,{...t,signal:AbortSignal.timeout(r)})}}catch(o){return{ok:!1,code:"network",error:String(o?.message||o)}}}async function Co(e){try{return await e.json()}catch{return null}}async function pd(e,t){let r=Rr(),o=String(e||r.url||"").trim().replace(/\/+$/,""),n=String(t||"").trim()||(e?"":ga(hr)||"");if(!o||!n)return{ok:!1,code:"no_config"};if(!Ed(o))return{ok:!1,code:"invalid_url"};let a=await wo(`${o}/rest/v1/`,{headers:{apikey:n,Accept:"application/openapi+json"}});if(!a.ok)return{...a,url:o};if(a.res.status===401||a.res.status===403)return{ok:!1,code:"bad_key",url:o};if(!a.res.ok)return{ok:!1,code:"unreachable",status:a.res.status,url:o};let i=await Co(a.res),s=new Set(Object.keys(i?.paths||{}).filter(y=>y.startsWith("/rpc/")).map(y=>y.slice(5))),u=null,l=await wo(`${o}/rest/v1/rpc/dracondex_schema_status`,{method:"POST",headers:{apikey:n,Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:"{}"});if(!l.ok)return{...l,url:o};l.res.ok&&(u=await Co(l.res));let g=u?.tables||{},m=u?.functions||{},L=[...Xg.map(y=>({id:y,kind:"table",ok:g[y]===!0})),...Bg.map(y=>({id:y,kind:"function",ok:m[y]===!0||s.has(y)})),{id:"dracondex_schema_status",kind:"function",ok:!!u}],I=Number(u?.schema_version||0),N=L.filter(y=>!y.ok).length,h=N===0&&I>=bo,O=null,f=await wo(`${o}/auth/v1/settings`,{headers:{apikey:n}});if(f.ok&&f.res.ok){let y=await Co(f.res);y&&y.external&&typeof y.external.google=="boolean"&&(O=y.external.google)}return(!e||o===r.url)&&(ut(ko,String(I)),ut(Do,new Date().toISOString())),{ok:!0,url:o,projectRef:Ra(o),ready:h,missing:N,items:L,installedVersion:I,requiredVersion:bo,googleProvider:O}}async function Kg(e,t,r){let o=Rr(),n=String(t||o.url||"").trim().replace(/\/+$/,"");if(!n)return{ok:!1,code:"no_config"};let a=String(e||"").trim();if(!a)return{ok:!1,code:"needs_manual"};let i=Ra(n);if(!i)return{ok:!1,code:"no_project_ref"};let s=await wo(`${Gg}/v1/projects/${i}/database/query`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({query:ud})},Yg);if(!s.ok)return s;if(s.res.status===401)return{ok:!1,code:"bad_access_token"};if(s.res.status===403)return{ok:!1,code:"forbidden"};if(s.res.status===404)return{ok:!1,code:"no_project_ref"};if(s.res.status===429)return{ok:!1,code:"rate_limited"};if(!s.res.ok){let l=await Co(s.res);return{ok:!1,code:"sql_error",error:String(l?.message||l?.error||`HTTP ${s.res.status}`)}}let u=await pd(t,r);return u.ok?{...u,installed:!0}:u}var zg={sql:e=>`https://supabase.com/dashboard/project/${e}/sql/new`,auth:e=>`https://supabase.com/dashboard/project/${e}/auth/providers`,api:e=>`https://supabase.com/dashboard/project/${e}/settings/api`,tokens:()=>"https://supabase.com/dashboard/account/tokens"};async function Qg(e){let t=zg[String(e)];if(!t)return{ok:!1,code:"bad_page"};let r=Rr().projectRef;return!r&&e!=="tokens"?{ok:!1,code:"no_project_ref"}:(await Hg.openExternal(t(r)),{ok:!0})}_d.exports={getSupabaseSetup:Rr,setSupabaseSetup:Vg,clearSupabaseSetup:qg,getSupabaseSetupSql:Jg,checkSupabaseProject:pd,installSupabaseSchema:Kg,openSupabaseDashboard:Qg}});var Sd=H((NA,Rd)=>{"use strict";A();var Zg=(Oo(),X(So)),eh=(rt(),X(tt)),hd=(Le(),X(be)),fd=(ge(),X(xe)),{app:th}=(le(),X(me)),Td=1,Nd=10*1024*1024*1024,Re=null,Fo=null,Sr=null,Or=null;function rh(){Fo=fd.join(fd.dirname(th.getPath("userData")),"dev-drive-server.json");try{Re=JSON.parse(hd.readFileSync(Fo,"utf8"))}catch{Re=null}(!Re||typeof Re!="object"||Re.schema!==Td)&&(Re={schema:Td,files:{}}),Re.files=Re.files||{}}function gd(){try{hd.writeFileSync(Fo,JSON.stringify(Re))}catch(e){console.error("dev-drive-server: persist failed:",e)}}function oh(e){return Object.values(Re.files).find(t=>t.name===e)||null}function nh(){let e=Number(U.env.DDX_DEV_DRIVE_QUOTA_PCT);return Number.isFinite(e)&&e>=0?e:5}function ah(e,t){let r=D.from(`--${t}`),o=[],n=e.indexOf(r);for(;n!==-1;){let u=e.indexOf(r,n+r.length);if(u===-1)break;o.push(e.slice(n+r.length,u)),n=u}let a=u=>{let l=u.indexOf(`\r
\r
`);if(l===-1)return{headers:"",content:D.alloc(0)};let g=u.slice(0,l).toString("utf8"),m=u.slice(l+4);return m.slice(-2).toString("utf8")===`\r
`&&(m=m.slice(0,-2)),{headers:g,content:m}},[i,s]=o.map(a);return{metadata:JSON.parse((i?.content||D.alloc(0)).toString("utf8")||"{}"),media:s?.content||D.alloc(0)}}function ih(e,t){let r=(i,s)=>{t.writeHead(i,{"Content-Type":"application/json"}),t.end(JSON.stringify(s))},o=(i,s)=>{t.writeHead(i,{"Content-Type":"application/octet-stream"}),t.end(s)},n=new URL(e.url,"http://127.0.0.1"),a=[];e.on("data",i=>a.push(i)),e.on("end",()=>{let i=D.concat(a);if(e.method==="GET"&&n.pathname==="/drive/v3/about"){let l=nh();return r(200,{storageQuota:{usage:String(Math.floor(Nd*(l/100))),limit:String(Nd)}})}if(e.method==="GET"&&n.pathname==="/drive/v3/files"){let l=n.searchParams.get("q")||"",g=/name='([^']*)'/.exec(l),m=g?g[1]:null,L=m?[oh(m)].filter(Boolean):Object.values(Re.files);return r(200,{files:L.map(I=>({id:I.id,name:I.name,modifiedTime:I.modifiedTime,size:String(I.size)}))})}let s=/^\/drive\/v3\/files\/([^/]+)$/.exec(n.pathname);if(e.method==="GET"&&s&&n.searchParams.get("alt")==="media"){let l=Re.files[s[1]];return l?o(200,D.from(l.bytes,"base64")):r(404,{error:{message:"not_found"}})}if(e.method==="POST"&&n.pathname==="/upload/drive/v3/files"&&n.searchParams.get("uploadType")==="multipart"){let l=e.headers["content-type"]||"",g=/boundary=(\S+)/.exec(l);if(!g)return r(400,{error:{message:"bad_multipart"}});let{metadata:m,media:L}=ah(i,g[1]),I=eh.randomUUID(),N={id:I,name:m.name,bytes:L.toString("base64"),size:L.length,modifiedTime:new Date().toISOString()};return Re.files[I]=N,gd(),r(200,{id:N.id,name:N.name})}let u=/^\/upload\/drive\/v3\/files\/([^/]+)$/.exec(n.pathname);if(e.method==="PATCH"&&u&&n.searchParams.get("uploadType")==="media"){let l=Re.files[u[1]];return l?(l.bytes=i.toString("base64"),l.size=i.length,l.modifiedTime=new Date().toISOString(),gd(),r(200,{id:l.id,name:l.name})):r(404,{error:{message:"not_found"}})}r(404,{error:{message:"not found"}})})}function sh(){return Sr?Promise.resolve(Sr):Or||(Or=new Promise((e,t)=>{rh();let r=Zg.createServer(ih);r.on("error",o=>{Or=null,t(o)}),r.unref(),r.listen(0,"127.0.0.1",()=>{Sr=`http://127.0.0.1:${r.address().port}`,console.log(`dev-drive-server: mock Drive appdata backend at ${Sr} (state: ${Fo})`),e(Sr)})}),Or)}Rd.exports={ensureDevDriveServer:sh}});var Aa=H((hA,Fd)=>{"use strict";A();var Ld=(rt(),X(tt)),xo=(Le(),X(be)),Id=(eo(),X(Zr)),Ad=(ge(),X(xe)),{app:ch}=(le(),X(me)),{getAppSetting:nt,setAppSetting:_t}=Ae(),{getSecret:Lr,setSecret:It}=pr(),{getAppDB:lh}=et(),{currentNexusId:dh}=gt(),{exportDatabaseTo:Eh,importDatabaseMerge:uh}=$n(),{makePkcePair:ph,makeState:_h,runOAuthLoopback:mh}=Lo(),at=!ch.isPackaged,Sa=null;async function yd(){!at||Sa||(Sa=await Sd().ensureDevDriveServer())}var Ir=()=>at?Sa:"https://www.googleapis.com";function vo(){let e=Lr("drive:clientId")||"",t=Lr("drive:clientSecret")||"";return{clientId:e,clientSecret:t,configured:at||!!(e&&t),dev:at}}function fh(e,t){return It("drive:clientId",String(e||"").trim()),It("drive:clientSecret",String(t||"").trim()),{ok:!0}}var pt="drive:refreshToken",Uo="drive:email",Th="https://www.googleapis.com/auth/drive.appdata email",Ne=null;async function Nh(){if(at){await yd();let m="dev-drive@local.test";return It(pt,"dev-drive-token"),_t(Uo,m),Ne={accessToken:"dev-drive-token",exp:1/0},{ok:!0,email:m}}let{clientId:e,clientSecret:t,configured:r}=vo();if(!r)return{ok:!1,code:"no_config"};let{verifier:o,challenge:n}=ph(),a=_h(),i,s;try{({code:i,redirectUri:s}=await mh(m=>`https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(e)}&redirect_uri=${encodeURIComponent(m)}&response_type=code&scope=${encodeURIComponent(Th)}&access_type=offline&prompt=consent&code_challenge=${n}&code_challenge_method=S256&state=${encodeURIComponent(a)}`,{state:a}))}catch(m){return{ok:!1,code:m.message==="login_timeout"?"login_timeout":"auth",error:String(m?.message||m)}}let u;try{u=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",code:i,client_id:e,client_secret:t,redirect_uri:s,code_verifier:o}),signal:AbortSignal.timeout(15e3)})}catch(m){return{ok:!1,code:"network",error:String(m?.message||m)}}if(!u.ok){let m=await u.json().catch(()=>({}));return{ok:!1,code:"auth",error:m.error_description||m.error||`HTTP ${u.status}`}}let l=await u.json();if(!l.refresh_token)return{ok:!1,code:"no_refresh_token"};Ne={accessToken:l.access_token,exp:Date.now()+(l.expires_in||3600)*1e3},It(pt,l.refresh_token);let g="";try{let m=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${l.access_token}`},signal:AbortSignal.timeout(1e4)});m.ok&&(g=(await m.json()).email||"")}catch{}return _t(Uo,g),{ok:!0,email:g}}async function gh(){if(!at){let e=Lr(pt);if(e)try{await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(e)}`,{method:"POST",signal:AbortSignal.timeout(1e4)})}catch{}}return It(pt,""),_t(Uo,""),Ne=null,{ok:!0}}async function jo(){if(await yd(),at)return Ne?Ne.accessToken:null;if(Ne&&Ne.exp>Date.now()+5e3)return Ne.accessToken;let e=Lr(pt);if(!e)return Ne=null,null;let{clientId:t,clientSecret:r}=vo();if(!t||!r)return null;let o;try{o=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:e,client_id:t,client_secret:r}),signal:AbortSignal.timeout(15e3)})}catch{return Ne?Ne.accessToken:null}if(!o.ok)return(o.status===400||o.status===401)&&(It(pt,""),Ne=null),null;let n=await o.json();return Ne={accessToken:n.access_token,exp:Date.now()+(n.expires_in||3600)*1e3},n.refresh_token&&It(pt,n.refresh_token),Ne.accessToken}var wd="dracondex-layout-profile.json",Oa="dracondex-backup.ddx",Cd="dracondex-layout-slots.json",Ar=e=>e.status===401||e.status===403?"auth":"server";async function bd(e){let t=await jo();if(!t)return{ok:!1,code:"not_connected"};let r;try{r=await fetch(`${Ir()}/drive/v3/files?spaces=appDataFolder&q=${encodeURIComponent(`name='${e}'`)}&fields=files(id,name,modifiedTime,size)`,{headers:{Authorization:`Bearer ${t}`},signal:AbortSignal.timeout(2e4)})}catch(n){return{ok:!1,code:"network",error:String(n?.message||n)}}return r.ok?{ok:!0,file:((await r.json()).files||[])[0]||null}:{ok:!1,code:Ar(r),error:`HTTP ${r.status}`}}function hh(e,t,r){let o=Ld.randomBytes(16).toString("hex"),n=D.from(`--${o}\r
Content-Type: application/json; charset=UTF-8\r
\r
${JSON.stringify(e)}\r
--${o}\r
Content-Type: ${r}\r
\r
`),a=D.from(`\r
--${o}--`);return{boundary:o,body:D.concat([n,t,a])}}async function La(e,t,r){let o=await jo();if(!o)return{ok:!1,code:"not_connected"};let n=await bd(e);if(!n.ok)return n;if(n.file){let l;try{l=await fetch(`${Ir()}/upload/drive/v3/files/${n.file.id}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${o}`,"Content-Type":r},body:t,signal:AbortSignal.timeout(6e4)})}catch(m){return{ok:!1,code:"network",error:String(m?.message||m)}}return l.ok?{ok:!0,fileId:(await l.json()).id}:{ok:!1,code:Ar(l),error:`HTTP ${l.status}`}}let{boundary:a,body:i}=hh({name:e,parents:["appDataFolder"]},t,r),s;try{s=await fetch(`${Ir()}/upload/drive/v3/files?uploadType=multipart`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":`multipart/related; boundary=${a}`},body:i,signal:AbortSignal.timeout(6e4)})}catch(l){return{ok:!1,code:"network",error:String(l?.message||l)}}return s.ok?{ok:!0,fileId:(await s.json()).id}:{ok:!1,code:Ar(s),error:`HTTP ${s.status}`}}async function Mo(e){let t=await bd(e);if(!t.ok)return t;if(!t.file)return{ok:!1,code:"not_found"};let r=await jo();if(!r)return{ok:!1,code:"not_connected"};let o;try{o=await fetch(`${Ir()}/drive/v3/files/${t.file.id}?alt=media`,{headers:{Authorization:`Bearer ${r}`},signal:AbortSignal.timeout(6e4)})}catch(n){return{ok:!1,code:"network",error:String(n?.message||n)}}return o.ok?{ok:!0,buffer:D.from(await o.arrayBuffer())}:{ok:!1,code:Ar(o),error:`HTTP ${o.status}`}}async function kd(){let e=await jo();if(!e)return{ok:!1,code:"not_connected"};let t;try{t=await fetch(`${Ir()}/drive/v3/about?fields=storageQuota`,{headers:{Authorization:`Bearer ${e}`},signal:AbortSignal.timeout(15e3)})}catch(u){return{ok:!1,code:"network",error:String(u?.message||u)}}if(!t.ok)return{ok:!1,code:Ar(t),error:`HTTP ${t.status}`};let r=await t.json(),o=Number(r.storageQuota?.usage||0),n=r.storageQuota?.limit,a=n!=null?Number(n):null,i=a?o/a:0,s=a==null?"ok":i>=1?"full":i>=.9?"near_full":"ok";return{ok:!0,usage:o,limit:a,state:s}}function Od(e){let t=[];try{t=JSON.parse(nt("drive:backupLog")||"[]")}catch{t=[]}t.unshift(e),t.length>20&&(t.length=20),_t("drive:backupLog",JSON.stringify(t))}function Rh(){try{return JSON.parse(nt("drive:backupLog")||"[]")}catch{return[]}}async function Sh(){let{configured:e}=vo(),t=at?!!Ne:!!Lr(pt),r={ok:!0,configured:e,dev:at,connected:t,email:t&&nt(Uo)||"",autoBackup:nt("drive:autoBackup")==="1",backupLayout:nt("drive:backupLayout")==="1",backupDdx:nt("drive:backupDdx")==="1",lastBackupAt:nt("drive:lastBackupAt")||null,storage:null};if(!t)return r;let o=await kd();return o.ok?r.storage={usage:o.usage,limit:o.limit,state:o.state}:r.storageError=o.code,r}function Oh(e){return _t("drive:autoBackup",e?"1":"0"),{ok:!0}}function Lh(e){return _t("drive:backupLayout",e?"1":"0"),{ok:!0}}function Ih(e){return _t("drive:backupDdx",e?"1":"0"),{ok:!0}}async function Ah(e){let t=nt("drive:backupLayout")==="1",r=nt("drive:backupDdx")==="1";if(!t&&!r)return{ok:!1,code:"nothing_enabled"};let o=s=>(Od({at:new Date().toISOString(),ok:!1,code:s,layout:!1,ddx:!1}),{ok:!1,code:s}),n=await kd();if(!n.ok)return o(n.code);if(n.state==="full")return o("drive_full");let a={layout:!1,ddx:!1};if(t&&e){let s=await La(wd,D.from(String(e),"utf8"),"application/json");if(!s.ok)return o(s.code);a.layout=!0}if(r){let s=Ad.join(Id.tmpdir(),`dracondex-drive-backup-${Date.now()}.ddx`);try{await Eh(s);let u=xo.readFileSync(s),l=await La(Ia(),u,"application/octet-stream");if(!l.ok)return o(l.code);a.ddx=!0}finally{try{xo.rmSync(s,{force:!0})}catch{}}}let i=new Date().toISOString();return _t("drive:lastBackupAt",i),Od({at:i,ok:!0,layout:a.layout,ddx:a.ddx}),{ok:!0,backedUpAt:i,...a}}function Ia(){let e=dh();if(!e)return Oa;let t=lh().prepare("SELECT name FROM nexus_file WHERE id=?").get(e)?.name||`vault-${e}`;return`dracondex-backup-${String(t).replace(/[^A-Za-z0-9._-]+/g,"-").slice(0,60)||`vault-${e}`}-${e}.ddx`}async function yh(){let e=await Mo(wd);return e.ok?{ok:!0,json:e.buffer.toString("utf8")}:e}async function wh(){let e=await Mo(Ia());if(!e.ok&&Ia()!==Oa&&(e=await Mo(Oa)),!e.ok)return e;let t=Ad.join(Id.tmpdir(),`dracondex-drive-restore-${Date.now()}.ddx`);try{return xo.writeFileSync(t,e.buffer),{ok:!0,summary:uh(t)}}catch(r){return{ok:!1,code:"bad_backup",error:String(r?.message||r)}}finally{try{xo.rmSync(t,{force:!0})}catch{}}}async function Po(){let e=await Mo(Cd);if(!e.ok)return e.code==="not_found"?{ok:!0,data:{slots:[]}}:e;try{let t=JSON.parse(e.buffer.toString("utf8"));return{ok:!0,data:Array.isArray(t.slots)?t:{slots:[]}}}catch(t){return{ok:!1,code:"bad_backup",error:String(t?.message||t)}}}async function Dd(e){return La(Cd,D.from(JSON.stringify(e),"utf8"),"application/json")}async function Ch(){let e=await Po();return e.ok?{ok:!0,slots:e.data.slots.map(t=>({id:t.id,name:t.name,updatedAt:t.updatedAt}))}:e}async function bh(e,t){let r=await Po();if(!r.ok)return r;let o=Ld.randomBytes(6).toString("hex");r.data.slots.push({id:o,name:String(e||"").slice(0,80)||"Layout",updatedAt:new Date().toISOString(),json:String(t||"{}")});let n=await Dd(r.data);return n.ok?{ok:!0,id:o}:n}async function kh(e){let t=await Po();if(!t.ok)return t;let r=t.data.slots.find(o=>o.id===e);return r?{ok:!0,json:r.json}:{ok:!1,code:"not_found"}}async function Dh(e){let t=await Po();if(!t.ok)return t;let r=t.data.slots.length;if(t.data.slots=t.data.slots.filter(n=>n.id!==e),t.data.slots.length===r)return{ok:!1,code:"not_found"};let o=await Dd(t.data);return o.ok?{ok:!0}:o}Fd.exports={getDriveConfig:vo,setDriveConfig:fh,driveConnect:Nh,driveDisconnect:gh,driveStatus:Sh,driveSetAutoBackup:Oh,driveSetBackupLayout:Lh,driveSetBackupDdx:Ih,driveBackupNow:Ah,driveRestoreLayoutProfile:yh,driveRestoreDatabase:wh,driveGetBackupLog:Rh,driveListLayoutSlots:Ch,driveSaveLayoutSlot:bh,driveRestoreLayoutSlot:kh,driveDeleteLayoutSlot:Dh}});var Xd=H((SA,Hd)=>{"use strict";A();var{app:Wo,shell:Fh}=(le(),X(me)),{getAppSetting:Ud,setAppSetting:Md}=Ae(),vd="ZYDRAXYL/DraconDex-WEB",xh=`https://api.github.com/repos/${vd}/releases?per_page=100`,Uh="flutter-",yr=`https://github.com/${vd}/releases`,Mh=4e3,vh=!Wo.isPackaged,jd="update:seenVersion",Pd="update:autoCheck";function jh(){let e=U.env.DDX_DEV_UPDATE_VERSION||Wo.getVersion();return{version:e,notes:`Dev mock update notes for v${e}`,url:`${yr}/tag/v${e}`}}var Ph=/^\d+(\.\d+){0,3}$/;function Wh(e){let t=String(e?.tag_name||"").replace(/^v/i,"").trim();if(!Ph.test(t))return null;let r=String(e?.html_url||""),o=r.startsWith(`${yr}/`)?r:yr;return{version:t,notes:String(e?.body||"").slice(0,Mh),url:o}}function Hh(e){if(!Array.isArray(e))return null;let t=null;for(let r of e){if(r?.draft||r?.prerelease||String(r?.tag_name||"").toLowerCase().startsWith(Uh))continue;let n=Wh(r);n&&(!t||Wd(n.version,t.version))&&(t=n)}return t}async function Xh(){if(vh)return jh();let e;try{e=await fetch(xh,{signal:AbortSignal.timeout(1e4),headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":`DraconDex/${Wo.getVersion()}`}})}catch{return null}if(!e.ok)return null;let t;try{t=await e.json()}catch{return null}return Hh(t)}var Bh=e=>String(e||"").split("-")[0],xd=e=>Bh(e).split(".").map(t=>parseInt(t,10)||0);function Wd(e,t){let r=xd(e),o=xd(t);for(let n=0;n<Math.max(r.length,o.length);n++){let a=(r[n]||0)-(o[n]||0);if(a)return a>0}return!1}async function Gh(){let e=Wo.getVersion(),t=await Xh();return!t||!Wd(t.version,e)?{ok:!0,available:!1,current:e}:{ok:!0,available:!0,dismissed:(Ud(jd)||"")===t.version,version:t.version,notes:t.notes,url:t.url,current:e}}function $h(e){return Md(jd,String(e||"")),{ok:!0}}function Yh(){return Ud(Pd)!=="0"}function Vh(e){return Md(Pd,e?"1":"0"),{ok:!0}}function qh(e){let t=String(e||"");return(t===yr||t.startsWith(`${yr}/`))&&Fh.openExternal(t),{ok:!0}}Hd.exports={checkForUpdate:Gh,dismissUpdate:$h,openUpdateDownload:qh,getAutoCheck:Yh,setAutoCheck:Vh}});var tE=H((LA,eE)=>{"use strict";A();var Gd=/^[a-z0-9_]{1,20}$/,$d=/^[a-z0-9_]{1,20}$/,Yd=/^[a-z][a-z0-9_]{0,29}$/,Jh=/^plg_[a-z0-9_]{1,41}$/,Kh=/^ext_[a-z0-9_]{1,41}$/,ya=/^[A-Za-z0-9._-]{1,100}$/,Vd=new Set(["TEXT","INTEGER","REAL"]),qd=new Set(["id","rowid","oid","_rowid_"]),wa=10,Ca=25,ba=30,zh=2*1024*1024,Qh=5,xa=/^[a-z0-9_-]{1,24}$/,ka=5,Zh=40,eR=8,Da=10,Ho=new Set(["module"]),tR=Ho.size,Fa=5,rR=["dracondex-plugin.json","dracondex-extension.json"],oR=["main","master"],Jd=new Set(["dracondex-pgi-template","dracondex-ext-template"]);function nR(e){return Jd.has(String(e??"").toLowerCase())}var aR=new Set(["localhost","127.0.0.1","[::1]"]);function iR(e){return aR.has(e.hostname)&&e.port!==""}function Kd(e){return e.protocol==="https:"?!0:e.protocol==="http:"&&iR(e)}function zd(e){if(typeof e!="string"||!e)return null;let t;try{t=new URL(e)}catch{return null}return!Kd(t)||t.username||t.password||t.search||t.hash||t.pathname!=="/"&&t.pathname!==""?null:t.origin}function sR(e,t){if(e==null)return{ok:!0};if(!Array.isArray(e)||e.length>ka)return{ok:!1,error:`"panels" must be an array of at most ${ka} entries`};let r=new Set;for(let o of e){if(!o||typeof o!="object")return{ok:!1,error:"invalid panel entry"};if(!xa.test(String(o.id||"")))return{ok:!1,error:`invalid panel id: ${o?.id}`};if(r.has(o.id))return{ok:!1,error:`duplicate panel id: ${o.id}`};if(r.add(o.id),!o.title||typeof o.title!="string"||o.title.length>Zh)return{ok:!1,error:`invalid panel title for "${o.id}"`};if(o.icon!=null&&(typeof o.icon!="string"||o.icon.length>eR))return{ok:!1,error:`invalid panel icon for "${o.id}"`};if(!o.entry||typeof o.entry!="string"||!/\.html?$/i.test(o.entry))return{ok:!1,error:`panel "${o.id}" needs an HTML "entry"`};if(!t.includes(o.entry))return{ok:!1,error:`panel "${o.id}" entry must be listed in "files"`}}return{ok:!0}}function cR(e){if(e==null)return{ok:!0};if(typeof e!="object"||Array.isArray(e))return{ok:!1,error:'"permissions" must be an object'};let{net:t,context:r}=e;if(t!=null){if(!Array.isArray(t)||t.length>Da)return{ok:!1,error:`"permissions.net" must be an array of at most ${Da} origins`};for(let o of t)if(!zd(o))return{ok:!1,error:`invalid net origin (https:// origin, or http:// on loopback with an explicit port): ${o}`}}if(r!=null){if(!Array.isArray(r)||r.length>tR)return{ok:!1,error:'"permissions.context" must be an array'};for(let o of r)if(!Ho.has(o))return{ok:!1,error:`unknown context permission: ${o}`}}return{ok:!0}}function lR(e){if(e==null)return{ok:!0};if(!Array.isArray(e)||e.length>Fa)return{ok:!1,error:`"dependencies" must be an array of at most ${Fa} entries`};let t=new Set;for(let r of e){if(typeof r!="string"||!r.trim())return{ok:!1,error:`invalid dependency: ${r}`};let o=Zd(r);if(!o.ok)return{ok:!1,error:`invalid dependency url: ${r}`};let n=`${o.host}/${o.owner}/${o.repo}`.toLowerCase();if(t.has(n))return{ok:!1,error:`duplicate dependency: ${r}`};t.add(n)}return{ok:!0}}function dR(e){if(!e||typeof e!="object")return{ok:!1,error:"manifest is not an object"};let{id:t,name:r,version:o,entry:n,files:a,tables:i,panels:s,permissions:u,dependencies:l}=e;if(!Gd.test(String(t||"")))return{ok:!1,error:'invalid or missing "id"'};if(!r||typeof r!="string"||r.length>80)return{ok:!1,error:'invalid or missing "name"'};if(o!=null&&(typeof o!="string"||o.length>40))return{ok:!1,error:'invalid "version"'};if(!n||typeof n!="string")return{ok:!1,error:'invalid or missing "entry"'};if(!Array.isArray(a)||a.length===0||a.length>ba)return{ok:!1,error:`"files" must be a non-empty array of at most ${ba} entries`};for(let h of a)if(typeof h!="string"||!h||h.includes("..")||h.startsWith("/")||h.includes("\\"))return{ok:!1,error:`unsafe file path: ${h}`};if(!a.includes(n))return{ok:!1,error:'"entry" must be listed in "files"'};let g=Array.isArray(i)?i:[];if(g.length>wa)return{ok:!1,error:`too many tables (max ${wa})`};let m=new Set;for(let h of g){if(!h||!$d.test(String(h.name||"")))return{ok:!1,error:`invalid table name: ${h?.name}`};if(m.has(h.name))return{ok:!1,error:`duplicate table name: ${h.name}`};m.add(h.name);let O=Array.isArray(h.columns)?h.columns:[];if(O.length===0||O.length>Ca)return{ok:!1,error:`table "${h.name}" must have 1-${Ca} columns`};let f=new Set;for(let y of O){let F=String(y?.name||"");if(!y||!Yd.test(F))return{ok:!1,error:`invalid column name in table "${h.name}": ${y?.name}`};if(qd.has(F.toLowerCase()))return{ok:!1,error:`reserved column name: ${y.name}`};if(!Vd.has(String(y.type||"").toUpperCase()))return{ok:!1,error:`invalid column type for "${y.name}": ${y.type}`};if(f.has(F))return{ok:!1,error:`duplicate column name: ${y.name}`};f.add(F)}}let L=sR(s,a);if(!L.ok)return L;let I=cR(u);if(!I.ok)return I;let N=lR(l);return N.ok?{ok:!0}:N}function ER(e){return Array.isArray(e?.panels)?e.panels.filter(t=>t&&xa.test(String(t.id||""))&&typeof t.entry=="string").map(t=>({id:t.id,title:String(t.title||t.id),icon:typeof t.icon=="string"?t.icon:null,entry:t.entry})):[]}function Qd(e){let t=e?.permissions?.net;return Array.isArray(t)?t.map(zd).filter(Boolean):[]}function uR(e){let t=e?.permissions?.context;return Array.isArray(t)?t.filter(r=>Ho.has(r)):[]}function pR(e){return Array.isArray(e?.dependencies)?e.dependencies.filter(t=>typeof t=="string"&&t.trim()):[]}function _R(e,t){let r;try{r=new URL(String(t||""))}catch{return!1}return Kd(r)?Qd(e).includes(r.origin):!1}var Bd={"github.com":"github","www.github.com":"github","gitlab.com":"gitlab","www.gitlab.com":"gitlab"};function mR(e){let t=e,r=t.match(/^(?:ssh:\/\/)?[A-Za-z0-9._-]+@([A-Za-z0-9.-]+):(?!\/\/)(.+)$/);return r?`${r[1]}/${r[2]}`:(t=t.replace(/^[a-z][a-z0-9+.-]*:\/\//i,""),t=t.replace(/^[A-Za-z0-9._-]+@/,""),t)}function Zd(e){let t=String(e??"").trim();if(!t)return{ok:!1,code:"bad_url"};if(/\s/.test(t))return{ok:!1,code:"bad_url"};if(t=mR(t),t=t.split("#")[0].split("?")[0],t=t.replace(/\/+$/,""),!t)return{ok:!1,code:"bad_url"};let r=t.split("/").filter(Boolean);if(!r.length)return{ok:!1,code:"bad_url"};let o=null,n=r[0].toLowerCase();if(Bd[n])o=Bd[n],r=r.slice(1);else{if(n.includes("."))return{ok:!1,code:"unsupported_host"};o="github"}if(r.length<2)return{ok:!1,code:"bad_url"};let a=null,i=r.indexOf("-"),s;if(o==="gitlab"&&i>0){s=r.slice(0,i);let g=r.slice(i+1);g.length>=2&&(g[0]==="tree"||g[0]==="blob"||g[0]==="raw")&&(a=g.slice(1).join("/"))}else{let g=r.findIndex((m,L)=>L>=2&&(m==="tree"||m==="blob"||m==="raw"));if(g>0){s=r.slice(0,g);let m=r.slice(g+1);if(!m.length)return{ok:!1,code:"bad_url"};a=r[g]==="tree"?m.join("/"):m[0]}else s=r}if(s.length<2)return{ok:!1,code:"bad_url"};if(s=s.slice(),s[s.length-1]=s[s.length-1].replace(/\.git$/i,""),o==="github"&&s.length!==2)return{ok:!1,code:"bad_url"};if(o==="gitlab"&&s.length>Qh+1)return{ok:!1,code:"bad_url"};for(let g of s)if(!ya.test(g)||g==="."||g==="..")return{ok:!1,code:"bad_url"};if(a!=null){let g=a.split("/").filter(Boolean);if(!g.length||g.length>8)return{ok:!1,code:"bad_url"};for(let m of g)if(!ya.test(m)||m==="."||m==="..")return{ok:!1,code:"bad_url"};a=g.join("/")}let u=s[s.length-1],l=s.slice(0,-1).join("/");return!l||!u?{ok:!1,code:"bad_url"}:{ok:!0,host:o,owner:l,repo:u,ref:a}}var Xt=e=>String(e).split("/").map(encodeURIComponent).join("/");function fR(e,t){let{host:r,owner:o,repo:n,ref:a}=e;return r==="gitlab"?`https://gitlab.com/${Xt(o)}/${encodeURIComponent(n)}/-/raw/${Xt(a)}/${Xt(t)}`:`https://raw.githubusercontent.com/${Xt(o)}/${encodeURIComponent(n)}/${Xt(a)}/${Xt(t)}`}eE.exports={PLUGIN_ID_RE:Gd,PLUGIN_TABLE_RE:$d,PLUGIN_COLUMN_RE:Yd,FULL_TABLE_RE:Jh,LEGACY_TABLE_RE:Kh,REPO_SEG_RE:ya,COL_TYPES:Vd,RESERVED_COLS:qd,MAX_TABLES_PER_PLUGIN:wa,MAX_COLS_PER_TABLE:Ca,MAX_FILES:ba,MAX_FILE_BYTES:zh,MANIFEST_NAMES:rR,REF_CANDIDATES:oR,TEMPLATE_REPOS:Jd,isTemplateRepoName:nR,PANEL_ID_RE:xa,MAX_PANELS:ka,MAX_NET_ORIGINS:Da,CONTEXT_KINDS:Ho,MAX_DEPENDENCIES:Fa,validateManifest:dR,parseRepoUrl:Zd,rawUrl:fR,manifestPanels:ER,manifestNetOrigins:Qd,manifestContextKinds:uR,manifestDependencies:pR,netOriginAllowed:_R}});var fE=H((AA,mE)=>{"use strict";A();var At=(Le(),X(be)),je=(ge(),X(xe)),{app:TR}=(le(),X(me)),{getAppDB:pe}=te(),{PLUGIN_TABLE_RE:NR,FULL_TABLE_RE:oE,MAX_FILE_BYTES:rE,MANIFEST_NAMES:gR,REF_CANDIDATES:hR,isTemplateRepoName:RR,validateManifest:wr,parseRepoUrl:nE,rawUrl:aE,manifestPanels:Ua,manifestNetOrigins:iE,manifestContextKinds:sE,manifestDependencies:Ma,netOriginAllowed:SR}=tE(),cE=()=>je.dirname(TR.getPath("userData")),Xo=()=>je.join(cE(),"plugins"),va=e=>je.join(Xo(),e);function OR(){try{let e=je.join(cE(),"extensions");At.existsSync(e)&&!At.existsSync(Xo())&&At.renameSync(e,Xo())}catch(e){console.error("plugin dir migration error:",e)}}async function LR(e){let t;try{t=await fetch(e,{signal:AbortSignal.timeout(15e3)})}catch(r){return{ok:!1,code:"network",error:String(r?.message||r)}}return t.ok?{ok:!0,text:await t.text()}:{ok:!1,code:"not_found",error:`HTTP ${t.status}`}}async function IR(e){let t;try{t=await fetch(e,{signal:AbortSignal.timeout(3e4)})}catch(o){return{ok:!1,code:"network",error:String(o?.message||o)}}if(!t.ok)return{ok:!1,code:"not_found",error:`HTTP ${t.status}`};let r=D.from(await t.arrayBuffer());return r.length>rE?{ok:!1,code:"too_large",error:`exceeds ${rE} bytes`}:{ok:!0,buffer:r}}async function AR(e){try{return(await fetch(`https://api.github.com/repos/ZYDRAXYL/${encodeURIComponent(e)}/contents/.dracondex`,{headers:{"User-Agent":"DraconDex",Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(15e3)})).ok}catch{return!1}}async function yR(){let e;try{e=await fetch("https://api.github.com/users/ZYDRAXYL/repos?per_page=100&sort=updated",{headers:{"User-Agent":"DraconDex",Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(15e3)})}catch{return{ok:!1}}if(!e.ok)return{ok:!1};let t;try{t=await e.json()}catch{return{ok:!1}}if(!Array.isArray(t))return{ok:!1};let r=t.filter(n=>!n.is_template&&!n.archived&&!RR(n.name)),o=await Promise.all(r.map(n=>AR(n.name)));return{ok:!0,repos:r.filter((n,a)=>o[a]).map(n=>({name:n.name,description:n.description||"",url:n.clone_url,stars:n.stargazers_count||0}))}}async function Bo(e){let t=nE(e);if(!t.ok)return{ok:!1,code:t.code};let r=t.ref?[t.ref]:hR,o=null;for(let n of r){let a={host:t.host,owner:t.owner,repo:t.repo,ref:n};for(let i of gR){let s=await LR(aE(a,i));if(s.ok){let u;try{u=JSON.parse(s.text)}catch{return{ok:!1,code:"bad_manifest",error:"manifest is not valid JSON"}}return{ok:!0,...a,manifestName:i,manifest:u}}s.code==="network"&&(o=s.error)}}return o?{ok:!1,code:"network",error:o}:{ok:!1,code:"no_manifest"}}async function wR(e,t){let r=await Bo(e);if(!r.ok)return{url:e,ok:!1,code:r.code};if(!wr(r.manifest).ok)return{url:e,ok:!1,code:"bad_manifest"};if(r.manifest.id===t)return{url:e,ok:!1,code:"self_dependency"};let n=pe().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(r.manifest.id);return{url:e,ok:!0,id:r.manifest.id,name:r.manifest.name,version:r.manifest.version||null,alreadyInstalled:!!n}}async function CR(e){let t=await Bo(e);if(!t.ok)return t;let r=wr(t.manifest);if(!r.ok)return{ok:!1,code:"bad_manifest",error:r.error};let o=pe().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(t.manifest.id),n=[];for(let a of Ma(t.manifest))n.push(await wR(a,t.manifest.id));return{ok:!0,url:String(e||"").trim(),host:t.host,owner:t.owner,repo:t.repo,ref:t.ref,manifestName:t.manifestName,alreadyInstalled:!!o,manifest:{id:t.manifest.id,name:t.manifest.name,version:t.manifest.version||null,entry:t.manifest.entry,files:t.manifest.files,tables:(t.manifest.tables||[]).map(a=>({name:a.name,columns:a.columns})),panels:Ua(t.manifest),netOrigins:iE(t.manifest),contextKinds:sE(t.manifest),dependencies:n}}}async function lE(e,t,r,o,n,a=[]){let i=pe(),s={};for(let l of n.files){let g=await IR(aE({host:e,owner:t,repo:r,ref:o},l));if(!g.ok)return{ok:!1,code:g.code==="not_found"?"missing_file":g.code,error:`${l}: ${g.error}`};s[l]=g.buffer}let u=va(n.id);try{for(let[l,g]of Object.entries(s)){let m=je.join(u,l);At.mkdirSync(je.dirname(m),{recursive:!0}),At.writeFileSync(m,g)}i.transaction(()=>{let g=i.prepare(`
        INSERT INTO plugin (plugin_key, name, version, repo_host, repo_owner, repo_name, repo_ref, entry_html, manifest_json)
        VALUES (?,?,?,?,?,?,?,?,?)
      `).run(n.id,n.name,n.version||null,e,t,r,o,n.entry,JSON.stringify(n)).lastInsertRowid;for(let m of n.tables||[]){let L=`plg_${n.id}_${m.name}`;if(!oE.test(L))throw new Error(`invalid composed table name: ${L}`);let I=m.columns.map(N=>`${N.name} ${String(N.type).toUpperCase()}`).join(", ");i.prepare(`CREATE TABLE IF NOT EXISTS ${L} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${I})`).run(),i.prepare(`
          INSERT INTO plugin_table (plugin_ref, local_name, table_name, columns_json)
          VALUES (?,?,?,?)
        `).run(g,m.name,L,JSON.stringify(m.columns))}for(let m of a)i.prepare(`
          INSERT INTO plugin_dependency (plugin_ref, dep_url, dep_key, dep_name, fail_code)
          VALUES (?,?,?,?,?)
        `).run(g,m.url,m.key||null,m.name||null,m.failCode||null)})()}catch(l){try{At.rmSync(u,{recursive:!0,force:!0})}catch{}return{ok:!1,code:"install_failed",error:String(l?.message||l)}}return{ok:!0,pluginKey:n.id}}async function dE(e,t){let r=await Bo(e);if(!r.ok)return{url:e,key:null,name:null,failCode:r.code};if(!wr(r.manifest).ok)return{url:e,key:null,name:null,failCode:"bad_manifest"};if(r.manifest.id===t)return{url:e,key:null,name:null,failCode:"self_dependency"};let n=r.manifest.id,a=r.manifest.name;if(pe().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(n))return{url:e,key:n,name:a,failCode:null};let i=Ma(r.manifest).map(u=>({url:u,key:null,name:null,failCode:"unresolved"})),s=await lE(r.host,r.owner,r.repo,r.ref,r.manifest,i);return s.ok?{url:e,key:n,name:a,failCode:null}:{url:e,key:n,name:a,failCode:s.code||"install_failed"}}async function bR(e){let t=await Bo(e);if(!t.ok)return t;let{host:r,owner:o,repo:n,ref:a,manifest:i}=t,s=wr(i);if(!s.ok)return{ok:!1,code:"bad_manifest",error:s.error};if(pe().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(i.id))return{ok:!1,code:"already_installed"};let l=[];for(let g of Ma(i))l.push(await dE(g,i.id));return lE(r,o,n,a,i,l)}function kR(e){return pe().prepare(`
    SELECT dep_url AS url, dep_key AS key, dep_name AS name, fail_code AS failCode
    FROM plugin_dependency
    WHERE plugin_ref=?
      AND (dep_key IS NULL OR dep_key NOT IN (SELECT plugin_key FROM plugin))
    ORDER BY id
  `).all(e)}async function DR(e,t){let r=pe(),o=r.prepare("SELECT plugin_key FROM plugin WHERE id=?").get(e);if(!o)return{ok:!1,code:"not_found"};let n=r.prepare("SELECT id, dep_url FROM plugin_dependency WHERE plugin_ref=? AND dep_url=?").get(e,String(t||""));if(!n)return{ok:!1,code:"not_found"};let a=await dE(n.dep_url,o.plugin_key);return r.prepare("UPDATE plugin_dependency SET dep_key=?, dep_name=?, fail_code=? WHERE id=?").run(a.key,a.name,a.failCode,n.id),a.failCode?{ok:!1,code:a.failCode}:{ok:!0,pluginKey:a.key}}function FR(e){let t=pe(),r=t.prepare("SELECT * FROM plugin WHERE id=?").get(e);if(!r)return{ok:!1,code:"not_found"};let o=t.prepare("SELECT table_name FROM plugin_table WHERE plugin_ref=?").all(e);t.transaction(()=>{for(let n of o)oE.test(n.table_name)&&t.prepare(`DROP TABLE IF EXISTS ${n.table_name}`).run();t.prepare("DELETE FROM plugin WHERE id=?").run(e)})();try{At.rmSync(va(r.plugin_key),{recursive:!0,force:!0})}catch{}return{ok:!0}}function ja(e){try{return JSON.parse(e.manifest_json)}catch{return null}}function xR(){let e=pe(),t=e.prepare(`
    SELECT id, plugin_key, name, version, repo_host, repo_owner, repo_name, repo_ref, entry_html, installed_at, manifest_json
    FROM plugin ORDER BY installed_at DESC
  `).all(),r=e.prepare("SELECT plugin_ref, local_name, columns_json FROM plugin_table").all(),o=e.prepare("SELECT plugin_ref, dep_url, dep_key, dep_name, fail_code FROM plugin_dependency").all(),n=new Set(t.map(a=>a.plugin_key));return t.map(({manifest_json:a,...i})=>{let s=ja({manifest_json:a});return{...i,missingDeps:o.filter(u=>u.plugin_ref===i.id&&(!u.dep_key||!n.has(u.dep_key))).map(u=>({url:u.dep_url,key:u.dep_key,name:u.dep_name,failCode:u.fail_code})),tables:r.filter(u=>u.plugin_ref===i.id).map(u=>({localName:u.local_name,columns:JSON.parse(u.columns_json)})),dir:va(i.plugin_key),panels:s?Ua(s):[],netOrigins:s?iE(s):[],contextKinds:s?sE(s):[]}})}function UR(e){return pe().prepare("SELECT * FROM plugin WHERE id=?").get(e)||null}function EE(e){let t;try{t=je.relative(Xo(),je.resolve(e))}catch{return null}if(!t||t.startsWith("..")||je.isAbsolute(t))return null;let r=t.split(je.sep)[0];if(!r)return null;let o=pe().prepare("SELECT * FROM plugin WHERE plugin_key=?").get(r)||null;return o?{row:o,relInPlugin:t.split(je.sep).slice(1).join("/")}:null}function MR(e){let t=EE(e);if(!t)return null;let r=ja(t.row);return new Set(Ua(r||{}).map(n=>n.entry)).has(t.relInPlugin)?t.row:null}function vR(e){return EE(e)?.row||null}function Bt(e,t){let r=pe().prepare("SELECT manifest_json FROM plugin WHERE id=?").get(e);if(!r)return!1;let o=ja(r);return!!o&&SR(o,t)}var jR=new Set(["GET","POST","PUT","PATCH","DELETE","HEAD"]),PR=12e4,uE=8*1024*1024,WR=new Set(["cookie","host","origin","referer","content-length"]);function pE(e){let t=String(e?.method||"GET").toUpperCase();if(!jR.has(t))throw new Error(`method not allowed: ${t}`);let r={};for(let[n,a]of Object.entries(e?.headers||{}))typeof a=="string"&&(WR.has(String(n).toLowerCase())||(r[n]=a));let o=e?.body;if(o!=null&&typeof o!="string")throw new Error("body must be a string");return{method:t,headers:r,body:t==="GET"||t==="HEAD"?void 0:o}}async function _E(e){let t=e.body?.getReader();if(!t)return{text:await e.text(),truncated:!1};let r=new TextDecoder,o="",n=0;for(;;){let{done:a,value:i}=await t.read();if(a)break;if(n+=i.length,n>uE)return await t.cancel(),{text:o,truncated:!0};o+=r.decode(i,{stream:!0})}return{text:o+r.decode(),truncated:!1}}async function HR(e,t,r){if(!Bt(e,t))throw new Error("origin not allowed by this plugin's manifest");let o=pE(r),n;try{n=await fetch(t,{...o,redirect:"follow",signal:AbortSignal.timeout(PR)})}catch(s){return{ok:!1,code:"network",error:String(s?.message||s)}}if(n.redirected&&!Bt(e,n.url))return{ok:!1,code:"redirect_blocked",error:"redirected to a disallowed origin"};let{text:a,truncated:i}=await _E(n);return{ok:!0,status:n.status,statusText:n.statusText,headers:Object.fromEntries(n.headers.entries()),body:a,truncated:i}}async function XR(e,t,r,{onChunk:o,onEnd:n}){if(!Bt(e,t))throw new Error("origin not allowed by this plugin's manifest");let a=pE(r),i=new AbortController;return(async()=>{let s;try{s=await fetch(t,{...a,redirect:"follow",signal:i.signal})}catch(m){n({ok:!1,code:i.signal.aborted?"aborted":"network",error:String(m?.message||m)});return}if(s.redirected&&!Bt(e,s.url)){i.abort(),n({ok:!1,code:"redirect_blocked",error:"redirected to a disallowed origin"});return}if(!s.ok){let{text:m}=await _E(s);n({ok:!1,code:"http",status:s.status,error:m});return}let u=s.body?.getReader();if(!u){n({ok:!1,code:"network",error:"no response body"});return}let l=new TextDecoder,g=0;try{for(;;){let{done:L,value:I}=await u.read();if(L)break;if(g+=I.length,g>uE){await u.cancel(),n({ok:!1,code:"too_large",error:"stream exceeded size cap"});return}o(l.decode(I,{stream:!0}))}let m=l.decode();m&&o(m),n({ok:!0,status:s.status})}catch(m){n({ok:!1,code:i.signal.aborted?"aborted":"network",error:String(m?.message||m)})}})(),()=>i.abort()}async function BR(e,t){let r=String(t?.authorizeUrl||"");if(!Bt(e,r))throw new Error("authorize URL not allowed by this plugin's manifest");let o=String(t?.clientId||"");if(!o)throw new Error("clientId is required");let{makePkcePair:n,makeState:a,runOAuthLoopback:i}=Lo(),{verifier:s,challenge:u}=n(),l=a(),{code:g,redirectUri:m}=await i(L=>{let I=new URL(r);I.searchParams.set("response_type","code"),I.searchParams.set("client_id",o),I.searchParams.set("redirect_uri",L),I.searchParams.set("code_challenge",u),I.searchParams.set("code_challenge_method","S256"),I.searchParams.set("state",l),t?.scope&&I.searchParams.set("scope",String(t.scope));for(let[N,h]of Object.entries(t?.extraParams||{}))typeof h=="string"&&I.searchParams.set(N,h);return I.toString()},{state:l});return{code:g,redirectUri:m,verifier:s,state:l}}function Cr(e,t){if(!NR.test(String(t||"")))return null;let r=pe().prepare(`
    SELECT table_name, columns_json FROM plugin_table WHERE plugin_ref=? AND local_name=?
  `).get(e,t);return r?{tableName:r.table_name,columns:JSON.parse(r.columns_json)}:null}function Pa(e,t){let r=new Set(t.map(o=>o.name));for(let o of Object.keys(e||{}))if(!r.has(o))throw new Error(`unknown column: ${o}`)}function GR(e,t){let r=Cr(e,t);if(!r)throw new Error("not an owned table");return{columns:r.columns}}function $R(e,t,r){let o=Cr(e,t);if(!o)throw new Error("not an owned table");let n=r&&typeof r=="object"?r:{};Pa(n,o.columns);let a=Object.keys(n),i=a.length?`WHERE ${a.map(s=>`${s}=?`).join(" AND ")}`:"";return pe().prepare(`SELECT * FROM ${o.tableName} ${i} ORDER BY id DESC`).all(...a.map(s=>n[s]))}function YR(e,t,r){let o=Cr(e,t);if(!o)throw new Error("not an owned table");let n=r&&typeof r=="object"?r:{};Pa(n,o.columns);let a=Object.keys(n);if(!a.length)return{id:pe().prepare(`INSERT INTO ${o.tableName} DEFAULT VALUES`).run().lastInsertRowid};let i=a.join(", "),s=a.map(()=>"?").join(", ");return{id:pe().prepare(`INSERT INTO ${o.tableName} (${i}) VALUES (${s})`).run(...a.map(l=>n[l])).lastInsertRowid}}function VR(e,t,r,o){let n=Cr(e,t);if(!n)throw new Error("not an owned table");let a=o&&typeof o=="object"?o:{};Pa(a,n.columns);let i=Object.keys(a);if(!i.length)return{changes:0};let s=i.map(l=>`${l}=?`).join(", ");return{changes:pe().prepare(`UPDATE ${n.tableName} SET ${s} WHERE id=?`).run(...i.map(l=>a[l]),r).changes}}function qR(e,t,r){let o=Cr(e,t);if(!o)throw new Error("not an owned table");return{changes:pe().prepare(`DELETE FROM ${o.tableName} WHERE id=?`).run(r).changes}}mE.exports={pluginList:xR,pluginGetById:UR,pluginPreview:CR,pluginInstall:bR,pluginUninstall:FR,pluginListOrgRepos:yR,pluginMissingDeps:kR,pluginInstallDependency:DR,migratePluginDir:OR,pluginByPanelPath:MR,pluginByOwnedPath:vR,pluginNetAllowed:Bt,pluginNetFetch:HR,pluginNetStream:XR,pluginOAuthAuthorize:BR,pluginApiGetSchema:GR,pluginApiQuery:$R,pluginApiInsert:YR,pluginApiUpdate:VR,pluginApiDelete:qR,validateManifest:wr,parseRepoUrl:nE}});var SE=H((wA,RE)=>{"use strict";A();var{getAppDB:br}=te(),Ba="ZYDRAXYL/DraconDex-PKG",Ga=!(le(),X(me)).app.isPackaged&&U.env.DRACONDEX_PKG_BASE||`https://github.com/${Ba}/releases`,TE=15e3,JR=3e4,Wa=2*1024*1024,KR=new Set(["theme","lang","view"]),zR=new Set(["--bg","--surface","--raised","--hover","--border","--t1","--t2","--t3","--accent","--accentH","--danger","--success","--button","--on-accent","--on-button"]),QR=["--bg","--surface","--raised","--hover","--border","--t1","--t2","--t3","--accent","--accentH","--danger","--success"],ZR=new Set(["size","fontScale","animationsEnabled","animationSpeed","workspaceStyle","navOrientation","navHorizontalDisplay","navVerticalAlwaysLabel","nameMode","nestShowItems","nestShowMajorIcon","nestShowMinorIcon","nestSignatureMode","dragonView"]),eS=/^[#a-zA-Z0-9\s(),.%/-]{1,80}$/;function Ha(e,t){return`${Ga}/download/${encodeURIComponent(e)}/${encodeURIComponent(t)}`}async function Xa(e,t,r){let o;try{o=await fetch(e,{signal:AbortSignal.timeout(t)})}catch(a){return{ok:!1,code:"network",error:String(a?.message||a)}}if(!o.ok)return{ok:!1,code:o.status===404?"not_found":"http",error:`HTTP ${o.status}`};let n=D.from(await o.arrayBuffer());if(r&&n.length>r)return{ok:!1,code:"too_large",error:`exceeds ${r} bytes`};try{return{ok:!0,json:JSON.parse(n.toString("utf8")),raw:n}}catch(a){return{ok:!1,code:"bad_json",error:String(a?.message||a)}}}function tS(e){return(rt(),X(tt)).createHash("sha256").update(e).digest("hex")}function NE(e){return!e||typeof e!="object"?"entry is not an object":typeof e.id!="string"||!/^[A-Za-z0-9][A-Za-z0-9-]{0,63}$/.test(e.id)?"bad id":KR.has(e.kind)?typeof e.version!="string"||!/^\d+\.\d+\.\d+$/.test(e.version)?"bad version":typeof e.asset!="string"||!/^[A-Za-z0-9._-]{1,128}$/.test(e.asset)?"bad asset name":typeof e.sha256!="string"||!/^[a-f0-9]{64}$/.test(e.sha256)?"bad sha256":!e.displayName?.en||!e.displayName?.th?"displayName needs en and th":!Array.isArray(e.targets)||!e.targets.includes("exe")?"not targeted at exe":null:`unknown kind "${e.kind}"`}function gE(e,t){if(!t||typeof t!="object")return"payload is not an object";if(e==="theme"){let r=t.vars;if(!r||typeof r!="object")return"theme has no vars";for(let[o,n]of Object.entries(r)){if(!zR.has(o))return`unknown palette token "${o}"`;if(typeof n!="string"||!eS.test(n))return`unsafe value for "${o}"`}for(let o of QR)if(!r[o])return`missing required token ${o}`}else if(e==="lang"){if(typeof t.locale!="string"||!/^[a-z]{2,8}$/.test(t.locale))return"bad locale code";let r=t.keys;if(!r||typeof r!="object")return"lang has no keys";let o=Object.keys(r).length;if(o<100)return`only ${o} keys \u2014 a locale should carry the full key set`;for(let n of Object.values(r))if(typeof n!="string")return"every locale value must be a string"}else if(e==="view"){let r=t.settings;if(!r||typeof r!="object")return"view has no settings";for(let o of Object.keys(r))if(!ZR.has(o))return`"${o}" is not a settable UI setting`}return null}function hE(){return br().prepare(`SELECT id, pkg_id, kind, name, version, display_json, payload_json,
            source_repo, source_release, source_asset, enabled, installed_at, updated_at
       FROM installed_package ORDER BY kind, name`).all().map(e=>({...e,enabled:!!e.enabled,display:Go(e.display_json,{}),payload:Go(e.payload_json,{})}))}function Go(e,t){try{return JSON.parse(e)}catch{return t}}async function rS(e){let t=typeof e=="string"&&/^pkg-v\d+\.\d+\.\d+$/.test(e)?e:"latest",r=t==="latest"?`${Ga}/latest/download/index.json`:Ha(t,"index.json"),o=await Xa(r,TE,Wa);if(!o.ok)return o;let n=o.json;if(n?.repo!==Ba)return{ok:!1,code:"bad_catalog",error:"catalog names a different repo"};if(!Array.isArray(n.packages))return{ok:!1,code:"bad_catalog",error:"catalog has no packages array"};let a=new Map(hE().map(s=>[s.pkg_id,s])),i=[];for(let s of n.packages){let u=NE(s);if(u){console.error(`pkg: skipping catalog entry (${u})`);continue}let l=a.get(s.id);i.push({id:s.id,kind:s.kind,version:s.version,displayName:s.displayName,description:s.description||null,minAppVersion:s.minAppVersion||null,bytes:s.bytes||null,installedVersion:l?l.version:null,updateAvailable:!!l&&l.version!==s.version})}return{ok:!0,release:n.release||t,packages:i}}async function oS(e,t){if(typeof e!="string")return{ok:!1,code:"bad_request"};let r=typeof t=="string"&&/^pkg-v\d+\.\d+\.\d+$/.test(t)?t:"latest",o=r==="latest"?`${Ga}/latest/download/index.json`:Ha(r,"index.json"),n=await Xa(o,TE,Wa);if(!n.ok)return n;let a=(n.json.packages||[]).find(N=>N&&N.id===e);if(!a)return{ok:!1,code:"not_found",error:`${e} is not in the catalog`};let i=NE(a);if(i)return{ok:!1,code:"invalid",error:i};let s=n.json.release||r,u=await Xa(Ha(s,a.asset),JR,Wa);if(!u.ok)return u;let l=tS(u.raw);if(l!==a.sha256)return{ok:!1,code:"checksum",error:`payload hash ${l} does not match the catalog's ${a.sha256}`};let{meta:g,payload:m}=u.json||{};if(!g||g.id!==e||g.kind!==a.kind||g.version!==a.version)return{ok:!1,code:"invalid",error:"payload metadata disagrees with the catalog entry"};let L=gE(a.kind,m);if(L)return{ok:!1,code:"invalid",error:L};let I=br();try{I.exec("BEGIN"),I.prepare(`INSERT INTO installed_package
         (pkg_id, kind, name, version, display_json, payload_json,
          source_repo, source_release, source_asset, source_sha256, updated_at)
       VALUES (?,?,?,?,?,?,?,?,?,?, datetime('now'))
       ON CONFLICT(pkg_id) DO UPDATE SET
         kind=excluded.kind, name=excluded.name, version=excluded.version,
         display_json=excluded.display_json, payload_json=excluded.payload_json,
         source_repo=excluded.source_repo, source_release=excluded.source_release,
         source_asset=excluded.source_asset, source_sha256=excluded.source_sha256,
         updated_at=datetime('now')`).run(e,a.kind,g.name||e,a.version,JSON.stringify(a.displayName),JSON.stringify(m),Ba,s,a.asset,a.sha256),I.exec("COMMIT")}catch(N){try{I.exec("ROLLBACK")}catch{}return{ok:!1,code:"db",error:String(N?.message||N)}}return{ok:!0,id:e,kind:a.kind,version:a.version}}function nS(e){return{ok:!0,removed:br().prepare("DELETE FROM installed_package WHERE pkg_id=?").run(e).changes>0}}function aS(e,t){return br().prepare("UPDATE installed_package SET enabled=?, updated_at=datetime('now') WHERE pkg_id=?").run(t?1:0,e),{ok:!0}}function iS(){let e=br().prepare(`SELECT pkg_id, kind, name, version, display_json, payload_json
       FROM installed_package WHERE enabled=1`).all(),t=[],r=[],o=[];for(let n of e){let a=Go(n.payload_json,null);if(!a)continue;let i=Go(n.display_json,{});gE(n.kind,a)||(n.kind==="theme"?t.push({id:n.pkg_id,name:n.name,display:i,vars:a.vars}):n.kind==="lang"?r.push({id:n.pkg_id,locale:a.locale,label:a.label||a.locale,display:i,keys:a.keys}):n.kind==="view"&&o.push({id:n.pkg_id,name:n.name,display:i,settings:a.settings}))}return{themes:t,langs:r,views:o}}RE.exports={pkgList:hE,pkgCatalog:rS,pkgInstall:oS,pkgUninstall:nS,pkgSetEnabled:aS,pkgActive:iS}});var IE=H((kA,LE)=>{"use strict";A();var $o=(Le(),X(be)),{getNexuses:bA}=Kn(),{serializeVault:OE,applySnapshot:sS,collectModuleSubtreeIds:cS,importModuleSnapshot:lS}=gr();function dS(e,t){let r=OE(e);return r?($o.writeFileSync(t,JSON.stringify(r)),{ok:!0}):{ok:!1,code:"not_found"}}function ES(e,t){let r;try{r=JSON.parse($o.readFileSync(t,"utf8"))}catch(o){return{ok:!1,code:"bad_file",error:String(o?.message||o)}}return sS(e,r)}function uS(e,t,r){let o=cS(e,t);if(!o.length)return{ok:!1,code:"not_found"};let n=OE(e,o);return n?($o.writeFileSync(r,JSON.stringify(n)),{ok:!0}):{ok:!1,code:"not_found"}}function pS(e,t,r){let o;try{o=JSON.parse($o.readFileSync(r,"utf8"))}catch(n){return{ok:!1,code:"bad_file",error:String(n?.message||n)}}return lS(e,t,o)}LE.exports={exportNexusFile:dS,importNexusFile:ES,exportModuleFile:uS,importModuleFile:pS}});var CE={};ze(CE,{default:()=>fS,gunzip:()=>wE,gzip:()=>yE});async function mS(e,t){let r=await new Response(new Blob([e]).stream().pipeThrough(t)).arrayBuffer();return new Uint8Array(r)}var _S,AE,yE,wE,fS,bE=Ce(()=>{"use strict";A();_S=()=>typeof CompressionStream=="function"&&typeof DecompressionStream=="function";AE=e=>(t,r,o)=>{let n=typeof r=="function"?r:o;if(typeof n!="function")throw new TypeError("callback is required");if(!_S()){n(new Error("gzip is not available in this browser"));return}mS(t,e()).then(a=>n(null,a),a=>n(a))},yE=AE(()=>new CompressionStream("gzip")),wE=AE(()=>new DecompressionStream("gzip")),fS={gzip:yE,gunzip:wE}});var FE=H((xA,DE)=>{"use strict";A();var Gt=(rt(),X(tt)),Ya=32,kr=12,Yo=16,$a=6e5,TS=()=>Gt.randomBytes(Ya);function Va(e,t){let r=Gt.randomBytes(kr),o=Gt.createCipheriv("aes-256-gcm",e,r),n=D.concat([o.update(t),o.final(),o.getAuthTag()]);return{iv:r,ct:n}}function qa(e,t,r){let o=Gt.createDecipheriv("aes-256-gcm",e,t);return o.setAuthTag(r.subarray(r.length-Yo)),D.concat([o.update(r.subarray(0,r.length-Yo)),o.final()])}function NS(e,t){let{iv:r,ct:o}=Va(e,t);return D.concat([r,o])}function gS(e,t){let r=D.from(t);if(r.length<kr+Yo)throw new Error("chunk_too_short");return qa(e,r.subarray(0,kr),r.subarray(kr))}function hS(e,t){let{iv:r,ct:o}=Va(e,D.from(JSON.stringify(t),"utf8"));return{iv:r.toString("base64"),ct:o.toString("base64")}}var RS=(e,t)=>JSON.parse(qa(e,D.from(t.iv,"base64"),D.from(t.ct,"base64")).toString("utf8")),kE=(e,t,r,o)=>Gt.pbkdf2Sync(`${e}:${t}`,r,o,Ya,"sha256");function SS(e,t,r){let o=Gt.randomBytes(16),{iv:n,ct:a}=Va(kE(t,r,o,$a),e);return{iv:n.toString("base64"),ct:a.toString("base64"),salt:o.toString("base64"),iters:$a}}var OS=(e,t,r)=>qa(kE(t,r,D.from(e.salt,"base64"),e.iters),D.from(e.iv,"base64"),D.from(e.ct,"base64"));function LS(e,t){let r=[];for(let o=0;o<e.length;o+=t)r.push(e.subarray(o,Math.min(o+t,e.length)));return r.length?r:[D.alloc(0)]}var IS=e=>String(e).toUpperCase().replace(/[^0-9A-Z]/g,"").replace(/[IL]/g,"1").replace(/O/g,"0"),AS=e=>String(e).replace(/[^0-9]/g,"");DE.exports={KEY_BYTES:Ya,IV_BYTES:kr,TAG_BYTES:Yo,PBKDF2_ITERS:$a,newKey:TS,sealChunk:NS,openChunk:gS,sealJson:hS,openJson:RS,wrapKeyWithPin:SS,unwrapKeyWithPin:OS,splitChunks:LS,canonicalCode:IS,canonicalPin:AS}});var PE=H((MA,jE)=>{"use strict";A();var UE=(bE(),X(CE)),yS=e=>new Promise((t,r)=>UE.gzip(e,(o,n)=>o?r(o):t(n))),wS=e=>new Promise((t,r)=>UE.gunzip(e,(o,n)=>o?r(o):t(n))),{getAppSetting:CS,setAppSetting:bS}=Ae(),{serializeVault:kS,applySnapshot:DS}=gr(),{KEY_BYTES:FS,IV_BYTES:xS,TAG_BYTES:US,newKey:MS,sealChunk:vS,openChunk:jS,sealJson:PS,openJson:WS,wrapKeyWithPin:HS,unwrapKeyWithPin:XS,splitChunks:BS,canonicalCode:GS,canonicalPin:$S}=FE(),xE="https://dracondex-transfer.netlify.app";function ME(e){let t;try{t=new URL(String(e))}catch{return!1}return t.protocol==="https:"?!0:t.protocol==="http:"&&["localhost","127.0.0.1","[::1]","::1"].includes(t.hostname)}function Vo(){let e=(CS("transfer:url")||"").replace(/\/+$/,"");return{url:e||xE,custom:!!e,default:xE}}function YS(e){let t=String(e||"").trim().replace(/\/+$/,"");return t&&!ME(t)?{ok:!1,code:"invalid_url"}:(bS("transfer:url",t),{ok:!0,...Vo()})}var $t=class extends Error{constructor(t,r){super(t),this.code=t,Object.assign(this,r||{})}};async function mt(e,{method:t="GET",token:r=null,json:o=null,body:n=null,raw:a=!1}={}){let{url:i}=Vo(),s={};r&&(s.authorization=`Bearer ${r}`),o&&(s["content-type"]="application/json"),n&&(s["content-type"]="application/octet-stream");let u;try{u=await fetch(`${i}${e}`,{method:t,headers:s,body:o?JSON.stringify(o):n})}catch{throw new $t("network")}if(a){if(!u.ok){let g=await u.json().catch(()=>null);throw new $t(g?.code||"server_error",g||{})}return D.from(await u.arrayBuffer())}let l=await u.json().catch(()=>null);if(!l||l.ok===!1)throw new $t(l?.code||"server_error",l||{});return l}var Yt=new Map,Fr=new Map;function vE(){let e=Date.now();for(let[t,r]of Yt)r.expiresAt&&e>r.expiresAt&&Yt.delete(t);for(let[t,r]of Fr)r.expiresAt&&e>r.expiresAt&&Fr.delete(t)}async function VS(e,{allowTypedCode:t=!0,name:r=null}={}){vE();let o=kS(e);if(!o)return{ok:!1,code:"not_found"};let n=D.from(JSON.stringify(o),"utf8"),a=n,i="none";try{a=await yS(n),i="gzip"}catch{}let s=MS(),u=await mt("/api/create",{method:"POST",json:{sizeBytes:a.length}}),l=BS(a,u.maxChunkBytes-xS-US);if(l.length>u.maxChunks)return{ok:!1,code:"too_large"};for(let L=0;L<l.length;L++)await mt(`/api/chunk/${u.transferId}/${L}`,{method:"PUT",token:u.uploadToken,body:vS(s,l[L])});let g={v:1,name:String(r||o?.nexus?.name||"Nexus"),sizeBytes:n.length,compression:i,createdAt:Date.now(),source:"exe"};await mt("/api/commit",{method:"POST",token:u.uploadToken,json:{transferId:u.transferId,chunkCount:l.length,sizeBytes:a.length,manifestEnc:PS(s,g),pinWrap:t?HS(s,u.code,u.pin):null}}),Yt.set(u.transferId,{key:s,uploadToken:u.uploadToken,code:u.code,pin:u.pin,expiresAt:u.expiresAt});let{url:m}=Vo();return{ok:!0,transferId:u.transferId,codeDisplay:u.codeDisplay,pinDisplay:u.pinDisplay,allowTypedCode:t,expiresAt:u.expiresAt,sizeBytes:n.length,uploadedBytes:a.length,link:`${m}/t/${u.code}#k=${s.toString("base64url")}&p=${u.pin}`}}async function qS(e){let t=Yt.get(e);return t?mt(`/api/status/${e}`,{token:t.uploadToken}):{ok:!1,code:"gone"}}async function JS(e){let t=Yt.get(e);return t?(Yt.delete(e),mt(`/api/cancel/${e}`,{method:"DELETE",token:t.uploadToken})):{ok:!0,status:"gone"}}async function KS(e,t,r=null){vE();let o=await mt("/api/verify",{method:"POST",json:{code:e,pin:t}}),n=null;if(r){try{n=D.from(String(r),"base64url")}catch{n=null}if(!n||n.length!==FS)return{ok:!1,code:"bad_key"}}else{if(!o.pinWrap)return{ok:!1,code:"qr_only"};try{n=XS(o.pinWrap,GS(e),$S(t))}catch{return{ok:!1,code:"bad_key"}}}let a;try{a=WS(n,o.manifestEnc)}catch{return{ok:!1,code:"bad_key"}}return Fr.set(o.transferId,{key:n,receiptToken:o.receiptToken,manifest:a,chunkCount:o.chunkCount,expiresAt:o.expiresAt}),{ok:!0,transferId:o.transferId,name:a.name,sizeBytes:a.sizeBytes,createdAt:a.createdAt,source:a.source||null,expiresAt:o.expiresAt}}async function zS(e,t){let r=Fr.get(e);if(!r)return{ok:!1,code:"gone"};let o=[];for(let s=0;s<r.chunkCount;s++){let u=await mt(`/api/chunk/${e}/${s}`,{token:r.receiptToken,raw:!0});o.push(jS(r.key,u))}let n=D.concat(o),a;try{let s=r.manifest.compression==="gzip"?await wS(n):n;a=JSON.parse(s.toString("utf8"))}catch{return{ok:!1,code:"bad_payload"}}let i=DS(t,a);if(!i||i.ok===!1)return i||{ok:!1,code:"apply_failed"};Fr.delete(e);try{await mt("/api/complete",{method:"POST",token:r.receiptToken,json:{transferId:e}})}catch{}return{ok:!0,name:r.manifest.name}}var Dr=e=>async(...t)=>{try{return await e(...t)}catch(r){return r instanceof $t?{ok:!1,code:r.code,...r.retryAfterMs?{retryAfterMs:r.retryAfterMs}:{}}:(console.error("transfer op failed:",r),{ok:!1,code:"server_error"})}};jE.exports={getTransferConfig:Vo,setTransferConfig:YS,isAllowedTransferUrl:ME,transferSend:Dr(VS),transferStatus:Dr(qS),transferCancel:Dr(JS),transferVerify:Dr(KS),transferReceive:Dr(zS)}});var HE=H((jA,WE)=>{"use strict";A();var{getDriveConfig:QS,setDriveConfig:ZS,driveConnect:eO,driveDisconnect:tO,driveStatus:rO}=Aa();WE.exports={id:"gdrive",labelKey:"cloudProviderGdrive",availability:"available",capabilities:{backup:!0,sync:!1},needsConfig:!0,getConfig:()=>QS(),setConfig:e=>ZS(e?.clientId,e?.clientSecret),connect:()=>eO(),disconnect:()=>tO(),status:()=>rO()}});var BE=H((WA,XE)=>{"use strict";A();var oO=[{id:"dropbox",labelKey:"cloudProviderDropbox",capabilities:{backup:!0,sync:!1},needsConfig:!0},{id:"onedrive",labelKey:"cloudProviderOnedrive",capabilities:{backup:!0,sync:!1},needsConfig:!0},{id:"webdav",labelKey:"cloudProviderWebdav",capabilities:{backup:!0,sync:!0},needsConfig:!0},{id:"s3",labelKey:"cloudProviderS3",capabilities:{backup:!0,sync:!0},needsConfig:!0}],Ja={ok:!1,code:"not_implemented"};function nO(e){return{...e,availability:"planned",getConfig:()=>({configured:!1}),setConfig:()=>Ja,connect:()=>Ja,disconnect:()=>Ja,status:()=>({ok:!0,configured:!1,connected:!1,planned:!0})}}XE.exports={PLANNED_SPECS:oO,plannedProvider:nO}});var JE=H((XA,qE)=>{"use strict";A();var{getAppSetting:Ka,setAppSetting:qo}=Ae(),aO=HE(),{PLANNED_SPECS:iO,plannedProvider:sO}=BE(),za="cloud:provider",GE=[aO,...iO.map(sO)],cO=new Map(GE.map(e=>[e.id,e]));function yt(e){return cO.get(String(e||""))||null}var $E=e=>`cloud:${e}:role`,YE=e=>`cloud:${e}:enabled`;function VE(e){return{enabled:Ka(YE(e))==="1",role:Ka($E(e))||"backup"}}function lO(){return{ok:!0,active:Ka(za)||null,providers:GE.map(e=>({id:e.id,labelKey:e.labelKey,availability:e.availability,capabilities:e.capabilities,needsConfig:!!e.needsConfig,...VE(e.id),configured:!!e.getConfig().configured}))}}function dO(e){if(e===null||e==="")return qo(za,""),{ok:!0,active:null};let t=yt(e);return t?t.availability!=="available"?{ok:!1,code:"not_implemented"}:(qo(za,t.id),{ok:!0,active:t.id}):{ok:!1,code:"unknown_provider"}}function EO(e,t){let r=yt(e);if(!r)return{ok:!1,code:"unknown_provider"};if(t&&"enabled"in t&&qo(YE(e),t.enabled?"1":"0"),t&&"role"in t){let o=String(t.role);if(!["backup","sync","both"].includes(o))return{ok:!1,code:"bad_role"};if(o!=="backup"&&!r.capabilities.sync)return{ok:!1,code:"unsupported_role"};if(o!=="sync"&&!r.capabilities.backup)return{ok:!1,code:"unsupported_role"};qo($E(e),o)}return{ok:!0,...VE(e)}}var uO=e=>{let t=yt(e);return t?{ok:!0,config:t.getConfig()}:{ok:!1,code:"unknown_provider"}},pO=(e,t)=>{let r=yt(e);return r?r.setConfig(t):{ok:!1,code:"unknown_provider"}},_O=e=>{let t=yt(e);return t?t.connect():{ok:!1,code:"unknown_provider"}},mO=e=>{let t=yt(e);return t?t.disconnect():{ok:!1,code:"unknown_provider"}},fO=e=>{let t=yt(e);return t?t.status():{ok:!1,code:"unknown_provider"}};qE.exports={cloudListProviders:lO,cloudSetActive:dO,cloudSetProviderPrefs:EO,cloudGetConfig:uO,cloudSetConfig:pO,cloudConnect:_O,cloudDisconnect:mO,cloudStatus:fO}});var zE=H((GA,KE)=>{"use strict";A();var TO=te(),NO=Kn(),gO=Ac(),hO=Ie(),RO=bc(),SO=zn(),OO=Zn(),LO=xc(),IO=Mc(),AO=jc(),yO=Rt(),wO=Et(),CO=ra(),bO=El(),kO=Er(),DO=aa(),FO=ia(),xO=fl(),UO=Nl(),MO=hl(),vO=Sl(),jO=Ae(),PO=yl(),WO=gr(),HO=md(),XO=Aa(),BO=Xd(),GO=fE(),$O=SE(),YO=IE(),VO=PE(),qO=JE();KE.exports={...TO,...NO,...gO,...hO,...RO,...SO,...OO,...LO,...IO,...AO,...yO,...wO,...CO,...bO,...kO,...DO,...FO,...xO,...UO,...MO,...vO,...jO,...PO,...WO,...HO,...XO,...BO,...GO,...$O,...YO,...VO,...qO}});var lu=H(()=>{A();var{app:_e,BrowserWindow:ee,ipcMain:Fe,dialog:Se,Menu:QE,protocol:Ko,shell:ti}=(le(),X(me)),we=(Le(),X(be)),V=(ge(),X(xe)),c=zE(),{isSecretKey:JO}=pr(),{windowNexus:Jo,runWithVault:tu,currentNexusId:KO}=gt(),zO=_e.isPackaged,ZE=V.dirname(_e.getPath("exe")),eu=U.env.PORTABLE_EXECUTABLE_DIR||(we.existsSync(V.join(ZE,"portable.flag"))?ZE:null),zo=zO?eu?V.join(eu,"novel-manager-data"):V.join(_e.getPath("appData"),"DraconDex","novel-manager-data"):U.env.DRACONDEX_DATA_DIR||V.join(M,"..","tmp-user-data");we.existsSync(zo)||we.mkdirSync(zo,{recursive:!0});var QO=V.join(zo,"electron-user-data");_e.setPath("userData",QO);_e.commandLine.appendSwitch("no-sandbox");Ko&&Ko.registerSchemesAsPrivileged([{scheme:"ddx-file",privileges:{secure:!0,supportFetchAPI:!0,stream:!0,bypassCSP:!0}}]);_e.requestSingleInstanceLock()||_e.quit();_e.on("second-instance",()=>{let e=ee.getAllWindows()[0];e&&(e.isMinimized()&&e.restore(),e.focus())});var Za=new Set;function Zo(e,t){let r=new ee({width:t?900:1280,height:t?650:800,minWidth:960,minHeight:600,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:V.join(M,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:V.join(M,"preload.js"),contextIsolation:!0,nodeIntegration:!1,webviewTag:!0}});if(ZO(r.webContents),e){let n=Number(e);Jo.set(r.id,n);try{c.refreshVaultCounts(n)}catch{}try{c.touchVaultOpened(n)}catch{}c.pinVault(n),r.on("closed",()=>{Jo.delete(r.id);try{c.refreshVaultCounts(n)}catch{}[...Jo.values()].includes(n)||(c.unpinVault(n),c.closeVault(n))})}t&&(Za.add(r.id),r.on("closed",()=>Za.delete(r.id)));let o=new URLSearchParams;e&&o.set("nexus",e),t&&(o.set("tab",t),o.set("popup","1")),r.loadFile(V.join(M,"index.html"),o.toString()?{search:o.toString()}:void 0)}var Qa=new Set;function ri(){for(let t of Qa){let r=ee.fromId(t);if(r&&!r.isDestroyed()){r.isMinimized()&&r.restore(),r.focus();return}}let e=new ee({width:760,height:560,minWidth:640,minHeight:480,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:V.join(M,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:V.join(M,"preload.js"),contextIsolation:!0,nodeIntegration:!1}});Qa.add(e.id),e.on("closed",()=>Qa.delete(e.id)),e.loadFile(V.join(M,"index.html"),{search:"welcome=1"})}var Qo=new Map;function en(e){for(let[t,r]of Qo)if(r===e)return ee.fromId(t);return null}var ei=new Map;function ZO(e){let t=null;e.on("will-attach-webview",(r,o,n)=>{t=null;let a=null;try{let s=new URL(String(n.src||""));if(s.protocol!=="file:"){r.preventDefault();return}a=decodeURIComponent(s.pathname),U.platform==="win32"&&/^\/[A-Za-z]:/.test(a)&&(a=a.slice(1))}catch{r.preventDefault();return}let i=c.pluginByPanelPath(a);if(!i){r.preventDefault();return}delete o.preloadURL,o.preload=V.join(M,"preload-plugin.js"),o.nodeIntegration=!1,o.nodeIntegrationInSubFrames=!1,o.contextIsolation=!0,o.sandbox=!0,o.webviewTag=!1,n.nodeintegration="off",n.allowpopups="false",t=i.id}),e.on("did-attach-webview",(r,o)=>{if(t==null)return;let n=t;t=null,ei.set(o.id,n),o.on("destroyed",()=>{ei.delete(o.id),cu(o.id)}),o.setWindowOpenHandler(()=>({action:"deny"})),o.on("will-navigate",(a,i)=>{let s=null;try{s=decodeURIComponent(new URL(i).pathname)}catch{}(!s||!c.pluginByPanelPath(s))&&a.preventDefault()})})}function eL(e){let t;try{t=new URL(String(e||""))}catch{return null}if(t.protocol!=="file:")return null;let r=decodeURIComponent(t.pathname);return U.platform==="win32"&&/^\/[A-Za-z]:/.test(r)&&(r=r.slice(1)),r}var tL=V.join(M,"index.html"),rL=e=>`persist:plugin-${e}`;function oL(e){return!e||e.__ddxLocked||(e.__ddxLocked=!0,e.setPermissionRequestHandler((t,r,o)=>o(!1)),e.setPermissionCheckHandler(()=>!1)),e}_e.on("web-contents-created",(e,t)=>{t.setWindowOpenHandler(()=>({action:"deny"})),oL(t.session),t.on("will-navigate",(r,o)=>{let n=eL(o);n&&V.normalize(n)===tL||n&&c.pluginByOwnedPath(n)||r.preventDefault()})});function nL(e){let t=en(e.id);if(t&&!t.isDestroyed())return t.focus(),t;let r=new ee({width:900,height:650,minWidth:480,minHeight:360,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:V.join(M,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:V.join(M,"preload-plugin.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!0,webviewTag:!1,partition:rL(e.plugin_key)}});Qo.set(r.id,e.id);let o=r.webContents.id;return r.on("closed",()=>{Qo.delete(r.id),cu(o)}),r.loadFile(V.join(zo,"plugins",e.plugin_key,e.entry_html)),r}_e.whenReady().then(()=>{if(QE.setApplicationMenu(QE.buildFromTemplate([{role:"viewMenu"}])),aL(),c.migratePluginDir(),c.getAppSetting("startupMode")==="latest"){let t=c.listVaults().filter(r=>!r.missing&&r.last_opened_at).sort((r,o)=>o.last_opened_at>r.last_opened_at?1:-1);if(t.length){Zo(t[0].id);return}}ri()});function aL(){Ko&&Ko.handle("ddx-file",async e=>{let t=String(e.url).replace(/^ddx-file:(\/\/)?/,"").split(/[?#/]/)[0],[r,o]=t.split("-"),n=Number(r),a=Number(o);if(!Number.isInteger(n)||n<=0||!Number.isInteger(a)||a<=0)return new Response(null,{status:400});let i;try{i=await tu(n,()=>c.getImportFile(a))}catch{return new Response(null,{status:404})}let s=(i?.file_type||"").toLowerCase();if(!i||!ni.has(s))return new Response(null,{status:404});try{let u=await we.promises.stat(i.file_path),l=`"${u.mtimeMs}-${u.size}"`;return e.headers.get("if-none-match")===l?new Response(null,{status:304,headers:{ETag:l,"Cache-Control":"no-cache"}}):new Response(await we.promises.readFile(i.file_path),{headers:{"Content-Type":au(s),ETag:l,"Cache-Control":"no-cache"}})}catch{return new Response(null,{status:404})}})}_e.on("window-all-closed",()=>{U.platform!=="darwin"&&_e.quit()});_e.on("activate",()=>{ee.getAllWindows().length===0&&ri()});var E=(e,t)=>Fe.handle(e,async(r,...o)=>{let n=Jo.get(ee.fromWebContents(r.sender)?.id)??null;try{return await tu(n,()=>t(...o))}catch(a){throw console.error(`IPC handler ${e} error:`,a),a}});E("db:exportFile",async()=>{let t=`${(c.getNexus(KO())?.name||"nexus").replace(/[\\/:*?"<>|]/g,"_")}-backup-${new Date().toISOString().slice(0,10)}.ddx`,r=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Export Database",defaultPath:V.join(_e.getPath("documents"),t),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return r.canceled||!r.filePath?{canceled:!0}:(await c.exportDatabaseTo(r.filePath),{canceled:!1,filePath:r.filePath})});var oi=new Set;E("db:pickImportFile",async()=>{let e=await Se.showOpenDialog(ee.getFocusedWindow(),{title:"Import Database (.ddx / .mdx / .db)",properties:["openFile"],filters:[{name:"DraconDex File",extensions:["ddx","mdx","db"]}]});return e.canceled||!e.filePaths?.[0]?{canceled:!0}:(oi.add(V.resolve(e.filePaths[0])),{canceled:!1,filePath:e.filePaths[0]})});E("db:importMergeFile",async(e,t)=>e?oi.has(V.resolve(String(e)))?{canceled:!1,summary:c.importDatabaseMerge(e,t??null)}:{canceled:!0}:{canceled:!0});E("db:exportNexusFile",async(e,t)=>{let r=`${String(t||"nexus").replace(/[\\/:*?"<>|]/g,"_")}.json`,o=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Export Nexus",defaultPath:V.join(_e.getPath("documents"),r),filters:[{name:"DraconDex Nexus Snapshot",extensions:["json"]}]});return o.canceled||!o.filePath?{ok:!1,canceled:!0}:c.exportNexusFile(e,o.filePath)});E("db:importNexusFile",async e=>{let t=await Se.showOpenDialog(ee.getFocusedWindow(),{title:"Import Nexus",properties:["openFile"],filters:[{name:"DraconDex Nexus Snapshot",extensions:["json"]}]});return t.canceled||!t.filePaths?.[0]?{ok:!1,canceled:!0}:c.importNexusFile(e,t.filePaths[0])});E("db:exportModuleFile",async(e,t,r)=>{let o=`${String(r||"module").replace(/[\\/:*?"<>|]/g,"_")}.mdx`,n=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Export Module",defaultPath:V.join(_e.getPath("documents"),o),filters:[{name:"DraconDex Module File",extensions:["mdx"]}]});return n.canceled||!n.filePath?{ok:!1,canceled:!0}:c.exportModuleFile(e,t,n.filePath)});E("db:importModuleFile",async(e,t)=>{let r=await Se.showOpenDialog(ee.getFocusedWindow(),{title:"Import Module",properties:["openFile"],filters:[{name:"DraconDex Module File",extensions:["mdx","json"]}]});return r.canceled||!r.filePaths?.[0]?{ok:!1,canceled:!0}:c.importModuleFile(e,t,r.filePaths[0])});E("db:importModuleFileAt",async(e,t,r)=>r?oi.has(V.resolve(String(r)))?c.importModuleFile(e,t,r):{ok:!1,canceled:!0}:{ok:!1,canceled:!0});E("nexus:getAll",()=>c.getNexuses());E("nexus:get",e=>c.getNexus(e));var ru=new Set,ou=new Set;E("nexus:defaultPath",()=>c.vaultsDir());E("nexus:pickLocation",async e=>{let t=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Save Nexus As",defaultPath:c.vaultDefaultPath(e||"",0).replace(/-0\.ddx$/,".ddx"),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});if(t.canceled||!t.filePath)return{canceled:!0};let r=V.resolve(t.filePath);return ru.add(r),{canceled:!1,filePath:r}});E("nexus:create",(e,t,r,o)=>{let n=o&&ru.has(V.resolve(String(o)))?V.resolve(String(o)):null;return c.createNexus(e,t,r,n)});E("nexus:duplicate",e=>c.duplicateNexus(e));E("nexus:exportFile",async e=>{let t=c.getNexus(e);if(!t)return{ok:!1,code:"not_found"};let r=String(t.name||"nexus").replace(/[\\/:*?"<>|]/g,"_"),o=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Export Nexus",defaultPath:V.join(_e.getPath("documents"),`${r}.ddx`),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return o.canceled||!o.filePath?{ok:!1,canceled:!0}:c.exportNexusVaultFile(e,o.filePath)});E("nexus:shareFile",async e=>{let t=c.getNexus(e);if(!t)return{ok:!1,code:"not_found"};let r=String(t.name||"nexus").replace(/[\\/:*?"<>|]/g,"_"),o=await Se.showSaveDialog(ee.getFocusedWindow(),{title:"Share Nexus",defaultPath:V.join(_e.getPath("desktop"),`${r}.ddx`),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});if(o.canceled||!o.filePath)return{ok:!1,canceled:!0};let n=c.exportNexusVaultFile(e,o.filePath);if(!n.ok)return n;if(ou.add(V.resolve(n.filePath)),U.platform==="darwin")try{let{ShareMenu:a}=(le(),X(me));return new a({filePaths:[n.filePath]}).popup({window:ee.getFocusedWindow()}),{...n,native:!0}}catch{}return{...n,native:!1}});E("nexus:revealFile",e=>{let t=c.getNexus(e);return t?.file_path?(ti.showItemInFolder(t.file_path),{ok:!0}):{ok:!1,code:"not_found"}});E("shell:revealPath",e=>!c.getNexuses().some(r=>r.file_path&&V.resolve(r.file_path)===V.resolve(String(e||"")))&&!ou.has(V.resolve(String(e||"")))?{ok:!1,code:"not_found"}:(ti.showItemInFolder(String(e)),{ok:!0}));E("shell:composeMail",(e,t)=>{let r=`mailto:?subject=${encodeURIComponent(String(e||""))}&body=${encodeURIComponent(String(t||""))}`;return ti.openExternal(r),{ok:!0}});E("nexus:relink",async e=>{let t=await Se.showOpenDialog(ee.getFocusedWindow(),{title:"Locate Nexus File",properties:["openFile"],filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return t.canceled||!t.filePaths?.[0]?{ok:!1,canceled:!0}:c.relinkNexusFile(e,t.filePaths[0])});E("nexus:update",(e,t,r,o)=>c.updateNexus(e,t,r,o));E("nexus:delete",e=>c.deleteNexus(e));E("note:getFolders",e=>c.getNoteFolders(e));E("note:createFolder",(e,t,r,o)=>c.createNoteFolder(e,t,r,o));E("note:updateFolder",(e,t,r,o)=>c.updateNoteFolder(e,t,r,o));E("note:deleteFolder",e=>c.deleteNoteFolder(e));E("note:getAll",e=>c.getNotes(e));E("note:get",e=>c.getNote(e));E("note:create",(e,t,r,o)=>c.createNote(e,t,r,o));E("note:update",(e,t,r,o,n)=>c.updateNote(e,t,r,o,n));E("note:updateContent",(e,t)=>c.updateNoteContent(e,t));E("note:delete",e=>c.deleteNote(e));E("module:getTree",e=>c.getTree(e));E("module:getNestItems",e=>c.getNestItems(e));E("module:get",e=>c.getModule(e));E("module:create",e=>c.createModule(e));E("module:update",(e,t)=>c.updateModule(e,t));E("module:updateDescription",(e,t)=>c.updateModuleDescription(e,t));E("module:delete",e=>c.deleteModule(e));E("module:duplicate",e=>c.duplicateModule(e));E("module:move",(e,t,r,o)=>c.moveModule(e,t,r,o));E("module:count",e=>c.countModules(e));E("module:getAttrs",e=>c.getModuleAttrs(e));E("module:upsertAttr",(e,t,r,o)=>c.upsertModuleAttr(e,t,r,o));E("module:deleteAttr",e=>c.deleteModuleAttr(e));E("module:getUi",e=>c.getModuleUi(e));E("module:setUi",(e,t,r)=>c.setModuleUi(e,t,r));E("module:getTags",e=>c.getModuleTags(e));E("module:setTags",(e,t)=>c.setModuleTags(e,t));E("module:getLinks",e=>c.getModuleLinks(e));E("module:getInspector",e=>c.getModuleInspector(e));E("module:getChildStats",e=>c.getChildModuleStats(e));E("history:undo",()=>c.historyUndo());E("history:redo",()=>c.historyRedo());E("classifier:setCatType",(e,t)=>c.setCatType(e,t));E("classifier:getObjects",e=>c.getObjects(e));E("classifier:getObjectsFull",e=>c.getObjectsFull(e));E("classifier:getObject",e=>c.getObject(e));E("classifier:createObject",(e,t,r,o)=>c.createObject(e,t,r,o));E("classifier:updateObject",(e,t,r,o)=>c.updateObject(e,t,r,o));E("classifier:updateObjectNote",(e,t)=>c.updateObjectNote(e,t));E("classifier:deleteObject",e=>c.deleteObject(e));E("classifier:getTemplates",e=>c.getTemplates(e));E("classifier:getObjectTemplates",(e,t)=>c.getObjectTemplates(e,t));E("classifier:createTemplate",(e,t,r,o,n,a,i)=>c.createTemplate(e,t,r,o,n,a,i));E("classifier:updateTemplate",(e,t,r,o,n,a)=>c.updateTemplate(e,t,r,o,n,a));E("classifier:deleteTemplate",e=>c.deleteTemplate(e));E("classifier:countObjectTemplates",e=>c.countObjectTemplates(e));E("classifier:getAttrs",e=>c.getAttrs(e));E("classifier:upsertAttr",(e,t,r)=>c.upsertAttr(e,t,r));E("classifier:upsertAttrCondition",(e,t,r)=>c.upsertAttrCondition(e,t,r));E("classifier:getLevels",e=>c.getLevels(e));E("classifier:createLevel",(e,t)=>c.createLevel(e,t));E("classifier:updateLevelField",(e,t,r)=>c.updateLevelField(e,t,r));E("classifier:deleteLevel",e=>c.deleteLevel(e));E("classifier:moveLevels",(e,t,r)=>c.moveLevels(e,t,r));E("wanderer:list",e=>c.getMapEvents(e));E("wanderer:create",(e,t,r,o,n,a)=>c.createMapEvent(e,t,r,o,n,a));E("wanderer:update",(e,t,r,o,n,a)=>c.updateMapEvent(e,t,r,o,n,a));E("wanderer:delete",e=>c.deleteMapEvent(e));E("narrator:getDialogues",e=>c.getDialogues(e));E("narrator:createDialogue",(e,t,r,o,n)=>c.createDialogue(e,t,r,o,n));E("narrator:updateDialogue",(e,t,r)=>c.updateDialogue(e,t,r));E("narrator:updateDialogueDescription",(e,t)=>c.updateDialogueDescription(e,t));E("narrator:updateDialoguePos",(e,t,r)=>c.updateDialoguePos(e,t,r));E("narrator:deleteDialogue",e=>c.deleteDialogue(e));E("narrator:getEdges",e=>c.getEdges(e));E("narrator:createEdge",(e,t,r,o)=>c.createEdge(e,t,r,o));E("narrator:updateEdgeLabel",(e,t)=>c.updateEdgeLabel(e,t));E("narrator:deleteEdge",e=>c.deleteEdge(e));E("narrator:getTalks",e=>c.getTalks(e));E("narrator:createTalk",(e,t,r,o,n)=>c.createTalk(e,t,r,o,n));E("narrator:updateTalk",(e,t,r,o)=>c.updateTalk(e,t,r,o));E("narrator:deleteTalk",e=>c.deleteTalk(e));E("narrator:moveTalks",(e,t)=>c.moveTalks(e,t));E("narrator:getChoiceOptions",e=>c.getChoiceOptions(e));E("narrator:createChoiceOption",(e,t)=>c.createChoiceOption(e,t));E("narrator:updateChoiceOption",(e,t,r,o,n)=>c.updateChoiceOption(e,t,r,o,n));E("narrator:deleteChoiceOption",e=>c.deleteChoiceOption(e));E("author:getChapters",e=>c.getBookChapters(e));E("author:createChapter",(e,t)=>c.createBookChapter(e,t));E("author:renameChapter",(e,t)=>c.renameBookChapter(e,t));E("author:updateContent",(e,t)=>c.updateBookChapterContent(e,t));E("author:deleteChapter",e=>c.deleteBookChapter(e));E("author:setChapterLabel",(e,t)=>c.setBookChapterLabel(e,t));E("author:moveChapter",(e,t)=>c.moveBookChapter(e,t));E("chatscribe:getSessions",e=>c.getChatSessions(e));E("chatscribe:createSession",(e,t)=>c.createChatSession(e,t));E("chatscribe:renameSession",(e,t)=>c.renameChatSession(e,t));E("chatscribe:deleteSession",e=>c.deleteChatSession(e));E("chatscribe:getMessages",e=>c.getChatMessages(e));E("chatscribe:createMessage",(e,t)=>c.createChatMessage(e,t));E("chatscribe:updateMessage",(e,t)=>c.updateChatMessage(e,t));E("chatscribe:deleteMessage",e=>c.deleteChatMessage(e));E("chatscribe:updateMessageStyle",(e,t,r)=>c.updateMessageStyle(e,t,r));E("calendar:listTemplates",e=>c.listCalendarTemplates(e));E("calendar:saveTemplate",(e,t,r)=>c.saveCalendarTemplate(e,t,r));E("calendar:deleteTemplate",e=>c.deleteCalendarTemplate(e));E("calendar:ensureBuiltin",(e,t,r)=>c.ensureBuiltinCalendarTemplate(e,t,r));E("viewer:index",e=>c.viewerIndex(e));E("viewer:getRelations",e=>c.getEntityRelations(e));E("viewer:createRelation",(e,t,r,o,n)=>c.createEntityRelation(e,t,r,o,n));E("viewer:updateRelation",(e,t,r)=>c.updateEntityRelation(e,t,r));E("viewer:deleteRelation",e=>c.deleteEntityRelation(e));E("sketcher:getPages",e=>c.getSketchPages(e));E("sketcher:createPage",(e,t)=>c.createSketchPage(e,t));E("sketcher:renamePage",(e,t)=>c.renameSketchPage(e,t));E("sketcher:movePage",(e,t)=>c.moveSketchPage(e,t));E("sketcher:deletePage",e=>c.deleteSketchPage(e));E("sketcher:getStrokes",e=>c.getSketchStrokes(e));E("sketcher:addStroke",(e,t,r,o)=>c.createSketchStroke(e,t,r,o));E("sketcher:deleteStroke",e=>c.deleteSketchStroke(e));E("sketcher:getPins",e=>c.getSketchPins(e));E("sketcher:addPin",(e,t,r,o)=>c.createSketchPin(e,t,r,o));E("sketcher:movePin",(e,t,r)=>c.moveSketchPin(e,t,r));E("sketcher:deletePin",e=>c.deleteSketchPin(e));var nu=new Set(["png","jpg","jpeg","gif","webp","svg","md","txt","docx"]),ni=new Set(["png","jpg","jpeg","gif","webp","svg"]),au=e=>e==="svg"?"image/svg+xml":`image/${e==="jpg"?"jpeg":e}`,iu=new Set,iL=e=>{let t;try{t=V.resolve(String(e||""))}catch{return!1}for(let r of iu){let o=V.relative(r,t);if(o&&!o.startsWith("..")&&!V.isAbsolute(o))return!0}return!1};E("importdock:list",e=>c.getImportFiles(e));E("importdock:add",(e,t)=>{let r=(Array.isArray(t)?t:[]).filter(o=>iL(o?.path)).map(o=>({...o,type:V.extname(String(o.path||"")).slice(1).toLowerCase()})).filter(o=>nu.has(o.type));return c.addImportFiles(e,r)});E("importdock:setLinker",(e,t)=>c.setImportLinker(e,t));E("importdock:setUseAsImage",(e,t)=>c.setImportUseAsImage(e,t));E("importdock:delete",e=>c.deleteImportFile(e));E("importdock:displayImages",e=>c.getDisplayImages(e));E("importdock:pickFolder",async()=>{let e=ee.getFocusedWindow(),t=await Se.showOpenDialog(e,{properties:["openDirectory"]});if(t.canceled||!t.filePaths?.length)return{canceled:!0};let r=t.filePaths[0];iu.add(V.resolve(r));let o=[],n=a=>{for(let i of we.readdirSync(a,{withFileTypes:!0})){let s=V.join(a,i.name);if(i.isDirectory()){n(s);continue}let u=V.extname(i.name).slice(1).toLowerCase();nu.has(u)&&o.push({name:i.name,path:s,type:u,size:we.statSync(s).size,folder:V.basename(r)+(V.dirname(s)===r?"":"/"+V.relative(r,V.dirname(s)).replace(/\\/g,"/"))})}};return n(r),{folder:V.basename(r),files:o}});E("importdock:readFile",async e=>{let t=c.getImportFile(e);if(!t)return null;let r=(t.file_type||"").toLowerCase();try{return ni.has(r)?(await we.promises.access(t.file_path),{kind:"image"}):r==="md"||r==="txt"?{kind:r,text:await we.promises.readFile(t.file_path,"utf8")}:{kind:"binary"}}catch(o){return{kind:"error",message:String(o.message||o)}}});E("importdock:readFiles",async e=>{let t={};return await Promise.all((e||[]).map(async r=>{let o=c.getImportFile(r);if(!o)return;let n=(o.file_type||"").toLowerCase();if(ni.has(n))try{t[r]=`data:${au(n)};base64,${(await we.promises.readFile(o.file_path)).toString("base64")}`}catch{}})),t});E("versions:list",e=>c.listVersions(e));E("versions:restore",e=>c.restoreVersion(e));var sL=new Set(["versionLimit","startupMode"]),su=e=>sL.has(String(e))&&!JO(e);E("setting:get",e=>su(e)?c.getAppSetting(e):null);E("setting:set",(e,t)=>su(e)?c.setAppSetting(e,t):{ok:!1});E("sync:getConfig",()=>c.getSyncConfig());E("sync:setConfig",(e,t)=>c.setSyncConfig(e,t));E("sync:googleLogin",(e,t)=>c.syncGoogleLogin(e,t));E("sync:googleLogout",()=>c.syncGoogleLogout());E("sync:authStatus",()=>c.syncAuthStatus());E("sync:status",e=>c.syncStatus(e));E("sync:push",(e,t)=>c.syncPushVault(e,t));E("sync:pull",(e,t)=>c.syncPullVault(e,t));E("sync:pullByToken",(e,t,r)=>c.syncPullByToken(e,t,r));E("sync:deleteUpload",e=>c.syncDeleteUpload(e));E("transfer:getConfig",()=>c.getTransferConfig());E("transfer:setConfig",e=>c.setTransferConfig(e));E("transfer:send",(e,t)=>c.transferSend(e,t||{}));E("transfer:status",e=>c.transferStatus(e));E("transfer:cancel",e=>c.transferCancel(e));E("transfer:verify",(e,t,r)=>c.transferVerify(e,t,r||null));E("transfer:receive",(e,t)=>c.transferReceive(e,t));E("supabase:getSetup",()=>c.getSupabaseSetup());E("supabase:setSetup",(e,t)=>c.setSupabaseSetup(e,t));E("supabase:clearSetup",()=>c.clearSupabaseSetup());E("supabase:getSql",()=>c.getSupabaseSetupSql());E("supabase:check",(e,t)=>c.checkSupabaseProject(e,t));E("supabase:install",(e,t,r)=>c.installSupabaseSchema(e,t,r));E("supabase:openDash",e=>c.openSupabaseDashboard(e));E("drive:getConfig",()=>c.getDriveConfig());E("drive:setConfig",(e,t)=>c.setDriveConfig(e,t));E("drive:connect",()=>c.driveConnect());E("drive:disconnect",()=>c.driveDisconnect());E("drive:status",()=>c.driveStatus());E("drive:setAutoBackup",e=>c.driveSetAutoBackup(e));E("drive:setBackupLayout",e=>c.driveSetBackupLayout(e));E("drive:setBackupDdx",e=>c.driveSetBackupDdx(e));E("drive:backupNow",e=>c.driveBackupNow(e));E("drive:restoreLayout",()=>c.driveRestoreLayoutProfile());E("drive:restoreDatabase",()=>c.driveRestoreDatabase());E("drive:getBackupLog",()=>c.driveGetBackupLog());E("drive:listLayoutSlots",()=>c.driveListLayoutSlots());E("drive:saveLayoutSlot",(e,t)=>c.driveSaveLayoutSlot(e,t));E("drive:restoreLayoutSlot",e=>c.driveRestoreLayoutSlot(e));E("drive:deleteLayoutSlot",e=>c.driveDeleteLayoutSlot(e));E("cloud:listProviders",()=>c.cloudListProviders());E("cloud:setActive",e=>c.cloudSetActive(e));E("cloud:setPrefs",(e,t)=>c.cloudSetProviderPrefs(e,t));E("cloud:getConfig",e=>c.cloudGetConfig(e));E("cloud:setConfig",(e,t)=>c.cloudSetConfig(e,t));E("cloud:connect",e=>c.cloudConnect(e));E("cloud:disconnect",e=>c.cloudDisconnect(e));E("cloud:status",e=>c.cloudStatus(e));E("update:check",()=>c.checkForUpdate());E("update:dismiss",e=>c.dismissUpdate(e));E("update:openDownload",e=>c.openUpdateDownload(e));E("update:getAutoCheck",()=>c.getAutoCheck());E("update:setAutoCheck",e=>c.setAutoCheck(e));E("pkg:list",()=>c.pkgList());E("pkg:active",()=>c.pkgActive());E("pkg:catalog",e=>c.pkgCatalog(e));E("pkg:install",(e,t)=>c.pkgInstall(e,t));E("pkg:uninstall",e=>c.pkgUninstall(e));E("pkg:setEnabled",(e,t)=>c.pkgSetEnabled(e,t));E("plugin:list",()=>c.pluginList());E("plugin:listOrgRepos",()=>c.pluginListOrgRepos());E("plugin:preview",e=>c.pluginPreview(e));E("plugin:install",e=>c.pluginInstall(e));E("plugin:installDependency",(e,t)=>c.pluginInstallDependency(e,t));E("plugin:uninstall",e=>en(e)?{ok:!1,code:"running"}:c.pluginUninstall(e));E("plugin:launch",e=>{let t=c.pluginGetById(e);if(!t)return{ok:!1,code:"not_found"};let r=c.pluginMissingDeps(e);return r.length?{ok:!1,code:"missing_dependency",missing:r}:(nL(t),{ok:!0})});E("plugin:stop",e=>{let t=en(e);return t&&!t.isDestroyed()&&t.close(),{ok:!0}});E("plugin:isRunning",e=>!!en(e));function ft(e){let t=Qo.get(ee.fromWebContents(e.sender)?.id);if(t)return t;let r=ei.get(e.sender.id);if(r)return r;throw new Error("not a plugin window")}Fe.handle("pluginapi:table:getSchema",(e,t)=>c.pluginApiGetSchema(ft(e),t));Fe.handle("pluginapi:table:query",(e,t,r)=>c.pluginApiQuery(ft(e),t,r));Fe.handle("pluginapi:table:insert",(e,t,r)=>c.pluginApiInsert(ft(e),t,r));Fe.handle("pluginapi:table:update",(e,t,r,o)=>c.pluginApiUpdate(ft(e),t,r,o));Fe.handle("pluginapi:table:delete",(e,t,r)=>c.pluginApiDelete(ft(e),t,r));var Vt=new Map,cL=0;function cu(e){for(let[t,r]of Vt)if(r.contentsId===e){try{r.abort()}catch{}Vt.delete(t)}}Fe.handle("pluginapi:net:fetch",(e,t,r)=>c.pluginNetFetch(ft(e),t,r));Fe.handle("pluginapi:net:stream:start",async(e,t,r)=>{let o=ft(e),n=e.sender,a=`s${++cL}`,i=(u,...l)=>{n.isDestroyed()||n.send(u,a,...l)},s=await c.pluginNetStream(o,t,r,{onChunk:u=>i("pluginapi:net:stream:chunk",u),onEnd:u=>{Vt.delete(a),i("pluginapi:net:stream:end",u)}});return Vt.set(a,{abort:s,contentsId:n.id}),{streamId:a}});Fe.handle("pluginapi:net:stream:abort",(e,t)=>{let r=Vt.get(t);if(!r||r.contentsId!==e.sender.id)return{ok:!1};try{r.abort()}catch{}return Vt.delete(t),{ok:!0}});Fe.handle("pluginapi:oauth:authorize",(e,t)=>c.pluginOAuthAuthorize(ft(e),t));E("migrate:list",(e,t)=>c.listLegacyProjects(e,t));E("migrate:run",(e,t,r,o)=>c.migrateLegacy(e,t,r,o));E("migrate:preview",e=>c.previewLegacyMigration(e));E("migrate:getPromptSeen",e=>c.getLegacyPromptSeen(e));E("migrate:setPromptSeen",e=>c.setLegacyPromptSeen(e));E("sagehut:stats",e=>c.sageHutStats(e));E("sagehut:linkerList",e=>c.sageHutLinkerList(e));E("designer:getNodes",e=>c.getDesignNodes(e));E("designer:createNode",(e,t,r,o,n,a,i)=>c.createDesignNode(e,t,r,o,n,a,i));E("designer:updateNode",(e,t,r,o)=>c.updateDesignNode(e,t,r,o));E("designer:moveNode",(e,t,r)=>c.moveDesignNode(e,t,r));E("designer:deleteNode",e=>c.deleteDesignNode(e));E("designer:getEdges",e=>c.getDesignEdges(e));E("designer:createEdge",(e,t,r,o)=>c.createDesignEdge(e,t,r,o));E("designer:updateEdge",(e,t)=>c.updateDesignEdgeLabel(e,t));E("designer:deleteEdge",e=>c.deleteDesignEdge(e));E("sketcher:exportPng",async(e,t)=>{let r=ee.getFocusedWindow(),o=await Se.showSaveDialog(r,{defaultPath:`${e||"sketch"}.png`,filters:[{name:"PNG",extensions:["png"]}]});return o.canceled||!o.filePath?{canceled:!0}:(we.writeFileSync(o.filePath,D.from(String(t).split(",")[1]||"","base64")),{saved:o.filePath})});E("author:exportDoc",async(e,t)=>{let r=ee.getFocusedWindow(),o=await Se.showSaveDialog(r,{defaultPath:`${e||"book"}.doc`,filters:[{name:"Word Document",extensions:["doc"]}]});if(o.canceled||!o.filePath)return{canceled:!0};let n=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'><head><meta charset="utf-8"></head><body>${t}</body></html>`;return we.writeFileSync(o.filePath,n,"utf8"),{saved:o.filePath}});E("drafter:exportFile",async(e,t,r)=>{let o=ee.getFocusedWindow(),n=await Se.showSaveDialog(o,{defaultPath:`${e||"document"}.${t||"md"}`,filters:[{name:"Markdown",extensions:["md"]},{name:"Text",extensions:["txt"]}]});return n.canceled||!n.filePath?{canceled:!0}:(we.writeFileSync(n.filePath,r??"","utf8"),{saved:n.filePath})});E("wiki:resolve",(e,t)=>c.resolveWikiName(e,t));E("wiki:backlinks",e=>c.getBacklinks(e));E("wiki:outgoing",e=>c.getOutgoingLinks(e));E("wiki:quickIndex",e=>c.quickIndex(e));E("wiki:entityPath",e=>c.getEntityPath(e));E("wiki:rebuild",()=>c.rebuildWikiIndex());E("wiki:resolveKeys",e=>c.resolveEntityKeys(e));E("wiki:linkCounts",e=>c.getLinkCounts(e));E("wiki:getGraph",e=>c.getGraph(e));E("wiki:renameTarget",(e,t,r)=>c.renameWikiTarget(e,t,r));E("color:getAll",()=>c.getColors());E("color:add",e=>c.addColor(e));E("color:markUsed",e=>c.markColorUsed(e));E("color:getRecent",()=>c.getRecentColors());E("color:delete",e=>c.deleteColor(e));E("color:getSymbolCollection",()=>c.getSymbolCollection());E("timeline:getAll",e=>c.getTimelines(e));E("timeline:create",(e,t,r)=>c.createTimeline(e,t,r));E("timeline:getModuleTimelines",e=>c.getModuleTimelines(e));E("timeline:createModuleTimeline",(e,t,r)=>c.createModuleTimeline(e,t,r));E("timeline:update",(e,t,r)=>c.updateTimeline(e,t,r));E("timeline:delete",e=>c.deleteTimeline(e));E("timeline:getOrCreateDate",(e,t,r,o,n)=>c.getOrCreateDate(e,t,r,o,n));E("timeline:getEvents",e=>c.getEvents(e));E("timeline:createEvent",(e,t,r,o,n,a)=>c.createEvent(e,t,r,o,n,a));E("timeline:updateEvent",(e,t,r,o,n,a)=>c.updateEvent(e,t,r,o,n,a));E("timeline:updateEventStory",(e,t)=>c.updateEventStory(e,t));E("timeline:updateEventIcon",(e,t,r)=>c.updateEventIcon(e,t,r));E("timeline:deleteEvent",e=>c.deleteEvent(e));E("map:getAll",e=>c.getMaps(e));E("map:create",(e,t,r)=>c.createMap(e,t,r));E("map:update",(e,t,r)=>c.updateMap(e,t,r));E("map:delete",e=>c.deleteMap(e));E("map:getAreas",e=>c.getMapAreas(e));E("map:createArea",(e,t,r)=>c.createMapArea(e,t,r));E("map:updateArea",(e,t,r)=>c.updateMapArea(e,t,r));E("map:deleteArea",e=>c.deleteMapArea(e));E("map:getPoints",e=>c.getMapAreaPoints(e));E("map:setPoints",(e,t)=>c.setMapAreaPoints(e,t));E("map:getModuleMap",e=>c.getModuleMap(e));E("map:getOrCreateModuleMap",e=>c.getOrCreateModuleMap(e));E("hashtag:getAll",()=>c.getHashtags());E("hashtag:create",(e,t)=>c.createHashtag(e,t));E("hashtag:update",(e,t,r)=>c.updateHashtag(e,t,r));E("hashtag:delete",e=>c.deleteHashtag(e));E("timeline:getEventTags",e=>c.getEventTags(e));E("timeline:setEventTags",(e,t)=>c.setEventTags(e,t));E("timeline:addEventTag",(e,t)=>c.addEventTag(e,t));E("timeline:removeEventTag",(e,t)=>c.removeEventTag(e,t));E("hashtag:getObjectsByTag",(e,t)=>c.getObjectsByHashtag(e,t));E("hashtag:getEventsByTag",(e,t)=>c.getEventsByHashtag(e,t));E("window:minimize",()=>{let e=ee.getFocusedWindow();e&&e.minimize()});E("window:toggleMaximize",()=>{let e=ee.getFocusedWindow();return e?(e.isMaximized()?e.unmaximize():e.maximize(),e.isMaximized()):!1});E("window:close",()=>{let e=ee.getFocusedWindow();e&&e.close()});E("window:openNexus",e=>{Zo(e)});E("window:openWelcome",()=>{ri()});Fe.handle("window:openNexusReplace",(e,t)=>{Zo(t);let r=ee.fromWebContents(e.sender);r&&!r.isDestroyed()&&r.close()});E("window:openBuilderTab",(e,t)=>{Zo(e,t)});Fe.handle("window:getId",e=>ee.fromWebContents(e.sender)?.id);E("window:moveTabToMain",(e,t)=>{let r=ee.getAllWindows().find(o=>!Za.has(o.id));return r&&!r.isDestroyed()&&r.webContents.send("builder:tabInbound",e,t),!!r})});A();zt();A();var{contextBridge:yu,ipcRenderer:yi}=(le(),X(me)),d=(e,...t)=>yi.invoke(e,...t);yu.exposeInMainWorld("api",{db:{exportFile:()=>d("db:exportFile"),pickImportFile:()=>d("db:pickImportFile"),importMergeFile:(e,t)=>d("db:importMergeFile",e,t),exportNexusFile:(e,t)=>d("db:exportNexusFile",e,t),importNexusFile:e=>d("db:importNexusFile",e),exportModuleFile:(e,t,r)=>d("db:exportModuleFile",e,t,r),importModuleFile:(e,t)=>d("db:importModuleFile",e,t),importModuleFileAt:(e,t,r)=>d("db:importModuleFileAt",e,t,r)},nexus:{getAll:()=>d("nexus:getAll"),get:e=>d("nexus:get",e),create:(e,t,r,o)=>d("nexus:create",e,t,r,o),update:(e,t,r,o)=>d("nexus:update",e,t,r,o),delete:e=>d("nexus:delete",e),defaultPath:e=>d("nexus:defaultPath",e),pickLocation:e=>d("nexus:pickLocation",e),relink:e=>d("nexus:relink",e),duplicate:e=>d("nexus:duplicate",e),exportFile:e=>d("nexus:exportFile",e),shareFile:e=>d("nexus:shareFile",e),revealFile:e=>d("nexus:revealFile",e)},shell:{revealPath:e=>d("shell:revealPath",e),composeMail:(e,t)=>d("shell:composeMail",e,t)},note:{getFolders:e=>d("note:getFolders",e),createFolder:(e,t,r,o)=>d("note:createFolder",e,t,r,o),updateFolder:(e,t,r,o)=>d("note:updateFolder",e,t,r,o),deleteFolder:e=>d("note:deleteFolder",e),getAll:e=>d("note:getAll",e),get:e=>d("note:get",e),create:(e,t,r,o)=>d("note:create",e,t,r,o),update:(e,t,r,o,n)=>d("note:update",e,t,r,o,n),updateContent:(e,t)=>d("note:updateContent",e,t),delete:e=>d("note:delete",e)},module:{getTree:e=>d("module:getTree",e),getNestItems:e=>d("module:getNestItems",e),get:e=>d("module:get",e),create:e=>d("module:create",e),update:(e,t)=>d("module:update",e,t),updateDescription:(e,t)=>d("module:updateDescription",e,t),delete:e=>d("module:delete",e),duplicate:e=>d("module:duplicate",e),move:(e,t,r,o)=>d("module:move",e,t,r,o),count:e=>d("module:count",e),getAttrs:e=>d("module:getAttrs",e),upsertAttr:(e,t,r,o)=>d("module:upsertAttr",e,t,r,o),deleteAttr:e=>d("module:deleteAttr",e),getUi:e=>d("module:getUi",e),setUi:(e,t,r)=>d("module:setUi",e,t,r),getTags:e=>d("module:getTags",e),setTags:(e,t)=>d("module:setTags",e,t),getLinks:e=>d("module:getLinks",e),getInspector:e=>d("module:getInspector",e),getChildStats:e=>d("module:getChildStats",e)},history:{undo:()=>d("history:undo"),redo:()=>d("history:redo")},classifier:{setCatType:(e,t)=>d("classifier:setCatType",e,t),getObjects:e=>d("classifier:getObjects",e),getObjectsFull:e=>d("classifier:getObjectsFull",e),getObject:e=>d("classifier:getObject",e),createObject:(e,t,r,o)=>d("classifier:createObject",e,t,r,o),updateObject:(e,t,r,o)=>d("classifier:updateObject",e,t,r,o),updateObjectNote:(e,t)=>d("classifier:updateObjectNote",e,t),deleteObject:e=>d("classifier:deleteObject",e),getTemplates:e=>d("classifier:getTemplates",e),getObjectTemplates:(e,t)=>d("classifier:getObjectTemplates",e,t),createTemplate:(e,t,r,o,n,a,i)=>d("classifier:createTemplate",e,t,r,o,n,a,i),updateTemplate:(e,t,r,o,n,a)=>d("classifier:updateTemplate",e,t,r,o,n,a),deleteTemplate:e=>d("classifier:deleteTemplate",e),countObjectTemplates:e=>d("classifier:countObjectTemplates",e),getAttrs:e=>d("classifier:getAttrs",e),upsertAttr:(e,t,r)=>d("classifier:upsertAttr",e,t,r),upsertAttrCondition:(e,t,r)=>d("classifier:upsertAttrCondition",e,t,r),getLevels:e=>d("classifier:getLevels",e),createLevel:(e,t)=>d("classifier:createLevel",e,t),updateLevelField:(e,t,r)=>d("classifier:updateLevelField",e,t,r),deleteLevel:e=>d("classifier:deleteLevel",e),moveLevels:(e,t,r)=>d("classifier:moveLevels",e,t,r)},wanderer:{list:e=>d("wanderer:list",e),create:(e,t,r,o,n,a)=>d("wanderer:create",e,t,r,o,n,a),update:(e,t,r,o,n,a)=>d("wanderer:update",e,t,r,o,n,a),delete:e=>d("wanderer:delete",e)},narrator:{getDialogues:e=>d("narrator:getDialogues",e),createDialogue:(e,t,r,o,n)=>d("narrator:createDialogue",e,t,r,o,n),updateDialogue:(e,t,r)=>d("narrator:updateDialogue",e,t,r),updateDialogueDescription:(e,t)=>d("narrator:updateDialogueDescription",e,t),updateDialoguePos:(e,t,r)=>d("narrator:updateDialoguePos",e,t,r),deleteDialogue:e=>d("narrator:deleteDialogue",e),getEdges:e=>d("narrator:getEdges",e),createEdge:(e,t,r,o)=>d("narrator:createEdge",e,t,r,o),updateEdgeLabel:(e,t)=>d("narrator:updateEdgeLabel",e,t),deleteEdge:e=>d("narrator:deleteEdge",e),getTalks:e=>d("narrator:getTalks",e),createTalk:(e,t,r,o,n)=>d("narrator:createTalk",e,t,r,o,n),updateTalk:(e,t,r,o)=>d("narrator:updateTalk",e,t,r,o),deleteTalk:e=>d("narrator:deleteTalk",e),moveTalks:(e,t)=>d("narrator:moveTalks",e,t),getChoiceOptions:e=>d("narrator:getChoiceOptions",e),createChoiceOption:(e,t)=>d("narrator:createChoiceOption",e,t),updateChoiceOption:(e,t,r,o,n)=>d("narrator:updateChoiceOption",e,t,r,o,n),deleteChoiceOption:e=>d("narrator:deleteChoiceOption",e)},author:{getChapters:e=>d("author:getChapters",e),createChapter:(e,t)=>d("author:createChapter",e,t),renameChapter:(e,t)=>d("author:renameChapter",e,t),updateContent:(e,t)=>d("author:updateContent",e,t),deleteChapter:e=>d("author:deleteChapter",e),setChapterLabel:(e,t)=>d("author:setChapterLabel",e,t),moveChapter:(e,t)=>d("author:moveChapter",e,t),exportDoc:(e,t)=>d("author:exportDoc",e,t)},drafter:{exportFile:(e,t,r)=>d("drafter:exportFile",e,t,r)},chatscribe:{getSessions:e=>d("chatscribe:getSessions",e),createSession:(e,t)=>d("chatscribe:createSession",e,t),renameSession:(e,t)=>d("chatscribe:renameSession",e,t),deleteSession:e=>d("chatscribe:deleteSession",e),getMessages:e=>d("chatscribe:getMessages",e),createMessage:(e,t)=>d("chatscribe:createMessage",e,t),updateMessage:(e,t)=>d("chatscribe:updateMessage",e,t),deleteMessage:e=>d("chatscribe:deleteMessage",e),updateMessageStyle:(e,t,r)=>d("chatscribe:updateMessageStyle",e,t,r)},calendar:{listTemplates:e=>d("calendar:listTemplates",e),saveTemplate:(e,t,r)=>d("calendar:saveTemplate",e,t,r),deleteTemplate:e=>d("calendar:deleteTemplate",e),ensureBuiltin:(e,t,r)=>d("calendar:ensureBuiltin",e,t,r)},viewer:{index:e=>d("viewer:index",e),getRelations:e=>d("viewer:getRelations",e),createRelation:(e,t,r,o,n)=>d("viewer:createRelation",e,t,r,o,n),updateRelation:(e,t,r)=>d("viewer:updateRelation",e,t,r),deleteRelation:e=>d("viewer:deleteRelation",e)},sketcher:{getPages:e=>d("sketcher:getPages",e),createPage:(e,t)=>d("sketcher:createPage",e,t),renamePage:(e,t)=>d("sketcher:renamePage",e,t),movePage:(e,t)=>d("sketcher:movePage",e,t),deletePage:e=>d("sketcher:deletePage",e),getStrokes:e=>d("sketcher:getStrokes",e),addStroke:(e,t,r,o)=>d("sketcher:addStroke",e,t,r,o),deleteStroke:e=>d("sketcher:deleteStroke",e),getPins:e=>d("sketcher:getPins",e),addPin:(e,t,r,o)=>d("sketcher:addPin",e,t,r,o),movePin:(e,t,r)=>d("sketcher:movePin",e,t,r),deletePin:e=>d("sketcher:deletePin",e),exportPng:(e,t)=>d("sketcher:exportPng",e,t)},migrate:{list:(e,t)=>d("migrate:list",e,t),run:(e,t,r,o)=>d("migrate:run",e,t,r,o),preview:e=>d("migrate:preview",e),getPromptSeen:e=>d("migrate:getPromptSeen",e),setPromptSeen:e=>d("migrate:setPromptSeen",e)},versions:{list:e=>d("versions:list",e),restore:e=>d("versions:restore",e)},setting:{get:e=>d("setting:get",e),set:(e,t)=>d("setting:set",e,t)},sync:{getConfig:()=>d("sync:getConfig"),setConfig:(e,t)=>d("sync:setConfig",e,t),googleLogin:(e,t)=>d("sync:googleLogin",e,t),googleLogout:()=>d("sync:googleLogout"),authStatus:()=>d("sync:authStatus"),status:e=>d("sync:status",e),push:(e,t)=>d("sync:push",e,t),pull:(e,t)=>d("sync:pull",e,t),pullByToken:(e,t,r)=>d("sync:pullByToken",e,t,r),deleteUpload:e=>d("sync:deleteUpload",e)},transfer:{getConfig:()=>d("transfer:getConfig"),setConfig:e=>d("transfer:setConfig",e),send:(e,t)=>d("transfer:send",e,t),status:e=>d("transfer:status",e),cancel:e=>d("transfer:cancel",e),verify:(e,t,r)=>d("transfer:verify",e,t,r),receive:(e,t)=>d("transfer:receive",e,t)},supabase:{getSetup:()=>d("supabase:getSetup"),setSetup:(e,t)=>d("supabase:setSetup",e,t),clearSetup:()=>d("supabase:clearSetup"),getSql:()=>d("supabase:getSql"),check:(e,t)=>d("supabase:check",e,t),install:(e,t,r)=>d("supabase:install",e,t,r),openDash:e=>d("supabase:openDash",e)},drive:{getConfig:()=>d("drive:getConfig"),setConfig:(e,t)=>d("drive:setConfig",e,t),connect:()=>d("drive:connect"),disconnect:()=>d("drive:disconnect"),status:()=>d("drive:status"),setAutoBackup:e=>d("drive:setAutoBackup",e),setBackupLayout:e=>d("drive:setBackupLayout",e),setBackupDdx:e=>d("drive:setBackupDdx",e),backupNow:e=>d("drive:backupNow",e),restoreLayout:()=>d("drive:restoreLayout"),restoreDatabase:()=>d("drive:restoreDatabase"),getBackupLog:()=>d("drive:getBackupLog"),listLayoutSlots:()=>d("drive:listLayoutSlots"),saveLayoutSlot:(e,t)=>d("drive:saveLayoutSlot",e,t),restoreLayoutSlot:e=>d("drive:restoreLayoutSlot",e),deleteLayoutSlot:e=>d("drive:deleteLayoutSlot",e)},cloud:{listProviders:()=>d("cloud:listProviders"),setActive:e=>d("cloud:setActive",e),setPrefs:(e,t)=>d("cloud:setPrefs",e,t),getConfig:e=>d("cloud:getConfig",e),setConfig:(e,t)=>d("cloud:setConfig",e,t),connect:e=>d("cloud:connect",e),disconnect:e=>d("cloud:disconnect",e),status:e=>d("cloud:status",e)},update:{check:()=>d("update:check"),dismiss:e=>d("update:dismiss",e),openDownload:e=>d("update:openDownload",e),getAutoCheck:()=>d("update:getAutoCheck"),setAutoCheck:e=>d("update:setAutoCheck",e)},plugin:{list:()=>d("plugin:list"),listOrgRepos:()=>d("plugin:listOrgRepos"),preview:e=>d("plugin:preview",e),install:e=>d("plugin:install",e),installDependency:(e,t)=>d("plugin:installDependency",e,t),uninstall:e=>d("plugin:uninstall",e),launch:e=>d("plugin:launch",e),stop:e=>d("plugin:stop",e),isRunning:e=>d("plugin:isRunning",e)},pkg:{list:()=>d("pkg:list"),active:()=>d("pkg:active"),catalog:e=>d("pkg:catalog",e),install:(e,t)=>d("pkg:install",e,t),uninstall:e=>d("pkg:uninstall",e),setEnabled:(e,t)=>d("pkg:setEnabled",e,t)},importdock:{list:e=>d("importdock:list",e),add:(e,t)=>d("importdock:add",e,t),setLinker:(e,t)=>d("importdock:setLinker",e,t),setUseAsImage:(e,t)=>d("importdock:setUseAsImage",e,t),delete:e=>d("importdock:delete",e),displayImages:e=>d("importdock:displayImages",e),pickFolder:()=>d("importdock:pickFolder"),readFile:e=>d("importdock:readFile",e),readFiles:e=>d("importdock:readFiles",e)},sagehut:{stats:e=>d("sagehut:stats",e),linkerList:e=>d("sagehut:linkerList",e)},designer:{getNodes:e=>d("designer:getNodes",e),createNode:(e,t,r,o,n,a,i)=>d("designer:createNode",e,t,r,o,n,a,i),updateNode:(e,t,r,o)=>d("designer:updateNode",e,t,r,o),moveNode:(e,t,r)=>d("designer:moveNode",e,t,r),deleteNode:e=>d("designer:deleteNode",e),getEdges:e=>d("designer:getEdges",e),createEdge:(e,t,r,o)=>d("designer:createEdge",e,t,r,o),updateEdge:(e,t)=>d("designer:updateEdge",e,t),deleteEdge:e=>d("designer:deleteEdge",e)},wiki:{resolve:(e,t)=>d("wiki:resolve",e,t),backlinks:e=>d("wiki:backlinks",e),outgoing:e=>d("wiki:outgoing",e),quickIndex:e=>d("wiki:quickIndex",e),entityPath:e=>d("wiki:entityPath",e),rebuild:()=>d("wiki:rebuild"),resolveKeys:e=>d("wiki:resolveKeys",e),linkCounts:e=>d("wiki:linkCounts",e),getGraph:e=>d("wiki:getGraph",e),renameTarget:(e,t,r)=>d("wiki:renameTarget",e,t,r)},timeline:{getAll:e=>d("timeline:getAll",e),create:(e,t,r)=>d("timeline:create",e,t,r),getModuleTimelines:e=>d("timeline:getModuleTimelines",e),createModuleTimeline:(e,t,r)=>d("timeline:createModuleTimeline",e,t,r),update:(e,t,r)=>d("timeline:update",e,t,r),delete:e=>d("timeline:delete",e),getOrCreateDate:(e,t,r,o,n)=>d("timeline:getOrCreateDate",e,t,r,o,n),getEvents:e=>d("timeline:getEvents",e),createEvent:(e,t,r,o,n,a)=>d("timeline:createEvent",e,t,r,o,n,a),updateEvent:(e,t,r,o,n,a)=>d("timeline:updateEvent",e,t,r,o,n,a),updateEventStory:(e,t)=>d("timeline:updateEventStory",e,t),updateEventIcon:(e,t,r)=>d("timeline:updateEventIcon",e,t,r),deleteEvent:e=>d("timeline:deleteEvent",e),getEventTags:e=>d("timeline:getEventTags",e),setEventTags:(e,t)=>d("timeline:setEventTags",e,t),addEventTag:(e,t)=>d("timeline:addEventTag",e,t),removeEventTag:(e,t)=>d("timeline:removeEventTag",e,t)},map:{getAll:e=>d("map:getAll",e),create:(e,t,r)=>d("map:create",e,t,r),update:(e,t,r)=>d("map:update",e,t,r),delete:e=>d("map:delete",e),getAreas:e=>d("map:getAreas",e),createArea:(e,t,r)=>d("map:createArea",e,t,r),updateArea:(e,t,r)=>d("map:updateArea",e,t,r),deleteArea:e=>d("map:deleteArea",e),getPoints:e=>d("map:getPoints",e),setPoints:(e,t)=>d("map:setPoints",e,t),getModuleMap:e=>d("map:getModuleMap",e),getOrCreateModuleMap:e=>d("map:getOrCreateModuleMap",e)},hashtag:{getAll:()=>d("hashtag:getAll"),create:(e,t)=>d("hashtag:create",e,t),update:(e,t,r)=>d("hashtag:update",e,t,r),delete:e=>d("hashtag:delete",e),getObjectsByTag:(e,t)=>d("hashtag:getObjectsByTag",e,t),getEventsByTag:(e,t)=>d("hashtag:getEventsByTag",e,t)},color:{getAll:()=>d("color:getAll"),add:e=>d("color:add",e),markUsed:e=>d("color:markUsed",e),getRecent:()=>d("color:getRecent"),delete:e=>d("color:delete",e),getSymbolCollection:()=>d("color:getSymbolCollection")},window:{minimize:()=>d("window:minimize"),toggleMaximize:()=>d("window:toggleMaximize"),close:()=>d("window:close"),openNexus:e=>d("window:openNexus",e),openWelcome:()=>d("window:openWelcome"),openNexusReplace:e=>d("window:openNexusReplace",e),openBuilderTab:(e,t)=>d("window:openBuilderTab",e,t),getId:()=>d("window:getId"),moveTabToMain:(e,t)=>d("window:moveTabToMain",e,t),onTabInbound:e=>yi.on("builder:tabInbound",(t,r,o)=>e(r,o))}});Le();le();tr();A();ge();zt();var Mu="/ddx/downloads",Hi="/ddx/uploads",gn=new Set,Xi=0,vu=e=>String(e||"dracondex").replace(/[\\/:*?"<>|]/g,"_");function ju(e,t={}){let r=vu(Pe(t.defaultPath||"dracondex-export")),o=st(Mu,`${Xi++}-${r}`);return gn.add(o),Promise.resolve({canceled:!1,filePath:o})}function Pu(e){let t=(e||[]).flatMap(r=>r.extensions||[]).filter(r=>r&&r!=="*");return t.length?t.map(r=>`.${r}`).join(","):""}function Wu({directory:e=!1,multi:t=!1,accept:r=""}={}){return new Promise(o=>{let n=document.createElement("input");n.type="file",e&&(n.webkitdirectory=!0),t&&(n.multiple=!0),r&&!e&&(n.accept=r),n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n);let a=!1,i=s=>{a||(a=!0,n.remove(),o(s))};n.addEventListener("change",()=>i([...n.files])),n.addEventListener("cancel",()=>i([])),window.addEventListener("focus",()=>setTimeout(()=>{n.files?.length||i([])},1500),{once:!0}),n.click()})}async function Hu(e,t={}){let r=t.properties||[],o=r.includes("openDirectory"),n=await Wu({directory:o,multi:r.includes("multiSelections"),accept:Pu(t.filters)});if(!n.length)return{canceled:!0,filePaths:[]};let a=`${Date.now()}-${Xi++}`,i=[],s=null;for(let u of n){let l=u.webkitRelativePath||u.name,g=st(Hi,a,l);$.write(g,new Uint8Array(await u.arrayBuffer())),i.push(g),o&&!s&&(s=st(Hi,a,l.split("/")[0]))}return{canceled:!1,filePaths:o?[s]:i}}async function Xu(e){let t=$.read(e);if(!t)return;gn.delete(e);let r=Pe(e).replace(/^\d+-/,""),o=r.includes(".")?r.slice(r.lastIndexOf(".")):"";if(!globalThis.__ddxForceDownloadLink&&typeof window.showSaveFilePicker=="function")try{let s=await(await window.showSaveFilePicker({suggestedName:r,types:o?[{description:`${o.slice(1).toUpperCase()} file`,accept:{"application/octet-stream":[o]}}]:[]})).createWritable();await s.write(t),await s.close(),$.remove(e,!1);return}catch(i){if(i&&i.name==="AbortError"){$.remove(e,!1);return}}let n=URL.createObjectURL(new Blob([t],{type:"application/octet-stream"})),a=document.createElement("a");a.href=n,a.download=/^[\x20-\x7e]+$/.test(r)?r:`dracondex-export-${new Date().toISOString().slice(0,10)}${o}`,a.rel="noopener",document.body.appendChild(a),a.click(),setTimeout(()=>{a.remove(),URL.revokeObjectURL(n)},1e4),$.remove(e,!1)}function Bi(){for(let e of[...gn])Xu(e)}function Gi(e){e._save=ju,e._open=Hu}var tn=new URLSearchParams(location.search);!tn.has("welcome")&&!tn.has("nexus")&&(tn.set("welcome","1"),history.replaceState(null,"",`${location.pathname}?${tn}`));var du=Number(new URLSearchParams(location.search).get("nexus"))||null,rn=e=>{let t=new URL(location.href);return t.search=new URLSearchParams(e).toString(),t.toString()},lL={"window:minimize":()=>{},"window:toggleMaximize":async()=>{try{return document.fullscreenElement?(await document.exitFullscreen(),!1):(await document.documentElement.requestFullscreen(),!0)}catch{return!1}},"window:close":async()=>{await ve(),window.close()},"window:getId":()=>1,"window:openNexus":async e=>{await ve(),window.open(rn({nexus:e}),"_blank")},"window:openNexusReplace":async e=>{await ve(),location.href=rn({nexus:e})},"window:openWelcome":async()=>{await ve(),location.href=rn({welcome:"1"})},"window:openBuilderTab":async(e,t)=>{await ve(),window.open(rn({nexus:e,tab:t,popup:"1"}),"_blank")},"window:moveTabToMain":()=>!1,"update:check":()=>({ok:!0,available:!1,current:"4.18.0"})},ii,Eu=new Promise(e=>{ii=e}),si=null;globalThis.__ddxInvoke=async(e,t)=>{if(await Eu,si)throw si;let r=lL[e];if(r)return r(...t);let o=Br.get(e);if(!o)throw new Error(`no IPC handler for ${e}`);try{let n=await o({sender:null},...t);return ci(n)}finally{Bi(),dL()}};function ci(e){if(e==null)return e;if(typeof e=="bigint")return Number(e);if(typeof e!="object"||e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(ci);let t={};for(let[r,o]of Object.entries(e))t[r]=ci(o);return t}var ai=null;function dL(){ai||(ai=setTimeout(()=>{ai=null,ve()},300))}async function EL(){await fi();try{let e=await navigator.storage?.estimate?.();e?.quota&&Vr({total:e.quota,used:e.usage||0})}catch{}if(await zr(e=>new URL(`vendor/${e}`,document.baseURI).href),Gi(Dt),await Promise.resolve().then(()=>di(lu(),1)),du){let{windowNexus:e}=await Promise.resolve().then(()=>di(gt(),1));e.set(1,du)}}EL().then(ii,e=>{console.error("[dracondex] data layer failed to start:",e),si=e,ii()});addEventListener("pagehide",()=>{ve(),Nt()});globalThis.__ddx={vfs:$,persistAll:ve,ipcHandlers:Br,ready:Eu};})();
