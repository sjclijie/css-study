(function(){var a=window;try{do if(a=a.parent,a.QZONE&&a.QZONE.FrontPage&&a.g_iUin)break;while(a!=top)}catch(b){}"undefined"==typeof siDomain&&(siDomain=a.siDomain||"qzonestyle.gtimg.cn");g_V=a.g_V||{};g_V.jq=g_V.jq||"1.9.1";g_V.req=g_V.req||"0.0.9"})();
seajs.config({charset:"utf-8",timeout:3E5,debug:0,paths:{v8:"http://"+siDomain+"/qzone/v8","photo.v7":"http://"+siDomain+"/qzone/photo/v7/js",cssBase:"http://"+siDomain,app:"http://"+siDomain+"/qzone/app","mall.v8":"http://"+siDomain+"/qzone/mall/v8"},alias:{jquery:"http://"+siDomain+"/ac/lib/jquery/jquery-"+g_V.jq,"migrate-plugin":"v8/engine/migrate-plugin.js","interface":"v8/core/interface_mini.js",app_engine:"v8/core/app_engine"+(window.g_diffModules&&g_diffModules.engine?g_diffModules.engine:
"")+".js?max_age=72000",changelog_data:"http://"+siDomain+"/qzone/v6/v6_config/changelog_data.js","console-plus":"v8/engine/console-plus/console-plus.js",embeded:"/applib/embeded.js",request:"v8/engine/request/request_"+g_V.req,"app/v8/config/1.0":"http://"+(siDomain||"qzonestyle.gtimg.cn")+"/c/=/qzone/app/v8/config/(.js,_.js,a.js,b.js,c.js,d.js,e.js,f.js,).js"},map:[[/^.+\/lib\/jquery\.js$/,"http://"+siDomain+"/ac/lib/jquery/jquery-"+g_V.jq+".js"]],comboSyntax:["c/=",","],comboIncludes:/\/qzone\/v8/,
comboExcludes:/jquery|app_engine|music|qzone\/v8\/index\/msgboard/,preload:window.isIframe?["jquery","migrate-plugin","console-plus","request"]:"jquery migrate-plugin interface console-plus app_engine request".split(" ")});
/*  |xGv00|023880a0af574aa05ec730af991df754 */
(function(seajs){if(!seajs.Module){return;}
var Module=seajs.Module,FETCHING=Module.STATUS.FETCHING,data=seajs.data||seajs.config.data,comboHash=data.comboHash={},comboVer=data.comboVer||'',maxageHash={'/qzone/v8/core/interface_mini.js':g_V&&g_V.fp||'7200','/qzone/v8/ic/tab_menu.js':g_V&&g_V.ic||'7200','/qzone/v8/ic/feedsglobal.js':g_V&&g_V.ic||'7200'},comboMaxLength=2000,comboExcludes;seajs.config.data=data;seajs.on("load",setComboHash);seajs.on("fetch",setRequestUri);function setComboHash(uris){if(location.search.indexOf('concat_debug_off')!=-1){QZFL.cookie.set('concat_debug',0,'qzone.qq.com','/',1);}
if(location.search.indexOf('concat_debug_on')!=-1||QZFL.cookie.get('concat_debug')==1){QZFL.cookie.set('concat_debug',1,'qzone.qq.com','/',24);return true;}
var len=uris.length;if(len<2){return;}
data.comboSyntax&&(comboSyntax=data.comboSyntax);data.comboMaxLength&&(comboMaxLength=data.comboMaxLength);comboExcludes=data.comboExcludes;comboIncludes=data.comboIncludes;var needComboUris=[];for(var i=0;i<len;i++){var uri=uris[i];if(comboHash[uri]){continue;}
var mod=Module.get(uri);if(mod.status<FETCHING&&(!comboIncludes||comboIncludes.test(uri))&&(!comboExcludes||!comboExcludes.test(uri))&&!isExcluded(uri)&&!isComboUri(uri)){needComboUris.push(uri);}}
if(needComboUris.length>1){paths2hash(uris2paths(needComboUris));}}
function setRequestUri(data){data.requestUri=comboHash[data.uri]||data.uri;if(comboVer){data.requestUri+=comboVer;}}
function uris2paths(uris){return meta2paths(uris2meta(uris));}
function uris2meta(uris){var meta={__KEYS:[]};for(var i=0,len=uris.length;i<len;i++){var parts=uris[i].replace("://","__").split("/");var m=meta;for(var j=0,l=parts.length;j<l;j++){var part=parts[j];if(!m[part]){m[part]={__KEYS:[]};m.__KEYS.push(part);}
m=m[part];}}
return meta;}
function meta2paths(meta){var paths=[];var __KEYS=meta.__KEYS;for(var i=0,len=__KEYS.length;i<len;i++){var part=__KEYS[i],root=part,m=meta[part],KEYS=m.__KEYS,arr;if(KEYS.length){arr=meta2arr(m);for(var j=0,l=arr.length;j<l;j++){arr[j]='/'+arr[j];}
paths.push([root.replace("__","://"),arr]);}}
return paths;}
function meta2arr(meta){var arr=[],__KEYS=meta.__KEYS;for(var i=0,len=__KEYS.length;i<len;i++){var key=__KEYS[i];var r=meta2arr(meta[key]);var m=r.length;if(m){for(var j=0;j<m;j++){arr.push(key+"/"+r[j]);}}
else{arr.push(key);}}
return arr;}
function paths2hash(paths){for(var i=0,len=paths.length;i<len;i++){var path=paths[i];var root=path[0]+"/";var group=files2group(path[1]);for(var j=0,m=group.length;j<m;j++){setHash(root,group[j]);}}
return comboHash;}
function setHash(root,files){var comboPath=root+comboSyntax[0]+files.join(comboSyntax[1]);var exceedMax=comboPath.length>comboMaxLength;for(var k in maxageHash){if(maxageHash.hasOwnProperty(k)){if(comboPath.indexOf(k)>-1&&comboPath.indexOf('?max_age=')<0){comboPath+='?max_age='+maxageHash[k];}}}
if(files.length>1&&exceedMax){var parts=splitFiles(files,comboMaxLength-(root+comboSyntax[0]).length);setHash(root,parts[0]);setHash(root,parts[1]);}
else{if(exceedMax){throw new Error("The combo url is too long: "+comboPath);}
for(var i=0,len=files.length;i<len;i++){comboHash[root+files[i].slice(1)]=comboPath;}}}
function splitFiles(files,filesMaxLength){var sep=comboSyntax[1],s=files[0];for(var i=1,len=files.length;i<len;i++){s+=sep+files[i];if(s.length>filesMaxLength){return[files.splice(0,i),files];}}}
function files2group(files){var group=[];var hash={};for(var i=0,len=files.length;i<len;i++){var file=files[i];var ext=getExt(file);if(ext){(hash[ext]||(hash[ext]=[])).push(file);}}
for(var k in hash){if(hash.hasOwnProperty(k)){group.push(hash[k]);}}
return group;}
function getExt(file){var p=file.lastIndexOf(".");return p>=0?file.substring(p):"";}
function isExcluded(uri){if(comboExcludes){return comboExcludes.test?comboExcludes.test(uri):comboExcludes(uri);}}
function isComboUri(uri){var comboSyntax=data.comboSyntax||["??",","],s1=comboSyntax[0],s2=comboSyntax[1];return s1&&uri.indexOf(s1)>0||s2&&uri.indexOf(s2)>0}})(seajs);/*  |xGv00|0369911efc16a38840ba29ab7e87225b */