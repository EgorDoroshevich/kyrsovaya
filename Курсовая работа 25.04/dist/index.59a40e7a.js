// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6fRhY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElem", ()=>getElem);
parcelHelpers.export(exports, "getElems", ()=>getElems);
parcelHelpers.export(exports, "closePopup", ()=>closePopup);
parcelHelpers.export(exports, "inputUsers", ()=>inputUsers);
parcelHelpers.export(exports, "outLogo", ()=>outLogo);
parcelHelpers.export(exports, "outText", ()=>outText);
parcelHelpers.export(exports, "outName", ()=>outName);
parcelHelpers.export(exports, "form", ()=>form);
parcelHelpers.export(exports, "logoUser", ()=>logoUser);
parcelHelpers.export(exports, "textUser", ()=>textUser);
parcelHelpers.export(exports, "nameUser", ()=>nameUser);
parcelHelpers.export(exports, "total1", ()=>total1);
parcelHelpers.export(exports, "total2", ()=>total2);
parcelHelpers.export(exports, "total3", ()=>total3);
parcelHelpers.export(exports, "cardData", ()=>cardData);
parcelHelpers.export(exports, "textar", ()=>textar);
parcelHelpers.export(exports, "author", ()=>author);
parcelHelpers.export(exports, "array", ()=>array);
parcelHelpers.export(exports, "base", ()=>base);
parcelHelpers.export(exports, "done", ()=>done);
parcelHelpers.export(exports, "GetDataUser", ()=>GetDataUser);
parcelHelpers.export(exports, "addValid", ()=>addValid);
parcelHelpers.export(exports, "removeValid", ()=>removeValid);
parcelHelpers.export(exports, "popupValid", ()=>popupValid);
parcelHelpers.export(exports, "clearData", ()=>clearData);
var _maketodoJs = require("./maketodo.js");
var _counterJs = require("./counter.js");
var _doneJs = require("./done.js");
var _progressJs = require("./progress.js");
function getElem(elem) {
    return document.querySelector(elem);
}
function getElems(elems) {
    return document.querySelectorAll(elems);
}
// date
let datanow = document.querySelector(".datanow");
function setDate() {
    let date = new Date();
    datanow.innerHTML = `${addDate(date.getDate())}.${addDate(date.getMonth() + 1)}.${addDate(date.getFullYear())}`;
}
function addDate(num) {
    if (num >= 1 && num <= 9) return "0" + num;
    else return num;
}
setDate();
// popup
let link = getElem(".link");
let popup = getElem(".popup");
let exit = getElem(".popup__close");
link.addEventListener("click", ()=>{
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
});
function closePopup() {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}
exit.addEventListener("click", closePopup);
let inputUsers = getElems(".popup__input");
let outLogo = getElem(".out__logo");
let outText = getElem(".out__text");
let outName = getElem(".out__name");
let form = getElem("form");
let logoUser = form.elements.logoUser;
let textUser = form.elements.textUser;
let nameUser = form.elements.nameUser;
let total1 = getElem(".total-crad-make");
let total2 = getElem(".total-crad-progress");
let total3 = getElem(".total-crad-done");
let cardData = getElem(".popup__card__data");
let textar = getElem(".textar");
let author = getElem(".author__name");
let array = JSON.parse(localStorage.getItem("array")) || [];
let base = JSON.parse(localStorage.getItem("base")) || [];
let done = JSON.parse(localStorage.getItem("done")) || [];
function GetDataUser(logo, text, name) {
    this.logo = logo;
    this.text = text;
    this.name = name;
    this.status = false;
}
form.addEventListener("submit", (0, _maketodoJs.getData));
(0, _counterJs.counter)();
(0, _counterJs.counter2)();
(0, _counterJs.counter3)();
(0, _maketodoJs.showCard)(array);
(0, _progressJs.progCard)(base);
(0, _doneJs.doneCard)(done);
function addValid(input) {
    let parent = input.parentNode;
    parent.classList.add("error");
}
function removeValid(input) {
    let parent = input.parentNode;
    if (parent.classList.contains("error")) parent.classList.remove("error");
}
const popupValid = {
    topic: "Ваша тема введена некоректно",
    discription: "Введите суть вашего вопроса",
    name: "Ваше имя введено некоректно",
    inputTop: "Поле не должно быть пустым"
};
function clearData(elems) {
    elems.forEach((elem)=>{
        elem.value = "";
    });
}

},{"./maketodo.js":"3bnQv","./counter.js":"g2H6y","./done.js":"5amUd","./progress.js":"63XOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bnQv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "showCard", ()=>showCard);
parcelHelpers.export(exports, "addCard", ()=>addCard);
parcelHelpers.export(exports, "moveCard", ()=>moveCard);
parcelHelpers.export(exports, "delCard", ()=>delCard);
var _appJs = require("./app.js");
var _localJs = require("./local.js");
var _counterJs = require("./counter.js");
var _progressJs = require("./progress.js");
function getData(e) {
    e.preventDefault();
    let data = new (0, _appJs.GetDataUser)((0, _appJs.logoUser).value, textUser.value, (0, _appJs.nameUser).value);
    (0, _appJs.cardData).innerHTML = "";
    (0, _appJs.author).innerHTML = "";
    (0, _appJs.removeValid)((0, _appJs.logoUser));
    (0, _appJs.removeValid)((0, _appJs.nameUser));
    if ((0, _appJs.logoUser).value == "") {
        (0, _appJs.addValid)((0, _appJs.logoUser));
        (0, _appJs.cardData).textContent = (0, _appJs.popupValid).inputTop;
    } else if ((0, _appJs.nameUser).value == "") {
        (0, _appJs.addValid)((0, _appJs.nameUser));
        (0, _appJs.author).textContent = (0, _appJs.popupValid).inputTop;
    } else {
        (0, _appJs.array).push(data);
        (0, _localJs.setData)();
        (0, _appJs.clearData)([
            (0, _appJs.logoUser),
            textUser,
            (0, _appJs.nameUser)
        ]);
        (0, _appJs.closePopup)();
        showCard();
        (0, _counterJs.counter)();
    }
}
function showCard() {
    (0, _appJs.outLogo).innerHTML = "";
    (0, _appJs.array).forEach((obj, idx)=>{
        (0, _appJs.outLogo).innerHTML += addCard(obj, idx);
    });
    let btns = (0, _appJs.getElems)(".user__add");
    let btnsDel = (0, _appJs.getElems)(".user__delete");
    moveCard(btns);
    delCard(btnsDel);
}
function addCard(obj, idx) {
    return `
   <div class = "card__user__name" data-cardid ="${idx}">
   <p class = "first__tittle">${obj.logo}</p>
   <p class = "second__tittle">${obj.text}</p>
   <p class = "therd__tittle">${obj.name}</p>
   <a class = "user__add fa-regular fa-turn-down-right">in progress</a>
   <a class = "user__delete  fa-solid fa-trash"></a>
   </div>
    `;
}
function moveCard(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            (0, _appJs.array).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    (0, _appJs.base).push(obj);
                    (0, _appJs.array).splice(idx, 1);
                    e.target.parentElement.remove();
                    (0, _localJs.progData)();
                    showCard();
                    (0, _progressJs.progCard)();
                    (0, _counterJs.counter)();
                    (0, _localJs.removeItem)();
                }
            });
            console.log((0, _appJs.array));
            console.log((0, _appJs.base));
        });
    });
}
function delCard(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            (0, _appJs.array).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.status = false;
                    (0, _appJs.array).splice(idx, 1);
                    e.target.parentElement.remove();
                    showCard();
                    (0, _counterJs.counter)();
                    (0, _localJs.removeItem)();
                }
            });
        });
    });
}

},{"./app.js":"8lRBv","./local.js":"fHpqR","./counter.js":"g2H6y","./progress.js":"63XOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHpqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setData", ()=>setData);
parcelHelpers.export(exports, "progData", ()=>progData);
parcelHelpers.export(exports, "doneData", ()=>doneData);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
parcelHelpers.export(exports, "removeProg", ()=>removeProg);
parcelHelpers.export(exports, "removeDone", ()=>removeDone);
var _app = require("./app");
const setData = ()=>{
    let arr = JSON.stringify((0, _app.array));
    localStorage.setItem("array", arr);
};
const progData = ()=>{
    let arr = JSON.stringify((0, _app.base));
    localStorage.setItem("base", arr);
};
const doneData = ()=>{
    let arr = JSON.stringify((0, _app.done));
    localStorage.setItem("done", arr);
};
const removeItem = ()=>{
    localStorage.removeItem("array");
    setData();
};
const removeProg = ()=>{
    localStorage.removeItem("base");
    progData();
};
const removeDone = ()=>{
    localStorage.removeItem("done");
    doneData();
};

},{"./app":"8lRBv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g2H6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "counter", ()=>counter);
parcelHelpers.export(exports, "counter2", ()=>counter2);
parcelHelpers.export(exports, "counter3", ()=>counter3);
var _appJs = require("./app.js");
function counter() {
    (0, _appJs.total1).innerHTML = "0";
    for(let i = 0; i < (0, _appJs.array).length; i++)if ((0, _appJs.array).length == 0) (0, _appJs.total1).innerHTML = 0;
    else (0, _appJs.total1).innerHTML = i + 1;
}
function counter2() {
    (0, _appJs.total2).innerHTML = "0";
    for(let i = 0; i < (0, _appJs.base).length; i++)if ((0, _appJs.base).length == 0) (0, _appJs.total2).innerHTML = 0;
    else (0, _appJs.total2).innerHTML = i + 1;
}
function counter3() {
    (0, _appJs.total3).innerHTML = "0";
    for(let i = 0; i < (0, _appJs.done).length; i++)if ((0, _appJs.done).length == 0) (0, _appJs.total3).innerHTML = 0;
    else (0, _appJs.total3).innerHTML = i + 1;
}

},{"./app.js":"8lRBv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63XOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progCard", ()=>progCard);
parcelHelpers.export(exports, "addProg", ()=>addProg);
parcelHelpers.export(exports, "backCard", ()=>backCard);
parcelHelpers.export(exports, "delProg", ()=>delProg);
parcelHelpers.export(exports, "addDone", ()=>addDone);
var _localJs = require("./local.js");
var _appJs = require("./app.js");
var _maketodoJs = require("./maketodo.js");
var _doneJs = require("./done.js");
var _counterJs = require("./counter.js");
function progCard() {
    (0, _appJs.outText).innerHTML = "";
    (0, _appJs.base).forEach((obj, idx)=>{
        (0, _appJs.outText).innerHTML += addProg(obj, idx);
    });
    let btns = (0, _appJs.getElems)(".user__back");
    let btnsDel = (0, _appJs.getElems)(".user__del");
    let btnsDone = (0, _appJs.getElems)(".user__done");
    (0, _counterJs.counter2)();
    backCard(btns);
    delProg(btnsDel);
    addDone(btnsDone);
}
function addProg(obj, idx) {
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <p class = "logo__card">${obj.logo}</p>
    <p class="user__title__level">${obj.text}</p>
    <p class="user__name">${obj.name}</p>
    <a class = "user__back fa-solid fa-reply"></a>
    <a class = "user__del fa-solid fa-trash"></a>
    <a class = "user__done fa-solid fa-pen-nib"> in done </a>
    </div>`;
}
function backCard(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            (0, _appJs.base).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    (0, _appJs.array).push(obj);
                    (0, _appJs.base).splice(idx, 1);
                    e.target.parentElement.remove();
                    (0, _localJs.removeProg)();
                    (0, _localJs.setData)();
                    progCard();
                    (0, _maketodoJs.showCard)();
                    (0, _counterJs.counter2)();
                    (0, _counterJs.counter)();
                }
            });
        });
    });
}
function delProg(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            (0, _appJs.base).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.status = false;
                    (0, _appJs.base).splice(idx, 1);
                    e.target.parentElement.remove();
                    progCard();
                    (0, _counterJs.counter2)();
                    (0, _localJs.removeProg)();
                }
            });
        });
    });
}
function addDone(btnsDone) {
    btnsDone.forEach((btnDone)=>{
        btnDone.addEventListener("click", (e)=>{
            (0, _appJs.base).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.status = true;
                    (0, _appJs.done).push(obj);
                    (0, _appJs.base).splice(idx, 1);
                    e.target.parentElement.remove();
                    (0, _localJs.removeProg)();
                    (0, _localJs.doneData)();
                    progCard();
                    (0, _doneJs.doneCard)();
                    (0, _counterJs.counter3)();
                }
            });
        });
    });
}

},{"./local.js":"fHpqR","./app.js":"8lRBv","./maketodo.js":"3bnQv","./done.js":"5amUd","./counter.js":"g2H6y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5amUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doneCard", ()=>doneCard);
parcelHelpers.export(exports, "addUserDone", ()=>addUserDone);
parcelHelpers.export(exports, "backProg", ()=>backProg);
parcelHelpers.export(exports, "delDone", ()=>delDone);
var _progressJs = require("./progress.js");
var _counterJs = require("./counter.js");
var _appJs = require("./app.js");
var _localJs = require("./local.js");
function doneCard() {
    (0, _appJs.outName).innerHTML = "";
    (0, _appJs.done).forEach((obj, idx)=>{
        (0, _appJs.outName).innerHTML += addUserDone(obj, idx);
    });
    let btns = (0, _appJs.getElems)(".back__progress");
    let btnsDel = (0, _appJs.getElems)(".gelete__done");
    (0, _counterJs.counter3)();
    backProg(btns);
    delDone(btnsDel);
}
function addUserDone(obj, idx) {
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <p class="user__tittle">${obj.logo}</p>
    <p class="user__title__level">${obj.text}</p>
    <p class="user__age">${obj.name}</p>
    <a class = "back__progress fa-solid fa-reply"></a>
    <a class = "gelete__done  fa-solid fa-trash"></a>
    </div>`;
}
function backProg(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            (0, _appJs.done).forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.statys = true;
                    (0, _appJs.base).push(obj);
                    (0, _appJs.done).splice(idx, 1);
                    e.target.parentElement.remove();
                    (0, _localJs.removeDone)();
                    (0, _localJs.progData)();
                    doneCard();
                    (0, _progressJs.progCard)();
                    (0, _counterJs.counter3)();
                }
            });
        });
    });
}
function delDone(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            (0, _appJs.done).forEach((obj, idx)=>{
                obj.status = true;
                (0, _appJs.done).splice(idx, 1);
                e.target.parentElement.remove();
                (0, _localJs.removeDone)();
                doneCard();
                (0, _counterJs.counter3)();
            });
        });
    });
}

},{"./progress.js":"63XOp","./counter.js":"g2H6y","./app.js":"8lRBv","./local.js":"fHpqR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6fRhY","8lRBv"], "8lRBv", "parcelRequire50f7")

//# sourceMappingURL=index.59a40e7a.js.map
