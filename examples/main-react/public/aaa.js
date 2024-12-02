function aa (a, b, c) {
    'use strict';
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        aa,
        ba,
        ca,
        da;
    Object.defineProperty(b, '__esModule', { value: !0 }),
        (d = c('./dist/core/core.ns.js')),
        (e = c('Common')),
        (f = c('./dist/core/util/domUtil.js')),
        (g = c('./dist/core/util/common.js')),
        (h = c('./dist/core/worksheet/stylehelper.js')),
        (i = c('./dist/core/core.enum.js')),
        (j = e.Common.pc),
        (k = g.Ul.wl),
        (l = g.Ul.bq),
        (m = e.Common.j.Fa),
        (n = g.Ul.Nl),
        (o = g.Ul.fp),
        (p = g.Ul.lZa),
        (q = parseInt),
        (r = window),
        (s = document),
        (t = null),
        (u = Math.max),
        (v = Math.min),
        (w = Math.pow),
        (x = Math.round),
        (y = 'px'),
        (z = 'none'),
        (A = '.gcTab'),
        (B = 'mousedown' + A),
        (C = 'mousemove' + A),
        (D = 'mouseup' + A),
        (E = 'mouseout' + A),
        (F = 'dblclick' + A),
        (G = 'mousewheel' + A),
        (H = '.spliter'),
        (I = 'mousemove' + H),
        (J = 'mouseup' + H),
        (K = '.tabNameEditor'),
        (L = 'keydown' + K),
        (M = 'focus' + K),
        (N = 'blur' + K),
        (O = 'canvas'),
        (P = '2d'),
        (Q = 'resize'),
        (R = 'navButton'),
        (S = 'tab'),
        (T = 'newSheet'),
        (U = 'blank'),
        (V = 'allSheets'),
        (W = 'black'),
        (X = 'white'),
        (Y = 7),
        (Z = 10),
        ($ = 'navButton'),
        (_ = 'sheetTab'),
        (b.NEW_TAB_SIZE_ASIDE = 28),
        (aa = new e.Common.ResourceManager(d.SR, 'Sheets')),
        (ba = aa.getResource.bind(aa));
    function ea(a, b, c) {
        a.Wq(g.Events.SheetTabClick, { sheet: b, sheetName: b ? b.name() : t, sheetTabIndex: m(c) ? -1 : c });
    }
    function fa(a, b) {
        a.Wq(g.Events.SheetMoving, b);
    }
    function ga(a, b, c, d) {
        a.Wq(g.Events.SheetMoved, { sheet: b, sheetName: b ? b.name() : t, oldIndex: c, newIndex: d });
    }
    function ha(a, b, c, d) {
        var e;
        if (b > c) for (e = c; e < b; e++) a -= d[e];
        else if (b < c) for (e = b; e < c; e++) a += d[e];
        return a;
    }
    function ia(a, b, c, d, e) {
        return ((c < d && a > d) || (c >= d && a < d)) && ((b = ha(b, a, d, e)), (a = d)), { index: a, position: b };
    }
    !(function (a) {
        (a[(a.left = 0)] = 'left'), (a[(a.right = 1)] = 'right'), (a[(a.top = 2)] = 'top'), (a[(a.bottom = 3)] = 'bottom');
    })((ca = b.NavButtonDirection || (b.NavButtonDirection = {}))),
        (da = (function () {
            function a(a) {
                (this.Cj = a),
                    (this.SC = !1),
                    (this.LC = 0),
                    (this.HC = 0),
                    (this.GJc = 6),
                    (this.SJc = 3),
                    (this.RJc = 5),
                    (this.EJc = 5),
                    (this.HJc = 3),
                    (this.NJc = 7),
                    (this.LJc = '...'),
                    (this.buffer = null);
                var b = this;
                (b.OC = t),
                    (b.$C = 0),
                    (b.gq = 0),
                    (b.ZC = 70),
                    (b.lD = -1),
                    (b.iD = -1),
                    (b._font = ''),
                    (b.WC = []),
                    (b.BJc = 0),
                    (b.uD = -1),
                    (b.vD = -1),
                    (b.wD = t),
                    (b.xD = 0),
                    b.Us(new g.Rect(0, 0, 200, 28));
            }
            return (
                (a.prototype.getNewTabBounds = function () {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g = this,
                        h = g.OC.options.useTouchLayout,
                        i = g.Dr(),
                        j = g.TC(),
                        k = (j - 2 * g.NJc) / 2;
                    return (
                        h
                            ? ((e = i.width), g.N7c() || (e /= 2), (a = i.x), (b = i.y), (c = e), (d = j))
                            : ((f = (i.x + i.width - 2 * k) / 2),
                              g.N7c() || (f -= g.O7c()),
                              (a = f),
                              (b = (i.y + j - 2 * k) / 2),
                              (c = 2 * k),
                              (d = 2 * k)),
                        { x: a, y: b, width: c, height: d }
                    );
                }),
                (a.prototype.getCanvas = function () {
                    return this.Xs;
                }),
                (a.prototype.zJc = function () {
                    var a = this,
                        b = a.OC.options.tabStripPosition;
                    return b === i.TabStripPosition.bottom || b === i.TabStripPosition.top;
                }),
                (a.prototype.ws = function (b) {
                    var c, d, e;
                    b &&
                        ((c = this),
                        (d = c.Xs),
                        d && c.no(!0),
                        (e = n(O)),
                        g.En.Kn(e, c.OC),
                        e.setAttribute('id', c.Cj),
                        (c.yD = c.zD()),
                        c.TJc(),
                        b.appendChild(c.yD[0]),
                        b.appendChild(e),
                        (c.Xs = e),
                        f
                            .GC$(e)
                            .bind(B, function (a) {
                                return c.AD(a);
                            })
                            .bind(C, function (a) {
                                return c.BD(a);
                            })
                            .bind(D, function (a) {
                                return c.CD(a);
                            })
                            .bind(E, function (a) {
                                return c.DD(a);
                            })
                            .bind(F, function (a) {
                                return c.ED(a);
                            })
                            .bind(G, function (a) {
                                return c.Rw(a);
                            }),
                        c.fq(),
                        a.ao(c, 'setHost'));
                }),
                (a.prototype.Yv = function (a) {
                    var b,
                        c = this;
                    (c.OC = a), a && ((b = a.options.font), b && b.length > 0 && (c._font = b), c.TJc());
                }),
                (a.prototype.RIc = function (a) {
                    var b = this.OC;
                    b.suspendPaint(), this.SIc(a), b.resumePaint();
                }),
                (a.prototype.SIc = function (a) {
                    var b,
                        c = this,
                        d = -1,
                        e = c.sD();
                    if (!(e.length <= 0))
                        for (;;) {
                            if (((b = c.TIc().tabsInfo), d === b[0].index)) return;
                            if (((d = b[0].index), b[0].index > a)) c.$D(e);
                            else {
                                if (!(b[b.length - 1].index < a || (b[b.length - 1].index === a && b.length > 1))) return;
                                c._D(e);
                            }
                        }
                }),
                (a.prototype.Dr = function () {
                    var a = this.Zs;
                    return new g.Rect(a.x, a.y, a.width, a.height);
                }),
                (a.prototype.Us = function (a) {
                    var b = (this.Zs = new g.Rect(0, 0, 0, 0));
                    (b.x = a.x), (b.y = a.y), (b.width = a.width), (b.height = a.height);
                }),
                (a.prototype.TC = function () {
                    var a = this,
                        b = a.OC.options.newTabVisible;
                    return b ? this.KC : 0;
                }),
                (a.prototype.O7c = function () {
                    var a = this,
                        b = a.OC,
                        c = b.options.allSheetsListVisible;
                    return c !== i.AllSheetsListVisibility.hide ? this.L7c : 0;
                }),
                (a.prototype.P7c = function () {
                    var a = this,
                        b = a.OC,
                        c = b.options.allSheetsListVisible;
                    return c !== i.AllSheetsListVisibility.hide ? this.M7c : 0;
                }),
                (a.prototype.UC = function () {
                    var a = this,
                        b = a.Dr(),
                        c = a.zJc();
                    return c ? b.x + b.width - a.AJc() : b.y + b.height - a.PC();
                }),
                (a.prototype.VC = function () {
                    return 0;
                }),
                (a.prototype.AJc = function () {
                    var a = this,
                        b = i.TabStripPosition.bottom,
                        c = a.OC;
                    return c && (b = c.options.tabStripPosition), b === i.TabStripPosition.bottom ? a.kw : 0;
                }),
                (a.prototype.fq = function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this,
                        h = e.Ws();
                    h &&
                        h.parentNode &&
                        ((a = f.GC$(h.parentNode)),
                        0 !== a.width() &&
                            0 !== a.height() &&
                            ((b = u(a.width(), 0)),
                            (c = u(a.height(), 0)),
                            (h.style.display = z),
                            (h.width = b),
                            (h.height = c),
                            (h.style.display = ''),
                            (h.style.width = b + y),
                            (h.style.height = c + y),
                            (b = h.clientWidth || h.width),
                            (c = h.clientHeight || h.height),
                            (d = e.Dr()),
                            e.Us(new g.Rect(d.x, d.y, b, c)),
                            g.En.Pn(h, b, c),
                            e.repaint()));
                }),
                (a.prototype.YC = function () {
                    return !1;
                }),
                (a.prototype.PC = function () {
                    return 0;
                }),
                (a.prototype._C = function () {
                    return 0;
                }),
                (a.prototype.aD = function () {
                    return 0;
                }),
                (a.prototype.Via = function () {
                    return [];
                }),
                (a.prototype.cD = function () {
                    return 0;
                }),
                (a.prototype.zD = function () {
                    return this.yD ? this.yD : f.GC$(n('div'));
                }),
                (a.prototype.TJc = function () {
                    var a,
                        b,
                        c,
                        d = this,
                        e = d.yD;
                    e &&
                        ((a = d.OC),
                        (b = a ? a.options.tabStripPosition : i.TabStripPosition.bottom),
                        (c = void 0),
                        b === i.TabStripPosition.bottom
                            ? (c = 'gc-tab-indicator-bottom')
                            : b === i.TabStripPosition.top
                            ? (c = 'gc-tab-indicator-top')
                            : b === i.TabStripPosition.left
                            ? (c = 'gc-tab-indicator-left')
                            : b === i.TabStripPosition.right && (c = 'gc-tab-indicator-right'),
                        e.removeClass(),
                        e.addClass(c));
                }),
                (a.prototype.no = function (b) {
                    var c,
                        d = this,
                        e = d.Xs;
                    e && ((c = e.parentNode), f.GC$(e).unbind(B).unbind(C).unbind(D).unbind(F).unbind(E), c && c.removeChild(e)),
                        f.GC$(d.yD).remove(),
                        a.ao(d, 'dispose'),
                        b || (d.OC = t);
                }),
                (a.prototype.UJc = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w = this,
                        x = w.OC,
                        y = x.options.scrollbarAppearance === i.ScrollbarAppearance.mobile,
                        z = x.options.showHorizontalScrollbar,
                        A = w.Dr();
                    if (z && !y && ((c = w.getResizeBarBounds()), x.options.showHorizontalScrollbar && !y && a > c.x && a < A.x + A.width))
                        return { type: 'resize', element: Q };
                    for (
                        d = w.getNavButtonBounds(),
                            e = -1,
                            f = d.startIndex,
                            g = d.x,
                            h = d.endIndex,
                            j = ['first', 'prevArrow', 'nextArrow', 'last', '', 'prevButton', 'nextButton'],
                            k = f;
                        k < h;
                        k++
                    ) {
                        if (g < a && a < g + d.width) {
                            (e = k), (R = j[k]);
                            break;
                        }
                        g += d.width;
                    }
                    if (e !== -1) return { type: $, element: R, index: k };
                    if (
                        ((l = w.getAllSheetsBounds()),
                        (g = l.x),
                        (m = x.options.allSheetsListVisible),
                        (n = !0),
                        w.N7c() && (n = !1),
                        m !== i.AllSheetsListVisibility.hide && g <= a && a < g + l.width && n)
                    )
                        return { type: _, element: V, position: g, index: -1 };
                    if (((o = w.getPreMoreTabBounds()), (g = o.x), (p = 0), (q = w.rw(w.gq)), q !== -1)) {
                        if (g <= a && a < g + o.width) return (R = j[5]), { type: $, element: R, index: 5, position: g };
                        p = w.LC;
                    }
                    if (((r = w.getSheetTabBounds()), (s = x.yJc()), (t = w.WC), (u = w.HC), (v = 0), (g = r.x + p), w.gq > -1))
                        for (k = w.gq; k < s.length && k < t.length; k++)
                            if (s[k].visible() === i.SheetTabVisible.visible) {
                                if (((v = t[k]), g < a && a < g + v + u)) {
                                    if (r.moreTabPos > 0 && a < r.moreTabPos) return { type: _, element: S, index: k, position: g };
                                    if (0 === r.moreTabPos) return { type: _, element: S, index: k, position: g };
                                }
                                g += v + u;
                            }
                    if ((g > r.moreTabPos && r.moreTabPos > 0 && (g = r.moreTabPos), w.rD(w.sD()) !== -1)) {
                        if (g < a && a < g + r.secondMoreTabWidth) return (R = j[6]), { type: $, element: j[6], index: 6, position: g };
                    } else if (g < a && a < g + r.secondMoreTabWidth) return { element: U, position: g };
                    return (
                        (g += r.secondMoreTabWidth),
                        x.options.newTabVisible && g < a && a < g + w.TC() ? { type: _, element: T, position: g, index: -1 } : { element: U }
                    );
                }),
                (a.prototype.VJc = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        j,
                        k,
                        l,
                        m,
                        n = this,
                        o = n.OC,
                        p = n.getNavButtonBounds(),
                        q = -1,
                        r = p.x,
                        s = p.y,
                        t = p.startIndex,
                        v = p.endIndex,
                        w = ['first', 'prevArrow', 'nextArrow', 'last', '', 'prevButton', 'nextButton'];
                    for (c = t; c < v; c++) {
                        if (r < a && a < r + p.width && s < b && b < s + p.height) {
                            (q = c), (R = w[c]);
                            break;
                        }
                        r += p.width;
                    }
                    if (q !== -1) return { type: $, element: R, index: c };
                    if (
                        ((d = n.TC()),
                        (e = o.options.allSheetsListVisible),
                        (f = n.P7c()),
                        (g = !0),
                        n.N7c() && ((f = 0), (g = !1)),
                        (s = u(d, f)),
                        (h = o.yJc()),
                        (j = n.WC),
                        (k = n.BJc),
                        n.gq > -1)
                    )
                        for (c = n.gq; c < h.length && c < j.length; c++)
                            if (h[c].visible() === i.SheetTabVisible.visible) {
                                if (s < b && b < s + k) return { type: _, element: S, index: c, position: s };
                                s += k;
                            }
                    return (
                        (l = n.getNewTabBounds()),
                        o.options.newTabVisible && l.x < a && a < l.x + l.width && l.y < b && b < l.y + l.height
                            ? { type: _, element: T, position: s, index: -1 }
                            : ((m = n.getAllSheetsBounds()),
                              e !== i.AllSheetsListVisibility.hide && m.x < a && a < m.x + m.width && m.y < b && b < m.y + m.height && g
                                  ? { type: _, element: V, position: s, index: -1 }
                                  : s < b && b < s + p.y
                                  ? n.rD(n.sD()) !== -1
                                      ? ((R = w[6]), { type: $, element: w[6], index: 6, position: s })
                                      : { element: U, position: s }
                                  : { element: U })
                    );
                }),
                (a.prototype.hitTest = function (a, b) {
                    var c,
                        d = this,
                        e = d.zJc();
                    return (c = e ? d.UJc(a, b) : d.VJc(a, b));
                }),
                (a.prototype.AD = function (b) {
                    var c,
                        d,
                        e,
                        g,
                        h,
                        i,
                        j,
                        k = this,
                        l = { e: b, r: t };
                    return (
                        a.ao(k, 'preProcessMouseDown', l),
                        (c = l.r),
                        m(c)
                            ? ((d = f.GC$(k.Ws()).offset()),
                              (e = b.pageX - d.left),
                              (g = b.pageY - d.top),
                              (h = k.OC.WJc()),
                              k.FD && k.GD(h, !1),
                              (i = k.hitTest(e, g)),
                              (j = i.element),
                              0 === b.button &&
                                  (j === Q
                                      ? ((k.HD = !0), (k.ID = b.pageX), k.tC())
                                      : j === R
                                      ? k.JD(i.index)
                                      : j === S
                                      ? (k.KD(i.index, i.position, b), k.LD(b, i))
                                      : j === T
                                      ? k.MD(i.position)
                                      : j === V && k.S7c(b),
                                  (h = k.OC.WJc()),
                                  h && !h.isEditing() && h.zt()),
                              (k.ND = !0),
                              !1)
                            : c
                    );
                }),
                (a.prototype.S7c = function (a) {
                    var b = this,
                        c = b.OC;
                    return c.commandManager().execute({ cmd: 'showAllSheetsDialog', mouseEvent: a });
                }),
                (a.prototype.BD = function (b) {
                    var c,
                        d,
                        e,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        u = this,
                        v = u.OC,
                        x = { e: b, r: t };
                    if ((a.ao(u, 'preProcessMouseMove', x), (c = x.r), !m(c))) return c;
                    if (
                        ((d = u.Xs.style),
                        (e = 'default'),
                        (g = 'w-resize'),
                        u.OD && !u.PD && ((h = Math.sqrt(w(u.OD.x - b.pageX, 2) + w(u.OD.y - b.pageY, 2))), h > Z && (u.PD = !0)),
                        u.HD)
                    )
                        (d.cursor = g),
                            (i = b.pageX - u.ID),
                            (j = u.OC.xs.clientWidth),
                            (v.options.tabStripRatio = v.Iv() + i / j),
                            (k = u.AJc() / j),
                            (l = 1),
                            v.Iv() < k
                                ? ((v.options.tabStripRatio = k), (u.ID = u.AJc()))
                                : v.Iv() >= l
                                ? ((v.options.tabStripRatio = l), (u.ID = j))
                                : (u.ID = b.pageX),
                            v.aq();
                    else if (u.PD) u.QD(b.pageX, b.pageY), u.RD(b);
                    else {
                        if (
                            ((u.lD = -1),
                            (u.iD = -1),
                            (n = f.GC$(u.Ws()).offset()),
                            (o = b.pageX - n.left),
                            (p = b.pageY - n.top),
                            (q = u.hitTest(o, p)),
                            (r = q.element),
                            u.OC && u.OC.options.enableAccessibility && ((s = u.cgc(q)), u.OC.dgc(s)),
                            '' === r)
                        )
                            return (d.cursor = e), u.repaint(), !1;
                        r === Q
                            ? (d.cursor = g)
                            : ((d.cursor = e),
                              r === R ? (u.lD = q.index) : r === S ? (u.iD = q.index) : r === T ? (u.iD = -2) : r === V && (u.iD = -3)),
                            u.repaint();
                    }
                    return !1;
                }),
                (a.prototype.cgc = function (a) {
                    var b,
                        c,
                        d = ba(),
                        e = '',
                        f = a.element;
                    return (
                        f === Q
                            ? (e = d.ARIA_Resize)
                            : f === R
                            ? ((b = {
                                  first: d.ARIA_First,
                                  prevArrow: d.ARIA_PreviousArrow,
                                  nextArrow: d.ARIA_NextArrow,
                                  last: d.ARIA_Last,
                                  prevButton: d.ARIA_PreviousButton,
                                  nextButton: d.ARIA_NextButton
                              }),
                              (e = b[R] || ''))
                            : f === S
                            ? ((c = this.OC.XJc(a.index).name()), (e = d.ARIA_SheetTab + ' ' + c.replace(/([0-9]+)/, ' $1 ')))
                            : f === T
                            ? (e = d.ARIA_NewSheet)
                            : f === U && (e = d.ARIA_Blank),
                        e
                    );
                }),
                (a.prototype.CD = function (b) {
                    var c,
                        d = this,
                        e = { e: b, r: t };
                    return (
                        a.ao(d, 'preProcessMouseUp', e),
                        (c = e.r),
                        m(c)
                            ? (d.HD && ((d.HD = !1), d.OC.aq()),
                              d.SD(),
                              d.PD && ((d.PD = !1), d.TD.remove(), d.UD(), d.yD.hide()),
                              (d.OD = t),
                              d.VD(),
                              d.uC(),
                              !d.ND || ((d.ND = !1), !1))
                            : c
                    );
                }),
                (a.prototype.DD = function (b) {
                    var c,
                        d,
                        e,
                        f = this,
                        g = { e: b, r: t };
                    return (
                        a.ao(f, 'preProcessMouseOut', g),
                        (c = g.r),
                        m(c) ? (f.VD(), (d = f.lD), (f.lD = -1), (e = f.iD), (f.iD = -1), (f.lD === d && f.iD === e) || f.repaint(), !1) : c
                    );
                }),
                (a.prototype.tC = function () {
                    var a,
                        b = this;
                    b.WD ||
                        (f
                            .GC$(s)
                            .bind(I, function (a) {
                                b.BD(a);
                            })
                            .bind(J, function (a) {
                                b.CD(a);
                            }),
                        (a = b.OC.getActiveSheet()),
                        a && (a.XD = !0),
                        (b.WD = !0));
                }),
                (a.prototype.uC = function () {
                    if (this.WD) {
                        (this.WD = !1), f.GC$(s).unbind(I).unbind(J);
                        var a = this.OC.getActiveSheet();
                        a && delete a.XD;
                    }
                }),
                (a.prototype.JD = function (a, b) {
                    var c,
                        d,
                        e = this;
                    e.VD(),
                        (c = e.sD()),
                        c.length <= 0 ||
                            ((d = 200),
                            (a %= 4),
                            0 === a
                                ? e.YD(c)
                                : 1 === a
                                ? (b ||
                                      (e.ZD = r.setTimeout(function () {
                                          e.JD(1);
                                      }, d)),
                                  e.$D(c))
                                : 2 === a
                                ? (b ||
                                      (e.ZD = r.setTimeout(function () {
                                          e.JD(2);
                                      }, d)),
                                  e._D(c))
                                : 3 === a && e.aE(c));
                }),
                (a.prototype.KD = function (a, b, c) {
                    var d,
                        e,
                        f,
                        g = this,
                        h = g.OC;
                    (g.$C = a),
                        (g.ZC = b),
                        h.suspendPaint(),
                        (d = h.getActiveSheet()),
                        (e = h.XJc(a)),
                        (e && e.isEditing() && e !== d && ((f = d && d.Cw && d.Cw.V4), !e.gv(void 0, void 0, f))) ||
                            (ea(h, e, a), g.iw(a, c), h.resumePaint(), g.repaint());
                }),
                (a.prototype.BHb = function (a, b, c, d, e, f) {
                    var h = { oldValue: c, newValue: d, sheetName: e, propertyName: 'isSelected', cancel: !1, sheetIndex: f };
                    a.Wq(g.Events.SheetChanging, h),
                        h.cancel || (b.DHb(d), a && a.YJc && a.YJc.repaint(), delete h.cancel, a.Wq(g.Events.SheetChanged, h));
                }),
                (a.prototype.MD = function (a) {
                    var b,
                        c,
                        d,
                        e,
                        f,
                        h = this,
                        i = h.OC,
                        j = h.zJc(),
                        k = i.getActiveSheet();
                    if (
                        (!h.bE || h.bE(k)) &&
                        (ea(i, t, t),
                        (b = i.yJc()),
                        (c = i.getSheetCount()),
                        (d = i.vv(i.wv(c))),
                        b.forEach(function (a) {
                            a.DHb(!1, !0);
                        }),
                        (e = d.name()),
                        (f = { sheetName: e, propertyName: 'insertSheet', cancel: !1, sheetIndex: c }),
                        h.BHb(i, d, !1, !0, e, c),
                        i.Wq(g.Events.SheetChanging, f),
                        !f.cancel)
                    ) {
                        for (
                            i.ow(c, 1, d),
                                i.Wq(g.Events.SheetChanged, { sheetName: d.name(), propertyName: 'insertSheet', sheetIndex: c }),
                                h.$C = c,
                                h.ZC = a,
                                i.ZJc(i.sheets.length - 1, 1, !1, !0);
                            h.$C > h.gq && (h.YC() || h.gq < h.jw(-1));

                        )
                            h.hE(h.gq) && (h.ZC -= j ? h.WC[h.gq] : h.BJc), h.gq++;
                        h.repaint();
                    }
                }),
                (a.prototype.iw = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        h,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o = this,
                        p = o.OC,
                        q = p.yJc(),
                        r = o.zJc(),
                        s = p.getActiveSheet();
                    (o.uYc && !o.uYc(s)) ||
                        ((c = !1),
                        s && s.Cw && s.Cw.V4 && (c = !0),
                        (d = !!b),
                        d && ((h = g.Ul.sl()), (e = h ? b.metaKey : b.ctrlKey), (f = b.shiftKey)),
                        a !== p.eq
                            ? (e
                                  ? ((j = q[a]), j.DHb() ? j.DHb(!1, !0) : (j.DHb(!0, !0), s && !s.DHb() && s.DHb(!0, !0)))
                                  : f
                                  ? ((k = q.slice(v(p.eq, a), u(p.eq, a) + 1)),
                                    q.forEach(function (a) {
                                        a.visible() === i.SheetTabVisible.visible &&
                                            (k.indexOf(a) !== -1 ? a.DHb() || a.DHb(!0, !0) : a.DHb() && a.DHb(!1, !0));
                                    }))
                                  : ((l = q.every(function (a) {
                                        return a.visible() !== i.SheetTabVisible.visible || a.DHb();
                                    })),
                                    (q[a].DHb() && !l) ||
                                        q.forEach(function (a) {
                                            a.DHb(!1, !0);
                                        }),
                                    (j = q[a]),
                                    j.DHb() || j.DHb(!0, !0),
                                    p.ZJc(a, 1, c, !0)),
                              (m = o.jw(o.gq)),
                              (n = !1),
                              (n = r ? o.ZC + o.WC[o.$C] > o._C() : o.ZC + o.BJc >= o._C()),
                              o.$C > o.gq && n && m !== -1 && (o.gq = m))
                            : f &&
                              q.forEach(function (a) {
                                  var b = a.name(),
                                      c = p.getSheetIndex(b);
                                  c !== p.eq && a.DHb() && a.visible() === i.SheetTabVisible.visible && a.DHb(!1, !0);
                              }),
                        o.$C < o.gq && (o.gq = o.rw(o.gq)));
                }),
                (a.prototype.cE = function (a, b) {
                    var c,
                        d,
                        e,
                        h,
                        j,
                        k,
                        l,
                        m,
                        o,
                        p,
                        r,
                        s,
                        u,
                        v,
                        w,
                        x = this,
                        A = x.OC,
                        B = x.zJc(),
                        C = A.options.tabStripPosition,
                        D = q(g.Im.Lm('').zIndex),
                        E = x.hitTest(a, b);
                    if (E.element === S) {
                        if (((c = x.$C), (d = A.XJc(c)), E.index !== c)) return;
                        if (
                            (A.Wq(g.Events.SheetTabDoubleClick, { sheet: d, sheetName: d.name(), sheetTabIndex: c }), !A.options.tabEditable)
                        )
                            return !1;
                        if (((e = g.Vl.Xl()), e && e.endEdit && !e.endEdit())) return;
                        g.Vl.Zl(t),
                            (h = f.GC$(x.Ws()).offset()),
                            (j = A.xv()),
                            (k = f.GC$(j).offset()),
                            (l = f.GC$(j).width()),
                            (m = n('input')),
                            (o = m.style),
                            (m.type = 'text'),
                            (m.value = d.name()),
                            m.setAttribute('contentEditable', 'true'),
                            m.setAttribute('autocomplete', 'off'),
                            (o.position = 'absolute'),
                            (o.margin = '0px'),
                            (o.padding = '0px'),
                            (p = void 0),
                            (r = void 0),
                            (s = void 0),
                            (u = void 0),
                            (v = x.WC[c]),
                            B
                                ? ((u = v - x.EC - x.GC + 2), (s = h.top - k.top + x.aD()), (p = h.left - k.left + x.ZC + x.EC))
                                : ((w = x.Dr()),
                                  (u = v - x.EC - x.GC + 2),
                                  (s = h.top - k.top + x.ZC + x.aD()),
                                  (p = h.left - k.left + w.x + x.GJc + x.HJc),
                                  C === i.TabStripPosition.left && 2007 === D && (p += x.GJc),
                                  C === i.TabStripPosition.right && p + u > l && (r = h.left + w.width - l + x.GJc + x.HJc)),
                            r ? (o.right = r + y) : p && (o.left = p + y),
                            (o.top = s + y),
                            (o.width = u + y),
                            (o.backgroundColor = X),
                            (o.borderWidth = '0px'),
                            (o.outline = z),
                            (o.zIndex = '1'),
                            f.GC$(m).appendTo(j),
                            (x.FD = m),
                            f
                                .GC$(m)
                                .addClass('gc-sheetTabEditor')
                                .bind(L, function (a) {
                                    return 13 === a.keyCode ? (x.GD(d, !1), !1) : 27 === a.keyCode ? (x.GD(d, !0), !1) : void 0;
                                })
                                .bind(M, function () {
                                    (m.selectionStart = 0), (m.selectionEnd = m.value.length);
                                })
                                .bind(N, function () {
                                    x.GD(d, !1);
                                }),
                            m.focus();
                    }
                    return !1;
                }),
                (a.prototype.ED = function (b) {
                    var c,
                        d,
                        e,
                        g,
                        h = this,
                        i = { e: b, r: t };
                    return (
                        a.ao(h, 'preProcessMouseDbClick', i),
                        (c = i.r),
                        m(c) ? ((d = f.GC$(h.Ws()).offset()), (e = b.pageX - d.left), (g = b.pageY - d.top), h.cE(e, g)) : c
                    );
                }),
                (a.prototype.Rw = function (a) {
                    var b,
                        c,
                        d = this,
                        e = d.zJc(),
                        f = !m(d.FD);
                    return (
                        e ||
                            f ||
                            (m(a.wheelDelta) &&
                                m(a.detail) &&
                                ((a.wheelDelta = a.originalEvent.wheelDelta), (a.detail = a.originalEvent.detail)),
                            (b = a.detail ? a.detail : a.wheelDelta),
                            (c = d.sD()),
                            b > 0 ? d.$D(c) : d._D(c)),
                        !1
                    );
                }),
                (a.prototype.GD = function (a, b) {
                    var c,
                        d,
                        e,
                        h = this,
                        i = h.FD;
                    i &&
                        (f.GC$(i).unbind(L).unbind(M).unbind(N),
                        (c = i.value),
                        b === !1 &&
                            ((d = a.name()),
                            c !== d &&
                                ((e = { message: '' }),
                                l(c, h.OC.yJc(), a, e) && !m(c) && '' !== c
                                    ? a.getParent().commandManager().execute({ cmd: 'renameSheet', sheetName: d, name: c })
                                    : a.Wq(g.Events.InvalidOperation, {
                                          sheet: a,
                                          sheetName: a.name(),
                                          invalidType: 5,
                                          message: e.message
                                      }))),
                        i.parentNode.removeChild(i),
                        delete h.FD);
                }),
                (a.prototype.dE = function () {
                    return this.OC.options.allowSheetReorder;
                }),
                (a.prototype.LD = function (a, b) {
                    var c = this;
                    c.dE() ? ((c.vD = b.index), (c.TD = c.eE(c.vD)), (c.OD = new g.Point(a.pageX, a.pageY)), c.tC()) : (c.PD = !1);
                }),
                (a.prototype.eE = function (a) {
                    var b,
                        c,
                        d = this.OC.yJc(),
                        e = d.length;
                    if (!(a >= e || a < 0))
                        return (
                            (b = d[a].name()),
                            b || (b = 'sheet'),
                            (c = f
                                .GC$(n('span'))
                                .text(b)
                                .css({ position: 'absolute', cursor: 'default', 'border-radius': '5px', opacity: '.7' })),
                            c.addClass('ui-widget-header gc-tab-tip-span btn-primary'),
                            c
                        );
                }),
                (a.prototype.VD = function () {
                    var a = this.ZD;
                    a && (clearTimeout(a), (this.ZD = t));
                }),
                (a.prototype.QD = function (a, b) {
                    var c,
                        d,
                        e = this,
                        g = e.TD;
                    g && 0 === f.GC$('.gc-tab-tip-span').length && (g.appendTo(s.body), g.hide()),
                        (c = g.width()),
                        (d = g.height()),
                        g.css({ left: a - c / 2, top: b - d / 2 }),
                        g.show();
                }),
                (a.prototype.RD = function (a) {
                    var b,
                        c,
                        d,
                        e,
                        g,
                        h,
                        j,
                        k = this,
                        l = k.OC,
                        n = f.GC$(k.Ws()),
                        o = n.position(),
                        p = n.offset(),
                        q = a.pageX - p.left,
                        s = a.pageY - p.top,
                        u = k.hitTest(q, s),
                        v = u.element,
                        w = k.Dr(),
                        x = k.VC(),
                        y = k.OC.yJc().length,
                        z = 100,
                        A = l.options.tabStripPosition,
                        B = k.zJc(),
                        C = k.TC(),
                        D = k.yD,
                        E = B ? q : s;
                    (b = B ? w.x + k._C() : w.y + k._C() + C),
                        E > b
                            ? k.wD === t &&
                              k.uD < y &&
                              (k.wD = r.setInterval(function () {
                                  k._D(k.sD()),
                                      k.uD === y
                                          ? (k.SD(),
                                            A === i.TabStripPosition.bottom
                                                ? ((c = o.left + k.fE() - Y / 2), (d = o.top - Y / 2))
                                                : A === i.TabStripPosition.top
                                                ? ((c = o.left + k.fE() - Y / 2), (d = o.top + w.height))
                                                : A === i.TabStripPosition.left
                                                ? ((c = o.left + w.width), (d = o.top + k.fE() - Y / 2))
                                                : A === i.TabStripPosition.right && ((c = o.left - Y / 2), (d = o.top + k.fE() - Y / 2)),
                                            D.show())
                                          : (k.uD++, D.hide()),
                                      D.css({ left: c, top: d });
                              }, z))
                            : E < x
                            ? k.wD === t &&
                              k.uD > 0 &&
                              (k.wD = r.setInterval(function () {
                                  k.$D(k.sD()),
                                      0 === k.uD
                                          ? (k.SD(),
                                            A === i.TabStripPosition.bottom
                                                ? ((c = o.left + x - Y / 2), (d = o.top - Y / 2))
                                                : A === i.TabStripPosition.top
                                                ? ((c = o.left + x - Y / 2), (d = o.top + w.height))
                                                : A === i.TabStripPosition.left
                                                ? ((c = o.left + w.width), (d = o.top + C - Y / 2))
                                                : A === i.TabStripPosition.right && ((c = o.left - Y), (d = o.top + C - Y / 2)),
                                            D.show())
                                          : (k.uD--, D.hide()),
                                      D.css({ left: c, top: d });
                              }, z))
                            : (k.SD(),
                              (v !== S && k.Via().indexOf(v) === -1) ||
                                  ((e = u.index),
                                  v === U && (e = k.uD),
                                  (v !== S || m(e)) && (e = y),
                                  (g = ia(e, u.position, k.vD, y, k.WC)),
                                  (h = g.index),
                                  (j = g.position),
                                  (k.uD = h),
                                  A === i.TabStripPosition.bottom
                                      ? ((c = o.left + j - Y / 2), (d = o.top - Y))
                                      : A === i.TabStripPosition.top
                                      ? ((c = o.left + j - Y / 2), (d = o.top + w.height))
                                      : A === i.TabStripPosition.left
                                      ? ((c = o.left + w.width), (d = o.top + j - Y / 2))
                                      : A === i.TabStripPosition.right && ((c = o.left - Y), (d = o.top + j - Y / 2)),
                                  D.css({ left: c, top: d }),
                                  D.show()));
                }),
                (a.prototype.fE = function () {
                    var a,
                        b = this,
                        c = b.zJc(),
                        d = b.WC,
                        e = b.sD(),
                        f = b.gE(b.gq, e),
                        g = 0,
                        h = b.VC(),
                        i = b.BJc,
                        j = c ? h + b.LC : h;
                    for (a = f; a < e.length; a++) (g = e[a]), c ? ((j += d[g]), (j += b.HC)) : (j += i);
                    return j;
                }),
                (a.prototype.SD = function () {
                    var a = this.wD;
                    a && (clearInterval(a), (this.wD = t));
                }),
                (a.prototype.UD = function () {
                    var a,
                        b,
                        c,
                        d = this,
                        e = d.OC,
                        f = d.uD,
                        g = d.vD,
                        h = e.yJc();
                    if ((e.suspendPaint(), this.vYc(h))) {
                        for (a = [], b = 0; b < h.length; b++) h[b].DHb() && (h[b].DHb(!1), a.push(h[b]));
                        for (b = a.length - 1; b >= 0 && !(e.getSheetIndex(a[b].name()) <= f); b--)
                            e.commandManager().execute({ cmd: 'moveSheet', sheetName: a[b].name(), targetIndex: f });
                        for (f -= 1, b = 0; b < a.length && !(e.getSheetIndex(a[b].name()) > f); b++)
                            e.commandManager().execute({ cmd: 'moveSheet', sheetName: a[b].name(), targetIndex: f });
                    } else
                        (c = e.XJc(g)),
                            f !== -1 &&
                                g !== -1 &&
                                g !== f &&
                                g !== f - 1 &&
                                d.yD.isVisible() &&
                                (g < f - 1 && (f -= 1),
                                e.commandManager().execute({ cmd: 'moveSheet', sheetName: c.name(), targetIndex: f }));
                    e.resumePaint();
                }),
                (a.prototype.vYc = function (a) {
                    var b,
                        c = [];
                    for (b = 0; b < a.length; b++) if (a[b].DHb() && (c.push(a[b]), c.length > 1)) return !0;
                    return !1;
                }),
                (a.prototype.DXc = function (a, b) {
                    var c,
                        d = this,
                        e = d.OC,
                        f = d.sD();
                    return b === e.getSheetCount()
                        ? (d.aE(f), void d.fq())
                        : 0 === b
                        ? (d.YD(f), void d.fq())
                        : ((c = d.EXc(a, b)), void (c && (b > a && b++, d.RIc(b))));
                }),
                (a.prototype.EXc = function (a, b) {
                    var c,
                        d = this,
                        e = d.TIc().tabsInfo,
                        f = !1,
                        g = !1;
                    for (c = 0; c < e.length - 2; c++)
                        if ((a === e[c].index && (f = !0), b === e[c].index && (g = !0), f && g)) return d.fq(), !1;
                    return !0;
                }),
                (a.prototype.sD = function () {
                    var a,
                        b = [],
                        c = this.OC.yJc();
                    for (a = 0; a < c.length; a++) this.hE(a) && b.push(a);
                    return b;
                }),
                (a.prototype.YD = function (a) {
                    a.length > 0 && this.gq !== a[0] && this.OC.startSheetIndex(a[0]);
                }),
                (a.prototype.$D = function (a) {
                    var b, c;
                    a.length > 0 && ((b = this), b.gq > a[0] && ((c = b.rw(b.gq)), c !== -1 && b.OC.startSheetIndex(c)));
                }),
                (a.prototype._D = function (a) {
                    var b, c;
                    a.length > 0 && ((b = this), b.gq < a[a.length - 1] && ((c = b.rD(a)), c !== -1 && b.OC.startSheetIndex(b.jw(b.gq))));
                }),
                (a.prototype.aE = function (a) {
                    if (a.length > 0 && this.gq < a[a.length - 1]) {
                        var b = this.rD(a);
                        b !== -1 && this.OC.startSheetIndex(b);
                    }
                }),
                (a.prototype.rD = function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n;
                    if (a.length > 0)
                        for (
                            b = this,
                                c = b.zJc(),
                                d = b.BJc,
                                e = b._C(),
                                f = 0,
                                g = b.WC,
                                h = void 0,
                                i = void 0,
                                j = b.cD(),
                                k = b.gE(b.gq, a),
                                k === -1 && (k = 0),
                                h = a.length - 1;
                            h >= k;
                            h--
                        )
                            if (
                                ((i = a[h]),
                                (l = c ? g[i] : d),
                                (f += l),
                                h !== a.length - 1 && (f += c ? b.HC : 0),
                                (m = j + f),
                                0 !== h && (m += c ? b.LC : d),
                                m > e)
                            )
                                return (n = void 0), (n = h + 1 < a.length ? a[h + 1] : a[a.length - 1]), b.gq < n ? n : -1;
                    return -1;
                }),
                (a.prototype.rw = function (a) {
                    var b;
                    for (b = a - 1; b >= 0; b--) if (this.hE(b)) return b;
                    return -1;
                }),
                (a.prototype.jw = function (a) {
                    var b,
                        c = this.OC.yJc().length;
                    for (b = a + 1; b < c; b++) if (this.hE(b)) return b;
                    return -1;
                }),
                (a.prototype.gE = function (a, b) {
                    var c;
                    for (c = 0; c <= b.length - 1; c++) if (a === b[c]) return c;
                    return -1;
                }),
                (a.prototype.hE = function (a) {
                    var b = this.OC.XJc(a);
                    return !(!b || b.visible() !== i.SheetTabVisible.visible);
                }),
                (a.prototype.T7c = function () {
                    var a = this,
                        b = a.rw(a.gq),
                        c = a.sD().length * a.BJc,
                        d = a.M7c,
                        e = a.PC() / 2,
                        f = a.Dr().height,
                        g = c + d + e > f;
                    return g || b !== -1;
                }),
                (a.prototype.U7c = function () {
                    var a = this,
                        b = a.rw(a.gq),
                        c = a.rD(a.sD());
                    return b !== -1 || c !== -1;
                }),
                (a.prototype.N7c = function () {
                    var a = this,
                        b = a.OC.options,
                        c = b.allSheetsListVisible,
                        d = a.zJc();
                    if (d) {
                        if (!a.U7c() && c === i.AllSheetsListVisibility.auto) return !0;
                    } else if (!a.T7c() && c === i.AllSheetsListVisibility.auto) return !0;
                }),
                (a.prototype.fw = function () {
                    this.xD++;
                }),
                (a.prototype.gw = function () {
                    var a = this;
                    a.xD--, a.xD <= 0 && ((a.xD = 0), a.repaint());
                }),
                (a.prototype.repaint = function (a) {
                    var b = this.Ws();
                    b && b.getContext && this.jp(b.getContext(P), a);
                }),
                (a.prototype.jp = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        o,
                        p,
                        q,
                        r = this;
                    if (!(r.xD > 0)) {
                        if (((c = r.Dr()), (d = r.Xs), b)) {
                            if (b.x >= c.x + c.width) return;
                            if (b.y >= c.y + c.height) return;
                            if (b.x + b.width > c.width && ((b.width = c.width - b.x), b.width <= 0)) return;
                            if (b.y + b.height > c.height && ((b.height = c.height - b.y), b.height <= 0)) return;
                            if (b.width <= 0 || b.height <= 0) return;
                        }
                        if (
                            ((f = r.buffer),
                            (f &&
                                (!f || (f.width === d.width && f.height === d.height)) &&
                                (f || (f.width === c.width && f.height === c.height))) ||
                                (f && g.En.Rn(r.OC, f), (r.buffer = f = n(O)), g.En.Kn(f, r.OC), g.En.Pn(f, c.width, c.height)),
                            !(c.width <= 0 || c.height <= 0 || (b && (b.width <= 0 || b.height <= 0))))
                        ) {
                            (e = r.buffer.getContext(P)),
                                e.clearRect(0, 0, c.width, c.height),
                                g.Bn.Dn(e, -c.x, -c.y),
                                r.iE(e, b),
                                g.Bn.Dn(e, c.x, c.y),
                                (h = c.x >= 0 ? 0 : -c.x),
                                (i = c.y >= 0 ? 0 : -c.y),
                                (j = h),
                                (k = i),
                                b && ((j = c.x + b.x), (k = c.y + b.y), (c = new g.Rect(j, k, b.width, b.height))),
                                (h = c.x >= 0 ? c.x : 0),
                                (i = c.y >= 0 ? c.y : 0),
                                (o = t),
                                (p = g.En.Ln(d)),
                                (q = g.En.Mn(d)),
                                d && 1 !== p && ((j *= p), (k *= q), (c.x *= p), (c.y *= q), (c.width *= p), (c.height *= q));
                            try {
                                d
                                    ? b
                                        ? ((l = u(c.width - j, 0)), (m = u(c.height - k, 0)))
                                        : ((l = v(c.width - j, u(d.width - c.x, 3))), (m = v(c.height - k, u(d.height - c.y, 3))))
                                    : ((j = b.x), (k = b.y), (l = b.width), (m = b.height)),
                                    d
                                        ? (g.Bn.Cn(a, 1, 1),
                                          a.clearRect(h, i, l, m),
                                          a.drawImage(r.buffer, j, k, l, m, h, i, l, m),
                                          g.Bn.Cn(a, p, q))
                                        : ((e = r.buffer.getContext(P)), (o = e.getImageData(j, k, l, m)));
                            } catch (a) {
                                return;
                            }
                            !d && o && c.width > 0 && c.height > 0 && a.putImageData(o, h, i);
                        }
                    }
                }),
                (a.prototype._Jc = function (a, b) {
                    var c = this,
                        d = c.Dr();
                    b ? a.rect(b.x, b.y, b.width, b.height) : a.rect(d.x, d.y, d.width, d.height), a.clip();
                }),
                (a.prototype.aKc = function (a) {
                    var b,
                        c,
                        d,
                        e = this,
                        f = e.OC,
                        g = e.zJc();
                    for (a.save(), a.font = h.To.Ro(a.font, 'bold'), e.WC = [], d = f.yJc(), c = 0; c < d.length; c++)
                        (b = Math.round(a.measureText(d[c].name()).width) + e.GC + e.EC), e.WC.push(b);
                    g || (e.BJc = o(a.font) + 2 * e.SJc), a.restore();
                }),
                (a.prototype.TIc = function () {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f = this,
                        g = f.OC,
                        h = g.yJc(),
                        j = f.zJc(),
                        k = f.Dr(),
                        l = [],
                        m = f.VC();
                    for (
                        f.N7c() && j && (m -= f.O7c()),
                            a = m,
                            c = f.gq,
                            j && c > 0 && f.rw(c) >= 0 && (a += f.LC),
                            c < 0 && (f.gq = 0),
                            d = f.gq;
                        d < h.length;
                        d++
                    ) {
                        if (((e = h[d].visible()), (b = f.WC[d]), j)) {
                            if (a > k.x + k.width) break;
                        } else if (a > k.y + k.height) break;
                        l.push({ index: d, position: a, width: b, text: h[d].name(), visible: e }),
                            e === i.SheetTabVisible.visible && (a += j ? b + f.HC : f.BJc);
                    }
                    return { tabsInfo: l, newTabStartPosition: a };
                }),
                (a.prototype.iE = function (a, b) {
                    var c,
                        d,
                        e = this,
                        f = e.OC,
                        g = f.options.scrollbarAppearance === i.ScrollbarAppearance.mobile,
                        h = f.options.tabStripPosition,
                        j = f.options.showHorizontalScrollbar;
                    a &&
                        f &&
                        ((c = e.Dr()),
                        a.save(),
                        p(a, e._font),
                        e._Jc(a, b),
                        a.beginPath(),
                        e.aKc(a),
                        (d = e.TIc()),
                        e.dD(a, c),
                        e.fD(a, c, d.newTabStartPosition),
                        e.Q7c(a, c),
                        (d = e.TIc()),
                        e.jE(a, c, d.tabsInfo),
                        e.OC && e.OC.options.tabNavigationVisible && e.kD(a, c),
                        j && !g && h === i.TabStripPosition.bottom && e.nD(a, c),
                        a.beginPath(),
                        a.restore());
                }),
                (a.prototype.dD = function (a, b) {}),
                (a.prototype.fD = function (a, b, c) {}),
                (a.prototype.bKc = function (a, b) {
                    var c,
                        d,
                        e = this,
                        f = e.zJc(),
                        g = e.VC();
                    e.N7c() && (g -= e.O7c()),
                        f ? ((c = b.x + e._C()), a.rect(g, 0, c - g, b.height)) : ((d = e.PC()), a.rect(0, g, b.width, b.height - g - d)),
                        a.clip();
                }),
                (a.prototype.cKc = function (a, b, c) {
                    var d,
                        e,
                        f,
                        g = this,
                        h = g.OC,
                        j = g.zJc(),
                        k = g.$C,
                        l = g.iD;
                    for (d = c.length - 1; d >= 0; d--)
                        (e = c[d]),
                            e.index !== k &&
                                e.visible === i.SheetTabVisible.visible &&
                                ((f = h.MJc(e.text).DHb()),
                                j
                                    ? g.oD(a, e.position, 0, e.width, b.height, e.index, !1, e.index === l, e.text, f)
                                    : g.oD(a, 0, e.position, b.width, g.BJc, e.index, !1, e.index === l, e.text, f));
                }),
                (a.prototype.dKc = function (a, b, c) {
                    var d,
                        e,
                        f = this,
                        g = f.OC,
                        h = g.yJc(),
                        i = f.zJc(),
                        j = f.$C,
                        k = f.gq,
                        l = c[j - k];
                    j >= k &&
                        j < h.length &&
                        l &&
                        l.visible &&
                        ((d = g.WJc()),
                        d &&
                            ((e = d.DHb()),
                            i
                                ? f.oD(a, l.position, 0, l.width, b.height, j, !0, !1, l.text, e)
                                : f.oD(a, 0, l.position, b.width, f.BJc, j, !0, !1, l.text, e)));
                }),
                (a.prototype.eKc = function (a, b) {
                    var c = this,
                        d = c.gq,
                        e = c.zJc(),
                        f = c.VC();
                    d > 0 && c.rw(d) >= 0 && e && c.jD(a, b, d, f);
                }),
                (a.prototype.jE = function (a, b, c) {
                    var d = this,
                        e = d.OC,
                        f = e.yJc();
                    (d.$C = e.fKc()),
                        f.length > 0 &&
                            (a.save(),
                            a.beginPath(),
                            d.bKc(a, b),
                            d.cKc(a, b, c),
                            d.dKc(a, b, c),
                            a.restore(),
                            a.save(),
                            a.beginPath(),
                            d.eKc(a, b),
                            a.restore());
                }),
                (a.prototype.jD = function (a, b, c, d) {}),
                (a.prototype.kD = function (a, b) {}),
                (a.prototype.Q7c = function (a, b) {}),
                (a.prototype.nD = function (a, b) {}),
                (a.prototype.mD = function (a, b, c, d, e, f, g, h, i, j) {}),
                (a.prototype.oD = function (a, b, c, d, e, f, g, h, i, j) {}),
                (a.prototype.Ws = function () {
                    return this.Xs;
                }),
                (a.prototype.kE = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        h = a.createLinearGradient(b.x, b.y, b.width, b.height),
                        j = g.Im.Km(i.VisualState.normal, 'gc-tabStripBackground'),
                        l = j && j.backgroundImage,
                        m = j && j.backgroundColor;
                    if (l && l.indexOf('linear-gradient') !== -1)
                        for (c = k(l), d = 0, e = c.length; d < e; d++) (f = c[d]), h.addColorStop(f.point, f.color);
                    else m && (h.addColorStop(0, '#DDDDDD'), h.addColorStop(1, m));
                    return h;
                }),
                (a.prototype.pD = function (a, b, c, d, e) {
                    var f,
                        h,
                        i,
                        j,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w = this,
                        x = w.zJc(),
                        y = w.Dr();
                    if (
                        (x
                            ? (f = a.createLinearGradient(y.x + 0.7 * y.height, y.y + 0, 0.7 * y.height, y.height))
                            : ((h = y.y),
                              (i = 0),
                              e >= 0 && ((h = e), (i = w.BJc)),
                              (f = a.createLinearGradient(y.x + 0.7 * i, h, 0.7 * i, h + i))),
                        (j = w.OC.MJc(c)),
                        '' === c && w.gq > 0 && (j = w.OC.XJc(w.gq - 1)),
                        (l = j && j.options),
                        (m = l && l.sheetTabColor))
                    )
                        (n = 'rgba(0, 0, 0, 0)'),
                            (a.fillStyle = n),
                            (o = a.fillStyle),
                            (a.fillStyle = g.Rm.Om(j, m)),
                            (p = a.fillStyle),
                            p !== o &&
                                (b
                                    ? (f.addColorStop(0, X), f.addColorStop(0.45, '#F1F6FD'), f.addColorStop(0.9, p), f.addColorStop(1, X))
                                    : (f = p));
                    else if (d)
                        if (((q = d.backgroundImage), (r = d.backgroundColor), q && q.indexOf('linear-gradient') !== -1))
                            for (s = k(q), t = 0, u = s.length; t < u; t++) (v = s[t]), f.addColorStop(v.point, v.color);
                        else r && f.addColorStop(0, r);
                    return f;
                }),
                (a.prototype.qD = function (a, b) {
                    var c = W;
                    return a && (c = a.color), b && j.dc(j.ec(b)) < 127.5 && (c = X), c;
                }),
                a
            );
        })()),
        (b.DC = da),
        g.Zn(da);
}