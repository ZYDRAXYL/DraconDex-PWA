"use strict";(()=>{var lE=Object.create;var Lr=Object.defineProperty;var dE=Object.getOwnPropertyDescriptor;var EE=Object.getOwnPropertyNames;var uE=Object.getPrototypeOf,pE=Object.prototype.hasOwnProperty;var _E=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var xe=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(o){throw r=[o],o}};var X=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},ot=(e,t)=>{for(var r in t)Lr(e,r,{get:t[r],enumerable:!0})},Pa=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of EE(t))!pE.call(e,n)&&n!==r&&Lr(e,n,{get:()=>t[n],enumerable:!(o=dE(t,n))||o.enumerable});return e};var Wa=(e,t,r)=>(r=e!=null?lE(uE(e)):{},Pa(t||!e||!e.__esModule?Lr(r,"default",{value:e,enumerable:!0}):r,e)),W=e=>Pa(Lr({},"__esModule",{value:!0}),e);function fE(e){let t="";for(let r=0;r<e.length;r+=32768)t+=String.fromCharCode.apply(null,e.subarray(r,r+32768));return btoa(t)}function Xa(e){let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}var Ha,mE,Se,Ir=xe(()=>{"use strict";A();Ha=new TextEncoder,mE=new TextDecoder;Se=class e extends Uint8Array{static alloc(t,r=0){let o=new e(t);return r&&o.fill(r),o}static allocUnsafe(t){return new e(t)}static from(t,r){if(typeof t=="string"){if(r==="base64")return new e(Xa(t));if(r==="hex"){let o=new e(t.length>>1);for(let n=0;n<o.length;n++)o[n]=parseInt(t.substr(n*2,2),16);return o}return new e(Ha.encode(t))}return t instanceof Uint8Array?new e(t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)):t instanceof ArrayBuffer?new e(t):Array.isArray(t)?new e(Uint8Array.from(t)):new e(0)}static concat(t,r){let o=r??t.reduce((s,i)=>s+i.length,0),n=new e(o),a=0;for(let s of t)n.set(s.subarray(0,Math.min(s.length,o-a)),a),a+=s.length;return n}static byteLength(t,r){return typeof t!="string"?t.length:r==="base64"?Xa(t).length:Ha.encode(t).length}static isBuffer(t){return t instanceof e}toString(t="utf8",r=0,o=this.length){let n=this.subarray(r,o);return t==="base64"?fE(n):t==="hex"?[...n].map(a=>a.toString(16).padStart(2,"0")).join(""):mE.decode(n)}readUInt8(t=0){return this[t]}readUInt16BE(t=0){return this[t]<<8|this[t+1]}readUInt32BE(t=0){return(this[t]<<24>>>0)+(this[t+1]<<16)+(this[t+2]<<8)+this[t+3]}readUInt32LE(t=0){return(this[t+3]<<24>>>0)+(this[t+2]<<16)+(this[t+1]<<8)+this[t]}writeUInt32BE(t,r=0){return this[r]=t>>>24&255,this[r+1]=t>>>16&255,this[r+2]=t>>>8&255,this[r+3]=t&255,r+4}slice(t,r){return e.from(super.slice(t,r))}equals(t){if(this.length!==t.length)return!1;for(let r=0;r<this.length;r++)if(this[r]!==t[r])return!1;return!0}};typeof globalThis.Buffer>"u"&&(globalThis.Buffer=Se)});var U,v,M,A=xe(()=>{"use strict";Ir();U={env:{},platform:"linux",arch:"wasm32",version:"v0.0.0",versions:{node:"0.0.0"},argv:[],execPath:"/ddx/DraconDex.exe",cwd:()=>"/ddx",on:()=>U,once:()=>U,emit:()=>!1,nextTick:(e,...t)=>queueMicrotask(()=>e(...t)),exit:()=>{},hrtime:Object.assign(()=>[0,0],{bigint:()=>0n}),memoryUsage:()=>({heapUsed:0,heapTotal:0,rss:0})},v="/ddx/app",M=Se});var Me={};ot(Me,{basename:()=>We,default:()=>NE,dirname:()=>ze,extname:()=>wr,isAbsolute:()=>$o,join:()=>nt,normalize:()=>pt,parse:()=>$a,posix:()=>wt,relative:()=>Ga,resolve:()=>Ar,sep:()=>TE});function Ba(e,t){let r=[];for(let o of e)!o||o==="."||(o===".."?r.length&&r[r.length-1]!==".."?r.pop():t&&r.push(".."):r.push(o));return r}function pt(e){if(!e)return".";let t=e.startsWith("/"),r=e.endsWith("/"),o=Ba(e.split("/"),!t).join("/");return!o&&!t&&(o="."),o&&r&&(o+="/"),(t?"/":"")+o}function nt(...e){let t=e.filter(r=>r!=null&&r!=="").join("/");return t?pt(t):"."}function Ar(...e){let t="",r=!1;for(let n=e.length-1;n>=0&&!r;n--){let a=e[n];a&&(t=t?`${a}/${t}`:a,r=a.startsWith("/"))}let o=Ba(t.split("/"),!r).join("/");return r?"/"+o:o||"."}function ze(e){let t=pt(e).replace(/\/+$/,""),r=t.lastIndexOf("/");return r===-1?".":r===0?"/":t.slice(0,r)}function We(e,t){let r=pt(e).replace(/\/+$/,"").split("/").pop()||"";return t&&r.endsWith(t)&&r!==t&&(r=r.slice(0,-t.length)),r}function wr(e){let t=We(e),r=t.lastIndexOf(".");return r<=0?"":t.slice(r)}function Ga(e,t){let r=Ar(e).split("/").filter(Boolean),o=Ar(t).split("/").filter(Boolean),n=0;for(;n<r.length&&n<o.length&&r[n]===o[n];)n++;return[...r.slice(n).map(()=>".."),...o.slice(n)].join("/")}var TE,$o,$a,wt,NE,Te=xe(()=>{"use strict";A();TE="/";$o=e=>!!e&&e.startsWith("/"),$a=e=>({root:$o(e)?"/":"",dir:ze(e),base:We(e),ext:wr(e),name:We(e,wr(e))}),wt={sep:"/",delimiter:":",normalize:pt,join:nt,resolve:Ar,dirname:ze,basename:We,extname:wr,relative:Ga,isAbsolute:$o,parse:$a};wt.posix=wt;wt.win32=wt;NE=wt});function hE(){return new Promise((e,t)=>{let r=indexedDB.open(gE,RE);r.onupgradeneeded=()=>{let o=r.result;o.objectStoreNames.contains(bt)||o.createObjectStore(bt)},r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}function Cr(e){let t=He(e);for(;t&&t!=="/"&&!ve.has(t);)ve.add(t),t=ze(t)}async function Ya(){try{Yt=await hE()}catch(t){return console.warn("[vfs] IndexedDB unavailable, running in memory only:",t?.message||t),!1}let e=await new Promise((t,r)=>{let n=Yt.transaction(bt,"readonly").objectStore(bt),a=[],s=n.openCursor();s.onsuccess=()=>{let i=s.result;if(!i)return t(a);a.push([i.key,i.value]),i.continue()},s.onerror=()=>r(s.error)});for(let[t,r]of e){if(r&&r.dir){Cr(t);continue}let o=r instanceof ArrayBuffer?new Uint8Array(r):r?.bytes?new Uint8Array(r.bytes):new Uint8Array(0);Ue.set(t,o),Cr(ze(t))}return!0}function Yo(){Yt&&(yr&&clearTimeout(yr),yr=setTimeout(()=>{yr=null,_t()},400))}function _t(){if(!Yt||!yt.size&&!Ct.size)return Promise.resolve();if($t)return $t.then(()=>_t());let e=[...yt],t=[...Ct];return yt.clear(),Ct.clear(),$t=new Promise(r=>{let o;try{o=Yt.transaction(bt,"readwrite")}catch(a){return console.warn("[vfs] flush failed:",a?.message||a),r()}let n=o.objectStore(bt);for(let a of e){let s=Ue.get(a);s&&n.put({bytes:s.slice().buffer,mtime:Date.now()},a)}for(let a of t)n.delete(a);for(let a of ve)n.put({dir:!0},a);o.oncomplete=()=>r(),o.onerror=()=>{console.warn("[vfs] flush error:",o.error),r()},o.onabort=()=>r()}).then(()=>{$t=null;for(let r of Vo)r()}),$t}var gE,bt,RE,Ue,ve,yt,Ct,Yt,yr,$t,Vo,He,SE,$,Vt=xe(()=>{"use strict";A();Te();gE="dracondex-pwa",bt="files",RE=1,Ue=new Map,ve=new Set(["/"]),yt=new Set,Ct=new Set,Yt=null,yr=null,$t=null,Vo=new Set,He=e=>pt(String(e));SE={files:Ue,dirs:ve,exists:e=>Ue.has(He(e))||ve.has(He(e)),isDir:e=>ve.has(He(e)),isFile:e=>Ue.has(He(e)),read:e=>Ue.get(He(e)),write(e,t){let r=He(e);Ue.set(r,t instanceof Uint8Array?t:new Uint8Array(t)),Cr(ze(r)),yt.add(r),Ct.delete(r),Yo()},mkdir(e){Cr(He(e)),Yo()},remove(e,t){let r=He(e);if(Ue.delete(r)&&(yt.delete(r),Ct.add(r)),ve.has(r))if(t){let o=r.endsWith("/")?r:r+"/";for(let n of[...Ue.keys()])n.startsWith(o)&&(Ue.delete(n),yt.delete(n),Ct.add(n));for(let n of[...ve])(n===r||n.startsWith(o))&&ve.delete(n)}else ve.delete(r);Yo()},list(e){let t=He(e).replace(/\/+$/,"")||"/",r=t==="/"?"/":t+"/",o=new Set;for(let n of Ue.keys())n.startsWith(r)&&o.add(n.slice(r.length).split("/")[0]);for(let n of ve)n!==t&&n.startsWith(r)&&o.add(n.slice(r.length).split("/")[0]);return[...o]},join:nt,flushNow:_t,onFlush(e){return Vo.add(e),()=>Vo.delete(e)}};typeof addEventListener=="function"&&(addEventListener("pagehide",()=>_t()),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&_t()}));$=SE});var _e={};ot(_e,{BrowserWindow:()=>kr,Menu:()=>Ja,app:()=>br,clipboard:()=>Za,contextBridge:()=>ti,default:()=>OE,dialog:()=>kt,ipcHandlers:()=>Dr,ipcMain:()=>qa,ipcRenderer:()=>ri,nativeTheme:()=>za,protocol:()=>ei,session:()=>Qa,shell:()=>Ka});var Jt,Dr,Va,br,qt,kr,qa,kt,Ja,Ka,za,Qa,Za,ei,ti,ri,OE,pe=xe(()=>{"use strict";A();Jt=new Map,Dr=Jt,Va={home:"/ddx/home",appData:"/ddx",userData:"/ddx/electron-user-data",temp:"/ddx/tmp",exe:"/ddx/DraconDex.exe",documents:"/ddx/home/Documents",downloads:"/ddx/home/Downloads",desktop:"/ddx/home/Desktop",logs:"/ddx/logs"},br={isPackaged:!0,getPath:e=>Va[e]??"/ddx",setPath:(e,t)=>{Va[e]=t},getVersion:()=>"4.13.2",getName:()=>"DraconDex",getAppPath:()=>"/ddx/app",commandLine:{appendSwitch:()=>{}},requestSingleInstanceLock:()=>!0,on:()=>br,once:()=>br,whenReady:()=>new Promise(()=>{}),quit:()=>{},exit:()=>{},relaunch:()=>{},focus:()=>{}},qt={id:1,isDestroyed:()=>!1,isMinimized:()=>!1,isMaximized:()=>!1,minimize:()=>{},maximize:()=>{},unmaximize:()=>{},restore:()=>{},focus:()=>{},close:()=>{},on:()=>{},webContents:{send:()=>{},id:1,on:()=>{},session:{setPermissionRequestHandler:()=>{}}},loadFile:()=>{}},kr=class{constructor(){return qt}static getAllWindows(){return[qt]}static getFocusedWindow(){return qt}static fromWebContents(){return qt}static fromId(t){return t===1?qt:null}},qa={handle:(e,t)=>{Jt.set(e,t)},handleOnce:(e,t)=>{Jt.set(e,t)},removeHandler:e=>{Jt.delete(e)},on:()=>{}},kt={showSaveDialog:async(...e)=>kt._save(...e),showOpenDialog:async(...e)=>kt._open(...e),showMessageBox:async()=>({response:0}),showErrorBox:(e,t)=>console.error(`[dialog] ${e}: ${t}`),_save:async()=>({canceled:!0}),_open:async()=>({canceled:!0,filePaths:[]})},Ja={buildFromTemplate:()=>({}),setApplicationMenu:()=>{}},Ka={openExternal:async e=>{globalThis.open(e,"_blank","noopener")},showItemInFolder:e=>{console.warn("[shell] showItemInFolder is not available in the web build:",e)},openPath:async e=>(console.warn("[shell] openPath is not available in the web build:",e),"unsupported"),beep:()=>{}},za={shouldUseDarkColors:!0,on:()=>{}},Qa={defaultSession:{setPermissionRequestHandler:()=>{}}},Za={writeText:e=>navigator.clipboard?.writeText(e),readText:()=>""},ei=void 0,ti={exposeInMainWorld:(e,t)=>{globalThis[e]=t}},ri={invoke:(e,...t)=>globalThis.__ddxInvoke(e,t),on:()=>{},send:()=>{}},OE={app:br,BrowserWindow:kr,ipcMain:qa,dialog:kt,Menu:Ja,shell:Ka,protocol:ei,nativeTheme:za,session:Qa,clipboard:Za,contextBridge:ti,ipcRenderer:ri,ipcHandlers:Jt}});var Ce={};ot(Ce,{__quota:()=>Kt,__setQuota:()=>Ur,basename:()=>We,closeSync:()=>pi,constants:()=>mi,copyFileSync:()=>zo,createReadStream:()=>en,createWriteStream:()=>fi,default:()=>CE,dirname:()=>ze,existsSync:()=>ni,fsyncSync:()=>ui,lstatSync:()=>si,mkdirSync:()=>Ko,openSync:()=>li,promises:()=>_i,readFileSync:()=>qo,readSync:()=>di,readdirSync:()=>Zo,realpathSync:()=>xr,renameSync:()=>Qo,rmSync:()=>Ft,rmdirSync:()=>ii,statSync:()=>Mr,statfsSync:()=>ci,unlinkSync:()=>ai,vfs:()=>$,writeFileSync:()=>Jo,writeSync:()=>Ei});function qo(e,t){let r=$.read(e);if(!r)throw Qe(e);return(typeof t=="string"?t:t?.encoding)?AE.decode(r):Se.from(r)}function Jo(e,t){$.write(e,typeof t=="string"?IE.encode(t):new Uint8Array(t.buffer?t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength):t))}function Ko(e){$.mkdir(e)}function Ft(e,t={}){if(!$.exists(e)){if(t.force)return;throw Qe(e)}$.remove(e,!!t.recursive)}function zo(e,t){let r=$.read(e);if(!r)throw Qe(e);$.write(t,r.slice())}function Qo(e,t){if($.isFile(e)){let r=$.read(e);$.write(t,r),$.remove(e,!1);return}if($.isDir(e)){let r=e.replace(/\/+$/,"")+"/";for(let o of[...$.files.keys()])o.startsWith(r)&&$.write(t.replace(/\/+$/,"")+"/"+o.slice(r.length),$.read(o));$.remove(e,!0);return}throw Qe(e)}function Mr(e){if($.isFile(e))return new Fr(e,$.read(e).length,!1);if($.isDir(e))return new Fr(e,0,!0);throw Qe(e)}function Ur(e){Kt=e}function ci(){let e=Math.max(0,Kt.total-Kt.used);return{bsize:4096,blocks:Math.floor(Kt.total/4096),bfree:Math.floor(e/4096),bavail:Math.floor(e/4096)}}function Zo(e,t){if(!$.isDir(e))throw Qe(e);let r=$.list(e);return t?.withFileTypes?r.map(o=>{let n=(e.replace(/\/+$/,"")||"")+"/"+o,a=$.isDir(n);return{name:o,isDirectory:()=>a,isFile:()=>!a,parentPath:e,path:e}}):r}function xr(e){if(!$.exists(e))throw Qe(e);return String(e)}function li(e,t="r"){if(!$.exists(e)&&!/[wa+]/.test(t))throw Qe(e);$.exists(e)||$.write(e,new Uint8Array(0));let r=wE++;return vr.set(r,{path:String(e),pos:0}),r}function di(e,t,r,o,n){let a=vr.get(e);if(!a)throw new Dt("EBADF","EBADF: bad file descriptor");let s=$.read(a.path)||new Uint8Array(0),i=n??a.pos,u=s.subarray(i,i+o);return t.set(u,r),n==null&&(a.pos+=u.length),u.length}function Ei(e,t,r=0,o=t.length,n=null){let a=vr.get(e);if(!a)throw new Dt("EBADF","EBADF: bad file descriptor");let s=$.read(a.path)||new Uint8Array(0),i=n??a.pos,u=Math.max(s.length,i+o),E=new Uint8Array(u);return E.set(s,0),E.set(t.subarray(r,r+o),i),$.write(a.path,E),n==null&&(a.pos+=o),o}function pi(e){vr.delete(e)}var IE,AE,Dt,Qe,ni,ai,ii,Fr,si,Kt,vr,wE,ui,_i,mi,en,fi,yE,CE,Oe=xe(()=>{"use strict";A();Ir();Te();Vt();IE=new TextEncoder,AE=new TextDecoder,Dt=class extends Error{constructor(t,r){super(r),this.code=t}},Qe=e=>new Dt("ENOENT",`ENOENT: no such file or directory, '${e}'`),ni=e=>$.exists(e);ai=e=>Ft(e,{}),ii=(e,t)=>Ft(e,{recursive:!0,force:!0,...t});Fr=class{constructor(t,r,o){this._path=t,this.size=r,this._isDir=o,this.mtimeMs=Date.now(),this.mtime=new Date(this.mtimeMs)}isDirectory(){return this._isDir}isFile(){return!this._isDir}};si=Mr,Kt={total:2*1024**3,used:0};xr.native=xr;vr=new Map,wE=3;ui=()=>{};_i={stat:async e=>Mr(e),readFile:async(e,t)=>qo(e,t),writeFile:async(e,t)=>Jo(e,t),mkdir:async e=>Ko(e),rm:async(e,t)=>Ft(e,t),unlink:async e=>Ft(e,{}),copyFile:async(e,t)=>zo(e,t),rename:async(e,t)=>Qo(e,t),readdir:async(e,t)=>Zo(e,t),access:async e=>{if(!$.exists(e))throw Qe(e)}},mi={F_OK:0,R_OK:4,W_OK:2,X_OK:1},en=()=>{throw new Dt("ENOSYS","createReadStream is not available in the web build")},fi=en,yE={existsSync:ni,readFileSync:qo,writeFileSync:Jo,mkdirSync:Ko,rmSync:Ft,unlinkSync:ai,rmdirSync:ii,copyFileSync:zo,renameSync:Qo,statSync:Mr,lstatSync:si,statfsSync:ci,readdirSync:Zo,realpathSync:xr,openSync:li,readSync:di,writeSync:Ei,fsyncSync:ui,closeSync:pi,promises:_i,constants:mi,createReadStream:en,createWriteStream:fi,__setQuota:Ur},CE=yE});var Hr={};ot(Hr,{Database:()=>Pr,default:()=>DE,initSqlite:()=>Wr,persistAll:()=>je});async function Wr(e){if(xt)return xt;let t=globalThis.initSqlJs;if(typeof t!="function")throw new Error("sql.js was not loaded (vendor/sql-wasm.js missing)");return xt=await t({locateFile:e}),xt}function je(){for(let e of tn)try{e.persist()}catch{}return $.flushNow()}var xt,bE,jr,kE,tn,rn,Pr,DE,zt=xe(()=>{"use strict";A();Vt();xt=null;bE=e=>e===void 0?null:typeof e=="boolean"?e?1:0:typeof e=="bigint"?Number(e):e instanceof Date?e.toISOString():e,jr=e=>e==null?[]:(Array.isArray(e)?e:[e]).map(bE),kE=/^\s*VACUUM\s+INTO\b/i,tn=new Set,rn=class{constructor(t,r){this.db=t,this.sql=r,this.isFinalized=!1,this._st=null,this._gen=-1}_live(){if(this.isFinalized)throw new Error("statement is finalized");return(!this._st||this._gen!==this.db._gen)&&(this._st=this.db._raw.prepare(this.sql),this._gen=this.db._gen),this._st}all(t){let r=this._live();r.reset(),r.bind(jr(t));let o=[];for(;r.step();)o.push(r.getAsObject());return r.reset(),o}get(t){let r=this._live();r.reset(),r.bind(jr(t));let o=r.step()?r.getAsObject():null;return r.reset(),o}run(t){let r=kE.test(this.sql)?jr(t)[0]:null;if(r)return $.write(String(r),this.db._raw.export()),this.db._gen++,{changes:0,lastInsertRowid:0};let o=this._live();return o.reset(),o.bind(jr(t)),o.step(),o.reset(),this.db._touch(),{changes:this.db._raw.getRowsModified(),lastInsertRowid:this.db._lastInsertRowid()}}_reset(){this._st&&this._gen===this.db._gen&&this._st.reset()}finalize(){if(!this.isFinalized){if(this.isFinalized=!0,this._st&&this._gen===this.db._gen)try{this._st.free()}catch{}this._st=null,this.db._statements.delete(this)}}},Pr=class{constructor(t,r={}){if(!xt)throw new Error("initSqlite() must finish before a Database is opened");this.filePath=String(t);let o=$.read(this.filePath);this._raw=new xt.Database(o&&o.length?o:void 0),this._gen=0,this._statements=new Set,this._dirty=!1,this._persistTimer=null,this._rowidStmt=null,this.isOpen=!0,tn.add(this),o||$.write(this.filePath,this._raw.export()),this._gen++,r.readOnly&&(this.readOnly=!0)}_lastInsertRowid(){(!this._rowidStmt||this._rowidGen!==this._gen)&&(this._rowidStmt=this._raw.prepare("SELECT last_insert_rowid() AS id"),this._rowidGen=this._gen),this._rowidStmt.reset(),this._rowidStmt.step();let{id:t}=this._rowidStmt.getAsObject();return this._rowidStmt.reset(),t}_touch(){this._dirty=!0,!this._persistTimer&&(this._persistTimer=setTimeout(()=>{this._persistTimer=null,this.persist()},250))}persist(){if(!this.isOpen||!this._dirty)return;this._dirty=!1;let t=this._raw.export();this._gen++,$.write(this.filePath,t)}prepare(t){let r=new rn(this,t);return this._statements.add(r),r}exec(t){this._raw.run(String(t));let r=String(t).trimStart().slice(0,6).toUpperCase();!r.startsWith("BEGIN")&&!r.startsWith("ROLLBA")&&this._touch()}run(t,r){if(r===void 0)return this.exec(t),{changes:this._raw.getRowsModified(),lastInsertRowid:this._lastInsertRowid()};let o=this.prepare(t);try{return o.run(r)}finally{o.finalize()}}all(t,r){let o=this.prepare(t);try{return o.all(r)}finally{o.finalize()}}get(t,r){let o=this.prepare(t);try{return o.get(r)}finally{o.finalize()}}close(){if(this.isOpen){this.persist();for(let t of[...this._statements])t.finalize();try{this._raw.close()}catch{}this.isOpen=!1,tn.delete(this)}}};DE={Database:Pr,initSqlite:Wr,persistAll:je}});var Xr={};ot(Xr,{EOL:()=>WE,cpus:()=>Li,default:()=>HE,homedir:()=>Si,platform:()=>Oi,tmpdir:()=>hi});var hi,Si,Oi,WE,Li,HE,Br=xe(()=>{"use strict";A();hi=()=>"/ddx/tmp",Si=()=>"/ddx/home",Oi=()=>"browser",WE=`
`,Li=()=>[],HE={tmpdir:hi,homedir:Si,platform:Oi,EOL:`
`,cpus:Li}});var Ai={};ot(Ai,{AsyncLocalStorage:()=>Gr,AsyncResource:()=>$r,default:()=>XE,executionAsyncId:()=>Ii});var Gr,$r,Ii,XE,wi=xe(()=>{"use strict";A();Gr=class{constructor(){this._store=void 0}run(t,r){let o=this._store;this._store=t;let n;try{n=r()}catch(a){throw this._store=o,a}return n&&typeof n.then=="function"?n.then(a=>(this._store=o,a),a=>{throw this._store=o,a}):(this._store=o,n)}getStore(){return this._store}enterWith(t){this._store=t}exit(t){let r=this._store;this._store=void 0;try{return t()}finally{this._store=r}}},$r=class{constructor(){}runInAsyncScope(t,r,...o){return t.apply(r,o)}},Ii=()=>0,XE={AsyncLocalStorage:Gr,AsyncResource:$r,executionAsyncId:Ii}});var mt=X((tS,bi)=>{"use strict";A();var{AsyncLocalStorage:BE}=(wi(),W(Ai)),yi=new BE,GE=new Map,Yr=class extends Error{constructor(){super("no active vault for this call \u2014 a vault-scoped db function ran outside a vault context"),this.code="no_active_vault"}},$E=(e,t)=>yi.run({nexusId:e??null},t),Ci=()=>yi.getStore()?.nexusId??null;function YE(){let e=Ci();if(e==null)throw new Yr;return e}bi.exports={windowNexus:GE,runWithVault:$E,currentNexusId:Ci,requireNexusId:YE,NoActiveVaultError:Yr}});var nn=X((oS,ki)=>{"use strict";A();var VE=`
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

    CREATE TABLE IF NOT EXISTS story_talk (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dialogue_ref INTEGER NOT NULL REFERENCES story_dialogue(id) ON DELETE CASCADE,
      speaker TEXT,
      linker_key TEXT,
      talk_sentence TEXT,
      talk_order INTEGER NOT NULL DEFAULT 0,
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
      shape TEXT NOT NULL DEFAULT 'box' CHECK(shape IN ('box','circle','diamond','text')),
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


`;ki.exports={VAULT_SCHEMA_VERSION:1,VAULT_DDL_SQL:VE}});var Mi=X((aS,xi)=>{"use strict";A();var Di=`
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
`,{VAULT_DDL_SQL:Fi}=nn(),qE=Di+Fi;xi.exports={APP_DDL_SQL:Di,VAULT_DDL_SQL:Fi,DDL_SQL:qE}});var an=X((sS,Ui)=>{"use strict";A();var JE=`
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
    CREATE INDEX IF NOT EXISTS idx_design_node_module     ON design_node(module_ref);
    CREATE INDEX IF NOT EXISTS idx_design_edge_module     ON design_edge(module_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_page_module     ON sketch_page(module_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_stroke_page     ON sketch_stroke(page_ref);
    CREATE INDEX IF NOT EXISTS idx_sketch_pin_page        ON sketch_pin(page_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_module       ON map_event(module_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_event        ON map_event(event_ref);
    CREATE INDEX IF NOT EXISTS idx_map_event_area         ON map_event(area_ref);
    CREATE INDEX IF NOT EXISTS idx_entity_relation_nexus  ON entity_relation(nexus_ref);
    CREATE INDEX IF NOT EXISTS idx_wiki_link_nexus        ON wiki_link(nexus_ref);
    -- Composite on purpose: _recordVersion does MAX(seq) WHERE module_ref=? and
    -- ORDER BY seq DESC LIMIT ? in its prune subquery, so this covers both and
    -- turns 3 full scans per edit into 3 seeks.
    CREATE INDEX IF NOT EXISTS idx_module_version_module  ON module_version(module_ref, seq);
    -- Composite matches addImportFiles' dedupe probe exactly (nexus_ref + file_path).
    CREATE INDEX IF NOT EXISTS idx_import_file_nexus      ON import_file(nexus_ref, file_path);
`;Ui.exports={INDEX_SQL:JE}});var sn=X((lS,vi)=>{"use strict";A();var KE=["\u2694\uFE0F Sword","\u{1F6E1}\uFE0F Shield","\u{1F3F9} Bow","\u{1F5E1}\uFE0F Dagger","\u{1F525} Fire","\u{1F4A7} Water","\u{1F33F} Nature","\u26A1 Lightning","\u{1F319} Moon","\u2600\uFE0F Sun","\u2B50 Star","\u{1F451} Crown","\u{1F480} Skull","\u{1F52E} Orb","\u{1F4DC} Scroll","\u{1F48E} Gem","\u{1F409} Dragon","\u{1F981} Lion","\u{1F43A} Wolf","\u{1F985} Eagle","\u{1F3F0} Castle","\u2693 Anchor","\u{1F56F}\uFE0F Candle","\u2696\uFE0F Scale","\u{1FA84} Magic","\u{1F9FF} Talisman","\u{1FAB6} Feather","\u{1F573}\uFE0F Portal","\u{1F9ED} Compass","\u{1FAA8} Stone","\u{1F30A} Wave","\u{1F32A}\uFE0F Storm","\u{1F338} Bloom","\u{1F33E} Grain","\u{1F340} Clover","\u{1FA90} Planet","\u{1F9E9} Puzzle","\u{1FA99} Coin","\u{1F511} Key","\u{1F9F1} Brick","\u{1F6F6} Boat","\u{1F9FA} Basket","\u{1F9EC} DNA","\u{1FAE7} Bubble","\u{1FA9E} Mirror","\u{1F4E1} Signal","\u{1F9EF} Extinguisher","\u{1F5DD}\uFE0F Key"];vi.exports={SEED_SYMBOLS:KE}});var cn=X((ES,Bi)=>{"use strict";A();var{hasTable:ae,hasColumn:Q}=Ze(),{INDEX_SQL:zE}=an(),{SEED_SYMBOLS:QE}=sn();function ZE(e){if(!Q(e,"module","cat_type"))try{e.prepare("ALTER TABLE module ADD COLUMN cat_type TEXT CHECK(cat_type IN ('object','element','character'))").run()}catch{}if(!Q(e,"module","pinned"))try{e.prepare("ALTER TABLE module ADD COLUMN pinned INTEGER NOT NULL DEFAULT 0").run()}catch{}if(Pi(e),Wi(e),!Q(e,"relation_type","color"))try{e.prepare("ALTER TABLE relation_type ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"classifier_object","icon"))try{e.prepare("ALTER TABLE classifier_object ADD COLUMN icon TEXT").run()}catch{}if(!Q(e,"timeline_event","icon"))try{e.prepare("ALTER TABLE timeline_event ADD COLUMN icon TEXT").run()}catch{}if(!Q(e,"map_event","linker_key"))try{e.prepare("ALTER TABLE map_event ADD COLUMN linker_key TEXT").run()}catch{}if(!Q(e,"chat_message","color"))try{e.prepare("ALTER TABLE chat_message ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"chat_message","side"))try{e.prepare("ALTER TABLE chat_message ADD COLUMN side TEXT DEFAULT 'r'").run()}catch{}if(!Q(e,"story_talk","linker_key"))try{e.prepare("ALTER TABLE story_talk ADD COLUMN linker_key TEXT").run()}catch{}if(!Q(e,"story_dialogue","description"))try{e.prepare("ALTER TABLE story_dialogue ADD COLUMN description TEXT").run()}catch{}if(!Q(e,"book_chapter","chapter_label"))try{e.prepare("ALTER TABLE book_chapter ADD COLUMN chapter_label TEXT").run()}catch{}if(!Q(e,"classifier_template","level_steps"))try{e.prepare("ALTER TABLE classifier_template ADD COLUMN level_steps TEXT").run()}catch{}if(!Q(e,"classifier_attribute","condition_value"))try{e.prepare("ALTER TABLE classifier_attribute ADD COLUMN condition_value TEXT").run()}catch{}if(!Q(e,"entity_relation","color"))try{e.prepare("ALTER TABLE entity_relation ADD COLUMN color INTEGER REFERENCES use_color(id)").run()}catch{}if(ae(e,"world_project")&&!Q(e,"world_project","color"))try{e.prepare("ALTER TABLE world_project ADD COLUMN color INTEGER REFERENCES use_color(id)").run(),Q(e,"world_project","color_ref")&&e.prepare("UPDATE world_project SET color=color_ref WHERE color IS NULL").run()}catch{}for(let o of["project","world_project","game_project","write_project","note"])if(ae(e,o)&&!Q(e,o,"migrated_v3"))try{e.prepare(`ALTER TABLE ${o} ADD COLUMN migrated_v3 INTEGER NOT NULL DEFAULT 0`).run()}catch{}if(ae(e,"world_novel")&&!Q(e,"world_novel","char_category_ref"))try{e.prepare("ALTER TABLE world_novel ADD COLUMN char_category_ref INTEGER REFERENCES object_category(id) ON DELETE SET NULL").run()}catch{}if(ae(e,"world_object")&&!Q(e,"world_object","symbol_ref"))try{e.prepare("ALTER TABLE world_object ADD COLUMN symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL").run()}catch{}if(ae(e,"symbol_collection")&&e.transaction(()=>{let o=e.prepare("INSERT OR IGNORE INTO symbol_collection (glyph,label) VALUES (?,?)");for(let n of QE){let[a,...s]=n.split(" ");o.run(a,s.join(" "))}})(),e.prepare("PRAGMA table_info(timeline_event)").all().some(o=>o.name==="story")||e.prepare("ALTER TABLE timeline_event ADD COLUMN story TEXT").run(),!e.prepare("PRAGMA table_info(object)").all().some(o=>o.name==="note"))try{e.prepare("ALTER TABLE object ADD COLUMN note TEXT").run()}catch{}Xi(e),Hi(e),ji(e)}var Vr=["project","world_project","game_project","write_project"];function ji(e){try{for(let r of Vr)if(ae(e,r)&&!Q(e,r,"nexus_ref"))try{e.prepare(`ALTER TABLE ${r} ADD COLUMN nexus_ref INTEGER REFERENCES nexus(id) ON DELETE SET NULL`).run()}catch{}if(Vr.some(r=>ae(e,r)&&e.prepare(`SELECT 1 FROM ${r} WHERE nexus_ref IS NULL LIMIT 1`).get())){let r=e.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get();r||(r={id:e.prepare("INSERT INTO nexus (name) VALUES ('Nexus')").run().lastInsertRowid});for(let o of Vr)ae(e,o)&&e.prepare(`UPDATE ${o} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(r.id)}}catch(t){console.error("Nexus v2.8 migration error:",t)}}function Pi(e){if(!(!ae(e,"map")||Q(e,"map","module_ref")))try{e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
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
    `),e.exec("PRAGMA foreign_keys = ON")}catch(t){console.error("Map v3 migration error:",t)}}function Wi(e){if(!(!ae(e,"timeline")||Q(e,"timeline","module_ref")))try{e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
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
    `),e.exec("PRAGMA foreign_keys = ON")}catch(t){console.error("Timeline v3 migration error:",t)}}function Hi(e){try{if(!ae(e,"library_project"))return;e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
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
    `),e.exec("PRAGMA foreign_keys = ON")}catch{}}function eu(e){e.exec(zE)}function Xi(e){try{if(!Q(e,"game_project","codename"))try{e.prepare("ALTER TABLE game_project ADD COLUMN codename TEXT").run()}catch{}if(!Q(e,"game_character","object_link"))try{e.prepare("ALTER TABLE game_character ADD COLUMN object_link INTEGER REFERENCES game_cat_object(id) ON DELETE SET NULL").run()}catch{}if(!Q(e,"game_character","color_ref"))try{e.prepare("ALTER TABLE game_character ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_story","color_ref"))try{e.prepare("ALTER TABLE game_story ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_dialogue","color_ref"))try{e.prepare("ALTER TABLE game_dialogue ADD COLUMN color_ref INTEGER REFERENCES use_color(id)").run()}catch{}if(!Q(e,"game_storyline","symbol_ref"))try{e.prepare("ALTER TABLE game_storyline ADD COLUMN symbol_ref INTEGER REFERENCES symbol_collection(id) ON DELETE SET NULL").run()}catch{}if(!Q(e,"game_storyline","symbol"))try{e.prepare("ALTER TABLE game_storyline ADD COLUMN symbol TEXT").run()}catch{}try{e.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_game_novel_link_project ON game_novel_link(project_ref)").run()}catch{}ae(e,"game_item_category")&&(e.prepare("INSERT OR IGNORE INTO game_collection (id,game_ref,name) SELECT id,game_ref,name FROM game_item_category").run(),e.prepare("INSERT OR IGNORE INTO game_col_template (id,collection_ref,attribute_name,attribute_type) SELECT id,item_cat_ref,attr_name,CASE WHEN attr_type='number' THEN 'num' ELSE 'text' END FROM game_item_template").run(),e.prepare("INSERT OR IGNORE INTO game_col_element (id,collection_ref,name) SELECT id,item_cat_ref,name FROM game_item").run(),e.prepare("INSERT OR IGNORE INTO game_col_attribute (element_ref,template_ref,attribute_text,level) SELECT item_ref,template_ref,value,0 FROM game_item_attr").run(),e.prepare("INSERT OR IGNORE INTO game_element_hashtag (element_id,hashtag_id) SELECT item_id,hashtag_id FROM game_item_hashtag").run()),ae(e,"game_dial_line")&&e.prepare(`INSERT OR IGNORE INTO game_conversation (dialogue_ref,char_ref,talk_sentence,talk_order)
        SELECT dial_ref, speaker_ref, text, ROW_NUMBER() OVER (PARTITION BY dial_ref ORDER BY order_index, id)-1 FROM game_dial_line`).run(),ae(e,"game_dial_next")&&e.prepare(`INSERT OR IGNORE INTO game_storyline (story_ref,from_ref,to_ref)
        SELECT gd.story_ref, gdn.from_ref, gdn.to_ref FROM game_dial_next gdn JOIN game_dialogue gd ON gd.id=gdn.from_ref`).run();for(let t of["game_dial_line","game_dial_next","game_item_attr","game_item_hashtag","game_item","game_item_template","game_item_category","game_stat_levelup","game_stat_template","game_char_link","game_function","game_func_category","game_description"])if(ae(e,t))try{e.prepare(`DROP TABLE ${t}`).run()}catch{}}catch(t){console.error("Hero v2.6 migration error:",t)}}var tu=/^ext_[a-z0-9_]{1,41}$/,ru=/^plg_[a-z0-9_]{1,41}$/;function ou(e){try{if(ae(e,"extension")&&!ae(e,"plugin")&&(e.prepare("ALTER TABLE extension RENAME TO plugin").run(),e.prepare("ALTER TABLE plugin RENAME COLUMN ext_key TO plugin_key").run(),ae(e,"extension_table")&&(e.prepare("ALTER TABLE extension_table RENAME TO plugin_table").run(),e.prepare("ALTER TABLE plugin_table RENAME COLUMN extension_ref TO plugin_ref").run())),ae(e,"plugin")&&!Q(e,"plugin","repo_host")&&e.prepare("ALTER TABLE plugin ADD COLUMN repo_host TEXT NOT NULL DEFAULT 'github'").run(),ae(e,"plugin_table")){let t=e.prepare("SELECT id, table_name FROM plugin_table WHERE table_name LIKE 'ext\\_%' ESCAPE '\\'").all();for(let r of t){let o=String(r.table_name||""),n=`plg_${o.slice(4)}`;!tu.test(o)||!ru.test(n)||!ae(e,o)||ae(e,n)||(e.prepare(`ALTER TABLE ${o} RENAME TO ${n}`).run(),e.prepare("UPDATE plugin_table SET table_name=? WHERE id=?").run(n,r.id))}}}catch(t){console.error("plugin v4.2 migration error:",t)}}Bi.exports={migrateInlineColumns:ZE,NEXUS_PROJECT_TABLES:Vr,migrateNexusV28:ji,migrateMapV3:Pi,migrateTimelineV3:Wi,migrateWriterV27:Hi,ensureIndexes:eu,migrateHeroV26:Xi,migratePluginV42:ou}});var ft={};ot(ft,{createHash:()=>Vi,default:()=>cu,randomBytes:()=>Gi,randomInt:()=>Yi,randomUUID:()=>$i,webcrypto:()=>qi});function Gi(e){let t=new Uint8Array(e);return crypto.getRandomValues(t),Se.from(t)}function Yi(e,t){let[r,o]=t===void 0?[0,e]:[e,t],n=o-r,a=new Uint32Array(1);return crypto.getRandomValues(a),r+a[0]%n}function au(e){let t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),r=e.length*8,o=new Uint8Array((e.length+9>>6)+1<<6);o.set(e),o[e.length]=128,new DataView(o.buffer).setUint32(o.length-4,r>>>0,!1),new DataView(o.buffer).setUint32(o.length-8,Math.floor(r/2**32),!1);let n=new Uint32Array(64),a=new DataView(o.buffer);for(let u=0;u<o.length;u+=64){for(let _=0;_<16;_++)n[_]=a.getUint32(u+_*4,!1);for(let _=16;_<64;_++){let C=Xe(n[_-15],7)^Xe(n[_-15],18)^n[_-15]>>>3,D=Xe(n[_-2],17)^Xe(n[_-2],19)^n[_-2]>>>10;n[_]=n[_-16]+C+n[_-7]+D>>>0}let[E,g,m,h,O,N,R,S]=t;for(let _=0;_<64;_++){let C=Xe(O,6)^Xe(O,11)^Xe(O,25),D=O&N^~O&R,y=S+C+D+nu[_]+n[_]>>>0,I=Xe(E,2)^Xe(E,13)^Xe(E,22),L=E&g^E&m^g&m,T=I+L>>>0;S=R,R=N,N=O,O=h+y>>>0,h=m,m=g,g=E,E=y+T>>>0}t[0]=t[0]+E>>>0,t[1]=t[1]+g>>>0,t[2]=t[2]+m>>>0,t[3]=t[3]+h>>>0,t[4]=t[4]+O>>>0,t[5]=t[5]+N>>>0,t[6]=t[6]+R>>>0,t[7]=t[7]+S>>>0}let s=new Uint8Array(32),i=new DataView(s.buffer);for(let u=0;u<8;u++)i.setUint32(u*4,t[u],!1);return s}function iu(e){let t=new Uint32Array([1732584193,4023233417,2562383102,271733878,3285377520]),r=e.length*8,o=new Uint8Array((e.length+9>>6)+1<<6);o.set(e),o[e.length]=128;let n=new DataView(o.buffer);n.setUint32(o.length-4,r>>>0,!1),n.setUint32(o.length-8,Math.floor(r/2**32),!1);let a=new Uint32Array(80),s=(E,g)=>E<<g|E>>>32-g;for(let E=0;E<o.length;E+=64){for(let R=0;R<16;R++)a[R]=n.getUint32(E+R*4,!1);for(let R=16;R<80;R++)a[R]=s(a[R-3]^a[R-8]^a[R-14]^a[R-16],1);let[g,m,h,O,N]=t;for(let R=0;R<80;R++){let S,_;R<20?(S=m&h|~m&O,_=1518500249):R<40?(S=m^h^O,_=1859775393):R<60?(S=m&h|m&O|h&O,_=2400959708):(S=m^h^O,_=3395469782);let C=s(g,5)+S+N+_+a[R]>>>0;N=O,O=h,h=s(m,30),m=g,g=C}t[0]=t[0]+g>>>0,t[1]=t[1]+m>>>0,t[2]=t[2]+h>>>0,t[3]=t[3]+O>>>0,t[4]=t[4]+N>>>0}let i=new Uint8Array(20),u=new DataView(i.buffer);for(let E=0;E<5;E++)u.setUint32(E*4,t[E],!1);return i}function Vi(e){let t=String(e).toLowerCase().replace("-",""),r=su[t];if(!r)throw new Error(`crypto.createHash: only sha1 and sha256 are available in the web build (asked for ${e})`);let o=[];return{update(n){return o.push(typeof n=="string"?Se.from(n):Se.from(n)),this},digest(n){let a=Se.from(r(Se.concat(o)));return n?a.toString(n):a}}}var $i,nu,Xe,su,qi,cu,Tt=xe(()=>{"use strict";A();Ir();$i=()=>crypto.randomUUID?crypto.randomUUID():("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16));nu=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Xe=(e,t)=>e>>>t|e<<32-t;su={sha256:au,sha1:iu};qi=globalThis.crypto,cu={randomBytes:Gi,randomUUID:$i,randomInt:Yi,createHash:Vi,webcrypto:qi}});var qr=X((mS,Ki)=>{"use strict";A();var Qt=/\(\s*\?\s+IS\s+NULL\s+OR\s+([A-Za-z_][\w.]*)\s*=\s*\?\s*\)/i,Ji=new Map;function ln(e){let t=Ji.get(e);if(t)return t;let r=e.match(Qt),n=!!r&&!Qt.test(e.replace(Qt,""))?{split:!0,on:e.replace(Qt,`${r[1]}=?`),off:e.replace(Qt,"1=1")}:{split:!1};return Ji.set(e,n),n}function lu(e,t,r,...o){let n=ln(t);return n.split?r==null?e.prepare(n.off).all(...o):e.prepare(n.on).all(r,...o):e.prepare(t).all(r,r,...o)}function du(e,t,r,...o){let n=ln(t);return n.split?r==null?e.prepare(n.off).get(...o):e.prepare(n.on).get(r,...o):e.prepare(t).get(r,r,...o)}Ki.exports={scopedAll:lu,scopedGet:du,variants:ln}});var Le=X((TS,rs)=>{"use strict";A();var{getDB:ce}=re(),{scopedAll:Zi,scopedGet:me}=qr(),zi=/\[\[([^\[\]|]+?)(?:\|([^\[\]]+?))?\]\]/g,Qi=[["note",(e,t,r)=>e.prepare("SELECT id FROM note WHERE nexus_ref=? AND title=? COLLATE NOCASE").get(r,t)?.id,"note_"],["obj",(e,t,r)=>me(e,"SELECT o.id FROM object o JOIN project p ON o.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"obj_"],["wchar",(e,t,r)=>me(e,"SELECT c.id FROM world_character c JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?) AND c.name=? COLLATE NOCASE",r,t)?.id,"wchar_"],["wobj",(e,t,r)=>me(e,"SELECT o.id FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"wobj_"],["gchar",(e,t,r)=>me(e,"SELECT c.id FROM game_character c JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?) AND c.name=? COLLATE NOCASE",r,t)?.id,"gchar_"],["gel",(e,t,r)=>me(e,"SELECT e.id FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?) AND e.name=? COLLATE NOCASE",r,t)?.id,"gel_"],["wchp",(e,t,r)=>me(e,"SELECT ch.id FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND ch.name=? COLLATE NOCASE",r,t)?.id,"wchp_"],["wnote",(e,t,r)=>me(e,"SELECT wn.id FROM write_note wn JOIN write_project p ON wn.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?) AND wn.notename=? COLLATE NOCASE",r,t)?.id,"wnote_"],["proj",(e,t,r)=>me(e,"SELECT id FROM project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"proj_"],["world",(e,t,r)=>me(e,"SELECT id FROM world_project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"world_"],["game",(e,t,r)=>me(e,"SELECT id FROM game_project WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"game_"],["write",(e,t,r)=>me(e,"SELECT id FROM write_project WHERE (? IS NULL OR nexus_ref=?) AND project_name=? COLLATE NOCASE",r,t)?.id,"write_"],["module",(e,t,r)=>me(e,"SELECT id FROM module WHERE (? IS NULL OR nexus_ref=?) AND name=? COLLATE NOCASE",r,t)?.id,"module_"],["bchp",(e,t,r)=>me(e,"SELECT ch.id FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND ch.name=? COLLATE NOCASE",r,t)?.id,"bchp_"],["chss",(e,t,r)=>me(e,"SELECT s.id FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND s.name=? COLLATE NOCASE",r,t)?.id,"chss_"],["cobj",(e,t,r)=>me(e,"SELECT o.id FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?) AND o.name=? COLLATE NOCASE",r,t)?.id,"cobj_"]],Nt=null;function es(e){let t=Nt;Nt=new Map;try{return e()}finally{Nt=t}}function En(e,t){let r=ce(),o=t??null,n=String(e||"").trim();if(!n)return null;let a=Nt&&`${o}::${n.toLowerCase()}`;if(a!=null&&Nt.has(a))return Nt.get(a);let s=Eu(r,o,n);return a!=null&&Nt.set(a,s),s}function Eu(e,t,r){let o=r.match(/^(\w+):(.+)$/);if(o){let n=Qi.find(([a])=>a===o[1].toLowerCase());if(n){let a=n[1](e,o[2].trim(),t);return a?n[2]+a:null}}for(let[,n,a]of Qi)try{let s=n(e,r,t);if(s)return a+s}catch{}return null}function Be(e,t,r){let o=ce(),n=[];zi.lastIndex=0;let a;for(;(a=zi.exec(String(t||"")))!==null;){let i=a[1].trim();i&&n.push(i)}o.transaction(()=>{o.prepare("DELETE FROM wiki_link WHERE src_key=?").run(e);let i=new Set;for(let u of n){let E=u.toLowerCase();i.has(E)||(i.add(E),o.prepare("INSERT INTO wiki_link (nexus_ref, src_key, target_key, target_text) VALUES (?,?,?,?)").run(r??null,e,En(u,r),u))}})()}var uu=e=>ce().prepare("SELECT nexus_ref FROM note WHERE id=?").get(e)?.nexus_ref??null,pu=e=>ce().prepare("SELECT p.nexus_ref FROM object o JOIN project p ON o.project_id=p.id WHERE o.id=?").get(e)?.nexus_ref??null,_u=e=>ce().prepare(`
  SELECT p.nexus_ref FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id
  JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE ch.id=?
`).get(e)?.nexus_ref??null;function mu(){let e=ce();return es(()=>e.transaction(fu)())}function fu(){let e=ce();e.prepare("DELETE FROM wiki_link").run();for(let t of e.prepare("SELECT id, content, nexus_ref FROM note WHERE content LIKE '%[[%'").all())Be(`note_${t.id}`,t.content,t.nexus_ref);for(let t of e.prepare("SELECT o.id, o.note, p.nexus_ref FROM object o JOIN project p ON o.project_id=p.id WHERE o.note LIKE '%[[%'").all())Be(`obj_${t.id}`,t.note,t.nexus_ref);for(let t of e.prepare(`
    SELECT ch.id, ch.chapter_content, p.nexus_ref FROM write_chapter ch
    JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id
    JOIN write_project p ON s.project_id=p.id WHERE ch.chapter_content LIKE '%[[%'
  `).all())Be(`wchp_${t.id}`,t.chapter_content,t.nexus_ref);for(let t of e.prepare("SELECT id, description, nexus_ref FROM module WHERE description LIKE '%[[%'").all())Be(`module_${t.id}`,t.description,t.nexus_ref);for(let t of e.prepare("SELECT ch.id, ch.chapter_content, m.nexus_ref FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE ch.chapter_content LIKE '%[[%'").all())Be(`bchp_${t.id}`,t.chapter_content,t.nexus_ref);for(let t of e.prepare(`
    SELECT s.id, m.nexus_ref, COALESCE(GROUP_CONCAT(g.message, char(10)), '') AS content
    FROM chat_session s JOIN module m ON s.module_ref=m.id
    JOIN chat_message g ON g.session_ref=s.id
    GROUP BY s.id HAVING content LIKE '%[[%'
  `).all())Be(`chss_${t.id}`,t.content,t.nexus_ref);for(let t of e.prepare("SELECT o.id, o.note, m.nexus_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE o.note LIKE '%[[%'").all())Be(`cobj_${t.id}`,t.note,t.nexus_ref)}var dn={note:{sql:"SELECT id, title AS name FROM note WHERE id=?",type:"note",module:"scribe"},obj:{sql:"SELECT id, name FROM object WHERE id=?",type:"object",module:"director"},wchar:{sql:"SELECT id, name FROM world_character WHERE id=?",type:"character",module:"navigator"},wobj:{sql:"SELECT id, name FROM world_orig_object WHERE id=?",type:"object",module:"navigator"},gchar:{sql:"SELECT id, name FROM game_character WHERE id=?",type:"character",module:"hero"},gel:{sql:"SELECT id, name FROM game_col_element WHERE id=?",type:"object",module:"hero"},wchp:{sql:"SELECT id, name FROM write_chapter WHERE id=?",type:"chapter",module:"writer"},wnote:{sql:"SELECT id, notename AS name FROM write_note WHERE id=?",type:"note",module:"writer"},proj:{sql:"SELECT id, name FROM project WHERE id=?",type:"project",module:"director"},world:{sql:"SELECT id, name FROM world_project WHERE id=?",type:"project",module:"navigator"},game:{sql:"SELECT id, name FROM game_project WHERE id=?",type:"project",module:"hero"},write:{sql:"SELECT id, project_name AS name FROM write_project WHERE id=?",type:"project",module:"writer"},module:{sql:"SELECT id, name FROM module WHERE id=?",type:"module",module:"hub"},bchp:{sql:"SELECT id, name FROM book_chapter WHERE id=?",type:"chapter",module:"author"},chss:{sql:"SELECT id, name FROM chat_session WHERE id=?",type:"chat",module:"scribe"},cobj:{sql:"SELECT id, name FROM classifier_object WHERE id=?",type:"object",module:"classifier"}},Jr=64,Tu=Object.fromEntries(Object.entries(dn).map(([e,t])=>{if(!/WHERE id=\?$/.test(t.sql))throw new Error(`KEY_LOOKUPS.${e}.sql must end in "WHERE id=?"`);return[e,`${t.sql.replace(/WHERE id=\?$/,"")}WHERE id IN (${Array(Jr).fill("?").join(",")})`]}));function un(e){let t=ce(),r=e||[],o=new Map,n=new Map;for(let i of r){if(n.has(i))continue;let u=String(i).match(/^([a-z]+)_(\d+)$/);if(!u||!dn[u[1]])continue;let E=Number(u[2]);n.set(i,{prefix:u[1],id:E}),o.has(u[1])||o.set(u[1],[]),o.get(u[1]).push(E)}let a=new Map;for(let[i,u]of o){let E=dn[i],g=Tu[i];try{for(let m=0;m<u.length;m+=Jr){let h=u.slice(m,m+Jr);for(;h.length<Jr;)h.push(h[h.length-1]);for(let O of t.prepare(g).all(...h))a.set(`${i}_${O.id}`,{name:O.name,type:E.type,module:E.module})}}catch{}}let s=[];for(let i of r){let u=a.get(i);u&&s.push({key:i,...u})}return s}var Nu=e=>{let t=ce().prepare("SELECT DISTINCT src_key FROM wiki_link WHERE target_key=?").all(e);return un(t.map(r=>r.src_key))},gu=e=>{let t=ce().prepare("SELECT target_key, target_text FROM wiki_link WHERE src_key=?").all(e),r=un(t.filter(n=>n.target_key).map(n=>n.target_key)),o=new Map(r.map(n=>[n.key,n]));return t.map(n=>n.target_key&&o.has(n.target_key)?o.get(n.target_key):{key:null,name:n.target_text,type:"unresolved",module:null})};function Ru(e){let t=ce().prepare(`
    SELECT target_key k, COUNT(*) c FROM wiki_link
    WHERE target_key IS NOT NULL AND (? IS NULL OR nexus_ref=?) GROUP BY target_key
  `).all(e??null,e??null);return Object.fromEntries(t.map(r=>[r.k,r.c]))}function ts(e){return ce().readTx(()=>hu(e))()}function hu(e){let t=ce(),r=e??null,o=[],n=(a,s,i,u)=>{try{for(let E of Zi(t,a,r))o.push({key:`${s}${E.id}`,name:E.name,type:i,module:u,color:E.color_code||null})}catch{}};return n("SELECT n.id, n.title AS name, uc.color_code FROM note n LEFT JOIN use_color uc ON uc.id=n.color WHERE (? IS NULL OR n.nexus_ref=?)","note_","note","scribe"),n("SELECT o.id, o.name, uc.color_code FROM object o JOIN project p ON o.project_id=p.id LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR p.nexus_ref=?)","obj_","object","director"),n("SELECT c.id, c.name, uc.color_code FROM world_character c JOIN world_project w ON c.world_ref=w.id LEFT JOIN use_color uc ON uc.id=c.color WHERE (? IS NULL OR w.nexus_ref=?)","wchar_","character","navigator"),n("SELECT o.id, o.name, NULL AS color_code FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)","wobj_","object","navigator"),n("SELECT c.id, c.name, uc.color_code FROM game_character c JOIN game_project g ON c.game_ref=g.id LEFT JOIN use_color uc ON uc.id=c.color_ref WHERE (? IS NULL OR g.nexus_ref=?)","gchar_","character","hero"),n("SELECT e.id, e.name, NULL AS color_code FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)","gel_","object","hero"),n("SELECT ch.id, ch.name, uc.color_code FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id LEFT JOIN use_color uc ON uc.id=ch.color WHERE (? IS NULL OR p.nexus_ref=?)","wchp_","chapter","writer"),n("SELECT id, name, NULL AS color_code FROM project WHERE (? IS NULL OR nexus_ref=?)","proj_","project","director"),n("SELECT id, name, NULL AS color_code FROM world_project WHERE (? IS NULL OR nexus_ref=?)","world_","project","navigator"),n("SELECT id, name, NULL AS color_code FROM game_project WHERE (? IS NULL OR nexus_ref=?)","game_","project","hero"),n("SELECT id, project_name AS name, NULL AS color_code FROM write_project WHERE (? IS NULL OR nexus_ref=?)","write_","project","writer"),n("SELECT m.id, m.name, uc.color_code FROM module m LEFT JOIN use_color uc ON uc.id=m.color WHERE (? IS NULL OR m.nexus_ref=?)","module_","module","hub"),n("SELECT ch.id, ch.name, NULL AS color_code FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)","bchp_","chapter","author"),n("SELECT s.id, s.name, NULL AS color_code FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)","chss_","chat","scribe"),n("SELECT o.id, o.name, uc.color_code FROM classifier_object o JOIN module m ON o.module_ref=m.id LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR m.nexus_ref=?)","cobj_","object","classifier"),o}function Su(e){return ce().readTx(()=>Ou(e))()}function Ou(e){let t=ce(),r=e??null,o=[],n=new Map;for(let E of ts(e))n.has(E.key)||(n.set(E.key,o.length),o.push({id:o.length,key:E.key,label:E.name,type:E.type,module:E.module}));let a=[],s=new Set,i=(E,g,m)=>{let h=n.get(E),O=n.get(g);if(h==null||O==null||h===O)return;let N=(h<O?`${h}-${O}`:`${O}-${h}`)+(m?"w":"");s.has(N)||(s.add(N),a.push({source:h,target:O,wiki:!!m}))},u=(E,g)=>{try{Zi(t,E,r).forEach(g)}catch{}};return u("SELECT o.id, o.project_id FROM object o JOIN project p ON o.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",E=>i(`obj_${E.id}`,`proj_${E.project_id}`)),u("SELECT c.id, c.world_ref FROM world_character c JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",E=>i(`wchar_${E.id}`,`world_${E.world_ref}`)),u("SELECT o.id, c.world_ref FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",E=>i(`wobj_${E.id}`,`world_${E.world_ref}`)),u("SELECT c.id, c.game_ref FROM game_character c JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",E=>i(`gchar_${E.id}`,`game_${E.game_ref}`)),u("SELECT e.id, c.game_ref FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id JOIN game_project g ON c.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",E=>i(`gel_${E.id}`,`game_${E.game_ref}`)),u("SELECT ch.id, s.project_id FROM write_chapter ch JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",E=>i(`wchp_${E.id}`,`write_${E.project_id}`)),u("SELECT ch.id, ch.module_ref FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",E=>i(`bchp_${E.id}`,`module_${E.module_ref}`)),u("SELECT s.id, s.module_ref FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",E=>i(`chss_${E.id}`,`module_${E.module_ref}`)),u("SELECT o.id, o.module_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)",E=>i(`cobj_${E.id}`,`module_${E.module_ref}`)),u("SELECT wn.world_ref, wn.project_ref FROM world_novel wn JOIN world_project w ON wn.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",E=>i(`world_${E.world_ref}`,`proj_${E.project_ref}`)),u("SELECT gl.game_ref, gl.project_ref FROM game_novel_link gl JOIN game_project g ON gl.game_ref=g.id WHERE (? IS NULL OR g.nexus_ref=?)",E=>i(`game_${E.game_ref}`,`proj_${E.project_ref}`)),u("SELECT s.project_id, l.novel_id FROM write_novel_link l JOIN write_series s ON l.series_id=s.id JOIN write_project p ON s.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",E=>i(`write_${E.project_id}`,`proj_${E.novel_id}`)),u("SELECT ro.object_from, ro.object_to FROM relation_obob ro JOIN relation rl ON ro.relation_id=rl.id JOIN project p ON rl.project_id=p.id WHERE (? IS NULL OR p.nexus_ref=?)",E=>i(`obj_${E.object_from}`,`obj_${E.object_to}`)),u("SELECT cl.character_ref, cl.object_ref FROM world_character_link cl JOIN world_character c ON cl.character_ref=c.id JOIN world_project w ON c.world_ref=w.id WHERE (? IS NULL OR w.nexus_ref=?)",E=>i(`wchar_${E.character_ref}`,`obj_${E.object_ref}`)),u("SELECT src_key, target_key FROM wiki_link WHERE target_key IS NOT NULL AND (? IS NULL OR nexus_ref=?)",E=>i(E.src_key,E.target_key,!0)),{nodes:o,edges:a}}function Lu(e){let t=ce(),r=String(e).match(/^([a-z]+)_(\d+)$/);if(!r)return null;let o=Number(r[2]);try{switch(r[1]){case"note":return{kind:"note",noteId:o};case"obj":{let n=t.prepare("SELECT id, project_id, category_id FROM object WHERE id=?").get(o);return n&&{kind:"obj",projectId:n.project_id,categoryId:n.category_id,objectId:o}}case"proj":return{kind:"proj",projectId:o};case"world":return{kind:"world",worldId:o};case"game":return{kind:"game",gameId:o};case"write":return{kind:"write",writeId:o};case"wchar":{let n=t.prepare("SELECT world_ref FROM world_character WHERE id=?").get(o);return n&&{kind:"world",worldId:n.world_ref,charId:o}}case"wobj":{let n=t.prepare("SELECT c.world_ref FROM world_orig_object o JOIN world_orig_category c ON o.category_id=c.id WHERE o.id=?").get(o);return n&&{kind:"world",worldId:n.world_ref,objId:o}}case"gchar":{let n=t.prepare("SELECT game_ref FROM game_character WHERE id=?").get(o);return n&&{kind:"game",gameId:n.game_ref,charId:o}}case"gel":{let n=t.prepare("SELECT c.game_ref FROM game_col_element e JOIN game_collection c ON e.collection_ref=c.id WHERE e.id=?").get(o);return n&&{kind:"game",gameId:n.game_ref,elementId:o}}case"wchp":{let n=t.prepare(`
          SELECT ch.book_id, b.series_id, s.project_id FROM write_chapter ch
          JOIN write_book b ON ch.book_id=b.id JOIN write_series s ON b.series_id=s.id WHERE ch.id=?
        `).get(o);return n&&{kind:"wchp",writeId:n.project_id,seriesId:n.series_id,bookId:n.book_id,chapterId:o}}case"wnote":{let n=t.prepare("SELECT project_id FROM write_note WHERE id=?").get(o);return n&&{kind:"write",writeId:n.project_id,wnoteId:o}}case"module":return{kind:"module",moduleId:o};case"bchp":{let n=t.prepare("SELECT module_ref FROM book_chapter WHERE id=?").get(o);return n&&{kind:"bchp",moduleId:n.module_ref,chapterId:o}}case"chss":{let n=t.prepare("SELECT module_ref FROM chat_session WHERE id=?").get(o);return n&&{kind:"chss",moduleId:n.module_ref,sessionId:o}}case"cobj":{let n=t.prepare("SELECT module_ref FROM classifier_object WHERE id=?").get(o);return n&&{kind:"cobj",moduleId:n.module_ref,objectId:o}}}}catch{}return null}function Iu(e,t){let r=ce();return es(()=>r.transaction(()=>{let o=r.prepare("SELECT id, target_text FROM wiki_link WHERE target_key IS NULL AND (? IS NULL OR nexus_ref=?)").all(t??null,t??null),n=i=>String(i).replace(/^\w+:/,"").trim().toLowerCase(),a=String(e).trim().toLowerCase(),s=0;for(let i of o){if(n(i.target_text)!==a)continue;let u=En(i.target_text,t);u&&(r.prepare("UPDATE wiki_link SET target_key=?, update_at=datetime('now') WHERE id=?").run(u,i.id),s++)}return s})())}var Au={note:{get:"SELECT content AS c FROM note WHERE id=?",set:"UPDATE note SET content=?, update_at=datetime('now') WHERE id=?"},obj:{get:"SELECT note AS c FROM object WHERE id=?",set:"UPDATE object SET note=?, update_at=datetime('now') WHERE id=?"},wchp:{get:"SELECT chapter_content AS c FROM write_chapter WHERE id=?",set:"UPDATE write_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?"},module:{get:"SELECT description AS c FROM module WHERE id=?",set:"UPDATE module SET description=?, update_at=datetime('now') WHERE id=?"},bchp:{get:"SELECT chapter_content AS c FROM book_chapter WHERE id=?",set:"UPDATE book_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?"},cobj:{get:"SELECT note AS c FROM classifier_object WHERE id=?",set:"UPDATE classifier_object SET note=?, update_at=datetime('now') WHERE id=?"},chss:{rewrite:(e,t,r)=>{let o=!1;for(let n of e.prepare("SELECT id, message FROM chat_message WHERE session_ref=?").all(t)){let a=r(n.message);a!==n.message&&(e.prepare("UPDATE chat_message SET message=? WHERE id=?").run(a,n.id),o=!0)}return o?e.prepare("SELECT COALESCE(GROUP_CONCAT(message, char(10)), '') AS c FROM chat_message WHERE session_ref=?").get(t)?.c??"":null}}};function wu(e,t,r){let o=ce();if(!t||!r||t===r)return 0;let n=String(t).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`\\[\\[((?:\\w+:)?)\\s*${n}\\s*(\\||\\]\\])`,"gi"),s=o.prepare("SELECT DISTINCT src_key, nexus_ref FROM wiki_link WHERE target_key=?").all(e),i=0;for(let u of s){let E=String(u.src_key).match(/^([a-z]+)_(\d+)$/),g=E&&Au[E[1]];if(!g)continue;let m=Number(E[2]);if(g.rewrite){let N=g.rewrite(o,m,R=>String(R||"").replace(a,(S,_,C)=>`[[${_}${r}${C}`));N!==null&&(Be(u.src_key,N,u.nexus_ref),i++);continue}let h=o.prepare(g.get).get(m);if(!h||!h.c)continue;let O=h.c.replace(a,(N,R,S)=>`[[${R}${r}${S}`);O!==h.c&&(o.prepare(g.set).run(O,m),Be(u.src_key,O,u.nexus_ref),i++)}return i}rs.exports={renameWikiTarget:wu,resolveDanglingLinks:Iu,resolveWikiName:En,reindexWikiLinks:Be,rebuildWikiIndex:mu,nexusOfNote:uu,nexusOfObject:pu,nexusOfChapter:_u,getBacklinks:Nu,getOutgoingLinks:gu,resolveEntityKeys:un,quickIndex:ts,getEntityPath:Lu,getGraph:Su,getLinkCounts:Ru}});var hn=X((gS,Es)=>{"use strict";A();var{_now:Ge,_t:$e,hasTable:os,hasColumn:ns,hasAnyMissingColumns:yu}=Ze(),{APP_DDL_SQL:as,VAULT_DDL_SQL:is}=Mi(),{VAULT_SCHEMA_VERSION:Cu}=nn(),{INDEX_SQL:bu}=an(),{SEED_SYMBOLS:ku}=sn(),{migrateInlineColumns:ss,migrateNexusV28:Du,migrateMapV3:Fu,migrateTimelineV3:xu,migrateWriterV27:Mu,migrateHeroV26:Uu,migratePluginV42:cs,ensureIndexes:ls}=cn(),Tn=2;function Nn(e){return(Tt(),W(ft)).createHash("sha1").update(e.join("\0")).digest().readUInt32BE(0)&2147483647||1}var pn=null;function Kr(){return pn===null&&(pn=Nn([String(Tn),as,String(gn),String(cs)])),pn}var _n=null;function zr(){return _n===null&&(_n=Nn([String(Tn),String(Cu),is,bu,ku.join(""),String(Rn),String(ss),String(Du),String(Fu),String(xu),String(Mu),String(Uu),String(ls)])),_n}var mn=null;function fn(){return mn===null&&(mn=Nn([String(Kr()),String(zr()),String(ds)])),mn}function gn(e){let t=Kr();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){$e("initAppDB (skipped, stamp match)",Ge());return}let o=Ge();cs(e),$e("plugin v4.2 rename",o);let n=Ge();e.exec(as),$e("app DDL exec",n),e.exec(`PRAGMA user_version = ${Kr()|0}`)}function Rn(e){let t=zr();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){$e("initVaultDB (skipped, stamp match)",Ge());return}let o=Ge(),n=os(e,"wiki_link");try{(os(e,"world_cat_object")||ns(e,"world_project","color_ref")&&!ns(e,"world_project","codename")||yu(e,[["world_project",["codename","name","memo","color"]],["world_novel",["world_ref","project_ref"]],["world_character",["world_ref","name","symbol","color"]],["world_character_category",["world_ref","category_ref"]],["world_character_link",["character_ref","object_ref"]],["world_category",["world_ref","category_ref"]],["world_object",["category_ref","object_ref","symbol"]],["world_map",["world_ref","map_ref"]],["world_map_area",["world_map_ref","area_ref","color"]],["world_map_point",["world_map_area_ref","point_ref"]],["world_timeline",["world_ref","name","world_map_ref"]],["world_timeline_date",["day","month","years","hour","minute"]],["world_timeline_event",["timeline_ref","date_ref"]],["world_timeline_point",["x","y"]],["world_timeline_object",["event_ref","world_object_ref","world_character_ref","point_ref"]]]))&&(e.exec("PRAGMA foreign_keys = OFF"),e.exec(`
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
      `),e.exec("PRAGMA foreign_keys = ON"))}catch{}$e("legacy-nav probe",o);let a=Ge();e.exec(is),$e("vault DDL exec",a);let s=Ge();ss(e),$e("migrations + seed",s);let i=Ge();if(ls(e),$e("ensureIndexes",i),!n){let u=Ge();try{Le().rebuildWikiIndex()}catch(E){console.error("wiki backfill error:",E)}$e("wiki backfill",u)}e.exec(`PRAGMA user_version = ${zr()|0}`)}function ds(e){let t=fn();if(Number(e.prepare("PRAGMA user_version").get()?.user_version||0)===t){$e("initDB (skipped, stamp match)",Ge());return}e.exec("PRAGMA user_version = 0"),gn(e),Rn(e),e.exec(`PRAGMA user_version = ${fn()|0}`)}Es.exports={SCHEMA_EPOCH:Tn,schemaStamp:fn,appSchemaStamp:Kr,vaultSchemaStamp:zr,initDB:ds,initAppDB:gn,initVaultDB:Rn}});var On=X((hS,Ts)=>{"use strict";A();var Qr=(Oe(),W(Ce)),Sn=(Te(),W(Me)),{getAppDB:Ye,getVaultDB:vu,dataDir:ju,openVaultIds:Pu}=Ze(),us=()=>Sn.join(ju(),"vaults");function Wu(e,t){let r=String(e||"nexus").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"-").slice(0,60)||"nexus";return Sn.join(us(),`${r}-${t}.ddx`)}var ps=e=>e.file_path?!Qr.existsSync(e.file_path):!1;function Hu(){return Ye().prepare(`
    SELECT * FROM nexus_file ORDER BY name COLLATE NOCASE
  `).all().map(e=>({...e,missing:ps(e)?1:0}))}function Xu(e){let t=Ye().prepare("SELECT * FROM nexus_file WHERE id=?").get(e);return t?{...t,missing:ps(t)?1:0}:null}function Bu({name:e,memo:t=null,colorCode:r=null,filePath:o=null}){return Ye().prepare(`
    INSERT INTO nexus_file (name, memo, color_code, file_path) VALUES (?,?,?,?)
  `).run(e,t,r,o).lastInsertRowid}function Gu({id:e,name:t,memo:r=null,colorCode:o=null,filePath:n=null}){return Ye().prepare(`
    INSERT INTO nexus_file (id, name, memo, color_code, file_path) VALUES (?,?,?,?,?)
  `).run(e,t,r,o,n),e}var $u=(e,{name:t,memo:r,colorCode:o})=>Ye().prepare(`
  UPDATE nexus_file SET name=?, memo=?, color_code=?, update_at=datetime('now') WHERE id=?
`).run(t,r??null,o??null,e),Yu=(e,t)=>Ye().prepare(`
  UPDATE nexus_file SET file_path=?, missing=0, update_at=datetime('now') WHERE id=?
`).run(t,e),Vu=e=>Ye().prepare(`
  UPDATE nexus_file SET last_opened_at=datetime('now') WHERE id=?
`).run(e),qu=e=>Ye().prepare("DELETE FROM nexus_file WHERE id=?").run(e);function Ju(e,t=null){let r=n=>{try{return Qr.realpathSync.native?Qr.realpathSync.native(n):Qr.realpathSync(n)}catch{return Sn.resolve(n)}},o=r(e);return Ye().prepare("SELECT id, file_path FROM nexus_file WHERE file_path IS NOT NULL").all().some(n=>n.id!==t&&r(n.file_path)===o)}var _s=["project","world_project","game_project","write_project"];function ms(e,t){let r=0;for(let o of _s)r+=e.prepare(`SELECT COUNT(*) AS c FROM ${o} WHERE nexus_ref=?`).get(t).c;return r+=e.prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=? AND parent_id IS NULL").get(t).c,r}function fs(e){try{let t=ms(vu(e),e);return Ye().prepare(`
      UPDATE nexus_file SET project_count=?, counts_at=datetime('now') WHERE id=?
    `).run(t,e),t}catch{return null}}function Ku(){for(let e of Pu())fs(e)}Ts.exports={NEXUS_PROJECT_TABLES:_s,refreshOpenVaultCounts:Ku,vaultDefaultPath:Wu,vaultsDir:us,listVaults:Hu,getVault:Xu,insertVault:Bu,insertVaultWithId:Gu,updateVaultMeta:$u,setVaultPath:Yu,touchVaultOpened:Vu,removeVault:qu,vaultPathInUse:Ju,countVaultItems:ms,refreshVaultCounts:fs}});var hs=X((OS,Rs)=>{"use strict";A();var le=(Oe(),W(Ce)),at=(Te(),W(Me)),{Database:zu}=(zt(),W(Hr)),{adaptDb:Qu,forceLegacyJournalMode:Zu}=Ze(),{NEXUS_PROJECT_TABLES:Ln}=On(),ep=new Set(["use_color","app_setting","nexus_file","plugin","plugin_table","plugin_dependency","sqlite_sequence"]),tp=new Set(["app_setting","nexus_file","plugin","plugin_table","plugin_dependency"]),Ns=/^(plg|ext)_[a-z0-9_]{1,41}$/,rp=["DELETE FROM relation_obob WHERE object_from NOT IN (SELECT id FROM object) OR object_to NOT IN (SELECT id FROM object)","DELETE FROM relation_obtl WHERE object_from NOT IN (SELECT id FROM object) OR timeline_to NOT IN (SELECT id FROM timeline_event)","DELETE FROM relation_tltl WHERE timeline_from NOT IN (SELECT id FROM timeline_event) OR timeline_to NOT IN (SELECT id FROM timeline_event)"],op=e=>String(e||"nexus").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"-").slice(0,60)||"nexus";function In(e){le.existsSync(e)&&!le.existsSync(e+"-wal")&&Zu(e);let t=Qu(new zu(e));return t.exec("PRAGMA busy_timeout = 5000"),t.exec("PRAGMA journal_mode = DELETE"),t}var gs=e=>e.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(t=>t.name);function np(e){let t=In(e);try{t.exec("PRAGMA foreign_keys = ON");let r=t.prepare("SELECT MIN(id) AS m FROM nexus").get()?.m;if(r!=null)for(let o of Ln)try{t.prepare(`UPDATE ${o} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(r)}catch{}return t.prepare(`
      SELECT n.id, n.name, n.memo, c.color_code
      FROM nexus n LEFT JOIN use_color c ON c.id = n.color
      ORDER BY n.id
    `).all()}finally{try{t.close()}catch{}}}function ap(e,t,r){le.copyFileSync(e,t);let o=In(t);try{o.exec("PRAGMA foreign_keys = ON"),o.transaction(()=>{o.exec("PRAGMA defer_foreign_keys = ON");for(let s of Ln)o.prepare(`DELETE FROM ${s} WHERE nexus_ref IS NOT ?`).run(r);o.prepare("DELETE FROM nexus WHERE id <> ?").run(r);for(let s of rp)try{o.prepare(s).run()}catch{}})();let n=o.prepare("PRAGMA foreign_key_check").all();if(n.length)throw new Error(`foreign_key_check failed for nexus ${r}: ${JSON.stringify(n[0])}`);let a=0;for(let s of Ln)a+=o.prepare(`SELECT COUNT(*) AS c FROM ${s} WHERE nexus_ref=?`).get(r).c;a+=o.prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=? AND parent_id IS NULL").get(r).c;for(let s of gs(o))(tp.has(s)||Ns.test(s))&&o.prepare(`DROP TABLE IF EXISTS ${s}`).run();return o.exec("PRAGMA user_version = 0"),o.exec("VACUUM"),a}finally{try{o.close()}catch{}}}function ip(e,t,r,o,n){le.copyFileSync(e,t);let a=In(t);try{a.exec("PRAGMA foreign_keys = OFF");for(let s of gs(a))ep.has(s)||Ns.test(s)||a.prepare(`DROP TABLE IF EXISTS ${s}`).run();return a.exec("PRAGMA user_version = 0"),a.exec("PRAGMA foreign_keys = ON"),a.exec("VACUUM"),hn().initAppDB(a),a.transaction(()=>{a.prepare("DELETE FROM nexus_file").run();for(let s of r)a.prepare(`
          INSERT INTO nexus_file (id, name, memo, color_code, file_path, project_count, counts_at)
          VALUES (?,?,?,?,?,?,datetime('now'))
        `).run(s.id,s.name,s.memo??null,s.color_code??null,o.get(s.id),n.get(s.id)??0)})(),a.prepare("SELECT COUNT(*) AS c FROM nexus_file").get().c}finally{try{a.close()}catch{}}}function sp(e){let t=at.join(e,"novel-manager.ddx"),r=at.join(e,"app.ddx"),o=at.join(e,"vaults"),n=at.join(e,".ddx-split-tmp");if(le.existsSync(r)||!le.existsSync(t))return{ok:!1,code:"not_applicable"};let a=le.statSync(t).size;try{let s=le.statfsSync(e),i=s.bavail*s.bsize;if(i<a*3)throw new Error(`not enough free disk space: need ~${Math.ceil(a*3/1e6)}MB, have ${Math.floor(i/1e6)}MB`)}catch(s){if(/not enough free disk space/.test(String(s&&s.message)))throw s}le.rmSync(n,{recursive:!0,force:!0}),le.mkdirSync(n,{recursive:!0});try{let s=np(t),i=new Map,u=new Map,E=[];for(let g of s){let m=at.join(n,`vault-${g.id}.ddx`);u.set(g.id,ap(t,m,g.id));let h=at.join(o,`${op(g.name)}-${g.id}.ddx`);i.set(g.id,h),E.push([m,h])}ip(t,at.join(n,"app.ddx"),s,i,u),le.mkdirSync(o,{recursive:!0});for(let[g,m]of E)le.renameSync(g,m);le.renameSync(at.join(n,"app.ddx"),r);try{le.renameSync(t,t+".bak");for(let g of["-wal","-shm"])le.existsSync(t+g)&&le.renameSync(t+g,t+".bak"+g)}catch{}return le.rmSync(n,{recursive:!0,force:!0}),console.log(`[split] ${s.length} nexus(es) split into ${o}; original kept as novel-manager.ddx.bak`),{ok:!0,vaults:s.length}}catch(s){throw le.rmSync(n,{recursive:!0,force:!0}),s}}Rs.exports={splitLegacyDatabase:sp}});var Ze=X((AS,Ds)=>{"use strict";A();var{Database:Is}=(zt(),W(Hr)),oe=(Oe(),W(Ce)),Zt=(Te(),W(Me)),IS=(Br(),W(Xr)),{app:cp}=(pe(),W(_e)),{currentNexusId:lp}=mt(),As=!!U.env.DDX_PERF,ws=[],eo=()=>As?performance.now():0,to=As?(e,t)=>{let r=+(performance.now()-t).toFixed(1);ws.push({label:e,ms:r}),console.log(`[perf] ${e.padEnd(28)} ${r}ms`)}:()=>{},dp=()=>ws,Ss=256;function An(e){let t=e.prepare.bind(e),r=e.exec.bind(e),o=typeof e.close=="function"?e.close.bind(e):null,n=new Map,a=new Map,s=!1,i=null,u=()=>{for(let h of n.values())try{h.isFinalized||h.finalize()}catch{}n.clear()},E=/^\s*(?:--[^\n]*\n|\/\*[\s\S]*?\*\/|\s)*(CREATE|ALTER|DROP|REINDEX|VACUUM|ATTACH|DETACH|PRAGMA)\b/i,g=h=>{let O=n.get(h);if(O)return n.delete(h),n.set(h,O),O;let N=t(h);if(i===null&&(i=typeof N._reset=="function"),!i)return N;if(n.set(h,N),n.size>Ss){let R=n.keys().next().value,S=n.get(R);n.delete(R);try{S.finalize()}catch{}}return N};e.prepare=h=>{let O=a.get(h);if(O)return O;let N=(S,_,C)=>{if(!s||i===!1||E.test(h)){E.test(h)&&u();let I=t(h);try{let L=I[S](_);return C?C(L):L}finally{I.finalize()}}let y=g(h);if(!n.has(h))try{let I=y[S](_);return C?C(I):I}finally{y.finalize()}try{let I=y[S](_);return C?C(I):I}finally{try{y._reset()}catch{n.delete(h);try{y.finalize()}catch{}}}},R={all:(...S)=>N("all",S),get:(...S)=>N("get",S,_=>_===null?void 0:_),run:(...S)=>N("run",S)};return a.size<Ss*4&&a.set(h,R),R},e.exec=h=>{let O=String(h).trimStart().slice(0,9).toUpperCase();return O.startsWith("BEGIN")||O.startsWith("COMMIT")||O.startsWith("ROLLBACK")||u(),r(h)},o&&(e.close=(...h)=>(u(),a.clear(),o(...h))),e.setStatementCache=h=>{h||u(),s=!!h},e.statementCacheSize=()=>n.size,e.readTx=h=>e.transaction(h);let m=0;return e.transaction=h=>(...O)=>{if(m>0)return h(...O);m++,e.exec("BEGIN");try{let N=h(...O);return e.exec("COMMIT"),N}catch(N){try{e.exec("ROLLBACK")}catch{}throw N}finally{m--}},e}function wn(e){try{let t=M.alloc(2),r=oe.openSync(e,"r+");oe.readSync(r,t,0,2,18),(t[0]===2||t[1]===2)&&(t[0]=1,t[1]=1,oe.writeSync(r,t,0,2,18),oe.fsyncSync(r)),oe.closeSync(r)}catch{}}var er=()=>Zt.dirname(cp.getPath("userData")),Ut=class extends Error{constructor(t){super(`vault file not found: ${t}`),this.code="vault_file_missing",this.filePath=t}};function tr(e,{kind:t,create:r=!1,register:o=null}={}){let n=Zt.dirname(e);if(!oe.existsSync(n)){if(!r)throw new Ut(e);oe.mkdirSync(n,{recursive:!0})}if(!r&&!oe.existsSync(e))throw new Ut(e);oe.existsSync(e)&&!oe.existsSync(e+"-wal")&&wn(e);try{oe.rmSync(e+".lock",{recursive:!0,force:!0})}catch{}let a=eo(),s=An(new Is(e));to(`open ${t}`,a);let i=eo();s.exec("PRAGMA busy_timeout = 5000"),s.exec("PRAGMA journal_mode = DELETE"),s.exec("PRAGMA foreign_keys = ON"),s.exec(`PRAGMA cache_size = ${t==="app"?-2e3:-4e3}`),s.exec("PRAGMA temp_store = MEMORY"),to("pragmas",i),o&&o(s);let u=eo(),E=hn();return t==="app"?E.initAppDB(s):t==="vault"?E.initVaultDB(s):E.initDB(s),to(`init ${t} (total)`,u),s.setStatementCache(!0),s}var Os=()=>Zt.join(er(),"app.ddx"),ys=()=>Zt.join(er(),"novel-manager.ddx"),Zr=null,Ve=new Map,yn=new Set,Ls=4;function Ep(){let e=er();oe.existsSync(e)||oe.mkdirSync(e,{recursive:!0});let t=ys(),r=Zt.join(e,"novel-manager.db");if(!oe.existsSync(t)&&oe.existsSync(r))try{oe.renameSync(r,t),oe.existsSync(r+"-wal")&&oe.renameSync(r+"-wal",t+"-wal"),oe.existsSync(r+"-shm")&&oe.renameSync(r+"-shm",t+"-shm")}catch{}let o=null;return tr(t,{kind:"single",create:!0,register:n=>{o=n}}),o}function Cs(){if(Zr)return Zr;let e=er();if(oe.existsSync(e)||oe.mkdirSync(e,{recursive:!0}),!oe.existsSync(Os())&&oe.existsSync(ys())){let t=Ep();try{t.close()}catch{}hs().splitLegacyDatabase(e)}return tr(Os(),{kind:"app",create:!0,register:t=>{Zr=t}}),Zr}function bs(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)throw new Mt(e);let r=Ve.get(t);if(r)return r.lastUsed=Date.now(),r.conn;let o=Cs().prepare("SELECT file_path FROM nexus_file WHERE id=?").get(t);if(!o)throw new Mt(t);if(!o.file_path)throw new Mt(t);let n=null;return tr(o.file_path,{kind:"vault",create:!1,register:a=>{n=a,Ve.set(t,{conn:a,filePath:o.file_path,lastUsed:Date.now()})}}),_p(),n}function up(e,t){let r=Number(e),o=null;return tr(t,{kind:"vault",create:!0,register:n=>{o=n,Ve.set(r,{conn:n,filePath:t,lastUsed:Date.now()})}}),o}function pp(e){if(!oe.existsSync(e))throw new Ut(e);oe.existsSync(e+"-wal")||wn(e);let t=An(new Is(e));if(t.exec("PRAGMA busy_timeout = 5000"),!["nexus","module"].every(o=>ro(t,o))){try{t.close()}catch{}throw new Error("not a vault file")}return t}function _p(){if(Ve.size<=Ls)return;let e=[...Ve.entries()].filter(([t])=>!yn.has(t)).sort((t,r)=>t[1].lastUsed-r[1].lastUsed);for(;Ve.size>Ls&&e.length;){let[t]=e.shift();Cn(t)}}function Cn(e){let t=Ve.get(Number(e));if(!t)return!1;Ve.delete(Number(e));try{t.conn.close()}catch{}return!0}var mp=()=>[...Ve.keys()],fp=e=>yn.add(Number(e)),Tp=e=>yn.delete(Number(e)),Np=()=>{for(let e of[...Ve.keys()])Cn(e)},Mt=class extends Error{constructor(t){super(`no vault for id ${t} \u2014 a vault-scoped call ran with no vault context, or the vault is not registered`),this.code="no_vault"}};function gp(){return bs(lp())}function ro(e,t){return!!e.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get(t)}function ks(e,t,r){return ro(e,t)?e.prepare(`PRAGMA table_info(${t})`).all().some(o=>o.name===r):!1}function Rp(e,t){return t.some(([r,o])=>ro(e,r)&&o.some(n=>!ks(e,r,n)))}Ds.exports={adaptDb:An,getDB:gp,getAppDB:Cs,getVaultDB:bs,openDdx:tr,dataDir:er,createVaultDB:up,openVaultProbe:pp,closeVault:Cn,closeAllVaults:Np,pinVault:fp,unpinVault:Tp,openVaultIds:mp,VaultFileMissingError:Ut,NoVaultError:Mt,perfLog:dp,forceLegacyJournalMode:wn,hasTable:ro,hasColumn:ks,hasAnyMissingColumns:Rp,_now:eo,_t:to}});var bn=X((CS,Ms)=>{"use strict";A();var{Database:hp}=(zt(),W(Hr)),vt=(Oe(),W(Ce)),Fs=(Te(),W(Me)),Sp=(Br(),W(Xr)),{app:yS}=(pe(),W(_e)),{getDB:xs,getVaultDB:Op,getAppDB:Lp,adaptDb:Ip,forceLegacyJournalMode:Ap,hasTable:F,hasColumn:rr,dataDir:wp}=Ze(),{NEXUS_PROJECT_TABLES:yp}=cn(),Cp=()=>Fs.join(wp(),"app.ddx"),bp=e=>Lp().prepare("SELECT file_path FROM nexus_file WHERE id=?").get(e)?.file_path??null,kp=async e=>{try{vt.rmSync(e,{force:!0})}catch{}xs().prepare("VACUUM INTO ?").run(e)};function Dp(e,t){let r=t!=null?Op(t):xs(),o=Fs.join(Sp.tmpdir(),`dracondex-import-${Date.now()}-${Math.random().toString(36).slice(2)}.db`);if(vt.copyFileSync(e,o),vt.existsSync(e+"-wal")){try{vt.copyFileSync(e+"-wal",o+"-wal")}catch{}try{vt.copyFileSync(e+"-shm",o+"-shm")}catch{}}else Ap(o);let n=()=>{for(let u of["","-wal","-shm"])try{vt.rmSync(o+u,{force:!0})}catch{}},a;try{a=Ip(new hp(o,{readOnly:!0}))}catch(u){throw n(),u}let s={colors:0,folders:0,projects:0,categories:0,templates:0,objects:0,timelines:0,events:0,hashtags:0,descriptions:0,relationTypes:0,relations:0,mappings:0,nexuses:0,noteFolders:0,notes:0,world_projects:0,game_projects:0,write_projects:0,chapters:0,dialogues:0},i=r.transaction(()=>{if(F(a,"use_color")){let m=a.prepare("SELECT color_code FROM use_color WHERE color_code IS NOT NULL").all(),h=r.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)");for(let O of m)s.colors+=h.run(O.color_code).changes}if(F(a,"nexus")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((S,_)=>(S.set(_.id,_.color_code),S),new Map):new Map,h=a.prepare("SELECT id, name, memo, color FROM nexus").all(),O=r.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get()?.id??null;s.nexuses=0,s.nexusesFolded=O?h.length:0;let N=new Map(h.map(S=>[S.name,O])),R=new Map(h.map(S=>[S.id,S.name]));if(F(a,"note_folder"))for(let S of a.prepare("SELECT nexus_ref, name, color FROM note_folder").all()){let _=N.get(R.get(S.nexus_ref));!_||r.prepare("SELECT 1 FROM note_folder WHERE nexus_ref=? AND name=?").get(_,S.name)||(s.noteFolders+=r.prepare("INSERT INTO note_folder (nexus_ref, name, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(_,S.name,m.get(S.color)||null).changes)}if(F(a,"note")){let S=F(a,"note_folder")?a.prepare("SELECT id, name FROM note_folder").all().reduce((_,C)=>(_.set(C.id,C.name),_),new Map):new Map;for(let _ of a.prepare("SELECT nexus_ref, folder_ref, title, content, color, pinned FROM note").all()){let C=N.get(R.get(_.nexus_ref));if(!C)continue;let D=_.folder_ref?r.prepare("SELECT id FROM note_folder WHERE nexus_ref=? AND name=?").get(C,S.get(_.folder_ref))?.id:null;s.notes+=r.prepare("INSERT OR IGNORE INTO note (nexus_ref, folder_ref, title, content, color, pinned) VALUES (?, ?, ?, ?, (SELECT id FROM use_color WHERE color_code=?), ?)").run(C,D||null,_.title,_.content||"",m.get(_.color)||null,_.pinned?1:0).changes}}}if(F(a,"project_folder")){let m=a.prepare("SELECT name, folder_memo, folder_color FROM project_folder WHERE name IS NOT NULL").all(),h=a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,R)=>(N.set(R.id,R.color_code),N),new Map),O=r.prepare("INSERT OR IGNORE INTO project_folder (name, folder_memo, folder_color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let N of m)s.folders+=O.run(N.name,N.folder_memo||null,h.get(N.folder_color)||null).changes}if(F(a,"project")){let m=a.prepare("SELECT codename, name, project_memo, folder_id, project_color FROM project WHERE name IS NOT NULL").all(),h=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((_,C)=>(_.set(C.id,C.color_code),_),new Map):new Map,O=F(a,"project_folder")?a.prepare("SELECT id, name FROM project_folder").all().reduce((_,C)=>(_.set(C.id,C.name),_),new Map):new Map,N=r.prepare("SELECT id FROM project WHERE codename = ?"),R=r.prepare("SELECT id FROM project WHERE codename IS NULL AND name = ?"),S=r.prepare("INSERT INTO project (codename, name, project_memo, folder_id, project_color) VALUES (?,?,?,(SELECT id FROM project_folder WHERE name=?),(SELECT id FROM use_color WHERE color_code=?))");for(let _ of m)(_.codename?N.get(_.codename):R.get(_.name))||(s.projects+=S.run(_.codename||null,_.name,_.project_memo||null,O.get(_.folder_id)||null,h.get(_.project_color)||null).changes)}if(F(a,"project_description")){let m=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all():[],h=new Map(m.map(N=>[N.id,N.codename?`code:${N.codename}`:`name:${N.name}`])),O=a.prepare("SELECT project_id, attribute_name, attribute_text FROM project_description").all();for(let N of O){let R=h.get(N.project_id);if(!R)continue;let S=R.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(R.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(R.slice(5));!S||r.prepare("SELECT 1 FROM project_description WHERE project_id=? AND attribute_name IS ? AND attribute_text IS ?").get(S.id,N.attribute_name||null,N.attribute_text||null)||(s.descriptions+=r.prepare("INSERT INTO project_description (project_id, attribute_name, attribute_text) VALUES (?,?,?)").run(S.id,N.attribute_name||null,N.attribute_text||null).changes)}}if(F(a,"object_category")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,R)=>(N.set(R.id,R.color_code),N),new Map):new Map,h=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((N,R)=>(N.set(R.id,R.codename?`code:${R.codename}`:`name:${R.name}`),N),new Map):new Map,O=a.prepare("SELECT category_name, project_id, color FROM object_category").all();for(let N of O){let R=h.get(N.project_id);if(!R)continue;let S=R.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(R.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(R.slice(5));S&&(s.categories+=r.prepare("INSERT OR IGNORE INTO object_category (category_name, project_id, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(N.category_name,S.id,m.get(N.color)||null).changes)}}if(F(a,"object_template")&&F(a,"object_category")){let m=a.prepare("SELECT id, category_name, project_id FROM object_category").all(),h=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((S,_)=>(S.set(_.id,_.codename?`code:${_.codename}`:`name:${_.name}`),S),new Map):new Map,O=new Map(m.map(S=>[S.id,`${h.get(S.project_id)}::${S.category_name}`])),R=rr(a,"object_template","attribute_type")?a.prepare("SELECT category_id, description, attribute_type FROM object_template").all():a.prepare("SELECT category_id, description, 'text' AS attribute_type FROM object_template").all();for(let S of R){let _=O.get(S.category_id);if(!_)continue;let[C,D]=_.split("::"),y=C?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(C.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get((C||"").slice(5));if(!y)continue;let I=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(y.id,D);!I||r.prepare("SELECT 1 FROM object_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=COALESCE(?,'text')").get(I.id,S.description,S.attribute_type||"text")||(s.templates+=r.prepare("INSERT INTO object_template (category_id, description, attribute_type) VALUES (?,?,?)").run(I.id,S.description,S.attribute_type||"text").changes)}}if(F(a,"object")&&F(a,"object_category")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((S,_)=>(S.set(_.id,_.color_code),S),new Map):new Map,h=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((S,_)=>(S.set(_.id,_.codename?`code:${_.codename}`:`name:${_.name}`),S),new Map):new Map,O=a.prepare("SELECT id, category_name, project_id FROM object_category").all(),N=new Map(O.map(S=>[S.id,`${h.get(S.project_id)}::${S.category_name}`])),R=a.prepare("SELECT name, project_id, category_id, color FROM object").all();for(let S of R){let _=h.get(S.project_id),C=N.get(S.category_id);if(!_||!C)continue;let D=_.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(_.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(_.slice(5));if(!D)continue;let y=C.split("::")[1],I=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(D.id,y);!I||r.prepare("SELECT 1 FROM object WHERE name=? AND project_id=? AND category_id=?").get(S.name,D.id,I.id)||(s.objects+=r.prepare("INSERT INTO object (name, project_id, category_id, color) VALUES (?, ?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(S.name,D.id,I.id,m.get(S.color)||null).changes)}}if(F(a,"timeline")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,R)=>(N.set(R.id,R.color_code),N),new Map):new Map,h=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((N,R)=>(N.set(R.id,R.codename?`code:${R.codename}`:`name:${R.name}`),N),new Map):new Map,O=a.prepare("SELECT line_name, project_id, color FROM timeline").all();for(let N of O){let R=h.get(N.project_id);if(!R)continue;let S=R.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(R.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(R.slice(5));!S||r.prepare("SELECT 1 FROM timeline WHERE project_id=? AND line_name=?").get(S.id,N.line_name||null)||(s.timelines+=r.prepare("INSERT INTO timeline (line_name, project_id, color) VALUES (?, ?, (SELECT id FROM use_color WHERE color_code=?))").run(N.line_name||null,S.id,m.get(N.color)||null).changes)}}if(F(a,"timeline_date")){let m=a.prepare("SELECT day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all(),h=r.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)");for(let O of m)h.run(O.day,O.month,O.years,O.hour,O.minute)}if(F(a,"timeline_event")&&F(a,"timeline_date")&&F(a,"timeline")){let m=rr(a,"timeline_event","story"),h=rr(a,"timeline_event","end_at"),O=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all().reduce((y,I)=>(y.set(I.id,I),y),new Map),N=F(a,"project")?a.prepare("SELECT id, codename, name FROM project").all().reduce((y,I)=>(y.set(I.id,I.codename?`code:${I.codename}`:`name:${I.name}`),y),new Map):new Map,R=a.prepare("SELECT id, line_name, project_id FROM timeline").all().reduce((y,I)=>(y.set(I.id,{line_name:I.line_name,pKey:N.get(I.project_id)}),y),new Map),S=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((y,I)=>(y.set(I.id,I.color_code),y),new Map):new Map,_=`SELECT id, timeline_id, event_name, start_at, ${h?"end_at":"NULL AS end_at"}, color, ${m?"story":"NULL AS story"} FROM timeline_event`,C=a.prepare(_).all(),D=(y,I,L,T,f)=>(r.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(y,I,L,T||0,f||0),r.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(y,I,L,T||0,f||0).id);for(let y of C){let I=R.get(y.timeline_id),L=O.get(y.start_at);if(!I||!L)continue;let T=I.pKey?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(I.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get((I.pKey||"").slice(5));if(!T)continue;let f=r.prepare("SELECT id FROM timeline WHERE project_id=? AND line_name=?").get(T.id,I.line_name);if(!f)continue;let w=D(L.day,L.month,L.years,L.hour,L.minute),b=null;if(y.end_at&&O.has(y.end_at)){let k=O.get(y.end_at);b=D(k.day,k.month,k.years,k.hour,k.minute)}r.prepare("SELECT 1 FROM timeline_event WHERE timeline_id=? AND COALESCE(event_name,'')=COALESCE(?,'') AND start_at=? AND COALESCE(end_at,0)=COALESCE(?,0)").get(f.id,y.event_name||null,w,b||null)||(s.events+=r.prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,end_at,color,story) VALUES (?,?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)").run(f.id,y.event_name||null,w,b,S.get(y.color)||null,y.story||null).changes)}}if(F(a,"hashtag")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,R)=>(N.set(R.id,R.color_code),N),new Map):new Map,O=rr(a,"hashtag","tag_color")?a.prepare("SELECT tag_name, tag_color FROM hashtag").all():a.prepare("SELECT tag_name, NULL AS tag_color FROM hashtag").all();for(let N of O)s.hashtags+=r.prepare("INSERT OR IGNORE INTO hashtag (tag_name, tag_color) VALUES (?, (SELECT id FROM use_color WHERE color_code=?))").run(N.tag_name,m.get(N.tag_color)||null).changes}if(F(a,"object_attribute")&&F(a,"object")&&F(a,"object_template")&&F(a,"object_category")&&F(a,"project")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((S,_)=>(S.set(_.id,_.codename?`code:${_.codename}`:`name:${_.name}`),S),new Map),h=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((S,_)=>(S.set(_.id,{category_name:_.category_name,pKey:m.get(_.project_id)}),S),new Map),O=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((S,_)=>(S.set(_.id,{name:_.name,pKey:m.get(_.project_id),cat:h.get(_.category_id)?.category_name}),S),new Map),N=a.prepare("SELECT ot.id, ot.description, COALESCE(ot.attribute_type,'text') AS attribute_type, oc.category_name, oc.project_id FROM object_template ot JOIN object_category oc ON ot.category_id=oc.id").all().reduce((S,_)=>(S.set(_.id,{description:_.description,attribute_type:_.attribute_type,category_name:_.category_name,pKey:m.get(_.project_id)}),S),new Map),R=a.prepare("SELECT object_id, template_id, attribute_value FROM object_attribute").all();for(let S of R){let _=O.get(S.object_id),C=N.get(S.template_id);if(!_||!C||_.pKey!==C.pKey||_.cat!==C.category_name)continue;let D=_.pKey.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(_.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(_.pKey.slice(5));if(!D)continue;let y=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(D.id,_.cat);if(!y)continue;let I=r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(_.name,D.id,y.id),L=r.prepare("SELECT id FROM object_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=?").get(y.id,C.description,C.attribute_type);!I||!L||(s.mappings+=r.prepare("INSERT OR IGNORE INTO object_attribute (object_id, template_id, attribute_value) VALUES (?,?,?)").run(I.id,L.id,S.attribute_value||null).changes)}}if(F(a,"project_hashtag")&&F(a,"project")&&F(a,"hashtag")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((N,R)=>(N.set(R.id,R.codename?`code:${R.codename}`:`name:${R.name}`),N),new Map),h=a.prepare("SELECT id, tag_name FROM hashtag").all().reduce((N,R)=>(N.set(R.id,R.tag_name),N),new Map),O=a.prepare("SELECT project_id, hashtag_id FROM project_hashtag").all();for(let N of O){let R=m.get(N.project_id),S=h.get(N.hashtag_id);if(!R||!S)continue;let _=R.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(R.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(R.slice(5)),C=r.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(S);!_||!C||(s.mappings+=r.prepare("INSERT OR IGNORE INTO project_hashtag (project_id, hashtag_id) VALUES (?,?)").run(_.id,C.id).changes)}}if(F(a,"object_hashtag")&&F(a,"object")&&F(a,"object_category")&&F(a,"project")&&F(a,"hashtag")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((S,_)=>(S.set(_.id,_.codename?`code:${_.codename}`:`name:${_.name}`),S),new Map),h=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((S,_)=>(S.set(_.id,{category_name:_.category_name,pKey:m.get(_.project_id)}),S),new Map),O=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((S,_)=>(S.set(_.id,{name:_.name,pKey:m.get(_.project_id),cat:h.get(_.category_id)?.category_name}),S),new Map),N=a.prepare("SELECT id, tag_name FROM hashtag").all().reduce((S,_)=>(S.set(_.id,_.tag_name),S),new Map),R=a.prepare("SELECT object_id, hashtag_id FROM object_hashtag").all();for(let S of R){let _=O.get(S.object_id),C=N.get(S.hashtag_id);if(!_||!C)continue;let D=_.pKey.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(_.pKey.slice(5)):r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(_.pKey.slice(5));if(!D)continue;let y=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(D.id,_.cat),I=y?r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(_.name,D.id,y.id):null,L=r.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(C);!I||!L||(s.mappings+=r.prepare("INSERT OR IGNORE INTO object_hashtag (object_id, hashtag_id) VALUES (?,?)").run(I.id,L.id).changes)}}if(F(a,"relation_type")){let m=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((N,R)=>(N.set(R.id,R.color_code),N),new Map):new Map,h=rr(a,"relation_type","color"),O=a.prepare(`SELECT relation_name, ${h?"color":"NULL AS color"} FROM relation_type`).all();for(let N of O)s.relationTypes+=r.prepare("INSERT OR IGNORE INTO relation_type (relation_name, color) VALUES (?, (SELECT id FROM use_color WHERE color_code=?))").run(N.relation_name,m.get(N.color)||null).changes}let u=F(a,"use_color")?a.prepare("SELECT id, color_code FROM use_color").all().reduce((m,h)=>(m.set(h.id,h.color_code),m),new Map):new Map,E=m=>u.get(m)||null;if(F(a,"world_project")){let m=r.prepare("SELECT id FROM world_project WHERE codename = ?"),h=r.prepare("SELECT id FROM world_project WHERE codename IS NULL AND name = ?"),O=r.prepare("INSERT INTO world_project (codename, name, memo, color) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let D of a.prepare("SELECT id, codename, name, memo, color FROM world_project").all()){let y=D.codename?m.get(D.codename):h.get(D.name);if(!y){let I=O.run(D.codename||null,D.name,D.memo||null,E(D.color)).lastInsertRowid;s.world_projects++,y={id:I}}N.set(D.id,y.id)}if(F(a,"world_character")){let D=r.prepare("SELECT 1 FROM world_character WHERE world_ref=? AND name=?"),y=r.prepare("INSERT INTO world_character (world_ref, name, symbol, color) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let I of a.prepare("SELECT world_ref, name, symbol, color FROM world_character").all()){let L=N.get(I.world_ref);!L||D.get(L,I.name)||y.run(L,I.name,I.symbol||null,E(I.color))}}let R=new Map;if(F(a,"world_orig_category")){let D=r.prepare("SELECT id FROM world_orig_category WHERE world_ref=? AND category_name=?"),y=r.prepare("INSERT INTO world_orig_category (world_ref, category_name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let I of a.prepare("SELECT id, world_ref, category_name, color FROM world_orig_category").all()){let L=N.get(I.world_ref);if(!L)continue;let T=D.get(L,I.category_name);T||(T={id:y.run(L,I.category_name,E(I.color)).lastInsertRowid}),R.set(I.id,T.id)}}let S=new Map;if(F(a,"world_orig_template")){let D=r.prepare("SELECT id FROM world_orig_template WHERE category_id=? AND description=? AND COALESCE(attribute_type,'text')=COALESCE(?,'text')"),y=r.prepare("INSERT INTO world_orig_template (category_id, description, attribute_type, display_order) VALUES (?,?,?,?)");for(let I of a.prepare("SELECT id, category_id, description, attribute_type, display_order FROM world_orig_template").all()){let L=R.get(I.category_id);if(!L)continue;let T=D.get(L,I.description,I.attribute_type||"text");T||(T={id:y.run(L,I.description,I.attribute_type||"text",I.display_order||0).lastInsertRowid}),S.set(I.id,T.id)}}let _=new Map;if(F(a,"world_orig_object")){let D=r.prepare("SELECT id FROM world_orig_object WHERE world_ref=? AND category_id=? AND name=?"),y=r.prepare("INSERT INTO world_orig_object (name, world_ref, category_id, color, note) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)");for(let I of a.prepare("SELECT id, name, world_ref, category_id, color, note FROM world_orig_object").all()){let L=N.get(I.world_ref),T=R.get(I.category_id);if(!L||!T)continue;let f=D.get(L,T,I.name);f||(f={id:y.run(I.name,L,T,E(I.color),I.note||null).lastInsertRowid}),_.set(I.id,f.id)}}if(F(a,"world_orig_attribute")){let D=r.prepare("INSERT OR IGNORE INTO world_orig_attribute (object_id, template_id, attribute_value) VALUES (?,?,?)");for(let y of a.prepare("SELECT object_id, template_id, attribute_value FROM world_orig_attribute").all()){let I=_.get(y.object_id),L=S.get(y.template_id);!I||!L||(s.mappings+=D.run(I,L,y.attribute_value||null).changes)}}let C=new Map;if(F(a,"world_timeline")){let D=r.prepare("SELECT id FROM world_timeline WHERE world_ref=? AND name=?"),y=r.prepare("INSERT INTO world_timeline (world_ref, name) VALUES (?,?)");for(let I of a.prepare("SELECT id, world_ref, name FROM world_timeline").all()){let L=N.get(I.world_ref);if(!L)continue;let T=D.get(L,I.name);T||(T={id:y.run(L,I.name).lastInsertRowid}),C.set(I.id,T.id)}}if(F(a,"world_timeline_event")&&F(a,"world_timeline_date")){let D=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM world_timeline_date").all().reduce((T,f)=>(T.set(f.id,f),T),new Map),y=(T,f,w,b,H)=>(r.prepare("INSERT OR IGNORE INTO world_timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(T,f,w,b||0,H||0),r.prepare("SELECT id FROM world_timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(T,f,w,b||0,H||0).id),I=r.prepare("SELECT 1 FROM world_timeline_event WHERE timeline_ref=? AND date_ref=?"),L=r.prepare("INSERT INTO world_timeline_event (timeline_ref, date_ref) VALUES (?,?)");for(let T of a.prepare("SELECT timeline_ref, date_ref FROM world_timeline_event").all()){let f=C.get(T.timeline_ref),w=D.get(T.date_ref);if(!f||!w)continue;let b=y(w.day,w.month,w.years,w.hour,w.minute);I.get(f,b)||(s.events+=L.run(f,b).changes)}}if(F(a,"world_description")){let D=r.prepare("SELECT 1 FROM world_description WHERE world_ref=? AND COALESCE(attribute_name,'')=COALESCE(?,'') AND COALESCE(attribute_text,'')=COALESCE(?,'')"),y=r.prepare("INSERT INTO world_description (world_ref, attribute_name, attribute_text) VALUES (?,?,?)");for(let I of a.prepare("SELECT world_ref, attribute_name, attribute_text FROM world_description").all()){let L=N.get(I.world_ref);!L||D.get(L,I.attribute_name||null,I.attribute_text||null)||(s.descriptions+=y.run(L,I.attribute_name||null,I.attribute_text||null).changes)}}}if(F(a,"game_project")){let m=r.prepare("SELECT id FROM game_project WHERE codename = ?"),h=r.prepare("SELECT id FROM game_project WHERE codename IS NULL AND name = ?"),O=r.prepare("INSERT INTO game_project (codename, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let L of a.prepare("SELECT id, codename, name, memo, color_ref FROM game_project").all()){let T=L.codename?m.get(L.codename):h.get(L.name);if(!T){let f=O.run(L.codename||null,L.name,L.memo||null,E(L.color_ref)).lastInsertRowid;s.game_projects++,T={id:f}}N.set(L.id,T.id)}let R=new Map;if(F(a,"game_char_template")){let L=r.prepare("SELECT id FROM game_char_template WHERE game_ref=? AND attribute_name=?"),T=r.prepare("INSERT INTO game_char_template (game_ref, attribute_name, attribute_type, levelable) VALUES (?,?,?,?)");for(let f of a.prepare("SELECT id, game_ref, attribute_name, attribute_type, levelable FROM game_char_template").all()){let w=N.get(f.game_ref);if(!w)continue;let b=L.get(w,f.attribute_name);b||(b={id:T.run(w,f.attribute_name,f.attribute_type||"text",f.levelable?1:0).lastInsertRowid}),R.set(f.id,b.id)}}let S=new Map;if(F(a,"game_character")){let L=r.prepare("SELECT id FROM game_character WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_character (game_ref, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let f of a.prepare("SELECT id, game_ref, name, memo, color_ref FROM game_character").all()){let w=N.get(f.game_ref);if(!w)continue;let b=L.get(w,f.name);b||(b={id:T.run(w,f.name,f.memo||null,E(f.color_ref)).lastInsertRowid}),S.set(f.id,b.id)}}if(F(a,"game_char_attribute")){let L=r.prepare("INSERT OR IGNORE INTO game_char_attribute (char_ref, template_ref, attribute_text, level) VALUES (?,?,?,?)");for(let T of a.prepare("SELECT char_ref, template_ref, attribute_text, level FROM game_char_attribute").all()){let f=S.get(T.char_ref),w=R.get(T.template_ref);!f||!w||(s.mappings+=L.run(f,w,T.attribute_text||null,T.level||0).changes)}}let _=new Map;if(F(a,"game_collection")){let L=r.prepare("SELECT id FROM game_collection WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_collection (game_ref, name, color_ref) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let f of a.prepare("SELECT id, game_ref, name, color_ref FROM game_collection").all()){let w=N.get(f.game_ref);if(!w)continue;let b=L.get(w,f.name);b||(b={id:T.run(w,f.name,E(f.color_ref)).lastInsertRowid}),_.set(f.id,b.id)}}let C=new Map;if(F(a,"game_col_template")){let L=r.prepare("SELECT id FROM game_col_template WHERE collection_ref=? AND attribute_name=?"),T=r.prepare("INSERT INTO game_col_template (collection_ref, attribute_name, attribute_type, levelable) VALUES (?,?,?,?)");for(let f of a.prepare("SELECT id, collection_ref, attribute_name, attribute_type, levelable FROM game_col_template").all()){let w=_.get(f.collection_ref);if(!w)continue;let b=L.get(w,f.attribute_name);b||(b={id:T.run(w,f.attribute_name,f.attribute_type||"text",f.levelable?1:0).lastInsertRowid}),C.set(f.id,b.id)}}let D=new Map;if(F(a,"game_col_element")){let L=r.prepare("SELECT id FROM game_col_element WHERE collection_ref=? AND name=?"),T=r.prepare("INSERT INTO game_col_element (collection_ref, name, color_ref) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let f of a.prepare("SELECT id, collection_ref, name, color_ref FROM game_col_element").all()){let w=_.get(f.collection_ref);if(!w)continue;let b=L.get(w,f.name);b||(b={id:T.run(w,f.name,E(f.color_ref)).lastInsertRowid}),D.set(f.id,b.id)}}if(F(a,"game_col_attribute")){let L=r.prepare("INSERT OR IGNORE INTO game_col_attribute (element_ref, template_ref, attribute_text, level) VALUES (?,?,?,?)");for(let T of a.prepare("SELECT element_ref, template_ref, attribute_text, level FROM game_col_attribute").all()){let f=D.get(T.element_ref),w=C.get(T.template_ref);!f||!w||(s.mappings+=L.run(f,w,T.attribute_text||null,T.level||0).changes)}}let y=new Map;if(F(a,"game_story")){let L=r.prepare("SELECT id FROM game_story WHERE game_ref=? AND name=?"),T=r.prepare("INSERT INTO game_story (game_ref, name, memo, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let f of a.prepare("SELECT id, game_ref, name, memo, color_ref FROM game_story").all()){let w=N.get(f.game_ref);if(!w)continue;let b=L.get(w,f.name);b||(b={id:T.run(w,f.name,f.memo||null,E(f.color_ref)).lastInsertRowid}),y.set(f.id,b.id)}}let I=new Map;if(F(a,"game_dialogue")){let L=r.prepare("SELECT id FROM game_dialogue WHERE story_ref=? AND name=?"),T=r.prepare("INSERT INTO game_dialogue (story_ref, name, memo, color_ref, pos_x, pos_y) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?,?)");for(let f of a.prepare("SELECT id, story_ref, name, memo, color_ref, pos_x, pos_y FROM game_dialogue").all()){let w=y.get(f.story_ref);if(!w)continue;let b=L.get(w,f.name);b||(b={id:T.run(w,f.name,f.memo||null,E(f.color_ref),f.pos_x||0,f.pos_y||0).lastInsertRowid}),I.set(f.id,b.id)}}if(F(a,"game_conversation")){let L=r.prepare("SELECT 1 FROM game_conversation WHERE dialogue_ref=? AND talk_order=?"),T=r.prepare("INSERT INTO game_conversation (dialogue_ref, char_ref, talk_sentence, talk_order) VALUES (?,?,?,?)");for(let f of a.prepare("SELECT dialogue_ref, char_ref, talk_sentence, talk_order FROM game_conversation").all()){let w=I.get(f.dialogue_ref);if(!w||L.get(w,f.talk_order))continue;let b=f.char_ref?S.get(f.char_ref):null;s.dialogues+=T.run(w,b||null,f.talk_sentence||null,f.talk_order||0).changes}}if(F(a,"game_storyline")){let L=r.prepare("INSERT OR IGNORE INTO game_storyline (story_ref, from_ref, to_ref, color_ref) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let T of a.prepare("SELECT story_ref, from_ref, to_ref, color_ref FROM game_storyline").all()){let f=y.get(T.story_ref),w=I.get(T.from_ref),b=I.get(T.to_ref);!f||!w||!b||L.run(f,w,b,E(T.color_ref))}}}if(F(a,"write_project")){let m=r.prepare("SELECT id FROM write_project WHERE codename = ?"),h=r.prepare("SELECT id FROM write_project WHERE codename IS NULL AND project_name = ?"),O=r.prepare("INSERT INTO write_project (project_name, codename, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))"),N=new Map;for(let C of a.prepare("SELECT id, project_name, codename, color FROM write_project").all()){let D=C.codename?m.get(C.codename):h.get(C.project_name);if(!D){let y=O.run(C.project_name,C.codename||null,E(C.color)).lastInsertRowid;s.write_projects++,D={id:y}}N.set(C.id,D.id)}let R=new Map;if(F(a,"write_series")){let C=r.prepare("SELECT id FROM write_series WHERE project_id=? AND name=?"),D=r.prepare("INSERT INTO write_series (project_id, name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let y of a.prepare("SELECT id, project_id, name, color FROM write_series").all()){let I=N.get(y.project_id);if(!I)continue;let L=C.get(I,y.name);L||(L={id:D.run(I,y.name,E(y.color)).lastInsertRowid}),R.set(y.id,L.id)}}let S=new Map;if(F(a,"write_book")){let C=r.prepare("SELECT id FROM write_book WHERE series_id=? AND name=?"),D=r.prepare("INSERT INTO write_book (series_id, name, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let y of a.prepare("SELECT id, series_id, name, color FROM write_book").all()){let I=R.get(y.series_id);if(!I)continue;let L=C.get(I,y.name);L||(L={id:D.run(I,y.name,E(y.color)).lastInsertRowid}),S.set(y.id,L.id)}}if(F(a,"write_chapter")){let C=r.prepare("SELECT 1 FROM write_chapter WHERE book_id=? AND chapter_order=?"),D=r.prepare("INSERT INTO write_chapter (book_id, name, chapter_order, color, chapter_content) VALUES (?,?,?,(SELECT id FROM use_color WHERE color_code=?),?)");for(let y of a.prepare("SELECT book_id, name, chapter_order, color, chapter_content FROM write_chapter").all()){let I=S.get(y.book_id);!I||C.get(I,y.chapter_order)||(s.chapters+=D.run(I,y.name,y.chapter_order||0,E(y.color),y.chapter_content||null).changes)}}let _=new Map;if(F(a,"write_note")){let C=r.prepare("SELECT id FROM write_note WHERE project_id=? AND notename=?"),D=r.prepare("INSERT INTO write_note (project_id, notename, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let y of a.prepare("SELECT id, project_id, notename, color FROM write_note").all()){let I=N.get(y.project_id);if(!I)continue;let L=C.get(I,y.notename);L||(L={id:D.run(I,y.notename,E(y.color)).lastInsertRowid}),_.set(y.id,L.id)}}if(F(a,"write_chat")){let C=r.prepare("SELECT 1 FROM write_chat WHERE note_id=? AND chat_order=?"),D=r.prepare("INSERT INTO write_chat (note_id, chat, chat_order) VALUES (?,?,?)");for(let y of a.prepare("SELECT note_id, chat, chat_order FROM write_chat").all()){let I=_.get(y.note_id);!I||C.get(I,y.chat_order)||D.run(I,y.chat,y.chat_order||0)}}}if(F(a,"relation")&&F(a,"object")&&F(a,"object_category")&&F(a,"project")){let m=a.prepare("SELECT id, codename, name FROM project").all().reduce((L,T)=>(L.set(T.id,T.codename?`code:${T.codename}`:`name:${T.name}`),L),new Map),h=a.prepare("SELECT id, category_name, project_id FROM object_category").all().reduce((L,T)=>(L.set(T.id,{category_name:T.category_name,pKey:m.get(T.project_id)}),L),new Map),O=a.prepare("SELECT id, name, project_id, category_id FROM object").all().reduce((L,T)=>(L.set(T.id,{name:T.name,pKey:m.get(T.project_id),cat:h.get(T.category_id)?.category_name}),L),new Map),N=L=>L?.startsWith("code:")?r.prepare("SELECT id FROM project WHERE codename=?").get(L.slice(5)):L?r.prepare("SELECT id FROM project WHERE codename IS NULL AND name=?").get(L.slice(5)):null,R=L=>{let T=O.get(L);if(!T||!T.pKey||!T.cat)return null;let f=N(T.pKey);if(!f)return null;let w=r.prepare("SELECT id FROM object_category WHERE project_id=? AND category_name=?").get(f.id,T.cat);return w&&r.prepare("SELECT id FROM object WHERE name=? AND project_id=? AND category_id=?").get(T.name,f.id,w.id)?.id||null},S=new Map;if(F(a,"timeline_event")&&F(a,"timeline")&&F(a,"timeline_date")){let L=a.prepare("SELECT id, day, month, years, COALESCE(hour,0) AS hour, COALESCE(minute,0) AS minute FROM timeline_date").all().reduce((f,w)=>(f.set(w.id,w),f),new Map),T=a.prepare("SELECT id, line_name, project_id FROM timeline").all().reduce((f,w)=>(f.set(w.id,{line_name:w.line_name,pKey:m.get(w.project_id)}),f),new Map);S=a.prepare("SELECT id, timeline_id, event_name, start_at FROM timeline_event").all().reduce((f,w)=>(f.set(w.id,{event_name:w.event_name,tl:T.get(w.timeline_id),sDate:L.get(w.start_at)}),f),new Map)}let _=L=>{let T=S.get(L);if(!T||!T.tl||!T.sDate)return null;let f=N(T.tl.pKey);if(!f)return null;let w=r.prepare("SELECT id FROM timeline WHERE project_id=? AND line_name=?").get(f.id,T.tl.line_name);if(!w)return null;let b=r.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(T.sDate.day,T.sDate.month,T.sDate.years,T.sDate.hour,T.sDate.minute);return b&&r.prepare("SELECT id FROM timeline_event WHERE timeline_id=? AND COALESCE(event_name,'')=COALESCE(?,'') AND start_at=?").get(w.id,T.event_name||null,b.id)?.id||null},C=F(a,"relation_type")?a.prepare("SELECT id, relation_name FROM relation_type").all().reduce((L,T)=>(L.set(T.id,T.relation_name),L),new Map):new Map,D=new Map,y=r.prepare("SELECT id FROM relation WHERE project_id=? AND relation_type IS ?"),I=r.prepare("INSERT INTO relation (project_id, relation_type, color) VALUES (?,?,(SELECT id FROM use_color WHERE color_code=?))");for(let L of a.prepare("SELECT id, project_id, relation_type, color FROM relation").all()){let T=N(m.get(L.project_id));if(!T)continue;let f=C.get(L.relation_type),w=f?r.prepare("SELECT id FROM relation_type WHERE relation_name=?").get(f)?.id:null,b=y.get(T.id,w??null);b||(b={id:I.run(T.id,w||null,E(L.color)).lastInsertRowid}),D.set(L.id,b.id)}if(F(a,"relation_obob")){let L=r.prepare("INSERT OR IGNORE INTO relation_obob (relation_id, object_from, object_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, object_from, object_to FROM relation_obob").all()){let f=D.get(T.relation_id),w=R(T.object_from),b=R(T.object_to);!f||!w||!b||(s.relations+=L.run(f,w,b).changes)}}if(F(a,"relation_obtl")){let L=r.prepare("INSERT OR IGNORE INTO relation_obtl (relation_id, object_from, timeline_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, object_from, timeline_to FROM relation_obtl").all()){let f=D.get(T.relation_id),w=R(T.object_from),b=_(T.timeline_to);!f||!w||!b||(s.relations+=L.run(f,w,b).changes)}}if(F(a,"relation_tltl")){let L=r.prepare("INSERT OR IGNORE INTO relation_tltl (relation_id, timeline_from, timeline_to) VALUES (?,?,?)");for(let T of a.prepare("SELECT relation_id, timeline_from, timeline_to FROM relation_tltl").all()){let f=D.get(T.relation_id),w=_(T.timeline_from),b=_(T.timeline_to);!f||!w||!b||(s.relations+=L.run(f,w,b).changes)}}}let g=r.prepare("SELECT id FROM nexus ORDER BY id LIMIT 1").get();if(g)for(let m of yp)r.prepare(`UPDATE ${m} SET nexus_ref=? WHERE nexus_ref IS NULL`).run(g.id)});r.exec("PRAGMA foreign_keys = OFF");try{i()}finally{try{r.exec("PRAGMA foreign_keys = ON")}catch{}try{a.close()}catch{}n()}try{Le().rebuildWikiIndex()}catch(u){console.error("wiki reindex after merge:",u)}return s}Ms.exports={getAppDatabasePath:Cp,getVaultPath:bp,exportDatabaseTo:kp,importDatabaseMerge:Dp}});var re=X((kS,Us)=>{"use strict";A();var{getDB:Fp,getAppDB:xp,getVaultDB:Mp,createVaultDB:Up,closeVault:vp,closeAllVaults:jp,pinVault:Pp,unpinVault:Wp,adaptDb:Hp,perfLog:Xp}=Ze(),{exportDatabaseTo:Bp,importDatabaseMerge:Gp,getAppDatabasePath:$p,getVaultPath:Yp}=bn();Us.exports={getDB:Fp,getAppDB:xp,getVaultDB:Mp,createVaultDB:Up,closeVault:vp,closeAllVaults:jp,pinVault:Pp,unpinVault:Wp,adaptDb:Hp,exportDatabaseTo:Bp,importDatabaseMerge:Gp,getAppDatabasePath:$p,getVaultPath:Yp,perfLog:Xp}});var Mn=X((FS,qs)=>{"use strict";A();var it=(Oe(),W(Ce)),{getAppDB:kn,getVaultDB:jt,createVaultDB:js,closeVault:no}=re(),{currentNexusId:vs}=mt(),{NEXUS_PROJECT_TABLES:Ps,listVaults:Ws,getVault:st,insertVault:Hs,insertVaultWithId:Vp,updateVaultMeta:Xs,removeVault:oo,refreshVaultCounts:Bs,countVaultItems:Gs,vaultDefaultPath:Dn,vaultsDir:qp,setVaultPath:Fn,vaultPathInUse:$s,refreshOpenVaultCounts:Jp,touchVaultOpened:Kp}=On(),{openVaultProbe:zp}=Ze();function Ys(e,t){return t?(e.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(t),e.prepare("SELECT id FROM use_color WHERE color_code=?").get(t)?.id??null):null}function Vs(e){return e?(vs()?jt(vs()):kn()).prepare("SELECT color_code FROM use_color WHERE id=?").get(e)?.color_code??null:null}function xn(e,t=null){if(kn().prepare("SELECT id FROM nexus_file WHERE name=? COLLATE NOCASE AND id IS NOT ?").get(e,t))throw new Error("nexus name already in use")}function Qp(){let e=kn();if(e.prepare("SELECT id FROM nexus_file LIMIT 1").get())return;let t;try{t=e.prepare(`
      SELECT n.id, n.name, n.memo, c.color_code
      FROM nexus n LEFT JOIN use_color c ON c.id = n.color
      ORDER BY n.id
    `).all()}catch{return}t.length&&e.transaction(()=>{for(let r of t){Vp({id:r.id,name:r.name,memo:r.memo,colorCode:r.color_code,filePath:null});let o=Gs(e,r.id);e.prepare("UPDATE nexus_file SET project_count=?, counts_at=datetime('now') WHERE id=?").run(o,r.id)}})()}var Zp=()=>(Qp(),Jp(),Ws().map(e=>({id:e.id,name:e.name,memo:e.memo,color:null,color_code:e.color_code,update_at:e.update_at,project_count:e.project_count,file_path:e.file_path,missing:e.missing}))),e_=e=>{let t=st(e);if(!t)return;let r={id:t.id,name:t.name,memo:t.memo,color:null,color_code:t.color_code,update_at:t.update_at,project_count:t.project_count,file_path:t.file_path,missing:t.missing};try{let o=jt(e).prepare(`
      SELECT n.name, n.memo, c.color_code FROM nexus n LEFT JOIN use_color c ON c.id = n.color WHERE n.id=?
    `).get(e);o&&Object.assign(r,{name:o.name,memo:o.memo,color_code:o.color_code})}catch{}return r},t_=(e,t,r,o=null)=>{xn(e);let n=Vs(r),a=Hs({name:e,memo:t||null,colorCode:n,filePath:null}),s=o||Dn(e,a);if($s(s,a))throw oo(a),new Error("vault file already registered");try{let i=js(a,s);i.prepare("INSERT INTO nexus (id, name, memo, color) VALUES (?,?,?,?)").run(a,e,t||null,Ys(i,n)),Fn(a,s)}catch(i){no(a);try{it.rmSync(s,{force:!0})}catch{}throw oo(a),i}return a},r_=(e,t,r,o)=>{xn(t,e);let n=Vs(o),a=jt(e);a.prepare("UPDATE nexus SET name=?, memo=?, color=?, update_at=datetime('now') WHERE id=?").run(t,r||null,Ys(a,n),e),Xs(e,{name:t,memo:r||null,colorCode:n})},o_=e=>{let t;try{t=Gs(jt(e),e)}catch{t=st(e)?.project_count??0}if(t>0)return{blocked:!0,count:t};let r=st(e)?.file_path||null;if(no(e),r)try{it.rmSync(r,{force:!0})}catch{}return oo(e),{blocked:!1,count:0,filePath:r}};function n_(e,t){if(!st(e))return{ok:!1,code:"not_found"};if(!it.existsSync(t))return{ok:!1,code:"file_missing"};if($s(t,e))return{ok:!1,code:"already_registered"};let r;try{r=zp(t)}catch{return{ok:!1,code:"not_a_vault"}}try{let o=r.prepare("SELECT id, name FROM nexus").all();return o.length!==1?{ok:!1,code:"not_a_vault"}:(no(e),Fn(e,t),Xs(e,{name:o[0].name,memo:st(e)?.memo??null,colorCode:st(e)?.color_code??null}),{ok:!0,filePath:t,name:o[0].name})}catch{return{ok:!1,code:"not_a_vault"}}finally{try{r.close()}catch{}}}var a_=["note_folder","note","wiki_link","module","import_file","entity_relation"];function i_(e){let t=st(e);if(!t||!t.file_path)return{ok:!1,code:"not_found"};if(!it.existsSync(t.file_path))return{ok:!1,code:"file_missing"};let r=`${t.name} (copy)`;for(let a=2;;a++){try{xn(r);break}catch{r=`${t.name} (copy ${a})`}if(a>50)return{ok:!1,code:"name_taken"}}let o=Hs({name:r,memo:t.memo,colorCode:t.color_code,filePath:null}),n=Dn(r,o);try{it.mkdirSync((Te(),W(Me)).dirname(n),{recursive:!0}),jt(e).prepare("VACUUM INTO ?").run(n);let a=js(o,n);return a.transaction(()=>{a.exec("PRAGMA defer_foreign_keys = ON"),a.prepare("UPDATE nexus SET id=?, name=? WHERE id=?").run(o,r,e);for(let s of a_)try{a.prepare(`UPDATE ${s} SET nexus_ref=? WHERE nexus_ref=?`).run(o,e)}catch{}for(let s of Ps)try{a.prepare(`UPDATE ${s} SET nexus_ref=? WHERE nexus_ref=?`).run(o,e)}catch{}})(),Fn(o,n),Bs(o),{ok:!0,id:o,name:r,filePath:n}}catch(a){no(o);try{it.rmSync(n,{force:!0})}catch{}return oo(o),{ok:!1,code:"copy_failed",error:String(a?.message||a)}}}function s_(e,t){let r=st(e);if(!r||!r.file_path)return{ok:!1,code:"not_found"};if(!it.existsSync(r.file_path))return{ok:!1,code:"file_missing"};try{return it.rmSync(t,{force:!0}),jt(e).prepare("VACUUM INTO ?").run(t),{ok:!0,filePath:t}}catch(o){return{ok:!1,code:"copy_failed",error:String(o?.message||o)}}}qs.exports={getNexuses:Zp,getNexus:e_,createNexus:t_,updateNexus:r_,deleteNexus:o_,relinkNexusFile:n_,duplicateNexus:i_,exportNexusVaultFile:s_,vaultDefaultPath:Dn,vaultsDir:qp,refreshVaultCounts:Bs,NEXUS_PROJECT_TABLES:Ps,touchVaultOpened:Kp,listVaults:Ws}});var Ks=X((MS,Js)=>{"use strict";A();var{getDB:qe}=re(),c_=e=>qe().prepare(`
  SELECT nf.*, uc.color_code FROM note_folder nf
  LEFT JOIN use_color uc ON uc.id = nf.color
  WHERE nf.nexus_ref=? ORDER BY nf.name COLLATE NOCASE
`).all(e),l_=(e,t,r,o)=>qe().prepare("INSERT INTO note_folder (nexus_ref,parent_ref,name,color) VALUES (?,?,?,?)").run(e,r||null,t,o||null).lastInsertRowid,d_=(e,t,r,o)=>qe().prepare("UPDATE note_folder SET name=?,parent_ref=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,e),E_=e=>qe().prepare("DELETE FROM note_folder WHERE id=?").run(e),u_=e=>qe().prepare(`
  SELECT n.id, n.nexus_ref, n.folder_ref, n.title, n.color, n.pinned, n.update_at, uc.color_code
  FROM note n LEFT JOIN use_color uc ON uc.id = n.color
  WHERE n.nexus_ref=? ORDER BY n.pinned DESC, n.title COLLATE NOCASE
`).all(e),p_=e=>qe().prepare(`
  SELECT n.*, uc.color_code FROM note n LEFT JOIN use_color uc ON uc.id = n.color WHERE n.id=?
`).get(e),__=(e,t,r,o)=>{let n=qe(),a=(t||"Untitled").trim()||"Untitled";for(let s=1;s<=200;s++){let i=s===1?a:`${a} ${s}`;try{let u=n.prepare("INSERT INTO note (nexus_ref,folder_ref,title,color) VALUES (?,?,?,?)").run(e,r||null,i,o||null).lastInsertRowid;return Le().resolveDanglingLinks(i,e),u}catch(u){if(!/UNIQUE/i.test(String(u.message)))throw u}}throw new Error("could not find a free note title")},m_=(e,t,r,o,n)=>{let a=qe().prepare("UPDATE note SET title=?,folder_ref=?,color=?,pinned=?,update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,n?1:0,e),s=Le();return s.resolveDanglingLinks(t,s.nexusOfNote(e)),a},f_=(e,t)=>{let r=qe().prepare("UPDATE note SET content=?,update_at=datetime('now') WHERE id=?").run(t??"",e),o=Le();return o.reindexWikiLinks(`note_${e}`,t,o.nexusOfNote(e)),r},T_=e=>qe().prepare("DELETE FROM note WHERE id=?").run(e);Js.exports={getNoteFolders:c_,createNoteFolder:l_,updateNoteFolder:d_,deleteNoteFolder:E_,getNotes:u_,getNote:p_,createNote:__,updateNote:m_,updateNoteContent:f_,deleteNote:T_}});var ec=X((vS,Zs)=>{"use strict";A();var{getDB:zs,getAppDB:N_}=re(),{currentNexusId:Qs}=mt(),or=()=>Qs()?zs():N_(),g_=()=>or().prepare("SELECT * FROM use_color ORDER BY id").all(),R_=e=>or().prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(e),h_=e=>or().prepare("UPDATE use_color SET update_at=datetime('now') WHERE id=?").run(e),S_=()=>or().prepare("SELECT * FROM use_color ORDER BY update_at DESC LIMIT 10").all(),O_=e=>{let t=or();return Qs()&&t.prepare(`
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
  `).get(e,e,e,e,e,e,e,e)?!1:(t.prepare("DELETE FROM use_color WHERE id=?").run(e),!0)},L_=()=>zs().prepare("SELECT id, glyph, label FROM symbol_collection ORDER BY id").all();Zs.exports={getColors:g_,addColor:R_,markColorUsed:h_,getRecentColors:S_,deleteColor:O_,getSymbolCollection:L_}});var Un=X((PS,tc)=>{"use strict";A();var{getDB:de}=re(),I_=e=>de().prepare("SELECT t.*, uc.color_code FROM timeline t LEFT JOIN use_color uc ON t.color=uc.id WHERE t.project_id=? ORDER BY t.line_name").all(e),A_=(e,t,r)=>de().prepare("INSERT INTO timeline (line_name,project_id,color) VALUES (?,?,?)").run(t,e,r||null),w_=e=>de().prepare("SELECT t.*, uc.color_code FROM timeline t LEFT JOIN use_color uc ON t.color=uc.id WHERE t.module_ref=? ORDER BY t.line_name").all(e),y_=(e,t,r)=>de().prepare("INSERT INTO timeline (line_name,module_ref,color) VALUES (?,?,?)").run(t,e,r||null),C_=(e,t,r)=>de().prepare("UPDATE timeline SET line_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),b_=e=>de().prepare("DELETE FROM timeline WHERE id=?").run(e),k_=(e,t,r,o,n)=>{let a=de();return a.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(e,t,r,o||0,n||0),a.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(e,t,r,o||0,n||0).id},D_=e=>de().prepare(`
    SELECT te.*, te.story, uc.color_code,
      s.day s_day, s.month s_month, s.years s_years, s.hour s_hour, s.minute s_minute,
      e.day e_day, e.month e_month, e.years e_years, e.hour e_hour, e.minute e_minute
    FROM timeline_event te
    LEFT JOIN use_color uc ON te.color=uc.id
    LEFT JOIN timeline_date s ON te.start_at=s.id
    LEFT JOIN timeline_date e ON te.end_at=e.id
    WHERE te.timeline_id=?
    ORDER BY s.years,s.month,s.day,s.hour,s.minute
  `).all(e),F_=(e,t,r,o,n,a)=>de().prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,end_at,color,story) VALUES (?,?,?,?,?,?)").run(e,t,r,o||null,n||null,a||null),x_=(e,t,r,o,n,a)=>de().prepare("UPDATE timeline_event SET event_name=?,start_at=?,end_at=?,color=?,story=?,update_at=datetime('now') WHERE id=?").run(t,r,o||null,n||null,a||null,e),M_=(e,t)=>de().prepare("UPDATE timeline_event SET story=?, update_at=datetime('now') WHERE id=?").run(t||null,e),U_=(e,t,r)=>de().prepare("UPDATE timeline_event SET icon=?, color=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,e),v_=e=>de().prepare("DELETE FROM timeline_event WHERE id=?").run(e),j_=e=>de().prepare("SELECT h.*, uc.color_code FROM hashtag h LEFT JOIN use_color uc ON h.tag_color=uc.id JOIN event_hashtag eh ON h.id=eh.hashtag_id WHERE eh.event_id=? ORDER BY h.tag_name").all(e),P_=(e,t)=>{let r=de();return r.transaction(()=>{r.prepare("DELETE FROM event_hashtag WHERE event_id=?").run(e);let o=r.prepare("INSERT INTO event_hashtag (event_id,hashtag_id) VALUES (?,?)");for(let n of t||[])o.run(e,n)})(),!0},W_=(e,t)=>de().prepare("INSERT OR IGNORE INTO event_hashtag (event_id,hashtag_id) VALUES (?,?)").run(e,t),H_=(e,t)=>de().prepare("DELETE FROM event_hashtag WHERE event_id=? AND hashtag_id=?").run(e,t),X_=(e,t)=>de().prepare(`
    SELECT te.id, te.event_name, tl.line_name, uc.color_code
    FROM timeline_event te JOIN event_hashtag eh ON eh.event_id = te.id
    JOIN timeline tl ON te.timeline_id = tl.id LEFT JOIN use_color uc ON te.color = uc.id
    WHERE eh.hashtag_id = ? AND tl.project_id = ? ORDER BY tl.line_name, te.event_name
  `).all(e,t);tc.exports={getTimelines:I_,createTimeline:A_,updateTimeline:C_,deleteTimeline:b_,getModuleTimelines:w_,createModuleTimeline:y_,getOrCreateDate:k_,getEvents:D_,createEvent:F_,updateEvent:x_,updateEventStory:M_,updateEventIcon:U_,deleteEvent:v_,getEventTags:j_,setEventTags:P_,addEventTag:W_,removeEventTag:H_,getEventsByHashtag:X_}});var jn=X((HS,rc)=>{"use strict";A();var{getDB:be}=re(),B_=e=>be().prepare("SELECT m.*, uc.color_code FROM map m LEFT JOIN use_color uc ON m.color=uc.id WHERE m.project_id=? ORDER BY m.map_name").all(e),G_=(e,t,r)=>be().prepare("INSERT INTO map (map_name,project_id,color) VALUES (?,?,?)").run(t,e,r||null),$_=(e,t,r)=>be().prepare("UPDATE map SET map_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),Y_=e=>be().prepare("DELETE FROM map WHERE id=?").run(e),V_=e=>be().prepare("SELECT a.*, uc.color_code FROM map_area a LEFT JOIN use_color uc ON a.color=uc.id WHERE a.map_id=? ORDER BY a.area_name").all(e),q_=(e,t,r)=>be().prepare("INSERT INTO map_area (map_id,area_name,color) VALUES (?,?,?)").run(e,t,r||null),J_=(e,t,r)=>be().prepare("UPDATE map_area SET area_name=?,color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),K_=e=>be().prepare("DELETE FROM map_area WHERE id=?").run(e),z_=e=>be().prepare("SELECT id, area_id, point_order, x, y FROM map_point WHERE area_id=? ORDER BY point_order, id").all(e),Q_=(e,t=[])=>{let r=be();r.transaction((n,a)=>{r.prepare("DELETE FROM map_point WHERE area_id=?").run(n);let s=r.prepare("INSERT INTO map_point (area_id,point_order,x,y) VALUES (?,?,?,?)");a.forEach((i,u)=>s.run(n,u,Number(i.x)||0,Number(i.y)||0))})(e,Array.isArray(t)?t:[])},vn=e=>be().prepare("SELECT m.*, uc.color_code FROM map m LEFT JOIN use_color uc ON m.color=uc.id WHERE m.module_ref=?").get(e);function Z_(e){let t=vn(e);return t||(be().prepare("INSERT INTO map (module_ref) VALUES (?)").run(e),vn(e))}rc.exports={getMaps:B_,createMap:G_,updateMap:$_,deleteMap:Y_,getMapAreas:V_,createMapArea:q_,updateMapArea:J_,deleteMapArea:K_,getMapAreaPoints:z_,setMapAreaPoints:Q_,getModuleMap:vn,getOrCreateModuleMap:Z_}});var nc=X((BS,oc)=>{"use strict";A();var{getDB:nr}=re(),em=()=>nr().prepare("SELECT h.*, uc.color_code FROM hashtag h LEFT JOIN use_color uc ON h.tag_color=uc.id ORDER BY h.tag_name").all(),tm=(e,t)=>nr().prepare("INSERT INTO hashtag (tag_name,tag_color) VALUES (?,?)").run(e,t||null),rm=(e,t,r)=>nr().prepare("UPDATE hashtag SET tag_name=?,tag_color=?,update_at=datetime('now') WHERE id=?").run(t,r||null,e),om=e=>nr().prepare("DELETE FROM hashtag WHERE id=?").run(e),nm=(e,t)=>nr().prepare(`
    SELECT o.*, oc.category_name, uc.color_code
    FROM object o JOIN object_hashtag oh ON oh.object_id = o.id
    JOIN object_category oc ON o.category_id = oc.id LEFT JOIN use_color uc ON o.color = uc.id
    WHERE oh.hashtag_id = ? AND o.project_id = ? ORDER BY oc.category_name, o.name
  `).all(e,t);oc.exports={getHashtags:em,createHashtag:tm,updateHashtag:rm,deleteHashtag:om,getObjectsByHashtag:nm}});var ic=X(($S,ac)=>{A();function am(e){let{getDB:t}=re();return t().readTx(()=>im(e))()}function im(e){let{getDB:t}=re(),{scopedAll:r}=qr(),o=t(),n=e??null,a=o.prepare(`
    SELECT m.id, m.name, m.kind, uc.color_code, COALESCE(LENGTH(m.description),0) AS desc_bytes FROM module m
    LEFT JOIN use_color uc ON uc.id=m.color
    WHERE (? IS NULL OR m.nexus_ref=?) ORDER BY m.display_order, m.id
  `).all(n,n),s=new Map(a.map(({desc_bytes:g,...m})=>[m.id,{...m,items:0,bytes:g||0}])),i=(g,m,h,O)=>{try{for(let N of r(o,g,n)){let R=s.get(N[m]);R&&(R.items+=N[h]||0,R.bytes+=N[O]||0)}}catch{}};i(`SELECT o.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(o.name) + COALESCE(LENGTH(o.note),0)) AS b
      FROM classifier_object o JOIN module m ON o.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY o.module_ref`,"mid","c","b"),i(`SELECT tl.module_ref AS mid, COUNT(*) AS c,
        SUM(COALESCE(LENGTH(te.event_name),0) + COALESCE(LENGTH(te.story),0)) AS b
      FROM timeline_event te JOIN timeline tl ON te.timeline_id=tl.id
      JOIN module m ON tl.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY tl.module_ref`,"mid","c","b"),i(`SELECT sd.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(sd.name) + COALESCE((SELECT SUM(COALESCE(LENGTH(st.speaker),0)+COALESCE(LENGTH(st.talk_sentence),0)) FROM story_talk st WHERE st.dialogue_ref=sd.id),0)) AS b
      FROM story_dialogue sd JOIN module m ON sd.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY sd.module_ref`,"mid","c","b"),i(`SELECT ch.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(ch.name) + COALESCE(LENGTH(ch.chapter_content),0)) AS b
      FROM book_chapter ch JOIN module m ON ch.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY ch.module_ref`,"mid","c","b"),i(`SELECT s.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(s.name) + COALESCE((SELECT SUM(LENGTH(g.message)) FROM chat_message g WHERE g.session_ref=s.id),0)) AS b
      FROM chat_session s JOIN module m ON s.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY s.module_ref`,"mid","c","b"),i(`SELECT sp.module_ref AS mid, COUNT(*) AS c,
        SUM(LENGTH(sp.name) + COALESCE((SELECT SUM(LENGTH(ss.points)) FROM sketch_stroke ss WHERE ss.page_ref=sp.id),0)) AS b
      FROM sketch_page sp JOIN module m ON sp.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY sp.module_ref`,"mid","c","b"),i(`SELECT dn.module_ref AS mid, COUNT(*) AS c,
        SUM(COALESCE(LENGTH(dn.node_text),0) + 16) AS b
      FROM design_node dn JOIN module m ON dn.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY dn.module_ref`,"mid","c","b"),i(`SELECT me.module_ref AS mid, COUNT(*) AS c, SUM(COALESCE(LENGTH(me.label),0) + 16) AS b
      FROM map_event me JOIN module m ON me.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY me.module_ref`,"mid","c","b"),i(`SELECT mp.module_ref AS mid, COUNT(*) AS c, SUM(COALESCE(LENGTH(mp.point_name),0) + 16) AS b
      FROM map_point mp JOIN module m ON mp.module_ref=m.id
      WHERE (? IS NULL OR m.nexus_ref=?) GROUP BY mp.module_ref`,"mid","c","b");let u=o.prepare("SELECT COUNT(*) AS c FROM wiki_link WHERE (? IS NULL OR nexus_ref=?)").get(n,n).c,E=[...s.values()];return{objects:E.reduce((g,m)=>g+m.items,0),modules:a.length,links:u,bytes:E.reduce((g,m)=>g+m.bytes,0),perModule:E}}function sm(e){let{getDB:t}=re();return t().readTx(()=>cm(e))()}function cm(e){let{getDB:t}=re(),r=Le(),n=t().prepare(`
    SELECT id, src_key, target_key, target_text FROM wiki_link
    WHERE (? IS NULL OR nexus_ref=?) ORDER BY id DESC LIMIT 500
  `).all(e??null,e??null),a=new Set;for(let i of n)a.add(i.src_key),i.target_key&&a.add(i.target_key);let s=new Map(r.resolveEntityKeys([...a]).map(i=>[i.key,i]));return n.map(i=>({id:i.id,from:s.get(i.src_key)||{key:i.src_key,name:i.src_key,type:"?"},to:i.target_key&&s.get(i.target_key)||null,text:i.target_text}))}ac.exports={sageHutStats:am,sageHutLinkerList:sm}});var cc=X((VS,sc)=>{"use strict";A();sc.exports={}});var ct=X((JS,uc)=>{"use strict";A();var{getDB:ie}=re(),Pn=Le(),ar=ke(),lm=(e,t)=>ie().prepare("UPDATE module SET cat_type=?, update_at=datetime('now') WHERE id=?").run(t,e),lc=e=>ie().prepare(`
  SELECT o.*, uc.color_code FROM classifier_object o
  LEFT JOIN use_color uc ON uc.id = o.color
  WHERE o.module_ref=? ORDER BY o.display_order, o.id
`).all(e),dm=e=>ie().prepare(`
  SELECT o.*, uc.color_code FROM classifier_object o LEFT JOIN use_color uc ON uc.id = o.color WHERE o.id=?
`).get(e),dc=e=>ie().prepare(`
  SELECT m.nexus_ref FROM classifier_object o JOIN module m ON o.module_ref=m.id WHERE o.id=?
`).get(e)?.nexus_ref??null;function Em(e,t,r,o){let n=ie(),a=n.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM classifier_object WHERE module_ref=?").get(e).m,s=n.prepare("INSERT INTO classifier_object (module_ref, name, color, icon, display_order) VALUES (?,?,?,?,?)").run(e,t,r||null,o||null,a+1).lastInsertRowid;return Pn.resolveDanglingLinks(t,dc(s)),ar.recordVersion(e,"object",`+ ${t}`,{op:"classifierObjectDelete",args:{objectId:s}}),s}var um=(e,t,r,o)=>{let n=ie().prepare("SELECT name, color, icon, module_ref FROM classifier_object WHERE id=?").get(e),a=ie().prepare("UPDATE classifier_object SET name=?, color=?, icon=?, update_at=datetime('now') WHERE id=?").run(t,r||null,o||null,e);return n&&n.name!==t&&Pn.renameWikiTarget(`cobj_${e}`,n.name,t),n&&(n.name!==t||(n.color||null)!==(r||null)||(n.icon||null)!==(o||null))&&ar.recordVersion(n.module_ref,"objectEdit",`${n.name}${n.name!==t?` \u2192 ${t}`:""}`,{op:"classifierObject",args:{objectId:e,name:n.name,colorId:n.color,icon:n.icon}}),a},pm=(e,t)=>{let r=ie().prepare("UPDATE classifier_object SET note=?, update_at=datetime('now') WHERE id=?").run(t,e);return Pn.reindexWikiLinks(`cobj_${e}`,t,dc(e)),r},_m=e=>{let t=ie().prepare("SELECT * FROM classifier_object WHERE id=?").get(e),r=ie().prepare("DELETE FROM classifier_object WHERE id=?").run(e);return ie().prepare("DELETE FROM wiki_link WHERE src_key=?").run(`cobj_${e}`),t&&ar.recordVersion(t.module_ref,"objectDel",t.name,{op:"classifierObjectInsert",args:{moduleRef:t.module_ref,name:t.name,colorId:t.color,icon:t.icon,note:t.note}}),r},Ec=e=>ie().prepare(`
  SELECT * FROM classifier_template WHERE module_ref=? AND object_ref IS NULL ORDER BY display_order, id
`).all(e),mm=(e,t)=>ie().prepare(`
  SELECT * FROM classifier_template WHERE module_ref=? AND (object_ref IS NULL OR object_ref=?) ORDER BY display_order, id
`).all(e,t);function fm(e,t,r,o,n,a,s){let i=ie(),u=i.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM classifier_template WHERE module_ref=?").get(e).m;return i.prepare(`
    INSERT INTO classifier_template (module_ref, object_ref, description, attribute_type, levelable, has_condition, level_steps, display_order)
    VALUES (?,?,?,?,?,?,?,?)
  `).run(e,a||null,t,r||"text",o?1:0,n?1:0,s||null,u+1).lastInsertRowid}var Tm=(e,t,r,o,n,a)=>{let s=ie().prepare("SELECT * FROM classifier_template WHERE id=?").get(e),i=ie().prepare(`
    UPDATE classifier_template SET description=?, attribute_type=?, levelable=?, has_condition=?, level_steps=?, update_at=datetime('now') WHERE id=?
  `).run(t,r||"text",o?1:0,n?1:0,a||null,e);return s&&ar.recordVersion(s.module_ref,"template",`${s.description} \u2192 ${t}`,{op:"classifierTemplate",args:{templateId:e,description:s.description,attributeType:s.attribute_type,levelable:s.levelable,hasCondition:s.has_condition,levelSteps:s.level_steps}}),i},Nm=e=>ie().prepare("DELETE FROM classifier_template WHERE id=?").run(e),gm=e=>ie().prepare("SELECT COUNT(*) AS c FROM classifier_template WHERE object_ref=?").get(e).c,Rm=e=>ie().prepare(`
  SELECT ca.*, ct.description, ct.attribute_type, ct.levelable, ct.has_condition, ct.object_ref AS template_object_ref
  FROM classifier_attribute ca JOIN classifier_template ct ON ca.template_ref = ct.id
  WHERE ca.object_ref=?
`).all(e);function hm(e){let t=ie();return t.readTx(()=>{let r=lc(e),o=Ec(e),n=t.prepare(`
      SELECT ca.*, ct.description, ct.attribute_type, ct.levelable, ct.has_condition, ct.object_ref AS template_object_ref
      FROM classifier_attribute ca
      JOIN classifier_template ct ON ca.template_ref = ct.id
      JOIN classifier_object o ON ca.object_ref = o.id
      WHERE o.module_ref=?
    `).all(e),a=t.prepare(`
      SELECT * FROM classifier_template
      WHERE module_ref=? AND object_ref IS NOT NULL ORDER BY display_order, id
    `).all(e),s=new Map;for(let u of n)s.has(u.object_ref)||s.set(u.object_ref,[]),s.get(u.object_ref).push(u);let i=new Map;for(let u of a)i.has(u.object_ref)||i.set(u.object_ref,[]),i.get(u.object_ref).push(u);for(let u of r){u.attrMap={},u.conditionMap={};for(let E of s.get(u.id)||[])u.attrMap[E.template_ref]=E.attribute_value,u.conditionMap[E.template_ref]=E.condition_value;u.privateTemplates=(i.get(u.id)||[]).map(E=>({id:E.id,description:E.description,value:u.attrMap[E.id]||""}))}return{objects:r,templates:o}})()}var Sm=(e,t,r)=>{let o=ie(),n=o.prepare("SELECT name, module_ref FROM classifier_object WHERE id=?").get(e),a=o.prepare("SELECT description FROM classifier_template WHERE id=?").get(t),s=o.prepare("SELECT attribute_value FROM classifier_attribute WHERE object_ref=? AND template_ref=?").get(e,t),i=o.prepare(`
    INSERT INTO classifier_attribute (object_ref, template_ref, attribute_value) VALUES (?,?,?)
    ON CONFLICT(object_ref, template_ref) DO UPDATE SET attribute_value=excluded.attribute_value, update_at=datetime('now')
  `).run(e,t,r);return n&&(s?.attribute_value??"")!==(r??"")&&ar.recordVersion(n.module_ref,"attr",`${n.name} \xB7 ${a?.description??""}: ${s?.attribute_value??"\u2014"} \u2192 ${r??""}`,{op:"classifierAttr",args:{objectId:e,templateId:t,value:s?.attribute_value??""}}),i},Om=(e,t,r)=>ie().prepare(`
  INSERT INTO classifier_attribute (object_ref, template_ref, condition_value) VALUES (?,?,?)
  ON CONFLICT(object_ref, template_ref) DO UPDATE SET condition_value=excluded.condition_value, update_at=datetime('now')
`).run(e,t,r);uc.exports={setCatType:lm,getObjects:lc,getObject:dm,createObject:Em,updateObject:um,updateObjectNote:pm,deleteObject:_m,getTemplates:Ec,getObjectTemplates:mm,createTemplate:fm,updateTemplate:Tm,deleteTemplate:Nm,countObjectTemplates:gm,getAttrs:Rm,getObjectsFull:hm,upsertAttr:Sm,upsertAttrCondition:Om}});var ir=X((zS,mc)=>{"use strict";A();var{getDB:Je}=re(),pc=Le(),_c=ke(),Lm=e=>Je().prepare(`
  SELECT m.nexus_ref FROM book_chapter ch JOIN module m ON ch.module_ref = m.id WHERE ch.id = ?
`).get(e)?.nexus_ref??null,Im=e=>Je().prepare(`
  SELECT * FROM book_chapter WHERE module_ref = ? ORDER BY chapter_order, id
`).all(e),Am=(e,t)=>{let r=Je(),o=r.prepare("SELECT chapter_order, chapter_label FROM book_chapter WHERE module_ref=? ORDER BY chapter_order DESC LIMIT 1").get(e),n=o?.chapter_order??-1,a=o?parseFloat(o.chapter_label):NaN,s=String(Number.isFinite(a)?Math.floor(a)+1:n+2);return r.prepare("INSERT INTO book_chapter (module_ref,name,chapter_order,chapter_label) VALUES (?,?,?,?)").run(e,t,n+1,s).lastInsertRowid},wm=(e,t)=>{let r=Je().prepare("SELECT name, module_ref FROM book_chapter WHERE id=?").get(e),o=Je().prepare("UPDATE book_chapter SET name=?, update_at=datetime('now') WHERE id=?").run(t,e);return r&&r.name!==t&&(pc.renameWikiTarget(`bchp_${e}`,r.name,t),_c.recordVersion(r.module_ref,"chapterName",`${r.name} \u2192 ${t}`,{op:"authorChapterName",args:{chapterId:e,name:r.name}})),o},ym=(e,t)=>Je().prepare("UPDATE book_chapter SET chapter_label=?, update_at=datetime('now') WHERE id=?").run(t||null,e),Cm=(e,t)=>{let r=Je().prepare("SELECT name, module_ref, chapter_content FROM book_chapter WHERE id=?").get(e),o=Je().prepare("UPDATE book_chapter SET chapter_content=?, update_at=datetime('now') WHERE id=?").run(t,e);return pc.reindexWikiLinks(`bchp_${e}`,t,Lm(e)),r&&(r.chapter_content??"")!==(t??"")&&_c.recordVersion(r.module_ref,"chapter",r.name,{op:"authorChapterContent",args:{chapterId:e,content:r.chapter_content??""}}),o},bm=e=>Je().prepare("DELETE FROM book_chapter WHERE id=?").run(e),km=(e,t)=>{let r=Je();r.transaction(()=>{t.forEach((n,a)=>r.prepare("UPDATE book_chapter SET chapter_order=? WHERE id=? AND module_ref=?").run(a,n,e))})()};mc.exports={getBookChapters:Im,createBookChapter:Am,renameBookChapter:wm,setBookChapterLabel:ym,updateBookChapterContent:Cm,deleteBookChapter:bm,moveBookChapter:km}});var ke=X((ZS,gc)=>{"use strict";A();var{getDB:ao,getAppDB:fc}=re(),Tc=e=>fc().prepare("SELECT value FROM app_setting WHERE key=?").get(e)?.value??null,Dm=(e,t)=>fc().prepare(`
  INSERT INTO app_setting (key, value) VALUES (?,?)
  ON CONFLICT(key) DO UPDATE SET value=excluded.value
`).run(e,String(t)),Fm=()=>{let e=Number(Tc("versionLimit"));return Number.isFinite(e)&&e>=1?Math.floor(e):50},Wn=!1;function xm(e,t,r,o){Wn||Nc(e,t,r,o)}function Nc(e,t,r,o){try{let n=ao();n.transaction(()=>{let a=n.prepare("SELECT COALESCE(MAX(seq),0) AS m FROM module_version WHERE module_ref=?").get(e).m+1;n.prepare("INSERT INTO module_version (module_ref, seq, action, detail, payload) VALUES (?,?,?,?,?)").run(e,a,t,r||null,o?JSON.stringify(o):null);let s=Fm();n.prepare(`
        DELETE FROM module_version WHERE module_ref=? AND id NOT IN (
          SELECT id FROM module_version WHERE module_ref=? ORDER BY seq DESC LIMIT ?)
      `).run(e,e,s)})()}catch{}}var Mm=e=>ao().prepare(`
  SELECT id, module_ref, seq, action, detail, create_at FROM module_version
  WHERE module_ref=? ORDER BY seq DESC
`).all(e),Um={moduleDescription:e=>gt().updateModuleDescription(e.id,e.value),moduleAttr:e=>{let t=ao(),r=e.attrId?t.prepare("SELECT id FROM module_attribute WHERE id=?").get(e.attrId):null;gt().upsertModuleAttr(e.moduleId,r?e.attrId:null,e.name,e.value)},moduleAttrDelete:e=>gt().deleteModuleAttr(e.attrId),moduleTags:e=>gt().setModuleTags(e.moduleId,e.tagIds),classifierAttr:e=>ct().upsertAttr(e.objectId,e.templateId,e.value),classifierObject:e=>ct().updateObject(e.objectId,e.name,e.colorId,e.icon),classifierObjectInsert:e=>{let t=ct(),r=t.createObject(e.moduleRef,e.name,e.colorId,e.icon);e.note&&t.updateObjectNote(r,e.note)},classifierObjectDelete:e=>ct().deleteObject(e.objectId),classifierTemplate:e=>ct().updateTemplate(e.templateId,e.description,e.attributeType,e.levelable,e.hasCondition,e.levelSteps),authorChapterContent:e=>ir().updateBookChapterContent(e.chapterId,e.content),authorChapterName:e=>ir().renameBookChapter(e.chapterId,e.name)};function vm(e){let r=ao().prepare("SELECT * FROM module_version WHERE id=?").get(e);if(!r||!r.payload)return{ok:!1};let o;try{o=JSON.parse(r.payload)}catch{return{ok:!1}}let n=Um[o.op];if(!n)return{ok:!1};Wn=!0;try{n(o.args||{})}catch(a){return{ok:!1,error:String(a.message||a)}}finally{Wn=!1}return Nc(r.module_ref,"restore",`v${r.seq}`,null),{ok:!0}}gc.exports={recordVersion:xm,listVersions:Mm,restoreVersion:vm,getAppSetting:Tc,setAppSetting:Dm}});var gt=X((tO,Cc)=>{"use strict";A();var{getDB:ne}=re(),io=Le(),sr=ke(),Rc=e=>ne().prepare("SELECT nexus_ref FROM module WHERE id=?").get(e)?.nexus_ref??null,hc=`
  SELECT m.*, c.color_code, ic.color_code AS icon_color_code
  FROM module m
  LEFT JOIN use_color c  ON c.id  = m.color
  LEFT JOIN use_color ic ON ic.id = m.icon_color
`;function jm(e){let t=ne().prepare(`${hc} WHERE m.nexus_ref = ? ORDER BY m.parent_id IS NOT NULL, m.display_order, m.id`).all(e),r=new Map;for(let n of t){let a=n.parent_id??null;r.has(a)||r.set(a,[]),r.get(a).push(n)}let o=n=>({...n,children:(r.get(n.id)||[]).map(o)});return(r.get(null)||[]).map(o)}var Pm=e=>ne().prepare(`${hc} WHERE m.id = ?`).get(e);function Sc(e){let t=ne(),{nexus_ref:r,parent_id:o=null,name:n,kind:a,icon:s=null,icon_color:i=null,color:u=null,cat_type:E=null}=e,g=t.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM module WHERE nexus_ref=? AND parent_id IS ?").get(r,o).m;return t.prepare(`
    INSERT INTO module (nexus_ref, parent_id, name, kind, icon, icon_color, color, cat_type, display_order)
    VALUES (?,?,?,?,?,?,?,?,?)
  `).run(r,o,n,a,s,i,u,E,g+1).lastInsertRowid}function Wm(e,t){let r=ne().prepare("SELECT * FROM module WHERE id=?").get(e);if(!r)return;let{name:o=r.name,icon:n=r.icon,icon_color:a=r.icon_color,color:s=r.color,pinned:i=r.pinned}=t;ne().prepare("UPDATE module SET name=?, icon=?, icon_color=?, color=?, pinned=?, update_at=datetime('now') WHERE id=?").run(o,n,a,s,i,e),o!==r.name&&io.renameWikiTarget(`module_${e}`,r.name,o)}function Oc(e,t,r){let o=ne(),n=o.prepare("SELECT * FROM module WHERE id=?").get(e);if(!n)return null;let a=Sc({nexus_ref:n.nexus_ref,parent_id:t,name:r?`${n.name} (Copy)`:n.name,kind:n.kind,icon:n.icon,icon_color:n.icon_color,color:n.color,cat_type:n.cat_type});n.description&&Lc(a,n.description);let s=o.prepare("SELECT id FROM module WHERE parent_id=? ORDER BY display_order, id").all(e);for(let i of s)Oc(i.id,a,!1);return a}function Hm(e){let t=ne(),r=t.prepare("SELECT parent_id FROM module WHERE id=?").get(e);if(!r)return null;let o;return t.transaction(()=>{o=Oc(e,r.parent_id,!0)})(),o}function Lc(e,t){let r=ne().prepare("SELECT description FROM module WHERE id=?").get(e)?.description??"";ne().prepare("UPDATE module SET description=?, update_at=datetime('now') WHERE id=?").run(t,e),io.reindexWikiLinks(`module_${e}`,t,Rc(e)),r!==(t??"")&&sr.recordVersion(e,"note",String(r).slice(0,60),{op:"moduleDescription",args:{id:e,value:r}})}var Xm=e=>ne().prepare("DELETE FROM module WHERE id=?").run(e);function Bm(e,t,r,o){let n=ne();n.transaction(()=>{n.prepare("UPDATE module SET parent_id=? WHERE id=? AND nexus_ref=?").run(r,t,e),o.forEach((s,i)=>{n.prepare("UPDATE module SET display_order=? WHERE id=? AND nexus_ref=?").run(i,s,e)})})()}var Gm=e=>ne().prepare("SELECT COUNT(*) AS c FROM module WHERE nexus_ref=?").get(e).c;function $m(e){let t=ne();return t.readTx(()=>{let r={},o=n=>{for(let a of n){let{module_ref:s,...i}=a;(r[s]||(r[s]=[])).push(i)}};return o(t.prepare(`
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
    `).all(e)),r})()}var Ic=e=>ne().prepare("SELECT * FROM module_attribute WHERE module_ref=? ORDER BY display_order, id").all(e);function Ym(e,t,r,o){let n=ne();if(t){let i=n.prepare("SELECT * FROM module_attribute WHERE id=?").get(t);return n.prepare("UPDATE module_attribute SET attr_name=?, attr_value=?, update_at=datetime('now') WHERE id=?").run(r,o,t),i&&sr.recordVersion(e,"attr",`${i.attr_name}: ${i.attr_value??""} \u2192 ${o??""}`,{op:"moduleAttr",args:{moduleId:e,attrId:t,name:i.attr_name,value:i.attr_value}}),t}let a=n.prepare("SELECT COALESCE(MAX(display_order),-1) AS m FROM module_attribute WHERE module_ref=?").get(e).m,s=n.prepare("INSERT INTO module_attribute (module_ref, attr_name, attr_value, display_order) VALUES (?,?,?,?)").run(e,r,o,a+1).lastInsertRowid;return sr.recordVersion(e,"attr",`+ ${r}`,{op:"moduleAttrDelete",args:{attrId:s}}),s}function Vm(e){let t=ne().prepare("SELECT * FROM module_attribute WHERE id=?").get(e),r=ne().prepare("DELETE FROM module_attribute WHERE id=?").run(e);return t&&sr.recordVersion(t.module_ref,"attrDel",t.attr_name,{op:"moduleAttr",args:{moduleId:t.module_ref,attrId:null,name:t.attr_name,value:t.attr_value}}),r}function Ac(e){return ne().prepare("SELECT ui_key, ui_value FROM module_ui WHERE module_ref=?").all(e).reduce((r,o)=>(r[o.ui_key]=o.ui_value,r),{})}var qm=(e,t,r)=>ne().prepare(`
  INSERT INTO module_ui (module_ref, ui_key, ui_value) VALUES (?,?,?)
  ON CONFLICT(module_ref, ui_key) DO UPDATE SET ui_value=excluded.ui_value, update_at=datetime('now')
`).run(e,t,r),wc=e=>ne().prepare(`
  SELECT h.*, uc.color_code FROM hashtag h
  LEFT JOIN use_color uc ON h.tag_color = uc.id
  JOIN module_hashtag mh ON h.id = mh.hashtag_id WHERE mh.module_ref=? ORDER BY h.tag_name
`).all(e);function Jm(e,t){let r=ne();return r.transaction(()=>{let o=r.prepare("SELECT hashtag_id FROM module_hashtag WHERE module_ref=?").all(e).map(a=>a.hashtag_id);sr.recordVersion(e,"tags",null,{op:"moduleTags",args:{moduleId:e,tagIds:o}}),r.prepare("DELETE FROM module_hashtag WHERE module_ref=?").run(e);let n=r.prepare("INSERT INTO module_hashtag (module_ref, hashtag_id) VALUES (?,?)");for(let a of t||[])n.run(e,a);return!0})()}var yc=e=>({outgoing:io.getOutgoingLinks(`module_${e}`),backlinks:io.getBacklinks(`module_${e}`)}),Km=e=>ne().readTx(()=>({attrs:Ic(e),tags:wc(e),links:yc(e),ui:Ac(e)}))();function zm(e){return ne().prepare(`
    SELECT a.module_ref, COUNT(*) AS c FROM module_attribute a
    JOIN module m ON a.module_ref=m.id WHERE m.parent_id=? GROUP BY a.module_ref
  `).all(e).reduce((r,o)=>(r[o.module_ref]=o.c,r),{})}Cc.exports={getTree:jm,getModule:Pm,createModule:Sc,updateModule:Wm,updateModuleDescription:Lc,deleteModule:Xm,duplicateModule:Hm,moveModule:Bm,countModules:Gm,nexusOfModule:Rc,getNestItems:$m,getModuleAttrs:Ic,upsertModuleAttr:Ym,deleteModuleAttr:Vm,getModuleUi:Ac,setModuleUi:qm,getModuleTags:wc,setModuleTags:Jm,getModuleLinks:yc,getModuleInspector:Km,getChildAttrCounts:zm}});var Hn=X((oO,bc)=>{"use strict";A();var{getDB:so}=re(),Qm=e=>so().prepare(`
  SELECT me.*, te.event_name, te.timeline_id, uc.color_code AS event_color_code,
    s.day s_day, s.month s_month, s.years s_years, s.hour s_hour, s.minute s_minute
  FROM map_event me
  LEFT JOIN timeline_event te ON me.event_ref = te.id
  LEFT JOIN use_color uc ON te.color = uc.id
  LEFT JOIN timeline_date s ON te.start_at = s.id
  WHERE me.module_ref = ?
  ORDER BY me.id
`).all(e),Zm=(e,t,r,o,n,a)=>so().prepare("INSERT INTO map_event (module_ref,event_ref,linker_key,x,y,area_ref) VALUES (?,?,?,?,?,?)").run(e,t||null,r||null,Number(o)||0,Number(n)||0,a||null).lastInsertRowid,ef=(e,t,r,o,n,a)=>so().prepare("UPDATE map_event SET event_ref=?, linker_key=?, x=?, y=?, area_ref=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,Number(o)||0,Number(n)||0,a||null,e),tf=e=>so().prepare("DELETE FROM map_event WHERE id=?").run(e);bc.exports={getMapEvents:Qm,createMapEvent:Zm,updateMapEvent:ef,deleteMapEvent:tf}});var Dc=X((aO,kc)=>{"use strict";A();var{getDB:Ne}=re(),rf=e=>Ne().prepare(`
  SELECT d.*, uc.color_code,
    (SELECT COUNT(*) FROM story_talk t WHERE t.dialogue_ref = d.id) AS talk_count,
    (SELECT COUNT(DISTINCT speaker) FROM story_talk t WHERE t.dialogue_ref = d.id AND speaker IS NOT NULL AND speaker != '') AS speaker_count,
    (SELECT t.speaker || CASE WHEN t.speaker IS NOT NULL AND t.speaker != '' THEN ': ' ELSE '' END || COALESCE(t.talk_sentence,'')
       FROM story_talk t WHERE t.dialogue_ref = d.id ORDER BY t.talk_order, t.id LIMIT 1) AS snippet
  FROM story_dialogue d
  LEFT JOIN use_color uc ON d.color = uc.id
  WHERE d.module_ref = ?
  ORDER BY d.id
`).all(e),of=(e,t,r,o,n)=>Ne().prepare("INSERT INTO story_dialogue (module_ref,name,color,pos_x,pos_y) VALUES (?,?,?,?,?)").run(e,t,r||null,Number(o)||0,Number(n)||0).lastInsertRowid,nf=(e,t,r)=>Ne().prepare("UPDATE story_dialogue SET name=?, color=?, update_at=datetime('now') WHERE id=?").run(t,r||null,e),af=(e,t)=>Ne().prepare("UPDATE story_dialogue SET description=?, update_at=datetime('now') WHERE id=?").run(t||null,e),sf=(e,t,r)=>Ne().prepare("UPDATE story_dialogue SET pos_x=?, pos_y=?, update_at=datetime('now') WHERE id=?").run(Number(t)||0,Number(r)||0,e),cf=e=>Ne().prepare("DELETE FROM story_dialogue WHERE id=?").run(e),lf=e=>Ne().prepare(`
  SELECT * FROM story_edge WHERE module_ref = ? ORDER BY id
`).all(e),df=(e,t,r,o)=>Ne().prepare(`
    INSERT INTO story_edge (module_ref,from_ref,to_ref,label) VALUES (?,?,?,?)
    ON CONFLICT(from_ref,to_ref) DO UPDATE SET label=excluded.label
  `).run(e,t,r,o||null).lastInsertRowid,Ef=(e,t)=>Ne().prepare("UPDATE story_edge SET label=? WHERE id=?").run(t||null,e),uf=e=>Ne().prepare("DELETE FROM story_edge WHERE id=?").run(e),pf=e=>Ne().prepare(`
  SELECT * FROM story_talk WHERE dialogue_ref = ? ORDER BY talk_order, id
`).all(e),_f=(e,t,r,o)=>{let n=Ne(),a=n.prepare("SELECT COALESCE(MAX(talk_order),-1) AS m FROM story_talk WHERE dialogue_ref=?").get(e).m;return n.prepare("INSERT INTO story_talk (dialogue_ref,speaker,talk_sentence,talk_order,linker_key) VALUES (?,?,?,?,?)").run(e,t||null,r||null,a+1,o||null).lastInsertRowid},mf=(e,t,r,o)=>Ne().prepare("UPDATE story_talk SET speaker=?, talk_sentence=?, linker_key=?, update_at=datetime('now') WHERE id=?").run(t||null,r||null,o||null,e),ff=e=>Ne().prepare("DELETE FROM story_talk WHERE id=?").run(e);kc.exports={getDialogues:rf,createDialogue:of,updateDialogue:nf,updateDialogueDescription:af,updateDialoguePos:sf,deleteDialogue:cf,getEdges:lf,createEdge:df,updateEdgeLabel:Ef,deleteEdge:uf,getTalks:pf,createTalk:_f,updateTalk:mf,deleteTalk:ff}});var Gn=X((sO,xc)=>{"use strict";A();var{getDB:Ie}=re(),Xn=Le(),Fc=e=>Ie().prepare(`
  SELECT m.nexus_ref FROM chat_session s JOIN module m ON s.module_ref = m.id WHERE s.id = ?
`).get(e)?.nexus_ref??null,Tf=e=>Ie().prepare(`
  SELECT COALESCE(GROUP_CONCAT(message, char(10)), '') AS c FROM chat_message WHERE session_ref=?
`).get(e)?.c??"",Bn=e=>Xn.reindexWikiLinks(`chss_${e}`,Tf(e),Fc(e)),Nf=e=>Ie().prepare(`
  SELECT s.*,
    (SELECT COUNT(*) FROM chat_message g WHERE g.session_ref = s.id) AS message_count,
    (SELECT g.message FROM chat_message g WHERE g.session_ref = s.id ORDER BY g.id DESC LIMIT 1) AS last_message
  FROM chat_session s WHERE s.module_ref = ? ORDER BY s.session_order, s.id
`).all(e),gf=(e,t)=>{let r=Ie(),o=r.prepare("SELECT COALESCE(MAX(session_order),-1) AS m FROM chat_session WHERE module_ref=?").get(e).m,n=r.prepare("INSERT INTO chat_session (module_ref,name,session_order) VALUES (?,?,?)").run(e,t,o+1).lastInsertRowid;return Xn.resolveDanglingLinks(t,Fc(n)),n},Rf=(e,t)=>{let r=Ie().prepare("SELECT name FROM chat_session WHERE id=?").get(e),o=Ie().prepare("UPDATE chat_session SET name=?, update_at=datetime('now') WHERE id=?").run(t,e);return r&&r.name!==t&&Xn.renameWikiTarget(`chss_${e}`,r.name,t),o},hf=e=>{let t=Ie().prepare("DELETE FROM chat_session WHERE id=?").run(e);return Ie().prepare("DELETE FROM wiki_link WHERE src_key=?").run(`chss_${e}`),t},Sf=e=>Ie().prepare(`
  SELECT g.*, uc.color_code FROM chat_message g LEFT JOIN use_color uc ON g.color=uc.id
  WHERE g.session_ref = ? ORDER BY g.id
`).all(e),Of=(e,t)=>{let r=Ie(),o=r.prepare("INSERT INTO chat_message (session_ref,message) VALUES (?,?)").run(e,t).lastInsertRowid;return r.prepare("UPDATE chat_session SET update_at=datetime('now') WHERE id=?").run(e),Bn(e),o},Lf=(e,t)=>{let r=Ie(),o=r.prepare("SELECT session_ref FROM chat_message WHERE id=?").get(e),n=r.prepare("UPDATE chat_message SET message=? WHERE id=?").run(t,e);return o&&Bn(o.session_ref),n},If=e=>{let t=Ie(),r=t.prepare("SELECT session_ref FROM chat_message WHERE id=?").get(e),o=t.prepare("DELETE FROM chat_message WHERE id=?").run(e);return r&&Bn(r.session_ref),o},Af=(e,t,r)=>Ie().prepare("UPDATE chat_message SET color=?, side=? WHERE id=?").run(t||null,r||"r",e);xc.exports={getChatSessions:Nf,createChatSession:gf,renameChatSession:Rf,deleteChatSession:hf,getChatMessages:Sf,createChatMessage:Of,updateChatMessage:Lf,deleteChatMessage:If,updateMessageStyle:Af}});var $n=X((lO,Mc)=>{"use strict";A();var{getDB:Rt}=re(),{scopedAll:wf}=qr();function yf(e){return Rt().readTx(()=>Cf(e))()}function Cf(e){let t=Rt(),r=e??null,o=[],n=(i,u,E)=>{try{for(let g of wf(t,i,r))o.push({kind:u,...E(g)})}catch{}};n(`SELECT o.id, o.name, uc.color_code, m.id mid, m.name mname, m.kind mkind
    FROM classifier_object o JOIN module m ON o.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=o.color WHERE (? IS NULL OR m.nexus_ref=?)`,"object",i=>({key:`cobj_${i.id}`,name:i.name,color:i.color_code,moduleId:i.mid,moduleName:i.mname,moduleKind:i.mkind})),n(`SELECT te.id, te.event_name AS name, uc.color_code, m.id mid, m.name mname, m.kind mkind,
      s.day, s.month, s.years, s.hour, s.minute
    FROM timeline_event te JOIN timeline tl ON te.timeline_id=tl.id
    JOIN module m ON tl.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=te.color
    LEFT JOIN timeline_date s ON te.start_at=s.id WHERE (? IS NULL OR m.nexus_ref=?)`,"event",i=>({key:`tlev_${i.id}`,name:i.name,color:i.color_code,moduleId:i.mid,moduleName:i.mname,moduleKind:i.mkind,time:{day:i.day,month:i.month,years:i.years,hour:i.hour,minute:i.minute}})),n(`SELECT sd.id, sd.name, uc.color_code, m.id mid, m.name mname, m.kind mkind
    FROM story_dialogue sd JOIN module m ON sd.module_ref=m.id
    LEFT JOIN use_color uc ON uc.id=sd.color WHERE (? IS NULL OR m.nexus_ref=?)`,"dialogue",i=>({key:`sdlg_${i.id}`,name:i.name,color:i.color_code,moduleId:i.mid,moduleName:i.mname,moduleKind:i.mkind})),n(`SELECT ch.id, ch.name, ch.chapter_order, m.id mid, m.name mname, m.kind mkind
    FROM book_chapter ch JOIN module m ON ch.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)`,"chapter",i=>({key:`bchp_${i.id}`,name:i.name,color:null,moduleId:i.mid,moduleName:i.mname,moduleKind:i.mkind})),n(`SELECT s.id, s.name, m.id mid, m.name mname, m.kind mkind
    FROM chat_session s JOIN module m ON s.module_ref=m.id WHERE (? IS NULL OR m.nexus_ref=?)`,"chat",i=>({key:`chss_${i.id}`,name:i.name,color:null,moduleId:i.mid,moduleName:i.mname,moduleKind:i.mkind})),n(`SELECT m.id, m.name, m.kind, uc.color_code, pm.id mid, pm.name mname, pm.kind mkind
    FROM module m LEFT JOIN module pm ON m.parent_id=pm.id
    LEFT JOIN use_color uc ON uc.id=m.color WHERE (? IS NULL OR m.nexus_ref=?)`,"module",i=>({key:`module_${i.id}`,name:i.name,color:i.color_code,moduleId:i.mid??i.id,moduleName:i.mname??i.name,moduleKind:i.mkind??i.kind}));let a=(()=>{try{return t.prepare(`
        SELECT mh.module_ref, h.tag_name FROM module_hashtag mh
        JOIN hashtag h ON h.id=mh.hashtag_id
        JOIN module m ON m.id=mh.module_ref WHERE (? IS NULL OR m.nexus_ref=?)
      `).all(r,r)}catch{return[]}})(),s=new Map;for(let i of a)s.has(i.module_ref)||s.set(i.module_ref,[]),s.get(i.module_ref).push(i.tag_name);for(let i of o)i.tags=s.get(i.kind==="module"?Number(i.key.slice(7)):i.moduleId)||[];return o}var bf=e=>Rt().prepare(`
  SELECT er.*, uc.color_code FROM entity_relation er
  LEFT JOIN use_color uc ON uc.id = er.color
  WHERE er.nexus_ref=? ORDER BY er.id
`).all(e),kf=(e,t,r,o,n)=>Rt().prepare(`
  INSERT INTO entity_relation (nexus_ref, from_key, to_key, label, color) VALUES (?,?,?,?,?)
  ON CONFLICT(from_key, to_key, label) DO NOTHING
`).run(e,t,r,o||null,n||null).lastInsertRowid,Df=(e,t,r)=>r===void 0?Rt().prepare("UPDATE entity_relation SET label=? WHERE id=?").run(t||null,e):Rt().prepare("UPDATE entity_relation SET label=?, color=? WHERE id=?").run(t||null,r||null,e),Ff=e=>Rt().prepare("DELETE FROM entity_relation WHERE id=?").run(e);Mc.exports={viewerIndex:yf,getEntityRelations:bf,createEntityRelation:kf,updateEntityRelation:Df,deleteEntityRelation:Ff}});var vc=X((EO,Uc)=>{"use strict";A();var{getDB:De}=re(),xf=e=>De().prepare(`
  SELECT p.*,
    (SELECT COUNT(*) FROM sketch_stroke s WHERE s.page_ref = p.id) AS stroke_count
  FROM sketch_page p WHERE p.module_ref = ? ORDER BY p.page_order, p.id
`).all(e),Mf=(e,t)=>{let r=De(),o=r.prepare("SELECT COALESCE(MAX(page_order),-1) AS m FROM sketch_page WHERE module_ref=?").get(e).m;return r.prepare("INSERT INTO sketch_page (module_ref,name,page_order) VALUES (?,?,?)").run(e,t,o+1).lastInsertRowid},Uf=(e,t)=>De().prepare("UPDATE sketch_page SET name=?, update_at=datetime('now') WHERE id=?").run(t,e),vf=(e,t)=>{let r=De(),o=r.prepare("SELECT * FROM sketch_page WHERE id=?").get(e);if(!o)return;let n=r.prepare(`
    SELECT * FROM sketch_page WHERE module_ref=? AND page_order ${t<0?"<":">"} ?
    ORDER BY page_order ${t<0?"DESC":"ASC"} LIMIT 1
  `).get(o.module_ref,o.page_order);n&&(r.prepare("UPDATE sketch_page SET page_order=? WHERE id=?").run(n.page_order,o.id),r.prepare("UPDATE sketch_page SET page_order=? WHERE id=?").run(o.page_order,n.id))},jf=e=>De().prepare("DELETE FROM sketch_page WHERE id=?").run(e),Pf=e=>De().prepare(`
  SELECT * FROM sketch_stroke WHERE page_ref=? ORDER BY id
`).all(e),Wf=(e,t,r,o)=>{let n=De(),a=n.prepare("INSERT INTO sketch_stroke (page_ref,color,width,points) VALUES (?,?,?,?)").run(e,t,r,JSON.stringify(o)).lastInsertRowid;return n.prepare("UPDATE sketch_page SET update_at=datetime('now') WHERE id=?").run(e),a},Hf=e=>De().prepare("DELETE FROM sketch_stroke WHERE id=?").run(e),Xf=e=>De().prepare(`
  SELECT * FROM sketch_pin WHERE page_ref=? ORDER BY id
`).all(e),Bf=(e,t,r,o)=>De().prepare(`
  INSERT INTO sketch_pin (page_ref,linker_key,x,y) VALUES (?,?,?,?)
`).run(e,t,r,o).lastInsertRowid,Gf=(e,t,r)=>De().prepare("UPDATE sketch_pin SET x=?, y=? WHERE id=?").run(t,r,e),$f=e=>De().prepare("DELETE FROM sketch_pin WHERE id=?").run(e);Uc.exports={getSketchPages:xf,createSketchPage:Mf,renameSketchPage:Uf,moveSketchPage:vf,deleteSketchPage:jf,getSketchStrokes:Pf,createSketchStroke:Wf,deleteSketchStroke:Hf,getSketchPins:Xf,createSketchPin:Bf,moveSketchPin:Gf,deleteSketchPin:$f}});var Pc=X((pO,jc)=>{"use strict";A();var{getDB:et}=re(),Yf=e=>et().prepare(`
  SELECT * FROM design_node WHERE module_ref=? ORDER BY id
`).all(e),Vf=(e,t,r,o,n,a,s)=>et().prepare(`
  INSERT INTO design_node (module_ref,shape,x,y,node_text,color,linker_key) VALUES (?,?,?,?,?,?,?)
`).run(e,t||"box",r,o,n||null,a||null,s||null).lastInsertRowid,qf=(e,t,r,o)=>et().prepare(`
  UPDATE design_node SET shape=?, node_text=?, color=?, update_at=datetime('now') WHERE id=?
`).run(t,r||null,o||null,e),Jf=(e,t,r)=>et().prepare(`
  UPDATE design_node SET x=?, y=?, update_at=datetime('now') WHERE id=?
`).run(t,r,e),Kf=e=>et().prepare("DELETE FROM design_node WHERE id=?").run(e),zf=e=>et().prepare(`
  SELECT * FROM design_edge WHERE module_ref=? ORDER BY id
`).all(e),Qf=(e,t,r,o)=>et().prepare(`
  INSERT INTO design_edge (module_ref,from_ref,to_ref,label) VALUES (?,?,?,?)
  ON CONFLICT(from_ref,to_ref) DO UPDATE SET label=excluded.label
`).run(e,t,r,o||null).lastInsertRowid,Zf=(e,t)=>et().prepare("UPDATE design_edge SET label=? WHERE id=?").run(t||null,e),eT=e=>et().prepare("DELETE FROM design_edge WHERE id=?").run(e);jc.exports={getDesignNodes:Yf,createDesignNode:Vf,updateDesignNode:qf,moveDesignNode:Jf,deleteDesignNode:Kf,getDesignEdges:zf,createDesignEdge:Qf,updateDesignEdgeLabel:Zf,deleteDesignEdge:eT}});var Hc=X((mO,Wc)=>{"use strict";A();var{getDB:ht}=re(),tT=e=>ht().prepare(`
  SELECT * FROM import_file WHERE nexus_ref=? ORDER BY folder, file_name COLLATE NOCASE
`).all(e),rT=e=>ht().prepare("SELECT * FROM import_file WHERE id=?").get(e);function oT(e,t){let r=ht(),o=r.prepare(`
    INSERT INTO import_file (nexus_ref, file_name, file_path, file_type, file_size, folder)
    VALUES (?,?,?,?,?,?)
  `),n=r.prepare("SELECT id FROM import_file WHERE nexus_ref=? AND file_path=?");return r.transaction(()=>{let a=0;for(let s of t||[])n.get(e,s.path)||(o.run(e,s.name,s.path,s.type||null,s.size||0,s.folder||null),a++);return a})()}var nT=(e,t)=>ht().prepare(`
  UPDATE import_file SET linker_key=?, use_as_image=CASE WHEN ? IS NULL THEN 0 ELSE use_as_image END WHERE id=?
`).run(t||null,t||null,e);function aT(e,t){let r=ht(),o=r.prepare("SELECT linker_key FROM import_file WHERE id=?").get(e);o&&(t&&o.linker_key&&r.prepare("UPDATE import_file SET use_as_image=0 WHERE linker_key=? AND id<>?").run(o.linker_key,e),r.prepare("UPDATE import_file SET use_as_image=? WHERE id=?").run(t?1:0,e))}var iT=e=>ht().prepare("DELETE FROM import_file WHERE id=?").run(e),sT=e=>ht().prepare(`
  SELECT id, linker_key, file_path FROM import_file
  WHERE nexus_ref=? AND use_as_image=1 AND linker_key IS NOT NULL
`).all(e);Wc.exports={getImportFiles:tT,getImportFile:rT,addImportFiles:oT,setImportLinker:nT,setImportUseAsImage:aT,deleteImportFile:iT,getDisplayImages:sT}});var Yc=X((TO,$c)=>{"use strict";A();var{app:Xc}=(pe(),W(_e)),{getDB:Yn}=re(),{getAppSetting:cT,setAppSetting:lT}=ke(),dT={director:"project",navigator:"world_project",hero:"game_project",writer:"write_project",scribe:"note"},Bc="legacyPrompt:seen:";function ET(e,t,r,o){let n=Yn(),a=gt(),s=$n(),i=ir(),u=ct(),E=Un(),g=jn(),m=Hn(),h=Gn(),O={modules:0,objects:0,events:0,areas:0,chapters:0,dialogues:0,relations:0,wandererPins:0,chatMessages:0},N=(T,f,w,b,H)=>{let k=n.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS ? AND kind=? AND name=?").get(e,T,w,f);return k?k.id:(O.modules++,a.createModule({nexus_ref:e,parent_id:T,name:f,kind:w,cat_type:b||null,color:H||null}))},R=(T,f,w)=>N(T,f,w),S=(T,f,w,b,H)=>{let k=N(T,f.name,"classifier",w,f.color),G=new Map;for(let x of b){let j=u.createTemplate(k,x.description,x.attribute_type,!1,!1,null);G.set(x.id,j)}let K=new Map;for(let x of H){let j=u.createObject(k,x.name,x.color);x.note&&u.updateObjectNote(j,x.note);for(let[B,V]of x.values){if(V==null||V==="")continue;let J=G.get(B);J&&u.upsertAttr(j,J,V)}x.legacyId!=null&&K.set(x.legacyId,j),O.objects++}return{cid:k,objMap:K}},_=(T,f)=>{let w=E.getOrCreateDate(f.day,f.month,f.years,f.hour,f.minute),b=n.prepare("INSERT INTO timeline_event (timeline_id,event_name,start_at,color,story) VALUES (?,?,?,?,?)").run(T,f.name,w,f.color||null,f.story||null).lastInsertRowid;return O.events++,b},C=(T,f)=>{let w=g.createMapArea(T,f.name,f.color).lastInsertRowid,b=n.prepare("INSERT INTO map_point (area_id,point_order,x,y) VALUES (?,?,?,?)");return(f.points||[]).forEach((H,k)=>b.run(w,k,H.x,H.y)),O.areas++,w},D=(T,f,w)=>{let b=w.map(k=>`## ${k.attribute_name||"\u2014"}

${k.attribute_text||""}`).join(`

`);if(!b.trim())return null;let H=N(T,f,"inspector");return a.updateModuleDescription(H,b),H},y=(T,f,w,b,H,k)=>{let G=n.prepare("SELECT * FROM relation WHERE project_id=?").all(w);if(!G.length||!b.length)return null;let K=N(T,f,"connector");a.setModuleUi(K,"filterDef",JSON.stringify({query:"",kinds:[],moduleIds:b,tag:""}));for(let x of G){let j=x.relation_type?n.prepare("SELECT relation_name FROM relation_type WHERE id=?").get(x.relation_type)?.relation_name:null;for(let B of n.prepare("SELECT * FROM relation_obob WHERE relation_id=?").all(x.id)){let V=H.get(B.object_from),J=H.get(B.object_to);V&&J&&(s.createEntityRelation(e,`cobj_${V}`,`cobj_${J}`,j),O.relations++)}for(let B of n.prepare("SELECT * FROM relation_obtl WHERE relation_id=?").all(x.id)){let V=H.get(B.object_from),J=k.get(B.timeline_to);V&&J&&(s.createEntityRelation(e,`cobj_${V}`,`tlev_${J}`,j),O.relations++)}for(let B of n.prepare("SELECT * FROM relation_tltl WHERE relation_id=?").all(x.id)){let V=k.get(B.timeline_from),J=k.get(B.timeline_to);V&&J&&(s.createEntityRelation(e,`tlev_${V}`,`tlev_${J}`,j),O.relations++)}}return K};return{id:n.transaction(()=>{let T=null;if(t==="director"){let f=n.prepare("SELECT * FROM project WHERE id=?").get(r);if(!f)throw new Error("project not found");let w=R(null,"Director","collector"),b=w;if(f.folder_id){let j=n.prepare("SELECT * FROM project_folder WHERE id=?").get(f.folder_id);j&&(b=R(w,j.name,"collector"))}T=N(b,f.name,"manager",null,f.project_color);let H=[],k=new Map,G=new Map;for(let j of n.prepare("SELECT * FROM object_category WHERE project_id=?").all(r)){let B=n.prepare("SELECT * FROM object_template WHERE category_id=? ORDER BY display_order, id").all(j.id),V=n.prepare("SELECT * FROM object WHERE category_id=?").all(j.id).map(we=>({legacyId:we.id,name:we.name,color:we.color,note:we.note,values:B.map(Ke=>[Ke.id,n.prepare("SELECT attribute_value FROM object_attribute WHERE object_id=? AND template_id=?").get(we.id,Ke.id)?.attribute_value])})),{cid:J,objMap:te}=S(T,{name:j.category_name,color:j.color},"object",B,V);H.push(J);for(let[we,Ke]of te)k.set(we,Ke)}for(let j of n.prepare("SELECT * FROM timeline WHERE project_id=?").all(r)){let B=N(T,j.line_name||f.name,"chronicler"),V=n.prepare("INSERT INTO timeline (line_name, module_ref, color) VALUES (?,?,?)").run(j.line_name||f.name,B,j.color||null).lastInsertRowid;H.push(B);let J=n.prepare(`
          SELECT te.id, te.event_name, te.story, te.color, td.day, td.month, td.years, td.hour, td.minute
          FROM timeline_event te JOIN timeline_date td ON te.start_at=td.id WHERE te.timeline_id=?
        `).all(j.id);for(let te of J)G.set(te.id,_(V,{name:te.event_name||"\u2014",story:te.story,color:te.color,...te}))}for(let j of n.prepare("SELECT * FROM map WHERE project_id=?").all(r)){let B=N(T,j.map_name||f.name,"locator"),V=n.prepare("INSERT INTO map (map_name, module_ref, color) VALUES (?,?,?)").run(j.map_name||f.name,B,j.color||null).lastInsertRowid;for(let J of n.prepare("SELECT * FROM map_area WHERE map_id=?").all(j.id)){let te=n.prepare("SELECT x, y FROM map_point WHERE area_id=? ORDER BY point_order").all(J.id);C(V,{name:J.area_name||"\u2014",color:J.color,points:te})}}let K=n.prepare("SELECT * FROM project_description WHERE project_id=?").all(r);K.length&&D(T,f.name,K);let x=y(T,`${f.name} Relations`,r,H,k,G);x&&o&&(o.directorConnectors||=[],o.directorConnectors.push({id:x,moduleIds:H}))}else if(t==="navigator"){let f=n.prepare("SELECT * FROM world_project WHERE id=?").get(r);if(!f)throw new Error("world not found");let w=R(null,"Navigator","collector");T=N(w,f.name,"manager",null,f.color);let b=[],H=n.prepare("SELECT * FROM world_character WHERE world_ref=?").all(r).map(x=>({legacyId:x.id,name:x.name,color:x.color,note:null,values:[]}));if(H.length){let{cid:x}=S(T,{name:"Characters",color:null},"character",[],H);b.push(x)}for(let x of n.prepare("SELECT * FROM world_orig_category WHERE world_ref=?").all(r)){let j=n.prepare("SELECT * FROM world_orig_template WHERE category_id=? ORDER BY display_order, id").all(x.id),B=n.prepare("SELECT * FROM world_orig_object WHERE category_id=?").all(x.id).map(J=>({legacyId:J.id,name:J.name,color:J.color,note:J.note,values:j.map(te=>[te.id,n.prepare("SELECT attribute_value FROM world_orig_attribute WHERE object_id=? AND template_id=?").get(J.id,te.id)?.attribute_value])})),{cid:V}=S(T,{name:x.category_name,color:x.color},"object",j,B);b.push(V)}let k=new Map;for(let x of n.prepare(`
        SELECT wm.id AS wmid, m.id AS map_id, m.map_name FROM world_map wm JOIN map m ON wm.map_ref=m.id
        WHERE wm.world_ref=?`).all(r)){let j=N(T,x.map_name||f.name,"locator"),B=n.prepare("INSERT INTO map (map_name, module_ref) VALUES (?,?)").run(x.map_name||f.name,j).lastInsertRowid;k.set(x.map_id,j);for(let V of n.prepare("SELECT * FROM map_area WHERE map_id=?").all(x.map_id)){let J=n.prepare("SELECT x, y FROM map_point WHERE area_id=? ORDER BY point_order").all(V.id);C(B,{name:V.area_name||"\u2014",color:V.color,points:J})}}let G=new Map;for(let x of n.prepare("SELECT * FROM world_timeline WHERE world_ref=?").all(r)){let j=N(T,x.name,"chronicler"),B=n.prepare("INSERT INTO timeline (line_name, module_ref) VALUES (?,?)").run(x.name,j).lastInsertRowid;b.push(j);let V=n.prepare(`
          SELECT wte.id, td.day, td.month, td.years, td.hour, td.minute
          FROM world_timeline_event wte JOIN world_timeline_date td ON wte.date_ref=td.id WHERE wte.timeline_ref=?
        `).all(x.id),J=new Map;for(let te of V)J.set(te.id,_(B,{name:`${te.day}/${te.month}/${te.years}`,...te}));G.set(x.id,{moduleId:j,eventMap:J,worldMapRef:x.world_map_ref})}for(let[x,j]of G){if(!j.worldMapRef)continue;let B=n.prepare("SELECT map_ref FROM world_map WHERE id=?").get(j.worldMapRef),V=B?k.get(B.map_ref):null,J=n.prepare("SELECT name FROM world_timeline WHERE id=?").get(x),te=N(T,J?.name||"Wanderer","wanderer");V&&a.setModuleUi(te,"mapModule",String(V)),a.setModuleUi(te,"timelineModule",String(j.moduleId));for(let[we,Ke]of j.eventMap)for(let ye of n.prepare("SELECT * FROM world_timeline_object WHERE event_ref=?").all(we)){let At=ye.point_ref?n.prepare("SELECT x, y FROM world_timeline_point WHERE id=?").get(ye.point_ref):null,Gt=ye.world_object_ref?n.prepare("SELECT ob.name FROM world_object wo JOIN object ob ON wo.object_ref=ob.id WHERE wo.id=?").get(ye.world_object_ref)?.name:ye.world_character_ref?n.prepare("SELECT name FROM world_character WHERE id=?").get(ye.world_character_ref)?.name:null;m.createMapEvent(te,Ke,Gt||null,At?.x||0,At?.y||0,null),O.wandererPins++}}let K=n.prepare("SELECT * FROM world_description WHERE world_ref=?").all(r);if(K.length&&D(T,f.name,K),b.length&&o?.directorConnectors?.length)for(let x of o.directorConnectors){let j=JSON.parse(a.getModuleUi(x.id).filterDef||"{}"),B=Array.from(new Set([...j.moduleIds||[],...b]));a.setModuleUi(x.id,"filterDef",JSON.stringify({...j,moduleIds:B}))}}else if(t==="hero"){let f=n.prepare("SELECT * FROM game_project WHERE id=?").get(r);if(!f)throw new Error("game not found");let w=R(null,"Hero","collector");T=N(w,f.name,"manager",null,f.color_ref);let b=n.prepare("SELECT * FROM game_char_template WHERE game_ref=?").all(r),H=n.prepare("SELECT * FROM game_character WHERE game_ref=?").all(r);if(H.length||b.length){let G=H.map(x=>({legacyId:x.id,name:x.name,color:x.color_ref,note:x.memo,values:b.map(j=>[j.id,n.prepare(`
            SELECT attribute_text FROM game_char_attribute WHERE char_ref=? AND template_ref=? ORDER BY level DESC LIMIT 1
          `).get(x.id,j.id)?.attribute_text])})),K=b.map(x=>({id:x.id,description:x.attribute_name,attribute_type:x.attribute_type}));S(T,{name:"Characters",color:null},"character",K,G)}for(let G of n.prepare("SELECT * FROM game_collection WHERE game_ref=?").all(r)){let K=n.prepare("SELECT * FROM game_col_template WHERE collection_ref=?").all(G.id),x=n.prepare("SELECT * FROM game_col_element WHERE collection_ref=?").all(G.id).map(B=>({legacyId:B.id,name:B.name,color:B.color_ref,note:null,values:K.map(V=>[V.id,n.prepare(`
            SELECT attribute_text FROM game_col_attribute WHERE element_ref=? AND template_ref=? ORDER BY level DESC LIMIT 1
          `).get(B.id,V.id)?.attribute_text])})),j=K.map(B=>({id:B.id,description:B.attribute_name,attribute_type:B.attribute_type}));S(T,{name:G.name,color:G.color_ref},"element",j,x)}let k=new Map(n.prepare("SELECT id, name FROM game_character WHERE game_ref=?").all(r).map(G=>[G.id,G.name]));for(let G of n.prepare("SELECT * FROM game_story WHERE game_ref=?").all(r)){let K=N(T,G.name,"narrator"),x=new Map;for(let j of n.prepare("SELECT * FROM game_dialogue WHERE story_ref=?").all(G.id)){let B=n.prepare("INSERT INTO story_dialogue (module_ref, name, pos_x, pos_y) VALUES (?,?,?,?)").run(K,j.name,j.pos_x||0,j.pos_y||0).lastInsertRowid;x.set(j.id,B),O.dialogues++;for(let V of n.prepare("SELECT * FROM game_conversation WHERE dialogue_ref=? ORDER BY talk_order").all(j.id))n.prepare("INSERT INTO story_talk (dialogue_ref, speaker, talk_sentence, talk_order) VALUES (?,?,?,?)").run(B,V.char_ref&&k.get(V.char_ref)||null,V.talk_sentence,V.talk_order)}for(let j of n.prepare("SELECT * FROM game_storyline WHERE story_ref=?").all(G.id)){let B=x.get(j.from_ref),V=x.get(j.to_ref);B&&V&&n.prepare(`INSERT INTO story_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)
              ON CONFLICT(from_ref, to_ref) DO NOTHING`).run(K,B,V,j.symbol||null)}}}else if(t==="writer"){let f=n.prepare("SELECT * FROM write_project WHERE id=?").get(r);if(!f)throw new Error("write project not found");let w=R(null,"Writer","collector");T=N(w,f.project_name,"manager",null,f.color);for(let H of n.prepare("SELECT * FROM write_series WHERE project_id=?").all(r)){let k=R(T,H.name,"collector");for(let G of n.prepare("SELECT * FROM write_book WHERE series_id=?").all(H.id)){let K=N(k,G.name,"author",null,G.color);for(let x of n.prepare("SELECT * FROM write_chapter WHERE book_id=? ORDER BY chapter_order, id").all(G.id)){let j=i.createBookChapter(K,x.name);x.chapter_content&&i.updateBookChapterContent(j,x.chapter_content),O.chapters++}}}let b=n.prepare("SELECT * FROM write_note WHERE project_id=?").all(r);if(b.length){let H=R(T,"Chat","scribe");for(let k of b){let G=h.createChatSession(H,k.notename),K=n.prepare("SELECT chat FROM write_chat WHERE note_id=? ORDER BY chat_order").all(k.id);for(let x of K)x.chat&&(h.createChatMessage(G,x.chat),O.chatMessages++)}}}else if(t==="scribe"){T=N(null,"Scribe","collector");let f=n.prepare("SELECT * FROM note_folder WHERE nexus_ref=?").all(e),w=new Map,b=new Map;for(let G of f){let K=G.parent_ref??null;b.has(K)||b.set(K,[]),b.get(K).push(G)}let H=(G,K)=>{for(let x of b.get(G)||[]){let j=N(K,x.name,"collector");w.set(x.id,j),H(x.id,j)}};H(null,T);let k=n.prepare("SELECT * FROM note WHERE nexus_ref=? AND migrated_v3=0").all(e);for(let G of k){let K=G.folder_ref&&w.get(G.folder_ref)||T,x=N(K,G.title,"inspector");G.content&&a.updateModuleDescription(x,G.content)}return n.prepare("UPDATE note SET migrated_v3=1 WHERE nexus_ref=? AND migrated_v3=0").run(e),T}else throw new Error(`unknown target ${t}`);return n.prepare(`UPDATE ${dT[t]} SET migrated_v3=1 WHERE id=?`).run(r),T})(),counts:O,batchCtx:o||null}}function Gc(e,t){let r=Yn();if(e==="scribe"){if(!t)return[];try{let n=r.prepare("SELECT COUNT(*) AS n FROM note WHERE nexus_ref=? AND migrated_v3=0").get(t);return n?.n?[{id:t,name:`Scribe (${n.n})`}]:[]}catch{return[]}}let o={director:"SELECT id, name FROM project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",navigator:"SELECT id, name FROM world_project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",hero:"SELECT id, name FROM game_project WHERE migrated_v3=0 ORDER BY name COLLATE NOCASE",writer:"SELECT id, project_name AS name FROM write_project WHERE migrated_v3=0 ORDER BY project_name COLLATE NOCASE"};try{return r.prepare(o[e]).all()}catch{return[]}}var uT={director:"Director",navigator:"Navigator",hero:"Hero",writer:"Writer"};function pT(e,t,r){let o=[],n=(a,s)=>{let i=e.prepare(s).get(r)?.n||0;i&&o.push(`${i} ${a}`)};return t==="director"?(n("categories","SELECT COUNT(*) AS n FROM object_category WHERE project_id=?"),n("timelines","SELECT COUNT(*) AS n FROM timeline WHERE project_id=?"),n("maps","SELECT COUNT(*) AS n FROM map WHERE project_id=?")):t==="navigator"?(n("characters","SELECT COUNT(*) AS n FROM world_character WHERE world_ref=?"),n("categories","SELECT COUNT(*) AS n FROM world_orig_category WHERE world_ref=?"),n("timelines","SELECT COUNT(*) AS n FROM world_timeline WHERE world_ref=?"),n("maps","SELECT COUNT(*) AS n FROM world_map WHERE world_ref=?")):t==="hero"?(n("characters","SELECT COUNT(*) AS n FROM game_character WHERE game_ref=?"),n("collections","SELECT COUNT(*) AS n FROM game_collection WHERE game_ref=?"),n("stories","SELECT COUNT(*) AS n FROM game_story WHERE game_ref=?")):t==="writer"&&(n("series","SELECT COUNT(*) AS n FROM write_series WHERE project_id=?"),n("notes","SELECT COUNT(*) AS n FROM write_note WHERE project_id=?")),o.join(" \xB7 ")}function _T(e){let t=Yn(),r=[];for(let o of["director","navigator","hero","writer","scribe"])for(let n of Gc(o,e)){if(o==="scribe"){let u=t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS NULL AND kind='collector' AND name=?").get(e,"Scribe");r.push({target:o,legacyId:n.id,legacyName:n.name,kind:"collector",willMergeInto:u?"Scribe":null,willCreateNew:!u,summary:""});continue}let a=uT[o],s=t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id IS NULL AND kind='collector' AND name=?").get(e,a),i=s?t.prepare("SELECT id FROM module WHERE nexus_ref=? AND parent_id=? AND kind='manager' AND name=?").get(e,s.id,n.name):null;r.push({target:o,legacyId:n.id,legacyName:n.name,kind:"manager",willMergeInto:i?n.name:null,willCreateNew:!i,summary:pT(t,o,n.id)})}return r}function mT(e){return cT(`${Bc}${e}`)===Xc.getVersion()}function fT(e){return lT(`${Bc}${e}`,Xc.getVersion()),{ok:!0}}$c.exports={migrateLegacy:ET,listLegacyProjects:Gc,previewLegacyMigration:_T,getLegacyPromptSeen:mT,setLegacyPromptSeen:fT}});var cr=X((gO,zc)=>{"use strict";A();var{safeStorage:qn}=(pe(),W(_e)),{getAppSetting:TT,setAppSetting:co}=ke(),Vn="enc:v1:",qc=new Set(["drive:refreshToken","drive:clientSecret","drive:clientId","google:refreshToken","sync:anonKey"]),NT=/^cloud:[a-z0-9_]+:(clientId|clientSecret|refreshToken|token|password|secretKey)$/,gT=e=>qc.has(e)||NT.test(String(e||"")),Vc=!1;function Jc(){let e=!1;try{e=qn.isEncryptionAvailable()}catch{e=!1}return!e&&!Vc&&(Vc=!0,console.warn("[secret-store] OS encryption unavailable \u2014 credentials stored unencrypted")),e}function Kc(e,t){let r=String(t??"");if(!r)return co(e,"");if(!Jc())return co(e,r);try{return co(e,Vn+qn.encryptString(r).toString("base64"))}catch{return co(e,r)}}function RT(e){let t=TT(e);if(!t)return t;if(!String(t).startsWith(Vn)){if(Jc())try{Kc(e,t)}catch{}return t}try{return qn.decryptString(M.from(String(t).slice(Vn.length),"base64"))}catch{return null}}zc.exports={SECRET_KEYS:qc,isSecretKey:gT,getSecret:RT,setSecret:Kc}});var lo={};ot(lo,{createServer:()=>Qc,default:()=>hT,get:()=>el,request:()=>Zc});var Jn,Qc,Zc,el,hT,Eo=xe(()=>{"use strict";A();Jn=e=>()=>{throw Object.assign(new Error(`${e} is not available in the web build (no local HTTP server in a browser)`),{code:"ERR_WEB_UNSUPPORTED"})},Qc=Jn("http.createServer"),Zc=Jn("http.request"),el=Jn("http.get"),hT={createServer:Qc,request:Zc,get:el}});var uo=X((SO,rl)=>{"use strict";A();var Kn=(Tt(),W(ft)),ST=(Eo(),W(lo)),tl=e=>e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function OT(){let e=tl(Kn.randomBytes(32)),t=tl(Kn.createHash("sha256").update(e).digest());return{verifier:e,challenge:t}}var LT=()=>Kn.randomBytes(16).toString("hex");function IT(e,{timeoutMs:t=300*1e3,state:r=null}={}){return new Promise((o,n)=>{let a=!1,s,i=(g,m)=>{a||(a=!0,clearTimeout(E),u.close(),g(m))},u=ST.createServer((g,m)=>{let h;try{h=new URL(g.url,"http://127.0.0.1")}catch{m.writeHead(400),m.end();return}if(h.pathname!=="/callback"){m.writeHead(404),m.end();return}if(r!==null&&h.searchParams.get("state")!==r){m.writeHead(400,{"Content-Type":"text/html; charset=utf-8"}),m.end('<html><body style="font-family:sans-serif;padding:2rem">Login failed \u2014 the request could not be verified. Please try again.</body></html>'),i(n,new Error("state_mismatch"));return}let O=h.searchParams.get("code"),N=h.searchParams.get("error_description")||h.searchParams.get("error");m.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),m.end('<html><body style="font-family:sans-serif;padding:2rem">Login complete \u2014 you can close this tab.</body></html>'),O?i(o,{code:O,redirectUri:s}):i(n,new Error(N||"no_code"))}),E=setTimeout(()=>i(n,new Error("login_timeout")),t);u.on("error",g=>i(n,g)),u.unref(),u.listen(0,"127.0.0.1",()=>{s=`http://127.0.0.1:${u.address().port}/callback`,(pe(),W(_e)).shell.openExternal(e(s))})})}rl.exports={makePkcePair:OT,makeState:LT,runOAuthLoopback:IT}});var ul=X((LO,El)=>{"use strict";A();var AT=(Eo(),W(lo)),zn=(Tt(),W(ft)),ll=(Oe(),W(Ce)),ol=(Te(),W(Me)),{app:wT}=(pe(),W(_e)),yT=4320*60*1e3,CT=8,bT=900*1e3,nl=3,dl=e=>e==="pro"?20971520:10485760,al=e=>e==="pro"?3:1,Z=null,po=null,lr=null,dr=null;function kT(){po=ol.join(ol.dirname(wT.getPath("userData")),"dev-sync-server.json");try{Z=JSON.parse(ll.readFileSync(po,"utf8"))}catch{Z=null}(!Z||typeof Z!="object"||Z.schema!==nl)&&(Z={schema:nl,vaults:{},tokens:{}}),Z.vaults=Z.vaults||{},Z.tokens=Z.tokens||{}}function Pt(){try{ll.writeFileSync(po,JSON.stringify(Z))}catch(e){console.error("dev-sync-server: persist failed:",e)}}var il=e=>zn.createHash("sha256").update(String(e||""),"utf8").digest("hex"),sl=e=>zn.createHash("sha256").update(String(e||""),"utf8").digest("hex"),ge=e=>new Error(e);function DT(e,t){if(M.byteLength(JSON.stringify(e??null))>dl(t))throw ge("too_large")}function cl(e){let t=!1;for(let[r,o]of Object.entries(Z.vaults))o.owner_id===e&&new Date(o.expires_at).getTime()<Date.now()&&(delete Z.tokens[o.token_hash],delete Z.vaults[r],t=!0);t&&Pt()}var FT={token_sync_push(e,t){let{uid:r,tier:o}=t;if(!r)throw ge("not_authenticated");DT(e.p_snapshot,o);let n=String(e.p_token||"");if(!/^[0-9]{16}$/.test(n))throw ge("bad_token");let a=il(n),s=e.p_vault_id||null;if(s){let m=Z.vaults[s];if(!m||m.owner_id!==r)throw ge("not_owner")}else{if(Object.values(Z.vaults).filter(h=>h.owner_id===r).length>=al(o))throw ge("quota_exceeded");s=zn.randomUUID()}let i=Z.tokens[a];if(i&&i!==s)throw ge("token_collision");let u=Z.vaults[s];u&&delete Z.tokens[u.token_hash];let E=new Date().toISOString(),g={id:s,owner_id:r,name:e.p_name||"vault",snapshot:e.p_snapshot,snapshot_at:E,token_hash:a,password_hash:e.p_password?sl(e.p_password):null,expires_at:new Date(Date.now()+yT).toISOString(),pull_fail_count:0,pull_locked_until:null};return Z.vaults[s]=g,Z.tokens[a]=s,Pt(),{vault_id:s,snapshot_at:g.snapshot_at,expires_at:g.expires_at}},token_sync_status(e,t){let{uid:r,tier:o}=t;if(!r)throw ge("not_authenticated");cl(r);let n=Object.values(Z.vaults).filter(a=>a.owner_id===r).sort((a,s)=>a.snapshot_at<s.snapshot_at?1:-1).map(a=>({vault_id:a.id,name:a.name,snapshot_at:a.snapshot_at,expires_at:a.expires_at,size_bytes:M.byteLength(JSON.stringify(a.snapshot)),has_password:!!a.password_hash}));return{tier:o,max_slots:al(o),max_bytes:dl(o),uploads:n}},token_sync_delete(e,t){if(!t.uid)throw ge("not_authenticated");let r=Z.vaults[e.p_vault_id];return r&&r.owner_id===t.uid&&(delete Z.tokens[r.token_hash],delete Z.vaults[e.p_vault_id],Pt()),{ok:!0}},token_sync_pull_own(e,t){if(!t.uid)throw ge("not_authenticated");cl(t.uid);let r=Z.vaults[e.p_vault_id];if(!r||r.owner_id!==t.uid)throw ge("no_upload");return{name:r.name,snapshot:r.snapshot,snapshot_at:r.snapshot_at}},token_sync_pull_by_token(e,t){let r=Z.tokens[il(e.p_token)],o=r?Z.vaults[r]:null;if(!o)throw ge("bad_token");if(new Date(o.expires_at).getTime()<Date.now())throw delete Z.tokens[o.token_hash],delete Z.vaults[r],Pt(),ge("bad_token");if(o.pull_locked_until&&new Date(o.pull_locked_until).getTime()>Date.now())throw ge("locked");if(t.uid&&t.uid===o.owner_id)return{vault_id:o.id,name:o.name,snapshot:o.snapshot,snapshot_at:o.snapshot_at};if(o.password_hash&&(!e.p_password||sl(e.p_password)!==o.password_hash))throw o.pull_fail_count=(o.pull_fail_count||0)+1,o.pull_fail_count>=CT&&(o.pull_locked_until=new Date(Date.now()+bT).toISOString()),Pt(),ge("bad_password");return o.pull_fail_count=0,o.pull_locked_until=null,Pt(),{vault_id:o.id,name:o.name,snapshot:o.snapshot,snapshot_at:o.snapshot_at}}},xT=["not_authenticated","bad_token","bad_password","locked","token_collision","no_upload","too_large","quota_exceeded","not_owner"];function MT(e){let t=/^Bearer\s+(.+)$/.exec(e.headers.authorization||"");if(!t||t[1]==="dev-local")return{uid:null,tier:"free"};let[r,o]=t[1].split(":");return{uid:r,tier:o==="pro"?"pro":"free"}}function UT(e,t){let r=(i,u)=>{t.writeHead(i,{"Content-Type":"application/json"}),t.end(JSON.stringify(u))},o=/^\/rest\/v1\/rpc\/(\w+)$/.exec(e.url);if(!o||e.method!=="POST")return r(404,{message:"not found"});if(!e.headers.apikey)return r(401,{message:"No API key found in request"});let n=FT[o[1]];if(!n)return r(404,{message:`function ${o[1]} not found`});let a=MT(e),s="";e.on("data",i=>{s+=i}),e.on("end",()=>{let i;try{i=JSON.parse(s||"{}")}catch{return r(400,{message:"bad json"})}try{r(200,n(i,a))}catch(u){let E=String(u.message||u);r(xT.includes(E)?400:500,{message:E})}})}function vT(){return lr?Promise.resolve(lr):dr||(dr=new Promise((e,t)=>{kT();let r=AT.createServer(UT);r.on("error",o=>{dr=null,t(o)}),r.unref(),r.listen(0,"127.0.0.1",()=>{lr=`http://127.0.0.1:${r.address().port}`,console.log(`dev-sync-server: token sync backend at ${lr} (state: ${po})`),e(lr)})}),dr)}El.exports={ensureDevSyncServer:vT}});var fo=X((wO,Il)=>{"use strict";A();var jT=(Tt(),W(ft)),{app:PT}=(pe(),W(_e)),{getDB:AO,getVaultDB:ea}=re(),{getAppSetting:pl,setAppSetting:ta}=ke(),{getSecret:_l,setSecret:ur}=cr(),{makePkcePair:WT,runOAuthLoopback:HT}=uo(),ml="dracondex-vault-snapshot",fl=1,Wt=!PT.isPackaged,Zn=null;async function XT(){!Wt||Zn||(Zn=await ul().ensureDevSyncServer())}function St(){if(Wt)return{url:Zn||"",anonKey:"dev-local",configured:!0,dev:!0};let e=(pl("sync:url")||"").replace(/\/+$/,""),t=_l("sync:anonKey")||"";return{url:e,anonKey:t,configured:!!(e&&t),dev:!1}}function Tl(e){let t;try{t=new URL(String(e))}catch{return!1}return t.protocol==="https:"?!0:t.protocol==="http:"&&["localhost","127.0.0.1","[::1]","::1"].includes(t.hostname)}function BT(e,t){let r=String(e||"").trim().replace(/\/+$/,"");return r&&!Tl(r)?{ok:!1,error:"invalid_url"}:(ta("sync:url",r),ur("sync:anonKey",String(t||"").trim()),{ok:!0})}var ra="sync:slotMap";function mo(){try{return JSON.parse(pl(ra)||"{}")||{}}catch{return{}}}function Nl(e,t){let r=mo();r[String(e)]=t,ta(ra,JSON.stringify(r))}function GT(e){let t=mo(),r=!1;for(let o of Object.keys(t))t[o]===e&&(delete t[o],r=!0);r&&ta(ra,JSON.stringify(t))}function $T(){return Array.from({length:16},()=>jT.randomInt(10)).join("")}var Er="google:refreshToken",YT=300*1e3,se=null;async function VT(e,t){if(Wt){let g=String(e||"dev-user-1");return se={accessToken:`${g}:${t==="pro"?"pro":"free"}`,accessTokenExp:1/0,uid:g,email:`${g}@local.test`},{ok:!0,email:se.email}}let{url:r,anonKey:o,configured:n}=St();if(!n)return{ok:!1,code:"no_config"};let{verifier:a,challenge:s}=WT(),i;try{({code:i}=await HT(g=>`${r}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(g)}&code_challenge=${s}&code_challenge_method=s256`,{timeoutMs:YT}))}catch(g){return{ok:!1,code:g.message==="login_timeout"?"login_timeout":"auth",error:String(g?.message||g)}}let u;try{u=await fetch(`${r}/auth/v1/token?grant_type=pkce`,{method:"POST",headers:{apikey:o,"Content-Type":"application/json"},body:JSON.stringify({auth_code:i,code_verifier:a}),signal:AbortSignal.timeout(15e3)})}catch(g){return{ok:!1,code:"network",error:String(g?.message||g)}}if(!u.ok){let g=await u.json().catch(()=>({}));return{ok:!1,code:"auth",error:g.error_description||g.msg||`HTTP ${u.status}`}}let E=await u.json();return se={accessToken:E.access_token,accessTokenExp:Date.now()+(E.expires_in||3600)*1e3,uid:E.user?.id,email:E.user?.email},ur(Er,E.refresh_token||""),{ok:!0,email:se.email}}async function qT(){if(!Wt){let{url:e,anonKey:t,configured:r}=St();if(r&&se?.accessToken)try{await fetch(`${e}/auth/v1/logout`,{method:"POST",headers:{apikey:t,Authorization:`Bearer ${se.accessToken}`},signal:AbortSignal.timeout(1e4)})}catch{}ur(Er,"")}return se=null,{ok:!0}}async function gl(){if(Wt)return se?se.accessToken:null;if(se&&se.accessTokenExp>Date.now()+5e3)return se.accessToken;let e=_l(Er);if(!e)return se=null,null;let{url:t,anonKey:r,configured:o}=St();if(!o)return null;let n;try{n=await fetch(`${t}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:r,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:e}),signal:AbortSignal.timeout(15e3)})}catch{return se?se.accessToken:null}if(!n.ok)return(n.status===400||n.status===401)&&(ur(Er,""),se=null),null;let a=await n.json();return se={accessToken:a.access_token,accessTokenExp:Date.now()+(a.expires_in||3600)*1e3,uid:a.user?.id,email:a.user?.email},a.refresh_token&&ur(Er,a.refresh_token),se.accessToken}async function Rl(){let{configured:e,dev:t}=St();return Wt?{ok:!0,configured:!0,dev:!0,loggedIn:!!se,email:se?.email||null}:e?{ok:!0,configured:!0,dev:!1,loggedIn:!!await gl(),email:se?.email||null}:{ok:!0,configured:!1,dev:!1,loggedIn:!1,email:null}}var JT=["not_authenticated","bad_token","bad_password","locked","token_collision","no_upload","too_large","quota_exceeded","not_owner"];async function pr(e,t){try{await XT()}catch(E){return{ok:!1,code:"network",error:`dev sync server failed: ${String(E?.message||E)}`}}let{url:r,anonKey:o,configured:n}=St();if(!n||!r)return{ok:!1,code:"no_config"};let a=await gl(),s;try{s=await fetch(`${r}/rest/v1/rpc/${e}`,{method:"POST",headers:{apikey:o,Authorization:`Bearer ${a||o}`,"Content-Type":"application/json"},body:JSON.stringify(t),signal:AbortSignal.timeout(3e4)})}catch(E){return{ok:!1,code:"network",error:String(E?.message||E)}}if(s.ok)try{return{ok:!0,data:await s.json()}}catch{return{ok:!1,code:"server",error:"bad response body"}}let i=await s.json().catch(()=>({}));return s.status===401||s.status===403?{ok:!1,code:"auth",error:i.message||`HTTP ${s.status}`}:{ok:!1,code:JT.includes(i.message)?i.message:"server",error:i.message||`HTTP ${s.status}`}}var Qn=e=>`${e.day}|${e.month}|${e.years}|${e.hour}|${e.minute}`;function hl(e,t=null){let r=ea(e),o=r.prepare(`
    SELECT n.name, n.memo, c.color_code AS colorCode
    FROM nexus n LEFT JOIN use_color c ON n.color = c.id WHERE n.id=?`).get(e);if(!o)return null;let n=Array.isArray(t)&&t.length>0,a=k=>{if(n){let G=`m.id IN (${t.map(()=>"?").join(",")})`;return r.prepare(k.replace("m.nexus_ref=?",G)).all(...t)}return r.prepare(k).all(e)},s=k=>n?[]:r.prepare(k).all(e),i=a(`
    SELECT m.id, m.parent_id AS parentId, m.name, m.kind, m.icon,
           ic.color_code AS iconColorCode, cc.color_code AS colorCode,
           m.description, m.display_order AS displayOrder, m.pinned,
           m.cat_type AS catType, m.create_at AS createAt, m.update_at AS updateAt
    FROM module m
    LEFT JOIN use_color ic ON m.icon_color = ic.id
    LEFT JOIN use_color cc ON m.color = cc.id
    WHERE m.nexus_ref=? ORDER BY m.id`),u=a(`
    SELECT a.module_ref AS moduleId, a.attr_name AS name, a.attr_value AS value,
           a.display_order AS displayOrder
    FROM module_attribute a JOIN module m ON a.module_ref=m.id
    WHERE m.nexus_ref=? ORDER BY a.id`),E=a(`
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
      JOIN module m ON o.module_ref=m.id WHERE m.nexus_ref=?`)},h={maps:a(`
      SELECT mp.id, mp.module_ref AS moduleId, mp.map_name AS name, c.color_code AS colorCode
      FROM map mp JOIN module m ON mp.module_ref=m.id
      LEFT JOIN use_color c ON mp.color=c.id WHERE m.nexus_ref=? ORDER BY mp.id`),areas:a(`
      SELECT a.id, a.map_id AS mapId, a.area_name AS name, c.color_code AS colorCode
      FROM map_area a JOIN map mp ON a.map_id=mp.id JOIN module m ON mp.module_ref=m.id
      LEFT JOIN use_color c ON a.color=c.id WHERE m.nexus_ref=? ORDER BY a.id`),points:a(`
      SELECT p.area_id AS areaId, p.point_order AS "order", p.x, p.y
      FROM map_point p JOIN map_area a ON p.area_id=a.id
      JOIN map mp ON a.map_id=mp.id JOIN module m ON mp.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY p.id`)},O={timelines:a(`
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
      WHERE m.nexus_ref=? ORDER BY e.id`).map(k=>({id:k.id,timelineId:k.timelineId,name:k.name,startKey:Qn({day:k.sDay,month:k.sMonth,years:k.sYears,hour:k.sHour,minute:k.sMinute}),endKey:k.eDay==null?null:Qn({day:k.eDay,month:k.eMonth,years:k.eYears,hour:k.eHour,minute:k.eMinute}),colorCode:k.colorCode,story:k.story}))},N=a(`
    SELECT DISTINCT d.day, d.month, d.years, d.hour, d.minute
    FROM timeline_date d
    JOIN timeline_event e ON e.start_at=d.id OR e.end_at=d.id
    JOIN timeline t ON e.timeline_id=t.id JOIN module m ON t.module_ref=m.id
    WHERE m.nexus_ref=?`).map(k=>({key:Qn(k),...k})),R={mapEvents:a(`
      SELECT me.module_ref AS moduleId, me.event_ref AS eventId, me.area_ref AS areaId,
             me.label, me.x, me.y
      FROM map_event me JOIN module m ON me.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY me.id`)},S={dialogues:a(`
      SELECT d.id, d.module_ref AS moduleId, d.name, c.color_code AS colorCode,
             d.pos_x AS posX, d.pos_y AS posY
      FROM story_dialogue d JOIN module m ON d.module_ref=m.id
      LEFT JOIN use_color c ON d.color=c.id WHERE m.nexus_ref=? ORDER BY d.id`),edges:a(`
      SELECT e.module_ref AS moduleId, e.from_ref AS fromId, e.to_ref AS toId, e.label
      FROM story_edge e JOIN module m ON e.module_ref=m.id WHERE m.nexus_ref=?`),talks:a(`
      SELECT tk.dialogue_ref AS dialogueId, tk.speaker, tk.talk_sentence AS sentence,
             tk.talk_order AS "order"
      FROM story_talk tk JOIN story_dialogue d ON tk.dialogue_ref=d.id
      JOIN module m ON d.module_ref=m.id WHERE m.nexus_ref=? ORDER BY tk.id`)},_={chapters:a(`
      SELECT ch.id, ch.module_ref AS moduleId, ch.name, ch.chapter_content AS content,
             ch.chapter_order AS "order"
      FROM book_chapter ch JOIN module m ON ch.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY ch.id`)},C={sessions:a(`
      SELECT s.id, s.module_ref AS moduleId, s.name, s.session_order AS "order",
             s.create_at AS createAt
      FROM chat_session s JOIN module m ON s.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY s.id`),messages:a(`
      SELECT msg.session_ref AS sessionId, msg.message, msg.create_at AS createAt
      FROM chat_message msg JOIN chat_session s ON msg.session_ref=s.id
      JOIN module m ON s.module_ref=m.id WHERE m.nexus_ref=? ORDER BY msg.id`)},D={pages:a(`
      SELECT p.id, p.module_ref AS moduleId, p.name, p.page_order AS "order"
      FROM sketch_page p JOIN module m ON p.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY p.id`),strokes:a(`
      SELECT st.page_ref AS pageId, st.color, st.width, st.points
      FROM sketch_stroke st JOIN sketch_page p ON st.page_ref=p.id
      JOIN module m ON p.module_ref=m.id WHERE m.nexus_ref=? ORDER BY st.id`),pins:a(`
      SELECT pn.page_ref AS pageId, pn.linker_key AS linkerKey, pn.x, pn.y
      FROM sketch_pin pn JOIN sketch_page p ON pn.page_ref=p.id
      JOIN module m ON p.module_ref=m.id WHERE m.nexus_ref=? ORDER BY pn.id`)},y={nodes:a(`
      SELECT n.id, n.module_ref AS moduleId, n.shape, n.x, n.y, n.node_text AS text,
             n.color, n.linker_key AS linkerKey
      FROM design_node n JOIN module m ON n.module_ref=m.id
      WHERE m.nexus_ref=? ORDER BY n.id`),edges:a(`
      SELECT e.module_ref AS moduleId, e.from_ref AS fromId, e.to_ref AS toId, e.label
      FROM design_edge e JOIN module m ON e.module_ref=m.id WHERE m.nexus_ref=?`)},I=s(`
    SELECT from_key AS fromKey, to_key AS toKey, label
    FROM entity_relation WHERE nexus_ref=? ORDER BY id`),L={folders:s(`
      SELECT f.id, f.parent_ref AS parentId, f.name, c.color_code AS colorCode
      FROM note_folder f LEFT JOIN use_color c ON f.color=c.id
      WHERE f.nexus_ref=? ORDER BY f.id`),notes:s(`
      SELECT n.id, n.folder_ref AS folderId, n.title, n.content,
             c.color_code AS colorCode, n.pinned
      FROM note n LEFT JOIN use_color c ON n.color=c.id
      WHERE n.nexus_ref=? ORDER BY n.id`)},T=new Set,f=k=>{k&&T.add(k)};f(o.colorCode),i.forEach(k=>{f(k.iconColorCode),f(k.colorCode)}),g.forEach(k=>f(k.colorCode)),m.objects.forEach(k=>f(k.colorCode)),h.maps.forEach(k=>f(k.colorCode)),h.areas.forEach(k=>f(k.colorCode)),O.timelines.forEach(k=>f(k.colorCode)),O.events.forEach(k=>f(k.colorCode)),S.dialogues.forEach(k=>f(k.colorCode)),L.folders.forEach(k=>f(k.colorCode)),L.notes.forEach(k=>f(k.colorCode));let w=[],b=new Set;g.forEach(k=>{b.has(k.tagName)||(b.add(k.tagName),w.push({name:k.tagName,colorCode:k.colorCode||null}))});let H=null;try{H=_E("../../package.json").version}catch{}return{format:ml,version:fl,app:H,exportedAt:new Date().toISOString(),nexus:{name:o.name,memo:o.memo,colorCode:o.colorCode},lookups:{colors:[...T],hashtags:w,dates:N},modules:i,moduleAttrs:u,moduleUi:E,moduleTags:g,classifier:m,locator:h,chronicler:O,wanderer:R,narrator:S,author:_,chatscribe:C,sketcher:D,designer:y,relations:I,notes:L}}function KT(e,t){let o=ea(e).prepare("SELECT id, parent_id AS parentId FROM module WHERE nexus_ref=?").all(e),n=new Map;for(let i of o)n.has(i.parentId)||n.set(i.parentId,[]),n.get(i.parentId).push(i.id);let a=[],s=[t];for(;s.length;){let i=s.pop();a.push(i);for(let u of n.get(i)||[])s.push(u)}return a}function zT(e){return!e||e.format!==ml||e.version!==fl?!1:Array.isArray(e.modules)&&e.nexus&&typeof e.nexus=="object"}function _o(e,t){let r=/^([a-z]+)_(\d+)$/.exec(String(e||""));if(!r)return null;let o=t[r[1]];if(!o)return null;let n=o.get(Number(r[2]));return n==null?null:`${r[1]}_${n}`}function Sl(e,t,r={}){let{wipe:o=!1,updateNexusMeta:n=!1,reparentRootTo:a=null}=r;if(!zT(t))return{ok:!1,code:"bad_snapshot"};let s=ea(e),i=g=>Array.isArray(g)?g:[],u=g=>g&&typeof g=="object"?g:{},E=s.transaction(()=>{o&&(s.prepare("DELETE FROM module WHERE nexus_ref=?").run(e),s.prepare("DELETE FROM entity_relation WHERE nexus_ref=?").run(e),s.prepare("DELETE FROM note WHERE nexus_ref=?").run(e),s.prepare("DELETE FROM note_folder WHERE nexus_ref=?").run(e),s.prepare("DELETE FROM wiki_link WHERE nexus_ref=?").run(e));let g=u(t.lookups),m=new Map;for(let p of i(g.colors))p&&(s.prepare("INSERT OR IGNORE INTO use_color (color_code) VALUES (?)").run(p),m.set(p,s.prepare("SELECT id FROM use_color WHERE color_code=?").get(p).id));let h=p=>p&&m.has(p)?m.get(p):null,O=new Map;for(let p of i(g.hashtags))p?.name&&(s.prepare("INSERT OR IGNORE INTO hashtag (tag_name, tag_color) VALUES (?,?)").run(p.name,h(p.colorCode)),O.set(p.name,s.prepare("SELECT id FROM hashtag WHERE tag_name=?").get(p.name).id));let N=new Map;for(let p of i(g.dates))s.prepare("INSERT OR IGNORE INTO timeline_date (day,month,years,hour,minute) VALUES (?,?,?,?,?)").run(p.day,p.month,p.years,p.hour,p.minute),N.set(p.key,s.prepare("SELECT id FROM timeline_date WHERE day=? AND month=? AND years=? AND hour=? AND minute=?").get(p.day,p.month,p.years,p.hour,p.minute).id);n&&s.prepare("UPDATE nexus SET memo=?, color=?, update_at=datetime('now') WHERE id=?").run(t.nexus.memo??null,h(t.nexus.colorCode),e);let R=new Map,S=i(t.modules).slice();for(;S.length;){let p=[],q=!1;for(let z of S){if(z.parentId!=null&&!R.has(z.parentId)){p.push(z);continue}let Go=z.parentId!=null?R.get(z.parentId):a,cE=s.prepare(`
          INSERT INTO module (nexus_ref, parent_id, name, kind, icon, icon_color, color,
                              description, display_order, pinned, cat_type, create_at, update_at)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,COALESCE(?,datetime('now')),COALESCE(?,datetime('now')))`).run(e,Go,z.name,z.kind,z.icon??null,h(z.iconColorCode),h(z.colorCode),z.description??null,z.displayOrder??0,z.pinned??0,z.catType??null,z.createAt??null,z.updateAt??null);R.set(z.id,cE.lastInsertRowid),q=!0}if(!q)break;S=p}let _=p=>R.get(p);for(let p of i(t.moduleAttrs))_(p.moduleId)!=null&&s.prepare("INSERT INTO module_attribute (module_ref, attr_name, attr_value, display_order) VALUES (?,?,?,?)").run(_(p.moduleId),p.name,p.value??null,p.displayOrder??0);for(let p of i(t.moduleTags))_(p.moduleId)==null||!O.has(p.tagName)||s.prepare("INSERT OR IGNORE INTO module_hashtag (module_ref, hashtag_id) VALUES (?,?)").run(_(p.moduleId),O.get(p.tagName));let C=u(t.classifier),D=new Map;for(let p of i(C.objects)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO classifier_object (module_ref, name, color, note, display_order) VALUES (?,?,?,?,?)").run(_(p.moduleId),p.name,h(p.colorCode),p.note??null,p.displayOrder??0);D.set(p.id,q.lastInsertRowid)}let y=new Map;for(let p of i(C.templates)){if(_(p.moduleId)==null||p.objectId!=null&&!D.has(p.objectId))continue;let q=s.prepare(`
        INSERT INTO classifier_template (module_ref, object_ref, description, attribute_type,
                                         levelable, has_condition, display_order)
        VALUES (?,?,?,?,?,?,?)`).run(_(p.moduleId),p.objectId!=null?D.get(p.objectId):null,p.description,p.attributeType??"text",p.levelable??0,p.hasCondition??0,p.displayOrder??0);y.set(p.id,q.lastInsertRowid)}for(let p of i(C.attributes))!D.has(p.objectId)||!y.has(p.templateId)||s.prepare("INSERT OR IGNORE INTO classifier_attribute (object_ref, template_ref, attribute_value) VALUES (?,?,?)").run(D.get(p.objectId),y.get(p.templateId),p.value??null);let I=u(t.locator),L=new Map;for(let p of i(I.maps)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO map (map_name, module_ref, color) VALUES (?,?,?)").run(p.name??null,_(p.moduleId),h(p.colorCode));L.set(p.id,q.lastInsertRowid)}let T=new Map;for(let p of i(I.areas)){if(!L.has(p.mapId))continue;let q=s.prepare("INSERT INTO map_area (map_id, area_name, color) VALUES (?,?,?)").run(L.get(p.mapId),p.name??null,h(p.colorCode));T.set(p.id,q.lastInsertRowid)}for(let p of i(I.points))T.has(p.areaId)&&s.prepare("INSERT INTO map_point (area_id, point_order, x, y) VALUES (?,?,?,?)").run(T.get(p.areaId),p.order??0,p.x,p.y);let f=u(t.chronicler),w=new Map;for(let p of i(f.timelines)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO timeline (line_name, module_ref, color) VALUES (?,?,?)").run(p.name??null,_(p.moduleId),h(p.colorCode));w.set(p.id,q.lastInsertRowid)}let b=new Map;for(let p of i(f.events)){if(!w.has(p.timelineId)||!N.has(p.startKey))continue;let q=s.prepare(`
        INSERT INTO timeline_event (timeline_id, event_name, start_at, end_at, color, story)
        VALUES (?,?,?,?,?,?)`).run(w.get(p.timelineId),p.name??null,N.get(p.startKey),p.endKey!=null&&N.has(p.endKey)?N.get(p.endKey):null,h(p.colorCode),p.story??null);b.set(p.id,q.lastInsertRowid)}for(let p of i(u(t.wanderer).mapEvents))_(p.moduleId)!=null&&s.prepare("INSERT INTO map_event (module_ref, event_ref, area_ref, label, x, y) VALUES (?,?,?,?,?,?)").run(_(p.moduleId),p.eventId!=null&&b.has(p.eventId)?b.get(p.eventId):null,p.areaId!=null&&T.has(p.areaId)?T.get(p.areaId):null,p.label??null,p.x??0,p.y??0);let H=u(t.narrator),k=new Map;for(let p of i(H.dialogues)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO story_dialogue (module_ref, name, color, pos_x, pos_y) VALUES (?,?,?,?,?)").run(_(p.moduleId),p.name,h(p.colorCode),p.posX??0,p.posY??0);k.set(p.id,q.lastInsertRowid)}for(let p of i(H.edges))_(p.moduleId)==null||!k.has(p.fromId)||!k.has(p.toId)||s.prepare("INSERT OR IGNORE INTO story_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)").run(_(p.moduleId),k.get(p.fromId),k.get(p.toId),p.label??null);for(let p of i(H.talks))k.has(p.dialogueId)&&s.prepare("INSERT INTO story_talk (dialogue_ref, speaker, talk_sentence, talk_order) VALUES (?,?,?,?)").run(k.get(p.dialogueId),p.speaker??null,p.sentence??null,p.order??0);let G=new Map;for(let p of i(u(t.author).chapters)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO book_chapter (module_ref, name, chapter_content, chapter_order) VALUES (?,?,?,?)").run(_(p.moduleId),p.name,p.content??null,p.order??0);G.set(p.id,q.lastInsertRowid)}let K=u(t.chatscribe),x=new Map;for(let p of i(K.sessions)){if(_(p.moduleId)==null)continue;let q=s.prepare(`
        INSERT INTO chat_session (module_ref, name, session_order, create_at)
        VALUES (?,?,?,COALESCE(?,datetime('now')))`).run(_(p.moduleId),p.name,p.order??0,p.createAt??null);x.set(p.id,q.lastInsertRowid)}for(let p of i(K.messages))x.has(p.sessionId)&&s.prepare("INSERT INTO chat_message (session_ref, message, create_at) VALUES (?,?,COALESCE(?,datetime('now')))").run(x.get(p.sessionId),p.message,p.createAt??null);let j=u(t.sketcher),B=new Map;for(let p of i(j.pages)){if(_(p.moduleId)==null)continue;let q=s.prepare("INSERT INTO sketch_page (module_ref, name, page_order) VALUES (?,?,?)").run(_(p.moduleId),p.name,p.order??0);B.set(p.id,q.lastInsertRowid)}for(let p of i(j.strokes))B.has(p.pageId)&&s.prepare("INSERT INTO sketch_stroke (page_ref, color, width, points) VALUES (?,?,?,?)").run(B.get(p.pageId),p.color??null,p.width??3,p.points);let V=u(t.designer),J=new Map,te={module:R,cobj:D,bchp:G,chss:x},we=0;for(let p of i(j.pins)){if(!B.has(p.pageId))continue;let q=_o(p.linkerKey,te);if(!q){we++;continue}s.prepare("INSERT INTO sketch_pin (page_ref, linker_key, x, y) VALUES (?,?,?,?)").run(B.get(p.pageId),q,p.x??0,p.y??0)}for(let p of i(V.nodes)){if(_(p.moduleId)==null)continue;let q=p.linkerKey?_o(p.linkerKey,te):null,z=s.prepare(`
        INSERT INTO design_node (module_ref, shape, x, y, node_text, color, linker_key)
        VALUES (?,?,?,?,?,?,?)`).run(_(p.moduleId),p.shape??"box",p.x??0,p.y??0,p.text??null,p.color??null,q);J.set(p.id,z.lastInsertRowid)}for(let p of i(V.edges))_(p.moduleId)==null||!J.has(p.fromId)||!J.has(p.toId)||s.prepare("INSERT OR IGNORE INTO design_edge (module_ref, from_ref, to_ref, label) VALUES (?,?,?,?)").run(_(p.moduleId),J.get(p.fromId),J.get(p.toId),p.label??null);let Ke=u(t.notes),ye=new Map,At=i(Ke.folders).slice();for(;At.length;){let p=[],q=!1;for(let z of At){if(z.parentId!=null&&!ye.has(z.parentId)){p.push(z);continue}let Go=s.prepare("INSERT INTO note_folder (nexus_ref, parent_ref, name, color) VALUES (?,?,?,?)").run(e,z.parentId!=null?ye.get(z.parentId):null,z.name,h(z.colorCode));ye.set(z.id,Go.lastInsertRowid),q=!0}if(!q)break;At=p}let Gt=new Map;for(let p of i(Ke.notes)){let q=s.prepare(`
        INSERT OR IGNORE INTO note (nexus_ref, folder_ref, title, content, color, pinned)
        VALUES (?,?,?,?,?,?)`).run(e,p.folderId!=null&&ye.has(p.folderId)?ye.get(p.folderId):null,p.title,p.content??"",h(p.colorCode),p.pinned??0);q.changes&&Gt.set(p.id,q.lastInsertRowid)}te.note=Gt;let Bo=0;for(let p of i(t.relations)){let q=_o(p.fromKey,te),z=_o(p.toKey,te);if(!q||!z){Bo++;continue}s.prepare("INSERT OR IGNORE INTO entity_relation (nexus_ref, from_key, to_key, label) VALUES (?,?,?,?)").run(e,q,z,p.label??null)}for(let p of i(t.moduleUi)){if(_(p.moduleId)==null)continue;let q=p.value;if(p.key==="mapModule"||p.key==="timelineModule"){let z=R.get(Number(p.value));if(z==null)continue;q=String(z)}s.prepare("INSERT OR IGNORE INTO module_ui (module_ref, ui_key, ui_value) VALUES (?,?,?)").run(_(p.moduleId),p.key,q??null)}return{modules:R.size,notes:Gt.size,relations:i(t.relations).length-Bo,droppedRelations:Bo,droppedPins:we}})();try{Le().rebuildWikiIndex()}catch(g){console.error("sync: wiki rebuild after pull failed:",g)}return{ok:!0,summary:E}}function Ol(e,t){return Sl(e,t,{wipe:!0,updateNexusMeta:!0,reparentRootTo:null})}function QT(e,t,r){return Sl(e,r,{wipe:!1,updateNexusMeta:!1,reparentRootTo:t??null})}async function ZT(e){let{configured:t,dev:r}=St(),o=await Rl(),n={ok:!0,configured:t,dev:r,loggedIn:o.loggedIn,email:o.email,tier:null,maxSlots:0,maxBytes:0,uploads:[],mappedVaultId:null};if(!t&&!r||!o.loggedIn)return n;let a=await pr("token_sync_status",{});if(!a.ok)return n.remoteError=a.code,n;n.tier=a.data.tier,n.maxSlots=a.data.max_slots,n.maxBytes=a.data.max_bytes,n.uploads=(a.data.uploads||[]).map(i=>({vaultId:i.vault_id,name:i.name,snapshotAt:i.snapshot_at,expiresAt:i.expires_at,sizeBytes:i.size_bytes,hasPassword:i.has_password}));let s=mo()[String(e)];return n.mappedVaultId=n.uploads.some(i=>i.vaultId===s)?s:null,n}async function eN(e,t){let r=hl(e);if(!r)return{ok:!1,code:"bad_snapshot",error:"nexus not found"};let o=mo()[String(e)]||null,n=null;for(let a=0;a<5;a++){let s=$T(),i=await pr("token_sync_push",{p_snapshot:r,p_name:r.nexus.name,p_token:s,p_password:t?String(t):null,p_vault_id:o});if(i.ok)return Nl(e,i.data.vault_id),{ok:!0,token:s,vaultId:i.data.vault_id,pushedAt:i.data.snapshot_at,expiresAt:i.data.expires_at};if(i.code!=="token_collision")return i;n=i}return n||{ok:!1,code:"server"}}function Ll(e,t,r){let o;try{o=Ol(e,r.snapshot)}catch(n){return console.error("sync: applySnapshot failed:",n),{ok:!1,code:"bad_snapshot",error:String(n?.message||n)}}return o.ok?(t&&Nl(e,t),{ok:!0,pulledAt:new Date().toISOString(),cloudName:r.name,summary:o.summary}):o}async function tN(e,t){if(!t)return{ok:!1,code:"no_upload"};let r=await pr("token_sync_pull_own",{p_vault_id:t});return r.ok?Ll(e,t,r.data):r}async function rN(e,t,r){let o=String(t||"").replace(/[^0-9]/g,"");if(!/^\d{16}$/.test(o))return{ok:!1,code:"bad_token"};let n=await pr("token_sync_pull_by_token",{p_token:o,p_password:r?String(r):null});return n.ok?Ll(e,n.data.vault_id||null,n.data):n}async function oN(e){if(!e)return{ok:!1,code:"no_upload"};let t=await pr("token_sync_delete",{p_vault_id:e});return t.ok?(GT(e),{ok:!0}):t}Il.exports={getSyncConfig:St,setSyncConfig:BT,isAllowedSyncUrl:Tl,serializeVault:hl,applySnapshot:Ol,collectModuleSubtreeIds:KT,importModuleSnapshot:QT,syncGoogleLogin:VT,syncGoogleLogout:qT,syncAuthStatus:Rl,syncStatus:ZT,syncPushVault:eN,syncPullVault:tN,syncPullByToken:rN,syncDeleteUpload:oN}});var wl=X((CO,Al)=>{"use strict";A();var nN=["sync_vault","sync_account","dracondex_meta"],aN=["token_sync_push","token_sync_status","token_sync_delete","token_sync_pull_own","token_sync_pull_by_token"],iN=`-- =============================================================================
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
`;Al.exports={SUPABASE_SCHEMA_VERSION:2,SUPABASE_REQUIRED_TABLES:nN,SUPABASE_REQUIRED_FUNCTIONS:aN,SUPABASE_SETUP_SQL:iN}});var Fl=X((kO,Dl)=>{"use strict";A();var{shell:sN}=(pe(),W(_e)),{getAppSetting:oa,setAppSetting:lt}=ke(),{getSecret:na,setSecret:yl}=cr(),{isAllowedSyncUrl:Cl}=fo(),{SUPABASE_SCHEMA_VERSION:go,SUPABASE_REQUIRED_TABLES:cN,SUPABASE_REQUIRED_FUNCTIONS:lN,SUPABASE_SETUP_SQL:bl}=wl(),aa="sync:url",_r="sync:anonKey",Ro="supabase:schemaVersion",ho="supabase:checkedAt",dN="https://api.supabase.com",EN=2e4,uN=6e4;function ia(e){try{let t=new URL(String(e)).hostname,r=/^([a-z0-9]{16,40})\.supabase\.(co|in|red)$/.exec(t);return r?r[1]:null}catch{return null}}function mr(){let e=(oa(aa)||"").replace(/\/+$/,""),t=na(_r)||"";return{url:e,keySet:!!t,keyPreview:t?`\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022${t.slice(-6)}`:"",projectRef:ia(e),configured:!!(e&&t),schemaVersion:Number(oa(Ro)||0),requiredVersion:go,checkedAt:oa(ho)||null}}function pN(e,t){let r=String(e||"").trim().replace(/\/+$/,""),o=String(t||"").trim()||na(_r)||"";return!r||!o?{ok:!1,code:"no_config"}:Cl(r)?(lt(aa,r),yl(_r,o),lt(Ro,"0"),lt(ho,""),{ok:!0,...mr()}):{ok:!1,code:"invalid_url"}}function _N(){return lt(aa,""),yl(_r,""),lt(Ro,"0"),lt(ho,""),{ok:!0}}function mN(){return{sql:bl,version:go}}async function To(e,t,r=EN){try{return{ok:!0,res:await fetch(e,{...t,signal:AbortSignal.timeout(r)})}}catch(o){return{ok:!1,code:"network",error:String(o?.message||o)}}}async function No(e){try{return await e.json()}catch{return null}}async function kl(e,t){let r=mr(),o=String(e||r.url||"").trim().replace(/\/+$/,""),n=String(t||"").trim()||(e?"":na(_r)||"");if(!o||!n)return{ok:!1,code:"no_config"};if(!Cl(o))return{ok:!1,code:"invalid_url"};let a=await To(`${o}/rest/v1/`,{headers:{apikey:n,Accept:"application/openapi+json"}});if(!a.ok)return{...a,url:o};if(a.res.status===401||a.res.status===403)return{ok:!1,code:"bad_key",url:o};if(!a.res.ok)return{ok:!1,code:"unreachable",status:a.res.status,url:o};let s=await No(a.res),i=new Set(Object.keys(s?.paths||{}).filter(C=>C.startsWith("/rpc/")).map(C=>C.slice(5))),u=null,E=await To(`${o}/rest/v1/rpc/dracondex_schema_status`,{method:"POST",headers:{apikey:n,Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:"{}"});if(!E.ok)return{...E,url:o};E.res.ok&&(u=await No(E.res));let g=u?.tables||{},m=u?.functions||{},h=[...cN.map(C=>({id:C,kind:"table",ok:g[C]===!0})),...lN.map(C=>({id:C,kind:"function",ok:m[C]===!0||i.has(C)})),{id:"dracondex_schema_status",kind:"function",ok:!!u}],O=Number(u?.schema_version||0),N=h.filter(C=>!C.ok).length,R=N===0&&O>=go,S=null,_=await To(`${o}/auth/v1/settings`,{headers:{apikey:n}});if(_.ok&&_.res.ok){let C=await No(_.res);C&&C.external&&typeof C.external.google=="boolean"&&(S=C.external.google)}return(!e||o===r.url)&&(lt(Ro,String(O)),lt(ho,new Date().toISOString())),{ok:!0,url:o,projectRef:ia(o),ready:R,missing:N,items:h,installedVersion:O,requiredVersion:go,googleProvider:S}}async function fN(e,t,r){let o=mr(),n=String(t||o.url||"").trim().replace(/\/+$/,"");if(!n)return{ok:!1,code:"no_config"};let a=String(e||"").trim();if(!a)return{ok:!1,code:"needs_manual"};let s=ia(n);if(!s)return{ok:!1,code:"no_project_ref"};let i=await To(`${dN}/v1/projects/${s}/database/query`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({query:bl})},uN);if(!i.ok)return i;if(i.res.status===401)return{ok:!1,code:"bad_access_token"};if(i.res.status===403)return{ok:!1,code:"forbidden"};if(i.res.status===404)return{ok:!1,code:"no_project_ref"};if(i.res.status===429)return{ok:!1,code:"rate_limited"};if(!i.res.ok){let E=await No(i.res);return{ok:!1,code:"sql_error",error:String(E?.message||E?.error||`HTTP ${i.res.status}`)}}let u=await kl(t,r);return u.ok?{...u,installed:!0}:u}var TN={sql:e=>`https://supabase.com/dashboard/project/${e}/sql/new`,auth:e=>`https://supabase.com/dashboard/project/${e}/auth/providers`,api:e=>`https://supabase.com/dashboard/project/${e}/settings/api`,tokens:()=>"https://supabase.com/dashboard/account/tokens"};async function NN(e){let t=TN[String(e)];if(!t)return{ok:!1,code:"bad_page"};let r=mr().projectRef;return!r&&e!=="tokens"?{ok:!1,code:"no_project_ref"}:(await sN.openExternal(t(r)),{ok:!0})}Dl.exports={getSupabaseSetup:mr,setSupabaseSetup:pN,clearSupabaseSetup:_N,getSupabaseSetupSql:mN,checkSupabaseProject:kl,installSupabaseSchema:fN,openSupabaseDashboard:NN}});var Wl=X((FO,Pl)=>{"use strict";A();var gN=(Eo(),W(lo)),RN=(Tt(),W(ft)),jl=(Oe(),W(Ce)),xl=(Te(),W(Me)),{app:hN}=(pe(),W(_e)),Ml=1,Ul=10*1024*1024*1024,Re=null,So=null,fr=null,Tr=null;function SN(){So=xl.join(xl.dirname(hN.getPath("userData")),"dev-drive-server.json");try{Re=JSON.parse(jl.readFileSync(So,"utf8"))}catch{Re=null}(!Re||typeof Re!="object"||Re.schema!==Ml)&&(Re={schema:Ml,files:{}}),Re.files=Re.files||{}}function vl(){try{jl.writeFileSync(So,JSON.stringify(Re))}catch(e){console.error("dev-drive-server: persist failed:",e)}}function ON(e){return Object.values(Re.files).find(t=>t.name===e)||null}function LN(){let e=Number(U.env.DDX_DEV_DRIVE_QUOTA_PCT);return Number.isFinite(e)&&e>=0?e:5}function IN(e,t){let r=M.from(`--${t}`),o=[],n=e.indexOf(r);for(;n!==-1;){let u=e.indexOf(r,n+r.length);if(u===-1)break;o.push(e.slice(n+r.length,u)),n=u}let a=u=>{let E=u.indexOf(`\r
\r
`);if(E===-1)return{headers:"",content:M.alloc(0)};let g=u.slice(0,E).toString("utf8"),m=u.slice(E+4);return m.slice(-2).toString("utf8")===`\r
`&&(m=m.slice(0,-2)),{headers:g,content:m}},[s,i]=o.map(a);return{metadata:JSON.parse((s?.content||M.alloc(0)).toString("utf8")||"{}"),media:i?.content||M.alloc(0)}}function AN(e,t){let r=(s,i)=>{t.writeHead(s,{"Content-Type":"application/json"}),t.end(JSON.stringify(i))},o=(s,i)=>{t.writeHead(s,{"Content-Type":"application/octet-stream"}),t.end(i)},n=new URL(e.url,"http://127.0.0.1"),a=[];e.on("data",s=>a.push(s)),e.on("end",()=>{let s=M.concat(a);if(e.method==="GET"&&n.pathname==="/drive/v3/about"){let E=LN();return r(200,{storageQuota:{usage:String(Math.floor(Ul*(E/100))),limit:String(Ul)}})}if(e.method==="GET"&&n.pathname==="/drive/v3/files"){let E=n.searchParams.get("q")||"",g=/name='([^']*)'/.exec(E),m=g?g[1]:null,h=m?[ON(m)].filter(Boolean):Object.values(Re.files);return r(200,{files:h.map(O=>({id:O.id,name:O.name,modifiedTime:O.modifiedTime,size:String(O.size)}))})}let i=/^\/drive\/v3\/files\/([^/]+)$/.exec(n.pathname);if(e.method==="GET"&&i&&n.searchParams.get("alt")==="media"){let E=Re.files[i[1]];return E?o(200,M.from(E.bytes,"base64")):r(404,{error:{message:"not_found"}})}if(e.method==="POST"&&n.pathname==="/upload/drive/v3/files"&&n.searchParams.get("uploadType")==="multipart"){let E=e.headers["content-type"]||"",g=/boundary=(\S+)/.exec(E);if(!g)return r(400,{error:{message:"bad_multipart"}});let{metadata:m,media:h}=IN(s,g[1]),O=RN.randomUUID(),N={id:O,name:m.name,bytes:h.toString("base64"),size:h.length,modifiedTime:new Date().toISOString()};return Re.files[O]=N,vl(),r(200,{id:N.id,name:N.name})}let u=/^\/upload\/drive\/v3\/files\/([^/]+)$/.exec(n.pathname);if(e.method==="PATCH"&&u&&n.searchParams.get("uploadType")==="media"){let E=Re.files[u[1]];return E?(E.bytes=s.toString("base64"),E.size=s.length,E.modifiedTime=new Date().toISOString(),vl(),r(200,{id:E.id,name:E.name})):r(404,{error:{message:"not_found"}})}r(404,{error:{message:"not found"}})})}function wN(){return fr?Promise.resolve(fr):Tr||(Tr=new Promise((e,t)=>{SN();let r=gN.createServer(AN);r.on("error",o=>{Tr=null,t(o)}),r.unref(),r.listen(0,"127.0.0.1",()=>{fr=`http://127.0.0.1:${r.address().port}`,console.log(`dev-drive-server: mock Drive appdata backend at ${fr} (state: ${So})`),e(fr)})}),Tr)}Pl.exports={ensureDevDriveServer:wN}});var Ea=X((MO,zl)=>{"use strict";A();var Xl=(Tt(),W(ft)),Oo=(Oe(),W(Ce)),Bl=(Br(),W(Xr)),Gl=(Te(),W(Me)),{app:yN}=(pe(),W(_e)),{getAppSetting:tt,setAppSetting:Et}=ke(),{getSecret:Nr,setSecret:Ot}=cr(),{getAppDB:CN}=Ze(),{currentNexusId:bN}=mt(),{exportDatabaseTo:kN,importDatabaseMerge:DN}=bn(),{makePkcePair:FN,makeState:xN,runOAuthLoopback:MN}=uo(),rt=!yN.isPackaged,sa=null;async function $l(){!rt||sa||(sa=await Wl().ensureDevDriveServer())}var gr=()=>rt?sa:"https://www.googleapis.com";function Ao(){let e=Nr("drive:clientId")||"",t=Nr("drive:clientSecret")||"";return{clientId:e,clientSecret:t,configured:rt||!!(e&&t),dev:rt}}function UN(e,t){return Ot("drive:clientId",String(e||"").trim()),Ot("drive:clientSecret",String(t||"").trim()),{ok:!0}}var dt="drive:refreshToken",Lo="drive:email",vN="https://www.googleapis.com/auth/drive.appdata email",fe=null;async function jN(){if(rt){await $l();let m="dev-drive@local.test";return Ot(dt,"dev-drive-token"),Et(Lo,m),fe={accessToken:"dev-drive-token",exp:1/0},{ok:!0,email:m}}let{clientId:e,clientSecret:t,configured:r}=Ao();if(!r)return{ok:!1,code:"no_config"};let{verifier:o,challenge:n}=FN(),a=xN(),s,i;try{({code:s,redirectUri:i}=await MN(m=>`https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(e)}&redirect_uri=${encodeURIComponent(m)}&response_type=code&scope=${encodeURIComponent(vN)}&access_type=offline&prompt=consent&code_challenge=${n}&code_challenge_method=S256&state=${encodeURIComponent(a)}`,{state:a}))}catch(m){return{ok:!1,code:m.message==="login_timeout"?"login_timeout":"auth",error:String(m?.message||m)}}let u;try{u=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",code:s,client_id:e,client_secret:t,redirect_uri:i,code_verifier:o}),signal:AbortSignal.timeout(15e3)})}catch(m){return{ok:!1,code:"network",error:String(m?.message||m)}}if(!u.ok){let m=await u.json().catch(()=>({}));return{ok:!1,code:"auth",error:m.error_description||m.error||`HTTP ${u.status}`}}let E=await u.json();if(!E.refresh_token)return{ok:!1,code:"no_refresh_token"};fe={accessToken:E.access_token,exp:Date.now()+(E.expires_in||3600)*1e3},Ot(dt,E.refresh_token);let g="";try{let m=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${E.access_token}`},signal:AbortSignal.timeout(1e4)});m.ok&&(g=(await m.json()).email||"")}catch{}return Et(Lo,g),{ok:!0,email:g}}async function PN(){if(!rt){let e=Nr(dt);if(e)try{await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(e)}`,{method:"POST",signal:AbortSignal.timeout(1e4)})}catch{}}return Ot(dt,""),Et(Lo,""),fe=null,{ok:!0}}async function wo(){if(await $l(),rt)return fe?fe.accessToken:null;if(fe&&fe.exp>Date.now()+5e3)return fe.accessToken;let e=Nr(dt);if(!e)return fe=null,null;let{clientId:t,clientSecret:r}=Ao();if(!t||!r)return null;let o;try{o=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:e,client_id:t,client_secret:r}),signal:AbortSignal.timeout(15e3)})}catch{return fe?fe.accessToken:null}if(!o.ok)return(o.status===400||o.status===401)&&(Ot(dt,""),fe=null),null;let n=await o.json();return fe={accessToken:n.access_token,exp:Date.now()+(n.expires_in||3600)*1e3},n.refresh_token&&Ot(dt,n.refresh_token),fe.accessToken}var Yl="dracondex-layout-profile.json",ca="dracondex-backup.ddx",Vl="dracondex-layout-slots.json",Rr=e=>e.status===401||e.status===403?"auth":"server";async function ql(e){let t=await wo();if(!t)return{ok:!1,code:"not_connected"};let r;try{r=await fetch(`${gr()}/drive/v3/files?spaces=appDataFolder&q=${encodeURIComponent(`name='${e}'`)}&fields=files(id,name,modifiedTime,size)`,{headers:{Authorization:`Bearer ${t}`},signal:AbortSignal.timeout(2e4)})}catch(n){return{ok:!1,code:"network",error:String(n?.message||n)}}return r.ok?{ok:!0,file:((await r.json()).files||[])[0]||null}:{ok:!1,code:Rr(r),error:`HTTP ${r.status}`}}function WN(e,t,r){let o=Xl.randomBytes(16).toString("hex"),n=M.from(`--${o}\r
Content-Type: application/json; charset=UTF-8\r
\r
${JSON.stringify(e)}\r
--${o}\r
Content-Type: ${r}\r
\r
`),a=M.from(`\r
--${o}--`);return{boundary:o,body:M.concat([n,t,a])}}async function la(e,t,r){let o=await wo();if(!o)return{ok:!1,code:"not_connected"};let n=await ql(e);if(!n.ok)return n;if(n.file){let E;try{E=await fetch(`${gr()}/upload/drive/v3/files/${n.file.id}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${o}`,"Content-Type":r},body:t,signal:AbortSignal.timeout(6e4)})}catch(m){return{ok:!1,code:"network",error:String(m?.message||m)}}return E.ok?{ok:!0,fileId:(await E.json()).id}:{ok:!1,code:Rr(E),error:`HTTP ${E.status}`}}let{boundary:a,body:s}=WN({name:e,parents:["appDataFolder"]},t,r),i;try{i=await fetch(`${gr()}/upload/drive/v3/files?uploadType=multipart`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":`multipart/related; boundary=${a}`},body:s,signal:AbortSignal.timeout(6e4)})}catch(E){return{ok:!1,code:"network",error:String(E?.message||E)}}return i.ok?{ok:!0,fileId:(await i.json()).id}:{ok:!1,code:Rr(i),error:`HTTP ${i.status}`}}async function Io(e){let t=await ql(e);if(!t.ok)return t;if(!t.file)return{ok:!1,code:"not_found"};let r=await wo();if(!r)return{ok:!1,code:"not_connected"};let o;try{o=await fetch(`${gr()}/drive/v3/files/${t.file.id}?alt=media`,{headers:{Authorization:`Bearer ${r}`},signal:AbortSignal.timeout(6e4)})}catch(n){return{ok:!1,code:"network",error:String(n?.message||n)}}return o.ok?{ok:!0,buffer:M.from(await o.arrayBuffer())}:{ok:!1,code:Rr(o),error:`HTTP ${o.status}`}}async function Jl(){let e=await wo();if(!e)return{ok:!1,code:"not_connected"};let t;try{t=await fetch(`${gr()}/drive/v3/about?fields=storageQuota`,{headers:{Authorization:`Bearer ${e}`},signal:AbortSignal.timeout(15e3)})}catch(u){return{ok:!1,code:"network",error:String(u?.message||u)}}if(!t.ok)return{ok:!1,code:Rr(t),error:`HTTP ${t.status}`};let r=await t.json(),o=Number(r.storageQuota?.usage||0),n=r.storageQuota?.limit,a=n!=null?Number(n):null,s=a?o/a:0,i=a==null?"ok":s>=1?"full":s>=.9?"near_full":"ok";return{ok:!0,usage:o,limit:a,state:i}}function Hl(e){let t=[];try{t=JSON.parse(tt("drive:backupLog")||"[]")}catch{t=[]}t.unshift(e),t.length>20&&(t.length=20),Et("drive:backupLog",JSON.stringify(t))}function HN(){try{return JSON.parse(tt("drive:backupLog")||"[]")}catch{return[]}}async function XN(){let{configured:e}=Ao(),t=rt?!!fe:!!Nr(dt),r={ok:!0,configured:e,dev:rt,connected:t,email:t&&tt(Lo)||"",autoBackup:tt("drive:autoBackup")==="1",backupLayout:tt("drive:backupLayout")==="1",backupDdx:tt("drive:backupDdx")==="1",lastBackupAt:tt("drive:lastBackupAt")||null,storage:null};if(!t)return r;let o=await Jl();return o.ok?r.storage={usage:o.usage,limit:o.limit,state:o.state}:r.storageError=o.code,r}function BN(e){return Et("drive:autoBackup",e?"1":"0"),{ok:!0}}function GN(e){return Et("drive:backupLayout",e?"1":"0"),{ok:!0}}function $N(e){return Et("drive:backupDdx",e?"1":"0"),{ok:!0}}async function YN(e){let t=tt("drive:backupLayout")==="1",r=tt("drive:backupDdx")==="1";if(!t&&!r)return{ok:!1,code:"nothing_enabled"};let o=i=>(Hl({at:new Date().toISOString(),ok:!1,code:i,layout:!1,ddx:!1}),{ok:!1,code:i}),n=await Jl();if(!n.ok)return o(n.code);if(n.state==="full")return o("drive_full");let a={layout:!1,ddx:!1};if(t&&e){let i=await la(Yl,M.from(String(e),"utf8"),"application/json");if(!i.ok)return o(i.code);a.layout=!0}if(r){let i=Gl.join(Bl.tmpdir(),`dracondex-drive-backup-${Date.now()}.ddx`);try{await kN(i);let u=Oo.readFileSync(i),E=await la(da(),u,"application/octet-stream");if(!E.ok)return o(E.code);a.ddx=!0}finally{try{Oo.rmSync(i,{force:!0})}catch{}}}let s=new Date().toISOString();return Et("drive:lastBackupAt",s),Hl({at:s,ok:!0,layout:a.layout,ddx:a.ddx}),{ok:!0,backedUpAt:s,...a}}function da(){let e=bN();if(!e)return ca;let t=CN().prepare("SELECT name FROM nexus_file WHERE id=?").get(e)?.name||`vault-${e}`;return`dracondex-backup-${String(t).replace(/[^A-Za-z0-9._-]+/g,"-").slice(0,60)||`vault-${e}`}-${e}.ddx`}async function VN(){let e=await Io(Yl);return e.ok?{ok:!0,json:e.buffer.toString("utf8")}:e}async function qN(){let e=await Io(da());if(!e.ok&&da()!==ca&&(e=await Io(ca)),!e.ok)return e;let t=Gl.join(Bl.tmpdir(),`dracondex-drive-restore-${Date.now()}.ddx`);try{return Oo.writeFileSync(t,e.buffer),{ok:!0,summary:DN(t)}}catch(r){return{ok:!1,code:"bad_backup",error:String(r?.message||r)}}finally{try{Oo.rmSync(t,{force:!0})}catch{}}}async function yo(){let e=await Io(Vl);if(!e.ok)return e.code==="not_found"?{ok:!0,data:{slots:[]}}:e;try{let t=JSON.parse(e.buffer.toString("utf8"));return{ok:!0,data:Array.isArray(t.slots)?t:{slots:[]}}}catch(t){return{ok:!1,code:"bad_backup",error:String(t?.message||t)}}}async function Kl(e){return la(Vl,M.from(JSON.stringify(e),"utf8"),"application/json")}async function JN(){let e=await yo();return e.ok?{ok:!0,slots:e.data.slots.map(t=>({id:t.id,name:t.name,updatedAt:t.updatedAt}))}:e}async function KN(e,t){let r=await yo();if(!r.ok)return r;let o=Xl.randomBytes(6).toString("hex");r.data.slots.push({id:o,name:String(e||"").slice(0,80)||"Layout",updatedAt:new Date().toISOString(),json:String(t||"{}")});let n=await Kl(r.data);return n.ok?{ok:!0,id:o}:n}async function zN(e){let t=await yo();if(!t.ok)return t;let r=t.data.slots.find(o=>o.id===e);return r?{ok:!0,json:r.json}:{ok:!1,code:"not_found"}}async function QN(e){let t=await yo();if(!t.ok)return t;let r=t.data.slots.length;if(t.data.slots=t.data.slots.filter(n=>n.id!==e),t.data.slots.length===r)return{ok:!1,code:"not_found"};let o=await Kl(t.data);return o.ok?{ok:!0}:o}zl.exports={getDriveConfig:Ao,setDriveConfig:UN,driveConnect:jN,driveDisconnect:PN,driveStatus:XN,driveSetAutoBackup:BN,driveSetBackupLayout:GN,driveSetBackupDdx:$N,driveBackupNow:YN,driveRestoreLayoutProfile:VN,driveRestoreDatabase:qN,driveGetBackupLog:HN,driveListLayoutSlots:JN,driveSaveLayoutSlot:KN,driveRestoreLayoutSlot:zN,driveDeleteLayoutSlot:QN}});var ad=X((vO,nd)=>{"use strict";A();var{app:Co,shell:ZN}=(pe(),W(_e)),{getAppSetting:Zl,setAppSetting:ed}=ke(),td="LDKTC/App-DraconDex",eg=`https://api.github.com/repos/${td}/releases?per_page=30`,tg="flutter-",hr=`https://github.com/${td}/releases`,rg=4e3,og=!Co.isPackaged,rd="update:seenVersion",od="update:autoCheck";function ng(){let e=U.env.DDX_DEV_UPDATE_VERSION||Co.getVersion();return{version:e,notes:`Dev mock update notes for v${e}`,url:`${hr}/tag/v${e}`}}var ag=/^\d+(\.\d+){0,3}$/;function ig(e){let t=String(e?.tag_name||"").replace(/^v/i,"").trim();if(!ag.test(t))return null;let r=String(e?.html_url||""),o=r.startsWith(`${hr}/`)?r:hr;return{version:t,notes:String(e?.body||"").slice(0,rg),url:o}}function sg(e){if(!Array.isArray(e))return null;for(let t of e){if(t?.draft||t?.prerelease||String(t?.tag_name||"").toLowerCase().startsWith(tg))continue;let o=ig(t);if(o)return o}return null}async function cg(){if(og)return ng();let e;try{e=await fetch(eg,{signal:AbortSignal.timeout(1e4),headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":`DraconDex/${Co.getVersion()}`}})}catch{return null}if(!e.ok)return null;let t;try{t=await e.json()}catch{return null}return sg(t)}var lg=e=>String(e||"").split("-")[0],Ql=e=>lg(e).split(".").map(t=>parseInt(t,10)||0);function dg(e,t){let r=Ql(e),o=Ql(t);for(let n=0;n<Math.max(r.length,o.length);n++){let a=(r[n]||0)-(o[n]||0);if(a)return a>0}return!1}async function Eg(){let e=Co.getVersion(),t=await cg();return!t||!dg(t.version,e)?{ok:!0,available:!1,current:e}:{ok:!0,available:!0,dismissed:(Zl(rd)||"")===t.version,version:t.version,notes:t.notes,url:t.url,current:e}}function ug(e){return ed(rd,String(e||"")),{ok:!0}}function pg(){return Zl(od)!=="0"}function _g(e){return ed(od,e?"1":"0"),{ok:!0}}function mg(e){let t=String(e||"");return(t===hr||t.startsWith(`${hr}/`))&&ZN.openExternal(t),{ok:!0}}nd.exports={checkForUpdate:Eg,dismissUpdate:ug,openUpdateDownload:mg,getAutoCheck:pg,setAutoCheck:_g}});var Td=X((PO,fd)=>{"use strict";A();var sd=/^[a-z0-9_]{1,20}$/,cd=/^[a-z0-9_]{1,20}$/,ld=/^[a-z][a-z0-9_]{0,29}$/,fg=/^plg_[a-z0-9_]{1,41}$/,Tg=/^ext_[a-z0-9_]{1,41}$/,ua=/^[A-Za-z0-9._-]{1,100}$/,dd=new Set(["TEXT","INTEGER","REAL"]),Ed=new Set(["id","rowid","oid","_rowid_"]),pa=10,_a=25,ma=30,Ng=2*1024*1024,gg=5,ga=/^[a-z0-9_-]{1,24}$/,fa=5,Rg=40,hg=8,Ta=10,bo=new Set(["module"]),Sg=bo.size,Na=5,Og=["dracondex-plugin.json","dracondex-extension.json"],Lg=["main","master"],Ig=new Set(["localhost","127.0.0.1","[::1]"]);function Ag(e){return Ig.has(e.hostname)&&e.port!==""}function ud(e){return e.protocol==="https:"?!0:e.protocol==="http:"&&Ag(e)}function pd(e){if(typeof e!="string"||!e)return null;let t;try{t=new URL(e)}catch{return null}return!ud(t)||t.username||t.password||t.search||t.hash||t.pathname!=="/"&&t.pathname!==""?null:t.origin}function wg(e,t){if(e==null)return{ok:!0};if(!Array.isArray(e)||e.length>fa)return{ok:!1,error:`"panels" must be an array of at most ${fa} entries`};let r=new Set;for(let o of e){if(!o||typeof o!="object")return{ok:!1,error:"invalid panel entry"};if(!ga.test(String(o.id||"")))return{ok:!1,error:`invalid panel id: ${o?.id}`};if(r.has(o.id))return{ok:!1,error:`duplicate panel id: ${o.id}`};if(r.add(o.id),!o.title||typeof o.title!="string"||o.title.length>Rg)return{ok:!1,error:`invalid panel title for "${o.id}"`};if(o.icon!=null&&(typeof o.icon!="string"||o.icon.length>hg))return{ok:!1,error:`invalid panel icon for "${o.id}"`};if(!o.entry||typeof o.entry!="string"||!/\.html?$/i.test(o.entry))return{ok:!1,error:`panel "${o.id}" needs an HTML "entry"`};if(!t.includes(o.entry))return{ok:!1,error:`panel "${o.id}" entry must be listed in "files"`}}return{ok:!0}}function yg(e){if(e==null)return{ok:!0};if(typeof e!="object"||Array.isArray(e))return{ok:!1,error:'"permissions" must be an object'};let{net:t,context:r}=e;if(t!=null){if(!Array.isArray(t)||t.length>Ta)return{ok:!1,error:`"permissions.net" must be an array of at most ${Ta} origins`};for(let o of t)if(!pd(o))return{ok:!1,error:`invalid net origin (https:// origin, or http:// on loopback with an explicit port): ${o}`}}if(r!=null){if(!Array.isArray(r)||r.length>Sg)return{ok:!1,error:'"permissions.context" must be an array'};for(let o of r)if(!bo.has(o))return{ok:!1,error:`unknown context permission: ${o}`}}return{ok:!0}}function Cg(e){if(e==null)return{ok:!0};if(!Array.isArray(e)||e.length>Na)return{ok:!1,error:`"dependencies" must be an array of at most ${Na} entries`};let t=new Set;for(let r of e){if(typeof r!="string"||!r.trim())return{ok:!1,error:`invalid dependency: ${r}`};let o=md(r);if(!o.ok)return{ok:!1,error:`invalid dependency url: ${r}`};let n=`${o.host}/${o.owner}/${o.repo}`.toLowerCase();if(t.has(n))return{ok:!1,error:`duplicate dependency: ${r}`};t.add(n)}return{ok:!0}}function bg(e){if(!e||typeof e!="object")return{ok:!1,error:"manifest is not an object"};let{id:t,name:r,version:o,entry:n,files:a,tables:s,panels:i,permissions:u,dependencies:E}=e;if(!sd.test(String(t||"")))return{ok:!1,error:'invalid or missing "id"'};if(!r||typeof r!="string"||r.length>80)return{ok:!1,error:'invalid or missing "name"'};if(o!=null&&(typeof o!="string"||o.length>40))return{ok:!1,error:'invalid "version"'};if(!n||typeof n!="string")return{ok:!1,error:'invalid or missing "entry"'};if(!Array.isArray(a)||a.length===0||a.length>ma)return{ok:!1,error:`"files" must be a non-empty array of at most ${ma} entries`};for(let R of a)if(typeof R!="string"||!R||R.includes("..")||R.startsWith("/")||R.includes("\\"))return{ok:!1,error:`unsafe file path: ${R}`};if(!a.includes(n))return{ok:!1,error:'"entry" must be listed in "files"'};let g=Array.isArray(s)?s:[];if(g.length>pa)return{ok:!1,error:`too many tables (max ${pa})`};let m=new Set;for(let R of g){if(!R||!cd.test(String(R.name||"")))return{ok:!1,error:`invalid table name: ${R?.name}`};if(m.has(R.name))return{ok:!1,error:`duplicate table name: ${R.name}`};m.add(R.name);let S=Array.isArray(R.columns)?R.columns:[];if(S.length===0||S.length>_a)return{ok:!1,error:`table "${R.name}" must have 1-${_a} columns`};let _=new Set;for(let C of S){let D=String(C?.name||"");if(!C||!ld.test(D))return{ok:!1,error:`invalid column name in table "${R.name}": ${C?.name}`};if(Ed.has(D.toLowerCase()))return{ok:!1,error:`reserved column name: ${C.name}`};if(!dd.has(String(C.type||"").toUpperCase()))return{ok:!1,error:`invalid column type for "${C.name}": ${C.type}`};if(_.has(D))return{ok:!1,error:`duplicate column name: ${C.name}`};_.add(D)}}let h=wg(i,a);if(!h.ok)return h;let O=yg(u);if(!O.ok)return O;let N=Cg(E);return N.ok?{ok:!0}:N}function kg(e){return Array.isArray(e?.panels)?e.panels.filter(t=>t&&ga.test(String(t.id||""))&&typeof t.entry=="string").map(t=>({id:t.id,title:String(t.title||t.id),icon:typeof t.icon=="string"?t.icon:null,entry:t.entry})):[]}function _d(e){let t=e?.permissions?.net;return Array.isArray(t)?t.map(pd).filter(Boolean):[]}function Dg(e){let t=e?.permissions?.context;return Array.isArray(t)?t.filter(r=>bo.has(r)):[]}function Fg(e){return Array.isArray(e?.dependencies)?e.dependencies.filter(t=>typeof t=="string"&&t.trim()):[]}function xg(e,t){let r;try{r=new URL(String(t||""))}catch{return!1}return ud(r)?_d(e).includes(r.origin):!1}var id={"github.com":"github","www.github.com":"github","gitlab.com":"gitlab","www.gitlab.com":"gitlab"};function Mg(e){let t=e,r=t.match(/^(?:ssh:\/\/)?[A-Za-z0-9._-]+@([A-Za-z0-9.-]+):(?!\/\/)(.+)$/);return r?`${r[1]}/${r[2]}`:(t=t.replace(/^[a-z][a-z0-9+.-]*:\/\//i,""),t=t.replace(/^[A-Za-z0-9._-]+@/,""),t)}function md(e){let t=String(e??"").trim();if(!t)return{ok:!1,code:"bad_url"};if(/\s/.test(t))return{ok:!1,code:"bad_url"};if(t=Mg(t),t=t.split("#")[0].split("?")[0],t=t.replace(/\/+$/,""),!t)return{ok:!1,code:"bad_url"};let r=t.split("/").filter(Boolean);if(!r.length)return{ok:!1,code:"bad_url"};let o=null,n=r[0].toLowerCase();if(id[n])o=id[n],r=r.slice(1);else{if(n.includes("."))return{ok:!1,code:"unsupported_host"};o="github"}if(r.length<2)return{ok:!1,code:"bad_url"};let a=null,s=r.indexOf("-"),i;if(o==="gitlab"&&s>0){i=r.slice(0,s);let g=r.slice(s+1);g.length>=2&&(g[0]==="tree"||g[0]==="blob"||g[0]==="raw")&&(a=g.slice(1).join("/"))}else{let g=r.findIndex((m,h)=>h>=2&&(m==="tree"||m==="blob"||m==="raw"));if(g>0){i=r.slice(0,g);let m=r.slice(g+1);if(!m.length)return{ok:!1,code:"bad_url"};a=r[g]==="tree"?m.join("/"):m[0]}else i=r}if(i.length<2)return{ok:!1,code:"bad_url"};if(i=i.slice(),i[i.length-1]=i[i.length-1].replace(/\.git$/i,""),o==="github"&&i.length!==2)return{ok:!1,code:"bad_url"};if(o==="gitlab"&&i.length>gg+1)return{ok:!1,code:"bad_url"};for(let g of i)if(!ua.test(g)||g==="."||g==="..")return{ok:!1,code:"bad_url"};if(a!=null){let g=a.split("/").filter(Boolean);if(!g.length||g.length>8)return{ok:!1,code:"bad_url"};for(let m of g)if(!ua.test(m)||m==="."||m==="..")return{ok:!1,code:"bad_url"};a=g.join("/")}let u=i[i.length-1],E=i.slice(0,-1).join("/");return!E||!u?{ok:!1,code:"bad_url"}:{ok:!0,host:o,owner:E,repo:u,ref:a}}var Ht=e=>String(e).split("/").map(encodeURIComponent).join("/");function Ug(e,t){let{host:r,owner:o,repo:n,ref:a}=e;return r==="gitlab"?`https://gitlab.com/${Ht(o)}/${encodeURIComponent(n)}/-/raw/${Ht(a)}/${Ht(t)}`:`https://raw.githubusercontent.com/${Ht(o)}/${encodeURIComponent(n)}/${Ht(a)}/${Ht(t)}`}fd.exports={PLUGIN_ID_RE:sd,PLUGIN_TABLE_RE:cd,PLUGIN_COLUMN_RE:ld,FULL_TABLE_RE:fg,LEGACY_TABLE_RE:Tg,REPO_SEG_RE:ua,COL_TYPES:dd,RESERVED_COLS:Ed,MAX_TABLES_PER_PLUGIN:pa,MAX_COLS_PER_TABLE:_a,MAX_FILES:ma,MAX_FILE_BYTES:Ng,MANIFEST_NAMES:Og,REF_CANDIDATES:Lg,PANEL_ID_RE:ga,MAX_PANELS:fa,MAX_NET_ORIGINS:Ta,CONTEXT_KINDS:bo,MAX_DEPENDENCIES:Na,validateManifest:bg,parseRepoUrl:md,rawUrl:Ug,manifestPanels:kg,manifestNetOrigins:_d,manifestContextKinds:Dg,manifestDependencies:Fg,netOriginAllowed:xg}});var Dd=X((HO,kd)=>{"use strict";A();var Lt=(Oe(),W(Ce)),Pe=(Te(),W(Me)),{app:vg}=(pe(),W(_e)),{getAppDB:Ee}=re(),{PLUGIN_TABLE_RE:jg,FULL_TABLE_RE:gd,MAX_FILE_BYTES:Nd,MANIFEST_NAMES:Pg,REF_CANDIDATES:Wg,validateManifest:Sr,parseRepoUrl:Rd,rawUrl:hd,manifestPanels:Ra,manifestNetOrigins:Sd,manifestContextKinds:Od,manifestDependencies:ha,netOriginAllowed:Hg}=Td(),Ld=()=>Pe.dirname(vg.getPath("userData")),ko=()=>Pe.join(Ld(),"plugins"),Sa=e=>Pe.join(ko(),e);function Xg(){try{let e=Pe.join(Ld(),"extensions");Lt.existsSync(e)&&!Lt.existsSync(ko())&&Lt.renameSync(e,ko())}catch(e){console.error("plugin dir migration error:",e)}}async function Bg(e){let t;try{t=await fetch(e,{signal:AbortSignal.timeout(15e3)})}catch(r){return{ok:!1,code:"network",error:String(r?.message||r)}}return t.ok?{ok:!0,text:await t.text()}:{ok:!1,code:"not_found",error:`HTTP ${t.status}`}}async function Gg(e){let t;try{t=await fetch(e,{signal:AbortSignal.timeout(3e4)})}catch(o){return{ok:!1,code:"network",error:String(o?.message||o)}}if(!t.ok)return{ok:!1,code:"not_found",error:`HTTP ${t.status}`};let r=M.from(await t.arrayBuffer());return r.length>Nd?{ok:!1,code:"too_large",error:`exceeds ${Nd} bytes`}:{ok:!0,buffer:r}}async function $g(e){try{return(await fetch(`https://api.github.com/repos/LDKTC/${encodeURIComponent(e)}/contents/.dracondex`,{headers:{"User-Agent":"DraconDex",Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(15e3)})).ok}catch{return!1}}async function Yg(){let e;try{e=await fetch("https://api.github.com/users/LDKTC/repos?per_page=100&sort=updated",{headers:{"User-Agent":"DraconDex",Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(15e3)})}catch{return{ok:!1}}if(!e.ok)return{ok:!1};let t;try{t=await e.json()}catch{return{ok:!1}}if(!Array.isArray(t))return{ok:!1};let r=t.filter(n=>!n.is_template&&!n.archived&&String(n.name).toLowerCase()!=="dracondex-plugin-template"),o=await Promise.all(r.map(n=>$g(n.name)));return{ok:!0,repos:r.filter((n,a)=>o[a]).map(n=>({name:n.name,description:n.description||"",url:n.clone_url,stars:n.stargazers_count||0}))}}async function Do(e){let t=Rd(e);if(!t.ok)return{ok:!1,code:t.code};let r=t.ref?[t.ref]:Wg,o=null;for(let n of r){let a={host:t.host,owner:t.owner,repo:t.repo,ref:n};for(let s of Pg){let i=await Bg(hd(a,s));if(i.ok){let u;try{u=JSON.parse(i.text)}catch{return{ok:!1,code:"bad_manifest",error:"manifest is not valid JSON"}}return{ok:!0,...a,manifestName:s,manifest:u}}i.code==="network"&&(o=i.error)}}return o?{ok:!1,code:"network",error:o}:{ok:!1,code:"no_manifest"}}async function Vg(e,t){let r=await Do(e);if(!r.ok)return{url:e,ok:!1,code:r.code};if(!Sr(r.manifest).ok)return{url:e,ok:!1,code:"bad_manifest"};if(r.manifest.id===t)return{url:e,ok:!1,code:"self_dependency"};let n=Ee().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(r.manifest.id);return{url:e,ok:!0,id:r.manifest.id,name:r.manifest.name,version:r.manifest.version||null,alreadyInstalled:!!n}}async function qg(e){let t=await Do(e);if(!t.ok)return t;let r=Sr(t.manifest);if(!r.ok)return{ok:!1,code:"bad_manifest",error:r.error};let o=Ee().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(t.manifest.id),n=[];for(let a of ha(t.manifest))n.push(await Vg(a,t.manifest.id));return{ok:!0,url:String(e||"").trim(),host:t.host,owner:t.owner,repo:t.repo,ref:t.ref,manifestName:t.manifestName,alreadyInstalled:!!o,manifest:{id:t.manifest.id,name:t.manifest.name,version:t.manifest.version||null,entry:t.manifest.entry,files:t.manifest.files,tables:(t.manifest.tables||[]).map(a=>({name:a.name,columns:a.columns})),panels:Ra(t.manifest),netOrigins:Sd(t.manifest),contextKinds:Od(t.manifest),dependencies:n}}}async function Id(e,t,r,o,n,a=[]){let s=Ee(),i={};for(let E of n.files){let g=await Gg(hd({host:e,owner:t,repo:r,ref:o},E));if(!g.ok)return{ok:!1,code:g.code==="not_found"?"missing_file":g.code,error:`${E}: ${g.error}`};i[E]=g.buffer}let u=Sa(n.id);try{for(let[E,g]of Object.entries(i)){let m=Pe.join(u,E);Lt.mkdirSync(Pe.dirname(m),{recursive:!0}),Lt.writeFileSync(m,g)}s.transaction(()=>{let g=s.prepare(`
        INSERT INTO plugin (plugin_key, name, version, repo_host, repo_owner, repo_name, repo_ref, entry_html, manifest_json)
        VALUES (?,?,?,?,?,?,?,?,?)
      `).run(n.id,n.name,n.version||null,e,t,r,o,n.entry,JSON.stringify(n)).lastInsertRowid;for(let m of n.tables||[]){let h=`plg_${n.id}_${m.name}`;if(!gd.test(h))throw new Error(`invalid composed table name: ${h}`);let O=m.columns.map(N=>`${N.name} ${String(N.type).toUpperCase()}`).join(", ");s.prepare(`CREATE TABLE IF NOT EXISTS ${h} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${O})`).run(),s.prepare(`
          INSERT INTO plugin_table (plugin_ref, local_name, table_name, columns_json)
          VALUES (?,?,?,?)
        `).run(g,m.name,h,JSON.stringify(m.columns))}for(let m of a)s.prepare(`
          INSERT INTO plugin_dependency (plugin_ref, dep_url, dep_key, dep_name, fail_code)
          VALUES (?,?,?,?,?)
        `).run(g,m.url,m.key||null,m.name||null,m.failCode||null)})()}catch(E){try{Lt.rmSync(u,{recursive:!0,force:!0})}catch{}return{ok:!1,code:"install_failed",error:String(E?.message||E)}}return{ok:!0,pluginKey:n.id}}async function Ad(e,t){let r=await Do(e);if(!r.ok)return{url:e,key:null,name:null,failCode:r.code};if(!Sr(r.manifest).ok)return{url:e,key:null,name:null,failCode:"bad_manifest"};if(r.manifest.id===t)return{url:e,key:null,name:null,failCode:"self_dependency"};let n=r.manifest.id,a=r.manifest.name;if(Ee().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(n))return{url:e,key:n,name:a,failCode:null};let s=ha(r.manifest).map(u=>({url:u,key:null,name:null,failCode:"unresolved"})),i=await Id(r.host,r.owner,r.repo,r.ref,r.manifest,s);return i.ok?{url:e,key:n,name:a,failCode:null}:{url:e,key:n,name:a,failCode:i.code||"install_failed"}}async function Jg(e){let t=await Do(e);if(!t.ok)return t;let{host:r,owner:o,repo:n,ref:a,manifest:s}=t,i=Sr(s);if(!i.ok)return{ok:!1,code:"bad_manifest",error:i.error};if(Ee().prepare("SELECT id FROM plugin WHERE plugin_key=?").get(s.id))return{ok:!1,code:"already_installed"};let E=[];for(let g of ha(s))E.push(await Ad(g,s.id));return Id(r,o,n,a,s,E)}function Kg(e){return Ee().prepare(`
    SELECT dep_url AS url, dep_key AS key, dep_name AS name, fail_code AS failCode
    FROM plugin_dependency
    WHERE plugin_ref=?
      AND (dep_key IS NULL OR dep_key NOT IN (SELECT plugin_key FROM plugin))
    ORDER BY id
  `).all(e)}async function zg(e,t){let r=Ee(),o=r.prepare("SELECT plugin_key FROM plugin WHERE id=?").get(e);if(!o)return{ok:!1,code:"not_found"};let n=r.prepare("SELECT id, dep_url FROM plugin_dependency WHERE plugin_ref=? AND dep_url=?").get(e,String(t||""));if(!n)return{ok:!1,code:"not_found"};let a=await Ad(n.dep_url,o.plugin_key);return r.prepare("UPDATE plugin_dependency SET dep_key=?, dep_name=?, fail_code=? WHERE id=?").run(a.key,a.name,a.failCode,n.id),a.failCode?{ok:!1,code:a.failCode}:{ok:!0,pluginKey:a.key}}function Qg(e){let t=Ee(),r=t.prepare("SELECT * FROM plugin WHERE id=?").get(e);if(!r)return{ok:!1,code:"not_found"};let o=t.prepare("SELECT table_name FROM plugin_table WHERE plugin_ref=?").all(e);t.transaction(()=>{for(let n of o)gd.test(n.table_name)&&t.prepare(`DROP TABLE IF EXISTS ${n.table_name}`).run();t.prepare("DELETE FROM plugin WHERE id=?").run(e)})();try{Lt.rmSync(Sa(r.plugin_key),{recursive:!0,force:!0})}catch{}return{ok:!0}}function Oa(e){try{return JSON.parse(e.manifest_json)}catch{return null}}function Zg(){let e=Ee(),t=e.prepare(`
    SELECT id, plugin_key, name, version, repo_host, repo_owner, repo_name, repo_ref, entry_html, installed_at, manifest_json
    FROM plugin ORDER BY installed_at DESC
  `).all(),r=e.prepare("SELECT plugin_ref, local_name, columns_json FROM plugin_table").all(),o=e.prepare("SELECT plugin_ref, dep_url, dep_key, dep_name, fail_code FROM plugin_dependency").all(),n=new Set(t.map(a=>a.plugin_key));return t.map(({manifest_json:a,...s})=>{let i=Oa({manifest_json:a});return{...s,missingDeps:o.filter(u=>u.plugin_ref===s.id&&(!u.dep_key||!n.has(u.dep_key))).map(u=>({url:u.dep_url,key:u.dep_key,name:u.dep_name,failCode:u.fail_code})),tables:r.filter(u=>u.plugin_ref===s.id).map(u=>({localName:u.local_name,columns:JSON.parse(u.columns_json)})),dir:Sa(s.plugin_key),panels:i?Ra(i):[],netOrigins:i?Sd(i):[],contextKinds:i?Od(i):[]}})}function eR(e){return Ee().prepare("SELECT * FROM plugin WHERE id=?").get(e)||null}function wd(e){let t;try{t=Pe.relative(ko(),Pe.resolve(e))}catch{return null}if(!t||t.startsWith("..")||Pe.isAbsolute(t))return null;let r=t.split(Pe.sep)[0];if(!r)return null;let o=Ee().prepare("SELECT * FROM plugin WHERE plugin_key=?").get(r)||null;return o?{row:o,relInPlugin:t.split(Pe.sep).slice(1).join("/")}:null}function tR(e){let t=wd(e);if(!t)return null;let r=Oa(t.row);return new Set(Ra(r||{}).map(n=>n.entry)).has(t.relInPlugin)?t.row:null}function rR(e){return wd(e)?.row||null}function Xt(e,t){let r=Ee().prepare("SELECT manifest_json FROM plugin WHERE id=?").get(e);if(!r)return!1;let o=Oa(r);return!!o&&Hg(o,t)}var oR=new Set(["GET","POST","PUT","PATCH","DELETE","HEAD"]),nR=12e4,yd=8*1024*1024,aR=new Set(["cookie","host","origin","referer","content-length"]);function Cd(e){let t=String(e?.method||"GET").toUpperCase();if(!oR.has(t))throw new Error(`method not allowed: ${t}`);let r={};for(let[n,a]of Object.entries(e?.headers||{}))typeof a=="string"&&(aR.has(String(n).toLowerCase())||(r[n]=a));let o=e?.body;if(o!=null&&typeof o!="string")throw new Error("body must be a string");return{method:t,headers:r,body:t==="GET"||t==="HEAD"?void 0:o}}async function bd(e){let t=e.body?.getReader();if(!t)return{text:await e.text(),truncated:!1};let r=new TextDecoder,o="",n=0;for(;;){let{done:a,value:s}=await t.read();if(a)break;if(n+=s.length,n>yd)return await t.cancel(),{text:o,truncated:!0};o+=r.decode(s,{stream:!0})}return{text:o+r.decode(),truncated:!1}}async function iR(e,t,r){if(!Xt(e,t))throw new Error("origin not allowed by this plugin's manifest");let o=Cd(r),n;try{n=await fetch(t,{...o,redirect:"follow",signal:AbortSignal.timeout(nR)})}catch(i){return{ok:!1,code:"network",error:String(i?.message||i)}}if(n.redirected&&!Xt(e,n.url))return{ok:!1,code:"redirect_blocked",error:"redirected to a disallowed origin"};let{text:a,truncated:s}=await bd(n);return{ok:!0,status:n.status,statusText:n.statusText,headers:Object.fromEntries(n.headers.entries()),body:a,truncated:s}}async function sR(e,t,r,{onChunk:o,onEnd:n}){if(!Xt(e,t))throw new Error("origin not allowed by this plugin's manifest");let a=Cd(r),s=new AbortController;return(async()=>{let i;try{i=await fetch(t,{...a,redirect:"follow",signal:s.signal})}catch(m){n({ok:!1,code:s.signal.aborted?"aborted":"network",error:String(m?.message||m)});return}if(i.redirected&&!Xt(e,i.url)){s.abort(),n({ok:!1,code:"redirect_blocked",error:"redirected to a disallowed origin"});return}if(!i.ok){let{text:m}=await bd(i);n({ok:!1,code:"http",status:i.status,error:m});return}let u=i.body?.getReader();if(!u){n({ok:!1,code:"network",error:"no response body"});return}let E=new TextDecoder,g=0;try{for(;;){let{done:h,value:O}=await u.read();if(h)break;if(g+=O.length,g>yd){await u.cancel(),n({ok:!1,code:"too_large",error:"stream exceeded size cap"});return}o(E.decode(O,{stream:!0}))}let m=E.decode();m&&o(m),n({ok:!0,status:i.status})}catch(m){n({ok:!1,code:s.signal.aborted?"aborted":"network",error:String(m?.message||m)})}})(),()=>s.abort()}async function cR(e,t){let r=String(t?.authorizeUrl||"");if(!Xt(e,r))throw new Error("authorize URL not allowed by this plugin's manifest");let o=String(t?.clientId||"");if(!o)throw new Error("clientId is required");let{makePkcePair:n,makeState:a,runOAuthLoopback:s}=uo(),{verifier:i,challenge:u}=n(),E=a(),{code:g,redirectUri:m}=await s(h=>{let O=new URL(r);O.searchParams.set("response_type","code"),O.searchParams.set("client_id",o),O.searchParams.set("redirect_uri",h),O.searchParams.set("code_challenge",u),O.searchParams.set("code_challenge_method","S256"),O.searchParams.set("state",E),t?.scope&&O.searchParams.set("scope",String(t.scope));for(let[N,R]of Object.entries(t?.extraParams||{}))typeof R=="string"&&O.searchParams.set(N,R);return O.toString()},{state:E});return{code:g,redirectUri:m,verifier:i,state:E}}function Or(e,t){if(!jg.test(String(t||"")))return null;let r=Ee().prepare(`
    SELECT table_name, columns_json FROM plugin_table WHERE plugin_ref=? AND local_name=?
  `).get(e,t);return r?{tableName:r.table_name,columns:JSON.parse(r.columns_json)}:null}function La(e,t){let r=new Set(t.map(o=>o.name));for(let o of Object.keys(e||{}))if(!r.has(o))throw new Error(`unknown column: ${o}`)}function lR(e,t){let r=Or(e,t);if(!r)throw new Error("not an owned table");return{columns:r.columns}}function dR(e,t,r){let o=Or(e,t);if(!o)throw new Error("not an owned table");let n=r&&typeof r=="object"?r:{};La(n,o.columns);let a=Object.keys(n),s=a.length?`WHERE ${a.map(i=>`${i}=?`).join(" AND ")}`:"";return Ee().prepare(`SELECT * FROM ${o.tableName} ${s} ORDER BY id DESC`).all(...a.map(i=>n[i]))}function ER(e,t,r){let o=Or(e,t);if(!o)throw new Error("not an owned table");let n=r&&typeof r=="object"?r:{};La(n,o.columns);let a=Object.keys(n);if(!a.length)return{id:Ee().prepare(`INSERT INTO ${o.tableName} DEFAULT VALUES`).run().lastInsertRowid};let s=a.join(", "),i=a.map(()=>"?").join(", ");return{id:Ee().prepare(`INSERT INTO ${o.tableName} (${s}) VALUES (${i})`).run(...a.map(E=>n[E])).lastInsertRowid}}function uR(e,t,r,o){let n=Or(e,t);if(!n)throw new Error("not an owned table");let a=o&&typeof o=="object"?o:{};La(a,n.columns);let s=Object.keys(a);if(!s.length)return{changes:0};let i=s.map(E=>`${E}=?`).join(", ");return{changes:Ee().prepare(`UPDATE ${n.tableName} SET ${i} WHERE id=?`).run(...s.map(E=>a[E]),r).changes}}function pR(e,t,r){let o=Or(e,t);if(!o)throw new Error("not an owned table");return{changes:Ee().prepare(`DELETE FROM ${o.tableName} WHERE id=?`).run(r).changes}}kd.exports={pluginList:Zg,pluginGetById:eR,pluginPreview:qg,pluginInstall:Jg,pluginUninstall:Qg,pluginListOrgRepos:Yg,pluginMissingDeps:Kg,pluginInstallDependency:zg,migratePluginDir:Xg,pluginByPanelPath:tR,pluginByOwnedPath:rR,pluginNetAllowed:Xt,pluginNetFetch:iR,pluginNetStream:sR,pluginOAuthAuthorize:cR,pluginApiGetSchema:lR,pluginApiQuery:dR,pluginApiInsert:ER,pluginApiUpdate:uR,pluginApiDelete:pR,validateManifest:Sr,parseRepoUrl:Rd}});var Md=X((GO,xd)=>{"use strict";A();var Fo=(Oe(),W(Ce)),{getNexuses:BO}=Mn(),{serializeVault:Fd,applySnapshot:_R,collectModuleSubtreeIds:mR,importModuleSnapshot:fR}=fo();function TR(e,t){let r=Fd(e);return r?(Fo.writeFileSync(t,JSON.stringify(r)),{ok:!0}):{ok:!1,code:"not_found"}}function NR(e,t){let r;try{r=JSON.parse(Fo.readFileSync(t,"utf8"))}catch(o){return{ok:!1,code:"bad_file",error:String(o?.message||o)}}return _R(e,r)}function gR(e,t,r){let o=mR(e,t);if(!o.length)return{ok:!1,code:"not_found"};let n=Fd(e,o);return n?(Fo.writeFileSync(r,JSON.stringify(n)),{ok:!0}):{ok:!1,code:"not_found"}}function RR(e,t,r){let o;try{o=JSON.parse(Fo.readFileSync(r,"utf8"))}catch(n){return{ok:!1,code:"bad_file",error:String(n?.message||n)}}return fR(e,t,o)}xd.exports={exportNexusFile:TR,importNexusFile:NR,exportModuleFile:gR,importModuleFile:RR}});var vd=X((YO,Ud)=>{"use strict";A();var{getDriveConfig:hR,setDriveConfig:SR,driveConnect:OR,driveDisconnect:LR,driveStatus:IR}=Ea();Ud.exports={id:"gdrive",labelKey:"cloudProviderGdrive",availability:"available",capabilities:{backup:!0,sync:!1},needsConfig:!0,getConfig:()=>hR(),setConfig:e=>SR(e?.clientId,e?.clientSecret),connect:()=>OR(),disconnect:()=>LR(),status:()=>IR()}});var Pd=X((qO,jd)=>{"use strict";A();var AR=[{id:"dropbox",labelKey:"cloudProviderDropbox",capabilities:{backup:!0,sync:!1},needsConfig:!0},{id:"onedrive",labelKey:"cloudProviderOnedrive",capabilities:{backup:!0,sync:!1},needsConfig:!0},{id:"webdav",labelKey:"cloudProviderWebdav",capabilities:{backup:!0,sync:!0},needsConfig:!0},{id:"s3",labelKey:"cloudProviderS3",capabilities:{backup:!0,sync:!0},needsConfig:!0}],Ia={ok:!1,code:"not_implemented"};function wR(e){return{...e,availability:"planned",getConfig:()=>({configured:!1}),setConfig:()=>Ia,connect:()=>Ia,disconnect:()=>Ia,status:()=>({ok:!0,configured:!1,connected:!1,planned:!0})}}jd.exports={PLANNED_SPECS:AR,plannedProvider:wR}});var $d=X((KO,Gd)=>{"use strict";A();var{getAppSetting:Aa,setAppSetting:xo}=ke(),yR=vd(),{PLANNED_SPECS:CR,plannedProvider:bR}=Pd(),wa="cloud:provider",Wd=[yR,...CR.map(bR)],kR=new Map(Wd.map(e=>[e.id,e]));function It(e){return kR.get(String(e||""))||null}var Hd=e=>`cloud:${e}:role`,Xd=e=>`cloud:${e}:enabled`;function Bd(e){return{enabled:Aa(Xd(e))==="1",role:Aa(Hd(e))||"backup"}}function DR(){return{ok:!0,active:Aa(wa)||null,providers:Wd.map(e=>({id:e.id,labelKey:e.labelKey,availability:e.availability,capabilities:e.capabilities,needsConfig:!!e.needsConfig,...Bd(e.id),configured:!!e.getConfig().configured}))}}function FR(e){if(e===null||e==="")return xo(wa,""),{ok:!0,active:null};let t=It(e);return t?t.availability!=="available"?{ok:!1,code:"not_implemented"}:(xo(wa,t.id),{ok:!0,active:t.id}):{ok:!1,code:"unknown_provider"}}function xR(e,t){let r=It(e);if(!r)return{ok:!1,code:"unknown_provider"};if(t&&"enabled"in t&&xo(Xd(e),t.enabled?"1":"0"),t&&"role"in t){let o=String(t.role);if(!["backup","sync","both"].includes(o))return{ok:!1,code:"bad_role"};if(o!=="backup"&&!r.capabilities.sync)return{ok:!1,code:"unsupported_role"};if(o!=="sync"&&!r.capabilities.backup)return{ok:!1,code:"unsupported_role"};xo(Hd(e),o)}return{ok:!0,...Bd(e)}}var MR=e=>{let t=It(e);return t?{ok:!0,config:t.getConfig()}:{ok:!1,code:"unknown_provider"}},UR=(e,t)=>{let r=It(e);return r?r.setConfig(t):{ok:!1,code:"unknown_provider"}},vR=e=>{let t=It(e);return t?t.connect():{ok:!1,code:"unknown_provider"}},jR=e=>{let t=It(e);return t?t.disconnect():{ok:!1,code:"unknown_provider"}},PR=e=>{let t=It(e);return t?t.status():{ok:!1,code:"unknown_provider"}};Gd.exports={cloudListProviders:DR,cloudSetActive:FR,cloudSetProviderPrefs:xR,cloudGetConfig:MR,cloudSetConfig:UR,cloudConnect:vR,cloudDisconnect:jR,cloudStatus:PR}});var Vd=X((QO,Yd)=>{"use strict";A();var WR=re(),HR=Mn(),XR=Ks(),BR=Le(),GR=ec(),$R=Un(),YR=jn(),VR=nc(),qR=ic(),JR=cc(),KR=gt(),zR=ct(),QR=Hn(),ZR=Dc(),eh=ir(),th=Gn(),rh=$n(),oh=vc(),nh=Pc(),ah=Hc(),ih=ke(),sh=Yc(),ch=fo(),lh=Fl(),dh=Ea(),Eh=ad(),uh=Dd(),ph=Md(),_h=$d();Yd.exports={...WR,...HR,...XR,...BR,...GR,...$R,...YR,...VR,...qR,...JR,...KR,...zR,...QR,...ZR,...eh,...th,...rh,...oh,...nh,...ah,...ih,...sh,...ch,...lh,...dh,...Eh,...uh,...ph,..._h}});var aE=X(()=>{A();var{app:ue,BrowserWindow:ee,ipcMain:Fe,dialog:he,Menu:qd,protocol:Uo,shell:ka}=(pe(),W(_e)),Ae=(Oe(),W(Ce)),Y=(Te(),W(Me)),c=Vd(),{isSecretKey:mh}=cr(),{windowNexus:Mo,runWithVault:zd,currentNexusId:fh}=mt(),Th=ue.isPackaged,Jd=Y.dirname(ue.getPath("exe")),Kd=U.env.PORTABLE_EXECUTABLE_DIR||(Ae.existsSync(Y.join(Jd,"portable.flag"))?Jd:null),vo=Th?Kd?Y.join(Kd,"novel-manager-data"):Y.join(ue.getPath("appData"),"DraconDex","novel-manager-data"):U.env.DRACONDEX_DATA_DIR||Y.join(v,"..","tmp-user-data");Ae.existsSync(vo)||Ae.mkdirSync(vo,{recursive:!0});var Nh=Y.join(vo,"electron-user-data");ue.setPath("userData",Nh);ue.commandLine.appendSwitch("no-sandbox");Uo&&Uo.registerSchemesAsPrivileged([{scheme:"ddx-file",privileges:{secure:!0,supportFetchAPI:!0,stream:!0,bypassCSP:!0}}]);ue.requestSingleInstanceLock()||ue.quit();ue.on("second-instance",()=>{let e=ee.getAllWindows()[0];e&&(e.isMinimized()&&e.restore(),e.focus())});var Ca=new Set;function Po(e,t){let r=new ee({width:t?900:1280,height:t?650:800,minWidth:960,minHeight:600,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:Y.join(v,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:Y.join(v,"preload.js"),contextIsolation:!0,nodeIntegration:!1,webviewTag:!0}});if(gh(r.webContents),e){let n=Number(e);Mo.set(r.id,n);try{c.refreshVaultCounts(n)}catch{}try{c.touchVaultOpened(n)}catch{}c.pinVault(n),r.on("closed",()=>{Mo.delete(r.id);try{c.refreshVaultCounts(n)}catch{}[...Mo.values()].includes(n)||(c.unpinVault(n),c.closeVault(n))})}t&&(Ca.add(r.id),r.on("closed",()=>Ca.delete(r.id)));let o=new URLSearchParams;e&&o.set("nexus",e),t&&(o.set("tab",t),o.set("popup","1")),r.loadFile(Y.join(v,"index.html"),o.toString()?{search:o.toString()}:void 0)}var ya=new Set;function Da(){for(let t of ya){let r=ee.fromId(t);if(r&&!r.isDestroyed()){r.isMinimized()&&r.restore(),r.focus();return}}let e=new ee({width:760,height:560,minWidth:640,minHeight:480,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:Y.join(v,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:Y.join(v,"preload.js"),contextIsolation:!0,nodeIntegration:!1}});ya.add(e.id),e.on("closed",()=>ya.delete(e.id)),e.loadFile(Y.join(v,"index.html"),{search:"welcome=1"})}var jo=new Map;function Wo(e){for(let[t,r]of jo)if(r===e)return ee.fromId(t);return null}var ba=new Map;function gh(e){let t=null;e.on("will-attach-webview",(r,o,n)=>{t=null;let a=null;try{let i=new URL(String(n.src||""));if(i.protocol!=="file:"){r.preventDefault();return}a=decodeURIComponent(i.pathname),U.platform==="win32"&&/^\/[A-Za-z]:/.test(a)&&(a=a.slice(1))}catch{r.preventDefault();return}let s=c.pluginByPanelPath(a);if(!s){r.preventDefault();return}delete o.preloadURL,o.preload=Y.join(v,"preload-plugin.js"),o.nodeIntegration=!1,o.nodeIntegrationInSubFrames=!1,o.contextIsolation=!0,o.sandbox=!0,o.webviewTag=!1,n.nodeintegration="off",n.allowpopups="false",t=s.id}),e.on("did-attach-webview",(r,o)=>{if(t==null)return;let n=t;t=null,ba.set(o.id,n),o.on("destroyed",()=>{ba.delete(o.id),nE(o.id)}),o.setWindowOpenHandler(()=>({action:"deny"})),o.on("will-navigate",(a,s)=>{let i=null;try{i=decodeURIComponent(new URL(s).pathname)}catch{}(!i||!c.pluginByPanelPath(i))&&a.preventDefault()})})}function Rh(e){let t;try{t=new URL(String(e||""))}catch{return null}if(t.protocol!=="file:")return null;let r=decodeURIComponent(t.pathname);return U.platform==="win32"&&/^\/[A-Za-z]:/.test(r)&&(r=r.slice(1)),r}var hh=Y.join(v,"index.html"),Sh=e=>`persist:plugin-${e}`;function Oh(e){return!e||e.__ddxLocked||(e.__ddxLocked=!0,e.setPermissionRequestHandler((t,r,o)=>o(!1)),e.setPermissionCheckHandler(()=>!1)),e}ue.on("web-contents-created",(e,t)=>{t.setWindowOpenHandler(()=>({action:"deny"})),Oh(t.session),t.on("will-navigate",(r,o)=>{let n=Rh(o);n&&Y.normalize(n)===hh||n&&c.pluginByOwnedPath(n)||r.preventDefault()})});function Lh(e){let t=Wo(e.id);if(t&&!t.isDestroyed())return t.focus(),t;let r=new ee({width:900,height:650,minWidth:480,minHeight:360,backgroundColor:"#050506",frame:!1,autoHideMenuBar:!0,icon:Y.join(v,"..","src","assets","brand","DraconDex_Icon.ico"),webPreferences:{preload:Y.join(v,"preload-plugin.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!0,webviewTag:!1,partition:Sh(e.plugin_key)}});jo.set(r.id,e.id);let o=r.webContents.id;return r.on("closed",()=>{jo.delete(r.id),nE(o)}),r.loadFile(Y.join(vo,"plugins",e.plugin_key,e.entry_html)),r}ue.whenReady().then(()=>{if(qd.setApplicationMenu(qd.buildFromTemplate([{role:"viewMenu"}])),Ih(),c.migratePluginDir(),c.getAppSetting("startupMode")==="latest"){let t=c.listVaults().filter(r=>!r.missing&&r.last_opened_at).sort((r,o)=>o.last_opened_at>r.last_opened_at?1:-1);if(t.length){Po(t[0].id);return}}Da()});function Ih(){Uo&&Uo.handle("ddx-file",async e=>{let t=String(e.url).replace(/^ddx-file:(\/\/)?/,"").split(/[?#/]/)[0],[r,o]=t.split("-"),n=Number(r),a=Number(o);if(!Number.isInteger(n)||n<=0||!Number.isInteger(a)||a<=0)return new Response(null,{status:400});let s;try{s=await zd(n,()=>c.getImportFile(a))}catch{return new Response(null,{status:404})}let i=(s?.file_type||"").toLowerCase();if(!s||!xa.has(i))return new Response(null,{status:404});try{let u=await Ae.promises.stat(s.file_path),E=`"${u.mtimeMs}-${u.size}"`;return e.headers.get("if-none-match")===E?new Response(null,{status:304,headers:{ETag:E,"Cache-Control":"no-cache"}}):new Response(await Ae.promises.readFile(s.file_path),{headers:{"Content-Type":tE(i),ETag:E,"Cache-Control":"no-cache"}})}catch{return new Response(null,{status:404})}})}ue.on("window-all-closed",()=>{U.platform!=="darwin"&&ue.quit()});ue.on("activate",()=>{ee.getAllWindows().length===0&&Da()});var d=(e,t)=>Fe.handle(e,async(r,...o)=>{let n=Mo.get(ee.fromWebContents(r.sender)?.id)??null;try{return await zd(n,()=>t(...o))}catch(a){throw console.error(`IPC handler ${e} error:`,a),a}});d("db:exportFile",async()=>{let t=`${(c.getNexus(fh())?.name||"nexus").replace(/[\\/:*?"<>|]/g,"_")}-backup-${new Date().toISOString().slice(0,10)}.ddx`,r=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Export Database",defaultPath:Y.join(ue.getPath("documents"),t),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return r.canceled||!r.filePath?{canceled:!0}:(await c.exportDatabaseTo(r.filePath),{canceled:!1,filePath:r.filePath})});var Fa=new Set;d("db:pickImportFile",async()=>{let e=await he.showOpenDialog(ee.getFocusedWindow(),{title:"Import Database (.ddx / .mdx / .db)",properties:["openFile"],filters:[{name:"DraconDex File",extensions:["ddx","mdx","db"]}]});return e.canceled||!e.filePaths?.[0]?{canceled:!0}:(Fa.add(Y.resolve(e.filePaths[0])),{canceled:!1,filePath:e.filePaths[0]})});d("db:importMergeFile",async(e,t)=>e?Fa.has(Y.resolve(String(e)))?{canceled:!1,summary:c.importDatabaseMerge(e,t??null)}:{canceled:!0}:{canceled:!0});d("db:exportNexusFile",async(e,t)=>{let r=`${String(t||"nexus").replace(/[\\/:*?"<>|]/g,"_")}.json`,o=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Export Nexus",defaultPath:Y.join(ue.getPath("documents"),r),filters:[{name:"DraconDex Nexus Snapshot",extensions:["json"]}]});return o.canceled||!o.filePath?{ok:!1,canceled:!0}:c.exportNexusFile(e,o.filePath)});d("db:importNexusFile",async e=>{let t=await he.showOpenDialog(ee.getFocusedWindow(),{title:"Import Nexus",properties:["openFile"],filters:[{name:"DraconDex Nexus Snapshot",extensions:["json"]}]});return t.canceled||!t.filePaths?.[0]?{ok:!1,canceled:!0}:c.importNexusFile(e,t.filePaths[0])});d("db:exportModuleFile",async(e,t,r)=>{let o=`${String(r||"module").replace(/[\\/:*?"<>|]/g,"_")}.mdx`,n=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Export Module",defaultPath:Y.join(ue.getPath("documents"),o),filters:[{name:"DraconDex Module File",extensions:["mdx"]}]});return n.canceled||!n.filePath?{ok:!1,canceled:!0}:c.exportModuleFile(e,t,n.filePath)});d("db:importModuleFile",async(e,t)=>{let r=await he.showOpenDialog(ee.getFocusedWindow(),{title:"Import Module",properties:["openFile"],filters:[{name:"DraconDex Module File",extensions:["mdx","json"]}]});return r.canceled||!r.filePaths?.[0]?{ok:!1,canceled:!0}:c.importModuleFile(e,t,r.filePaths[0])});d("db:importModuleFileAt",async(e,t,r)=>r?Fa.has(Y.resolve(String(r)))?c.importModuleFile(e,t,r):{ok:!1,canceled:!0}:{ok:!1,canceled:!0});d("nexus:getAll",()=>c.getNexuses());d("nexus:get",e=>c.getNexus(e));var Qd=new Set,Zd=new Set;d("nexus:defaultPath",()=>c.vaultsDir());d("nexus:pickLocation",async e=>{let t=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Save Nexus As",defaultPath:c.vaultDefaultPath(e||"",0).replace(/-0\.ddx$/,".ddx"),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});if(t.canceled||!t.filePath)return{canceled:!0};let r=Y.resolve(t.filePath);return Qd.add(r),{canceled:!1,filePath:r}});d("nexus:create",(e,t,r,o)=>{let n=o&&Qd.has(Y.resolve(String(o)))?Y.resolve(String(o)):null;return c.createNexus(e,t,r,n)});d("nexus:duplicate",e=>c.duplicateNexus(e));d("nexus:exportFile",async e=>{let t=c.getNexus(e);if(!t)return{ok:!1,code:"not_found"};let r=String(t.name||"nexus").replace(/[\\/:*?"<>|]/g,"_"),o=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Export Nexus",defaultPath:Y.join(ue.getPath("documents"),`${r}.ddx`),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return o.canceled||!o.filePath?{ok:!1,canceled:!0}:c.exportNexusVaultFile(e,o.filePath)});d("nexus:shareFile",async e=>{let t=c.getNexus(e);if(!t)return{ok:!1,code:"not_found"};let r=String(t.name||"nexus").replace(/[\\/:*?"<>|]/g,"_"),o=await he.showSaveDialog(ee.getFocusedWindow(),{title:"Share Nexus",defaultPath:Y.join(ue.getPath("desktop"),`${r}.ddx`),filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});if(o.canceled||!o.filePath)return{ok:!1,canceled:!0};let n=c.exportNexusVaultFile(e,o.filePath);if(!n.ok)return n;if(Zd.add(Y.resolve(n.filePath)),U.platform==="darwin")try{let{ShareMenu:a}=(pe(),W(_e));return new a({filePaths:[n.filePath]}).popup({window:ee.getFocusedWindow()}),{...n,native:!0}}catch{}return{...n,native:!1}});d("nexus:revealFile",e=>{let t=c.getNexus(e);return t?.file_path?(ka.showItemInFolder(t.file_path),{ok:!0}):{ok:!1,code:"not_found"}});d("shell:revealPath",e=>!c.getNexuses().some(r=>r.file_path&&Y.resolve(r.file_path)===Y.resolve(String(e||"")))&&!Zd.has(Y.resolve(String(e||"")))?{ok:!1,code:"not_found"}:(ka.showItemInFolder(String(e)),{ok:!0}));d("shell:composeMail",(e,t)=>{let r=`mailto:?subject=${encodeURIComponent(String(e||""))}&body=${encodeURIComponent(String(t||""))}`;return ka.openExternal(r),{ok:!0}});d("nexus:relink",async e=>{let t=await he.showOpenDialog(ee.getFocusedWindow(),{title:"Locate Nexus File",properties:["openFile"],filters:[{name:"DraconDex Nexus",extensions:["ddx"]}]});return t.canceled||!t.filePaths?.[0]?{ok:!1,canceled:!0}:c.relinkNexusFile(e,t.filePaths[0])});d("nexus:update",(e,t,r,o)=>c.updateNexus(e,t,r,o));d("nexus:delete",e=>c.deleteNexus(e));d("note:getFolders",e=>c.getNoteFolders(e));d("note:createFolder",(e,t,r,o)=>c.createNoteFolder(e,t,r,o));d("note:updateFolder",(e,t,r,o)=>c.updateNoteFolder(e,t,r,o));d("note:deleteFolder",e=>c.deleteNoteFolder(e));d("note:getAll",e=>c.getNotes(e));d("note:get",e=>c.getNote(e));d("note:create",(e,t,r,o)=>c.createNote(e,t,r,o));d("note:update",(e,t,r,o,n)=>c.updateNote(e,t,r,o,n));d("note:updateContent",(e,t)=>c.updateNoteContent(e,t));d("note:delete",e=>c.deleteNote(e));d("module:getTree",e=>c.getTree(e));d("module:getNestItems",e=>c.getNestItems(e));d("module:get",e=>c.getModule(e));d("module:create",e=>c.createModule(e));d("module:update",(e,t)=>c.updateModule(e,t));d("module:updateDescription",(e,t)=>c.updateModuleDescription(e,t));d("module:delete",e=>c.deleteModule(e));d("module:duplicate",e=>c.duplicateModule(e));d("module:move",(e,t,r,o)=>c.moveModule(e,t,r,o));d("module:count",e=>c.countModules(e));d("module:getAttrs",e=>c.getModuleAttrs(e));d("module:upsertAttr",(e,t,r,o)=>c.upsertModuleAttr(e,t,r,o));d("module:deleteAttr",e=>c.deleteModuleAttr(e));d("module:getUi",e=>c.getModuleUi(e));d("module:setUi",(e,t,r)=>c.setModuleUi(e,t,r));d("module:getTags",e=>c.getModuleTags(e));d("module:setTags",(e,t)=>c.setModuleTags(e,t));d("module:getLinks",e=>c.getModuleLinks(e));d("module:getInspector",e=>c.getModuleInspector(e));d("module:getAttrCounts",e=>c.getChildAttrCounts(e));d("classifier:setCatType",(e,t)=>c.setCatType(e,t));d("classifier:getObjects",e=>c.getObjects(e));d("classifier:getObjectsFull",e=>c.getObjectsFull(e));d("classifier:getObject",e=>c.getObject(e));d("classifier:createObject",(e,t,r,o)=>c.createObject(e,t,r,o));d("classifier:updateObject",(e,t,r,o)=>c.updateObject(e,t,r,o));d("classifier:updateObjectNote",(e,t)=>c.updateObjectNote(e,t));d("classifier:deleteObject",e=>c.deleteObject(e));d("classifier:getTemplates",e=>c.getTemplates(e));d("classifier:getObjectTemplates",(e,t)=>c.getObjectTemplates(e,t));d("classifier:createTemplate",(e,t,r,o,n,a,s)=>c.createTemplate(e,t,r,o,n,a,s));d("classifier:updateTemplate",(e,t,r,o,n,a)=>c.updateTemplate(e,t,r,o,n,a));d("classifier:deleteTemplate",e=>c.deleteTemplate(e));d("classifier:countObjectTemplates",e=>c.countObjectTemplates(e));d("classifier:getAttrs",e=>c.getAttrs(e));d("classifier:upsertAttr",(e,t,r)=>c.upsertAttr(e,t,r));d("classifier:upsertAttrCondition",(e,t,r)=>c.upsertAttrCondition(e,t,r));d("wanderer:list",e=>c.getMapEvents(e));d("wanderer:create",(e,t,r,o,n,a)=>c.createMapEvent(e,t,r,o,n,a));d("wanderer:update",(e,t,r,o,n,a)=>c.updateMapEvent(e,t,r,o,n,a));d("wanderer:delete",e=>c.deleteMapEvent(e));d("narrator:getDialogues",e=>c.getDialogues(e));d("narrator:createDialogue",(e,t,r,o,n)=>c.createDialogue(e,t,r,o,n));d("narrator:updateDialogue",(e,t,r)=>c.updateDialogue(e,t,r));d("narrator:updateDialogueDescription",(e,t)=>c.updateDialogueDescription(e,t));d("narrator:updateDialoguePos",(e,t,r)=>c.updateDialoguePos(e,t,r));d("narrator:deleteDialogue",e=>c.deleteDialogue(e));d("narrator:getEdges",e=>c.getEdges(e));d("narrator:createEdge",(e,t,r,o)=>c.createEdge(e,t,r,o));d("narrator:updateEdgeLabel",(e,t)=>c.updateEdgeLabel(e,t));d("narrator:deleteEdge",e=>c.deleteEdge(e));d("narrator:getTalks",e=>c.getTalks(e));d("narrator:createTalk",(e,t,r,o)=>c.createTalk(e,t,r,o));d("narrator:updateTalk",(e,t,r,o)=>c.updateTalk(e,t,r,o));d("narrator:deleteTalk",e=>c.deleteTalk(e));d("author:getChapters",e=>c.getBookChapters(e));d("author:createChapter",(e,t)=>c.createBookChapter(e,t));d("author:renameChapter",(e,t)=>c.renameBookChapter(e,t));d("author:updateContent",(e,t)=>c.updateBookChapterContent(e,t));d("author:deleteChapter",e=>c.deleteBookChapter(e));d("author:setChapterLabel",(e,t)=>c.setBookChapterLabel(e,t));d("author:moveChapter",(e,t)=>c.moveBookChapter(e,t));d("chatscribe:getSessions",e=>c.getChatSessions(e));d("chatscribe:createSession",(e,t)=>c.createChatSession(e,t));d("chatscribe:renameSession",(e,t)=>c.renameChatSession(e,t));d("chatscribe:deleteSession",e=>c.deleteChatSession(e));d("chatscribe:getMessages",e=>c.getChatMessages(e));d("chatscribe:createMessage",(e,t)=>c.createChatMessage(e,t));d("chatscribe:updateMessage",(e,t)=>c.updateChatMessage(e,t));d("chatscribe:deleteMessage",e=>c.deleteChatMessage(e));d("chatscribe:updateMessageStyle",(e,t,r)=>c.updateMessageStyle(e,t,r));d("viewer:index",e=>c.viewerIndex(e));d("viewer:getRelations",e=>c.getEntityRelations(e));d("viewer:createRelation",(e,t,r,o,n)=>c.createEntityRelation(e,t,r,o,n));d("viewer:updateRelation",(e,t,r)=>c.updateEntityRelation(e,t,r));d("viewer:deleteRelation",e=>c.deleteEntityRelation(e));d("sketcher:getPages",e=>c.getSketchPages(e));d("sketcher:createPage",(e,t)=>c.createSketchPage(e,t));d("sketcher:renamePage",(e,t)=>c.renameSketchPage(e,t));d("sketcher:movePage",(e,t)=>c.moveSketchPage(e,t));d("sketcher:deletePage",e=>c.deleteSketchPage(e));d("sketcher:getStrokes",e=>c.getSketchStrokes(e));d("sketcher:addStroke",(e,t,r,o)=>c.createSketchStroke(e,t,r,o));d("sketcher:deleteStroke",e=>c.deleteSketchStroke(e));d("sketcher:getPins",e=>c.getSketchPins(e));d("sketcher:addPin",(e,t,r,o)=>c.createSketchPin(e,t,r,o));d("sketcher:movePin",(e,t,r)=>c.moveSketchPin(e,t,r));d("sketcher:deletePin",e=>c.deleteSketchPin(e));var eE=new Set(["png","jpg","jpeg","gif","webp","svg","md","txt","docx"]),xa=new Set(["png","jpg","jpeg","gif","webp","svg"]),tE=e=>e==="svg"?"image/svg+xml":`image/${e==="jpg"?"jpeg":e}`,rE=new Set,Ah=e=>{let t;try{t=Y.resolve(String(e||""))}catch{return!1}for(let r of rE){let o=Y.relative(r,t);if(o&&!o.startsWith("..")&&!Y.isAbsolute(o))return!0}return!1};d("importdock:list",e=>c.getImportFiles(e));d("importdock:add",(e,t)=>{let r=(Array.isArray(t)?t:[]).filter(o=>Ah(o?.path)).map(o=>({...o,type:Y.extname(String(o.path||"")).slice(1).toLowerCase()})).filter(o=>eE.has(o.type));return c.addImportFiles(e,r)});d("importdock:setLinker",(e,t)=>c.setImportLinker(e,t));d("importdock:setUseAsImage",(e,t)=>c.setImportUseAsImage(e,t));d("importdock:delete",e=>c.deleteImportFile(e));d("importdock:displayImages",e=>c.getDisplayImages(e));d("importdock:pickFolder",async()=>{let e=ee.getFocusedWindow(),t=await he.showOpenDialog(e,{properties:["openDirectory"]});if(t.canceled||!t.filePaths?.length)return{canceled:!0};let r=t.filePaths[0];rE.add(Y.resolve(r));let o=[],n=a=>{for(let s of Ae.readdirSync(a,{withFileTypes:!0})){let i=Y.join(a,s.name);if(s.isDirectory()){n(i);continue}let u=Y.extname(s.name).slice(1).toLowerCase();eE.has(u)&&o.push({name:s.name,path:i,type:u,size:Ae.statSync(i).size,folder:Y.basename(r)+(Y.dirname(i)===r?"":"/"+Y.relative(r,Y.dirname(i)).replace(/\\/g,"/"))})}};return n(r),{folder:Y.basename(r),files:o}});d("importdock:readFile",async e=>{let t=c.getImportFile(e);if(!t)return null;let r=(t.file_type||"").toLowerCase();try{return xa.has(r)?(await Ae.promises.access(t.file_path),{kind:"image"}):r==="md"||r==="txt"?{kind:r,text:await Ae.promises.readFile(t.file_path,"utf8")}:{kind:"binary"}}catch(o){return{kind:"error",message:String(o.message||o)}}});d("importdock:readFiles",async e=>{let t={};return await Promise.all((e||[]).map(async r=>{let o=c.getImportFile(r);if(!o)return;let n=(o.file_type||"").toLowerCase();if(xa.has(n))try{t[r]=`data:${tE(n)};base64,${(await Ae.promises.readFile(o.file_path)).toString("base64")}`}catch{}})),t});d("versions:list",e=>c.listVersions(e));d("versions:restore",e=>c.restoreVersion(e));var wh=new Set(["versionLimit","startupMode"]),oE=e=>wh.has(String(e))&&!mh(e);d("setting:get",e=>oE(e)?c.getAppSetting(e):null);d("setting:set",(e,t)=>oE(e)?c.setAppSetting(e,t):{ok:!1});d("sync:getConfig",()=>c.getSyncConfig());d("sync:setConfig",(e,t)=>c.setSyncConfig(e,t));d("sync:googleLogin",(e,t)=>c.syncGoogleLogin(e,t));d("sync:googleLogout",()=>c.syncGoogleLogout());d("sync:authStatus",()=>c.syncAuthStatus());d("sync:status",e=>c.syncStatus(e));d("sync:push",(e,t)=>c.syncPushVault(e,t));d("sync:pull",(e,t)=>c.syncPullVault(e,t));d("sync:pullByToken",(e,t,r)=>c.syncPullByToken(e,t,r));d("sync:deleteUpload",e=>c.syncDeleteUpload(e));d("supabase:getSetup",()=>c.getSupabaseSetup());d("supabase:setSetup",(e,t)=>c.setSupabaseSetup(e,t));d("supabase:clearSetup",()=>c.clearSupabaseSetup());d("supabase:getSql",()=>c.getSupabaseSetupSql());d("supabase:check",(e,t)=>c.checkSupabaseProject(e,t));d("supabase:install",(e,t,r)=>c.installSupabaseSchema(e,t,r));d("supabase:openDash",e=>c.openSupabaseDashboard(e));d("drive:getConfig",()=>c.getDriveConfig());d("drive:setConfig",(e,t)=>c.setDriveConfig(e,t));d("drive:connect",()=>c.driveConnect());d("drive:disconnect",()=>c.driveDisconnect());d("drive:status",()=>c.driveStatus());d("drive:setAutoBackup",e=>c.driveSetAutoBackup(e));d("drive:setBackupLayout",e=>c.driveSetBackupLayout(e));d("drive:setBackupDdx",e=>c.driveSetBackupDdx(e));d("drive:backupNow",e=>c.driveBackupNow(e));d("drive:restoreLayout",()=>c.driveRestoreLayoutProfile());d("drive:restoreDatabase",()=>c.driveRestoreDatabase());d("drive:getBackupLog",()=>c.driveGetBackupLog());d("drive:listLayoutSlots",()=>c.driveListLayoutSlots());d("drive:saveLayoutSlot",(e,t)=>c.driveSaveLayoutSlot(e,t));d("drive:restoreLayoutSlot",e=>c.driveRestoreLayoutSlot(e));d("drive:deleteLayoutSlot",e=>c.driveDeleteLayoutSlot(e));d("cloud:listProviders",()=>c.cloudListProviders());d("cloud:setActive",e=>c.cloudSetActive(e));d("cloud:setPrefs",(e,t)=>c.cloudSetProviderPrefs(e,t));d("cloud:getConfig",e=>c.cloudGetConfig(e));d("cloud:setConfig",(e,t)=>c.cloudSetConfig(e,t));d("cloud:connect",e=>c.cloudConnect(e));d("cloud:disconnect",e=>c.cloudDisconnect(e));d("cloud:status",e=>c.cloudStatus(e));d("update:check",()=>c.checkForUpdate());d("update:dismiss",e=>c.dismissUpdate(e));d("update:openDownload",e=>c.openUpdateDownload(e));d("update:getAutoCheck",()=>c.getAutoCheck());d("update:setAutoCheck",e=>c.setAutoCheck(e));d("plugin:list",()=>c.pluginList());d("plugin:listOrgRepos",()=>c.pluginListOrgRepos());d("plugin:preview",e=>c.pluginPreview(e));d("plugin:install",e=>c.pluginInstall(e));d("plugin:installDependency",(e,t)=>c.pluginInstallDependency(e,t));d("plugin:uninstall",e=>Wo(e)?{ok:!1,code:"running"}:c.pluginUninstall(e));d("plugin:launch",e=>{let t=c.pluginGetById(e);if(!t)return{ok:!1,code:"not_found"};let r=c.pluginMissingDeps(e);return r.length?{ok:!1,code:"missing_dependency",missing:r}:(Lh(t),{ok:!0})});d("plugin:stop",e=>{let t=Wo(e);return t&&!t.isDestroyed()&&t.close(),{ok:!0}});d("plugin:isRunning",e=>!!Wo(e));function ut(e){let t=jo.get(ee.fromWebContents(e.sender)?.id);if(t)return t;let r=ba.get(e.sender.id);if(r)return r;throw new Error("not a plugin window")}Fe.handle("pluginapi:table:getSchema",(e,t)=>c.pluginApiGetSchema(ut(e),t));Fe.handle("pluginapi:table:query",(e,t,r)=>c.pluginApiQuery(ut(e),t,r));Fe.handle("pluginapi:table:insert",(e,t,r)=>c.pluginApiInsert(ut(e),t,r));Fe.handle("pluginapi:table:update",(e,t,r,o)=>c.pluginApiUpdate(ut(e),t,r,o));Fe.handle("pluginapi:table:delete",(e,t,r)=>c.pluginApiDelete(ut(e),t,r));var Bt=new Map,yh=0;function nE(e){for(let[t,r]of Bt)if(r.contentsId===e){try{r.abort()}catch{}Bt.delete(t)}}Fe.handle("pluginapi:net:fetch",(e,t,r)=>c.pluginNetFetch(ut(e),t,r));Fe.handle("pluginapi:net:stream:start",async(e,t,r)=>{let o=ut(e),n=e.sender,a=`s${++yh}`,s=(u,...E)=>{n.isDestroyed()||n.send(u,a,...E)},i=await c.pluginNetStream(o,t,r,{onChunk:u=>s("pluginapi:net:stream:chunk",u),onEnd:u=>{Bt.delete(a),s("pluginapi:net:stream:end",u)}});return Bt.set(a,{abort:i,contentsId:n.id}),{streamId:a}});Fe.handle("pluginapi:net:stream:abort",(e,t)=>{let r=Bt.get(t);if(!r||r.contentsId!==e.sender.id)return{ok:!1};try{r.abort()}catch{}return Bt.delete(t),{ok:!0}});Fe.handle("pluginapi:oauth:authorize",(e,t)=>c.pluginOAuthAuthorize(ut(e),t));d("migrate:list",(e,t)=>c.listLegacyProjects(e,t));d("migrate:run",(e,t,r,o)=>c.migrateLegacy(e,t,r,o));d("migrate:preview",e=>c.previewLegacyMigration(e));d("migrate:getPromptSeen",e=>c.getLegacyPromptSeen(e));d("migrate:setPromptSeen",e=>c.setLegacyPromptSeen(e));d("sagehut:stats",e=>c.sageHutStats(e));d("sagehut:linkerList",e=>c.sageHutLinkerList(e));d("designer:getNodes",e=>c.getDesignNodes(e));d("designer:createNode",(e,t,r,o,n,a,s)=>c.createDesignNode(e,t,r,o,n,a,s));d("designer:updateNode",(e,t,r,o)=>c.updateDesignNode(e,t,r,o));d("designer:moveNode",(e,t,r)=>c.moveDesignNode(e,t,r));d("designer:deleteNode",e=>c.deleteDesignNode(e));d("designer:getEdges",e=>c.getDesignEdges(e));d("designer:createEdge",(e,t,r,o)=>c.createDesignEdge(e,t,r,o));d("designer:updateEdge",(e,t)=>c.updateDesignEdgeLabel(e,t));d("designer:deleteEdge",e=>c.deleteDesignEdge(e));d("sketcher:exportPng",async(e,t)=>{let r=ee.getFocusedWindow(),o=await he.showSaveDialog(r,{defaultPath:`${e||"sketch"}.png`,filters:[{name:"PNG",extensions:["png"]}]});return o.canceled||!o.filePath?{canceled:!0}:(Ae.writeFileSync(o.filePath,M.from(String(t).split(",")[1]||"","base64")),{saved:o.filePath})});d("author:exportDoc",async(e,t)=>{let r=ee.getFocusedWindow(),o=await he.showSaveDialog(r,{defaultPath:`${e||"book"}.doc`,filters:[{name:"Word Document",extensions:["doc"]}]});if(o.canceled||!o.filePath)return{canceled:!0};let n=`<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'><head><meta charset="utf-8"></head><body>${t}</body></html>`;return Ae.writeFileSync(o.filePath,n,"utf8"),{saved:o.filePath}});d("drafter:exportFile",async(e,t,r)=>{let o=ee.getFocusedWindow(),n=await he.showSaveDialog(o,{defaultPath:`${e||"document"}.${t||"md"}`,filters:[{name:"Markdown",extensions:["md"]},{name:"Text",extensions:["txt"]}]});return n.canceled||!n.filePath?{canceled:!0}:(Ae.writeFileSync(n.filePath,r??"","utf8"),{saved:n.filePath})});d("wiki:resolve",(e,t)=>c.resolveWikiName(e,t));d("wiki:backlinks",e=>c.getBacklinks(e));d("wiki:outgoing",e=>c.getOutgoingLinks(e));d("wiki:quickIndex",e=>c.quickIndex(e));d("wiki:entityPath",e=>c.getEntityPath(e));d("wiki:rebuild",()=>c.rebuildWikiIndex());d("wiki:resolveKeys",e=>c.resolveEntityKeys(e));d("wiki:linkCounts",e=>c.getLinkCounts(e));d("wiki:getGraph",e=>c.getGraph(e));d("wiki:renameTarget",(e,t,r)=>c.renameWikiTarget(e,t,r));d("color:getAll",()=>c.getColors());d("color:add",e=>c.addColor(e));d("color:markUsed",e=>c.markColorUsed(e));d("color:getRecent",()=>c.getRecentColors());d("color:delete",e=>c.deleteColor(e));d("color:getSymbolCollection",()=>c.getSymbolCollection());d("timeline:getAll",e=>c.getTimelines(e));d("timeline:create",(e,t,r)=>c.createTimeline(e,t,r));d("timeline:getModuleTimelines",e=>c.getModuleTimelines(e));d("timeline:createModuleTimeline",(e,t,r)=>c.createModuleTimeline(e,t,r));d("timeline:update",(e,t,r)=>c.updateTimeline(e,t,r));d("timeline:delete",e=>c.deleteTimeline(e));d("timeline:getOrCreateDate",(e,t,r,o,n)=>c.getOrCreateDate(e,t,r,o,n));d("timeline:getEvents",e=>c.getEvents(e));d("timeline:createEvent",(e,t,r,o,n,a)=>c.createEvent(e,t,r,o,n,a));d("timeline:updateEvent",(e,t,r,o,n,a)=>c.updateEvent(e,t,r,o,n,a));d("timeline:updateEventStory",(e,t)=>c.updateEventStory(e,t));d("timeline:updateEventIcon",(e,t,r)=>c.updateEventIcon(e,t,r));d("timeline:deleteEvent",e=>c.deleteEvent(e));d("map:getAll",e=>c.getMaps(e));d("map:create",(e,t,r)=>c.createMap(e,t,r));d("map:update",(e,t,r)=>c.updateMap(e,t,r));d("map:delete",e=>c.deleteMap(e));d("map:getAreas",e=>c.getMapAreas(e));d("map:createArea",(e,t,r)=>c.createMapArea(e,t,r));d("map:updateArea",(e,t,r)=>c.updateMapArea(e,t,r));d("map:deleteArea",e=>c.deleteMapArea(e));d("map:getPoints",e=>c.getMapAreaPoints(e));d("map:setPoints",(e,t)=>c.setMapAreaPoints(e,t));d("map:getModuleMap",e=>c.getModuleMap(e));d("map:getOrCreateModuleMap",e=>c.getOrCreateModuleMap(e));d("hashtag:getAll",()=>c.getHashtags());d("hashtag:create",(e,t)=>c.createHashtag(e,t));d("hashtag:update",(e,t,r)=>c.updateHashtag(e,t,r));d("hashtag:delete",e=>c.deleteHashtag(e));d("timeline:getEventTags",e=>c.getEventTags(e));d("timeline:setEventTags",(e,t)=>c.setEventTags(e,t));d("timeline:addEventTag",(e,t)=>c.addEventTag(e,t));d("timeline:removeEventTag",(e,t)=>c.removeEventTag(e,t));d("hashtag:getObjectsByTag",(e,t)=>c.getObjectsByHashtag(e,t));d("hashtag:getEventsByTag",(e,t)=>c.getEventsByHashtag(e,t));d("window:minimize",()=>{let e=ee.getFocusedWindow();e&&e.minimize()});d("window:toggleMaximize",()=>{let e=ee.getFocusedWindow();return e?(e.isMaximized()?e.unmaximize():e.maximize(),e.isMaximized()):!1});d("window:close",()=>{let e=ee.getFocusedWindow();e&&e.close()});d("window:openNexus",e=>{Po(e)});d("window:openWelcome",()=>{Da()});Fe.handle("window:openNexusReplace",(e,t)=>{Po(t);let r=ee.fromWebContents(e.sender);r&&!r.isDestroyed()&&r.close()});d("window:openBuilderTab",(e,t)=>{Po(e,t)});Fe.handle("window:getId",e=>ee.fromWebContents(e.sender)?.id);d("window:moveTabToMain",(e,t)=>{let r=ee.getAllWindows().find(o=>!Ca.has(o.id));return r&&!r.isDestroyed()&&r.webContents.send("builder:tabInbound",e,t),!!r})});A();Vt();A();var{contextBridge:LE,ipcRenderer:oi}=(pe(),W(_e)),l=(e,...t)=>oi.invoke(e,...t);LE.exposeInMainWorld("api",{db:{exportFile:()=>l("db:exportFile"),pickImportFile:()=>l("db:pickImportFile"),importMergeFile:(e,t)=>l("db:importMergeFile",e,t),exportNexusFile:(e,t)=>l("db:exportNexusFile",e,t),importNexusFile:e=>l("db:importNexusFile",e),exportModuleFile:(e,t,r)=>l("db:exportModuleFile",e,t,r),importModuleFile:(e,t)=>l("db:importModuleFile",e,t),importModuleFileAt:(e,t,r)=>l("db:importModuleFileAt",e,t,r)},nexus:{getAll:()=>l("nexus:getAll"),get:e=>l("nexus:get",e),create:(e,t,r,o)=>l("nexus:create",e,t,r,o),update:(e,t,r,o)=>l("nexus:update",e,t,r,o),delete:e=>l("nexus:delete",e),defaultPath:e=>l("nexus:defaultPath",e),pickLocation:e=>l("nexus:pickLocation",e),relink:e=>l("nexus:relink",e),duplicate:e=>l("nexus:duplicate",e),exportFile:e=>l("nexus:exportFile",e),shareFile:e=>l("nexus:shareFile",e),revealFile:e=>l("nexus:revealFile",e)},shell:{revealPath:e=>l("shell:revealPath",e),composeMail:(e,t)=>l("shell:composeMail",e,t)},note:{getFolders:e=>l("note:getFolders",e),createFolder:(e,t,r,o)=>l("note:createFolder",e,t,r,o),updateFolder:(e,t,r,o)=>l("note:updateFolder",e,t,r,o),deleteFolder:e=>l("note:deleteFolder",e),getAll:e=>l("note:getAll",e),get:e=>l("note:get",e),create:(e,t,r,o)=>l("note:create",e,t,r,o),update:(e,t,r,o,n)=>l("note:update",e,t,r,o,n),updateContent:(e,t)=>l("note:updateContent",e,t),delete:e=>l("note:delete",e)},module:{getTree:e=>l("module:getTree",e),getNestItems:e=>l("module:getNestItems",e),get:e=>l("module:get",e),create:e=>l("module:create",e),update:(e,t)=>l("module:update",e,t),updateDescription:(e,t)=>l("module:updateDescription",e,t),delete:e=>l("module:delete",e),duplicate:e=>l("module:duplicate",e),move:(e,t,r,o)=>l("module:move",e,t,r,o),count:e=>l("module:count",e),getAttrs:e=>l("module:getAttrs",e),upsertAttr:(e,t,r,o)=>l("module:upsertAttr",e,t,r,o),deleteAttr:e=>l("module:deleteAttr",e),getUi:e=>l("module:getUi",e),setUi:(e,t,r)=>l("module:setUi",e,t,r),getTags:e=>l("module:getTags",e),setTags:(e,t)=>l("module:setTags",e,t),getLinks:e=>l("module:getLinks",e),getInspector:e=>l("module:getInspector",e),getAttrCounts:e=>l("module:getAttrCounts",e)},classifier:{setCatType:(e,t)=>l("classifier:setCatType",e,t),getObjects:e=>l("classifier:getObjects",e),getObjectsFull:e=>l("classifier:getObjectsFull",e),getObject:e=>l("classifier:getObject",e),createObject:(e,t,r,o)=>l("classifier:createObject",e,t,r,o),updateObject:(e,t,r,o)=>l("classifier:updateObject",e,t,r,o),updateObjectNote:(e,t)=>l("classifier:updateObjectNote",e,t),deleteObject:e=>l("classifier:deleteObject",e),getTemplates:e=>l("classifier:getTemplates",e),getObjectTemplates:(e,t)=>l("classifier:getObjectTemplates",e,t),createTemplate:(e,t,r,o,n,a,s)=>l("classifier:createTemplate",e,t,r,o,n,a,s),updateTemplate:(e,t,r,o,n,a)=>l("classifier:updateTemplate",e,t,r,o,n,a),deleteTemplate:e=>l("classifier:deleteTemplate",e),countObjectTemplates:e=>l("classifier:countObjectTemplates",e),getAttrs:e=>l("classifier:getAttrs",e),upsertAttr:(e,t,r)=>l("classifier:upsertAttr",e,t,r),upsertAttrCondition:(e,t,r)=>l("classifier:upsertAttrCondition",e,t,r)},wanderer:{list:e=>l("wanderer:list",e),create:(e,t,r,o,n,a)=>l("wanderer:create",e,t,r,o,n,a),update:(e,t,r,o,n,a)=>l("wanderer:update",e,t,r,o,n,a),delete:e=>l("wanderer:delete",e)},narrator:{getDialogues:e=>l("narrator:getDialogues",e),createDialogue:(e,t,r,o,n)=>l("narrator:createDialogue",e,t,r,o,n),updateDialogue:(e,t,r)=>l("narrator:updateDialogue",e,t,r),updateDialogueDescription:(e,t)=>l("narrator:updateDialogueDescription",e,t),updateDialoguePos:(e,t,r)=>l("narrator:updateDialoguePos",e,t,r),deleteDialogue:e=>l("narrator:deleteDialogue",e),getEdges:e=>l("narrator:getEdges",e),createEdge:(e,t,r,o)=>l("narrator:createEdge",e,t,r,o),updateEdgeLabel:(e,t)=>l("narrator:updateEdgeLabel",e,t),deleteEdge:e=>l("narrator:deleteEdge",e),getTalks:e=>l("narrator:getTalks",e),createTalk:(e,t,r,o)=>l("narrator:createTalk",e,t,r,o),updateTalk:(e,t,r,o)=>l("narrator:updateTalk",e,t,r,o),deleteTalk:e=>l("narrator:deleteTalk",e)},author:{getChapters:e=>l("author:getChapters",e),createChapter:(e,t)=>l("author:createChapter",e,t),renameChapter:(e,t)=>l("author:renameChapter",e,t),updateContent:(e,t)=>l("author:updateContent",e,t),deleteChapter:e=>l("author:deleteChapter",e),setChapterLabel:(e,t)=>l("author:setChapterLabel",e,t),moveChapter:(e,t)=>l("author:moveChapter",e,t),exportDoc:(e,t)=>l("author:exportDoc",e,t)},drafter:{exportFile:(e,t,r)=>l("drafter:exportFile",e,t,r)},chatscribe:{getSessions:e=>l("chatscribe:getSessions",e),createSession:(e,t)=>l("chatscribe:createSession",e,t),renameSession:(e,t)=>l("chatscribe:renameSession",e,t),deleteSession:e=>l("chatscribe:deleteSession",e),getMessages:e=>l("chatscribe:getMessages",e),createMessage:(e,t)=>l("chatscribe:createMessage",e,t),updateMessage:(e,t)=>l("chatscribe:updateMessage",e,t),deleteMessage:e=>l("chatscribe:deleteMessage",e),updateMessageStyle:(e,t,r)=>l("chatscribe:updateMessageStyle",e,t,r)},viewer:{index:e=>l("viewer:index",e),getRelations:e=>l("viewer:getRelations",e),createRelation:(e,t,r,o,n)=>l("viewer:createRelation",e,t,r,o,n),updateRelation:(e,t,r)=>l("viewer:updateRelation",e,t,r),deleteRelation:e=>l("viewer:deleteRelation",e)},sketcher:{getPages:e=>l("sketcher:getPages",e),createPage:(e,t)=>l("sketcher:createPage",e,t),renamePage:(e,t)=>l("sketcher:renamePage",e,t),movePage:(e,t)=>l("sketcher:movePage",e,t),deletePage:e=>l("sketcher:deletePage",e),getStrokes:e=>l("sketcher:getStrokes",e),addStroke:(e,t,r,o)=>l("sketcher:addStroke",e,t,r,o),deleteStroke:e=>l("sketcher:deleteStroke",e),getPins:e=>l("sketcher:getPins",e),addPin:(e,t,r,o)=>l("sketcher:addPin",e,t,r,o),movePin:(e,t,r)=>l("sketcher:movePin",e,t,r),deletePin:e=>l("sketcher:deletePin",e),exportPng:(e,t)=>l("sketcher:exportPng",e,t)},migrate:{list:(e,t)=>l("migrate:list",e,t),run:(e,t,r,o)=>l("migrate:run",e,t,r,o),preview:e=>l("migrate:preview",e),getPromptSeen:e=>l("migrate:getPromptSeen",e),setPromptSeen:e=>l("migrate:setPromptSeen",e)},versions:{list:e=>l("versions:list",e),restore:e=>l("versions:restore",e)},setting:{get:e=>l("setting:get",e),set:(e,t)=>l("setting:set",e,t)},sync:{getConfig:()=>l("sync:getConfig"),setConfig:(e,t)=>l("sync:setConfig",e,t),googleLogin:(e,t)=>l("sync:googleLogin",e,t),googleLogout:()=>l("sync:googleLogout"),authStatus:()=>l("sync:authStatus"),status:e=>l("sync:status",e),push:(e,t)=>l("sync:push",e,t),pull:(e,t)=>l("sync:pull",e,t),pullByToken:(e,t,r)=>l("sync:pullByToken",e,t,r),deleteUpload:e=>l("sync:deleteUpload",e)},supabase:{getSetup:()=>l("supabase:getSetup"),setSetup:(e,t)=>l("supabase:setSetup",e,t),clearSetup:()=>l("supabase:clearSetup"),getSql:()=>l("supabase:getSql"),check:(e,t)=>l("supabase:check",e,t),install:(e,t,r)=>l("supabase:install",e,t,r),openDash:e=>l("supabase:openDash",e)},drive:{getConfig:()=>l("drive:getConfig"),setConfig:(e,t)=>l("drive:setConfig",e,t),connect:()=>l("drive:connect"),disconnect:()=>l("drive:disconnect"),status:()=>l("drive:status"),setAutoBackup:e=>l("drive:setAutoBackup",e),setBackupLayout:e=>l("drive:setBackupLayout",e),setBackupDdx:e=>l("drive:setBackupDdx",e),backupNow:e=>l("drive:backupNow",e),restoreLayout:()=>l("drive:restoreLayout"),restoreDatabase:()=>l("drive:restoreDatabase"),getBackupLog:()=>l("drive:getBackupLog"),listLayoutSlots:()=>l("drive:listLayoutSlots"),saveLayoutSlot:(e,t)=>l("drive:saveLayoutSlot",e,t),restoreLayoutSlot:e=>l("drive:restoreLayoutSlot",e),deleteLayoutSlot:e=>l("drive:deleteLayoutSlot",e)},cloud:{listProviders:()=>l("cloud:listProviders"),setActive:e=>l("cloud:setActive",e),setPrefs:(e,t)=>l("cloud:setPrefs",e,t),getConfig:e=>l("cloud:getConfig",e),setConfig:(e,t)=>l("cloud:setConfig",e,t),connect:e=>l("cloud:connect",e),disconnect:e=>l("cloud:disconnect",e),status:e=>l("cloud:status",e)},update:{check:()=>l("update:check"),dismiss:e=>l("update:dismiss",e),openDownload:e=>l("update:openDownload",e),getAutoCheck:()=>l("update:getAutoCheck"),setAutoCheck:e=>l("update:setAutoCheck",e)},plugin:{list:()=>l("plugin:list"),listOrgRepos:()=>l("plugin:listOrgRepos"),preview:e=>l("plugin:preview",e),install:e=>l("plugin:install",e),installDependency:(e,t)=>l("plugin:installDependency",e,t),uninstall:e=>l("plugin:uninstall",e),launch:e=>l("plugin:launch",e),stop:e=>l("plugin:stop",e),isRunning:e=>l("plugin:isRunning",e)},importdock:{list:e=>l("importdock:list",e),add:(e,t)=>l("importdock:add",e,t),setLinker:(e,t)=>l("importdock:setLinker",e,t),setUseAsImage:(e,t)=>l("importdock:setUseAsImage",e,t),delete:e=>l("importdock:delete",e),displayImages:e=>l("importdock:displayImages",e),pickFolder:()=>l("importdock:pickFolder"),readFile:e=>l("importdock:readFile",e),readFiles:e=>l("importdock:readFiles",e)},sagehut:{stats:e=>l("sagehut:stats",e),linkerList:e=>l("sagehut:linkerList",e)},designer:{getNodes:e=>l("designer:getNodes",e),createNode:(e,t,r,o,n,a,s)=>l("designer:createNode",e,t,r,o,n,a,s),updateNode:(e,t,r,o)=>l("designer:updateNode",e,t,r,o),moveNode:(e,t,r)=>l("designer:moveNode",e,t,r),deleteNode:e=>l("designer:deleteNode",e),getEdges:e=>l("designer:getEdges",e),createEdge:(e,t,r,o)=>l("designer:createEdge",e,t,r,o),updateEdge:(e,t)=>l("designer:updateEdge",e,t),deleteEdge:e=>l("designer:deleteEdge",e)},wiki:{resolve:(e,t)=>l("wiki:resolve",e,t),backlinks:e=>l("wiki:backlinks",e),outgoing:e=>l("wiki:outgoing",e),quickIndex:e=>l("wiki:quickIndex",e),entityPath:e=>l("wiki:entityPath",e),rebuild:()=>l("wiki:rebuild"),resolveKeys:e=>l("wiki:resolveKeys",e),linkCounts:e=>l("wiki:linkCounts",e),getGraph:e=>l("wiki:getGraph",e),renameTarget:(e,t,r)=>l("wiki:renameTarget",e,t,r)},timeline:{getAll:e=>l("timeline:getAll",e),create:(e,t,r)=>l("timeline:create",e,t,r),getModuleTimelines:e=>l("timeline:getModuleTimelines",e),createModuleTimeline:(e,t,r)=>l("timeline:createModuleTimeline",e,t,r),update:(e,t,r)=>l("timeline:update",e,t,r),delete:e=>l("timeline:delete",e),getOrCreateDate:(e,t,r,o,n)=>l("timeline:getOrCreateDate",e,t,r,o,n),getEvents:e=>l("timeline:getEvents",e),createEvent:(e,t,r,o,n,a)=>l("timeline:createEvent",e,t,r,o,n,a),updateEvent:(e,t,r,o,n,a)=>l("timeline:updateEvent",e,t,r,o,n,a),updateEventStory:(e,t)=>l("timeline:updateEventStory",e,t),updateEventIcon:(e,t,r)=>l("timeline:updateEventIcon",e,t,r),deleteEvent:e=>l("timeline:deleteEvent",e),getEventTags:e=>l("timeline:getEventTags",e),setEventTags:(e,t)=>l("timeline:setEventTags",e,t),addEventTag:(e,t)=>l("timeline:addEventTag",e,t),removeEventTag:(e,t)=>l("timeline:removeEventTag",e,t)},map:{getAll:e=>l("map:getAll",e),create:(e,t,r)=>l("map:create",e,t,r),update:(e,t,r)=>l("map:update",e,t,r),delete:e=>l("map:delete",e),getAreas:e=>l("map:getAreas",e),createArea:(e,t,r)=>l("map:createArea",e,t,r),updateArea:(e,t,r)=>l("map:updateArea",e,t,r),deleteArea:e=>l("map:deleteArea",e),getPoints:e=>l("map:getPoints",e),setPoints:(e,t)=>l("map:setPoints",e,t),getModuleMap:e=>l("map:getModuleMap",e),getOrCreateModuleMap:e=>l("map:getOrCreateModuleMap",e)},hashtag:{getAll:()=>l("hashtag:getAll"),create:(e,t)=>l("hashtag:create",e,t),update:(e,t,r)=>l("hashtag:update",e,t,r),delete:e=>l("hashtag:delete",e),getObjectsByTag:(e,t)=>l("hashtag:getObjectsByTag",e,t),getEventsByTag:(e,t)=>l("hashtag:getEventsByTag",e,t)},color:{getAll:()=>l("color:getAll"),add:e=>l("color:add",e),markUsed:e=>l("color:markUsed",e),getRecent:()=>l("color:getRecent"),delete:e=>l("color:delete",e),getSymbolCollection:()=>l("color:getSymbolCollection")},window:{minimize:()=>l("window:minimize"),toggleMaximize:()=>l("window:toggleMaximize"),close:()=>l("window:close"),openNexus:e=>l("window:openNexus",e),openWelcome:()=>l("window:openWelcome"),openNexusReplace:e=>l("window:openNexusReplace",e),openBuilderTab:(e,t)=>l("window:openBuilderTab",e,t),getId:()=>l("window:getId"),moveTabToMain:(e,t)=>l("window:moveTabToMain",e,t),onTabInbound:e=>oi.on("builder:tabInbound",(t,r,o)=>e(r,o))}});Oe();pe();zt();A();Te();Vt();var FE="/ddx/downloads",Ti="/ddx/uploads",on=new Set,Ni=0,xE=e=>String(e||"dracondex").replace(/[\\/:*?"<>|]/g,"_");function ME(e,t={}){let r=xE(We(t.defaultPath||"dracondex-export")),o=nt(FE,`${Ni++}-${r}`);return on.add(o),Promise.resolve({canceled:!1,filePath:o})}function UE(e){let t=(e||[]).flatMap(r=>r.extensions||[]).filter(r=>r&&r!=="*");return t.length?t.map(r=>`.${r}`).join(","):""}function vE({directory:e=!1,multi:t=!1,accept:r=""}={}){return new Promise(o=>{let n=document.createElement("input");n.type="file",e&&(n.webkitdirectory=!0),t&&(n.multiple=!0),r&&!e&&(n.accept=r),n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n);let a=!1,s=i=>{a||(a=!0,n.remove(),o(i))};n.addEventListener("change",()=>s([...n.files])),n.addEventListener("cancel",()=>s([])),window.addEventListener("focus",()=>setTimeout(()=>{n.files?.length||s([])},1500),{once:!0}),n.click()})}async function jE(e,t={}){let r=t.properties||[],o=r.includes("openDirectory"),n=await vE({directory:o,multi:r.includes("multiSelections"),accept:UE(t.filters)});if(!n.length)return{canceled:!0,filePaths:[]};let a=`${Date.now()}-${Ni++}`,s=[],i=null;for(let u of n){let E=u.webkitRelativePath||u.name,g=nt(Ti,a,E);$.write(g,new Uint8Array(await u.arrayBuffer())),s.push(g),o&&!i&&(i=nt(Ti,a,E.split("/")[0]))}return{canceled:!1,filePaths:o?[i]:s}}async function PE(e){let t=$.read(e);if(!t)return;on.delete(e);let r=We(e).replace(/^\d+-/,""),o=r.includes(".")?r.slice(r.lastIndexOf(".")):"";if(!globalThis.__ddxForceDownloadLink&&typeof window.showSaveFilePicker=="function")try{let i=await(await window.showSaveFilePicker({suggestedName:r,types:o?[{description:`${o.slice(1).toUpperCase()} file`,accept:{"application/octet-stream":[o]}}]:[]})).createWritable();await i.write(t),await i.close(),$.remove(e,!1);return}catch(s){if(s&&s.name==="AbortError"){$.remove(e,!1);return}}let n=URL.createObjectURL(new Blob([t],{type:"application/octet-stream"})),a=document.createElement("a");a.href=n,a.download=/^[\x20-\x7e]+$/.test(r)?r:`dracondex-export-${new Date().toISOString().slice(0,10)}${o}`,a.rel="noopener",document.body.appendChild(a),a.click(),setTimeout(()=>{a.remove(),URL.revokeObjectURL(n)},1e4),$.remove(e,!1)}function gi(){for(let e of[...on])PE(e)}function Ri(e){e._save=ME,e._open=jE}var Ho=new URLSearchParams(location.search);!Ho.has("welcome")&&!Ho.has("nexus")&&(Ho.set("welcome","1"),history.replaceState(null,"",`${location.pathname}?${Ho}`));var iE=Number(new URLSearchParams(location.search).get("nexus"))||null,Xo=e=>{let t=new URL(location.href);return t.search=new URLSearchParams(e).toString(),t.toString()},Ch={"window:minimize":()=>{},"window:toggleMaximize":async()=>{try{return document.fullscreenElement?(await document.exitFullscreen(),!1):(await document.documentElement.requestFullscreen(),!0)}catch{return!1}},"window:close":async()=>{await je(),window.close()},"window:getId":()=>1,"window:openNexus":async e=>{await je(),window.open(Xo({nexus:e}),"_blank")},"window:openNexusReplace":async e=>{await je(),location.href=Xo({nexus:e})},"window:openWelcome":async()=>{await je(),location.href=Xo({welcome:"1"})},"window:openBuilderTab":async(e,t)=>{await je(),window.open(Xo({nexus:e,tab:t,popup:"1"}),"_blank")},"window:moveTabToMain":()=>!1,"update:check":()=>({ok:!0,available:!1,current:"4.13.2"})},Ua,sE=new Promise(e=>{Ua=e}),va=null;globalThis.__ddxInvoke=async(e,t)=>{if(await sE,va)throw va;let r=Ch[e];if(r)return r(...t);let o=Dr.get(e);if(!o)throw new Error(`no IPC handler for ${e}`);try{let n=await o({sender:null},...t);return ja(n)}finally{gi(),bh()}};function ja(e){if(e==null)return e;if(typeof e=="bigint")return Number(e);if(typeof e!="object"||e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(ja);let t={};for(let[r,o]of Object.entries(e))t[r]=ja(o);return t}var Ma=null;function bh(){Ma||(Ma=setTimeout(()=>{Ma=null,je()},300))}async function kh(){await Ya();try{let e=await navigator.storage?.estimate?.();e?.quota&&Ur({total:e.quota,used:e.usage||0})}catch{}if(await Wr(e=>new URL(`vendor/${e}`,document.baseURI).href),Ri(kt),await Promise.resolve().then(()=>Wa(aE(),1)),iE){let{windowNexus:e}=await Promise.resolve().then(()=>Wa(mt(),1));e.set(1,iE)}}kh().then(Ua,e=>{console.error("[dracondex] data layer failed to start:",e),va=e,Ua()});addEventListener("pagehide",()=>{je(),_t()});globalThis.__ddx={vfs:$,persistAll:je,ipcHandlers:Dr,ready:sE};})();
