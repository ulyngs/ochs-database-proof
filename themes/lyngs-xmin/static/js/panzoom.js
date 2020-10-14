!(function(Q) {
    var U = window.webpackHotUpdate
    window.webpackHotUpdate = function(Q, F) {
        !(function(Q, U) {
            if (!S[Q] || !C[Q])
                return
            for (var F in ((C[Q] = !1), U))
                Object.prototype.hasOwnProperty.call(U, F) && (d[F] = U[F])
            0 == --a && 0 === L && R()
        })(Q, F),
        U && U(Q, F)
    }
    var F,
        B = !0,
        n = 'b410691528cd4b45e913',
        s = {},
        e = [],
        t = []
    function l(Q) {
        var U = N[Q]
        if (!U)
            return m
        var B = function(B) {
                return (
                U.hot.active
                ? (N[B] ? -1 === N[B].parents.indexOf(Q) && N[B].parents.push(Q) : ((e = [Q]), (F = B)),
                -1 === U.children.indexOf(B) && U.children.push(B))
                : (console.warn('[HMR] unexpected require(' + B + ') from disposed module ' + Q),
                (e = [])),
                m(B)
                )
            },
            n = function(Q) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return m[Q]
                    },
                    set: function(U) {
                        m[Q] = U
                    }
                }
            }
        for (var s in m)
            Object.prototype.hasOwnProperty.call(m, s) &&
            'e' !== s &&
            't' !== s &&
            Object.defineProperty(B, s, n(s))
        return (
        (B.e = function(Q) {
            return (
            'ready' === g && i('prepare'),
            L++,
            m.e(Q).then(U, function(Q) {
                throw (U(), Q)
            })
            )
            function U() {
                L--, 'prepare' === g && (o[Q] || y(Q), 0 === L && 0 === a && R())
            }
        }),
        (B.t = function(Q, U) {
            return 1 & U && (Q = B(Q)), m.t(Q, -2 & U)
        }),
        B
        )
    }
    function r(U) {
        var B = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _selfInvalidated: !1,
            _disposeHandlers: [],
            _main: F !== U,
            active: !0,
            accept: function(Q, U) {
                if (void 0 === Q)
                    B._selfAccepted = !0
                else if ('function' == typeof Q)
                    B._selfAccepted = Q
                else if ('object' == typeof Q)
                    for (var F = 0; F < Q.length; F++)
                        B._acceptedDependencies[Q[F]] = U || function() {}
                else
                    B._acceptedDependencies[Q] = U || function() {}
            },
            decline: function(Q) {
                if (void 0 === Q)
                    B._selfDeclined = !0
                else if ('object' == typeof Q)
                    for (var U = 0; U < Q.length; U++)
                        B._declinedDependencies[Q[U]] = !0
                else
                    B._declinedDependencies[Q] = !0
            },
            dispose: function(Q) {
                B._disposeHandlers.push(Q)
            },
            addDisposeHandler: function(Q) {
                B._disposeHandlers.push(Q)
            },
            removeDisposeHandler: function(Q) {
                var U = B._disposeHandlers.indexOf(Q)
                U >= 0 && B._disposeHandlers.splice(U, 1)
            },
            invalidate: function() {
                switch (((this._selfInvalidated = !0), g) ) {
                case 'idle':
                    ;
                    ((d = {})[U] = Q[U]), i('ready')
                    break
                case 'ready':
                    Z(U)
                    break
                case 'prepare':
                case 'check':
                case 'dispose':
                case 'apply':
                    ;
                    (b = b || []).push(U)
                }
            },
            check: u,
            apply: E,
            status: function(Q) {
                if (!Q)
                    return g
                c.push(Q)
            },
            addStatusHandler: function(Q) {
                c.push(Q)
            },
            removeStatusHandler: function(Q) {
                var U = c.indexOf(Q)
                U >= 0 && c.splice(U, 1)
            },
            data: s[U]
        }
        return (F = void 0), B
    }
    var c = [],
        g = 'idle'
    function i(Q) {
        g = Q
        for (var U = 0; U < c.length; U++)
            c[U].call(null, Q)
    }
    var I,
        d,
        x,
        b,
        a = 0,
        L = 0,
        o = {},
        C = {},
        S = {}
    function G(Q) {
        return +Q + '' === Q ? +Q : Q
    }
    function u(Q) {
        if ('idle' !== g)
            throw new Error('check() is only allowed in idle status')
        return (
        (B = Q),
        i('check'),
        ((U = 1e4),
        (U = U || 1e4),
        new Promise(function(Q, F) {
            if ('undefined' == typeof XMLHttpRequest)
                return F(new Error('No browser support'))
            try {
                var B = new XMLHttpRequest(),
                    s = m.p + '' + n + '.hot-update.json'
                B.open('GET', s, !0), (B.timeout = U), B.send(null)
            } catch (Q) {
                return F(Q)
            }
            B.onreadystatechange = function() {
                if (4 === B.readyState)
                    if (0 === B.status)
                        F(new Error('Manifest request to ' + s + ' timed out.'))
                    else if (404 === B.status)
                        Q()
                    else if (200 !== B.status && 304 !== B.status)
                        F(new Error('Manifest request to ' + s + ' failed.'))
                    else {
                        try {
                            var U = JSON.parse(B.responseText)
                        } catch (Q) {
                            return void F(Q)
                        }
                        Q(U)
                    }
            }
        })).then(function(Q) {
            if (!Q)
                return i(V() ? 'ready' : 'idle'), null
                ;
            (C = {}), (o = {}), (S = Q.c), (x = Q.h), i('prepare')
            var U = new Promise(function(Q, U) {
                I = {
                    resolve: Q,
                    reject: U
                }
            })
            d = {}
            return y(1), 'prepare' === g && 0 === L && 0 === a && R(), U
        })
        )
        var U
    }
    function y(Q) {
        S[Q]
        ? ((C[Q] = !0),
        a++,
        (function(Q) {
            var U = document.createElement('script')
            ;
            (U.charset = 'utf-8'),
            (U.src = m.p + '' + Q + '.' + n + '.hot-update.js'),
            document.head.appendChild(U)
        })(Q))
        : (o[Q] = !0)
    }
    function R() {
        i('ready')
        var Q = I
        if (((I = null), Q))
            if (B)
                Promise.resolve()
                .then(function() {
                    return E(B)
                })
                .then(
                function(U) {
                    Q.resolve(U)
                },
                function(U) {
                    Q.reject(U)
                }
                )
            else {
                var U = []
                for (var F in d)
                    Object.prototype.hasOwnProperty.call(d, F) && U.push(G(F))
                Q.resolve(U)
            }
    }
    function E(U) {
        if ('ready' !== g)
            throw new Error('apply() is only allowed in ready status')
        return (function U(B) {
            var t,
                l,
                r,
                c,
                g
            function I(Q) {
                for (
                var U = [Q],
                    F = {},
                    B = U.map(function(Q) {
                        return {
                            chain: [Q],
                            id: Q
                        }
                    });
                B.length > 0;

                ) {
                    var n = B.pop(),
                        s = n.id,
                        e = n.chain
                    if ((c = N[s]) && (!c.hot._selfAccepted || c.hot._selfInvalidated)) {
                        if (c.hot._selfDeclined)
                            return {
                                type: 'self-declined',
                                chain: e,
                                moduleId: s
                            }
                        if (c.hot._main)
                            return {
                                type: 'unaccepted',
                                chain: e,
                                moduleId: s
                            }
                        for (var t = 0; t < c.parents.length; t++) {
                            var l = c.parents[t],
                                r = N[l]
                            if (r) {
                                if (r.hot._declinedDependencies[s])
                                    return {
                                        type: 'declined',
                                        chain: e.concat([l]),
                                        moduleId: s,
                                        parentId: l
                                    }
                                    ;
                                -1 === U.indexOf(l) &&
                                (r.hot._acceptedDependencies[s]
                                ? (F[l] || (F[l] = []), a(F[l], [s]))
                                : (delete F[l], U.push(l), B.push({
                                    chain: e.concat([l]),
                                    id: l
                                })))
                            }
                        }
                    }
                }
                return {
                    type: 'accepted',
                    moduleId: Q,
                    outdatedModules: U,
                    outdatedDependencies: F
                }
            }
            function a(Q, U) {
                for (var F = 0; F < U.length; F++) {
                    var B = U[F]
                    ;
                    -1 === Q.indexOf(B) && Q.push(B)
                }
            }
            V()
            var L = {},
                o = [],
                C = {},
                u = function() {
                    console.warn('[HMR] unexpected require(' + R.moduleId + ') to disposed module')
                }
            for (var y in d)
                if (Object.prototype.hasOwnProperty.call(d, y)) {
                    var R
                    ;
                    (g = G(y)), (R = d[y] ? I(g) : {
                        type: 'disposed',
                        moduleId: y
                    })
                    var E = !1,
                        Z = !1,
                        p = !1,
                        W = ''
                    switch ((R.chain && (W = '\nUpdate propagation: ' + R.chain.join(' -> ')), R.type) ) {
                    case 'self-declined':
                        B.onDeclined && B.onDeclined(R),
                        B.ignoreDeclined ||
                        (E = new Error('Aborted because of self decline: ' + R.moduleId + W))
                        break
                    case 'declined':
                        B.onDeclined && B.onDeclined(R),
                        B.ignoreDeclined ||
                        (E = new Error(
                        'Aborted because of declined dependency: ' +
                        R.moduleId +
                        ' in ' +
                        R.parentId +
                        W
                        ))
                        break
                    case 'unaccepted':
                        B.onUnaccepted && B.onUnaccepted(R),
                        B.ignoreUnaccepted ||
                        (E = new Error('Aborted because ' + g + ' is not accepted' + W))
                        break
                    case 'accepted':
                        B.onAccepted && B.onAccepted(R), (Z = !0)
                        break
                    case 'disposed':
                        B.onDisposed && B.onDisposed(R), (p = !0)
                        break
                    default:
                        throw new Error('Unexception type ' + R.type)
                    }
                    if (E)
                        return i('abort'), Promise.reject(E)
                    if (Z)
                        for (g in ((C[g] = d[g]), a(o, R.outdatedModules), R.outdatedDependencies))
                            Object.prototype.hasOwnProperty.call(R.outdatedDependencies, g) &&
                            (L[g] || (L[g] = []), a(L[g], R.outdatedDependencies[g]))
                    p && (a(o, [R.moduleId]), (C[g] = u))
                }
            var D,
                A = []
            for (l = 0; l < o.length; l++)
                (g = o[l]),
                N[g] &&
                N[g].hot._selfAccepted &&
                C[g] !== u &&
                !N[g].hot._selfInvalidated &&
                A.push({
                    module: g,
                    parents: N[g].parents.slice(),
                    errorHandler: N[g].hot._selfAccepted
                })
            i('dispose'),
            Object.keys(S).forEach(function(Q) {
                !1 === S[Q] &&
                (function(Q) {
                    delete installedChunks[Q]
                })(Q)
            })
            var X,
                h,
                v = o.slice()
            for (; v.length > 0;)
                if (((g = v.pop()), (c = N[g]))) {
                    var H = {},
                        J = c.hot._disposeHandlers
                    for (r = 0; r < J.length; r++)
                        (t = J[r])(H)
                    for (
                    s[g] = H, c.hot.active = !1, delete N[g], delete L[g], r = 0;
                    r < c.children.length;
                    r++
                    ) {
                        var M = N[c.children[r]]
                        M && (D = M.parents.indexOf(g)) >= 0 && M.parents.splice(D, 1)
                    }
                }
            for (g in L)
                if (Object.prototype.hasOwnProperty.call(L, g) && (c = N[g]))
                    for (h = L[g], r = 0; r < h.length; r++)
                        (X = h[r]), (D = c.children.indexOf(X)) >= 0 && c.children.splice(D, 1)
            i('apply'), void 0 !== x && ((n = x), (x = void 0))
            for (g in ((d = void 0), C))
                Object.prototype.hasOwnProperty.call(C, g) && (Q[g] = C[g])
            var T = null
            for (g in L)
                if (Object.prototype.hasOwnProperty.call(L, g) && (c = N[g])) {
                    h = L[g]
                    var Y = []
                    for (l = 0; l < h.length; l++)
                        if (((X = h[l]), (t = c.hot._acceptedDependencies[X]))) {
                            if (-1 !== Y.indexOf(t))
                                continue
                            Y.push(t)
                        }
                    for (l = 0; l < Y.length; l++) {
                        t = Y[l]
                        try {
                            t(h)
                        } catch (Q) {
                            B.onErrored &&
                            B.onErrored({
                                type: 'accept-errored',
                                moduleId: g,
                                dependencyId: h[l],
                                error: Q
                            }),
                            B.ignoreErrored || T || (T = Q)
                        }
                    }
                }
            for (l = 0; l < A.length; l++) {
                var z = A[l]
                ;
                (g = z.module), (e = z.parents), (F = g)
                try {
                    m(g)
                } catch (Q) {
                    if ('function' == typeof z.errorHandler)
                        try {
                            z.errorHandler(Q)
                        } catch (U) {
                            B.onErrored &&
                            B.onErrored({
                                type: 'self-accept-error-handler-errored',
                                moduleId: g,
                                error: U,
                                originalError: Q
                            }),
                            B.ignoreErrored || T || (T = U),
                            T || (T = Q)
                        }
                    else
                        B.onErrored && B.onErrored({
                            type: 'self-accept-errored',
                            moduleId: g,
                            error: Q
                        }),
                        B.ignoreErrored || T || (T = Q)
                }
            }
            if (T)
                return i('fail'), Promise.reject(T)
            if (b)
                return U(B).then(function(Q) {
                    return (
                    o.forEach(function(U) {
                        Q.indexOf(U) < 0 && Q.push(U)
                    }),
                    Q
                    )
                })
            return (
            i('idle'),
            new Promise(function(Q) {
                Q(o)
            })
            )
        })((U = U || {}))
    }
    function V() {
        if (b)
            return d || (d = {}), b.forEach(Z), (b = void 0), !0
    }
    function Z(U) {
        Object.prototype.hasOwnProperty.call(d, U) || (d[U] = Q[U])
    }
    var N = {}
    function m(U) {
        if (N[U])
            return N[U].exports
        var F = (N[U] = {
            i: U,
            l: !1,
            exports: {},
            hot: r(U),
            parents: ((t = e), (e = []), t),
            children: []
        })
        return Q[U].call(F.exports, F, F.exports, l(U)), (F.l = !0), F.exports
    }
    ;
    (m.m = Q),
    (m.c = N),
    (m.d = function(Q, U, F) {
        m.o(Q, U) || Object.defineProperty(Q, U, {
            enumerable: !0,
            get: F
        })
    }),
    (m.r = function(Q) {
        'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(Q, Symbol.toStringTag, {
            value: 'Module'
        }),
        Object.defineProperty(Q, '__esModule', {
            value: !0
        })
    }),
    (m.t = function(Q, U) {
        if ((1 & U && (Q = m(Q)), 8 & U))
            return Q
        if (4 & U && 'object' == typeof Q && Q && Q.__esModule)
            return Q
        var F = Object.create(null)
        if (
        (m.r(F),
        Object.defineProperty(F, 'default', {
            enumerable: !0,
            value: Q
        }),
        2 & U && 'string' != typeof Q)
        )
            for (var B in Q)
                m.d(
                F,
                B,
                function(U) {
                    return Q[U]
                }.bind(null, B)
                )
        return F
    }),
    (m.n = function(Q) {
        var U =
        Q && Q.__esModule
        ? function() {
            return Q.default
        }
        : function() {
            return Q
        }
        return m.d(U, 'a', U), U
    }),
    (m.o = function(Q, U) {
        return Object.prototype.hasOwnProperty.call(Q, U)
    }),
    (m.p = ''),
    (m.h = function() {
        return n
    }),
    l(4)((m.s = 4))
})([
,
function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    eval(
    "\n// EXTERNAL MODULE: ./src/polyfills.js\nvar polyfills = __webpack_require__(5);\n\n// CONCATENATED MODULE: ./src/pointers.ts\n/**\r\n * Utilites for working with multiple pointer events\r\n */\r\nfunction findEventIndex(pointers, event) {\r\n    var i = pointers.length;\r\n    while (i--) {\r\n        if (pointers[i].pointerId === event.pointerId) {\r\n            return i;\r\n        }\r\n    }\r\n    return -1;\r\n}\r\nfunction addPointer(pointers, event) {\r\n    var i;\r\n    // Add touches if applicable\r\n    if (event.touches) {\r\n        i = 0;\r\n        for (var _i = 0, _a = event.touches; _i < _a.length; _i++) {\r\n            var touch = _a[_i];\r\n            touch.pointerId = i++;\r\n            addPointer(pointers, touch);\r\n        }\r\n        return;\r\n    }\r\n    i = findEventIndex(pointers, event);\r\n    // Update if already present\r\n    if (i > -1) {\r\n        pointers.splice(i, 1);\r\n    }\r\n    pointers.push(event);\r\n}\r\nfunction removePointer(pointers, event) {\r\n    // Add touches if applicable\r\n    if (event.touches) {\r\n        // Remove all touches\r\n        while (pointers.length) {\r\n            pointers.pop();\r\n        }\r\n        return;\r\n    }\r\n    var i = findEventIndex(pointers, event);\r\n    if (i > -1) {\r\n        pointers.splice(i, 1);\r\n    }\r\n}\r\n/**\r\n * Calculates a center point between\r\n * the given pointer events, for panning\r\n * with multiple pointers.\r\n */\r\nfunction getMiddle(pointers) {\r\n    // Copy to avoid changing by reference\r\n    pointers = pointers.slice(0);\r\n    var event1 = pointers.pop();\r\n    var event2;\r\n    while ((event2 = pointers.pop())) {\r\n        event1 = {\r\n            clientX: (event2.clientX - event1.clientX) / 2 + event1.clientX,\r\n            clientY: (event2.clientY - event1.clientY) / 2 + event1.clientY\r\n        };\r\n    }\r\n    return event1;\r\n}\r\n/**\r\n * Calculates the distance between two points\r\n * for pinch zooming.\r\n * Limits to the first 2\r\n */\r\nfunction getDistance(pointers) {\r\n    if (pointers.length < 2) {\r\n        return 0;\r\n    }\r\n    var event1 = pointers[0];\r\n    var event2 = pointers[1];\r\n    return Math.sqrt(Math.pow(Math.abs(event2.clientX - event1.clientX), 2) +\r\n        Math.pow(Math.abs(event2.clientY - event1.clientY), 2));\r\n}\r\n\n// CONCATENATED MODULE: ./src/events.ts\nvar events = {\r\n    down: 'mousedown',\r\n    move: 'mousemove',\r\n    up: 'mouseup mouseleave'\r\n};\r\nif (typeof window !== 'undefined') {\r\n    if (typeof window.PointerEvent === 'function') {\r\n        events = {\r\n            down: 'pointerdown',\r\n            move: 'pointermove',\r\n            up: 'pointerup pointerleave pointercancel'\r\n        };\r\n    }\r\n    else if (typeof window.TouchEvent === 'function') {\r\n        events = {\r\n            down: 'touchstart',\r\n            move: 'touchmove',\r\n            up: 'touchend touchcancel'\r\n        };\r\n    }\r\n}\r\n\r\nfunction onPointer(event, elem, handler, eventOpts) {\r\n    events[event].split(' ').forEach(function (name) {\r\n        ;\r\n        elem.addEventListener(name, handler, eventOpts);\r\n    });\r\n}\r\nfunction destroyPointer(event, elem, handler) {\r\n    events[event].split(' ').forEach(function (name) {\r\n        ;\r\n        elem.removeEventListener(name, handler);\r\n    });\r\n}\r\n\n// CONCATENATED MODULE: ./src/css.ts\nvar isIE = typeof document !== 'undefined' && !!document.documentMode;\r\n/**\r\n * Lazy creation of a CSS style declaration\r\n */\r\nvar divStyle;\r\nfunction createStyle() {\r\n    if (divStyle) {\r\n        return divStyle;\r\n    }\r\n    return (divStyle = document.createElement('div').style);\r\n}\r\n/**\r\n * Proper prefixing for cross-browser compatibility\r\n */\r\nvar prefixes = ['webkit', 'moz', 'ms'];\r\nvar prefixCache = {};\r\nfunction getPrefixedName(name) {\r\n    if (prefixCache[name]) {\r\n        return prefixCache[name];\r\n    }\r\n    var divStyle = createStyle();\r\n    if (name in divStyle) {\r\n        return (prefixCache[name] = name);\r\n    }\r\n    var capName = name[0].toUpperCase() + name.slice(1);\r\n    var i = prefixes.length;\r\n    while (i--) {\r\n        var prefixedName = \"\" + prefixes[i] + capName;\r\n        if (prefixedName in divStyle) {\r\n            return (prefixCache[name] = prefixedName);\r\n        }\r\n    }\r\n}\r\n/**\r\n * Gets a style value expected to be a number\r\n */\r\nfunction getCSSNum(name, style) {\r\n    return parseFloat(style[getPrefixedName(name)]) || 0;\r\n}\r\nfunction getBoxStyle(elem, name, style) {\r\n    if (style === void 0) { style = window.getComputedStyle(elem); }\r\n    // Support: FF 68+\r\n    // Firefox requires specificity for border\r\n    var suffix = name === 'border' ? 'Width' : '';\r\n    return {\r\n        left: getCSSNum(name + \"Left\" + suffix, style),\r\n        right: getCSSNum(name + \"Right\" + suffix, style),\r\n        top: getCSSNum(name + \"Top\" + suffix, style),\r\n        bottom: getCSSNum(name + \"Bottom\" + suffix, style)\r\n    };\r\n}\r\n/**\r\n * Set a style using the properly prefixed name\r\n */\r\nfunction setStyle(elem, name, value) {\r\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\r\n    elem.style[getPrefixedName(name)] = value;\r\n}\r\n/**\r\n * Constructs the transition from panzoom options\r\n * and takes care of prefixing the transition and transform\r\n */\r\nfunction setTransition(elem, options) {\r\n    var transform = getPrefixedName('transform');\r\n    setStyle(elem, 'transition', transform + \" \" + options.duration + \"ms \" + options.easing);\r\n}\r\n/**\r\n * Set the transform using the proper prefix\r\n */\r\nfunction setTransform(elem, _a, _options) {\r\n    var x = _a.x, y = _a.y, scale = _a.scale, isSVG = _a.isSVG;\r\n    setStyle(elem, 'transform', \"scale(\" + scale + \") translate(\" + x + \"px, \" + y + \"px)\");\r\n    if (isSVG && isIE) {\r\n        var matrixValue = window.getComputedStyle(elem).getPropertyValue('transform');\r\n        elem.setAttribute('transform', matrixValue);\r\n    }\r\n}\r\n/**\r\n * Dimensions used in containment and focal point zooming\r\n */\r\nfunction getDimensions(elem) {\r\n    var parent = elem.parentNode;\r\n    var style = window.getComputedStyle(elem);\r\n    var parentStyle = window.getComputedStyle(parent);\r\n    var rectElem = elem.getBoundingClientRect();\r\n    var rectParent = parent.getBoundingClientRect();\r\n    return {\r\n        elem: {\r\n            style: style,\r\n            width: rectElem.width,\r\n            height: rectElem.height,\r\n            top: rectElem.top,\r\n            bottom: rectElem.bottom,\r\n            left: rectElem.left,\r\n            right: rectElem.right,\r\n            margin: getBoxStyle(elem, 'margin', style),\r\n            border: getBoxStyle(elem, 'border', style)\r\n        },\r\n        parent: {\r\n            style: parentStyle,\r\n            width: rectParent.width,\r\n            height: rectParent.height,\r\n            top: rectParent.top,\r\n            bottom: rectParent.bottom,\r\n            left: rectParent.left,\r\n            right: rectParent.right,\r\n            padding: getBoxStyle(parent, 'padding', parentStyle),\r\n            border: getBoxStyle(parent, 'border', parentStyle)\r\n        }\r\n    };\r\n}\r\n\n// CONCATENATED MODULE: ./src/isAttached.ts\n/**\r\n * Determine if an element is attached to the DOM\r\n * Panzoom requires this so events work properly\r\n */\r\nfunction isAttached(elem) {\r\n    var doc = elem.ownerDocument;\r\n    var parent = elem.parentNode;\r\n    return (doc &&\r\n        parent &&\r\n        doc.nodeType === 9 &&\r\n        parent.nodeType === 1 &&\r\n        doc.documentElement.contains(parent));\r\n}\r\n\n// CONCATENATED MODULE: ./src/isExcluded.ts\nfunction getClass(elem) {\r\n    return (elem.getAttribute('class') || '').trim();\r\n}\r\nfunction hasClass(elem, className) {\r\n    return elem.nodeType === 1 && (\" \" + getClass(elem) + \" \").indexOf(\" \" + className + \" \") > -1;\r\n}\r\nfunction isExcluded(elem, options) {\r\n    for (var cur = elem; cur != null; cur = cur.parentNode) {\r\n        if (hasClass(cur, options.excludeClass) || options.exclude.indexOf(cur) > -1) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\n// CONCATENATED MODULE: ./src/isSVGElement.ts\n/**\r\n * Determine if an element is SVG by checking the namespace\r\n * Exception: the <svg> element itself should be treated like HTML\r\n */\r\nvar rsvg = /^http:[\\w\\.\\/]+svg$/;\r\nfunction isSVGElement(elem) {\r\n    return rsvg.test(elem.namespaceURI) && elem.nodeName.toLowerCase() !== 'svg';\r\n}\r\n\n// CONCATENATED MODULE: ./src/shallowClone.ts\nfunction shallowClone(obj) {\r\n    var clone = {};\r\n    for (var key in obj) {\r\n        if (obj.hasOwnProperty(key)) {\r\n            clone[key] = obj[key];\r\n        }\r\n    }\r\n    return clone;\r\n}\r\n\n// CONCATENATED MODULE: ./src/panzoom.ts\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n/**\r\n * Panzoom for panning and zooming elements using CSS transforms\r\n * https://github.com/timmywil/panzoom\r\n *\r\n * Copyright Timmy Willison and other contributors\r\n * Released under the MIT license\r\n * https://github.com/timmywil/panzoom/blob/master/MIT-License.txt\r\n *\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar defaultOptions = {\r\n    animate: false,\r\n    canvas: false,\r\n    cursor: 'move',\r\n    disablePan: false,\r\n    disableZoom: false,\r\n    disableXAxis: false,\r\n    disableYAxis: false,\r\n    duration: 200,\r\n    easing: 'ease-in-out',\r\n    exclude: [],\r\n    excludeClass: 'panzoom-exclude',\r\n    handleStartEvent: function (e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n    },\r\n    maxScale: 4,\r\n    minScale: 0.125,\r\n    overflow: 'hidden',\r\n    panOnlyWhenZoomed: false,\r\n    relative: false,\r\n    setTransform: setTransform,\r\n    startX: 0,\r\n    startY: 0,\r\n    startScale: 1,\r\n    step: 0.3,\r\n    touchAction: 'none'\r\n};\r\nfunction Panzoom(elem, options) {\r\n    if (!elem) {\r\n        throw new Error('Panzoom requires an element as an argument');\r\n    }\r\n    if (elem.nodeType !== 1) {\r\n        throw new Error('Panzoom requires an element with a nodeType of 1');\r\n    }\r\n    if (!isAttached(elem)) {\r\n        throw new Error('Panzoom should be called on elements that have been attached to the DOM');\r\n    }\r\n    options = __assign(__assign({}, defaultOptions), options);\r\n    var isSVG = isSVGElement(elem);\r\n    var parent = elem.parentNode;\r\n    // Set parent styles\r\n    parent.style.overflow = options.overflow;\r\n    parent.style.userSelect = 'none';\r\n    // This is important for mobile to\r\n    // prevent scrolling while panning\r\n    parent.style.touchAction = options.touchAction;\r\n    (options.canvas ? parent : elem).style.cursor = options.cursor;\r\n    // Set element styles\r\n    elem.style.userSelect = 'none';\r\n    elem.style.touchAction = options.touchAction;\r\n    1; // The default for HTML is '50% 50%'\r\n    // The default for SVG is '0 0'\r\n    // SVG can't be changed in IE\r\n    setStyle(elem, 'transformOrigin', typeof options.origin === 'string' ? options.origin : isSVG ? '0 0' : '50% 50%');\r\n    function setOptions(opts) {\r\n        if (opts === void 0) { opts = {}; }\r\n        for (var key in opts) {\r\n            if (opts.hasOwnProperty(key)) {\r\n                options[key] = opts[key];\r\n            }\r\n        }\r\n        // Handle option side-effects\r\n        if (opts.hasOwnProperty('cursor')) {\r\n            elem.style.cursor = opts.cursor;\r\n        }\r\n        if (opts.hasOwnProperty('overflow')) {\r\n            parent.style.overflow = opts.overflow;\r\n        }\r\n        if (opts.hasOwnProperty('touchAction')) {\r\n            parent.style.touchAction = opts.touchAction;\r\n            elem.style.touchAction = opts.touchAction;\r\n        }\r\n        if (opts.hasOwnProperty('minScale') ||\r\n            opts.hasOwnProperty('maxScale') ||\r\n            opts.hasOwnProperty('contain')) {\r\n            setMinMax();\r\n        }\r\n    }\r\n    var x = 0;\r\n    var y = 0;\r\n    var scale = 1;\r\n    var isPanning = false;\r\n    zoom(options.startScale, { animate: false });\r\n    // Wait for scale to update\r\n    // for accurate dimensions\r\n    // to constrain initial values\r\n    setTimeout(function () {\r\n        setMinMax();\r\n        pan(options.startX, options.startY, { animate: false });\r\n    });\r\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\r\n    function trigger(eventName, detail, opts) {\r\n        if (opts.silent) {\r\n            return;\r\n        }\r\n        var event = new CustomEvent(eventName, { detail: detail });\r\n        elem.dispatchEvent(event);\r\n    }\r\n    function setTransformWithEvent(eventName, opts) {\r\n        var value = { x: x, y: y, scale: scale, isSVG: isSVG };\r\n        requestAnimationFrame(function () {\r\n            if (typeof opts.animate === 'boolean') {\r\n                if (opts.animate) {\r\n                    setTransition(elem, opts);\r\n                }\r\n                else {\r\n                    setStyle(elem, 'transition', 'none');\r\n                }\r\n            }\r\n            opts.setTransform(elem, value, opts);\r\n        });\r\n        trigger(eventName, value, opts);\r\n        trigger('panzoomchange', value, opts);\r\n        return value;\r\n    }\r\n    function setMinMax() {\r\n        if (options.contain) {\r\n            var dims = getDimensions(elem);\r\n            var parentWidth = dims.parent.width - dims.parent.border.left - dims.parent.border.right;\r\n            var parentHeight = dims.parent.height - dims.parent.border.top - dims.parent.border.bottom;\r\n            var elemWidth = dims.elem.width / scale;\r\n            var elemHeight = dims.elem.height / scale;\r\n            var elemScaledWidth = parentWidth / elemWidth;\r\n            var elemScaledHeight = parentHeight / elemHeight;\r\n            if (options.contain === 'inside') {\r\n                options.maxScale = Math.min(elemScaledWidth, elemScaledHeight);\r\n            }\r\n            else if (options.contain === 'outside') {\r\n                options.minScale = Math.max(elemScaledWidth, elemScaledHeight);\r\n            }\r\n        }\r\n    }\r\n    function constrainXY(toX, toY, toScale, panOptions) {\r\n        var opts = __assign(__assign({}, options), panOptions);\r\n        var result = { x: x, y: y, opts: opts };\r\n        if (!opts.force && (opts.disablePan || (opts.panOnlyWhenZoomed && scale === opts.startScale))) {\r\n            return result;\r\n        }\r\n        toX = parseFloat(toX);\r\n        toY = parseFloat(toY);\r\n        if (!opts.disableXAxis) {\r\n            result.x = (opts.relative ? x : 0) + toX;\r\n        }\r\n        if (!opts.disableYAxis) {\r\n            result.y = (opts.relative ? y : 0) + toY;\r\n        }\r\n        if (opts.contain === 'inside') {\r\n            var dims = getDimensions(elem);\r\n            result.x = Math.max(-dims.elem.margin.left - dims.parent.padding.left, Math.min(dims.parent.width -\r\n                dims.elem.width / toScale -\r\n                dims.parent.padding.left -\r\n                dims.elem.margin.left -\r\n                dims.parent.border.left -\r\n                dims.parent.border.right, result.x));\r\n            result.y = Math.max(-dims.elem.margin.top - dims.parent.padding.top, Math.min(dims.parent.height -\r\n                dims.elem.height / toScale -\r\n                dims.parent.padding.top -\r\n                dims.elem.margin.top -\r\n                dims.parent.border.top -\r\n                dims.parent.border.bottom, result.y));\r\n        }\r\n        else if (opts.contain === 'outside') {\r\n            var dims = getDimensions(elem);\r\n            var realWidth = dims.elem.width / scale;\r\n            var realHeight = dims.elem.height / scale;\r\n            var scaledWidth = realWidth * toScale;\r\n            var scaledHeight = realHeight * toScale;\r\n            var diffHorizontal = (scaledWidth - realWidth) / 2;\r\n            var diffVertical = (scaledHeight - realHeight) / 2;\r\n            var minX = (-(scaledWidth - dims.parent.width) -\r\n                dims.parent.padding.left -\r\n                dims.parent.border.left -\r\n                dims.parent.border.right +\r\n                diffHorizontal) /\r\n                toScale;\r\n            var maxX = (diffHorizontal - dims.parent.padding.left) / toScale;\r\n            result.x = Math.max(Math.min(result.x, maxX), minX);\r\n            var minY = (-(scaledHeight - dims.parent.height) -\r\n                dims.parent.padding.top -\r\n                dims.parent.border.top -\r\n                dims.parent.border.bottom +\r\n                diffVertical) /\r\n                toScale;\r\n            var maxY = (diffVertical - dims.parent.padding.top) / toScale;\r\n            result.y = Math.max(Math.min(result.y, maxY), minY);\r\n        }\r\n        return result;\r\n    }\r\n    function constrainScale(toScale, zoomOptions) {\r\n        var opts = __assign(__assign({}, options), zoomOptions);\r\n        var result = { scale: scale, opts: opts };\r\n        if (!opts.force && opts.disableZoom) {\r\n            return result;\r\n        }\r\n        result.scale = Math.min(Math.max(toScale, opts.minScale), opts.maxScale);\r\n        return result;\r\n    }\r\n    function pan(toX, toY, panOptions) {\r\n        var result = constrainXY(toX, toY, scale, panOptions);\r\n        var opts = result.opts;\r\n        x = result.x;\r\n        y = result.y;\r\n        return setTransformWithEvent('panzoompan', opts);\r\n    }\r\n    function zoom(toScale, zoomOptions) {\r\n        var result = constrainScale(toScale, zoomOptions);\r\n        var opts = result.opts;\r\n        if (!opts.force && opts.disableZoom) {\r\n            return;\r\n        }\r\n        toScale = result.scale;\r\n        var toX = x;\r\n        var toY = y;\r\n        if (opts.focal) {\r\n            // The difference between the point after the scale and the point before the scale\r\n            // plus the current translation after the scale\r\n            // neutralized to no scale (as the transform scale will apply to the translation)\r\n            var focal = opts.focal;\r\n            toX = (focal.x / toScale - focal.x / scale + x * toScale) / toScale;\r\n            toY = (focal.y / toScale - focal.y / scale + y * toScale) / toScale;\r\n        }\r\n        var panResult = constrainXY(toX, toY, toScale, { relative: false, force: true });\r\n        x = panResult.x;\r\n        y = panResult.y;\r\n        scale = toScale;\r\n        return setTransformWithEvent('panzoomzoom', opts);\r\n    }\r\n    function zoomInOut(isIn, zoomOptions) {\r\n        var opts = __assign(__assign(__assign({}, options), { animate: true }), zoomOptions);\r\n        return zoom(scale * Math.exp((isIn ? 1 : -1) * opts.step), opts);\r\n    }\r\n    function zoomIn(zoomOptions) {\r\n        return zoomInOut(true, zoomOptions);\r\n    }\r\n    function zoomOut(zoomOptions) {\r\n        return zoomInOut(false, zoomOptions);\r\n    }\r\n    function zoomToPoint(toScale, point, zoomOptions) {\r\n        var dims = getDimensions(elem);\r\n        // Instead of thinking of operating on the panzoom element,\r\n        // think of operating on the area inside the panzoom\r\n        // element's parent\r\n        // Subtract padding and border\r\n        var effectiveArea = {\r\n            width: dims.parent.width -\r\n                dims.parent.padding.left -\r\n                dims.parent.padding.right -\r\n                dims.parent.border.left -\r\n                dims.parent.border.right,\r\n            height: dims.parent.height -\r\n                dims.parent.padding.top -\r\n                dims.parent.padding.bottom -\r\n                dims.parent.border.top -\r\n                dims.parent.border.bottom\r\n        };\r\n        // Adjust the clientX/clientY to ignore the area\r\n        // outside the effective area\r\n        var clientX = point.clientX -\r\n            dims.parent.left -\r\n            dims.parent.padding.left -\r\n            dims.parent.border.left -\r\n            dims.elem.margin.left;\r\n        var clientY = point.clientY -\r\n            dims.parent.top -\r\n            dims.parent.padding.top -\r\n            dims.parent.border.top -\r\n            dims.elem.margin.top;\r\n        // Adjust the clientX/clientY for HTML elements,\r\n        // because they have a transform-origin of 50% 50%\r\n        if (!isSVG) {\r\n            clientX -= dims.elem.width / scale / 2;\r\n            clientY -= dims.elem.height / scale / 2;\r\n        }\r\n        // Convert the mouse point from it's position over the\r\n        // effective area before the scale to the position\r\n        // over the effective area after the scale.\r\n        var focal = {\r\n            x: (clientX / effectiveArea.width) * (effectiveArea.width * toScale),\r\n            y: (clientY / effectiveArea.height) * (effectiveArea.height * toScale)\r\n        };\r\n        return zoom(toScale, __assign(__assign({ animate: false }, zoomOptions), { focal: focal }));\r\n    }\r\n    function zoomWithWheel(event, zoomOptions) {\r\n        // Need to prevent the default here\r\n        // or it conflicts with regular page scroll\r\n        event.preventDefault();\r\n        var opts = __assign(__assign({}, options), zoomOptions);\r\n        // Normalize to deltaX in case shift modifier is used on Mac\r\n        var delta = event.deltaY === 0 && event.deltaX ? event.deltaX : event.deltaY;\r\n        var wheel = delta < 0 ? 1 : -1;\r\n        var toScale = constrainScale(scale * Math.exp((wheel * opts.step) / 3), opts).scale;\r\n        return zoomToPoint(toScale, event, opts);\r\n    }\r\n    function reset(resetOptions) {\r\n        var opts = __assign(__assign(__assign({}, options), { animate: true, force: true }), resetOptions);\r\n        scale = constrainScale(opts.startScale, opts).scale;\r\n        var panResult = constrainXY(opts.startX, opts.startY, scale, opts);\r\n        x = panResult.x;\r\n        y = panResult.y;\r\n        return setTransformWithEvent('panzoomreset', opts);\r\n    }\r\n    var origX;\r\n    var origY;\r\n    var startClientX;\r\n    var startClientY;\r\n    var startScale;\r\n    var startDistance;\r\n    var pointers = [];\r\n    function handleDown(event) {\r\n        // Don't handle this event if the target is excluded\r\n        if (isExcluded(event.target, options)) {\r\n            return;\r\n        }\r\n        addPointer(pointers, event);\r\n        isPanning = true;\r\n        options.handleStartEvent(event);\r\n        origX = x;\r\n        origY = y;\r\n        trigger('panzoomstart', { x: x, y: y, scale: scale }, options);\r\n        // This works whether there are multiple\r\n        // pointers or not\r\n        var point = getMiddle(pointers);\r\n        startClientX = point.clientX;\r\n        startClientY = point.clientY;\r\n        startScale = scale;\r\n        startDistance = getDistance(pointers);\r\n    }\r\n    function move(event) {\r\n        if (!isPanning ||\r\n            origX === undefined ||\r\n            origY === undefined ||\r\n            startClientX === undefined ||\r\n            startClientY === undefined) {\r\n            return;\r\n        }\r\n        addPointer(pointers, event);\r\n        var current = getMiddle(pointers);\r\n        if (pointers.length > 1) {\r\n            // Use the distance between the first 2 pointers\r\n            // to determine the current scale\r\n            var diff = getDistance(pointers) - startDistance;\r\n            var toScale = constrainScale((diff * options.step) / 80 + startScale).scale;\r\n            zoomToPoint(toScale, current);\r\n        }\r\n        pan(origX + (current.clientX - startClientX) / scale, origY + (current.clientY - startClientY) / scale, {\r\n            animate: false\r\n        });\r\n    }\r\n    function handleUp(event) {\r\n        // Don't call panzoomend when panning with 2 touches\r\n        // until both touches end\r\n        if (pointers.length === 1) {\r\n            trigger('panzoomend', { x: x, y: y, scale: scale }, options);\r\n        }\r\n        // Note: don't remove all pointers\r\n        // Can restart without having to reinitiate all of them\r\n        // Remove the pointer regardless of the isPanning state\r\n        removePointer(pointers, event);\r\n        if (!isPanning) {\r\n            return;\r\n        }\r\n        isPanning = false;\r\n        origX = origY = startClientX = startClientY = undefined;\r\n    }\r\n    var bound = false;\r\n    function bind() {\r\n        if (bound) {\r\n            return;\r\n        }\r\n        bound = true;\r\n        onPointer('down', options.canvas ? parent : elem, handleDown);\r\n        onPointer('move', document, move, { passive: true });\r\n        onPointer('up', document, handleUp, { passive: true });\r\n    }\r\n    function destroy() {\r\n        bound = false;\r\n        destroyPointer('down', options.canvas ? parent : elem, handleDown);\r\n        destroyPointer('move', document, move);\r\n        destroyPointer('up', document, handleUp);\r\n    }\r\n    if (!options.noBind) {\r\n        bind();\r\n    }\r\n    return {\r\n        bind: bind,\r\n        destroy: destroy,\r\n        eventNames: events,\r\n        getPan: function () { return ({ x: x, y: y }); },\r\n        getScale: function () { return scale; },\r\n        getOptions: function () { return shallowClone(options); },\r\n        pan: pan,\r\n        reset: reset,\r\n        setOptions: setOptions,\r\n        setStyle: function (name, value) { return setStyle(elem, name, value); },\r\n        zoom: zoom,\r\n        zoomIn: zoomIn,\r\n        zoomOut: zoomOut,\r\n        zoomToPoint: zoomToPoint,\r\n        zoomWithWheel: zoomWithWheel\r\n    };\r\n}\r\nPanzoom.defaultOptions = defaultOptions;\r\n/* harmony default export */ var panzoom = __webpack_exports__[\"a\"] = (Panzoom);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcG9pbnRlcnMudHM/ZDA1OCIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLnRzPzA1ZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy50cz84MTQzIiwid2VicGFjazovLy8uL3NyYy9pc0F0dGFjaGVkLnRzP2EwM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzRXhjbHVkZWQudHM/NTQzMiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNTVkdFbGVtZW50LnRzPzQ2MjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWxsb3dDbG9uZS50cz9lNDc2Iiwid2VicGFjazovLy8uL3NyYy9wYW56b29tLnRzP2I4ZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7R0FFRztBQUVILFNBQVMsY0FBYyxDQUFDLFFBQXdCLEVBQUUsS0FBbUI7SUFDbkUsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU07SUFDdkIsT0FBTyxDQUFDLEVBQUUsRUFBRTtRQUNWLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQzdDLE9BQU8sQ0FBQztTQUNUO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxRQUF3QixFQUFFLEtBQW1CO0lBQ3RFLElBQUksQ0FBQztJQUNMLDRCQUE0QjtJQUM1QixJQUFLLEtBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDMUIsQ0FBQyxHQUFHLENBQUM7UUFDTCxLQUFvQixVQUFzQixFQUF0QixLQUFDLEtBQWEsQ0FBQyxPQUFPLEVBQXRCLGNBQXNCLEVBQXRCLElBQXNCLEVBQUU7WUFBdkMsSUFBTSxLQUFLO1lBQ2QsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDckIsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7U0FDNUI7UUFDRCxPQUFNO0tBQ1A7SUFDRCxDQUFDLEdBQUcsY0FBYyxDQUFDLFFB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UUFDcEQsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRCxTQUFTLE9BQU87UUFDZCxLQUFLLEdBQUcsS0FBSztRQUNiLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1FBQ2xFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztRQUN0QyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ25CLElBQUksRUFBRTtLQUNQO0lBRUQsT0FBTztRQUNMLElBQUk7UUFDSixPQUFPO1FBQ1AsVUFBVTtRQUNWLE1BQU0sRUFBRSxjQUFNLFFBQUMsRUFBRSxDQUFDLEtBQUUsQ0FBQyxLQUFFLENBQUMsRUFBVixDQUFVO1FBQ3hCLFFBQVEsRUFBRSxjQUFNLFlBQUssRUFBTCxDQUFLO1FBQ3JCLFVBQVUsRUFBRSxjQUFNLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQXJCLENBQXFCO1FBQ3ZDLEdBQUc7UUFDSCxLQUFLO1FBQ0wsVUFBVTtRQUNWLFFBQVEsRUFBRSxVQUFDLElBQVksRUFBRSxLQUFhLElBQUssZUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQTNCLENBQTJCO1FBQ3RFLElBQUk7UUFDSixNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCxhQUFhO0tBQ2Q7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLGNBQWMsR0FBRyxjQUFjO0FBR3hCLDhFQUFPIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxpdGVzIGZvciB3b3JraW5nIHdpdGggbXVsdGlwbGUgcG9pbnRlciBldmVudHNcbiAqL1xuXG5mdW5jdGlvbiBmaW5kRXZlbnRJbmRleChwb2ludGVyczogUG9pbnRlckV2ZW50W10sIGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgbGV0IGkgPSBwb2ludGVycy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChwb2ludGVyc1tpXS5wb2ludGVySWQgPT09IGV2ZW50LnBvaW50ZXJJZCkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludGVyKHBvaW50ZXJzOiBQb2ludGVyRXZlbnRbXSwgZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICBsZXQgaVxuICAvLyBBZGQgdG91Y2hlcyBpZiBhcHBsaWNhYmxlXG4gIGlmICgoZXZlbnQgYXMgYW55KS50b3VjaGVzKSB7XG4gICAgaSA9IDBcbiAgICBmb3IgKGNvbnN0IHRvdWNoIG9mIChldmVudCBhcyBhbnkpLnRvdWNoZXMpIHtcbiAgICAgIHRvdWNoLnBvaW50ZXJJZCA9IGkrK1xuICAgICAgYWRkUG9pbnRlcihwb2ludGVycywgdG91Y2gpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGkgPSBmaW5kRXZlbnRJbmRleChwb2ludGVycywgZXZlbnQpXG4gIC8vIFVwZGF0ZSBpZiBhbHJlYWR5IHByZXNlbnRcbiAgaWYgKGkgPiAtMSkge1xuICAgIHBvaW50ZXJzLnNwbGljZShpLCAxKVxuICB9XG4gIHBvaW50ZXJzLnB1c2goZXZlbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQb2ludGVyKHBvaW50ZXJzOiBQb2ludGVyRXZlbnRbXSwgZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAvLyBBZGQgdG91Y2hlcyBpZiBhcHBsaWNhYmxlXG4gIGlmICgoZXZlbnQgYXMgYW55KS50b3VjaGVzKSB7XG4gICAgLy8gUmVtb3ZlIGFsbCB0b3VjaGVzXG4gICAgd2hpbGUgKHBvaW50ZXJzLmxlbmd0aCkge1xuICAgICAgcG9pbnRlcnMucG9wKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaSA9IGZpbmRFdmVudEluZGV4KHBvaW50ZXJzLCBldmVudClcbiAgaWYgKGkgPiAtMSkge1xuICAgIHBvaW50ZXJzLnNwbGljZShpLCAxKVxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIGNlbnRlciBwb2ludCBiZXR3ZWVuXG4gKiB0aGUgZ2l2ZW4gcG9pbnRlciBldmVudHMsIGZvciBwYW5uaW5nXG4gKiB3aXRoIG11bHRpcGxlIHBvaW50ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlKHBvaW50ZXJzOiBQb2ludGVyRXZlbnRbXSkge1xuICAvLyBDb3B5IHRvIGF2b2lkIGNoYW5naW5nIGJ5IHJlZmVyZW5jZVxuICBwb2ludGVycyA9IHBvaW50ZXJzLnNsaWNlKDApXG4gIGxldCBldmVudDE6IFBpY2s8UG9pbnRlckV2ZW50LCAnY2xpZW50WCcgfCAnY2xpZW50WSc+ID0gcG9pbnRlcnMucG9wKClcbiAgbGV0IGV2ZW50MjogUG9pbnRlckV2ZW50XG4gIHdoaWxlICgoZXZlbnQyID0gcG9pbnRlcnMucG9wKCkpKSB7XG4gICAgZXZlbnQxID0ge1xuICAgICAgY2xpZW50WDogKGV2ZW50Mi5jbGllbnRYIC0gZXZlbnQxLmNsaWVudFgpIC8gMiArIGV2ZW50MS5jbGllbnRYLFxuICAgICAgY2xpZW50WTogKGV2ZW50Mi5jbGllbnRZIC0gZXZlbnQxLmNsaWVudFkpIC8gMiArIGV2ZW50MS5jbGllbnRZXG4gICAgfVxuICB9XG4gIHJldHVybiBldmVudDFcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcbiAqIGZvciBwaW5jaCB6b29taW5nLlxuICogTGltaXRzIHRvIHRoZSBmaXJzdCAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwb2ludGVyczogUG9pbnRlckV2ZW50W10pIHtcbiAgaWYgKHBvaW50ZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGNvbnN0IGV2ZW50MSA9IHBvaW50ZXJzWzBdXG4gIGNvbnN0IGV2ZW50MiA9IHBvaW50ZXJzWzFdXG4gIHJldHVybiBNYXRoLnNxcnQoXG4gICAgTWF0aC5wb3coTWF0aC5hYnMoZXZlbnQyLmNsaWVudFggLSBldmVudDEuY2xpZW50WCksIDIpICtcbiAgICAgIE1hdGgucG93KE1hdGguYWJzKGV2ZW50Mi5jbGllbnRZIC0gZXZlbnQxLmNsaWVudFkpLCAyKVxuICApXG59XG4iLCJsZXQgZXZlbnRzID0ge1xuICBkb3duOiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIHVwOiAnbW91c2V1cCBtb3VzZWxlYXZlJ1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuUG9pbnRlckV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRzID0ge1xuICAgICAgZG93bjogJ3BvaW50ZXJkb3duJyxcbiAgICAgIG1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgICB1cDogJ3BvaW50ZXJ1cCBwb2ludGVybGVhdmUgcG9pbnRlcmNhbmNlbCdcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5Ub3VjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRzID0ge1xuICAgICAgZG93bjogJ3RvdWNoc3RhcnQnLFxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgICB1cDogJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBldmVudHMgYXMgZXZlbnROYW1lcyB9XG5cbnR5cGUgUG9pbnRlckV2ZW50TmFtZSA9XG4gIHwgJ3BvaW50ZXJkb3duJ1xuICB8ICdwb2ludGVybW92ZSdcbiAgfCAncG9pbnRlcnVwJ1xuICB8ICdwb2ludGVybGVhdmUnXG4gIHwgJ3BvaW50ZXJjYW5jZWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBvblBvaW50ZXIoXG4gIGV2ZW50OiAnZG93bicgfCAnbW92ZScgfCAndXAnLFxuICBlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQgfCBEb2N1bWVudCxcbiAgaGFuZGxlcjogKGV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHZvaWQsXG4gIGV2ZW50T3B0cz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xuKSB7XG4gIGV2ZW50c1tldmVudF0uc3BsaXQoJyAnKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgOyhlbGVtIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyPFBvaW50ZXJFdmVudE5hbWU+KFxuICAgICAgbmFtZSBhcyBQb2ludGVyRXZlbnROYW1lLFxuICAgICAgaGFuZGxlcixcbiAgICAgIGV2ZW50T3B0c1xuICAgIClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lQb2ludGVyKFxuICBldmVudDogJ2Rvd24nIHwgJ21vdmUnIHwgJ3VwJyxcbiAgZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50IHwgRG9jdW1lbnQsXG4gIGhhbmRsZXI6IChldmVudDogUG9pbnRlckV2ZW50KSA9PiB2b2lkXG4pIHtcbiAgZXZlbnRzW2V2ZW50XS5zcGxpdCgnICcpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICA7KGVsZW0gYXMgSFRNTEVsZW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXI8UG9pbnRlckV2ZW50TmFtZT4obmFtZSBhcyBQb2ludGVyRXZlbnROYW1lLCBoYW5kbGVyKVxuICB9KVxufVxuIiwiaW1wb3J0IHsgQ3VycmVudFZhbHVlcywgUGFuem9vbU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCBpc0lFID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZVxuXG4vKipcbiAqIExhenkgY3JlYXRpb24gb2YgYSBDU1Mgc3R5bGUgZGVjbGFyYXRpb25cbiAqL1xubGV0IGRpdlN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uXG5mdW5jdGlvbiBjcmVhdGVTdHlsZSgpIHtcbiAgaWYgKGRpdlN0eWxlKSB7XG4gICAgcmV0dXJuIGRpdlN0eWxlXG4gIH1cbiAgcmV0dXJuIChkaXZTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlKVxufVxuXG4vKipcbiAqIFByb3BlciBwcmVmaXhpbmcgZm9yIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eVxuICovXG5jb25zdCBwcmVmaXhlcyA9IFsnd2Via2l0JywgJ21veicsICdtcyddXG5jb25zdCBwcmVmaXhDYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5mdW5jdGlvbiBnZXRQcmVmaXhlZE5hbWUobmFtZTogc3RyaW5nKSB7XG4gIGlmIChwcmVmaXhDYWNoZVtuYW1lXSkge1xuICAgIHJldHVybiBwcmVmaXhDYWNoZVtuYW1lXVxuICB9XG4gIGNvbnN0IGRpdlN0eWxlID0gY3JlYXRlU3R5bGUoKVxuICBpZiAobmFtZSBpbiBkaXZTdHlsZSkge1xuICAgIHJldHVybiAocHJlZml4Q2FjaGVbbmFtZV0gPSBuYW1lKVxuICB9XG4gIGNvbnN0IGNhcE5hbWUgPSBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpXG4gIGxldCBpID0gcHJlZml4ZXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSBgJHtwcmVmaXhlc1tpXX0ke2NhcE5hbWV9YFxuICAgIGlmIChwcmVmaXhlZE5hbWUgaW4gZGl2U3R5bGUpIHtcbiAgICAgIHJldHVybiAocHJlZml4Q2FjaGVbbmFtZV0gPSBwcmVmaXhlZE5hbWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0cyBhIHN0eWxlIHZhbHVlIGV4cGVjdGVkIHRvIGJlIGEgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDU1NOdW0obmFtZTogc3RyaW5nLCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZVtnZXRQcmVmaXhlZE5hbWUobmFtZSkgYXMgYW55XSkgfHwgMFxufVxuXG5mdW5jdGlvbiBnZXRCb3hTdHlsZShcbiAgZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LFxuICBuYW1lOiBzdHJpbmcsXG4gIHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlcbikge1xuICAvLyBTdXBwb3J0OiBGRiA2OCtcbiAgLy8gRmlyZWZveCByZXF1aXJlcyBzcGVjaWZpY2l0eSBmb3IgYm9yZGVyXG4gIGNvbnN0IHN1ZmZpeCA9IG5hbWUgPT09ICdib3JkZXInID8gJ1dpZHRoJyA6ICcnXG4gIHJldHVybiB7XG4gICAgbGVmdDogZ2V0Q1NTTnVtKGAke25hbWV9TGVmdCR7c3VmZml4fWAsIHN0eWxlKSxcbiAgICByaWdodDogZ2V0Q1NTTnVtKGAke25hbWV9UmlnaHQke3N1ZmZpeH1gLCBzdHlsZSksXG4gICAgdG9wOiBnZXRDU1NOdW0oYCR7bmFtZX1Ub3Ake3N1ZmZpeH1gLCBzdHlsZSksXG4gICAgYm90dG9tOiBnZXRDU1NOdW0oYCR7bmFtZX1Cb3R0b20ke3N1ZmZpeH1gLCBzdHlsZSlcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhIHN0eWxlIHVzaW5nIHRoZSBwcm9wZXJseSBwcmVmaXhlZCBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBlbGVtLnN0eWxlW2dldFByZWZpeGVkTmFtZShuYW1lKSBhcyBhbnldID0gdmFsdWVcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIHRoZSB0cmFuc2l0aW9uIGZyb20gcGFuem9vbSBvcHRpb25zXG4gKiBhbmQgdGFrZXMgY2FyZSBvZiBwcmVmaXhpbmcgdGhlIHRyYW5zaXRpb24gYW5kIHRyYW5zZm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQsIG9wdGlvbnM6IFBhbnpvb21PcHRpb25zKSB7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IGdldFByZWZpeGVkTmFtZSgndHJhbnNmb3JtJylcbiAgc2V0U3R5bGUoZWxlbSwgJ3RyYW5zaXRpb24nLCBgJHt0cmFuc2Zvcm19ICR7b3B0aW9ucy5kdXJhdGlvbn1tcyAke29wdGlvbnMuZWFzaW5nfWApXG59XG5cbi8qKlxuICogU2V0IHRoZSB0cmFuc2Zvcm0gdXNpbmcgdGhlIHByb3BlciBwcmVmaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShcbiAgZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LFxuICB7IHgsIHksIHNjYWxlLCBpc1NWRyB9OiBDdXJyZW50VmFsdWVzLFxuICBfb3B0aW9ucz86IFBhbnpvb21PcHRpb25zXG4pIHtcbiAgc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybScsIGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWApXG4gIGlmIChpc1NWRyAmJiBpc0lFKSB7XG4gICAgY29uc3QgbWF0cml4VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKVxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBtYXRyaXhWYWx1ZSlcbiAgfVxufVxuXG4vKipcbiAqIERpbWVuc2lvbnMgdXNlZCBpbiBjb250YWlubWVudCBhbmQgZm9jYWwgcG9pbnQgem9vbWluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudFxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pXG4gIGNvbnN0IHBhcmVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVxuICBjb25zdCByZWN0RWxlbSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiB7XG4gICAgZWxlbToge1xuICAgICAgc3R5bGUsXG4gICAgICB3aWR0aDogcmVjdEVsZW0ud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3RFbGVtLmhlaWdodCxcbiAgICAgIHRvcDogcmVjdEVsZW0udG9wLFxuICAgICAgYm90dG9tOiByZWN0RWxlbS5ib3R0b20sXG4gICAgICBsZWZ0OiByZWN0RWxlbS5sZWZ0LFxuICAgICAgcmlnaHQ6IHJlY3RFbGVtLnJpZ2h0LFxuICAgICAgbWFyZ2luOiBnZXRCb3hTdHlsZShlbGVtLCAnbWFyZ2luJywgc3R5bGUpLFxuICAgICAgYm9yZGVyOiBnZXRCb3hTdHlsZShlbGVtLCAnYm9yZGVyJywgc3R5bGUpXG4gICAgfSxcbiAgICBwYXJlbnQ6IHtcbiAgICAgIHN0eWxlOiBwYXJlbnRTdHlsZSxcbiAgICAgIHdpZHRoOiByZWN0UGFyZW50LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0UGFyZW50LmhlaWdodCxcbiAgICAgIHRvcDogcmVjdFBhcmVudC50b3AsXG4gICAgICBib3R0b206IHJlY3RQYXJlbnQuYm90dG9tLFxuICAgICAgbGVmdDogcmVjdFBhcmVudC5sZWZ0LFxuICAgICAgcmlnaHQ6IHJlY3RQYXJlbnQucmlnaHQsXG4gICAgICBwYWRkaW5nOiBnZXRCb3hTdHlsZShwYXJlbnQsICdwYWRkaW5nJywgcGFyZW50U3R5bGUpLFxuICAgICAgYm9yZGVyOiBnZXRCb3hTdHlsZShwYXJlbnQsICdib3JkZXInLCBwYXJlbnRTdHlsZSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gdGhlIERPTVxuICogUGFuem9vbSByZXF1aXJlcyB0aGlzIHNvIGV2ZW50cyB3b3JrIHByb3Blcmx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXR0YWNoZWQoZWxlbTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgY29uc3QgZG9jID0gZWxlbS5vd25lckRvY3VtZW50XG4gIGNvbnN0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZVxuICByZXR1cm4gKFxuICAgIGRvYyAmJlxuICAgIHBhcmVudCAmJlxuICAgIGRvYy5ub2RlVHlwZSA9PT0gOSAmJlxuICAgIHBhcmVudC5ub2RlVHlwZSA9PT0gMSAmJlxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMocGFyZW50KVxuICApXG59XG4iLCJpbXBvcnQgeyBQYW56b29tT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnXG5cbmZ1bmN0aW9uIGdldENsYXNzKGVsZW06IEVsZW1lbnQpIHtcbiAgcmV0dXJuIChlbGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykudHJpbSgpXG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW06IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxICYmIGAgJHtnZXRDbGFzcyhlbGVtKX0gYC5pbmRleE9mKGAgJHtjbGFzc05hbWV9IGApID4gLTFcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFeGNsdWRlZChlbGVtOiBFbGVtZW50LCBvcHRpb25zOiBQYW56b29tT3B0aW9ucykge1xuICBmb3IgKGxldCBjdXIgPSBlbGVtOyBjdXIgIT0gbnVsbDsgY3VyID0gY3VyLnBhcmVudE5vZGUgYXMgRWxlbWVudCkge1xuICAgIGlmIChoYXNDbGFzcyhjdXIsIG9wdGlvbnMuZXhjbHVkZUNsYXNzKSB8fCBvcHRpb25zLmV4Y2x1ZGUuaW5kZXhPZihjdXIpID4gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuIiwiLyoqXG4gKiBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBTVkcgYnkgY2hlY2tpbmcgdGhlIG5hbWVzcGFjZVxuICogRXhjZXB0aW9uOiB0aGUgPHN2Zz4gZWxlbWVudCBpdHNlbGYgc2hvdWxkIGJlIHRyZWF0ZWQgbGlrZSBIVE1MXG4gKi9cbmNvbnN0IHJzdmcgPSAvXmh0dHA6W1xcd1xcLlxcL10rc3ZnJC9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbGVtOiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQpIHtcbiAgcmV0dXJuIHJzdmcudGVzdChlbGVtLm5hbWVzcGFjZVVSSSkgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0Nsb25lKG9iajogYW55KSB7XG4gIGNvbnN0IGNsb25lOiBhbnkgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNsb25lW2tleV0gPSBvYmpba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xvbmVcbn1cbiIsIi8qKlxuICogUGFuem9vbSBmb3IgcGFubmluZyBhbmQgem9vbWluZyBlbGVtZW50cyB1c2luZyBDU1MgdHJhbnNmb3Jtc1xuICogaHR0cHM6Ly9naXRodWIuY29tL3RpbW15d2lsL3Bhbnpvb21cbiAqXG4gKiBDb3B5cmlnaHQgVGltbXkgV2lsbGlzb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGltbXl3aWwvcGFuem9vbS9ibG9iL21hc3Rlci9NSVQtTGljZW5zZS50eHRcbiAqXG4gKi9cbmltcG9ydCAnLi9wb2x5ZmlsbHMnXG5cbmltcG9ydCB7IFBhbk9wdGlvbnMsIFBhbnpvb21FdmVudCwgUGFuem9vbU9iamVjdCwgUGFuem9vbU9wdGlvbnMsIFpvb21PcHRpb25zIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IGFkZFBvaW50ZXIsIGdldERpc3RhbmNlLCBnZXRNaWRkbGUsIHJlbW92ZVBvaW50ZXIgfSBmcm9tICcuL3BvaW50ZXJzJ1xuaW1wb3J0IHsgZGVzdHJveVBvaW50ZXIsIGV2ZW50TmFtZXMsIG9uUG9pbnRlciB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgZ2V0RGltZW5zaW9ucywgc2V0U3R5bGUsIHNldFRyYW5zZm9ybSwgc2V0VHJhbnNpdGlvbiB9IGZyb20gJy4vY3NzJ1xuXG5pbXBvcnQgaXNBdHRhY2hlZCBmcm9tICcuL2lzQXR0YWNoZWQnXG5pbXBvcnQgaXNFeGNsdWRlZCBmcm9tICcuL2lzRXhjbHVkZWQnXG5pbXBvcnQgaXNTVkdFbGVtZW50IGZyb20gJy4vaXNTVkdFbGVtZW50J1xuaW1wb3J0IHNoYWxsb3dDbG9uZSBmcm9tICcuL3NoYWxsb3dDbG9uZSdcblxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBhbnpvb21PcHRpb25zID0ge1xuICBhbmltYXRlOiBmYWxzZSxcbiAgY2FudmFzOiBmYWxzZSxcbiAgY3Vyc29yOiAnbW92ZScsXG4gIGRpc2FibGVQYW46IGZhbHNlLFxuICBkaXNhYmxlWm9vbTogZmFsc2UsXG4gIGRpc2FibGVYQXhpczogZmFsc2UsXG4gIGRpc2FibGVZQXhpczogZmFsc2UsXG4gIGR1cmF0aW9uOiAyMDAsXG4gIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgZXhjbHVkZTogW10sXG4gIGV4Y2x1ZGVDbGFzczogJ3Bhbnpvb20tZXhjbHVkZScsXG4gIGhhbmRsZVN0YXJ0RXZlbnQ6IChlOiBFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSxcbiAgbWF4U2NhbGU6IDQsXG4gIG1pblNjYWxlOiAwLjEyNSxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwYW5Pbmx5V2hlblpvb21lZDogZmFsc2UsXG4gIHJlbGF0aXZlOiBmYWxzZSxcbiAgc2V0VHJhbnNmb3JtLFxuICBzdGFydFg6IDAsXG4gIHN0YXJ0WTogMCxcbiAgc3RhcnRTY2FsZTogMSxcbiAgc3RlcDogMC4zLFxuICB0b3VjaEFjdGlvbjogJ25vbmUnXG59XG5cbmZ1bmN0aW9uIFBhbnpvb20oXG4gIGVsZW06IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCxcbiAgb3B0aW9ucz86IE9taXQ8UGFuem9vbU9wdGlvbnMsICdmb3JjZSc+XG4pOiBQYW56b29tT2JqZWN0IHtcbiAgaWYgKCFlbGVtKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYW56b29tIHJlcXVpcmVzIGFuIGVsZW1lbnQgYXMgYW4gYXJndW1lbnQnKVxuICB9XG4gIGlmIChlbGVtLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYW56b29tIHJlcXVpcmVzIGFuIGVsZW1lbnQgd2l0aCBhIG5vZGVUeXBlIG9mIDEnKVxuICB9XG4gIGlmICghaXNBdHRhY2hlZChlbGVtKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFuem9vbSBzaG91bGQgYmUgY2FsbGVkIG9uIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGF0dGFjaGVkIHRvIHRoZSBET00nKVxuICB9XG5cbiAgb3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAuLi5vcHRpb25zXG4gIH1cblxuICBjb25zdCBpc1NWRyA9IGlzU1ZHRWxlbWVudChlbGVtKVxuXG4gIGNvbnN0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnRcblxuICAvLyBTZXQgcGFyZW50IHN0eWxlc1xuICBwYXJlbnQuc3R5bGUub3ZlcmZsb3cgPSBvcHRpb25zLm92ZXJmbG93XG4gIHBhcmVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBtb2JpbGUgdG9cbiAgLy8gcHJldmVudCBzY3JvbGxpbmcgd2hpbGUgcGFubmluZ1xuICBwYXJlbnQuc3R5bGUudG91Y2hBY3Rpb24gPSBvcHRpb25zLnRvdWNoQWN0aW9uXG4gIC8vIFNldCB0aGUgY3Vyc29yIHN0eWxlIG9uIHRoZSBwYXJlbnQgaWYgd2UncmUgaW4gY2FudmFzIG1vZGVcbiAgOyhvcHRpb25zLmNhbnZhcyA/IHBhcmVudCA6IGVsZW0pLnN0eWxlLmN1cnNvciA9IG9wdGlvbnMuY3Vyc29yXG5cbiAgLy8gU2V0IGVsZW1lbnQgc3R5bGVzXG4gIGVsZW0uc3R5bGUudXNlclNlbGVjdCA9ICdub25lJ1xuICBlbGVtLnN0eWxlLnRvdWNoQWN0aW9uID0gb3B0aW9ucy50b3VjaEFjdGlvblxuICAxIC8vIFRoZSBkZWZhdWx0IGZvciBIVE1MIGlzICc1MCUgNTAlJ1xuICAvLyBUaGUgZGVmYXVsdCBmb3IgU1ZHIGlzICcwIDAnXG4gIC8vIFNWRyBjYW4ndCBiZSBjaGFuZ2VkIGluIElFXG4gIHNldFN0eWxlKFxuICAgIGVsZW0sXG4gICAgJ3RyYW5zZm9ybU9yaWdpbicsXG4gICAgdHlwZW9mIG9wdGlvbnMub3JpZ2luID09PSAnc3RyaW5nJyA/IG9wdGlvbnMub3JpZ2luIDogaXNTVkcgPyAnMCAwJyA6ICc1MCUgNTAlJ1xuICApXG5cbiAgZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRzOiBPbWl0PFBhbnpvb21PcHRpb25zLCAnZm9yY2UnPiA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0cykge1xuICAgICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIG9wdGlvbiBzaWRlLWVmZmVjdHNcbiAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eSgnY3Vyc29yJykpIHtcbiAgICAgIGVsZW0uc3R5bGUuY3Vyc29yID0gb3B0cy5jdXJzb3JcbiAgICB9XG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ292ZXJmbG93JykpIHtcbiAgICAgIHBhcmVudC5zdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dcbiAgICB9XG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ3RvdWNoQWN0aW9uJykpIHtcbiAgICAgIHBhcmVudC5zdHlsZS50b3VjaEFjdGlvbiA9IG9wdHMudG91Y2hBY3Rpb25cbiAgICAgIGVsZW0uc3R5bGUudG91Y2hBY3Rpb24gPSBvcHRzLnRvdWNoQWN0aW9uXG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ21pblNjYWxlJykgfHxcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ21heFNjYWxlJykgfHxcbiAgICAgIG9wdHMuaGFzT3duUHJvcGVydHkoJ2NvbnRhaW4nKVxuICAgICkge1xuICAgICAgc2V0TWluTWF4KClcbiAgICB9XG4gIH1cblxuICBsZXQgeCA9IDBcbiAgbGV0IHkgPSAwXG4gIGxldCBzY2FsZSA9IDFcbiAgbGV0IGlzUGFubmluZyA9IGZhbHNlXG4gIHpvb20ob3B0aW9ucy5zdGFydFNjYWxlLCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gIC8vIFdhaXQgZm9yIHNjYWxlIHRvIHVwZGF0ZVxuICAvLyBmb3IgYWNjdXJhdGUgZGltZW5zaW9uc1xuICAvLyB0byBjb25zdHJhaW4gaW5pdGlhbCB2YWx1ZXNcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0TWluTWF4KClcbiAgICBwYW4ob3B0aW9ucy5zdGFydFgsIG9wdGlvbnMuc3RhcnRZLCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZnVuY3Rpb24gdHJpZ2dlcihldmVudE5hbWU6IFBhbnpvb21FdmVudCwgZGV0YWlsOiBhbnksIG9wdHM6IFBhbnpvb21PcHRpb25zKSB7XG4gICAgaWYgKG9wdHMuc2lsZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbCB9KVxuICAgIGVsZW0uZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zZm9ybVdpdGhFdmVudChldmVudE5hbWU6IFBhbnpvb21FdmVudCwgb3B0czogUGFuem9vbU9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHsgeCwgeSwgc2NhbGUsIGlzU1ZHIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmFuaW1hdGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAob3B0cy5hbmltYXRlKSB7XG4gICAgICAgICAgc2V0VHJhbnNpdGlvbihlbGVtLCBvcHRzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0eWxlKGVsZW0sICd0cmFuc2l0aW9uJywgJ25vbmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcHRzLnNldFRyYW5zZm9ybShlbGVtLCB2YWx1ZSwgb3B0cylcbiAgICB9KVxuICAgIHRyaWdnZXIoZXZlbnROYW1lLCB2YWx1ZSwgb3B0cylcbiAgICB0cmlnZ2VyKCdwYW56b29tY2hhbmdlJywgdmFsdWUsIG9wdHMpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBzZXRNaW5NYXgoKSB7XG4gICAgaWYgKG9wdGlvbnMuY29udGFpbikge1xuICAgICAgY29uc3QgZGltcyA9IGdldERpbWVuc2lvbnMoZWxlbSlcbiAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gZGltcy5wYXJlbnQud2lkdGggLSBkaW1zLnBhcmVudC5ib3JkZXIubGVmdCAtIGRpbXMucGFyZW50LmJvcmRlci5yaWdodFxuICAgICAgY29uc3QgcGFyZW50SGVpZ2h0ID0gZGltcy5wYXJlbnQuaGVpZ2h0IC0gZGltcy5wYXJlbnQuYm9yZGVyLnRvcCAtIGRpbXMucGFyZW50LmJvcmRlci5ib3R0b21cbiAgICAgIGNvbnN0IGVsZW1XaWR0aCA9IGRpbXMuZWxlbS53aWR0aCAvIHNjYWxlXG4gICAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZGltcy5lbGVtLmhlaWdodCAvIHNjYWxlXG4gICAgICBjb25zdCBlbGVtU2NhbGVkV2lkdGggPSBwYXJlbnRXaWR0aCAvIGVsZW1XaWR0aFxuICAgICAgY29uc3QgZWxlbVNjYWxlZEhlaWdodCA9IHBhcmVudEhlaWdodCAvIGVsZW1IZWlnaHRcbiAgICAgIGlmIChvcHRpb25zLmNvbnRhaW4gPT09ICdpbnNpZGUnKSB7XG4gICAgICAgIG9wdGlvbnMubWF4U2NhbGUgPSBNYXRoLm1pbihlbGVtU2NhbGVkV2lkdGgsIGVsZW1TY2FsZWRIZWlnaHQpXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuY29udGFpbiA9PT0gJ291dHNpZGUnKSB7XG4gICAgICAgIG9wdGlvbnMubWluU2NhbGUgPSBNYXRoLm1heChlbGVtU2NhbGVkV2lkdGgsIGVsZW1TY2FsZWRIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluWFkoXG4gICAgdG9YOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgdG9ZOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgdG9TY2FsZTogbnVtYmVyLFxuICAgIHBhbk9wdGlvbnM/OiBQYW5PcHRpb25zXG4gICkge1xuICAgIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMsIC4uLnBhbk9wdGlvbnMgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHsgeCwgeSwgb3B0cyB9XG4gICAgaWYgKCFvcHRzLmZvcmNlICYmIChvcHRzLmRpc2FibGVQYW4gfHwgKG9wdHMucGFuT25seVdoZW5ab29tZWQgJiYgc2NhbGUgPT09IG9wdHMuc3RhcnRTY2FsZSkpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHRvWCA9IHBhcnNlRmxvYXQodG9YIGFzIHN0cmluZylcbiAgICB0b1kgPSBwYXJzZUZsb2F0KHRvWSBhcyBzdHJpbmcpXG5cbiAgICBpZiAoIW9wdHMuZGlzYWJsZVhBeGlzKSB7XG4gICAgICByZXN1bHQueCA9IChvcHRzLnJlbGF0aXZlID8geCA6IDApICsgdG9YXG4gICAgfVxuXG4gICAgaWYgKCFvcHRzLmRpc2FibGVZQXhpcykge1xuICAgICAgcmVzdWx0LnkgPSAob3B0cy5yZWxhdGl2ZSA/IHkgOiAwKSArIHRvWVxuICAgIH1cblxuICAgIGlmIChvcHRzLmNvbnRhaW4gPT09ICdpbnNpZGUnKSB7XG4gICAgICBjb25zdCBkaW1zID0gZ2V0RGltZW5zaW9ucyhlbGVtKVxuICAgICAgcmVzdWx0LnggPSBNYXRoLm1heChcbiAgICAgICAgLWRpbXMuZWxlbS5tYXJnaW4ubGVmdCAtIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCxcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgZGltcy5wYXJlbnQud2lkdGggLVxuICAgICAgICAgICAgZGltcy5lbGVtLndpZHRoIC8gdG9TY2FsZSAtXG4gICAgICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLmxlZnQgLVxuICAgICAgICAgICAgZGltcy5lbGVtLm1hcmdpbi5sZWZ0IC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LmJvcmRlci5sZWZ0IC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LmJvcmRlci5yaWdodCxcbiAgICAgICAgICByZXN1bHQueFxuICAgICAgICApXG4gICAgICApXG4gICAgICByZXN1bHQueSA9IE1hdGgubWF4KFxuICAgICAgICAtZGltcy5lbGVtLm1hcmdpbi50b3AgLSBkaW1zLnBhcmVudC5wYWRkaW5nLnRvcCxcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgZGltcy5wYXJlbnQuaGVpZ2h0IC1cbiAgICAgICAgICAgIGRpbXMuZWxlbS5oZWlnaHQgLyB0b1NjYWxlIC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcudG9wIC1cbiAgICAgICAgICAgIGRpbXMuZWxlbS5tYXJnaW4udG9wIC1cbiAgICAgICAgICAgIGRpbXMucGFyZW50LmJvcmRlci50b3AgLVxuICAgICAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLmJvdHRvbSxcbiAgICAgICAgICByZXN1bHQueVxuICAgICAgICApXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChvcHRzLmNvbnRhaW4gPT09ICdvdXRzaWRlJykge1xuICAgICAgY29uc3QgZGltcyA9IGdldERpbWVuc2lvbnMoZWxlbSlcbiAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IGRpbXMuZWxlbS53aWR0aCAvIHNjYWxlXG4gICAgICBjb25zdCByZWFsSGVpZ2h0ID0gZGltcy5lbGVtLmhlaWdodCAvIHNjYWxlXG4gICAgICBjb25zdCBzY2FsZWRXaWR0aCA9IHJlYWxXaWR0aCAqIHRvU2NhbGVcbiAgICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IHJlYWxIZWlnaHQgKiB0b1NjYWxlXG4gICAgICBjb25zdCBkaWZmSG9yaXpvbnRhbCA9IChzY2FsZWRXaWR0aCAtIHJlYWxXaWR0aCkgLyAyXG4gICAgICBjb25zdCBkaWZmVmVydGljYWwgPSAoc2NhbGVkSGVpZ2h0IC0gcmVhbEhlaWdodCkgLyAyXG4gICAgICBjb25zdCBtaW5YID1cbiAgICAgICAgKC0oc2NhbGVkV2lkdGggLSBkaW1zLnBhcmVudC53aWR0aCkgLVxuICAgICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCAtXG4gICAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLmxlZnQgLVxuICAgICAgICAgIGRpbXMucGFyZW50LmJvcmRlci5yaWdodCArXG4gICAgICAgICAgZGlmZkhvcml6b250YWwpIC9cbiAgICAgICAgdG9TY2FsZVxuICAgICAgY29uc3QgbWF4WCA9IChkaWZmSG9yaXpvbnRhbCAtIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCkgLyB0b1NjYWxlXG4gICAgICByZXN1bHQueCA9IE1hdGgubWF4KE1hdGgubWluKHJlc3VsdC54LCBtYXhYKSwgbWluWClcbiAgICAgIGNvbnN0IG1pblkgPVxuICAgICAgICAoLShzY2FsZWRIZWlnaHQgLSBkaW1zLnBhcmVudC5oZWlnaHQpIC1cbiAgICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLnRvcCAtXG4gICAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLnRvcCAtXG4gICAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLmJvdHRvbSArXG4gICAgICAgICAgZGlmZlZlcnRpY2FsKSAvXG4gICAgICAgIHRvU2NhbGVcbiAgICAgIGNvbnN0IG1heFkgPSAoZGlmZlZlcnRpY2FsIC0gZGltcy5wYXJlbnQucGFkZGluZy50b3ApIC8gdG9TY2FsZVxuICAgICAgcmVzdWx0LnkgPSBNYXRoLm1heChNYXRoLm1pbihyZXN1bHQueSwgbWF4WSksIG1pblkpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpblNjYWxlKHRvU2NhbGU6IG51bWJlciwgem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMsIC4uLnpvb21PcHRpb25zIH1cbiAgICBjb25zdCByZXN1bHQgPSB7IHNjYWxlLCBvcHRzIH1cbiAgICBpZiAoIW9wdHMuZm9yY2UgJiYgb3B0cy5kaXNhYmxlWm9vbSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgICByZXN1bHQuc2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heCh0b1NjYWxlLCBvcHRzLm1pblNjYWxlKSwgb3B0cy5tYXhTY2FsZSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmdW5jdGlvbiBwYW4odG9YOiBudW1iZXIgfCBzdHJpbmcsIHRvWTogbnVtYmVyIHwgc3RyaW5nLCBwYW5PcHRpb25zPzogUGFuT3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnN0cmFpblhZKHRvWCwgdG9ZLCBzY2FsZSwgcGFuT3B0aW9ucylcbiAgICBjb25zdCBvcHRzID0gcmVzdWx0Lm9wdHNcblxuICAgIHggPSByZXN1bHQueFxuICAgIHkgPSByZXN1bHQueVxuXG4gICAgcmV0dXJuIHNldFRyYW5zZm9ybVdpdGhFdmVudCgncGFuem9vbXBhbicsIG9wdHMpXG4gIH1cblxuICBmdW5jdGlvbiB6b29tKHRvU2NhbGU6IG51bWJlciwgem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnN0cmFpblNjYWxlKHRvU2NhbGUsIHpvb21PcHRpb25zKVxuICAgIGNvbnN0IG9wdHMgPSByZXN1bHQub3B0c1xuICAgIGlmICghb3B0cy5mb3JjZSAmJiBvcHRzLmRpc2FibGVab29tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdG9TY2FsZSA9IHJlc3VsdC5zY2FsZVxuICAgIGxldCB0b1ggPSB4XG4gICAgbGV0IHRvWSA9IHlcblxuICAgIGlmIChvcHRzLmZvY2FsKSB7XG4gICAgICAvLyBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBwb2ludCBhZnRlciB0aGUgc2NhbGUgYW5kIHRoZSBwb2ludCBiZWZvcmUgdGhlIHNjYWxlXG4gICAgICAvLyBwbHVzIHRoZSBjdXJyZW50IHRyYW5zbGF0aW9uIGFmdGVyIHRoZSBzY2FsZVxuICAgICAgLy8gbmV1dHJhbGl6ZWQgdG8gbm8gc2NhbGUgKGFzIHRoZSB0cmFuc2Zvcm0gc2NhbGUgd2lsbCBhcHBseSB0byB0aGUgdHJhbnNsYXRpb24pXG4gICAgICBjb25zdCBmb2NhbCA9IG9wdHMuZm9jYWxcbiAgICAgIHRvWCA9IChmb2NhbC54IC8gdG9TY2FsZSAtIGZvY2FsLnggLyBzY2FsZSArIHggKiB0b1NjYWxlKSAvIHRvU2NhbGVcbiAgICAgIHRvWSA9IChmb2NhbC55IC8gdG9TY2FsZSAtIGZvY2FsLnkgLyBzY2FsZSArIHkgKiB0b1NjYWxlKSAvIHRvU2NhbGVcbiAgICB9XG4gICAgY29uc3QgcGFuUmVzdWx0ID0gY29uc3RyYWluWFkodG9YLCB0b1ksIHRvU2NhbGUsIHsgcmVsYXRpdmU6IGZhbHNlLCBmb3JjZTogdHJ1ZSB9KVxuICAgIHggPSBwYW5SZXN1bHQueFxuICAgIHkgPSBwYW5SZXN1bHQueVxuICAgIHNjYWxlID0gdG9TY2FsZVxuICAgIHJldHVybiBzZXRUcmFuc2Zvcm1XaXRoRXZlbnQoJ3Bhbnpvb216b29tJywgb3B0cylcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21Jbk91dChpc0luOiBib29sZWFuLCB6b29tT3B0aW9ucz86IFpvb21PcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0cyA9IHsgLi4ub3B0aW9ucywgYW5pbWF0ZTogdHJ1ZSwgLi4uem9vbU9wdGlvbnMgfVxuICAgIHJldHVybiB6b29tKHNjYWxlICogTWF0aC5leHAoKGlzSW4gPyAxIDogLTEpICogb3B0cy5zdGVwKSwgb3B0cylcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21Jbih6b29tT3B0aW9ucz86IFpvb21PcHRpb25zKSB7XG4gICAgcmV0dXJuIHpvb21Jbk91dCh0cnVlLCB6b29tT3B0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21PdXQoem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIHJldHVybiB6b29tSW5PdXQoZmFsc2UsIHpvb21PcHRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gem9vbVRvUG9pbnQoXG4gICAgdG9TY2FsZTogbnVtYmVyLFxuICAgIHBvaW50OiB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH0sXG4gICAgem9vbU9wdGlvbnM/OiBab29tT3B0aW9uc1xuICApIHtcbiAgICBjb25zdCBkaW1zID0gZ2V0RGltZW5zaW9ucyhlbGVtKVxuXG4gICAgLy8gSW5zdGVhZCBvZiB0aGlua2luZyBvZiBvcGVyYXRpbmcgb24gdGhlIHBhbnpvb20gZWxlbWVudCxcbiAgICAvLyB0aGluayBvZiBvcGVyYXRpbmcgb24gdGhlIGFyZWEgaW5zaWRlIHRoZSBwYW56b29tXG4gICAgLy8gZWxlbWVudCdzIHBhcmVudFxuICAgIC8vIFN1YnRyYWN0IHBhZGRpbmcgYW5kIGJvcmRlclxuICAgIGNvbnN0IGVmZmVjdGl2ZUFyZWEgPSB7XG4gICAgICB3aWR0aDpcbiAgICAgICAgZGltcy5wYXJlbnQud2lkdGggLVxuICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLmxlZnQgLVxuICAgICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLnJpZ2h0IC1cbiAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLmxlZnQgLVxuICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIucmlnaHQsXG4gICAgICBoZWlnaHQ6XG4gICAgICAgIGRpbXMucGFyZW50LmhlaWdodCAtXG4gICAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcudG9wIC1cbiAgICAgICAgZGltcy5wYXJlbnQucGFkZGluZy5ib3R0b20gLVxuICAgICAgICBkaW1zLnBhcmVudC5ib3JkZXIudG9wIC1cbiAgICAgICAgZGltcy5wYXJlbnQuYm9yZGVyLmJvdHRvbVxuICAgIH1cblxuICAgIC8vIEFkanVzdCB0aGUgY2xpZW50WC9jbGllbnRZIHRvIGlnbm9yZSB0aGUgYXJlYVxuICAgIC8vIG91dHNpZGUgdGhlIGVmZmVjdGl2ZSBhcmVhXG4gICAgbGV0IGNsaWVudFggPVxuICAgICAgcG9pbnQuY2xpZW50WCAtXG4gICAgICBkaW1zLnBhcmVudC5sZWZ0IC1cbiAgICAgIGRpbXMucGFyZW50LnBhZGRpbmcubGVmdCAtXG4gICAgICBkaW1zLnBhcmVudC5ib3JkZXIubGVmdCAtXG4gICAgICBkaW1zLmVsZW0ubWFyZ2luLmxlZnRcbiAgICBsZXQgY2xpZW50WSA9XG4gICAgICBwb2ludC5jbGllbnRZIC1cbiAgICAgIGRpbXMucGFyZW50LnRvcCAtXG4gICAgICBkaW1zLnBhcmVudC5wYWRkaW5nLnRvcCAtXG4gICAgICBkaW1zLnBhcmVudC5ib3JkZXIudG9wIC1cbiAgICAgIGRpbXMuZWxlbS5tYXJnaW4udG9wXG5cbiAgICAvLyBBZGp1c3QgdGhlIGNsaWVudFgvY2xpZW50WSBmb3IgSFRNTCBlbGVtZW50cyxcbiAgICAvLyBiZWNhdXNlIHRoZXkgaGF2ZSBhIHRyYW5zZm9ybS1vcmlnaW4gb2YgNTAlIDUwJVxuICAgIGlmICghaXNTVkcpIHtcbiAgICAgIGNsaWVudFggLT0gZGltcy5lbGVtLndpZHRoIC8gc2NhbGUgLyAyXG4gICAgICBjbGllbnRZIC09IGRpbXMuZWxlbS5oZWlnaHQgLyBzY2FsZSAvIDJcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBtb3VzZSBwb2ludCBmcm9tIGl0J3MgcG9zaXRpb24gb3ZlciB0aGVcbiAgICAvLyBlZmZlY3RpdmUgYXJlYSBiZWZvcmUgdGhlIHNjYWxlIHRvIHRoZSBwb3NpdGlvblxuICAgIC8vIG92ZXIgdGhlIGVmZmVjdGl2ZSBhcmVhIGFmdGVyIHRoZSBzY2FsZS5cbiAgICBjb25zdCBmb2NhbCA9IHtcbiAgICAgIHg6IChjbGllbnRYIC8gZWZmZWN0aXZlQXJlYS53aWR0aCkgKiAoZWZmZWN0aXZlQXJlYS53aWR0aCAqIHRvU2NhbGUpLFxuICAgICAgeTogKGNsaWVudFkgLyBlZmZlY3RpdmVBcmVhLmhlaWdodCkgKiAoZWZmZWN0aXZlQXJlYS5oZWlnaHQgKiB0b1NjYWxlKVxuICAgIH1cblxuICAgIHJldHVybiB6b29tKHRvU2NhbGUsIHsgYW5pbWF0ZTogZmFsc2UsIC4uLnpvb21PcHRpb25zLCBmb2NhbCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gem9vbVdpdGhXaGVlbChldmVudDogV2hlZWxFdmVudCwgem9vbU9wdGlvbnM/OiBab29tT3B0aW9ucykge1xuICAgIC8vIE5lZWQgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBoZXJlXG4gICAgLy8gb3IgaXQgY29uZmxpY3RzIHdpdGggcmVndWxhciBwYWdlIHNjcm9sbFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMsIC4uLnpvb21PcHRpb25zIH1cblxuICAgIC8vIE5vcm1hbGl6ZSB0byBkZWx0YVggaW4gY2FzZSBzaGlmdCBtb2RpZmllciBpcyB1c2VkIG9uIE1hY1xuICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZID09PSAwICYmIGV2ZW50LmRlbHRhWCA/IGV2ZW50LmRlbHRhWCA6IGV2ZW50LmRlbHRhWVxuICAgIGNvbnN0IHdoZWVsID0gZGVsdGEgPCAwID8gMSA6IC0xXG4gICAgY29uc3QgdG9TY2FsZSA9IGNvbnN0cmFpblNjYWxlKHNjYWxlICogTWF0aC5leHAoKHdoZWVsICogb3B0cy5zdGVwKSAvIDMpLCBvcHRzKS5zY2FsZVxuXG4gICAgcmV0dXJuIHpvb21Ub1BvaW50KHRvU2NhbGUsIGV2ZW50LCBvcHRzKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQocmVzZXRPcHRpb25zPzogUGFuem9vbU9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRzID0geyAuLi5vcHRpb25zLCBhbmltYXRlOiB0cnVlLCBmb3JjZTogdHJ1ZSwgLi4ucmVzZXRPcHRpb25zIH1cbiAgICBzY2FsZSA9IGNvbnN0cmFpblNjYWxlKG9wdHMuc3RhcnRTY2FsZSwgb3B0cykuc2NhbGVcbiAgICBjb25zdCBwYW5SZXN1bHQgPSBjb25zdHJhaW5YWShvcHRzLnN0YXJ0WCwgb3B0cy5zdGFydFksIHNjYWxlLCBvcHRzKVxuICAgIHggPSBwYW5SZXN1bHQueFxuICAgIHkgPSBwYW5SZXN1bHQueVxuICAgIHJldHVybiBzZXRUcmFuc2Zvcm1XaXRoRXZlbnQoJ3Bhbnpvb21yZXNldCcsIG9wdHMpXG4gIH1cblxuICBsZXQgb3JpZ1g6IG51bWJlclxuICBsZXQgb3JpZ1k6IG51bWJlclxuICBsZXQgc3RhcnRDbGllbnRYOiBudW1iZXJcbiAgbGV0IHN0YXJ0Q2xpZW50WTogbnVtYmVyXG4gIGxldCBzdGFydFNjYWxlOiBudW1iZXJcbiAgbGV0IHN0YXJ0RGlzdGFuY2U6IG51bWJlclxuICBjb25zdCBwb2ludGVyczogUG9pbnRlckV2ZW50W10gPSBbXVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgIC8vIERvbid0IGhhbmRsZSB0aGlzIGV2ZW50IGlmIHRoZSB0YXJnZXQgaXMgZXhjbHVkZWRcbiAgICBpZiAoaXNFeGNsdWRlZChldmVudC50YXJnZXQgYXMgRWxlbWVudCwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBhZGRQb2ludGVyKHBvaW50ZXJzLCBldmVudClcbiAgICBpc1Bhbm5pbmcgPSB0cnVlXG4gICAgb3B0aW9ucy5oYW5kbGVTdGFydEV2ZW50KGV2ZW50KVxuICAgIG9yaWdYID0geFxuICAgIG9yaWdZID0geVxuXG4gICAgdHJpZ2dlcigncGFuem9vbXN0YXJ0JywgeyB4LCB5LCBzY2FsZSB9LCBvcHRpb25zKVxuXG4gICAgLy8gVGhpcyB3b3JrcyB3aGV0aGVyIHRoZXJlIGFyZSBtdWx0aXBsZVxuICAgIC8vIHBvaW50ZXJzIG9yIG5vdFxuICAgIGNvbnN0IHBvaW50ID0gZ2V0TWlkZGxlKHBvaW50ZXJzKVxuICAgIHN0YXJ0Q2xpZW50WCA9IHBvaW50LmNsaWVudFhcbiAgICBzdGFydENsaWVudFkgPSBwb2ludC5jbGllbnRZXG4gICAgc3RhcnRTY2FsZSA9IHNjYWxlXG4gICAgc3RhcnREaXN0YW5jZSA9IGdldERpc3RhbmNlKHBvaW50ZXJzKVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgIWlzUGFubmluZyB8fFxuICAgICAgb3JpZ1ggPT09IHVuZGVmaW5lZCB8fFxuICAgICAgb3JpZ1kgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgc3RhcnRDbGllbnRYID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHN0YXJ0Q2xpZW50WSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYWRkUG9pbnRlcihwb2ludGVycywgZXZlbnQpXG4gICAgY29uc3QgY3VycmVudCA9IGdldE1pZGRsZShwb2ludGVycylcbiAgICBpZiAocG9pbnRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgLy8gVXNlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCAyIHBvaW50ZXJzXG4gICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIGN1cnJlbnQgc2NhbGVcbiAgICAgIGNvbnN0IGRpZmYgPSBnZXREaXN0YW5jZShwb2ludGVycykgLSBzdGFydERpc3RhbmNlXG4gICAgICBjb25zdCB0b1NjYWxlID0gY29uc3RyYWluU2NhbGUoKGRpZmYgKiBvcHRpb25zLnN0ZXApIC8gODAgKyBzdGFydFNjYWxlKS5zY2FsZVxuICAgICAgem9vbVRvUG9pbnQodG9TY2FsZSwgY3VycmVudClcbiAgICB9XG5cbiAgICBwYW4oXG4gICAgICBvcmlnWCArIChjdXJyZW50LmNsaWVudFggLSBzdGFydENsaWVudFgpIC8gc2NhbGUsXG4gICAgICBvcmlnWSArIChjdXJyZW50LmNsaWVudFkgLSBzdGFydENsaWVudFkpIC8gc2NhbGUsXG4gICAgICB7XG4gICAgICAgIGFuaW1hdGU6IGZhbHNlXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVXAoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgIC8vIERvbid0IGNhbGwgcGFuem9vbWVuZCB3aGVuIHBhbm5pbmcgd2l0aCAyIHRvdWNoZXNcbiAgICAvLyB1bnRpbCBib3RoIHRvdWNoZXMgZW5kXG4gICAgaWYgKHBvaW50ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdHJpZ2dlcigncGFuem9vbWVuZCcsIHsgeCwgeSwgc2NhbGUgfSwgb3B0aW9ucylcbiAgICB9XG4gICAgLy8gTm90ZTogZG9uJ3QgcmVtb3ZlIGFsbCBwb2ludGVyc1xuICAgIC8vIENhbiByZXN0YXJ0IHdpdGhvdXQgaGF2aW5nIHRvIHJlaW5pdGlhdGUgYWxsIG9mIHRoZW1cbiAgICAvLyBSZW1vdmUgdGhlIHBvaW50ZXIgcmVnYXJkbGVzcyBvZiB0aGUgaXNQYW5uaW5nIHN0YXRlXG4gICAgcmVtb3ZlUG9pbnRlcihwb2ludGVycywgZXZlbnQpXG4gICAgaWYgKCFpc1Bhbm5pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpc1Bhbm5pbmcgPSBmYWxzZVxuICAgIG9yaWdYID0gb3JpZ1kgPSBzdGFydENsaWVudFggPSBzdGFydENsaWVudFkgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGxldCBib3VuZCA9IGZhbHNlXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgaWYgKGJvdW5kKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYm91bmQgPSB0cnVlXG4gICAgb25Qb2ludGVyKCdkb3duJywgb3B0aW9ucy5jYW52YXMgPyBwYXJlbnQgOiBlbGVtLCBoYW5kbGVEb3duKVxuICAgIG9uUG9pbnRlcignbW92ZScsIGRvY3VtZW50LCBtb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICBvblBvaW50ZXIoJ3VwJywgZG9jdW1lbnQsIGhhbmRsZVVwLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgYm91bmQgPSBmYWxzZVxuICAgIGRlc3Ryb3lQb2ludGVyKCdkb3duJywgb3B0aW9ucy5jYW52YXMgPyBwYXJlbnQgOiBlbGVtLCBoYW5kbGVEb3duKVxuICAgIGRlc3Ryb3lQb2ludGVyKCdtb3ZlJywgZG9jdW1lbnQsIG1vdmUpXG4gICAgZGVzdHJveVBvaW50ZXIoJ3VwJywgZG9jdW1lbnQsIGhhbmRsZVVwKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zLm5vQmluZCkge1xuICAgIGJpbmQoKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiaW5kLFxuICAgIGRlc3Ryb3ksXG4gICAgZXZlbnROYW1lcyxcbiAgICBnZXRQYW46ICgpID0+ICh7IHgsIHkgfSksXG4gICAgZ2V0U2NhbGU6ICgpID0+IHNjYWxlLFxuICAgIGdldE9wdGlvbnM6ICgpID0+IHNoYWxsb3dDbG9uZShvcHRpb25zKSxcbiAgICBwYW4sXG4gICAgcmVzZXQsXG4gICAgc2V0T3B0aW9ucyxcbiAgICBzZXRTdHlsZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc2V0U3R5bGUoZWxlbSwgbmFtZSwgdmFsdWUpLFxuICAgIHpvb20sXG4gICAgem9vbUluLFxuICAgIHpvb21PdXQsXG4gICAgem9vbVRvUG9pbnQsXG4gICAgem9vbVdpdGhXaGVlbFxuICB9XG59XG5cblBhbnpvb20uZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc1xuXG5leHBvcnQgeyBQYW56b29tT2JqZWN0LCBQYW56b29tT3B0aW9ucyB9XG5leHBvcnQgZGVmYXVsdCBQYW56b29tXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n"
    )
},
,
,
function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    eval(
    "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_panzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\r\nconsole.log('This is a demo version of Panzoom for testing.');\r\nconsole.log('It exposes a global (window.Panzoom) and should not be used in production.');\r\nwindow.Panzoom = _src_panzoom__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL2dsb2JhbC1wYW56b29tLnRzPzdiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFvQztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDO0FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEVBQTRFLENBQUM7QUFPekYsTUFBTSxDQUFDLE9BQU8sR0FBRyw0REFBTyIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhbnpvb20gZnJvbSAnLi4vc3JjL3Bhbnpvb20nXG5cbmNvbnNvbGUubG9nKCdUaGlzIGlzIGEgZGVtbyB2ZXJzaW9uIG9mIFBhbnpvb20gZm9yIHRlc3RpbmcuJylcbmNvbnNvbGUubG9nKCdJdCBleHBvc2VzIGEgZ2xvYmFsICh3aW5kb3cuUGFuem9vbSkgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBpbiBwcm9kdWN0aW9uLicpXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgUGFuem9vbTogdHlwZW9mIFBhbnpvb21cbiAgfVxufVxud2luZG93LlBhbnpvb20gPSBQYW56b29tXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n"
    )
},
function(module, exports) {
    eval(
    "/* eslint-disable no-var */\nif (typeof window !== 'undefined') {\n  // Support: IE11 only\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach\n  }\n  // Support: IE11 only\n  // CustomEvent is an object instead of a constructor\n  if (typeof window.CustomEvent !== 'function') {\n    window.CustomEvent = function CustomEvent(event, params) {\n      params = params || { bubbles: false, cancelable: false, detail: null }\n      var evt = document.createEvent('CustomEvent')\n      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)\n      return evt\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGxzLmpzPzA2NzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBTdXBwb3J0OiBJRTExIG9ubHlcbiAgaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoXG4gIH1cbiAgLy8gU3VwcG9ydDogSUUxMSBvbmx5XG4gIC8vIEN1c3RvbUV2ZW50IGlzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGEgY29uc3RydWN0b3JcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogbnVsbCB9XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbClcbiAgICAgIHJldHVybiBldnRcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n"
    )
}
])

