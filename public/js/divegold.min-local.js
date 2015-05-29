!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), 
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            sa.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; ) if (b = Xa[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), 
        "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            Ya = void 0;
        }), Ya = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase();
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), 
            b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xa = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qa.test(a.nodeName);
                },
                input: function(a) {
                    return pa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, 
    _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length;
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : ja.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    }, _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), pa.promise(b);
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(na) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var ra = new h(), sa = new h(), ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a);
        },
        data: function(a, b, c) {
            return sa.access(a, b, c);
        },
        removeData: function(a, b) {
            sa.remove(a, b);
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c);
        },
        _removeData: function(a, b) {
            ra.remove(a, b);
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a);
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a);
            });
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = ra.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = [ "Top", "Right", "Bottom", "Left" ], xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, ya = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(na) || [ "" ], j = b.length; j--; ) h = Da.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [ "" ], j = b.length; j--; ) if (h = Da.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b));
            }
        };
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i, Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, 
    Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Ja.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e];
                }
                delete sa.cache[c[sa.expando]];
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")));
            }
            return this;
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f);
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), 
                b;
            }
        }));
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"), Ua = new RegExp("^([+-])=(" + va + ")", "i"), Va = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Wa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xa = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), void (null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), 
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    }), _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d);
                }) : A(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]) : void 0;
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y);
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide();
            });
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"), ab = /queueHooks$/, bb = [ G ], cb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a);
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue);
        }, d;
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0;
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null;
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, 
        Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", 
        Y.radioValue = "t" === a.value;
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            fb[b] = f), e;
        };
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0;
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0;
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = nb.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [ "" ], 
            null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), 
            l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), 
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    }), _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b));
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i, Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+");
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                };
            }).get();
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Cb = 0, Db = {}, Eb = {
        0: 200,
        1223: 204
    }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]();
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), 
            i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Jb;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _;
    }, typeof b === za && (a.jQuery = a.$ = _), _;
}), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery);
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], 
        !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
    }
    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility");
        }).length;
    }
    function d(a) {
        for (var b, c; a.length && a[0] !== document; ) {
            if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), 
            !isNaN(c) && 0 !== c)) return c;
            a = a.parent();
        }
        return 0;
    }
    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = f(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function f(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function() {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover");
        }).delegate(c, "mouseover", g);
    }
    function g() {
        a.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"));
    }
    function h(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b;
    }
    function i(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change");
        };
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"), d = "absolute" === c, e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/, f = this.parents().filter(function() {
                var b = a(this);
                return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
            }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
            });
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")));
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && b(c, !e);
        }
    }), a("<a>").outerWidth(1).jquery || a.each([ "Width", "Height" ], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), 
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }), c;
        }
        var e = "Width" === c ? [ "Left", "Right" ] : [ "Top", "Bottom" ], f = c.toLowerCase(), g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px");
            });
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px");
            });
        };
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
        };
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b);
                    }, c);
                }) : b.apply(this, arguments);
            };
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length) for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), 
                !isNaN(d) && 0 !== d)) return d;
                e = e.parent();
            }
            return 0;
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([ c, d[e] ]);
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)) for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c);
        }
    };
    var j = 0, k = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove");
            } catch (g) {}
            b(c);
        };
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e);
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b);
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c(), h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments);
                }, e = function(a) {
                    return c.prototype[b].apply(this, a);
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, 
                    this._superApply = f, b;
                };
            }()) : void (i[b] = d);
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto);
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), 
        g;
    }, a.widget.extend = function(b) {
        for (var c, d, e = k.call(arguments, 1), f = 0, g = e.length; g > f; f++) for (c in e[f]) d = e[f][c], 
        e[f].hasOwnProperty(c) && void 0 !== d && (a.isPlainObject(d) ? b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : b[c] = d);
        return b;
    }, a.widget.bridge = function(b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function(e) {
            var f = "string" == typeof e, g = k.call(arguments, 1), h = this;
            return f ? this.each(function() {
                var c, f = a.data(this, d);
                return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), 
                c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'");
            }) : (g.length && (e = a.widget.extend.apply(null, [ e ].concat(g))), this.each(function() {
                var b = a.data(this, d);
                b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this));
            })), h;
        };
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, c) {
            c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = j++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), 
            this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy();
                }
            }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), 
            this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b) if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, 
                e = e[d[f]];
                if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                e[b] = c;
            } else {
                if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                g[b] = c;
            }
            return this._setOptions(g), this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this;
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), 
            b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, 
            c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h);
            });
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), 
            this.hoverable = a(this.hoverable.not(b).get());
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), 
            c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [ c ].concat(d)) === !1 || c.isDefaultPrevented());
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c();
            });
        };
    });
    var l = (a.widget, !1);
    a(document).mouseup(function() {
        l = !1;
    });
    a.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), 
                c.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(b) {
            if (!l) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                var c = this, d = 1 === b.which, e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, 
                !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a);
                }, this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                b.preventDefault(), l = !0, !0)) : !0;
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                if (!b.which) return this._mouseUp(b);
            }
            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), 
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, 
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function(b) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(b)), l = !1, !1;
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
    !function() {
        function b(a, b, c) {
            return [ parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1) ];
        }
        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0;
        }
        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            };
        }
        a.ui = a.ui || {};
        var e, f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (void 0 !== e) return e;
                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = d.children()[0];
                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, 
                b === c && (c = d[0].clientWidth), d.remove(), e = b - c;
            },
            getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {
                    width: f ? a.position.scrollbarWidth() : 0,
                    height: e ? a.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(b) {
                var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: c.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d || e ? c.width() : c.outerWidth(),
                    height: d || e ? c.height() : c.outerHeight()
                };
            }
        }, a.fn.position = function(e) {
            if (!e || !e.of) return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of), v = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(v), x = (e.collision || "flip").split(" "), y = {};
            return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, 
            r = t.offset, s = a.extend({}, r), a.each([ "my", "at" ], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = j.test(c[0]) ? c.concat([ "center" ]) : k.test(c[0]) ? [ "center" ].concat(c) : [ "center", "center" ]), 
                c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), 
                b = l.exec(c[1]), y[this] = [ a ? a[0] : 0, b ? b[0] : 0 ], e[this] = [ m.exec(c[0])[0], m.exec(c[1])[0] ];
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), 
            "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), 
            s.left += n[0], s.top += n[1], this.each(function() {
                var d, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = c(this, "marginLeft"), t = c(this, "marginTop"), z = l + o + c(this, "marginRight") + w.width, A = m + t + c(this, "marginBottom") + w.height, B = a.extend({}, s), C = b(y.my, k.outerWidth(), k.outerHeight());
                "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), 
                B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
                    marginLeft: o,
                    marginTop: t
                }, a.each([ "left", "top" ], function(b, c) {
                    a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
                        targetWidth: p,
                        targetHeight: q,
                        elemWidth: l,
                        elemHeight: m,
                        collisionPosition: d,
                        collisionWidth: z,
                        collisionHeight: A,
                        offset: [ n[0] + C[0], n[1] + C[1] ],
                        my: e.my,
                        at: e.at,
                        within: v,
                        elem: k
                    });
                }), e.using && (j = function(a) {
                    var b = r.left - B.left, c = b + p - l, d = r.top - B.top, f = d + q - m, i = {
                        target: {
                            element: u,
                            left: r.left,
                            top: r.top,
                            width: p,
                            height: q
                        },
                        element: {
                            element: k,
                            left: B.left,
                            top: B.top,
                            width: l,
                            height: m
                        },
                        horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                        vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
                    };
                    l > p && h(b + c) < p && (i.horizontal = "center"), m > q && h(d + f) < q && (i.vertical = "middle"), 
                    g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical", 
                    e.using.call(this, a, i);
                }), k.offset(a.extend(B, {
                    using: j
                }));
            });
        }, a.ui.position = {
            fit: {
                left: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                    b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, 
                    a.left += i - c) : j > 0 && 0 >= i ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left);
                },
                top: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                    b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, 
                    a.top += i - c) : j > 0 && 0 >= i ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top);
                }
            },
            flip: {
                left: function(a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, 
                    (d > 0 || h(d) < l) && (a.left += m + n + o));
                },
                top: function(a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, 
                    (c > 0 || h(c) < l) && (a.top += n + o + p));
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
                }
            }
        }, function() {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0], i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"), d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, h && a.extend(d, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (g in d) b.style[g] = d[g];
            b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), 
            i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, 
            f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b);
        }();
    }();
    a.ui.position, a.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var b = this.options;
            this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), 
            b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), 
            b.active < 0 && (b.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a()
            };
        },
        _createIcons: function() {
            var b = this.options.icons;
            b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), 
            this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), 
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), 
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), 
            this._destroyIcons(), a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && a.css("height", "");
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), 
            "icons" === a && (this._destroyIcons(), b && this._createIcons()), void ("disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), 
            this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))));
        },
        _keydown: function(b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
                switch (b.keyCode) {
                  case c.RIGHT:
                  case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;

                  case c.LEFT:
                  case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;

                  case c.SPACE:
                  case c.ENTER:
                    this._eventHandler(b);
                    break;

                  case c.HOME:
                    f = this.headers[0];
                    break;

                  case c.END:
                    f = this.headers[d - 1];
                }
                f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault());
            }
        },
        _panelKeyDown: function(b) {
            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus();
        },
        refresh: function() {
            var b = this.options;
            this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, 
            this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, 
            this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var a = this.headers, b = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), 
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), 
            b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)));
        },
        _refresh: function() {
            var b, c = this.options, d = c.heightStyle, e = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), 
            this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                var b = a(this), c = b.uniqueId().attr("id"), d = b.next(), e = d.uniqueId().attr("id");
                b.attr("aria-controls", e), d.attr("aria-labelledby", c);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), 
            "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
                var c = a(this), d = c.css("position");
                "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0));
            }), this.headers.each(function() {
                b -= a(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
                b = Math.max(b, a(this).css("height", "").height());
            }).height(b));
        },
        _activate: function(b) {
            var c = this._findActive(b)[0];
            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return "number" == typeof b ? this.headers.eq(b) : a();
        },
        _setupEvents: function(b) {
            var c = {
                keydown: "_keydown"
            };
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(b) {
            var c = this.options, d = this.active, e = a(b.currentTarget), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : e.next(), i = d.next(), j = {
                oldHeader: d,
                oldPanel: i,
                newHeader: g ? a() : e,
                newPanel: h
            };
            b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), 
            this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), 
            c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), 
            f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), 
            c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), 
            e.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function(b) {
            var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, 
            this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), 
            d.attr({
                "aria-hidden": "true"
            }), d.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === parseInt(a(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(a, b, c) {
            var d, e, f, g = this, h = 0, i = a.css("box-sizing"), j = a.length && (!b.length || a.index() < b.index()), k = this.options.animate || {}, l = j && k.down || k, m = function() {
                g._toggleComplete(c);
            };
            return "number" == typeof l && (f = l), "string" == typeof l && (e = l), e = e || l.easing || k.easing, 
            f = f || l.duration || k.duration, b.length ? a.length ? (d = a.show().outerHeight(), 
            b.animate(this.hideProps, {
                duration: f,
                easing: e,
                step: function(a, b) {
                    b.now = Math.round(a);
                }
            }), void a.hide().animate(this.showProps, {
                duration: f,
                easing: e,
                complete: m,
                step: function(a, c) {
                    c.now = Math.round(a), "height" !== c.prop ? "content-box" === i && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), 
                    h = 0);
                }
            })) : b.animate(this.hideProps, f, e, m) : a.animate(this.showProps, f, e, m);
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), 
            b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a);
        }
    }), a.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault();
                },
                "click .ui-menu-item": function(b) {
                    var c = a(b.target);
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), 
                    c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(b) {
                    if (!this.previousFilter) {
                        var c = a(b.currentTarget);
                        c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c);
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, c);
                },
                blur: function(b) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(b) {
            var c, d, e, f, g = !0;
            switch (b.keyCode) {
              case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;

              case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;

              case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;

              case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;

              case a.ui.keyCode.UP:
                this.previous(b);
                break;

              case a.ui.keyCode.DOWN:
                this.next(b);
                break;

              case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;

              case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;

              case a.ui.keyCode.ENTER:
              case a.ui.keyCode.SPACE:
                this._activate(b);
                break;

              case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;

              default:
                g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, 
                clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), 
                c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, 
                c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), 
                c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            g && b.preventDefault();
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a));
        },
        refresh: function() {
            var b, c, d = this, e = this.options.icons.submenu, f = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
            f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this), c = b.parent(), d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
                c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"));
            }), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                var b = a(this);
                d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider");
            }), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), 
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), 
            this._super(a, b);
        },
        focus: function(a, b) {
            var c, d;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), 
            d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), 
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), 
            this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            });
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, 
            f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 
            0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", a, {
                item: this.active
            }));
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a);
            }, this.delay));
        },
        _open: function(b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d;
            }, this.delay);
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
        },
        _closeOnDocumentClick: function(b) {
            return !a(b.target).closest(".ui-menu").length;
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text());
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b));
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b);
            }));
        },
        next: function(a) {
            this._move("next", "first", a);
        },
        previous: function(a) {
            this._move("prev", "last", a);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), 
            d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), 
            this.focus(c, d);
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d - e < 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b);
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c);
        },
        _filterMenuItems: function(b) {
            var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), d = new RegExp("^" + c, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return d.test(a.trim(a(this).text()));
            });
        }
    });
    a.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, g = "input" === e;
            this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, void (c = !0);
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                      case f.PAGE_UP:
                        b = !0, this._move("previousPage", e);
                        break;

                      case f.PAGE_DOWN:
                        b = !0, this._move("nextPage", e);
                        break;

                      case f.UP:
                        b = !0, this._keyEvent("previous", e);
                        break;

                      case f.DOWN:
                        b = !0, this._keyEvent("next", e);
                        break;

                      case f.ENTER:
                        this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                        break;

                      case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;

                      case f.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(e), e.preventDefault());
                        break;

                      default:
                        c = !0, this._searchTimeout(e);
                    }
                },
                keypress: function(d) {
                    if (b) return b = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                          case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;

                          case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;

                          case e.UP:
                            this._keyEvent("previous", d);
                            break;

                          case e.DOWN:
                            this._keyEvent("next", d);
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(a), void this._change(a));
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var c = this.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                        var b = this;
                        this.document.one("mousedown", function(d) {
                            d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close();
                        });
                    });
                },
                menufocus: function(b, c) {
                    var d, e;
                    return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        a(b.target).trigger(b.originalEvent);
                    })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                        item: e
                    }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), 
                    d = c.item.attr("aria-label") || e.value, void (d && a.trim(d).length && (this.liveRegion.children().hide(), 
                    a("<div>").text(d).appendTo(this.liveRegion))));
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"), d = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, 
                    this._delay(function() {
                        this.previous = d, this.selectedItem = c;
                    })), !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c;
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === a && b && this.xhr && this.xhr.abort();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), 
            b.length || (b = this.document[0].body), b;
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                d(a.ui.autocomplete.filter(b, c.term));
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function(a) {
                        e(a);
                    },
                    error: function() {
                        e([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var b = this.term === this._value(), c = this.menu.element.is(":visible"), d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a));
            }, this.options.delay);
        },
        search: function(a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0;
        },
        _search: function(a) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: a
            }, this._response());
        },
        _response: function() {
            var b = ++this.requestIndex;
            return a.proxy(function(a) {
                b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), 
            this._trigger("open")) : this._close();
        },
        close: function(a) {
            this.cancelSearch = !0, this._close(a);
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", a));
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            });
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({}, b, {
                    label: b.label || b.value,
                    value: b.value || b.label
                });
            });
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), 
            c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b);
        },
        _renderItem: function(b, c) {
            return a("<li>").text(c.label).appendTo(b);
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(a, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault());
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a);
            });
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(b) {
            var c;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion));
        }
    });
    var m, n = (a.ui.autocomplete, "ui-button ui-widget ui-state-default ui-corner-all"), o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", p = function() {
        var b = a(this);
        setTimeout(function() {
            b.find(":ui-button").button("refresh");
        }, 1);
    }, q = function(b) {
        var c = b.name, d = b.form, e = a([]);
        return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "'][type=radio]") : a("[name='" + c + "'][type=radio]", b.ownerDocument).filter(function() {
            return !this.form;
        })), e;
    };
    a.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, p), 
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), 
            this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var b = this, c = this.options, d = "checkbox" === this.type || "radio" === this.type, e = d ? "" : "ui-state-active";
            null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), 
            this._hoverable(this.buttonElement), this.buttonElement.addClass(n).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                c.disabled || this === m && a(this).addClass("ui-state-active");
            }).bind("mouseleave" + this.eventNamespace, function() {
                c.disabled || a(this).removeClass(e);
            }).bind("click" + this.eventNamespace, function(a) {
                c.disabled && (a.preventDefault(), a.stopImmediatePropagation());
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus");
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus");
                }
            }), d && this.element.bind("change" + this.eventNamespace, function() {
                b.refresh();
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return c.disabled ? !1 : void 0;
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (c.disabled) return !1;
                a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
                var d = b.element[0];
                q(d).not(d).map(function() {
                    return a(this).button("widget")[0];
                }).removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return c.disabled ? !1 : (a(this).addClass("ui-state-active"), m = this, void b.document.one("mouseup", function() {
                    m = null;
                }));
            }).bind("mouseup" + this.eventNamespace, function() {
                return c.disabled ? !1 : void a(this).removeClass("ui-state-active");
            }).bind("keydown" + this.eventNamespace, function(b) {
                return c.disabled ? !1 : void ((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"));
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                a(this).removeClass("ui-state-active");
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click();
            })), this._setOption("disabled", c.disabled), this._resetButton();
        },
        _determineButtonType: function() {
            var a, b, c;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", 
            "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), 
            b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), 
            this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), 
            this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), 
            this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), 
            c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element;
        },
        widget: function() {
            return this.buttonElement;
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(n + " ui-state-active " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), 
            this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function(a, b) {
            return this._super(a, b), "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), 
            this.element.prop("disabled", !!b), void (b && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton();
        },
        refresh: function() {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? q(this.element[0]).each(function() {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
        },
        _resetButton: function() {
            if ("input" === this.type) return void (this.options.label && this.element.val(this.options.label));
            var b = this.buttonElement.removeClass(o), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), 
            d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), 
            d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), 
            this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), 
            this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "));
        }
    }), a.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset");
        },
        _init: function() {
            this.refresh();
        },
        _setOption: function(a, b) {
            "disabled" === a && this.buttons.button("option", a, b), this._super(a, b);
        },
        refresh: function() {
            var b = "rtl" === this.element.css("direction"), c = this.element.find(this.options.items), d = c.filter(":ui-button");
            c.not(":ui-button").button(), d.button("refresh"), this.buttons = c.map(function() {
                return a(this).button("widget")[0];
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end();
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return a(this).button("widget")[0];
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        }
    });
    a.ui.button;
    a.extend(a.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var r;
    a.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(a) {
            return h(this._defaults, a || {}), this;
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, 
            b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), 
            "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f);
        },
        _newInst: function(b, c) {
            var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: d,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? f(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), 
            d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), 
            this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b));
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), 
            b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), 
            d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), 
            ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), 
            c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), 
                a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1;
            }));
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function(a) {
                    for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, 
                    d = e);
                    return d;
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), 
                a.input.attr("size", this._formatDate(a, f).length);
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), 
            a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), 
            this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(b, c, d, e, f) {
            var g, i, j, k, l, m = this._dialogInst;
            return m || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), 
            m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), 
            h(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, 
            this._dialogInput.val(c), this._pos = f ? f.length ? f : [ f.pageX, f.pageY ] : null, 
            this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, 
            k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ i / 2 - 100 + k, j / 2 - 150 + l ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), 
            a.data(this._dialogInput[0], "datepicker", m), this;
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b), e = a.data(b, "datepicker");
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), 
            "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), 
            r === e && (r = null));
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, 
            f.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }));
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, 
            f.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }), this._disabledInputs[this._disabledInputs.length] = b);
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] === a) return !0;
            return !1;
        },
        _getInst: function(b) {
            try {
                return a.data(b, "datepicker");
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(b, c, d) {
            var e, f, g, i, j = this._getInst(b);
            return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, 
            "string" == typeof c && (e = {}, e[c] = d), void (j && (this._curInst === j && this._hideDatepicker(), 
            f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), 
            h(j.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, g)), 
            null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), 
            "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), 
            this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), 
            this._updateDatepicker(j))));
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c);
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b);
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
              case 9:
                a.datepicker._hideDatepicker(), g = !1;
                break;

              case 13:
                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), 
                e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), 
                c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [ d, f ])) : a.datepicker._hideDatepicker(), 
                !1;

              case 27:
                a.datepicker._hideDatepicker();
                break;

              case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              default:
                g = !1;
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation());
        },
        _doKeyPress: function(b) {
            var c, d, e = a.datepicker._getInst(b.target);
            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), 
            d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0;
        },
        _doKeyUp: function(b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), 
                c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d));
            } catch (e) {}
            return !0;
        },
        _showDatepicker: function(b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), 
            !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, e, f, g, i, j, k;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), 
                c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), 
                e = a.datepicker._get(c, "beforeShow"), f = e ? e.apply(b, [ b, c ]) : {}, f !== !1 && (h(c.settings, f), 
                c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), 
                a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), 
                a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                    return g |= "fixed" === a(this).css("position"), !g;
                }), i = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), i = a.datepicker._checkOffset(c, i, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: i.left + "px",
                    top: i.top + "px"
                }), c.inline || (j = a.datepicker._get(c, "showAnim"), k = a.datepicker._get(c, "duration"), 
                c.dpDiv.css("z-index", d(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? c.dpDiv.show(j, a.datepicker._get(c, "showOptions"), k) : c.dpDiv[j || "show"](j ? k : null), 
                a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c));
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4, r = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
            var c, d = this._getNumberOfMonths(b), e = d[1], f = 17, h = b.dpDiv.find("." + this._dayOverClass + " a");
            h.length > 0 && g.apply(h.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), 
            b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), 
            b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), 
                c = b.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, 
            c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, 
            c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), 
            c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c;
        },
        _findPos: function(b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b)); ) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [ c.left, c.top ];
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, g = this._curInst;
            !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), 
            d = this._get(g, "duration"), e = function() {
                a.datepicker._tidyDialog(g);
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), 
            c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [ g.input ? g.input.val() : "", g ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(b) {
            if (a.datepicker._curInst) {
                var c = a(b.target), d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), 
            this._updateDatepicker(f));
        },
        _gotoToday: function(b) {
            var c, d = a(b), e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, 
            e.drawYear = e.selectedYear = e.currentYear) : (c = new Date(), e.selectedDay = c.getDate(), 
            e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), 
            this._notifyChange(e), this._adjustDate(d);
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), 
            this._notifyChange(f), this._adjustDate(e);
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), 
            f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, 
            f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "");
        },
        _selectDate: function(b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), 
            d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [ c, f ]) : f.input && f.input.trigger("change"), 
            f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], 
            "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), 
            e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                a(this).val(e);
            }));
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [ b > 0 && 6 > b, "" ];
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), 
            c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1;
        },
        parseDate: function(b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
            var e, f, g, h, i = 0, j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = "string" != typeof j ? j : new Date().getFullYear() % 100 + parseInt(j, 10), l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, m = (d ? d.dayNames : null) || this._defaults.dayNames, n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, o = (d ? d.monthNames : null) || this._defaults.monthNames, p = -1, q = -1, r = -1, s = -1, t = !1, u = function(a) {
                var c = e + 1 < b.length && b.charAt(e + 1) === a;
                return c && e++, c;
            }, v = function(a) {
                var b = u(a), d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = "y" === a ? d : 1, f = new RegExp("^\\d{" + e + "," + d + "}"), g = c.substring(i).match(f);
                if (!g) throw "Missing number at position " + i;
                return i += g[0].length, parseInt(g[0], 10);
            }, w = function(b, d, e) {
                var f = -1, g = a.map(u(b) ? e : d, function(a, b) {
                    return [ [ b, a ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                if (a.each(g, function(a, b) {
                    var d = b[1];
                    return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, 
                    !1) : void 0;
                }), -1 !== f) return f + 1;
                throw "Unknown name at position " + i;
            }, x = function() {
                if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                i++;
            };
            for (e = 0; e < b.length; e++) if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1; else switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;

              case "D":
                w("D", l, m);
                break;

              case "o":
                s = v("o");
                break;

              case "m":
                q = v("m");
                break;

              case "M":
                q = w("M", n, o);
                break;

              case "y":
                p = v("y");
                break;

              case "@":
                h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                break;

              case "!":
                h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, 
                r = h.getDate();
                break;

              case "'":
                u("'") ? x() : t = !0;
                break;

              default:
                x();
            }
            if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if (-1 === p ? p = new Date().getFullYear() : 100 > p && (p += new Date().getFullYear() - new Date().getFullYear() % 100 + (k >= p ? 0 : -100)), 
            s > -1) for (q = 1, r = s; ;) {
                if (f = this._getDaysInMonth(p, q - 1), f >= r) break;
                q++, r -= f;
            }
            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
            return h;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function(b) {
                var c = d + 1 < a.length && a.charAt(d + 1) === b;
                return c && d++, c;
            }, j = function(a, b, c) {
                var d = "" + b;
                if (i(a)) for (;d.length < c; ) d = "0" + d;
                return d;
            }, k = function(a, b, c, d) {
                return i(a) ? d[b] : c[b];
            }, l = "", m = !1;
            if (b) for (d = 0; d < a.length; d++) if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
              case "d":
                l += j("d", b.getDate(), 2);
                break;

              case "D":
                l += k("D", b.getDay(), e, f);
                break;

              case "o":
                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                l += j("m", b.getMonth() + 1, 2);
                break;

              case "M":
                l += k("M", b.getMonth(), g, h);
                break;

              case "y":
                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                break;

              case "@":
                l += b.getTime();
                break;

              case "!":
                l += 1e4 * b.getTime() + this._ticksTo1970;
                break;

              case "'":
                i("'") ? l += "'" : m = !0;
                break;

              default:
                l += a.charAt(d);
            }
            return l;
        },
        _possibleChars: function(a) {
            var b, c = "", d = !1, e = function(c) {
                var d = b + 1 < a.length && a.charAt(b + 1) === c;
                return d && b++, d;
            };
            for (b = 0; b < a.length; b++) if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                e("'") ? c += "'" : d = !0;
                break;

              default:
                c += a.charAt(b);
            }
            return c;
        },
        _get: function(a, b) {
            return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b];
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e;
                } catch (h) {
                    d = b ? "" : d;
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), 
                a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, 
                this._adjustInstDate(a);
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date();
                return b.setDate(b.getDate() + a), b;
            }, f = function(c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                } catch (d) {}
                for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date(), f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j; ) {
                    switch (j[2] || "d") {
                      case "d":
                      case "D":
                        h += parseInt(j[1], 10);
                        break;

                      case "w":
                      case "W":
                        h += 7 * parseInt(j[1], 10);
                        break;

                      case "m":
                      case "M":
                        g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                        break;

                      case "y":
                      case "Y":
                        f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                    }
                    j = i.exec(c);
                }
                return new Date(f, g, h);
            }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), 
            g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g);
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
        },
        _setDate: function(a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), 
            a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), 
            this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a));
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b;
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M");
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M");
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker();
                    },
                    today: function() {
                        a.datepicker._gotoToday(d);
                    },
                    selectDay: function() {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1;
                    },
                    selectYear: function() {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1;
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date(), P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, aa = a.drawYear;
            if (0 > _ && (_ += 12, aa--), $) for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), 
            b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b; ) _--, 
            0 > _ && (_ = 11, aa--);
            for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, 
            d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", 
            e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, 
            f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", 
            g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, 
            g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", 
            j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", 
            k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), 
            m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), 
            p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), 
            s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
                for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
                    if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", 
                    B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                          case 0:
                            B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                            break;

                          case U[1] - 1:
                            B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                            break;

                          default:
                            B += " ui-datepicker-group-middle", A = "";
                        }
                        B += "'>";
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", 
                    v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), 
                    F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, 
                    this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", 
                        v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [ I ]) : [ !0, "" ], 
                        M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", 
                        I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>";
                    }
                    _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    x += B;
                }
                u += x;
            }
            return u += j, a._keyEvent = !1, u;
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                k = 0; 12 > k; k++) (!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>";
            }
            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml) if (a.yearshtml = "", 
            f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                for (l = this._get(a, "yearRange").split(":"), m = new Date().getFullYear(), n = function(a) {
                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(b) ? m : b;
                }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, 
                p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null;
            }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), 
            t += "</div>";
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), 
            ("M" === c || "Y" === c) && this._notifyChange(a);
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
            return d && e > d ? d : e;
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [ a.selectedYear, a.selectedMonth + 1, a ]);
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [ 1, 1 ] : "number" == typeof b ? [ 1, b ] : b;
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null);
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay();
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), 
            this._isInRange(a, f);
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = new Date().getFullYear(), g = parseInt(c[0], 10), 
            h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), 
            (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h);
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : new Date().getFullYear() % 100 + parseInt(b, 10), 
            {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            };
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
        }
    }), a.fn.datepicker = function(b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), 
        a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c)) : this.each(function() {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this ].concat(c)) : a.datepicker._attachDatepicker(this, b);
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
    }, a.datepicker = new e(), a.datepicker.initialized = !1, a.datepicker.uuid = new Date().getTime(), 
    a.datepicker.version = "1.11.4";
    a.datepicker;
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), 
            this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), 
            this._mouseInit();
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
            this._removeHandleClassName(), void this._mouseDestroy());
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), 
            this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1);
        },
        _blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(b) {
            var c = this.document[0];
            if (this.handleElement.is(b.target)) try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur();
            } catch (d) {}
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), 
            this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position");
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), 
            this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), 
            this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), 
            this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            };
        },
        _mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
        },
        _mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), 
            this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear();
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1;
        },
        _mouseUp: function(b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), 
            this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
            this;
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this.handleElement.addClass("ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle");
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper), e = d ? a(c.helper.apply(this.element[0], [ b ])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), 
            d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), 
            e;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0];
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset(), c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(), b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options, f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void (this.containment = [ a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : "document" === e.containment ? void (this.containment = [ 0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), 
            c = a(e.containment), d = c[0], void (d && (b = /(scroll|auto)/.test(c.css("overflow")), 
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = c))) : void (this.containment = null);
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1, d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            };
        },
        _generatePosition: function(a, b) {
            var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), i = a.pageX, j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), 
            c = [ this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top ]) : c = this.containment, 
            a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), 
            a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), 
            a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, 
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, 
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, 
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), 
            "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), 
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), 
            this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), 
            this.helper.css("bottom", "auto"));
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [ c, d, this ], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), 
            d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e));
            });
        },
        stop: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, 
                a._storedCSS = {
                    position: a.placeholder.css("position"),
                    top: a.placeholder.css("top"),
                    left: a.placeholder.css("left")
                }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, 
                a._trigger("deactivate", b, e));
            });
        },
        drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1, f = this;
                f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, 
                f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, 
                    this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), 
                    e;
                })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), 
                f.options._helper = f.options.helper, f.options.helper = function() {
                    return c.helper[0];
                }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), 
                f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, 
                f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, 
                d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                    this.refreshPositions();
                }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), 
                c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, 
                f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), 
                f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, 
                f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), 
                c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, 
                a.each(d.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c, d) {
            var e = a("body"), f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor);
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity);
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), 
            c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset());
        },
        drag: function(b, c, d) {
            var e = d.options, f = !1, g = d.scrollParentNotHidden[0], h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), 
            e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), 
            e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), 
            f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this), c = b.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                });
            });
        },
        drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options, p = o.snapTolerance, q = c.offset.left, r = q + d.helperProportions.width, s = c.offset.top, t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, 
            j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, 
            i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, 
            f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k - d.helperProportions.height,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i - d.helperProportions.width
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j
            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, 
            f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l - d.helperProportions.height,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j - d.helperProportions.width
            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = e || f || g || h || n);
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function(b, c, d) {
            var e, f = d.options, g = a.makeArray(a(f.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
            });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                a(this).css("zIndex", e + b);
            }), this.css("zIndex", e + g.length));
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex);
        }
    });
    a.ui.draggable;
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseInt(a, 10) || 0;
        },
        _isNumber: function(a) {
            return !isNaN(parseInt(a, 10));
        },
        _hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
        },
        _create: function() {
            var b, c, d, e, f, g = this, h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !!h.aspectRatio,
                aspectRatio: h.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), 
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = a(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) d = a.trim(b[c]), 
            f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), 
            e.css({
                zIndex: h.zIndex
            }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, 
            this.element.append(e);
            this._renderAxis = function(b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), 
                this._on(this.handles[c], {
                    mousedown: g._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), 
                f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = [ "padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left" ].join(""), 
                b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.mouseover(function() {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                g.axis = e && e[1] ? e[1] : "se");
            }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show());
            }).mouseleave(function() {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide());
            })), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var b, c = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            c(this.originalElement), this;
        },
        _mouseCapture: function(b) {
            var c, d, e = !1;
            for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e;
        },
        _mouseStart: function(b) {
            var c, d, e, f = this.options, g = this.element;
            return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), 
            d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, 
            d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: c,
                top: d
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: g.width(),
                height: g.height()
            }, this.originalSize = this._helper ? {
                width: g.outerWidth(),
                height: g.outerHeight()
            } : {
                width: g.width(),
                height: g.height()
            }, this.sizeDiff = {
                width: g.outerWidth() - g.width(),
                height: g.outerHeight() - g.height()
            }, this.originalPosition = {
                left: c,
                top: d
            }, this.originalMousePosition = {
                left: b.pageX,
                top: b.pageY
            }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), 
            g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0;
        },
        _mouseDrag: function(b) {
            var c, d, e = this.originalMousePosition, f = this.axis, g = b.pageX - e.left || 0, h = b.pageY - e.top || 0, i = this._change[f];
            return this._updatePrevProperties(), i ? (c = i.apply(this, [ b, g, h ]), this._updateVirtualBoundaries(b.shiftKey), 
            (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), 
            this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), 
            this._applyChanges()), !1) : !1;
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options, k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), 
            e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, 
            g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, 
            i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, 
            j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), 
            a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), 
            this._propagate("stop", b), this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var a = {};
            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), 
            this.helper.css(a), a;
        },
        _updateVirtualBoundaries: function(a) {
            var b, c, d, e, f, g = this.options;
            f = {
                minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
            }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, 
            c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), 
            d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), 
            this._vBoundaries = f;
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), 
            this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), 
            this._isNumber(a.width) && (this.size.width = a.width);
        },
        _updateRatio: function(a) {
            var b = this.position, c = this.size, d = this.axis;
            return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), 
            "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), 
            a.left = b.left + (c.width - a.width)), a;
        },
        _respectSize: function(a) {
            var b = this._vBoundaries, c = this.axis, d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width, e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height, f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width, g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height, h = this.originalPosition.left + this.originalSize.width, i = this.position.top + this.size.height, j = /sw|nw|w/.test(c), k = /nw|ne|n/.test(c);
            return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), 
            e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), 
            g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, 
            a;
        },
        _getPaddingPlusBorderDimensions: function(a) {
            for (var b = 0, c = [], d = [ a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth") ], e = [ a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft") ]; 4 > b; b++) c[b] = parseInt(d[b], 10) || 0, 
            c[b] += parseInt(e[b], 10) || 0;
            return {
                height: c[0] + c[2],
                width: c[1] + c[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), 
            a.css({
                height: c.height() - this.outerDimensions.height || 0,
                width: c.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var b = this.element, c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), 
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                };
            },
            w: function(a, b) {
                var c = this.originalSize, d = this.originalPosition;
                return {
                    left: d.left + b,
                    width: c.width - b
                };
            },
            n: function(a, b, c) {
                var d = this.originalSize, e = this.originalPosition;
                return {
                    top: e.top + c,
                    height: d.height - c
                };
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                };
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [ c, this.ui() ]), "resize" !== b && this._trigger(b, c, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var c = a(this).resizable("instance"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                width: c.size.width - h,
                height: c.size.height - g
            }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {
                top: k,
                left: j
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b);
                }
            });
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var b, c, d, e, f, g, h, i = a(this).resizable("instance"), j = i.options, k = i.element, l = j.containment, m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
            m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (b = a(m), c = [], a([ "Top", "Right", "Left", "Bottom" ]).each(function(a, d) {
                c[a] = i._num(b.css("padding" + d));
            }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                height: b.innerHeight() - c[3],
                width: b.innerWidth() - c[1]
            }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, 
            g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, 
            i.parentData = {
                element: m,
                left: d.left,
                top: d.top,
                width: g,
                height: h
            }));
        },
        resize: function(b) {
            var c, d, e, f, g = a(this).resizable("instance"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {
                top: 0,
                left: 0
            }, m = g.containerElement, n = !0;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), 
            k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), 
            j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), 
            k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), 
            e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), 
            e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, 
            g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), 
            d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), 
            c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, 
            k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, 
            k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, 
            g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height);
        },
        stop: function() {
            var b = a(this).resizable("instance"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            });
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = a(this).resizable("instance"), c = b.options;
            a(c.alsoResize).each(function() {
                var b = a(this);
                b.data("ui-resizable-alsoresize", {
                    width: parseInt(b.width(), 10),
                    height: parseInt(b.height(), 10),
                    left: parseInt(b.css("left"), 10),
                    top: parseInt(b.css("top"), 10)
                });
            });
        },
        resize: function(b, c) {
            var d = a(this).resizable("instance"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            };
            a(e.alsoResize).each(function() {
                var b = a(this), d = a(this).data("ui-resizable-alsoresize"), e = {}, f = b.parents(c.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                a.each(f, function(a, b) {
                    var c = (d[b] || 0) + (h[b] || 0);
                    c && c >= 0 && (e[b] = c || null);
                }), b.css(e);
            });
        },
        stop: function() {
            a(this).removeData("resizable-alsoresize");
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = a(this).resizable("instance"), c = b.options, d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), 
            b.ghost.appendTo(b.helper);
        },
        resize: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            });
        },
        stop: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b, c = a(this).resizable("instance"), d = c.options, e = c.size, f = c.originalSize, g = c.originalPosition, h = c.axis, i = "number" == typeof d.grid ? [ d.grid, d.grid ] : d.grid, j = i[0] || 1, k = i[1] || 1, l = Math.round((e.width - f.width) / j) * j, m = Math.round((e.height - f.height) / k) * k, n = f.width + l, o = f.height + m, p = d.maxWidth && d.maxWidth < n, q = d.maxHeight && d.maxHeight < o, r = d.minWidth && d.minWidth > n, s = d.minHeight && d.minHeight > o;
            d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, 
            c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, 
            c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), 
            o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, 
            c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, 
            c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n));
        }
    });
    a.ui.resizable, a.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(b) {
                    var c = a(this).css(b).offset().top;
                    0 > c && a(this).css("top", b.top - c);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, 
            this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), 
            this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), 
            this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0);
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), 
            this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: a.noop,
        enable: a.noop,
        close: function(b) {
            var c, d = this;
            if (this._isOpen && this._trigger("beforeClose", b) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), 
                !this.opener.filter(":focusable").focus().length) try {
                    c = this.document[0].activeElement, c && "body" !== c.nodeName.toLowerCase() && a(c).blur();
                } catch (e) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    d._trigger("close", b);
                });
            }
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(b, c) {
            var d = !1, e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +a(this).css("z-index");
            }).get(), f = Math.max.apply(null, e);
            return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), 
            d = !0), d && !c && this._trigger("focus", b), d;
        },
        open: function() {
            var b = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, 
            this.opener = a(this.document[0].activeElement), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                b._focusTabbable(), b._trigger("focus");
            }), this._makeFocusTarget(), void this._trigger("open"));
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), 
            a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), 
            a.length || (a = this.uiDialog), a.eq(0).focus();
        },
        _keepFocus: function(b) {
            function c() {
                var b = this.document[0].activeElement, c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                c || this._focusTabbable();
            }
            b.preventDefault(), c.call(this), this._delay(c);
        },
        _createWrapper: function() {
            this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), 
                    void this.close(b);
                    if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
                        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
                            e.focus();
                        }), b.preventDefault()) : (this._delay(function() {
                            d.focus();
                        }), b.preventDefault());
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var b;
            this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(b) {
                    a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
                }
            }), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault(), this.close(a);
                }
            }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), 
            this._title(b), this.uiDialog.attr({
                "aria-labelledby": b.attr("id")
            });
        },
        _title: function(a) {
            this.options.title || a.html("&#160;"), a.text(this.options.title);
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), 
            this._createButtons();
        },
        _createButtons: function() {
            var b = this, c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c, d) {
                var e, f;
                d = a.isFunction(d) ? {
                    click: d,
                    text: c
                } : d, d = a.extend({
                    type: "button"
                }, d), e = d.click, d.click = function() {
                    e.apply(b.element[0], arguments);
                }, f = {
                    icons: d.icons,
                    text: d.showText
                }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet);
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog));
        },
        _makeDraggable: function() {
            function b(a) {
                return {
                    position: a.position,
                    offset: a.offset
                };
            }
            var c = this, d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, e) {
                    a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e));
                },
                drag: function(a, d) {
                    c._trigger("drag", a, b(d));
                },
                stop: function(e, f) {
                    var g = f.offset.left - c.document.scrollLeft(), h = f.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
                        of: c.window
                    }, a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f));
                }
            });
        },
        _makeResizable: function() {
            function b(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                };
            }
            var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function(d, e) {
                    a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e));
                },
                resize: function(a, d) {
                    c._trigger("resize", a, b(d));
                },
                stop: function(e, f) {
                    var g = c.uiDialog.offset(), h = g.left - c.document.scrollLeft(), i = g.top - c.document.scrollTop();
                    d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
                        my: "left top",
                        at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
                        of: c.window
                    }, a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f));
                }
            }).css("position", f);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(b) {
                    this._makeFocusTarget(), this._focusedElement = a(b.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var b = this._trackingInstances(), c = a.inArray(this, b);
            -1 !== c && b.splice(c, 1);
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            return a || (a = [], this.document.data("ui-dialog-instances", a)), a;
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height);
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide();
        },
        _setOptions: function(b) {
            var c = this, d = !1, e = {};
            a.each(b, function(a, b) {
                c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b);
            }), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e);
        },
        _setOption: function(a, b) {
            var c, d, e = this.uiDialog;
            "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), 
            "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), 
            "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + b
            }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), 
            !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), 
            d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), 
            d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", 
            "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var b = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }).appendTo(b.parent()).offset(b.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(b) {
            return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var b = !0;
                this._delay(function() {
                    b = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(a) {
                        b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), 
                this.overlay.remove(), this.overlay = null;
            }
        }
    });
    a.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b, c = this.options, d = c.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                return a.is(d);
            }, this.proportions = function() {
                return arguments.length ? void (b = arguments[0]) : b ? b : b = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
            }, this._addToManager(c.scope), c.addClasses && this.element.addClass("ui-droppable");
        },
        _addToManager: function(b) {
            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this);
        },
        _splice: function(a) {
            for (var b = 0; b < a.length; b++) a[b] === this && a.splice(b, 1);
        },
        _destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(b, c) {
            if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }; else if ("scope" === b) {
                var d = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(d), this._addToManager(c);
            }
            this._super(b, c);
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            c && this._trigger("deactivate", b, this.ui(c));
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), 
            this._trigger("over", b, this.ui(c)));
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), 
            this._trigger("out", b, this.ui(c)));
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current, e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = a(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {
                    offset: c.element.offset()
                }), c.options.tolerance, b) ? (e = !0, !1) : void 0;
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), 
            this.element) : !1) : !1;
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            };
        }
    }), a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a;
        }
        return function(b, c, d, e) {
            if (!c.offset) return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left, g = (b.positionAbs || b.position.absolute).top + b.margins.top, h = f + b.helperProportions.width, i = g + b.helperProportions.height, j = c.offset.left, k = c.offset.top, l = j + c.proportions().width, m = k + c.proportions().height;
            switch (d) {
              case "fit":
                return f >= j && l >= h && g >= k && m >= i;

              case "intersect":
                return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;

              case "pointer":
                return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);

              case "touch":
                return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);

              default:
                return !1;
            }
        };
    }(), a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++) if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; e < h.length; e++) if (h[e] === f[d].element[0]) {
                    f[d].proportions().height = 0;
                    continue a;
                }
                f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), 
                f[d].offset = f[d].element.offset(), f[d].proportions({
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                }));
            }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, c)));
            }), d;
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
            });
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === e;
                    }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), 
                    d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, 
                    this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), 
                    d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
                }
            });
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
        }
    };
    var s = (a.ui.droppable, "ui-effects-"), t = a;
    a.effects = {
        effect: {}
    }, function(a, b) {
        function c(a, b, c) {
            var d = l[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), 
            isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a);
        }
        function d(b) {
            var c = j(), d = c._rgba = [];
            return b = b.toLowerCase(), o(i, function(a, e) {
                var f, g = e.re.exec(b), h = g && e.parse(g), i = e.space || "rgba";
                return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0;
            }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b];
        }
        function e(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a;
        }
        var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", h = /^([\-+])=\s*(\d+\.?\d*)/, i = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ a[1], a[2], a[3], a[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ 2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(a) {
                return [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(a) {
                return [ parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(a) {
                return [ a[1], a[2] / 100, a[3] / 100, a[4] ];
            }
        } ], j = a.Color = function(b, c, d, e) {
            return new a.Color.fn.parse(b, c, d, e);
        }, k = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, l = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, m = j.support = {}, n = a("<p>")[0], o = a.each;
        n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, 
        o(k, function(a, b) {
            b.cache = "_" + a, b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), j.fn = a.extend(j.prototype, {
            parse: function(e, g, h, i) {
                if (e === b) return this._rgba = [ null, null, null, null ], this;
                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                var l = this, m = a.type(e), n = this._rgba = [];
                return g !== b && (e = [ e, g, h, i ], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                    n[b.idx] = c(e[b.idx], b);
                }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                    e[b.cache] && (l[b.cache] = e[b.cache].slice());
                }) : o(k, function(b, d) {
                    var f = d.cache;
                    o(d.props, function(a, b) {
                        if (!l[f] && d.to) {
                            if ("alpha" === a || null == e[a]) return;
                            l[f] = d.to(l._rgba);
                        }
                        l[f][b.idx] = c(e[a], b, !0);
                    }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])));
                }), this) : void 0;
            },
            is: function(a) {
                var b = j(a), c = !0, d = this;
                return o(k, function(a, e) {
                    var f, g = b[e.cache];
                    return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                        return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0;
                    })), c;
                }), c;
            },
            _space: function() {
                var a = [], b = this;
                return o(k, function(c, d) {
                    b[d.cache] && a.push(c);
                }), a.pop();
            },
            transition: function(a, b) {
                var d = j(a), e = d._space(), f = k[e], g = 0 === this.alpha() ? j("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
                return d = d[f.cache], o(f.props, function(a, e) {
                    var f = e.idx, g = h[f], j = d[f], k = l[e.type] || {};
                    null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), 
                    i[f] = c((j - g) * b + g, e)));
                }), this[e](i);
            },
            blend: function(b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(), d = c.pop(), e = j(b)._rgba;
                return j(a.map(c, function(a, b) {
                    return (1 - d) * e[b] + d * a;
                }));
            },
            toRgbaString: function() {
                var b = "rgba(", c = a.map(this._rgba, function(a, b) {
                    return null == a ? b > 2 ? 1 : 0 : a;
                });
                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")";
            },
            toHslaString: function() {
                var b = "hsla(", c = a.map(this.hsla(), function(a, b) {
                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), 
                    a;
                });
                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")";
            },
            toHexString: function(b) {
                var c = this._rgba.slice(), d = c.pop();
                return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, 
            c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [ Math.round(b) % 360, c, l, null == g ? 1 : g ];
        }, k.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
            return [ Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f ];
        }, o(k, function(d, e) {
            var f = e.props, g = e.cache, i = e.to, k = e.from;
            j.fn[d] = function(d) {
                if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                var e, h = a.type(d), l = "array" === h || "object" === h ? d : arguments, m = this[g].slice();
                return o(f, function(a, b) {
                    var d = l["object" === h ? a : b.idx];
                    null == d && (d = m[b.idx]), m[b.idx] = c(d, b);
                }), k ? (e = j(k(m)), e[g] = m, e) : j(m);
            }, o(f, function(b, c) {
                j.fn[b] || (j.fn[b] = function(e) {
                    var f, g = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](), k = j[c.idx];
                    return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), 
                    null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), 
                    j[c.idx] = e, this[i](j)));
                });
            });
        }), j.hook = function(b) {
            var c = b.split(" ");
            o(c, function(b, c) {
                a.cssHooks[c] = {
                    set: function(b, e) {
                        var f, g, h = "";
                        if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                            if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style; ) try {
                                    h = a.css(g, "backgroundColor"), g = g.parentNode;
                                } catch (i) {}
                                e = e.blend(h && "transparent" !== h ? h : "_default");
                            }
                            e = e.toRgbaString();
                        }
                        try {
                            b.style[c] = e;
                        } catch (i) {}
                    }
                }, a.fx.step[c] = function(b) {
                    b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos));
                };
            });
        }, j.hook(g), a.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                return o([ "Top", "Right", "Bottom", "Left" ], function(c, d) {
                    b["border" + d + "Color"] = a;
                }), b;
            }
        }, f = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(t), function() {
        function b(b) {
            var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, f = {};
            if (e && e.length && e[0] && e[e[0]]) for (d = e.length; d--; ) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]); else for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
            return f;
        }
        function c(b, c) {
            var d, f, g = {};
            for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f));
            return g;
        }
        var d = [ "add", "remove", "toggle" ], e = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        a.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(b, c) {
            a.fx.step[c] = function(a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (t.style(a.elem, c, a.end), 
                a.setAttr = !0);
            };
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }), a.effects.animateClass = function(e, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function() {
                var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").addBack() : g;
                j = j.map(function() {
                    var c = a(this);
                    return {
                        el: c,
                        start: b(this)
                    };
                }), f = function() {
                    a.each(d, function(a, b) {
                        e[b] && g[b + "Class"](e[b]);
                    });
                }, f(), j = j.map(function() {
                    return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this;
                }), g.attr("class", h), j = j.map(function() {
                    var b = this, c = a.Deferred(), d = a.extend({}, i, {
                        queue: !1,
                        complete: function() {
                            c.resolve(b);
                        }
                    });
                    return this.el.animate(this.diff, d), c.promise();
                }), a.when.apply(a, j.get()).done(function() {
                    f(), a.each(arguments, function() {
                        var b = this.el;
                        a.each(this.diff, function(a) {
                            b.css(a, "");
                        });
                    }), i.complete.call(g[0]);
                });
            });
        }, a.fn.extend({
            addClass: function(b) {
                return function(c, d, e, f) {
                    return d ? a.effects.animateClass.call(this, {
                        add: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.addClass),
            removeClass: function(b) {
                return function(c, d, e, f) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {
                        remove: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.removeClass),
            toggleClass: function(b) {
                return function(c, d, e, f, g) {
                    return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                        add: c
                    } : {
                        remove: c
                    }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                        toggle: c
                    }, d, e, f);
                };
            }(a.fn.toggleClass),
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f);
            }
        });
    }(), function() {
        function b(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                effect: b
            }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, 
            d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, 
            b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, 
            b.complete = e || c.complete, b;
        }
        function c(b) {
            return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0;
        }
        a.extend(a.effects, {
            version: "1.11.4",
            save: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.data(s + b[c], a[0].style[b[c]]);
            },
            restore: function(a, b) {
                var c, d;
                for (d = 0; d < b.length; d++) null !== b[d] && (c = a.data(s + b[d]), void 0 === c && (c = ""), 
                a.css(b[d], c));
            },
            setMode: function(a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b;
            },
            getBaseline: function(a, b) {
                var c, d;
                switch (a[0]) {
                  case "top":
                    c = 0;
                    break;

                  case "middle":
                    c = .5;
                    break;

                  case "bottom":
                    c = 1;
                    break;

                  default:
                    c = a[0] / b.height;
                }
                switch (a[1]) {
                  case "left":
                    d = 0;
                    break;

                  case "center":
                    d = .5;
                    break;

                  case "right":
                    d = 1;
                    break;

                  default:
                    d = a[1] / b.width;
                }
                return {
                    x: d,
                    y: c
                };
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    "float": b.css("float")
                }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {
                    width: b.width(),
                    height: b.height()
                }, f = document.activeElement;
                try {
                    f.id;
                } catch (g) {
                    f = document.body;
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), 
                "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each([ "top", "left", "bottom", "right" ], function(a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show();
            },
            removeWrapper: function(b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), 
                b;
            },
            setTransition: function(b, c, d, e) {
                return e = e || {}, a.each(c, function(a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1]);
                }), e;
            }
        }), a.fn.extend({
            effect: function() {
                function c(b) {
                    function c() {
                        a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b();
                    }
                    var e = a(this), f = d.complete, h = d.mode;
                    (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c);
                }
                var d = b.apply(this, arguments), e = d.mode, f = d.queue, g = a.effects.effect[d.effect];
                return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
                    d.complete && d.complete.call(this);
                }) : f === !1 ? this.each(c) : this.queue(f || "fx", c);
            },
            show: function(a) {
                return function(d) {
                    if (c(d)) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "show", this.effect.call(this, e);
                };
            }(a.fn.show),
            hide: function(a) {
                return function(d) {
                    if (c(d)) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "hide", this.effect.call(this, e);
                };
            }(a.fn.hide),
            toggle: function(a) {
                return function(d) {
                    if (c(d) || "boolean" == typeof d) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "toggle", this.effect.call(this, e);
                };
            }(a.fn.toggle),
            cssUnit: function(b) {
                var c = this.css(b), d = [];
                return a.each([ "em", "px", "%", "pt" ], function(a, b) {
                    c.indexOf(b) > 0 && (d = [ parseFloat(c), b ]);
                }), d;
            }
        });
    }(), function() {
        var b = {};
        a.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(a, c) {
            b[c] = function(b) {
                return Math.pow(b, a + 2);
            };
        }), a.extend(b, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2);
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a);
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(a) {
                return a * a * (3 * a - 2);
            },
            Bounce: function(a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11; ) ;
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2);
            }
        }), a.each(b, function(b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                return 1 - c(1 - a);
            }, a.easing["easeInOut" + b] = function(a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2;
            };
        });
    }();
    a.effects, a.effects.effect.blind = function(b, c) {
        var d, e, f, g = a(this), h = /up|down|vertical/, i = /up|left|vertical|horizontal/, j = [ "position", "top", "bottom", "left", "right", "height", "width" ], k = a.effects.setMode(g, b.mode || "hide"), l = b.direction || "up", m = h.test(l), n = m ? "height" : "width", o = m ? "top" : "left", p = i.test(l), q = {}, r = "show" === k;
        g.parent().is(".ui-effects-wrapper") ? a.effects.save(g.parent(), j) : a.effects.save(g, j), 
        g.show(), d = a.effects.createWrapper(g).css({
            overflow: "hidden"
        }), e = d[n](), f = parseFloat(d.css(o)) || 0, q[n] = r ? e : 0, p || (g.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
            position: "absolute"
        }), q[o] = r ? f : e + f), r && (d.css(n, 0), p || d.css(o, f + e)), d.animate(q, {
            duration: b.duration,
            easing: b.easing,
            queue: !1,
            complete: function() {
                "hide" === k && g.hide(), a.effects.restore(g, j), a.effects.removeWrapper(g), c();
            }
        });
    }, a.effects.effect.bounce = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "height", "width" ], i = a.effects.setMode(g, b.mode || "effect"), j = "hide" === i, k = "show" === i, l = b.direction || "up", m = b.distance, n = b.times || 5, o = 2 * n + (k || j ? 1 : 0), p = b.duration / o, q = b.easing, r = "up" === l || "down" === l ? "top" : "left", s = "up" === l || "left" === l, t = g.queue(), u = t.length;
        for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), 
        m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
            opacity: 1
        }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), 
        f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), 
        m = j ? 2 * m : m / 2;
        j && (e = {
            opacity: 0
        }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
            j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c();
        }), u > 1 && t.splice.apply(t, [ 1, 0 ].concat(t.splice(u, o + 1))), g.dequeue();
    }, a.effects.effect.clip = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "height", "width" ], i = a.effects.setMode(g, b.mode || "hide"), j = "show" === i, k = b.direction || "vertical", l = "vertical" === k, m = l ? "height" : "width", n = l ? "top" : "left", o = {};
        a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
            overflow: "hidden"
        }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), 
        o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c();
            }
        });
    }, a.effects.effect.drop = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], g = a.effects.setMode(e, b.mode || "hide"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i ? "pos" : "neg", l = {
            opacity: h ? 1 : 0
        };
        a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, 
        h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, 
        e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
            }
        });
    }, a.effects.effect.explode = function(b, c) {
        function d() {
            t.push(this), t.length === l * m && e();
        }
        function e() {
            n.css({
                visibility: "visible"
            }), a(t).remove(), p || n.hide(), c();
        }
        var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, m = l, n = a(this), o = a.effects.setMode(n, b.mode || "hide"), p = "show" === o, q = n.show().css("visibility", "hidden").offset(), r = Math.ceil(n.outerWidth() / m), s = Math.ceil(n.outerHeight() / l), t = [];
        for (f = 0; l > f; f++) for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, 
        j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -g * r,
            top: -f * s
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: r,
            height: s,
            left: h + (p ? j * r : 0),
            top: i + (p ? k * s : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: h + (p ? 0 : j * r),
            top: i + (p ? 0 : k * s),
            opacity: p ? 1 : 0
        }, b.duration || 500, b.easing, d);
    }, a.effects.effect.fade = function(b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "toggle");
        d.animate({
            opacity: e
        }, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }, a.effects.effect.fold = function(b, c) {
        var d, e, f = a(this), g = [ "position", "top", "bottom", "left", "right", "height", "width" ], h = a.effects.setMode(f, b.mode || "hide"), i = "show" === h, j = "hide" === h, k = b.size || 15, l = /([0-9]+)%/.exec(k), m = !!b.horizFirst, n = i !== m, o = n ? [ "width", "height" ] : [ "height", "width" ], p = b.duration / 2, q = {}, r = {};
        a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
            overflow: "hidden"
        }), e = n ? [ d.width(), d.height() ] : [ d.height(), d.width() ], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), 
        i && d.css(m ? {
            height: 0,
            width: k
        } : {
            height: k,
            width: 0
        }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
            j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c();
        });
    }, a.effects.effect.highlight = function(b, c) {
        var d = a(this), e = [ "backgroundImage", "backgroundColor", "opacity" ], f = a.effects.setMode(d, b.mode || "show"), g = {
            backgroundColor: d.css("backgroundColor")
        };
        "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
            backgroundImage: "none",
            backgroundColor: b.color || "#ffff99"
        }).animate(g, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === f && d.hide(), a.effects.restore(d, e), c();
            }
        });
    }, a.effects.effect.size = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], i = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], j = [ "width", "height", "overflow" ], k = [ "fontSize" ], l = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], m = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], n = a.effects.setMode(g, b.mode || "effect"), o = b.restore || "effect" !== n, p = b.scale || "both", q = b.origin || [ "middle", "center" ], r = g.css("position"), s = o ? h : i, t = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === n && g.show(), d = {
            height: g.height(),
            width: g.width(),
            outerHeight: g.outerHeight(),
            outerWidth: g.outerWidth()
        }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), 
        g.to = b.to || ("hide" === n ? t : d)), f = {
            from: {
                y: g.from.height / d.height,
                x: g.from.width / d.width
            },
            to: {
                y: g.to.height / d.height,
                x: g.to.width / d.width
            }
        }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), 
        g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), 
        g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), 
        ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), 
        g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), 
        a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), 
        q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, 
        g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, 
        g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat([ "marginTop", "marginBottom" ]).concat(k), 
        m = m.concat([ "marginLeft", "marginRight" ]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
            var c = a(this), d = {
                height: c.height(),
                width: c.width(),
                outerHeight: c.outerHeight(),
                outerWidth: c.outerWidth()
            };
            o && a.effects.save(c, j), c.from = {
                height: d.height * f.from.y,
                width: d.width * f.from.x,
                outerHeight: d.outerHeight * f.from.y,
                outerWidth: d.outerWidth * f.from.x
            }, c.to = {
                height: d.height * f.to.y,
                width: d.width * f.to.x,
                outerHeight: d.height * f.to.y,
                outerWidth: d.width * f.to.x
            }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), 
            c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), 
            c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
                o && a.effects.restore(c, j);
            });
        })), g.animate(g.to, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), 
                a.effects.restore(g, s), o || ("static" === r ? g.css({
                    position: "relative",
                    top: g.to.top,
                    left: g.to.left
                }) : a.each([ "top", "left" ], function(a, b) {
                    g.css(b, function(b, c) {
                        var d = parseInt(c, 10), e = a ? g.to.left : g.to.top;
                        return "auto" === c ? e + "px" : d + e + "px";
                    });
                })), a.effects.removeWrapper(g), c();
            }
        });
    }, a.effects.effect.scale = function(b, c) {
        var d = a(this), e = a.extend(!0, {}, b), f = a.effects.setMode(d, b.mode || "effect"), g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100), h = b.direction || "both", i = b.origin, j = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        }, k = {
            y: "horizontal" !== h ? g / 100 : 1,
            x: "vertical" !== h ? g / 100 : 1
        };
        e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || [ "middle", "center" ], 
        e.restore = !0), e.from = b.from || ("show" === f ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : j), e.to = {
            height: j.height * k.y,
            width: j.width * k.x,
            outerHeight: j.outerHeight * k.y,
            outerWidth: j.outerWidth * k.x
        }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, 
        e.to.opacity = 0)), d.effect(e);
    }, a.effects.effect.puff = function(b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "hide"), f = "hide" === e, g = parseInt(b.percent, 10) || 150, h = g / 100, i = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        a.extend(b, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: f ? g : 100,
            from: f ? i : {
                height: i.height * h,
                width: i.width * h,
                outerHeight: i.outerHeight * h,
                outerWidth: i.outerWidth * h
            }
        }), d.effect(b);
    }, a.effects.effect.pulsate = function(b, c) {
        var d, e = a(this), f = a.effects.setMode(e, b.mode || "show"), g = "show" === f, h = "hide" === f, i = g || "hide" === f, j = 2 * (b.times || 5) + (i ? 1 : 0), k = b.duration / j, l = 0, m = e.queue(), n = m.length;
        for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
            opacity: l
        }, k, b.easing), l = 1 - l;
        e.animate({
            opacity: l
        }, k, b.easing), e.queue(function() {
            h && e.hide(), c();
        }), n > 1 && m.splice.apply(m, [ 1, 0 ].concat(m.splice(n, j + 1))), e.dequeue();
    }, a.effects.effect.shake = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "height", "width" ], g = a.effects.setMode(e, b.mode || "effect"), h = b.direction || "left", i = b.distance || 20, j = b.times || 3, k = 2 * j + 1, l = Math.round(b.duration / k), m = "up" === h || "down" === h ? "top" : "left", n = "up" === h || "left" === h, o = {}, p = {}, q = {}, r = e.queue(), s = r.length;
        for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, 
        p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), 
        d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
        e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
            "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
        }), s > 1 && r.splice.apply(r, [ 1, 0 ].concat(r.splice(s, k + 1))), e.dequeue();
    }, a.effects.effect.slide = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "width", "height" ], g = a.effects.setMode(e, b.mode || "show"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i, l = {};
        a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), 
        a.effects.createWrapper(e).css({
            overflow: "hidden"
        }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, 
        e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
            }
        });
    }, a.effects.effect.transfer = function(b, c) {
        var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"), h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(), k = {
            top: j.top - h,
            left: j.left - i,
            height: e.innerHeight(),
            width: e.innerWidth()
        }, l = d.offset(), m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
            top: l.top - h,
            left: l.left - i,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: f ? "fixed" : "absolute"
        }).animate(k, b.duration, b.easing, function() {
            m.remove(), c();
        });
    }, a.widget("ui.progressbar", {
        version: "1.11.4",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), 
            this._refreshValue();
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.valueDiv.remove();
        },
        value: function(a) {
            return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), 
            void this._refreshValue());
        },
        _constrainedValue: function(a) {
            return void 0 === a && (a = this.options.value), this.indeterminate = a === !1, 
            "number" != typeof a && (a = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a));
        },
        _setOptions: function(a) {
            var b = a.value;
            delete a.value, this._super(a), this.options.value = this._constrainedValue(b), 
            this._refreshValue();
        },
        _setOption: function(a, b) {
            "max" === a && (b = Math.max(this.min, b)), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), 
            this._super(a, b);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var b = this.options.value, c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), 
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), 
            this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": b
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, 
            this._trigger("change")), b === this.options.max && this._trigger("complete");
        }
    }), a.widget("ui.selectable", a.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var b, c = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                    var b = a(this), c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), 
            this.helper = a("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), 
            this._mouseDestroy();
        },
        _mouseStart: function(b) {
            var c = this, d = this.options;
            this.opos = [ b.pageX, b.pageY ], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), 
            this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                left: b.pageX,
                top: b.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var d = a.data(this, "selectable-item");
                d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), 
                d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                    unselecting: d.element
                }));
            }), a(b.target).parents().addBack().each(function() {
                var d, e = a.data(this, "selectable-item");
                return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), 
                e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), 
                e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                    selecting: e.element
                }) : c._trigger("unselecting", b, {
                    unselecting: e.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, i = b.pageY;
                return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                    left: f,
                    top: g,
                    width: h - f,
                    height: i - g
                }), this.selectees.each(function() {
                    var c = a.data(this, "selectable-item"), j = !1;
                    c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), 
                    j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), 
                    c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, 
                    d._trigger("selecting", b, {
                        selecting: c.element
                    }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), 
                    c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), 
                    c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), 
                    d._trigger("unselecting", b, {
                        unselecting: c.element
                    }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), 
                    c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                        unselecting: c.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, 
                c._trigger("unselected", b, {
                    unselected: d.element
                });
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, 
                d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                });
            }), this._trigger("stop", b), this.helper.remove(), !1;
        }
    }), a.widget("ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var a = this.element.uniqueId().attr("id");
            this.ids = {
                element: a,
                button: a + "-button",
                menu: a + "-menu"
            }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable();
        },
        _drawButton: function() {
            var b = this;
            this.label = a("label[for='" + this.ids.element + "']").attr("for", this.ids.button), 
            this._on(this.label, {
                click: function(a) {
                    this.button.focus(), a.preventDefault();
                }
            }), this.element.hide(), this.button = a("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element), a("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button), this.buttonText = a("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), 
            this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                b.menuItems || b._refreshMenu();
            }), this._hoverable(this.button), this._focusable(this.button);
        },
        _drawMenu: function() {
            var b = this;
            this.menu = a("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = a("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(a, c) {
                    a.preventDefault(), b._setSelection(), b._select(c.item.data("ui-selectmenu-item"), a);
                },
                focus: function(a, c) {
                    var d = c.item.data("ui-selectmenu-item");
                    null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {
                        item: d
                    }), b.isOpen || b._select(d, a)), b.focusIndex = d.index, b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"));
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), 
            this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), 
            this.options.width || this._resizeButton();
        },
        _refreshMenu: function() {
            this.menu.empty();
            var a, b = this.element.find("option");
            b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), 
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), 
            this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(a) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", a));
        },
        _position: function() {
            this.menuWrap.position(a.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", a));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderMenu: function(b, c) {
            var d = this, e = "";
            a.each(c, function(c, f) {
                f.optgroup !== e && (a("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: f.optgroup
                }).appendTo(b), e = f.optgroup), d._renderItemData(b, f);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-selectmenu-item", b);
        },
        _renderItem: function(b, c) {
            var d = a("<li>");
            return c.disabled && d.addClass("ui-state-disabled"), this._setText(d, c.label), 
            d.appendTo(b);
        },
        _setText: function(a, b) {
            b ? a.text(b) : a.html("&#160;");
        },
        _move: function(a, b) {
            var c, d, e = ".ui-menu-item";
            this.isOpen ? c = this.menuItems.eq(this.focusIndex) : (c = this.menuItems.eq(this.element[0].selectedIndex), 
            e += ":not(.ui-state-disabled)"), d = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](e).eq(-1) : c[a + "All"](e).eq(0), 
            d.length && this.menuInstance.focus(b, d);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex);
        },
        _toggle: function(a) {
            this[this.isOpen ? "close" : "open"](a);
        },
        _setSelection: function() {
            var a;
            this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), 
            a.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(b) {
                this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(b));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var a;
                window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange();
            },
            click: function(a) {
                this._setSelection(), this._toggle(a);
            },
            keydown: function(b) {
                var c = !0;
                switch (b.keyCode) {
                  case a.ui.keyCode.TAB:
                  case a.ui.keyCode.ESCAPE:
                    this.close(b), c = !1;
                    break;

                  case a.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(b);
                    break;

                  case a.ui.keyCode.UP:
                    b.altKey ? this._toggle(b) : this._move("prev", b);
                    break;

                  case a.ui.keyCode.DOWN:
                    b.altKey ? this._toggle(b) : this._move("next", b);
                    break;

                  case a.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
                    break;

                  case a.ui.keyCode.LEFT:
                    this._move("prev", b);
                    break;

                  case a.ui.keyCode.RIGHT:
                    this._move("next", b);
                    break;

                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.PAGE_UP:
                    this._move("first", b);
                    break;

                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_DOWN:
                    this._move("last", b);
                    break;

                  default:
                    this.menu.trigger(b), c = !1;
                }
                c && b.preventDefault();
            }
        },
        _selectFocusedItem: function(a) {
            var b = this.menuItems.eq(this.focusIndex);
            b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a);
        },
        _select: function(a, b) {
            var c = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index, this._setText(this.buttonText, a.label), 
            this._setAria(a), this._trigger("select", b, {
                item: a
            }), a.index !== c && this._trigger("change", b, {
                item: a
            }), this.close(b);
        },
        _setAria: function(a) {
            var b = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": b,
                "aria-activedescendant": b
            }), this.menu.attr("aria-activedescendant", b);
        },
        _setOption: function(a, b) {
            "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button), 
            this._super(a, b), "appendTo" === a && this.menuWrap.appendTo(this._appendTo()), 
            "disabled" === a && (this.menuInstance.option("disabled", b), this.button.toggleClass("ui-state-disabled", b).attr("aria-disabled", b), 
            this.element.prop("disabled", b), b ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), 
            "width" === a && this._resizeButton();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), 
            b.length || (b = this.document[0].body), b;
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), 
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var a = this.options.width;
            a || (a = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(a);
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            };
        },
        _parseOptions: function(b) {
            var c = [];
            b.each(function(b, d) {
                var e = a(d), f = e.parent("optgroup");
                c.push({
                    element: e,
                    index: b,
                    value: e.val(),
                    label: e.text(),
                    optgroup: f.attr("label") || "",
                    disabled: f.prop("disabled") || e.prop("disabled")
                });
            }), this.items = c;
        },
        _destroy: function() {
            this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), 
            this.label.attr("for", this.ids.element);
        }
    }), a.widget("ui.slider", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var b, c, d = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", g = [];
            for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), 
            e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
            this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), 
            this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b);
            });
        },
        _createRange: function() {
            var b = this.options, c = "";
            b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [ b.values[0], b.values[0] ] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c, d, e, f, g, h, i, j, k = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(b) {
                var c = Math.abs(d - k.values(b));
                (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, 
                f = a(this), g = b);
            }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, 
            f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), 
            this._clickOffset = j ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1;
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), 
            this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, 
            this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, 
            c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), 
            e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("start", a, c);
        },
        _slide: function(a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 
            2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), 
            c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c));
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("stop", a, c);
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), 
                c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c);
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(b, c) {
            var d, e, f;
            if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), 
            this._refreshValue(), void this._change(null, b);
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), 
            this._change(null, f);
            this._refreshValue();
        },
        _setOption: function(b, c) {
            var d, e = 0;
            switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), 
            "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), 
            b) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.handles.css("horizontal" === c ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a);
        },
        _values: function(a) {
            var b, c, d;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c;
            }
            return [];
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
        },
        _calculateNewMax: function() {
            var a = this.options.max, b = this._valueMin(), c = this.options.step, d = Math.floor(+(a - b).toFixed(this._precision()) / c) * c;
            a = d + b, this.max = parseFloat(a.toFixed(this._precision()));
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), 
            a;
        },
        _precisionOf: function(a) {
            var b = a.toString(), c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshValue: function() {
            var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
            this.options.values && this.options.values.length ? this.handles.each(function(d) {
                c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", 
                a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    left: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    width: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    bottom: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    height: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))), b = c;
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, 
            k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), 
            "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: c + "%"
            }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: c + "%"
            }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }));
        },
        _handleEvents: {
            keydown: function(b) {
                var c, d, e, f, g = a(b.target).data("ui-slider-handle-index");
                switch (b.keyCode) {
                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_UP:
                  case a.ui.keyCode.PAGE_DOWN:
                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), 
                    c = this._start(b, g), c === !1)) return;
                }
                switch (f = this.options.step, d = e = this.options.values && this.options.values.length ? this.values(g) : this.value(), 
                b.keyCode) {
                  case a.ui.keyCode.HOME:
                    e = this._valueMin();
                    break;

                  case a.ui.keyCode.END:
                    e = this._valueMax();
                    break;

                  case a.ui.keyCode.PAGE_UP:
                    e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case a.ui.keyCode.PAGE_DOWN:
                    e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                    if (d === this._valueMax()) return;
                    e = this._trimAlignValue(d + f);
                    break;

                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (d === this._valueMin()) return;
                    e = this._trimAlignValue(d - f);
                }
                this._slide(b, g, e);
            },
            keyup: function(b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), 
                a(b.target).removeClass("ui-state-active"));
            }
        }
    }), a.widget("ui.sortable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, c) {
            return a >= b && b + c > a;
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
            this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), 
            this.ready = !0;
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), a.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(b, c) {
            var d = null, e = !1, f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), 
            a(b.target).parents().each(function() {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0;
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
                this === b.target && (e = !0);
            }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1);
        },
        _mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), 
            this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), 
            g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !d) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), 
            !0;
        },
        _mouseDrag: function(b) {
            var c, d, e, f, g = this.options, h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), 
            b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), 
            h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            c = this.items.length - 1; c >= 0; c--) if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), 
            f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                break;
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), 
            this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), 
                this.options.revert) {
                    var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b);
                    });
                } else this._clear(b, c);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), 
                this.containers[b].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
            }), !d.length && b.key && d.push(b.key + "="), d.join("&");
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "");
            }), d;
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
        },
        _intersectsWithPointer: function(a) {
            var b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), c = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width), d = b && c, e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
            return d ? this.floating ? f && "right" === f || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1) : !1;
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b);
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left");
        },
        refresh: function(a) {
            return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [ a.connectWith ] : a.connectWith;
        },
        _getItemsAsjQuery: function(b) {
            function c() {
                h.push(this);
            }
            var d, e, f, g, h = [], i = [], j = this._connectWith();
            if (j && b) for (d = j.length - 1; d >= 0; d--) for (f = a(j[d], this.document[0]), 
            e = f.length - 1; e >= 0; e--) g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([ a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g ]);
            for (i.push([ a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            d = i.length - 1; d >= 0; d--) i[d][0].each(c);
            return a(h);
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++) if (b[c] === a.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [ this ];
            var c, d, e, f, g, h, i, j, k = this.items, l = [ [ a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                item: this.currentItem
            }) : a(this.options.items, this.element), this ] ], m = this._connectWith();
            if (m && this.ready) for (c = m.length - 1; c >= 0; c--) for (e = a(m[c], this.document[0]), 
            d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                item: this.currentItem
            }) : a(f.options.items, f.element), f ]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--) for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), 
            i.data(this.widgetName + "-item", g), k.push({
                item: i,
                instance: g,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(b) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, 
            b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, 
            d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), 
            this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, 
            this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), 
            this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), 
                    c || e.css("visibility", "hidden"), e;
                },
                update: function(a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), 
                    e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), 
            d.placeholder.update(b, b.placeholder);
        },
        _createTrPlaceholder: function(b, c) {
            var d = this;
            b.children().each(function() {
                a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c);
            });
        },
        _contactContainers: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = null, n = null;
            for (c = this.containers.length - 1; c >= 0; c--) if (!a.contains(this.currentItem[0], this.containers[c].element[0])) if (this._intersectsWith(this.containers[c].containerCache)) {
                if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                m = this.containers[c], n = c;
            } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), 
            this.containers[c].containerCache.over = 0);
            if (m) if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), 
            this.containers[n].containerCache.over = 1); else {
                for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", 
                h = k ? "width" : "height", l = k ? "clientX" : "clientY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], 
                j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), Math.abs(b[l] - i) < e && (e = Math.abs(b[l] - i), 
                f = this.items[d], this.direction = j ? "up" : "down"));
                if (!f && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[n]) return void (this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), 
                this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), 
                this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1;
            }
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b, this.currentItem ])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), 
            d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), 
            (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), 
            d = "hidden" !== a(b).css("overflow"), this.containment = [ c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), 
            b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), 
            e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], 
            g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, 
            d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], 
            f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), 
            {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            };
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d);
            });
        },
        _clear: function(a, b) {
            function c(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b));
                };
            }
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS) ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !b && e.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                this._trigger("update", a, this._uiHash());
            }), this !== this.currentContainer && (b || (e.push(function(a) {
                this._trigger("remove", a, this._uiHash());
            }), e.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), e.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), 
            this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), 
            this.containers[d].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !b) {
                for (d = 0; d < e.length; d++) e[d].call(this, a);
                this._trigger("stop", a, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            };
        }
    }), a.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var b = {}, c = this.element;
            return a.each([ "min", "max", "step" ], function(a, d) {
                var e = c.attr(d);
                void 0 !== e && e.length && (b[d] = e);
            }), b;
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(a) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), 
                void (this.previous !== this.element.val() && this._trigger("change", a)));
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a);
                    }, 100), a.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(b) {
                function c() {
                    var a = this.element[0] === this.document[0].activeElement;
                    a || (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d;
                    }));
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), 
                b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, c.call(this);
                }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(b) {
                return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) === !1 ? !1 : void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), 
            this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), 
            this.options.disabled && this.disable();
        },
        _keydown: function(b) {
            var c = this.options, d = a.ui.keyCode;
            switch (b.keyCode) {
              case d.UP:
                return this._repeat(null, 1, b), !0;

              case d.DOWN:
                return this._repeat(null, -1, b), !0;

              case d.PAGE_UP:
                return this._repeat(null, c.page, b), !0;

              case d.PAGE_DOWN:
                return this._repeat(null, -c.page, b), !0;
            }
            return !1;
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>";
        },
        _start: function(a) {
            return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), 
            this.spinning = !0, !0) : !1;
        },
        _repeat: function(a, b, c) {
            a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, b, c);
            }, a), this._spin(b * this.options.step, c);
        },
        _spin: function(a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), 
            this.spinning && this._trigger("spin", b, {
                value: c
            }) === !1 || (this._value(c), this.counter++);
        },
        _increment: function(b) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1;
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), 
            a;
        },
        _precisionOf: function(a) {
            var b = a.toString(), c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1;
        },
        _adjustValue: function(a) {
            var b, c, d = this.options;
            return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, 
            a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a;
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", a));
        },
        _setOption: function(a, b) {
            if ("culture" === a || "numberFormat" === a) {
                var c = this._parse(this.element.val());
                return this.options[a] = b, void this.element.val(this._format(c));
            }
            ("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), 
            "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), 
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), 
            this._super(a, b), "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!b), 
            this.element.prop("disabled", !!b), this.buttons.button(b ? "disable" : "enable"));
        },
        _setOptions: i(function(a) {
            this._super(a);
        }),
        _parse: function(a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), 
            "" === a || isNaN(a) ? null : a;
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a);
        },
        _value: function(a, b) {
            var c;
            "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), 
            a = this._format(c))), this.element.val(a), this._refresh();
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: i(function(a) {
            this._stepUp(a);
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop());
        },
        stepDown: i(function(a) {
            this._stepDown(a);
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop());
        },
        pageUp: i(function(a) {
            this._stepUp((a || 1) * this.options.page);
        }),
        pageDown: i(function(a) {
            this._stepDown((a || 1) * this.options.page);
        }),
        value: function(a) {
            return arguments.length ? void i(this._value).call(this, a) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), a.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var c, d;
                b = b.cloneNode(!1), c = b.href.replace(a, ""), d = location.href.replace(a, "");
                try {
                    c = decodeURIComponent(c);
                } catch (e) {}
                try {
                    d = decodeURIComponent(d);
                } catch (e) {}
                return b.hash.length > 1 && c === d;
            };
        }(),
        _create: function() {
            var b = this, c = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible), 
            this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a);
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(c.active) : this.active = a(), 
            this._refresh(), this.active.length && this.load(c.active);
        },
        _initialActive: function() {
            var b = this.options.active, c = this.options.collapsible, d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function(c, e) {
                return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0;
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), 
            b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), 
            !c && b === !1 && this.anchors.length && (b = 0), b;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            };
        },
        _tabKeydown: function(b) {
            var c = a(this.document[0].activeElement).closest("li"), d = this.tabs.index(c), e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                    d++;
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.LEFT:
                    e = !1, d--;
                    break;

                  case a.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;

                  case a.ui.keyCode.HOME:
                    d = 0;
                    break;

                  case a.ui.keyCode.SPACE:
                    return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);

                  case a.ui.keyCode.ENTER:
                    return b.preventDefault(), clearTimeout(this.activating), void this._activate(d === this.options.active ? !1 : d);

                  default:
                    return;
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), 
                b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", d);
                }, this.delay));
            }
        },
        _panelKeydown: function(b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), 
            this.active.focus());
        },
        _handlePageNav: function(b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(b, c) {
            function d() {
                return b > e && (b = 0), 0 > b && (b = e), b;
            }
            for (var e = this.tabs.length - 1; -1 !== a.inArray(d(), this.options.disabled); ) b = c ? b + 1 : b - 1;
            return b;
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a;
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), 
            "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), 
            "event" === a && this._setupEvents(b), void ("heightStyle" === a && this._setupHeightStyle(b)));
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var b = this.options, c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a);
            }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, 
            this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, 
            this.active = a()), this._refresh();
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var b = this, c = this.tabs, d = this.anchors, e = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault();
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return a("a", this)[0];
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = a(), this.anchors.each(function(c, d) {
                var e, f, g, h = a(d).uniqueId().attr("id"), i = a(d).closest("li"), j = i.attr("aria-controls");
                b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, 
                e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), 
                f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), 
                i.attr({
                    "aria-controls": g,
                    "aria-labelledby": h
                }), f.attr("aria-labelledby", h);
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), 
            c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0);
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function(b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b;
        },
        _setupEvents: function(b) {
            var c = {};
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault();
                }
            }), this._on(this.anchors, c), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var b = a(this), d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                c -= a(this).outerHeight(!0);
            }), this.panels.each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                c = Math.max(c, a(this).height("").height());
            }).height(c));
        },
        _eventHandler: function(b) {
            var c = this.options, d = this.active, e = a(b.currentTarget), f = e.closest("li"), g = f[0] === d[0], h = g && c.collapsible, i = h ? a() : this._getPanelForTab(f), j = d.length ? this._getPanelForTab(d) : a(), k = {
                oldTab: d,
                oldPanel: j,
                newTab: h ? a() : f,
                newPanel: i
            };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), 
            this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            i.length && this.load(this.tabs.index(f), b), this._toggle(b, k));
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c);
            }
            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), 
                d());
            }
            var f = this, g = c.newPanel, h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e();
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), 
            e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex");
            }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return b === !1 ? a() : this.tabs.eq(b);
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), 
            a;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), 
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), 
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), 
            this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
            }), this.tabs.each(function() {
                var b = a(this), c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(b) {
            var c = this.options.disabled;
            c !== !1 && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                return a !== b ? a : null;
            }) : a.map(this.tabs, function(a, c) {
                return c !== b ? c : null;
            })), this._setupDisabled(c));
        },
        disable: function(b) {
            var c = this.options.disabled;
            if (c !== !0) {
                if (void 0 === b) c = !0; else {
                    if (b = this._getIndex(b), -1 !== a.inArray(b, c)) return;
                    c = a.isArray(c) ? a.merge([ b ], c).sort() : [ b ];
                }
                this._setupDisabled(c);
            }
        },
        load: function(b, c) {
            b = this._getIndex(b);
            var d = this, e = this.tabs.eq(b), f = e.find(".ui-tabs-anchor"), g = this._getPanelForTab(e), h = {
                tab: e,
                panel: g
            }, i = function(a, b) {
                "abort" === b && d.panels.stop(!1, !0), e.removeClass("ui-tabs-loading"), g.removeAttr("aria-busy"), 
                a === d.xhr && delete d.xhr;
            };
            this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), 
            g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
                setTimeout(function() {
                    g.html(a), d._trigger("load", c, h), i(e, b);
                }, 1);
            }).fail(function(a, b) {
                setTimeout(function() {
                    i(a, b);
                }, 1);
            })));
        },
        _ajaxSettings: function(b, c, d) {
            var e = this;
            return {
                url: b.attr("href"),
                beforeSend: function(b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d));
                }
            };
        },
        _getPanelForTab: function(b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c));
        }
    }), a.widget("ui.tooltip", {
        version: "1.11.4",
        options: {
            content: function() {
                var b = a(this).attr("title") || "";
                return a("<a>").text(b).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")));
        },
        _removeDescribedBy: function(b) {
            var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = a.inArray(c, d);
            -1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), 
            d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), 
            this.liveRegion = a("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
        },
        _setOption: function(b, c) {
            var d = this;
            return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void (this.options[b] = c)) : (this._super(b, c), 
            void ("content" === b && a.each(this.tooltips, function(a, b) {
                d._updateContent(b.element);
            })));
        },
        _disable: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d.element[0], b.close(e, !0);
            }), this.element.find(this.options.items).addBack().each(function() {
                var b = a(this);
                b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title");
            });
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var b = a(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"));
            });
        },
        open: function(b) {
            var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), 
            d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                var b, d = a(this);
                d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, 
                c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                }, d.attr("title", ""));
            }), this._registerCloseHandlers(b, d), this._updateContent(d, b));
        },
        _updateContent: function(a, b) {
            var c, d = this.options.content, e = this, f = b ? b.type : null;
            return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
                e._delay(function() {
                    a.data("ui-tooltip-open") && (b && (b.type = f), this._open(b, a, c));
                });
            }), void (c && this._open(b, a, c)));
        },
        _open: function(b, c, d) {
            function e(a) {
                j.of = a, g.is(":hidden") || g.position(j);
            }
            var f, g, h, i, j = a.extend({}, this.options.position);
            if (d) {
                if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
                c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), 
                f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), 
                this.liveRegion.children().hide(), d.clone ? (i = d.clone(), i.removeAttr("id").find("[id]").removeAttr("id")) : i = d, 
                a("<div>").html(i).appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
                    mousemove: e
                }), e(b)) : g.position(a.extend({
                    of: c
                }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    g.is(":visible") && (e(j.of), clearInterval(h));
                }, a.fx.interval)), this._trigger("open", b, {
                    tooltip: g
                });
            }
        },
        _registerCloseHandlers: function(b, c) {
            var d = {
                keyup: function(b) {
                    if (b.keyCode === a.ui.keyCode.ESCAPE) {
                        var d = a.Event(b);
                        d.currentTarget = c[0], this.close(d, !0);
                    }
                }
            };
            c[0] !== this.element[0] && (d.remove = function() {
                this._removeTooltip(this._find(c).tooltip);
            }), b && "mouseover" !== b.type || (d.mouseleave = "close"), b && "focusin" !== b.type || (d.focusout = "close"), 
            this._on(!0, c, d);
        },
        close: function(b) {
            var c, d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
            return f ? (c = f.tooltip, void (f.closing || (clearInterval(this.delayedShow), 
            e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), 
            this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
                d._removeTooltip(a(this));
            }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), 
            e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), 
            b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                a(c.element).attr("title", c.title), delete d.parents[b];
            }), f.closing = !0, this._trigger("close", b, {
                tooltip: c
            }), f.hiding || (f.closing = !1)))) : void e.removeData("ui-tooltip-open");
        },
        _tooltip: function(b) {
            var c = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), d = c.uniqueId().attr("id");
            return a("<div>").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), 
            this.tooltips[d] = {
                element: b,
                tooltip: c
            };
        },
        _find: function(a) {
            var b = a.data("ui-tooltip-id");
            return b ? this.tooltips[b] : null;
        },
        _removeTooltip: function(a) {
            a.remove(), delete this.tooltips[a.attr("id")];
        },
        _destroy: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur"), f = d.element;
                e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), 
                f.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    });
}), function(a, b) {
    "use strict";
    var c, d = a.document;
    c = function() {
        var c, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = {}, s = !1, t = {
            ENTER: 13,
            ESC: 27,
            SPACE: 32
        }, u = [];
        return r = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        }, p = function() {
            var a, c, e = !1, f = d.createElement("fakeelement"), g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (a in g) if (f.style[a] !== b) {
                c = g[a], e = !0;
                break;
            }
            return {
                type: c,
                supported: e
            };
        }, c = function(a) {
            return d.getElementById(a);
        }, q = {
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: b,
            addListeners: function(a) {
                var b, c, i, j, k, l = "undefined" != typeof f, m = "undefined" != typeof e, n = "undefined" != typeof o, p = "", q = this;
                b = function(b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "undefined" != typeof o && (p = o.value), 
                    "function" == typeof a && ("undefined" != typeof o ? a(!0, p) : a(!0)), !1;
                }, c = function(b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "function" == typeof a && a(!1), 
                    !1;
                }, i = function(a) {
                    q.hide(), q.unbind(d.body, "keyup", j), q.unbind(g, "focus", k), l && q.unbind(f, "click", b), 
                    m && q.unbind(e, "click", c);
                }, j = function(a) {
                    var d = a.keyCode;
                    (d === t.SPACE && !n || n && d === t.ENTER) && b(a), d === t.ESC && m && c(a);
                }, k = function(a) {
                    n ? o.focus() : !m || q.buttonReverse ? f.focus() : e.focus();
                }, this.bind(g, "focus", k), this.bind(h, "focus", k), l && this.bind(f, "click", b), 
                m && this.bind(e, "click", c), this.bind(d.body, "keyup", j), this.transition.supported || this.setFocus();
            },
            bind: function(a, b, c) {
                "function" == typeof a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
            },
            handleErrors: function() {
                if ("undefined" != typeof a.onerror) {
                    var b = this;
                    return a.onerror = function(a, c, d) {
                        b.error("[" + a + " on line " + d + " of " + c + "]", 0);
                    }, !0;
                }
                return !1;
            },
            appendButtons: function(a, b) {
                return this.buttonReverse ? b + a : a + b;
            },
            build: function(a) {
                var b = "", c = a.type, d = a.message, e = a.cssClass || "";
                switch (b += '<div class="alertify-dialog">', b += '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>', 
                "none" === q.buttonFocus && (b += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), 
                "prompt" === c && (b += '<div id="alertify-form">'), b += '<article class="alertify-inner">', 
                b += r.message.replace("{{message}}", d), "prompt" === c && (b += r.input), b += r.buttons.holder, 
                b += "</article>", "prompt" === c && (b += "</div>"), b += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', 
                b += "</div>", c) {
                  case "confirm":
                    b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.ok)), 
                    b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "prompt":
                    b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.submit)), 
                    b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "alert":
                    b = b.replace("{{buttons}}", r.buttons.ok), b = b.replace("{{ok}}", this.labels.ok);
                }
                return l.className = "alertify alertify-" + c + " " + e, k.className = "alertify-cover", 
                b;
            },
            close: function(a, b) {
                var c, d, e = b && !isNaN(b) ? +b : this.delay, f = this;
                this.bind(a, "click", function() {
                    c(a);
                }), d = function(a) {
                    a.stopPropagation(), f.unbind(this, f.transition.type, d), m.removeChild(this), 
                    m.hasChildNodes() || (m.className += " alertify-logs-hidden");
                }, c = function(a) {
                    "undefined" != typeof a && a.parentNode === m && (f.transition.supported ? (f.bind(a, f.transition.type, d), 
                    a.className += " alertify-log-hide") : (m.removeChild(a), m.hasChildNodes() || (m.className += " alertify-logs-hidden")));
                }, 0 !== b && setTimeout(function() {
                    c(a);
                }, e);
            },
            dialog: function(a, b, c, e, f) {
                j = d.activeElement;
                var g = function() {
                    m && null !== m.scrollTop && k && null !== k.scrollTop || g();
                };
                if ("string" != typeof a) throw new Error("message must be a string");
                if ("string" != typeof b) throw new Error("type must be a string");
                if ("undefined" != typeof c && "function" != typeof c) throw new Error("fn must be a function");
                return this.init(), g(), u.push({
                    type: b,
                    message: a,
                    callback: c,
                    placeholder: e,
                    cssClass: f
                }), s || this.setup(), this;
            },
            extend: function(a) {
                if ("string" != typeof a) throw new Error("extend method must have exactly one paramter");
                return function(b, c) {
                    return this.log(b, a, c), this;
                };
            },
            hide: function() {
                var a, b = this;
                u.splice(0, 1), u.length > 0 ? this.setup(!0) : (s = !1, a = function(c) {
                    c.stopPropagation(), b.unbind(l, b.transition.type, a);
                }, this.transition.supported ? (this.bind(l, this.transition.type, a), l.className = "alertify alertify-hide alertify-hidden") : l.className = "alertify alertify-hide alertify-hidden alertify-isHidden", 
                k.className = "alertify-cover alertify-cover-hidden", j.focus());
            },
            init: function() {
                d.createElement("nav"), d.createElement("article"), d.createElement("section"), 
                null == c("alertify-cover") && (k = d.createElement("div"), k.setAttribute("id", "alertify-cover"), 
                k.className = "alertify-cover alertify-cover-hidden", d.body.appendChild(k)), null == c("alertify") && (s = !1, 
                u = [], l = d.createElement("section"), l.setAttribute("id", "alertify"), l.className = "alertify alertify-hidden", 
                d.body.appendChild(l)), null == c("alertify-logs") && (m = d.createElement("section"), 
                m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", 
                d.body.appendChild(m)), d.body.setAttribute("tabindex", "0"), this.transition = p();
            },
            log: function(a, b, c) {
                var d = function() {
                    m && null !== m.scrollTop || d();
                };
                return this.init(), d(), m.className = "alertify-logs", this.notify(a, b, c), this;
            },
            notify: function(a, b, c) {
                var e = d.createElement("article");
                e.className = "alertify-log" + ("string" == typeof b && "" !== b ? " alertify-log-" + b : ""), 
                e.innerHTML = a, m.appendChild(e), setTimeout(function() {
                    e.className = e.className + " alertify-log-show";
                }, 50), this.close(e, c);
            },
            set: function(a) {
                var b;
                if ("object" != typeof a && a instanceof Array) throw new Error("args must be an object");
                for (b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
            },
            setFocus: function() {
                o ? (o.focus(), o.select()) : i.focus();
            },
            setup: function(a) {
                var d, j = u[0], k = this;
                s = !0, d = function(a) {
                    a.stopPropagation(), k.setFocus(), k.unbind(l, k.transition.type, d);
                }, this.transition.supported && !a && this.bind(l, this.transition.type, d), l.innerHTML = this.build(j), 
                g = c("alertify-resetFocus"), h = c("alertify-resetFocusBack"), f = c("alertify-ok") || b, 
                e = c("alertify-cancel") || b, i = "cancel" === q.buttonFocus ? e : "none" === q.buttonFocus ? c("alertify-noneFocus") : f, 
                o = c("alertify-text") || b, n = c("alertify-form") || b, "string" == typeof j.placeholder && "" !== j.placeholder && (o.value = j.placeholder), 
                a && this.setFocus(), this.addListeners(j.callback);
            },
            unbind: function(a, b, c) {
                "function" == typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
            }
        }, {
            alert: function(a, b, c) {
                return q.dialog(a, "alert", b, "", c), this;
            },
            confirm: function(a, b, c) {
                return q.dialog(a, "confirm", b, "", c), this;
            },
            extend: q.extend,
            init: q.init,
            log: function(a, b, c) {
                return q.log(a, b, c), this;
            },
            prompt: function(a, b, c, d) {
                return q.dialog(a, "prompt", b, c, d), this;
            },
            success: function(a, b) {
                return q.log(a, "success", b), this;
            },
            error: function(a, b) {
                return q.log(a, "error", b), this;
            },
            set: function(a) {
                q.set(a);
            },
            labels: q.labels,
            debug: q.handleErrors
        };
    }, "function" == typeof define ? define([], function() {
        return new c();
    }) : "undefined" == typeof a.alertify && (a.alertify = new c());
}(this), !function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function(a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function(a, b) {
            var c;
            return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof a ? (b = "number" == typeof b ? b : a, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), 
                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), 
            a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0;
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), 
                k > a && (m = j.length - 1)) : j.push(null);
            }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B);
                    }
                }
                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
                }
                function q(a) {
                    for (;++a < n && !j[a]; ) ;
                    return a;
                }
                function r(a) {
                    for (;--a >= 0 && !j[a]; ) ;
                    return a;
                }
                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++) if (j[c]) {
                            if (!(n > d && j[c].test(C[d]))) break;
                            C[c] = C[d], C[d] = p(d), d = q(d);
                        }
                        z(), B.caret(Math.max(l, a));
                    }
                }
                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++) if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                        c = e;
                    }
                }
                function u() {
                    var a = B.val(), b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1]; ) b.begin--;
                        if (0 === b.begin) for (;b.begin < l && !j[b.begin]; ) b.begin++;
                        B.caret(b.begin, b.begin);
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin]; ) b.begin++;
                        B.caret(b.begin, b.begin);
                    }
                    h();
                }
                function v() {
                    A(), B.val() != E && B.change();
                }
                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, 
                        e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), 
                        y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), 
                        B.caret(0, A()), a.preventDefault());
                    }
                }
                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), 
                            n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)();
                                    };
                                    setTimeout(k, 0);
                                } else B.caret(e);
                                i.begin <= m && h();
                            }
                            b.preventDefault();
                        }
                    }
                }
                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c));
                }
                function z() {
                    B.val(C.join(""));
                }
                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++) if (j[b]) {
                        for (C[b] = p(b); d++ < e.length; ) if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break;
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break;
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), 
                    y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
                }
                var B = a(this), C = a.map(c.split(""), function(a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0;
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null;
                    }).join("");
                }), B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName);
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a);
                        }, 10);
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h();
                    }, 0);
                }), e && f && B.off("input.mask").on("input.mask", u), A();
            });
        }
    });
}), $(document).ready(function() {}), $(function() {
    $("#login-form-link").click(function(a) {
        $("#login-form").delay(100).fadeIn(100), $("#register-form").fadeOut(100), $("#register-form-link").removeClass("active"), 
        $(this).addClass("active"), a.preventDefault();
    }), $("#register-form-link").click(function(a) {
        $("#register-form").delay(100).fadeIn(100), $("#login-form").fadeOut(100), $("#login-form-link").removeClass("active"), 
        $(this).addClass("active"), a.preventDefault();
    });
});

var getAvailableDates = function() {
    $.getJSON("http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/operation/", function(a) {
        var b = [];
        $.each(a.operations, function() {
            var a = new Date(this.date);
            b.push(a.getDate() + "-" + (a.getMonth() + 1) + "-" + a.getFullYear());
        }), datelist = b, $("#datepicker").datepicker("refresh"), $.unblockUI();
    }).fail(function() {
        configTimeout("Ocorreu um erro ao buscar as datas de mergulho.");
    });
}, enabledAddBtn = function() {
    "Selecione" !== $("#btnCilindro").text() && "Selecione" !== $("#btnGases").text() && "Selecione" !== $("#btnDatas").text() ? $(".btnAddTanque").removeAttr("disabled", "") : $(".btnAddTanque").attr("disabled", "");
}, getLongDate = function(a) {
    var b;
    if (a) {
        var c, d = a.split("/");
        c = d[1] + "-" + d[0] + "-" + d[2], b = new Date(c).getTime();
    }
    return b;
}, getDiveDates = function() {
    $("#dataMergulho").datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        beforeShowDay: function(a) {
            var b = "";
            return b += a.getDate() + "-", b += a.getMonth() + 1 + "-", b += a.getFullYear(), 
            $.inArray(b, datelist) >= 0 ? [ !0, "" ] : [ !1, "" ];
        }
    }), $("#dataMergulho").click(function() {
        getAvailableDates();
    });
}, applyPhoneMask = function(a) {
    var b = [ "SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP" ];
    $(".cel").mask(a.val() && b.indexOf(a.val()) > -1 ? "(99) 99999-9999" : "(99) 9999-9999");
}, applyMasks = function() {
    $("#cpf").mask("999.999.999-99"), $("#cnpj").mask("99.999.999/9999-99"), $("#cep").mask("99.999-999"), 
    $("#uf").mask("aa"), $(".cel").mask("(99) 9999-9999"), $(".equipment").mask("9?9");
}, configTimeout = function(a) {
    console.log(a), $.unblockUI(), alertify.error(a);
}, populateAparts = function() {
    var a = "http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/serrinha/apartype/", b = "<li><a href='#' value={{type}}>{{type}}</a></li>";
    apItemTemplate = Handlebars.compile(b), $.getJSON(a, function(a) {
        $.each(a.innApartTypes, function() {
            var a = apItemTemplate(this);
            $("#comboTipoAp").append(a);
        }), $("#comboTipoAp").find("li").on("click", function(a) {
            a.preventDefault(), $("#btnTipoAp").text($(this).text()), $("#btnTipoAp").attr("typeId", $(this).find("a").attr("value"));
        }), getDiveDates();
    }).fail(function() {
        getDiveDates(), configTimeout("Não foi possível localizar os tipos de acomodacoes.");
    });
}, populateGases = function() {
    var a = "http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/gastype/", b = "<li><a href='#' value={{id}}>{{type}}</a></li>";
    gasItemTemplate = Handlebars.compile(b), $.getJSON(a, function(a) {
        $.each(a.gasTypes, function() {
            var a = gasItemTemplate(this);
            $("#comboGases").append(a);
        }), $("#comboGases").find("li").on("click", function(a) {
            a.preventDefault(), $("#btnGases").text($(this).text()), $("#btnGases").attr("typeId", $(this).find("a").attr("value")), 
            enabledAddBtn();
        }), populateAparts();
    }).fail(function() {
        configTimeout("Não foi possível localizar os tipos de gases."), populateAparts();
    });
}, populateTanks = function() {
    var a = "http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/tanktype/", b = "<li><a href='#' value={{id}}>{{type}}</a></li>";
    tankItemTemplate = Handlebars.compile(b), $.getJSON(a, function(a) {
        $.each(a.tankTypes, function() {
            var a = tankItemTemplate(this);
            $("#comboCilindro").append(a);
        }), $("#comboCilindro").find("li").on("click", function(a) {
            a.preventDefault(), $("#btnCilindro").text($(this).text()), $("#btnCilindro").attr("typeId", $(this).find("a").attr("value")), 
            enabledAddBtn();
        }), populateGases();
    }).fail(function() {
        configTimeout("Não foi possível localizar os tipos de cilindros."), populateGases();
    });
}, populateCombos = function() {
    $.blockUI({
        message: "Carregando informações de cadastro",
        css: {
            border: "none",
            padding: "15px",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            opacity: .5,
            color: "#fff"
        }
    });
    var a = "http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/divertype/", b = "<li><a href='#' value={{id}}>{{desc}}</a></li>";
    dataMergulhoTemplate = Handlebars.compile(b), $.getJSON(a, function(a) {
        $.each(a.diverTypes, function() {
            var a = dataMergulhoTemplate(this);
            $("#comboNivelMergulho").append(a);
        }), $("#comboNivelMergulho").find("li").on("click", function(a) {
            a.preventDefault(), $("#btnNivelMergulho").text($(this).text());
        }), populateTanks();
    }).fail(function() {
        configTimeout("Não foi possível localizar os niveis de mergulhador."), populateTanks();
    });
}, sendPostRequest = function() {
    $("#formReserva").submit(function(a) {
        a.preventDefault();
        if ("Selecione" === $("#btnNivelMergulho").text()) return void configTimeout("Favor escolher o nível do mergulhador");
        if (0 === $(".datasReserva input").length) return void configTimeout("Favor escolher pelo menos uma data de mergulho");
        if (0 === $(".gasTypesRowSet").length) return void configTimeout("Favor escolher pelo menos um tanque e um gas por data");
        $.blockUI({
            message: "Processando sua reserva...",
            css: {
                border: "none",
                padding: "15px",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                opacity: .5,
                color: "#fff"
            }
        });
        var b = {}, c = this;
        b.userInfo = {}, b.userInfo.name = $("#userName").val(), b.userInfo.cpf = $("#cpf").val().replace(".", "").replace("-", "").replace(".", ""), 
        b.userInfo.cnpj = $("#cnpj").val().replace(".", "").replace("-", "").replace("/", "").replace("_", "").replace(".", ""), 
        b.userInfo.cep = $("#cep").val().replace(".", "").replace("-", "").replace(" ", ""), 
        b.userInfo.address = $("#rua").val(), b.userInfo.city = $("#cidade").val(), b.userInfo.uf = $("#uf").val(), 
        b.userInfo.number = $("#numero").val(), b.userInfo.comp = $("#comp").val(), b.userInfo.region = $("#bairro").val(), 
        b.userInfo.tel = $("#tel").val().replace("-", "").replace(" ", "").replace("(", "").replace(")", ""), 
        b.userInfo.cel = $("#cel").val().replace("-", "").replace(" ", "").replace("(", "").replace(")", ""), 
        b.userInfo.email = $("#email").val(), b.userInfo.diverLevel = "Selecione" !== $("#btnNivelMergulho").text() ? $("#btnNivelMergulho").text() : "", 
        b.tankInfo = [], b.gearInfo = {}, b.innInfo = {}, $.each($(".gasTypesRowSet"), function(a, c) {
            var d = {};
            d.opId = "1", $.each($(this).find("input"), function(a, b) {
                $(this).hasClass("dateSet") ? d[$(this).attr("name")] = getLongDate($(this).val()) : d[$(this).attr("name")] = $(this).attr("typeId");
            }), b.tankInfo.push(d);
        }), $(".equipment").length && (b.gearInfo.needed = $("#checkEquipamentos").is(":checked")), 
        $.each($(".equipment"), function(a, c) {
            $(this).val() && (b.gearInfo[$(this).attr("name")] = $(this).val());
        }), b.innInfo.needed = $("#checkPousada").is(":checked"), b.innInfo.needed && (b.innInfo.dateIn = getLongDate($("#dataEntrada").val()), 
        b.innInfo.dateOut = getLongDate($("#dataSaida").val()), b.innInfo.apType = "Selecione" !== $("#btnTipoAp").text() ? $("#btnTipoAp").text() : "", 
        b.innInfo.reservationName = $("#nomeReserva").val(), b.innInfo.comments = $("#observacoes").val()), 
        console.log(JSON.stringify(b)), $.ajax({
            cache: !1,
            url: "http://ec2-54-207-110-27.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/reservation/add/",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(b),
            context: c,
            success: function(a) {
                $.unblockUI(), alertify.success("Reserva efetuada com sucesso!"), $(".center").html("<div class='text-center'><img src='https://s3-sa-east-1.amazonaws.com/felipemedia/divegold_logo.png' width='35' height='35' alt='DiveGold Logo'>Reserva efetuada com sucesso!</div>");
            },
            error: function() {
                configTimeout("Ocorreu um erro ao enviar a reserva.");
            }
        });
    });
}, initEvents = function() {
    function a(a) {
        if ("dataSaida" == a.id && "" !== $("#dataEntrada").val()) {
            var b = $("#dataEntrada").val(), c = b.split("/");
            b = c[1] + "-" + c[0] + "-" + c[2];
            var d = new Date(b);
            return d.setDate(d.getDate() + 1), {
                minDate: d
            };
        }
        return {
            minDate: 0
        };
    }
    var b = $("#checkEquipamentos"), c = $("#checkPousada"), d = $(".btnAddDate"), e = $("#dataMergulho"), f = $("#dataEntrada"), g = $("#dataSaida"), h = ($("#comboNivelMergulho"), 
    $("#btnNivelMergulho"), $("#comboTipoAp"), $("#btnTipoAp"), $("#comboDatas")), i = $("#btnDatas"), j = $("#equipamentos"), k = $("#pousada"), l = $("#cep"), m = $(".btnAddTanque"), n = ($("btnCilindro"), 
    $("btnGases"), $(".btnRemoveDate"), this);
    applyMasks(), $("#uf").blur(function() {
        applyPhoneMask($(this));
    }), $("#cpfRadio").click(function() {
        $("#cpf").removeAttr("disabled", ""), $("#cnpj").attr("disabled", ""), $("#cpf").attr("required", ""), 
        $("#cnpj").removeAttr("required", ""), $("#cnpj").val(""), $("#cpf").focus();
    }), $("#cnpjRadio").click(function() {
        $("#cnpj").removeAttr("disabled", ""), $("#cpf").attr("disabled", ""), $("#cnpj").attr("required", ""), 
        $("#cpf").removeAttr("required", ""), $("#cpf").val(""), $("#cnpj").focus();
    }), $("#cpfRadio").click(), d.click(function(a) {
        if (-1 === $("#dataMergulho").val().indexOf("/")) return void configTimeout("Data de mergulho inválida");
        var b, c, d = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-3 col-xs-6'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>", f = "<li><a href='#' value={{date}}>{{date}}</a></li>", g = Handlebars.compile(d), j = Handlebars.compile(f), k = e.val();
        if (k && "" !== k) {
            e.val(""), b = {
                date: k
            }, c = g(b);
            var l = j(b);
            l && (h.find("[value='" + k + "']").length || ($(".datasReserva").append(c), h.append(l), 
            h.find("a").on("click", function(a) {
                a.preventDefault(), i.text($(this).text()), enabledAddBtn();
            }))), c && $(".btnRemoveDate").last().click(function(a) {
                a.preventDefault(), $(this).parent().slideUp(300, function() {
                    $(this).remove();
                }), $(".dateSet[value='" + k + "']").parents(".gasTypesRowSet").slideUp(300, function() {
                    $(this).remove();
                }), h.find("[value='" + k + "']").parent().remove(), i.text("Selecione"), $("#btnCilindro").text("Selecione"), 
                $("#btnGases").text("Selecione"), h.find("[value='" + k + "']").length || m.attr("disabled", "");
            });
        }
    }), m.click(function(a) {
        var b, c = "<div class='form-group row gasTypesRowSet well'><label class='col-md-1 col-xs-12 control-label tankLabel'>Data</label><div class='col-md-2 col-xs-12 dateDropdown'><input type='text' name='diveDate' class='form-control dateSet' value='{{date}}' disabled></div><label class='col-md-1  col-xs-12 control-label tankLabel'>Cilindro</label><div class='col-md-3 col-xs-12 tankDropdown'><input type='text' name='tankType' typeId='{{cilindroId}}' class='form-control' value='{{cilindro}}' disabled></div><label class='col-md-1 col-xs-12 control-label tankLabel'>Gases</label><div class='col-md-3  col-xs-12 gasDropdown'><input type='text' name='gasType' class='form-control' typeId='{{gasId}}' value='{{gas}}' disabled></div><div class='col-md-1 col-xs-12 divRemoveTank'><button type='button' class='btn btn-danger btn-sm btnRemoveTanque btn-xs'><span class='glyphicon glyphicon-remove-sign'></span></button></div></div>", d = Handlebars.compile(c), e = $("#btnDatas").text(), f = $("#btnCilindro").text(), g = $("#btnCilindro").attr("typeId"), h = $("#btnGases").text(), j = $("#btnGases").attr("typeId");
        b = d({
            date: e,
            cilindro: f,
            gas: h,
            cilindroId: g,
            gasId: j
        }), $(".gasTypesRowDates").append(b), $(".btnRemoveTanque").last().click(function(a) {
            a.preventDefault(), $(this).parents(".gasTypesRowSet").slideUp(300, function() {
                $(this).remove();
            });
        }), i.text("Selecione"), $("#btnCilindro").text("Selecione"), $("#btnGases").text("Selecione"), 
        m.attr("disabled", "");
    }), getAvailableDates(), f.datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        minDate: 0
    }), g.datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        minDate: 0,
        beforeShow: a
    }), $.each($(".datasReserva input"), function(a, b) {
        diveDates.push($(this).val());
    }), j.hide(), k.hide(), b.change(function(a) {
        a.preventDefault(), $(this).prop("checked") ? j.slideDown("slow") : j.slideUp("slow");
    }), c.change(function(a) {
        a.preventDefault(), $(this).prop("checked") ? k.slideDown("slow") : k.slideUp("slow");
    }), l.blur(function() {
        var a = $(this).val().replace(".", "").replace("-", "");
        if (a) {
            var b = "http://cep.correiocontrol.com.br/" + a + ".json";
            $.getJSON(b, function(a) {
                $("#rua").val(a.logradouro), $("#bairro").val(a.bairro), $("#cidade").val(a.localidade), 
                $("#uf").val(a.uf), n.applyPhoneMask($("#uf"));
            }).fail(function() {
                console.log("CEP inexistente");
            });
        }
    }), populateCombos(), sendPostRequest();
};

if ($(document).ready(function() {
    initEvents();
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1;
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
            }
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close);
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), 
        b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };
    c.VERSION = "3.3.4", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, 
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), 
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            a.preventDefault();
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f);
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), 
            f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([ b, h ].join(" ")).addClass("active"), e.removeClass([ "active", h ].join(" ")), 
                i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), 
            this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this;
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), 
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d);
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), 
            "string" == typeof b && e[b]();
        });
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase([ "scroll", g ].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h);
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = c(d), f = {
                relatedTarget: this
            };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), 
            e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
            }
            return !1;
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), 
                d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), 
                    i.eq(j).trigger("focus");
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown);
}(jQuery), +function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), 
            d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), 
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.init("tooltip", a, b);
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), 
        this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", 
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", 
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, 
                f.removeClass(n).addClass(h);
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, 
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), 
            b && b();
        }
        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), 
        this.hoverState = null, this);
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function() {
        return this.getTitle();
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(), g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f);
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a;
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function() {
        this.enabled = !0;
    }, c.prototype.disable = function() {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type);
        });
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, 
    c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }
    b.VERSION = "3.3.4", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function() {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [ [ f[c]().top + d, e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b) {
        this.element = a(b);
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            }), g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    });
                });
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, 
            b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            e && e();
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), 
        g.removeClass("in");
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this;
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show");
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a(document.body).height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), 
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            });
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
            null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery), function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b();
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports;
        }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0);
    }([ function(a, b, c) {
        "use strict";
        function d() {
            var a = r();
            return a.compile = function(b, c) {
                return k.compile(b, c, a);
            }, a.precompile = function(b, c) {
                return k.precompile(b, c, a);
            }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], 
            a.Parser = j.parser, a.parse = j.parse, a;
        }
        var e = c(8)["default"];
        b.__esModule = !0;
        var f = c(1), g = e(f), h = c(2), i = e(h), j = c(3), k = c(4), l = c(5), m = e(l), n = c(6), o = e(n), p = c(7), q = e(p), r = g["default"].create, s = d();
        s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, 
        a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d() {
            var a = new g.HandlebarsEnvironment();
            return m.extend(a, g), a.SafeString = i["default"], a.Exception = k["default"], 
            a.Utils = m, a.escapeExpression = m.escapeExpression, a.VM = o, a.template = function(b) {
                return o.template(b, a);
            }, a;
        }
        var e = c(8)["default"];
        b.__esModule = !0;
        var f = c(9), g = e(f), h = c(10), i = e(h), j = c(11), k = e(j), l = c(12), m = e(l), n = c(13), o = e(n), p = c(7), q = e(p), r = d();
        r.create = d, q["default"](r), r["default"] = r, b["default"] = r, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = {
            Program: function(a, b, c, d) {
                this.loc = d, this.type = "Program", this.body = a, this.blockParams = b, this.strip = c;
            },
            MustacheStatement: function(a, b, c, d, e, f) {
                this.loc = f, this.type = "MustacheStatement", this.path = a, this.params = b || [], 
                this.hash = c, this.escaped = d, this.strip = e;
            },
            BlockStatement: function(a, b, c, d, e, f, g, h, i) {
                this.loc = i, this.type = "BlockStatement", this.path = a, this.params = b || [], 
                this.hash = c, this.program = d, this.inverse = e, this.openStrip = f, this.inverseStrip = g, 
                this.closeStrip = h;
            },
            PartialStatement: function(a, b, c, d, e) {
                this.loc = e, this.type = "PartialStatement", this.name = a, this.params = b || [], 
                this.hash = c, this.indent = "", this.strip = d;
            },
            ContentStatement: function(a, b) {
                this.loc = b, this.type = "ContentStatement", this.original = this.value = a;
            },
            CommentStatement: function(a, b, c) {
                this.loc = c, this.type = "CommentStatement", this.value = a, this.strip = b;
            },
            SubExpression: function(a, b, c, d) {
                this.loc = d, this.type = "SubExpression", this.path = a, this.params = b || [], 
                this.hash = c;
            },
            PathExpression: function(a, b, c, d, e) {
                this.loc = e, this.type = "PathExpression", this.data = a, this.original = d, this.parts = c, 
                this.depth = b;
            },
            StringLiteral: function(a, b) {
                this.loc = b, this.type = "StringLiteral", this.original = this.value = a;
            },
            NumberLiteral: function(a, b) {
                this.loc = b, this.type = "NumberLiteral", this.original = this.value = Number(a);
            },
            BooleanLiteral: function(a, b) {
                this.loc = b, this.type = "BooleanLiteral", this.original = this.value = "true" === a;
            },
            UndefinedLiteral: function(a) {
                this.loc = a, this.type = "UndefinedLiteral", this.original = this.value = void 0;
            },
            NullLiteral: function(a) {
                this.loc = a, this.type = "NullLiteral", this.original = this.value = null;
            },
            Hash: function(a, b) {
                this.loc = b, this.type = "Hash", this.pairs = a;
            },
            HashPair: function(a, b, c) {
                this.loc = c, this.type = "HashPair", this.key = a, this.value = b;
            },
            helpers: {
                helperExpression: function(a) {
                    return !("SubExpression" !== a.type && !a.params.length && !a.hash);
                },
                scopedId: function(a) {
                    return /^\.|this\b/.test(a.original);
                },
                simpleId: function(a) {
                    return 1 === a.parts.length && !d.helpers.scopedId(a) && !a.depth;
                }
            }
        };
        b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d(a, b) {
            if ("Program" === a.type) return a;
            g["default"].yy = o, o.locInfo = function(a) {
                return new o.SourceLocation(b && b.srcName, a);
            };
            var c = new k["default"]();
            return c.accept(g["default"].parse(a));
        }
        var e = c(8)["default"];
        b.__esModule = !0, b.parse = d;
        var f = c(14), g = e(f), h = c(2), i = e(h), j = c(15), k = e(j), l = c(16), m = e(l), n = c(12);
        b.parser = g["default"];
        var o = {};
        n.extend(o, m, i["default"]);
    }, function(a, b, c) {
        "use strict";
        function d() {}
        function e(a, b, c) {
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var d = c.parse(a, b), e = new c.Compiler().compile(d, b);
            return new c.JavaScriptCompiler().compile(e, b);
        }
        function f(a, b, c) {
            function d() {
                var b = c.parse(a, f), d = new c.Compiler().compile(b, f), e = new c.JavaScriptCompiler().compile(d, f, void 0, !0);
                return c.template(e);
            }
            function e(a, b) {
                return g || (g = d()), g.call(this, a, b);
            }
            var f = void 0 === arguments[1] ? {} : arguments[1];
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            "data" in f || (f.data = !0), f.compat && (f.useDepths = !0);
            var g = void 0;
            return e._setup = function(a) {
                return g || (g = d()), g._setup(a);
            }, e._child = function(a, b, c, e) {
                return g || (g = d()), g._child(a, b, c, e);
            }, e;
        }
        function g(a, b) {
            if (a === b) return !0;
            if (l.isArray(a) && l.isArray(b) && a.length === b.length) {
                for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
                return !0;
            }
        }
        function h(a) {
            if (!a.path.parts) {
                var b = a.path;
                a.path = new n["default"].PathExpression(!1, 0, [ b.original + "" ], b.original + "", b.loc);
            }
        }
        var i = c(8)["default"];
        b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
        var j = c(11), k = i(j), l = c(12), m = c(2), n = i(m), o = [].slice;
        d.prototype = {
            compiler: d,
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b) return !1;
                for (var c = 0; b > c; c++) {
                    var d = this.opcodes[c], e = a.opcodes[c];
                    if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
                }
                b = this.children.length;
                for (var c = 0; b > c; c++) if (!this.children[c].equals(a.children[c])) return !1;
                return !0;
            },
            guid: 0,
            compile: function(a, b) {
                this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, 
                this.trackIds = b.trackIds, b.blockParams = b.blockParams || [];
                var c = b.knownHelpers;
                if (b.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                }, c) for (var d in c) d in c && (b.knownHelpers[d] = c[d]);
                return this.accept(a);
            },
            compileProgram: function(a) {
                var b = new this.compiler(), c = b.compile(a, this.options), d = this.guid++;
                return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, 
                this.useDepths = this.useDepths || c.useDepths, d;
            },
            accept: function(a) {
                this.sourceNode.unshift(a);
                var b = this[a.type](a);
                return this.sourceNode.shift(), b;
            },
            Program: function(a) {
                this.options.blockParams.unshift(a.blockParams);
                for (var b = a.body, c = b.length, d = 0; c > d; d++) this.accept(b[d]);
                return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, 
                this;
            },
            BlockStatement: function(a) {
                h(a);
                var b = a.program, c = a.inverse;
                b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                var d = this.classifySexpr(a);
                "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), 
                this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), 
                this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), 
                this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), 
                this.opcode("append");
            },
            PartialStatement: function(a) {
                this.usePartial = !0;
                var b = a.params;
                if (b.length > 1) throw new k["default"]("Unsupported number of partial arguments: " + b.length, a);
                b.length || b.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                });
                var c = a.name.original, d = "SubExpression" === a.name.type;
                d && this.accept(a.name), this.setupFullMustacheParams(a, void 0, void 0, !0);
                var e = a.indent || "";
                this.options.preventIndent && e && (this.opcode("appendContent", e), e = ""), this.opcode("invokePartial", d, c, e), 
                this.opcode("append");
            },
            MustacheStatement: function(a) {
                this.SubExpression(a), this.opcode(a.escaped && !this.options.noEscape ? "appendEscaped" : "append");
            },
            ContentStatement: function(a) {
                a.value && this.opcode("appendContent", a.value);
            },
            CommentStatement: function() {},
            SubExpression: function(a) {
                h(a);
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a);
            },
            ambiguousSexpr: function(a, b, c) {
                var d = a.path, e = d.parts[0], f = null != b || null != c;
                this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), 
                this.accept(d), this.opcode("invokeAmbiguous", e, f);
            },
            simpleSexpr: function(a) {
                this.accept(a.path), this.opcode("resolvePossibleLambda");
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c), e = a.path, f = e.parts[0];
                if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f); else {
                    if (this.options.knownHelpersOnly) throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                    e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, n["default"].helpers.simpleId(e));
                }
            },
            PathExpression: function(a) {
                this.addDepth(a.depth), this.opcode("getContext", a.depth);
                var b = a.parts[0], c = n["default"].helpers.scopedId(a), d = !a.depth && !c && this.blockParamIndex(b);
                d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, 
                this.opcode("lookupData", a.depth, a.parts)) : this.opcode("lookupOnContext", a.parts, a.falsy, c) : this.opcode("pushContext");
            },
            StringLiteral: function(a) {
                this.opcode("pushString", a.value);
            },
            NumberLiteral: function(a) {
                this.opcode("pushLiteral", a.value);
            },
            BooleanLiteral: function(a) {
                this.opcode("pushLiteral", a.value);
            },
            UndefinedLiteral: function() {
                this.opcode("pushLiteral", "undefined");
            },
            NullLiteral: function() {
                this.opcode("pushLiteral", "null");
            },
            Hash: function(a) {
                var b = a.pairs, c = 0, d = b.length;
                for (this.opcode("pushHash"); d > c; c++) this.pushParam(b[c].value);
                for (;c--; ) this.opcode("assignToHash", b[c].key);
                this.opcode("popHash");
            },
            opcode: function(a) {
                this.opcodes.push({
                    opcode: a,
                    args: o.call(arguments, 1),
                    loc: this.sourceNode[0].loc
                });
            },
            addDepth: function(a) {
                a && (this.useDepths = !0);
            },
            classifySexpr: function(a) {
                var b = n["default"].helpers.simpleId(a.path), c = b && !!this.blockParamIndex(a.path.parts[0]), d = !c && n["default"].helpers.helperExpression(a), e = !c && (d || b);
                if (e && !d) {
                    var f = a.path.parts[0], g = this.options;
                    g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1);
                }
                return d ? "helper" : e ? "ambiguous" : "simple";
            },
            pushParams: function(a) {
                for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b]);
            },
            pushParam: function(a) {
                var b = null != a.value ? a.value : a.original || "";
                if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), 
                a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), 
                "SubExpression" === a.type && this.accept(a); else {
                    if (this.trackIds) {
                        var c = void 0;
                        if (!a.parts || n["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), 
                        c) {
                            var d = a.parts.slice(1).join(".");
                            this.opcode("pushId", "BlockParam", c, d);
                        } else b = a.original || b, b.replace && (b = b.replace(/^\.\//g, "").replace(/^\.$/g, "")), 
                        this.opcode("pushId", a.type, b);
                    }
                    this.accept(a);
                }
            },
            setupFullMustacheParams: function(a, b, c, d) {
                var e = a.params;
                return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), 
                a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e;
            },
            blockParamIndex: function(a) {
                for (var b = 0, c = this.options.blockParams.length; c > b; b++) {
                    var d = this.options.blockParams[b], e = d && l.indexOf(d, a);
                    if (d && e >= 0) return [ b, e ];
                }
            }
        };
    }, function(a, b, c) {
        "use strict";
        function d(a) {
            this.value = a;
        }
        function e() {}
        function f(a, b, c, d) {
            var e = b.popStack(), f = 0, g = c.length;
            for (a && g--; g > f; f++) e = b.nameLookup(e, c[f], d);
            return a ? [ b.aliasable("this.strict"), "(", e, ", ", b.quotedString(c[f]), ")" ] : e;
        }
        var g = c(8)["default"];
        b.__esModule = !0;
        var h = c(9), i = c(11), j = g(i), k = c(12), l = c(17), m = g(l);
        e.prototype = {
            nameLookup: function(a, b) {
                return e.isValidJavaScriptVariableName(b) ? [ a, ".", b ] : [ a, "['", b, "']" ];
            },
            depthedLookup: function(a) {
                return [ this.aliasable("this.lookup"), '(depths, "', a, '")' ];
            },
            compilerInfo: function() {
                var a = h.COMPILER_REVISION, b = h.REVISION_CHANGES[a];
                return [ a, b ];
            },
            appendToBuffer: function(a, b, c) {
                return k.isArray(a) || (a = [ a ]), a = this.source.wrap(a, b), this.environment.isSimple ? [ "return ", a, ";" ] : c ? [ "buffer += ", a, ";" ] : (a.appendToBuffer = !0, 
                a);
            },
            initializeBuffer: function() {
                return this.quotedString("");
            },
            compile: function(a, b, c, d) {
                this.environment = a, this.options = b, this.stringParams = this.options.stringParams, 
                this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, 
                this.isChild = !!c, this.context = c || {
                    programs: [],
                    environments: []
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, 
                this.registers = {
                    list: []
                }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], 
                this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || this.options.compat, 
                this.useBlockParams = this.useBlockParams || a.useBlockParams;
                var e = a.opcodes, f = void 0, g = void 0, h = void 0, i = void 0;
                for (h = 0, i = e.length; i > h; h++) f = e[h], this.source.currentLocation = f.loc, 
                g = g || f.loc, this[f.opcode].apply(this, f.args);
                if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new j["default"]("Compile completed with content left on stack");
                var k = this.createFunctionContext(d);
                if (this.isChild) return k;
                var l = {
                    compiler: this.compilerInfo(),
                    main: k
                }, m = this.context.programs;
                for (h = 0, i = m.length; i > h; h++) m[h] && (l[h] = m[h]);
                return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), 
                this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), 
                this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), 
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
                    file: b.destName
                }), l.map = l.map && l.map.toString()) : l = l.toString()), l;
            },
            preamble: function() {
                this.lastContext = 0, this.source = new m["default"](this.options.srcName);
            },
            createFunctionContext: function(a) {
                var b = "", c = this.stackVars.concat(this.registers.list);
                c.length > 0 && (b += ", " + c.join(", "));
                var d = 0;
                for (var e in this.aliases) {
                    var f = this.aliases[e];
                    this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && (b += ", alias" + ++d + "=" + e, 
                    f.children[0] = "alias" + d);
                }
                var g = [ "depth0", "helpers", "partials", "data" ];
                (this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");
                var h = this.mergeSource(b);
                return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap([ "function(", g.join(","), ") {\n  ", h, "}" ]);
            },
            mergeSource: function(a) {
                var b = this.environment.isSimple, c = !this.forceBuffer, d = void 0, e = void 0, f = void 0, g = void 0;
                return this.source.each(function(a) {
                    a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, 
                    g.add(";"), f = g = void 0), e = !0, b || (c = !1));
                }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), 
                f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), 
                a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge();
            },
            blockValue: function(a) {
                var b = this.aliasable("helpers.blockHelperMissing"), c = [ this.contextName(0) ];
                this.setupHelperArgs(a, 0, c);
                var d = this.popStack();
                c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
            },
            ambiguousBlockValue: function() {
                var a = this.aliasable("helpers.blockHelperMissing"), b = [ this.contextName(0) ];
                this.setupHelperArgs("", 0, b, !0), this.flushInline();
                var c = this.topStack();
                b.splice(1, 0, c), this.pushSource([ "if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}" ]);
            },
            appendContent: function(a) {
                this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, 
                this.pendingContent = a;
            },
            append: function() {
                if (this.isInline()) this.replaceStack(function(a) {
                    return [ " != null ? ", a, ' : ""' ];
                }), this.pushSource(this.appendToBuffer(this.popStack())); else {
                    var a = this.popStack();
                    this.pushSource([ "if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }" ]), 
                    this.environment.isSimple && this.pushSource([ "else { ", this.appendToBuffer("''", void 0, !0), " }" ]);
                }
            },
            appendEscaped: function() {
                this.pushSource(this.appendToBuffer([ this.aliasable("this.escapeExpression"), "(", this.popStack(), ")" ]));
            },
            getContext: function(a) {
                this.lastContext = a;
            },
            pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext));
            },
            lookupOnContext: function(a, b, c) {
                var d = 0;
                c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])), 
                this.resolvePath("context", a, d, b);
            },
            lookupBlockParam: function(a, b) {
                this.useBlockParams = !0, this.push([ "blockParams[", a[0], "][", a[1], "]" ]), 
                this.resolvePath("context", b, 1);
            },
            lookupData: function(a, b) {
                this.pushStackLiteral(a ? "this.data(data, " + a + ")" : "data"), this.resolvePath("data", b, 0, !0);
            },
            resolvePath: function(a, b, c, d) {
                var e = this;
                if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict, this, b, a));
                for (var g = b.length; g > c; c++) this.replaceStack(function(f) {
                    var g = e.nameLookup(f, b[c], a);
                    return d ? [ " && ", g ] : [ " != null ? ", g, " : ", f ];
                });
            },
            resolvePossibleLambda: function() {
                this.push([ this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")" ]);
            },
            pushStringParam: function(a, b) {
                this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a));
            },
            emptyHash: function(a) {
                this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), 
                this.pushStackLiteral(a ? "undefined" : "{}");
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash), this.hash = {
                    values: [],
                    types: [],
                    contexts: [],
                    ids: []
                };
            },
            popHash: function() {
                var a = this.hash;
                this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), 
                this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), 
                this.push(this.objectLiteral(a.values));
            },
            pushString: function(a) {
                this.pushStackLiteral(this.quotedString(a));
            },
            pushLiteral: function(a) {
                this.pushStackLiteral(a);
            },
            pushProgram: function(a) {
                this.pushStackLiteral(null != a ? this.programExpression(a) : null);
            },
            invokeHelper: function(a, b, c) {
                var d = this.popStack(), e = this.setupHelper(a, b), f = c ? [ e.name, " || " ] : "", g = [ "(" ].concat(f, d);
                this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), 
                g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams));
            },
            invokeKnownHelper: function(a, b) {
                var c = this.setupHelper(a, b);
                this.push(this.source.functionCall(c.name, "call", c.callParams));
            },
            invokeAmbiguous: function(a, b) {
                this.useRegister("helper");
                var c = this.popStack();
                this.emptyHash();
                var d = this.setupHelper(0, a, b), e = this.lastHelper = this.nameLookup("helpers", a, "helper"), f = [ "(", "(helper = ", e, " || ", c, ")" ];
                this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), 
                this.push([ "(", f, d.paramsInit ? [ "),(", d.paramsInit ] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))" ]);
            },
            invokePartial: function(a, b, c) {
                var d = [], e = this.setupParams(b, 1, d, !1);
                a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), 
                e.helpers = "helpers", e.partials = "partials", d.unshift(a ? b : this.nameLookup("partials", b, "partial")), 
                this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), 
                this.push(this.source.functionCall("this.invokePartial", "", d));
            },
            assignToHash: function(a) {
                var b = this.popStack(), c = void 0, d = void 0, e = void 0;
                this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), 
                c = this.popStack());
                var f = this.hash;
                c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b;
            },
            pushId: function(a, b, c) {
                "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : this.pushStackLiteral("SubExpression" === a ? "true" : "null");
            },
            compiler: e,
            compileChildren: function(a, b) {
                for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; g > f; f++) {
                    d = c[f], e = new this.compiler();
                    var h = this.matchExistingProgram(d);
                    null == h ? (this.context.programs.push(""), h = this.context.programs.length, d.index = h, 
                    d.name = "program" + h, this.context.programs[h] = e.compile(d, b, this.context, !this.precompile), 
                    this.context.environments[h] = d, this.useDepths = this.useDepths || e.useDepths, 
                    this.useBlockParams = this.useBlockParams || e.useBlockParams) : (d.index = h, d.name = "program" + h, 
                    this.useDepths = this.useDepths || d.useDepths, this.useBlockParams = this.useBlockParams || d.useBlockParams);
                }
            },
            matchExistingProgram: function(a) {
                for (var b = 0, c = this.context.environments.length; c > b; b++) {
                    var d = this.context.environments[b];
                    if (d && d.equals(a)) return b;
                }
            },
            programExpression: function(a) {
                var b = this.environment.children[a], c = [ b.index, "data", b.blockParams ];
                return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), 
                "this.program(" + c.join(", ") + ")";
            },
            useRegister: function(a) {
                this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a));
            },
            push: function(a) {
                return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a;
            },
            pushStackLiteral: function(a) {
                this.push(new d(a));
            },
            pushSource: function(a) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), 
                this.pendingContent = void 0), a && this.source.push(a);
            },
            replaceStack: function(a) {
                var b = [ "(" ], c = void 0, e = void 0, f = void 0;
                if (!this.isInline()) throw new j["default"]("replaceStack on non-inline");
                var g = this.popStack(!0);
                if (g instanceof d) c = [ g.value ], b = [ "(", c ], f = !0; else {
                    e = !0;
                    var h = this.incrStack();
                    b = [ "((", this.push(h), " = ", g, ")" ], c = this.topStack();
                }
                var i = a.call(this, c);
                f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"));
            },
            incrStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), 
                this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline: function() {
                var a = this.inlineStack;
                this.inlineStack = [];
                for (var b = 0, c = a.length; c > b; b++) {
                    var e = a[b];
                    if (e instanceof d) this.compileStack.push(e); else {
                        var f = this.incrStack();
                        this.pushSource([ f, " = ", e, ";" ]), this.compileStack.push(f);
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length;
            },
            popStack: function(a) {
                var b = this.isInline(), c = (b ? this.inlineStack : this.compileStack).pop();
                if (!a && c instanceof d) return c.value;
                if (!b) {
                    if (!this.stackSlot) throw new j["default"]("Invalid stack pop");
                    this.stackSlot--;
                }
                return c;
            },
            topStack: function() {
                var a = this.isInline() ? this.inlineStack : this.compileStack, b = a[a.length - 1];
                return b instanceof d ? b.value : b;
            },
            contextName: function(a) {
                return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
            },
            quotedString: function(a) {
                return this.source.quotedString(a);
            },
            objectLiteral: function(a) {
                return this.source.objectLiteral(a);
            },
            aliasable: function(a) {
                var b = this.aliases[a];
                return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), 
                b.aliasable = !0, b.referenceCount = 1, b);
            },
            setupHelper: function(a, b, c) {
                var d = [], e = this.setupHelperArgs(b, a, d, c), f = this.nameLookup("helpers", b, "helper");
                return {
                    params: d,
                    paramsInit: e,
                    name: f,
                    callParams: [ this.contextName(0) ].concat(d)
                };
            },
            setupParams: function(a, b, c) {
                var d = {}, e = [], f = [], g = [], h = void 0;
                d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), 
                this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
                var i = this.popStack(), j = this.popStack();
                (j || i) && (d.fn = j || "this.noop", d.inverse = i || "this.noop");
                for (var k = b; k--; ) h = this.popStack(), c[k] = h, this.trackIds && (g[k] = this.popStack()), 
                this.stringParams && (f[k] = this.popStack(), e[k] = this.popStack());
                return this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), 
                d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), 
                this.useBlockParams && (d.blockParams = "blockParams"), d;
            },
            setupHelperArgs: function(a, b, c, d) {
                var e = this.setupParams(a, b, c, !0);
                return e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), 
                [ "options=", e ]) : (c.push(e), "");
            }
        }, function() {
            for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; d > c; c++) b[a[c]] = !0;
        }(), e.isValidJavaScriptVariableName = function(a) {
            return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
        }, b["default"] = e, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d() {
            this.parents = [];
        }
        var e = c(8)["default"];
        b.__esModule = !0;
        var f = c(11), g = e(f), h = c(2), i = e(h);
        d.prototype = {
            constructor: d,
            mutating: !1,
            acceptKey: function(a, b) {
                var c = this.accept(a[b]);
                if (this.mutating) {
                    if (c && (!c.type || !i["default"][c.type])) throw new g["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                    a[b] = c;
                }
            },
            acceptRequired: function(a, b) {
                if (this.acceptKey(a, b), !a[b]) throw new g["default"](a.type + " requires " + b);
            },
            acceptArray: function(a) {
                for (var b = 0, c = a.length; c > b; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), 
                b--, c--);
            },
            accept: function(a) {
                if (a) {
                    this.current && this.parents.unshift(this.current), this.current = a;
                    var b = this[a.type](a);
                    return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0;
                }
            },
            Program: function(a) {
                this.acceptArray(a.body);
            },
            MustacheStatement: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            BlockStatement: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash"), 
                this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
            },
            PartialStatement: function(a) {
                this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(a) {
                this.acceptArray(a.pairs);
            },
            HashPair: function(a) {
                this.acceptRequired(a, "value");
            }
        }, b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        (function(c) {
            "use strict";
            b.__esModule = !0, b["default"] = function(a) {
                var b = "undefined" != typeof c ? c : window, d = b.Handlebars;
                a.noConflict = function() {
                    b.Handlebars === a && (b.Handlebars = d);
                };
            }, a.exports = b["default"];
        }).call(b, function() {
            return this;
        }());
    }, function(a, b, c) {
        "use strict";
        b["default"] = function(a) {
            return a && a.__esModule ? a : {
                "default": a
            };
        }, b.__esModule = !0;
    }, function(a, b, c) {
        "use strict";
        function d(a, b) {
            this.helpers = a || {}, this.partials = b || {}, e(this);
        }
        function e(a) {
            a.registerHelper("helperMissing", function() {
                if (1 === arguments.length) return void 0;
                throw new k["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }), a.registerHelper("blockHelperMissing", function(b, c) {
                var d = c.inverse, e = c.fn;
                if (b === !0) return e(this);
                if (b === !1 || null == b) return d(this);
                if (o(b)) return b.length > 0 ? (c.ids && (c.ids = [ c.name ]), a.helpers.each(b, c)) : d(this);
                if (c.data && c.ids) {
                    var g = f(c.data);
                    g.contextPath = i.appendContextPath(c.data.contextPath, c.name), c = {
                        data: g
                    };
                }
                return e(b, c);
            }), a.registerHelper("each", function(a, b) {
                function c(b, c, e) {
                    j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!e, l && (j.contextPath = l + b)), 
                    h += d(a[b], {
                        data: j,
                        blockParams: i.blockParams([ a[b], b ], [ l + b, null ])
                    });
                }
                if (!b) throw new k["default"]("Must pass iterator to #each");
                var d = b.fn, e = b.inverse, g = 0, h = "", j = void 0, l = void 0;
                if (b.data && b.ids && (l = i.appendContextPath(b.data.contextPath, b.ids[0]) + "."), 
                p(a) && (a = a.call(this)), b.data && (j = f(b.data)), a && "object" == typeof a) if (o(a)) for (var m = a.length; m > g; g++) c(g, g, g === a.length - 1); else {
                    var n = void 0;
                    for (var q in a) a.hasOwnProperty(q) && (n && c(n, g - 1), n = q, g++);
                    n && c(n, g - 1, !0);
                }
                return 0 === g && (h = e(this)), h;
            }), a.registerHelper("if", function(a, b) {
                return p(a) && (a = a.call(this)), !b.hash.includeZero && !a || i.isEmpty(a) ? b.inverse(this) : b.fn(this);
            }), a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {
                    fn: c.inverse,
                    inverse: c.fn,
                    hash: c.hash
                });
            }), a.registerHelper("with", function(a, b) {
                p(a) && (a = a.call(this));
                var c = b.fn;
                if (i.isEmpty(a)) return b.inverse(this);
                if (b.data && b.ids) {
                    var d = f(b.data);
                    d.contextPath = i.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                        data: d
                    };
                }
                return c(a, b);
            }), a.registerHelper("log", function(b, c) {
                var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                a.log(d, b);
            }), a.registerHelper("lookup", function(a, b) {
                return a && a[b];
            });
        }
        function f(a) {
            var b = i.extend({}, a);
            return b._parent = a, b;
        }
        var g = c(8)["default"];
        b.__esModule = !0, b.HandlebarsEnvironment = d, b.createFrame = f;
        var h = c(12), i = g(h), j = c(11), k = g(j), l = "3.0.1";
        b.VERSION = l;
        var m = 6;
        b.COMPILER_REVISION = m;
        var n = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        b.REVISION_CHANGES = n;
        var o = i.isArray, p = i.isFunction, q = i.toString, r = "[object Object]";
        d.prototype = {
            constructor: d,
            logger: s,
            log: t,
            registerHelper: function(a, b) {
                if (q.call(a) === r) {
                    if (b) throw new k["default"]("Arg not supported with multiple helpers");
                    i.extend(this.helpers, a);
                } else this.helpers[a] = b;
            },
            unregisterHelper: function(a) {
                delete this.helpers[a];
            },
            registerPartial: function(a, b) {
                if (q.call(a) === r) i.extend(this.partials, a); else {
                    if ("undefined" == typeof b) throw new k["default"]("Attempting to register a partial as undefined");
                    this.partials[a] = b;
                }
            },
            unregisterPartial: function(a) {
                delete this.partials[a];
            }
        };
        var s = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function(a, b) {
                if ("undefined" != typeof console && s.level <= a) {
                    var c = s.methodMap[a];
                    (console[c] || console.log).call(console, b);
                }
            }
        };
        b.logger = s;
        var t = s.log;
        b.log = t;
    }, function(a, b, c) {
        "use strict";
        function d(a) {
            this.string = a;
        }
        b.__esModule = !0, d.prototype.toString = d.prototype.toHTML = function() {
            return "" + this.string;
        }, b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d(a, b) {
            var c = b && b.loc, f = void 0, g = void 0;
            c && (f = c.start.line, g = c.start.column, a += " - " + f + ":" + g);
            for (var h = Error.prototype.constructor.call(this, a), i = 0; i < e.length; i++) this[e[i]] = h[e[i]];
            Error.captureStackTrace && Error.captureStackTrace(this, d), c && (this.lineNumber = f, 
            this.column = g);
        }
        b.__esModule = !0;
        var e = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];
        d.prototype = new Error(), b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d(a) {
            return k[a];
        }
        function e(a) {
            for (var b = 1; b < arguments.length; b++) for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a;
        }
        function f(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }
        function g(a) {
            if ("string" != typeof a) {
                if (a && a.toHTML) return a.toHTML();
                if (null == a) return "";
                if (!a) return a + "";
                a = "" + a;
            }
            return m.test(a) ? a.replace(l, d) : a;
        }
        function h(a) {
            return a || 0 === a ? p(a) && 0 === a.length ? !0 : !1 : !0;
        }
        function i(a, b) {
            return a.path = b, a;
        }
        function j(a, b) {
            return (a ? a + "." : "") + b;
        }
        b.__esModule = !0, b.extend = e, b.indexOf = f, b.escapeExpression = g, b.isEmpty = h, 
        b.blockParams = i, b.appendContextPath = j;
        var k = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, l = /[&<>"'`]/g, m = /[&<>"'`]/, n = Object.prototype.toString;
        b.toString = n;
        var o = function(a) {
            return "function" == typeof a;
        };
        o(/x/) && (b.isFunction = o = function(a) {
            return "function" == typeof a && "[object Function]" === n.call(a);
        });
        var o;
        b.isFunction = o;
        var p = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === n.call(a) : !1;
        };
        b.isArray = p;
    }, function(a, b, c) {
        "use strict";
        function d(a) {
            var b = a && a[0] || 1, c = p.COMPILER_REVISION;
            if (b !== c) {
                if (c > b) {
                    var d = p.REVISION_CHANGES[c], e = p.REVISION_CHANGES[b];
                    throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").");
                }
                throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
            }
        }
        function e(a, b) {
            function c(c, d, e) {
                e.hash && (d = m.extend({}, d, e.hash)), c = b.VM.resolvePartial.call(this, c, d, e);
                var f = b.VM.invokePartial.call(this, c, d, e);
                if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), 
                f = e.partials[e.name](d, e)), null != f) {
                    if (e.indent) {
                        for (var g = f.split("\n"), h = 0, i = g.length; i > h && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                        f = g.join("\n");
                    }
                    return f;
                }
                throw new o["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode");
            }
            function d(b) {
                var c = void 0 === arguments[1] ? {} : arguments[1], f = c.data;
                d._setup(c), !c.partial && a.useData && (f = j(b, f));
                var g = void 0, h = a.useBlockParams ? [] : void 0;
                return a.useDepths && (g = c.depths ? [ b ].concat(c.depths) : [ b ]), a.main.call(e, b, e.helpers, e.partials, f, h, g);
            }
            if (!b) throw new o["default"]("No environment passed to template");
            if (!a || !a.main) throw new o["default"]("Unknown template object: " + typeof a);
            b.VM.checkRevision(a.compiler);
            var e = {
                strict: function(a, b) {
                    if (!(b in a)) throw new o["default"]('"' + b + '" not defined in ' + a);
                    return a[b];
                },
                lookup: function(a, b) {
                    for (var c = a.length, d = 0; c > d; d++) if (a[d] && null != a[d][b]) return a[d][b];
                },
                lambda: function(a, b) {
                    return "function" == typeof a ? a.call(b) : a;
                },
                escapeExpression: m.escapeExpression,
                invokePartial: c,
                fn: function(b) {
                    return a[b];
                },
                programs: [],
                program: function(a, b, c, d, e) {
                    var g = this.programs[a], h = this.fn(a);
                    return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), 
                    g;
                },
                data: function(a, b) {
                    for (;a && b--; ) a = a._parent;
                    return a;
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = m.extend({}, b, a)), c;
                },
                noop: b.VM.noop,
                compilerInfo: a.compiler
            };
            return d.isTop = !0, d._setup = function(c) {
                c.partial ? (e.helpers = c.helpers, e.partials = c.partials) : (e.helpers = e.merge(c.helpers, b.helpers), 
                a.usePartial && (e.partials = e.merge(c.partials, b.partials)));
            }, d._child = function(b, c, d, g) {
                if (a.useBlockParams && !d) throw new o["default"]("must pass block params");
                if (a.useDepths && !g) throw new o["default"]("must pass parent depths");
                return f(e, b, a[b], c, 0, d, g);
            }, d;
        }
        function f(a, b, c, d, e, f, g) {
            function h(b) {
                var e = void 0 === arguments[1] ? {} : arguments[1];
                return c.call(a, b, a.helpers, a.partials, e.data || d, f && [ e.blockParams ].concat(f), g && [ b ].concat(g));
            }
            return h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h;
        }
        function g(a, b, c) {
            return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = c.partials[c.name], 
            a;
        }
        function h(a, b, c) {
            if (c.partial = !0, void 0 === a) throw new o["default"]("The partial " + c.name + " could not be found");
            return a instanceof Function ? a(b, c) : void 0;
        }
        function i() {
            return "";
        }
        function j(a, b) {
            return b && "root" in b || (b = b ? p.createFrame(b) : {}, b.root = a), b;
        }
        var k = c(8)["default"];
        b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, 
        b.invokePartial = h, b.noop = i;
        var l = c(12), m = k(l), n = c(11), o = k(n), p = c(9);
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = function() {
            function a() {
                this.yy = {};
            }
            var b = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    content: 12,
                    COMMENT: 13,
                    CONTENT: 14,
                    openRawBlock: 15,
                    END_RAW_BLOCK: 16,
                    OPEN_RAW_BLOCK: 17,
                    helperName: 18,
                    openRawBlock_repetition0: 19,
                    openRawBlock_option0: 20,
                    CLOSE_RAW_BLOCK: 21,
                    openBlock: 22,
                    block_option0: 23,
                    closeBlock: 24,
                    openInverse: 25,
                    block_option1: 26,
                    OPEN_BLOCK: 27,
                    openBlock_repetition0: 28,
                    openBlock_option0: 29,
                    openBlock_option1: 30,
                    CLOSE: 31,
                    OPEN_INVERSE: 32,
                    openInverse_repetition0: 33,
                    openInverse_option0: 34,
                    openInverse_option1: 35,
                    openInverseChain: 36,
                    OPEN_INVERSE_CHAIN: 37,
                    openInverseChain_repetition0: 38,
                    openInverseChain_option0: 39,
                    openInverseChain_option1: 40,
                    inverseAndProgram: 41,
                    INVERSE: 42,
                    inverseChain: 43,
                    inverseChain_option0: 44,
                    OPEN_ENDBLOCK: 45,
                    OPEN: 46,
                    mustache_repetition0: 47,
                    mustache_option0: 48,
                    OPEN_UNESCAPED: 49,
                    mustache_repetition1: 50,
                    mustache_option1: 51,
                    CLOSE_UNESCAPED: 52,
                    OPEN_PARTIAL: 53,
                    partialName: 54,
                    partial_repetition0: 55,
                    partial_option0: 56,
                    param: 57,
                    sexpr: 58,
                    OPEN_SEXPR: 59,
                    sexpr_repetition0: 60,
                    sexpr_option0: 61,
                    CLOSE_SEXPR: 62,
                    hash: 63,
                    hash_repetition_plus0: 64,
                    hashSegment: 65,
                    ID: 66,
                    EQUALS: 67,
                    blockParams: 68,
                    OPEN_BLOCK_PARAMS: 69,
                    blockParams_repetition_plus0: 70,
                    CLOSE_BLOCK_PARAMS: 71,
                    path: 72,
                    dataName: 73,
                    STRING: 74,
                    NUMBER: 75,
                    BOOLEAN: 76,
                    UNDEFINED: 77,
                    NULL: 78,
                    DATA: 79,
                    pathSegments: 80,
                    SEP: 81,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    13: "COMMENT",
                    14: "CONTENT",
                    16: "END_RAW_BLOCK",
                    17: "OPEN_RAW_BLOCK",
                    21: "CLOSE_RAW_BLOCK",
                    27: "OPEN_BLOCK",
                    31: "CLOSE",
                    32: "OPEN_INVERSE",
                    37: "OPEN_INVERSE_CHAIN",
                    42: "INVERSE",
                    45: "OPEN_ENDBLOCK",
                    46: "OPEN",
                    49: "OPEN_UNESCAPED",
                    52: "CLOSE_UNESCAPED",
                    53: "OPEN_PARTIAL",
                    59: "OPEN_SEXPR",
                    62: "CLOSE_SEXPR",
                    66: "ID",
                    67: "EQUALS",
                    69: "OPEN_BLOCK_PARAMS",
                    71: "CLOSE_BLOCK_PARAMS",
                    74: "STRING",
                    75: "NUMBER",
                    76: "BOOLEAN",
                    77: "UNDEFINED",
                    78: "NULL",
                    79: "DATA",
                    81: "SEP"
                },
                productions_: [ 0, [ 3, 2 ], [ 4, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 12, 1 ], [ 10, 3 ], [ 15, 5 ], [ 9, 4 ], [ 9, 4 ], [ 22, 6 ], [ 25, 6 ], [ 36, 6 ], [ 41, 2 ], [ 43, 3 ], [ 43, 1 ], [ 24, 3 ], [ 8, 5 ], [ 8, 5 ], [ 11, 5 ], [ 57, 1 ], [ 57, 1 ], [ 58, 5 ], [ 63, 1 ], [ 65, 3 ], [ 68, 3 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 54, 1 ], [ 54, 1 ], [ 73, 2 ], [ 72, 1 ], [ 80, 3 ], [ 80, 1 ], [ 6, 0 ], [ 6, 2 ], [ 19, 0 ], [ 19, 2 ], [ 20, 0 ], [ 20, 1 ], [ 23, 0 ], [ 23, 1 ], [ 26, 0 ], [ 26, 1 ], [ 28, 0 ], [ 28, 2 ], [ 29, 0 ], [ 29, 1 ], [ 30, 0 ], [ 30, 1 ], [ 33, 0 ], [ 33, 2 ], [ 34, 0 ], [ 34, 1 ], [ 35, 0 ], [ 35, 1 ], [ 38, 0 ], [ 38, 2 ], [ 39, 0 ], [ 39, 1 ], [ 40, 0 ], [ 40, 1 ], [ 44, 0 ], [ 44, 1 ], [ 47, 0 ], [ 47, 2 ], [ 48, 0 ], [ 48, 1 ], [ 50, 0 ], [ 50, 2 ], [ 51, 0 ], [ 51, 1 ], [ 55, 0 ], [ 55, 2 ], [ 56, 0 ], [ 56, 1 ], [ 60, 0 ], [ 60, 2 ], [ 61, 0 ], [ 61, 1 ], [ 64, 1 ], [ 64, 2 ], [ 70, 1 ], [ 70, 2 ] ],
                performAction: function(a, b, c, d, e, f, g) {
                    var h = f.length - 1;
                    switch (e) {
                      case 1:
                        return f[h - 1];

                      case 2:
                        this.$ = new d.Program(f[h], null, {}, d.locInfo(this._$));
                        break;

                      case 3:
                        this.$ = f[h];
                        break;

                      case 4:
                        this.$ = f[h];
                        break;

                      case 5:
                        this.$ = f[h];
                        break;

                      case 6:
                        this.$ = f[h];
                        break;

                      case 7:
                        this.$ = f[h];
                        break;

                      case 8:
                        this.$ = new d.CommentStatement(d.stripComment(f[h]), d.stripFlags(f[h], f[h]), d.locInfo(this._$));
                        break;

                      case 9:
                        this.$ = new d.ContentStatement(f[h], d.locInfo(this._$));
                        break;

                      case 10:
                        this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                        break;

                      case 11:
                        this.$ = {
                            path: f[h - 3],
                            params: f[h - 2],
                            hash: f[h - 1]
                        };
                        break;

                      case 12:
                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                        break;

                      case 13:
                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                        break;

                      case 14:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 15:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 16:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 17:
                        this.$ = {
                            strip: d.stripFlags(f[h - 1], f[h - 1]),
                            program: f[h]
                        };
                        break;

                      case 18:
                        var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$), j = new d.Program([ i ], null, {}, d.locInfo(this._$));
                        j.chained = !0, this.$ = {
                            strip: f[h - 2].strip,
                            program: j,
                            chain: !0
                        };
                        break;

                      case 19:
                        this.$ = f[h];
                        break;

                      case 20:
                        this.$ = {
                            path: f[h - 1],
                            strip: d.stripFlags(f[h - 2], f[h])
                        };
                        break;

                      case 21:
                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                        break;

                      case 22:
                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                        break;

                      case 23:
                        this.$ = new d.PartialStatement(f[h - 3], f[h - 2], f[h - 1], d.stripFlags(f[h - 4], f[h]), d.locInfo(this._$));
                        break;

                      case 24:
                        this.$ = f[h];
                        break;

                      case 25:
                        this.$ = f[h];
                        break;

                      case 26:
                        this.$ = new d.SubExpression(f[h - 3], f[h - 2], f[h - 1], d.locInfo(this._$));
                        break;

                      case 27:
                        this.$ = new d.Hash(f[h], d.locInfo(this._$));
                        break;

                      case 28:
                        this.$ = new d.HashPair(d.id(f[h - 2]), f[h], d.locInfo(this._$));
                        break;

                      case 29:
                        this.$ = d.id(f[h - 1]);
                        break;

                      case 30:
                        this.$ = f[h];
                        break;

                      case 31:
                        this.$ = f[h];
                        break;

                      case 32:
                        this.$ = new d.StringLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 33:
                        this.$ = new d.NumberLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 34:
                        this.$ = new d.BooleanLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 35:
                        this.$ = new d.UndefinedLiteral(d.locInfo(this._$));
                        break;

                      case 36:
                        this.$ = new d.NullLiteral(d.locInfo(this._$));
                        break;

                      case 37:
                        this.$ = f[h];
                        break;

                      case 38:
                        this.$ = f[h];
                        break;

                      case 39:
                        this.$ = d.preparePath(!0, f[h], this._$);
                        break;

                      case 40:
                        this.$ = d.preparePath(!1, f[h], this._$);
                        break;

                      case 41:
                        f[h - 2].push({
                            part: d.id(f[h]),
                            original: f[h],
                            separator: f[h - 1]
                        }), this.$ = f[h - 2];
                        break;

                      case 42:
                        this.$ = [ {
                            part: d.id(f[h]),
                            original: f[h]
                        } ];
                        break;

                      case 43:
                        this.$ = [];
                        break;

                      case 44:
                        f[h - 1].push(f[h]);
                        break;

                      case 45:
                        this.$ = [];
                        break;

                      case 46:
                        f[h - 1].push(f[h]);
                        break;

                      case 53:
                        this.$ = [];
                        break;

                      case 54:
                        f[h - 1].push(f[h]);
                        break;

                      case 59:
                        this.$ = [];
                        break;

                      case 60:
                        f[h - 1].push(f[h]);
                        break;

                      case 65:
                        this.$ = [];
                        break;

                      case 66:
                        f[h - 1].push(f[h]);
                        break;

                      case 73:
                        this.$ = [];
                        break;

                      case 74:
                        f[h - 1].push(f[h]);
                        break;

                      case 77:
                        this.$ = [];
                        break;

                      case 78:
                        f[h - 1].push(f[h]);
                        break;

                      case 81:
                        this.$ = [];
                        break;

                      case 82:
                        f[h - 1].push(f[h]);
                        break;

                      case 85:
                        this.$ = [];
                        break;

                      case 86:
                        f[h - 1].push(f[h]);
                        break;

                      case 89:
                        this.$ = [ f[h] ];
                        break;

                      case 90:
                        f[h - 1].push(f[h]);
                        break;

                      case 91:
                        this.$ = [ f[h] ];
                        break;

                      case 92:
                        f[h - 1].push(f[h]);
                    }
                },
                table: [ {
                    3: 1,
                    4: 2,
                    5: [ 2, 43 ],
                    6: 3,
                    13: [ 2, 43 ],
                    14: [ 2, 43 ],
                    17: [ 2, 43 ],
                    27: [ 2, 43 ],
                    32: [ 2, 43 ],
                    46: [ 2, 43 ],
                    49: [ 2, 43 ],
                    53: [ 2, 43 ]
                }, {
                    1: [ 3 ]
                }, {
                    5: [ 1, 4 ]
                }, {
                    5: [ 2, 2 ],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: [ 1, 11 ],
                    14: [ 1, 18 ],
                    15: 16,
                    17: [ 1, 21 ],
                    22: 14,
                    25: 15,
                    27: [ 1, 19 ],
                    32: [ 1, 20 ],
                    37: [ 2, 2 ],
                    42: [ 2, 2 ],
                    45: [ 2, 2 ],
                    46: [ 1, 12 ],
                    49: [ 1, 13 ],
                    53: [ 1, 17 ]
                }, {
                    1: [ 2, 1 ]
                }, {
                    5: [ 2, 44 ],
                    13: [ 2, 44 ],
                    14: [ 2, 44 ],
                    17: [ 2, 44 ],
                    27: [ 2, 44 ],
                    32: [ 2, 44 ],
                    37: [ 2, 44 ],
                    42: [ 2, 44 ],
                    45: [ 2, 44 ],
                    46: [ 2, 44 ],
                    49: [ 2, 44 ],
                    53: [ 2, 44 ]
                }, {
                    5: [ 2, 3 ],
                    13: [ 2, 3 ],
                    14: [ 2, 3 ],
                    17: [ 2, 3 ],
                    27: [ 2, 3 ],
                    32: [ 2, 3 ],
                    37: [ 2, 3 ],
                    42: [ 2, 3 ],
                    45: [ 2, 3 ],
                    46: [ 2, 3 ],
                    49: [ 2, 3 ],
                    53: [ 2, 3 ]
                }, {
                    5: [ 2, 4 ],
                    13: [ 2, 4 ],
                    14: [ 2, 4 ],
                    17: [ 2, 4 ],
                    27: [ 2, 4 ],
                    32: [ 2, 4 ],
                    37: [ 2, 4 ],
                    42: [ 2, 4 ],
                    45: [ 2, 4 ],
                    46: [ 2, 4 ],
                    49: [ 2, 4 ],
                    53: [ 2, 4 ]
                }, {
                    5: [ 2, 5 ],
                    13: [ 2, 5 ],
                    14: [ 2, 5 ],
                    17: [ 2, 5 ],
                    27: [ 2, 5 ],
                    32: [ 2, 5 ],
                    37: [ 2, 5 ],
                    42: [ 2, 5 ],
                    45: [ 2, 5 ],
                    46: [ 2, 5 ],
                    49: [ 2, 5 ],
                    53: [ 2, 5 ]
                }, {
                    5: [ 2, 6 ],
                    13: [ 2, 6 ],
                    14: [ 2, 6 ],
                    17: [ 2, 6 ],
                    27: [ 2, 6 ],
                    32: [ 2, 6 ],
                    37: [ 2, 6 ],
                    42: [ 2, 6 ],
                    45: [ 2, 6 ],
                    46: [ 2, 6 ],
                    49: [ 2, 6 ],
                    53: [ 2, 6 ]
                }, {
                    5: [ 2, 7 ],
                    13: [ 2, 7 ],
                    14: [ 2, 7 ],
                    17: [ 2, 7 ],
                    27: [ 2, 7 ],
                    32: [ 2, 7 ],
                    37: [ 2, 7 ],
                    42: [ 2, 7 ],
                    45: [ 2, 7 ],
                    46: [ 2, 7 ],
                    49: [ 2, 7 ],
                    53: [ 2, 7 ]
                }, {
                    5: [ 2, 8 ],
                    13: [ 2, 8 ],
                    14: [ 2, 8 ],
                    17: [ 2, 8 ],
                    27: [ 2, 8 ],
                    32: [ 2, 8 ],
                    37: [ 2, 8 ],
                    42: [ 2, 8 ],
                    45: [ 2, 8 ],
                    46: [ 2, 8 ],
                    49: [ 2, 8 ],
                    53: [ 2, 8 ]
                }, {
                    18: 22,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    18: 33,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    4: 34,
                    6: 3,
                    13: [ 2, 43 ],
                    14: [ 2, 43 ],
                    17: [ 2, 43 ],
                    27: [ 2, 43 ],
                    32: [ 2, 43 ],
                    37: [ 2, 43 ],
                    42: [ 2, 43 ],
                    45: [ 2, 43 ],
                    46: [ 2, 43 ],
                    49: [ 2, 43 ],
                    53: [ 2, 43 ]
                }, {
                    4: 35,
                    6: 3,
                    13: [ 2, 43 ],
                    14: [ 2, 43 ],
                    17: [ 2, 43 ],
                    27: [ 2, 43 ],
                    32: [ 2, 43 ],
                    42: [ 2, 43 ],
                    45: [ 2, 43 ],
                    46: [ 2, 43 ],
                    49: [ 2, 43 ],
                    53: [ 2, 43 ]
                }, {
                    12: 36,
                    14: [ 1, 18 ]
                }, {
                    18: 38,
                    54: 37,
                    58: 39,
                    59: [ 1, 40 ],
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    5: [ 2, 9 ],
                    13: [ 2, 9 ],
                    14: [ 2, 9 ],
                    16: [ 2, 9 ],
                    17: [ 2, 9 ],
                    27: [ 2, 9 ],
                    32: [ 2, 9 ],
                    37: [ 2, 9 ],
                    42: [ 2, 9 ],
                    45: [ 2, 9 ],
                    46: [ 2, 9 ],
                    49: [ 2, 9 ],
                    53: [ 2, 9 ]
                }, {
                    18: 41,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    18: 42,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    18: 43,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    31: [ 2, 73 ],
                    47: 44,
                    59: [ 2, 73 ],
                    66: [ 2, 73 ],
                    74: [ 2, 73 ],
                    75: [ 2, 73 ],
                    76: [ 2, 73 ],
                    77: [ 2, 73 ],
                    78: [ 2, 73 ],
                    79: [ 2, 73 ]
                }, {
                    21: [ 2, 30 ],
                    31: [ 2, 30 ],
                    52: [ 2, 30 ],
                    59: [ 2, 30 ],
                    62: [ 2, 30 ],
                    66: [ 2, 30 ],
                    69: [ 2, 30 ],
                    74: [ 2, 30 ],
                    75: [ 2, 30 ],
                    76: [ 2, 30 ],
                    77: [ 2, 30 ],
                    78: [ 2, 30 ],
                    79: [ 2, 30 ]
                }, {
                    21: [ 2, 31 ],
                    31: [ 2, 31 ],
                    52: [ 2, 31 ],
                    59: [ 2, 31 ],
                    62: [ 2, 31 ],
                    66: [ 2, 31 ],
                    69: [ 2, 31 ],
                    74: [ 2, 31 ],
                    75: [ 2, 31 ],
                    76: [ 2, 31 ],
                    77: [ 2, 31 ],
                    78: [ 2, 31 ],
                    79: [ 2, 31 ]
                }, {
                    21: [ 2, 32 ],
                    31: [ 2, 32 ],
                    52: [ 2, 32 ],
                    59: [ 2, 32 ],
                    62: [ 2, 32 ],
                    66: [ 2, 32 ],
                    69: [ 2, 32 ],
                    74: [ 2, 32 ],
                    75: [ 2, 32 ],
                    76: [ 2, 32 ],
                    77: [ 2, 32 ],
                    78: [ 2, 32 ],
                    79: [ 2, 32 ]
                }, {
                    21: [ 2, 33 ],
                    31: [ 2, 33 ],
                    52: [ 2, 33 ],
                    59: [ 2, 33 ],
                    62: [ 2, 33 ],
                    66: [ 2, 33 ],
                    69: [ 2, 33 ],
                    74: [ 2, 33 ],
                    75: [ 2, 33 ],
                    76: [ 2, 33 ],
                    77: [ 2, 33 ],
                    78: [ 2, 33 ],
                    79: [ 2, 33 ]
                }, {
                    21: [ 2, 34 ],
                    31: [ 2, 34 ],
                    52: [ 2, 34 ],
                    59: [ 2, 34 ],
                    62: [ 2, 34 ],
                    66: [ 2, 34 ],
                    69: [ 2, 34 ],
                    74: [ 2, 34 ],
                    75: [ 2, 34 ],
                    76: [ 2, 34 ],
                    77: [ 2, 34 ],
                    78: [ 2, 34 ],
                    79: [ 2, 34 ]
                }, {
                    21: [ 2, 35 ],
                    31: [ 2, 35 ],
                    52: [ 2, 35 ],
                    59: [ 2, 35 ],
                    62: [ 2, 35 ],
                    66: [ 2, 35 ],
                    69: [ 2, 35 ],
                    74: [ 2, 35 ],
                    75: [ 2, 35 ],
                    76: [ 2, 35 ],
                    77: [ 2, 35 ],
                    78: [ 2, 35 ],
                    79: [ 2, 35 ]
                }, {
                    21: [ 2, 36 ],
                    31: [ 2, 36 ],
                    52: [ 2, 36 ],
                    59: [ 2, 36 ],
                    62: [ 2, 36 ],
                    66: [ 2, 36 ],
                    69: [ 2, 36 ],
                    74: [ 2, 36 ],
                    75: [ 2, 36 ],
                    76: [ 2, 36 ],
                    77: [ 2, 36 ],
                    78: [ 2, 36 ],
                    79: [ 2, 36 ]
                }, {
                    21: [ 2, 40 ],
                    31: [ 2, 40 ],
                    52: [ 2, 40 ],
                    59: [ 2, 40 ],
                    62: [ 2, 40 ],
                    66: [ 2, 40 ],
                    69: [ 2, 40 ],
                    74: [ 2, 40 ],
                    75: [ 2, 40 ],
                    76: [ 2, 40 ],
                    77: [ 2, 40 ],
                    78: [ 2, 40 ],
                    79: [ 2, 40 ],
                    81: [ 1, 45 ]
                }, {
                    66: [ 1, 32 ],
                    80: 46
                }, {
                    21: [ 2, 42 ],
                    31: [ 2, 42 ],
                    52: [ 2, 42 ],
                    59: [ 2, 42 ],
                    62: [ 2, 42 ],
                    66: [ 2, 42 ],
                    69: [ 2, 42 ],
                    74: [ 2, 42 ],
                    75: [ 2, 42 ],
                    76: [ 2, 42 ],
                    77: [ 2, 42 ],
                    78: [ 2, 42 ],
                    79: [ 2, 42 ],
                    81: [ 2, 42 ]
                }, {
                    50: 47,
                    52: [ 2, 77 ],
                    59: [ 2, 77 ],
                    66: [ 2, 77 ],
                    74: [ 2, 77 ],
                    75: [ 2, 77 ],
                    76: [ 2, 77 ],
                    77: [ 2, 77 ],
                    78: [ 2, 77 ],
                    79: [ 2, 77 ]
                }, {
                    23: 48,
                    36: 50,
                    37: [ 1, 52 ],
                    41: 51,
                    42: [ 1, 53 ],
                    43: 49,
                    45: [ 2, 49 ]
                }, {
                    26: 54,
                    41: 55,
                    42: [ 1, 53 ],
                    45: [ 2, 51 ]
                }, {
                    16: [ 1, 56 ]
                }, {
                    31: [ 2, 81 ],
                    55: 57,
                    59: [ 2, 81 ],
                    66: [ 2, 81 ],
                    74: [ 2, 81 ],
                    75: [ 2, 81 ],
                    76: [ 2, 81 ],
                    77: [ 2, 81 ],
                    78: [ 2, 81 ],
                    79: [ 2, 81 ]
                }, {
                    31: [ 2, 37 ],
                    59: [ 2, 37 ],
                    66: [ 2, 37 ],
                    74: [ 2, 37 ],
                    75: [ 2, 37 ],
                    76: [ 2, 37 ],
                    77: [ 2, 37 ],
                    78: [ 2, 37 ],
                    79: [ 2, 37 ]
                }, {
                    31: [ 2, 38 ],
                    59: [ 2, 38 ],
                    66: [ 2, 38 ],
                    74: [ 2, 38 ],
                    75: [ 2, 38 ],
                    76: [ 2, 38 ],
                    77: [ 2, 38 ],
                    78: [ 2, 38 ],
                    79: [ 2, 38 ]
                }, {
                    18: 58,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    28: 59,
                    31: [ 2, 53 ],
                    59: [ 2, 53 ],
                    66: [ 2, 53 ],
                    69: [ 2, 53 ],
                    74: [ 2, 53 ],
                    75: [ 2, 53 ],
                    76: [ 2, 53 ],
                    77: [ 2, 53 ],
                    78: [ 2, 53 ],
                    79: [ 2, 53 ]
                }, {
                    31: [ 2, 59 ],
                    33: 60,
                    59: [ 2, 59 ],
                    66: [ 2, 59 ],
                    69: [ 2, 59 ],
                    74: [ 2, 59 ],
                    75: [ 2, 59 ],
                    76: [ 2, 59 ],
                    77: [ 2, 59 ],
                    78: [ 2, 59 ],
                    79: [ 2, 59 ]
                }, {
                    19: 61,
                    21: [ 2, 45 ],
                    59: [ 2, 45 ],
                    66: [ 2, 45 ],
                    74: [ 2, 45 ],
                    75: [ 2, 45 ],
                    76: [ 2, 45 ],
                    77: [ 2, 45 ],
                    78: [ 2, 45 ],
                    79: [ 2, 45 ]
                }, {
                    18: 65,
                    31: [ 2, 75 ],
                    48: 62,
                    57: 63,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 64,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    66: [ 1, 70 ]
                }, {
                    21: [ 2, 39 ],
                    31: [ 2, 39 ],
                    52: [ 2, 39 ],
                    59: [ 2, 39 ],
                    62: [ 2, 39 ],
                    66: [ 2, 39 ],
                    69: [ 2, 39 ],
                    74: [ 2, 39 ],
                    75: [ 2, 39 ],
                    76: [ 2, 39 ],
                    77: [ 2, 39 ],
                    78: [ 2, 39 ],
                    79: [ 2, 39 ],
                    81: [ 1, 45 ]
                }, {
                    18: 65,
                    51: 71,
                    52: [ 2, 79 ],
                    57: 72,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 73,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    24: 74,
                    45: [ 1, 75 ]
                }, {
                    45: [ 2, 50 ]
                }, {
                    4: 76,
                    6: 3,
                    13: [ 2, 43 ],
                    14: [ 2, 43 ],
                    17: [ 2, 43 ],
                    27: [ 2, 43 ],
                    32: [ 2, 43 ],
                    37: [ 2, 43 ],
                    42: [ 2, 43 ],
                    45: [ 2, 43 ],
                    46: [ 2, 43 ],
                    49: [ 2, 43 ],
                    53: [ 2, 43 ]
                }, {
                    45: [ 2, 19 ]
                }, {
                    18: 77,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    4: 78,
                    6: 3,
                    13: [ 2, 43 ],
                    14: [ 2, 43 ],
                    17: [ 2, 43 ],
                    27: [ 2, 43 ],
                    32: [ 2, 43 ],
                    45: [ 2, 43 ],
                    46: [ 2, 43 ],
                    49: [ 2, 43 ],
                    53: [ 2, 43 ]
                }, {
                    24: 79,
                    45: [ 1, 75 ]
                }, {
                    45: [ 2, 52 ]
                }, {
                    5: [ 2, 10 ],
                    13: [ 2, 10 ],
                    14: [ 2, 10 ],
                    17: [ 2, 10 ],
                    27: [ 2, 10 ],
                    32: [ 2, 10 ],
                    37: [ 2, 10 ],
                    42: [ 2, 10 ],
                    45: [ 2, 10 ],
                    46: [ 2, 10 ],
                    49: [ 2, 10 ],
                    53: [ 2, 10 ]
                }, {
                    18: 65,
                    31: [ 2, 83 ],
                    56: 80,
                    57: 81,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 82,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    59: [ 2, 85 ],
                    60: 83,
                    62: [ 2, 85 ],
                    66: [ 2, 85 ],
                    74: [ 2, 85 ],
                    75: [ 2, 85 ],
                    76: [ 2, 85 ],
                    77: [ 2, 85 ],
                    78: [ 2, 85 ],
                    79: [ 2, 85 ]
                }, {
                    18: 65,
                    29: 84,
                    31: [ 2, 55 ],
                    57: 85,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 86,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    69: [ 2, 55 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    18: 65,
                    31: [ 2, 61 ],
                    34: 87,
                    57: 88,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 89,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    69: [ 2, 61 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    18: 65,
                    20: 90,
                    21: [ 2, 47 ],
                    57: 91,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 92,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    31: [ 1, 93 ]
                }, {
                    31: [ 2, 74 ],
                    59: [ 2, 74 ],
                    66: [ 2, 74 ],
                    74: [ 2, 74 ],
                    75: [ 2, 74 ],
                    76: [ 2, 74 ],
                    77: [ 2, 74 ],
                    78: [ 2, 74 ],
                    79: [ 2, 74 ]
                }, {
                    31: [ 2, 76 ]
                }, {
                    21: [ 2, 24 ],
                    31: [ 2, 24 ],
                    52: [ 2, 24 ],
                    59: [ 2, 24 ],
                    62: [ 2, 24 ],
                    66: [ 2, 24 ],
                    69: [ 2, 24 ],
                    74: [ 2, 24 ],
                    75: [ 2, 24 ],
                    76: [ 2, 24 ],
                    77: [ 2, 24 ],
                    78: [ 2, 24 ],
                    79: [ 2, 24 ]
                }, {
                    21: [ 2, 25 ],
                    31: [ 2, 25 ],
                    52: [ 2, 25 ],
                    59: [ 2, 25 ],
                    62: [ 2, 25 ],
                    66: [ 2, 25 ],
                    69: [ 2, 25 ],
                    74: [ 2, 25 ],
                    75: [ 2, 25 ],
                    76: [ 2, 25 ],
                    77: [ 2, 25 ],
                    78: [ 2, 25 ],
                    79: [ 2, 25 ]
                }, {
                    21: [ 2, 27 ],
                    31: [ 2, 27 ],
                    52: [ 2, 27 ],
                    62: [ 2, 27 ],
                    65: 94,
                    66: [ 1, 95 ],
                    69: [ 2, 27 ]
                }, {
                    21: [ 2, 89 ],
                    31: [ 2, 89 ],
                    52: [ 2, 89 ],
                    62: [ 2, 89 ],
                    66: [ 2, 89 ],
                    69: [ 2, 89 ]
                }, {
                    21: [ 2, 42 ],
                    31: [ 2, 42 ],
                    52: [ 2, 42 ],
                    59: [ 2, 42 ],
                    62: [ 2, 42 ],
                    66: [ 2, 42 ],
                    67: [ 1, 96 ],
                    69: [ 2, 42 ],
                    74: [ 2, 42 ],
                    75: [ 2, 42 ],
                    76: [ 2, 42 ],
                    77: [ 2, 42 ],
                    78: [ 2, 42 ],
                    79: [ 2, 42 ],
                    81: [ 2, 42 ]
                }, {
                    21: [ 2, 41 ],
                    31: [ 2, 41 ],
                    52: [ 2, 41 ],
                    59: [ 2, 41 ],
                    62: [ 2, 41 ],
                    66: [ 2, 41 ],
                    69: [ 2, 41 ],
                    74: [ 2, 41 ],
                    75: [ 2, 41 ],
                    76: [ 2, 41 ],
                    77: [ 2, 41 ],
                    78: [ 2, 41 ],
                    79: [ 2, 41 ],
                    81: [ 2, 41 ]
                }, {
                    52: [ 1, 97 ]
                }, {
                    52: [ 2, 78 ],
                    59: [ 2, 78 ],
                    66: [ 2, 78 ],
                    74: [ 2, 78 ],
                    75: [ 2, 78 ],
                    76: [ 2, 78 ],
                    77: [ 2, 78 ],
                    78: [ 2, 78 ],
                    79: [ 2, 78 ]
                }, {
                    52: [ 2, 80 ]
                }, {
                    5: [ 2, 12 ],
                    13: [ 2, 12 ],
                    14: [ 2, 12 ],
                    17: [ 2, 12 ],
                    27: [ 2, 12 ],
                    32: [ 2, 12 ],
                    37: [ 2, 12 ],
                    42: [ 2, 12 ],
                    45: [ 2, 12 ],
                    46: [ 2, 12 ],
                    49: [ 2, 12 ],
                    53: [ 2, 12 ]
                }, {
                    18: 98,
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    36: 50,
                    37: [ 1, 52 ],
                    41: 51,
                    42: [ 1, 53 ],
                    43: 100,
                    44: 99,
                    45: [ 2, 71 ]
                }, {
                    31: [ 2, 65 ],
                    38: 101,
                    59: [ 2, 65 ],
                    66: [ 2, 65 ],
                    69: [ 2, 65 ],
                    74: [ 2, 65 ],
                    75: [ 2, 65 ],
                    76: [ 2, 65 ],
                    77: [ 2, 65 ],
                    78: [ 2, 65 ],
                    79: [ 2, 65 ]
                }, {
                    45: [ 2, 17 ]
                }, {
                    5: [ 2, 13 ],
                    13: [ 2, 13 ],
                    14: [ 2, 13 ],
                    17: [ 2, 13 ],
                    27: [ 2, 13 ],
                    32: [ 2, 13 ],
                    37: [ 2, 13 ],
                    42: [ 2, 13 ],
                    45: [ 2, 13 ],
                    46: [ 2, 13 ],
                    49: [ 2, 13 ],
                    53: [ 2, 13 ]
                }, {
                    31: [ 1, 102 ]
                }, {
                    31: [ 2, 82 ],
                    59: [ 2, 82 ],
                    66: [ 2, 82 ],
                    74: [ 2, 82 ],
                    75: [ 2, 82 ],
                    76: [ 2, 82 ],
                    77: [ 2, 82 ],
                    78: [ 2, 82 ],
                    79: [ 2, 82 ]
                }, {
                    31: [ 2, 84 ]
                }, {
                    18: 65,
                    57: 104,
                    58: 66,
                    59: [ 1, 40 ],
                    61: 103,
                    62: [ 2, 87 ],
                    63: 105,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    30: 106,
                    31: [ 2, 57 ],
                    68: 107,
                    69: [ 1, 108 ]
                }, {
                    31: [ 2, 54 ],
                    59: [ 2, 54 ],
                    66: [ 2, 54 ],
                    69: [ 2, 54 ],
                    74: [ 2, 54 ],
                    75: [ 2, 54 ],
                    76: [ 2, 54 ],
                    77: [ 2, 54 ],
                    78: [ 2, 54 ],
                    79: [ 2, 54 ]
                }, {
                    31: [ 2, 56 ],
                    69: [ 2, 56 ]
                }, {
                    31: [ 2, 63 ],
                    35: 109,
                    68: 110,
                    69: [ 1, 108 ]
                }, {
                    31: [ 2, 60 ],
                    59: [ 2, 60 ],
                    66: [ 2, 60 ],
                    69: [ 2, 60 ],
                    74: [ 2, 60 ],
                    75: [ 2, 60 ],
                    76: [ 2, 60 ],
                    77: [ 2, 60 ],
                    78: [ 2, 60 ],
                    79: [ 2, 60 ]
                }, {
                    31: [ 2, 62 ],
                    69: [ 2, 62 ]
                }, {
                    21: [ 1, 111 ]
                }, {
                    21: [ 2, 46 ],
                    59: [ 2, 46 ],
                    66: [ 2, 46 ],
                    74: [ 2, 46 ],
                    75: [ 2, 46 ],
                    76: [ 2, 46 ],
                    77: [ 2, 46 ],
                    78: [ 2, 46 ],
                    79: [ 2, 46 ]
                }, {
                    21: [ 2, 48 ]
                }, {
                    5: [ 2, 21 ],
                    13: [ 2, 21 ],
                    14: [ 2, 21 ],
                    17: [ 2, 21 ],
                    27: [ 2, 21 ],
                    32: [ 2, 21 ],
                    37: [ 2, 21 ],
                    42: [ 2, 21 ],
                    45: [ 2, 21 ],
                    46: [ 2, 21 ],
                    49: [ 2, 21 ],
                    53: [ 2, 21 ]
                }, {
                    21: [ 2, 90 ],
                    31: [ 2, 90 ],
                    52: [ 2, 90 ],
                    62: [ 2, 90 ],
                    66: [ 2, 90 ],
                    69: [ 2, 90 ]
                }, {
                    67: [ 1, 96 ]
                }, {
                    18: 65,
                    57: 112,
                    58: 66,
                    59: [ 1, 40 ],
                    66: [ 1, 32 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    5: [ 2, 22 ],
                    13: [ 2, 22 ],
                    14: [ 2, 22 ],
                    17: [ 2, 22 ],
                    27: [ 2, 22 ],
                    32: [ 2, 22 ],
                    37: [ 2, 22 ],
                    42: [ 2, 22 ],
                    45: [ 2, 22 ],
                    46: [ 2, 22 ],
                    49: [ 2, 22 ],
                    53: [ 2, 22 ]
                }, {
                    31: [ 1, 113 ]
                }, {
                    45: [ 2, 18 ]
                }, {
                    45: [ 2, 72 ]
                }, {
                    18: 65,
                    31: [ 2, 67 ],
                    39: 114,
                    57: 115,
                    58: 66,
                    59: [ 1, 40 ],
                    63: 116,
                    64: 67,
                    65: 68,
                    66: [ 1, 69 ],
                    69: [ 2, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 28 ],
                    78: [ 1, 29 ],
                    79: [ 1, 31 ],
                    80: 30
                }, {
                    5: [ 2, 23 ],
                    13: [ 2, 23 ],
                    14: [ 2, 23 ],
                    17: [ 2, 23 ],
                    27: [ 2, 23 ],
                    32: [ 2, 23 ],
                    37: [ 2, 23 ],
                    42: [ 2, 23 ],
                    45: [ 2, 23 ],
                    46: [ 2, 23 ],
                    49: [ 2, 23 ],
                    53: [ 2, 23 ]
                }, {
                    62: [ 1, 117 ]
                }, {
                    59: [ 2, 86 ],
                    62: [ 2, 86 ],
                    66: [ 2, 86 ],
                    74: [ 2, 86 ],
                    75: [ 2, 86 ],
                    76: [ 2, 86 ],
                    77: [ 2, 86 ],
                    78: [ 2, 86 ],
                    79: [ 2, 86 ]
                }, {
                    62: [ 2, 88 ]
                }, {
                    31: [ 1, 118 ]
                }, {
                    31: [ 2, 58 ]
                }, {
                    66: [ 1, 120 ],
                    70: 119
                }, {
                    31: [ 1, 121 ]
                }, {
                    31: [ 2, 64 ]
                }, {
                    14: [ 2, 11 ]
                }, {
                    21: [ 2, 28 ],
                    31: [ 2, 28 ],
                    52: [ 2, 28 ],
                    62: [ 2, 28 ],
                    66: [ 2, 28 ],
                    69: [ 2, 28 ]
                }, {
                    5: [ 2, 20 ],
                    13: [ 2, 20 ],
                    14: [ 2, 20 ],
                    17: [ 2, 20 ],
                    27: [ 2, 20 ],
                    32: [ 2, 20 ],
                    37: [ 2, 20 ],
                    42: [ 2, 20 ],
                    45: [ 2, 20 ],
                    46: [ 2, 20 ],
                    49: [ 2, 20 ],
                    53: [ 2, 20 ]
                }, {
                    31: [ 2, 69 ],
                    40: 122,
                    68: 123,
                    69: [ 1, 108 ]
                }, {
                    31: [ 2, 66 ],
                    59: [ 2, 66 ],
                    66: [ 2, 66 ],
                    69: [ 2, 66 ],
                    74: [ 2, 66 ],
                    75: [ 2, 66 ],
                    76: [ 2, 66 ],
                    77: [ 2, 66 ],
                    78: [ 2, 66 ],
                    79: [ 2, 66 ]
                }, {
                    31: [ 2, 68 ],
                    69: [ 2, 68 ]
                }, {
                    21: [ 2, 26 ],
                    31: [ 2, 26 ],
                    52: [ 2, 26 ],
                    59: [ 2, 26 ],
                    62: [ 2, 26 ],
                    66: [ 2, 26 ],
                    69: [ 2, 26 ],
                    74: [ 2, 26 ],
                    75: [ 2, 26 ],
                    76: [ 2, 26 ],
                    77: [ 2, 26 ],
                    78: [ 2, 26 ],
                    79: [ 2, 26 ]
                }, {
                    13: [ 2, 14 ],
                    14: [ 2, 14 ],
                    17: [ 2, 14 ],
                    27: [ 2, 14 ],
                    32: [ 2, 14 ],
                    37: [ 2, 14 ],
                    42: [ 2, 14 ],
                    45: [ 2, 14 ],
                    46: [ 2, 14 ],
                    49: [ 2, 14 ],
                    53: [ 2, 14 ]
                }, {
                    66: [ 1, 125 ],
                    71: [ 1, 124 ]
                }, {
                    66: [ 2, 91 ],
                    71: [ 2, 91 ]
                }, {
                    13: [ 2, 15 ],
                    14: [ 2, 15 ],
                    17: [ 2, 15 ],
                    27: [ 2, 15 ],
                    32: [ 2, 15 ],
                    42: [ 2, 15 ],
                    45: [ 2, 15 ],
                    46: [ 2, 15 ],
                    49: [ 2, 15 ],
                    53: [ 2, 15 ]
                }, {
                    31: [ 1, 126 ]
                }, {
                    31: [ 2, 70 ]
                }, {
                    31: [ 2, 29 ]
                }, {
                    66: [ 2, 92 ],
                    71: [ 2, 92 ]
                }, {
                    13: [ 2, 16 ],
                    14: [ 2, 16 ],
                    17: [ 2, 16 ],
                    27: [ 2, 16 ],
                    32: [ 2, 16 ],
                    37: [ 2, 16 ],
                    42: [ 2, 16 ],
                    45: [ 2, 16 ],
                    46: [ 2, 16 ],
                    49: [ 2, 16 ],
                    53: [ 2, 16 ]
                } ],
                defaultActions: {
                    4: [ 2, 1 ],
                    49: [ 2, 50 ],
                    51: [ 2, 19 ],
                    55: [ 2, 52 ],
                    64: [ 2, 76 ],
                    73: [ 2, 80 ],
                    78: [ 2, 17 ],
                    82: [ 2, 84 ],
                    92: [ 2, 48 ],
                    99: [ 2, 18 ],
                    100: [ 2, 72 ],
                    105: [ 2, 88 ],
                    107: [ 2, 58 ],
                    110: [ 2, 64 ],
                    111: [ 2, 11 ],
                    123: [ 2, 70 ],
                    124: [ 2, 29 ]
                },
                parseError: function(a, b) {
                    throw new Error(a);
                },
                parse: function(a) {
                    function b() {
                        var a;
                        return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), 
                        a;
                    }
                    var c = this, d = [ 0 ], e = [ null ], f = [], g = this.table, h = "", i = 0, j = 0, k = 0;
                    this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, 
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var l = this.lexer.yylloc;
                    f.push(l);
                    var m = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var n, o, p, q, r, s, t, u, v, w = {}; ;) {
                        if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), 
                        q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                            var x = "";
                            if (!k) {
                                v = [];
                                for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), 
                                this.parseError(x, {
                                    text: this.lexer.match,
                                    token: this.terminals_[n] || n,
                                    line: this.lexer.yylineno,
                                    loc: l,
                                    expected: v
                                });
                            }
                        }
                        if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                        switch (q[0]) {
                          case 1:
                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, 
                            o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, 
                            l = this.lexer.yylloc, k > 0 && k--);
                            break;

                          case 2:
                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            }, m && (w._$.range = [ f[f.length - (t || 1)].range[0], f[f.length - 1].range[1] ]), 
                            r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                            t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), 
                            d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], 
                            d.push(u);
                            break;

                          case 3:
                            return !0;
                        }
                    }
                    return !0;
                }
            }, c = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser) throw new Error(a);
                        this.yy.parser.parseError(a, b);
                    },
                    setInput: function(a) {
                        return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, 
                        this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], 
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, 
                        this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), 
                        a;
                    },
                    unput: function(a) {
                        var b = a.length, c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), 
                        this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), 
                        c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        }, this.options.ranges && (this.yylloc.range = [ e[0], e[0] + this.yyleng - b ]), 
                        this;
                    },
                    more: function() {
                        return this._more = !0, this;
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a));
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
                    },
                    showPosition: function() {
                        var a = this.pastInput(), b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^";
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "", this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), 
                        !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++) ;
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), 
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, 
                        this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), 
                        this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], 
                        a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), 
                        this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        });
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex();
                    },
                    begin: function(a) {
                        this.conditionStack.push(a);
                    },
                    popState: function() {
                        return this.conditionStack.pop();
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2];
                    },
                    pushState: function(a) {
                        this.begin(a);
                    }
                };
                return a.options = {}, a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c);
                    }
                    switch (c) {
                      case 0:
                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), 
                        this.begin("emu")) : this.begin("mu"), b.yytext) return 14;
                        break;

                      case 1:
                        return 14;

                      case 2:
                        return this.popState(), 14;

                      case 3:
                        return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 16;

                      case 4:
                        return 14;

                      case 5:
                        return this.popState(), 13;

                      case 6:
                        return 59;

                      case 7:
                        return 62;

                      case 8:
                        return 17;

                      case 9:
                        return this.popState(), this.begin("raw"), 21;

                      case 10:
                        return 53;

                      case 11:
                        return 27;

                      case 12:
                        return 45;

                      case 13:
                        return this.popState(), 42;

                      case 14:
                        return this.popState(), 42;

                      case 15:
                        return 32;

                      case 16:
                        return 37;

                      case 17:
                        return 49;

                      case 18:
                        return 46;

                      case 19:
                        this.unput(b.yytext), this.popState(), this.begin("com");
                        break;

                      case 20:
                        return this.popState(), 13;

                      case 21:
                        return 46;

                      case 22:
                        return 67;

                      case 23:
                        return 66;

                      case 24:
                        return 66;

                      case 25:
                        return 81;

                      case 26:
                        break;

                      case 27:
                        return this.popState(), 52;

                      case 28:
                        return this.popState(), 31;

                      case 29:
                        return b.yytext = e(1, 2).replace(/\\"/g, '"'), 74;

                      case 30:
                        return b.yytext = e(1, 2).replace(/\\'/g, "'"), 74;

                      case 31:
                        return 79;

                      case 32:
                        return 76;

                      case 33:
                        return 76;

                      case 34:
                        return 77;

                      case 35:
                        return 78;

                      case 36:
                        return 75;

                      case 37:
                        return 69;

                      case 38:
                        return 71;

                      case 39:
                        return 66;

                      case 40:
                        return 66;

                      case 41:
                        return "INVALID";

                      case 42:
                        return 5;
                    }
                }, a.rules = [ /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/ ], 
                a.conditions = {
                    mu: {
                        rules: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42 ],
                        inclusive: !1
                    },
                    emu: {
                        rules: [ 2 ],
                        inclusive: !1
                    },
                    com: {
                        rules: [ 5 ],
                        inclusive: !1
                    },
                    raw: {
                        rules: [ 3, 4 ],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [ 0, 1, 42 ],
                        inclusive: !0
                    }
                }, a;
            }();
            return b.lexer = c, a.prototype = b, b.Parser = a, new a();
        }();
        b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d() {}
        function e(a, b, c) {
            void 0 === b && (b = a.length);
            var d = a[b - 1], e = a[b - 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c;
        }
        function f(a, b, c) {
            void 0 === b && (b = -1);
            var d = a[b + 1], e = a[b + 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c;
        }
        function g(a, b, c) {
            var d = a[null == b ? 0 : b + 1];
            if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                var e = d.value;
                d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e;
            }
        }
        function h(a, b, c) {
            var d = a[null == b ? a.length - 1 : b - 1];
            if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                var e = d.value;
                return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, 
                d.leftStripped;
            }
        }
        var i = c(8)["default"];
        b.__esModule = !0;
        var j = c(6), k = i(j);
        d.prototype = new k["default"](), d.prototype.Program = function(a) {
            var b = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var c = a.body, d = 0, i = c.length; i > d; d++) {
                var j = c[d], k = this.accept(j);
                if (k) {
                    var l = e(c, d, b), m = f(c, d, b), n = k.openStandalone && l, o = k.closeStandalone && m, p = k.inlineStandalone && l && m;
                    k.close && g(c, d, !0), k.open && h(c, d, !0), p && (g(c, d), h(c, d) && "PartialStatement" === j.type && (j.indent = /([ \t]+$)/.exec(c[d - 1].original)[1])), 
                    n && (g((j.program || j.inverse).body), h(c, d)), o && (g(c, d), h((j.inverse || j.program).body));
                }
            }
            return a;
        }, d.prototype.BlockStatement = function(a) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse, c = a.program && a.inverse, d = c, i = c;
            if (c && c.chained) for (d = c.body[0].program; i.chained; ) i = i.body[i.body.length - 1].program;
            var j = {
                open: a.openStrip.open,
                close: a.closeStrip.close,
                openStandalone: f(b.body),
                closeStandalone: e((d || b).body)
            };
            if (a.openStrip.close && g(b.body, null, !0), c) {
                var k = a.inverseStrip;
                k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), 
                e(b.body) && f(d.body) && (h(b.body), g(d.body));
            } else a.closeStrip.open && h(b.body, null, !0);
            return j;
        }, d.prototype.MustacheStatement = function(a) {
            return a.strip;
        }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) {
            var b = a.strip || {};
            return {
                inlineStandalone: !0,
                open: b.open,
                close: b.close
            };
        }, b["default"] = d, a.exports = b["default"];
    }, function(a, b, c) {
        "use strict";
        function d(a, b) {
            this.source = a, this.start = {
                line: b.first_line,
                column: b.first_column
            }, this.end = {
                line: b.last_line,
                column: b.last_column
            };
        }
        function e(a) {
            return /^\[.*\]$/.test(a) ? a.substr(1, a.length - 2) : a;
        }
        function f(a, b) {
            return {
                open: "~" === a.charAt(2),
                close: "~" === b.charAt(b.length - 3)
            };
        }
        function g(a) {
            return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }
        function h(a, b, c) {
            c = this.locInfo(c);
            for (var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length; i > h; h++) {
                var j = b[h].part, k = b[h].original !== j;
                if (d += (b[h].separator || "") + j, k || ".." !== j && "." !== j && "this" !== j) e.push(j); else {
                    if (e.length > 0) throw new n["default"]("Invalid path: " + d, {
                        loc: c
                    });
                    ".." === j && (f++, g += "../");
                }
            }
            return new this.PathExpression(a, f, e, d, c);
        }
        function i(a, b, c, d, e, f) {
            var g = d.charAt(3) || d.charAt(2), h = "{" !== g && "&" !== g;
            return new this.MustacheStatement(a, b, c, h, e, this.locInfo(f));
        }
        function j(a, b, c, d) {
            if (a.path.original !== c) {
                var e = {
                    loc: a.path.loc
                };
                throw new n["default"](a.path.original + " doesn't match " + c, e);
            }
            d = this.locInfo(d);
            var f = new this.Program([ b ], null, {}, d);
            return new this.BlockStatement(a.path, a.params, a.hash, f, void 0, {}, {}, {}, d);
        }
        function k(a, b, c, d, e, f) {
            if (d && d.path && a.path.original !== d.path.original) {
                var g = {
                    loc: a.path.loc
                };
                throw new n["default"](a.path.original + " doesn't match " + d.path.original, g);
            }
            b.blockParams = a.blockParams;
            var h = void 0, i = void 0;
            return c && (c.chain && (c.program.body[0].closeStrip = d.strip), i = c.strip, h = c.program), 
            e && (e = h, h = b, b = e), new this.BlockStatement(a.path, a.params, a.hash, b, h, a.strip, i, d && d.strip, this.locInfo(f));
        }
        var l = c(8)["default"];
        b.__esModule = !0, b.SourceLocation = d, b.id = e, b.stripFlags = f, b.stripComment = g, 
        b.preparePath = h, b.prepareMustache = i, b.prepareRawBlock = j, b.prepareBlock = k;
        var m = c(11), n = l(m);
    }, function(a, b, c) {
        "use strict";
        function d(a, b, c) {
            if (f.isArray(a)) {
                for (var d = [], e = 0, g = a.length; g > e; e++) d.push(b.wrap(a[e], c));
                return d;
            }
            return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
        }
        function e(a) {
            this.srcFile = a, this.source = [];
        }
        b.__esModule = !0;
        var f = c(12), g = void 0;
        try {
        } catch (h) {}
        g || (g = function(a, b, c, d) {
            this.src = "", d && this.add(d);
        }, g.prototype = {
            add: function(a) {
                f.isArray(a) && (a = a.join("")), this.src += a;
            },
            prepend: function(a) {
                f.isArray(a) && (a = a.join("")), this.src = a + this.src;
            },
            toStringWithSourceMap: function() {
                return {
                    code: this.toString()
                };
            },
            toString: function() {
                return this.src;
            }
        }), e.prototype = {
            prepend: function(a, b) {
                this.source.unshift(this.wrap(a, b));
            },
            push: function(a, b) {
                this.source.push(this.wrap(a, b));
            },
            merge: function() {
                var a = this.empty();
                return this.each(function(b) {
                    a.add([ "  ", b, "\n" ]);
                }), a;
            },
            each: function(a) {
                for (var b = 0, c = this.source.length; c > b; b++) a(this.source[b]);
            },
            empty: function() {
                var a = void 0 === arguments[0] ? this.currentLocation || {
                    start: {}
                } : arguments[0];
                return new g(a.start.line, a.start.column, this.srcFile);
            },
            wrap: function(a) {
                var b = void 0 === arguments[1] ? this.currentLocation || {
                    start: {}
                } : arguments[1];
                return a instanceof g ? a : (a = d(a, this, b), new g(b.start.line, b.start.column, this.srcFile, a));
            },
            functionCall: function(a, b, c) {
                return c = this.generateList(c), this.wrap([ a, b ? "." + b + "(" : "(", c, ")" ]);
            },
            quotedString: function(a) {
                return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
            },
            objectLiteral: function(a) {
                var b = [];
                for (var c in a) if (a.hasOwnProperty(c)) {
                    var e = d(a[c], this);
                    "undefined" !== e && b.push([ this.quotedString(c), ":", e ]);
                }
                var f = this.generateList(b);
                return f.prepend("{"), f.add("}"), f;
            },
            generateList: function(a, b) {
                for (var c = this.empty(b), e = 0, f = a.length; f > e; e++) e && c.add(","), c.add(d(a[e], this, b));
                return c;
            },
            generateArray: function(a, b) {
                var c = this.generateList(a, b);
                return c.prepend("["), c.add("]"), c;
            }
        }, b["default"] = e, a.exports = b["default"];
    } ]);
}), function() {
    "use strict";
    function a(a) {
        function b(b, d) {
            var f, p, q = b == window, r = d && void 0 !== d.message ? d.message : void 0;
            if (d = a.extend({}, a.blockUI.defaults, d || {}), !d.ignoreIfBlocked || !a(b).data("blockUI.isBlocked")) {
                if (d.overlayCSS = a.extend({}, a.blockUI.defaults.overlayCSS, d.overlayCSS || {}), 
                f = a.extend({}, a.blockUI.defaults.css, d.css || {}), d.onOverlayClick && (d.overlayCSS.cursor = "pointer"), 
                p = a.extend({}, a.blockUI.defaults.themedCSS, d.themedCSS || {}), r = void 0 === r ? d.message : r, 
                q && n && c(window, {
                    fadeOut: 0
                }), r && "string" != typeof r && (r.parentNode || r.jquery)) {
                    var s = r.jquery ? r[0] : r, t = {};
                    a(b).data("blockUI.history", t), t.el = s, t.parent = s.parentNode, t.display = s.style.display, 
                    t.position = s.style.position, t.parent && t.parent.removeChild(s);
                }
                a(b).data("blockUI.onUnblock", d.onUnblock);
                var u, v, w, x, y = d.baseZ;
                u = a(k || d.forceIframe ? '<iframe class="blockUI" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + d.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), 
                v = a(d.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + y++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), 
                d.theme && q ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:fixed">', 
                d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), 
                x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : d.theme ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:absolute">', 
                d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), 
                x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = q ? '<div class="blockUI ' + d.blockMsgClass + ' blockPage" style="z-index:' + (y + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + d.blockMsgClass + ' blockElement" style="z-index:' + (y + 10) + ';display:none;position:absolute"></div>', 
                w = a(x), r && (d.theme ? (w.css(p), w.addClass("ui-widget-content")) : w.css(f)), 
                d.theme || v.css(d.overlayCSS), v.css("position", q ? "fixed" : "absolute"), (k || d.forceIframe) && u.css("opacity", 0);
                var z = [ u, v, w ], A = a(q ? "body" : b);
                a.each(z, function() {
                    this.appendTo(A);
                }), d.theme && d.draggable && a.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var B = m && (!a.support.boxModel || a("object,embed", q ? null : b).length > 0);
                if (l || B) {
                    if (q && d.allowBodyStretch && a.support.boxModel && a("html,body").css("height", "100%"), 
                    (l || !a.support.boxModel) && !q) var C = i(b, "borderTopWidth"), D = i(b, "borderLeftWidth"), E = C ? "(0 - " + C + ")" : 0, F = D ? "(0 - " + D + ")" : 0;
                    a.each(z, function(a, b) {
                        var c = b[0].style;
                        if (c.position = "absolute", 2 > a) q ? c.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + d.quirksmodeOffsetHack + ') + "px"') : c.setExpression("height", 'this.parentNode.offsetHeight + "px"'), 
                        q ? c.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : c.setExpression("width", 'this.parentNode.offsetWidth + "px"'), 
                        F && c.setExpression("left", F), E && c.setExpression("top", E); else if (d.centerY) q && c.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), 
                        c.marginTop = 0; else if (!d.centerY && q) {
                            var e = d.css && d.css.top ? parseInt(d.css.top, 10) : 0, f = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + e + ') + "px"';
                            c.setExpression("top", f);
                        }
                    });
                }
                if (r && (d.theme ? w.find(".ui-widget-content").append(r) : w.append(r), (r.jquery || r.nodeType) && a(r).show()), 
                (k || d.forceIframe) && d.showOverlay && u.show(), d.fadeIn) {
                    var G = d.onBlock ? d.onBlock : j, H = d.showOverlay && !r ? G : j, I = r ? G : j;
                    d.showOverlay && v._fadeIn(d.fadeIn, H), r && w._fadeIn(d.fadeIn, I);
                } else d.showOverlay && v.show(), r && w.show(), d.onBlock && d.onBlock.bind(w)();
                if (e(1, b, d), q ? (n = w[0], o = a(d.focusableElements, n), d.focusInput && setTimeout(g, 20)) : h(w[0], d.centerX, d.centerY), 
                d.timeout) {
                    var J = setTimeout(function() {
                        q ? a.unblockUI(d) : a(b).unblock(d);
                    }, d.timeout);
                    a(b).data("blockUI.timeout", J);
                }
            }
        }
        function c(b, c) {
            var f, g = b == window, h = a(b), i = h.data("blockUI.history"), j = h.data("blockUI.timeout");
            j && (clearTimeout(j), h.removeData("blockUI.timeout")), c = a.extend({}, a.blockUI.defaults, c || {}), 
            e(0, b, c), null === c.onUnblock && (c.onUnblock = h.data("blockUI.onUnblock"), 
            h.removeData("blockUI.onUnblock"));
            var k;
            k = g ? a("body").children().filter(".blockUI").add("body > .blockUI") : h.find(">.blockUI"), 
            c.cursorReset && (k.length > 1 && (k[1].style.cursor = c.cursorReset), k.length > 2 && (k[2].style.cursor = c.cursorReset)), 
            g && (n = o = null), c.fadeOut ? (f = k.length, k.stop().fadeOut(c.fadeOut, function() {
                0 === --f && d(k, i, c, b);
            })) : d(k, i, c, b);
        }
        function d(b, c, d, e) {
            var f = a(e);
            if (!f.data("blockUI.isBlocked")) {
                b.each(function(a, b) {
                    this.parentNode && this.parentNode.removeChild(this);
                }), c && c.el && (c.el.style.display = c.display, c.el.style.position = c.position, 
                c.el.style.cursor = "default", c.parent && c.parent.appendChild(c.el), f.removeData("blockUI.history")), 
                f.data("blockUI.static") && f.css("position", "static"), "function" == typeof d.onUnblock && d.onUnblock(e, d);
                var g = a(document.body), h = g.width(), i = g[0].style.width;
                g.width(h - 1).width(h), g[0].style.width = i;
            }
        }
        function e(b, c, d) {
            var e = c == window, g = a(c);
            if ((b || (!e || n) && (e || g.data("blockUI.isBlocked"))) && (g.data("blockUI.isBlocked", b), 
            e && d.bindEvents && (!b || d.showOverlay))) {
                var h = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                b ? a(document).bind(h, d, f) : a(document).unbind(h, f);
            }
        }
        function f(b) {
            if ("keydown" === b.type && b.keyCode && 9 == b.keyCode && n && b.data.constrainTabKey) {
                var c = o, d = !b.shiftKey && b.target === c[c.length - 1], e = b.shiftKey && b.target === c[0];
                if (d || e) return setTimeout(function() {
                    g(e);
                }, 10), !1;
            }
            var f = b.data, h = a(b.target);
            return h.hasClass("blockOverlay") && f.onOverlayClick && f.onOverlayClick(b), h.parents("div." + f.blockMsgClass).length > 0 ? !0 : 0 === h.parents().children().filter("div.blockUI").length;
        }
        function g(a) {
            if (o) {
                var b = o[a === !0 ? o.length - 1 : 0];
                b && b.focus();
            }
        }
        function h(a, b, c) {
            var d = a.parentNode, e = a.style, f = (d.offsetWidth - a.offsetWidth) / 2 - i(d, "borderLeftWidth"), g = (d.offsetHeight - a.offsetHeight) / 2 - i(d, "borderTopWidth");
            b && (e.left = f > 0 ? f + "px" : "0"), c && (e.top = g > 0 ? g + "px" : "0");
        }
        function i(b, c) {
            return parseInt(a.css(b, c), 10) || 0;
        }
        a.fn._fadeIn = a.fn.fadeIn;
        var j = a.noop || function() {}, k = /MSIE/.test(navigator.userAgent), l = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent), m = (document.documentMode || 0, 
        a.isFunction(document.createElement("div").style.setExpression));
        a.blockUI = function(a) {
            b(window, a);
        }, a.unblockUI = function(a) {
            c(window, a);
        }, a.growlUI = function(b, c, d, e) {
            var f = a('<div class="growlUI"></div>');
            b && f.append("<h1>" + b + "</h1>"), c && f.append("<h2>" + c + "</h2>"), void 0 === d && (d = 3e3);
            var g = function(b) {
                b = b || {}, a.blockUI({
                    message: f,
                    fadeIn: "undefined" != typeof b.fadeIn ? b.fadeIn : 700,
                    fadeOut: "undefined" != typeof b.fadeOut ? b.fadeOut : 1e3,
                    timeout: "undefined" != typeof b.timeout ? b.timeout : d,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: e,
                    css: a.blockUI.defaults.growlCSS
                });
            };
            g();
            f.css("opacity");
            f.mouseover(function() {
                g({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var b = a(".blockMsg");
                b.stop(), b.fadeTo(300, 1);
            }).mouseout(function() {
                a(".blockMsg").fadeOut(1e3);
            });
        }, a.fn.block = function(c) {
            if (this[0] === window) return a.blockUI(c), this;
            var d = a.extend({}, a.blockUI.defaults, c || {});
            return this.each(function() {
                var b = a(this);
                d.ignoreIfBlocked && b.data("blockUI.isBlocked") || b.unblock({
                    fadeOut: 0
                });
            }), this.each(function() {
                "static" == a.css(this, "position") && (this.style.position = "relative", a(this).data("blockUI.static", !0)), 
                this.style.zoom = 1, b(this, c);
            });
        }, a.fn.unblock = function(b) {
            return this[0] === window ? (a.unblockUI(b), this) : this.each(function() {
                c(this, b);
            });
        }, a.blockUI.version = 2.7, a.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var n = null, o = [];
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], a) : a(jQuery);
}(), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b), f = c.data("bs.validator");
            (f || "destroy" != b) && (f || c.data("bs.validator", f = new d(this, e)), "string" == typeof b && f[b]());
        });
    }
    var c = ':input:not([type="submit"], button):enabled:visible', d = function(b, c) {
        this.$element = a(b), this.options = c, c.errors = a.extend({}, d.DEFAULTS.errors, c.errors);
        for (var e in c.custom) if (!c.errors[e]) throw new Error("Missing default error message for custom validator: " + e);
        a.extend(d.VALIDATORS, c.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), 
        this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.validateInput, this)), 
        this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function() {
            var b = a(this), c = b.data("match");
            a(c).on("input.bs.validator", function(a) {
                b.val() && b.trigger("input.bs.validator");
            });
        });
    };
    d.DEFAULTS = {
        delay: 500,
        html: !1,
        disable: !0,
        custom: {},
        errors: {
            match: "Does not match",
            minlength: "Not long enough"
        }
    }, d.VALIDATORS = {
        "native": function(a) {
            var b = a[0];
            return b.checkValidity ? b.checkValidity() : !0;
        },
        match: function(b) {
            var c = b.data("match");
            return !b.val() || b.val() === a(c).val();
        },
        minlength: function(a) {
            var b = a.data("minlength");
            return !a.val() || a.val().length >= b;
        }
    }, d.prototype.validateInput = function(b) {
        var c = a(b.target), d = c.data("bs.validator.errors");
        if (c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]')), 
        this.$element.trigger(b = a.Event("validate.bs.validator", {
            relatedTarget: c[0]
        })), !b.isDefaultPrevented()) {
            var e = this;
            this.runValidators(c).done(function(f) {
                c.data("bs.validator.errors", f), f.length ? e.showErrors(c) : e.clearErrors(c), 
                d && f.toString() === d.toString() || (b = f.length ? a.Event("invalid.bs.validator", {
                    relatedTarget: c[0],
                    detail: f
                }) : a.Event("valid.bs.validator", {
                    relatedTarget: c[0],
                    detail: d
                }), e.$element.trigger(b)), e.toggleSubmit(), e.$element.trigger(a.Event("validated.bs.validator", {
                    relatedTarget: c[0]
                }));
            });
        }
    }, d.prototype.runValidators = function(b) {
        function c(a) {
            return b.data(a + "-error") || b.data("error") || "native" == a && b[0].validationMessage || g.errors[a];
        }
        var e = [], f = a.Deferred(), g = this.options;
        return b.data("bs.validator.deferred") && b.data("bs.validator.deferred").reject(), 
        b.data("bs.validator.deferred", f), a.each(d.VALIDATORS, a.proxy(function(a, d) {
            if ((b.data(a) || "native" == a) && !d.call(this, b)) {
                var f = c(a);
                !~e.indexOf(f) && e.push(f);
            }
        }, this)), !e.length && b.val() && b.data("remote") ? this.defer(b, function() {
            var d = {};
            d[b.attr("name")] = b.val(), a.get(b.data("remote"), d).fail(function(a, b, d) {
                e.push(c("remote") || d);
            }).always(function() {
                f.resolve(e);
            });
        }) : f.resolve(e), f.promise();
    }, d.prototype.validate = function() {
        var a = this.options.delay;
        return this.options.delay = 0, this.$element.find(c).trigger("input.bs.validator"), 
        this.options.delay = a, this;
    }, d.prototype.showErrors = function(b) {
        var c = this.options.html ? "html" : "text";
        this.defer(b, function() {
            var d = b.closest(".form-group"), e = d.find(".help-block.with-errors"), f = d.find(".form-control-feedback"), g = b.data("bs.validator.errors");
            g.length && (g = a("<ul/>").addClass("list-unstyled").append(a.map(g, function(b) {
                return a("<li/>")[c](b);
            })), void 0 === e.data("bs.validator.originalContent") && e.data("bs.validator.originalContent", e.html()), 
            e.empty().append(g), d.addClass("has-error"), f.length && f.removeClass("glyphicon-ok") && f.addClass("glyphicon-warning-sign") && d.removeClass("has-success"));
        });
    }, d.prototype.clearErrors = function(a) {
        var b = a.closest(".form-group"), c = b.find(".help-block.with-errors"), d = b.find(".form-control-feedback");
        c.html(c.data("bs.validator.originalContent")), b.removeClass("has-error"), d.length && d.removeClass("glyphicon-warning-sign") && d.addClass("glyphicon-ok") && b.addClass("has-success");
    }, d.prototype.hasErrors = function() {
        function b() {
            return !!(a(this).data("bs.validator.errors") || []).length;
        }
        return !!this.$element.find(c).filter(b).length;
    }, d.prototype.isIncomplete = function() {
        function b() {
            return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !a('[name="' + this.name + '"]:checked').length : "" === a.trim(this.value);
        }
        return !!this.$element.find(c).filter("[required]").filter(b).length;
    }, d.prototype.onSubmit = function(a) {
        this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault();
    }, d.prototype.toggleSubmit = function() {
        if (this.options.disable) {
            var b = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
            b.toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({
                "pointer-events": "all",
                cursor: "pointer"
            });
        }
    }, d.prototype.defer = function(a, b) {
        return this.options.delay ? (window.clearTimeout(a.data("bs.validator.timeout")), 
        void a.data("bs.validator.timeout", window.setTimeout(b, this.options.delay))) : b();
    }, d.prototype.destroy = function() {
        return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), 
        this.$element.find(c).off(".bs.validator").removeData([ "bs.validator.errors", "bs.validator.deferred" ]).each(function() {
            var b = a(this), c = b.data("bs.validator.timeout");
            window.clearTimeout(c) && b.removeData("bs.validator.timeout");
        }), this.$element.find(".help-block.with-errors").each(function() {
            var b = a(this), c = b.data("bs.validator.originalContent");
            b.removeData("bs.validator.originalContent").html(c);
        }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), 
        this.$element.find(".has-error").removeClass("has-error"), this;
    };
    var e = a.fn.validator;
    a.fn.validator = b, a.fn.validator.Constructor = d, a.fn.validator.noConflict = function() {
        return a.fn.validator = e, this;
    }, a(window).on("load", function() {
        a('form[data-toggle="validator"]').each(function() {
            var c = a(this);
            b.call(c, c.data());
        });
    });
}(jQuery);
//# sourceMappingURL=divegold.min.js.map