/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(17);

global.firebase = firebase;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * @license Firebase v4.11.0
 * Build: rev-6aed77a
 * Terms: https://firebase.google.com/terms/
 */
var firebase = function () {
  var e = void 0 === e ? self : e;return function (t) {
    function r(e) {
      if (o[e]) return o[e].exports;var n = o[e] = { i: e, l: !1, exports: {} };return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }var n = e.webpackJsonpFirebase;e.webpackJsonpFirebase = function (e, o, a) {
      for (var c, s, u, f = 0, l = []; f < e.length; f++) {
        s = e[f], i[s] && l.push(i[s][0]), i[s] = 0;
      }for (c in o) {
        Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
      }for (n && n(e, o, a); l.length;) {
        l.shift()();
      }if (a) for (f = 0; f < a.length; f++) {
        u = r(r.s = a[f]);
      }return u;
    };var o = {},
        i = { 5: 0 };return r.m = t, r.c = o, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r.oe = function (e) {
      throw console.error(e), e;
    }, r(r.s = 59);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(30);t.assert = n.assert, t.assertionError = n.assertionError;var o = r(31);t.base64 = o.base64, t.base64Decode = o.base64Decode, t.base64Encode = o.base64Encode;var i = r(21);t.CONSTANTS = i.CONSTANTS;var a = r(67);t.deepCopy = a.deepCopy, t.deepExtend = a.deepExtend, t.patchProperty = a.patchProperty;var c = r(68);t.Deferred = c.Deferred;var s = r(69);t.getUA = s.getUA, t.isMobileCordova = s.isMobileCordova, t.isNodeSdk = s.isNodeSdk, t.isReactNative = s.isReactNative;var u = r(70);t.ErrorFactory = u.ErrorFactory, t.FirebaseError = u.FirebaseError, t.patchCapture = u.patchCapture;var f = r(32);t.jsonEval = f.jsonEval, t.stringify = f.stringify;var l = r(71);t.decode = l.decode, t.isAdmin = l.isAdmin, t.issuedAtTime = l.issuedAtTime, t.isValidFormat = l.isValidFormat, t.isValidTimestamp = l.isValidTimestamp;var h = r(33);t.clone = h.clone, t.contains = h.contains, t.every = h.every, t.extend = h.extend, t.findKey = h.findKey, t.findValue = h.findValue, t.forEach = h.forEach, t.getAnyKey = h.getAnyKey, t.getCount = h.getCount, t.getValues = h.getValues, t.isEmpty = h.isEmpty, t.isNonNullObject = h.isNonNullObject, t.map = h.map, t.safeGet = h.safeGet;var p = r(72);t.querystring = p.querystring, t.querystringDecode = p.querystringDecode;var d = r(73);t.Sha1 = d.Sha1;var v = r(75);t.async = v.async, t.createSubscribe = v.createSubscribe;var y = r(76);t.errorPrefix = y.errorPrefix, t.validateArgCount = y.validateArgCount, t.validateCallback = y.validateCallback, t.validateContextObject = y.validateContextObject, t.validateNamespace = y.validateNamespace;var b = r(77);t.stringLength = b.stringLength, t.stringToByteArray = b.stringToByteArray;
  },, function (e, t, r) {
    "use strict";
    function n(e, t) {
      function r() {
        this.constructor = e;
      }O(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }function o(e, t) {
      var r = {};for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      }if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
        t.indexOf(n[o]) < 0 && (r[n[o]] = e[n[o]]);
      }return r;
    }function i(e, t, r, n) {
      var o,
          i = arguments.length,
          a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);else for (var c = e.length - 1; c >= 0; c--) {
        (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
      }return i > 3 && a && Object.defineProperty(t, r, a), a;
    }function a(e, t) {
      return function (r, n) {
        t(r, n, e);
      };
    }function c(e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }function s(e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function a(e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        }function c(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        }function s(e) {
          e.done ? o(e.value) : new r(function (t) {
            t(e.value);
          }).then(a, c);
        }s((n = n.apply(e, t || [])).next());
      });
    }function u(e, t) {
      function r(e) {
        return function (t) {
          return n([e, t]);
        };
      }function n(r) {
        if (o) throw new TypeError("Generator is already executing.");for (; s;) {
          try {
            if (o = 1, i && (a = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(a = a.call(i, r[1])).done) return a;switch (i = 0, a && (r = [0, a.value]), r[0]) {case 0:case 1:
                a = r;break;case 4:
                return s.label++, { value: r[1], done: !1 };case 5:
                s.label++, i = r[1], r = [0];continue;case 7:
                r = s.ops.pop(), s.trys.pop();continue;default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                  s = 0;continue;
                }if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                  s.label = r[1];break;
                }if (6 === r[0] && s.label < a[1]) {
                  s.label = a[1], a = r;break;
                }if (a && s.label < a[2]) {
                  s.label = a[2], s.ops.push(r);break;
                }a[2] && s.ops.pop(), s.trys.pop();continue;}r = t.call(e, s);
          } catch (e) {
            r = [6, e], i = 0;
          } finally {
            o = a = 0;
          }
        }if (5 & r[0]) throw r[1];return { value: r[0] ? r[1] : void 0, done: !0 };
      }var o,
          i,
          a,
          c,
          s = { label: 0, sent: function sent() {
          if (1 & a[0]) throw a[1];return a[1];
        }, trys: [], ops: [] };return c = { next: r(0), throw: r(1), return: r(2) }, "function" == typeof Symbol && (c[Symbol.iterator] = function () {
        return this;
      }), c;
    }function f(e, t) {
      for (var r in e) {
        t.hasOwnProperty(r) || (t[r] = e[r]);
      }
    }function l(e) {
      var t = "function" == typeof Symbol && e[Symbol.iterator],
          r = 0;return t ? t.call(e) : { next: function next() {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        } };
    }function h(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];if (!r) return e;var n,
          o,
          i = r.call(e),
          a = [];try {
        for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) {
          a.push(n.value);
        }
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i);
        } finally {
          if (o) throw o.error;
        }
      }return a;
    }function p() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e = e.concat(h(arguments[t]));
      }return e;
    }function d(e) {
      return this instanceof d ? (this.v = e, this) : new d(e);
    }function v(e, t, r) {
      function n(e) {
        f[e] && (u[e] = function (t) {
          return new Promise(function (r, n) {
            l.push([e, t, r, n]) > 1 || o(e, t);
          });
        });
      }function o(e, t) {
        try {
          i(f[e](t));
        } catch (e) {
          s(l[0][3], e);
        }
      }function i(e) {
        e.value instanceof d ? Promise.resolve(e.value.v).then(a, c) : s(l[0][2], e);
      }function a(e) {
        o("next", e);
      }function c(e) {
        o("throw", e);
      }function s(e, t) {
        e(t), l.shift(), l.length && o(l[0][0], l[0][1]);
      }if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var u,
          f = r.apply(e, t || []),
          l = [];return u = {}, n("next"), n("throw"), n("return"), u[Symbol.asyncIterator] = function () {
        return this;
      }, u;
    }function y(e) {
      function t(t, o) {
        e[t] && (r[t] = function (r) {
          return (n = !n) ? { value: d(e[t](r)), done: "return" === t } : o ? o(r) : r;
        });
      }var r, n;return r = {}, t("next"), t("throw", function (e) {
        throw e;
      }), t("return"), r[Symbol.iterator] = function () {
        return this;
      }, r;
    }function b(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var t = e[Symbol.asyncIterator];return t ? t.call(e) : "function" == typeof l ? l(e) : e[Symbol.iterator]();
    }function _(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
    }function m(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }function g(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.__extends = n, r.d(t, "__assign", function () {
      return E;
    }), t.__rest = o, t.__decorate = i, t.__param = a, t.__metadata = c, t.__awaiter = s, t.__generator = u, t.__exportStar = f, t.__values = l, t.__read = h, t.__spread = p, t.__await = d, t.__asyncGenerator = v, t.__asyncDelegator = y, t.__asyncValues = b, t.__makeTemplateObject = _, t.__importStar = m, t.__importDefault = g; /*! *****************************************************************************
                                                                                                                                                                                                                                                                                                                                          Copyright (c) Microsoft Corporation. All rights reserved.
                                                                                                                                                                                                                                                                                                                                          Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                                                                                                                                                                                                                                                                                                                                          this file except in compliance with the License. You may obtain a copy of the
                                                                                                                                                                                                                                                                                                                                          License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                          THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                                                                                                                                                                                                                                                                                                                          KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                                                                                                                                                                                                                                                                                                                                          WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                                                                                                                                                                                                                                                                                                                                          MERCHANTABLITY OR NON-INFRINGEMENT.
                                                                                                                                                                                                                                                                                                                                          See the Apache Version 2.0 License for specific language governing permissions
                                                                                                                                                                                                                                                                                                                                          and limitations under the License.
                                                                                                                                                                                                                                                                                                                                          ***************************************************************************** */
    var O = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        t.hasOwnProperty(r) && (e[r] = t[r]);
      }
    },
        E = Object.assign || function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];for (var o in t) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }return e;
    };
  },,,,, function (e, t, r) {
    "use strict";
    function n() {
      function e(e) {
        h(d[e], "delete"), delete d[e];
      }function t(e) {
        return e = e || c, a(d, e) || o("no-app", { name: e }), d[e];
      }function r(e, t) {
        void 0 === t ? t = c : "string" == typeof t && "" !== t || o("bad-app-name", { name: t + "" }), a(d, t) && o("duplicate-app", { name: t });var r = new u(e, t, b);return d[t] = r, h(r, "create"), r;
      }function s() {
        return Object.keys(d).map(function (e) {
          return d[e];
        });
      }function f(e, r, n, a, c) {
        v[e] && o("duplicate-service", { name: e }), v[e] = r, a && (y[e] = a, s().forEach(function (e) {
          a("create", e);
        }));var f = function f(r) {
          return void 0 === r && (r = t()), "function" != typeof r[e] && o("invalid-app-argument", { name: e }), r[e]();
        };return void 0 !== n && Object(i.deepExtend)(f, n), b[e] = f, u.prototype[e] = function () {
          for (var t = [], r = 0; r < arguments.length; r++) {
            t[r] = arguments[r];
          }return this.e.bind(this, e).apply(this, c ? t : []);
        }, f;
      }function l(e) {
        Object(i.deepExtend)(b, e);
      }function h(e, t) {
        Object.keys(v).forEach(function (r) {
          var n = p(e, r);null !== n && y[n] && y[n](t, e);
        });
      }function p(e, t) {
        if ("serverAuth" === t) return null;var r = t;return e.options, r;
      }var d = {},
          v = {},
          y = {},
          b = { __esModule: !0, initializeApp: r, app: t, apps: null, Promise: Promise, SDK_VERSION: "4.11.0", INTERNAL: { registerService: f, createFirebaseNamespace: n, extendNamespace: l, createSubscribe: i.createSubscribe, ErrorFactory: i.ErrorFactory, removeApp: e, factories: v, useAsService: p, Promise: Promise, deepExtend: i.deepExtend } };return Object(i.patchProperty)(b, "default", b), Object.defineProperty(b, "apps", { get: s }), Object(i.patchProperty)(t, "App", u), b;
    }function o(e, t) {
      throw l.create(e, t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = r(0),
        a = function a(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    },
        c = "[DEFAULT]",
        s = [],
        u = function () {
      function e(e, t, r) {
        this.t = r, this.r = !1, this.a = {}, this.u = t, this.f = Object(i.deepCopy)(e), this.INTERNAL = { getUid: function getUid() {
            return null;
          }, getToken: function getToken() {
            return Promise.resolve(null);
          }, addAuthTokenListener: function addAuthTokenListener(e) {
            s.push(e), setTimeout(function () {
              return e(null);
            }, 0);
          }, removeAuthTokenListener: function removeAuthTokenListener(e) {
            s = s.filter(function (t) {
              return t !== e;
            });
          } };
      }return Object.defineProperty(e.prototype, "name", { get: function get() {
          return this.h(), this.u;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "options", { get: function get() {
          return this.h(), this.f;
        }, enumerable: !0, configurable: !0 }), e.prototype.delete = function () {
        var e = this;return new Promise(function (t) {
          e.h(), t();
        }).then(function () {
          e.t.INTERNAL.removeApp(e.u);var t = [];return Object.keys(e.a).forEach(function (r) {
            Object.keys(e.a[r]).forEach(function (n) {
              t.push(e.a[r][n]);
            });
          }), Promise.all(t.map(function (e) {
            return e.INTERNAL.delete();
          }));
        }).then(function () {
          e.r = !0, e.a = {};
        });
      }, e.prototype.e = function (e, t) {
        if (void 0 === t && (t = c), this.h(), this.a[e] || (this.a[e] = {}), !this.a[e][t]) {
          var r = t !== c ? t : void 0,
              n = this.t.INTERNAL.factories[e](this, this.extendApp.bind(this), r);this.a[e][t] = n;
        }return this.a[e][t];
      }, e.prototype.extendApp = function (e) {
        var t = this;Object(i.deepExtend)(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (s.forEach(function (e) {
          t.INTERNAL.addAuthTokenListener(e);
        }), s = []);
      }, e.prototype.h = function () {
        this.r && o("app-deleted", { name: this.u });
      }, e;
    }();u.prototype.name && u.prototype.options || u.prototype.delete || console.log("dc");var f = { "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", "bad-app-name": "Illegal App name: '{$name}", "duplicate-app": "Firebase App named '{$name}' already exists", "app-deleted": "Firebase App named '{$name}' already deleted", "duplicate-service": "Firebase service named '{$name}' already registered", "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain", "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance." },
        l = new i.ErrorFactory("app", "Firebase", f);r.d(t, "firebase", function () {
      return h;
    });var h = n();t.default = h;
  },,,, function (t, r) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (n = e);
    }t.exports = n;
  },,,,,,,,,, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.CONSTANTS = { NODE_CLIENT: !1, NODE_ADMIN: !1, SDK_VERSION: "${JSCORE_VERSION}" };
  },,,,,,,, function (e, t) {
    function r() {
      throw Error("setTimeout has not been defined");
    }function n() {
      throw Error("clearTimeout has not been defined");
    }function o(e) {
      if (f === setTimeout) return setTimeout(e, 0);if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);try {
        return f(e, 0);
      } catch (t) {
        try {
          return f.call(null, e, 0);
        } catch (t) {
          return f.call(this, e, 0);
        }
      }
    }function i(e) {
      if (l === clearTimeout) return clearTimeout(e);if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);try {
        return l(e);
      } catch (t) {
        try {
          return l.call(null, e);
        } catch (t) {
          return l.call(this, e);
        }
      }
    }function a() {
      v && p && (v = !1, p.length ? d = p.concat(d) : y = -1, d.length && c());
    }function c() {
      if (!v) {
        var e = o(a);v = !0;for (var t = d.length; t;) {
          for (p = d, d = []; ++y < t;) {
            p && p[y].run();
          }y = -1, t = d.length;
        }p = null, v = !1, i(e);
      }
    }function s(e, t) {
      this.fun = e, this.array = t;
    }function u() {}var f,
        l,
        h = e.exports = {};!function () {
      try {
        f = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        f = r;
      }try {
        l = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (e) {
        l = n;
      }
    }();var p,
        d = [],
        v = !1,
        y = -1;h.nextTick = function (e) {
      var t = Array(arguments.length - 1);if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
        t[r - 1] = arguments[r];
      }d.push(new s(e, t)), 1 !== d.length || v || o(c);
    }, s.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function (e) {
      return [];
    }, h.binding = function (e) {
      throw Error("process.binding is not supported");
    }, h.cwd = function () {
      return "/";
    }, h.chdir = function (e) {
      throw Error("process.chdir is not supported");
    }, h.umask = function () {
      return 0;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(21);t.assert = function (e, r) {
      if (!e) throw t.assertionError(r);
    }, t.assertionError = function (e) {
      return Error("Firebase Database (" + n.CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e);
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function n(e) {
      for (var t = [], r = 0, n = 0; n < e.length; n++) {
        var o = e.charCodeAt(n);o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192, t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)), t[r++] = o >> 18 | 240, t[r++] = o >> 12 & 63 | 128, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128);
      }return t;
    },
        o = function o(e) {
      for (var t = [], r = 0, n = 0; r < e.length;) {
        var o = e[r++];if (o < 128) t[n++] = String.fromCharCode(o);else if (o > 191 && o < 224) {
          var i = e[r++];t[n++] = String.fromCharCode((31 & o) << 6 | 63 & i);
        } else if (o > 239 && o < 365) {
          var i = e[r++],
              a = e[r++],
              c = e[r++],
              s = ((7 & o) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & c) - 65536;t[n++] = String.fromCharCode(55296 + (s >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & s));
        } else {
          var i = e[r++],
              a = e[r++];t[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & a);
        }
      }return t.join("");
    };t.base64 = { y: null, b: null, _: null, g: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      }, get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      }, HAS_NATIVE_SUPPORT: "function" == typeof atob, encodeByteArray: function encodeByteArray(e, t) {
        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");this.O();for (var r = t ? this._ : this.y, n = [], o = 0; o < e.length; o += 3) {
          var i = e[o],
              a = o + 1 < e.length,
              c = a ? e[o + 1] : 0,
              s = o + 2 < e.length,
              u = s ? e[o + 2] : 0,
              f = i >> 2,
              l = (3 & i) << 4 | c >> 4,
              h = (15 & c) << 2 | u >> 6,
              p = 63 & u;s || (p = 64, a || (h = 64)), n.push(r[f], r[l], r[h], r[p]);
        }return n.join("");
      }, encodeString: function encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(n(e), t);
      }, decodeString: function decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : o(this.decodeStringToByteArray(e, t));
      }, decodeStringToByteArray: function decodeStringToByteArray(e, t) {
        this.O();for (var r = t ? this.g : this.b, n = [], o = 0; o < e.length;) {
          var i = r[e.charAt(o++)],
              a = o < e.length,
              c = a ? r[e.charAt(o)] : 0;++o;var s = o < e.length,
              u = s ? r[e.charAt(o)] : 64;++o;var f = o < e.length,
              l = f ? r[e.charAt(o)] : 64;if (++o, null == i || null == c || null == u || null == l) throw Error();var h = i << 2 | c >> 4;if (n.push(h), 64 != u) {
            var p = c << 4 & 240 | u >> 2;if (n.push(p), 64 != l) {
              var d = u << 6 & 192 | l;n.push(d);
            }
          }
        }return n;
      }, O: function O() {
        if (!this.y) {
          this.y = {}, this.b = {}, this._ = {}, this.g = {};for (var e = 0; e < this.ENCODED_VALS.length; e++) {
            this.y[e] = this.ENCODED_VALS.charAt(e), this.b[this.y[e]] = e, this._[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.g[this._[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.b[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.g[this.ENCODED_VALS.charAt(e)] = e);
          }
        }
      } }, t.base64Encode = function (e) {
      var r = n(e);return t.base64.encodeByteArray(r, !0);
    }, t.base64Decode = function (e) {
      try {
        return t.base64.decodeString(e, !0);
      } catch (e) {
        console.error("base64Decode failed: ", e);
      }return null;
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return JSON.parse(e);
    }function o(e) {
      return JSON.stringify(e);
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.jsonEval = n, t.stringify = o;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.contains = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.safeGet = function (e, t) {
      if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
    }, t.forEach = function (e, t) {
      for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r]);
      }
    }, t.extend = function (e, r) {
      return t.forEach(r, function (t, r) {
        e[t] = r;
      }), e;
    }, t.clone = function (e) {
      return t.extend({}, e);
    }, t.isNonNullObject = function (e) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
    }, t.isEmpty = function (e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, t.getCount = function (e) {
      var t = 0;for (var r in e) {
        t++;
      }return t;
    }, t.map = function (e, t, r) {
      var n = {};for (var o in e) {
        n[o] = t.call(r, e[o], o, e);
      }return n;
    }, t.findKey = function (e, t, r) {
      for (var n in e) {
        if (t.call(r, e[n], n, e)) return n;
      }
    }, t.findValue = function (e, r, n) {
      var o = t.findKey(e, r, n);return o && e[o];
    }, t.getAnyKey = function (e) {
      for (var t in e) {
        return t;
      }
    }, t.getValues = function (e) {
      var t = [],
          r = 0;for (var n in e) {
        t[r++] = e[n];
      }return t;
    }, t.every = function (e, t) {
      for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r) && !t(r, e[r])) return !1;
      }return !0;
    };
  },,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, r) {
    r(60), e.exports = r(7).default;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(61),
        o = (r.n(n), r(65)),
        i = (r.n(o), r(66));r.n(i);
  }, function (t, r, n) {
    (function (t) {
      var r = function () {
        if (void 0 !== t) return t;if (void 0 !== e) return e;if ("undefined" != typeof self) return self;throw Error("unable to locate global object");
      }();"undefined" == typeof Promise && (r.Promise = Promise = n(62));
    }).call(r, n(11));
  }, function (e, t, r) {
    "use strict";
    (function (t) {
      function r() {}function n(e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }function o(e) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("not a function");this._state = 0, this._handled = !1, this._value = void 0, this.T = [], f(e, this);
      }function i(e, t) {
        for (; 3 === e._state;) {
          e = e._value;
        }if (0 === e._state) return void e.T.push(t);e._handled = !0, o.A(function () {
          var r = 1 === e._state ? t.onFulfilled : t.onRejected;if (null === r) return void (1 === e._state ? a : c)(t.promise, e._value);var n;try {
            n = r(e._value);
          } catch (e) {
            return void c(t.promise, e);
          }a(t.promise, n);
        });
      }function a(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");if (t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t)) {
            var r = t.then;if (t instanceof o) return e._state = 3, e._value = t, void s(e);if ("function" == typeof r) return void f(n(r, t), e);
          }e._state = 1, e._value = t, s(e);
        } catch (t) {
          c(e, t);
        }
      }function c(e, t) {
        e._state = 2, e._value = t, s(e);
      }function s(e) {
        2 === e._state && 0 === e.T.length && o.A(function () {
          e._handled || o.S(e._value);
        });for (var t = 0, r = e.T.length; t < r; t++) {
          i(e, e.T[t]);
        }e.T = null;
      }function u(e, t, r) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r;
      }function f(e, t) {
        var r = !1;try {
          e(function (e) {
            r || (r = !0, a(t, e));
          }, function (e) {
            r || (r = !0, c(t, e));
          });
        } catch (e) {
          if (r) return;r = !0, c(t, e);
        }
      }var l = setTimeout;o.prototype.catch = function (e) {
        return this.then(null, e);
      }, o.prototype.then = function (e, t) {
        var n = new this.constructor(r);return i(this, new u(e, t, n)), n;
      }, o.prototype.finally = function (e) {
        var t = this.constructor;return this.then(function (r) {
          return t.resolve(e()).then(function () {
            return r;
          });
        }, function (r) {
          return t.resolve(e()).then(function () {
            return t.reject(r);
          });
        });
      }, o.all = function (e) {
        return new o(function (t, r) {
          function n(e, a) {
            try {
              if (a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a)) {
                var c = a.then;if ("function" == typeof c) return void c.call(a, function (t) {
                  n(e, t);
                }, r);
              }o[e] = a, 0 == --i && t(o);
            } catch (e) {
              r(e);
            }
          }if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");var o = Array.prototype.slice.call(e);if (0 === o.length) return t([]);for (var i = o.length, a = 0; a < o.length; a++) {
            n(a, o[a]);
          }
        });
      }, o.resolve = function (e) {
        return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === o ? e : new o(function (t) {
          t(e);
        });
      }, o.reject = function (e) {
        return new o(function (t, r) {
          r(e);
        });
      }, o.race = function (e) {
        return new o(function (t, r) {
          for (var n = 0, o = e.length; n < o; n++) {
            e[n].then(t, r);
          }
        });
      }, o.A = "function" == typeof t && function (e) {
        t(e);
      } || function (e) {
        l(e, 0);
      }, o.S = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
      }, e.exports = o;
    }).call(t, r(63).setImmediate);
  }, function (t, r, n) {
    (function (t) {
      function o(e, t) {
        this.w = e, this._clearFn = t;
      }var i = Function.prototype.apply;r.setTimeout = function () {
        return new o(i.call(setTimeout, e, arguments), clearTimeout);
      }, r.setInterval = function () {
        return new o(i.call(setInterval, e, arguments), clearInterval);
      }, r.clearTimeout = r.clearInterval = function (e) {
        e && e.close();
      }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
        this._clearFn.call(e, this.w);
      }, r.enroll = function (e, t) {
        clearTimeout(e.j), e.P = t;
      }, r.unenroll = function (e) {
        clearTimeout(e.j), e.P = -1;
      }, r.C = r.active = function (e) {
        clearTimeout(e.j);var t = e.P;t >= 0 && (e.j = setTimeout(function () {
          e.N && e.N();
        }, t));
      }, n(64), r.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, r.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
    }).call(r, n(11));
  }, function (e, t, r) {
    (function (e, t) {
      !function (e, r) {
        "use strict";
        function n(e) {
          "function" != typeof e && (e = Function("" + e));for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) {
            t[r] = arguments[r + 1];
          }var n = { callback: e, args: t };return u[s] = n, c(s), s++;
        }function o(e) {
          delete u[e];
        }function i(e) {
          var t = e.callback,
              n = e.args;switch (n.length) {case 0:
              t();break;case 1:
              t(n[0]);break;case 2:
              t(n[0], n[1]);break;case 3:
              t(n[0], n[1], n[2]);break;default:
              t.apply(r, n);}
        }function a(e) {
          if (f) setTimeout(a, 0, e);else {
            var t = u[e];if (t) {
              f = !0;try {
                i(t);
              } finally {
                o(e), f = !1;
              }
            }
          }
        }if (!e.setImmediate) {
          var c,
              s = 1,
              u = {},
              f = !1,
              l = e.document,
              h = Object.getPrototypeOf && Object.getPrototypeOf(e);h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? function () {
            c = function c(e) {
              t.nextTick(function () {
                a(e);
              });
            };
          }() : function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  r = e.onmessage;return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = r, t;
            }
          }() ? function () {
            var t = "setImmediate$" + Math.random() + "$",
                r = function r(_r2) {
              _r2.source === e && "string" == typeof _r2.data && 0 === _r2.data.indexOf(t) && a(+_r2.data.slice(t.length));
            };e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), c = function c(r) {
              e.postMessage(t + r, "*");
            };
          }() : e.MessageChannel ? function () {
            var e = new MessageChannel();e.port1.onmessage = function (e) {
              a(e.data);
            }, c = function c(t) {
              e.port2.postMessage(t);
            };
          }() : l && "onreadystatechange" in l.createElement("script") ? function () {
            var e = l.documentElement;c = function c(t) {
              var r = l.createElement("script");r.onreadystatechange = function () {
                a(t), r.onreadystatechange = null, e.removeChild(r), r = null;
              }, e.appendChild(r);
            };
          }() : function () {
            c = function c(e) {
              setTimeout(a, 0, e);
            };
          }(), h.setImmediate = n, h.clearImmediate = o;
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(t, r(11), r(29));
  }, function (e, t) {
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function value(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');var t = Object(this),
            r = t.length >>> 0;if ("function" != typeof e) throw new TypeError("predicate must be a function");for (var n = arguments[1], o = 0; o < r;) {
          var i = t[o];if (e.call(n, i, o, t)) return i;o++;
        }
      } }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", { value: function value(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');var t = Object(this),
            r = t.length >>> 0;if ("function" != typeof e) throw new TypeError("predicate must be a function");for (var n = arguments[1], o = 0; o < r;) {
          var i = t[o];if (e.call(n, i, o, t)) return o;o++;
        }return -1;
      } });
  }, function (e, t) {
    String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
      return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return o(void 0, e);
    }function o(e, t) {
      if (!(t instanceof Object)) return t;switch (t.constructor) {case Date:
          var r = t;return new Date(r.getTime());case Object:
          void 0 === e && (e = {});break;case Array:
          e = [];break;default:
          return t;}for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = o(e[n], t[n]));
      }return e;
    }function i(e, t, r) {
      e[t] = r;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.deepCopy = n, t.deepExtend = o, t.patchProperty = i;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
      function e() {
        var e = this;this.promise = new Promise(function (t, r) {
          e.resolve = t, e.reject = r;
        });
      }return e.prototype.wrapCallback = function (e) {
        var t = this;return function (r, n) {
          r ? t.reject(r) : t.resolve(n), "function" == typeof e && (t.promise.catch(function () {}), 1 === e.length ? e(r) : e(r, n));
        };
      }, e;
    }();t.Deferred = n;
  }, function (t, r, n) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });var o = n(21);r.getUA = function () {
      return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
    }, r.isMobileCordova = function () {
      return void 0 !== e && !!(e.cordova || e.phonegap || e.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(r.getUA());
    }, r.isReactNative = function () {
      return "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && "ReactNative" === navigator.product;
    }, r.isNodeSdk = function () {
      return !0 === o.CONSTANTS.NODE_CLIENT || !0 === o.CONSTANTS.NODE_ADMIN;
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      var t = i;return i = e, t;
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = "FirebaseError",
        i = Error.captureStackTrace;t.patchCapture = n;var a = function () {
      function e(e, t) {
        if (this.code = e, this.message = t, i) i(this, c.prototype.create);else {
          var r = Error.apply(this, arguments);this.name = o, Object.defineProperty(this, "stack", { get: function get() {
              return r.stack;
            } });
        }
      }return e;
    }();t.FirebaseError = a, a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a.prototype.name = o;var c = function () {
      function e(e, t, r) {
        this.service = e, this.serviceName = t, this.errors = r, this.pattern = /\{\$([^}]+)}/g;
      }return e.prototype.create = function (e, t) {
        void 0 === t && (t = {});var r,
            n = this.errors[e],
            o = this.service + "/" + e;r = void 0 === n ? "Error" : n.replace(this.pattern, function (e, r) {
          var n = t[r];return void 0 !== n ? "" + n : "<" + r + "?>";
        }), r = this.serviceName + ": " + r + " (" + o + ").";var i = new a(o, r);for (var c in t) {
          t.hasOwnProperty(c) && "_" !== c.slice(-1) && (i[c] = t[c]);
        }return i;
      }, e;
    }();t.ErrorFactory = c;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(31),
        o = r(32);t.decode = function (e) {
      var t = {},
          r = {},
          i = {},
          a = "";try {
        var c = e.split(".");t = o.jsonEval(n.base64Decode(c[0]) || ""), r = o.jsonEval(n.base64Decode(c[1]) || ""), a = c[2], i = r.d || {}, delete r.d;
      } catch (e) {}return { header: t, claims: r, data: i, signature: a };
    }, t.isValidTimestamp = function (e) {
      var r,
          n,
          o = t.decode(e).claims,
          i = Math.floor(new Date().getTime() / 1e3);return "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (o.hasOwnProperty("nbf") ? r = o.nbf : o.hasOwnProperty("iat") && (r = o.iat), n = o.hasOwnProperty("exp") ? o.exp : r + 86400), i && r && n && i >= r && i <= n;
    }, t.issuedAtTime = function (e) {
      var r = t.decode(e).claims;return "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && r.hasOwnProperty("iat") ? r.iat : null;
    }, t.isValidFormat = function (e) {
      var r = t.decode(e),
          n = r.claims;return !!r.signature && !!n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.hasOwnProperty("iat");
    }, t.isAdmin = function (e) {
      var r = t.decode(e).claims;return "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && !0 === r.admin;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(33);t.querystring = function (e) {
      var t = [];return n.forEach(e, function (e, r) {
        Array.isArray(r) ? r.forEach(function (r) {
          t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
        }) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
      }), t.length ? "&" + t.join("&") : "";
    }, t.querystringDecode = function (e) {
      var t = {};return e.replace(/^\?/, "").split("&").forEach(function (e) {
        if (e) {
          var r = e.split("=");t[r[0]] = r[1];
        }
      }), t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(2),
        o = r(74),
        i = function (e) {
      function t() {
        var t = e.call(this) || this;t.k = [], t.x = [], t.M = [], t.D = [], t.I = 0, t.F = 0, t.blockSize = 64, t.D[0] = 128;for (var r = 1; r < t.blockSize; ++r) {
          t.D[r] = 0;
        }return t.reset(), t;
      }return n.__extends(t, e), t.prototype.reset = function () {
        this.k[0] = 1732584193, this.k[1] = 4023233417, this.k[2] = 2562383102, this.k[3] = 271733878, this.k[4] = 3285377520, this.I = 0, this.F = 0;
      }, t.prototype.R = function (e, t) {
        t || (t = 0);var r = this.M;if ("string" == typeof e) for (var n = 0; n < 16; n++) {
          r[n] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
        } else for (var n = 0; n < 16; n++) {
          r[n] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
        }for (var n = 16; n < 80; n++) {
          var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];r[n] = 4294967295 & (o << 1 | o >>> 31);
        }for (var i, a, c = this.k[0], s = this.k[1], u = this.k[2], f = this.k[3], l = this.k[4], n = 0; n < 80; n++) {
          n < 40 ? n < 20 ? (i = f ^ s & (u ^ f), a = 1518500249) : (i = s ^ u ^ f, a = 1859775393) : n < 60 ? (i = s & u | f & (s | u), a = 2400959708) : (i = s ^ u ^ f, a = 3395469782);var o = (c << 5 | c >>> 27) + i + l + a + r[n] & 4294967295;l = f, f = u, u = 4294967295 & (s << 30 | s >>> 2), s = c, c = o;
        }this.k[0] = this.k[0] + c & 4294967295, this.k[1] = this.k[1] + s & 4294967295, this.k[2] = this.k[2] + u & 4294967295, this.k[3] = this.k[3] + f & 4294967295, this.k[4] = this.k[4] + l & 4294967295;
      }, t.prototype.update = function (e, t) {
        if (null != e) {
          void 0 === t && (t = e.length);for (var r = t - this.blockSize, n = 0, o = this.x, i = this.I; n < t;) {
            if (0 == i) for (; n <= r;) {
              this.R(e, n), n += this.blockSize;
            }if ("string" == typeof e) {
              for (; n < t;) {
                if (o[i] = e.charCodeAt(n), ++i, ++n, i == this.blockSize) {
                  this.R(o), i = 0;break;
                }
              }
            } else for (; n < t;) {
              if (o[i] = e[n], ++i, ++n, i == this.blockSize) {
                this.R(o), i = 0;break;
              }
            }
          }this.I = i, this.F += t;
        }
      }, t.prototype.digest = function () {
        var e = [],
            t = 8 * this.F;this.I < 56 ? this.update(this.D, 56 - this.I) : this.update(this.D, this.blockSize - (this.I - 56));for (var r = this.blockSize - 1; r >= 56; r--) {
          this.x[r] = 255 & t, t /= 256;
        }this.R(this.x);for (var n = 0, r = 0; r < 5; r++) {
          for (var o = 24; o >= 0; o -= 8) {
            e[n] = this.k[r] >> o & 255, ++n;
          }
        }return e;
      }, t;
    }(o.Hash);t.Sha1 = i;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
      function e() {
        this.blockSize = -1;
      }return e;
    }();t.Hash = n;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      var r = new c(e, t);return r.subscribe.bind(r);
    }function o(e, t) {
      return function () {
        for (var r = [], n = 0; n < arguments.length; n++) {
          r[n] = arguments[n];
        }Promise.resolve(!0).then(function () {
          e.apply(void 0, r);
        }).catch(function (e) {
          t && t(e);
        });
      };
    }function i(e, t) {
      if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || null === e) return !1;for (var r = 0, n = t; r < n.length; r++) {
        var o = n[r];if (o in e && "function" == typeof e[o]) return !0;
      }return !1;
    }function a() {}Object.defineProperty(t, "__esModule", { value: !0 }), t.createSubscribe = n;var c = function () {
      function e(e, t) {
        var r = this;this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function () {
          e(r);
        }).catch(function (e) {
          r.error(e);
        });
      }return e.prototype.next = function (e) {
        this.forEachObserver(function (t) {
          t.next(e);
        });
      }, e.prototype.error = function (e) {
        this.forEachObserver(function (t) {
          t.error(e);
        }), this.close(e);
      }, e.prototype.complete = function () {
        this.forEachObserver(function (e) {
          e.complete();
        }), this.close();
      }, e.prototype.subscribe = function (e, t, r) {
        var n,
            o = this;if (void 0 === e && void 0 === t && void 0 === r) throw Error("Missing Observer.");n = i(e, ["next", "error", "complete"]) ? e : { next: e, error: t, complete: r }, void 0 === n.next && (n.next = a), void 0 === n.error && (n.error = a), void 0 === n.complete && (n.complete = a);var c = this.unsubscribeOne.bind(this, this.observers.length);return this.finalized && this.task.then(function () {
          try {
            o.finalError ? n.error(o.finalError) : n.complete();
          } catch (e) {}
        }), this.observers.push(n), c;
      }, e.prototype.unsubscribeOne = function (e) {
        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
      }, e.prototype.forEachObserver = function (e) {
        if (!this.finalized) for (var t = 0; t < this.observers.length; t++) {
          this.sendOne(t, e);
        }
      }, e.prototype.sendOne = function (e, t) {
        var r = this;this.task.then(function () {
          if (void 0 !== r.observers && void 0 !== r.observers[e]) try {
            t(r.observers[e]);
          } catch (e) {
            "undefined" != typeof console && console.error && console.error(e);
          }
        });
      }, e.prototype.close = function (e) {
        var t = this;this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function () {
          t.observers = void 0, t.onNoObservers = void 0;
        }));
      }, e;
    }();t.async = o;
  }, function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      var n = "";switch (t) {case 1:
          n = r ? "first" : "First";break;case 2:
          n = r ? "second" : "Second";break;case 3:
          n = r ? "third" : "Third";break;case 4:
          n = r ? "fourth" : "Fourth";break;default:
          throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}var o = e + " failed: ";return o += n + " argument ";
    }function o(e, t, r, o) {
      if ((!o || r) && "string" != typeof r) throw Error(n(e, t, o) + "must be a valid firebase namespace.");
    }function i(e, t, r, o) {
      if ((!o || r) && "function" != typeof r) throw Error(n(e, t, o) + "must be a valid function.");
    }function a(e, t, r, o) {
      if ((!o || r) && ("object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) || null === r)) throw Error(n(e, t, o) + "must be a valid context object.");
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.validateArgCount = function (e, t, r, n) {
      var o;if (n < t ? o = "at least " + t : n > r && (o = 0 === r ? "none" : "no more than " + r), o) {
        var i = e + " failed: Was called with " + n + (1 === n ? " argument." : " arguments.") + " Expects " + o + ".";throw Error(i);
      }
    }, t.errorPrefix = n, t.validateNamespace = o, t.validateCallback = i, t.validateContextObject = a;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(30);t.stringToByteArray = function (e) {
      for (var t = [], r = 0, o = 0; o < e.length; o++) {
        var i = e.charCodeAt(o);if (i >= 55296 && i <= 56319) {
          var a = i - 55296;o++, n.assert(o < e.length, "Surrogate pair missing trail surrogate."), i = 65536 + (a << 10) + (e.charCodeAt(o) - 56320);
        }i < 128 ? t[r++] = i : i < 2048 ? (t[r++] = i >> 6 | 192, t[r++] = 63 & i | 128) : i < 65536 ? (t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128, t[r++] = 63 & i | 128) : (t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128, t[r++] = i >> 6 & 63 | 128, t[r++] = 63 & i | 128);
      }return t;
    }, t.stringLength = function (e) {
      for (var t = 0, r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r);n < 128 ? t++ : n < 2048 ? t += 2 : n >= 55296 && n <= 56319 ? (t += 4, r++) : t += 3;
      }return t;
    };
  }]);
}().default;

/*!
 * @license Firebase v4.11.0
 * Build: rev-6aed77a
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([4], { 78: function _(t, e, n) {
      n(79);
    }, 79: function _(t, e, n) {
      (function (t) {
        (function () {
          function t(t) {
            return "string" == typeof t;
          }function e(t) {
            return "boolean" == typeof t;
          }function i() {}function r(t) {
            var e = typeof t === "undefined" ? "undefined" : _typeof(t);if ("object" == e) {
              if (!t) return "null";if (t instanceof Array) return "array";if (t instanceof Object) return e;var n = Object.prototype.toString.call(t);if ("[object Window]" == n) return "object";if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function";
            } else if ("function" == e && void 0 === t.call) return "object";return e;
          }function o(t) {
            return null === t;
          }function a(t) {
            return "array" == r(t);
          }function s(t) {
            var e = r(t);return "array" == e || "object" == e && "number" == typeof t.length;
          }function u(t) {
            return "function" == r(t);
          }function c(t) {
            var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "object" == e && null != t || "function" == e;
          }function h(t, e, n) {
            return t.call.apply(t.bind, arguments);
          }function f(t, e, n) {
            if (!t) throw Error();if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2);return function () {
                var n = Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n, i), t.apply(e, n);
              };
            }return function () {
              return t.apply(e, arguments);
            };
          }function l(t, e, n) {
            return l = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? h : f, l.apply(null, arguments);
          }function d(t, e) {
            var n = Array.prototype.slice.call(arguments, 1);return function () {
              var e = n.slice();return e.push.apply(e, arguments), t.apply(this, e);
            };
          }function p(t, e) {
            function n() {}n.prototype = e.prototype, t.jb = e.prototype, t.prototype = new n(), t.prototype.constructor = t, t.Tc = function (t, n, i) {
              for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++) {
                r[o - 2] = arguments[o];
              }return e.prototype[n].apply(t, r);
            };
          }function v(t) {
            t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0;
          }function m(t) {
            if (!t) return !1;try {
              return !!t.$goog_Thenable;
            } catch (t) {
              return !1;
            }
          }function b(t) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, b);else {
              var e = Error().stack;e && (this.stack = e);
            }t && (this.message = t + "");
          }function g(t, e) {
            t = t.split("%s");for (var n = "", i = t.length - 1, r = 0; r < i; r++) {
              n += t[r] + (r < e.length ? e[r] : "%s");
            }b.call(this, n + t[i]);
          }function w(t, e) {
            throw new g("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1));
          }function y(t, e) {
            this.c = t, this.f = e, this.b = 0, this.a = null;
          }function I(t, e) {
            t.f(e), 100 > t.b && (t.b++, e.next = t.a, t.a = e);
          }function T() {
            this.b = this.a = null;
          }function k() {
            var t = Nu,
                e = null;return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e;
          }function A() {
            this.next = this.b = this.a = null;
          }function E(e, n) {
            var i = e.length,
                r = t(e) ? e.split("") : e;for (--i; 0 <= i; --i) {
              i in r && n.call(void 0, r[i], i, e);
            }
          }function N(e) {
            t: {
              for (var n = Ri, i = e.length, r = t(e) ? e.split("") : e, o = 0; o < i; o++) {
                if (o in r && n.call(void 0, r[o], o, e)) {
                  n = o;break t;
                }
              }n = -1;
            }return 0 > n ? null : t(e) ? e.charAt(n) : e[n];
          }function S(t, e) {
            return 0 <= uu(t, e);
          }function O(t, e) {
            e = uu(t, e);var n;return (n = 0 <= e) && Array.prototype.splice.call(t, e, 1), n;
          }function P(t, e) {
            var n = 0;E(t, function (i, r) {
              e.call(void 0, i, r, t) && 1 == Array.prototype.splice.call(t, r, 1).length && n++;
            });
          }function C(t) {
            return Array.prototype.concat.apply([], arguments);
          }function R(t) {
            var e = t.length;if (0 < e) {
              for (var n = Array(e), i = 0; i < e; i++) {
                n[i] = t[i];
              }return n;
            }return [];
          }function _(t, e) {
            for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) {
              i += n.shift() + r.shift();
            }return i + n.join("%s");
          }function D(t) {
            return wu.test(t) ? (-1 != t.indexOf("&") && (t = t.replace(du, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(pu, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(vu, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(mu, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(bu, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(gu, "&#0;")), t) : t;
          }function L(t, e) {
            return -1 != t.indexOf(e);
          }function x(t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          }function U(t) {
            return L(su, t);
          }function j(t, e) {
            for (var n in t) {
              e.call(void 0, t[n], n, t);
            }
          }function M(t) {
            for (var e in t) {
              return !1;
            }return !0;
          }function V(t) {
            var e,
                n = {};for (e in t) {
              n[e] = t[e];
            }return n;
          }function F(t, e) {
            for (var n, i, r = 1; r < arguments.length; r++) {
              i = arguments[r];for (n in i) {
                t[n] = i[n];
              }for (var o = 0; o < Au.length; o++) {
                n = Au[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
            }
          }function K(t) {
            nu.setTimeout(function () {
              throw t;
            }, 0);
          }function q() {
            var t = nu.MessageChannel;if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !U("Presto") && (t = function t() {
              var t = document.createElement("IFRAME");t.style.display = "none", t.src = "", document.documentElement.appendChild(t);var e = t.contentWindow;t = e.document, t.open(), t.write(""), t.close();var n = "callImmediate" + Math.random(),
                  i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;t = l(function (t) {
                "*" != i && t.origin != i || t.data != n || this.port1.onmessage();
              }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = { postMessage: function postMessage() {
                  e.postMessage(n, i);
                } };
            }), void 0 !== t && !U("Trident") && !U("MSIE")) {
              var e = new t(),
                  n = {},
                  i = n;return e.port1.onmessage = function () {
                if (void 0 !== n.next) {
                  n = n.next;var t = n.qb;n.qb = null, t();
                }
              }, function (t) {
                i.next = { qb: t }, i = i.next, e.port2.postMessage(0);
              };
            }return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (t) {
              var e = document.createElement("SCRIPT");e.onreadystatechange = function () {
                e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null;
              }, document.documentElement.appendChild(e);
            } : function (t) {
              nu.setTimeout(t, 0);
            };
          }function X(t, e) {
            ku || H(), Eu || (ku(), Eu = !0), Nu.add(t, e);
          }function H() {
            if (-1 != (nu.Promise + "").indexOf("[native code]")) {
              var t = nu.Promise.resolve(void 0);ku = function ku() {
                t.then(B);
              };
            } else ku = function ku() {
              var t = B;!u(nu.setImmediate) || nu.Window && nu.Window.prototype && !U("Edge") && nu.Window.prototype.setImmediate == nu.setImmediate ? (Tu || (Tu = q()), Tu(t)) : nu.setImmediate(t);
            };
          }function B() {
            for (var t; t = k();) {
              try {
                t.a.call(t.b);
              } catch (t) {
                K(t);
              }I(au, t);
            }Eu = !1;
          }function W(t, e) {
            if (this.a = Su, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != i) try {
              var n = this;t.call(e, function (t) {
                rt(n, Ou, t);
              }, function (t) {
                if (!(t instanceof lt)) try {
                  if (t instanceof Error) throw t;throw Error("Promise rejected.");
                } catch (t) {}rt(n, Pu, t);
              });
            } catch (t) {
              rt(this, Pu, t);
            }
          }function G() {
            this.next = this.f = this.b = this.g = this.a = null, this.c = !1;
          }function z(t, e, n) {
            var i = Cu.get();return i.g = t, i.b = e, i.f = n, i;
          }function J(t) {
            if (t instanceof W) return t;var e = new W(i);return rt(e, Ou, t), e;
          }function Y(t) {
            return new W(function (e, n) {
              n(t);
            });
          }function $(t, e, n) {
            ot(t, e, n, null) || X(d(e, t));
          }function Z(t) {
            return new W(function (e, n) {
              var i = t.length,
                  r = [];if (i) for (var o, a = function a(t, n) {
                i--, r[t] = n, 0 == i && e(r);
              }, s = function s(t) {
                n(t);
              }, u = 0; u < t.length; u++) {
                o = t[u], $(o, d(a, u), s);
              } else e(r);
            });
          }function Q(t) {
            return new W(function (e) {
              var n = t.length,
                  i = [];if (n) for (var r, o = function o(t, r, _o2) {
                n--, i[t] = r ? { Wb: !0, value: _o2 } : { Wb: !1, reason: _o2 }, 0 == n && e(i);
              }, a = 0; a < t.length; a++) {
                r = t[a], $(r, d(o, a, !0), d(o, a, !1));
              } else e(i);
            });
          }function tt(t, e) {
            return e = z(e, e, void 0), e.c = !0, nt(t, e), t;
          }function et(t, e) {
            if (t.a == Su) if (t.c) {
              var n = t.c;if (n.b) {
                for (var i = 0, r = null, o = null, a = n.b; a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i))); a = a.next) {
                  r || (o = a);
                }r && (n.a == Su && 1 == i ? et(n, e) : (o ? (i = o, i.next == n.f && (n.f = i), i.next = i.next.next) : ut(n), ct(n, r, Pu, e)));
              }t.c = null;
            } else rt(t, Pu, e);
          }function nt(t, e) {
            t.b || t.a != Ou && t.a != Pu || st(t), t.f ? t.f.next = e : t.b = e, t.f = e;
          }function it(t, e, n, i) {
            var r = z(null, null, null);return r.a = new W(function (t, o) {
              r.g = e ? function (n) {
                try {
                  var r = e.call(i, n);t(r);
                } catch (t) {
                  o(t);
                }
              } : t, r.b = n ? function (e) {
                try {
                  var r = n.call(i, e);void 0 === r && e instanceof lt ? o(e) : t(r);
                } catch (t) {
                  o(t);
                }
              } : o;
            }), r.a.c = t, nt(t, r), r.a;
          }function rt(t, e, n) {
            t.a == Su && (t === n && (e = Pu, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, ot(n, t.Cc, t.Dc, t) || (t.i = n, t.a = e, t.c = null, st(t), e != Pu || n instanceof lt || ft(t, n)));
          }function ot(t, e, n, r) {
            if (t instanceof W) return nt(t, z(e || i, n || null, r)), !0;if (m(t)) return t.then(e, n, r), !0;if (c(t)) try {
              var o = t.then;if (u(o)) return at(t, o, e, n, r), !0;
            } catch (t) {
              return n.call(r, t), !0;
            }return !1;
          }function at(t, e, n, i, r) {
            function o(t) {
              s || (s = !0, i.call(r, t));
            }function a(t) {
              s || (s = !0, n.call(r, t));
            }var s = !1;try {
              e.call(t, a, o);
            } catch (t) {
              o(t);
            }
          }function st(t) {
            t.h || (t.h = !0, X(t.Sb, t));
          }function ut(t) {
            var e = null;return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e;
          }function ct(t, e, n, i) {
            if (n == Pu && e.b && !e.c) for (; t && t.g; t = t.c) {
              t.g = !1;
            }if (e.a) e.a.c = null, ht(e, n, i);else try {
              e.c ? e.g.call(e.f) : ht(e, n, i);
            } catch (t) {
              Ru.call(null, t);
            }I(Cu, e);
          }function ht(t, e, n) {
            e == Ou ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
          }function ft(t, e) {
            t.g = !0, X(function () {
              t.g && Ru.call(null, e);
            });
          }function lt(t) {
            b.call(this, t);
          }function dt() {
            0 != _u && (Du[this[iu] || (this[iu] = ++ru)] = this), this.pa = this.pa, this.oa = this.oa;
          }function pt(t) {
            if (!t.pa && (t.pa = !0, t.ua(), 0 != _u)) {
              var e = t[iu] || (t[iu] = ++ru);if (0 != _u && t.oa && 0 < t.oa.length) throw Error(t + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Du[e];
            }
          }function vt(t) {
            return vt[" "](t), t;
          }function mt(t, e) {
            var n = Bu;return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
          }function bt() {
            var t = nu.document;return t ? t.documentMode : void 0;
          }function gt(t) {
            return mt(t, function () {
              for (var e = 0, n = lu(Lu + "").split("."), i = lu(t + "").split("."), r = Math.max(n.length, i.length), o = 0; 0 == e && o < r; o++) {
                var a = n[o] || "",
                    s = i[o] || "";do {
                  if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length) break;e = x(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || x(0 == a[2].length, 0 == s[2].length) || x(a[2], s[2]), a = a[3], s = s[3];
                } while (0 == e);
              }return 0 <= e;
            });
          }function wt(t, e) {
            this.type = t, this.b = this.target = e, this.Cb = !0;
          }function yt(e, n) {
            if (wt.call(this, e ? e.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, e) {
              var i = this.type = e.type,
                  r = e.changedTouches ? e.changedTouches[0] : null;if (this.target = e.target || e.srcElement, this.b = n, n = e.relatedTarget) {
                if (Vu) {
                  t: {
                    try {
                      vt(n.nodeName);var o = !0;break t;
                    } catch (t) {}o = !1;
                  }o || (n = null);
                }
              } else "mouseover" == i ? n = e.fromElement : "mouseout" == i && (n = e.toElement);this.relatedTarget = n, null === r ? (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = t(e.pointerType) ? e.pointerType : $u[e.pointerType] || "", this.a = e, e.defaultPrevented && this.c();
            }
          }function It(t, e, n, i, r) {
            this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.La = r, this.key = ++Qu, this.ma = this.Ha = !1;
          }function Tt(t) {
            t.ma = !0, t.listener = null, t.proxy = null, t.src = null, t.La = null;
          }function kt(t) {
            this.src = t, this.a = {}, this.b = 0;
          }function At(t, e) {
            var n = e.type;n in t.a && O(t.a[n], e) && (Tt(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
          }function Et(t, e, n, i) {
            for (var r = 0; r < t.length; ++r) {
              var o = t[r];if (!o.ma && o.listener == e && o.capture == !!n && o.La == i) return r;
            }return -1;
          }function Nt(t, e, n, i, r) {
            if (i && i.once) Pt(t, e, n, i, r);else if (a(e)) for (var o = 0; o < e.length; o++) {
              Nt(t, e[o], n, i, r);
            } else n = jt(n), t && t[Zu] ? Ft(t, e, n, c(i) ? !!i.capture : !!i, r) : St(t, e, n, !1, i, r);
          }function St(t, e, n, i, r, o) {
            if (!e) throw Error("Invalid event type");var a = c(r) ? !!r.capture : !!r,
                s = Ut(t);if (s || (t[tc] = s = new kt(t)), n = s.add(e, n, i, a, o), !n.proxy) {
              if (i = Ot(), n.proxy = i, i.src = t, i.listener = n, t.addEventListener) Yu || (r = a), void 0 === r && (r = !1), t.addEventListener("" + e, i, r);else if (t.attachEvent) t.attachEvent(_t("" + e), i);else {
                if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i);
              }nc++;
            }
          }function Ot() {
            var t = xt,
                e = zu ? function (n) {
              return t.call(e.src, e.listener, n);
            } : function (n) {
              if (!(n = t.call(e.src, e.listener, n))) return n;
            };return e;
          }function Pt(t, e, n, i, r) {
            if (a(e)) for (var o = 0; o < e.length; o++) {
              Pt(t, e[o], n, i, r);
            } else n = jt(n), t && t[Zu] ? Kt(t, e, n, c(i) ? !!i.capture : !!i, r) : St(t, e, n, !0, i, r);
          }function Ct(t, e, n, i, r) {
            if (a(e)) for (var o = 0; o < e.length; o++) {
              Ct(t, e[o], n, i, r);
            } else i = c(i) ? !!i.capture : !!i, n = jt(n), t && t[Zu] ? (t = t.u, (e += "") in t.a && (o = t.a[e], -1 < (n = Et(o, n, i, r)) && (Tt(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = Ut(t)) && (e = t.a["" + e], t = -1, e && (t = Et(e, n, i, r)), (n = -1 < t ? e[t] : null) && Rt(n));
          }function Rt(t) {
            if ("number" != typeof t && t && !t.ma) {
              var e = t.src;if (e && e[Zu]) At(e.u, t);else {
                var n = t.type,
                    i = t.proxy;e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(_t(n), i) : e.addListener && e.removeListener && e.removeListener(i), nc--, (n = Ut(e)) ? (At(n, t), 0 == n.b && (n.src = null, e[tc] = null)) : Tt(t);
              }
            }
          }function _t(t) {
            return t in ec ? ec[t] : ec[t] = "on" + t;
          }function Dt(t, e, n, i) {
            var r = !0;if ((t = Ut(t)) && (e = t.a["" + e])) for (e = e.concat(), t = 0; t < e.length; t++) {
              var o = e[t];o && o.capture == n && !o.ma && (o = Lt(o, i), r = r && !1 !== o);
            }return r;
          }function Lt(t, e) {
            var n = t.listener,
                i = t.La || t.src;return t.Ha && Rt(t), n.call(i, e);
          }function xt(t, e) {
            if (t.ma) return !0;if (!zu) {
              if (!e) t: {
                e = ["window", "event"];for (var n = nu, i = 0; i < e.length; i++) {
                  if (null == (n = n[e[i]])) {
                    e = null;break t;
                  }
                }e = n;
              }if (i = e, e = new yt(i, this), n = !0, !(0 > i.keyCode || void 0 != i.returnValue)) {
                t: {
                  var r = !1;if (0 == i.keyCode) try {
                    i.keyCode = -1;break t;
                  } catch (t) {
                    r = !0;
                  }(r || void 0 == i.returnValue) && (i.returnValue = !0);
                }for (i = [], r = e.b; r; r = r.parentNode) {
                  i.push(r);
                }for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                  e.b = i[r];var o = Dt(i[r], t, !0, e);n = n && o;
                }for (r = 0; r < i.length; r++) {
                  e.b = i[r], o = Dt(i[r], t, !1, e), n = n && o;
                }
              }return n;
            }return Lt(t, new yt(e, this));
          }function Ut(t) {
            return t = t[tc], t instanceof kt ? t : null;
          }function jt(t) {
            return u(t) ? t : (t[ic] || (t[ic] = function (e) {
              return t.handleEvent(e);
            }), t[ic]);
          }function Mt() {
            dt.call(this), this.u = new kt(this), this.Kb = this, this.Ra = null;
          }function Vt(e, n) {
            var i,
                r = e.Ra;if (r) for (i = []; r; r = r.Ra) {
              i.push(r);
            }if (e = e.Kb, r = n.type || n, t(n)) n = new wt(n, e);else if (n instanceof wt) n.target = n.target || e;else {
              var o = n;n = new wt(r, e), F(n, o);
            }if (o = !0, i) for (var a = i.length - 1; 0 <= a; a--) {
              var s = n.b = i[a];o = qt(s, r, !0, n) && o;
            }if (s = n.b = e, o = qt(s, r, !0, n) && o, o = qt(s, r, !1, n) && o, i) for (a = 0; a < i.length; a++) {
              s = n.b = i[a], o = qt(s, r, !1, n) && o;
            }
          }function Ft(t, e, n, i, r) {
            t.u.add(e + "", n, !1, i, r);
          }function Kt(t, e, n, i, r) {
            t.u.add(e + "", n, !0, i, r);
          }function qt(t, e, n, i) {
            if (!(e = t.u.a[e + ""])) return !0;e = e.concat();for (var r = !0, o = 0; o < e.length; ++o) {
              var a = e[o];if (a && !a.ma && a.capture == n) {
                var s = a.listener,
                    u = a.La || a.src;a.Ha && At(t.u, a), r = !1 !== s.call(u, i) && r;
              }
            }return r && 0 != i.Cb;
          }function Xt(t, e, n) {
            if (u(t)) n && (t = l(t, n));else {
              if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");t = l(t.handleEvent, t);
            }return 2147483647 < +e ? -1 : nu.setTimeout(t, e || 0);
          }function Ht(t) {
            var e = null;return new W(function (n, i) {
              -1 == (e = Xt(function () {
                n(void 0);
              }, t)) && i(Error("Failed to schedule timer."));
            }).o(function (t) {
              throw nu.clearTimeout(e), t;
            });
          }function Bt(e) {
            if (e.P && "function" == typeof e.P) return e.P();if (t(e)) return e.split("");if (s(e)) {
              for (var n = [], i = e.length, r = 0; r < i; r++) {
                n.push(e[r]);
              }return n;
            }n = [], i = 0;for (r in e) {
              n[i++] = e[r];
            }return n;
          }function Wt(e) {
            if (e.S && "function" == typeof e.S) return e.S();if (!e.P || "function" != typeof e.P) {
              if (s(e) || t(e)) {
                var n = [];e = e.length;for (var i = 0; i < e; i++) {
                  n.push(i);
                }return n;
              }n = [], i = 0;for (var r in e) {
                n[i++] = r;
              }return n;
            }
          }function Gt(e, n) {
            if (e.forEach && "function" == typeof e.forEach) e.forEach(n, void 0);else if (s(e) || t(e)) cu(e, n, void 0);else for (var i = Wt(e), r = Bt(e), o = r.length, a = 0; a < o; a++) {
              n.call(void 0, r[a], i && i[a], e);
            }
          }function zt(t, e) {
            this.b = {}, this.a = [], this.c = 0;var n = arguments.length;if (1 < n) {
              if (n % 2) throw Error("Uneven number of arguments");for (var i = 0; i < n; i += 2) {
                this.set(arguments[i], arguments[i + 1]);
              }
            } else if (t) if (t instanceof zt) for (n = t.S(), i = 0; i < n.length; i++) {
              this.set(n[i], t.get(n[i]));
            } else for (i in t) {
              this.set(i, t[i]);
            }
          }function Jt(t) {
            if (t.c != t.a.length) {
              for (var e = 0, n = 0; e < t.a.length;) {
                var i = t.a[e];Yt(t.b, i) && (t.a[n++] = i), e++;
              }t.a.length = n;
            }if (t.c != t.a.length) {
              var r = {};for (n = e = 0; e < t.a.length;) {
                i = t.a[e], Yt(r, i) || (t.a[n++] = i, r[i] = 1), e++;
              }t.a.length = n;
            }
          }function Yt(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }function $t(t, e) {
            if (t) {
              t = t.split("&");for (var n = 0; n < t.length; n++) {
                var i = t[n].indexOf("="),
                    r = null;if (0 <= i) {
                  var o = t[n].substring(0, i);r = t[n].substring(i + 1);
                } else o = t[n];e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "");
              }
            }
          }function Zt(t, e) {
            if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, t instanceof Zt) {
              this.f = void 0 !== e ? e : t.f, Qt(this, t.c), this.l = t.l, this.b = t.b, te(this, t.i), this.g = t.g, e = t.a;var n = new ce();n.c = e.c, e.a && (n.a = new zt(e.a), n.b = e.b), ee(this, n), this.h = t.h;
            } else t && (n = (t + "").match(rc)) ? (this.f = !!e, Qt(this, n[1] || "", !0), this.l = ae(n[2] || ""), this.b = ae(n[3] || "", !0), te(this, n[4]), this.g = ae(n[5] || "", !0), ee(this, n[6] || "", !0), this.h = ae(n[7] || "")) : (this.f = !!e, this.a = new ce(null, this.f));
          }function Qt(t, e, n) {
            t.c = n ? ae(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, ""));
          }function te(t, e) {
            if (e) {
              if (e = +e, isNaN(e) || 0 > e) throw Error("Bad port number " + e);t.i = e;
            } else t.i = null;
          }function ee(t, e, n) {
            e instanceof ce ? (t.a = e, me(t.a, t.f)) : (n || (e = se(e, uc)), t.a = new ce(e, t.f));
          }function ne(t, e, n) {
            t.a.set(e, n);
          }function ie(t, e) {
            return t.a.get(e);
          }function re(t) {
            return t instanceof Zt ? new Zt(t) : new Zt(t, void 0);
          }function oe(t, e) {
            var n = new Zt(null, void 0);return Qt(n, "https"), t && (n.b = t), e && (n.g = e), n;
          }function ae(t, e) {
            return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "";
          }function se(e, n, i) {
            return t(e) ? (e = encodeURI(e).replace(n, ue), i && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null;
          }function ue(t) {
            return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16);
          }function ce(t, e) {
            this.b = this.a = null, this.c = t || null, this.f = !!e;
          }function he(t) {
            t.a || (t.a = new zt(), t.b = 0, t.c && $t(t.c, function (e, n) {
              t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
            }));
          }function fe(t) {
            var e = Wt(t);if (void 0 === e) throw Error("Keys are undefined");var n = new ce(null, void 0);t = Bt(t);for (var i = 0; i < e.length; i++) {
              var r = e[i],
                  o = t[i];a(o) ? pe(n, r, o) : n.add(r, o);
            }return n;
          }function le(t, e) {
            he(t), e = ve(t, e), Yt(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, t = t.a, Yt(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Jt(t)));
          }function de(t, e) {
            return he(t), e = ve(t, e), Yt(t.a.b, e);
          }function pe(t, e, n) {
            le(t, e), 0 < n.length && (t.c = null, t.a.set(ve(t, e), R(n)), t.b += n.length);
          }function ve(t, e) {
            return e += "", t.f && (e = e.toLowerCase()), e;
          }function me(t, e) {
            e && !t.f && (he(t), t.c = null, t.a.forEach(function (t, e) {
              var n = e.toLowerCase();e != n && (le(this, e), pe(this, n, t));
            }, t)), t.f = e;
          }function be() {
            this.a = "", this.b = hc;
          }function ge(t) {
            return t instanceof be && t.constructor === be && t.b === hc ? t.a : (w("expected object of type Const, got '" + t + "'"), "type_error:Const");
          }function we(t) {
            var e = new be();return e.a = t, e;
          }function ye() {
            this.a = "", this.b = dc;
          }function Ie(t) {
            return t instanceof ye && t.constructor === ye && t.b === dc ? t.a : (w("expected object of type TrustedResourceUrl, got '" + t + "' of type " + r(t)), "type_error:TrustedResourceUrl");
          }function Te(t, e) {
            var n = ge(t);if (!lc.test(n)) throw Error("Invalid TrustedResourceUrl format: " + n);return t = n.replace(fc, function (t, i) {
              if (!Object.prototype.hasOwnProperty.call(e, i)) throw Error('Found marker, "' + i + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(e));return t = e[i], t instanceof be ? ge(t) : encodeURIComponent(t + "");
            }), ke(t);
          }function ke(t) {
            var e = new ye();return e.a = t, e;
          }function Ae() {
            this.a = "", this.b = vc;
          }function Ee(t) {
            return t instanceof Ae && t.constructor === Ae && t.b === vc ? t.a : (w("expected object of type SafeUrl, got '" + t + "' of type " + r(t)), "type_error:SafeUrl");
          }function Ne(t) {
            return t instanceof Ae ? t : (t = t.la ? t.ja() : t + "", pc.test(t) || (t = "about:invalid#zClosurez"), Se(t));
          }function Se(t) {
            var e = new Ae();return e.a = t, e;
          }function Oe(t) {
            var e = [];return Ce(new Pe(), t, e), e.join("");
          }function Pe() {}function Ce(t, e, n) {
            if (null == e) n.push("null");else {
              if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                if (a(e)) {
                  var i = e;e = i.length, n.push("[");for (var r = "", o = 0; o < e; o++) {
                    n.push(r), Ce(t, i[o], n), r = ",";
                  }return void n.push("]");
                }if (!(e instanceof String || e instanceof Number || e instanceof Boolean)) {
                  n.push("{"), r = "";for (i in e) {
                    Object.prototype.hasOwnProperty.call(e, i) && "function" != typeof (o = e[i]) && (n.push(r), Re(i, n), n.push(":"), Ce(t, o, n), r = ",");
                  }return void n.push("}");
                }e = e.valueOf();
              }switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "string":
                  Re(e, n);break;case "number":
                  n.push(isFinite(e) && !isNaN(e) ? e + "" : "null");break;case "boolean":
                  n.push(e + "");break;case "function":
                  n.push("null");break;default:
                  throw Error("Unknown type: " + (typeof e === "undefined" ? "undefined" : _typeof(e)));}
            }
          }function Re(t, e) {
            e.push('"', t.replace(bc, function (t) {
              var e = mc[t];return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), mc[t] = e), e;
            }), '"');
          }function _e() {
            this.a = "", this.b = gc;
          }function De(t) {
            return t instanceof _e && t.constructor === _e && t.b === gc ? t.a : (w("expected object of type SafeHtml, got '" + t + "' of type " + r(t)), "type_error:SafeHtml");
          }function Le(t) {
            var e = new _e();return e.a = t, e;
          }function xe() {
            var t = Ze();return Uu && !!Hu && 11 == Hu || /Edge\/\d+/.test(t);
          }function Ue() {
            return nu.window && nu.window.location.href || "";
          }function je(t, e) {
            e = e || nu.window;var n = "about:blank";t && (n = Ee(Ne(t))), e.location.href = n;
          }function Me(t, e) {
            var n,
                i = [];for (n in t) {
              if (n in e) {
                if (_typeof(t[n]) != _typeof(e[n])) i.push(n);else if (a(t[n])) {
                  t: {
                    var r = void 0,
                        o = t[n],
                        s = e[n];for (r in o) {
                      if (!(r in s) || o[r] !== s[r]) {
                        r = !1;break t;
                      }
                    }for (r in s) {
                      if (!(r in o)) {
                        r = !1;break t;
                      }
                    }r = !0;
                  }r || i.push(n);
                } else "object" == _typeof(t[n]) && null != t[n] && null != e[n] ? 0 < Me(t[n], e[n]).length && i.push(n) : t[n] !== e[n] && i.push(n);
              } else i.push(n);
            }for (n in e) {
              n in t || i.push(n);
            }return i;
          }function Ve() {
            var t = Ze();return !((t = Ye(t) != Ic ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t || Uu && Hu && !(9 < Hu));
          }function Fe(t) {
            return t = (t || Ze()).toLowerCase(), !!(t.match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/));
          }function Ke(t) {
            t = t || nu.window;try {
              t.close();
            } catch (t) {}
          }function qe(t, e, n) {
            var i = "" + Math.floor(1e9 * Math.random());e = e || 500, n = n || 600;var r = (window.screen.availHeight - n) / 2,
                o = (window.screen.availWidth - e) / 2;e = { width: e, height: n, top: 0 < r ? r : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, n = Ze().toLowerCase(), i && (e.target = i, L(n, "crios/") && (e.target = "_blank")), Ye(Ze()) == yc && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof Ae ? n : Ne(void 0 !== n.href ? n.href : n + ""), n = t.target || n.target, r = [];for (a in t) {
              switch (a) {case "width":case "height":case "top":case "left":
                  r.push(a + "=" + t[a]);break;case "target":case "noopener":case "noreferrer":
                  break;default:
                  r.push(a + "=" + (t[a] ? 1 : 0));}
            }var a = r.join(",");if ((U("iPhone") && !U("iPod") && !U("iPad") || U("iPad") || U("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (a = i.document.createElement("A"), e instanceof Ae || e instanceof Ae || (e = e.la ? e.ja() : e + "", pc.test(e) || (e = "about:invalid#zClosurez"), e = Se(e)), a.href = Ee(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), t = document.createEvent("MouseEvent"), t.initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = i.open("", n, a), t = Ee(e), a && (Mu && L(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, we("b/12014412, meta tag with sanitized URL"), t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + D(t) + '">', t = Le(t), a.document.write(De(t)), a.document.close())) : (a = i.open(Ee(e), n, a)) && t.noopener && (a.opener = null), a) try {
              a.focus();
            } catch (t) {}return a;
          }function Xe(t) {
            return new W(function (e) {
              function n() {
                Ht(2e3).then(function () {
                  if (t && !t.closed) return n();e();
                });
              }return n();
            });
          }function He() {
            var t = null;return new W(function (e) {
              "complete" == nu.document.readyState ? e() : (t = function t() {
                e();
              }, Pt(window, "load", t));
            }).o(function (e) {
              throw Ct(window, "load", t), e;
            });
          }function Be() {
            return We(void 0) ? He().then(function () {
              return new W(function (t, e) {
                var n = nu.document,
                    i = setTimeout(function () {
                  e(Error("Cordova framework is not ready."));
                }, 1e3);n.addEventListener("deviceready", function () {
                  clearTimeout(i), t();
                }, !1);
              });
            }) : Y(Error("Cordova must run in an Android or iOS file scheme."));
          }function We(t) {
            return t = t || Ze(), !("file:" !== rn() || !t.toLowerCase().match(/iphone|ipad|ipod|android/));
          }function Ge() {
            var t = nu.window;try {
              return !(!t || t == t.top);
            } catch (t) {
              return !1;
            }
          }function ze() {
            return tu.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : tu.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
          }function Je() {
            var t = ze();return "ReactNative" === t || "Node" === t;
          }function Ye(t) {
            var e = t.toLowerCase();return L(e, "opera/") || L(e, "opr/") || L(e, "opios/") ? "Opera" : L(e, "iemobile") ? "IEMobile" : L(e, "msie") || L(e, "trident/") ? "IE" : L(e, "edge/") ? "Edge" : L(e, "firefox/") ? yc : L(e, "silk/") ? "Silk" : L(e, "blackberry") ? "Blackberry" : L(e, "webos") ? "Webos" : !L(e, "safari/") || L(e, "chrome/") || L(e, "crios/") || L(e, "android") ? !L(e, "chrome/") && !L(e, "crios/") || L(e, "edge/") ? L(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : Ic : "Safari";
          }function $e(t, e) {
            e = e || [];var n,
                i = [],
                r = {};for (n in Tc) {
              r[Tc[n]] = !0;
            }for (n = 0; n < e.length; n++) {
              void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
            }return i.sort(), e = i, e.length || (e = ["FirebaseCore-web"]), i = ze(), r = "", (r = "Browser" === i ? Ye(Ze()) : i) + "/JsCore/" + t + "/" + e.join(",");
          }function Ze() {
            return nu.navigator && nu.navigator.userAgent || "";
          }function Qe(t, e) {
            t = t.split("."), e = e || nu;for (var n = 0; n < t.length && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e; n++) {
              e = e[t[n]];
            }return n != t.length && (e = void 0), e;
          }function tn() {
            try {
              var t = nu.localStorage,
                  e = cn();if (t) return t.setItem(e, "1"), t.removeItem(e), !xe() || !!nu.indexedDB;
            } catch (t) {}return !1;
          }function en() {
            return (nn() || "chrome-extension:" === rn() || We()) && !Je() && tn();
          }function nn() {
            return "http:" === rn() || "https:" === rn();
          }function rn() {
            return nu.location && nu.location.protocol || null;
          }function on(t) {
            return t = t || Ze(), !Fe(t) && Ye(t) != yc;
          }function an(t) {
            return void 0 === t ? null : Oe(t);
          }function sn(t) {
            var e,
                n = {};for (e in t) {
              t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
            }return n;
          }function un(t) {
            if (null !== t) return JSON.parse(t);
          }function cn(t) {
            return t || "" + Math.floor(1e9 * Math.random());
          }function hn(t) {
            return t = t || Ze(), "Safari" != Ye(t) && !t.toLowerCase().match(/iphone|ipad|ipod/);
          }function fn() {
            var t = nu.___jsl;if (t && t.H) for (var e in t.H) {
              if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP) for (var n = 0; n < t.CP.length; n++) {
                t.CP[n] = null;
              }
            }
          }function ln() {
            var t = nu.navigator;return !t || "boolean" != typeof t.onLine || !nn() && "chrome-extension:" !== rn() && void 0 === t.connection || t.onLine;
          }function dn(t, e) {
            if (t > e) throw Error("Short delay should be less than long delay!");this.c = t, this.b = e, t = Ze(), e = ze(), this.a = Fe(t) || "ReactNative" === e;
          }function pn() {
            var t = nu.document;return !t || void 0 === t.visibilityState || "visible" == t.visibilityState;
          }function vn() {
            var t = nu.document,
                _e2 = null;return pn() || !t ? J() : new W(function (n) {
              _e2 = function e() {
                pn() && (t.removeEventListener("visibilitychange", _e2, !1), n());
              }, t.addEventListener("visibilitychange", _e2, !1);
            }).o(function (n) {
              throw t.removeEventListener("visibilitychange", _e2, !1), n;
            });
          }function mn(t) {
            try {
              var e = new Date(parseInt(t, 10));if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString();
            } catch (t) {}return null;
          }function bn(t, e, n) {
            kc ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : t[e] = n;
          }function gn(t, e) {
            if (e) for (var n in e) {
              e.hasOwnProperty(n) && bn(t, n, e[n]);
            }
          }function wn(t) {
            var e = {};return gn(e, t), e;
          }function yn(t) {
            var e,
                n = {};for (e in t) {
              t.hasOwnProperty(e) && (n[e] = t[e]);
            }return n;
          }function In(t, e) {
            if (!e || !e.length) return !0;if (!t) return !1;for (var n = 0; n < e.length; n++) {
              var i = t[e[n]];if (void 0 === i || null === i || "" === i) return !1;
            }return !0;
          }function Tn(t) {
            var e = t;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null != t) {
              e = "length" in t ? [] : {};for (var n in t) {
                bn(e, n, Tn(t[n]));
              }
            }return e;
          }function kn(t) {
            var e = {},
                n = t[Nc],
                i = t[Sc];if (t = t[Oc], !n || !t) throw Error("Invalid provider user info!");e[Cc] = i || null, e[Pc] = n, bn(this, _c, t), bn(this, Rc, Tn(e));
          }function An(t, e) {
            this.code = Dc + t, this.message = e || Lc[t] || "";
          }function En(t) {
            var e = t && t.code;return e ? new An(e.substring(Dc.length), t.message) : null;
          }function Nn(t) {
            var e = t[Mc];if (void 0 === e) throw new An("missing-continue-uri");if ("string" != typeof e || "string" == typeof e && !e.length) throw new An("invalid-continue-uri");this.h = e, this.c = this.a = null, this.g = !1;var n = t[xc];if (n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) {
              e = n[Kc];var i = n[Vc];if (n = n[Fc], "string" == typeof e && e.length) {
                if (this.a = e, void 0 !== i && "boolean" != typeof i) throw new An("argument-error", Vc + " property must be a boolean when specified.");if (this.g = !!i, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new An("argument-error", Fc + " property must be a non empty string when specified.");this.c = n || null;
              } else {
                if (void 0 !== e) throw new An("argument-error", Kc + " property must be a non empty string when specified.");if (void 0 !== i || void 0 !== n) throw new An("missing-android-pkg-name");
              }
            } else if (void 0 !== n) throw new An("argument-error", xc + " property must be a non null object when specified.");if (this.b = null, (e = t[jc]) && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
              if ("string" == typeof (e = e[qc]) && e.length) this.b = e;else if (void 0 !== e) throw new An("argument-error", qc + " property must be a non empty string when specified.");
            } else if (void 0 !== e) throw new An("argument-error", jc + " property must be a non null object when specified.");if (void 0 !== (t = t[Uc]) && "boolean" != typeof t) throw new An("argument-error", Uc + " property must be a boolean when specified.");if ((this.f = !!t) && !this.b && !this.a) throw new An("argument-error", Uc + " property can't be true when no mobile application is provided.");
          }function Sn(t) {
            var e = {};e.continueUrl = t.h, e.canHandleCodeInApp = t.f, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.c, e.androidInstallApp = t.g), e.iOSBundleId = t.b;for (var n in e) {
              null === e[n] && delete e[n];
            }return e;
          }function On(t) {
            return hu(t, function (t) {
              return t = t.toString(16), 1 < t.length ? t : "0" + t;
            }).join("");
          }function Pn(t) {
            var e = "";return Cn(t, function (t) {
              e += String.fromCharCode(t);
            }), e;
          }function Cn(t, e) {
            function n(e) {
              for (; i < t.length;) {
                var n = t.charAt(i++),
                    r = Hc[n];if (null != r) return r;if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
              }return e;
            }Rn();for (var i = 0;;) {
              var r = n(-1),
                  o = n(0),
                  a = n(64),
                  s = n(64);if (64 === s && -1 === r) break;e(r << 2 | o >> 4), 64 != a && (e(o << 4 & 240 | a >> 2), 64 != s && e(a << 6 & 192 | s));
            }
          }function Rn() {
            if (!Xc) {
              Xc = {}, Hc = {};for (var t = 0; 65 > t; t++) {
                Xc[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), Hc[Xc[t]] = t, 62 <= t && (Hc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t);
              }
            }
          }function _n(t) {
            this.c = t.sub, ou(), this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null, this.b = !!t.is_anonymous || "anonymous" == this.a;
          }function Dn(t) {
            if (t = t.split("."), 3 != t.length) return null;t = t[1];for (var e = (4 - t.length % 4) % 4, n = 0; n < e; n++) {
              t += ".";
            }try {
              var i = JSON.parse(Pn(t));if (i.sub && i.iss && i.aud && i.exp) return new _n(i);
            } catch (t) {}return null;
          }function Ln(t) {
            for (var e in Gc) {
              if (Gc[e].Na == t) return Gc[e];
            }return null;
          }function xn(t) {
            var e = {};e["facebook.com"] = Mn, e["google.com"] = Fn, e["github.com"] = Vn, e["twitter.com"] = Kn;var n = t && t[Jc];try {
              if (n) return e[n] ? new e[n](t) : new jn(t);if (void 0 !== t[zc]) return new Un(t);
            } catch (t) {}return null;
          }function Un(t) {
            var e = t[Jc];if (!e && t[zc]) {
              var n = Dn(t[zc]);n && n.a && (e = n.a);
            }if (!e) throw Error("Invalid additional user info!");"anonymous" != e && "custom" != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), bn(this, "providerId", e), bn(this, "isNewUser", n);
          }function jn(t) {
            Un.call(this, t), t = un(t.rawUserInfo || "{}"), bn(this, "profile", Tn(t || {}));
          }function Mn(t) {
            if (jn.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!");
          }function Vn(t) {
            if (jn.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");bn(this, "username", this.profile && this.profile.login || null);
          }function Fn(t) {
            if (jn.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!");
          }function Kn(t) {
            if (jn.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");bn(this, "username", t.screenName || null);
          }function qn(t, e) {
            return t.then(function (t) {
              if (t[mh]) {
                var n = Dn(t[mh]);if (!n || e != n.c) throw new An("user-mismatch");return t;
              }throw new An("user-mismatch");
            }).o(function (t) {
              throw t && t.code && t.code == Dc + "user-not-found" ? new An("user-mismatch") : t;
            });
          }function Xn(t, e) {
            if (e.idToken || e.accessToken) e.idToken && bn(this, "idToken", e.idToken), e.accessToken && bn(this, "accessToken", e.accessToken);else {
              if (!e.oauthToken || !e.oauthTokenSecret) throw new An("internal-error", "failed to construct a credential");bn(this, "accessToken", e.oauthToken), bn(this, "secret", e.oauthTokenSecret);
            }bn(this, "providerId", t);
          }function Hn(t) {
            var e = {};return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, { postBody: "" + fe(e), requestUri: "http://localhost" };
          }function Bn(t, e) {
            this.tc = e || [], gn(this, { providerId: t, isOAuthProvider: !0 }), this.sb = {}, this.Xa = (Ln(t) || {}).Ma || null, this.Va = null;
          }function Wn(t) {
            Bn.call(this, t, Wc), this.a = [];
          }function Gn() {
            Wn.call(this, "facebook.com");
          }function zn(t) {
            if (!t) throw new An("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var e = t;return c(t) && (e = t.accessToken), new Gn().credential(null, e);
          }function Jn() {
            Wn.call(this, "github.com");
          }function Yn(t) {
            if (!t) throw new An("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var e = t;return c(t) && (e = t.accessToken), new Jn().credential(null, e);
          }function $n() {
            Wn.call(this, "google.com"), this.ta("profile");
          }function Zn(t, e) {
            var n = t;return c(t) && (n = t.idToken, e = t.accessToken), new $n().credential(n, e);
          }function Qn() {
            Bn.call(this, "twitter.com", Bc);
          }function ti(t, e) {
            var n = t;if (c(n) || (n = { oauthToken: t, oauthTokenSecret: e }), !n.oauthToken || !n.oauthTokenSecret) throw new An("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new Xn("twitter.com", n);
          }function ei(t, e) {
            this.a = t, this.f = e, bn(this, "providerId", "password");
          }function ni() {
            gn(this, { providerId: "password", isOAuthProvider: !1 });
          }function ii(t) {
            if (!(t.Pa && t.Oa || t.Ea && t.Y)) throw new An("internal-error");this.a = t, bn(this, "providerId", "phone");
          }function ri(t) {
            return t.a.Ea && t.a.Y ? { temporaryProof: t.a.Ea, phoneNumber: t.a.Y } : { sessionInfo: t.a.Pa, code: t.a.Oa };
          }function oi(t) {
            try {
              this.a = t || tu.auth();
            } catch (t) {
              throw new An("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
            }gn(this, { providerId: "phone", isOAuthProvider: !1 });
          }function ai(t, e) {
            if (!t) throw new An("missing-verification-id");if (!e) throw new An("missing-verification-code");return new ii({ Pa: t, Oa: e });
          }function si(t) {
            if (t.temporaryProof && t.phoneNumber) return new ii({ Ea: t.temporaryProof, Y: t.phoneNumber });var e = t && t.providerId;if (!e || "password" === e) return null;var n = t && t.oauthAccessToken,
                i = t && t.oauthTokenSecret;t = t && t.oauthIdToken;try {
              switch (e) {case "google.com":
                  return Zn(t, n);case "facebook.com":
                  return zn(n);case "github.com":
                  return Yn(n);case "twitter.com":
                  return ti(n, i);default:
                  return new Wn(e).credential(t, n);}
            } catch (t) {
              return null;
            }
          }function ui(t) {
            if (!t.isOAuthProvider) throw new An("invalid-oauth-provider");
          }function ci(t, e, n, i, r) {
            if (this.b = t, this.c = e || null, this.f = n || null, this.g = i || null, this.a = r || null, !this.f && !this.a) throw new An("invalid-auth-event");if (this.f && this.a) throw new An("invalid-auth-event");if (this.f && !this.g) throw new An("invalid-auth-event");
          }function hi(t) {
            return t = t || {}, t.type ? new ci(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && En(t.error)) : null;
          }function fi() {
            this.b = null, this.a = [];
          }function li(t) {
            var e = "unauthorized-domain",
                n = void 0,
                i = re(t);t = i.b, i = i.c, "chrome-extension" == i ? n = _("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = _("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", An.call(this, e, n);
          }function di(t, e, n) {
            An.call(this, t, n), t = e || {}, t.tb && bn(this, "email", t.tb), t.Y && bn(this, "phoneNumber", t.Y), t.credential && bn(this, "credential", t.credential);
          }function pi(t) {
            if (t.code) {
              var e = t.code || "";0 == e.indexOf(Dc) && (e = e.substring(Dc.length));var n = { credential: si(t) };if (t.email) n.tb = t.email;else {
                if (!t.phoneNumber) return new An(e, t.message || void 0);n.Y = t.phoneNumber;
              }return new di(e, n, t.message);
            }return null;
          }function vi() {}function mi(t) {
            return t.c || (t.c = t.b());
          }function bi() {}function gi(t) {
            if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
              for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < 4; n++) {
                var i = e[n];try {
                  return new ActiveXObject(i), t.f = i;
                } catch (t) {}
              }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }return t.f;
          }function wi() {}function yi() {
            this.a = new XDomainRequest(), this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = "", this.a.onload = l(this.Yb, this), this.a.onerror = l(this.yb, this), this.a.onprogress = l(this.Zb, this), this.a.ontimeout = l(this.$b, this);
          }function Ii(t, e) {
            t.readyState = e, t.onreadystatechange && t.onreadystatechange();
          }function Ti(t, e, n) {
            this.reset(t, e, n, void 0, void 0);
          }function ki(t) {
            this.f = t, this.b = this.c = this.a = null;
          }function Ai(t, e) {
            this.name = t, this.value = e;
          }function Ei(t) {
            return t.c ? t.c : t.a ? Ei(t.a) : (w("Root logger has no level set."), null);
          }function Ni(t) {
            rh || (rh = new ki(""), ih[""] = rh, rh.c = eh);var e;if (!(e = ih[t])) {
              e = new ki(t);var n = t.lastIndexOf("."),
                  i = t.substr(n + 1);n = Ni(t.substr(0, n)), n.b || (n.b = {}), n.b[i] = e, e.a = n, ih[t] = e;
            }return e;
          }function Si(t, e) {
            t && t.log(nh, e, void 0);
          }function Oi(t) {
            Mt.call(this), this.headers = new zt(), this.w = t || null, this.b = !1, this.v = this.a = null, this.g = this.I = this.i = "", this.c = this.G = this.h = this.B = !1, this.f = 0, this.m = null, this.l = oh, this.s = this.N = !1;
          }function Pi(t, e, n, i, r) {
            if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.i + "; newUri=" + e);n = n ? n.toUpperCase() : "GET", t.i = e, t.g = "", t.I = n, t.B = !1, t.b = !0, t.a = t.w ? t.w.a() : Zc.a(), t.v = mi(t.w ? t.w : Zc), t.a.onreadystatechange = l(t.Bb, t);try {
              Si(t.J, Fi(t, "Opening Xhr")), t.G = !0, t.a.open(n, e + "", !0), t.G = !1;
            } catch (e) {
              return Si(t.J, Fi(t, "Error opening Xhr: " + e.message)), void _i(t, e);
            }e = i || "";var o = new zt(t.headers);r && Gt(r, function (t, e) {
              o.set(e, t);
            }), r = N(o.S()), i = nu.FormData && e instanceof nu.FormData, !S(ch, n) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function (t, e) {
              this.a.setRequestHeader(e, t);
            }, t), t.l && (t.a.responseType = t.l), "withCredentials" in t.a && t.a.withCredentials !== t.N && (t.a.withCredentials = t.N);try {
              Ui(t), 0 < t.f && (t.s = Ci(t.a), Si(t.J, Fi(t, "Will abort after " + t.f + "ms if incomplete, xhr2 " + t.s)), t.s ? (t.a.timeout = t.f, t.a.ontimeout = l(t.Fa, t)) : t.m = Xt(t.Fa, t.f, t)), Si(t.J, Fi(t, "Sending request")), t.h = !0, t.a.send(e), t.h = !1;
            } catch (e) {
              Si(t.J, Fi(t, "Send error: " + e.message)), _i(t, e);
            }
          }function Ci(t) {
            return Uu && gt(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout;
          }function Ri(t) {
            return "content-type" == t.toLowerCase();
          }function _i(t, e) {
            t.b = !1, t.a && (t.c = !0, t.a.abort(), t.c = !1), t.g = e, Di(t), xi(t);
          }function Di(t) {
            t.B || (t.B = !0, Vt(t, "complete"), Vt(t, "error"));
          }function Li(t) {
            if (t.b && void 0 !== eu) if (t.v[1] && 4 == ji(t) && 2 == Mi(t)) Si(t.J, Fi(t, "Local request error detected and ignored"));else if (t.h && 4 == ji(t)) Xt(t.Bb, 0, t);else if (Vt(t, "readystatechange"), 4 == ji(t)) {
              Si(t.J, Fi(t, "Request complete")), t.b = !1;try {
                var e = Mi(t);t: switch (e) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
                    var n = !0;break t;default:
                    n = !1;}var i;if (!(i = n)) {
                  var r;if (r = 0 === e) {
                    var o = (t.i + "").match(rc)[1] || null;if (!o && nu.self && nu.self.location) {
                      var a = nu.self.location.protocol;o = a.substr(0, a.length - 1);
                    }r = !uh.test(o ? o.toLowerCase() : "");
                  }i = r;
                }if (i) Vt(t, "complete"), Vt(t, "success");else {
                  try {
                    var s = 2 < ji(t) ? t.a.statusText : "";
                  } catch (e) {
                    Si(t.J, "Can not get status: " + e.message), s = "";
                  }t.g = s + " [" + Mi(t) + "]", Di(t);
                }
              } finally {
                xi(t);
              }
            }
          }function xi(t, e) {
            if (t.a) {
              Ui(t);var n = t.a,
                  r = t.v[0] ? i : null;t.a = null, t.v = null, e || Vt(t, "ready");try {
                n.onreadystatechange = r;
              } catch (e) {
                (t = t.J) && t.log(th, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
              }
            }
          }function Ui(t) {
            t.a && t.s && (t.a.ontimeout = null), t.m && (nu.clearTimeout(t.m), t.m = null);
          }function ji(t) {
            return t.a ? t.a.readyState : 0;
          }function Mi(t) {
            try {
              return 2 < ji(t) ? t.a.status : -1;
            } catch (t) {
              return -1;
            }
          }function Vi(t) {
            try {
              return t.a ? t.a.responseText : "";
            } catch (e) {
              return Si(t.J, "Can not get responseText: " + e.message), "";
            }
          }function Fi(t, e) {
            return e + " [" + t.I + " " + t.i + " " + Mi(t) + "]";
          }function Ki(t, e) {
            this.g = [], this.v = t, this.s = e || null, this.f = this.a = !1, this.c = void 0, this.u = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0;
          }function qi(t, e, n) {
            t.a = !0, t.c = n, t.f = !e, Gi(t);
          }function Xi(t) {
            if (t.a) {
              if (!t.u) throw new zi(t);t.u = !1;
            }
          }function Hi(t, e) {
            Bi(t, null, e, void 0);
          }function Bi(t, e, n, i) {
            t.g.push([e, n, i]), t.a && Gi(t);
          }function Wi(t) {
            return fu(t.g, function (t) {
              return u(t[1]);
            });
          }function Gi(t) {
            if (t.h && t.a && Wi(t)) {
              var e = t.h,
                  n = hh[e];n && (nu.clearTimeout(n.a), delete hh[e]), t.h = 0;
            }t.b && (t.b.l--, delete t.b), e = t.c;for (var i = n = !1; t.g.length && !t.i;) {
              var r = t.g.shift(),
                  o = r[0],
                  a = r[1];if (r = r[2], o = t.f ? a : o) try {
                var s = o.call(r || t.s, e);void 0 !== s && (t.f = t.f && (s == e || s instanceof Error), t.c = e = s), (m(e) || "function" == typeof nu.Promise && e instanceof nu.Promise) && (i = !0, t.i = !0);
              } catch (i) {
                e = i, t.f = !0, Wi(t) || (n = !0);
              }
            }t.c = e, i && (s = l(t.m, t, !0), i = l(t.m, t, !1), e instanceof Ki ? (Bi(e, s, i), e.w = !0) : e.then(s, i)), n && (e = new Yi(e), hh[e.a] = e, t.h = e.a);
          }function zi() {
            b.call(this);
          }function Ji() {
            b.call(this);
          }function Yi(t) {
            this.a = nu.setTimeout(l(this.c, this), 0), this.b = t;
          }function $i(e) {
            var n = document;return t(e) ? n.getElementById(e) : e;
          }function Zi(t, e) {
            j(e, function (e, n) {
              e && e.la && (e = e.ja()), "style" == n ? t.style.cssText = e : "class" == n ? t.className = e : "for" == n ? t.htmlFor = e : lh.hasOwnProperty(n) ? t.setAttribute(lh[n], e) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? t.setAttribute(n, e) : t[n] = e;
            });
          }function Qi(e, n, i) {
            var r = arguments,
                o = document,
                s = r[0] + "",
                u = r[1];if (!fh && u && (u.name || u.type)) {
              if (s = ["<", s], u.name && s.push(' name="', D(u.name), '"'), u.type) {
                s.push(' type="', D(u.type), '"');var c = {};F(c, u), delete c.type, u = c;
              }s.push(">"), s = s.join("");
            }return s = o.createElement(s), u && (t(u) ? s.className = u : a(u) ? s.className = u.join(" ") : Zi(s, u)), 2 < r.length && tr(o, s, r), s;
          }function tr(e, n, i) {
            function r(i) {
              i && n.appendChild(t(i) ? e.createTextNode(i) : i);
            }for (var o = 2; o < i.length; o++) {
              var a = i[o];!s(a) || c(a) && 0 < a.nodeType ? r(a) : cu(er(a) ? R(a) : a, r);
            }
          }function er(t) {
            if (t && "number" == typeof t.length) {
              if (c(t)) return "function" == typeof t.item || "string" == typeof t.item;if (u(t)) return "function" == typeof t.item;
            }return !1;
          }function nr(t) {
            var e = {},
                n = e.document || document,
                i = Ie(t),
                r = document.createElement("SCRIPT"),
                o = { Db: r, Fa: void 0 },
                a = new Ki(rr, o),
                s = null,
                u = null != e.timeout ? e.timeout : 5e3;return 0 < u && (s = window.setTimeout(function () {
              or(r, !0);var t = new ar(ph, "Timeout reached for loading script " + i);Xi(a), qi(a, !1, t);
            }, u), o.Fa = s), r.onload = r.onreadystatechange = function () {
              r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (or(r, e.Uc || !1, s), a.B());
            }, r.onerror = function () {
              or(r, !0, s);var t = new ar(dh, "Error while loading script " + i);Xi(a), qi(a, !1, t);
            }, o = e.attributes || {}, F(o, { type: "text/javascript", charset: "UTF-8" }), Zi(r, o), r.src = Ie(t), ir(n).appendChild(r), a;
          }function ir(t) {
            var e;return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement;
          }function rr() {
            if (this && this.Db) {
              var t = this.Db;t && "SCRIPT" == t.tagName && or(t, !0, this.Fa);
            }
          }function or(t, e, n) {
            null != n && nu.clearTimeout(n), t.onload = i, t.onerror = i, t.onreadystatechange = i, e && window.setTimeout(function () {
              t && t.parentNode && t.parentNode.removeChild(t);
            }, 0);
          }function ar(t, e) {
            var n = "Jsloader error (code #" + t + ")";e && (n += ": " + e), b.call(this, n), this.code = t;
          }function sr(t) {
            this.f = t;
          }function ur(t, e, n) {
            var i = "Node" == ze();if (!(i = nu.XMLHttpRequest || i && tu.INTERNAL.node && tu.INTERNAL.node.XMLHttpRequest)) throw new An("internal-error", "The XMLHttpRequest compatibility library was not found.");this.b = t, t = e || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = t.secureTokenTimeout || bh, this.c = V(t.secureTokenHeaders || gh), this.g = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || wh, this.a = V(t.firebaseHeaders || yh), n && (this.a["X-Client-Version"] = n, this.c["X-Client-Version"] = n), this.f = new wi(), this.s = new sr(i);
          }function cr(t, e) {
            e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"];
          }function hr(t, e) {
            e ? (t.a["X-Client-Version"] = e, t.c["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.c["X-Client-Version"]);
          }function fr(t, e, n, i, r, o, a) {
            ln() ? (Ve() ? t = l(t.m, t) : (vh || (vh = new W(function (t, e) {
              lr(t, e);
            })), t = l(t.u, t)), t(e, n, i, r, o, a)) : n && n(null);
          }function lr(t, e) {
            ((window.gapi || {}).client || {}).request ? t() : (nu[Th] = function () {
              ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"));
            }, Hi(nr(Te(Ih, { onload: Th })), function () {
              e(Error("CORS_UNSUPPORTED"));
            }));
          }function dr(t, e) {
            return new W(function (n, i) {
              "refresh_token" == e.grant_type && e.refresh_token || "authorization_code" == e.grant_type && e.code ? fr(t, t.i + "?key=" + encodeURIComponent(t.b), function (t) {
                t ? t.error ? i(Rr(t)) : t.access_token && t.refresh_token ? n(t) : i(new An("internal-error")) : i(new An("network-request-failed"));
              }, "POST", "" + fe(e), t.c, t.l.get()) : i(new An("internal-error"));
            });
          }function pr(t, e, n, i, r, o) {
            var a = re(t.g + e);ne(a, "key", t.b), o && ne(a, "cb", "" + ou());var s = "GET" == n;if (s) for (var u in i) {
              i.hasOwnProperty(u) && ne(a, u, i[u]);
            }return new W(function (e, o) {
              fr(t, "" + a, function (t) {
                t ? t.error ? o(Rr(t, r || {})) : e(t) : o(new An("network-request-failed"));
              }, n, s ? void 0 : Oe(sn(i)), t.a, t.h.get());
            });
          }function vr(t) {
            if (!$c.test(t.email)) throw new An("invalid-email");
          }function mr(t) {
            "email" in t && vr(t);
          }function br(t, e) {
            return Pr(t, Oh, { identifier: e, continueUri: nn() ? Ue() : "http://localhost" }).then(function (t) {
              return t.allProviders || [];
            });
          }function gr(t) {
            return Pr(t, Lh, {}).then(function (t) {
              return t.authorizedDomains || [];
            });
          }function wr(t) {
            if (!t[mh]) throw new An("internal-error");
          }function yr(t) {
            if (t.phoneNumber || t.temporaryProof) {
              if (!t.phoneNumber || !t.temporaryProof) throw new An("internal-error");
            } else {
              if (!t.sessionInfo) throw new An("missing-verification-id");if (!t.code) throw new An("missing-verification-code");
            }
          }function Ir(t, e) {
            return Pr(t, jh, e);
          }function Tr(t, e, n) {
            return Pr(t, Ch, { idToken: e, deleteProvider: n });
          }function kr(t) {
            if (!t.requestUri || !t.sessionId && !t.postBody) throw new An("internal-error");
          }function Ar(t) {
            var e = null;if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = pi(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = pi(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = pi(t)) : t.errorMessage && (e = Cr(t.errorMessage)), e) throw e;if (!t[mh]) throw new An("internal-error");
          }function Er(t, e) {
            return e.returnIdpCredential = !0, Pr(t, Kh, e);
          }function Nr(t, e) {
            return e.returnIdpCredential = !0, Pr(t, Xh, e);
          }function Sr(t, e) {
            return e.returnIdpCredential = !0, e.autoCreate = !1, Pr(t, qh, e);
          }function Or(t) {
            if (!t.oobCode) throw new An("invalid-action-code");
          }function Pr(t, e, n) {
            if (!In(n, e.ea)) return Y(new An("internal-error"));var i,
                r = e.Ab || "POST";return J(n).then(e.D).then(function () {
              return e.T && (n.returnSecureToken = !0), pr(t, e.endpoint, r, n, e.Rb, e.ob || !1);
            }).then(function (t) {
              return i = t;
            }).then(e.O).then(function () {
              if (!e.ga) return i;if (!(e.ga in i)) throw new An("internal-error");return i[e.ga];
            });
          }function Cr(t) {
            return Rr({ error: { errors: [{ message: t }], code: 400, message: t } });
          }function Rr(t, e) {
            var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                i = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (n = i[n] ? new An(i[n]) : null) return n;n = t.error && t.error.message || "", i = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash" }, F(i, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0;for (var r in i) {
              if (0 === n.indexOf(r)) return new An(i[r], e);
            }return !e && t && (e = an(t)), new An("internal-error", e);
          }function _r(t) {
            for (var e in Jh) {
              if (Jh[e].id === t) return t = Jh[e], { firebaseEndpoint: t.Wa, secureTokenEndpoint: t.bb };
            }return null;
          }function Dr(t) {
            this.b = t, this.a = null, this.Za = Lr(this);
          }function Lr(t) {
            return jr().then(function () {
              return new W(function (e, n) {
                Qe("gapi.iframes.getContext")().open({ where: document.body, url: t.b, messageHandlersFilter: Qe("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function (i) {
                  function r() {
                    clearTimeout(o), e();
                  }t.a = i, t.a.restyle({ setHideOnLeave: !1 });var o = setTimeout(function () {
                    n(Error("Network Error"));
                  }, Zh.get());i.ping(r).then(r, function () {
                    n(Error("Network Error"));
                  });
                });
              });
            });
          }function xr(t, e) {
            return t.Za.then(function () {
              return new W(function (n) {
                t.a.send(e.type, e, n, Qe("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
              });
            });
          }function Ur(t, e) {
            t.Za.then(function () {
              t.a.register("authEvent", e, Qe("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
            });
          }function jr() {
            return Qh || (Qh = new W(function (t, e) {
              if (ln()) {
                var n = function n() {
                  fn(), Qe("gapi.load")("gapi.iframes", { callback: t, ontimeout: function ontimeout() {
                      fn(), e(Error("Network Error"));
                    }, timeout: $h.get() });
                };if (Qe("gapi.iframes.Iframe")) t();else if (Qe("gapi.load")) n();else {
                  var i = "__iframefcb" + Math.floor(1e6 * Math.random());nu[i] = function () {
                    Qe("gapi.load") ? n() : e(Error("Network Error"));
                  }, i = Te(Yh, { onload: i }), J(nr(i)).o(function () {
                    e(Error("Network Error"));
                  });
                }
              } else e(Error("Network Error"));
            }).o(function (t) {
              throw Qh = null, t;
            }));
          }function Mr(t, e, n) {
            this.i = t, this.g = e, this.h = n, this.f = null, this.a = oe(this.i, "/__/auth/iframe"), ne(this.a, "apiKey", this.g), ne(this.a, "appName", this.h), this.b = null, this.c = [];
          }function Vr(t, e, n, i, r) {
            this.m = t, this.u = e, this.c = n, this.l = i, this.h = this.g = this.i = null, this.a = r, this.f = null;
          }function Fr(t) {
            try {
              return tu.app(t).auth().Ka();
            } catch (t) {
              return [];
            }
          }function Kr(t, e, n, i, r) {
            this.u = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.m = this.s = this.v = null, this.g = [], this.l = this.a = null;
          }function qr(t) {
            var e = Ue();return gr(t).then(function (t) {
              t: {
                var n = re(e),
                    i = n.c;n = n.b;for (var r = 0; r < t.length; r++) {
                  var o = t[r],
                      a = n,
                      s = i;if (0 == o.indexOf("chrome-extension://") ? a = re(o).b == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : wc.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) {
                    t = !0;break t;
                  }
                }t = !1;
              }if (!t) throw new li(Ue());
            });
          }function Xr(t) {
            return t.l ? t.l : (t.l = He().then(function () {
              if (!t.s) {
                var e = t.c,
                    n = t.h,
                    i = Fr(t.b),
                    r = new Mr(t.u, t.f, t.b);r.f = e, r.b = n, r.c = R(i || []), t.s = "" + r;
              }t.i = new Dr(t.s), Wr(t);
            }), t.l);
          }function Hr(t) {
            return t.m || (t.v = t.c ? $e(t.c, Fr(t.b)) : null, t.m = new ur(t.f, _r(t.h), t.v)), t.m;
          }function Br(t, e, n, i, r, o, a, s, u, c) {
            return t = new Vr(t, e, n, i, r), t.i = o, t.g = a, t.h = s, t.b = V(u || null), t.f = c, "" + t;
          }function Wr(t) {
            if (!t.i) throw Error("IfcHandler must be initialized!");Ur(t.i, function (e) {
              var n = {};if (e && e.authEvent) {
                var i = !1;for (e = hi(e.authEvent), n = 0; n < t.g.length; n++) {
                  i = t.g[n](e) || i;
                }return n = {}, n.status = i ? "ACK" : "ERROR", J(n);
              }return n.status = "ERROR", J(n);
            });
          }function Gr(t) {
            var e = { type: "webStorageSupport" };return Xr(t).then(function () {
              return xr(t.i, e);
            }).then(function (t) {
              if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;throw Error();
            });
          }function zr(t) {
            if (this.a = t || tu.INTERNAL.reactNative && tu.INTERNAL.reactNative.AsyncStorage, !this.a) throw new An("internal-error", "The React Native compatibility library was not found.");
          }function Jr() {
            this.a = {};
          }function Yr() {
            try {
              var t = !!nu.indexedDB;
            } catch (e) {
              t = !1;
            }if (!t) throw new An("web-storage-unsupported");this.f = {}, this.c = [], this.a = 0, this.h = nu.indexedDB;
          }function $r(t) {
            return new W(function (e, n) {
              var i = t.h.open("firebaseLocalStorageDb", 1);i.onerror = function (t) {
                n(Error(t.target.errorCode));
              }, i.onupgradeneeded = function (t) {
                t = t.target.result;try {
                  t.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" });
                } catch (t) {
                  n(t);
                }
              }, i.onsuccess = function (t) {
                e(t.target.result);
              };
            });
          }function Zr(t) {
            return t.g || (t.g = $r(t)), t.g;
          }function Qr(t) {
            return t.objectStore("firebaseLocalStorage");
          }function to(t, e) {
            return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly");
          }function eo(t) {
            return new W(function (e, n) {
              t.onsuccess = function (t) {
                t && t.target ? e(t.target.result) : e();
              }, t.onerror = function (t) {
                n(Error(t.target.errorCode));
              };
            });
          }function no(t) {
            function e() {
              return t.b = Ht(800).then(l(t.Bc, t)).then(function (e) {
                0 < e.length && cu(t.c, function (t) {
                  t(e);
                });
              }).then(e).o(function (t) {
                "STOP_EVENT" != t.message && e();
              }), t.b;
            }t.b && t.b.cancel("STOP_EVENT"), e();
          }function io() {
            if (!oo()) {
              if ("Node" == ze()) throw new An("internal-error", "The LocalStorage compatibility library was not found.");throw new An("web-storage-unsupported");
            }this.a = ro() || tu.INTERNAL.node.localStorage;
          }function ro() {
            try {
              var t = nu.localStorage,
                  e = cn();return t && (t.setItem(e, "1"), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }function oo() {
            var t = "Node" == ze();if (!(t = ro() || t && tu.INTERNAL.node && tu.INTERNAL.node.localStorage)) return !1;try {
              return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
            } catch (t) {
              return !1;
            }
          }function ao() {}function so() {
            if (!co()) {
              if ("Node" == ze()) throw new An("internal-error", "The SessionStorage compatibility library was not found.");throw new An("web-storage-unsupported");
            }this.a = uo() || tu.INTERNAL.node.sessionStorage;
          }function uo() {
            try {
              var t = nu.sessionStorage,
                  e = cn();return t && (t.setItem(e, "1"), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }function co() {
            var t = "Node" == ze();if (!(t = uo() || t && tu.INTERNAL.node && tu.INTERNAL.node.sessionStorage)) return !1;try {
              return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
            } catch (t) {
              return !1;
            }
          }function ho() {
            var t = {};t.Browser = rf, t.Node = of, t.ReactNative = af, this.a = t[ze()];
          }function fo(t) {
            var e = new An("invalid-persistence-type"),
                n = new An("unsupported-persistence-type");t: {
              for (i in sf) {
                if (sf[i] == t) {
                  var i = !0;break t;
                }
              }i = !1;
            }if (!i || "string" != typeof t) throw e;switch (ze()) {case "ReactNative":
                if ("session" === t) throw n;break;case "Node":
                if ("none" !== t) throw n;break;default:
                if (!tn() && "none" !== t) throw n;}
          }function lo() {
            var t = !(hn(Ze()) || !Ge()),
                e = on(),
                n = tn();this.m = t, this.h = e, this.l = n, this.a = {}, ef || (ef = new ho()), t = ef;try {
              if (xe()) {
                tf || (tf = new Yr());var i = tf;
              } else i = new t.a.C();this.g = i;
            } catch (t) {
              this.g = new Jr(), this.h = !0;
            }try {
              this.i = new t.a.kb();
            } catch (t) {
              this.i = new Jr();
            }this.u = new Jr(), this.f = l(this.Ib, this), this.b = {};
          }function po() {
            return nf || (nf = new lo()), nf;
          }function vo(t, e) {
            switch (e) {case "session":
                return t.i;case "none":
                return t.u;default:
                return t.g;}
          }function mo(t, e) {
            return "firebase:" + t.name + (e ? ":" + e : "");
          }function bo(t, e, n) {
            return n = mo(e, n), "local" == e.C && (t.b[n] = null), vo(t, e.C).X(n);
          }function go(t) {
            wo(t), t.c = setInterval(function () {
              for (var e in t.a) {
                var n = nu.localStorage.getItem(e),
                    i = t.b[e];n != i && (t.b[e] = n, n = new yt({ type: "storage", key: e, target: window, oldValue: i, newValue: n, a: !0 }), t.Ib(n));
              }
            }, 1e3);
          }function wo(t) {
            t.c && (clearInterval(t.c), t.c = null);
          }function yo(t) {
            this.a = t, this.b = po();
          }function Io(t) {
            return t.b.get(cf, t.a).then(function (t) {
              return hi(t);
            });
          }function To() {
            this.a = po();
          }function ko() {
            this.b = -1;
          }function Ao(t, e) {
            this.b = -1, this.b = hf, this.f = nu.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = nu.Int32Array ? new Int32Array(64) : Array(64), void 0 !== uf || (uf = nu.Int32Array ? new Int32Array(vf) : vf), this.reset();
          }function Eo(t) {
            for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) {
              n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
            }for (e = 16; 64 > e; e++) {
              r = 0 | n[e - 15], i = 0 | n[e - 2];var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                  a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;n[e] = o + a | 0;
            }i = 0 | t.a[0], r = 0 | t.a[1];var s = 0 | t.a[2],
                u = 0 | t.a[3],
                c = 0 | t.a[4],
                h = 0 | t.a[5],
                f = 0 | t.a[6];for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
              var l = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;a = c & h ^ ~c & f, o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0, a = a + (0 | uf[e]) | 0, a = o + (a + (0 | n[e]) | 0) | 0, o = f, f = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + l | 0;
            }t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + f | 0, t.a[7] = t.a[7] + o | 0;
          }function No(e, n, i) {
            void 0 === i && (i = n.length);var r = 0,
                o = e.c;if (t(n)) for (; r < i;) {
              e.f[o++] = n.charCodeAt(r++), o == e.b && (Eo(e), o = 0);
            } else {
              if (!s(n)) throw Error("message must be string or array");for (; r < i;) {
                var a = n[r++];if (!("number" == typeof a && 0 <= a && 255 >= a && a == (0 | a))) throw Error("message must be a byte array");e.f[o++] = a, o == e.b && (Eo(e), o = 0);
              }
            }e.c = o, e.g += i;
          }function So() {
            Ao.call(this, 8, mf);
          }function Oo(t, e, n, i, r) {
            this.u = t, this.i = e, this.l = n, this.m = i || null, this.s = r || null, this.h = e + ":" + n, this.v = new To(), this.g = new yo(this.h), this.f = null, this.b = [], this.a = this.c = null;
          }function Po(t) {
            return new An("invalid-cordova-configuration", t);
          }function Co() {
            for (var t = 20, e = []; 0 < t;) {
              e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
            }return e.join("");
          }function Ro(t) {
            var e = new So();No(e, t), t = [];var n = 8 * e.g;56 > e.c ? No(e, pf, 56 - e.c) : No(e, pf, e.b - (e.c - 56));for (var i = 63; 56 <= i; i--) {
              e.f[i] = 255 & n, n /= 256;
            }for (Eo(e), i = n = 0; i < e.i; i++) {
              for (var r = 24; 0 <= r; r -= 8) {
                t[n++] = e.a[i] >> r & 255;
              }
            }return On(t);
          }function _o(t, e, n, i) {
            var r = Co(),
                o = new ci(e, i, null, r, new An("no-auth-event")),
                a = Qe("BuildInfo.packageName", nu);if ("string" != typeof a) throw new An("invalid-cordova-configuration");var s = Qe("BuildInfo.displayName", nu),
                u = {};if (Ze().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;else {
              if (!Ze().toLowerCase().match(/android/)) return Y(new An("operation-not-supported-in-this-environment"));u.apn = a;
            }s && (u.appDisplayName = s), r = Ro(r), u.sessionId = r;var c = Br(t.u, t.i, t.l, e, n, null, i, t.m, u, t.s);return t.ba().then(function () {
              var e = t.h;return t.v.a.set(cf, o.A(), e);
            }).then(function () {
              var e = Qe("cordova.plugins.browsertab.isAvailable", nu);if ("function" != typeof e) throw new An("invalid-cordova-configuration");var n = null;e(function (e) {
                if (e) {
                  if ("function" != typeof (n = Qe("cordova.plugins.browsertab.openUrl", nu))) throw new An("invalid-cordova-configuration");n(c);
                } else {
                  if ("function" != typeof (n = Qe("cordova.InAppBrowser.open", nu))) throw new An("invalid-cordova-configuration");e = Ze(), e = !(!e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), t.a = n(c, e ? "_blank" : "_system", "location=yes");
                }
              });
            });
          }function Do(t, e) {
            for (var n = 0; n < t.b.length; n++) {
              try {
                t.b[n](e);
              } catch (t) {}
            }
          }function Lo(t) {
            return t.f || (t.f = t.ba().then(function () {
              return new W(function (e) {
                function n(i) {
                  return e(i), t.Ja(n), !1;
                }t.va(n), Uo(t);
              });
            })), t.f;
          }function xo(t) {
            var e = null;return Io(t.g).then(function (n) {
              return e = n, n = t.g, bo(n.b, cf, n.a);
            }).then(function () {
              return e;
            });
          }function Uo(t) {
            function e(e) {
              i = !0, r && r.cancel(), xo(t).then(function (i) {
                var r = n;if (i && e && e.url) {
                  r = null;var o = e.url,
                      a = re(o),
                      s = ie(a, "link"),
                      u = ie(re(s), "link");a = ie(a, "deep_link_id"), o = ie(re(a), "link") || a || u || s || o, -1 != o.indexOf("/__/auth/callback") && (r = re(o), r = un(ie(r, "firebaseError") || null), r = (r = "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? En(r) : null) ? new ci(i.b, i.c, null, null, r) : new ci(i.b, i.c, o, i.g)), r = r || n;
                }Do(t, r);
              });
            }var n = new ci("unknown", null, null, null, new An("no-auth-event")),
                i = !1,
                r = Ht(500).then(function () {
              return xo(t).then(function () {
                i || Do(t, n);
              });
            }),
                o = nu.handleOpenURL;nu.handleOpenURL = function (t) {
              if (0 == t.toLowerCase().indexOf(Qe("BuildInfo.packageName", nu).toLowerCase() + "://") && e({ url: t }), "function" == typeof o) try {
                o(t);
              } catch (t) {
                console.error(t);
              }
            }, Yc || (Yc = new fi()), Yc.subscribe(e);
          }function jo(t) {
            this.a = t, this.b = po();
          }function Mo(t) {
            return t.b.set(bf, "pending", t.a);
          }function Vo(t) {
            return bo(t.b, bf, t.a);
          }function Fo(t) {
            return t.b.get(bf, t.a).then(function (t) {
              return "pending" == t;
            });
          }function Ko(t, e, n) {
            this.v = t, this.l = e, this.u = n, this.h = [], this.f = !1, this.i = l(this.m, this), this.c = new zo(), this.s = new ea(), this.g = new jo(this.l + ":" + this.u), this.b = {}, this.b.unknown = this.c, this.b.signInViaRedirect = this.c, this.b.linkViaRedirect = this.c, this.b.reauthViaRedirect = this.c, this.b.signInViaPopup = this.s, this.b.linkViaPopup = this.s, this.b.reauthViaPopup = this.s, this.a = qo(this.v, this.l, this.u, Ah);
          }function qo(t, e, n, i) {
            var r = tu.SDK_VERSION || null;return We() ? new Oo(t, e, n, r, i) : new Kr(t, e, n, r, i);
          }function Xo(t) {
            t.f || (t.f = !0, t.a.va(t.i));var e = t.a;return t.a.ba().o(function (n) {
              throw t.a == e && t.reset(), n;
            });
          }function Ho(t) {
            t.a.Eb() && Xo(t).o(function (e) {
              var n = new ci("unknown", null, null, null, new An("operation-not-supported-in-this-environment"));Wo(e) && t.m(n);
            }), t.a.zb() || Jo(t.c);
          }function Bo(t, e, n, i, r, o) {
            return t.a.wb(e, n, i, function () {
              t.f || (t.f = !0, t.a.va(t.i));
            }, function () {
              t.reset();
            }, r, o);
          }function Wo(t) {
            return !(!t || "auth/cordova-not-ready" != t.code);
          }function Go(t, e, n) {
            var i = e + ":" + n;return yf[i] || (yf[i] = new Ko(t, e, n)), yf[i];
          }function zo() {
            this.b = null, this.f = [], this.c = [], this.a = null, this.g = !1;
          }function Jo(t) {
            t.g || (t.g = !0, Qo(t, !1, null, null));
          }function Yo(t, e, n) {
            n = n.wa(e.b, e.c);var i = e.f,
                r = e.g,
                o = !!e.b.match(/Redirect$/);n(i, r).then(function (e) {
              Qo(t, o, e, null);
            }).o(function (e) {
              Qo(t, o, null, e);
            });
          }function $o(t, e) {
            if (t.b = function () {
              return Y(e);
            }, t.c.length) for (var n = 0; n < t.c.length; n++) {
              t.c[n](e);
            }
          }function Zo(t, e) {
            if (t.b = function () {
              return J(e);
            }, t.f.length) for (var n = 0; n < t.f.length; n++) {
              t.f[n](e);
            }
          }function Qo(t, e, n, i) {
            e ? i ? $o(t, i) : Zo(t, n) : Zo(t, { user: null }), t.f = [], t.c = [];
          }function ta(t) {
            var e = new An("timeout");t.a && t.a.cancel(), t.a = Ht(wf.get()).then(function () {
              t.b || Qo(t, !0, null, e);
            });
          }function ea() {}function na(t, e) {
            var n = t.c,
                i = t.b;e.wa(i, n)(t.f, t.g).then(function (t) {
              e.fa(i, t, null, n);
            }).o(function (t) {
              e.fa(i, null, t, n);
            });
          }function ia(t, e) {
            this.a = e, bn(this, "verificationId", t);
          }function ra(t, e, n, i) {
            return new oi(t).Qa(e, n).then(function (t) {
              return new ia(t, i);
            });
          }function oa(t, e, n) {
            if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
          }function aa(t, e) {
            return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e);
          }function sa(t, e) {
            ua(t), t.b = Ht(aa(t, e)).then(function () {
              return vn();
            }).then(function () {
              return t.h();
            }).then(function () {
              sa(t, !0);
            }).o(function (e) {
              t.i(e) && sa(t, !1);
            });
          }function ua(t) {
            t.b && (t.b.cancel(), t.b = null);
          }function ca(t) {
            this.f = t, this.b = this.a = null, this.c = 0;
          }function ha(t, e) {
            var n = e[mh],
                i = e.refreshToken;e = fa(e.expiresIn), t.b = n, t.c = e, t.a = i;
          }function fa(t) {
            return ou() + 1e3 * parseInt(t, 10);
          }function la(t, e) {
            return dr(t.f, e).then(function (e) {
              return t.b = e.access_token, t.c = fa(e.expires_in), t.a = e.refresh_token, { accessToken: t.b, expirationTime: t.c, refreshToken: t.a };
            }).o(function (e) {
              throw "auth/user-token-expired" == e.code && (t.a = null), e;
            });
          }function da(t, e) {
            this.a = t || null, this.b = e || null, gn(this, { lastSignInTime: mn(e || null), creationTime: mn(t || null) });
          }function pa(t) {
            return new da(t.a, t.b);
          }function va(t, e, n, i, r, o) {
            gn(this, { uid: t, displayName: i || null, photoURL: r || null, email: n || null, phoneNumber: o || null, providerId: e });
          }function ma(t, e) {
            wt.call(this, t);for (var n in e) {
              this[n] = e[n];
            }
          }function ba(t, e, n) {
            this.B = [], this.G = t.apiKey, this.s = t.appName, this.w = t.authDomain || null, t = tu.SDK_VERSION ? $e(tu.SDK_VERSION) : null, this.c = new ur(this.G, _r(Ah), t), this.h = new ca(this.c), Ea(this, e[mh]), ha(this.h, e), bn(this, "refreshToken", this.h.a), Pa(this, n || {}), Mt.call(this), this.I = !1, this.w && en() && (this.a = Go(this.w, this.G, this.s)), this.N = [], this.i = null, this.l = Ta(this), this.U = l(this.Ga, this);var i = this;this.ha = null, this.sa = function (t) {
              i.na(t.h);
            }, this.W = null, this.R = [], this.ra = function (t) {
              wa(i, t.f);
            }, this.V = null;
          }function ga(t, e) {
            t.W && Ct(t.W, "languageCodeChanged", t.sa), (t.W = e) && Nt(e, "languageCodeChanged", t.sa);
          }function wa(t, e) {
            t.R = e, hr(t.c, tu.SDK_VERSION ? $e(tu.SDK_VERSION, t.R) : null);
          }function ya(t, e) {
            t.V && Ct(t.V, "frameworkChanged", t.ra), (t.V = e) && Nt(e, "frameworkChanged", t.ra);
          }function Ia(t) {
            try {
              return tu.app(t.s).auth();
            } catch (e) {
              throw new An("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + t.s + "'!");
            }
          }function Ta(t) {
            return new oa(function () {
              return t.F(!0);
            }, function (t) {
              return !(!t || "auth/network-request-failed" != t.code);
            }, function () {
              var e = t.h.c - ou() - 3e5;return 0 < e ? e : 0;
            });
          }function ka(t) {
            t.m || t.l.b || (t.l.start(), Ct(t, "tokenChanged", t.U), Nt(t, "tokenChanged", t.U));
          }function Aa(t) {
            Ct(t, "tokenChanged", t.U), ua(t.l);
          }function Ea(t, e) {
            t.qa = e, bn(t, "_lat", e);
          }function Na(t, e) {
            P(t.N, function (t) {
              return t == e;
            });
          }function Sa(t) {
            for (var e = [], n = 0; n < t.N.length; n++) {
              e.push(t.N[n](t));
            }return Q(e).then(function () {
              return t;
            });
          }function Oa(t) {
            t.a && !t.I && (t.I = !0, t.a.subscribe(t));
          }function Pa(t, e) {
            gn(t, { uid: e.uid, displayName: e.displayName || null, photoURL: e.photoURL || null, email: e.email || null, emailVerified: e.emailVerified || !1, phoneNumber: e.phoneNumber || null, isAnonymous: e.isAnonymous || !1, metadata: new da(e.createdAt, e.lastLoginAt), providerData: [] });
          }function Ca() {}function Ra(t) {
            return J().then(function () {
              if (t.m) throw new An("app-deleted");
            });
          }function _a(t) {
            return hu(t.providerData, function (t) {
              return t.providerId;
            });
          }function Da(t, e) {
            e && (La(t, e.providerId), t.providerData.push(e));
          }function La(t, e) {
            P(t.providerData, function (t) {
              return t.providerId == e;
            });
          }function xa(t, e, n) {
            ("uid" != e || n) && t.hasOwnProperty(e) && bn(t, e, n);
          }function Ua(t, e) {
            t != e && (gn(t, { uid: e.uid, displayName: e.displayName, photoURL: e.photoURL, email: e.email, emailVerified: e.emailVerified, phoneNumber: e.phoneNumber, isAnonymous: e.isAnonymous, providerData: [] }), e.metadata ? bn(t, "metadata", pa(e.metadata)) : bn(t, "metadata", new da()), cu(e.providerData, function (e) {
              Da(t, e);
            }), t.h = e.h, bn(t, "refreshToken", t.h.a));
          }function ja(t) {
            return t.F().then(function (e) {
              var n = t.isAnonymous;return Va(t, e).then(function () {
                return n || xa(t, "isAnonymous", !1), e;
              });
            });
          }function Ma(t, e) {
            e[mh] && t.qa != e[mh] && (ha(t.h, e), Vt(t, new ma("tokenChanged")), Ea(t, e[mh]), xa(t, "refreshToken", t.h.a));
          }function Va(t, e) {
            return Pr(t.c, Rh, { idToken: e }).then(l(t.nc, t));
          }function Fa(t) {
            return (t = t.providerUserInfo) && t.length ? hu(t, function (t) {
              return new va(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber);
            }) : [];
          }function Ka(t, e) {
            return ja(t).then(function () {
              if (S(_a(t), e)) return Sa(t).then(function () {
                throw new An("provider-already-linked");
              });
            });
          }function qa(t, e, n) {
            var i = si(e);return e = xn(e), wn({ user: t, credential: i, additionalUserInfo: e, operationType: n });
          }function Xa(t, e) {
            return Ma(t, e), t.reload().then(function () {
              return t;
            });
          }function Ha(t, e, n, i, r) {
            if (!en()) return Y(new An("operation-not-supported-in-this-environment"));if (t.i && !r) return Y(t.i);var o = Ln(n.providerId),
                a = cn(t.uid + ":::"),
                s = null;(!on() || Ge()) && t.w && n.isOAuthProvider && (s = Br(t.w, t.G, t.s, e, n, null, a, tu.SDK_VERSION || null));var u = qe(s, o && o.Aa, o && o.za);return i = i().then(function () {
              if (Wa(t), !r) return t.F().then(function () {});
            }).then(function () {
              return Bo(t.a, u, e, n, a, !!s);
            }).then(function () {
              return new W(function (n, i) {
                t.fa(e, null, new An("cancelled-popup-request"), t.g || null), t.f = n, t.v = i, t.g = a, t.b = t.a.Da(t, e, u, a);
              });
            }).then(function (t) {
              return u && Ke(u), t ? wn(t) : null;
            }).o(function (t) {
              throw u && Ke(u), t;
            }), Ga(t, i, r);
          }function Ba(t, e, n, i, r) {
            if (!en()) return Y(new An("operation-not-supported-in-this-environment"));if (t.i && !r) return Y(t.i);var o = null,
                a = cn(t.uid + ":::");return i = i().then(function () {
              if (Wa(t), !r) return t.F().then(function () {});
            }).then(function () {
              return t.Z = a, Sa(t);
            }).then(function (e) {
              return t.ca && (e = t.ca, e = e.b.set(If, t.A(), e.a)), e;
            }).then(function () {
              return t.a.Ba(e, n, a);
            }).o(function (e) {
              if (o = e, t.ca) return Za(t.ca);throw o;
            }).then(function () {
              if (o) throw o;
            }), Ga(t, i, r);
          }function Wa(t) {
            if (!t.a || !t.I) {
              if (t.a && !t.I) throw new An("internal-error");throw new An("auth-domain-config-required");
            }
          }function Ga(t, e, n) {
            var i = za(t, e, n);return t.B.push(i), tt(i, function () {
              O(t.B, i);
            }), i;
          }function za(t, e, n) {
            return t.i && !n ? (e.cancel(), Y(t.i)) : e.o(function (e) {
              throw !e || "auth/user-disabled" != e.code && "auth/user-token-expired" != e.code || (t.i || Vt(t, new ma("userInvalidated")), t.i = e), e;
            });
          }function Ja(t) {
            if (!t.apiKey) return null;var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
                n = {};if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;n[mh] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null, n.expiresIn = (t.stsTokenManager.expirationTime - ou()) / 1e3;var i = new ba(e, n, t);return t.providerData && cu(t.providerData, function (t) {
              t && Da(i, wn(t));
            }), t.redirectEventId && (i.Z = t.redirectEventId), i;
          }function Ya(t, e, n, i) {
            var r = new ba(t, e);return n && (r.ca = n), i && wa(r, i), r.reload().then(function () {
              return r;
            });
          }function $a(t) {
            this.a = t, this.b = po();
          }function Za(t) {
            return bo(t.b, If, t.a);
          }function Qa(t, e) {
            return t.b.get(If, t.a).then(function (t) {
              return t && e && (t.authDomain = e), Ja(t || {});
            });
          }function ts(t) {
            this.a = t, this.b = po(), this.c = null, this.f = ns(this), this.b.addListener(is("local"), this.a, l(this.g, this));
          }function es(t, e) {
            var n,
                i = [];for (n in sf) {
              sf[n] !== e && i.push(bo(t.b, is(sf[n]), t.a));
            }return i.push(bo(t.b, Tf, t.a)), Z(i);
          }function ns(t) {
            var e = is("local"),
                n = is("session"),
                i = is("none");return t.b.get(n, t.a).then(function (r) {
              return r ? n : t.b.get(i, t.a).then(function (n) {
                return n ? i : t.b.get(e, t.a).then(function (n) {
                  return n ? e : t.b.get(Tf, t.a).then(function (t) {
                    return t ? is(t) : e;
                  });
                });
              });
            }).then(function (e) {
              return t.c = e, es(t, e.C);
            }).o(function () {
              t.c || (t.c = e);
            });
          }function is(t) {
            return { name: "authUser", C: t };
          }function rs(t) {
            return us(t, function () {
              return t.b.set(Tf, t.c.C, t.a);
            });
          }function os(t, e) {
            return us(t, function () {
              return t.b.set(t.c, e.A(), t.a);
            });
          }function as(t) {
            return us(t, function () {
              return bo(t.b, t.c, t.a);
            });
          }function ss(t, e) {
            return us(t, function () {
              return t.b.get(t.c, t.a).then(function (t) {
                return t && e && (t.authDomain = e), Ja(t || {});
              });
            });
          }function us(t, e) {
            return t.f = t.f.then(e, e), t.f;
          }function cs(t) {
            if (this.l = !1, bn(this, "app", t), !Is(this).options || !Is(this).options.apiKey) throw new An("invalid-api-key");t = tu.SDK_VERSION ? $e(tu.SDK_VERSION) : null, this.c = new ur(Is(this).options && Is(this).options.apiKey, _r(Ah), t), this.N = [], this.m = [], this.I = [], this.Mb = tu.INTERNAL.createSubscribe(l(this.cc, this)), this.R = void 0, this.Nb = tu.INTERNAL.createSubscribe(l(this.dc, this)), ms(this, null), this.h = new ts(Is(this).options.apiKey + ":" + Is(this).name), this.G = new $a(Is(this).options.apiKey + ":" + Is(this).name), this.U = Ns(this, gs(this)), this.i = Ns(this, ws(this)), this.W = !1, this.ha = l(this.Ac, this), this.Ga = l(this.ka, this), this.qa = l(this.Vb, this), this.ra = l(this.ac, this), this.sa = l(this.bc, this), ps(this), this.INTERNAL = {}, this.INTERNAL.delete = l(this.delete, this), this.INTERNAL.logFramework = l(this.ic, this), this.s = 0, Mt.call(this), ls(this), this.B = [];
          }function hs(t) {
            wt.call(this, "languageCodeChanged"), this.h = t;
          }function fs(t) {
            wt.call(this, "frameworkChanged"), this.f = t;
          }function ls(t) {
            Object.defineProperty(t, "lc", { get: function get() {
                return this.$();
              }, set: function set(t) {
                this.na(t);
              }, enumerable: !1 }), t.V = null;
          }function ds(t) {
            return t.Lb || Y(new An("auth-domain-config-required"));
          }function ps(t) {
            var e = Is(t).options.authDomain,
                n = Is(t).options.apiKey;e && en() && (t.Lb = t.U.then(function () {
              if (!t.l) {
                if (t.a = Go(e, n, Is(t).name), t.a.subscribe(t), Ts(t) && Oa(Ts(t)), t.w) {
                  Oa(t.w);var i = t.w;i.na(t.$()), ga(i, t), i = t.w, wa(i, t.B), ya(i, t), t.w = null;
                }return t.a;
              }
            }));
          }function vs(t, e) {
            var n = {};return n.apiKey = Is(t).options.apiKey, n.authDomain = Is(t).options.authDomain, n.appName = Is(t).name, t.U.then(function () {
              return Ya(n, e, t.G, t.Ka());
            }).then(function (e) {
              return Ts(t) && e.uid == Ts(t).uid ? (Ua(Ts(t), e), t.ka(e)) : (ms(t, e), Oa(e), t.ka(e));
            }).then(function () {
              As(t);
            });
          }function ms(t, e) {
            Ts(t) && (Na(Ts(t), t.Ga), Ct(Ts(t), "tokenChanged", t.qa), Ct(Ts(t), "userDeleted", t.ra), Ct(Ts(t), "userInvalidated", t.sa), Aa(Ts(t))), e && (e.N.push(t.Ga), Nt(e, "tokenChanged", t.qa), Nt(e, "userDeleted", t.ra), Nt(e, "userInvalidated", t.sa), 0 < t.s && ka(e)), bn(t, "currentUser", e), e && (e.na(t.$()), ga(e, t), wa(e, t.B), ya(e, t));
          }function bs(t) {
            var e = Qa(t.G, Is(t).options.authDomain).then(function (e) {
              return (t.w = e) && (e.ca = t.G), Za(t.G);
            });return Ns(t, e);
          }function gs(t) {
            var e = Is(t).options.authDomain,
                n = bs(t).then(function () {
              return ss(t.h, e);
            }).then(function (e) {
              return e ? (e.ca = t.G, t.w && (t.w.Z || null) == (e.Z || null) ? e : e.reload().then(function () {
                return os(t.h, e).then(function () {
                  return e;
                });
              }).o(function (n) {
                return "auth/network-request-failed" == n.code ? e : as(t.h);
              })) : null;
            }).then(function (e) {
              ms(t, e || null);
            });return Ns(t, n);
          }function ws(t) {
            return t.U.then(function () {
              return t.aa();
            }).o(function () {}).then(function () {
              if (!t.l) return t.ha();
            }).o(function () {}).then(function () {
              if (!t.l) {
                t.W = !0;var e = t.h;e.b.addListener(is("local"), e.a, t.ha);
              }
            });
          }function ys(t, e) {
            var n = null,
                i = null;return Ns(t, e.then(function (e) {
              return n = si(e), i = xn(e), vs(t, e);
            }).then(function () {
              return wn({ user: Ts(t), credential: n, additionalUserInfo: i, operationType: "signIn" });
            }));
          }function Is(t) {
            return t.app;
          }function Ts(t) {
            return t.currentUser;
          }function ks(t) {
            return Ts(t) && Ts(t)._lat || null;
          }function As(t) {
            if (t.W) {
              for (var e = 0; e < t.m.length; e++) {
                t.m[e] && t.m[e](ks(t));
              }if (t.R !== t.getUid() && t.I.length) for (t.R = t.getUid(), e = 0; e < t.I.length; e++) {
                t.I[e] && t.I[e](ks(t));
              }
            }
          }function Es(t, e) {
            t.I.push(e), Ns(t, t.i.then(function () {
              !t.l && S(t.I, e) && t.R !== t.getUid() && (t.R = t.getUid(), e(ks(t)));
            }));
          }function Ns(t, e) {
            return t.N.push(e), tt(e, function () {
              O(t.N, e);
            }), e;
          }function Ss(t, e, n, i, r, o) {
            if (bn(this, "type", "recaptcha"), this.b = this.c = null, this.m = !1, this.l = e, this.a = n || { theme: "light", type: "image" }, this.g = [], this.a[Ef]) throw new An("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");if (this.h = "invisible" === this.a[Nf], !$i(e) || !this.h && $i(e).hasChildNodes()) throw new An("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");this.u = new ur(t, o || null, r || null), this.s = i || function () {
              return null;
            };var a = this;this.i = [];var s = this.a[kf];this.a[kf] = function (t) {
              if (Os(a, t), "function" == typeof s) s(t);else if ("string" == typeof s) {
                var e = Qe(s, nu);"function" == typeof e && e(t);
              }
            };var u = this.a[Af];this.a[Af] = function () {
              if (Os(a, null), "function" == typeof u) u();else if ("string" == typeof u) {
                var t = Qe(u, nu);"function" == typeof t && t();
              }
            };
          }function Os(t, e) {
            for (var n = 0; n < t.i.length; n++) {
              try {
                t.i[n](e);
              } catch (t) {}
            }
          }function Ps(t, e) {
            P(t.i, function (t) {
              return t == e;
            });
          }function Cs(t, e) {
            return t.g.push(e), tt(e, function () {
              O(t.g, e);
            }), e;
          }function Rs(t) {
            if (t.m) throw new An("internal-error", "RecaptchaVerifier instance has been destroyed.");
          }function _s() {
            this.b = nu.grecaptcha ? 1 / 0 : 0, this.c = null, this.a = "__rcb" + Math.floor(1e6 * Math.random());
          }function Ds(t, e) {
            return new W(function (n, i) {
              if (ln()) {
                if (!nu.grecaptcha || e !== t.c && !t.b) {
                  nu[t.a] = function () {
                    if (nu.grecaptcha) {
                      t.c = e;var r = nu.grecaptcha.render;nu.grecaptcha.render = function (e, n) {
                        return e = r(e, n), t.b++, e;
                      }, n();
                    } else i(new An("internal-error"));delete nu[t.a];
                  };var r = Te(Sf, { onload: t.a, hl: e || "" });J(nr(r)).o(function () {
                    i(new An("internal-error", "Unable to load external reCAPTCHA dependencies!"));
                  });
                } else n();
              } else i(new An("network-request-failed"));
            });
          }function Ls() {
            return Of || (Of = new _s()), Of;
          }function xs(t, e, n) {
            try {
              this.f = n || tu.app();
            } catch (t) {
              throw new An("argument-error", "No firebase.app.App instance is currently initialized.");
            }if (!this.f.options || !this.f.options.apiKey) throw new An("invalid-api-key");n = this.f.options.apiKey;var i = this,
                r = null;try {
              r = this.f.auth().Ka();
            } catch (t) {}r = tu.SDK_VERSION ? $e(tu.SDK_VERSION, r) : null, Ss.call(this, n, t, e, function () {
              try {
                var t = i.f.auth().$();
              } catch (e) {
                t = null;
              }return t;
            }, r, _r(Ah));
          }function Us(t, e, n, i) {
            t: {
              n = Array.prototype.slice.call(n);for (var r = 0, o = !1, a = 0; a < e.length; a++) {
                if (e[a].optional) o = !0;else {
                  if (o) throw new An("internal-error", "Argument validator encountered a required argument after an optional argument.");r++;
                }
              }if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";else {
                for (r = 0; r < n.length; r++) {
                  if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) {
                    if (e = e[r], 0 > r || r >= Pf.length) throw new An("internal-error", "Argument validator received an unsupported number of arguments.");n = Pf[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + ".";break t;
                  }
                }i = null;
              }
            }if (i) throw new An("argument-error", t + " failed: " + i);
          }function js(e, n) {
            return { name: e || "", K: "a valid string", optional: !!n, M: t };
          }function Ms() {
            return { name: "opt_forceRefresh", K: "a boolean", optional: !0, M: e };
          }function Vs(t, e) {
            return { name: t || "", K: "a valid object", optional: !!e, M: c };
          }function Fs(t, e) {
            return { name: t || "", K: "a function", optional: !!e, M: u };
          }function Ks(t, e) {
            return { name: t || "", K: "null", optional: !!e, M: o };
          }function qs() {
            return { name: "", K: "an HTML element", optional: !1, M: function M(t) {
                return !!(t && t instanceof Element);
              } };
          }function Xs() {
            return { name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function M(t) {
                return !!(t && t instanceof cs);
              } };
          }function Hs() {
            return { name: "app", K: "an instance of Firebase App", optional: !0, M: function M(t) {
                return !!(t && t instanceof tu.app.App);
              } };
          }function Bs(t) {
            return { name: t ? t + "Credential" : "credential", K: t ? "a valid " + t + " credential" : "a valid credential", optional: !1, M: function M(e) {
                if (!e) return !1;var n = !t || e.providerId === t;return !(!e.xa || !n);
              } };
          }function Ws() {
            return { name: "authProvider", K: "a valid Auth provider", optional: !1, M: function M(t) {
                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"));
              } };
          }function Gs() {
            return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function M(e) {
                return !!(e && t(e.type) && u(e.verify));
              } };
          }function zs(t, e, n, i) {
            return { name: n || "", K: t.K + " or " + e.K, optional: !!i, M: function M(n) {
                return t.M(n) || e.M(n);
              } };
          }function Js(t, e) {
            for (var n in e) {
              var i = e[n].name;t[i] = $s(i, t[n], e[n].j);
            }
          }function Ys(t, e, n, i) {
            t[e] = $s(e, n, i);
          }function $s(t, e, n) {
            function i() {
              var t = Array.prototype.slice.call(arguments);return Us(o, n, t), e.apply(this, t);
            }if (!n) return e;var r,
                o = Zs(t);for (r in e) {
              i[r] = e[r];
            }for (r in e.prototype) {
              i.prototype[r] = e.prototype[r];
            }return i;
          }function Zs(t) {
            return t = t.split("."), t[t.length - 1];
          }var Qs,
              tu = n(7).default,
              eu = eu || {},
              nu = this,
              iu = "closure_uid_" + (1e9 * Math.random() >>> 0),
              ru = 0,
              ou = Date.now || function () {
            return +new Date();
          };p(b, Error), b.prototype.name = "CustomError", p(g, b), g.prototype.name = "AssertionError", y.prototype.get = function () {
            if (0 < this.b) {
              this.b--;var t = this.a;this.a = t.next, t.next = null;
            } else t = this.c();return t;
          };var au = new y(function () {
            return new A();
          }, function (t) {
            t.reset();
          });T.prototype.add = function (t, e) {
            var n = au.get();n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n;
          }, A.prototype.set = function (t, e) {
            this.a = t, this.b = e, this.next = null;
          }, A.prototype.reset = function () {
            this.next = this.b = this.a = null;
          };var su,
              uu = Array.prototype.indexOf ? function (t, e) {
            return Array.prototype.indexOf.call(t, e, void 0);
          } : function (e, n) {
            if (t(e)) return t(n) && 1 == n.length ? e.indexOf(n, 0) : -1;for (var i = 0; i < e.length; i++) {
              if (i in e && e[i] === n) return i;
            }return -1;
          },
              cu = Array.prototype.forEach ? function (t, e, n) {
            Array.prototype.forEach.call(t, e, n);
          } : function (e, n, i) {
            for (var r = e.length, o = t(e) ? e.split("") : e, a = 0; a < r; a++) {
              a in o && n.call(i, o[a], a, e);
            }
          },
              hu = Array.prototype.map ? function (t, e) {
            return Array.prototype.map.call(t, e, void 0);
          } : function (e, n) {
            for (var i = e.length, r = Array(i), o = t(e) ? e.split("") : e, a = 0; a < i; a++) {
              a in o && (r[a] = n.call(void 0, o[a], a, e));
            }return r;
          },
              fu = Array.prototype.some ? function (t, e) {
            return Array.prototype.some.call(t, e, void 0);
          } : function (e, n) {
            for (var i = e.length, r = t(e) ? e.split("") : e, o = 0; o < i; o++) {
              if (o in r && n.call(void 0, r[o], o, e)) return !0;
            }return !1;
          },
              lu = String.prototype.trim ? function (t) {
            return t.trim();
          } : function (t) {
            return (/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            );
          },
              du = /&/g,
              pu = /</g,
              vu = />/g,
              mu = /"/g,
              bu = /'/g,
              gu = /\x00/g,
              wu = /[\x00&<>"']/;t: {
            var yu = nu.navigator;if (yu) {
              var Iu = yu.userAgent;if (Iu) {
                su = Iu;break t;
              }
            }su = "";
          }var Tu,
              ku,
              Au = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
              Eu = !1,
              Nu = new T(),
              Su = 0,
              Ou = 2,
              Pu = 3;G.prototype.reset = function () {
            this.f = this.b = this.g = this.a = null, this.c = !1;
          };var Cu = new y(function () {
            return new G();
          }, function (t) {
            t.reset();
          });W.prototype.then = function (t, e, n) {
            return it(this, u(t) ? t : null, u(e) ? e : null, n);
          }, v(W), Qs = W.prototype, Qs.o = function (t, e) {
            return it(this, null, t, e);
          }, Qs.cancel = function (t) {
            this.a == Su && X(function () {
              et(this, new lt(t));
            }, this);
          }, Qs.Cc = function (t) {
            this.a = Su, rt(this, Ou, t);
          }, Qs.Dc = function (t) {
            this.a = Su, rt(this, Pu, t);
          }, Qs.Sb = function () {
            for (var t; t = ut(this);) {
              ct(this, t, this.a, this.i);
            }this.h = !1;
          };var Ru = K;p(lt, b), lt.prototype.name = "cancel";var _u = 0,
              Du = {};dt.prototype.pa = !1, dt.prototype.ua = function () {
            if (this.oa) for (; this.oa.length;) {
              this.oa.shift()();
            }
          }, vt[" "] = i;var Lu,
              xu = U("Opera"),
              Uu = U("Trident") || U("MSIE"),
              ju = U("Edge"),
              Mu = ju || Uu,
              Vu = U("Gecko") && !(L(su.toLowerCase(), "webkit") && !U("Edge")) && !(U("Trident") || U("MSIE")) && !U("Edge"),
              Fu = L(su.toLowerCase(), "webkit") && !U("Edge");t: {
            var Ku = "",
                qu = function () {
              var t = su;return Vu ? /rv:([^\);]+)(\)|;)/.exec(t) : ju ? /Edge\/([\d\.]+)/.exec(t) : Uu ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Fu ? /WebKit\/(\S+)/.exec(t) : xu ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0;
            }();if (qu && (Ku = qu ? qu[1] : ""), Uu) {
              var Xu = bt();if (null != Xu && Xu > parseFloat(Ku)) {
                Lu = Xu + "";break t;
              }
            }Lu = Ku;
          }var Hu,
              Bu = {},
              Wu = nu.document;Hu = Wu && Uu ? bt() || ("CSS1Compat" == Wu.compatMode ? parseInt(Lu, 10) : 5) : void 0;var Gu = Object.freeze || function (t) {
            return t;
          },
              zu = !Uu || 9 <= +Hu,
              Ju = Uu && !gt("9"),
              Yu = function () {
            if (!nu.addEventListener || !Object.defineProperty) return !1;var t = !1,
                e = Object.defineProperty({}, "passive", { get: function get() {
                t = !0;
              } });return nu.addEventListener("test", i, e), nu.removeEventListener("test", i, e), t;
          }();wt.prototype.c = function () {
            this.Cb = !1;
          }, p(yt, wt);var $u = Gu({ 2: "touch", 3: "pen", 4: "mouse" });yt.prototype.c = function () {
            yt.jb.c.call(this);var t = this.a;if (t.preventDefault) t.preventDefault();else if (t.returnValue = !1, Ju) try {
              (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1);
            } catch (t) {}
          }, yt.prototype.g = function () {
            return this.a;
          };var Zu = "closure_listenable_" + (1e6 * Math.random() | 0),
              Qu = 0;kt.prototype.add = function (t, e, n, i, r) {
            var o = "" + t;(t = this.a[o]) || (t = this.a[o] = [], this.b++);var a = Et(t, e, i, r);return -1 < a ? (e = t[a], n || (e.Ha = !1)) : (e = new It(e, this.src, o, !!i, r), e.Ha = n, t.push(e)), e;
          };var tc = "closure_lm_" + (1e6 * Math.random() | 0),
              ec = {},
              nc = 0,
              ic = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);p(Mt, dt), Mt.prototype[Zu] = !0, Mt.prototype.removeEventListener = function (t, e, n, i) {
            Ct(this, t, e, n, i);
          }, Mt.prototype.ua = function () {
            if (Mt.jb.ua.call(this), this.u) {
              var t,
                  e = this.u,
                  n = 0;for (t in e.a) {
                for (var i = e.a[t], r = 0; r < i.length; r++) {
                  ++n, Tt(i[r]);
                }delete e.a[t], e.b--;
              }
            }this.Ra = null;
          }, Qs = zt.prototype, Qs.P = function () {
            Jt(this);for (var t = [], e = 0; e < this.a.length; e++) {
              t.push(this.b[this.a[e]]);
            }return t;
          }, Qs.S = function () {
            return Jt(this), this.a.concat();
          }, Qs.clear = function () {
            this.b = {}, this.c = this.a.length = 0;
          }, Qs.get = function (t, e) {
            return Yt(this.b, t) ? this.b[t] : e;
          }, Qs.set = function (t, e) {
            Yt(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e;
          }, Qs.forEach = function (t, e) {
            for (var n = this.S(), i = 0; i < n.length; i++) {
              var r = n[i],
                  o = this.get(r);t.call(e, o, r, this);
            }
          };var rc = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;Zt.prototype.toString = function () {
            var t = [],
                e = this.c;e && t.push(se(e, oc, !0), ":");var n = this.b;return (n || "file" == e) && (t.push("//"), (e = this.l) && t.push(se(e, oc, !0), "@"), t.push(encodeURIComponent(n + "").replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", n + "")), (n = this.g) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(se(n, "/" == n.charAt(0) ? sc : ac, !0))), (n = "" + this.a) && t.push("?", n), (n = this.h) && t.push("#", se(n, cc)), t.join("");
          };var oc = /[#\/\?@]/g,
              ac = /[#\?:]/g,
              sc = /[#\?]/g,
              uc = /[#\?@]/g,
              cc = /#/g;Qs = ce.prototype, Qs.add = function (t, e) {
            he(this), this.c = null, t = ve(this, t);var n = this.a.get(t);return n || this.a.set(t, n = []), n.push(e), this.b += 1, this;
          }, Qs.clear = function () {
            this.a = this.c = null, this.b = 0;
          }, Qs.forEach = function (t, e) {
            he(this), this.a.forEach(function (n, i) {
              cu(n, function (n) {
                t.call(e, n, i, this);
              }, this);
            }, this);
          }, Qs.S = function () {
            he(this);for (var t = this.a.P(), e = this.a.S(), n = [], i = 0; i < e.length; i++) {
              for (var r = t[i], o = 0; o < r.length; o++) {
                n.push(e[i]);
              }
            }return n;
          }, Qs.P = function (e) {
            he(this);var n = [];if (t(e)) de(this, e) && (n = C(n, this.a.get(ve(this, e))));else {
              e = this.a.P();for (var i = 0; i < e.length; i++) {
                n = C(n, e[i]);
              }
            }return n;
          }, Qs.set = function (t, e) {
            return he(this), this.c = null, t = ve(this, t), de(this, t) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this;
          }, Qs.get = function (t, e) {
            return t = t ? this.P(t) : [], 0 < t.length ? t[0] + "" : e;
          }, Qs.toString = function () {
            if (this.c) return this.c;if (!this.a) return "";for (var t = [], e = this.a.S(), n = 0; n < e.length; n++) {
              var i = e[n],
                  r = encodeURIComponent(i + "");i = this.P(i);for (var o = 0; o < i.length; o++) {
                var a = r;"" !== i[o] && (a += "=" + encodeURIComponent(i[o] + "")), t.push(a);
              }
            }return this.c = t.join("&");
          }, be.prototype.la = !0, be.prototype.ja = function () {
            return this.a;
          }, be.prototype.toString = function () {
            return "Const{" + this.a + "}";
          };var hc = {};we(""), ye.prototype.la = !0, ye.prototype.ja = function () {
            return this.a;
          }, ye.prototype.toString = function () {
            return "TrustedResourceUrl{" + this.a + "}";
          };var fc = /%{(\w+)}/g,
              lc = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
              dc = {};Ae.prototype.la = !0, Ae.prototype.ja = function () {
            return this.a;
          }, Ae.prototype.toString = function () {
            return "SafeUrl{" + this.a + "}";
          };var pc = /^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i,
              vc = {};Se("about:blank");var mc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
              bc = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;_e.prototype.la = !0, _e.prototype.ja = function () {
            return this.a;
          }, _e.prototype.toString = function () {
            return "SafeHtml{" + this.a + "}";
          };var gc = {};Le("<!DOCTYPE html>"), Le(""), Le("<br>");var wc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
              yc = "Firefox",
              Ic = "Chrome",
              Tc = { Ic: "FirebaseCore-web", Kc: "FirebaseUI-web" };dn.prototype.get = function () {
            return this.a ? this.b : this.c;
          };var kc,
              Ac = {};try {
            var Ec = {};Object.defineProperty(Ec, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(Ec, "abcd", { configurable: !0, enumerable: !0, value: 2 }), kc = 2 == Ec.abcd;
          } catch (t) {
            kc = !1;
          }var Nc = "email",
              Sc = "newEmail",
              Oc = "requestType",
              Pc = "email",
              Cc = "fromEmail",
              Rc = "data",
              _c = "operation";p(An, Error), An.prototype.A = function () {
            return { code: this.code, message: this.message };
          }, An.prototype.toJSON = function () {
            return this.A();
          };var Dc = "auth/",
              Lc = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." },
              xc = "android",
              Uc = "handleCodeInApp",
              jc = "iOS",
              Mc = "url",
              Vc = "installApp",
              Fc = "minimumVersion",
              Kc = "packageName",
              qc = "bundleId",
              Xc = null,
              Hc = null;_n.prototype.f = function () {
            return this.b;
          };var Bc = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
              Wc = ["client_id", "response_type", "scope", "redirect_uri", "state"],
              Gc = { Jc: { Ma: "locale", Aa: 500, za: 600, Na: "facebook.com", ab: Wc }, Lc: { Ma: null, Aa: 500, za: 620, Na: "github.com", ab: Wc }, Mc: { Ma: "hl", Aa: 515, za: 680, Na: "google.com", ab: Wc }, Sc: { Ma: "lang", Aa: 485, za: 705, Na: "twitter.com", ab: Bc } },
              zc = "idToken",
              Jc = "providerId";p(jn, Un), p(Mn, jn), p(Vn, jn), p(Fn, jn), p(Kn, jn), Xn.prototype.xa = function (t) {
            return Er(t, Hn(this));
          }, Xn.prototype.b = function (t, e) {
            var n = Hn(this);return n.idToken = e, Nr(t, n);
          }, Xn.prototype.c = function (t, e) {
            return qn(Sr(t, Hn(this)), e);
          }, Xn.prototype.A = function () {
            var t = { providerId: this.providerId };return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), t;
          }, Bn.prototype.Ca = function (t) {
            return this.sb = V(t), this;
          }, p(Wn, Bn), Wn.prototype.ta = function (t) {
            return S(this.a, t) || this.a.push(t), this;
          }, Wn.prototype.xb = function () {
            return R(this.a);
          }, Wn.prototype.credential = function (t, e) {
            if (!t && !e) throw new An("argument-error", "credential failed: must provide the ID token and/or the access token.");return new Xn(this.providerId, { idToken: t || null, accessToken: e || null });
          }, p(Gn, Wn), bn(Gn, "PROVIDER_ID", "facebook.com"), p(Jn, Wn), bn(Jn, "PROVIDER_ID", "github.com"), p($n, Wn), bn($n, "PROVIDER_ID", "google.com"), p(Qn, Bn), bn(Qn, "PROVIDER_ID", "twitter.com"), ei.prototype.xa = function (t) {
            return Pr(t, Bh, { email: this.a, password: this.f });
          }, ei.prototype.b = function (t, e) {
            return Pr(t, Vh, { idToken: e, email: this.a, password: this.f });
          }, ei.prototype.c = function (t, e) {
            return qn(this.xa(t), e);
          }, ei.prototype.A = function () {
            return { email: this.a, password: this.f };
          }, gn(ni, { PROVIDER_ID: "password" }), ii.prototype.xa = function (t) {
            return t.Qa(ri(this));
          }, ii.prototype.b = function (t, e) {
            var n = ri(this);return n.idToken = e, Pr(t, Gh, n);
          }, ii.prototype.c = function (t, e) {
            var n = ri(this);return n.operation = "REAUTH", t = Pr(t, zh, n), qn(t, e);
          }, ii.prototype.A = function () {
            var t = { providerId: "phone" };return this.a.Pa && (t.verificationId = this.a.Pa), this.a.Oa && (t.verificationCode = this.a.Oa), this.a.Ea && (t.temporaryProof = this.a.Ea), this.a.Y && (t.phoneNumber = this.a.Y), t;
          }, oi.prototype.Qa = function (e, n) {
            var i = this.a.c;return J(n.verify()).then(function (r) {
              if (!t(r)) throw new An("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch (n.type) {case "recaptcha":
                  return Ir(i, { phoneNumber: e, recaptchaToken: r }).then(function (t) {
                    return "function" == typeof n.reset && n.reset(), t;
                  }, function (t) {
                    throw "function" == typeof n.reset && n.reset(), t;
                  });default:
                  throw new An("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}
            });
          }, gn(oi, { PROVIDER_ID: "phone" }), ci.prototype.A = function () {
            return { type: this.b, eventId: this.c, urlResponse: this.f, sessionId: this.g, error: this.a && this.a.A() };
          };var Yc = null;fi.prototype.subscribe = function (t) {
            var e = this;this.a.push(t), this.b || (this.b = function (t) {
              for (var n = 0; n < e.a.length; n++) {
                e.a[n](t);
              }
            }, "function" == typeof (t = Qe("universalLinks.subscribe", nu)) && t(null, this.b));
          }, fi.prototype.unsubscribe = function (t) {
            P(this.a, function (e) {
              return e == t;
            });
          }, p(li, An), p(di, An), di.prototype.A = function () {
            var t = { code: this.code, message: this.message };this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber);var e = this.credential && this.credential.A();return e && F(t, e), t;
          }, di.prototype.toJSON = function () {
            return this.A();
          };var $c = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;vi.prototype.c = null;var Zc;p(bi, vi), bi.prototype.a = function () {
            var t = gi(this);return t ? new ActiveXObject(t) : new XMLHttpRequest();
          }, bi.prototype.b = function () {
            var t = {};return gi(this) && (t[0] = !0, t[1] = !0), t;
          }, Zc = new bi(), p(wi, vi), wi.prototype.a = function () {
            var t = new XMLHttpRequest();if ("withCredentials" in t) return t;if ("undefined" != typeof XDomainRequest) return new yi();throw Error("Unsupported browser");
          }, wi.prototype.b = function () {
            return {};
          }, Qs = yi.prototype, Qs.open = function (t, e, n) {
            if (null != n && !n) throw Error("Only async requests are supported.");this.a.open(t, e);
          }, Qs.send = function (t) {
            if (t) {
              if ("string" != typeof t) throw Error("Only string data is supported");this.a.send(t);
            } else this.a.send();
          }, Qs.abort = function () {
            this.a.abort();
          }, Qs.setRequestHeader = function () {}, Qs.getResponseHeader = function (t) {
            return "content-type" == t.toLowerCase() ? this.a.contentType : "";
          }, Qs.Yb = function () {
            this.status = 200, this.responseText = this.a.responseText, Ii(this, 4);
          }, Qs.yb = function () {
            this.status = 500, this.responseText = "", Ii(this, 4);
          }, Qs.$b = function () {
            this.yb();
          }, Qs.Zb = function () {
            this.status = 200, Ii(this, 1);
          }, Qs.getAllResponseHeaders = function () {
            return "content-type: " + this.a.contentType;
          }, Ti.prototype.a = null;var Qc = 0;Ti.prototype.reset = function (t, e, n, i, r) {
            "number" == typeof r || Qc++, i || ou(), delete this.a;
          }, Ai.prototype.toString = function () {
            return this.name;
          };var th = new Ai("SEVERE", 1e3),
              eh = new Ai("CONFIG", 700),
              nh = new Ai("FINE", 500);ki.prototype.log = function (t, e, n) {
            if (t.value >= Ei(this).value) for (u(e) && (e = e()), t = new Ti(t, e + "", this.f), n && (t.a = n), n = this; n;) {
              n = n.a;
            }
          };var ih = {},
              rh = null;p(Oi, Mt);var oh = "",
              ah = Oi.prototype,
              sh = Ni("goog.net.XhrIo");ah.J = sh;var uh = /^https?$/i,
              ch = ["POST", "PUT"];Qs = Oi.prototype, Qs.Fa = function () {
            void 0 !== eu && this.a && (this.g = "Timed out after " + this.f + "ms, aborting", Si(this.J, Fi(this, this.g)), Vt(this, "timeout"), this.abort(8));
          }, Qs.abort = function () {
            this.a && this.b && (Si(this.J, Fi(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, Vt(this, "complete"), Vt(this, "abort"), xi(this));
          }, Qs.ua = function () {
            this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), xi(this, !0)), Oi.jb.ua.call(this);
          }, Qs.Bb = function () {
            this.pa || (this.G || this.h || this.c ? Li(this) : this.mc());
          }, Qs.mc = function () {
            Li(this);
          }, Qs.getResponse = function () {
            try {
              if (!this.a) return null;if ("response" in this.a) return this.a.response;switch (this.l) {case oh:case "text":
                  return this.a.responseText;case "arraybuffer":
                  if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;}var t = this.J;return t && t.log(th, "Response type " + this.l + " is not supported on this browser", void 0), null;
            } catch (t) {
              return Si(this.J, "Can not get response: " + t.message), null;
            }
          }, Ki.prototype.cancel = function (t) {
            if (this.a) this.c instanceof Ki && this.c.cancel();else {
              if (this.b) {
                var e = this.b;delete this.b, t ? e.cancel(t) : 0 >= --e.l && e.cancel();
              }this.v ? this.v.call(this.s, this) : this.u = !0, this.a || (t = new Ji(this), Xi(this), qi(this, !1, t));
            }
          }, Ki.prototype.m = function (t, e) {
            this.i = !1, qi(this, t, e);
          }, Ki.prototype.B = function () {
            Xi(this), qi(this, !0, null);
          }, Ki.prototype.then = function (t, e, n) {
            var i,
                r,
                o = new W(function (t, e) {
              i = t, r = e;
            });return Bi(this, i, function (t) {
              t instanceof Ji ? o.cancel() : r(t);
            }), o.then(t, e, n);
          }, v(Ki), p(zi, b), zi.prototype.message = "Deferred has already fired", zi.prototype.name = "AlreadyCalledError", p(Ji, b), Ji.prototype.message = "Deferred was canceled", Ji.prototype.name = "CanceledError", Yi.prototype.c = function () {
            throw delete hh[this.a], this.b;
          };var hh = {},
              fh = !Uu || 9 <= +Hu,
              lh = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
              dh = 0,
              ph = 1;p(ar, b), p(sr, vi), sr.prototype.a = function () {
            return new this.f();
          }, sr.prototype.b = function () {
            return {};
          };var vh,
              mh = "idToken",
              bh = new dn(3e4, 6e4),
              gh = { "Content-Type": "application/x-www-form-urlencoded" },
              wh = new dn(3e4, 6e4),
              yh = { "Content-Type": "application/json" };ur.prototype.m = function (t, e, n, i, r, o) {
            var a = "Node" == ze(),
                s = Je() ? a ? new Oi(this.s) : new Oi() : new Oi(this.f);if (o) {
              s.f = Math.max(0, o);var u = setTimeout(function () {
                Vt(s, "timeout");
              }, o);
            }Ft(s, "complete", function () {
              u && clearTimeout(u);var t = null;try {
                t = JSON.parse(Vi(this)) || null;
              } catch (e) {
                t = null;
              }e && e(t);
            }), Kt(s, "ready", function () {
              u && clearTimeout(u), pt(this);
            }), Kt(s, "timeout", function () {
              u && clearTimeout(u), pt(this), e && e(null);
            }), Pi(s, t, n, i, r);
          };var Ih = we("https://apis.google.com/js/client.js?onload=%{onload}"),
              Th = "__fcb" + Math.floor(1e6 * Math.random());ur.prototype.u = function (t, e, n, i, r) {
            var o = this;vh.then(function () {
              window.gapi.client.setApiKey(o.b);var a = window.gapi.auth.getToken();window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: n, body: i, headers: r, authType: "none", callback: function callback(t) {
                  window.gapi.auth.setToken(a), e && e(t);
                } });
            }).o(function (t) {
              e && e({ error: { message: t && t.message || "CORS_UNSUPPORTED" } });
            });
          }, ur.prototype.hb = function () {
            return Pr(this, Fh, {});
          }, ur.prototype.lb = function (t, e) {
            return Pr(this, Mh, { idToken: t, email: e });
          }, ur.prototype.mb = function (t, e) {
            return Pr(this, Vh, { idToken: t, password: e });
          };var kh = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };Qs = ur.prototype, Qs.nb = function (t, e) {
            var n = { idToken: t },
                i = [];return j(kh, function (t, r) {
              var o = e[r];null === o ? i.push(t) : r in e && (n[r] = o);
            }), i.length && (n.deleteAttribute = i), Pr(this, Mh, n);
          }, Qs.eb = function (t, e) {
            return t = { requestType: "PASSWORD_RESET", email: t }, F(t, e), Pr(this, Dh, t);
          }, Qs.cb = function (t, e) {
            return t = { requestType: "VERIFY_EMAIL", idToken: t }, F(t, e), Pr(this, _h, t);
          }, Qs.Qa = function (t) {
            return Pr(this, Wh, t);
          }, Qs.Ua = function (t, e) {
            return Pr(this, Uh, { oobCode: t, newPassword: e });
          }, Qs.Ia = function (t) {
            return Pr(this, Nh, { oobCode: t });
          }, Qs.Sa = function (t) {
            return Pr(this, Eh, { oobCode: t });
          };var Ah,
              Eh = { endpoint: "setAccountInfo", D: Or, ga: "email" },
              Nh = { endpoint: "resetPassword", D: Or, O: function O(t) {
              if (!t.email || !t.requestType) throw new An("internal-error");
            } },
              Sh = { endpoint: "signupNewUser", D: function D(t) {
              if (vr(t), !t.password) throw new An("weak-password");
            }, O: wr, T: !0 },
              Oh = { endpoint: "createAuthUri" },
              Ph = { endpoint: "deleteAccount", ea: ["idToken"] },
              Ch = { endpoint: "setAccountInfo", ea: ["idToken", "deleteProvider"], D: function D(t) {
              if (!a(t.deleteProvider)) throw new An("internal-error");
            } },
              Rh = { endpoint: "getAccountInfo" },
              _h = { endpoint: "getOobConfirmationCode", ea: ["idToken", "requestType"], D: function D(t) {
              if ("VERIFY_EMAIL" != t.requestType) throw new An("internal-error");
            }, ga: "email" },
              Dh = { endpoint: "getOobConfirmationCode", ea: ["requestType"], D: function D(t) {
              if ("PASSWORD_RESET" != t.requestType) throw new An("internal-error");vr(t);
            }, ga: "email" },
              Lh = { ob: !0, endpoint: "getProjectConfig", Ab: "GET" },
              xh = { ob: !0, endpoint: "getRecaptchaParam", Ab: "GET", O: function O(t) {
              if (!t.recaptchaSiteKey) throw new An("internal-error");
            } },
              Uh = { endpoint: "resetPassword", D: Or, ga: "email" },
              jh = { endpoint: "sendVerificationCode", ea: ["phoneNumber", "recaptchaToken"], ga: "sessionInfo" },
              Mh = { endpoint: "setAccountInfo", ea: ["idToken"], D: mr, T: !0 },
              Vh = { endpoint: "setAccountInfo", ea: ["idToken"], D: function D(t) {
              if (mr(t), !t.password) throw new An("weak-password");
            }, O: wr, T: !0 },
              Fh = { endpoint: "signupNewUser", O: wr, T: !0 },
              Kh = { endpoint: "verifyAssertion", D: kr, O: Ar, T: !0 },
              qh = { endpoint: "verifyAssertion", D: kr, O: function O(t) {
              if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new An("user-not-found");if (t.errorMessage) throw Cr(t.errorMessage);if (!t[mh]) throw new An("internal-error");
            }, T: !0 },
              Xh = { endpoint: "verifyAssertion", D: function D(t) {
              if (kr(t), !t.idToken) throw new An("internal-error");
            }, O: Ar, T: !0 },
              Hh = { endpoint: "verifyCustomToken", D: function D(t) {
              if (!t.token) throw new An("invalid-custom-token");
            }, O: wr, T: !0 },
              Bh = { endpoint: "verifyPassword", D: function D(t) {
              if (vr(t), !t.password) throw new An("wrong-password");
            }, O: wr, T: !0 },
              Wh = { endpoint: "verifyPhoneNumber", D: yr, O: wr },
              Gh = { endpoint: "verifyPhoneNumber", D: function D(t) {
              if (!t.idToken) throw new An("internal-error");yr(t);
            }, O: function O(t) {
              if (t.temporaryProof) throw t.code = "credential-already-in-use", pi(t);wr(t);
            } },
              zh = { Rb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", D: yr, O: wr },
              Jh = { Oc: { Wa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", bb: "https://securetoken.googleapis.com/v1/token", id: "p" }, Qc: { Wa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", bb: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, Rc: { Wa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", bb: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } };Ah = _r("__EID__") ? "__EID__" : void 0;var Yh = we("https://apis.google.com/js/api.js?onload=%{onload}"),
              $h = new dn(3e4, 6e4),
              Zh = new dn(5e3, 15e3),
              Qh = null;Mr.prototype.toString = function () {
            return this.f ? ne(this.a, "v", this.f) : le(this.a.a, "v"), this.b ? ne(this.a, "eid", this.b) : le(this.a.a, "eid"), this.c.length ? ne(this.a, "fw", this.c.join(",")) : le(this.a.a, "fw"), "" + this.a;
          }, Vr.prototype.toString = function () {
            var t = oe(this.m, "/__/auth/handler");if (ne(t, "apiKey", this.u), ne(t, "appName", this.c), ne(t, "authType", this.l), this.a.isOAuthProvider) {
              var e = this.a;try {
                var n = tu.app(this.c).auth().$();
              } catch (t) {
                n = null;
              }e.Va = n, ne(t, "providerId", this.a.providerId), e = this.a, n = sn(e.sb);for (var i in n) {
                n[i] = "" + n[i];
              }i = e.tc, n = V(n);for (var r = 0; r < i.length; r++) {
                var o = i[r];o in n && delete n[o];
              }e.Xa && e.Va && !n[e.Xa] && (n[e.Xa] = e.Va), M(n) || ne(t, "customParameters", an(n));
            }if ("function" == typeof this.a.xb && (e = this.a.xb(), e.length && ne(t, "scopes", e.join(","))), this.i ? ne(t, "redirectUrl", this.i) : le(t.a, "redirectUrl"), this.g ? ne(t, "eventId", this.g) : le(t.a, "eventId"), this.h ? ne(t, "v", this.h) : le(t.a, "v"), this.b) for (var a in this.b) {
              this.b.hasOwnProperty(a) && !ie(t, a) && ne(t, a, this.b[a]);
            }return this.f ? ne(t, "eid", this.f) : le(t.a, "eid"), a = Fr(this.c), a.length && ne(t, "fw", a.join(",")), "" + t;
          }, Qs = Kr.prototype, Qs.Da = function (t, e, n) {
            var i = new An("popup-closed-by-user"),
                r = new An("web-storage-unsupported"),
                o = this,
                a = !1;return this.ba().then(function () {
              Gr(o).then(function (n) {
                n || (t && Ke(t), e(r), a = !0);
              });
            }).o(function () {}).then(function () {
              if (!a) return Xe(t);
            }).then(function () {
              if (!a) return Ht(n).then(function () {
                e(i);
              });
            });
          }, Qs.Eb = function () {
            var t = Ze();return !on(t) && !hn(t);
          }, Qs.zb = function () {
            return !1;
          }, Qs.wb = function (t, e, n, i, r, o, a) {
            if (!t) return Y(new An("popup-blocked"));if (a && !on()) return this.ba().o(function (e) {
              Ke(t), r(e);
            }), i(), J();this.a || (this.a = qr(Hr(this)));var s = this;return this.a.then(function () {
              var e = s.ba().o(function (e) {
                throw Ke(t), r(e), e;
              });return i(), e;
            }).then(function () {
              ui(n), a || je(Br(s.u, s.f, s.b, e, n, null, o, s.c, void 0, s.h), t);
            }).o(function (t) {
              throw "auth/network-request-failed" == t.code && (s.a = null), t;
            });
          }, Qs.Ba = function (t, e, n) {
            this.a || (this.a = qr(Hr(this)));var i = this;return this.a.then(function () {
              ui(e), je(Br(i.u, i.f, i.b, t, e, Ue(), n, i.c, void 0, i.h));
            }).o(function (t) {
              throw "auth/network-request-failed" == t.code && (i.a = null), t;
            });
          }, Qs.ba = function () {
            var t = this;return Xr(this).then(function () {
              return t.i.Za;
            }).o(function () {
              throw t.a = null, new An("network-request-failed");
            });
          }, Qs.Jb = function () {
            return !0;
          }, Qs.va = function (t) {
            this.g.push(t);
          }, Qs.Ja = function (t) {
            P(this.g, function (e) {
              return e == t;
            });
          }, Qs = zr.prototype, Qs.get = function (t) {
            return J(this.a.getItem(t)).then(function (t) {
              return t && un(t);
            });
          }, Qs.set = function (t, e) {
            return J(this.a.setItem(t, an(e)));
          }, Qs.X = function (t) {
            return J(this.a.removeItem(t));
          }, Qs.ia = function () {}, Qs.da = function () {}, Qs = Jr.prototype, Qs.get = function (t) {
            return J(this.a[t]);
          }, Qs.set = function (t, e) {
            return this.a[t] = e, J();
          }, Qs.X = function (t) {
            return delete this.a[t], J();
          }, Qs.ia = function () {}, Qs.da = function () {};var tf;Qs = Yr.prototype, Qs.set = function (t, e) {
            var n,
                i = !1,
                r = this;return tt(Zr(this).then(function (e) {
              return n = e, e = Qr(to(n, !0)), eo(e.get(t));
            }).then(function (o) {
              var a = Qr(to(n, !0));return o ? (o.value = e, eo(a.put(o))) : (r.a++, i = !0, o = {}, o.fbase_key = t, o.value = e, eo(a.add(o)));
            }).then(function () {
              r.f[t] = e;
            }), function () {
              i && r.a--;
            });
          }, Qs.get = function (t) {
            return Zr(this).then(function (e) {
              return eo(Qr(to(e, !1)).get(t));
            }).then(function (t) {
              return t && t.value;
            });
          }, Qs.X = function (t) {
            var e = !1,
                n = this;return tt(Zr(this).then(function (i) {
              return e = !0, n.a++, eo(Qr(to(i, !0)).delete(t));
            }).then(function () {
              delete n.f[t];
            }), function () {
              e && n.a--;
            });
          }, Qs.Bc = function () {
            var t = this;return Zr(this).then(function (t) {
              var e = Qr(to(t, !1));return e.getAll ? eo(e.getAll()) : new W(function (t, n) {
                var i = [],
                    r = e.openCursor();r.onsuccess = function (e) {
                  (e = e.target.result) ? (i.push(e.value), e.continue()) : t(i);
                }, r.onerror = function (t) {
                  n(Error(t.target.errorCode));
                };
              });
            }).then(function (e) {
              var n = {},
                  i = [];if (0 == t.a) {
                for (i = 0; i < e.length; i++) {
                  n[e[i].fbase_key] = e[i].value;
                }i = Me(t.f, n), t.f = n;
              }return i;
            });
          }, Qs.ia = function (t) {
            0 == this.c.length && no(this), this.c.push(t);
          }, Qs.da = function (t) {
            P(this.c, function (e) {
              return e == t;
            }), 0 == this.c.length && this.b && this.b.cancel("STOP_EVENT");
          }, Qs = io.prototype, Qs.get = function (t) {
            var e = this;return J().then(function () {
              return un(e.a.getItem(t));
            });
          }, Qs.set = function (t, e) {
            var n = this;return J().then(function () {
              var i = an(e);null === i ? n.X(t) : n.a.setItem(t, i);
            });
          }, Qs.X = function (t) {
            var e = this;return J().then(function () {
              e.a.removeItem(t);
            });
          }, Qs.ia = function (t) {
            nu.window && Nt(nu.window, "storage", t);
          }, Qs.da = function (t) {
            nu.window && Ct(nu.window, "storage", t);
          }, Qs = ao.prototype, Qs.get = function () {
            return J(null);
          }, Qs.set = function () {
            return J();
          }, Qs.X = function () {
            return J();
          }, Qs.ia = function () {}, Qs.da = function () {}, Qs = so.prototype, Qs.get = function (t) {
            var e = this;return J().then(function () {
              return un(e.a.getItem(t));
            });
          }, Qs.set = function (t, e) {
            var n = this;return J().then(function () {
              var i = an(e);null === i ? n.X(t) : n.a.setItem(t, i);
            });
          }, Qs.X = function (t) {
            var e = this;return J().then(function () {
              e.a.removeItem(t);
            });
          }, Qs.ia = function () {}, Qs.da = function () {};var ef,
              nf,
              rf = { C: io, kb: so },
              of = { C: io, kb: so },
              af = { C: zr, kb: ao },
              sf = { Nc: "local", NONE: "none", Pc: "session" };Qs = lo.prototype, Qs.get = function (t, e) {
            return vo(this, t.C).get(mo(t, e));
          }, Qs.set = function (t, e, n) {
            var i = mo(t, n),
                r = this,
                o = vo(this, t.C);return o.set(i, e).then(function () {
              return o.get(i);
            }).then(function (e) {
              "local" == t.C && (r.b[i] = e);
            });
          }, Qs.addListener = function (t, e, n) {
            t = mo(t, e), this.l && (this.b[t] = nu.localStorage.getItem(t)), M(this.a) && (vo(this, "local").ia(this.f), this.h || xe() || !this.l || go(this)), this.a[t] || (this.a[t] = []), this.a[t].push(n);
          }, Qs.removeListener = function (t, e, n) {
            t = mo(t, e), this.a[t] && (P(this.a[t], function (t) {
              return t == n;
            }), 0 == this.a[t].length && delete this.a[t]), M(this.a) && (vo(this, "local").da(this.f), wo(this));
          }, Qs.Ib = function (t) {
            if (t && t.g) {
              var e = t.a.key;if (null == e) for (var n in this.a) {
                var i = this.b[n];void 0 === i && (i = null);var r = nu.localStorage.getItem(n);r !== i && (this.b[n] = r, this.Ta(n));
              } else if (0 == e.indexOf("firebase:") && this.a[e]) {
                if (void 0 !== t.a.a ? vo(this, "local").da(this.f) : wo(this), this.m) if (n = nu.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? nu.localStorage.setItem(e, i) : nu.localStorage.removeItem(e);else if (this.b[e] === i && void 0 === t.a.a) return;var o = this;n = function n() {
                  void 0 === t.a.a && o.b[e] === nu.localStorage.getItem(e) || (o.b[e] = nu.localStorage.getItem(e), o.Ta(e));
                }, Uu && Hu && 10 == Hu && nu.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n();
              }
            } else cu(t, l(this.Ta, this));
          }, Qs.Ta = function (t) {
            this.a[t] && cu(this.a[t], function (t) {
              t();
            });
          };var uf,
              cf = { name: "authEvent", C: "local" };p(Ao, ko);for (var hf = 64, ff = hf - 1, lf = [], df = 0; df < ff; df++) {
            lf[df] = 0;
          }var pf = C(128, lf);Ao.prototype.reset = function () {
            this.g = this.c = 0, this.a = nu.Int32Array ? new Int32Array(this.h) : R(this.h);
          };var vf = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];p(So, Ao);var mf = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];Qs = Oo.prototype, Qs.ba = function () {
            return this.ya ? this.ya : this.ya = Be().then(function () {
              if ("function" != typeof Qe("universalLinks.subscribe", nu)) throw Po("cordova-universal-links-plugin is not installed");if (void 0 === Qe("BuildInfo.packageName", nu)) throw Po("cordova-plugin-buildinfo is not installed");if ("function" != typeof Qe("cordova.plugins.browsertab.openUrl", nu)) throw Po("cordova-plugin-browsertab is not installed");if ("function" != typeof Qe("cordova.InAppBrowser.open", nu)) throw Po("cordova-plugin-inappbrowser is not installed");
            }, function () {
              throw new An("cordova-not-ready");
            });
          }, Qs.Da = function (t, e) {
            return e(new An("operation-not-supported-in-this-environment")), J();
          }, Qs.wb = function () {
            return Y(new An("operation-not-supported-in-this-environment"));
          }, Qs.Jb = function () {
            return !1;
          }, Qs.Eb = function () {
            return !0;
          }, Qs.zb = function () {
            return !0;
          }, Qs.Ba = function (t, e, n) {
            if (this.c) return Y(new An("redirect-operation-pending"));var i = this,
                r = nu.document,
                o = null,
                a = null,
                s = null,
                u = null;return this.c = tt(J().then(function () {
              return ui(e), Lo(i);
            }).then(function () {
              return _o(i, t, e, n);
            }).then(function () {
              return new W(function (t, e) {
                a = function a() {
                  var e = Qe("cordova.plugins.browsertab.close", nu);return t(), "function" == typeof e && e(), i.a && "function" == typeof i.a.close && (i.a.close(), i.a = null), !1;
                }, i.va(a), s = function s() {
                  o || (o = Ht(2e3).then(function () {
                    e(new An("redirect-cancelled-by-user"));
                  }));
                }, u = function u() {
                  pn() && s();
                }, r.addEventListener("resume", s, !1), Ze().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", u, !1);
              }).o(function (t) {
                return xo(i).then(function () {
                  throw t;
                });
              });
            }), function () {
              s && r.removeEventListener("resume", s, !1), u && r.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && i.Ja(a), i.c = null;
            });
          }, Qs.va = function (t) {
            this.b.push(t), Lo(this).o(function (e) {
              "auth/invalid-cordova-configuration" === e.code && (e = new ci("unknown", null, null, null, new An("no-auth-event")), t(e));
            });
          }, Qs.Ja = function (t) {
            P(this.b, function (e) {
              return e == t;
            });
          };var bf = { name: "pendingRedirect", C: "session" };Ko.prototype.reset = function () {
            this.f = !1, this.a.Ja(this.i), this.a = qo(this.v, this.l, this.u);
          }, Ko.prototype.subscribe = function (t) {
            if (S(this.h, t) || this.h.push(t), !this.f) {
              var e = this;Fo(this.g).then(function (t) {
                t ? Vo(e.g).then(function () {
                  Xo(e).o(function (t) {
                    var n = new ci("unknown", null, null, null, new An("operation-not-supported-in-this-environment"));Wo(t) && e.m(n);
                  });
                }) : Ho(e);
              }).o(function () {
                Ho(e);
              });
            }
          }, Ko.prototype.unsubscribe = function (t) {
            P(this.h, function (e) {
              return e == t;
            });
          }, Ko.prototype.m = function (t) {
            if (!t) throw new An("invalid-auth-event");for (var e = !1, n = 0; n < this.h.length; n++) {
              var i = this.h[n];if (i.pb(t.b, t.c)) {
                (e = this.b[t.b]) && e.h(t, i), e = !0;break;
              }
            }return Jo(this.c), e;
          };var gf = new dn(2e3, 1e4),
              wf = new dn(3e4, 6e4);Ko.prototype.aa = function () {
            return this.c.aa();
          }, Ko.prototype.Ba = function (t, e, n) {
            var i,
                r = this;return Mo(this.g).then(function () {
              return r.a.Ba(t, e, n).o(function (t) {
                if (Wo(t)) throw new An("operation-not-supported-in-this-environment");return i = t, Vo(r.g).then(function () {
                  throw i;
                });
              }).then(function () {
                return r.a.Jb() ? new W(function () {}) : Vo(r.g).then(function () {
                  return r.aa();
                }).then(function () {}).o(function () {});
              });
            });
          }, Ko.prototype.Da = function (t, e, n, i) {
            return this.a.Da(n, function (n) {
              t.fa(e, null, n, i);
            }, gf.get());
          };var yf = {};zo.prototype.reset = function () {
            this.b = null, this.a && (this.a.cancel(), this.a = null);
          }, zo.prototype.h = function (t, e) {
            if (t) {
              this.reset(), this.g = !0;var n = t.b,
                  i = t.c,
                  r = t.a && "auth/web-storage-unsupported" == t.a.code,
                  o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;"unknown" != n || r || o ? t.a ? (Qo(this, !0, null, t.a), J()) : e.wa(n, i) ? Yo(this, t, e) : Y(new An("invalid-auth-event")) : (Qo(this, !1, null, null), J());
            } else Y(new An("invalid-auth-event"));
          }, zo.prototype.aa = function () {
            var t = this;return new W(function (e, n) {
              t.b ? t.b().then(e, n) : (t.f.push(e), t.c.push(n), ta(t));
            });
          }, ea.prototype.h = function (t, e) {
            if (t) {
              var n = t.b,
                  i = t.c;t.a ? (e.fa(t.b, null, t.a, t.c), J()) : e.wa(n, i) ? na(t, e) : Y(new An("invalid-auth-event"));
            } else Y(new An("invalid-auth-event"));
          }, ia.prototype.confirm = function (t) {
            return t = ai(this.verificationId, t), this.a(t);
          }, oa.prototype.start = function () {
            this.a = this.c, sa(this, !0);
          }, ca.prototype.A = function () {
            return { apiKey: this.f.b, refreshToken: this.a, accessToken: this.b, expirationTime: this.c };
          }, ca.prototype.getToken = function (t) {
            return t = !!t, this.b && !this.a ? Y(new An("user-token-expired")) : t || !this.b || ou() > this.c - 3e4 ? this.a ? la(this, { grant_type: "refresh_token", refresh_token: this.a }) : J(null) : J({ accessToken: this.b, expirationTime: this.c, refreshToken: this.a });
          }, da.prototype.A = function () {
            return { lastLoginAt: this.b, createdAt: this.a };
          }, p(ma, wt), p(ba, Mt), ba.prototype.na = function (t) {
            this.ha = t, cr(this.c, t);
          }, ba.prototype.$ = function () {
            return this.ha;
          }, ba.prototype.Ka = function () {
            return R(this.R);
          }, ba.prototype.Ga = function () {
            this.l.b && (ua(this.l), this.l.start());
          }, bn(ba.prototype, "providerId", "firebase"), Qs = ba.prototype, Qs.reload = function () {
            var t = this;return Ga(this, Ra(this).then(function () {
              return ja(t).then(function () {
                return Sa(t);
              }).then(Ca);
            }));
          }, Qs.F = function (t) {
            var e = this;return Ga(this, Ra(this).then(function () {
              return e.h.getToken(t);
            }).then(function (t) {
              if (!t) throw new An("internal-error");return t.accessToken != e.qa && (Ea(e, t.accessToken), Vt(e, new ma("tokenChanged"))), xa(e, "refreshToken", t.refreshToken), t.accessToken;
            }));
          }, Qs.getToken = function (t) {
            return Ac["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (Ac["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.")), this.F(t);
          }, Qs.nc = function (t) {
            if (!(t = t.users) || !t.length) throw new An("internal-error");t = t[0], Pa(this, { uid: t.localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt });for (var e = Fa(t), n = 0; n < e.length; n++) {
              Da(this, e[n]);
            }xa(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length));
          }, Qs.$a = function (t) {
            var e = this,
                n = null;return Ga(this, t.c(this.c, this.uid).then(function (t) {
              return Ma(e, t), n = qa(e, t, "reauthenticate"), e.i = null, e.reload();
            }).then(function () {
              return n;
            }), !0);
          }, Qs.oc = function (t) {
            return this.$a(t).then(function () {});
          }, Qs.Ya = function (t) {
            var e = this,
                n = null;return Ga(this, Ka(this, t.providerId).then(function () {
              return e.F();
            }).then(function (n) {
              return t.b(e.c, n);
            }).then(function (t) {
              return n = qa(e, t, "link"), Xa(e, t);
            }).then(function () {
              return n;
            }));
          }, Qs.ec = function (t) {
            return this.Ya(t).then(function (t) {
              return t.user;
            });
          }, Qs.fc = function (t, e) {
            var n = this;return Ga(this, Ka(this, "phone").then(function () {
              return ra(Ia(n), t, e, l(n.Ya, n));
            }));
          }, Qs.pc = function (t, e) {
            var n = this;return Ga(this, J().then(function () {
              return ra(Ia(n), t, e, l(n.$a, n));
            }), !0);
          }, Qs.lb = function (t) {
            var e = this;return Ga(this, this.F().then(function (n) {
              return e.c.lb(n, t);
            }).then(function (t) {
              return Ma(e, t), e.reload();
            }));
          }, Qs.Fc = function (t) {
            var e = this;return Ga(this, this.F().then(function (n) {
              return t.b(e.c, n);
            }).then(function (t) {
              return Ma(e, t), e.reload();
            }));
          }, Qs.mb = function (t) {
            var e = this;return Ga(this, this.F().then(function (n) {
              return e.c.mb(n, t);
            }).then(function (t) {
              return Ma(e, t), e.reload();
            }));
          }, Qs.nb = function (t) {
            if (void 0 === t.displayName && void 0 === t.photoURL) return Ra(this);var e = this;return Ga(this, this.F().then(function (n) {
              return e.c.nb(n, { displayName: t.displayName, photoUrl: t.photoURL });
            }).then(function (t) {
              return Ma(e, t), xa(e, "displayName", t.displayName || null), xa(e, "photoURL", t.photoUrl || null), cu(e.providerData, function (t) {
                "password" === t.providerId && (bn(t, "displayName", e.displayName), bn(t, "photoURL", e.photoURL));
              }), Sa(e);
            }).then(Ca));
          }, Qs.Ec = function (t) {
            var e = this;return Ga(this, ja(this).then(function (n) {
              return S(_a(e), t) ? Tr(e.c, n, [t]).then(function (t) {
                var n = {};return cu(t.providerUserInfo || [], function (t) {
                  n[t.providerId] = !0;
                }), cu(_a(e), function (t) {
                  n[t] || La(e, t);
                }), n[oi.PROVIDER_ID] || bn(e, "phoneNumber", null), Sa(e);
              }) : Sa(e).then(function () {
                throw new An("no-such-provider");
              });
            }));
          }, Qs.delete = function () {
            var t = this;return Ga(this, this.F().then(function (e) {
              return Pr(t.c, Ph, { idToken: e });
            }).then(function () {
              Vt(t, new ma("userDeleted"));
            })).then(function () {
              for (var e = 0; e < t.B.length; e++) {
                t.B[e].cancel("app-deleted");
              }ga(t, null), ya(t, null), t.B = [], t.m = !0, Aa(t), bn(t, "refreshToken", null), t.a && t.a.unsubscribe(t);
            });
          }, Qs.pb = function (t, e) {
            return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.Z || null) == e || "reauthViaRedirect" == t && (this.Z || null) == e);
          }, Qs.fa = function (t, e, n, i) {
            "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
          }, Qs.wa = function (t, e) {
            return "linkViaPopup" == t && e == (this.g || null) ? l(this.ub, this) : "reauthViaPopup" == t && e == (this.g || null) ? l(this.vb, this) : "linkViaRedirect" == t && (this.Z || null) == e ? l(this.ub, this) : "reauthViaRedirect" == t && (this.Z || null) == e ? l(this.vb, this) : null;
          }, Qs.gc = function (t) {
            var e = this;return Ha(this, "linkViaPopup", t, function () {
              return Ka(e, t.providerId).then(function () {
                return Sa(e);
              });
            }, !1);
          }, Qs.qc = function (t) {
            return Ha(this, "reauthViaPopup", t, function () {
              return J();
            }, !0);
          }, Qs.hc = function (t) {
            var e = this;return Ba(this, "linkViaRedirect", t, function () {
              return Ka(e, t.providerId);
            }, !1);
          }, Qs.rc = function (t) {
            return Ba(this, "reauthViaRedirect", t, function () {
              return J();
            }, !0);
          }, Qs.ub = function (t, e) {
            var n = this;this.b && (this.b.cancel(), this.b = null);var i = null;return Ga(this, this.F().then(function (i) {
              return Nr(n.c, { requestUri: t, sessionId: e, idToken: i });
            }).then(function (t) {
              return i = qa(n, t, "link"), Xa(n, t);
            }).then(function () {
              return i;
            }));
          }, Qs.vb = function (t, e) {
            var n = this;this.b && (this.b.cancel(), this.b = null);var i = null;return Ga(this, J().then(function () {
              return qn(Sr(n.c, { requestUri: t, sessionId: e }), n.uid);
            }).then(function (t) {
              return i = qa(n, t, "reauthenticate"), Ma(n, t), n.i = null, n.reload();
            }).then(function () {
              return i;
            }), !0);
          }, Qs.cb = function (t) {
            var e = this,
                n = null;return Ga(this, this.F().then(function (e) {
              return n = e, void 0 === t || M(t) ? {} : Sn(new Nn(t));
            }).then(function (t) {
              return e.c.cb(n, t);
            }).then(function (t) {
              if (e.email != t) return e.reload();
            }).then(function () {}));
          }, Qs.toJSON = function () {
            return this.A();
          }, Qs.A = function () {
            var t = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.G, appName: this.s, authDomain: this.w, stsTokenManager: this.h.A(), redirectEventId: this.Z || null };return this.metadata && F(t, this.metadata.A()), cu(this.providerData, function (e) {
              t.providerData.push(yn(e));
            }), t;
          };var If = { name: "redirectUser", C: "session" };ts.prototype.g = function () {
            var t = this,
                e = is("local");us(this, function () {
              return J().then(function () {
                return t.c && "local" != t.c.C ? t.b.get(e, t.a) : null;
              }).then(function (n) {
                if (n) return es(t, "local").then(function () {
                  t.c = e;
                });
              });
            });
          };var Tf = { name: "persistence", C: "session" };ts.prototype.fb = function (t) {
            var e = null,
                n = this;return fo(t), us(this, function () {
              return t != n.c.C ? n.b.get(n.c, n.a).then(function (i) {
                return e = i, es(n, t);
              }).then(function () {
                if (n.c = is(t), e) return n.b.set(n.c, e, n.a);
              }) : J();
            });
          }, p(cs, Mt), p(hs, wt), p(fs, wt), Qs = cs.prototype, Qs.fb = function (t) {
            return t = this.h.fb(t), Ns(this, t);
          }, Qs.na = function (t) {
            this.V === t || this.l || (this.V = t, cr(this.c, this.V), Vt(this, new hs(this.$())));
          }, Qs.$ = function () {
            return this.V;
          }, Qs.Gc = function () {
            var t = nu.navigator;this.na(t ? t.languages && t.languages[0] || t.language || t.userLanguage || null : null);
          }, Qs.ic = function (t) {
            this.B.push(t), hr(this.c, tu.SDK_VERSION ? $e(tu.SDK_VERSION, this.B) : null), Vt(this, new fs(this.B));
          }, Qs.Ka = function () {
            return R(this.B);
          }, Qs.toJSON = function () {
            return { apiKey: Is(this).options.apiKey, authDomain: Is(this).options.authDomain, appName: Is(this).name, currentUser: Ts(this) && Ts(this).A() };
          }, Qs.pb = function (t, e) {
            switch (t) {case "unknown":case "signInViaRedirect":
                return !0;case "signInViaPopup":
                return this.g == e && !!this.f;default:
                return !1;}
          }, Qs.fa = function (t, e, n, i) {
            "signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
          }, Qs.wa = function (t, e) {
            return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? l(this.Ub, this) : null;
          }, Qs.Ub = function (t, e) {
            var n = this;t = { requestUri: t, sessionId: e }, this.b && (this.b.cancel(), this.b = null);var i = null,
                r = null,
                o = Er(n.c, t).then(function (t) {
              return i = si(t), r = xn(t), t;
            });return t = n.U.then(function () {
              return o;
            }).then(function (t) {
              return vs(n, t);
            }).then(function () {
              return wn({ user: Ts(n), credential: i, additionalUserInfo: r, operationType: "signIn" });
            }), Ns(this, t);
          }, Qs.yc = function (t) {
            if (!en()) return Y(new An("operation-not-supported-in-this-environment"));var e = this,
                n = Ln(t.providerId),
                i = cn(),
                r = null;(!on() || Ge()) && Is(this).options.authDomain && t.isOAuthProvider && (r = Br(Is(this).options.authDomain, Is(this).options.apiKey, Is(this).name, "signInViaPopup", t, null, i, tu.SDK_VERSION || null));var o = qe(r, n && n.Aa, n && n.za);return n = ds(this).then(function (e) {
              return Bo(e, o, "signInViaPopup", t, i, !!r);
            }).then(function () {
              return new W(function (t, n) {
                e.fa("signInViaPopup", null, new An("cancelled-popup-request"), e.g), e.f = t, e.v = n, e.g = i, e.b = e.a.Da(e, "signInViaPopup", o, i);
              });
            }).then(function (t) {
              return o && Ke(o), t ? wn(t) : null;
            }).o(function (t) {
              throw o && Ke(o), t;
            }), Ns(this, n);
          }, Qs.zc = function (t) {
            if (!en()) return Y(new An("operation-not-supported-in-this-environment"));var e = this;return Ns(this, ds(this).then(function () {
              return rs(e.h);
            }).then(function () {
              return e.a.Ba("signInViaRedirect", t);
            }));
          }, Qs.aa = function () {
            if (!en()) return Y(new An("operation-not-supported-in-this-environment"));var t = this;return Ns(this, ds(this).then(function () {
              return t.a.aa();
            }).then(function (t) {
              return t ? wn(t) : null;
            }));
          }, Qs.ib = function () {
            var t = this;return Ns(this, this.i.then(function () {
              return Ts(t) ? (ms(t, null), as(t.h).then(function () {
                As(t);
              })) : J();
            }));
          }, Qs.Ac = function () {
            var t = this;return ss(this.h, Is(this).options.authDomain).then(function (e) {
              if (!t.l) {
                var n;if (n = Ts(t) && e) {
                  n = Ts(t).uid;var i = e.uid;n = void 0 !== n && null !== n && "" !== n && void 0 !== i && null !== i && "" !== i && n == i;
                }if (n) return Ua(Ts(t), e), Ts(t).F();(Ts(t) || e) && (ms(t, e), e && (Oa(e), e.ca = t.G), t.a && t.a.subscribe(t), As(t));
              }
            });
          }, Qs.ka = function (t) {
            return os(this.h, t);
          }, Qs.Vb = function () {
            As(this), this.ka(Ts(this));
          }, Qs.ac = function () {
            this.ib();
          }, Qs.bc = function () {
            this.ib();
          }, Qs.cc = function (t) {
            var e = this;this.addAuthTokenListener(function () {
              t.next(Ts(e));
            });
          }, Qs.dc = function (t) {
            var e = this;Es(this, function () {
              t.next(Ts(e));
            });
          }, Qs.kc = function (t, e, n) {
            var i = this;return this.W && tu.Promise.resolve().then(function () {
              u(t) ? t(Ts(i)) : u(t.next) && t.next(Ts(i));
            }), this.Mb(t, e, n);
          }, Qs.jc = function (t, e, n) {
            var i = this;return this.W && tu.Promise.resolve().then(function () {
              i.R = i.getUid(), u(t) ? t(Ts(i)) : u(t.next) && t.next(Ts(i));
            }), this.Nb(t, e, n);
          }, Qs.Xb = function (t) {
            var e = this;return Ns(this, this.i.then(function () {
              return Ts(e) ? Ts(e).F(t).then(function (t) {
                return { accessToken: t };
              }) : null;
            }));
          }, Qs.vc = function (t) {
            return this.Fb(t).then(function (t) {
              return t.user;
            });
          }, Qs.Fb = function (t) {
            var e = this;return this.i.then(function () {
              return ys(e, Pr(e.c, Hh, { token: t }));
            }).then(function (t) {
              var n = t.user;return xa(n, "isAnonymous", !1), e.ka(n), t;
            });
          }, Qs.Gb = function (t, e) {
            var n = this;return this.i.then(function () {
              return ys(n, Pr(n.c, Bh, { email: t, password: e }));
            });
          }, Qs.wc = function (t, e) {
            return this.Gb(t, e).then(function (t) {
              return t.user;
            });
          }, Qs.Qb = function (t, e) {
            return this.rb(t, e).then(function (t) {
              return t.user;
            });
          }, Qs.rb = function (t, e) {
            var n = this;return this.i.then(function () {
              return ys(n, Pr(n.c, Sh, { email: t, password: e }));
            });
          }, Qs.uc = function (t) {
            return this.gb(t).then(function (t) {
              return t.user;
            });
          }, Qs.gb = function (t) {
            var e = this;return this.i.then(function () {
              return ys(e, t.xa(e.c));
            });
          }, Qs.hb = function () {
            return this.Hb().then(function (t) {
              return t.user;
            });
          }, Qs.Hb = function () {
            var t = this;return this.i.then(function () {
              var e = Ts(t);return e && e.isAnonymous ? wn({ user: e, credential: null, additionalUserInfo: wn({ providerId: null, isNewUser: !1 }), operationType: "signIn" }) : ys(t, t.c.hb()).then(function (e) {
                var n = e.user;return xa(n, "isAnonymous", !0), t.ka(n), e;
              });
            });
          }, Qs.getUid = function () {
            return Ts(this) && Ts(this).uid || null;
          }, Qs.Ob = function (t) {
            this.addAuthTokenListener(t), 0 < ++this.s && Ts(this) && ka(Ts(this));
          }, Qs.sc = function (t) {
            var e = this;cu(this.m, function (n) {
              n == t && e.s--;
            }), 0 > this.s && (this.s = 0), 0 == this.s && Ts(this) && Aa(Ts(this)), this.removeAuthTokenListener(t);
          }, Qs.addAuthTokenListener = function (t) {
            var e = this;this.m.push(t), Ns(this, this.i.then(function () {
              e.l || S(e.m, t) && t(ks(e));
            }));
          }, Qs.removeAuthTokenListener = function (t) {
            P(this.m, function (e) {
              return e == t;
            });
          }, Qs.delete = function () {
            this.l = !0;for (var t = 0; t < this.N.length; t++) {
              this.N[t].cancel("app-deleted");
            }return this.N = [], this.h && (t = this.h, t.b.removeListener(is("local"), t.a, this.ha)), this.a && this.a.unsubscribe(this), tu.Promise.resolve();
          }, Qs.Tb = function (t) {
            return Ns(this, br(this.c, t));
          }, Qs.Hc = function (t) {
            return this.Ia(t).then(function (t) {
              return t.data.email;
            });
          }, Qs.Ua = function (t, e) {
            return Ns(this, this.c.Ua(t, e).then(function () {}));
          }, Qs.Ia = function (t) {
            return Ns(this, this.c.Ia(t).then(function (t) {
              return new kn(t);
            }));
          }, Qs.Sa = function (t) {
            return Ns(this, this.c.Sa(t).then(function () {}));
          }, Qs.eb = function (t, e) {
            var n = this;return Ns(this, J().then(function () {
              return void 0 === e || M(e) ? {} : Sn(new Nn(e));
            }).then(function (e) {
              return n.c.eb(t, e);
            }).then(function () {}));
          }, Qs.xc = function (t, e) {
            return Ns(this, ra(this, t, e, l(this.gb, this)));
          };var kf = "callback",
              Af = "expired-callback",
              Ef = "sitekey",
              Nf = "size";Qs = Ss.prototype, Qs.ya = function () {
            var t = this;return this.c ? this.c : this.c = Cs(this, J().then(function () {
              if (nn()) return He();throw new An("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
            }).then(function () {
              return Ds(Ls(), t.s());
            }).then(function () {
              return Pr(t.u, xh, {});
            }).then(function (e) {
              t.a[Ef] = e.recaptchaSiteKey;
            }).o(function (e) {
              throw t.c = null, e;
            }));
          }, Qs.render = function () {
            Rs(this);var t = this;return Cs(this, this.ya().then(function () {
              if (null === t.b) {
                var e = t.l;if (!t.h) {
                  var n = $i(e);e = Qi("DIV"), n.appendChild(e);
                }t.b = grecaptcha.render(e, t.a);
              }return t.b;
            }));
          }, Qs.verify = function () {
            Rs(this);var t = this;return Cs(this, this.render().then(function (e) {
              return new W(function (n) {
                var i = grecaptcha.getResponse(e);if (i) n(i);else {
                  var r = function r(e) {
                    e && (Ps(t, r), n(e));
                  };t.i.push(r), t.h && grecaptcha.execute(t.b);
                }
              });
            }));
          }, Qs.reset = function () {
            Rs(this), null !== this.b && grecaptcha.reset(this.b);
          }, Qs.clear = function () {
            Rs(this), this.m = !0, Ls().b--;for (var t = 0; t < this.g.length; t++) {
              this.g[t].cancel("RecaptchaVerifier instance has been destroyed.");
            }if (!this.h) {
              t = $i(this.l);for (var e; e = t.firstChild;) {
                t.removeChild(e);
              }
            }
          };var Sf = we("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
              Of = null;p(xs, Ss);var Pf = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");Js(cs.prototype, { Sa: { name: "applyActionCode", j: [js("code")] }, Ia: { name: "checkActionCode", j: [js("code")] }, Ua: { name: "confirmPasswordReset", j: [js("code"), js("newPassword")] }, Qb: { name: "createUserWithEmailAndPassword", j: [js("email"), js("password")] }, rb: { name: "createUserAndRetrieveDataWithEmailAndPassword", j: [js("email"), js("password")] }, Tb: { name: "fetchProvidersForEmail", j: [js("email")] }, aa: { name: "getRedirectResult", j: [] }, jc: { name: "onAuthStateChanged", j: [zs(Vs(), Fs(), "nextOrObserver"), Fs("opt_error", !0), Fs("opt_completed", !0)] }, kc: { name: "onIdTokenChanged", j: [zs(Vs(), Fs(), "nextOrObserver"), Fs("opt_error", !0), Fs("opt_completed", !0)] }, eb: { name: "sendPasswordResetEmail", j: [js("email"), zs(Vs("opt_actionCodeSettings", !0), Ks(null, !0), "opt_actionCodeSettings", !0)] }, fb: { name: "setPersistence", j: [js("persistence")] }, gb: { name: "signInAndRetrieveDataWithCredential", j: [Bs()] }, hb: { name: "signInAnonymously", j: [] }, Hb: { name: "signInAnonymouslyAndRetrieveData", j: [] }, uc: { name: "signInWithCredential", j: [Bs()] }, vc: { name: "signInWithCustomToken", j: [js("token")] }, Fb: { name: "signInAndRetrieveDataWithCustomToken", j: [js("token")] }, wc: { name: "signInWithEmailAndPassword", j: [js("email"), js("password")] }, Gb: { name: "signInAndRetrieveDataWithEmailAndPassword", j: [js("email"), js("password")] }, xc: { name: "signInWithPhoneNumber", j: [js("phoneNumber"), Gs()] }, yc: { name: "signInWithPopup", j: [Ws()] }, zc: { name: "signInWithRedirect", j: [Ws()] }, ib: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [js(null, !0)] }, Gc: { name: "useDeviceLanguage", j: [] }, Hc: { name: "verifyPasswordResetCode", j: [js("code")] } }), function (t, e) {
            for (var n in e) {
              var i = e[n].name;if (i !== n) {
                var r = e[n].Pb;Object.defineProperty(t, i, { get: function get() {
                    return this[n];
                  }, set: function set(t) {
                    Us(i, [r], [t], !0), this[n] = t;
                  }, enumerable: !0 });
              }
            }
          }(cs.prototype, { lc: { name: "languageCode", Pb: zs(js(), Ks(), "languageCode") } }), cs.Persistence = sf, cs.Persistence.LOCAL = "local", cs.Persistence.SESSION = "session", cs.Persistence.NONE = "none", Js(ba.prototype, { delete: { name: "delete", j: [] }, F: { name: "getIdToken", j: [Ms()] }, getToken: { name: "getToken", j: [Ms()] }, Ya: { name: "linkAndRetrieveDataWithCredential", j: [Bs()] }, ec: { name: "linkWithCredential", j: [Bs()] }, fc: { name: "linkWithPhoneNumber", j: [js("phoneNumber"), Gs()] }, gc: { name: "linkWithPopup", j: [Ws()] }, hc: { name: "linkWithRedirect", j: [Ws()] }, $a: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Bs()] }, oc: { name: "reauthenticateWithCredential", j: [Bs()] }, pc: { name: "reauthenticateWithPhoneNumber", j: [js("phoneNumber"), Gs()] }, qc: { name: "reauthenticateWithPopup", j: [Ws()] }, rc: { name: "reauthenticateWithRedirect", j: [Ws()] }, reload: { name: "reload", j: [] }, cb: { name: "sendEmailVerification", j: [zs(Vs("opt_actionCodeSettings", !0), Ks(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [js(null, !0)] }, Ec: { name: "unlink", j: [js("provider")] }, lb: { name: "updateEmail", j: [js("email")] }, mb: { name: "updatePassword", j: [js("password")] }, Fc: { name: "updatePhoneNumber", j: [Bs("phone")] }, nb: { name: "updateProfile", j: [Vs("profile")] } }), Js(W.prototype, { o: { name: "catch" }, then: { name: "then" } }), Js(ia.prototype, { confirm: { name: "confirm", j: [js("verificationCode")] } }), Ys(ni, "credential", function (t, e) {
            return new ei(t, e);
          }, [js("email"), js("password")]), Js(Gn.prototype, { ta: { name: "addScope", j: [js("scope")] }, Ca: { name: "setCustomParameters", j: [Vs("customOAuthParameters")] } }), Ys(Gn, "credential", zn, [zs(js(), Vs(), "token")]), Js(Jn.prototype, { ta: { name: "addScope", j: [js("scope")] }, Ca: { name: "setCustomParameters", j: [Vs("customOAuthParameters")] } }), Ys(Jn, "credential", Yn, [zs(js(), Vs(), "token")]), Js($n.prototype, { ta: { name: "addScope", j: [js("scope")] }, Ca: { name: "setCustomParameters", j: [Vs("customOAuthParameters")] } }), Ys($n, "credential", Zn, [zs(js(), zs(Vs(), Ks()), "idToken"), zs(js(), Ks(), "accessToken", !0)]), Js(Qn.prototype, { Ca: { name: "setCustomParameters", j: [Vs("customOAuthParameters")] } }), Ys(Qn, "credential", ti, [zs(js(), Vs(), "token"), js("secret", !0)]), Js(Wn.prototype, { ta: { name: "addScope", j: [js("scope")] }, credential: { name: "credential", j: [zs(js(), Ks(), "idToken", !0), zs(js(), Ks(), "accessToken", !0)] }, Ca: { name: "setCustomParameters", j: [Vs("customOAuthParameters")] } }), Ys(oi, "credential", ai, [js("verificationId"), js("verificationCode")]), Js(oi.prototype, { Qa: { name: "verifyPhoneNumber", j: [js("phoneNumber"), Gs()] } }), Js(An.prototype, { toJSON: { name: "toJSON", j: [js(null, !0)] } }), Js(di.prototype, { toJSON: { name: "toJSON", j: [js(null, !0)] } }), Js(li.prototype, { toJSON: { name: "toJSON", j: [js(null, !0)] } }), Js(xs.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }), function () {
            if (void 0 === tu || !tu.INTERNAL || !tu.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");var t = { Auth: cs, Error: An };Ys(t, "EmailAuthProvider", ni, []), Ys(t, "FacebookAuthProvider", Gn, []), Ys(t, "GithubAuthProvider", Jn, []), Ys(t, "GoogleAuthProvider", $n, []), Ys(t, "TwitterAuthProvider", Qn, []), Ys(t, "OAuthProvider", Wn, [js("providerId")]), Ys(t, "PhoneAuthProvider", oi, [Xs()]), Ys(t, "RecaptchaVerifier", xs, [zs(js(), qs(), "recaptchaContainer"), Vs("recaptchaParameters", !0), Hs()]), tu.INTERNAL.registerService("auth", function (t, e) {
              return t = new cs(t), e({ INTERNAL: { getUid: l(t.getUid, t), getToken: l(t.Xb, t), addAuthTokenListener: l(t.Ob, t), removeAuthTokenListener: l(t.sc, t) } }), t;
            }, t, function (t, e) {
              if ("create" === t) try {
                e.auth();
              } catch (t) {}
            }), tu.INTERNAL.extendNamespace({ User: ba });
          }();
        }).call(void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }).call(e, n(11));
    } }, [78]);
} catch (t) {
  throw Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.");
}

/*!
 * @license Firebase v4.11.0
 * Build: rev-6aed77a
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([0], [, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(0),
        o = n(0),
        a = n(0),
        s = n(0),
        u = n(0),
        l = n(14),
        h = n(0),
        c = n(22),
        p = new c.Logger("@firebase/database");t.LUIDGenerator = function () {
      var e = 1;return function () {
        return e++;
      };
    }(), t.sha1 = function (e) {
      var t = s.stringToByteArray(e),
          n = new a.Sha1();n.update(t);var r = n.digest();return o.base64.encodeByteArray(r);
    };var d = function d() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }for (var n = "", r = 0; r < e.length; r++) {
        Array.isArray(e[r]) || e[r] && "object" == _typeof(e[r]) && "number" == typeof e[r].length ? n += d.apply(null, e[r]) : "object" == _typeof(e[r]) ? n += u.stringify(e[r]) : n += e[r], n += " ";
      }return n;
    };t.logger = null;var f = !0;t.enableLogging = function (e, n) {
      r.assert(!n || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (t.logger = p.log.bind(p), n && l.SessionStorage.set("logging_enabled", !0)) : "function" == typeof e ? t.logger = e : (t.logger = null, l.SessionStorage.remove("logging_enabled"));
    }, t.log = function () {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e[n] = arguments[n];
      }if (!0 === f && (f = !1, null === t.logger && !0 === l.SessionStorage.get("logging_enabled") && t.enableLogging(!0)), t.logger) {
        var r = d.apply(null, e);t.logger(r);
      }
    }, t.logWrapper = function (e) {
      return function () {
        for (var n = [], r = 0; r < arguments.length; r++) {
          n[r] = arguments[r];
        }t.log.apply(void 0, [e].concat(n));
      };
    }, t.error = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }var n = "FIREBASE INTERNAL ERROR: " + d.apply(void 0, e);p.error(n);
    }, t.fatal = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }var n = "FIREBASE FATAL ERROR: " + d.apply(void 0, e);throw p.error(n), Error(n);
    }, t.warn = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }var n = "FIREBASE WARNING: " + d.apply(void 0, e);p.warn(n);
    }, t.warnIfPageIsSecure = function () {
      "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && t.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
    }, t.warnAboutUnsupportedMethod = function (e) {
      t.warn(e + " is unsupported and will likely change soon.  Please do not use.");
    }, t.isInvalidJSONNumber = function (e) {
      return "number" == typeof e && (e != e || e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY);
    }, t.executeWhenDOMReady = function (e) {
      if (h.isNodeSdk() || "complete" === document.readyState) e();else {
        var t = !1,
            n = function n() {
          if (!document.body) return void setTimeout(n, Math.floor(10));t || (t = !0, e());
        };document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
          "complete" === document.readyState && n();
        }), window.attachEvent("onload", n));
      }
    }, t.MIN_NAME = "[MIN_NAME]", t.MAX_NAME = "[MAX_NAME]", t.nameCompare = function (e, n) {
      if (e === n) return 0;if (e === t.MIN_NAME || n === t.MAX_NAME) return -1;if (n === t.MIN_NAME || e === t.MAX_NAME) return 1;var r = t.tryParseInt(e),
          i = t.tryParseInt(n);return null !== r ? null !== i ? r - i == 0 ? e.length - n.length : r - i : -1 : null !== i ? 1 : e < n ? -1 : 1;
    }, t.stringCompare = function (e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }, t.requireKey = function (e, t) {
      if (t && e in t) return t[e];throw Error("Missing required key (" + e + ") in object: " + u.stringify(t));
    }, t.ObjectToUniqueKey = function (e) {
      if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || null === e) return u.stringify(e);var n = [];for (var r in e) {
        n.push(r);
      }n.sort();for (var i = "{", o = 0; o < n.length; o++) {
        0 !== o && (i += ","), i += u.stringify(n[o]), i += ":", i += t.ObjectToUniqueKey(e[n[o]]);
      }return i += "}";
    }, t.splitStringBySize = function (e, t) {
      var n = e.length;if (n <= t) return [e];for (var r = [], i = 0; i < n; i += t) {
        i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
      }return r;
    }, t.each = function (e, t) {
      if (Array.isArray(e)) for (var n = 0; n < e.length; ++n) {
        t(n, e[n]);
      } else i.forEach(e, function (e, n) {
        return t(n, e);
      });
    }, t.bindCallback = function (e, t) {
      return t ? e.bind(t) : e;
    }, t.doubleToIEEE754String = function (e) {
      r.assert(!t.isInvalidJSONNumber(e), "Invalid JSON number");var n, i, o, a, s, u, l;for (0 === e ? (i = 0, o = 0, n = 1 / e == -1 / 0 ? 1 : 0) : (n = e < 0, e = Math.abs(e), e >= Math.pow(2, -1022) ? (a = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023), i = a + 1023, o = Math.round(e * Math.pow(2, 52 - a) - Math.pow(2, 52))) : (i = 0, o = Math.round(e / Math.pow(2, -1074)))), u = [], s = 52; s; s -= 1) {
        u.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
      }for (s = 11; s; s -= 1) {
        u.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
      }u.push(n ? 1 : 0), u.reverse(), l = u.join("");var h = "";for (s = 0; s < 64; s += 8) {
        var c = parseInt(l.substr(s, 8), 2).toString(16);1 === c.length && (c = "0" + c), h += c;
      }return h.toLowerCase();
    }, t.isChromeExtensionContentScript = function () {
      return !("object" != (typeof window === "undefined" ? "undefined" : _typeof(window)) || !window.chrome || !window.chrome.extension || /^chrome/.test(window.location.href));
    }, t.isWindowsStoreApp = function () {
      return "object" == (typeof Windows === "undefined" ? "undefined" : _typeof(Windows)) && "object" == _typeof(Windows.UI);
    }, t.errorForServerCode = function (e, t) {
      var n = "Unknown Error";"too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? n = "Client doesn't have permission to access the desired data." : "unavailable" == e && (n = "The service is unavailable");var r = Error(e + " at " + t.path + ": " + n);return r.code = e.toUpperCase(), r;
    }, t.e = RegExp("^-?\\d{1,10}$"), t.tryParseInt = function (e) {
      if (t.e.test(e)) {
        var n = +e;if (n >= -2147483648 && n <= 2147483647) return n;
      }return null;
    }, t.exceptionGuard = function (e) {
      try {
        e();
      } catch (e) {
        setTimeout(function () {
          var n = e.stack || "";throw t.warn("Exception was thrown by user callback.", n), e;
        }, Math.floor(0));
      }
    }, t.callUserCallback = function (e) {
      for (var n = [], r = 1; r < arguments.length; r++) {
        n[r - 1] = arguments[r];
      }"function" == typeof e && t.exceptionGuard(function () {
        e.apply(void 0, n);
      });
    }, t.beingCrawled = function () {
      return ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
    }, t.exportPropGetter = function (e, t, n) {
      Object.defineProperty(e, t, { get: n });
    }, t.setTimeoutNonBlocking = function (e, t) {
      var n = setTimeout(e, t);return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.unref && n.unref(), n;
    };
  },, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = n(0),
        o = function () {
      function e(e, t) {
        if (void 0 === t) {
          this.n = e.split("/");for (var n = 0, r = 0; r < this.n.length; r++) {
            this.n[r].length > 0 && (this.n[n] = this.n[r], n++);
          }this.n.length = n, this.i = 0;
        } else this.n = e, this.i = t;
      }return Object.defineProperty(e, "Empty", { get: function get() {
          return new e("");
        }, enumerable: !0, configurable: !0 }), e.prototype.getFront = function () {
        return this.i >= this.n.length ? null : this.n[this.i];
      }, e.prototype.getLength = function () {
        return this.n.length - this.i;
      }, e.prototype.popFront = function () {
        var t = this.i;return t < this.n.length && t++, new e(this.n, t);
      }, e.prototype.getBack = function () {
        return this.i < this.n.length ? this.n[this.n.length - 1] : null;
      }, e.prototype.toString = function () {
        for (var e = "", t = this.i; t < this.n.length; t++) {
          "" !== this.n[t] && (e += "/" + this.n[t]);
        }return e || "/";
      }, e.prototype.toUrlEncodedString = function () {
        for (var e = "", t = this.i; t < this.n.length; t++) {
          "" !== this.n[t] && (e += "/" + encodeURIComponent(this.n[t] + ""));
        }return e || "/";
      }, e.prototype.slice = function (e) {
        return void 0 === e && (e = 0), this.n.slice(this.i + e);
      }, e.prototype.parent = function () {
        if (this.i >= this.n.length) return null;for (var t = [], n = this.i; n < this.n.length - 1; n++) {
          t.push(this.n[n]);
        }return new e(t, 0);
      }, e.prototype.child = function (t) {
        for (var n = [], r = this.i; r < this.n.length; r++) {
          n.push(this.n[r]);
        }if (t instanceof e) for (var r = t.i; r < t.n.length; r++) {
          n.push(t.n[r]);
        } else for (var i = t.split("/"), r = 0; r < i.length; r++) {
          i[r].length > 0 && n.push(i[r]);
        }return new e(n, 0);
      }, e.prototype.isEmpty = function () {
        return this.i >= this.n.length;
      }, e.relativePath = function (t, n) {
        var r = t.getFront(),
            i = n.getFront();if (null === r) return n;if (r === i) return e.relativePath(t.popFront(), n.popFront());throw Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + t + ")");
      }, e.comparePaths = function (e, t) {
        for (var n = e.slice(), i = t.slice(), o = 0; o < n.length && o < i.length; o++) {
          var a = r.nameCompare(n[o], i[o]);if (0 !== a) return a;
        }return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
      }, e.prototype.equals = function (e) {
        if (this.getLength() !== e.getLength()) return !1;for (var t = this.i, n = e.i; t <= this.n.length; t++, n++) {
          if (this.n[t] !== e.n[n]) return !1;
        }return !0;
      }, e.prototype.contains = function (e) {
        var t = this.i,
            n = e.i;if (this.getLength() > e.getLength()) return !1;for (; t < this.n.length;) {
          if (this.n[t] !== e.n[n]) return !1;++t, ++n;
        }return !0;
      }, e;
    }();t.Path = o;var a = function () {
      function e(e, t) {
        this.o = t, this.u = e.slice(), this.l = Math.max(1, this.u.length);for (var n = 0; n < this.u.length; n++) {
          this.l += i.stringLength(this.u[n]);
        }this.f();
      }return Object.defineProperty(e, "MAX_PATH_DEPTH", { get: function get() {
          return 32;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", { get: function get() {
          return 768;
        }, enumerable: !0, configurable: !0 }), e.prototype.push = function (e) {
        this.u.length > 0 && (this.l += 1), this.u.push(e), this.l += i.stringLength(e), this.f();
      }, e.prototype.pop = function () {
        var e = this.u.pop();this.l -= i.stringLength(e), this.u.length > 0 && (this.l -= 1);
      }, e.prototype.f = function () {
        if (this.l > e.MAX_PATH_LENGTH_BYTES) throw Error(this.o + "has a key path longer than " + e.MAX_PATH_LENGTH_BYTES + " bytes (" + this.l + ").");if (this.u.length > e.MAX_PATH_DEPTH) throw Error(this.o + "path specified exceeds the maximum depth that can be written (" + e.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString());
      }, e.prototype.toErrorString = function () {
        return 0 == this.u.length ? "" : "in property '" + this.u.join(".") + "'";
      }, e;
    }();t.ValidationPath = a;
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      o = e;
    }function i(e) {
      a = e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var o,
        a,
        s = n(2),
        u = n(16),
        l = n(1),
        h = n(6),
        c = n(17);t.setNodeFromJSON = r, t.setMaxNode = i;var p = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return s.__extends(t, e), t.prototype.compare = function (e, t) {
        var n = e.node.getPriority(),
            r = t.node.getPriority(),
            i = n.compareTo(r);return 0 === i ? l.nameCompare(e.name, t.name) : i;
      }, t.prototype.isDefinedOn = function (e) {
        return !e.getPriority().isEmpty();
      }, t.prototype.indexedValueChanged = function (e, t) {
        return !e.getPriority().equals(t.getPriority());
      }, t.prototype.minPost = function () {
        return h.NamedNode.MIN;
      }, t.prototype.maxPost = function () {
        return new h.NamedNode(l.MAX_NAME, new c.LeafNode("[PRIORITY-POST]", a));
      }, t.prototype.makePost = function (e, t) {
        var n = o(e);return new h.NamedNode(t, new c.LeafNode("[PRIORITY-POST]", n));
      }, t.prototype.toString = function () {
        return ".priority";
      }, t;
    }(u.Index);t.PriorityIndex = p, t.PRIORITY_INDEX = new p();
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(2),
        o = n(0),
        a = n(1),
        s = n(18),
        u = n(6),
        l = n(39),
        h = n(4),
        c = n(12),
        p = n(41),
        d = n(17),
        f = n(43),
        _ = function () {
      function e(e, t, n) {
        this._ = e, this.y = t, this.g = n, this.m = null, this.y && l.validatePriorityNode(this.y), this._.isEmpty() && o.assert(!this.y || this.y.isEmpty(), "An empty node cannot have a priority");
      }return Object.defineProperty(e, "EMPTY_NODE", { get: function get() {
          return r || (r = new e(new s.SortedMap(f.NAME_COMPARATOR), null, p.IndexMap.Default));
        }, enumerable: !0, configurable: !0 }), e.prototype.isLeafNode = function () {
        return !1;
      }, e.prototype.getPriority = function () {
        return this.y || r;
      }, e.prototype.updatePriority = function (t) {
        return this._.isEmpty() ? this : new e(this._, t, this.g);
      }, e.prototype.getImmediateChild = function (e) {
        if (".priority" === e) return this.getPriority();var t = this._.get(e);return null === t ? r : t;
      }, e.prototype.getChild = function (e) {
        var t = e.getFront();return null === t ? this : this.getImmediateChild(t).getChild(e.popFront());
      }, e.prototype.hasChild = function (e) {
        return null !== this._.get(e);
      }, e.prototype.updateImmediateChild = function (t, n) {
        if (o.assert(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n);var i = new u.NamedNode(t, n),
            a = void 0,
            s = void 0,
            l = void 0;return n.isEmpty() ? (a = this._.remove(t), s = this.g.removeFromIndexes(i, this._)) : (a = this._.insert(t, n), s = this.g.addToIndexes(i, this._)), l = a.isEmpty() ? r : this.y, new e(a, l, s);
      }, e.prototype.updateChild = function (e, t) {
        var n = e.getFront();if (null === n) return t;o.assert(".priority" !== e.getFront() || 1 === e.getLength(), ".priority must be the last token in a path");var r = this.getImmediateChild(n).updateChild(e.popFront(), t);return this.updateImmediateChild(n, r);
      }, e.prototype.isEmpty = function () {
        return this._.isEmpty();
      }, e.prototype.numChildren = function () {
        return this._.count();
      }, e.prototype.val = function (t) {
        if (this.isEmpty()) return null;var n = {},
            r = 0,
            i = 0,
            o = !0;if (this.forEachChild(h.PRIORITY_INDEX, function (a, s) {
          n[a] = s.val(t), r++, o && e.e.test(a) ? i = Math.max(i, +a) : o = !1;
        }), !t && o && i < 2 * r) {
          var a = [];for (var s in n) {
            a[s] = n[s];
          }return a;
        }return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n;
      }, e.prototype.hash = function () {
        if (null === this.m) {
          var e = "";this.getPriority().isEmpty() || (e += "priority:" + l.priorityHashText(this.getPriority().val()) + ":"), this.forEachChild(h.PRIORITY_INDEX, function (t, n) {
            var r = n.hash();"" !== r && (e += ":" + t + ":" + r);
          }), this.m = "" === e ? "" : a.sha1(e);
        }return this.m;
      }, e.prototype.getPredecessorChildName = function (e, t, n) {
        var r = this.C(n);if (r) {
          var i = r.getPredecessorKey(new u.NamedNode(e, t));return i ? i.name : null;
        }return this._.getPredecessorKey(e);
      }, e.prototype.getFirstChildName = function (e) {
        var t = this.C(e);if (t) {
          var n = t.minKey();return n && n.name;
        }return this._.minKey();
      }, e.prototype.getFirstChild = function (e) {
        var t = this.getFirstChildName(e);return t ? new u.NamedNode(t, this._.get(t)) : null;
      }, e.prototype.getLastChildName = function (e) {
        var t = this.C(e);if (t) {
          var n = t.maxKey();return n && n.name;
        }return this._.maxKey();
      }, e.prototype.getLastChild = function (e) {
        var t = this.getLastChildName(e);return t ? new u.NamedNode(t, this._.get(t)) : null;
      }, e.prototype.forEachChild = function (e, t) {
        var n = this.C(e);return n ? n.inorderTraversal(function (e) {
          return t(e.name, e.node);
        }) : this._.inorderTraversal(t);
      }, e.prototype.getIterator = function (e) {
        return this.getIteratorFrom(e.minPost(), e);
      }, e.prototype.getIteratorFrom = function (e, t) {
        var n = this.C(t);if (n) return n.getIteratorFrom(e, function (e) {
          return e;
        });for (var r = this._.getIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) {
          r.getNext(), i = r.peek();
        }return r;
      }, e.prototype.getReverseIterator = function (e) {
        return this.getReverseIteratorFrom(e.maxPost(), e);
      }, e.prototype.getReverseIteratorFrom = function (e, t) {
        var n = this.C(t);if (n) return n.getReverseIteratorFrom(e, function (e) {
          return e;
        });for (var r = this._.getReverseIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) {
          r.getNext(), i = r.peek();
        }return r;
      }, e.prototype.compareTo = function (e) {
        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === t.MAX_NODE ? -1 : 0;
      }, e.prototype.withIndex = function (t) {
        if (t === c.KEY_INDEX || this.g.hasIndex(t)) return this;var n = this.g.addIndex(t, this._);return new e(this._, this.y, n);
      }, e.prototype.isIndexed = function (e) {
        return e === c.KEY_INDEX || this.g.hasIndex(e);
      }, e.prototype.equals = function (e) {
        if (e === this) return !0;if (e.isLeafNode()) return !1;var t = e;if (this.getPriority().equals(t.getPriority())) {
          if (this._.count() === t._.count()) {
            for (var n = this.getIterator(h.PRIORITY_INDEX), r = t.getIterator(h.PRIORITY_INDEX), i = n.getNext(), o = r.getNext(); i && o;) {
              if (i.name !== o.name || !i.node.equals(o.node)) return !1;i = n.getNext(), o = r.getNext();
            }return null === i && null === o;
          }return !1;
        }return !1;
      }, e.prototype.C = function (e) {
        return e === c.KEY_INDEX ? null : this.g.get("" + e);
      }, e.e = /^(0|[1-9]\d*)$/, e;
    }();t.ChildrenNode = _;var y = function (e) {
      function t() {
        return e.call(this, new s.SortedMap(f.NAME_COMPARATOR), _.EMPTY_NODE, p.IndexMap.Default) || this;
      }return i.__extends(t, e), t.prototype.compareTo = function (e) {
        return e === this ? 0 : 1;
      }, t.prototype.equals = function (e) {
        return e === this;
      }, t.prototype.getPriority = function () {
        return this;
      }, t.prototype.getImmediateChild = function (e) {
        return _.EMPTY_NODE;
      }, t.prototype.isEmpty = function () {
        return !1;
      }, t;
    }(_);t.MaxNode = y, t.MAX_NODE = new y(), Object.defineProperties(u.NamedNode, { MIN: { value: new u.NamedNode(a.MIN_NAME, _.EMPTY_NODE) }, MAX: { value: new u.NamedNode(a.MAX_NAME, t.MAX_NODE) } }), c.KeyIndex.__EMPTY_NODE = _.EMPTY_NODE, d.LeafNode.__childrenNodeConstructor = _, l.setMaxNode(t.MAX_NODE), h.setMaxNode(t.MAX_NODE);
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        this.name = e, this.node = t;
      }return e.Wrap = function (t, n) {
        return new e(t, n);
      }, e;
    }();t.NamedNode = r;
  },, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(3),
        i = n(0),
        o = n(1),
        a = n(0),
        s = n(0);t.N = /[\[\].#$\/\u0000-\u001F\u007F]/, t.P = /[\[\].#$\u0000-\u001F\u007F]/, t.S = 10485760, t.isValidKey = function (e) {
      return "string" == typeof e && 0 !== e.length && !t.N.test(e);
    }, t.isValidPathString = function (e) {
      return "string" == typeof e && 0 !== e.length && !t.P.test(e);
    }, t.isValidRootPathString = function (e) {
      return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), t.isValidPathString(e);
    }, t.isValidPriority = function (e) {
      return null === e || "string" == typeof e || "number" == typeof e && !o.isInvalidJSONNumber(e) || e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && i.contains(e, ".sv");
    }, t.validateFirebaseDataArg = function (e, n, r, i, o) {
      o && void 0 === r || t.validateFirebaseData(a.errorPrefix(e, n, o), r, i);
    }, t.validateFirebaseData = function (e, n, a) {
      var u = a instanceof r.Path ? new r.ValidationPath(a, e) : a;if (void 0 === n) throw Error(e + "contains undefined " + u.toErrorString());if ("function" == typeof n) throw Error(e + "contains a function " + u.toErrorString() + " with contents = " + n);if (o.isInvalidJSONNumber(n)) throw Error(e + "contains " + n + " " + u.toErrorString());if ("string" == typeof n && n.length > t.S / 3 && s.stringLength(n) > t.S) throw Error(e + "contains a string greater than " + t.S + " utf8 bytes " + u.toErrorString() + " ('" + n.substring(0, 50) + "...')");if (n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) {
        var l = !1,
            h = !1;if (i.forEach(n, function (n, r) {
          if (".value" === n) l = !0;else if (".priority" !== n && ".sv" !== n && (h = !0, !t.isValidKey(n))) throw Error(e + " contains an invalid key (" + n + ") " + u.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');u.push(n), t.validateFirebaseData(e, r, u), u.pop();
        }), l && h) throw Error(e + ' contains ".value" child ' + u.toErrorString() + " in addition to actual children.");
      }
    }, t.validateFirebaseMergePaths = function (e, n) {
      var i, o;for (i = 0; i < n.length; i++) {
        o = n[i];for (var a = o.slice(), s = 0; s < a.length; s++) {
          if (".priority" === a[s] && s === a.length - 1) ;else if (!t.isValidKey(a[s])) throw Error(e + "contains an invalid key (" + a[s] + ") in path " + o + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
      }n.sort(r.Path.comparePaths);var u = null;for (i = 0; i < n.length; i++) {
        if (o = n[i], null !== u && u.contains(o)) throw Error(e + "contains a path " + u + " that is ancestor of another path " + o);u = o;
      }
    }, t.validateFirebaseMergeDataArg = function (e, n, o, s, u) {
      if (!u || void 0 !== o) {
        var l = a.errorPrefix(e, n, u);if (!o || "object" != (typeof o === "undefined" ? "undefined" : _typeof(o)) || Array.isArray(o)) throw Error(l + " must be an object containing the children to replace.");var h = [];i.forEach(o, function (e, n) {
          var i = new r.Path(e);if (t.validateFirebaseData(l, n, s.child(i)), ".priority" === i.getBack() && !t.isValidPriority(n)) throw Error(l + "contains an invalid value for '" + i + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");h.push(i);
        }), t.validateFirebaseMergePaths(l, h);
      }
    }, t.validatePriority = function (e, n, r, i) {
      if (!i || void 0 !== r) {
        if (o.isInvalidJSONNumber(r)) throw Error(a.errorPrefix(e, n, i) + "is " + r + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");if (!t.isValidPriority(r)) throw Error(a.errorPrefix(e, n, i) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
      }
    }, t.validateEventType = function (e, t, n, r) {
      if (!r || void 0 !== n) switch (n) {case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":
          break;default:
          throw Error(a.errorPrefix(e, t, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');}
    }, t.validateKey = function (e, n, r, i) {
      if (!(i && void 0 === r || t.isValidKey(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid key = "' + r + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }, t.validatePathString = function (e, n, r, i) {
      if (!(i && void 0 === r || t.isValidPathString(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid path = "' + r + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }, t.validateRootPathString = function (e, n, r, i) {
      r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), t.validatePathString(e, n, r, i);
    }, t.validateWritablePath = function (e, t) {
      if (".info" === t.getFront()) throw Error(e + " failed = Can't modify data under /.info/");
    }, t.validateUrl = function (e, n, r) {
      var i = "" + r.path;if ("string" != typeof r.repoInfo.host || 0 === r.repoInfo.host.length || !t.isValidKey(r.repoInfo.namespace) && "localhost" !== r.repoInfo.host.split(":")[0] || 0 !== i.length && !t.isValidRootPathString(i)) throw Error(a.errorPrefix(e, n, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
    }, t.validateCredential = function (e, t, n, r) {
      if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid credential (a string).");
    }, t.validateBoolean = function (e, t, n, r) {
      if ((!r || void 0 !== n) && "boolean" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a boolean.");
    }, t.validateString = function (e, t, n, r) {
      if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid string.");
    }, t.validateObject = function (e, t, n, r) {
      if (!(r && void 0 === n || n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && null !== n)) throw Error(a.errorPrefix(e, t, r) + "must be a valid object.");
    }, t.validateObjectContainsKey = function (e, t, n, r, o, s) {
      if (!n || "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || !i.contains(n, r)) {
        if (o) return;throw Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '"');
      }if (s) {
        var u = i.safeGet(n, r);if ("number" === s && "number" != typeof u || "string" === s && "string" != typeof u || "boolean" === s && "boolean" != typeof u || "function" === s && "function" != typeof u || "object" === s && "object" != (typeof u === "undefined" ? "undefined" : _typeof(u)) && u) throw o ? Error(a.errorPrefix(e, t, o) + 'contains invalid value for key "' + r + '" (must be of type "' + s + '")') : Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '" with type "' + s + '"');
      }
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0);!function (e) {
      e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
    }(t.OperationType || (t.OperationType = {}));var i = function () {
      function e(e, t, n, i) {
        this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = i, r.assert(!i || t, "Tagged queries must be from server.");
      }return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function (t) {
        return new e(!1, !0, t, !0);
      }, e;
    }();t.OperationSource = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t, n, r, i) {
        this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i;
      }return e.valueChange = function (t) {
        return new e(e.VALUE, t);
      }, e.childAddedChange = function (t, n) {
        return new e(e.CHILD_ADDED, n, t);
      }, e.childRemovedChange = function (t, n) {
        return new e(e.CHILD_REMOVED, n, t);
      }, e.childChangedChange = function (t, n, r) {
        return new e(e.CHILD_CHANGED, n, t, r);
      }, e.childMovedChange = function (t, n) {
        return new e(e.CHILD_MOVED, n, t);
      }, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED = "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED = "child_moved", e.VALUE = "value", e;
    }();t.Change = r;
  },, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(2),
        o = n(16),
        a = n(6),
        s = n(1),
        u = n(0),
        l = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return i.__extends(t, e), Object.defineProperty(t, "__EMPTY_NODE", { get: function get() {
          return r;
        }, set: function set(e) {
          r = e;
        }, enumerable: !0, configurable: !0 }), t.prototype.compare = function (e, t) {
        return s.nameCompare(e.name, t.name);
      }, t.prototype.isDefinedOn = function (e) {
        throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.");
      }, t.prototype.indexedValueChanged = function (e, t) {
        return !1;
      }, t.prototype.minPost = function () {
        return a.NamedNode.MIN;
      }, t.prototype.maxPost = function () {
        return new a.NamedNode(s.MAX_NAME, r);
      }, t.prototype.makePost = function (e, t) {
        return u.assert("string" == typeof e, "KeyIndex indexValue must always be a string."), new a.NamedNode(e, r);
      }, t.prototype.toString = function () {
        return ".key";
      }, t;
    }(o.Index);t.KeyIndex = l, t.KEY_INDEX = new l();
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (void 0 === t && (t = null), null === e) return i.ChildrenNode.EMPTY_NODE;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && ".priority" in e && (t = e[".priority"]), u.assert(null === t || "string" == typeof t || "number" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && ".sv" in t, "Invalid priority type found: " + (typeof t === "undefined" ? "undefined" : _typeof(t))), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || ".sv" in e) {
        var n = e;return new o.LeafNode(n, r(t));
      }if (e instanceof Array || !d) {
        var f = i.ChildrenNode.EMPTY_NODE,
            _ = e;return s.forEach(_, function (e, t) {
          if (s.contains(_, e) && "." !== e.substring(0, 1)) {
            var n = r(t);!n.isLeafNode() && n.isEmpty() || (f = f.updateImmediateChild(e, n));
          }
        }), f.updatePriority(r(t));
      }var y = [],
          v = !1,
          g = e;if (s.forEach(g, function (e, t) {
        if ("string" != typeof e || "." !== e.substring(0, 1)) {
          var n = r(g[e]);n.isEmpty() || (v = v || !n.getPriority().isEmpty(), y.push(new a.NamedNode(e, n)));
        }
      }), 0 == y.length) return i.ChildrenNode.EMPTY_NODE;var m = l.buildChildSet(y, h.NAME_ONLY_COMPARATOR, function (e) {
        return e.name;
      }, h.NAME_COMPARATOR);if (v) {
        var C = l.buildChildSet(y, p.PRIORITY_INDEX.getCompare());return new i.ChildrenNode(m, r(t), new c.IndexMap({ ".priority": C }, { ".priority": p.PRIORITY_INDEX }));
      }return new i.ChildrenNode(m, r(t), c.IndexMap.Default);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        o = n(17),
        a = n(6),
        s = n(0),
        u = n(0),
        l = n(42),
        h = n(43),
        c = n(41),
        p = n(4),
        d = !0;t.nodeFromJSON = r, p.setNodeFromJSON(r);
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(82),
        i = n(83),
        o = function o(e) {
      try {
        if ("undefined" != typeof window && void 0 !== window[e]) {
          var t = window[e];return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new r.DOMStorageWrapper(t);
        }
      } catch (e) {}return new i.MemoryStorage();
    };t.PersistentStorage = o("localStorage"), t.SessionStorage = o("sessionStorage");
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.PROTOCOL_VERSION = "5", t.VERSION_PARAM = "v", t.TRANSPORT_SESSION_PARAM = "s", t.REFERER_PARAM = "r", t.FORGE_REF = "f", t.FORGE_DOMAIN = "firebaseio.com", t.LAST_SESSION_PARAM = "ls", t.WEBSOCKET = "websocket", t.LONG_POLLING = "long_polling";
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(6),
        i = n(1),
        o = function () {
      function e() {}return e.prototype.getCompare = function () {
        return this.compare.bind(this);
      }, e.prototype.indexedValueChanged = function (e, t) {
        var n = new r.NamedNode(i.MIN_NAME, e),
            o = new r.NamedNode(i.MIN_NAME, t);return 0 !== this.compare(n, o);
      }, e.prototype.minPost = function () {
        return r.NamedNode.MIN;
      }, e;
    }();t.Index = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(0),
        o = n(1),
        a = n(39),
        s = function () {
      function e(t, n) {
        void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.T = t, this.y = n, this.m = null, i.assert(void 0 !== this.T && null !== this.T, "LeafNode shouldn't be created with null/undefined value."), a.validatePriorityNode(this.y);
      }return Object.defineProperty(e, "__childrenNodeConstructor", { get: function get() {
          return r;
        }, set: function set(e) {
          r = e;
        }, enumerable: !0, configurable: !0 }), e.prototype.isLeafNode = function () {
        return !0;
      }, e.prototype.getPriority = function () {
        return this.y;
      }, e.prototype.updatePriority = function (t) {
        return new e(this.T, t);
      }, e.prototype.getImmediateChild = function (t) {
        return ".priority" === t ? this.y : e.__childrenNodeConstructor.EMPTY_NODE;
      }, e.prototype.getChild = function (t) {
        return t.isEmpty() ? this : ".priority" === t.getFront() ? this.y : e.__childrenNodeConstructor.EMPTY_NODE;
      }, e.prototype.hasChild = function () {
        return !1;
      }, e.prototype.getPredecessorChildName = function (e, t) {
        return null;
      }, e.prototype.updateImmediateChild = function (t, n) {
        return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.y);
      }, e.prototype.updateChild = function (t, n) {
        var r = t.getFront();return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (i.assert(".priority" !== r || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n)));
      }, e.prototype.isEmpty = function () {
        return !1;
      }, e.prototype.numChildren = function () {
        return 0;
      }, e.prototype.forEachChild = function (e, t) {
        return !1;
      }, e.prototype.val = function (e) {
        return e && !this.getPriority().isEmpty() ? { ".value": this.getValue(), ".priority": this.getPriority().val() } : this.getValue();
      }, e.prototype.hash = function () {
        if (null === this.m) {
          var e = "";this.y.isEmpty() || (e += "priority:" + a.priorityHashText(this.y.val()) + ":");var t = _typeof(this.T);e += t + ":", e += "number" === t ? o.doubleToIEEE754String(this.T) : this.T, this.m = o.sha1(e);
        }return this.m;
      }, e.prototype.getValue = function () {
        return this.T;
      }, e.prototype.compareTo = function (t) {
        return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (i.assert(t.isLeafNode(), "Unknown node type"), this.I(t));
      }, e.prototype.I = function (t) {
        var n = _typeof(t.T),
            r = _typeof(this.T),
            o = e.VALUE_TYPE_ORDER.indexOf(n),
            a = e.VALUE_TYPE_ORDER.indexOf(r);return i.assert(o >= 0, "Unknown leaf type: " + n), i.assert(a >= 0, "Unknown leaf type: " + r), o === a ? "object" === r ? 0 : this.T < t.T ? -1 : this.T === t.T ? 0 : 1 : a - o;
      }, e.prototype.withIndex = function () {
        return this;
      }, e.prototype.isIndexed = function () {
        return !0;
      }, e.prototype.equals = function (e) {
        if (e === this) return !0;if (e.isLeafNode()) {
          var t = e;return this.T === t.T && this.y.equals(t.y);
        }return !1;
      }, e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], e;
    }();t.LeafNode = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t, n, r, i) {
        void 0 === i && (i = null), this.R = r, this.w = i, this.O = [];for (var o = 1; !e.isEmpty();) {
          if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.R ? e.left : e.right;else {
            if (0 === o) {
              this.O.push(e);break;
            }this.O.push(e), e = this.R ? e.right : e.left;
          }
        }
      }return e.prototype.getNext = function () {
        if (0 === this.O.length) return null;var e,
            t = this.O.pop();if (e = this.w ? this.w(t.key, t.value) : { key: t.key, value: t.value }, this.R) for (t = t.left; !t.isEmpty();) {
          this.O.push(t), t = t.right;
        } else for (t = t.right; !t.isEmpty();) {
          this.O.push(t), t = t.left;
        }return e;
      }, e.prototype.hasNext = function () {
        return this.O.length > 0;
      }, e.prototype.peek = function () {
        if (0 === this.O.length) return null;var e = this.O[this.O.length - 1];return this.w ? this.w(e.key, e.value) : { key: e.key, value: e.value };
      }, e;
    }();t.SortedMapIterator = r;var i = function () {
      function e(t, n, r, i, o) {
        this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : a.EMPTY_NODE, this.right = null != o ? o : a.EMPTY_NODE;
      }return e.prototype.copy = function (t, n, r, i, o) {
        return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
      }, e.prototype.count = function () {
        return this.left.count() + 1 + this.right.count();
      }, e.prototype.isEmpty = function () {
        return !1;
      }, e.prototype.inorderTraversal = function (e) {
        return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
      }, e.prototype.reverseTraversal = function (e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
      }, e.prototype.A = function () {
        return this.left.isEmpty() ? this : this.left.A();
      }, e.prototype.minKey = function () {
        return this.A().key;
      }, e.prototype.maxKey = function () {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
      }, e.prototype.insert = function (e, t, n) {
        var r, i;return i = this, r = n(e, i.key), i = r < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === r ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.D();
      }, e.prototype.M = function () {
        if (this.left.isEmpty()) return a.EMPTY_NODE;var e = this;return e.left.L() || e.left.left.L() || (e = e.F()), e = e.copy(null, null, null, e.left.M(), null), e.D();
      }, e.prototype.remove = function (e, t) {
        var n, r;if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.L() || n.left.left.L() || (n = n.F()), n = n.copy(null, null, null, n.left.remove(e, t), null);else {
          if (n.left.L() && (n = n.x()), n.right.isEmpty() || n.right.L() || n.right.left.L() || (n = n.k()), 0 === t(e, n.key)) {
            if (n.right.isEmpty()) return a.EMPTY_NODE;r = n.right.A(), n = n.copy(r.key, r.value, null, null, n.right.M());
          }n = n.copy(null, null, null, null, n.right.remove(e, t));
        }return n.D();
      }, e.prototype.L = function () {
        return this.color;
      }, e.prototype.D = function () {
        var e = this;return e.right.L() && !e.left.L() && (e = e.W()), e.left.L() && e.left.left.L() && (e = e.x()), e.left.L() && e.right.L() && (e = e.V()), e;
      }, e.prototype.F = function () {
        var e = this.V();return e.right.left.L() && (e = e.copy(null, null, null, null, e.right.x()), e = e.W(), e = e.V()), e;
      }, e.prototype.k = function () {
        var e = this.V();return e.left.left.L() && (e = e.x(), e = e.V()), e;
      }, e.prototype.W = function () {
        var t = this.copy(null, null, e.RED, null, this.right.left);return this.right.copy(null, null, this.color, t, null);
      }, e.prototype.x = function () {
        var t = this.copy(null, null, e.RED, this.left.right, null);return this.left.copy(null, null, this.color, null, t);
      }, e.prototype.V = function () {
        var e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);return this.copy(null, null, !this.color, e, t);
      }, e.prototype.Q = function () {
        var e = this.j();return Math.pow(2, e) <= this.count() + 1;
      }, e.prototype.j = function () {
        var e;if (this.L() && this.left.L()) throw Error("Red node has red child(" + this.key + "," + this.value + ")");if (this.right.L()) throw Error("Right child of (" + this.key + "," + this.value + ") is red");if ((e = this.left.j()) !== this.right.j()) throw Error("Black depths differ");return e + (this.L() ? 0 : 1);
      }, e.RED = !0, e.BLACK = !1, e;
    }();t.LLRBNode = i;var o = function () {
      function e() {}return e.prototype.copy = function (e, t, n, r, i) {
        return this;
      }, e.prototype.insert = function (e, t, n) {
        return new i(e, t, null);
      }, e.prototype.remove = function (e, t) {
        return this;
      }, e.prototype.count = function () {
        return 0;
      }, e.prototype.isEmpty = function () {
        return !0;
      }, e.prototype.inorderTraversal = function (e) {
        return !1;
      }, e.prototype.reverseTraversal = function (e) {
        return !1;
      }, e.prototype.minKey = function () {
        return null;
      }, e.prototype.maxKey = function () {
        return null;
      }, e.prototype.j = function () {
        return 0;
      }, e.prototype.L = function () {
        return !1;
      }, e;
    }();t.LLRBEmptyNode = o;var a = function () {
      function e(t, n) {
        void 0 === n && (n = e.EMPTY_NODE), this.U = t, this.B = n;
      }return e.prototype.insert = function (t, n) {
        return new e(this.U, this.B.insert(t, n, this.U).copy(null, null, i.BLACK, null, null));
      }, e.prototype.remove = function (t) {
        return new e(this.U, this.B.remove(t, this.U).copy(null, null, i.BLACK, null, null));
      }, e.prototype.get = function (e) {
        for (var t, n = this.B; !n.isEmpty();) {
          if (0 === (t = this.U(e, n.key))) return n.value;t < 0 ? n = n.left : t > 0 && (n = n.right);
        }return null;
      }, e.prototype.getPredecessorKey = function (e) {
        for (var t, n = this.B, r = null; !n.isEmpty();) {
          if (0 === (t = this.U(e, n.key))) {
            if (n.left.isEmpty()) return r ? r.key : null;for (n = n.left; !n.right.isEmpty();) {
              n = n.right;
            }return n.key;
          }t < 0 ? n = n.left : t > 0 && (r = n, n = n.right);
        }throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
      }, e.prototype.isEmpty = function () {
        return this.B.isEmpty();
      }, e.prototype.count = function () {
        return this.B.count();
      }, e.prototype.minKey = function () {
        return this.B.minKey();
      }, e.prototype.maxKey = function () {
        return this.B.maxKey();
      }, e.prototype.inorderTraversal = function (e) {
        return this.B.inorderTraversal(e);
      }, e.prototype.reverseTraversal = function (e) {
        return this.B.reverseTraversal(e);
      }, e.prototype.getIterator = function (e) {
        return new r(this.B, null, this.U, !1, e);
      }, e.prototype.getIteratorFrom = function (e, t) {
        return new r(this.B, e, this.U, !1, t);
      }, e.prototype.getReverseIteratorFrom = function (e, t) {
        return new r(this.B, e, this.U, !0, t);
      }, e.prototype.getReverseIterator = function (e) {
        return new r(this.B, null, this.U, !0, e);
      }, e.EMPTY_NODE = new o(), e;
    }();t.SortedMap = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(45),
        i = n(13),
        o = n(3),
        a = n(46),
        s = n(88),
        u = n(99),
        l = n(0),
        h = n(1),
        c = n(0),
        p = n(100),
        d = n(27),
        f = n(102),
        _ = n(51),
        y = n(103),
        v = n(52),
        g = n(108),
        m = n(34),
        C = function () {
      function e(e, t, n) {
        var r = this;this.H = e, this.app = n, this.dataUpdateCount = 0, this.G = null, this.K = new y.EventQueue(), this.Y = 1, this.X = null, this.z = new a.SparseSnapshotTree(), this.J = null;var i = new p.AuthTokenProvider(n);if (this.$ = d.StatsManager.getCollection(e), t || h.beingCrawled()) this.Z = new g.ReadonlyRestClient(this.H, this.ee.bind(this), i), setTimeout(this.te.bind(this, !0), 0);else {
          var o = n.options.databaseAuthVariableOverride;if (void 0 !== o && null !== o) {
            if ("object" != (typeof o === "undefined" ? "undefined" : _typeof(o))) throw Error("Only objects are supported for option databaseAuthVariableOverride");try {
              l.stringify(o);
            } catch (e) {
              throw Error("Invalid authOverride provided: " + e);
            }
          }this.J = new v.PersistentConnection(this.H, this.ee.bind(this), this.te.bind(this), this.ne.bind(this), i, o), this.Z = this.J;
        }i.addTokenChangeListener(function (e) {
          r.Z.refreshAuthToken(e);
        }), this.re = d.StatsManager.getOrCreateReporter(e, function () {
          return new f.StatsReporter(r.$, r.Z);
        }), this.ie(), this.oe = new u.SnapshotHolder(), this.ae = new s.SyncTree({ startListening: function startListening(e, t, n, i) {
            var o = [],
                a = r.oe.getNode(e.path);return a.isEmpty() || (o = r.ae.applyServerOverwrite(e.path, a), setTimeout(function () {
              i("ok");
            }, 0)), o;
          }, stopListening: function stopListening() {} }), this.se("connected", !1), this.ue = new s.SyncTree({ startListening: function startListening(e, t, n, i) {
            return r.Z.listen(e, n, t, function (t, n) {
              var o = i(t, n);r.K.raiseEventsForChangedPath(e.path, o);
            }), [];
          }, stopListening: function stopListening(e, t) {
            r.Z.unlisten(e, t);
          } });
      }return e.prototype.toString = function () {
        return (this.H.secure ? "https://" : "http://") + this.H.host;
      }, e.prototype.name = function () {
        return this.H.namespace;
      }, e.prototype.serverTime = function () {
        var e = this.oe.getNode(new o.Path(".info/serverTimeOffset")),
            t = e.val() || 0;return new Date().getTime() + t;
      }, e.prototype.generateServerValues = function () {
        return r.generateWithValues({ timestamp: this.serverTime() });
      }, e.prototype.ee = function (e, t, n, r) {
        this.dataUpdateCount++;var a = new o.Path(e);t = this.X ? this.X(e, t) : t;var s = [];if (r) {
          if (n) {
            var u = c.map(t, function (e) {
              return i.nodeFromJSON(e);
            });s = this.ue.applyTaggedQueryMerge(a, u, r);
          } else {
            var l = i.nodeFromJSON(t);s = this.ue.applyTaggedQueryOverwrite(a, l, r);
          }
        } else if (n) {
          var h = c.map(t, function (e) {
            return i.nodeFromJSON(e);
          });s = this.ue.applyServerMerge(a, h);
        } else {
          var p = i.nodeFromJSON(t);s = this.ue.applyServerOverwrite(a, p);
        }var d = a;s.length > 0 && (d = this.le(a)), this.K.raiseEventsForChangedPath(d, s);
      }, e.prototype.he = function (e) {
        this.X = e;
      }, e.prototype.te = function (e) {
        this.se("connected", e), !1 === e && this.ce();
      }, e.prototype.ne = function (e) {
        var t = this;h.each(e, function (e, n) {
          t.se(n, e);
        });
      }, e.prototype.se = function (e, t) {
        var n = new o.Path("/.info/" + e),
            r = i.nodeFromJSON(t);this.oe.updateSnapshot(n, r);var a = this.ae.applyServerOverwrite(n, r);this.K.raiseEventsForChangedPath(n, a);
      }, e.prototype.pe = function () {
        return this.Y++;
      }, e.prototype.setWithPriority = function (e, t, n, o) {
        var a = this;this.de("set", { path: "" + e, value: t, priority: n });var s = this.generateServerValues(),
            u = i.nodeFromJSON(t, n),
            l = r.resolveDeferredValueSnapshot(u, s),
            c = this.pe(),
            p = this.ue.applyUserOverwrite(e, l, c, !0);this.K.queueEvents(p), this.Z.put("" + e, u.val(!0), function (t, n) {
          var r = "ok" === t;r || h.warn("set at " + e + " failed: " + t);var i = a.ue.ackUserWrite(c, !r);a.K.raiseEventsForChangedPath(e, i), a.callOnCompleteCallback(o, t, n);
        });var d = this.fe(e);this.le(d), this.K.raiseEventsForChangedPath(d, []);
      }, e.prototype.update = function (e, t, n) {
        var o = this;this.de("update", { path: "" + e, value: t });var a = !0,
            s = this.generateServerValues(),
            u = {};if (c.forEach(t, function (e, t) {
          a = !1;var n = i.nodeFromJSON(t);u[e] = r.resolveDeferredValueSnapshot(n, s);
        }), a) h.log("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(n, "ok");else {
          var l = this.pe(),
              p = this.ue.applyUserMerge(e, u, l);this.K.queueEvents(p), this.Z.merge("" + e, t, function (t, r) {
            var i = "ok" === t;i || h.warn("update at " + e + " failed: " + t);var a = o.ue.ackUserWrite(l, !i),
                s = a.length > 0 ? o.le(e) : e;o.K.raiseEventsForChangedPath(s, a), o.callOnCompleteCallback(n, t, r);
          }), c.forEach(t, function (t) {
            var n = o.fe(e.child(t));o.le(n);
          }), this.K.raiseEventsForChangedPath(e, []);
        }
      }, e.prototype.ce = function () {
        var e = this;this.de("onDisconnectEvents");var t = this.generateServerValues(),
            n = r.resolveDeferredValueTree(this.z, t),
            i = [];n.forEachTree(o.Path.Empty, function (t, n) {
          i = i.concat(e.ue.applyServerOverwrite(t, n));var r = e.fe(t);e.le(r);
        }), this.z = new a.SparseSnapshotTree(), this.K.raiseEventsForChangedPath(o.Path.Empty, i);
      }, e.prototype.onDisconnectCancel = function (e, t) {
        var n = this;this.Z.onDisconnectCancel("" + e, function (r, i) {
          "ok" === r && n.z.forget(e), n.callOnCompleteCallback(t, r, i);
        });
      }, e.prototype.onDisconnectSet = function (e, t, n) {
        var r = this,
            o = i.nodeFromJSON(t);this.Z.onDisconnectPut("" + e, o.val(!0), function (t, i) {
          "ok" === t && r.z.remember(e, o), r.callOnCompleteCallback(n, t, i);
        });
      }, e.prototype.onDisconnectSetWithPriority = function (e, t, n, r) {
        var o = this,
            a = i.nodeFromJSON(t, n);this.Z.onDisconnectPut("" + e, a.val(!0), function (t, n) {
          "ok" === t && o.z.remember(e, a), o.callOnCompleteCallback(r, t, n);
        });
      }, e.prototype.onDisconnectUpdate = function (e, t, n) {
        var r = this;if (c.isEmpty(t)) return h.log("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(n, "ok");this.Z.onDisconnectMerge("" + e, t, function (o, a) {
          "ok" === o && c.forEach(t, function (t, n) {
            var o = i.nodeFromJSON(n);r.z.remember(e.child(t), o);
          }), r.callOnCompleteCallback(n, o, a);
        });
      }, e.prototype.addEventCallbackForQuery = function (e, t) {
        var n;n = ".info" === e.path.getFront() ? this.ae.addEventRegistration(e, t) : this.ue.addEventRegistration(e, t), this.K.raiseEventsAtPath(e.path, n);
      }, e.prototype.removeEventCallbackForQuery = function (e, t) {
        var n;n = ".info" === e.path.getFront() ? this.ae.removeEventRegistration(e, t) : this.ue.removeEventRegistration(e, t), this.K.raiseEventsAtPath(e.path, n);
      }, e.prototype.interrupt = function () {
        this.J && this.J.interrupt("repo_interrupt");
      }, e.prototype.resume = function () {
        this.J && this.J.resume("repo_interrupt");
      }, e.prototype.stats = function (e) {
        if (void 0 === e && (e = !1), "undefined" != typeof console) {
          var t;e ? (this.G || (this.G = new _.StatsListener(this.$)), t = this.G.get()) : t = this.$.get();var n = Object.keys(t).reduce(function (e, t) {
            return Math.max(t.length, e);
          }, 0);c.forEach(t, function (e, t) {
            for (var r = e.length; r < n + 2; r++) {
              e += " ";
            }console.log(e + t);
          });
        }
      }, e.prototype.statsIncrementCounter = function (e) {
        this.$.incrementCounter(e), this.re.includeStat(e);
      }, e.prototype.de = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }var n = "";this.J && (n = this.J.id + ":"), h.log.apply(void 0, [n].concat(e));
      }, e.prototype.callOnCompleteCallback = function (e, t, n) {
        e && h.exceptionGuard(function () {
          if ("ok" == t) e(null);else {
            var r = (t || "error").toUpperCase(),
                i = r;n && (i += ": " + n);var o = Error(i);o.code = r, e(o);
          }
        });
      }, Object.defineProperty(e.prototype, "database", { get: function get() {
          return this.__database || (this.__database = new m.Database(this));
        }, enumerable: !0, configurable: !0 }), e;
    }();t.Repo = C;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t, n) {
        this._e = e, this.ye = t, this.ve = n;
      }return e.prototype.isFullyInitialized = function () {
        return this.ye;
      }, e.prototype.isFiltered = function () {
        return this.ve;
      }, e.prototype.isCompleteForPath = function (e) {
        if (e.isEmpty()) return this.isFullyInitialized() && !this.ve;var t = e.getFront();return this.isCompleteForChild(t);
      }, e.prototype.isCompleteForChild = function (e) {
        return this.isFullyInitialized() && !this.ve || this._e.hasChild(e);
      }, e.prototype.getNode = function () {
        return this._e;
      }, e;
    }();t.CacheNode = r;
  },, function (e, t, n) {
    "use strict";
    function r(e) {
      o.forEach(function (t) {
        t.logLevel = e;
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var i,
        o = [];!function (e) {
      e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
    }(i || (i = {}));var a = i.INFO,
        s = function s(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }if (!(t < e.logLevel)) {
        var o = new Date().toISOString();switch (t) {case i.DEBUG:case i.VERBOSE:
            console.log.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));break;case i.INFO:
            console.info.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));break;case i.WARN:
            console.warn.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));break;case i.ERROR:
            console.error.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n));break;default:
            throw Error("Attempted to log a message with an invalid logType (value: " + t + ")");}
      }
    },
        u = function () {
      function e(e) {
        this.name = e, this.ge = a, this.me = s, o.push(this);
      }return Object.defineProperty(e.prototype, "logLevel", { get: function get() {
          return this.ge;
        }, set: function set(e) {
          if (!(e in i)) throw new TypeError("Invalid value assigned to `logLevel`");this.ge = e;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "logHandler", { get: function get() {
          return this.me;
        }, set: function set(e) {
          if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");this.me = e;
        }, enumerable: !0, configurable: !0 }), e.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }this.me.apply(this, [this, i.DEBUG].concat(e));
      }, e.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }this.me.apply(this, [this, i.VERBOSE].concat(e));
      }, e.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }this.me.apply(this, [this, i.INFO].concat(e));
      }, e.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }this.me.apply(this, [this, i.WARN].concat(e));
      }, e.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }this.me.apply(this, [this, i.ERROR].concat(e));
      }, e;
    }();t.setLogLevel = r, n.d(t, "Logger", function () {
      return u;
    }), n.d(t, "LogLevel", function () {
      return i;
    });
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(37),
        o = n(84),
        a = n(1),
        s = n(85),
        u = n(38),
        l = n(19),
        h = n(3),
        c = n(109),
        p = n(8),
        d = n(0),
        f = n(0),
        _ = n(49),
        y = function (e) {
      function t(t, n) {
        if (!(t instanceof l.Repo)) throw Error("new Reference() no longer supported - use app.database().");return e.call(this, t, n, c.QueryParams.DEFAULT, !1) || this;
      }return r.__extends(t, e), t.prototype.getKey = function () {
        return d.validateArgCount("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack();
      }, t.prototype.child = function (e) {
        return d.validateArgCount("Reference.child", 1, 1, arguments.length), "number" == typeof e ? e += "" : e instanceof h.Path || (null === this.path.getFront() ? p.validateRootPathString("Reference.child", 1, e, !1) : p.validatePathString("Reference.child", 1, e, !1)), new t(this.repo, this.path.child(e));
      }, t.prototype.getParent = function () {
        d.validateArgCount("Reference.parent", 0, 0, arguments.length);var e = this.path.parent();return null === e ? null : new t(this.repo, e);
      }, t.prototype.getRoot = function () {
        d.validateArgCount("Reference.root", 0, 0, arguments.length);for (var e = this; null !== e.getParent();) {
          e = e.getParent();
        }return e;
      }, t.prototype.databaseProp = function () {
        return this.repo.database;
      }, t.prototype.set = function (e, t) {
        d.validateArgCount("Reference.set", 1, 2, arguments.length), p.validateWritablePath("Reference.set", this.path), p.validateFirebaseDataArg("Reference.set", 1, e, this.path, !1), d.validateCallback("Reference.set", 2, t, !0);var n = new f.Deferred();return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise;
      }, t.prototype.update = function (e, t) {
        if (d.validateArgCount("Reference.update", 1, 2, arguments.length), p.validateWritablePath("Reference.update", this.path), Array.isArray(e)) {
          for (var n = {}, r = 0; r < e.length; ++r) {
            n["" + r] = e[r];
          }e = n, a.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }p.validateFirebaseMergeDataArg("Reference.update", 1, e, this.path, !1), d.validateCallback("Reference.update", 2, t, !0);var i = new f.Deferred();return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise;
      }, t.prototype.setWithPriority = function (e, t, n) {
        if (d.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length), p.validateWritablePath("Reference.setWithPriority", this.path), p.validateFirebaseDataArg("Reference.setWithPriority", 1, e, this.path, !1), p.validatePriority("Reference.setWithPriority", 2, t, !1), d.validateCallback("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";var r = new f.Deferred();return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise;
      }, t.prototype.remove = function (e) {
        return d.validateArgCount("Reference.remove", 0, 1, arguments.length), p.validateWritablePath("Reference.remove", this.path), d.validateCallback("Reference.remove", 1, e, !0), this.set(null, e);
      }, t.prototype.transaction = function (e, t, n) {
        if (d.validateArgCount("Reference.transaction", 1, 3, arguments.length), p.validateWritablePath("Reference.transaction", this.path), d.validateCallback("Reference.transaction", 1, e, !1), d.validateCallback("Reference.transaction", 2, t, !0), p.validateBoolean("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";void 0 === n && (n = !0);var r = new f.Deferred();"function" == typeof t && r.promise.catch(function () {});var i = function i(e, n, _i2) {
          e ? r.reject(e) : r.resolve(new o.TransactionResult(n, _i2)), "function" == typeof t && t(e, n, _i2);
        };return this.repo.startTransaction(this.path, e, i, n), r.promise;
      }, t.prototype.setPriority = function (e, t) {
        d.validateArgCount("Reference.setPriority", 1, 2, arguments.length), p.validateWritablePath("Reference.setPriority", this.path), p.validatePriority("Reference.setPriority", 1, e, !1), d.validateCallback("Reference.setPriority", 2, t, !0);var n = new f.Deferred();return this.repo.setWithPriority(this.path.child(".priority"), e, null, n.wrapCallback(t)), n.promise;
      }, t.prototype.push = function (e, t) {
        d.validateArgCount("Reference.push", 0, 2, arguments.length), p.validateWritablePath("Reference.push", this.path), p.validateFirebaseDataArg("Reference.push", 1, e, this.path, !0), d.validateCallback("Reference.push", 2, t, !0);var n,
            r = this.repo.serverTime(),
            i = s.nextPushId(r),
            o = this.child(i),
            a = this.child(i);return n = null != e ? o.set(e, t).then(function () {
          return a;
        }) : Promise.resolve(a), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof t && n.catch(function () {}), o;
      }, t.prototype.onDisconnect = function () {
        return p.validateWritablePath("Reference.onDisconnect", this.path), new i.OnDisconnect(this.repo, this.path);
      }, Object.defineProperty(t.prototype, "database", { get: function get() {
          return this.databaseProp();
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "key", { get: function get() {
          return this.getKey();
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function get() {
          return this.getParent();
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function get() {
          return this.getRoot();
        }, enumerable: !0, configurable: !0 }), t;
    }(u.Query);t.Reference = y, u.Query.__referenceConstructor = y, _.SyncPoint.__referenceConstructor = y;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(8),
        o = n(3),
        a = n(4),
        s = function () {
      function e(e, t, n) {
        this._e = e, this.Ce = t, this.Ee = n;
      }return e.prototype.val = function () {
        return r.validateArgCount("DataSnapshot.val", 0, 0, arguments.length), this._e.val();
      }, e.prototype.exportVal = function () {
        return r.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length), this._e.val(!0);
      }, e.prototype.toJSON = function () {
        return r.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal();
      }, e.prototype.exists = function () {
        return r.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length), !this._e.isEmpty();
      }, e.prototype.child = function (t) {
        r.validateArgCount("DataSnapshot.child", 0, 1, arguments.length), t += "", i.validatePathString("DataSnapshot.child", 1, t, !1);var n = new o.Path(t),
            s = this.Ce.child(n);return new e(this._e.getChild(n), s, a.PRIORITY_INDEX);
      }, e.prototype.hasChild = function (e) {
        r.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length), i.validatePathString("DataSnapshot.hasChild", 1, e, !1);var t = new o.Path(e);return !this._e.getChild(t).isEmpty();
      }, e.prototype.getPriority = function () {
        return r.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length), this._e.getPriority().val();
      }, e.prototype.forEach = function (t) {
        var n = this;return r.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length), r.validateCallback("DataSnapshot.forEach", 1, t, !1), !this._e.isLeafNode() && !!this._e.forEachChild(this.Ee, function (r, i) {
          return t(new e(i, n.Ce.child(r), a.PRIORITY_INDEX));
        });
      }, e.prototype.hasChildren = function () {
        return r.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length), !this._e.isLeafNode() && !this._e.isEmpty();
      }, Object.defineProperty(e.prototype, "key", { get: function get() {
          return this.Ce.getKey();
        }, enumerable: !0, configurable: !0 }), e.prototype.numChildren = function () {
        return r.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length), this._e.numChildren();
      }, e.prototype.getRef = function () {
        return r.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length), this.Ce;
      }, Object.defineProperty(e.prototype, "ref", { get: function get() {
          return this.getRef();
        }, enumerable: !0, configurable: !0 }), e;
    }();t.DataSnapshot = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(18),
        o = n(3),
        a = n(1),
        s = n(0),
        u = function u() {
      return r || (r = new i.SortedMap(a.stringCompare)), r;
    },
        l = function () {
      function e(e, t) {
        void 0 === t && (t = u()), this.value = e, this.children = t;
      }return e.fromObject = function (t) {
        var n = e.Empty;return s.forEach(t, function (e, t) {
          n = n.set(new o.Path(e), t);
        }), n;
      }, e.prototype.isEmpty = function () {
        return null === this.value && this.children.isEmpty();
      }, e.prototype.findRootMostMatchingPathAndValue = function (e, t) {
        if (null != this.value && t(this.value)) return { path: o.Path.Empty, value: this.value };if (e.isEmpty()) return null;var n = e.getFront(),
            r = this.children.get(n);if (null !== r) {
          var i = r.findRootMostMatchingPathAndValue(e.popFront(), t);return null != i ? { path: new o.Path(n).child(i.path), value: i.value } : null;
        }return null;
      }, e.prototype.findRootMostValueAndPath = function (e) {
        return this.findRootMostMatchingPathAndValue(e, function () {
          return !0;
        });
      }, e.prototype.subtree = function (t) {
        if (t.isEmpty()) return this;var n = t.getFront(),
            r = this.children.get(n);return null !== r ? r.subtree(t.popFront()) : e.Empty;
      }, e.prototype.set = function (t, n) {
        if (t.isEmpty()) return new e(n, this.children);var r = t.getFront(),
            i = this.children.get(r) || e.Empty,
            o = i.set(t.popFront(), n),
            a = this.children.insert(r, o);return new e(this.value, a);
      }, e.prototype.remove = function (t) {
        if (t.isEmpty()) return this.children.isEmpty() ? e.Empty : new e(null, this.children);var n = t.getFront(),
            r = this.children.get(n);if (r) {
          var i = r.remove(t.popFront()),
              o = void 0;return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? e.Empty : new e(this.value, o);
        }return this;
      }, e.prototype.get = function (e) {
        if (e.isEmpty()) return this.value;var t = e.getFront(),
            n = this.children.get(t);return n ? n.get(e.popFront()) : null;
      }, e.prototype.setTree = function (t, n) {
        if (t.isEmpty()) return n;var r = t.getFront(),
            i = this.children.get(r) || e.Empty,
            o = i.setTree(t.popFront(), n),
            a = void 0;return a = o.isEmpty() ? this.children.remove(r) : this.children.insert(r, o), new e(this.value, a);
      }, e.prototype.fold = function (e) {
        return this.Ne(o.Path.Empty, e);
      }, e.prototype.Ne = function (e, t) {
        var n = {};return this.children.inorderTraversal(function (r, i) {
          n[r] = i.Ne(e.child(r), t);
        }), t(e, this.value, n);
      }, e.prototype.findOnPath = function (e, t) {
        return this.Pe(e, o.Path.Empty, t);
      }, e.prototype.Pe = function (e, t, n) {
        var r = !!this.value && n(t, this.value);if (r) return r;if (e.isEmpty()) return null;var i = e.getFront(),
            o = this.children.get(i);return o ? o.Pe(e.popFront(), t.child(i), n) : null;
      }, e.prototype.foreachOnPath = function (e, t) {
        return this.Se(e, o.Path.Empty, t);
      }, e.prototype.Se = function (t, n, r) {
        if (t.isEmpty()) return this;this.value && r(n, this.value);var i = t.getFront(),
            o = this.children.get(i);return o ? o.Se(t.popFront(), n.child(i), r) : e.Empty;
      }, e.prototype.foreach = function (e) {
        this.be(o.Path.Empty, e);
      }, e.prototype.be = function (e, t) {
        this.children.inorderTraversal(function (n, r) {
          r.be(e.child(n), t);
        }), this.value && t(e, this.value);
      }, e.prototype.foreachChild = function (e) {
        this.children.inorderTraversal(function (t, n) {
          n.value && e(t, n.value);
        });
      }, e.Empty = new e(null), e;
    }();t.ImmutableTree = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(10),
        o = n(5),
        a = n(4),
        s = function () {
      function e(e) {
        this.Ee = e;
      }return e.prototype.updateChild = function (e, t, n, o, a, s) {
        r.assert(e.isIndexed(this.Ee), "A node must be indexed if only a child is updated");var u = e.getImmediateChild(t);return u.getChild(o).equals(n.getChild(o)) && u.isEmpty() == n.isEmpty() ? e : (null != s && (n.isEmpty() ? e.hasChild(t) ? s.trackChildChange(i.Change.childRemovedChange(t, u)) : r.assert(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : u.isEmpty() ? s.trackChildChange(i.Change.childAddedChange(t, n)) : s.trackChildChange(i.Change.childChangedChange(t, n, u))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.Ee));
      }, e.prototype.updateFullNode = function (e, t, n) {
        return null != n && (e.isLeafNode() || e.forEachChild(a.PRIORITY_INDEX, function (e, r) {
          t.hasChild(e) || n.trackChildChange(i.Change.childRemovedChange(e, r));
        }), t.isLeafNode() || t.forEachChild(a.PRIORITY_INDEX, function (t, r) {
          if (e.hasChild(t)) {
            var o = e.getImmediateChild(t);o.equals(r) || n.trackChildChange(i.Change.childChangedChange(t, r, o));
          } else n.trackChildChange(i.Change.childAddedChange(t, r));
        })), t.withIndex(this.Ee);
      }, e.prototype.updatePriority = function (e, t) {
        return e.isEmpty() ? o.ChildrenNode.EMPTY_NODE : e.updatePriority(t);
      }, e.prototype.filtersNodes = function () {
        return !1;
      }, e.prototype.getIndexedFilter = function () {
        return this;
      }, e.prototype.getIndex = function () {
        return this.Ee;
      }, e;
    }();t.IndexedFilter = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(101),
        i = function () {
      function e() {}return e.getCollection = function (e) {
        var t = "" + e;return this.Te[t] || (this.Te[t] = new r.StatsCollection()), this.Te[t];
      }, e.getOrCreateReporter = function (e, t) {
        var n = "" + e;return this.Ie[n] || (this.Ie[n] = t()), this.Ie[n];
      }, e.Te = {}, e.Ie = {}, e;
    }();t.StatsManager = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(19),
        o = n(1),
        a = n(35),
        s = n(8);n(111);var u,
        l = function () {
      function e() {
        this.Re = {}, this.we = !1;
      }return e.getInstance = function () {
        return u || (u = new e()), u;
      }, e.prototype.interrupt = function () {
        for (var e in this.Re) {
          for (var t in this.Re[e]) {
            this.Re[e][t].interrupt();
          }
        }
      }, e.prototype.resume = function () {
        for (var e in this.Re) {
          for (var t in this.Re[e]) {
            this.Re[e][t].resume();
          }
        }
      }, e.prototype.databaseFromApp = function (e, t) {
        var n = t || e.options.databaseURL;void 0 === n && o.fatal("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().");var r = a.parseRepoInfo(n),
            i = r.repoInfo;return s.validateUrl("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || o.fatal("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(i, e).database;
      }, e.prototype.deleteRepo = function (e) {
        var t = r.safeGet(this.Re, e.app.name);t && r.safeGet(t, e.H.toURLString()) === e || o.fatal("Database " + e.app.name + "(" + e.H + ") has already been deleted."), e.interrupt(), delete t[e.H.toURLString()];
      }, e.prototype.createRepo = function (e, t) {
        var n = r.safeGet(this.Re, t.name);n || (n = {}, this.Re[t.name] = n);var a = r.safeGet(n, e.toURLString());return a && o.fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), a = new i.Repo(e, this.we, t), n[e.toURLString()] = a, a;
      }, e.prototype.forceRestClient = function (e) {
        this.we = e;
      }, e;
    }();t.RepoManager = l;
  },,,,,, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(1),
        o = n(35),
        a = n(3),
        s = n(23),
        u = n(19),
        l = n(28),
        h = n(0),
        c = n(8),
        p = function () {
      function e(e) {
        this.Oe = e, e instanceof u.Repo || i.fatal("Don't call new Database() directly - please use firebase.database()."), this.B = new s.Reference(e, a.Path.Empty), this.INTERNAL = new d(this);
      }return Object.defineProperty(e.prototype, "app", { get: function get() {
          return this.Oe.app;
        }, enumerable: !0, configurable: !0 }), e.prototype.ref = function (e) {
        return this.Ae("ref"), h.validateArgCount("database.ref", 0, 1, arguments.length), e instanceof s.Reference ? this.refFromURL("" + e) : void 0 !== e ? this.B.child(e) : this.B;
      }, e.prototype.refFromURL = function (e) {
        var t = "database.refFromURL";this.Ae(t), h.validateArgCount(t, 1, 1, arguments.length);var n = o.parseRepoInfo(e);c.validateUrl(t, 1, n);var r = n.repoInfo;return r.host !== this.Oe.H.host && i.fatal(t + ": Host name does not match the current database: (found " + r.host + " but expected " + this.Oe.H.host + ")"), this.ref("" + n.path);
      }, e.prototype.Ae = function (e) {
        null === this.Oe && i.fatal("Cannot call " + e + " on a deleted database.");
      }, e.prototype.goOffline = function () {
        h.validateArgCount("database.goOffline", 0, 0, arguments.length), this.Ae("goOffline"), this.Oe.interrupt();
      }, e.prototype.goOnline = function () {
        h.validateArgCount("database.goOnline", 0, 0, arguments.length), this.Ae("goOnline"), this.Oe.resume();
      }, e.ServerValue = { TIMESTAMP: { ".sv": "timestamp" } }, e;
    }();t.Database = p;var d = function () {
      function e(e) {
        this.database = e;
      }return e.prototype.delete = function () {
        return r.__awaiter(this, void 0, void 0, function () {
          return r.__generator(this, function (e) {
            return this.database.Ae("delete"), l.RepoManager.getInstance().deleteRepo(this.database.Oe), this.database.Oe = null, this.database.B = null, this.database.INTERNAL = null, this.database = null, [2];
          });
        });
      }, e;
    }();t.DatabaseInternals = d;
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t = "", n = e.split("/"), r = 0; r < n.length; r++) {
        if (n[r].length > 0) {
          var i = n[r];try {
            i = decodeURIComponent(i.replace(/\+/g, " "));
          } catch (e) {}t += "/" + i;
        }
      }return t;
    }function i(e) {
      var t = {};e.startsWith("?") && (e = e.substring(1));for (var n = 0, r = e.split("&"); n < r.length; n++) {
        var i = r[n];if (0 !== i.length) {
          var o = i.split("=");2 === o.length ? t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : s.warn("Invalid query segment '" + i + "' in query '" + e + "'");
        }
      }return t;
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = n(3),
        a = n(36),
        s = n(1);t.parseRepoInfo = function (e) {
      var n = t.parseURL(e),
          r = n.subdomain;"firebase" === n.domain && s.fatal(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" != r || "localhost" === n.domain || s.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || s.warnIfPageIsSecure();var i = "ws" === n.scheme || "wss" === n.scheme;return { repoInfo: new a.RepoInfo(n.host, n.secure, r, i), path: new o.Path(n.pathString) };
    }, t.parseURL = function (e) {
      var t = "",
          n = "",
          o = "",
          a = "",
          s = !0,
          u = "https",
          l = 443;if ("string" == typeof e) {
        var h = e.indexOf("//");h >= 0 && (u = e.substring(0, h - 1), e = e.substring(h + 2));var c = e.indexOf("/");-1 === c && (c = e.length);var p = e.indexOf("?");-1 === p && (p = e.length), t = e.substring(0, Math.min(c, p)), c < p && (a = r(e.substring(c, p)));var d = i(e.substring(Math.min(e.length, p)));h = t.indexOf(":"), h >= 0 ? (s = "https" === u || "wss" === u, l = parseInt(t.substring(h + 1), 10)) : h = e.length;var f = t.split(".");3 === f.length ? (n = f[1], o = f[0].toLowerCase()) : 2 === f.length ? n = f[0] : "localhost" === f[0].slice(0, h).toLowerCase() && (n = "localhost"), "" === o && "ns" in d && (o = d.ns);
      }return { host: t, port: l, domain: n, subdomain: o, secure: s, scheme: u, pathString: a };
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(0),
        o = n(14),
        a = n(15),
        s = function () {
      function e(e, t, n, r, i) {
        void 0 === i && (i = ""), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = o.PersistentStorage.get("host:" + e) || this.host;
      }return e.prototype.needsQueryParam = function () {
        return this.host !== this.internalHost || this.isCustomHost();
      }, e.prototype.isCacheableHost = function () {
        return "s-" === this.internalHost.substr(0, 2);
      }, e.prototype.isDemoHost = function () {
        return "firebaseio-demo.com" === this.domain;
      }, e.prototype.isCustomHost = function () {
        return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain;
      }, e.prototype.updateHost = function (e) {
        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && o.PersistentStorage.set("host:" + this.host, this.internalHost));
      }, e.prototype.connectionURL = function (e, t) {
        r.assert("string" == typeof e, "typeof type must == string"), r.assert("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)), "typeof params must == object");var n;if (e === a.WEBSOCKET) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";else {
          if (e !== a.LONG_POLLING) throw Error("Unknown connection type: " + e);n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?";
        }this.needsQueryParam() && (t.ns = this.namespace);var o = [];return i.forEach(t, function (e, t) {
          o.push(e + "=" + t);
        }), n + o.join("&");
      }, e.prototype.toString = function () {
        var e = this.toURLString();return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
      }, e.prototype.toURLString = function () {
        return (this.secure ? "https://" : "http://") + this.host;
      }, e;
    }();t.RepoInfo = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(8),
        o = n(1),
        a = n(0),
        s = function () {
      function e(e, t) {
        this.Oe = e, this.De = t;
      }return e.prototype.cancel = function (e) {
        r.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length), r.validateCallback("OnDisconnect.cancel", 1, e, !0);var t = new a.Deferred();return this.Oe.onDisconnectCancel(this.De, t.wrapCallback(e)), t.promise;
      }, e.prototype.remove = function (e) {
        r.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length), i.validateWritablePath("OnDisconnect.remove", this.De), r.validateCallback("OnDisconnect.remove", 1, e, !0);var t = new a.Deferred();return this.Oe.onDisconnectSet(this.De, null, t.wrapCallback(e)), t.promise;
      }, e.prototype.set = function (e, t) {
        r.validateArgCount("OnDisconnect.set", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.set", this.De), i.validateFirebaseDataArg("OnDisconnect.set", 1, e, this.De, !1), r.validateCallback("OnDisconnect.set", 2, t, !0);var n = new a.Deferred();return this.Oe.onDisconnectSet(this.De, e, n.wrapCallback(t)), n.promise;
      }, e.prototype.setWithPriority = function (e, t, n) {
        r.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length), i.validateWritablePath("OnDisconnect.setWithPriority", this.De), i.validateFirebaseDataArg("OnDisconnect.setWithPriority", 1, e, this.De, !1), i.validatePriority("OnDisconnect.setWithPriority", 2, t, !1), r.validateCallback("OnDisconnect.setWithPriority", 3, n, !0);var o = new a.Deferred();return this.Oe.onDisconnectSetWithPriority(this.De, e, t, o.wrapCallback(n)), o.promise;
      }, e.prototype.update = function (e, t) {
        if (r.validateArgCount("OnDisconnect.update", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.update", this.De), Array.isArray(e)) {
          for (var n = {}, s = 0; s < e.length; ++s) {
            n["" + s] = e[s];
          }e = n, o.warn("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }i.validateFirebaseMergeDataArg("OnDisconnect.update", 1, e, this.De, !1), r.validateCallback("OnDisconnect.update", 2, t, !0);var u = new a.Deferred();return this.Oe.onDisconnectUpdate(this.De, e, u.wrapCallback(t)), u.promise;
      }, e;
    }();t.OnDisconnect = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(0),
        o = n(12),
        a = n(4),
        s = n(40),
        u = n(44),
        l = n(1),
        h = n(3),
        c = n(8),
        p = n(0),
        d = n(86),
        f = n(0),
        _ = function () {
      function e(e, t, n, r) {
        this.repo = e, this.path = t, this.Me = n, this.Le = r;
      }return Object.defineProperty(e, "__referenceConstructor", { get: function get() {
          return i.assert(r, "Reference.ts has not been loaded"), r;
        }, set: function set(e) {
          r = e;
        }, enumerable: !0, configurable: !0 }), e.Fe = function (e) {
        var t = null,
            n = null;if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === o.KEY_INDEX) {
          var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
              h = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if (e.hasStart()) {
            if (e.getIndexStartName() != l.MIN_NAME) throw Error(r);if ("string" != typeof t) throw Error(h);
          }if (e.hasEnd()) {
            if (e.getIndexEndName() != l.MAX_NAME) throw Error(r);if ("string" != typeof n) throw Error(h);
          }
        } else if (e.getIndex() === a.PRIORITY_INDEX) {
          if (null != t && !c.isValidPriority(t) || null != n && !c.isValidPriority(n)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (i.assert(e.getIndex() instanceof u.PathIndex || e.getIndex() === s.VALUE_INDEX, "unknown index type."), null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || null != n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
      }, e.xe = function (e) {
        if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
      }, e.prototype.ke = function (e) {
        if (!0 === this.Le) throw Error(e + ": You can't combine multiple orderBy calls.");
      }, e.prototype.getQueryParams = function () {
        return this.Me;
      }, e.prototype.getRef = function () {
        return p.validateArgCount("Query.ref", 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path);
      }, e.prototype.on = function (t, n, r, i) {
        p.validateArgCount("Query.on", 2, 4, arguments.length), c.validateEventType("Query.on", 1, t, !1), p.validateCallback("Query.on", 2, n, !1);var o = e.We("Query.on", r, i);if ("value" === t) this.onValueEvent(n, o.cancel, o.context);else {
          var a = {};a[t] = n, this.onChildEvent(a, o.cancel, o.context);
        }return n;
      }, e.prototype.onValueEvent = function (e, t, n) {
        var r = new d.ValueEventRegistration(e, t || null, n || null);this.repo.addEventCallbackForQuery(this, r);
      }, e.prototype.onChildEvent = function (e, t, n) {
        var r = new d.ChildEventRegistration(e, t, n);this.repo.addEventCallbackForQuery(this, r);
      }, e.prototype.off = function (e, t, n) {
        p.validateArgCount("Query.off", 0, 3, arguments.length), c.validateEventType("Query.off", 1, e, !0), p.validateCallback("Query.off", 2, t, !0), p.validateContextObject("Query.off", 3, n, !0);var r = null,
            i = null;if ("value" === e) {
          var o = t || null;r = new d.ValueEventRegistration(o, null, n || null);
        } else e && (t && (i = {}, i[e] = t), r = new d.ChildEventRegistration(i, null, n || null));this.repo.removeEventCallbackForQuery(this, r);
      }, e.prototype.once = function (t, n, r, i) {
        var o = this;p.validateArgCount("Query.once", 1, 4, arguments.length), c.validateEventType("Query.once", 1, t, !1), p.validateCallback("Query.once", 2, n, !0);var a = e.We("Query.once", r, i),
            s = !0,
            u = new f.Deferred();u.promise.catch(function () {});var l = function l(e) {
          s && (s = !1, o.off(t, l), n && n.bind(a.context)(e), u.resolve(e));
        };return this.on(t, l, function (e) {
          o.off(t, l), a.cancel && a.cancel.bind(a.context)(e), u.reject(e);
        }), u.promise;
      }, e.prototype.limitToFirst = function (t) {
        if (p.validateArgCount("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToFirst: First argument must be a positive integer.");if (this.Me.hasLimit()) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new e(this.repo, this.path, this.Me.limitToFirst(t), this.Le);
      }, e.prototype.limitToLast = function (t) {
        if (p.validateArgCount("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToLast: First argument must be a positive integer.");if (this.Me.hasLimit()) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new e(this.repo, this.path, this.Me.limitToLast(t), this.Le);
      }, e.prototype.orderByChild = function (t) {
        if (p.validateArgCount("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if ("$priority" === t) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if ("$value" === t) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');c.validatePathString("Query.orderByChild", 1, t, !1), this.ke("Query.orderByChild");var n = new h.Path(t);if (n.isEmpty()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var r = new u.PathIndex(n),
            i = this.Me.orderBy(r);return e.Fe(i), new e(this.repo, this.path, i, !0);
      }, e.prototype.orderByKey = function () {
        p.validateArgCount("Query.orderByKey", 0, 0, arguments.length), this.ke("Query.orderByKey");var t = this.Me.orderBy(o.KEY_INDEX);return e.Fe(t), new e(this.repo, this.path, t, !0);
      }, e.prototype.orderByPriority = function () {
        p.validateArgCount("Query.orderByPriority", 0, 0, arguments.length), this.ke("Query.orderByPriority");var t = this.Me.orderBy(a.PRIORITY_INDEX);return e.Fe(t), new e(this.repo, this.path, t, !0);
      }, e.prototype.orderByValue = function () {
        p.validateArgCount("Query.orderByValue", 0, 0, arguments.length), this.ke("Query.orderByValue");var t = this.Me.orderBy(s.VALUE_INDEX);return e.Fe(t), new e(this.repo, this.path, t, !0);
      }, e.prototype.startAt = function (t, n) {
        void 0 === t && (t = null), p.validateArgCount("Query.startAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.startAt", 1, t, this.path, !0), c.validateKey("Query.startAt", 2, n, !0);var r = this.Me.startAt(t, n);if (e.xe(r), e.Fe(r), this.Me.hasStart()) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.Le);
      }, e.prototype.endAt = function (t, n) {
        void 0 === t && (t = null), p.validateArgCount("Query.endAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.endAt", 1, t, this.path, !0), c.validateKey("Query.endAt", 2, n, !0);var r = this.Me.endAt(t, n);if (e.xe(r), e.Fe(r), this.Me.hasEnd()) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new e(this.repo, this.path, r, this.Le);
      }, e.prototype.equalTo = function (e, t) {
        if (p.validateArgCount("Query.equalTo", 1, 2, arguments.length), c.validateFirebaseDataArg("Query.equalTo", 1, e, this.path, !1), c.validateKey("Query.equalTo", 2, t, !0), this.Me.hasStart()) throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if (this.Me.hasEnd()) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(e, t).endAt(e, t);
      }, e.prototype.toString = function () {
        return p.validateArgCount("Query.toString", 0, 0, arguments.length), "" + this.repo + this.path.toUrlEncodedString();
      }, e.prototype.toJSON = function () {
        return p.validateArgCount("Query.toJSON", 0, 1, arguments.length), "" + this;
      }, e.prototype.queryObject = function () {
        return this.Me.getQueryObject();
      }, e.prototype.queryIdentifier = function () {
        var e = this.queryObject(),
            t = l.ObjectToUniqueKey(e);return "{}" === t ? "default" : t;
      }, e.prototype.isEqual = function (t) {
        if (p.validateArgCount("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var n = this.repo === t.repo,
            r = this.path.equals(t.path),
            i = this.queryIdentifier() === t.queryIdentifier();return n && r && i;
      }, e.We = function (e, t, n) {
        var r = { cancel: null, context: null };if (t && n) r.cancel = t, p.validateCallback(e, 3, r.cancel, !0), r.context = n, p.validateContextObject(e, 4, r.context, !0);else if (t) if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t) r.context = t;else {
          if ("function" != typeof t) throw Error(p.errorPrefix(e, 3, !0) + " must either be a cancel callback or a context object.");r.cancel = t;
        }return r;
      }, Object.defineProperty(e.prototype, "ref", { get: function get() {
          return this.getRef();
        }, enumerable: !0, configurable: !0 }), e;
    }();t.Query = _;
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      i = e;
    }Object.defineProperty(t, "__esModule", { value: !0 });var i,
        o = n(0),
        a = n(1),
        s = n(0);t.setMaxNode = r, t.priorityHashText = function (e) {
      return "number" == typeof e ? "number:" + a.doubleToIEEE754String(e) : "string:" + e;
    }, t.validatePriorityNode = function (e) {
      if (e.isLeafNode()) {
        var t = e.val();o.assert("string" == typeof t || "number" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && s.contains(t, ".sv"), "Priority must be a string or number.");
      } else o.assert(e === i || e.isEmpty(), "priority of unexpected type.");o.assert(e === i || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(16),
        o = n(6),
        a = n(1),
        s = n(13),
        u = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }return r.__extends(t, e), t.prototype.compare = function (e, t) {
        var n = e.node.compareTo(t.node);return 0 === n ? a.nameCompare(e.name, t.name) : n;
      }, t.prototype.isDefinedOn = function (e) {
        return !0;
      }, t.prototype.indexedValueChanged = function (e, t) {
        return !e.equals(t);
      }, t.prototype.minPost = function () {
        return o.NamedNode.MIN;
      }, t.prototype.maxPost = function () {
        return o.NamedNode.MAX;
      }, t.prototype.makePost = function (e, t) {
        var n = s.nodeFromJSON(e);return new o.NamedNode(t, n);
      }, t.prototype.toString = function () {
        return ".value";
      }, t;
    }(i.Index);t.ValueIndex = u, t.VALUE_INDEX = new u();
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(0),
        o = n(42),
        a = n(0),
        s = n(6),
        u = n(4),
        l = n(12),
        h = {},
        c = function () {
      function e(e, t) {
        this.Ve = e, this.Qe = t;
      }return Object.defineProperty(e, "Default", { get: function get() {
          return i.assert(h && u.PRIORITY_INDEX, "ChildrenNode.ts has not been loaded"), r = r || new e({ ".priority": h }, { ".priority": u.PRIORITY_INDEX });
        }, enumerable: !0, configurable: !0 }), e.prototype.get = function (e) {
        var t = a.safeGet(this.Ve, e);if (!t) throw Error("No index defined for " + e);return t === h ? null : t;
      }, e.prototype.hasIndex = function (e) {
        return a.contains(this.Qe, "" + e);
      }, e.prototype.addIndex = function (t, n) {
        i.assert(t !== l.KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");for (var r = [], u = !1, c = n.getIterator(s.NamedNode.Wrap), p = c.getNext(); p;) {
          u = u || t.isDefinedOn(p.node), r.push(p), p = c.getNext();
        }var d;d = u ? o.buildChildSet(r, t.getCompare()) : h;var f = "" + t,
            _ = a.clone(this.Qe);_[f] = t;var y = a.clone(this.Ve);return y[f] = d, new e(y, _);
      }, e.prototype.addToIndexes = function (t, n) {
        var r = this;return new e(a.map(this.Ve, function (e, u) {
          var l = a.safeGet(r.Qe, u);if (i.assert(l, "Missing index implementation for " + u), e === h) {
            if (l.isDefinedOn(t.node)) {
              for (var c = [], p = n.getIterator(s.NamedNode.Wrap), d = p.getNext(); d;) {
                d.name != t.name && c.push(d), d = p.getNext();
              }return c.push(t), o.buildChildSet(c, l.getCompare());
            }return h;
          }var f = n.get(t.name),
              _ = e;return f && (_ = _.remove(new s.NamedNode(t.name, f))), _.insert(t, t.node);
        }), this.Qe);
      }, e.prototype.removeFromIndexes = function (t, n) {
        return new e(a.map(this.Ve, function (e) {
          if (e === h) return e;var r = n.get(t.name);return r ? e.remove(new s.NamedNode(t.name, r)) : e;
        }), this.Qe);
      }, e;
    }();t.IndexMap = c;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(18),
        i = n(18),
        o = Math.log(2),
        a = function () {
      function e(e) {
        this.count = function (e) {
          return parseInt(Math.log(e) / o, 10);
        }(e + 1), this.qe = this.count - 1;var t = function (e) {
          return parseInt(Array(e + 1).join("1"), 2);
        }(this.count);this.je = e + 1 & t;
      }return e.prototype.nextBitIsOne = function () {
        var e = !(this.je & 1 << this.qe);return this.qe--, e;
      }, e;
    }();t.buildChildSet = function (e, t, n, o) {
      e.sort(t);var s = function s(t, i) {
        var o,
            a,
            u = i - t;if (0 == u) return null;if (1 == u) return o = e[t], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, null, null);var l = parseInt(u / 2, 10) + t,
            h = s(t, l),
            c = s(l + 1, i);return o = e[l], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, h, c);
      },
          u = new a(e.length),
          l = function (t) {
        for (var i = null, o = null, a = e.length, u = function u(t, i) {
          var o = a - t,
              u = a;a -= t;var h = s(o + 1, u),
              c = e[o],
              p = n ? n(c) : c;l(new r.LLRBNode(p, c.node, i, null, h));
        }, l = function l(e) {
          i ? (i.left = e, i = e) : (o = e, i = e);
        }, h = 0; h < t.count; ++h) {
          var c = t.nextBitIsOne(),
              p = Math.pow(2, t.count - (h + 1));c ? u(p, r.LLRBNode.BLACK) : (u(p, r.LLRBNode.BLACK), u(p, r.LLRBNode.RED));
        }return o;
      }(u);return new i.SortedMap(o || t, l);
    };
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      return o.nameCompare(e.name, t.name);
    }function i(e, t) {
      return o.nameCompare(e, t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = n(1);t.NAME_ONLY_COMPARATOR = r, t.NAME_COMPARATOR = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(0),
        o = n(1),
        a = n(16),
        s = n(5),
        u = n(6),
        l = n(13),
        h = function (e) {
      function t(t) {
        var n = e.call(this) || this;return n.Ue = t, i.assert(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), n;
      }return r.__extends(t, e), t.prototype.extractChild = function (e) {
        return e.getChild(this.Ue);
      }, t.prototype.isDefinedOn = function (e) {
        return !e.getChild(this.Ue).isEmpty();
      }, t.prototype.compare = function (e, t) {
        var n = this.extractChild(e.node),
            r = this.extractChild(t.node),
            i = n.compareTo(r);return 0 === i ? o.nameCompare(e.name, t.name) : i;
      }, t.prototype.makePost = function (e, t) {
        var n = l.nodeFromJSON(e),
            r = s.ChildrenNode.EMPTY_NODE.updateChild(this.Ue, n);return new u.NamedNode(t, r);
      }, t.prototype.maxPost = function () {
        var e = s.ChildrenNode.EMPTY_NODE.updateChild(this.Ue, s.MAX_NODE);return new u.NamedNode(o.MAX_NAME, e);
      }, t.prototype.toString = function () {
        return this.Ue.slice().join("/");
      }, t;
    }(a.Index);t.PathIndex = h;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(3),
        o = n(46),
        a = n(17),
        s = n(13),
        u = n(4);t.generateWithValues = function (e) {
      return e = e || {}, e.timestamp = e.timestamp || new Date().getTime(), e;
    }, t.resolveDeferredValue = function (e, t) {
      return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (r.assert(".sv" in e, "Unexpected leaf node or priority contents"), t[e[".sv"]]) : e;
    }, t.resolveDeferredValueTree = function (e, n) {
      var r = new o.SparseSnapshotTree();return e.forEachTree(new i.Path(""), function (e, i) {
        r.remember(e, t.resolveDeferredValueSnapshot(i, n));
      }), r;
    }, t.resolveDeferredValueSnapshot = function (e, n) {
      var r,
          i = e.getPriority().val(),
          o = t.resolveDeferredValue(i, n);if (e.isLeafNode()) {
        var l = e,
            h = t.resolveDeferredValue(l.getValue(), n);return h !== l.getValue() || o !== l.getPriority().val() ? new a.LeafNode(h, s.nodeFromJSON(o)) : e;
      }var c = e;return r = c, o !== c.getPriority().val() && (r = r.updatePriority(new a.LeafNode(o))), c.forEachChild(u.PRIORITY_INDEX, function (e, i) {
        var o = t.resolveDeferredValueSnapshot(i, n);o !== i && (r = r.updateImmediateChild(e, o));
      }), r;
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(3),
        i = n(4),
        o = n(47),
        a = function () {
      function e() {
        this.T = null, this._ = null;
      }return e.prototype.find = function (e) {
        if (null != this.T) return this.T.getChild(e);if (e.isEmpty() || null == this._) return null;var t = e.getFront();return e = e.popFront(), this._.contains(t) ? this._.get(t).find(e) : null;
      }, e.prototype.remember = function (t, n) {
        if (t.isEmpty()) this.T = n, this._ = null;else if (null !== this.T) this.T = this.T.updateChild(t, n);else {
          null == this._ && (this._ = new o.CountedSet());var r = t.getFront();this._.contains(r) || this._.add(r, new e());var i = this._.get(r);t = t.popFront(), i.remember(t, n);
        }
      }, e.prototype.forget = function (e) {
        if (e.isEmpty()) return this.T = null, this._ = null, !0;if (null !== this.T) {
          if (this.T.isLeafNode()) return !1;var t = this.T;this.T = null;var n = this;return t.forEachChild(i.PRIORITY_INDEX, function (e, t) {
            n.remember(new r.Path(e), t);
          }), this.forget(e);
        }if (null !== this._) {
          var o = e.getFront();return e = e.popFront(), this._.contains(o) && this._.get(o).forget(e) && this._.remove(o), !!this._.isEmpty() && (this._ = null, !0);
        }return !0;
      }, e.prototype.forEachTree = function (e, t) {
        null !== this.T ? t(e, this.T) : this.forEachChild(function (n, i) {
          var o = new r.Path(e + "/" + n);i.forEachTree(o, t);
        });
      }, e.prototype.forEachChild = function (e) {
        null !== this._ && this._.each(function (t, n) {
          e(t, n);
        });
      }, e;
    }();t.SparseSnapshotTree = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e() {
        this.set = {};
      }return e.prototype.add = function (e, t) {
        this.set[e] = null === t || t;
      }, e.prototype.contains = function (e) {
        return r.contains(this.set, e);
      }, e.prototype.get = function (e) {
        return this.contains(e) ? this.set[e] : void 0;
      }, e.prototype.remove = function (e) {
        delete this.set[e];
      }, e.prototype.clear = function () {
        this.set = {};
      }, e.prototype.isEmpty = function () {
        return r.isEmpty(this.set);
      }, e.prototype.count = function () {
        return r.getCount(this.set);
      }, e.prototype.each = function (e) {
        r.forEach(this.set, function (t, n) {
          return e(t, n);
        });
      }, e.prototype.keys = function () {
        var e = [];return r.forEach(this.set, function (t) {
          e.push(t);
        }), e;
      }, e;
    }();t.CountedSet = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(9),
        i = n(3),
        o = function () {
      function e(e, t, n) {
        this.source = e, this.path = t, this.snap = n, this.type = r.OperationType.OVERWRITE;
      }return e.prototype.operationForChild = function (t) {
        return this.path.isEmpty() ? new e(this.source, i.Path.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap);
      }, e;
    }();t.Overwrite = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(20),
        o = n(5),
        a = n(0),
        s = n(0),
        u = n(50),
        l = n(92),
        h = function () {
      function e() {
        this.Be = {};
      }return Object.defineProperty(e, "__referenceConstructor", { get: function get() {
          return a.assert(r, "Reference.ts has not been loaded"), r;
        }, set: function set(e) {
          a.assert(!r, "__referenceConstructor has already been defined"), r = e;
        }, enumerable: !0, configurable: !0 }), e.prototype.isEmpty = function () {
        return s.isEmpty(this.Be);
      }, e.prototype.applyOperation = function (e, t, n) {
        var r = e.source.queryId;if (null !== r) {
          var i = s.safeGet(this.Be, r);return a.assert(null != i, "SyncTree gave us an op for an invalid query."), i.applyOperation(e, t, n);
        }var o = [];return s.forEach(this.Be, function (r, i) {
          o = o.concat(i.applyOperation(e, t, n));
        }), o;
      }, e.prototype.addEventRegistration = function (e, t, n, r, a) {
        var h = e.queryIdentifier(),
            c = s.safeGet(this.Be, h);if (!c) {
          var p = n.calcCompleteEventCache(a ? r : null),
              d = !1;p ? d = !0 : r instanceof o.ChildrenNode ? (p = n.calcCompleteEventChildren(r), d = !1) : (p = o.ChildrenNode.EMPTY_NODE, d = !1);var f = new u.ViewCache(new i.CacheNode(p, d, !1), new i.CacheNode(r, a, !1));c = new l.View(e, f), this.Be[h] = c;
        }return c.addEventRegistration(t), c.getInitialEvents(t);
      }, e.prototype.removeEventRegistration = function (t, n, r) {
        var i = t.queryIdentifier(),
            o = [],
            a = [],
            u = this.hasCompleteView();if ("default" === i) {
          var l = this;s.forEach(this.Be, function (e, t) {
            a = a.concat(t.removeEventRegistration(n, r)), t.isEmpty() && (delete l.Be[e], t.getQuery().getQueryParams().loadsAllData() || o.push(t.getQuery()));
          });
        } else {
          var h = s.safeGet(this.Be, i);h && (a = a.concat(h.removeEventRegistration(n, r)), h.isEmpty() && (delete this.Be[i], h.getQuery().getQueryParams().loadsAllData() || o.push(h.getQuery())));
        }return u && !this.hasCompleteView() && o.push(new e.__referenceConstructor(t.repo, t.path)), { removed: o, events: a };
      }, e.prototype.getQueryViews = function () {
        var e = this;return Object.keys(this.Be).map(function (t) {
          return e.Be[t];
        }).filter(function (e) {
          return !e.getQuery().getQueryParams().loadsAllData();
        });
      }, e.prototype.getCompleteServerCache = function (e) {
        var t = null;return s.forEach(this.Be, function (n, r) {
          t = t || r.getCompleteServerCache(e);
        }), t;
      }, e.prototype.viewForQuery = function (e) {
        if (e.getQueryParams().loadsAllData()) return this.getCompleteView();var t = e.queryIdentifier();return s.safeGet(this.Be, t);
      }, e.prototype.viewExistsForQuery = function (e) {
        return null != this.viewForQuery(e);
      }, e.prototype.hasCompleteView = function () {
        return null != this.getCompleteView();
      }, e.prototype.getCompleteView = function () {
        return s.findValue(this.Be, function (e) {
          return e.getQuery().getQueryParams().loadsAllData();
        }) || null;
      }, e;
    }();t.SyncPoint = h;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(5),
        i = n(20),
        o = function () {
      function e(e, t) {
        this.He = e, this.Ge = t;
      }return e.prototype.updateEventSnap = function (t, n, r) {
        return new e(new i.CacheNode(t, n, r), this.Ge);
      }, e.prototype.updateServerSnap = function (t, n, r) {
        return new e(this.He, new i.CacheNode(t, n, r));
      }, e.prototype.getEventCache = function () {
        return this.He;
      }, e.prototype.getCompleteEventSnap = function () {
        return this.He.isFullyInitialized() ? this.He.getNode() : null;
      }, e.prototype.getServerCache = function () {
        return this.Ge;
      }, e.prototype.getCompleteServerSnap = function () {
        return this.Ge.isFullyInitialized() ? this.Ge.getNode() : null;
      }, e.Empty = new e(new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1), new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1)), e;
    }();t.ViewCache = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e(e) {
        this.Ke = e, this.Ye = null;
      }return e.prototype.get = function () {
        var e = this.Ke.get(),
            t = r.clone(e);return this.Ye && r.forEach(this.Ye, function (e, n) {
          t[e] = t[e] - n;
        }), this.Ye = e, t;
      }, e;
    }();t.StatsListener = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(7),
        o = n(0),
        a = n(0),
        s = n(0),
        u = n(1),
        l = n(3),
        h = n(104),
        c = n(105),
        p = n(0),
        d = n(54),
        f = n(0),
        _ = n(0),
        y = n(57),
        v = 1e3,
        g = 3e5,
        m = function (e) {
      function t(n, r, i, o, a, s) {
        var l = e.call(this) || this;if (l.H = n, l.ee = r, l.te = i, l.ne = o, l.Xe = a, l.ze = s, l.id = t.Je++, l.de = u.logWrapper("p:" + l.id + ":"), l.$e = {}, l.Ze = {}, l.et = [], l.tt = 0, l.nt = [], l.rt = !1, l.it = v, l.ot = g, l.at = null, l.lastSessionId = null, l.st = null, l.ut = !1, l.lt = {}, l.ht = 0, l.ct = null, l.pt = null, l.dt = !1, l.ft = 0, l._t = !0, l.yt = null, l.vt = null, s && !_.isNodeSdk()) throw Error("Auth override specified in options, but not supported on non Node.js platforms");return l.gt(0), h.VisibilityMonitor.getInstance().on("visible", l.mt, l), -1 === n.host.indexOf("fblocal") && c.OnlineMonitor.getInstance().on("online", l.Ct, l), l;
      }return r.__extends(t, e), t.prototype.sendRequest = function (e, t, n) {
        var r = ++this.ht,
            i = { r: r, a: e, b: t };this.de(a.stringify(i)), s.assert(this.rt, "sendRequest call when we're not connected not allowed."), this.ct.sendRequest(i), n && (this.lt[r] = n);
      }, t.prototype.listen = function (e, t, n, r) {
        var i = e.queryIdentifier(),
            o = "" + e.path;this.de("Listen called for " + o + " " + i), this.Ze[o] = this.Ze[o] || {}, s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), s.assert(!this.Ze[o][i], "listen() called twice for same path/queryId.");var a = { onComplete: r, hashFn: t, query: e, tag: n };this.Ze[o][i] = a, this.rt && this.Et(a);
      }, t.prototype.Et = function (e) {
        var n = this,
            r = e.query,
            i = "" + r.path,
            o = r.queryIdentifier();this.de("Listen on " + i + " for " + o);var a = { p: i };e.tag && (a.q = r.queryObject(), a.t = e.tag), a.h = e.hashFn(), this.sendRequest("q", a, function (a) {
          var s = a.d,
              u = a.s;t.Nt(s, r), (n.Ze[i] && n.Ze[i][o]) === e && (n.de("listen response", a), "ok" !== u && n.Pt(i, o), e.onComplete && e.onComplete(u, s));
        });
      }, t.Nt = function (e, t) {
        if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && o.contains(e, "w")) {
          var n = o.safeGet(e, "w");if (Array.isArray(n) && ~n.indexOf("no_index")) {
            var r = '".indexOn": "' + t.getQueryParams().getIndex() + '"',
                i = "" + t.path;u.warn("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.");
          }
        }
      }, t.prototype.refreshAuthToken = function (e) {
        this.pt = e, this.de("Auth token refreshed"), this.pt ? this.tryAuth() : this.rt && this.sendRequest("unauth", {}, function () {}), this.St(e);
      }, t.prototype.St = function (e) {
        (e && 40 === e.length || p.isAdmin(e)) && (this.de("Admin auth credential detected.  Reducing max reconnect time."), this.ot = 3e4);
      }, t.prototype.tryAuth = function () {
        var e = this;if (this.rt && this.pt) {
          var t = this.pt,
              n = p.isValidFormat(t) ? "auth" : "gauth",
              r = { cred: t };null === this.ze ? r.noauth = !0 : "object" == _typeof(this.ze) && (r.authvar = this.ze), this.sendRequest(n, r, function (n) {
            var r = n.s,
                i = n.d || "error";e.pt === t && ("ok" === r ? e.ft = 0 : e.bt(r, i));
          });
        }
      }, t.prototype.unlisten = function (e, t) {
        var n = "" + e.path,
            r = e.queryIdentifier();this.de("Unlisten called for " + n + " " + r), s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.Pt(n, r) && this.rt && this.Tt(n, r, e.queryObject(), t);
      }, t.prototype.Tt = function (e, t, n, r) {
        this.de("Unlisten on " + e + " for " + t);var i = { p: e };r && (i.q = n, i.t = r), this.sendRequest("n", i);
      }, t.prototype.onDisconnectPut = function (e, t, n) {
        this.rt ? this.It("o", e, t, n) : this.nt.push({ pathString: e, action: "o", data: t, onComplete: n });
      }, t.prototype.onDisconnectMerge = function (e, t, n) {
        this.rt ? this.It("om", e, t, n) : this.nt.push({ pathString: e, action: "om", data: t, onComplete: n });
      }, t.prototype.onDisconnectCancel = function (e, t) {
        this.rt ? this.It("oc", e, null, t) : this.nt.push({ pathString: e, action: "oc", data: null, onComplete: t });
      }, t.prototype.It = function (e, t, n, r) {
        var i = { p: t, d: n };this.de("onDisconnect " + e, i), this.sendRequest(e, i, function (e) {
          r && setTimeout(function () {
            r(e.s, e.d);
          }, Math.floor(0));
        });
      }, t.prototype.put = function (e, t, n, r) {
        this.putInternal("p", e, t, n, r);
      }, t.prototype.merge = function (e, t, n, r) {
        this.putInternal("m", e, t, n, r);
      }, t.prototype.putInternal = function (e, t, n, r, i) {
        var o = { p: t, d: n };void 0 !== i && (o.h = i), this.et.push({ action: e, request: o, onComplete: r }), this.tt++;var a = this.et.length - 1;this.rt ? this.Rt(a) : this.de("Buffering put: " + t);
      }, t.prototype.Rt = function (e) {
        var t = this,
            n = this.et[e].action,
            r = this.et[e].request,
            i = this.et[e].onComplete;this.et[e].queued = this.rt, this.sendRequest(n, r, function (r) {
          t.de(n + " response", r), delete t.et[e], t.tt--, 0 === t.tt && (t.et = []), i && i(r.s, r.d);
        });
      }, t.prototype.reportStats = function (e) {
        var t = this;if (this.rt) {
          var n = { c: e };this.de("reportStats", n), this.sendRequest("s", n, function (e) {
            if ("ok" !== e.s) {
              var n = e.d;t.de("reportStats", "Error sending stats: " + n);
            }
          });
        }
      }, t.prototype.wt = function (e) {
        if ("r" in e) {
          this.de("from server: " + a.stringify(e));var t = e.r,
              n = this.lt[t];n && (delete this.lt[t], n(e.b));
        } else {
          if ("error" in e) throw "A server-side error has occurred: " + e.error;"a" in e && this.Ot(e.a, e.b);
        }
      }, t.prototype.Ot = function (e, t) {
        this.de("handleServerMessage", e, t), "d" === e ? this.ee(t.p, t.d, !1, t.t) : "m" === e ? this.ee(t.p, t.d, !0, t.t) : "c" === e ? this.At(t.p, t.q) : "ac" === e ? this.bt(t.s, t.d) : "sd" === e ? this.Dt(t) : u.error("Unrecognized action received from server: " + a.stringify(e) + "\nAre you using the latest client?");
      }, t.prototype.Mt = function (e, t) {
        this.de("connection ready"), this.rt = !0, this.vt = new Date().getTime(), this.Lt(e), this.lastSessionId = t, this._t && this.Ft(), this.xt(), this._t = !1, this.te(!0);
      }, t.prototype.gt = function (e) {
        var t = this;s.assert(!this.ct, "Scheduling a connect when we're already connected/ing?"), this.st && clearTimeout(this.st), this.st = setTimeout(function () {
          t.st = null, t.kt();
        }, Math.floor(e));
      }, t.prototype.mt = function (e) {
        e && !this.ut && this.it === this.ot && (this.de("Window became visible.  Reducing delay."), this.it = v, this.ct || this.gt(0)), this.ut = e;
      }, t.prototype.Ct = function (e) {
        e ? (this.de("Browser went online."), this.it = v, this.ct || this.gt(0)) : (this.de("Browser went offline.  Killing connection."), this.ct && this.ct.close());
      }, t.prototype.Wt = function () {
        if (this.de("data client disconnected"), this.rt = !1, this.ct = null, this.Vt(), this.lt = {}, this.Qt()) {
          if (this.ut) {
            if (this.vt) {
              var e = new Date().getTime() - this.vt;e > 3e4 && (this.it = v), this.vt = null;
            }
          } else this.de("Window isn't visible.  Delaying reconnect."), this.it = this.ot, this.yt = new Date().getTime();var t = new Date().getTime() - this.yt,
              n = Math.max(0, this.it - t);n = Math.random() * n, this.de("Trying to reconnect in " + n + "ms"), this.gt(n), this.it = Math.min(this.ot, 1.3 * this.it);
        }this.te(!1);
      }, t.prototype.kt = function () {
        if (this.Qt()) {
          this.de("Making a connection attempt"), this.yt = new Date().getTime(), this.vt = null;var e = this.wt.bind(this),
              n = this.Mt.bind(this),
              r = this.Wt.bind(this),
              i = this.id + ":" + t.qt++,
              o = this,
              a = this.lastSessionId,
              l = !1,
              h = null,
              c = function c() {
            h ? h.close() : (l = !0, r());
          },
              p = function p(e) {
            s.assert(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e);
          };this.ct = { close: c, sendRequest: p };var _ = this.dt;this.dt = !1, this.Xe.getToken(_).then(function (t) {
            l ? u.log("getToken() completed but was canceled") : (u.log("getToken() completed. Creating connection."), o.pt = t && t.accessToken, h = new d.Connection(i, o.H, e, n, r, function (e) {
              u.warn(e + " (" + o.H + ")"), o.interrupt("server_kill");
            }, a));
          }).then(null, function (e) {
            o.de("Failed to get token: " + e), l || (f.CONSTANTS.NODE_ADMIN && u.warn(e), c());
          });
        }
      }, t.prototype.interrupt = function (e) {
        u.log("Interrupting connection for reason: " + e), this.$e[e] = !0, this.ct ? this.ct.close() : (this.st && (clearTimeout(this.st), this.st = null), this.rt && this.Wt());
      }, t.prototype.resume = function (e) {
        u.log("Resuming connection for reason: " + e), delete this.$e[e], o.isEmpty(this.$e) && (this.it = v, this.ct || this.gt(0));
      }, t.prototype.Lt = function (e) {
        var t = e - new Date().getTime();this.ne({ serverTimeOffset: t });
      }, t.prototype.Vt = function () {
        for (var e = 0; e < this.et.length; e++) {
          var t = this.et[e];t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.et[e], this.tt--);
        }0 === this.tt && (this.et = []);
      }, t.prototype.At = function (e, t) {
        var n;n = t ? t.map(function (e) {
          return u.ObjectToUniqueKey(e);
        }).join("$") : "default";var r = this.Pt(e, n);r && r.onComplete && r.onComplete("permission_denied");
      }, t.prototype.Pt = function (e, t) {
        var n,
            r = "" + new l.Path(e);return void 0 !== this.Ze[r] ? (n = this.Ze[r][t], delete this.Ze[r][t], 0 === o.getCount(this.Ze[r]) && delete this.Ze[r]) : n = void 0, n;
      }, t.prototype.bt = function (e, t) {
        u.log("Auth token revoked: " + e + "/" + t), this.pt = null, this.dt = !0, this.ct.close(), "invalid_token" !== e && "permission_denied" !== e || ++this.ft >= 3 && (this.it = 3e4, this.Xe.notifyForInvalidToken());
      }, t.prototype.Dt = function (e) {
        this.at ? this.at(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
      }, t.prototype.xt = function () {
        var e = this;this.tryAuth(), o.forEach(this.Ze, function (t, n) {
          o.forEach(n, function (t, n) {
            e.Et(n);
          });
        });for (var t = 0; t < this.et.length; t++) {
          this.et[t] && this.Rt(t);
        }for (; this.nt.length;) {
          var n = this.nt.shift();this.It(n.action, n.pathString, n.data, n.onComplete);
        }
      }, t.prototype.Ft = function () {
        var e = {},
            t = "js";f.CONSTANTS.NODE_ADMIN ? t = "admin_node" : f.CONSTANTS.NODE_CLIENT && (t = "node"), e["sdk." + t + "." + i.default.SDK_VERSION.replace(/\./g, "-")] = 1, _.isMobileCordova() ? e["framework.cordova"] = 1 : _.isReactNative() && (e["framework.reactnative"] = 1), this.reportStats(e);
      }, t.prototype.Qt = function () {
        var e = c.OnlineMonitor.getInstance().currentlyOnline();return o.isEmpty(this.$e) && e;
      }, t.Je = 0, t.qt = 0, t;
    }(y.ServerActions);t.PersistentConnection = m;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e(e) {
        this.jt = e, this.Ut = {}, r.assert(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
      }return e.prototype.trigger = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }if (Array.isArray(this.Ut[e])) for (var r = this.Ut[e].slice(), i = 0; i < r.length; i++) {
          r[i].callback.apply(r[i].context, t);
        }
      }, e.prototype.on = function (e, t, n) {
        this.Bt(e), this.Ut[e] = this.Ut[e] || [], this.Ut[e].push({ callback: t, context: n });var r = this.getInitialEvent(e);r && t.apply(n, r);
      }, e.prototype.off = function (e, t, n) {
        this.Bt(e);for (var r = this.Ut[e] || [], i = 0; i < r.length; i++) {
          if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1);
        }
      }, e.prototype.Bt = function (e) {
        r.assert(this.jt.find(function (t) {
          return t === e;
        }), "Unknown event: " + e);
      }, e;
    }();t.EventEmitter = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = n(14),
        o = n(15),
        a = n(106),
        s = function () {
      function e(e, t, n, i, o, s, u) {
        this.id = e, this.H = t, this.Ht = n, this.Mt = i, this.z = o, this.Gt = s, this.lastSessionId = u, this.connectionCount = 0, this.pendingDataMessages = [], this.Kt = 0, this.de = r.logWrapper("c:" + this.id + ":"), this.Yt = new a.TransportManager(t), this.de("Connection created"), this.Xt();
      }return e.prototype.Xt = function () {
        var e = this,
            t = this.Yt.initialTransport();this.zt = new t(this.Jt(), this.H, void 0, this.lastSessionId), this.$t = t.responsesRequiredToBeHealthy || 0;var n = this.Zt(this.zt),
            i = this.en(this.zt);this.tn = this.zt, this.nn = this.zt, this.rn = null, this.in = !1, setTimeout(function () {
          e.zt && e.zt.open(n, i);
        }, Math.floor(0));var o = t.healthyTimeout || 0;o > 0 && (this.an = r.setTimeoutNonBlocking(function () {
          e.an = null, e.in || (e.zt && e.zt.bytesReceived > 102400 ? (e.de("Connection exceeded healthy timeout but has received " + e.zt.bytesReceived + " bytes.  Marking connection healthy."), e.in = !0, e.zt.markConnectionHealthy()) : e.zt && e.zt.bytesSent > 10240 ? e.de("Connection exceeded healthy timeout but has sent " + e.zt.bytesSent + " bytes.  Leaving connection alive.") : (e.de("Closing unhealthy connection after timeout."), e.close()));
        }, Math.floor(o)));
      }, e.prototype.Jt = function () {
        return "c:" + this.id + ":" + this.connectionCount++;
      }, e.prototype.en = function (e) {
        var t = this;return function (n) {
          e === t.zt ? t.sn(n) : e === t.rn ? (t.de("Secondary connection lost."), t.un()) : t.de("closing an old connection");
        };
      }, e.prototype.Zt = function (e) {
        var t = this;return function (n) {
          2 != t.Kt && (e === t.nn ? t.ln(n) : e === t.rn ? t.hn(n) : t.de("message on old connection"));
        };
      }, e.prototype.sendRequest = function (e) {
        var t = { t: "d", d: e };this.cn(t);
      }, e.prototype.tryCleanupConnection = function () {
        this.tn === this.rn && this.nn === this.rn && (this.de("cleaning up and promoting a connection: " + this.rn.connId), this.zt = this.rn, this.rn = null);
      }, e.prototype.pn = function (e) {
        if ("t" in e) {
          var t = e.t;"a" === t ? this.dn() : "r" === t ? (this.de("Got a reset on secondary, closing it"), this.rn.close(), this.tn !== this.rn && this.nn !== this.rn || this.close()) : "o" === t && (this.de("got pong on secondary."), this.fn--, this.dn());
        }
      }, e.prototype.hn = function (e) {
        var t = r.requireKey("t", e),
            n = r.requireKey("d", e);if ("c" == t) this.pn(n);else {
          if ("d" != t) throw Error("Unknown protocol layer: " + t);this.pendingDataMessages.push(n);
        }
      }, e.prototype.dn = function () {
        this.fn <= 0 ? (this.de("Secondary connection is healthy."), this.in = !0, this.rn.markConnectionHealthy(), this._n()) : (this.de("sending ping on secondary."), this.rn.send({ t: "c", d: { t: "p", d: {} } }));
      }, e.prototype._n = function () {
        this.rn.start(), this.de("sending client ack on secondary"), this.rn.send({ t: "c", d: { t: "a", d: {} } }), this.de("Ending transmission on primary"), this.zt.send({ t: "c", d: { t: "n", d: {} } }), this.tn = this.rn, this.tryCleanupConnection();
      }, e.prototype.ln = function (e) {
        var t = r.requireKey("t", e),
            n = r.requireKey("d", e);"c" == t ? this.yn(n) : "d" == t && this.wt(n);
      }, e.prototype.wt = function (e) {
        this.vn(), this.Ht(e);
      }, e.prototype.vn = function () {
        this.in || --this.$t <= 0 && (this.de("Primary connection is healthy."), this.in = !0, this.zt.markConnectionHealthy());
      }, e.prototype.yn = function (e) {
        var t = r.requireKey("t", e);if ("d" in e) {
          var n = e.d;if ("h" === t) this.gn(n);else if ("n" === t) {
            this.de("recvd end transmission on primary"), this.nn = this.rn;for (var i = 0; i < this.pendingDataMessages.length; ++i) {
              this.wt(this.pendingDataMessages[i]);
            }this.pendingDataMessages = [], this.tryCleanupConnection();
          } else "s" === t ? this.mn(n) : "r" === t ? this.Cn(n) : "e" === t ? r.error("Server Error: " + n) : "o" === t ? (this.de("got pong on primary."), this.vn(), this.En()) : r.error("Unknown control packet command: " + t);
        }
      }, e.prototype.gn = function (e) {
        var t = e.ts,
            n = e.v,
            i = e.h;this.sessionId = e.s, this.H.updateHost(i), 0 == this.Kt && (this.zt.start(), this.Nn(this.zt, t), o.PROTOCOL_VERSION !== n && r.warn("Protocol version mismatch detected"), this.Pn());
      }, e.prototype.Pn = function () {
        var e = this.Yt.upgradeTransport();e && this.Sn(e);
      }, e.prototype.Sn = function (e) {
        var t = this;this.rn = new e(this.Jt(), this.H, this.sessionId), this.fn = e.responsesRequiredToBeHealthy || 0;var n = this.Zt(this.rn),
            i = this.en(this.rn);this.rn.open(n, i), r.setTimeoutNonBlocking(function () {
          t.rn && (t.de("Timed out trying to upgrade."), t.rn.close());
        }, Math.floor(6e4));
      }, e.prototype.Cn = function (e) {
        this.de("Reset packet received.  New host: " + e), this.H.updateHost(e), 1 === this.Kt ? this.close() : (this.bn(), this.Xt());
      }, e.prototype.Nn = function (e, t) {
        var n = this;this.de("Realtime connection established."), this.zt = e, this.Kt = 1, this.Mt && (this.Mt(t, this.sessionId), this.Mt = null), 0 === this.$t ? (this.de("Primary connection is healthy."), this.in = !0) : r.setTimeoutNonBlocking(function () {
          n.En();
        }, Math.floor(5e3));
      }, e.prototype.En = function () {
        this.in || 1 !== this.Kt || (this.de("sending ping on primary."), this.cn({ t: "c", d: { t: "p", d: {} } }));
      }, e.prototype.un = function () {
        var e = this.rn;this.rn = null, this.tn !== e && this.nn !== e || this.close();
      }, e.prototype.sn = function (e) {
        this.zt = null, e || 0 !== this.Kt ? 1 === this.Kt && this.de("Realtime connection lost.") : (this.de("Realtime connection failed."), this.H.isCacheableHost() && (i.PersistentStorage.remove("host:" + this.H.host), this.H.internalHost = this.H.host)), this.close();
      }, e.prototype.mn = function (e) {
        this.de("Connection shutdown command received. Shutting down..."), this.Gt && (this.Gt(e), this.Gt = null), this.z = null, this.close();
      }, e.prototype.cn = function (e) {
        if (1 !== this.Kt) throw "Connection is not connected";this.tn.send(e);
      }, e.prototype.close = function () {
        2 !== this.Kt && (this.de("Closing realtime connection."), this.Kt = 2, this.bn(), this.z && (this.z(), this.z = null));
      }, e.prototype.bn = function () {
        this.de("Shutting down all connections"), this.zt && (this.zt.close(), this.zt = null), this.rn && (this.rn.close(), this.rn = null), this.an && (clearTimeout(this.an), this.an = null);
      }, e;
    }();t.Connection = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = n(47),
        o = n(27),
        a = n(107),
        s = n(15),
        u = n(0),
        l = n(0);t.FIREBASE_LONGPOLL_START_PARAM = "start", t.FIREBASE_LONGPOLL_CLOSE_COMMAND = "close", t.FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand", t.FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB", t.FIREBASE_LONGPOLL_ID_PARAM = "id", t.FIREBASE_LONGPOLL_PW_PARAM = "pw", t.FIREBASE_LONGPOLL_SERIAL_PARAM = "ser", t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb", t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg", t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts", t.FIREBASE_LONGPOLL_DATA_PARAM = "d", t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = "disconn", t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";var h = function () {
      function e(e, t, n, i) {
        this.connId = e, this.repoInfo = t, this.transportSessionId = n, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.Tn = !1, this.de = r.logWrapper(e), this.$ = o.StatsManager.getCollection(t), this.urlFn = function (e) {
          return t.connectionURL(s.LONG_POLLING, e);
        };
      }return e.prototype.open = function (e, n) {
        var i = this;this.curSegmentNum = 0, this.z = n, this.myPacketOrderer = new a.PacketReceiver(e), this.In = !1, this.Rn = setTimeout(function () {
          i.de("Timed out trying to connect."), i.wn(), i.Rn = null;
        }, Math.floor(3e4)), r.executeWhenDOMReady(function () {
          if (!i.In) {
            i.scriptTagHolder = new c(function () {
              for (var e = [], n = 0; n < arguments.length; n++) {
                e[n] = arguments[n];
              }var r = e[0],
                  o = e[1],
                  a = e[2];if (e[3], e[4], i.On(e), i.scriptTagHolder) if (i.Rn && (clearTimeout(i.Rn), i.Rn = null), i.Tn = !0, r == t.FIREBASE_LONGPOLL_START_PARAM) i.id = o, i.password = a;else {
                if (r !== t.FIREBASE_LONGPOLL_CLOSE_COMMAND) throw Error("Unrecognized command received: " + r);o ? (i.scriptTagHolder.sendNewPolls = !1, i.myPacketOrderer.closeAfter(o, function () {
                  i.wn();
                })) : i.wn();
              }
            }, function () {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }var n = e[0],
                  r = e[1];i.On(e), i.myPacketOrderer.handleResponse(n, r);
            }, function () {
              i.wn();
            }, i.urlFn);var e = {};e[t.FIREBASE_LONGPOLL_START_PARAM] = "t", e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(1e8 * Math.random()), i.scriptTagHolder.uniqueCallbackIdentifier && (e[t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = i.scriptTagHolder.uniqueCallbackIdentifier), e[s.VERSION_PARAM] = s.PROTOCOL_VERSION, i.transportSessionId && (e[s.TRANSPORT_SESSION_PARAM] = i.transportSessionId), i.lastSessionId && (e[s.LAST_SESSION_PARAM] = i.lastSessionId), !l.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(s.FORGE_DOMAIN) && (e[s.REFERER_PARAM] = s.FORGE_REF);var n = i.urlFn(e);i.de("Connecting via long-poll to " + n), i.scriptTagHolder.addTag(n, function () {});
          }
        });
      }, e.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password);
      }, e.forceAllow = function () {
        e.An = !0;
      }, e.forceDisallow = function () {
        e.Dn = !0;
      }, e.isAvailable = function () {
        return e.An || !e.Dn && "undefined" != typeof document && null != document.createElement && !r.isChromeExtensionContentScript() && !r.isWindowsStoreApp() && !l.isNodeSdk();
      }, e.prototype.markConnectionHealthy = function () {}, e.prototype.Mn = function () {
        this.In = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.Rn && (clearTimeout(this.Rn), this.Rn = null);
      }, e.prototype.wn = function () {
        this.In || (this.de("Longpoll is closing itself"), this.Mn(), this.z && (this.z(this.Tn), this.z = null));
      }, e.prototype.close = function () {
        this.In || (this.de("Longpoll is being closed."), this.Mn());
      }, e.prototype.send = function (e) {
        var t = u.stringify(e);this.bytesSent += t.length, this.$.incrementCounter("bytes_sent", t.length);for (var n = u.base64Encode(t), i = r.splitStringBySize(n, 1840), o = 0; o < i.length; o++) {
          this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++;
        }
      }, e.prototype.addDisconnectPingFrame = function (e, n) {
        if (!l.isNodeSdk()) {
          this.myDisconnFrame = document.createElement("iframe");var r = {};r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = e, r[t.FIREBASE_LONGPOLL_PW_PARAM] = n, this.myDisconnFrame.src = this.urlFn(r), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
        }
      }, e.prototype.On = function (e) {
        var t = u.stringify(e).length;this.bytesReceived += t, this.$.incrementCounter("bytes_received", t);
      }, e;
    }();t.BrowserPollConnection = h;var c = function () {
      function e(n, o, a, s) {
        if (this.onDisconnect = a, this.urlFn = s, this.outstandingRequests = new i.CountedSet(), this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, l.isNodeSdk()) this.commandCB = n, this.onMessageCB = o;else {
          this.uniqueCallbackIdentifier = r.LUIDGenerator(), window[t.FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = n, window[t.FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = o, this.myIFrame = e.Ln();var u = "";this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, 11) && (u = '<script>document.domain="' + document.domain + '";<\/script>');var h = "<html><body>" + u + "</body></html>";try {
            this.myIFrame.doc.open(), this.myIFrame.doc.write(h), this.myIFrame.doc.close();
          } catch (e) {
            r.log("frame writing exception"), e.stack && r.log(e.stack), r.log(e);
          }
        }
      }return e.Ln = function () {
        var e = document.createElement("iframe");if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try {
          e.contentWindow.document || r.log("No IE domain setting required");
        } catch (n) {
          var t = document.domain;e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())";
        }return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e;
      }, e.prototype.close = function () {
        var n = this;if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function () {
          null !== n.myIFrame && (document.body.removeChild(n.myIFrame), n.myIFrame = null);
        }, Math.floor(0))), l.isNodeSdk() && this.myID) {
          var r = {};r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, r[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;var i = this.urlFn(r);e.nodeRestRequest(i);
        }var o = this.onDisconnect;o && (this.onDisconnect = null, o());
      }, e.prototype.startLongPoll = function (e, t) {
        for (this.myID = e, this.myPW = t, this.alive = !0; this.Fn();) {}
      }, e.prototype.Fn = function () {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
          this.currentSerial++;var e = {};e[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, e[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW, e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;for (var n = this.urlFn(e), r = "", i = 0; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + 30 + r.length <= 1870;) {
            var o = this.pendingSegs.shift();r = r + "&" + t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + o.seg + "&" + t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + o.ts + "&" + t.FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + o.d, i++;
          }return n += r, this.xn(n, this.currentSerial), !0;
        }return !1;
      }, e.prototype.enqueueSegment = function (e, t, n) {
        this.pendingSegs.push({ seg: e, ts: t, d: n }), this.alive && this.Fn();
      }, e.prototype.xn = function (e, t) {
        var n = this;this.outstandingRequests.add(t, 1);var r = function r() {
          n.outstandingRequests.remove(t), n.Fn();
        },
            i = setTimeout(r, Math.floor(25e3)),
            o = function o() {
          clearTimeout(i), r();
        };this.addTag(e, o);
      }, e.prototype.addTag = function (e, t) {
        var n = this;l.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(function () {
          try {
            if (!n.sendNewPolls) return;var i = n.myIFrame.doc.createElement("script");i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function () {
              var e = i.readyState;e && "loaded" !== e && "complete" !== e || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), t());
            }, i.onerror = function () {
              r.log("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close();
            }, n.myIFrame.doc.body.appendChild(i);
          } catch (e) {}
        }, Math.floor(1));
      }, e;
    }();t.FirebaseIFrameScriptHolder = c;
  }, function (e, t, n) {
    "use strict";
    (function (e) {
      function r(e) {
        d = e;
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(7),
          o = n(0),
          a = n(1),
          s = n(27),
          u = n(15),
          l = n(0),
          h = n(14),
          c = n(0),
          p = n(0),
          d = null;"undefined" != typeof MozWebSocket ? d = MozWebSocket : "undefined" != typeof WebSocket && (d = WebSocket), t.setWebSocketImpl = r;var f = function () {
        function t(e, n, r, i) {
          this.connId = e, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.de = a.logWrapper(this.connId), this.$ = s.StatsManager.getCollection(n), this.connURL = t.kn(n, r, i);
        }return t.kn = function (e, t, n) {
          var r = {};return r[u.VERSION_PARAM] = u.PROTOCOL_VERSION, !p.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(u.FORGE_DOMAIN) && (r[u.REFERER_PARAM] = u.FORGE_REF), t && (r[u.TRANSPORT_SESSION_PARAM] = t), n && (r[u.LAST_SESSION_PARAM] = n), e.connectionURL(u.WEBSOCKET, r);
        }, t.prototype.open = function (t, n) {
          var r = this;this.onDisconnect = n, this.onMessage = t, this.de("Websocket connecting to " + this.connURL), this.Tn = !1, h.PersistentStorage.set("previous_websocket_failure", !0);try {
            if (p.isNodeSdk()) {
              var o = l.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
                  a = { headers: { "User-Agent": "Firebase/" + u.PROTOCOL_VERSION + "/" + i.default.SDK_VERSION + "/" + e.platform + "/" + o } },
                  s = e.env,
                  c = 0 == this.connURL.indexOf("wss://") ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;c && (a.proxy = { origin: c }), this.mySock = new d(this.connURL, [], a);
            } else this.mySock = new d(this.connURL);
          } catch (e) {
            this.de("Error instantiating WebSocket.");var f = e.message || e.data;return f && this.de(f), void this.wn();
          }this.mySock.onopen = function () {
            r.de("Websocket connected."), r.Tn = !0;
          }, this.mySock.onclose = function () {
            r.de("Websocket connection was disconnected."), r.mySock = null, r.wn();
          }, this.mySock.onmessage = function (e) {
            r.handleIncomingFrame(e);
          }, this.mySock.onerror = function (e) {
            r.de("WebSocket error.  Closing connection.");var t = e.message || e.data;t && r.de(t), r.wn();
          };
        }, t.prototype.start = function () {}, t.forceDisallow = function () {
          t.Dn = !0;
        }, t.isAvailable = function () {
          var e = !1;if ("undefined" != typeof navigator && navigator.userAgent) {
            var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
                r = navigator.userAgent.match(n);r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0);
          }return !e && null !== d && !t.Dn;
        }, t.previouslyFailed = function () {
          return h.PersistentStorage.isInMemoryStorage || !0 === h.PersistentStorage.get("previous_websocket_failure");
        }, t.prototype.markConnectionHealthy = function () {
          h.PersistentStorage.remove("previous_websocket_failure");
        }, t.prototype.Wn = function (e) {
          if (this.frames.push(e), this.frames.length == this.totalFrames) {
            var t = this.frames.join("");this.frames = null;var n = c.jsonEval(t);this.onMessage(n);
          }
        }, t.prototype.Vn = function (e) {
          this.totalFrames = e, this.frames = [];
        }, t.prototype.Qn = function (e) {
          if (o.assert(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
            var t = +e;if (!isNaN(t)) return this.Vn(t), null;
          }return this.Vn(1), e;
        }, t.prototype.handleIncomingFrame = function (e) {
          if (null !== this.mySock) {
            var t = e.data;if (this.bytesReceived += t.length, this.$.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.Wn(t);else {
              var n = this.Qn(t);null !== n && this.Wn(n);
            }
          }
        }, t.prototype.send = function (e) {
          this.resetKeepAlive();var t = c.stringify(e);this.bytesSent += t.length, this.$.incrementCounter("bytes_sent", t.length);var n = a.splitStringBySize(t, 16384);n.length > 1 && this.qn(n.length + "");for (var r = 0; r < n.length; r++) {
            this.qn(n[r]);
          }
        }, t.prototype.Mn = function () {
          this.In = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null);
        }, t.prototype.wn = function () {
          this.In || (this.de("WebSocket is closing itself"), this.Mn(), this.onDisconnect && (this.onDisconnect(this.Tn), this.onDisconnect = null));
        }, t.prototype.close = function () {
          this.In || (this.de("WebSocket is being closed"), this.Mn());
        }, t.prototype.resetKeepAlive = function () {
          var e = this;clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function () {
            e.mySock && e.qn("0"), e.resetKeepAlive();
          }, Math.floor(45e3));
        }, t.prototype.qn = function (e) {
          try {
            this.mySock.send(e);
          } catch (e) {
            this.de("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.wn.bind(this), 0);
          }
        }, t.responsesRequiredToBeHealthy = 2, t.healthyTimeout = 3e4, t;
      }();t.WebSocketConnection = f;
    }).call(t, n(29));
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e() {}return e.prototype.put = function (e, t, n, r) {}, e.prototype.merge = function (e, t, n, r) {}, e.prototype.refreshAuthToken = function (e) {}, e.prototype.onDisconnectPut = function (e, t, n) {}, e.prototype.onDisconnectMerge = function (e, t, n) {}, e.prototype.onDisconnectCancel = function (e, t) {}, e.prototype.reportStats = function (e) {}, e;
    }();t.ServerActions = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(26),
        i = n(4),
        o = n(6),
        a = n(5),
        s = function () {
      function e(t) {
        this.jn = new r.IndexedFilter(t.getIndex()), this.Ee = t.getIndex(), this.Un = e.Bn(t), this.Hn = e.Gn(t);
      }return e.prototype.getStartPost = function () {
        return this.Un;
      }, e.prototype.getEndPost = function () {
        return this.Hn;
      }, e.prototype.matches = function (e) {
        return this.Ee.compare(this.getStartPost(), e) <= 0 && this.Ee.compare(e, this.getEndPost()) <= 0;
      }, e.prototype.updateChild = function (e, t, n, r, i, s) {
        return this.matches(new o.NamedNode(t, n)) || (n = a.ChildrenNode.EMPTY_NODE), this.jn.updateChild(e, t, n, r, i, s);
      }, e.prototype.updateFullNode = function (e, t, n) {
        t.isLeafNode() && (t = a.ChildrenNode.EMPTY_NODE);var r = t.withIndex(this.Ee);r = r.updatePriority(a.ChildrenNode.EMPTY_NODE);var s = this;return t.forEachChild(i.PRIORITY_INDEX, function (e, t) {
          s.matches(new o.NamedNode(e, t)) || (r = r.updateImmediateChild(e, a.ChildrenNode.EMPTY_NODE));
        }), this.jn.updateFullNode(e, r, n);
      }, e.prototype.updatePriority = function (e, t) {
        return e;
      }, e.prototype.filtersNodes = function () {
        return !0;
      }, e.prototype.getIndexedFilter = function () {
        return this.jn;
      }, e.prototype.getIndex = function () {
        return this.Ee;
      }, e.Bn = function (e) {
        if (e.hasStart()) {
          var t = e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(), t);
        }return e.getIndex().minPost();
      }, e.Gn = function (e) {
        if (e.hasEnd()) {
          var t = e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(), t);
        }return e.getIndex().maxPost();
      }, e;
    }();t.RangedFilter = s;
  },,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
    e.exports = n(81);
  }, function (e, t, n) {
    "use strict";
    function r(t) {
      var n = t.INTERNAL.registerService("database", function (e, t, n) {
        return l.RepoManager.getInstance().databaseFromApp(e, n);
      }, { Reference: s.Reference, Query: a.Query, Database: o.Database, enableLogging: u.enableLogging, INTERNAL: h, ServerValue: d, TEST_ACCESS: c }, null, !0);p.isNodeSdk() && (e.exports = n);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(7),
        o = n(34);t.Database = o.Database;var a = n(38);t.Query = a.Query;var s = n(23);t.Reference = s.Reference;var u = n(1);t.enableLogging = u.enableLogging;var l = n(28),
        h = n(113),
        c = n(114),
        p = n(0),
        d = o.Database.ServerValue;t.ServerValue = d, t.registerDatabase = r, r(i.default);var f = n(24);t.DataSnapshot = f.DataSnapshot;var _ = n(37);t.OnDisconnect = _.OnDisconnect;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e(e) {
        this.Kn = e, this.Yn = "firebase:";
      }return e.prototype.set = function (e, t) {
        null == t ? this.Kn.removeItem(this.Xn(e)) : this.Kn.setItem(this.Xn(e), r.stringify(t));
      }, e.prototype.get = function (e) {
        var t = this.Kn.getItem(this.Xn(e));return null == t ? null : r.jsonEval(t);
      }, e.prototype.remove = function (e) {
        this.Kn.removeItem(this.Xn(e));
      }, e.prototype.Xn = function (e) {
        return this.Yn + e;
      }, e.prototype.toString = function () {
        return "" + this.Kn;
      }, e;
    }();t.DOMStorageWrapper = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e() {
        this.zn = {}, this.isInMemoryStorage = !0;
      }return e.prototype.set = function (e, t) {
        null == t ? delete this.zn[e] : this.zn[e] = t;
      }, e.prototype.get = function (e) {
        return r.contains(this.zn, e) ? this.zn[e] : null;
      }, e.prototype.remove = function (e) {
        delete this.zn[e];
      }, e;
    }();t.MemoryStorage = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e(e, t) {
        this.committed = e, this.snapshot = t;
      }return e.prototype.toJSON = function () {
        return r.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length), { committed: this.committed, snapshot: this.snapshot.toJSON() };
      }, e;
    }();t.TransactionResult = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0);t.nextPushId = function () {
      var e = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
          t = 0,
          n = [];return function (i) {
        var o = i === t;t = i;var a,
            s = Array(8);for (a = 7; a >= 0; a--) {
          s[a] = e.charAt(i % 64), i = Math.floor(i / 64);
        }r.assert(0 === i, "Cannot push at time == 0");var u = s.join("");if (o) {
          for (a = 11; a >= 0 && 63 === n[a]; a--) {
            n[a] = 0;
          }n[a]++;
        } else for (a = 0; a < 12; a++) {
          n[a] = Math.floor(64 * Math.random());
        }for (a = 0; a < 12; a++) {
          u += e.charAt(n[a]);
        }return r.assert(20 === u.length, "nextPushId: Length should be 20."), u;
      };
    }();
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(24),
        i = n(87),
        o = n(0),
        a = n(0),
        s = function () {
      function e(e, t, n) {
        this.Jn = e, this.$n = t, this.Zn = n;
      }return e.prototype.respondsTo = function (e) {
        return "value" === e;
      }, e.prototype.createEvent = function (e, t) {
        var n = t.getQueryParams().getIndex();return new i.DataEvent("value", this, new r.DataSnapshot(e.snapshotNode, t.getRef(), n));
      }, e.prototype.getEventRunner = function (e) {
        var t = this.Zn;if ("cancel" === e.getEventType()) {
          a.assert(this.$n, "Raising a cancel event on a listener with no cancel callback");var n = this.$n;return function () {
            n.call(t, e.error);
          };
        }var r = this.Jn;return function () {
          r.call(t, e.snapshot);
        };
      }, e.prototype.createCancelEvent = function (e, t) {
        return this.$n ? new i.CancelEvent(this, e, t) : null;
      }, e.prototype.matches = function (t) {
        return t instanceof e && (!t.Jn || !this.Jn || t.Jn === this.Jn && t.Zn === this.Zn);
      }, e.prototype.hasAnyCallback = function () {
        return null !== this.Jn;
      }, e;
    }();t.ValueEventRegistration = s;var u = function () {
      function e(e, t, n) {
        this.er = e, this.$n = t, this.Zn = n;
      }return e.prototype.respondsTo = function (e) {
        var t = "children_added" === e ? "child_added" : e;return t = "children_removed" === t ? "child_removed" : t, o.contains(this.er, t);
      }, e.prototype.createCancelEvent = function (e, t) {
        return this.$n ? new i.CancelEvent(this, e, t) : null;
      }, e.prototype.createEvent = function (e, t) {
        a.assert(null != e.childName, "Child events should have a childName.");var n = t.getRef().child(e.childName),
            o = t.getQueryParams().getIndex();return new i.DataEvent(e.type, this, new r.DataSnapshot(e.snapshotNode, n, o), e.prevName);
      }, e.prototype.getEventRunner = function (e) {
        var t = this.Zn;if ("cancel" === e.getEventType()) {
          a.assert(this.$n, "Raising a cancel event on a listener with no cancel callback");var n = this.$n;return function () {
            n.call(t, e.error);
          };
        }var r = this.er[e.eventType];return function () {
          r.call(t, e.snapshot, e.prevName);
        };
      }, e.prototype.matches = function (t) {
        if (t instanceof e) {
          if (!this.er || !t.er) return !0;if (this.Zn === t.Zn) {
            var n = o.getCount(t.er);if (n === o.getCount(this.er)) {
              if (1 === n) {
                var r = o.getAnyKey(t.er),
                    i = o.getAnyKey(this.er);return !(i !== r || t.er[r] && this.er[i] && t.er[r] !== this.er[i]);
              }return o.every(this.er, function (e, n) {
                return t.er[e] === n;
              });
            }
          }
        }return !1;
      }, e.prototype.hasAnyCallback = function () {
        return null !== this.er;
      }, e;
    }();t.ChildEventRegistration = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = function () {
      function e(e, t, n, r) {
        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r;
      }return e.prototype.getPath = function () {
        var e = this.snapshot.getRef();return "value" === this.eventType ? e.path : e.getParent().path;
      }, e.prototype.getEventType = function () {
        return this.eventType;
      }, e.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, e.prototype.toString = function () {
        return this.getPath() + ":" + this.eventType + ":" + r.stringify(this.snapshot.exportVal());
      }, e;
    }();t.DataEvent = i;var o = function () {
      function e(e, t, n) {
        this.eventRegistration = e, this.error = t, this.path = n;
      }return e.prototype.getPath = function () {
        return this.path;
      }, e.prototype.getEventType = function () {
        return "cancel";
      }, e.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, e.prototype.toString = function () {
        return this.path + ":cancel";
      }, e;
    }();t.CancelEvent = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(1),
        o = n(89),
        a = n(5),
        s = n(0),
        u = n(25),
        l = n(90),
        h = n(91),
        c = n(9),
        p = n(48),
        d = n(3),
        f = n(49),
        _ = n(97),
        y = function () {
      function e(e) {
        this.tr = e, this.nr = u.ImmutableTree.Empty, this.rr = new _.WriteTree(), this.ir = {}, this.or = {};
      }return e.prototype.applyUserOverwrite = function (e, t, n, r) {
        return this.rr.addOverwrite(e, t, n, r), r ? this.ar(new p.Overwrite(c.OperationSource.User, e, t)) : [];
      }, e.prototype.applyUserMerge = function (e, t, n) {
        this.rr.addMerge(e, t, n);var r = u.ImmutableTree.fromObject(t);return this.ar(new h.Merge(c.OperationSource.User, e, r));
      }, e.prototype.ackUserWrite = function (e, t) {
        void 0 === t && (t = !1);var n = this.rr.getWrite(e);if (this.rr.removeWrite(e)) {
          var r = u.ImmutableTree.Empty;return null != n.snap ? r = r.set(d.Path.Empty, !0) : s.forEach(n.children, function (e, t) {
            r = r.set(new d.Path(e), t);
          }), this.ar(new o.AckUserWrite(n.path, r, t));
        }return [];
      }, e.prototype.applyServerOverwrite = function (e, t) {
        return this.ar(new p.Overwrite(c.OperationSource.Server, e, t));
      }, e.prototype.applyServerMerge = function (e, t) {
        var n = u.ImmutableTree.fromObject(t);return this.ar(new h.Merge(c.OperationSource.Server, e, n));
      }, e.prototype.applyListenComplete = function (e) {
        return this.ar(new l.ListenComplete(c.OperationSource.Server, e));
      }, e.prototype.applyTaggedQueryOverwrite = function (t, n, r) {
        var i = this.sr(r);if (null != i) {
          var o = e.ur(i),
              a = o.path,
              s = o.queryId,
              u = d.Path.relativePath(a, t),
              l = new p.Overwrite(c.OperationSource.forServerTaggedQuery(s), u, n);return this.lr(a, l);
        }return [];
      }, e.prototype.applyTaggedQueryMerge = function (t, n, r) {
        var i = this.sr(r);if (i) {
          var o = e.ur(i),
              a = o.path,
              s = o.queryId,
              l = d.Path.relativePath(a, t),
              p = u.ImmutableTree.fromObject(n),
              f = new h.Merge(c.OperationSource.forServerTaggedQuery(s), l, p);return this.lr(a, f);
        }return [];
      }, e.prototype.applyTaggedListenComplete = function (t, n) {
        var r = this.sr(n);if (r) {
          var i = e.ur(r),
              o = i.path,
              a = i.queryId,
              s = d.Path.relativePath(o, t),
              u = new l.ListenComplete(c.OperationSource.forServerTaggedQuery(a), s);return this.lr(o, u);
        }return [];
      }, e.prototype.addEventRegistration = function (t, n) {
        var i = t.path,
            o = null,
            s = !1;this.nr.foreachOnPath(i, function (e, t) {
          var n = d.Path.relativePath(e, i);o = o || t.getCompleteServerCache(n), s = s || t.hasCompleteView();
        });var u = this.nr.get(i);u ? (s = s || u.hasCompleteView(), o = o || u.getCompleteServerCache(d.Path.Empty)) : (u = new f.SyncPoint(), this.nr = this.nr.set(i, u));var l;null != o ? l = !0 : (l = !1, o = a.ChildrenNode.EMPTY_NODE, this.nr.subtree(i).foreachChild(function (e, t) {
          var n = t.getCompleteServerCache(d.Path.Empty);n && (o = o.updateImmediateChild(e, n));
        }));var h = u.viewExistsForQuery(t);if (!h && !t.getQueryParams().loadsAllData()) {
          var c = e.hr(t);r.assert(!(c in this.or), "View does not exist, but we have a tag");var p = e.cr();this.or[c] = p, this.ir["_" + p] = c;
        }var _ = this.rr.childWrites(i),
            y = u.addEventRegistration(t, n, _, o, l);if (!h && !s) {
          var v = u.viewForQuery(t);y = y.concat(this.pr(t, v));
        }return y;
      }, e.prototype.removeEventRegistration = function (t, n, r) {
        var i = this,
            o = t.path,
            a = this.nr.get(o),
            s = [];if (a && ("default" === t.queryIdentifier() || a.viewExistsForQuery(t))) {
          var u = a.removeEventRegistration(t, n, r);a.isEmpty() && (this.nr = this.nr.remove(o));var l = u.removed;s = u.events;var h = -1 !== l.findIndex(function (e) {
            return e.getQueryParams().loadsAllData();
          }),
              c = this.nr.findOnPath(o, function (e, t) {
            return t.hasCompleteView();
          });if (h && !c) {
            var p = this.nr.subtree(o);if (!p.isEmpty()) for (var d = this.dr(p), f = 0; f < d.length; ++f) {
              var _ = d[f],
                  y = _.getQuery(),
                  v = this.fr(_);this.tr.startListening(e._r(y), this.yr(y), v.hashFn, v.onComplete);
            }
          }!c && l.length > 0 && !r && (h ? this.tr.stopListening(e._r(t), null) : l.forEach(function (t) {
            var n = i.or[e.hr(t)];i.tr.stopListening(e._r(t), n);
          })), this.vr(l);
        }return s;
      }, e.prototype.calcCompleteEventCache = function (e, t) {
        var n = this.rr,
            r = this.nr.findOnPath(e, function (t, n) {
          var r = d.Path.relativePath(t, e),
              i = n.getCompleteServerCache(r);if (i) return i;
        });return n.calcCompleteEventCache(e, r, t, !0);
      }, e.prototype.dr = function (e) {
        return e.fold(function (e, t, n) {
          if (t && t.hasCompleteView()) return [t.getCompleteView()];var r = [];return t && (r = t.getQueryViews()), s.forEach(n, function (e, t) {
            r = r.concat(t);
          }), r;
        });
      }, e.prototype.vr = function (t) {
        for (var n = 0; n < t.length; ++n) {
          var r = t[n];if (!r.getQueryParams().loadsAllData()) {
            var i = e.hr(r),
                o = this.or[i];delete this.or[i], delete this.ir["_" + o];
          }
        }
      }, e._r = function (e) {
        return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e;
      }, e.prototype.pr = function (t, n) {
        var i = t.path,
            o = this.yr(t),
            a = this.fr(n),
            u = this.tr.startListening(e._r(t), o, a.hashFn, a.onComplete),
            l = this.nr.subtree(i);if (o) r.assert(!l.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");else for (var h = l.fold(function (e, t, n) {
          if (!e.isEmpty() && t && t.hasCompleteView()) return [t.getCompleteView().getQuery()];var r = [];return t && (r = r.concat(t.getQueryViews().map(function (e) {
            return e.getQuery();
          }))), s.forEach(n, function (e, t) {
            r = r.concat(t);
          }), r;
        }), c = 0; c < h.length; ++c) {
          var p = h[c];this.tr.stopListening(e._r(p), this.yr(p));
        }return u;
      }, e.prototype.fr = function (e) {
        var t = this,
            n = e.getQuery(),
            r = this.yr(n);return { hashFn: function hashFn() {
            return (e.getServerCache() || a.ChildrenNode.EMPTY_NODE).hash();
          }, onComplete: function onComplete(e) {
            if ("ok" === e) return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path);var o = i.errorForServerCode(e, n);return t.removeEventRegistration(n, null, o);
          } };
      }, e.hr = function (e) {
        return e.path + "$" + e.queryIdentifier();
      }, e.ur = function (e) {
        var t = e.indexOf("$");return r.assert(-1 !== t && t < e.length - 1, "Bad queryKey."), { queryId: e.substr(t + 1), path: new d.Path(e.substr(0, t)) };
      }, e.prototype.sr = function (e) {
        return this.ir["_" + e];
      }, e.prototype.yr = function (t) {
        var n = e.hr(t);return s.safeGet(this.or, n);
      }, e.cr = function () {
        return e.gr++;
      }, e.prototype.lr = function (e, t) {
        var n = this.nr.get(e);r.assert(n, "Missing sync point for query tag that we're tracking");var i = this.rr.childWrites(e);return n.applyOperation(t, i, null);
      }, e.prototype.ar = function (e) {
        return this.mr(e, this.nr, null, this.rr.childWrites(d.Path.Empty));
      }, e.prototype.mr = function (e, t, n, r) {
        if (e.path.isEmpty()) return this.Cr(e, t, n, r);var i = t.get(d.Path.Empty);null == n && null != i && (n = i.getCompleteServerCache(d.Path.Empty));var o = [],
            a = e.path.getFront(),
            s = e.operationForChild(a),
            u = t.children.get(a);if (u && s) {
          var l = n ? n.getImmediateChild(a) : null,
              h = r.child(a);o = o.concat(this.mr(s, u, l, h));
        }return i && (o = o.concat(i.applyOperation(e, r, n))), o;
      }, e.prototype.Cr = function (e, t, n, r) {
        var i = this,
            o = t.get(d.Path.Empty);null == n && null != o && (n = o.getCompleteServerCache(d.Path.Empty));var a = [];return t.children.inorderTraversal(function (t, o) {
          var s = n ? n.getImmediateChild(t) : null,
              u = r.child(t),
              l = e.operationForChild(t);l && (a = a.concat(i.Cr(l, o, s, u)));
        }), o && (a = a.concat(o.applyOperation(e, r, n))), a;
      }, e.gr = 1, e;
    }();t.SyncTree = y;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(3),
        o = n(9),
        a = function () {
      function e(e, t, n) {
        this.path = e, this.affectedTree = t, this.revert = n, this.type = o.OperationType.ACK_USER_WRITE, this.source = o.OperationSource.User;
      }return e.prototype.operationForChild = function (t) {
        if (this.path.isEmpty()) {
          if (null != this.affectedTree.value) return r.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;var n = this.affectedTree.subtree(new i.Path(t));return new e(i.Path.Empty, n, this.revert);
        }return r.assert(this.path.getFront() === t, "operationForChild called for unrelated child."), new e(this.path.popFront(), this.affectedTree, this.revert);
      }, e;
    }();t.AckUserWrite = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(3),
        i = n(9),
        o = function () {
      function e(e, t) {
        this.source = e, this.path = t, this.type = i.OperationType.LISTEN_COMPLETE;
      }return e.prototype.operationForChild = function (t) {
        return this.path.isEmpty() ? new e(this.source, r.Path.Empty) : new e(this.source, this.path.popFront());
      }, e;
    }();t.ListenComplete = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(9),
        i = n(48),
        o = n(3),
        a = n(0),
        s = function () {
      function e(e, t, n) {
        this.source = e, this.path = t, this.children = n, this.type = r.OperationType.MERGE;
      }return e.prototype.operationForChild = function (t) {
        if (this.path.isEmpty()) {
          var n = this.children.subtree(new o.Path(t));return n.isEmpty() ? null : n.value ? new i.Overwrite(this.source, o.Path.Empty, n.value) : new e(this.source, o.Path.Empty, n);
        }return a.assert(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, this.path.popFront(), this.children);
      }, e.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source + " merge: " + this.children + ")";
      }, e;
    }();t.Merge = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(26),
        i = n(93),
        o = n(5),
        a = n(20),
        s = n(50),
        u = n(96),
        l = n(0),
        h = n(9),
        c = n(10),
        p = n(4),
        d = function () {
      function e(e, t) {
        this.Er = e, this.Nr = [];var n = this.Er.getQueryParams(),
            l = new r.IndexedFilter(n.getIndex()),
            h = n.getNodeFilter();this.Pr = new i.ViewProcessor(h);var c = t.getServerCache(),
            p = t.getEventCache(),
            d = l.updateFullNode(o.ChildrenNode.EMPTY_NODE, c.getNode(), null),
            f = h.updateFullNode(o.ChildrenNode.EMPTY_NODE, p.getNode(), null),
            _ = new a.CacheNode(d, c.isFullyInitialized(), l.filtersNodes()),
            y = new a.CacheNode(f, p.isFullyInitialized(), h.filtersNodes());this.Sr = new s.ViewCache(y, _), this.br = new u.EventGenerator(this.Er);
      }return e.prototype.getQuery = function () {
        return this.Er;
      }, e.prototype.getServerCache = function () {
        return this.Sr.getServerCache().getNode();
      }, e.prototype.getCompleteServerCache = function (e) {
        var t = this.Sr.getCompleteServerSnap();return t && (this.Er.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null;
      }, e.prototype.isEmpty = function () {
        return 0 === this.Nr.length;
      }, e.prototype.addEventRegistration = function (e) {
        this.Nr.push(e);
      }, e.prototype.removeEventRegistration = function (e, t) {
        var n = [];if (t) {
          l.assert(null == e, "A cancel should cancel all event registrations.");var r = this.Er.path;this.Nr.forEach(function (e) {
            t = t;var i = e.createCancelEvent(t, r);i && n.push(i);
          });
        }if (e) {
          for (var i = [], o = 0; o < this.Nr.length; ++o) {
            var a = this.Nr[o];if (a.matches(e)) {
              if (e.hasAnyCallback()) {
                i = i.concat(this.Nr.slice(o + 1));break;
              }
            } else i.push(a);
          }this.Nr = i;
        } else this.Nr = [];return n;
      }, e.prototype.applyOperation = function (e, t, n) {
        e.type === h.OperationType.MERGE && null !== e.source.queryId && (l.assert(this.Sr.getCompleteServerSnap(), "We should always have a full cache before handling merges"), l.assert(this.Sr.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));var r = this.Sr,
            i = this.Pr.applyOperation(r, e, t, n);return this.Pr.assertIndexed(i.viewCache), l.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.Sr = i.viewCache, this.Tr(i.changes, i.viewCache.getEventCache().getNode(), null);
      }, e.prototype.getInitialEvents = function (e) {
        var t = this.Sr.getEventCache(),
            n = [];return t.getNode().isLeafNode() || t.getNode().forEachChild(p.PRIORITY_INDEX, function (e, t) {
          n.push(c.Change.childAddedChange(e, t));
        }), t.isFullyInitialized() && n.push(c.Change.valueChange(t.getNode())), this.Tr(n, t.getNode(), e);
      }, e.prototype.Tr = function (e, t, n) {
        var r = n ? [n] : this.Nr;return this.br.generateEventsForChanges(e, t, r);
      }, e;
    }();t.View = d;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(9),
        i = n(0),
        o = n(94),
        a = n(10),
        s = n(5),
        u = n(12),
        l = n(25),
        h = n(3),
        c = n(95),
        p = function () {
      function e(e, t) {
        this.viewCache = e, this.changes = t;
      }return e;
    }();t.ProcessorResult = p;var d = function () {
      function e(e) {
        this.Ir = e;
      }return e.prototype.assertIndexed = function (e) {
        i.assert(e.getEventCache().getNode().isIndexed(this.Ir.getIndex()), "Event snap not indexed"), i.assert(e.getServerCache().getNode().isIndexed(this.Ir.getIndex()), "Server snap not indexed");
      }, e.prototype.applyOperation = function (t, n, a, s) {
        var u,
            l,
            h = new o.ChildChangeAccumulator();if (n.type === r.OperationType.OVERWRITE) {
          var c = n;c.source.fromUser ? u = this.Rr(t, c.path, c.snap, a, s, h) : (i.assert(c.source.fromServer, "Unknown source."), l = c.source.tagged || t.getServerCache().isFiltered() && !c.path.isEmpty(), u = this.wr(t, c.path, c.snap, a, s, l, h));
        } else if (n.type === r.OperationType.MERGE) {
          var d = n;d.source.fromUser ? u = this.Or(t, d.path, d.children, a, s, h) : (i.assert(d.source.fromServer, "Unknown source."), l = d.source.tagged || t.getServerCache().isFiltered(), u = this.Ar(t, d.path, d.children, a, s, l, h));
        } else if (n.type === r.OperationType.ACK_USER_WRITE) {
          var f = n;u = f.revert ? this.Dr(t, f.path, a, s, h) : this.Mr(t, f.path, f.affectedTree, a, s, h);
        } else {
          if (n.type !== r.OperationType.LISTEN_COMPLETE) throw i.assertionError("Unknown operation type: " + n.type);u = this.Lr(t, n.path, a, h);
        }var _ = h.getChanges();return e.Fr(t, u, _), new p(u, _);
      }, e.Fr = function (e, t, n) {
        var r = t.getEventCache();if (r.isFullyInitialized()) {
          var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
              o = e.getCompleteEventSnap();(n.length > 0 || !e.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(a.Change.valueChange(t.getCompleteEventSnap()));
        }
      }, e.prototype.xr = function (e, t, n, r, o) {
        var a = e.getEventCache();if (null != n.shadowingWrite(t)) return e;var u = void 0,
            l = void 0;if (t.isEmpty()) {
          if (i.assert(e.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), e.getServerCache().isFiltered()) {
            var h = e.getCompleteServerSnap(),
                c = h instanceof s.ChildrenNode ? h : s.ChildrenNode.EMPTY_NODE,
                p = n.calcCompleteEventChildren(c);u = this.Ir.updateFullNode(e.getEventCache().getNode(), p, o);
          } else {
            var d = n.calcCompleteEventCache(e.getCompleteServerSnap());u = this.Ir.updateFullNode(e.getEventCache().getNode(), d, o);
          }
        } else {
          var f = t.getFront();if (".priority" == f) {
            i.assert(1 == t.getLength(), "Can't have a priority with additional path components");var _ = a.getNode();l = e.getServerCache().getNode();var y = n.calcEventCacheAfterServerOverwrite(t, _, l);u = null != y ? this.Ir.updatePriority(_, y) : a.getNode();
          } else {
            var v = t.popFront(),
                g = void 0;if (a.isCompleteForChild(f)) {
              l = e.getServerCache().getNode();var m = n.calcEventCacheAfterServerOverwrite(t, a.getNode(), l);g = null != m ? a.getNode().getImmediateChild(f).updateChild(v, m) : a.getNode().getImmediateChild(f);
            } else g = n.calcCompleteChild(f, e.getServerCache());u = null != g ? this.Ir.updateChild(a.getNode(), f, g, v, r, o) : a.getNode();
          }
        }return e.updateEventSnap(u, a.isFullyInitialized() || t.isEmpty(), this.Ir.filtersNodes());
      }, e.prototype.wr = function (e, t, n, r, i, o, a) {
        var s,
            u = e.getServerCache(),
            l = o ? this.Ir : this.Ir.getIndexedFilter();if (t.isEmpty()) s = l.updateFullNode(u.getNode(), n, null);else if (l.filtersNodes() && !u.isFiltered()) {
          var h = u.getNode().updateChild(t, n);s = l.updateFullNode(u.getNode(), h, null);
        } else {
          var p = t.getFront();if (!u.isCompleteForPath(t) && t.getLength() > 1) return e;var d = t.popFront(),
              f = u.getNode().getImmediateChild(p),
              _ = f.updateChild(d, n);s = ".priority" == p ? l.updatePriority(u.getNode(), _) : l.updateChild(u.getNode(), p, _, d, c.NO_COMPLETE_CHILD_SOURCE, null);
        }var y = e.updateServerSnap(s, u.isFullyInitialized() || t.isEmpty(), l.filtersNodes()),
            v = new c.WriteTreeCompleteChildSource(r, y, i);return this.xr(y, t, r, v, a);
      }, e.prototype.Rr = function (e, t, n, r, i, o) {
        var a,
            u,
            l = e.getEventCache(),
            h = new c.WriteTreeCompleteChildSource(r, e, i);if (t.isEmpty()) u = this.Ir.updateFullNode(e.getEventCache().getNode(), n, o), a = e.updateEventSnap(u, !0, this.Ir.filtersNodes());else {
          var p = t.getFront();if (".priority" === p) u = this.Ir.updatePriority(e.getEventCache().getNode(), n), a = e.updateEventSnap(u, l.isFullyInitialized(), l.isFiltered());else {
            var d = t.popFront(),
                f = l.getNode().getImmediateChild(p),
                _ = void 0;if (d.isEmpty()) _ = n;else {
              var y = h.getCompleteChild(p);_ = null != y ? ".priority" === d.getBack() && y.getChild(d.parent()).isEmpty() ? y : y.updateChild(d, n) : s.ChildrenNode.EMPTY_NODE;
            }if (f.equals(_)) a = e;else {
              var v = this.Ir.updateChild(l.getNode(), p, _, d, h, o);a = e.updateEventSnap(v, l.isFullyInitialized(), this.Ir.filtersNodes());
            }
          }
        }return a;
      }, e.kr = function (e, t) {
        return e.getEventCache().isCompleteForChild(t);
      }, e.prototype.Or = function (t, n, r, i, o, a) {
        var s = this,
            u = t;return r.foreach(function (r, l) {
          var h = n.child(r);e.kr(t, h.getFront()) && (u = s.Rr(u, h, l, i, o, a));
        }), r.foreach(function (r, l) {
          var h = n.child(r);e.kr(t, h.getFront()) || (u = s.Rr(u, h, l, i, o, a));
        }), u;
      }, e.prototype.Wr = function (e, t) {
        return t.foreach(function (t, n) {
          e = e.updateChild(t, n);
        }), e;
      }, e.prototype.Ar = function (e, t, n, r, i, o, a) {
        var s = this;if (e.getServerCache().getNode().isEmpty() && !e.getServerCache().isFullyInitialized()) return e;var u,
            c = e;u = t.isEmpty() ? n : l.ImmutableTree.Empty.setTree(t, n);var p = e.getServerCache().getNode();return u.children.inorderTraversal(function (t, n) {
          if (p.hasChild(t)) {
            var u = e.getServerCache().getNode().getImmediateChild(t),
                l = s.Wr(u, n);c = s.wr(c, new h.Path(t), l, r, i, o, a);
          }
        }), u.children.inorderTraversal(function (t, n) {
          var u = !e.getServerCache().isCompleteForChild(t) && null == n.value;if (!p.hasChild(t) && !u) {
            var l = e.getServerCache().getNode().getImmediateChild(t),
                d = s.Wr(l, n);c = s.wr(c, new h.Path(t), d, r, i, o, a);
          }
        }), c;
      }, e.prototype.Mr = function (e, t, n, r, i, o) {
        if (null != r.shadowingWrite(t)) return e;var a = e.getServerCache().isFiltered(),
            s = e.getServerCache();if (null != n.value) {
          if (t.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(t)) return this.wr(e, t, s.getNode().getChild(t), r, i, a, o);if (t.isEmpty()) {
            var c = l.ImmutableTree.Empty;return s.getNode().forEachChild(u.KEY_INDEX, function (e, t) {
              c = c.set(new h.Path(e), t);
            }), this.Ar(e, t, c, r, i, a, o);
          }return e;
        }var p = l.ImmutableTree.Empty;return n.foreach(function (e, n) {
          var r = t.child(e);s.isCompleteForPath(r) && (p = p.set(e, s.getNode().getChild(r)));
        }), this.Ar(e, t, p, r, i, a, o);
      }, e.prototype.Lr = function (e, t, n, r) {
        var i = e.getServerCache(),
            o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() || t.isEmpty(), i.isFiltered());return this.xr(o, t, n, c.NO_COMPLETE_CHILD_SOURCE, r);
      }, e.prototype.Dr = function (e, t, n, r, o) {
        var a;if (null != n.shadowingWrite(t)) return e;var u = new c.WriteTreeCompleteChildSource(n, e, r),
            l = e.getEventCache().getNode(),
            p = void 0;if (t.isEmpty() || ".priority" === t.getFront()) {
          var d = void 0;if (e.getServerCache().isFullyInitialized()) d = n.calcCompleteEventCache(e.getCompleteServerSnap());else {
            var f = e.getServerCache().getNode();i.assert(f instanceof s.ChildrenNode, "serverChildren would be complete if leaf node"), d = n.calcCompleteEventChildren(f);
          }d = d, p = this.Ir.updateFullNode(l, d, o);
        } else {
          var _ = t.getFront(),
              y = n.calcCompleteChild(_, e.getServerCache());null == y && e.getServerCache().isCompleteForChild(_) && (y = l.getImmediateChild(_)), p = null != y ? this.Ir.updateChild(l, _, y, t.popFront(), u, o) : e.getEventCache().getNode().hasChild(_) ? this.Ir.updateChild(l, _, s.ChildrenNode.EMPTY_NODE, t.popFront(), u, o) : l, p.isEmpty() && e.getServerCache().isFullyInitialized() && (a = n.calcCompleteEventCache(e.getCompleteServerSnap()), a.isLeafNode() && (p = this.Ir.updateFullNode(p, a, o)));
        }return a = e.getServerCache().isFullyInitialized() || null != n.shadowingWrite(h.Path.Empty), e.updateEventSnap(p, a, this.Ir.filtersNodes());
      }, e;
    }();t.ViewProcessor = d;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(10),
        o = n(0),
        a = function () {
      function e() {
        this.Vr = {};
      }return e.prototype.trackChildChange = function (e) {
        var t = e.type,
            n = e.childName;o.assert(t == i.Change.CHILD_ADDED || t == i.Change.CHILD_CHANGED || t == i.Change.CHILD_REMOVED, "Only child changes supported for tracking"), o.assert(".priority" !== n, "Only non-priority child changes can be tracked.");var a = r.safeGet(this.Vr, n);if (a) {
          var s = a.type;if (t == i.Change.CHILD_ADDED && s == i.Change.CHILD_REMOVED) this.Vr[n] = i.Change.childChangedChange(n, e.snapshotNode, a.snapshotNode);else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_ADDED) delete this.Vr[n];else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_CHANGED) this.Vr[n] = i.Change.childRemovedChange(n, a.oldSnap);else if (t == i.Change.CHILD_CHANGED && s == i.Change.CHILD_ADDED) this.Vr[n] = i.Change.childAddedChange(n, e.snapshotNode);else {
            if (t != i.Change.CHILD_CHANGED || s != i.Change.CHILD_CHANGED) throw o.assertionError("Illegal combination of changes: " + e + " occurred after " + a);this.Vr[n] = i.Change.childChangedChange(n, e.snapshotNode, a.oldSnap);
          }
        } else this.Vr[n] = e;
      }, e.prototype.getChanges = function () {
        return r.getValues(this.Vr);
      }, e;
    }();t.ChildChangeAccumulator = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(20),
        i = function () {
      function e() {}return e.prototype.getCompleteChild = function (e) {
        return null;
      }, e.prototype.getChildAfterChild = function (e, t, n) {
        return null;
      }, e;
    }();t.Qr = i, t.NO_COMPLETE_CHILD_SOURCE = new i();var o = function () {
      function e(e, t, n) {
        void 0 === n && (n = null), this.qr = e, this.Sr = t, this.jr = n;
      }return e.prototype.getCompleteChild = function (e) {
        var t = this.Sr.getEventCache();if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);var n = null != this.jr ? new r.CacheNode(this.jr, !0, !1) : this.Sr.getServerCache();return this.qr.calcCompleteChild(e, n);
      }, e.prototype.getChildAfterChild = function (e, t, n) {
        var r = null != this.jr ? this.jr : this.Sr.getCompleteServerSnap(),
            i = this.qr.calcIndexedSlice(r, t, 1, n, e);return 0 === i.length ? null : i[0];
      }, e;
    }();t.WriteTreeCompleteChildSource = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(6),
        i = n(10),
        o = n(0),
        a = function () {
      function e(e) {
        this.Er = e, this.Ee = this.Er.getQueryParams().getIndex();
      }return e.prototype.generateEventsForChanges = function (e, t, n) {
        var r = this,
            o = [],
            a = [];return e.forEach(function (e) {
          e.type === i.Change.CHILD_CHANGED && r.Ee.indexedValueChanged(e.oldSnap, e.snapshotNode) && a.push(i.Change.childMovedChange(e.childName, e.snapshotNode));
        }), this.Ur(o, i.Change.CHILD_REMOVED, e, n, t), this.Ur(o, i.Change.CHILD_ADDED, e, n, t), this.Ur(o, i.Change.CHILD_MOVED, a, n, t), this.Ur(o, i.Change.CHILD_CHANGED, e, n, t), this.Ur(o, i.Change.VALUE, e, n, t), o;
      }, e.prototype.Ur = function (e, t, n, r, i) {
        var o = this,
            a = n.filter(function (e) {
          return e.type === t;
        });a.sort(this.Br.bind(this)), a.forEach(function (t) {
          var n = o.Hr(t, i);r.forEach(function (r) {
            r.respondsTo(t.type) && e.push(r.createEvent(n, o.Er));
          });
        });
      }, e.prototype.Hr = function (e, t) {
        return "value" === e.type || "child_removed" === e.type ? e : (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.Ee), e);
      }, e.prototype.Br = function (e, t) {
        if (null == e.childName || null == t.childName) throw o.assertionError("Should only compare child_ events.");var n = new r.NamedNode(e.childName, e.snapshotNode),
            i = new r.NamedNode(t.childName, t.snapshotNode);return this.Ee.compare(n, i);
      }, e;
    }();t.EventGenerator = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(0),
        o = n(3),
        a = n(98),
        s = n(4),
        u = n(5),
        l = function () {
      function e() {
        this.Gr = a.CompoundWrite.Empty, this.Kr = [], this.Yr = -1;
      }return e.prototype.childWrites = function (e) {
        return new h(e, this);
      }, e.prototype.addOverwrite = function (e, t, n, r) {
        i.assert(n > this.Yr, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.Kr.push({ path: e, snap: t, writeId: n, visible: r }), r && (this.Gr = this.Gr.addWrite(e, t)), this.Yr = n;
      }, e.prototype.addMerge = function (e, t, n) {
        i.assert(n > this.Yr, "Stacking an older merge on top of newer ones"), this.Kr.push({ path: e, children: t, writeId: n, visible: !0 }), this.Gr = this.Gr.addWrites(e, t), this.Yr = n;
      }, e.prototype.getWrite = function (e) {
        for (var t = 0; t < this.Kr.length; t++) {
          var n = this.Kr[t];if (n.writeId === e) return n;
        }return null;
      }, e.prototype.removeWrite = function (e) {
        var t = this,
            n = this.Kr.findIndex(function (t) {
          return t.writeId === e;
        });i.assert(n >= 0, "removeWrite called with nonexistent writeId.");var o = this.Kr[n];this.Kr.splice(n, 1);for (var a = o.visible, s = !1, u = this.Kr.length - 1; a && u >= 0;) {
          var l = this.Kr[u];l.visible && (u >= n && this.Xr(l, o.path) ? a = !1 : o.path.contains(l.path) && (s = !0)), u--;
        }if (a) {
          if (s) return this.zr(), !0;if (o.snap) this.Gr = this.Gr.removeWrite(o.path);else {
            var h = o.children;r.forEach(h, function (e) {
              t.Gr = t.Gr.removeWrite(o.path.child(e));
            });
          }return !0;
        }return !1;
      }, e.prototype.getCompleteWriteData = function (e) {
        return this.Gr.getCompleteNode(e);
      }, e.prototype.calcCompleteEventCache = function (t, n, r, i) {
        if (r || i) {
          var a = this.Gr.childCompoundWrite(t);if (!i && a.isEmpty()) return n;if (i || null != n || a.hasCompleteWrite(o.Path.Empty)) {
            var s = function s(e) {
              return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path));
            },
                l = e.Jr(this.Kr, s, t),
                h = n || u.ChildrenNode.EMPTY_NODE;return l.apply(h);
          }return null;
        }var c = this.Gr.getCompleteNode(t);if (null != c) return c;var p = this.Gr.childCompoundWrite(t);if (p.isEmpty()) return n;if (null != n || p.hasCompleteWrite(o.Path.Empty)) {
          var h = n || u.ChildrenNode.EMPTY_NODE;return p.apply(h);
        }return null;
      }, e.prototype.calcCompleteEventChildren = function (e, t) {
        var n = u.ChildrenNode.EMPTY_NODE,
            r = this.Gr.getCompleteNode(e);if (r) return r.isLeafNode() || r.forEachChild(s.PRIORITY_INDEX, function (e, t) {
          n = n.updateImmediateChild(e, t);
        }), n;if (t) {
          var i = this.Gr.childCompoundWrite(e);return t.forEachChild(s.PRIORITY_INDEX, function (e, t) {
            var r = i.childCompoundWrite(new o.Path(e)).apply(t);n = n.updateImmediateChild(e, r);
          }), i.getCompleteChildren().forEach(function (e) {
            n = n.updateImmediateChild(e.name, e.node);
          }), n;
        }return this.Gr.childCompoundWrite(e).getCompleteChildren().forEach(function (e) {
          n = n.updateImmediateChild(e.name, e.node);
        }), n;
      }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n, r) {
        i.assert(n || r, "Either existingEventSnap or existingServerSnap must exist");var o = e.child(t);if (this.Gr.hasCompleteWrite(o)) return null;var a = this.Gr.childCompoundWrite(o);return a.isEmpty() ? r.getChild(t) : a.apply(r.getChild(t));
      }, e.prototype.calcCompleteChild = function (e, t, n) {
        var r = e.child(t),
            i = this.Gr.getCompleteNode(r);return null != i ? i : n.isCompleteForChild(t) ? this.Gr.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)) : null;
      }, e.prototype.shadowingWrite = function (e) {
        return this.Gr.getCompleteNode(e);
      }, e.prototype.calcIndexedSlice = function (e, t, n, r, i, a) {
        var s,
            u = this.Gr.childCompoundWrite(e),
            l = u.getCompleteNode(o.Path.Empty);if (null != l) s = l;else {
          if (null == t) return [];s = u.apply(t);
        }if (s = s.withIndex(a), s.isEmpty() || s.isLeafNode()) return [];for (var h = [], c = a.getCompare(), p = i ? s.getReverseIteratorFrom(n, a) : s.getIteratorFrom(n, a), d = p.getNext(); d && h.length < r;) {
          0 !== c(d, n) && h.push(d), d = p.getNext();
        }return h;
      }, e.prototype.Xr = function (e, t) {
        return e.snap ? e.path.contains(t) : !!r.findKey(e.children, function (n, r) {
          return e.path.child(r).contains(t);
        });
      }, e.prototype.zr = function () {
        this.Gr = e.Jr(this.Kr, e.$r, o.Path.Empty), this.Kr.length > 0 ? this.Yr = this.Kr[this.Kr.length - 1].writeId : this.Yr = -1;
      }, e.$r = function (e) {
        return e.visible;
      }, e.Jr = function (e, t, n) {
        for (var s = a.CompoundWrite.Empty, u = 0; u < e.length; ++u) {
          var l = e[u];if (t(l)) {
            var h = l.path,
                c = void 0;if (l.snap) n.contains(h) ? (c = o.Path.relativePath(n, h), s = s.addWrite(c, l.snap)) : h.contains(n) && (c = o.Path.relativePath(h, n), s = s.addWrite(o.Path.Empty, l.snap.getChild(c)));else {
              if (!l.children) throw i.assertionError("WriteRecord should have .snap or .children");if (n.contains(h)) c = o.Path.relativePath(n, h), s = s.addWrites(c, l.children);else if (h.contains(n)) if (c = o.Path.relativePath(h, n), c.isEmpty()) s = s.addWrites(o.Path.Empty, l.children);else {
                var p = r.safeGet(l.children, c.getFront());if (p) {
                  var d = p.getChild(c.popFront());s = s.addWrite(o.Path.Empty, d);
                }
              }
            }
          }
        }return s;
      }, e;
    }();t.WriteTree = l;var h = function () {
      function e(e, t) {
        this.Zr = e, this.ei = t;
      }return e.prototype.calcCompleteEventCache = function (e, t, n) {
        return this.ei.calcCompleteEventCache(this.Zr, e, t, n);
      }, e.prototype.calcCompleteEventChildren = function (e) {
        return this.ei.calcCompleteEventChildren(this.Zr, e);
      }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n) {
        return this.ei.calcEventCacheAfterServerOverwrite(this.Zr, e, t, n);
      }, e.prototype.shadowingWrite = function (e) {
        return this.ei.shadowingWrite(this.Zr.child(e));
      }, e.prototype.calcIndexedSlice = function (e, t, n, r, i) {
        return this.ei.calcIndexedSlice(this.Zr, e, t, n, r, i);
      }, e.prototype.calcCompleteChild = function (e, t) {
        return this.ei.calcCompleteChild(this.Zr, e, t);
      }, e.prototype.child = function (t) {
        return new e(this.Zr.child(t), this.ei);
      }, e;
    }();t.WriteTreeRef = h;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(25),
        i = n(3),
        o = n(0),
        a = n(6),
        s = n(4),
        u = n(0),
        l = function () {
      function e(e) {
        this.ei = e;
      }return e.prototype.addWrite = function (t, n) {
        if (t.isEmpty()) return new e(new r.ImmutableTree(n));var o = this.ei.findRootMostValueAndPath(t);if (null != o) {
          var a = o.path,
              s = o.value,
              u = i.Path.relativePath(a, t);return s = s.updateChild(u, n), new e(this.ei.set(a, s));
        }var l = new r.ImmutableTree(n);return new e(this.ei.setTree(t, l));
      }, e.prototype.addWrites = function (e, t) {
        var n = this;return o.forEach(t, function (t, r) {
          n = n.addWrite(e.child(t), r);
        }), n;
      }, e.prototype.removeWrite = function (t) {
        return t.isEmpty() ? e.Empty : new e(this.ei.setTree(t, r.ImmutableTree.Empty));
      }, e.prototype.hasCompleteWrite = function (e) {
        return null != this.getCompleteNode(e);
      }, e.prototype.getCompleteNode = function (e) {
        var t = this.ei.findRootMostValueAndPath(e);return null != t ? this.ei.get(t.path).getChild(i.Path.relativePath(t.path, e)) : null;
      }, e.prototype.getCompleteChildren = function () {
        var e = [],
            t = this.ei.value;return null != t ? t.isLeafNode() || t.forEachChild(s.PRIORITY_INDEX, function (t, n) {
          e.push(new a.NamedNode(t, n));
        }) : this.ei.children.inorderTraversal(function (t, n) {
          null != n.value && e.push(new a.NamedNode(t, n.value));
        }), e;
      }, e.prototype.childCompoundWrite = function (t) {
        if (t.isEmpty()) return this;var n = this.getCompleteNode(t);return new e(null != n ? new r.ImmutableTree(n) : this.ei.subtree(t));
      }, e.prototype.isEmpty = function () {
        return this.ei.isEmpty();
      }, e.prototype.apply = function (t) {
        return e.ti(i.Path.Empty, this.ei, t);
      }, e.Empty = new e(new r.ImmutableTree(null)), e.ti = function (t, n, r) {
        if (null != n.value) return r.updateChild(t, n.value);var i = null;return n.children.inorderTraversal(function (n, o) {
          ".priority" === n ? (u.assert(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = e.ti(t.child(n), o, r);
        }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child(".priority"), i)), r;
      }, e;
    }();t.CompoundWrite = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(5),
        i = function () {
      function e() {
        this.ni = r.ChildrenNode.EMPTY_NODE;
      }return e.prototype.getNode = function (e) {
        return this.ni.getChild(e);
      }, e.prototype.updateSnapshot = function (e, t) {
        this.ni = this.ni.updateChild(e, t);
      }, e;
    }();t.SnapshotHolder = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = function () {
      function e(e) {
        this.ri = e;
      }return e.prototype.getToken = function (e) {
        return this.ri.INTERNAL.getToken(e).then(null, function (e) {
          return e && "auth/token-not-initialized" === e.code ? (r.log("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e);
        });
      }, e.prototype.addTokenChangeListener = function (e) {
        this.ri.INTERNAL.addAuthTokenListener(e);
      }, e.prototype.removeTokenChangeListener = function (e) {
        this.ri.INTERNAL.removeAuthTokenListener(e);
      }, e.prototype.notifyForInvalidToken = function () {
        var e = 'Provided authentication credentials for the app named "' + this.ri.name + '" are invalid. This usually indicates your app was not initialized correctly. ';"credential" in this.ri.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.ri.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', r.warn(e);
      }, e;
    }();t.AuthTokenProvider = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(0),
        o = function () {
      function e() {
        this.ii = {};
      }return e.prototype.incrementCounter = function (e, t) {
        void 0 === t && (t = 1), i.contains(this.ii, e) || (this.ii[e] = 0), this.ii[e] += t;
      }, e.prototype.get = function () {
        return r.deepCopy(this.ii);
      }, e;
    }();t.StatsCollection = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(1),
        o = n(51),
        a = 1e4,
        s = 3e4,
        u = function () {
      function e(e, t) {
        this.Z = t, this.oi = {}, this.G = new o.StatsListener(e);var n = a + (s - a) * Math.random();i.setTimeoutNonBlocking(this.ai.bind(this), Math.floor(n));
      }return e.prototype.includeStat = function (e) {
        this.oi[e] = !0;
      }, e.prototype.ai = function () {
        var e = this,
            t = this.G.get(),
            n = {},
            o = !1;r.forEach(t, function (t, i) {
          i > 0 && r.contains(e.oi, t) && (n[t] = i, o = !0);
        }), o && this.Z.reportStats(n), i.setTimeoutNonBlocking(this.ai.bind(this), Math.floor(2 * Math.random() * 3e5));
      }, e;
    }();t.StatsReporter = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = function () {
      function e() {
        this.si = [], this.ui = 0;
      }return e.prototype.queueEvents = function (e) {
        for (var t = null, n = 0; n < e.length; n++) {
          var r = e[n],
              i = r.getPath();null === t || i.equals(t.getPath()) || (this.si.push(t), t = null), null === t && (t = new o(i)), t.add(r);
        }t && this.si.push(t);
      }, e.prototype.raiseEventsAtPath = function (e, t) {
        this.queueEvents(t), this.li(function (t) {
          return t.equals(e);
        });
      }, e.prototype.raiseEventsForChangedPath = function (e, t) {
        this.queueEvents(t), this.li(function (t) {
          return t.contains(e) || e.contains(t);
        });
      }, e.prototype.li = function (e) {
        this.ui++;for (var t = !0, n = 0; n < this.si.length; n++) {
          var r = this.si[n];r && (e(r.getPath()) ? (this.si[n].raise(), this.si[n] = null) : t = !1);
        }t && (this.si = []), this.ui--;
      }, e;
    }();t.EventQueue = i;var o = function () {
      function e(e) {
        this.De = e, this.hi = [];
      }return e.prototype.add = function (e) {
        this.hi.push(e);
      }, e.prototype.raise = function () {
        for (var e = 0; e < this.hi.length; e++) {
          var t = this.hi[e];if (null !== t) {
            this.hi[e] = null;var n = t.getEventRunner();r.logger && r.log("event: " + t), r.exceptionGuard(n);
          }
        }
      }, e.prototype.getPath = function () {
        return this.De;
      }, e;
    }();t.EventList = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(53),
        o = n(0),
        a = function (e) {
      function t() {
        var t,
            n,
            r = e.call(this, ["visible"]) || this;return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange", t = "webkitHidden")), r.ut = !0, n && document.addEventListener(n, function () {
          var e = !document[t];e !== r.ut && (r.ut = e, r.trigger("visible", e));
        }, !1), r;
      }return r.__extends(t, e), t.getInstance = function () {
        return new t();
      }, t.prototype.getInitialEvent = function (e) {
        return o.assert("visible" === e, "Unknown event type: " + e), [this.ut];
      }, t;
    }(i.EventEmitter);t.VisibilityMonitor = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(0),
        o = n(53),
        a = n(0),
        s = function (e) {
      function t() {
        var t = e.call(this, ["online"]) || this;return t.ci = !0, "undefined" == typeof window || void 0 === window.addEventListener || a.isMobileCordova() || (window.addEventListener("online", function () {
          t.ci || (t.ci = !0, t.trigger("online", !0));
        }, !1), window.addEventListener("offline", function () {
          t.ci && (t.ci = !1, t.trigger("online", !1));
        }, !1)), t;
      }return r.__extends(t, e), t.getInstance = function () {
        return new t();
      }, t.prototype.getInitialEvent = function (e) {
        return i.assert("online" === e, "Unknown event type: " + e), [this.ci];
      }, t.prototype.currentlyOnline = function () {
        return this.ci;
      }, t;
    }(o.EventEmitter);t.OnlineMonitor = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(55),
        i = n(56),
        o = n(1),
        a = function () {
      function e(e) {
        this.pi(e);
      }return Object.defineProperty(e, "ALL_TRANSPORTS", { get: function get() {
          return [r.BrowserPollConnection, i.WebSocketConnection];
        }, enumerable: !0, configurable: !0 }), e.prototype.pi = function (t) {
        var n = i.WebSocketConnection && i.WebSocketConnection.isAvailable(),
            r = n && !i.WebSocketConnection.previouslyFailed();if (t.webSocketOnly && (n || o.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.di = [i.WebSocketConnection];else {
          var a = this.di = [];o.each(e.ALL_TRANSPORTS, function (e, t) {
            t && t.isAvailable() && a.push(t);
          });
        }
      }, e.prototype.initialTransport = function () {
        if (this.di.length > 0) return this.di[0];throw Error("No transports available");
      }, e.prototype.upgradeTransport = function () {
        return this.di.length > 1 ? this.di[1] : null;
      }, e;
    }();t.TransportManager = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = function () {
      function e(e) {
        this.Ht = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
      }return e.prototype.closeAfter = function (e, t) {
        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
      }, e.prototype.handleResponse = function (e, t) {
        var n = this;this.pendingResponses[e] = t;for (var i = this; this.pendingResponses[this.currentResponseNum] && "break" !== function () {
          var e = i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];for (var t = 0; t < e.length; ++t) {
            !function (t) {
              e[t] && r.exceptionGuard(function () {
                n.Ht(e[t]);
              });
            }(t);
          }if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";i.currentResponseNum++;
        }();) {}
      }, e;
    }();t.PacketReceiver = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2),
        i = n(0),
        o = n(1),
        a = n(0),
        s = n(0),
        u = n(0),
        l = n(57),
        h = function (e) {
      function t(t, n, r) {
        var i = e.call(this) || this;return i.H = t, i.ee = n, i.Xe = r, i.de = o.logWrapper("p:rest:"), i.Ze = {}, i;
      }return r.__extends(t, e), t.prototype.reportStats = function (e) {
        throw Error("Method not implemented.");
      }, t.fi = function (e, t) {
        return void 0 !== t ? "tag$" + t : (i.assert(e.getQueryParams().isDefault(), "should have a tag if it's not a default query."), "" + e.path);
      }, t.prototype.listen = function (e, n, r, i) {
        var o = this,
            a = "" + e.path;this.de("Listen called for " + a + " " + e.queryIdentifier());var u = t.fi(e, r),
            l = {};this.Ze[u] = l;var h = e.getQueryParams().toRestQueryStringParameters();this._i(a + ".json", h, function (e, t) {
          var n = t;if (404 === e && (n = null, e = null), null === e && o.ee(a, n, !1, r), s.safeGet(o.Ze, u) === l) {
            var h;h = e ? 401 == e ? "permission_denied" : "rest_error:" + e : "ok", i(h, null);
          }
        });
      }, t.prototype.unlisten = function (e, n) {
        var r = t.fi(e, n);delete this.Ze[r];
      }, t.prototype.refreshAuthToken = function (e) {}, t.prototype._i = function (e, t, n) {
        var r = this;void 0 === t && (t = {}), t.format = "export", this.Xe.getToken(!1).then(function (i) {
          var s = i && i.accessToken;s && (t.auth = s);var l = (r.H.secure ? "https://" : "http://") + r.H.host + e + "?" + u.querystring(t);r.de("Sending REST request for " + l);var h = new XMLHttpRequest();h.onreadystatechange = function () {
            if (n && 4 === h.readyState) {
              r.de("REST Response for " + l + " received. status:", h.status, "response:", h.responseText);var e = null;if (h.status >= 200 && h.status < 300) {
                try {
                  e = a.jsonEval(h.responseText);
                } catch (e) {
                  o.warn("Failed to parse JSON response for " + l + ": " + h.responseText);
                }n(null, e);
              } else 401 !== h.status && 404 !== h.status && o.warn("Got unsuccessful REST response for " + l + " Status: " + h.status), n(h.status);n = null;
            }
          }, h.open("GET", l, !0), h.send();
        });
      }, t;
    }(l.ServerActions);t.ReadonlyRestClient = h;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(1),
        o = n(12),
        a = n(4),
        s = n(40),
        u = n(44),
        l = n(26),
        h = n(110),
        c = n(58),
        p = n(0),
        d = function () {
      function e() {
        this.yi = !1, this.vi = !1, this.gi = !1, this.mi = !1, this.Ci = !1, this.Ei = 0, this.Ni = "", this.Pi = null, this.Si = "", this.bi = null, this.Ti = "", this.Ee = a.PRIORITY_INDEX;
      }return e.prototype.hasStart = function () {
        return this.vi;
      }, e.prototype.isViewFromLeft = function () {
        return "" === this.Ni ? this.vi : this.Ni === e.Ii.VIEW_FROM_LEFT;
      }, e.prototype.getIndexStartValue = function () {
        return r.assert(this.vi, "Only valid if start has been set"), this.Pi;
      }, e.prototype.getIndexStartName = function () {
        return r.assert(this.vi, "Only valid if start has been set"), this.gi ? this.Si : i.MIN_NAME;
      }, e.prototype.hasEnd = function () {
        return this.mi;
      }, e.prototype.getIndexEndValue = function () {
        return r.assert(this.mi, "Only valid if end has been set"), this.bi;
      }, e.prototype.getIndexEndName = function () {
        return r.assert(this.mi, "Only valid if end has been set"), this.Ci ? this.Ti : i.MAX_NAME;
      }, e.prototype.hasLimit = function () {
        return this.yi;
      }, e.prototype.hasAnchoredLimit = function () {
        return this.yi && "" !== this.Ni;
      }, e.prototype.getLimit = function () {
        return r.assert(this.yi, "Only valid if limit has been set"), this.Ei;
      }, e.prototype.getIndex = function () {
        return this.Ee;
      }, e.prototype.Ri = function () {
        var t = new e();return t.yi = this.yi, t.Ei = this.Ei, t.vi = this.vi, t.Pi = this.Pi, t.gi = this.gi, t.Si = this.Si, t.mi = this.mi, t.bi = this.bi, t.Ci = this.Ci, t.Ti = this.Ti, t.Ee = this.Ee, t.Ni = this.Ni, t;
      }, e.prototype.limit = function (e) {
        var t = this.Ri();return t.yi = !0, t.Ei = e, t.Ni = "", t;
      }, e.prototype.limitToFirst = function (t) {
        var n = this.Ri();return n.yi = !0, n.Ei = t, n.Ni = e.Ii.VIEW_FROM_LEFT, n;
      }, e.prototype.limitToLast = function (t) {
        var n = this.Ri();return n.yi = !0, n.Ei = t, n.Ni = e.Ii.VIEW_FROM_RIGHT, n;
      }, e.prototype.startAt = function (e, t) {
        var n = this.Ri();return n.vi = !0, void 0 === e && (e = null), n.Pi = e, null != t ? (n.gi = !0, n.Si = t) : (n.gi = !1, n.Si = ""), n;
      }, e.prototype.endAt = function (e, t) {
        var n = this.Ri();return n.mi = !0, void 0 === e && (e = null), n.bi = e, void 0 !== t ? (n.Ci = !0, n.Ti = t) : (n.Ci = !1, n.Ti = ""), n;
      }, e.prototype.orderBy = function (e) {
        var t = this.Ri();return t.Ee = e, t;
      }, e.prototype.getQueryObject = function () {
        var t = e.Ii,
            n = {};if (this.vi && (n[t.INDEX_START_VALUE] = this.Pi, this.gi && (n[t.INDEX_START_NAME] = this.Si)), this.mi && (n[t.INDEX_END_VALUE] = this.bi, this.Ci && (n[t.INDEX_END_NAME] = this.Ti)), this.yi) {
          n[t.LIMIT] = this.Ei;var r = this.Ni;"" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r;
        }return this.Ee !== a.PRIORITY_INDEX && (n[t.INDEX] = "" + this.Ee), n;
      }, e.prototype.loadsAllData = function () {
        return !(this.vi || this.mi || this.yi);
      }, e.prototype.isDefault = function () {
        return this.loadsAllData() && this.Ee == a.PRIORITY_INDEX;
      }, e.prototype.getNodeFilter = function () {
        return this.loadsAllData() ? new l.IndexedFilter(this.getIndex()) : this.hasLimit() ? new h.LimitedFilter(this) : new c.RangedFilter(this);
      }, e.prototype.toRestQueryStringParameters = function () {
        var t = e.wi,
            n = {};if (this.isDefault()) return n;var i;return this.Ee === a.PRIORITY_INDEX ? i = t.PRIORITY_INDEX : this.Ee === s.VALUE_INDEX ? i = t.VALUE_INDEX : this.Ee === o.KEY_INDEX ? i = t.KEY_INDEX : (r.assert(this.Ee instanceof u.PathIndex, "Unrecognized index type!"), i = "" + this.Ee), n[t.ORDER_BY] = p.stringify(i), this.vi && (n[t.START_AT] = p.stringify(this.Pi), this.gi && (n[t.START_AT] += "," + p.stringify(this.Si))), this.mi && (n[t.END_AT] = p.stringify(this.bi), this.Ci && (n[t.END_AT] += "," + p.stringify(this.Ti))), this.yi && (this.isViewFromLeft() ? n[t.LIMIT_TO_FIRST] = this.Ei : n[t.LIMIT_TO_LAST] = this.Ei), n;
      }, e.Ii = { INDEX_START_VALUE: "sp", INDEX_START_NAME: "sn", INDEX_END_VALUE: "ep", INDEX_END_NAME: "en", LIMIT: "l", VIEW_FROM: "vf", VIEW_FROM_LEFT: "l", VIEW_FROM_RIGHT: "r", INDEX: "i" }, e.wi = { ORDER_BY: "orderBy", PRIORITY_INDEX: "$priority", VALUE_INDEX: "$value", KEY_INDEX: "$key", START_AT: "startAt", END_AT: "endAt", LIMIT_TO_FIRST: "limitToFirst", LIMIT_TO_LAST: "limitToLast" }, e.DEFAULT = new e(), e;
    }();t.QueryParams = d;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(58),
        i = n(5),
        o = n(6),
        a = n(0),
        s = n(10),
        u = function () {
      function e(e) {
        this.Oi = new r.RangedFilter(e), this.Ee = e.getIndex(), this.Ei = e.getLimit(), this.Ai = !e.isViewFromLeft();
      }return e.prototype.updateChild = function (e, t, n, r, a, s) {
        return this.Oi.matches(new o.NamedNode(t, n)) || (n = i.ChildrenNode.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.Ei ? this.Oi.getIndexedFilter().updateChild(e, t, n, r, a, s) : this.Di(e, t, n, a, s);
      }, e.prototype.updateFullNode = function (e, t, n) {
        var r;if (t.isLeafNode() || t.isEmpty()) r = i.ChildrenNode.EMPTY_NODE.withIndex(this.Ee);else if (2 * this.Ei < t.numChildren() && t.isIndexed(this.Ee)) {
          r = i.ChildrenNode.EMPTY_NODE.withIndex(this.Ee);var o = void 0;o = this.Ai ? t.getReverseIteratorFrom(this.Oi.getEndPost(), this.Ee) : t.getIteratorFrom(this.Oi.getStartPost(), this.Ee);for (var a = 0; o.hasNext() && a < this.Ei;) {
            var s = o.getNext(),
                u = void 0;if (!(u = this.Ai ? this.Ee.compare(this.Oi.getStartPost(), s) <= 0 : this.Ee.compare(s, this.Oi.getEndPost()) <= 0)) break;r = r.updateImmediateChild(s.name, s.node), a++;
          }
        } else {
          r = t.withIndex(this.Ee), r = r.updatePriority(i.ChildrenNode.EMPTY_NODE);var l = void 0,
              h = void 0,
              c = void 0,
              o = void 0;if (this.Ai) {
            o = r.getReverseIterator(this.Ee), l = this.Oi.getEndPost(), h = this.Oi.getStartPost();var p = this.Ee.getCompare();c = function c(e, t) {
              return p(t, e);
            };
          } else o = r.getIterator(this.Ee), l = this.Oi.getStartPost(), h = this.Oi.getEndPost(), c = this.Ee.getCompare();for (var a = 0, d = !1; o.hasNext();) {
            var s = o.getNext();!d && c(l, s) <= 0 && (d = !0);var u = d && a < this.Ei && c(s, h) <= 0;u ? a++ : r = r.updateImmediateChild(s.name, i.ChildrenNode.EMPTY_NODE);
          }
        }return this.Oi.getIndexedFilter().updateFullNode(e, r, n);
      }, e.prototype.updatePriority = function (e, t) {
        return e;
      }, e.prototype.filtersNodes = function () {
        return !0;
      }, e.prototype.getIndexedFilter = function () {
        return this.Oi.getIndexedFilter();
      }, e.prototype.getIndex = function () {
        return this.Ee;
      }, e.prototype.Di = function (e, t, n, r, u) {
        var l;if (this.Ai) {
          var h = this.Ee.getCompare();l = function l(e, t) {
            return h(t, e);
          };
        } else l = this.Ee.getCompare();var c = e;a.assert(c.numChildren() == this.Ei, "");var p = new o.NamedNode(t, n),
            d = this.Ai ? c.getFirstChild(this.Ee) : c.getLastChild(this.Ee),
            f = this.Oi.matches(p);if (c.hasChild(t)) {
          for (var _ = c.getImmediateChild(t), y = r.getChildAfterChild(this.Ee, d, this.Ai); null != y && (y.name == t || c.hasChild(y.name));) {
            y = r.getChildAfterChild(this.Ee, y, this.Ai);
          }var v = null == y ? 1 : l(y, p);if (f && !n.isEmpty() && v >= 0) return null != u && u.trackChildChange(s.Change.childChangedChange(t, n, _)), c.updateImmediateChild(t, n);null != u && u.trackChildChange(s.Change.childRemovedChange(t, _));var g = c.updateImmediateChild(t, i.ChildrenNode.EMPTY_NODE);return null != y && this.Oi.matches(y) ? (null != u && u.trackChildChange(s.Change.childAddedChange(y.name, y.node)), g.updateImmediateChild(y.name, y.node)) : g;
        }return n.isEmpty() ? e : f && l(d, p) >= 0 ? (null != u && (u.trackChildChange(s.Change.childRemovedChange(d.name, d.node)), u.trackChildChange(s.Change.childAddedChange(t, n))), c.updateImmediateChild(t, n).updateImmediateChild(d.name, i.ChildrenNode.EMPTY_NODE)) : e;
      }, e;
    }();t.LimitedFilter = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(0),
        o = n(23),
        a = n(24),
        s = n(3),
        u = n(112),
        l = n(4),
        h = n(1),
        c = n(45),
        p = n(8),
        d = n(0),
        f = n(13),
        _ = n(5),
        y = n(19);!function (e) {
      e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] = "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT";
    }(r = t.TransactionStatus || (t.TransactionStatus = {})), y.Repo.Mi = 25, y.Repo.prototype.ie = function () {
      this.Li = new u.Tree();
    }, y.Repo.prototype.startTransaction = function (e, t, n, s) {
      this.de("transaction on " + e);var u = function u() {},
          y = new o.Reference(this, e);y.on("value", u);var v = function v() {
        y.off("value", u);
      },
          g = { path: e, update: t, onComplete: n, status: null, order: h.LUIDGenerator(), applyLocally: s, retryCount: 0, unwatcher: v, abortReason: null, currentWriteId: null, currentInputSnapshot: null, currentOutputSnapshotRaw: null, currentOutputSnapshotResolved: null },
          m = this.Fi(e);g.currentInputSnapshot = m;var C = g.update(m.val());if (void 0 === C) {
        if (g.unwatcher(), g.currentOutputSnapshotRaw = null, g.currentOutputSnapshotResolved = null, g.onComplete) {
          var E = new a.DataSnapshot(g.currentInputSnapshot, new o.Reference(this, g.path), l.PRIORITY_INDEX);g.onComplete(null, !1, E);
        }
      } else {
        p.validateFirebaseData("transaction failed: Data returned ", C, g.path), g.status = r.RUN;var N = this.Li.subTree(e),
            P = N.getValue() || [];P.push(g), N.setValue(P);var S = void 0;"object" == (typeof C === "undefined" ? "undefined" : _typeof(C)) && null !== C && d.contains(C, ".priority") ? (S = d.safeGet(C, ".priority"), i.assert(p.isValidPriority(S), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : S = (this.ue.calcCompleteEventCache(e) || _.ChildrenNode.EMPTY_NODE).getPriority().val(), S = S;var b = this.generateServerValues(),
            T = f.nodeFromJSON(C, S),
            I = c.resolveDeferredValueSnapshot(T, b);g.currentOutputSnapshotRaw = T, g.currentOutputSnapshotResolved = I, g.currentWriteId = this.pe();var R = this.ue.applyUserOverwrite(e, I, g.currentWriteId, g.applyLocally);this.K.raiseEventsForChangedPath(e, R), this.xi();
      }
    }, y.Repo.prototype.Fi = function (e, t) {
      return this.ue.calcCompleteEventCache(e, t) || _.ChildrenNode.EMPTY_NODE;
    }, y.Repo.prototype.xi = function (e) {
      var t = this;if (void 0 === e && (e = this.Li), e || this.ki(e), null !== e.getValue()) {
        var n = this.Wi(e);i.assert(n.length > 0, "Sending zero length transaction queue"), n.every(function (e) {
          return e.status === r.RUN;
        }) && this.Vi(e.path(), n);
      } else e.hasChildren() && e.forEachChild(function (e) {
        t.xi(e);
      });
    }, y.Repo.prototype.Vi = function (e, t) {
      for (var n = this, u = t.map(function (e) {
        return e.currentWriteId;
      }), c = this.Fi(e, u), p = c, d = c.hash(), f = 0; f < t.length; f++) {
        var _ = t[f];i.assert(_.status === r.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), _.status = r.SENT, _.retryCount++;var y = s.Path.relativePath(e, _.path);p = p.updateChild(y, _.currentOutputSnapshotRaw);
      }var v = p.val(!0),
          g = e;this.Z.put("" + g, v, function (i) {
        n.de("transaction put response", { path: "" + g, status: i });var s = [];if ("ok" === i) {
          for (var u = [], c = 0; c < t.length; c++) {
            if (t[c].status = r.COMPLETED, s = s.concat(n.ue.ackUserWrite(t[c].currentWriteId)), t[c].onComplete) {
              var p = t[c].currentOutputSnapshotResolved,
                  d = new o.Reference(n, t[c].path),
                  f = new a.DataSnapshot(p, d, l.PRIORITY_INDEX);u.push(t[c].onComplete.bind(null, null, !0, f));
            }t[c].unwatcher();
          }n.ki(n.Li.subTree(e)), n.xi(), n.K.raiseEventsForChangedPath(e, s);for (var c = 0; c < u.length; c++) {
            h.exceptionGuard(u[c]);
          }
        } else {
          if ("datastale" === i) for (var c = 0; c < t.length; c++) {
            t[c].status === r.SENT_NEEDS_ABORT ? t[c].status = r.NEEDS_ABORT : t[c].status = r.RUN;
          } else {
            h.warn("transaction at " + g + " failed: " + i);for (var c = 0; c < t.length; c++) {
              t[c].status = r.NEEDS_ABORT, t[c].abortReason = i;
            }
          }n.le(e);
        }
      }, d);
    }, y.Repo.prototype.le = function (e) {
      var t = this.Qi(e),
          n = t.path(),
          r = this.Wi(t);return this.qi(r, n), n;
    }, y.Repo.prototype.qi = function (e, t) {
      if (0 !== e.length) {
        for (var n = [], u = [], _ = e.filter(function (e) {
          return e.status === r.RUN;
        }), v = _.map(function (e) {
          return e.currentWriteId;
        }), g = 0; g < e.length; g++) {
          var m = e[g],
              C = s.Path.relativePath(t, m.path),
              E = !1,
              N = void 0;if (i.assert(null !== C, "rerunTransactionsUnderNode_: relativePath should not be null."), m.status === r.NEEDS_ABORT) E = !0, N = m.abortReason, u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0));else if (m.status === r.RUN) if (m.retryCount >= y.Repo.Mi) E = !0, N = "maxretry", u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0));else {
            var P = this.Fi(m.path, v);m.currentInputSnapshot = P;var S = e[g].update(P.val());if (void 0 !== S) {
              p.validateFirebaseData("transaction failed: Data returned ", S, m.path);var b = f.nodeFromJSON(S),
                  T = "object" == (typeof S === "undefined" ? "undefined" : _typeof(S)) && null != S && d.contains(S, ".priority");T || (b = b.updatePriority(P.getPriority()));var I = m.currentWriteId,
                  R = this.generateServerValues(),
                  w = c.resolveDeferredValueSnapshot(b, R);m.currentOutputSnapshotRaw = b, m.currentOutputSnapshotResolved = w, m.currentWriteId = this.pe(), v.splice(v.indexOf(I), 1), u = u.concat(this.ue.applyUserOverwrite(m.path, w, m.currentWriteId, m.applyLocally)), u = u.concat(this.ue.ackUserWrite(I, !0));
            } else E = !0, N = "nodata", u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0));
          }if (this.K.raiseEventsForChangedPath(t, u), u = [], E && (e[g].status = r.COMPLETED, function (e) {
            setTimeout(e, Math.floor(0));
          }(e[g].unwatcher), e[g].onComplete)) if ("nodata" === N) {
            var O = new o.Reference(this, e[g].path),
                A = e[g].currentInputSnapshot,
                D = new a.DataSnapshot(A, O, l.PRIORITY_INDEX);n.push(e[g].onComplete.bind(null, null, !1, D));
          } else n.push(e[g].onComplete.bind(null, Error(N), !1, null));
        }this.ki(this.Li);for (var g = 0; g < n.length; g++) {
          h.exceptionGuard(n[g]);
        }this.xi();
      }
    }, y.Repo.prototype.Qi = function (e) {
      for (var t, n = this.Li; null !== (t = e.getFront()) && null === n.getValue();) {
        n = n.subTree(t), e = e.popFront();
      }return n;
    }, y.Repo.prototype.Wi = function (e) {
      var t = [];return this.ji(e, t), t.sort(function (e, t) {
        return e.order - t.order;
      }), t;
    }, y.Repo.prototype.ji = function (e, t) {
      var n = this,
          r = e.getValue();if (null !== r) for (var i = 0; i < r.length; i++) {
        t.push(r[i]);
      }e.forEachChild(function (e) {
        n.ji(e, t);
      });
    }, y.Repo.prototype.ki = function (e) {
      var t = this,
          n = e.getValue();if (n) {
        for (var i = 0, o = 0; o < n.length; o++) {
          n[o].status !== r.COMPLETED && (n[i] = n[o], i++);
        }n.length = i, e.setValue(n.length > 0 ? n : null);
      }e.forEachChild(function (e) {
        t.ki(e);
      });
    }, y.Repo.prototype.fe = function (e) {
      var t = this,
          n = this.Qi(e).path(),
          r = this.Li.subTree(e);return r.forEachAncestor(function (e) {
        t.Ui(e);
      }), this.Ui(r), r.forEachDescendant(function (e) {
        t.Ui(e);
      }), n;
    }, y.Repo.prototype.Ui = function (e) {
      var t = e.getValue();if (null !== t) {
        for (var n = [], o = [], a = -1, s = 0; s < t.length; s++) {
          t[s].status === r.SENT_NEEDS_ABORT || (t[s].status === r.SENT ? (i.assert(a === s - 1, "All SENT items should be at beginning of queue."), a = s, t[s].status = r.SENT_NEEDS_ABORT, t[s].abortReason = "set") : (i.assert(t[s].status === r.RUN, "Unexpected transaction status in abort"), t[s].unwatcher(), o = o.concat(this.ue.ackUserWrite(t[s].currentWriteId, !0)), t[s].onComplete && n.push(t[s].onComplete.bind(null, Error("set"), !1, null))));
        }-1 === a ? e.setValue(null) : t.length = a + 1, this.K.raiseEventsForChangedPath(e.path(), o);for (var s = 0; s < n.length; s++) {
          h.exceptionGuard(n[s]);
        }
      }
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
        i = n(3),
        o = n(0),
        a = function () {
      function e() {
        this.children = {}, this.childCount = 0, this.value = null;
      }return e;
    }();t.TreeNode = a;var s = function () {
      function e(e, t, n) {
        void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === n && (n = new a()), this.Bi = e, this.Hi = t, this._e = n;
      }return e.prototype.subTree = function (t) {
        for (var n, r = t instanceof i.Path ? t : new i.Path(t), s = this; null !== (n = r.getFront());) {
          s = new e(n, s, o.safeGet(s._e.children, n) || new a()), r = r.popFront();
        }return s;
      }, e.prototype.getValue = function () {
        return this._e.value;
      }, e.prototype.setValue = function (e) {
        r.assert(void 0 !== e, "Cannot set value to undefined"), this._e.value = e, this.Gi();
      }, e.prototype.clear = function () {
        this._e.value = null, this._e.children = {}, this._e.childCount = 0, this.Gi();
      }, e.prototype.hasChildren = function () {
        return this._e.childCount > 0;
      }, e.prototype.isEmpty = function () {
        return null === this.getValue() && !this.hasChildren();
      }, e.prototype.forEachChild = function (t) {
        var n = this;o.forEach(this._e.children, function (r, i) {
          t(new e(r, n, i));
        });
      }, e.prototype.forEachDescendant = function (e, t, n) {
        t && !n && e(this), this.forEachChild(function (t) {
          t.forEachDescendant(e, !0, n);
        }), t && n && e(this);
      }, e.prototype.forEachAncestor = function (e, t) {
        for (var n = t ? this : this.parent(); null !== n;) {
          if (e(n)) return !0;n = n.parent();
        }return !1;
      }, e.prototype.forEachImmediateDescendantWithValue = function (e) {
        this.forEachChild(function (t) {
          null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e);
        });
      }, e.prototype.path = function () {
        return new i.Path(null === this.Hi ? this.Bi : this.Hi.path() + "/" + this.Bi);
      }, e.prototype.name = function () {
        return this.Bi;
      }, e.prototype.parent = function () {
        return this.Hi;
      }, e.prototype.Gi = function () {
        null !== this.Hi && this.Hi.Ki(this.Bi, this);
      }, e.prototype.Ki = function (e, t) {
        var n = t.isEmpty(),
            r = o.contains(this._e.children, e);n && r ? (delete this._e.children[e], this._e.childCount--, this.Gi()) : n || r || (this._e.children[e] = t._e, this._e.childCount++, this.Gi());
      }, e;
    }();t.Tree = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(56),
        i = n(55);t.forceLongPolling = function () {
      r.WebSocketConnection.forceDisallow(), i.BrowserPollConnection.forceAllow();
    }, t.forceWebSockets = function () {
      i.BrowserPollConnection.forceDisallow();
    }, t.isWebSocketsAvailable = function () {
      return r.WebSocketConnection.isAvailable();
    }, t.setSecurityDebugCallback = function (e, t) {
      e.repo.J.at = t;
    }, t.stats = function (e, t) {
      e.repo.stats(t);
    }, t.statsIncrementCounter = function (e, t) {
      e.repo.statsIncrementCounter(t);
    }, t.dataUpdateCount = function (e) {
      return e.repo.dataUpdateCount;
    }, t.interceptServerData = function (e, t) {
      return e.repo.he(t);
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(36),
        i = n(52),
        o = n(28),
        a = n(54);t.DataConnection = i.PersistentConnection, i.PersistentConnection.prototype.simpleListen = function (e, t) {
      this.sendRequest("q", { p: e }, t);
    }, i.PersistentConnection.prototype.echo = function (e, t) {
      this.sendRequest("echo", { d: e }, t);
    }, t.RealTimeConnection = a.Connection, t.hijackHash = function (e) {
      var t = i.PersistentConnection.prototype.put;return i.PersistentConnection.prototype.put = function (n, r, i, o) {
        void 0 !== o && (o = e()), t.call(this, n, r, i, o);
      }, function () {
        i.PersistentConnection.prototype.put = t;
      };
    }, t.ConnectionTarget = r.RepoInfo, t.queryIdentifier = function (e) {
      return e.queryIdentifier();
    }, t.listens = function (e) {
      return e.repo.J.Ze;
    }, t.forceRestClient = function (e) {
      o.RepoManager.getInstance().forceRestClient(e);
    };
  }], [80]);
} catch (e) {
  throw Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.");
}

/*!
 * @license Firebase v4.11.0
 * Build: rev-6aed77a
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([3], { 118: function _(e, t, r) {
      r(119);
    }, 119: function _(e, t, r) {
      "use strict";
      function o(e) {
        var t = new Uint8Array(e);return window.btoa(String.fromCharCode.apply(null, t));
      }function n(e) {
        if (e.objectStoreNames.contains(v)) {
          var t = e.transaction(v),
              r = t.objectStore(v),
              o = new m(),
              n = r.openCursor();n.onerror = function (e) {
            console.warn("Unable to cleanup old IDB.", e);
          }, n.onsuccess = function () {
            var t = n.result;if (t) {
              var r = t.value;o.deleteToken(r.fcmSenderId, r.fcmToken, r.fcmPushSet), t.continue();
            } else e.close(), indexedDB.deleteDatabase(y);
          };
        }
      }function i() {
        var e = indexedDB.open(y);e.onerror = function (e) {}, e.onsuccess = function (t) {
          n(e.result);
        };
      }function s() {}function a(e) {
        var t = function t(e) {
          return self && "ServiceWorkerGlobalScope" in self ? new Y(e) : new j(e);
        },
            r = { Messaging: j };e.INTERNAL.registerService("messaging", t, r);
      }Object.defineProperty(t, "__esModule", { value: !0 });var c,
          u = r(2),
          _ = r(0),
          d = { AVAILABLE_IN_WINDOW: "only-available-in-window", AVAILABLE_IN_SW: "only-available-in-sw", SHOULD_BE_INHERITED: "should-be-overriden", BAD_SENDER_ID: "bad-sender-id", INCORRECT_GCM_SENDER_ID: "incorrect-gcm-sender-id", PERMISSION_DEFAULT: "permission-default", PERMISSION_BLOCKED: "permission-blocked", UNSUPPORTED_BROWSER: "unsupported-browser", NOTIFICATIONS_BLOCKED: "notifications-blocked", FAILED_DEFAULT_REGISTRATION: "failed-serviceworker-registration", SW_REGISTRATION_EXPECTED: "sw-registration-expected", GET_SUBSCRIPTION_FAILED: "get-subscription-failed", INVALID_SAVED_TOKEN: "invalid-saved-token", SW_REG_REDUNDANT: "sw-reg-redundant", TOKEN_SUBSCRIBE_FAILED: "token-subscribe-failed", TOKEN_SUBSCRIBE_NO_TOKEN: "token-subscribe-no-token", TOKEN_SUBSCRIBE_NO_PUSH_SET: "token-subscribe-no-push-set", TOKEN_UNSUBSCRIBE_FAILED: "token-unsubscribe-failed", TOKEN_UPDATE_FAILED: "token-update-failed", TOKEN_UPDATE_NO_TOKEN: "token-update-no-token", USE_SW_BEFORE_GET_TOKEN: "use-sw-before-get-token", INVALID_DELETE_TOKEN: "invalid-delete-token", DELETE_TOKEN_NOT_FOUND: "delete-token-not-found", DELETE_SCOPE_NOT_FOUND: "delete-scope-not-found", BG_HANDLER_FUNCTION_EXPECTED: "bg-handler-function-expected", NO_WINDOW_CLIENT_TO_MSG: "no-window-client-to-msg", UNABLE_TO_RESUBSCRIBE: "unable-to-resubscribe", NO_FCM_TOKEN_FOR_RESUBSCRIBE: "no-fcm-token-for-resubscribe", FAILED_TO_DELETE_TOKEN: "failed-to-delete-token", NO_SW_IN_REG: "no-sw-in-reg", BAD_SCOPE: "bad-scope", BAD_VAPID_KEY: "bad-vapid-key", BAD_SUBSCRIPTION: "bad-subscription", BAD_TOKEN: "bad-token", BAD_PUSH_SET: "bad-push-set", FAILED_DELETE_VAPID_KEY: "failed-delete-vapid-key", INVALID_PUBLIC_VAPID_KEY: "invalid-public-vapid-key", USE_PUBLIC_KEY_BEFORE_GET_TOKEN: "use-public-key-before-get-token", PUBLIC_KEY_DECRYPTION_FAILED: "public-vapid-key-decryption-failed" },
          p = (c = {}, c[d.AVAILABLE_IN_WINDOW] = "This method is available in a Window context.", c[d.AVAILABLE_IN_SW] = "This method is available in a service worker context.", c["should-be-overriden"] = "This method should be overriden by extended classes.", c["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", c["permission-default"] = "The required permissions were not granted and dismissed instead.", c["permission-blocked"] = "The required permissions were not granted and blocked instead.", c["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", c["notifications-blocked"] = "Notifications have been blocked.", c[d.FAILED_DEFAULT_REGISTRATION] = "We are unable to register the default service worker. {$browserErrorMessage}", c["sw-registration-expected"] = "A service worker registration was the expected input.", c["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", c["invalid-saved-token"] = "Unable to access details of the saved token.", c["sw-reg-redundant"] = "The service worker being used for push was made redundant.", c["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$message}", c["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", c["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", c["token-unsubscribe-failed"] = "A problem occured while unsubscribing the user from FCM: {$message}", c["token-update-failed"] = "A problem occured while updating the user from FCM: {$message}", c["token-update-no-token"] = "FCM returned no token when updating the user to push.", c["use-sw-before-get-token"] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", c["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", c["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", c["delete-scope-not-found"] = "The deletion attempt for service worker scope could not be performed as the scope was not found.", c["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", c["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", c["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", c["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", c["failed-to-delete-token"] = "Unable to delete the currently saved token.", c["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", c["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", c["bad-scope"] = "The service worker scope must be a string with at least one character.", c["bad-vapid-key"] = "The public VAPID key is not a Uint8Array with 65 bytes.", c["bad-subscription"] = "The subscription must be a valid PushSubscription.", c["bad-token"] = "The FCM Token used for storage / lookup was not a valid token string.", c["bad-push-set"] = "The FCM push set used for storage / lookup was not not a valid push set string.", c["failed-delete-vapid-key"] = "The VAPID key could not be deleted.", c["invalid-public-vapid-key"] = "The public VAPID key must be a string.", c[d.PUBLIC_KEY_DECRYPTION_FAILED] = "The public VAPID key did not equal 65 bytes when decrypted.", c),
          f = { codes: d, map: p },
          h = function () {
        function e(e, t) {
          this.e = new _.ErrorFactory("messaging", "Messaging", f.map), this.t = e, this.r = t, this.o = null, this.TRANSACTION_READ_WRITE = "readwrite";
        }return e.prototype.openDatabase = function () {
          var e = this;return this.o ? this.o : (this.o = new Promise(function (t, r) {
            var o = indexedDB.open(e.t, e.r);o.onerror = function (e) {
              r(e.target.error);
            }, o.onsuccess = function (e) {
              t(e.target.result);
            }, o.onupgradeneeded = function (t) {
              try {
                var o = t.target.result;e.onDBUpgrade(o, t);
              } catch (e) {
                o.close(), r(e);
              }
            };
          }), this.o);
        }, e.prototype.closeDatabase = function () {
          var e = this;return Promise.resolve().then(function () {
            if (e.o) return e.o.then(function (t) {
              t.close(), e.o = null;
            });
          });
        }, e.prototype.onDBUpgrade = function (e, t) {
          throw this.e.create(f.codes.SHOULD_BE_INHERITED);
        }, e;
      }(),
          l = h,
          g = function g(e) {
        return o(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      },
          E = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]),
          S = { userVisibleOnly: !0, applicationServerKey: E },
          T = { DEFAULT_PUBLIC_VAPID_KEY: E, SUBSCRIPTION_DETAILS: S, ENDPOINT: "https://fcm.googleapis.com" },
          b = function () {
        function e() {
          this.e = new _.ErrorFactory("messaging", "Messaging", f.map);
        }return e.prototype.getToken = function (e, t, r) {
          var o = this,
              n = g(t.getKey("p256dh")),
              i = g(t.getKey("auth")),
              s = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + n + "&encryption_auth=" + i;r !== T.DEFAULT_PUBLIC_VAPID_KEY && (s += "&application_pub_key=" + g(r));var a = new Headers();a.append("Content-Type", "application/x-www-form-urlencoded");var c = { method: "POST", headers: a, body: s };return fetch(T.ENDPOINT + "/fcm/connect/subscribe", c).then(function (e) {
            return e.json();
          }).catch(function () {
            throw o.e.create(f.codes.TOKEN_SUBSCRIBE_FAILED);
          }).then(function (e) {
            var t = e;if (t.error) {
              var r = t.error.message;throw o.e.create(f.codes.TOKEN_SUBSCRIBE_FAILED, { message: r });
            }if (!t.token) throw o.e.create(f.codes.TOKEN_SUBSCRIBE_NO_TOKEN);if (!t.pushSet) throw o.e.create(f.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);return { token: t.token, pushSet: t.pushSet };
          });
        }, e.prototype.updateToken = function (e, t, r, o, n) {
          var i = this,
              s = g(o.getKey("p256dh")),
              a = g(o.getKey("auth")),
              c = "push_set=" + r + "&token=" + t + "&authorized_entity=" + e + "&endpoint=" + o.endpoint + "&encryption_key=" + s + "&encryption_auth=" + a;n !== T.DEFAULT_PUBLIC_VAPID_KEY && (c += "&application_pub_key=" + g(n));var u = new Headers();u.append("Content-Type", "application/x-www-form-urlencoded");var _,
              d = { method: "POST", headers: u, body: c };return fetch(T.ENDPOINT + "/fcm/connect/subscribe", d).then(function (e) {
            return _ = e, e.json();
          }).catch(function () {
            throw i.e.create(f.codes.TOKEN_UPDATE_FAILED);
          }).then(function (e) {
            if (!_.ok) {
              var t = e.error.message;throw i.e.create(f.codes.TOKEN_UPDATE_FAILED, { message: t });
            }if (!e.token) throw i.e.create(f.codes.TOKEN_UPDATE_NO_TOKEN);return e.token;
          });
        }, e.prototype.deleteToken = function (e, t, r) {
          var o = this,
              n = "authorized_entity=" + e + "&token=" + t + "&pushSet=" + r,
              i = new Headers();i.append("Content-Type", "application/x-www-form-urlencoded");var s = { method: "POST", headers: i, body: n };return fetch(T.ENDPOINT + "/fcm/connect/unsubscribe", s).then(function (e) {
            if (!e.ok) return e.json().then(function (e) {
              if (e.error) {
                var t = e.error.message;throw o.e.create(f.codes.TOKEN_UNSUBSCRIBE_FAILED, { message: t });
              }
            }, function (e) {
              throw o.e.create(f.codes.TOKEN_UNSUBSCRIBE_FAILED);
            });
          });
        }, e;
      }(),
          m = b,
          y = "undefined",
          v = "fcm_token_object_Store",
          D = "fcm_token_details_db",
          I = 2;s.prototype.fcmToken, s.prototype.swScope, s.prototype.vapidKey, s.prototype.subscription, s.prototype.fcmSenderId, s.prototype.fcmPushSet;var k = function (e) {
        function t() {
          return e.call(this, D, I) || this;
        }return u.__extends(t, e), t.prototype.onDBUpgrade = function (e, t) {
          if (t.oldVersion < 1) {
            var r = e.createObjectStore("fcm_token_object_Store", { keyPath: "swScope" });r.createIndex("fcmSenderId", "fcmSenderId", { unique: !1 }), r.createIndex("fcmToken", "fcmToken", { unique: !0 });
          }t.oldVersion < 2 && i();
        }, t.prototype.n = function (e) {
          return u.__awaiter(this, void 0, void 0, function () {
            return u.__generator(this, function (t) {
              return !e.fcmToken || "string" == typeof e.fcmToken && 0 !== e.fcmToken.length ? !e.swScope || "string" == typeof e.swScope && 0 !== e.swScope.length ? !e.vapidKey || e.vapidKey instanceof Uint8Array && 65 === e.vapidKey.length ? !e.subscription || e.subscription instanceof PushSubscription ? !e.fcmSenderId || "string" == typeof e.fcmSenderId && 0 !== e.fcmSenderId.length ? !e.fcmPushSet || "string" == typeof e.fcmPushSet && 0 !== e.fcmPushSet.length ? [2] : [2, Promise.reject(this.e.create(f.codes.BAD_PUSH_SET))] : [2, Promise.reject(this.e.create(f.codes.BAD_SENDER_ID))] : [2, Promise.reject(this.e.create(f.codes.BAD_SUBSCRIPTION))] : [2, Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY))] : [2, Promise.reject(this.e.create(f.codes.BAD_SCOPE))] : [2, Promise.reject(this.e.create(f.codes.BAD_TOKEN))];
            });
          });
        }, t.prototype.getTokenDetailsFromToken = function (e) {
          var t = this;return e ? this.n({ fcmToken: e }).then(function () {
            return t.openDatabase();
          }).then(function (t) {
            return new Promise(function (r, o) {
              var n = t.transaction(["fcm_token_object_Store"]),
                  i = n.objectStore("fcm_token_object_Store"),
                  s = i.index("fcmToken"),
                  a = s.get(e);a.onerror = function (e) {
                o(e.target.error);
              }, a.onsuccess = function (e) {
                var t = e.target.result ? e.target.result : null;r(t);
              };
            });
          }) : Promise.reject(this.e.create(f.codes.BAD_TOKEN));
        }, t.prototype.getTokenDetailsFromSWScope = function (e) {
          var t = this;return e ? this.n({ swScope: e }).then(function () {
            return t.openDatabase();
          }).then(function (t) {
            return new Promise(function (r, o) {
              var n = t.transaction(["fcm_token_object_Store"]),
                  i = n.objectStore("fcm_token_object_Store"),
                  s = i.get(e);s.onerror = function (e) {
                o(e.target.error);
              }, s.onsuccess = function (e) {
                var t = e.target.result ? e.target.result : null;r(t);
              };
            });
          }) : Promise.reject(this.e.create(f.codes.BAD_SCOPE));
        }, t.prototype.saveTokenDetails = function (e) {
          var t = this,
              r = e.swScope,
              o = e.vapidKey,
              n = e.subscription,
              i = e.fcmSenderId,
              s = e.fcmToken,
              a = e.fcmPushSet;return r ? o ? n ? i ? s ? a ? this.n({ swScope: r, vapidKey: o, subscription: n, fcmSenderId: i, fcmToken: s, fcmPushSet: a }).then(function () {
            return t.openDatabase();
          }).then(function (e) {
            var c = { swScope: r, vapidKey: g(o), endpoint: n.endpoint, auth: g(n.getKey("auth")), p256dh: g(n.getKey("p256dh")), fcmSenderId: i, fcmToken: s, fcmPushSet: a, createTime: Date.now() };return new Promise(function (r, o) {
              var n = e.transaction(["fcm_token_object_Store"], t.TRANSACTION_READ_WRITE),
                  i = n.objectStore("fcm_token_object_Store"),
                  s = i.put(c);s.onerror = function (e) {
                o(e.target.error);
              }, s.onsuccess = function (e) {
                r();
              };
            });
          }) : Promise.reject(this.e.create(f.codes.BAD_PUSH_SET)) : Promise.reject(this.e.create(f.codes.BAD_TOKEN)) : Promise.reject(this.e.create(f.codes.BAD_SENDER_ID)) : Promise.reject(this.e.create(f.codes.BAD_SUBSCRIPTION)) : Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY)) : Promise.reject(this.e.create(f.codes.BAD_SCOPE));
        }, t.prototype.deleteToken = function (e) {
          var t = this;return "string" != typeof e || 0 === e.length ? Promise.reject(this.e.create(f.codes.INVALID_DELETE_TOKEN)) : this.getTokenDetailsFromToken(e).then(function (e) {
            if (!e) throw t.e.create(f.codes.DELETE_TOKEN_NOT_FOUND);return t.openDatabase().then(function (r) {
              return new Promise(function (o, n) {
                var i = r.transaction(["fcm_token_object_Store"], t.TRANSACTION_READ_WRITE),
                    s = i.objectStore("fcm_token_object_Store"),
                    a = s.delete(e.swScope);a.onerror = function (e) {
                  n(e.target.error);
                }, a.onsuccess = function (r) {
                  if (0 === r.target.result) return void n(t.e.create(f.codes.FAILED_TO_DELETE_TOKEN));o(e);
                };
              });
            });
          });
        }, t;
      }(l),
          w = k,
          N = "fcm_vapid_details_db",
          P = 1,
          A = function (e) {
        function t() {
          return e.call(this, N, P) || this;
        }return u.__extends(t, e), t.prototype.onDBUpgrade = function (e) {
          e.createObjectStore("fcm_vapid_object_Store", { keyPath: "swScope" });
        }, t.prototype.getVapidFromSWScope = function (e) {
          return "string" != typeof e || 0 === e.length ? Promise.reject(this.e.create(f.codes.BAD_SCOPE)) : this.openDatabase().then(function (t) {
            return new Promise(function (r, o) {
              var n = t.transaction(["fcm_vapid_object_Store"]),
                  i = n.objectStore("fcm_vapid_object_Store"),
                  s = i.get(e);s.onerror = function () {
                o(s.error);
              }, s.onsuccess = function () {
                var e = s.result,
                    t = null;e && (t = e.vapidKey), r(t);
              };
            });
          });
        }, t.prototype.saveVapidDetails = function (e, t) {
          var r = this;if ("string" != typeof e || 0 === e.length) return Promise.reject(this.e.create(f.codes.BAD_SCOPE));if (null === t || 65 !== t.length) return Promise.reject(this.e.create(f.codes.BAD_VAPID_KEY));var o = { swScope: e, vapidKey: t };return this.openDatabase().then(function (e) {
            return new Promise(function (t, n) {
              var i = e.transaction(["fcm_vapid_object_Store"], r.TRANSACTION_READ_WRITE),
                  s = i.objectStore("fcm_vapid_object_Store"),
                  a = s.put(o);a.onerror = function () {
                n(a.error);
              }, a.onsuccess = function () {
                t();
              };
            });
          });
        }, t.prototype.deleteVapidDetails = function (e) {
          var t = this;return this.getVapidFromSWScope(e).then(function (r) {
            if (!r) throw t.e.create(f.codes.DELETE_SCOPE_NOT_FOUND);return t.openDatabase().then(function (o) {
              return new Promise(function (n, i) {
                var s = o.transaction(["fcm_vapid_object_Store"], t.TRANSACTION_READ_WRITE),
                    a = s.objectStore("fcm_vapid_object_Store"),
                    c = a.delete(e);c.onerror = function () {
                  i(c.error);
                }, c.onsuccess = function () {
                  if (0 === c.result) return void i(t.e.create(f.codes.FAILED_DELETE_VAPID_KEY));n(r);
                };
              });
            });
          });
        }, t;
      }(l),
          O = A,
          F = "messagingSenderId",
          C = function () {
        function e(e) {
          var t = this;if (this.e = new _.ErrorFactory("messaging", "Messaging", f.map), !e.options[F] || "string" != typeof e.options[F]) throw this.e.create(f.codes.BAD_SENDER_ID);this.i = e.options[F], this.s = new w(), this.a = new O(), this.c = new m(), this.app = e, this.INTERNAL = {}, this.INTERNAL.delete = function () {
            return t.delete();
          };
        }return e.prototype.getToken = function () {
          var e = this,
              t = this.u();if ("granted" !== t) return "denied" === t ? Promise.reject(this.e.create(f.codes.NOTIFICATIONS_BLOCKED)) : Promise.resolve(null);var r;return this._().then(function (t) {
            return r = t, e.s.getTokenDetailsFromSWScope(r.scope);
          }).then(function (t) {
            return t ? e.manageExistingToken(t, r) : e.getNewToken(r);
          });
        }, e.prototype.manageExistingToken = function (e, t) {
          var r = this;return this.isTokenStillValid(e).then(function (o) {
            return o ? Date.now() < e.createTime + 6048e5 ? e.fcmToken : r.updateToken(e, t) : r.deleteToken(e.fcmToken).then(function () {
              return r.getNewToken(t);
            });
          });
        }, e.prototype.isTokenStillValid = function (e) {
          return this.d().then(function (t) {
            return g(t) === e.vapidKey;
          });
        }, e.prototype.updateToken = function (e, t) {
          var r,
              o,
              n,
              i = this;return this.d().then(function (e) {
            return r = e, i.p(t, r);
          }).then(function (t) {
            return n = t, i.c.updateToken(i.i, e.fcmToken, e.fcmPushSet, n, r);
          }).catch(function (t) {
            return i.deleteToken(e.fcmToken).then(function () {
              throw t;
            });
          }).then(function (s) {
            o = s;var a = { swScope: t.scope, vapidKey: r, subscription: n, fcmSenderId: i.i, fcmToken: o, fcmPushSet: e.fcmPushSet };return i.s.saveTokenDetails(a);
          }).then(function () {
            return i.a.saveVapidDetails(t.scope, r);
          }).then(function () {
            return o;
          });
        }, e.prototype.getNewToken = function (e) {
          var t,
              r,
              o,
              n = this;return this.d().then(function (r) {
            return t = r, n.p(e, t);
          }).then(function (e) {
            return r = e, n.c.getToken(n.i, r, t);
          }).then(function (i) {
            o = i;var s = { swScope: e.scope, vapidKey: t, subscription: r, fcmSenderId: n.i, fcmToken: o.token, fcmPushSet: o.pushSet };return n.s.saveTokenDetails(s);
          }).then(function () {
            return n.a.saveVapidDetails(e.scope, t);
          }).then(function () {
            return o.token;
          });
        }, e.prototype.deleteToken = function (e) {
          var t = this;return this.s.deleteToken(e).then(function (e) {
            return t.c.deleteToken(e.fcmSenderId, e.fcmToken, e.fcmPushSet);
          }).then(function () {
            return t._().then(function (e) {
              if (e) return e.pushManager.getSubscription();
            }).then(function (e) {
              if (e) return e.unsubscribe();
            });
          });
        }, e.prototype._ = function () {
          throw this.e.create(f.codes.SHOULD_BE_INHERITED);
        }, e.prototype.d = function () {
          throw this.e.create(f.codes.SHOULD_BE_INHERITED);
        }, e.prototype.requestPermission = function () {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.p = function (e, t) {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.useServiceWorker = function (e) {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.usePublicVapidKey = function (e) {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.onMessage = function (e, t, r) {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.onTokenRefresh = function (e, t, r) {
          throw this.e.create(f.codes.AVAILABLE_IN_WINDOW);
        }, e.prototype.setBackgroundMessageHandler = function (e) {
          throw this.e.create(f.codes.AVAILABLE_IN_SW);
        }, e.prototype.delete = function () {
          return Promise.all([this.s.closeDatabase(), this.a.closeDatabase()]);
        }, e.prototype.u = function () {
          return Notification.permission;
        }, e.prototype.getTokenDetailsModel = function () {
          return this.s;
        }, e.prototype.getVapidDetailsModel = function () {
          return this.a;
        }, e.prototype.getIIDModel = function () {
          return this.c;
        }, e;
      }(),
          R = C,
          L = { TYPE_OF_MSG: "firebase-messaging-msg-type", DATA: "firebase-messaging-msg-data" },
          U = { PUSH_MSG_RECEIVED: "push-msg-received", NOTIFICATION_CLICKED: "notification-clicked" },
          B = function B(e, t) {
        return r = {}, r[L.TYPE_OF_MSG] = e, r[L.DATA] = t, r;var r;
      },
          M = { PARAMS: L, TYPES_OF_MSG: U, createNewMsg: B },
          K = { path: "/firebase-messaging-sw.js", scope: "/firebase-cloud-messaging-push-scope" },
          W = function W(e) {
        for (var t = "=".repeat((4 - e.length % 4) % 4), r = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), o = window.atob(r), n = new Uint8Array(o.length), i = 0; i < o.length; ++i) {
          n[i] = o.charCodeAt(i);
        }return n;
      },
          V = function (e) {
        function t(t) {
          var r = e.call(this, t) || this;return r.f = null, r.h = Object(_.createSubscribe)(function (e) {
            r.f = e;
          }), r.l = null, r.g = Object(_.createSubscribe)(function (e) {
            r.l = e;
          }), r.S, r.T, r.f = null, r.h = Object(_.createSubscribe)(function (e) {
            r.f = e;
          }), r.l = null, r.g = Object(_.createSubscribe)(function (e) {
            r.l = e;
          }), r.b(), r;
        }return u.__extends(t, e), t.prototype.getToken = function () {
          var t = this;return this.m() ? this.y().then(function () {
            return e.prototype.getToken.call(t);
          }) : Promise.reject(this.e.create(f.codes.UNSUPPORTED_BROWSER));
        }, t.prototype.y = function () {
          var e = this;if (this.T) return this.T;var t = document.querySelector('link[rel="manifest"]');return this.T = t ? fetch(t.href).then(function (e) {
            return e.json();
          }).catch(function () {}).then(function (t) {
            if (t && t.gcm_sender_id && "103953800507" !== t.gcm_sender_id) throw e.e.create(f.codes.INCORRECT_GCM_SENDER_ID);
          }) : Promise.resolve(), this.T;
        }, t.prototype.requestPermission = function () {
          return u.__awaiter(this, void 0, void 0, function () {
            var e = this;return u.__generator(this, function (t) {
              return "granted" === Notification.permission ? [2] : [2, new Promise(function (t, r) {
                var o = function o(_o3) {
                  return "granted" === _o3 ? t() : r("denied" === _o3 ? e.e.create(f.codes.PERMISSION_BLOCKED) : e.e.create(f.codes.PERMISSION_DEFAULT));
                },
                    n = Notification.requestPermission(o);n && n.then(o);
              })];
            });
          });
        }, t.prototype.useServiceWorker = function (e) {
          if (!(e instanceof ServiceWorkerRegistration)) throw this.e.create(f.codes.SW_REGISTRATION_EXPECTED);if (void 0 !== this.S) throw this.e.create(f.codes.USE_SW_BEFORE_GET_TOKEN);this.S = e;
        }, t.prototype.usePublicVapidKey = function (e) {
          if ("string" != typeof e) throw this.e.create(f.codes.INVALID_PUBLIC_VAPID_KEY);if (void 0 !== this.v) throw this.e.create(f.codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);var t = W(e);if (65 !== t.length) throw this.e.create(f.codes.PUBLIC_KEY_DECRYPTION_FAILED);this.v = t;
        }, t.prototype.onMessage = function (e, t, r) {
          return this.h(e, t, r);
        }, t.prototype.onTokenRefresh = function (e, t, r) {
          return this.g(e, t, r);
        }, t.prototype.D = function (e) {
          var t = this,
              r = e.installing || e.waiting || e.active;return new Promise(function (o, n) {
            if (!r) return void n(t.e.create(f.codes.NO_SW_IN_REG));if ("activated" === r.state) return void o(e);if ("redundant" === r.state) return void n(t.e.create(f.codes.SW_REG_REDUNDANT));var i = function i() {
              if ("activated" === r.state) o(e);else {
                if ("redundant" !== r.state) return;n(t.e.create(f.codes.SW_REG_REDUNDANT));
              }r.removeEventListener("statechange", i);
            };r.addEventListener("statechange", i);
          });
        }, t.prototype._ = function () {
          var e = this;return this.S ? this.D(this.S) : (this.S = null, navigator.serviceWorker.register(K.path, { scope: K.scope }).catch(function (t) {
            throw e.e.create(f.codes.FAILED_DEFAULT_REGISTRATION, { browserErrorMessage: t.message });
          }).then(function (t) {
            return e.D(t).then(function () {
              return e.S = t, t.update(), t;
            });
          }));
        }, t.prototype.d = function () {
          return this.v ? Promise.resolve(this.v) : Promise.resolve(T.DEFAULT_PUBLIC_VAPID_KEY);
        }, t.prototype.p = function (e, t) {
          return e.pushManager.getSubscription().then(function (r) {
            return r || e.pushManager.subscribe({ userVisibleOnly: !0, applicationServerKey: t });
          });
        }, t.prototype.b = function () {
          var e = this;"serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function (t) {
            if (t.data && t.data[M.PARAMS.TYPE_OF_MSG]) {
              var r = t.data;switch (r[M.PARAMS.TYPE_OF_MSG]) {case M.TYPES_OF_MSG.PUSH_MSG_RECEIVED:case M.TYPES_OF_MSG.NOTIFICATION_CLICKED:
                  var o = r[M.PARAMS.DATA];e.f && e.f.next(o);}
            }
          }, !1);
        }, t.prototype.m = function () {
          return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
        }, t;
      }(R),
          j = V,
          G = function (e) {
        function t(t) {
          var r = e.call(this, t) || this;return self.addEventListener("push", function (e) {
            return r.I(e);
          }, !1), self.addEventListener("pushsubscriptionchange", function (e) {
            return r.k(e);
          }, !1), self.addEventListener("notificationclick", function (e) {
            return r.w(e);
          }, !1), r.N = null, r;
        }return u.__extends(t, e), t.prototype.I = function (e) {
          var t,
              r = this;try {
            t = e.data.json();
          } catch (e) {
            return;
          }var o = this.P().then(function (e) {
            if (e) {
              if (t.notification || r.N) return r.A(t);
            } else {
              var o = r.O(t);if (o) {
                var n = o.title || "";return r._().then(function (e) {
                  return e.showNotification(n, o);
                });
              }if (r.N) return r.N(t);
            }
          });e.waitUntil(o);
        }, t.prototype.k = function (e) {
          var t = this,
              r = this._().then(function (e) {
            return e.pushManager.getSubscription().then(function (e) {}).catch(function (r) {
              return t.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope).then(function (e) {
                if (!e) throw r;return t.deleteToken(e.fcmToken).then(function () {
                  throw r;
                });
              });
            });
          }).catch(function (e) {
            throw t.e.create(f.codes.UNABLE_TO_RESUBSCRIBE, { message: e });
          });e.waitUntil(r);
        }, t.prototype.w = function (e) {
          var t = this;if (e.notification && e.notification.data && e.notification.data.FCM_MSG) {
            e.stopImmediatePropagation(), e.notification.close();var r = e.notification.data.FCM_MSG;if (r.notification) {
              var o = r.notification.click_action;if (o) {
                var n = this.F(o).then(function (e) {
                  return e ? e.focus() : self.clients.openWindow(o);
                }).then(function (e) {
                  if (e) {
                    r.notification, delete r.notification;var o = M.createNewMsg(M.TYPES_OF_MSG.NOTIFICATION_CLICKED, r);return t.C(e, o);
                  }
                });e.waitUntil(n);
              }
            }
          }
        }, t.prototype.O = function (e) {
          if (e && "object" == _typeof(e.notification)) {
            var t = Object.assign({}, e.notification);return t.data = (r = {}, r.FCM_MSG = e, r), t;var r;
          }
        }, t.prototype.setBackgroundMessageHandler = function (e) {
          if (!e || "function" != typeof e) throw this.e.create(f.codes.BG_HANDLER_FUNCTION_EXPECTED);this.N = e;
        }, t.prototype.F = function (e) {
          var t = new URL(e, self.location).href;return self.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (e) {
            for (var r = null, o = 0; o < e.length; o++) {
              if (new URL(e[o].url, self.location).href === t) {
                r = e[o];break;
              }
            }return r || null;
          });
        }, t.prototype.C = function (e, t) {
          return u.__awaiter(this, void 0, void 0, function () {
            return u.__generator(this, function (r) {
              return e ? (e.postMessage(t), [2]) : [2, Promise.reject(this.e.create(f.codes.NO_WINDOW_CLIENT_TO_MSG))];
            });
          });
        }, t.prototype.P = function () {
          return self.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (e) {
            return e.some(function (e) {
              return "visible" === e.visibilityState;
            });
          });
        }, t.prototype.A = function (e) {
          var t = this;return self.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (r) {
            var o = M.createNewMsg(M.TYPES_OF_MSG.PUSH_MSG_RECEIVED, e);return Promise.all(r.map(function (e) {
              return t.C(e, o);
            }));
          });
        }, t.prototype._ = function () {
          return Promise.resolve(self.registration);
        }, t.prototype.d = function () {
          var e = this;return this._().then(function (t) {
            return e.getVapidDetailsModel().getVapidFromSWScope(t.scope);
          }).then(function (e) {
            return null === e ? T.DEFAULT_PUBLIC_VAPID_KEY : e;
          });
        }, t;
      }(R),
          Y = G,
          H = r(7);t.registerMessaging = a, a(H.firebase);
    } }, [118]);
} catch (e) {
  throw Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.");
}

/*!
 * @license Firebase v4.11.0
 * Build: rev-6aed77a
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([2], { 120: function _(t, e, n) {
      n(121);
    }, 121: function _(t, e, n) {
      "use strict";
      function r(t) {
        return "storage/" + t;
      }function o() {
        return new te(ee.UNKNOWN, "An unknown error occurred, please check the error payload for server response.");
      }function i(t) {
        return new te(ee.OBJECT_NOT_FOUND, "Object '" + t + "' does not exist.");
      }function a(t) {
        return new te(ee.QUOTA_EXCEEDED, "Quota for bucket '" + t + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
      }function s() {
        return new te(ee.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.");
      }function u(t) {
        return new te(ee.UNAUTHORIZED, "User does not have permission to access '" + t + "'.");
      }function c() {
        return new te(ee.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
      }function l() {
        return new te(ee.CANCELED, "User canceled the upload/download.");
      }function h(t) {
        return new te(ee.INVALID_URL, "Invalid URL '" + t + "'.");
      }function p(t) {
        return new te(ee.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.");
      }function f() {
        return new te(ee.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
      }function d() {
        return new te(ee.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.");
      }function _() {
        return new te(ee.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
      }function v(t, e, n) {
        return new te(ee.INVALID_ARGUMENT, "Invalid argument in `" + e + "` at index " + t + ": " + n);
      }function b(t, e, n, r) {
        var o, i;return t === e ? (o = t, i = 1 === t ? "argument" : "arguments") : (o = "between " + t + " and " + e, i = "arguments"), new te(ee.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + n + "`: Expected " + o + " " + i + ", received " + r + ".");
      }function m() {
        return new te(ee.APP_DELETED, "The Firebase app was deleted.");
      }function g(t) {
        return new te(ee.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
      }function y(t, e) {
        return new te(ee.INVALID_FORMAT, "String does not match format '" + t + "': " + e);
      }function R(t) {
        throw new te(ee.INTERNAL_ERROR, "Internal error: " + t);
      }function E(t) {
        switch (t) {case ne.RAW:case ne.BASE64:case ne.BASE64URL:case ne.DATA_URL:
            return;default:
            throw "Expected one of the event types: [" + ne.RAW + ", " + ne.BASE64 + ", " + ne.BASE64URL + ", " + ne.DATA_URL + "].";}
      }function w(t, e) {
        switch (t) {case ne.RAW:
            return new re(U(e));case ne.BASE64:case ne.BASE64URL:
            return new re(A(t, e));case ne.DATA_URL:
            return new re(N(e), O(e));}throw o();
      }function U(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t.charCodeAt(n);if (r <= 127) e.push(r);else if (r <= 2047) e.push(192 | r >> 6, 128 | 63 & r);else if (55296 == (64512 & r)) {
            var o = n < t.length - 1 && 56320 == (64512 & t.charCodeAt(n + 1));if (o) {
              var i = r,
                  a = t.charCodeAt(++n);r = 65536 | (1023 & i) << 10 | 1023 & a, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r);
            } else e.push(239, 191, 189);
          } else 56320 == (64512 & r) ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r);
        }return new Uint8Array(e);
      }function T(t) {
        var e;try {
          e = decodeURIComponent(t);
        } catch (t) {
          throw y(ne.DATA_URL, "Malformed data URL.");
        }return U(e);
      }function A(t, e) {
        switch (t) {case ne.BASE64:
            var n = -1 !== e.indexOf("-"),
                r = -1 !== e.indexOf("_");if (n || r) {
              var o = n ? "-" : "_";throw y(t, "Invalid character '" + o + "' found: is it base64url encoded?");
            }break;case ne.BASE64URL:
            var i = -1 !== e.indexOf("+"),
                a = -1 !== e.indexOf("/");if (i || a) {
              var o = i ? "+" : "/";throw y(t, "Invalid character '" + o + "' found: is it base64 encoded?");
            }e = e.replace(/-/g, "+").replace(/_/g, "/");}var s;try {
          s = atob(e);
        } catch (e) {
          throw y(t, "Invalid character found");
        }for (var u = new Uint8Array(s.length), c = 0; c < s.length; c++) {
          u[c] = s.charCodeAt(c);
        }return u;
      }function N(t) {
        var e = new oe(t);return e.base64 ? A(ne.BASE64, e.rest) : T(e.rest);
      }function O(t) {
        return new oe(t).contentType;
      }function C(t, e) {
        return !!(t.length >= e.length) && t.substring(t.length - e.length) === e;
      }function S(t) {
        switch (t) {case ae.RUNNING:case ae.PAUSING:case ae.CANCELING:
            return se.RUNNING;case ae.PAUSED:
            return se.PAUSED;case ae.SUCCESS:
            return se.SUCCESS;case ae.CANCELED:
            return se.CANCELED;case ae.ERROR:default:
            return se.ERROR;}
      }function k(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }function I(t, e) {
        for (var n in t) {
          k(t, n) && e(n, t[n]);
        }
      }function L(t) {
        if (null == t) return {};var e = {};return I(t, function (t, n) {
          e[t] = n;
        }), e;
      }function P(t) {
        return new Promise(t);
      }function x(t) {
        return Promise.resolve(t);
      }function D(t) {
        return Promise.reject(t);
      }function M(t) {
        return null != t;
      }function W(t) {
        return void 0 !== t;
      }function B(t) {
        return "function" == typeof t;
      }function G(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }function j(t) {
        return G(t) && null !== t;
      }function q(t) {
        return G(t) && !Array.isArray(t);
      }function F(t) {
        return "string" == typeof t || t instanceof String;
      }function H(t) {
        return "number" == typeof t || t instanceof Number;
      }function z(t) {
        return X() && t instanceof Blob;
      }function X() {
        return "undefined" != typeof Blob;
      }function V(t) {
        var e;try {
          e = JSON.parse(t);
        } catch (t) {
          return null;
        }return q(e) ? e : null;
      }function K(t) {
        if (0 == t.length) return null;var e = t.lastIndexOf("/");return -1 === e ? "" : t.slice(0, e);
      }function Z(t, e) {
        var n = e.split("/").filter(function (t) {
          return t.length > 0;
        }).join("/");return 0 === t.length ? n : t + "/" + n;
      }function J(t) {
        var e = t.lastIndexOf("/", t.length - 2);return -1 === e ? t : t.slice(e + 1);
      }function Q(t) {
        return Vt + Zt + t;
      }function Y(t) {
        return Kt + Zt + t;
      }function $(t) {
        return Vt + Jt + t;
      }function tt(t) {
        var e = encodeURIComponent,
            n = "?";return I(t, function (t, r) {
          var o = e(t) + "=" + e(r);n = n + o + "&";
        }), n = n.slice(0, -1);
      }function et(t, e) {
        return e;
      }function nt(t) {
        return !F(t) || t.length < 2 ? t : (t = t, J(t));
      }function rt() {
        function t(t, e) {
          return nt(e);
        }function e(t, e) {
          return M(e) ? +e : e;
        }function n(t, e) {
          if (!(F(e) && e.length > 0)) return [];var n = encodeURIComponent;return e.split(",").map(function (e) {
            var r = t.bucket,
                o = t.fullPath;return Y("/b/" + n(r) + "/o/" + n(o)) + tt({ alt: "media", token: e });
          });
        }if (pe) return pe;var r = [];r.push(new he("bucket")), r.push(new he("generation")), r.push(new he("metageneration")), r.push(new he("name", "fullPath", !0));var o = new he("name");o.xform = t, r.push(o);var i = new he("size");return i.xform = e, r.push(i), r.push(new he("timeCreated")), r.push(new he("updated")), r.push(new he("md5Hash", null, !0)), r.push(new he("cacheControl", null, !0)), r.push(new he("contentDisposition", null, !0)), r.push(new he("contentEncoding", null, !0)), r.push(new he("contentLanguage", null, !0)), r.push(new he("contentType", null, !0)), r.push(new he("metadata", "customMetadata", !0)), r.push(new he("downloadTokens", "downloadURLs", !1, n)), pe = r;
      }function ot(t, e) {
        function n() {
          var n = t.bucket,
              r = t.fullPath,
              o = new le(n, r);return e.makeStorageReference(o);
        }Object.defineProperty(t, "ref", { get: n });
      }function it(t, e, n) {
        var r = {};r.type = "file";for (var o = n.length, i = 0; i < o; i++) {
          var a = n[i];r[a.local] = a.xform(r, e[a.server]);
        }return ot(r, t), r;
      }function at(t, e, n) {
        var r = V(e);return null === r ? null : it(t, r, n);
      }function st(t, e) {
        for (var n = {}, r = e.length, o = 0; o < r; o++) {
          var i = e[o];i.writable && (n[i.server] = t[i.local]);
        }return JSON.stringify(n);
      }function ut(t) {
        if (!t || !G(t)) throw "Expected Metadata object.";for (var e in t) {
          var n = t[e];if ("customMetadata" === e) {
            if (!G(n)) throw "Expected object for 'customMetadata' mapping.";
          } else if (j(n)) throw "Mapping for '" + e + "' cannot be an object.";
        }
      }function ct(t, e, n) {
        for (var r = e.length, o = e.length, i = 0; i < e.length; i++) {
          if (e[i].optional) {
            r = i;break;
          }
        }if (!(r <= n.length && n.length <= o)) throw b(r, o, t, n.length);for (var i = 0; i < n.length; i++) {
          try {
            e[i].validator(n[i]);
          } catch (e) {
            throw e instanceof Error ? v(i, t, e.message) : v(i, t, e);
          }
        }
      }function lt(t, e) {
        return function (n) {
          t(n), e(n);
        };
      }function ht(t, e) {
        function n(t) {
          if (!F(t)) throw "Expected string.";
        }var r;return r = t ? lt(n, t) : n, new fe(r, e);
      }function pt() {
        function t(t) {
          if (!(t instanceof Uint8Array || t instanceof ArrayBuffer || X() && t instanceof Blob)) throw "Expected Blob or File.";
        }return new fe(t);
      }function ft(t) {
        return new fe(ut, t);
      }function dt() {
        function t(t) {
          if (!(H(t) && t >= 0)) throw "Expected a number 0 or greater.";
        }return new fe(t);
      }function _t(t, e) {
        function n(e) {
          if (!(null === e || M(e) && e instanceof Object)) throw "Expected an Object.";void 0 !== t && null !== t && t(e);
        }return new fe(n, e);
      }function vt(t) {
        function e(t) {
          if (null !== t && !B(t)) throw "Expected a Function.";
        }return new fe(e, t);
      }function bt() {
        return "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0;
      }function mt() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }var n = bt();if (void 0 !== n) {
          for (var r = new n(), o = 0; o < t.length; o++) {
            r.append(t[o]);
          }return r.getBlob();
        }if (X()) return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs");
      }function gt(t, e, n) {
        return t.webkitSlice ? t.webkitSlice(e, n) : t.mozSlice ? t.mozSlice(e, n) : t.slice ? t.slice(e, n) : null;
      }function yt(t, e) {
        return -1 !== t.indexOf(e);
      }function Rt(t) {
        return Array.prototype.slice.call(t);
      }function Et(t, e) {
        var n = t.indexOf(e);-1 !== n && t.splice(n, 1);
      }function wt(t) {
        if (!t) throw o();
      }function Ut(t, e) {
        function n(n, r) {
          var o = at(t, r, e);return wt(null !== o), o;
        }return n;
      }function Tt(t) {
        function e(e, n) {
          var r;return r = 401 === e.getStatus() ? s() : 402 === e.getStatus() ? a(t.bucket) : 403 === e.getStatus() ? u(t.path) : n, r.setServerResponseProp(n.serverResponseProp()), r;
        }return e;
      }function At(t) {
        function e(e, r) {
          var o = n(e, r);return 404 === e.getStatus() && (o = i(t.path)), o.setServerResponseProp(r.serverResponseProp()), o;
        }var n = Tt(t);return e;
      }function Nt(t, e, n) {
        var r = e.fullServerUrl(),
            o = Q(r),
            i = t.maxOperationRetryTime(),
            a = new _e(o, "GET", Ut(t, n), i);return a.errorHandler = At(e), a;
      }function Ot(t, e, n, r) {
        var o = e.fullServerUrl(),
            i = Q(o),
            a = st(n, r),
            s = { "Content-Type": "application/json; charset=utf-8" },
            u = t.maxOperationRetryTime(),
            c = new _e(i, "PATCH", Ut(t, r), u);return c.headers = s, c.body = a, c.errorHandler = At(e), c;
      }function Ct(t, e) {
        function n(t, e) {}var r = e.fullServerUrl(),
            o = Q(r),
            i = t.maxOperationRetryTime(),
            a = new _e(o, "DELETE", n, i);return a.successCodes = [200, 204], a.errorHandler = At(e), a;
      }function St(t, e) {
        return t && t.contentType || e && e.type() || "application/octet-stream";
      }function kt(t, e, n) {
        var r = L(n);return r.fullPath = t.path, r.size = e.size(), r.contentType || (r.contentType = St(null, e)), r;
      }function It(t, e, n, r, o) {
        var i = e.bucketOnlyServerUrl(),
            a = { "X-Goog-Upload-Protocol": "multipart" },
            s = function () {
          for (var t = "", e = 0; e < 2; e++) {
            t += ("" + Math.random()).slice(2);
          }return t;
        }();a["Content-Type"] = "multipart/related; boundary=" + s;var u = kt(e, r, o),
            c = st(u, n),
            l = "--" + s + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + c + "\r\n--" + s + "\r\nContent-Type: " + u.contentType + "\r\n\r\n",
            h = "\r\n--" + s + "--",
            p = de.getBlob(l, r, h);if (null === p) throw f();var d = { name: u.fullPath },
            _ = $(i),
            v = t.maxUploadRetryTime(),
            b = new _e(_, "POST", Ut(t, n), v);return b.urlParams = d, b.headers = a, b.body = p.uploadData(), b.errorHandler = Tt(e), b;
      }function Lt(t, e) {
        var n;try {
          n = t.getResponseHeader("X-Goog-Upload-Status");
        } catch (t) {
          wt(!1);
        }return wt(yt(e || ["active"], n)), n;
      }function Pt(t, e, n, r, o) {
        function i(t, e) {
          Lt(t);var n;try {
            n = t.getResponseHeader("X-Goog-Upload-URL");
          } catch (t) {
            wt(!1);
          }return wt(F(n)), n;
        }var a = e.bucketOnlyServerUrl(),
            s = kt(e, r, o),
            u = { name: s.fullPath },
            c = $(a),
            l = { "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": r.size(), "X-Goog-Upload-Header-Content-Type": s.contentType, "Content-Type": "application/json; charset=utf-8" },
            h = st(s, n),
            p = t.maxUploadRetryTime(),
            f = new _e(c, "POST", i, p);return f.urlParams = u, f.headers = l, f.body = h, f.errorHandler = Tt(e), f;
      }function xt(t, e, n, r) {
        function o(t, e) {
          var n,
              o = Lt(t, ["active", "final"]);try {
            n = t.getResponseHeader("X-Goog-Upload-Size-Received");
          } catch (t) {
            wt(!1);
          }var i = parseInt(n, 10);return wt(!isNaN(i)), new ve(i, r.size(), "final" === o);
        }var i = { "X-Goog-Upload-Command": "query" },
            a = t.maxUploadRetryTime(),
            s = new _e(n, "POST", o, a);return s.headers = i, s.errorHandler = Tt(e), s;
      }function Dt(t, e, n, r, o, i, a, s) {
        function u(t, n) {
          var o,
              a = Lt(t, ["active", "final"]),
              s = c.current + h,
              u = r.size();return o = "final" === a ? Ut(e, i)(t, n) : null, new ve(s, u, "final" === a, o);
        }var c = new ve(0, 0);if (a ? (c.current = a.current, c.total = a.total) : (c.current = 0, c.total = r.size()), r.size() !== c.total) throw d();var l = c.total - c.current,
            h = l;o > 0 && (h = Math.min(h, o));var p = c.current,
            _ = p + h,
            v = h === l ? "upload, finalize" : "upload",
            b = { "X-Goog-Upload-Command": v, "X-Goog-Upload-Offset": c.current },
            m = r.slice(p, _);if (null === m) throw f();var g = e.maxUploadRetryTime(),
            y = new _e(n, "POST", u, g);return y.headers = b, y.body = m.uploadData(), y.progressCallback = s || null, y.errorHandler = Tt(t), y;
      }function Mt(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }x(!0).then(function () {
            t.apply(null, e);
          });
        };
      }function Wt(t, e, n) {
        function r() {
          return 2 === h;
        }function o() {
          p || (p = !0, e.apply(null, arguments));
        }function i(e) {
          c = setTimeout(function () {
            c = null, t(a, r());
          }, e);
        }function a(t) {
          for (var e = [], n = 1; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
          }if (!p) {
            if (t) return void o.apply(null, arguments);if (r() || l) return void o.apply(null, arguments);u < 64 && (u *= 2);var a;1 === h ? (h = 2, a = 0) : a = 1e3 * (u + Math.random()), i(a);
          }
        }function s(t) {
          f || (f = !0, p || (null !== c ? (t || (h = 2), clearTimeout(c), i(0)) : t || (h = 1)));
        }var u = 1,
            c = null,
            l = !1,
            h = 0,
            p = !1,
            f = !1;return i(0), setTimeout(function () {
          l = !0, s(!0);
        }, n), s;
      }function Bt(t) {
        t(!1);
      }function Gt(t, e) {
        null !== e && e.length > 0 && (t.Authorization = "Firebase " + e);
      }function jt(t) {
        var e = void 0 !== Xt.default ? Xt.default.SDK_VERSION : "AppManager";t["X-Firebase-Storage-Version"] = "webjs/" + e;
      }function qt(t, e, n) {
        var r = tt(t.urlParams),
            o = t.url + r,
            i = L(t.headers);return Gt(i, e), jt(i), new Ue(o, t.method, i, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, n);
      }function Ft(t, e, n) {
        return new Ae(t, new ce(), n);
      }function Ht(t) {
        var e = { TaskState: se, TaskEvent: ie, StringFormat: ne, Storage: Ae, Reference: ye };t.INTERNAL.registerService(Oe, Ft, e, void 0, !0);
      }Object.defineProperty(e, "__esModule", { value: !0 });var zt,
          Xt = n(7),
          Vt = "https://firebasestorage.googleapis.com",
          Kt = "https://firebasestorage.googleapis.com",
          Zt = "/v0",
          Jt = "/v0",
          Qt = 12e4,
          Yt = 6e4,
          $t = -9007199254740991,
          te = function () {
        function t(t, e) {
          this.t = r(t), this.e = "Firebase Storage: " + e, this.n = null, this.r = "FirebaseError";
        }return t.prototype.codeProp = function () {
          return this.code;
        }, t.prototype.codeEquals = function (t) {
          return r(t) === this.codeProp();
        }, t.prototype.serverResponseProp = function () {
          return this.n;
        }, t.prototype.setServerResponseProp = function (t) {
          this.n = t;
        }, Object.defineProperty(t.prototype, "name", { get: function get() {
            return this.r;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "code", { get: function get() {
            return this.t;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "message", { get: function get() {
            return this.e;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "serverResponse", { get: function get() {
            return this.n;
          }, enumerable: !0, configurable: !0 }), t;
      }(),
          ee = { UNKNOWN: "unknown", OBJECT_NOT_FOUND: "object-not-found", BUCKET_NOT_FOUND: "bucket-not-found", PROJECT_NOT_FOUND: "project-not-found", QUOTA_EXCEEDED: "quota-exceeded", UNAUTHENTICATED: "unauthenticated", UNAUTHORIZED: "unauthorized", RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded", INVALID_CHECKSUM: "invalid-checksum", CANCELED: "canceled", INVALID_EVENT_NAME: "invalid-event-name", INVALID_URL: "invalid-url", INVALID_DEFAULT_BUCKET: "invalid-default-bucket", NO_DEFAULT_BUCKET: "no-default-bucket", CANNOT_SLICE_BLOB: "cannot-slice-blob", SERVER_FILE_WRONG_SIZE: "server-file-wrong-size", NO_DOWNLOAD_URL: "no-download-url", INVALID_ARGUMENT: "invalid-argument", INVALID_ARGUMENT_COUNT: "invalid-argument-count", APP_DELETED: "app-deleted", INVALID_ROOT_OPERATION: "invalid-root-operation", INVALID_FORMAT: "invalid-format", INTERNAL_ERROR: "internal-error" },
          ne = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" },
          re = function () {
        function t(t, e) {
          this.data = t, this.contentType = e || null;
        }return t;
      }(),
          oe = function () {
        function t(t) {
          this.base64 = !1, this.contentType = null;var e = t.match(/^data:([^,]+)?,/);if (null === e) throw y(ne.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");var n = e[1] || null;null != n && (this.base64 = C(n, ";base64"), this.contentType = this.base64 ? n.substring(0, n.length - 7) : n), this.rest = t.substring(t.indexOf(",") + 1);
        }return t;
      }(),
          ie = { STATE_CHANGED: "state_changed" },
          ae = { RUNNING: "running", PAUSING: "pausing", PAUSED: "paused", SUCCESS: "success", CANCELING: "canceling", CANCELED: "canceled", ERROR: "error" },
          se = { RUNNING: "running", PAUSED: "paused", SUCCESS: "success", CANCELED: "canceled", ERROR: "error" };!function (t) {
        t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT";
      }(zt || (zt = {}));var ue = function () {
        function t() {
          var t = this;this.o = !1, this.i = new XMLHttpRequest(), this.a = zt.NO_ERROR, this.s = P(function (e, n) {
            t.i.addEventListener("abort", function (n) {
              t.a = zt.ABORT, e(t);
            }), t.i.addEventListener("error", function (n) {
              t.a = zt.NETWORK_ERROR, e(t);
            }), t.i.addEventListener("load", function (n) {
              e(t);
            });
          });
        }return t.prototype.send = function (t, e, n, r) {
          var o = this;if (this.o) throw R("cannot .send() more than once");return this.o = !0, this.i.open(e, t, !0), M(r) && I(r, function (t, e) {
            o.i.setRequestHeader(t, "" + e);
          }), M(n) ? this.i.send(n) : this.i.send(), this.s;
        }, t.prototype.getErrorCode = function () {
          if (!this.o) throw R("cannot .getErrorCode() before sending");return this.a;
        }, t.prototype.getStatus = function () {
          if (!this.o) throw R("cannot .getStatus() before sending");try {
            return this.i.status;
          } catch (t) {
            return -1;
          }
        }, t.prototype.getResponseText = function () {
          if (!this.o) throw R("cannot .getResponseText() before sending");return this.i.responseText;
        }, t.prototype.abort = function () {
          this.i.abort();
        }, t.prototype.getResponseHeader = function (t) {
          return this.i.getResponseHeader(t);
        }, t.prototype.addUploadProgressListener = function (t) {
          M(this.i.upload) && this.i.upload.addEventListener("progress", t);
        }, t.prototype.removeUploadProgressListener = function (t) {
          M(this.i.upload) && this.i.upload.removeEventListener("progress", t);
        }, t;
      }(),
          ce = function () {
        function t() {}return t.prototype.createXhrIo = function () {
          return new ue();
        }, t;
      }(),
          le = function () {
        function t(t, e) {
          this.bucket = t, this.u = e;
        }return Object.defineProperty(t.prototype, "path", { get: function get() {
            return this.u;
          }, enumerable: !0, configurable: !0 }), t.prototype.fullServerUrl = function () {
          var t = encodeURIComponent;return "/b/" + t(this.bucket) + "/o/" + t(this.path);
        }, t.prototype.bucketOnlyServerUrl = function () {
          return "/b/" + encodeURIComponent(this.bucket) + "/o";
        }, t.makeFromBucketSpec = function (e) {
          var n;try {
            n = t.makeFromUrl(e);
          } catch (n) {
            return new t(e, "");
          }if ("" === n.path) return n;throw p(e);
        }, t.makeFromUrl = function (e) {
          function n(t) {
            "/" === t.path.charAt(t.path.length - 1) && (t.u = t.u.slice(0, -1));
          }function r(t) {
            t.u = decodeURIComponent(t.path);
          }for (var o = null, i = RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$", "i"), a = { bucket: 1, path: 3 }, s = RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$", "i"), u = { bucket: 1, path: 3 }, c = [{ regex: i, indices: a, postModify: n }, { regex: s, indices: u, postModify: r }], l = 0; l < c.length; l++) {
            var p = c[l],
                f = p.regex.exec(e);if (f) {
              var d = f[p.indices.bucket],
                  _ = f[p.indices.path];_ || (_ = ""), o = new t(d, _), p.postModify(o);break;
            }
          }if (null == o) throw h(e);return o;
        }, t;
      }(),
          he = function () {
        function t(t, e, n, r) {
          this.server = t, this.local = e || t, this.writable = !!n, this.xform = r || et;
        }return t;
      }(),
          pe = null,
          fe = function () {
        function t(t, e) {
          var n = this;this.validator = function (e) {
            n.optional && !W(e) || t(e);
          }, this.optional = !!e;
        }return t;
      }(),
          de = function () {
        function t(t, e) {
          var n = 0,
              r = "";z(t) ? (this.c = t, n = t.size, r = t.type) : t instanceof ArrayBuffer ? (e ? this.c = new Uint8Array(t) : (this.c = new Uint8Array(t.byteLength), this.c.set(new Uint8Array(t))), n = this.c.length) : t instanceof Uint8Array && (e ? this.c = t : (this.c = new Uint8Array(t.length), this.c.set(t)), n = t.length), this.l = n, this.h = r;
        }return t.prototype.size = function () {
          return this.l;
        }, t.prototype.type = function () {
          return this.h;
        }, t.prototype.slice = function (e, n) {
          if (z(this.c)) {
            var r = this.c,
                o = gt(r, e, n);return null === o ? null : new t(o);
          }return new t(new Uint8Array(this.c.buffer, e, n - e), !0);
        }, t.getBlob = function () {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }if (X()) {
            var r = e.map(function (e) {
              return e instanceof t ? e.c : e;
            });return new t(mt.apply(null, r));
          }var o = e.map(function (t) {
            return F(t) ? w(ne.RAW, t).data : t.c;
          }),
              i = 0;o.forEach(function (t) {
            i += t.byteLength;
          });var a = new Uint8Array(i),
              s = 0;return o.forEach(function (t) {
            for (var e = 0; e < t.length; e++) {
              a[s++] = t[e];
            }
          }), new t(a, !0);
        }, t.prototype.uploadData = function () {
          return this.c;
        }, t;
      }(),
          _e = function () {
        function t(t, e, n, r) {
          this.url = t, this.method = e, this.handler = n, this.timeout = r, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [];
        }return t;
      }(),
          ve = function () {
        function t(t, e, n, r) {
          this.current = t, this.total = e, this.finalized = !!n, this.metadata = r || null;
        }return t;
      }(),
          be = function () {
        function t(t, e, n) {
          if (B(t) || M(e) || M(n)) this.next = t, this.error = e || null, this.complete = n || null;else {
            var r = t;this.next = r.next || null, this.error = r.error || null, this.complete = r.complete || null;
          }
        }return t;
      }(),
          me = function () {
        function t(t, e, n, r, o, i) {
          this.bytesTransferred = t, this.totalBytes = e, this.state = n, this.metadata = r, this.task = o, this.ref = i;
        }return Object.defineProperty(t.prototype, "downloadURL", { get: function get() {
            if (null !== this.metadata) {
              var t = this.metadata.downloadURLs;return null != t && null != t[0] ? t[0] : null;
            }return null;
          }, enumerable: !0, configurable: !0 }), t;
      }(),
          ge = function () {
        function t(t, e, n, r, o, i) {
          void 0 === i && (i = null);var a = this;this.p = 0, this.f = !1, this.d = !1, this._ = [], this.v = null, this.b = null, this.m = null, this.g = 1, this.y = null, this.R = null, this.w = t, this.U = e, this.T = n, this.A = o, this.N = i, this.O = r, this.C = this.S(this.A), this.k = ae.RUNNING, this.I = function (t) {
            a.m = null, a.g = 1, t.codeEquals(ee.CANCELED) ? (a.f = !0, a.L()) : (a.v = t, a.P(ae.ERROR));
          }, this.x = function (t) {
            a.m = null, t.codeEquals(ee.CANCELED) ? a.L() : (a.v = t, a.P(ae.ERROR));
          }, this.D = P(function (t, e) {
            a.y = t, a.R = e, a.M();
          }), this.D.then(null, function () {});
        }return t.prototype.W = function () {
          var t = this,
              e = this.p;return function (n, r) {
            t.B(e + n);
          };
        }, t.prototype.S = function (t) {
          return t.size() > 262144;
        }, t.prototype.M = function () {
          this.k === ae.RUNNING && null === this.m && (this.C ? null === this.b ? this.G() : this.f ? this.j() : this.d ? this.q() : this.F() : this.H());
        }, t.prototype.z = function (t) {
          var e = this;this.U.getAuthToken().then(function (n) {
            switch (e.k) {case ae.RUNNING:
                t(n);break;case ae.CANCELING:
                e.P(ae.CANCELED);break;case ae.PAUSING:
                e.P(ae.PAUSED);}
          });
        }, t.prototype.G = function () {
          var t = this;this.z(function (e) {
            var n = Pt(t.U, t.T, t.O, t.A, t.N),
                r = t.U.makeRequest(n, e);t.m = r, r.getPromise().then(function (e) {
              t.m = null, t.b = e, t.f = !1, t.L();
            }, t.I);
          });
        }, t.prototype.j = function () {
          var t = this,
              e = this.b;this.z(function (n) {
            var r = xt(t.U, t.T, e, t.A),
                o = t.U.makeRequest(r, n);t.m = o, o.getPromise().then(function (e) {
              e = e, t.m = null, t.B(e.current), t.f = !1, e.finalized && (t.d = !0), t.L();
            }, t.I);
          });
        }, t.prototype.F = function () {
          var t = this,
              e = 262144 * this.g,
              n = new ve(this.p, this.A.size()),
              r = this.b;this.z(function (o) {
            var i;try {
              i = Dt(t.T, t.U, r, t.A, e, t.O, n, t.W());
            } catch (e) {
              return t.v = e, void t.P(ae.ERROR);
            }var a = t.U.makeRequest(i, o);t.m = a, a.getPromise().then(function (e) {
              t.X(), t.m = null, t.B(e.current), e.finalized ? (t.N = e.metadata, t.P(ae.SUCCESS)) : t.L();
            }, t.I);
          });
        }, t.prototype.X = function () {
          262144 * this.g < 33554432 && (this.g *= 2);
        }, t.prototype.q = function () {
          var t = this;this.z(function (e) {
            var n = Nt(t.U, t.T, t.O),
                r = t.U.makeRequest(n, e);t.m = r, r.getPromise().then(function (e) {
              t.m = null, t.N = e, t.P(ae.SUCCESS);
            }, t.x);
          });
        }, t.prototype.H = function () {
          var t = this;this.z(function (e) {
            var n = It(t.U, t.T, t.O, t.A, t.N),
                r = t.U.makeRequest(n, e);t.m = r, r.getPromise().then(function (e) {
              t.m = null, t.N = e, t.B(t.A.size()), t.P(ae.SUCCESS);
            }, t.I);
          });
        }, t.prototype.B = function (t) {
          var e = this.p;this.p = t, this.p !== e && this.V();
        }, t.prototype.P = function (t) {
          if (this.k !== t) switch (t) {case ae.CANCELING:case ae.PAUSING:
              this.k = t, null !== this.m && this.m.cancel();break;case ae.RUNNING:
              var e = this.k === ae.PAUSED;this.k = t, e && (this.V(), this.M());break;case ae.PAUSED:
              this.k = t, this.V();break;case ae.CANCELED:
              this.v = l(), this.k = t, this.V();break;case ae.ERROR:case ae.SUCCESS:
              this.k = t, this.V();}
        }, t.prototype.L = function () {
          switch (this.k) {case ae.PAUSING:
              this.P(ae.PAUSED);break;case ae.CANCELING:
              this.P(ae.CANCELED);break;case ae.RUNNING:
              this.M();}
        }, Object.defineProperty(t.prototype, "snapshot", { get: function get() {
            var t = S(this.k);return new me(this.p, this.A.size(), t, this.N, this, this.w);
          }, enumerable: !0, configurable: !0 }), t.prototype.on = function (t, e, n, r) {
          function o(e) {
            if (t !== ie.STATE_CHANGED) throw "Expected one of the event types: [" + ie.STATE_CHANGED + "].";
          }function i(t) {
            try {
              return void c(t);
            } catch (t) {}try {
              if (l(t), !(W(t.next) || W(t.error) || W(t.complete))) throw "";return;
            } catch (t) {
              throw u;
            }
          }function a(t) {
            function e(e, n, o) {
              null !== t && ct("on", t, arguments);var i = new be(e, n, r);return h.K(i), function () {
                h.Z(i);
              };
            }return e;
          }function s(t) {
            if (null === t) throw u;i(t);
          }void 0 === e && (e = void 0), void 0 === n && (n = void 0), void 0 === r && (r = void 0);var u = "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
              c = vt(!0).validator,
              l = _t(null, !0).validator;ct("on", [ht(o), _t(i, !0), vt(!0), vt(!0)], arguments);var h = this,
              p = [_t(s), vt(!0), vt(!0)];return W(e) || W(n) || W(r) ? a(null)(e, n, r) : a(p);
        }, t.prototype.then = function (t, e) {
          return this.D.then(t, e);
        }, t.prototype.catch = function (t) {
          return this.then(null, t);
        }, t.prototype.K = function (t) {
          this._.push(t), this.J(t);
        }, t.prototype.Z = function (t) {
          Et(this._, t);
        }, t.prototype.V = function () {
          var t = this;this.Q(), Rt(this._).forEach(function (e) {
            t.J(e);
          });
        }, t.prototype.Q = function () {
          if (null !== this.y) {
            var t = !0;switch (S(this.k)) {case se.SUCCESS:
                Mt(this.y.bind(null, this.snapshot))();break;case se.CANCELED:case se.ERROR:
                Mt(this.R.bind(null, this.v))();break;default:
                t = !1;}t && (this.y = null, this.R = null);
          }
        }, t.prototype.J = function (t) {
          switch (S(this.k)) {case se.RUNNING:case se.PAUSED:
              null !== t.next && Mt(t.next.bind(t, this.snapshot))();break;case se.SUCCESS:
              null !== t.complete && Mt(t.complete.bind(t))();break;case se.CANCELED:case se.ERROR:
              null !== t.error && Mt(t.error.bind(t, this.v))();break;default:
              null !== t.error && Mt(t.error.bind(t, this.v))();}
        }, t.prototype.resume = function () {
          ct("resume", [], arguments);var t = this.k === ae.PAUSED || this.k === ae.PAUSING;return t && this.P(ae.RUNNING), t;
        }, t.prototype.pause = function () {
          ct("pause", [], arguments);var t = this.k === ae.RUNNING;return t && this.P(ae.PAUSING), t;
        }, t.prototype.cancel = function () {
          ct("cancel", [], arguments);var t = this.k === ae.RUNNING || this.k === ae.PAUSING;return t && this.P(ae.CANCELING), t;
        }, t;
      }(),
          ye = function () {
        function t(t, e) {
          this.authWrapper = t, this.location = e instanceof le ? e : le.makeFromUrl(e);
        }return t.prototype.toString = function () {
          return ct("toString", [], arguments), "gs://" + this.location.bucket + "/" + this.location.path;
        }, t.prototype.newRef = function (e, n) {
          return new t(e, n);
        }, t.prototype.mappings = function () {
          return rt();
        }, t.prototype.child = function (t) {
          ct("child", [ht()], arguments);var e = Z(this.location.path, t),
              n = new le(this.location.bucket, e);return this.newRef(this.authWrapper, n);
        }, Object.defineProperty(t.prototype, "parent", { get: function get() {
            var t = K(this.location.path);if (null === t) return null;var e = new le(this.location.bucket, t);return this.newRef(this.authWrapper, e);
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function get() {
            var t = new le(this.location.bucket, "");return this.newRef(this.authWrapper, t);
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "bucket", { get: function get() {
            return this.location.bucket;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "fullPath", { get: function get() {
            return this.location.path;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "name", { get: function get() {
            return J(this.location.path);
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "storage", { get: function get() {
            return this.authWrapper.service();
          }, enumerable: !0, configurable: !0 }), t.prototype.put = function (t, e) {
          return void 0 === e && (e = null), ct("put", [pt(), ft(!0)], arguments), this.Y("put"), new ge(this, this.authWrapper, this.location, this.mappings(), new de(t), e);
        }, t.prototype.putString = function (t, e, n) {
          void 0 === e && (e = ne.RAW), ct("putString", [ht(), ht(E, !0), ft(!0)], arguments), this.Y("putString");var r = w(e, t),
              o = L(n);return !M(o.contentType) && M(r.contentType) && (o.contentType = r.contentType), new ge(this, this.authWrapper, this.location, this.mappings(), new de(r.data, !0), o);
        }, t.prototype.delete = function () {
          ct("delete", [], arguments), this.Y("delete");var t = this;return this.authWrapper.getAuthToken().then(function (e) {
            var n = Ct(t.authWrapper, t.location);return t.authWrapper.makeRequest(n, e).getPromise();
          });
        }, t.prototype.getMetadata = function () {
          ct("getMetadata", [], arguments), this.Y("getMetadata");var t = this;return this.authWrapper.getAuthToken().then(function (e) {
            var n = Nt(t.authWrapper, t.location, t.mappings());return t.authWrapper.makeRequest(n, e).getPromise();
          });
        }, t.prototype.updateMetadata = function (t) {
          ct("updateMetadata", [ft()], arguments), this.Y("updateMetadata");var e = this;return this.authWrapper.getAuthToken().then(function (n) {
            var r = Ot(e.authWrapper, e.location, t, e.mappings());return e.authWrapper.makeRequest(r, n).getPromise();
          });
        }, t.prototype.getDownloadURL = function () {
          return ct("getDownloadURL", [], arguments), this.Y("getDownloadURL"), this.getMetadata().then(function (t) {
            var e = t.downloadURLs[0];if (M(e)) return e;throw _();
          });
        }, t.prototype.Y = function (t) {
          if ("" === this.location.path) throw g(t);
        }, t;
      }(),
          Re = function () {
        function t(t) {
          this.D = D(t);
        }return t.prototype.getPromise = function () {
          return this.D;
        }, t.prototype.cancel = function (t) {
          void 0 === t && (t = !1);
        }, t;
      }(),
          Ee = function () {
        function t() {
          this.$ = {}, this.tt = $t;
        }return t.prototype.addRequest = function (t) {
          function e() {
            delete r.$[n];
          }var n = this.tt;this.tt++, this.$[n] = t;var r = this;t.getPromise().then(e, e);
        }, t.prototype.clear = function () {
          I(this.$, function (t, e) {
            e && e.cancel(!0);
          }), this.$ = {};
        }, t;
      }(),
          we = function () {
        function t(e, n, r, o, i) {
          if (this.et = null, this.nt = !1, this.rt = e, null !== this.rt) {
            var a = this.rt.options;M(a) && (this.et = t.ot(a));
          }this.it = n, this.at = r, this.st = i, this.ut = o, this.ct = Qt, this.lt = Yt, this.ht = new Ee();
        }return t.ot = function (t) {
          var e = t.storageBucket || null;return null == e ? null : le.makeFromBucketSpec(e).bucket;
        }, t.prototype.getAuthToken = function () {
          return null !== this.rt && M(this.rt.INTERNAL) && M(this.rt.INTERNAL.getToken) ? this.rt.INTERNAL.getToken().then(function (t) {
            return null !== t ? t.accessToken : null;
          }, function (t) {
            return null;
          }) : x(null);
        }, t.prototype.bucket = function () {
          if (this.nt) throw m();return this.et;
        }, t.prototype.service = function () {
          return this.ut;
        }, t.prototype.makeStorageReference = function (t) {
          return this.it(this, t);
        }, t.prototype.makeRequest = function (t, e) {
          if (this.nt) return new Re(m());var n = this.at(t, e, this.st);return this.ht.addRequest(n), n;
        }, t.prototype.deleteApp = function () {
          this.nt = !0, this.rt = null, this.ht.clear();
        }, t.prototype.maxUploadRetryTime = function () {
          return this.lt;
        }, t.prototype.setMaxUploadRetryTime = function (t) {
          this.lt = t;
        }, t.prototype.maxOperationRetryTime = function () {
          return this.ct;
        }, t.prototype.setMaxOperationRetryTime = function (t) {
          this.ct = t;
        }, t;
      }(),
          Ue = function () {
        function t(t, e, n, r, o, i, a, s, u, c, l) {
          this.pt = null, this.ft = null, this.y = null, this.R = null, this.dt = !1, this._t = !1, this.vt = t, this.bt = e, this.mt = n, this.gt = r, this.yt = o.slice(), this.Rt = i.slice(), this.Et = a, this.wt = s, this.Ut = c, this.Tt = u, this.st = l;var h = this;this.D = P(function (t, e) {
            h.y = t, h.R = e, h.M();
          });
        }return t.prototype.M = function () {
          function t(t, e) {
            function r(t) {
              var e = t.loaded,
                  r = t.lengthComputable ? t.total : -1;null !== n.Ut && n.Ut(e, r);
            }if (e) return void t(!1, new Te(!1, null, !0));var o = n.st.createXhrIo();n.pt = o, null !== n.Ut && o.addUploadProgressListener(r), o.send(n.vt, n.bt, n.gt, n.mt).then(function (e) {
              null !== n.Ut && e.removeUploadProgressListener(r), n.pt = null, e = e;var o = e.getErrorCode() === zt.NO_ERROR,
                  i = e.getStatus();if (!o || n.At(i)) {
                var a = e.getErrorCode() === zt.ABORT;return void t(!1, new Te(!1, null, a));
              }var s = yt(n.yt, i);t(!0, new Te(s, e));
            });
          }function e(t, e) {
            var r = n.y,
                i = n.R,
                a = e.xhr;if (e.wasSuccessCode) try {
              var s = n.Et(a, a.getResponseText());W(s) ? r(s) : r();
            } catch (t) {
              i(t);
            } else if (null !== a) {
              var u = o();u.setServerResponseProp(a.getResponseText()), i(n.wt ? n.wt(a, u) : u);
            } else if (e.canceled) {
              var u = n._t ? m() : l();i(u);
            } else {
              var u = c();i(u);
            }
          }var n = this;this.dt ? e(!1, new Te(!1, null, !0)) : this.ft = Wt(t, e, this.Tt);
        }, t.prototype.getPromise = function () {
          return this.D;
        }, t.prototype.cancel = function (t) {
          this.dt = !0, this._t = t || !1, null !== this.ft && Bt(this.ft), null !== this.pt && this.pt.abort();
        }, t.prototype.At = function (t) {
          var e = t >= 500 && t < 600,
              n = [408, 429],
              r = yt(n, t),
              o = yt(this.Rt, t);return e || r || o;
        }, t;
      }(),
          Te = function () {
        function t(t, e, n) {
          this.wasSuccessCode = t, this.xhr = e, this.canceled = !!n;
        }return t;
      }(),
          Ae = function () {
        function t(t, e, n) {
          function r(t, e) {
            return new ye(t, e);
          }if (this.et = null, this.U = new we(t, r, qt, this, e), this.rt = t, null != n) this.et = le.makeFromBucketSpec(n);else {
            var o = this.U.bucket();null != o && (this.et = new le(o, ""));
          }this.Nt = new Ne(this);
        }return t.prototype.ref = function (t) {
          function e(t) {
            if (/^[A-Za-z]+:\/\//.test(t)) throw "Expected child path but got a URL, use refFromURL instead.";
          }if (ct("ref", [ht(e, !0)], arguments), null == this.et) throw Error("No Storage Bucket defined in Firebase Options.");var n = new ye(this.U, this.et);return null != t ? n.child(t) : n;
        }, t.prototype.refFromURL = function (t) {
          function e(t) {
            if (!/^[A-Za-z]+:\/\//.test(t)) throw "Expected full URL but got a child path, use ref instead.";try {
              le.makeFromUrl(t);
            } catch (t) {
              throw "Expected valid full URL but got an invalid one.";
            }
          }return ct("refFromURL", [ht(e, !1)], arguments), new ye(this.U, t);
        }, Object.defineProperty(t.prototype, "maxUploadRetryTime", { get: function get() {
            return this.U.maxUploadRetryTime();
          }, enumerable: !0, configurable: !0 }), t.prototype.setMaxUploadRetryTime = function (t) {
          ct("setMaxUploadRetryTime", [dt()], arguments), this.U.setMaxUploadRetryTime(t);
        }, Object.defineProperty(t.prototype, "maxOperationRetryTime", { get: function get() {
            return this.U.maxOperationRetryTime();
          }, enumerable: !0, configurable: !0 }), t.prototype.setMaxOperationRetryTime = function (t) {
          ct("setMaxOperationRetryTime", [dt()], arguments), this.U.setMaxOperationRetryTime(t);
        }, Object.defineProperty(t.prototype, "app", { get: function get() {
            return this.rt;
          }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "INTERNAL", { get: function get() {
            return this.Nt;
          }, enumerable: !0, configurable: !0 }), t;
      }(),
          Ne = function () {
        function t(t) {
          this.ut = t;
        }return t.prototype.delete = function () {
          return this.ut.U.deleteApp(), x(void 0);
        }, t;
      }();e.registerStorage = Ht;var Oe = "storage";Ht(Xt.default);
    } }, [120]);
} catch (t) {
  throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.");
}

//# sourceMappingURL=firebase.js.map

/***/ })

/******/ });