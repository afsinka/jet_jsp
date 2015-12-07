/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(a,f,d){(function(){function b(b){a.u.info("Entering _updateAll.");for(var d=!1,c=0;c<b.length&&(d=b[c],d=d.Rc.Qj(d.value),d);c++);a.u.info("_updateAll returns "+(d?"true":"false"));return{hasChanged:d}}function c(b){a.u.info("Start _canEnter.");for(var d=!0,c=Promise.resolve(!0),e=[],g=0;g<b.length;g++){var f=b[g],h=f.Rc.xh(f.value);if(h&&(f=h.canEnter,"function"===typeof f)){var p;try{p=f()}catch(k){return a.u.error("Error when executing canEnter callback: "+
k.message),Promise.resolve([])}if(p&&p.then)c=p;else if(d=p,!d){a.u.info("canEnter is false for state: "+h.id);break}}e.push(c)}return d?Promise.all(e).then(function(d){for(var c=0;c<d.length;c++)if(!d[c])return a.u.info("CanEnter promise at position "+c+" returned false."),[];return b}):Promise.resolve([])}function e(a){return a.substring(0,a.lastIndexOf("/"))}function g(a){var b={};if(a){var d=[],d=a.split("\x26"),c;for(c in d){var e=d[c].split(/=(.+)?/);a=e[0];a.length&&("undefined"===typeof b[a]&&
(b[a]=[]),e=e[1]&&decodeURIComponent(e[1].replace(/\+/g," ")),b[a].push(e))}}return b}function h(){var a;window.location.hash&&0<window.location.hash.length?(a=window.location.hash.replace(/[^#]*#/,""),a=a.replace(x+"/","")):a=window.location.href.replace(v+"/","");return a}function k(a){return a.parent?k(a.parent)+"."+a.name:a.name}function l(a,b){for(var d,c=0;c<a.sg.length;c++){var e=a.sg[c].Rc;if(!e.Uo||e.Uo===b){d=e;break}}return d}function m(a,b){if(b&&0<Object.getOwnPropertyNames(b).length){var d;
d=-1==a.indexOf("?")?"?":"\x26";var c=a,e=JSON.stringify(b),g=encodeURIComponent(e),e=z.ofa(e),f=!1,h="oj_Router\x3d";e.length<=g.length&&(f=!0);h=f?h+("1"+e):h+("0"+g);if(1024<h.length)throw Error("Size of bookmarkable data is too big.");a=c+(d+h)}return a}function n(){a.u.info("Handling popState event with URL: "+window.location.href);for(var b=null,d=0;d<B.sg.length;d++){var c=B.sg[d].Rc;if(B.hf()&&B.hf()===c.Uo){b=c;break}}s(b).then(function(a){if(a)return t(h()).then(function(a){q(a.hasChanged)});
q(!1);return Promise.resolve({hasChanged:!1})}).then(null,function(b){a.u.error("Error while changing state in handlePopState: "+b.message)})}function q(b){a.nb.transitionedToState.dispatch({hasChanged:b})}function p(a,b,d){var c=[];a.parent&&(c=p(a.parent,b+1));var e;"undefined"===typeof d?(d=a.TP())&&(e=d.id):e=d.id;e===a.Bj&&0===b&&(e=null);c.push({Rc:a,aC:e});return c}function r(b,d){var c=!0,e=Promise.resolve(!0),g=b.xh(b.hf());if(g){for(var f=0;f<b.sg.length;f++)if(c=r(b.sg[f].Rc,d),!c)return!1;
f=g.fC&&g.fC.canExit?g.fC.canExit:g.canExit;if("function"===typeof f){var h;try{h=f()}catch(p){return a.u.error("Error when executing canExit callback: "+p.message),!1}h&&h.then?e=h:(h||a.u.info("canExit is false for state "+g.id),c=h)}}d.push(e);return c}function s(b){if(!b)return Promise.resolve(!0);var d=[];return(b=r(b,d))?Promise.all(d).then(function(b){for(var d=0;d<b.length;d++)if(!b[d])return a.u.info("CanExit promise at position "+d+" returned false."),!1;return!0}):Promise.resolve(b)}function t(d){var e;
try{var g=d;d={};var f=g.split("?")[1]||"";a.u.info("Parsing: "+g);var g=w.aw(g),h=f.split("oj_Router\x3d")[1];if(h){var f=h=h.split("\x26")[0],p=f.charAt(0),f=f.slice(1);if("0"===p)f=decodeURIComponent(f);else if("1"===p)f=z.Efa(f);else throw Error("Error retrieving bookmarkable data. Format is invalid");d=JSON.parse(f)}if(a.u.option("level")===a.u.bx){a.u.info("Bookmarkable data: ");for(var l in d)a.u.info("   { router: "+l+", value: "+d[l])}l=[];p=[];l=w.parse(g);for(g=0;g<l.length;g++){var r=
l[g],m=d[r.Rc.name];m&&(r.Rc.Fi=m);r.value!==r.Rc.hf()&&p.push(r)}if(a.u.option("level")===a.u.bx)for(a.u.info("Potential changes are: "),r=0;r<p.length;r++)a.u.info("   { router: "+k(p[r].Rc)+", value: "+p[r].value+"}");e=p}catch(s){return Promise.reject(s)}return c(e).then(b)}var v,x,u=function(){var a="",b=window.location.pathname;-1!==b.indexOf(".html",b.length-5)&&(a=b.split("/").pop());return a}(),w,z={Z6:String.fromCharCode,JT:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
w7:function(a,b){var d;z.Ot||(z.Ot={});if(!z.Ot[a])for(z.Ot[a]={},d=0;d<a.length;d++)z.Ot[a][a[d]]=d;return z.Ot[a][b]},ofa:function(a){return null==a?"":z.q5(a,6,function(a){return z.JT.charAt(a)})},Efa:function(a){return null==a?"":""==a?null:z.s6(a.length,32,function(b){return z.w7(z.JT,a.charAt(b))})},q5:function(a,b,d){if(null==a)return"";var c,e,g={},f={},h="",p="",k="",l=2,r=3,m=2,s="",n=0,t=0,q;for(q=0;q<a.length;q+=1)if(h=a[q],Object.prototype.hasOwnProperty.call(g,h)||(g[h]=r++,f[h]=!0),
p=k+h,Object.prototype.hasOwnProperty.call(g,p))k=p;else{if(Object.prototype.hasOwnProperty.call(f,k)){if(256>k.charCodeAt(0)){for(c=0;c<m;c++)n<<=1,t==b-1?(t=0,s+=d(n),n=0):t++;e=k.charCodeAt(0);for(c=0;8>c;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1}else{e=1;for(c=0;c<m;c++)n=n<<1|e,t==b-1?(t=0,s+=d(n),n=0):t++,e=0;e=k.charCodeAt(0);for(c=0;16>c;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1}l--;0==l&&(l=Math.pow(2,m),m++);delete f[k]}else for(e=g[k],c=0;c<m;c++)n=n<<1|e&1,t==b-1?(t=0,
s+=d(n),n=0):t++,e>>=1;l--;0==l&&(l=Math.pow(2,m),m++);g[p]=r++;k=String(h)}if(""!==k){if(Object.prototype.hasOwnProperty.call(f,k)){if(256>k.charCodeAt(0)){for(c=0;c<m;c++)n<<=1,t==b-1?(t=0,s+=d(n),n=0):t++;e=k.charCodeAt(0);for(c=0;8>c;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1}else{e=1;for(c=0;c<m;c++)n=n<<1|e,t==b-1?(t=0,s+=d(n),n=0):t++,e=0;e=k.charCodeAt(0);for(c=0;16>c;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1}l--;0==l&&(l=Math.pow(2,m),m++);delete f[k]}else for(e=g[k],c=0;c<
m;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1;l--;0==l&&m++}e=2;for(c=0;c<m;c++)n=n<<1|e&1,t==b-1?(t=0,s+=d(n),n=0):t++,e>>=1;for(;;)if(n<<=1,t==b-1){s+=d(n);break}else t++;return s},s6:function(a,b,d){for(var c=[],e=4,g=4,f=3,h="",p="",k,l,r,m,s,n=z.Z6,t={val:d(0),position:b,index:1},p=0;3>p;p+=1)c[p]=p;h=0;r=Math.pow(2,2);for(m=1;m!=r;)l=t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;switch(h){case 0:h=0;r=Math.pow(2,8);for(m=1;m!=r;)l=
t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;s=n(h);break;case 1:h=0;r=Math.pow(2,16);for(m=1;m!=r;)l=t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;s=n(h);break;case 2:return""}for(k=p=c[3]=s;;){if(t.index>a)return"";h=0;r=Math.pow(2,f);for(m=1;m!=r;)l=t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;switch(s=h){case 0:h=0;r=Math.pow(2,
8);for(m=1;m!=r;)l=t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;c[g++]=n(h);s=g-1;e--;break;case 1:h=0;r=Math.pow(2,16);for(m=1;m!=r;)l=t.val&t.position,t.position>>=1,0==t.position&&(t.position=b,t.val=d(t.index++)),h|=(0<l?1:0)*m,m<<=1;c[g++]=n(h);s=g-1;e--;break;case 2:return p}0==e&&(e=Math.pow(2,f),f++);if(c[s])h=c[s];else if(s===g)h=k+k[0];else return null;p+=h;c[g++]=k+h[0];e--;k=h;0==e&&(e=Math.pow(2,f),f++)}}};a.nb=function(a,b){var d=
this;this.Uo=b?b.hf():void 0;this.sg=[];this.Fi=void 0;this.hf=f.observable();this.Vm=null;this.Bj=void 0;this.TP=f.pureComputed(function(){return f.ignoreDependencies(d.xh,d,[d.hf()])});this.q6=f.pureComputed(function(){var a,b=f.ignoreDependencies(d.xh,d,[d.hf()]);b&&(a=b.value);return a});this.aba=Object.create(null,{name:{value:f.pureComputed(function(){var a,b=this.xh(this.hf());b&&((a=b.value)&&"string"===typeof a||(a=b.id));return a},d)},params:{value:d},lifecycleListener:{value:Object.create(null,
{attached:{value:function(a){var b=a.valueAccessor().params.currentState();b&&(b.fC=a.viewModel)}}})}});Object.defineProperties(this,{parent:{value:b,enumerable:!0},name:{value:a,enumerable:!0}})};o_("Router",a.nb,a);Object.defineProperties(a.nb.prototype,{states:{get:function(){return this.Vm},enumerable:!0},stateId:{get:function(){return this.hf},enumerable:!0},currentState:{get:function(){return this.TP},enumerable:!0},currentValue:{get:function(){return this.q6},enumerable:!0},defaultStateId:{get:function(){return this.Bj},
set:function(a){this.Bj=a},enumerable:!0},moduleConfig:{get:function(){return this.aba},enumerable:!0}});a.nb.prototype.KX=function(b){a.j.il(b);b=b.replace(a.Ba.JD,"");for(var d=0;d<this.sg.length;d++){var c=this.sg[d].Rc;if(c.name===b)throw Error('Invalid router name "'+b+'", it already exists.');if(c.Uo===this.hf())throw Error('Cannot create more than one child router for parent state id "'+c.Uo+'".');}d=new a.nb(b,this);this.sg.push({name:b,Rc:d});return d};a.b.i("Router.prototype.createChildRouter",
{KX:a.nb.prototype.KX});a.nb.prototype.xh=function(b){var d;if(b&&this.Vm){a.j.il(b);for(var c=0;c<this.Vm.length;c++){var e=this.Vm[c];if(e.id===b){d=e;break}}}return d};a.nb.prototype.Qj=function(b){var d=!1;b&&!this.xh(b)?a.u.error('State id: "'+b+'" is not a valid state for '+k(this)):(a.u.info("Updating state of "+k(this)+" to "+b),(d=this.xh(this.hf()))&&(d=d.exit)&&d.call(this),this.hf(b),d=!0,b&&(b=this.xh(b))&&(b=b.enter)&&b.call(this));return d};a.nb.prototype.GX=function(b){this.hf(void 0);
delete this.Bj;"function"===typeof b?(this.Vm=null,this.xh=b):(this.Vm=[],delete this.xh,Object.keys(b).forEach(function(d){var c=b[d];this.Vm.push(new a.Wp(d,c,this));"boolean"===typeof c.isDefault&&c.isDefault&&(this.Bj=d)},this));return this};a.b.i("Router.prototype.configure",{GX:a.nb.prototype.GX});a.nb.prototype.NY=function(a){return this.xh(a)};a.b.i("Router.prototype.getState",{NY:a.nb.prototype.NY});a.nb.prototype.go=function(b){function d(b){if(b)return t(g.replace(/^\//,"")).then(function(b){if(b.hasChanged){var d=
v+g;a.u.info("Changing URL to "+d);history.pushState(null,"",d)}q(b.hasChanged);return b});q(!1);return Promise.resolve({hasChanged:!1})}var c,e=!0;if(b)if("string"===typeof b){if(0<b.length){c=this.xh(b);if(!c)return q(!1),Promise.reject(Error('State id "'+b+'" does not exist.'));e=!1;a.u.info("Going to state "+b+" on router "+k(this))}}else return q(!1),Promise.reject(Error("Invalid object type for state id."));if(e)if(this.Bj)c=this.xh(this.Bj),a.u.info("Going to default state "+c.id+" on router "+
k(this));else return a.u.info("Undefined state id with no default id on router "+k(this)),q(!1),Promise.resolve({hasChanged:!1});b=p(this,0,c);var g=w.AX(b);b="/"+w.aw(h()).replace(u,"");if(w.aw(g)!==b)return a.u.info("New URL is different."),s(this).then(d);q(!1);return Promise.resolve({hasChanged:!1})};a.b.i("Router.prototype.go",{go:a.nb.prototype.go});a.nb.prototype.G_=function(a){this.Fi=a;a={};for(var b=this;b;)b.Fi&&(a[b.name]=b.Fi),b=b.parent;for(var b=this,d;b;){for(var c=0;c<b.sg.length;c++){var e=
b.sg[c].Rc;if(b.hf()&&b.hf()===e.Uo){e.Fi&&(a[e.name]=e.Fi);d=e;break}}b=d;d=void 0}d=v+"/"+w.aw(h());d=m(d,a);history.replaceState(null,"",d)};a.b.i("Router.prototype.store",{G_:a.nb.prototype.G_});a.nb.prototype.n_=function(){return this.Fi};a.b.i("Router.prototype.retrieve",{n_:a.nb.prototype.n_});a.nb.prototype.bw=function(){for(;0<this.sg.length;)this.sg[0].Rc.bw();if(this.parent){for(var b=this.parent.sg,d=0;d<b.length;d++)if(b[d].Rc.name===this.name){b.splice(d,1);break}delete this.Uo}else x=
v="",w={},window.removeEventListener("popstate",n),a.nb.transitionedToState.removeAll(),a.nb.BB=!1;this.Vm=null;delete this.Bj;delete this.Fi};a.b.i("Router.prototype.dispose",{bw:a.nb.prototype.bw});var B=new a.nb("root",void 0);Object.defineProperties(a.nb,{rootInstance:{value:B,enumerable:!0},transitionedToState:{value:new d.Signal,enumerable:!0}});a.nb.ac={};o_("Router.defaults",a.nb.ac,a);Object.defineProperties(a.nb.ac,{urlAdapter:{get:function(){w||(w=new a.nb.rL);return w},set:function(b){if(a.nb.BB)throw Error("Incorrect operation. Cannot change URL adapter after calling sync().");
w=b},enumerable:!0,cha:!1},baseUrl:{get:function(){v||(v=e(window.location.href.split("#")[0]),x=e(window.location.pathname));return v},set:function(b){if(a.nb.BB)throw Error("Incorrect operation. Cannot change base URL after calling sync().");v=b.replace(/\/$/,"");x=v.replace(window.location.protocol+"//"+window.location.host,"")},enumerable:!0,cha:!1}});a.nb.kL=function(){a.nb.BB||(w||(w=new a.nb.rL),v||(v=e(window.location.href.split("#")[0]),x=e(window.location.pathname)),window.addEventListener("popstate",
n,!1),a.u.info("Initializing rootInstance."),a.u.info("Base URL is "+v),a.u.info("This page is "+u),a.u.info("Current URL is "+window.location.href),a.nb.BB=!0);return t(h()).then(function(a){q(a.hasChanged);return a})};o_("Router.sync",a.nb.kL,a);a.nb.rL=function(){this.parse=function(a){var b=0,d=B;a=a.split("/");var c=[];do{var e=a[b++];e&&(0===e.length||/\.html$/i.test(e))&&(e=void 0);e=e||d.Bj;c.push({value:e,Rc:d});d=l(d,e)}while(d);return c};this.AX=function(b){var d="",c={};b.forEach(function(a){a.aC&&
(d+="/"+a.aC);a.Rc.Ria&&(c[a.Rc.name]=a.Rc.Fi)});""===d&&(d="/"+u);try{d=m(d,c)}catch(e){a.u.error("Error while building URL: "+e)}return d};this.aw=function(a){return a.split("?")[0]};this.GY=function(a){var b=a.indexOf("?"),d=null;-1!=b&&(d=a.substr(b+1));return g(d)}};o_("Router.urlPathAdapter",a.nb.rL,a);a.nb.Oha=function(){this.parse=function(a){a=this.GY(a);var b=B,d=[];do{var c=a[b.name];c&&(c=c[0],delete a[b.name]);c=c||b.Bj;d.push({value:c,Rc:b});b=l(b,c)}while(b);return d};this.AX=function(b){var d=
"/"+u,c={},e="?";b.forEach(function(a){a.aC&&(d+=e+a.Rc.name+"\x3d"+a.aC,e="\x26");a.Rc.Fi&&(c[a.Rc.name]=a.Rc.Fi)});try{d=m(d,c)}catch(g){a.u.error("Error while building URL: "+g)}return d};this.aw=function(a){var b=a.indexOf("oj_Router\x3d");return-1!=b?a.substr(0,b-1):a};this.GY=function(a){var b=a.indexOf("?"),d=null,d={};-1!=b&&(d=a.substr(b+1),d=g(d));return d}};o_("Router.urlParamAdapter",a.nb.Oha,a);return B})();(function(){a.Wp=function(b,d,e){d=d||{};a.j.il(b);b=encodeURIComponent(b.replace(a.Ba.JD,
""));d.canEnter&&a.j.$r(d.canEnter);d.enter&&a.j.$r(d.enter);d.canExit&&a.j.$r(d.canExit);d.exit&&a.j.$r(d.exit);this.tA=e;this.fC=void 0;Object.defineProperties(this,{id:{value:b,enumerable:!0},value:{value:d.value,writable:!0,enumerable:!0},label:{value:d.label,writable:!0,enumerable:!0},canEnter:{value:d.canEnter,writable:!0,enumerable:!0},enter:{value:d.enter,writable:!0,enumerable:!0},canExit:{value:d.canExit,writable:!0,enumerable:!0},exit:{value:d.exit,writable:!0,enumerable:!0}})};o_("RouterState",
a.Wp,a);a.Wp.prototype.go=function(){return this.tA?this.tA.go(this.id):(a.nb.transitionedToState.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};a.b.i("RouterState.prototype.go",{go:a.Wp.prototype.go});a.Wp.prototype.mZ=function(){if(!this.tA)throw Error("Router is not defined for this RouterState object.");return this.tA.hf()===this.id};a.b.i("RouterState.prototype.isCurrent",{mZ:a.Wp.prototype.mZ})})()});