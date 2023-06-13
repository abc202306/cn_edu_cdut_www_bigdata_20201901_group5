/**
 * Created by lizhenya on 2018/8/2.
 */
(function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}
)(typeof window != "undefined" ? window : this, function(n, t) {
    function ri(n) {
        var t = "length"in n && n.length
          , r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }
    function ui(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if (typeof t == "string") {
            if (re.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function hr(n, t) {
        do
            n = n[t];
        while (n && n.nodeType !== 1);return n
    }
    function ee(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1),
        n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a),
        n.detachEvent("onload", a))
    }
    function a() {
        (u.addEventListener || event.type === "load" || u.readyState === "complete") && (cr(),
        i.ready())
    }
    function yr(n, t, r) {
        if (r === undefined && n.nodeType === 1) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u),
            typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else
                r = undefined
        }
        return r
    }
    function ei(n) {
        var t;
        for (t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando, l = n.nodeType, o = l ? i.cache : n, f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string")
                return f || (f = l ? n[h] = c.pop() || i.guid++ : h),
                o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }),
                (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
                e = o[f],
                u || (e.data || (e.data = {}),
                e = e.data),
                r !== undefined && (e[i.camelCase(t)] = r),
                typeof t == "string" ? (s = e[t],
                s == null && (s = e[i.camelCase(t)])) : s = e,
                s
        }
    }
    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var e, s, h = n.nodeType, f = h ? i.cache : n, o = h ? n[i.expando] : i.expando;
            if (f[o]) {
                if (t && (e = u ? f[o] : f[o].data,
                e)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                    t = t in e ? [t] : t.split(" ")),
                    s = t.length; s--; )
                        delete e[t[s]];
                    if (u ? !ei(e) : !i.isEmptyObject(e))
                        return
                }
                (u || (delete f[o].data,
                ei(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
            }
        }
    }
    function vt() {
        return !0
    }
    function it() {
        return !1
    }
    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }
    function gr(n) {
        var i = nu.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, s = 0, r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [],
            e = n.childNodes || n; (u = e[s]) != null; s++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function we(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function ou(n) {
        return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type,
        n
    }
    function su(n) {
        var t = ve.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function li(n, t) {
        for (var u, r = 0; (u = n[r]) != null; r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function hu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function be(n, t) {
        var u, e, f;
        if (t.nodeType === 1) {
            if (u = t.nodeName.toLowerCase(),
            !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events)
                    i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            u === "script" && t.text !== n.text ? (ou(t).text = n.text,
            su(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML),
            r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
        }
    }
    function cu(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(),
        e
    }
    function yt(n) {
        var r = u
          , t = ai[n];
        return t || (t = cu(n, r),
        t !== "none" && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
        r = (ot[0].contentWindow || ot[0].contentDocument).document,
        r.write(),
        r.close(),
        t = cu(n, r),
        ot.detach()),
        ai[n] = t),
        t
    }
    function au(n, t) {
        return {
            get: function() {
                var i = n();
                if (i != null) {
                    if (i) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
    }
    function pu(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--; )
            if (t = yu[i] + r,
            t in n)
                return t;
        return u
    }
    function wu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)
            (r = n[u],
            r.style) && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || f !== "none" || (r.style.display = ""),
            r.style.display === "" && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r),
            (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++)
            (r = n[u],
            r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function bu(n, t, i) {
        var r = no.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function ku(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + w[e], !0, f)),
            u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)),
            r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f),
            r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }
    function du(n, t, u) {
        var o = !0
          , f = t === "width" ? n.offsetWidth : n.offsetHeight
          , e = k(n)
          , s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
        if (f <= 0 || f == null) {
            if (f = d(n, t, e),
            (f < 0 || f == null) && (f = n.style[t]),
            pt.test(f))
                return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n,t,i,r,u)
    }
    function nf() {
        return setTimeout(function() {
            rt = undefined
        }),
        rt = i.now()
    }
    function kt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
            r = w[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function tf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function fo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this, y = {}, o = n.style, c = n.nodeType && et(n), e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"),
        s.unqueued == null && (s.unqueued = 0,
        w = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || w()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height"in t || "width"in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY],
        h = i.css(n, "display"),
        b = h === "none" ? i._data(n, "olddisplay") || yt(n.nodeName) : h,
        b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && yt(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden",
        r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f],
            ro.exec(a)) {
                if (delete t[f],
                p = p || a === "toggle",
                a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined)
                        c = !0;
                    else
                        continue;
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = undefined;
        if (i.isEmptyObject(y))
            (h === "none" ? yt(n.nodeName) : h) === "inline" && (o.display = h);
        else {
            e ? "hidden"in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t])
            });
            for (f in y)
                v = tf(c ? e[f] : 0, f, l),
                f in e || (e[f] = v.start,
                c && (v.end = v.start,
                v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }
    function eo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function rf(n, t, r) {
        var e, o, s = 0, l = bt.length, f = i.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (o)
                return !1;
            for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            i < 1 && e ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: rt || nf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i < r; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), h = u.props;
        for (eo(h, u.opts.specialEasing); s < l; s++)
            if (e = bt[s].call(u, n, h, u.opts),
            e)
                return e;
        return i.map(h, tf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function af(n) {
        return function(t, r) {
            typeof t != "string" && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    u.charAt(0) === "+" ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o)
                        return !(h = s)
                } else
                    return t.dataTypes.unshift(s),
                    e(s),
                    !1
            }),
            h
        }
        var f = {}
          , o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ao(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*"; )
            r.shift(),
            e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0]in i)
            u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u)
            return u !== r[0] && r.unshift(u),
            i[u]
    }
    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift(),
            u)
                if (u === "*")
                    u = e;
                else if (e !== "*" && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]],
                            f)) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function di(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || po.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (f in t)
                di(n + "[" + f + "]", t[f], r, u)
    }
    function pf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function go() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function wf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var c = [], l = c.slice, ir = c.concat, ii = c.push, rr = c.indexOf, ct = {}, df = ct.toString, tt = ct.hasOwnProperty, r = {}, ur = "1.11.3", i = function(n, t) {
        return new i.fn.init(n,t)
    }, gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ne = /^-ms-/, te = /-([\da-z])/gi, ie = function(n, t) {
        return t.toUpperCase()
    }, p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of, gt, gi, ti, nr, tr, bf, kf;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for (typeof n == "boolean" && (h = n,
        n = arguments[u] || {},
        u++),
        typeof n == "object" || i.isFunction(n) || (n = {}),
        u === c && (n = this,
        u--); u < c; u++)
            if ((o = arguments[u]) != null)
                for (f in o)
                    (r = n[f],
                    t = o[f],
                    n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1,
                    s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                    n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array"
        }
        ,
        isWindow: function(n) {
            return n != null && n == n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n)
                return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n)
                    return tt.call(n, t);
            for (t in n)
                ;
            return t === undefined || tt.call(n, t)
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ct[df.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(ne, "ms-").replace(te, ie)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = ri(n);
            if (i) {
                if (e) {
                    for (; r < f; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (e) {
                for (; r < f; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(gf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ri(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr)
                    return rr.call(t, n, i);
                for (r = t.length,
                i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; i < r; )
                n[u++] = t[i++];
            if (r !== r)
                while (t[i] !== undefined)
                    n[u++] = t[i++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = ri(n), f = [];
            if (o)
                for (; r < e; r++)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return (typeof t == "string" && (f = n[t],
            t = n,
            n = f),
            !i.isFunction(n)) ? undefined : (u = l.call(arguments, 2),
            r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r)
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function r(n, t, i, r) {
            var p, s, a, c, w, y, d, v, nt, g;
            if ((t ? t.ownerDocument || t : h) !== o && k(t),
            t = t || o,
            i = i || [],
            c = t.nodeType,
            typeof n != "string" || !n || c !== 1 && c !== 9 && c !== 11)
                return i;
            if (!r && l) {
                if (c !== 11 && (p = hr.exec(n)))
                    if (a = p[1]) {
                        if (c === 9)
                            if (s = t.getElementById(a),
                            s && s.parentNode) {
                                if (s.id === a)
                                    return i.push(s),
                                    i
                            } else
                                return i;
                        else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a)
                            return i.push(s),
                            i
                    } else {
                        if (p[2])
                            return b.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((a = p[3]) && u.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(a)),
                            i
                    }
                if (u.qsa && (!e || !e.test(n))) {
                    if (v = d = f,
                    nt = t,
                    g = c !== 1 && n,
                    c === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (y = ft(n),
                        (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v),
                        v = "[id='" + v + "'] ",
                        w = y.length; w--; )
                            y[w] = v + vt(y[w]);
                        nt = dt.test(n) && ti(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g)
                        try {
                            return b.apply(i, nt.querySelectorAll(g)),
                            i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return oi(n.replace(lt, "$1"), t, i, r)
        }
        function gt() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function c(n) {
            return n[f] = !0,
            n
        }
        function v(n) {
            var t = o.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ni(n, i) {
            for (var u = n.split("|"), r = n.length; r--; )
                t.attrHandle[u[r]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }
        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }
        function tt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ti(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }
        function bi() {}
        function vt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function ii(n, t, i) {
            var r = t.dir
              , u = i && r === "parentNode"
              , e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u) {
                            if (h = t[f] || (t[f] = {}),
                            (s = h[r]) && s[0] === a && s[1] === e)
                                return c[2] = s[2];
                            if (h[r] = c,
                            c[2] = n(t, i, o))
                                return !0
                        }
            }
        }
        function ri(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function vr(n, t, i) {
            for (var u = 0, f = t.length; u < f; u++)
                r(n, t[u], i);
            return i
        }
        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function ui(n, t, i, r, u, e) {
            return r && !r[f] && (r = ui(r)),
            u && !u[f] && (u = ui(u, e)),
            c(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || vr(t || "*", o.nodeType ? [o] : o, []), v = n && (f || !t) ? yt(k, p, n, o, s) : k, h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = yt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = yt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function fi(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                return n === o
            }, c, !0), a = ii(function(n) {
                return nt(o, n) > -1
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    e = [ii(ri(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(lt, "$1"), u, i < r && fi(n.slice(i, r)), r < s && fi(n = n.slice(r)), r < s && vt(n))
                    }
                    e.push(u)
                }
            return ri(e)
        }
        function yr(n, i) {
            var u = i.length > 0
              , f = n.length > 0
              , e = function(e, s, h, c, l) {
                var y, d, w, k = 0, v = "0", g = e && [], p = [], nt = ht, tt = e || f && t.find.TAG("*", l), it = a += nt == null ? 1 : Math.random() || .1, rt = tt.length;
                for (l && (ht = s !== o && s); v !== rt && (y = tt[v]) != null; v++) {
                    if (f && y) {
                        for (d = 0; w = n[d++]; )
                            if (w(y, s, h)) {
                                c.push(y);
                                break
                            }
                        l && (a = it)
                    }
                    u && ((y = !w && y) && k--,
                    e && g.push(y))
                }
                if (k += v,
                u && v !== k) {
                    for (d = 0; w = i[d++]; )
                        w(g, p, s, h);
                    if (e) {
                        if (k > 0)
                            while (v--)
                                g[v] || p[v] || (p[v] = gi.call(c));
                        p = yt(p)
                    }
                    b.apply(c, p);
                    l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                }
                return l && (a = it,
                ht = nt),
                g
            };
            return u ? c(e) : e
        }
        var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date, h = n.document, a = 0, ki = 0, si = gt(), hi = gt(), ci = gt(), wt = function(n, t) {
            return n === t && (rt = !0),
            0
        }, li = -2147483648, di = {}.hasOwnProperty, g = [], gi = g.pop, nr = g.push, b = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", vi = ut.replace("w", "w#"), yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]", kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)", tr = new RegExp(i + "+","g"), lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$","g"), ir = new RegExp("^" + i + "*," + i + "*"), rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]","g"), fr = new RegExp(kt), er = new RegExp("^" + vi + "$"), at = {
            ID: new RegExp("^#(" + ut + ")"),
            CLASS: new RegExp("^\\.(" + ut + ")"),
            TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + yi),
            PSEUDO: new RegExp("^" + kt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)","i"),
            bool: new RegExp("^(?:" + bt + ")$","i"),
            needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)","i")
        }, or = /^(?:input|select|textarea|button)$/i, sr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, dt = /[+~]/, cr = /'|\\/g, y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        }, pi = function() {
            k()
        };
        try {
            b.apply(g = ai.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType
        } catch (pr) {
            b = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        ei = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ;
        k = r.setDocument = function(n) {
            var a, c, r = n ? n.ownerDocument || n : h;
            return r === o || r.nodeType !== 9 || !r.documentElement ? o : (o = r,
            s = r.documentElement,
            c = r.defaultView,
            c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)),
            l = !ei(r),
            u.attributes = v(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            u.getElementsByTagName = v(function(n) {
                return n.appendChild(r.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            u.getElementsByClassName = ot.test(r.getElementsByClassName),
            u.getById = v(function(n) {
                return s.appendChild(n).id = f,
                !r.getElementsByName || !r.getElementsByName(f).length
            }),
            u.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            t.find.TAG = u.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++])
                        i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = u.getElementsByClassName && function(n, t) {
                if (l)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            e = [],
            (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                n.querySelectorAll(":checked").length || e.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
            }),
            v(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                e.push(",.*:")
            })),
            (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                u.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", kt)
            }),
            e = e.length && new RegExp(e.join("|")),
            d = d.length && new RegExp(d.join("|")),
            a = ot.test(s.compareDocumentPosition),
            et = a || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            wt = a ? function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : i & 4 ? -1 : 1
            }
            : function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (o && s) {
                    if (o === s)
                        return wi(n, t)
                } else
                    return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (i = n; i = i.parentNode; )
                    f.unshift(i);
                for (i = t; i = i.parentNode; )
                    e.unshift(i);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
            }
            ,
            r)
        }
        ;
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== o && k(n),
            t = t.replace(ur, "='$1']"),
            u.matchesSelector && l && (!d || !d.test(t)) && (!e || !e.test(t)))
                try {
                    var i = ct.call(n, t);
                    if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11)
                        return i
                } catch (f) {}
            return r(t, o, null, [n]).length > 0
        }
        ;
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== o && k(n),
            et(n, t)
        }
        ;
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== o && k(n);
            var f = t.attrHandle[i.toLowerCase()]
              , r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : undefined;
            return r !== undefined ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        r.uniqueSort = function(n) {
            var r, f = [], t = 0, i = 0;
            if (rt = !u.detectDuplicates,
            w = !u.sortStable && n.slice(0),
            n.sort(wt),
            rt) {
                while (r = n[i++])
                    r === n[i] && (t = f.push(i));
                while (t--)
                    n.splice(f[t], 1)
            }
            return w = null,
            n
        }
        ;
        st = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ;
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: at,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    n[2] === "~=" && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")),
                    n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return f == null ? t === "!=" : t ? (f += "",
                        t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth"
                      , o = n.slice(-4) !== "last"
                      , e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                            return !1;
                                    w = b = n === "only" && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild],
                            o && d) {
                                for (k = p[f] || (p[f] = {}),
                                v = k[n] || [],
                                y = v[0] === a && v[1],
                                l = v[0] === a && v[2],
                                c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); )
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a)
                                l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--; )
                            r = nt(n, f[e]),
                            n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }
                    ) : u
                }
            },
            pseudos: {
                not: c(function(n) {
                    var t = []
                      , r = []
                      , i = pt(n.replace(lt, "$1"));
                    return i[f] ? c(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || r.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || i.indexOf(n + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return sr.test(n.nodeName)
                },
                input: function(n) {
                    return or.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[it] = lr(it);
        for (it in {
            submit: !0,
            reset: !0
        })
            t.pseudos[it] = ar(it);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        ft = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = hi[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (u = n,
            h = [],
            c = t.preFilter; u; ) {
                (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u),
                h.push(s = []));
                e = !1;
                (f = rr.exec(u)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }),
                u = u.slice(e.length));
                for (o in t.filter)
                    (f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    u = u.slice(e.length));
                if (!e)
                    break
            }
            return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
        }
        ,
        pt = r.compile = function(n, t) {
            var r, u = [], e = [], i = ci[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = fi(t[r]),
                    i[f] ? u.push(i) : e.push(i);
                i = ci(n, yr(e, u));
                i.selector = n
            }
            return i
        }
        ,
        oi = r.select = function(n, i, r, f) {
            var s, e, o, a, v, c = typeof n == "function" && n, h = !f && ft(n = c.selector || n);
            if (r = r || [],
            h.length === 1) {
                if (e = h[0] = h[0].slice(0),
                e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0],
                    i)
                        c && (i = i.parentNode);
                    else
                        return r;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s],
                    t.relative[a = o.type])
                        break;
                    if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                        if (e.splice(s, 1),
                        n = f.length && vt(e),
                        !n)
                            return b.apply(r, f),
                            r;
                        break
                    }
                }
            }
            return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i),
            r
        }
        ,
        u.sortStable = f.split("").sort(wt).join("") === f,
        u.detectDuplicates = !!rt,
        k(),
        u.sortDetached = v(function(n) {
            return n.compareDocumentPosition(o.createElement("div")) & 1
        }),
        v(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            n.firstChild.getAttribute("href") === "#"
        }) || ni("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        u.attributes && v(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            n.firstChild.getAttribute("value") === ""
        }) || ni("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input")
                return n.defaultValue
        }),
        v(function(n) {
            return n.getAttribute("disabled") == null
        }) || ni(bt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        r
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext
      , er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , re = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if (typeof n != "string")
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < f; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; t < f; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, fe = i.fn.init = function(n, t) {
        var r, f;
        if (!n)
            return this;
        if (typeof n == "string") {
            if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : ue.exec(n),
            r && (r[1] || !t)) {
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t,
                    i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                    er.test(r[1]) && i.isPlainObject(t))
                        for (r in t)
                            i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]),
                f && f.parentNode) {
                    if (f.id !== r[2])
                        return ft.find(n);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = u,
                this.selector = n,
                this
            }
            return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n,
        this.length = 1,
        this) : i.isFunction(n) ? typeof ft.ready != "undefined" ? ft.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector,
        this.context = n.context),
        i.makeArray(n, this))
    }
    ;
    fe.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r)); )
                u.nodeType === 1 && f.push(u),
                u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            this.length > 1 && (sr[n] || (f = i.unique(f)),
            or.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? fi[n] || ee(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [], r = !n.once && [], l = function(i) {
            for (u = n.memory && i,
            h = !0,
            e = c || 0,
            c = 0,
            f = t.length,
            o = !0; t && e < f; e++)
                if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                    u = !1;
                    break
                }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        }, s = {
            add: function() {
                if (t) {
                    var r = t.length;
                    (function e(r) {
                        i.each(r, function(r, u) {
                            var f = i.type(u);
                            f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                        })
                    }
                    )(arguments);
                    o ? f = t.length : u && (c = r,
                    l(u))
                }
                return this
            },
            remove: function() {
                return t && i.each(arguments, function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1; )
                        t.splice(u, 1),
                        o && (u <= f && f--,
                        u <= e && e--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : !!(t && t.length)
            },
            empty: function() {
                return t = [],
                f = 0,
                this
            },
            disable: function() {
                return t = r = u = undefined,
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return r = undefined,
                u || s.disable(),
                this
            },
            locked: function() {
                return !r
            },
            fireWith: function(n, i) {
                return t && (!h || r) && (i = i || [],
                i = [n, i.slice ? i.slice() : i],
                o ? r.push(i) : l(i)),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!h
            }
        };
        return s
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return n != null ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = l.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = new Array(r),
                c = new Array(r),
                s = new Array(r); t < r; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body)
                    return setTimeout(i.ready);
                (i.isReady = !0,
                n !== !0 && --i.readyWait > 0) || (lt.resolveWith(u, [i]),
                i.fn.triggerHandler && (i(u).triggerHandler("ready"),
                i(u).off("ready")))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(),
            u.readyState === "complete")
                setTimeout(i.ready);
            else if (u.addEventListener)
                u.addEventListener("DOMContentLoaded", a, !1),
                n.addEventListener("load", a, !1);
            else {
                u.attachEvent("onreadystatechange", a);
                n.attachEvent("onload", a);
                var r = !1;
                try {
                    r = n.frameElement == null && u.documentElement
                } catch (e) {}
                r && r.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        cr();
                        i.ready()
                    }
                }()
            }
        return lt.promise(t)
    }
    ;
    o = typeof undefined;
    for (lr in i(r))
        break;
    r.ownLast = lr !== "0";
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        (n = u.getElementsByTagName("body")[0],
        n && n.style) && (t = u.createElement("div"),
        i = u.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        r.inlineBlockNeedsLayout = f = t.offsetWidth === 3,
        f && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var n = u.createElement("div");
        if (r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (t) {
                r.deleteExpando = !1
            }
        }
        n = null
    }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()]
          , r = +n.nodeType || 1;
        return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    }
    ;
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0], o = r && r.attributes;
            if (n === undefined) {
                if (this.length && (e = i.data(r),
                r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--; )
                        o[f] && (u = o[f].name,
                        u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)),
                        yr(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : undefined
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift(),
            e--);
            u && (t === "fx" && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n,
            n = "fx",
            r--),
            arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function() {
                --f || e.resolveWith(u, [u])
            };
            for (typeof n != "string" && (t = n,
            n = undefined),
            n = n || "fx"; o--; )
                r = i._data(u[o], n + "queueHooks"),
                r && r.empty && (f++,
                r.empty.add(s));
            return s(),
            e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , w = ["Top", "Right", "Bottom", "Left"]
      , et = function(n, t) {
        return n = t || n,
        i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }
      , b = i.access = function(n, t, r, u, f, e, o) {
        var s = 0
          , c = n.length
          , h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r)
                i.access(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0,
        i.isFunction(u) || (o = !0),
        h && (o ? (t.call(n, u),
        t = null) : (h = t,
        t = function(n, t, r) {
            return h.call(i(n), r)
        }
        )),
        t))
            for (; s < c; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    }
      , oi = /^(?:checkbox|radio)$/i;
    (function() {
        var t = u.createElement("input")
          , n = u.createElement("div")
          , i = u.createDocumentFragment();
        if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        r.leadingWhitespace = n.firstChild.nodeType === 3,
        r.tbody = !n.getElementsByTagName("tbody").length,
        r.htmlSerialize = !!n.getElementsByTagName("link").length,
        r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
        t.type = "checkbox",
        t.checked = !0,
        i.appendChild(t),
        r.appendChecked = t.checked,
        n.innerHTML = "<textarea>x<\/textarea>",
        r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
        i.appendChild(n),
        n.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
        r.noCloneEvent = !0,
        n.attachEvent && (n.attachEvent("onclick", function() {
            r.noCloneEvent = !1
        }),
        n.cloneNode(!0).click()),
        r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
    }
    )(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            i = "on" + t,
            (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"),
            r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i
      , oe = /^key/
      , se = /^(?:mouse|pointer|contextmenu)|click/
      , br = /^(?:focusinfocus|focusoutblur)$/
      , kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r,
                r = p.handler,
                f = p.selector),
                r.guid || (r.guid = i.guid++),
                (y = v.events) || (y = v.events = {}),
                (c = v.handle) || (c = v.handle = function(n) {
                    return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
                }
                ,
                c.elem = n),
                t = (t || "").match(h) || [""],
                b = t.length; b--; )
                    (w = kr.exec(t[b]) || [],
                    e = d = w[1],
                    k = (w[2] || "").split(".").sort(),
                    e) && (s = i.event.special[e] || {},
                    e = (f ? s.delegateType : s.bindType) || e,
                    s = i.event.special[e] || {},
                    l = i.extend({
                        type: e,
                        origType: d,
                        data: u,
                        handler: r,
                        guid: r.guid,
                        selector: f,
                        needsContext: f && i.expr.match.needsContext.test(f),
                        namespace: k.join(".")
                    }, p),
                    (a = y[e]) || (a = y[e] = [],
                    a.delegateCount = 0,
                    s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))),
                    s.add && (s.add.call(n, l),
                    l.handler.guid || (l.handler.guid = r.guid)),
                    f ? a.splice(a.delegateCount++, 0, l) : a.push(l),
                    i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""],
                p = t.length; p--; ) {
                    if (s = kr.exec(t[p]) || [],
                    e = k = s[1],
                    w = (s[2] || "").split(".").sort(),
                    !e) {
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType : c.bindType) || e,
                    l = a[e] || [],
                    s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    b = y = l.length; y--; )
                        o = l[y],
                        (f || k === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1),
                        o.selector && l.delegateCount--,
                        c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                    delete a[e])
                }
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = tt.call(t, "type") ? t.type : t, v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((o = h = f = f || u,
            f.nodeType !== 3 && f.nodeType !== 8) && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."),
            s = v.shift(),
            v.sort()),
            a = s.indexOf(":") < 0 && "on" + s,
            t = t[i.expando] ? t : new i.Event(s,typeof t == "object" && t),
            t.isTrigger = e ? 2 : 3,
            t.namespace = v.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = f),
            r = r == null ? [t] : i.makeArray(r, [t]),
            c = i.event.special[s] || {},
            e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s,
                    br.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
                        y.push(o),
                        h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? p : c.bindType || s,
                    l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                    l && l.apply(o, r),
                    l = a && o[a],
                    l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r),
                    t.result === !1 && t.preventDefault());
                if (t.type = s,
                !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = undefined;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [], h = l.call(arguments), c = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (h[0] = n,
            n.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c),
                e = 0; (r = s[e++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = r.elem,
                    o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t,
                        n.data = t.data,
                        f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h),
                        f !== undefined && (n.result = f) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (!n.button || n.type !== "click"))
                for (; r != this; r = r.parentNode || this)
                    if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                        for (u = [],
                        o = 0; o < s; o++)
                            e = t[o],
                            f = e.selector + " ",
                            u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length),
                            u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks : oe.test(r) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u,
                r = e.documentElement,
                i = e.body,
                n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o),
                n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click)
                        return this.click(),
                        !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : it) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            (this.isDefaultPrevented = vt,
            n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            (this.isPropagationStopped = vt,
            n) && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target
                  , t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (si.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })),
                !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0),
                i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if (typeof n == "object") {
                typeof t != "string" && (r = r || t,
                t = undefined);
                for (o in n)
                    this.on(o, t, r, n[o], f);
                return this
            }
            if (r == null && u == null ? (u = t,
            r = t = undefined) : u == null && (typeof t == "string" ? (u = r,
            r = undefined) : (u = r,
            r = t,
            t = undefined)),
            u === !1)
                u = it;
            else if (!u)
                return this;
            return f === 1 && (e = u,
            u = function(n) {
                return i().off(n),
                e.apply(this, arguments)
            }
            ,
            u.guid = e.guid || (e.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if (typeof n == "object") {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t,
            t = undefined),
            r === !1 && (r = it),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , he = / jQuery\d+="(?:null|\d+)"/g
      , tu = new RegExp("<(?:" + nu + ")[\\s/>]","i")
      , hi = /^\s+/
      , iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ru = /<([\w:]+)/
      , uu = /<tbody/i
      , ce = /<|&#?\w+;/
      , le = /<(?:script|style|link)/i
      , ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fu = /^$|\/(?:java|ecma)script/i
      , ve = /^true\/(.*)/
      , ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , s = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    }
      , pe = gr(u)
      , ci = pe.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML,
            ci.removeChild(s = ci.firstChild)),
            (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = f(s),
                h = f(n),
                o = 0; (c = h[o]) != null; ++o)
                    e[o] && be(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n),
                    e = e || f(s),
                    o = 0; (c = h[o]) != null; o++)
                        hu(c, e[o]);
                else
                    hu(n, s);
            return e = f(s, "script"),
            e.length > 0 && li(e, !l && f(n, "script")),
            e = h = c = null,
            s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; y < k; y++)
                if (o = n[y],
                o || o === 0)
                    if (i.type(o) === "object")
                        i.merge(l, o.nodeType ? [o] : o);
                    else if (ce.test(o)) {
                        for (h = h || v.appendChild(t.createElement("div")),
                        p = (ru.exec(o) || ["", ""])[1].toLowerCase(),
                        a = s[p] || s._default,
                        h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2],
                        c = a[0]; c--; )
                            h = h.lastChild;
                        if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])),
                        !r.tbody)
                            for (o = p === "table" && !uu.test(o) ? h.firstChild : a[1] === "<table>" && !uu.test(o) ? h : 0,
                            c = o && o.childNodes.length; c--; )
                                i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                        for (i.merge(l, h.childNodes),
                        h.textContent = ""; h.firstChild; )
                            h.removeChild(h.firstChild);
                        h = v.lastChild
                    } else
                        l.push(t.createTextNode(o));
            for (h && v.removeChild(h),
            r.appendChecked || i.grep(f(l, "input"), we),
            y = 0; o = l[y++]; )
                if ((!e || i.inArray(o, e) === -1) && (b = i.contains(o.ownerDocument, o),
                h = f(v.appendChild(o), "script"),
                b && li(h),
                u))
                    for (c = 0; o = h[c++]; )
                        fu.test(o.type || "") && u.push(o);
            return h = null,
            v
        },
        cleanData: function(n, t) {
            for (var u, s, f, e, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; (u = n[a]) != null; a++)
                if ((t || i.acceptData(u)) && (f = u[h],
                e = f && l[f],
                e)) {
                    if (e.events)
                        for (s in e.events)
                            y[s] ? i.event.remove(u, s) : i.removeEvent(u, s, e.handle);
                    l[f] && (delete l[f],
                    v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null,
                    c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; (r = e[u]) != null; u++)
                t || r.nodeType !== 1 || i.cleanData(f(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++) {
                for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {}
                  , u = 0
                  , e = this.length;
                if (n === undefined)
                    return t.nodeType === 1 ? t.innerHTML.replace(he, "") : undefined;
                if (typeof n == "string" && !le.test(n) && (r.htmlSerialize || !tu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !s[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; u < e; u++)
                            t = this[u] || {},
                            t.nodeType === 1 && (i.cleanData(f(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }),
            n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
            if (y || l > 1 && typeof a == "string" && !r.checkClone && ae.test(a))
                return this.each(function(i) {
                    var r = p.eq(i);
                    y && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this),
            h = s.firstChild,
            s.childNodes.length === 1 && (s = h),
            h)) {
                for (o = i.map(f(s, "script"), ou),
                c = o.length; e < l; e++)
                    u = s,
                    e !== w && (u = i.clone(u, !0, !0),
                    c && i.merge(o, f(u, "script"))),
                    t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument,
                    i.map(o, su),
                    e = 0; e < c; e++)
                        u = o[e],
                        fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {},
    function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (n != null)
                return n;
            n = !1;
            var t, i, r;
            if (i = u.getElementsByTagName("body")[0],
            i && i.style)
                return t = u.createElement("div"),
                r = u.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                i.appendChild(r).appendChild(t),
                typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                t.appendChild(u.createElement("div")).style.width = "5px",
                n = t.offsetWidth !== 3),
                i.removeChild(r),
                n
        }
    }();
    var lu = /^margin/, pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$","i"), k, d, ke = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
    }
    ,
    d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n),
        u = r ? r.getPropertyValue(t) || r[t] : undefined,
        r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
        pt.test(u) && lu.test(t) && (e = f.width,
        o = f.minWidth,
        s = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = u,
        u = r.width,
        f.width = e,
        f.minWidth = o,
        f.maxWidth = s)),
        u === undefined ? u : u + ""
    }
    ) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }
    ,
    d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n),
        r = i ? i[t] : undefined,
        r == null && u && u[t] && (r = u[t]),
        pt.test(r) && !ke.test(t) && (o = u.left,
        f = n.runtimeStyle,
        e = f && f.left,
        e && (f.left = n.currentStyle.left),
        u.left = t === "fontSize" ? "1em" : r,
        r = u.pixelLeft + "px",
        u.left = o,
        e && (f.left = e)),
        r === undefined ? r : r + "" || "auto"
    }
    ),
    function() {
        function c() {
            var i, r, f, t;
            (r = u.getElementsByTagName("body")[0],
            r && r.style) && (i = u.createElement("div"),
            f = u.createElement("div"),
            f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            r.appendChild(f).appendChild(i),
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            o = s = !1,
            h = !0,
            n.getComputedStyle && (o = (n.getComputedStyle(i, null) || {}).top !== "1%",
            s = (n.getComputedStyle(i, null) || {
                width: "4px"
            }).width === "4px",
            t = i.appendChild(u.createElement("div")),
            t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            i.style.width = "1px",
            h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight),
            i.removeChild(t)),
            i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            t = i.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            e = t[0].offsetHeight === 0,
            e && (t[0].style.display = "",
            t[1].style.display = "none",
            e = t[0].offsetHeight === 0),
            r.removeChild(f))
        }
        var f, t, l, o, s, e, h;
        (f = u.createElement("div"),
        f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        l = f.getElementsByTagName("a")[0],
        t = l && l.style,
        t) && (t.cssText = "float:left;opacity:.5",
        r.opacity = t.opacity === "0.5",
        r.cssFloat = !!t.cssFloat,
        f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        r.clearCloneStyle = f.style.backgroundClip === "content-box",
        r.boxSizing = t.boxSizing === "" || t.MozBoxSizing === "" || t.WebkitBoxSizing === "",
        i.extend(r, {
            reliableHiddenOffsets: function() {
                return e == null && c(),
                e
            },
            boxSizingReliable: function() {
                return s == null && c(),
                s
            },
            pixelPosition: function() {
                return o == null && c(),
                o
            },
            reliableMarginRight: function() {
                return h == null && c(),
                h
            }
        }))
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
    ;
    var vi = /alpha\([^)]*\)/i
      , de = /opacity\s*=\s*([^)]*)/
      , ge = /^(none|table(?!-c[ea]).+)/
      , no = new RegExp("^(" + at + ")(.*)$","i")
      , to = new RegExp("^([+-])=(" + at + ")","i")
      , io = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , vu = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return i === "" ? "1" : i
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
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, h, e, s = i.camelCase(t), c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)),
                e = i.cssHooks[t] || i.cssHooks[s],
                u !== undefined) {
                    if (h = typeof u,
                    h === "string" && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)),
                    h = "number"),
                    u == null || u !== u)
                        return;
                    if (h !== "number" || i.cssNumber[s] || (u += "px"),
                    r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"),
                    !e || !("set"in e) || (u = e.set(n, u, f)) !== undefined)
                        try {
                            c[t] = u
                        } catch (l) {}
                } else
                    return e && "get"in e && (o = e.get(n, !1, f)) !== undefined ? o : c[t]
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return (t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)),
            e = i.cssHooks[t] || i.cssHooks[o],
            e && "get"in e && (f = e.get(n, !0, r)),
            f === undefined && (f = d(n, t, u)),
            f === "normal" && t in vu && (f = vu[t]),
            r === "" || r) ? (s = parseFloat(f),
            r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return ge.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, io, function() {
                        return du(n, t, u)
                    }) : du(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return bu(n, u, f ? ku(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            (t >= 1 || t === "") && i.trim(f.replace(vi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"),
            t === "" || u && !u.filter)) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
        if (t)
            return i.swap(n, {
                display: "inline-block"
            }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = k(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return wu(this, !0)
        },
        hide: function() {
            return wu(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : e.propHooks._default.set(this),
            this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""),
                !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, ro = /^(?:toggle|show|hide)$/, gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$","i"), uo = /queueHooks$/, bt = [fo], st = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , u = gu.exec(t)
              , e = u && u[3] || (i.cssNumber[n] ? "" : "px")
              , r = (i.cssNumber[n] || e !== "px" && +s) && gu.exec(i.css(f.elem, n))
              , o = 1
              , h = 20;
            if (r && r[3] !== e) {
                e = e || r[3];
                u = u || [];
                r = +s || 1;
                do
                    o = o || ".5",
                    r = r / o,
                    i.style(f.elem, n, r + e);
                while (o !== (o = f.cur() / s) && o !== 1 && --h)
            }
            return u && (r = f.start = +r || +s || 0,
            f.unit = e,
            f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++)
                r = n[u],
                st[r] = st[r] || [],
                st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? bt.unshift(n) : bt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (u.queue == null || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = rf(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return typeof n != "string" && (r = t,
            t = n,
            n = undefined),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = n != null && n + "queueHooks"
                  , e = i.timers
                  , f = i._data(this);
                if (t)
                    f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f)
                        f[t] && f[t].stop && uo.test(t) && u(f[t]);
                for (t = e.length; t--; )
                    e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r),
                    o = !1,
                    e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: kt("show"),
        slideUp: kt("hide"),
        slideToggle: kt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers, t = 0;
        for (rt = i.now(); t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = undefined
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        clearInterval(wt);
        wt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n,
        t = t || "fx",
        this.queue(t, function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var n, t, f, i, e;
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        f = u.createElement("select");
        e = f.appendChild(u.createElement("option"));
        n = t.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = t.className !== "t";
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = i.getAttribute("href") === "/a";
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = n.getAttribute("value") === "";
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = n.value === "t"
    }();
    uf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
            this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n,
                u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
            t && "get"in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value,
            typeof r == "string" ? r.replace(uf, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
                        if (t = s[e],
                        (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            f)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--; )
                        if (r = u[e],
                        i.inArray(i.valHooks.option.get(r), o) >= 0)
                            try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return f || (n.selectedIndex = -1),
                    u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        }
        )
    });
    var ut, ff, v = i.expr.attrHandle, yi = /^(?:checked|selected)$/i, g = r.getSetAttribute, dt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute === o)
                    return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(),
                u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)),
                r !== undefined)
                    if (r === null)
                        i.removeAttr(n, t);
                    else
                        return u && "set"in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""),
                        r);
                else
                    return u && "get"in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t),
                    f == null ? undefined : f)
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(h);
            if (f && n.nodeType === 1)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t),
                        u && (n.value = u),
                        t
                    }
                }
            }
        }
    });
    ff = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t],
            v[t] = u,
            u = r(n, t, i) != null ? t.toLowerCase() : null,
            v[t] = f),
            u
        }
        : function(n, t, r) {
            if (!r)
                return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    dt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            if (i.nodeName(n, "input"))
                n.defaultValue = t;
            else
                return ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
            r.value = t += "",
            i === "value" || t === n.getAttribute(i) ? t : void 0
        }
    },
    v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i)
            return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified)
                return i.value
        },
        set: ut.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, t === "" ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if (i === "")
                    return n.setAttribute(t, "auto"),
                    i
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || undefined
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    ef = /^(?:input|select|textarea|button|object)$/i;
    of = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = undefined;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2)
                return o = e !== 1 || !i.isXMLDoc(n),
                o && (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                r !== undefined ? u && "set"in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get"in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ef.test(n.nodeName) || of.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = typeof n == "string" && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (l)
                for (o = (n || "").match(h) || []; e < c; e++)
                    if (t = this[e],
                    r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : " "),
                    r) {
                        for (s = 0; u = o[s++]; )
                            r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0, c = this.length, l = arguments.length === 0 || typeof n == "string" && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (l)
                for (o = (n || "").match(h) || []; e < c; e++)
                    if (t = this[e],
                    r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : ""),
                    r) {
                        for (s = 0; u = o[s++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string")
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now()
      , wi = /\?/
      , oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse)
            return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(oo, function(n, t, i, u) {
            return (f && t && (r = 0),
            r === 0) ? n : (f = i || t,
            r += !u - !i,
            "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }
    ;
    i.parseXML = function(t) {
        var r, u;
        if (!t || typeof t != "string")
            return null;
        try {
            n.DOMParser ? (u = new DOMParser,
            r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(t))
        } catch (f) {
            r = undefined
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var nt, y, so = /#.*$/, sf = /([?&])_=[^&]*/, ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, co = /^(?:GET|HEAD)$/, lo = /^\/\//, hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, cf = {}, bi = {}, lf = "*/".concat("*");
    try {
        y = location.href
    } catch (ns) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = hf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lf,
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
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                e !== 2 && (e = 2,
                k && clearTimeout(k),
                l = undefined,
                b = h || "",
                u.readyState = n > 0 ? 4 : 0,
                v = n >= 200 && n < 300 || n === 304,
                s && (y = ao(r, u, s)),
                y = vo(r, y, u, v),
                v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"),
                w && (i.lastModified[f] = w),
                w = u.getResponseHeader("etag"),
                w && (i.etag[f] = w)),
                n === 204 || r.type === "HEAD" ? c = "nocontent" : n === 304 ? c = "notmodified" : (c = y.state,
                it = y.data,
                nt = y.error,
                v = !nt)) : (nt = c,
                (n || !c) && (c = "error",
                n < 0 && (n = 0))),
                u.status = n,
                u.statusText = (t || c) + "",
                v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]),
                u.statusCode(p),
                p = undefined,
                a && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]),
                tt.fireWith(o, [u, c]),
                a && (d.trigger("ajaxComplete", [u, r]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            typeof n == "object" && (t = n,
            n = undefined);
            t = t || {};
            var s, c, f, b, k, a, l, v, r = i.ajaxSetup({}, t), o = r.context || r, d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, g = i.Deferred(), tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (e === 2) {
                        if (!v)
                            for (v = {}; t = ho.exec(b); )
                                v[t[1].toLowerCase()] = t[2];
                        t = v[n.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? b : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return e || (n = rt[i] = rt[i] || n,
                    it[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return e || (r.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (e < 2)
                            for (t in n)
                                p[t] = [p[t], n[t]];
                        else
                            u.always(n[u.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ut;
                    return l && l.abort(t),
                    w(0, t),
                    this
                }
            };
            if (g.promise(u).complete = tt.add,
            u.success = u.done,
            u.error = u.fail,
            r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"),
            r.type = t.method || t.type || r.method || r.type,
            r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""],
            r.crossDomain == null && (s = hf.exec(r.url.toLowerCase()),
            r.crossDomain = !!(s && (s[1] !== nt[1] || s[2] !== nt[2] || (s[3] || (s[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))),
            r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)),
            vf(cf, r, t, u),
            e === 2)
                return u;
            a = i.event && r.global;
            a && i.active++ == 0 && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !co.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data,
            delete r.data),
            r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]),
            i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + lf + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers)
                u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2))
                return u.abort();
            ut = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                u[c](r[c]);
            if (l = vf(bi, r, t, u),
            l) {
                u.readyState = 1;
                a && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    l.send(it, w)
                } catch (ft) {
                    if (e < 2)
                        w(-1, ft);
                    else
                        throw ft;
                }
            } else
                w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u,
            u = r,
            r = undefined),
            i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ;
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
    }
    ;
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ;
    var yo = /%20/g
      , po = /\[\]$/
      , yf = /\r?\n/g
      , wo = /^(?:submit|button|image|reset|file)$/i
      , bo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [], f = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                di(r, n[r], t, f);
        return u.join("&").replace(yo, "+")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(yf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
    }
    : pf;
    var ko = 0
      , ni = {}
      , ht = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in ni)
            ni[n](undefined, !0)
    }),
    r.cors = !!ht && "withCredentials"in ht,
    ht = r.ajax = !!ht,
    ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(), o = ++ko;
                    if (f.open(n.type, n.url, n.async, n.username, n.password),
                    n.xhrFields)
                        for (e in n.xhrFields)
                            f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r)
                        r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || f.readyState === 4))
                            if (delete ni[o],
                            t = undefined,
                            f.onreadystatechange = i.noop,
                            e)
                                f.readyState !== 4 && f.abort();
                            else {
                                h = {};
                                s = f.status;
                                typeof f.responseText == "string" && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    }
                    ;
                    n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        i || f(200, "success"))
                    }
                    ;
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    if (t)
                        t.onload(undefined, !0)
                }
            }
        }
    }),
    gi = [],
    ti = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp")
            return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            t.converters["script json"] = function() {
                return e || i.error(f + " was not called"),
                e[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[f],
            n[f] = function() {
                e = arguments
            }
            ,
            u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback,
                gi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = undefined
            }),
            "script"
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || typeof n != "string")
            return null;
        typeof t == "boolean" && (r = t,
        t = !1);
        t = t || u;
        var f = er.exec(n)
          , e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
        e && e.length && i(e).remove(),
        i.merge([], f.childNodes))
    }
    ,
    nr = i.fn.load,
    i.fn.load = function(n, t, r) {
        if (typeof n != "string" && nr)
            return nr.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e, n.length)),
        n = n.slice(0, e)),
        i.isFunction(t) ? (r = t,
        t = undefined) : t && typeof t == "object" && (s = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    tr = n.document.documentElement,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(),
            h = e.top,
            o = e.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using"in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return n === undefined ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var t, f, u = {
                top: 0,
                left: 0
            }, r = this[0], e = r && r.ownerDocument;
            if (e)
                return (t = e.documentElement,
                !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()),
                f = wf(e),
                {
                    top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                })
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n || tr
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this, function(n, u, f) {
                var e = wf(n);
                if (f === undefined)
                    return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
                e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
            }, n, u, arguments.length, null)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
            if (r)
                return r = d(n, t),
                pt.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || typeof u != "boolean")
                  , o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement,
                    Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }),
    bf = n.jQuery,
    kf = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = kf),
        t && n.jQuery === i && (n.jQuery = bf),
        i
    }
    ,
    typeof t === o && (n.jQuery = n.$ = i),
    i
}),
function(n) {
    n.flexslider = function(t, i) {
        var r = n(t);
        r.vars = n.extend({}, n.flexslider.defaults, i);
        var f = r.vars.namespace, v = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, y = ("ontouchstart"in window || v || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch, a = "click touchend MSPointerUp keyup", s = "", p, h = r.vars.direction === "vertical", o = r.vars.reverse, e = r.vars.itemWidth > 0, c = r.vars.animation === "fade", l = r.vars.asNavFor !== "", u = {}, w = !0;
        u = {
            init: function() {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = n(r.vars.selector, r);
                r.container = n(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = n(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = h ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !c && r.vars.useCSS && function() {
                    var i = document.createElement("div"), n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], t;
                    for (t in n)
                        if (i.style[n[t]] !== undefined)
                            return r.pfx = n[t].replace("Perspective", "").toLowerCase(),
                            r.prop = "-" + r.pfx + "-transform",
                            !0;
                    return !1
                }();
                r.ensureAnimationEnd = "";
                r.vars.controlsContainer !== "" && (r.controlsContainer = n(r.vars.controlsContainer).length > 0 && n(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = n(r.vars.manualControls).length > 0 && n(r.vars.manualControls));
                r.vars.customDirectionNav !== "" && (r.customDirectionNav = n(r.vars.customDirectionNav).length === 2 && n(r.vars.customDirectionNav));
                r.vars.randomize && (r.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }),
                r.container.empty().append(r.slides));
                r.doMath();
                r.setup("init");
                r.vars.controlNav && u.controlNav.setup();
                r.vars.directionNav && u.directionNav.setup();
                r.vars.keyboard && (n(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && n(document).bind("keyup", function(n) {
                    var t = n.keyCode, i;
                    r.animating || t !== 39 && t !== 37 || (i = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1,
                    r.flexAnimate(i, r.vars.pauseOnAction))
                });
                r.vars.mousewheel && r.bind("mousewheel", function(n, t) {
                    n.preventDefault();
                    var i = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(i, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && u.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && u.pauseInvisible.init();
                r.vars.slideshow && (r.vars.pauseOnHover && r.hover(function() {
                    r.manualPlay || r.manualPause || r.pause()
                }, function() {
                    r.manualPause || r.manualPlay || r.stopped || r.play()
                }),
                r.vars.pauseInvisible && u.pauseInvisible.isHidden() || (r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()));
                l && u.asNav.setup();
                y && r.vars.touch && u.touch();
                (!c || c && r.vars.smoothHeight) && n(window).bind("resize orientationchange focus", u.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function() {
                    r.vars.start(r)
                }, 200)
            },
            asNav: {
                setup: function() {
                    if (r.asNav = !0,
                    r.animatingTo = Math.floor(r.currentSlide / r.move),
                    r.currentItem = r.currentSlide,
                    r.slides.removeClass(f + "active-slide").eq(r.currentItem).addClass(f + "active-slide"),
                    v)
                        t._slider = r,
                        r.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown", function(n) {
                                n.preventDefault();
                                n.currentTarget._gesture && n.currentTarget._gesture.addPointer(n.pointerId)
                            }, !1);
                            t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var i = n(this)
                                  , u = i.index();
                                n(r.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (r.direction = r.currentItem < u ? "next" : "prev",
                                r.flexAnimate(u, r.vars.pauseOnAction, !1, !0, !0))
                            })
                        });
                    else
                        r.slides.on(a, function(t) {
                            t.preventDefault();
                            var i = n(this)
                              , u = i.index()
                              , e = i.offset().left - n(r).scrollLeft();
                            e <= 0 && i.hasClass(f + "active-slide") ? r.flexAnimate(r.getTarget("prev"), !0) : n(r.vars.asNavFor).data("flexslider").animating || i.hasClass(f + "active-slide") || (r.direction = r.currentItem < u ? "next" : "prev",
                            r.flexAnimate(u, r.vars.pauseOnAction, !1, !0, !0))
                        })
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? u.controlNav.setupManual() : u.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var c = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging", h = 1, e, o, t, i;
                    if (r.controlNavScaffold = n('<ol class="' + f + "control-nav " + f + c + '"><\/ol>'),
                    r.pagingCount > 1)
                        for (t = 0; t < r.pagingCount; t++)
                            o = r.slides.eq(t),
                            e = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + h + "<\/a>",
                            "thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions && (i = o.attr("data-thumbcaption"),
                            "" !== i && undefined !== i && (e += '<span class="' + f + 'caption">' + i + "<\/span>")),
                            r.controlNavScaffold.append("<li>" + e + "<\/li>"),
                            h++;
                    r.controlsContainer ? n(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    u.controlNav.set();
                    u.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", a, function(t) {
                        if (t.preventDefault(),
                        s === "" || s === t.type) {
                            var i = n(this)
                              , e = r.controlNav.index(i);
                            i.hasClass(f + "active") || (r.direction = e > r.currentSlide ? "next" : "prev",
                            r.flexAnimate(e, r.vars.pauseOnAction))
                        }
                        s === "" && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    u.controlNav.active();
                    r.controlNav.bind(a, function(t) {
                        if (t.preventDefault(),
                        s === "" || s === t.type) {
                            var i = n(this)
                              , e = r.controlNav.index(i);
                            i.hasClass(f + "active") || (r.direction = e > r.currentSlide ? "next" : "prev",
                            r.flexAnimate(e, r.vars.pauseOnAction))
                        }
                        s === "" && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = n("." + f + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function() {
                    r.controlNav.removeClass(f + "active").eq(r.animatingTo).addClass(f + "active")
                },
                update: function(t, i) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(n("<li><a>" + r.count + "<\/a><\/li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(i).closest("li").remove();
                    u.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(i, t) : u.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = n('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + r.vars.prevText + '<\/a><\/li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + r.vars.nextText + "<\/a><\/li><\/ul>");
                    r.customDirectionNav ? r.directionNav = r.customDirectionNav : r.controlsContainer ? (n(r.controlsContainer).append(t),
                    r.directionNav = n("." + f + "direction-nav li a", r.controlsContainer)) : (r.append(t),
                    r.directionNav = n("." + f + "direction-nav li a", r));
                    u.directionNav.update();
                    r.directionNav.bind(a, function(t) {
                        t.preventDefault();
                        var i;
                        (s === "" || s === t.type) && (i = n(this).hasClass(f + "next") ? r.getTarget("next") : r.getTarget("prev"),
                        r.flexAnimate(i, r.vars.pauseOnAction));
                        s === "" && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var n = f + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(n).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(n).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(n).filter("." + f + "prev").addClass(n).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(n).filter("." + f + "next").addClass(n).attr("tabindex", "-1") : r.directionNav.removeClass(n).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = n('<div class="' + f + 'pauseplay"><a><\/a><\/div>');
                    r.controlsContainer ? (r.controlsContainer.append(t),
                    r.pausePlay = n("." + f + "pauseplay a", r.controlsContainer)) : (r.append(t),
                    r.pausePlay = n("." + f + "pauseplay a", r));
                    u.pausePlay.update(r.vars.slideshow ? f + "pause" : f + "play");
                    r.pausePlay.bind(a, function(t) {
                        t.preventDefault();
                        (s === "" || s === t.type) && (n(this).hasClass(f + "pause") ? (r.manualPause = !0,
                        r.manualPlay = !1,
                        r.pause()) : (r.manualPause = !1,
                        r.manualPlay = !0,
                        r.play()));
                        s === "" && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                update: function(n) {
                    n === "play" ? r.pausePlay.removeClass(f + "pause").addClass(f + "play").html(r.vars.playText) : r.pausePlay.removeClass(f + "play").addClass(f + "pause").html(r.vars.pauseText)
                }
            },
            touch: function() {
                var p, w, f, u, n, s, d, b, k, l = !1, a = 0, y = 0, i = 0;
                if (v) {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", g, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", nt, !1);
                    t.addEventListener("MSGestureEnd", tt, !1);
                    function g(n) {
                        n.stopPropagation();
                        r.animating ? n.preventDefault() : (r.pause(),
                        t._gesture.addPointer(n.pointerId),
                        i = 0,
                        u = h ? r.h : r.w,
                        s = Number(new Date),
                        f = e && o && r.animatingTo === r.last ? 0 : e && o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : e && r.currentSlide === r.last ? r.limit : e ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : o ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u)
                    }
                    function nt(r) {
                        var e, o, a;
                        if (r.stopPropagation(),
                        e = r.target._slider,
                        e) {
                            if (o = -r.translationX,
                            a = -r.translationY,
                            i = i + (h ? a : o),
                            n = i,
                            l = h ? Math.abs(i) < Math.abs(-o) : Math.abs(i) < Math.abs(-a),
                            r.detail === r.MSGESTURE_FLAG_INERTIA) {
                                setImmediate(function() {
                                    t._gesture.stop()
                                });
                                return
                            }
                            (!l || Number(new Date) - s > 500) && (r.preventDefault(),
                            !c && e.transitions && (e.vars.animationLoop || (n = i / (e.currentSlide === 0 && i < 0 || e.currentSlide === e.last && i > 0 ? Math.abs(i) / u + 2 : 1)),
                            e.setProps(f + n, "setTouch")))
                        }
                    }
                    function tt(t) {
                        var r, e, h;
                        (t.stopPropagation(),
                        r = t.target._slider,
                        r) && (r.animatingTo !== r.currentSlide || l || n === null || (e = o ? -n : n,
                        h = e > 0 ? r.getTarget("next") : r.getTarget("prev"),
                        r.canAdvance(h) && (Number(new Date) - s < 550 && Math.abs(e) > 50 || Math.abs(e) > u / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : c || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)),
                        p = null,
                        w = null,
                        n = null,
                        f = null,
                        i = 0)
                    }
                } else
                    d = function(n) {
                        r.animating ? n.preventDefault() : (window.navigator.msPointerEnabled || n.touches.length === 1) && (r.vars.pauseOnAction && r.pause(),
                        u = h ? r.h : r.w,
                        s = Number(new Date),
                        a = n.touches[0].pageX,
                        y = n.touches[0].pageY,
                        f = e && o && r.animatingTo === r.last ? 0 : e && o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : e && r.currentSlide === r.last ? r.limit : e ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : o ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u,
                        p = h ? y : a,
                        w = h ? a : y,
                        t.addEventListener("touchmove", b, !1),
                        t.addEventListener("touchend", k, !1))
                    }
                    ,
                    b = function(t) {
                        a = t.touches[0].pageX;
                        y = t.touches[0].pageY;
                        n = h ? p - y : p - a;
                        l = h ? Math.abs(n) < Math.abs(a - w) : Math.abs(n) < Math.abs(y - w);
                        (!l || Number(new Date) - s > 500) && (t.preventDefault(),
                        !c && r.transitions && (r.vars.animationLoop || (n = n / (r.currentSlide === 0 && n < 0 || r.currentSlide === r.last && n > 0 ? Math.abs(n) / u + 2 : 1)),
                        r.setProps(f + n, "setTouch")))
                    }
                    ,
                    k = function() {
                        if (t.removeEventListener("touchmove", b, !1),
                        r.animatingTo === r.currentSlide && !l && !(n === null)) {
                            var i = o ? -n : n
                              , e = i > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(e) && (Number(new Date) - s < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? r.flexAnimate(e, r.vars.pauseOnAction) : c || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", k, !1);
                        p = null;
                        w = null;
                        n = null;
                        f = null
                    }
                    ,
                    t.addEventListener("touchstart", d, !1)
            },
            resize: function() {
                !r.animating && r.is(":visible") && (e || r.doMath(),
                c ? u.smoothHeight() : e ? (r.slides.width(r.computedW),
                r.update(r.pagingCount),
                r.setProps()) : h ? (r.viewport.height(r.h),
                r.setProps(r.h, "setTotal")) : (r.vars.smoothHeight && u.smoothHeight(),
                r.newSlides.width(r.computedW),
                r.setProps(r.computedW, "setTotal")))
            },
            smoothHeight: function(n) {
                if (!h || c) {
                    var t = c ? r : r.viewport;
                    n ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, n) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var i = n(r.vars.sync).data("flexslider")
                  , u = r.animatingTo;
                switch (t) {
                case "animate":
                    i.flexAnimate(u, r.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    i.playing || i.asNav || i.play();
                    break;
                case "pause":
                    i.pause()
                }
            },
            uniqueID: function(t) {
                return t.filter("[id]").add(t.find("[id]")).each(function() {
                    var t = n(this);
                    t.attr("id", t.attr("id") + "_clone")
                }),
                t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var n = u.pauseInvisible.getHiddenProp(), t;
                    n && (t = n.replace(/[H|h]idden/, "") + "visibilitychange",
                    document.addEventListener(t, function() {
                        u.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                    }))
                },
                isHidden: function() {
                    var n = u.pauseInvisible.getHiddenProp();
                    return n ? document[n] : !1
                },
                getHiddenProp: function() {
                    var t = ["webkit", "moz", "ms", "o"], n;
                    if ("hidden"in document)
                        return "hidden";
                    for (n = 0; n < t.length; n++)
                        if (t[n] + "Hidden"in document)
                            return t[n] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(p);
                p = setTimeout(function() {
                    s = ""
                }, 3e3)
            }
        };
        r.flexAnimate = function(t, i, s, a, v) {
            var w, p, d, b, k;
            if (r.vars.animationLoop || t === r.currentSlide || (r.direction = t > r.currentSlide ? "next" : "prev"),
            l && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev"),
            !r.animating && (r.canAdvance(t, v) || s) && r.is(":visible")) {
                if (l && a)
                    if (w = n(r.vars.asNavFor).data("flexslider"),
                    r.atEnd = t === 0 || t === r.count - 1,
                    w.flexAnimate(t, !0, !1, !0, v),
                    r.direction = r.currentItem < t ? "next" : "prev",
                    w.direction = r.direction,
                    Math.ceil((t + 1) / r.visible) - 1 !== r.currentSlide && t !== 0)
                        r.currentItem = t,
                        r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide"),
                        t = Math.floor(t / r.visible);
                    else
                        return r.currentItem = t,
                        r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide"),
                        !1;
                r.animating = !0;
                r.animatingTo = t;
                i && r.pause();
                r.vars.before(r);
                r.syncExists && !v && u.sync("animate");
                r.vars.controlNav && u.controlNav.active();
                e || r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && u.directionNav.update();
                t === r.last && (r.vars.end(r),
                r.vars.animationLoop || r.pause());
                c ? y ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }),
                r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }),
                r.wrapup(p)) : (r.slides.eq(r.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, r.vars.animationSpeed, r.vars.easing),
                r.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing, r.wrapup)) : (p = h ? r.slides.filter(":first").height() : r.computedW,
                e ? (d = r.vars.itemMargin,
                k = (r.itemW + d) * r.move * r.animatingTo,
                b = k > r.limit && r.visible !== 1 ? r.limit : k) : b = r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? o ? (r.count + r.cloneOffset) * p : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? o ? 0 : (r.count + 1) * p : o ? (r.count - 1 - t + r.cloneOffset) * p : (t + r.cloneOffset) * p,
                r.setProps(b, "", r.vars.animationSpeed),
                r.transitions ? (r.vars.animationLoop && r.atEnd || (r.animating = !1,
                r.currentSlide = r.animatingTo),
                r.container.unbind("webkitTransitionEnd transitionend"),
                r.container.bind("webkitTransitionEnd transitionend", function() {
                    clearTimeout(r.ensureAnimationEnd);
                    r.wrapup(p)
                }),
                clearTimeout(r.ensureAnimationEnd),
                r.ensureAnimationEnd = setTimeout(function() {
                    r.wrapup(p)
                }, r.vars.animationSpeed + 100)) : r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
                    r.wrapup(p)
                }));
                r.vars.smoothHeight && u.smoothHeight(r.vars.animationSpeed)
            }
        }
        ;
        r.wrapup = function(n) {
            c || e || (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(n, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(n, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        }
        ;
        r.animateSlides = function() {
            !r.animating && w && r.flexAnimate(r.getTarget("next"))
        }
        ;
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && u.pausePlay.update("play");
            r.syncExists && u.sync("pause")
        }
        ;
        r.play = function() {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && u.pausePlay.update("pause");
            r.syncExists && u.sync("play")
        }
        ;
        r.stop = function() {
            r.pause();
            r.stopped = !0
        }
        ;
        r.canAdvance = function(n, t) {
            var i = l ? r.pagingCount - 1 : r.last;
            return t ? !0 : l && r.currentItem === r.count - 1 && n === 0 && r.direction === "prev" ? !0 : l && r.currentItem === 0 && n === r.pagingCount - 1 && r.direction !== "next" ? !1 : n === r.currentSlide && !l ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && n === i && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === i && n === 0 && r.direction === "next" ? !1 : !0
        }
        ;
        r.getTarget = function(n) {
            return r.direction = n,
            n === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        }
        ;
        r.setProps = function(n, t, i) {
            var u = function() {
                var i = n ? n : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo
                  , u = function() {
                    if (e)
                        return t === "setTouch" ? n : o && r.animatingTo === r.last ? 0 : o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : i;
                    switch (t) {
                    case "setTotal":
                        return o ? (r.count - 1 - r.currentSlide + r.cloneOffset) * n : (r.currentSlide + r.cloneOffset) * n;
                    case "setTouch":
                        return o ? n : n;
                    case "jumpEnd":
                        return o ? n : r.count * n;
                    case "jumpStart":
                        return o ? r.count * n : n;
                    default:
                        return n
                    }
                }();
                return u * -1 + "px"
            }();
            r.transitions && (u = h ? "translate3d(0," + u + ",0)" : "translate3d(" + u + ",0,0)",
            i = i !== undefined ? i / 1e3 + "s" : "0s",
            r.container.css("-" + r.pfx + "-transition-duration", i),
            r.container.css("transition-duration", i));
            r.args[r.prop] = u;
            (r.transitions || i === undefined) && r.container.css(r.args);
            r.container.css("transform", u)
        }
        ;
        r.setup = function(t) {
            if (c)
                r.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }),
                t === "init" && (y ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.vars.fadeFirstSlide == !1 ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing)),
                r.vars.smoothHeight && u.smoothHeight();
            else {
                var i, s;
                t === "init" && (r.viewport = n('<div class="' + f + 'viewport"><\/div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container),
                r.cloneCount = 0,
                r.cloneOffset = 0,
                o && (s = n.makeArray(r.slides).reverse(),
                r.slides = n(s),
                r.container.empty().append(r.slides)));
                r.vars.animationLoop && !e && (r.cloneCount = 2,
                r.cloneOffset = 1,
                t !== "init" && r.container.find(".clone").remove(),
                r.container.append(u.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(u.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden", "true")));
                r.newSlides = n(r.vars.selector, r);
                i = o ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                h && !e ? (r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%"),
                setTimeout(function() {
                    r.newSlides.css({
                        display: "block"
                    });
                    r.doMath();
                    r.viewport.height(r.h);
                    r.setProps(i * r.h, "init")
                }, t === "init" ? 100 : 0)) : (r.container.width((r.count + r.cloneCount) * 200 + "%"),
                r.setProps(i * r.computedW, "init"),
                setTimeout(function() {
                    r.doMath();
                    r.newSlides.css({
                        width: r.computedW,
                        float: "left",
                        display: "block"
                    });
                    r.vars.smoothHeight && u.smoothHeight()
                }, t === "init" ? 100 : 0))
            }
            e || r.slides.removeClass(f + "active-slide").eq(r.currentSlide).addClass(f + "active-slide");
            r.vars.init(r)
        }
        ;
        r.doMath = function() {
            var u = r.slides.first()
              , n = r.vars.itemMargin
              , t = r.vars.minItems
              , i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = u.height();
            r.boxPadding = 0;
            e ? (r.itemT = r.vars.itemWidth + n,
            r.minW = t ? t * r.itemT : r.w,
            r.maxW = i ? i * r.itemT - n : r.w,
            r.itemW = r.minW > r.w ? (r.w - n * (t - 1)) / t : r.maxW < r.w ? (r.w - n * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth,
            r.visible = Math.floor(r.w / r.itemW),
            r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible,
            r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1),
            r.last = r.pagingCount - 1,
            r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + n * (r.count - 1) : (r.itemW + n) * r.count - r.w - n) : (r.itemW = r.w,
            r.pagingCount = r.count,
            r.last = r.count - 1);
            r.computedW = r.itemW - r.boxPadding
        }
        ;
        r.update = function(n, t) {
            r.doMath();
            e || (n < r.currentSlide ? r.currentSlide += 1 : n <= r.currentSlide && n !== 0 && (r.currentSlide -= 1),
            r.animatingTo = r.currentSlide);
            r.vars.controlNav && !r.manualControls && (t === "add" && !e || r.pagingCount > r.controlNav.length ? u.controlNav.update("add") : (t === "remove" && !e || r.pagingCount < r.controlNav.length) && (e && r.currentSlide > r.last && (r.currentSlide -= 1,
            r.animatingTo -= 1),
            u.controlNav.update("remove", r.last)));
            r.vars.directionNav && u.directionNav.update()
        }
        ;
        r.addSlide = function(t, i) {
            var u = n(t);
            r.count += 1;
            r.last = r.count - 1;
            h && o ? i !== undefined ? r.slides.eq(r.count - i).after(u) : r.container.prepend(u) : i !== undefined ? r.slides.eq(i).before(u) : r.container.append(u);
            r.update(i, "add");
            r.slides = n(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        }
        ;
        r.removeSlide = function(t) {
            var i = isNaN(t) ? r.slides.index(n(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? n(t, r.slides).remove() : h && o ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(i, "remove");
            r.slides = n(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        }
        ;
        u.init()
    }
    ;
    n(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    });
    n.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 100,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    };
    n.fn.flexslider = function(t) {
        if (t === undefined && (t = {}),
        typeof t == "object")
            return this.each(function() {
                var i = n(this)
                  , u = t.selector ? t.selector : ".slides > li"
                  , r = i.find(u);
                r.length === 1 && t.allowOneSlide === !0 || r.length === 0 ? t.start && t.start(i) : i.data("flexslider") === undefined && new n.flexslider(this,t)
            });
        var i = n(this).data("flexslider");
        switch (t) {
        case "play":
            i.play();
            break;
        case "pause":
            i.pause();
            break;
        case "stop":
            i.stop();
            break;
        case "next":
            i.flexAnimate(i.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            i.flexAnimate(i.getTarget("prev"), !0);
            break;
        default:
            typeof t == "number" && i.flexAnimate(t, !0)
        }
    }
}($)
