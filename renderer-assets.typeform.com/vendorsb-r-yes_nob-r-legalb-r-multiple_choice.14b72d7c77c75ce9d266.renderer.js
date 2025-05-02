(() => {
    (self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
        [1978], {
            1048: (D, b, e) => {
                "use strict";
                e.d(b, {
                    z: () => i
                });
                var r = e(17771),
                    u = e(14794),
                    m = e.n(u),
                    i = l => {
                        var c = r.useRef(!1),
                            t = a => {
                                var h;
                                c.current || (c.current = !0, m().trackAnswerChanged(Object.assign({
                                    block_type: l.field.type,
                                    block_index: (h = l.blockIndex) !== null && h !== void 0 ? h : -1,
                                    block_ref: l.field.ref
                                }, a && {
                                    response_prefilled: "browser_autocomplete"
                                })))
                            },
                            n = (a, h) => {
                                m().sendEventWithCache(a, h)
                            };
                        return {
                            trackAnswerChangedOnce: t,
                            trackEvent: n
                        }
                    }
            },
            8043: (D, b, e) => {
                "use strict";
                e.d(b, {
                    s: () => c
                });
                var r = e(94567),
                    u, m, i;

                function l(t, n) {
                    return n || (n = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                        raw: {
                            value: Object.freeze(n)
                        }
                    }))
                }
                var c = r.Ay.ul(u || (u = l([`
  margin: 0;
  padding: 0;
  max-width: 100%;
  min-width: 168px;
  display: inline-flex;
  flex-flow: column wrap;
  align-items: stretch;
  user-select: none;
  margin-block-end: -8px;
  margin-inline-end: 8px;

  `, `

  `, `
`])), t => {
                    var {
                        fullWidth: n
                    } = t;
                    return n && (0, r.AH)(m || (m = l([`
      li {
        max-width: none;
      }
    `])))
                }, t => {
                    var {
                        verticalAlignment: n
                    } = t;
                    return !n && (0, r.AH)(i || (i = l([`
      column-gap: 8px;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
    `])))
                })
            },
            11558: D => {
                var b = typeof Element != "undefined",
                    e = typeof Map == "function",
                    r = typeof Set == "function",
                    u = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

                function m(i, l) {
                    if (i === l) return !0;
                    if (i && l && typeof i == "object" && typeof l == "object") {
                        if (i.constructor !== l.constructor) return !1;
                        var c, t, n;
                        if (Array.isArray(i)) {
                            if (c = i.length, c != l.length) return !1;
                            for (t = c; t-- !== 0;)
                                if (!m(i[t], l[t])) return !1;
                            return !0
                        }
                        var a;
                        if (e && i instanceof Map && l instanceof Map) {
                            if (i.size !== l.size) return !1;
                            for (a = i.entries(); !(t = a.next()).done;)
                                if (!l.has(t.value[0])) return !1;
                            for (a = i.entries(); !(t = a.next()).done;)
                                if (!m(t.value[1], l.get(t.value[0]))) return !1;
                            return !0
                        }
                        if (r && i instanceof Set && l instanceof Set) {
                            if (i.size !== l.size) return !1;
                            for (a = i.entries(); !(t = a.next()).done;)
                                if (!l.has(t.value[0])) return !1;
                            return !0
                        }
                        if (u && ArrayBuffer.isView(i) && ArrayBuffer.isView(l)) {
                            if (c = i.length, c != l.length) return !1;
                            for (t = c; t-- !== 0;)
                                if (i[t] !== l[t]) return !1;
                            return !0
                        }
                        if (i.constructor === RegExp) return i.source === l.source && i.flags === l.flags;
                        if (i.valueOf !== Object.prototype.valueOf && typeof i.valueOf == "function" && typeof l.valueOf == "function") return i.valueOf() === l.valueOf();
                        if (i.toString !== Object.prototype.toString && typeof i.toString == "function" && typeof l.toString == "function") return i.toString() === l.toString();
                        if (n = Object.keys(i), c = n.length, c !== Object.keys(l).length) return !1;
                        for (t = c; t-- !== 0;)
                            if (!Object.prototype.hasOwnProperty.call(l, n[t])) return !1;
                        if (b && i instanceof Element) return !1;
                        for (t = c; t-- !== 0;)
                            if (!((n[t] === "_owner" || n[t] === "__v" || n[t] === "__o") && i.$$typeof) && !m(i[n[t]], l[n[t]])) return !1;
                        return !0
                    }
                    return i !== i && l !== l
                }
                D.exports = function(l, c) {
                    try {
                        return m(l, c)
                    } catch (t) {
                        if ((t.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                        throw t
                    }
                }
            },
            22801: (D, b, e) => {
                "use strict";
                e.r(b), e.d(b, {
                    ar: () => r,
                    ca: () => u,
                    ch: () => m,
                    cs: () => i,
                    da: () => l,
                    de: () => c,
                    di: () => t,
                    el: () => n,
                    en: () => a,
                    es: () => h,
                    et: () => C,
                    fi: () => x,
                    fr: () => A,
                    he: () => s,
                    hr: () => k,
                    hu: () => o,
                    it: () => O,
                    ja: () => g,
                    ko: () => I,
                    lt: () => N,
                    nl: () => S,
                    no: () => R,
                    pl: () => X,
                    pt: () => L,
                    ru: () => y,
                    sv: () => w,
                    tr: () => p,
                    uk: () => T,
                    zh: () => z
                });
                const r = JSON.parse('{"multiple_choice.renderer.other_choice":"\u062E\u064A\u0627\u0631 \u0622\u062E\u0631","multiple_choice.renderer.hint.key":"\u0627\u0644\u0645\u0641\u062A\u0627\u062D","multiple_choice.renderer.otherChoice.placeholderA11y":"\u0623\u062F\u062E\u0644 \u062D\u0642\u0644 \u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0644\u0643\u062A\u0627\u0628\u0629 \u0625\u062C\u0627\u0628\u062A\u0643. \u0627\u0633\u062A\u062E\u062F\u0645 \\"\u0625\u062F\u062E\u0627\u0644\\" \u0644\u0644\u062A\u0623\u0643\u064A\u062F","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u064A\u0645\u0643\u0646\u0643 \u0627\u062E\u062A\u064A\u0627\u0631 {{additional_selections}} \u0625\u0636\u0627\u0641\u064A\u064B\u0627","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u064A\u0645\u0643\u0646\u0643 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"\u0627\u0643\u062A\u0628 \u0625\u062C\u0627\u0628\u062A\u0643","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0628\u064A\u0646 {{min_selection}} \u0648 {{max_selection}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u0627\u062E\u062A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 {{additional_selections}} \u0625\u0636\u0627\u0641\u064A\u064B\u0627","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u0627\u062E\u062A\u0631 {{min_selection}}\u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644","multiple_choice.renderer.label.keyhelper":"\u0627\u0644\u062E\u064A\u0627\u0631 {{x}}","multiple_choice.renderer.other":"\u062E\u064A\u0627\u0631 \u0622\u062E\u0631","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0625\u062C\u0627\u0628\u0629","multiple_choice.renderer.selectionLimit.hint.noMore":"\u062A\u0645!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u0627\u062E\u062A\u0631 {{additional_selections}} \u0625\u0636\u0627\u0641\u064A\u064B\u0627","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u0627\u062E\u062A\u0631 {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u0627\u062E\u062A\u0631 \u0645\u0627 \u062A\u0634\u0627\u0621"}'),
                    u = JSON.parse(`{"multiple_choice.renderer.other_choice":"Altra","multiple_choice.renderer.hint.key":"Tecla","multiple_choice.renderer.otherChoice.placeholderA11y":"Introdueix el camp d'entrada per escriure la teva resposta. Utilitza la tecla Retorn per confirmar-la","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Pots triar-ne {{additional-selections}} m\xE9s","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Pots triar-ne fins a {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Escriu la resposta","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Tria entre {{min_selection}} i {{max_selection}} opcions","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Tria'n {{additional_selections}} m\xE9s com a m\xEDnim","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Tria'n {{min_selection}} com a m\xEDnim","multiple_choice.renderer.label.keyhelper":"Opci\xF3 {{x}}","multiple_choice.renderer.other":"Altra","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Confirma la resposta","multiple_choice.renderer.selectionLimit.hint.noMore":"Fet!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Tria'n {{additional_selections}} m\xE9s","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Tria'n {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Tria'n tantes com vulguis"}`),
                    m = JSON.parse(`{"multiple_choice.renderer.other_choice":"\u5176\u5B83","multiple_choice.renderer.hint.key":"\u6309\u952E","multiple_choice.renderer.otherChoice.placeholderA11y":"\u8FDB\u5165\u610F\u89C1\u5B57\u6BB5\uFF0C\u4EE5\u8F93\u5165\u60A8\u7684\u7B54\u6848\u3002\u4F7F\u7528'enter'\u8FDB\u884C\u786E\u8BA4","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u60A8\u53EF\u4EE5\u518D\u9009\u62E9\u591A{{additional_selections}}\u9879","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u60A8\u6700\u591A\u53EF\u4EE5\u9009\u62E9{{max_selection}}\u9879","multiple_choice.renderer.otherChoice.placeholder":"\u8F93\u5165\u60A8\u7684\u7B54\u6848","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u9009\u62E9{{min_selection}}-{{max_selection}}\u9879","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u81F3\u5C11\u518D\u9009\u62E9\u591A{{additional_selections}}\u9879","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u81F3\u5C11\u9009\u62E9{{min_selection}}\u9879","multiple_choice.renderer.label.keyhelper":"\u9009\u9879{{x}}","multiple_choice.renderer.other":"\u5176\u5B83","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u786E\u8BA4\u7B54\u6848","multiple_choice.renderer.selectionLimit.hint.noMore":"\u5B8C\u6210\uFF01","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u518D\u9009\u62E9\u591A{{additional_selections}}\u9879","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u9009\u62E9{{min_selection}}\u9879","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u53EF\u591A\u9009"}`),
                    i = JSON.parse('{"multiple_choice.renderer.other_choice":"Jin\xE9","multiple_choice.renderer.hint.key":"Kl\xE1vesa","multiple_choice.renderer.otherChoice.placeholderA11y":"Vstupte do vstupn\xEDho pole a napi\u0161te svou odpov\u011B\u010F. Pomoc\xED kl\xE1vesy Enter provedete potvrzen\xED","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"M\u016F\u017Eete zvolit dal\u0161\xED(ch) {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"M\u016F\u017Eete zvolit {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Napi\u0161te odpov\u011B\u010F","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"U\u010Di\u0148te {{min_selection}} a\u017E {{max_selection}} volby (voleb)","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Zvolte nejm\xE9n\u011B dal\u0161\xED(ch) {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Zvolte nejm\xE9n\u011B {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Mo\u017Enost {{x}}","multiple_choice.renderer.other":"Jin\xE9","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Potvrdit odpov\u011B\u010F","multiple_choice.renderer.selectionLimit.hint.noMore":"Hotovo!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Zvolte dal\u0161\xED(ch) {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Zvolte {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Vybrat libovoln\xE9 mno\u017Estv\xED"}'),
                    l = JSON.parse(`{"multiple_choice.renderer.other_choice":"Andet","multiple_choice.renderer.hint.key":"Tast","multiple_choice.renderer.otherChoice.placeholderA11y":"\xC5bn inputfeltet for at indtaste dit svar Brug 'enter' for at bekr\xE6fte","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Du kan v\xE6lge {{additional_selections}} mere","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Du kan v\xE6lge op til {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Indtast dit svar","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"V\xE6lg mellem {{min_selection}} og {{max_selection}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"V\xE6lg mindst {{additional_selections}} mere","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"V\xE6lg mindst {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Mulighed {{x}}","multiple_choice.renderer.other":"Andet","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Bekr\xE6ft dit svar","multiple_choice.renderer.selectionLimit.hint.noMore":"F\xE6rdig!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"V\xE6lg {{additional_selections}} mere","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"V\xE6lg {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"V\xE6lg s\xE5 mange du vil"}`),
                    c = JSON.parse(`{"multiple_choice.renderer.other_choice":"Andere","multiple_choice.renderer.hint.key":"Taste","multiple_choice.renderer.otherChoice.placeholderA11y":"Tippen Sie Ihre Antwort in das Eingabefeld ein. Best\xE4tigen Sie mit 'Enter'","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Sie k\xF6nnen {{additional_sSelections}} mehr w\xE4hlen","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Sie k\xF6nnen bis zu {{max_selection}} w\xE4hlen","multiple_choice.renderer.otherChoice.placeholder":"Geben Sie Ihre Antwort ein.","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"W\xE4hlen Sie {{min_selection}} bis {{max_selection}} Antworten aus","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Bitte w\xE4hlen Sie mindestens {{additional_selections}} mehr","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Bitte w\xE4hlen Sie mindestens {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Option {{x}}","multiple_choice.renderer.other":"Andere","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Antwort best\xE4tigen","multiple_choice.renderer.selectionLimit.hint.noMore":"Fertig!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"W\xE4hlen Sie {{additional_selections}} mehr","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Bitte {{min_selection}} Antworten w\xE4hlen","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"W\xE4hlen Sie so viele wie Sie m\xF6chten"}`),
                    t = JSON.parse(`{"multiple_choice.renderer.other_choice":"Sonstiges","multiple_choice.renderer.hint.key":"Taste","multiple_choice.renderer.otherChoice.placeholderA11y":"Tippen Sie Ihre Antwort in das Eingabefeld ein. Best\xE4tigen Sie mit 'Enter'","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Du kannst {{additional_selections}} mehr w\xE4hlen","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Du kannst bis zu {{max_selection}} w\xE4hlen","multiple_choice.renderer.otherChoice.placeholder":"Gib deine Antwort ein","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Triff zwischen {{min_selection}} und {{max_selection}} Auswahlen","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"W\xE4hle mindestens {{additional_selections}} mehr","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"W\xE4hle mindestens {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Option {{x}}","multiple_choice.renderer.other":"Sonstiges","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Antwort best\xE4tigen","multiple_choice.renderer.selectionLimit.hint.noMore":"Fertig!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"W\xE4hle {{additional_selections}} mehr","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"W\xE4hle {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"W\xE4hlen Sie so viele wie Sie m\xF6chten"}`),
                    n = JSON.parse('{"multiple_choice.renderer.other_choice":"\u0386\u03BB\u03BB\u03BF","multiple_choice.renderer.hint.key":"\u03A0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF","multiple_choice.renderer.otherChoice.placeholderA11y":"\u0395\u03B9\u03C3\u03AD\u03BB\u03B8\u03B5\u03C4\u03B5 \u03C3\u03C4\u03BF \u03C0\u03B5\u03B4\u03AF\u03BF \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03AE \u03C3\u03B1\u03C2. \u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \xABenter\xBB \u03B3\u03B9\u03B1 \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03B5\u03C4\u03B5 {{additional_selections}} \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u039C\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03B5\u03C4\u03B5 \u03AD\u03C9\u03C2 \u03BA\u03B1\u03B9 {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"\u03A0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03AE \u03C3\u03B1\u03C2","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u0394\u03B9\u03B1\u03BB\u03AD\u03BE\u03C4\u03B5 \u03BC\u03B5\u03C4\u03B1\u03BE\u03CD {{min_selection}} \u03BA\u03B1\u03B9 {{max_selection}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD {{additional_selections}} \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD {{min_selection}}","multiple_choice.renderer.label.keyhelper":"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE {{x}}","multiple_choice.renderer.other":"\u0386\u03BB\u03BB\u03BF","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7 \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7\u03C2","multiple_choice.renderer.selectionLimit.hint.noMore":"\u0395\u03B3\u03B9\u03BD\u03B5!\\n","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 {{additional_selections}} \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03B5\u03C4\u03B5 \u03CC\u03C3\u03B1 \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5"}'),
                    a = JSON.parse(`{"multiple_choice.renderer.other_choice":"Other","multiple_choice.renderer.hint.key":"Key","multiple_choice.renderer.otherChoice.placeholderA11y":"Enter the input field to type your answer. Use 'enter' to confirm","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"You can choose {{additional_selections}} more","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"You can choose up to {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Type your answer","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Make between {{min_selection}} and {{max_selection}} choices","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Choose at least {{additional_selections}} more","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Choose at least {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Option {{x}}","multiple_choice.renderer.other":"Other","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Confirm answer","multiple_choice.renderer.selectionLimit.hint.noMore":"Done!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Choose {{additional_selections}} more","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Choose {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Choose as many as you like"}`),
                    h = JSON.parse('{"multiple_choice.renderer.other_choice":"Otro","multiple_choice.renderer.hint.key":"Tecla","multiple_choice.renderer.otherChoice.placeholderA11y":"Accede al campo de texto para escribir tu respuesta. Utiliza \\"intro\u201D o \u201Center\\" para confirmar","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Puedes escoger {{additional_selections}} m\xE1s","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Puedes escoger hasta {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Escribe tu respuesta","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Elige entre {{min_selection}} y {{max_selection}} opciones","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Escoge al menos {{additional_selections}} m\xE1s","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Escoge al menos {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Opci\xF3n {{x}}","multiple_choice.renderer.other":"Otro","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Confirmar respuesta","multiple_choice.renderer.selectionLimit.hint.noMore":"\xA1Hecho!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Escoge {{additional_selections}} m\xE1s","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Escoge {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Elige tantas opciones como desees"}'),
                    C = JSON.parse('{"multiple_choice.renderer.other_choice":"Muu","multiple_choice.renderer.hint.key":"Klahv","multiple_choice.renderer.otherChoice.placeholderA11y":"Sisesta oma vastuse tr\xFCkkimiseks sisendv\xE4li. Kinnitamiseks kasuta klahvi \\\\\\"enter\\\\\\"","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"V\xF5id valida {{additional_selections}} veel","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"V\xF5id valida kuni {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Tr\xFCki oma vastus","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Tee {{min_selection}} ja {{max_selection}} valiku vahel","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Vali v\xE4hemalt {{additional_selections}} veel","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Vali v\xE4hemalt {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Valik {{x}}","multiple_choice.renderer.other":"Muu","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Kinnita vastus","multiple_choice.renderer.selectionLimit.hint.noMore":"Valmis!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Vali {{additional_selections}} veel","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Vali {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Vali palju soovid"}'),
                    x = JSON.parse('{"multiple_choice.renderer.other_choice":"Muu","multiple_choice.renderer.hint.key":"N\xE4pp\xE4in","multiple_choice.renderer.otherChoice.placeholderA11y":"Siirry tekstikentt\xE4\xE4n kirjoittamaan vastauksesi. Paina \\\\\\"enter\\\\\\" vahvistaaksesi","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Voit valita {{additional_selections}} lis\xE4\xE4","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Voit valita jopa {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Kirjoita vastauksesi","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Valitse {{min_selection}} - {{max_selection}} vaihtoehtoa","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Valitse ainakin {{additional_selections}} lis\xE4\xE4","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Valitse ainakin {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Vaihtoehto {{x}}","multiple_choice.renderer.other":"Muu","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Vahvista vastaus","multiple_choice.renderer.selectionLimit.hint.noMore":"Valmis!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Valitse {{additional_selections}} lis\xE4\xE4","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Valitse {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Valitse niin monta kuin haluat"}'),
                    A = JSON.parse(`{"multiple_choice.renderer.other_choice":"Autre","multiple_choice.renderer.hint.key":"Touche","multiple_choice.renderer.otherChoice.placeholderA11y":"Placez-vous dans le champ de saisie pour taper votre r\xE9ponse. Appuyez sur \\\\\\"Entr\xE9e\\\\\\" pour confirmer","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Il vous reste encore {{additional_selections}} choix","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Vous pouvez en choisir jusqu'\xE0 {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Tapez votre r\xE9ponse","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Faites entre {{min_selection}} et {{max_selection}} choix","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Choisissez-en au moins {{additional_selections}} de plus","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Choisissez-en au moins {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Choix {{x}}","multiple_choice.renderer.other":"Autre","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Confirmer la r\xE9ponse","multiple_choice.renderer.selectionLimit.hint.noMore":"Termin\xE9 !","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Choisissez-en {{additional_selections}} de plus","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Choisissez-en {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Choisissez-en autant que vous voulez"}`),
                    s = JSON.parse(`{"multiple_choice.renderer.other_choice":"\u05D0\u05D7\u05E8","multiple_choice.renderer.hint.key":"\u05DE\u05E4\u05EA\u05D7","multiple_choice.renderer.otherChoice.placeholderA11y":"\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E9\u05D3\u05D4 \u05D4\u05E7\u05DC\u05D8 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05D0\u05EA \u05EA\u05E9\u05D5\u05D1\u05EA\u05DA. \u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-'enter' \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D7\u05D5\u05E8 \u05E2\u05D5\u05D3 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D7\u05D5\u05E8 \u05E2\u05D3 {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"\u05D4\u05E7\u05DC\u05D3 \u05D0\u05EA \u05EA\u05E9\u05D5\u05D1\u05EA\u05DA","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u05D1\u05E6\u05E2 \u05D1\u05D7\u05D9\u05E8\u05D4 \u05D1\u05D9\u05DF {{min_selection}} \u05DC-{{max_selection}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u05D1\u05D7\u05E8 \u05DC\u05E4\u05D7\u05D5\u05EA {{additional_selections}} \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u05D1\u05D7\u05E8 \u05DC\u05E4\u05D7\u05D5\u05EA {{min_selection}}","multiple_choice.renderer.label.keyhelper":"\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA {{x}}","multiple_choice.renderer.other":"\u05D0\u05D7\u05E8","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u05D0\u05E9\u05E8 \u05EA\u05E9\u05D5\u05D1\u05D4","multiple_choice.renderer.selectionLimit.hint.noMore":"\u05E1\u05D9\u05D9\u05DE\u05EA!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u05D1\u05D7\u05E8 \u05E2\u05D5\u05D3 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u05D1\u05D7\u05E8 {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u05D1\u05D7\u05E8 \u05DB\u05DE\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4"}`),
                    k = JSON.parse(`{"multiple_choice.renderer.other_choice":"Drugo","multiple_choice.renderer.hint.key":"Tipka","multiple_choice.renderer.otherChoice.placeholderA11y":"U polje za unos teksta unesite va\u0161 odgovor. Za potv\u0111ivanje upotijebite 'enter'","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Mo\u017Eete odabrati jo\u0161 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Mo\u017Eete odabrati do {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Upi\u0161ite svoj odgovor","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Napravite izme\u0111u {{min_selection}} i {{max_selection}} odabira","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Odaberite jo\u0161 najmanje {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Odaberite najmanje {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Opcija {{x}}","multiple_choice.renderer.other":"Drugo","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Potvrdite odgovor","multiple_choice.renderer.selectionLimit.hint.noMore":"Gotovo!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Odaberite jo\u0161 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Odaberite {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Odaberi jednu ili vi\u0161e opcija"}`),
                    o = JSON.parse('{"multiple_choice.renderer.other_choice":"Egy\xE9b","multiple_choice.renderer.hint.key":"Billenty\u0171","multiple_choice.renderer.otherChoice.placeholderA11y":"V\xE1lasza beg\xE9pel\xE9s\xE9hez l\xE9pjen be a beviteli mez\u0151be. Meger\u0151s\xEDt\xE9shez haszn\xE1lja az enter billenty\u0171t","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"M\xE9g ennyit v\xE1laszthatsz: {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Maxim\xE1lisan ennyit v\xE1laszthatsz: {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"G\xE9pelje be a v\xE1laszt","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"V\xE1lassz {{min_selection}} \xE9s {{max_selection}} k\xF6z\xF6tt","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"V\xE1lassz legal\xE1bb m\xE9g ennyit: {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"V\xE1lassz legal\xE1bb ennyit: {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Opci\xF3 {{x}}","multiple_choice.renderer.other":"Egy\xE9b","multiple_choice.renderer.otherChoice.confirmButtonLabel":"V\xE1lasz meger\u0151s\xEDt\xE9se","multiple_choice.renderer.selectionLimit.hint.noMore":"K\xE9sz!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"V\xE1lassz m\xE9g ennyit: {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"V\xE1lassz ennyit: {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Ak\xE1rmennyi v\xE1laszt megjel\xF6lhetsz"}'),
                    O = JSON.parse(`{"multiple_choice.renderer.other_choice":"Altro","multiple_choice.renderer.hint.key":"Tasto","multiple_choice.renderer.otherChoice.placeholderA11y":"Per digitare la tua risposta, inseriscila nel relativo campo. Usa 'invio' per confermare","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Puoi selezionare altre {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Puoi selezionare fino a {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Inserisci la tua risposta","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Seleziona fra le {{min_selection}} e le {{max_selection}} opzioni","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Seleziona almeno altre {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Seleziona almeno {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Opzione {{x}}","multiple_choice.renderer.other":"Altro","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Conferma la risposta","multiple_choice.renderer.selectionLimit.hint.noMore":"Fatto!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Seleziona altre {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Seleziona {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Scegli una o pi\xF9 risposte"}`),
                    g = JSON.parse('{"multiple_choice.renderer.other_choice":"\u305D\u306E\u4ED6","multiple_choice.renderer.hint.key":"\u30AD\u30FC","multiple_choice.renderer.otherChoice.placeholderA11y":"\u5165\u529B\u6B04\u306B\u56DE\u7B54\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u300Center\u300D\u3092\u62BC\u3057\u3066\u78BA\u5B9A\u3057\u307E\u3059","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u3042\u3068{{additional_selections}}\u500B\u9078\u3079\u307E\u3059","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u9078\u629E\u80A2\u3092{{max_selection}}\u500B\u307E\u3067\u9078\u3079\u307E\u3059","multiple_choice.renderer.otherChoice.placeholder":"\u7B54\u3048\u3092\u5165\u529B\u3057\u307E\u3059","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u9078\u629E\u80A2\u3092{{min_selection}}\u500B\u304B\u3089{{max_selection}}\u500B\u307E\u3067\u9078\u3093\u3067\u304F\u3060\u3055\u3044","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u3042\u3068{{additional_selections}}\u500B\u4EE5\u4E0A\u9078\u3093\u3067\u304F\u3060\u3055\u3044","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"{{min_selection}}\u500B\u4EE5\u4E0A\u9078\u3093\u3067\u304F\u3060\u3055\u3044","multiple_choice.renderer.label.keyhelper":"\u9078\u629E\u80A2 {{x}}","multiple_choice.renderer.other":"\u305D\u306E\u4ED6","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u7B54\u3048\u3092\u78BA\u8A8D","multiple_choice.renderer.selectionLimit.hint.noMore":"\u5B8C\u4E86\uFF01","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u3042\u3068{{additional_selections}}\u500B\u9078\u3093\u3067\u304F\u3060\u3055\u3044","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"{{min_selection}}\u500B\u9078\u3093\u3067\u304F\u3060\u3055\u3044","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u8907\u6570\u9078\u629E\u53EF"}'),
                    I = JSON.parse(`{"multiple_choice.renderer.other_choice":"\uAE30\uD0C0","multiple_choice.renderer.hint.key":"\uD0A4","multiple_choice.renderer.otherChoice.placeholderA11y":"\uC785\uB825 \uD544\uB4DC\uC5D0 \uB2F5\uBCC0\uC744 \uC785\uB825\uD558\uC138\uC694. '\uC5D4\uD130 \uD0A4'\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"{{additional_selections}}\uAC1C \uB354 \uC120\uD0DD \uAC00\uB2A5","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\uCD5C\uB300 {{max_selection}}\uAC1C\uAE4C\uC9C0 \uC120\uD0DD \uAC00\uB2A5","multiple_choice.renderer.otherChoice.placeholder":"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"{{min_selection}}\uAC1C\uC5D0\uC11C {{max_selection}}\uAC1C \uC0AC\uC774\uB85C \uC120\uD0DD\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\uCD5C\uC18C\uD55C {{additional_selections}}\uAC1C \uB354 \uC120\uD0DD\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\uCD5C\uC18C\uD55C {{min_selection}}\uAC1C\uB97C \uC120\uD0DD\uD558\uC138\uC694","multiple_choice.renderer.label.keyhelper":"\uC120\uD0DD {{x}}","multiple_choice.renderer.other":"\uAE30\uD0C0","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\uC751\uB2F5 \uB0B4\uC6A9\uC744 \uD655\uC778","multiple_choice.renderer.selectionLimit.hint.noMore":"\uC644\uB8CC!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"{{additional_selections}}\uAC1C \uB354 \uC120\uD0DD\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"{{min_selection}}\uAC1C \uC120\uD0DD\uD558\uC138\uC694","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\uC6D0\uD558\uB294 \uB300\uB85C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624"}`),
                    N = JSON.parse('{"multiple_choice.renderer.other_choice":"Kita","multiple_choice.renderer.hint.key":"klavi\u0161as","multiple_choice.renderer.otherChoice.placeholderA11y":"Paspauskite ant \u012Fvesties laukelio, kad \u012Fra\u0161ytum\u0117te savo atsakym\u0105. Nor\u0117dami patvirtinti, naudokite \u201Eenter\u201C","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Galite pasirinkti dar {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Galite pasirinkti iki {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"\u012Era\u0161yti savo atsakym\u0105","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Atlikite nuo {{min_selection}} iki {{max_selection}} pasirinkim\u0173","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Pasirinkite dar bent {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Pasirinkite bent {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Parinktis {{x}}","multiple_choice.renderer.other":"Kita","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Patvirtinti atsakym\u0105","multiple_choice.renderer.selectionLimit.hint.noMore":"Atlikta!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Pasirinkite dar {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Pasirinkite {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Neribotas pasirinkimo kiekis"}'),
                    S = JSON.parse(`{"multiple_choice.renderer.other_choice":"Overige","multiple_choice.renderer.hint.key":"Toets","multiple_choice.renderer.otherChoice.placeholderA11y":"Typ uw antwoord in het invoerveld. Bevestig met 'enter'","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Je kunt er nog {{additional_selections}} kiezen","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Je kunt er maximaal {{max_selection}} kiezen","multiple_choice.renderer.otherChoice.placeholder":"Typ uw antwoord","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Maak minimaal {{min_selection}} en maximaal {{max_selection}} keuzes","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Kies er ten minste nog {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Kies er ten minste {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Optie {{x}}","multiple_choice.renderer.other":"Overige","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Bevestig antwoord","multiple_choice.renderer.selectionLimit.hint.noMore":"Klaar!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Kies er nog {{additional_selections}} extra","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Kies er {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Kies er zoveel als je wilt"}`),
                    R = JSON.parse(`{"multiple_choice.renderer.other_choice":"Annet","multiple_choice.renderer.hint.key":"Tast","multiple_choice.renderer.otherChoice.placeholderA11y":"G\xE5 til inndatafeltet for \xE5 taste inn svaret ditt. Bruk \\\\\\"enter'\\\\\\" for \xE5 bekrefte","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Du kan velge {{additional_selections}} til","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Du kan velge opptil {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Skriv inn svaret ditt","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Foreta mellom {{min_selection}} og {{max_selection}} valg","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Velg minst {{additional_selections}} til","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Velg minst {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Alternativ {{x}}","multiple_choice.renderer.other":"Annet","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Bekreft svar","multiple_choice.renderer.selectionLimit.hint.noMore":"Ferdig!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Velg {{additional_selections}} til","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Velg {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Velg s\xE5 mange du vil"}`),
                    X = JSON.parse('{"multiple_choice.renderer.other_choice":"Inne","multiple_choice.renderer.hint.key":"Klawisz","multiple_choice.renderer.otherChoice.placeholderA11y":"Wejd\u017A w pole wprowadzania danych, aby wpisa\u0107 odpowied\u017A. U\u017Cyj przycisku \u201Eenter\u201D, aby potwierdzi\u0107","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Mo\u017Cesz wybra\u0107 jeszcze {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Mo\u017Cesz wybra\u0107 maksymalnie {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Wpisz swoj\u0105 odpowied\u017A","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Wybierz od {{min_selection}} do {{max_selection}} odpowiedzi","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Wybierz jeszcze co najmniej {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Wybierz co najmniej {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Odpowied\u017A {{x}}","multiple_choice.renderer.other":"Inne","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Potwierd\u017A odpowied\u017A","multiple_choice.renderer.selectionLimit.hint.noMore":"Zrobione!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Wybierz jeszcze {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Wybierz {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Wybierz, ile chcesz"}'),
                    L = JSON.parse(`{"multiple_choice.renderer.other_choice":"Outro","multiple_choice.renderer.hint.key":"Tecla","multiple_choice.renderer.otherChoice.placeholderA11y":"Entre no campo de texto para digitar sua resposta. Use 'enter' para confirmar","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Voc\xEA pode escolher mais {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Voc\xEA pode escolher at\xE9 {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Digite sua resposta","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"Fa\xE7a entre {{min_selection}} e {{max_selection}} escolhas","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"Escolha pelo menos mais {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"Escolha pelo menos {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Op\xE7\xE3o {{x}}","multiple_choice.renderer.other":"Outro","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Confirmar resposta","multiple_choice.renderer.selectionLimit.hint.noMore":"Conclu\xEDdo!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"Escolha mais {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"Escolha {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"Podes selecionar v\xE1rias op\xE7\xF5es"}`),
                    y = JSON.parse('{"multiple_choice.renderer.other_choice":"\u0414\u0440\u0443\u0433\u043E\u0435","multiple_choice.renderer.hint.key":"\u041A\u043D\u043E\u043F\u043A\u0430","multiple_choice.renderer.otherChoice.placeholderA11y":"\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0439 \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \\\\\\"\u0432\u0432\u043E\u0434\\\\\\" (enter)","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0449\u0435 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043E {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0442\u0432\u0435\u0442","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442 {{min_selection}} \u0434\u043E {{max_selection}} \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0449\u0435 \u043C\u0438\u043D\u0438\u043C\u0443\u043C {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C {{min_selection}}","multiple_choice.renderer.label.keyhelper":"\u0412\u0430\u0440\u0438\u0430\u043D\u0442 {{x}}","multiple_choice.renderer.other":"\u0414\u0440\u0443\u0433\u043E\u0435","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442","multiple_choice.renderer.selectionLimit.hint.noMore":"\u0413\u043E\u0442\u043E\u0432\u043E!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0449\u0435 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0433\u043E\u0434\u043D\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432"}'),
                    w = JSON.parse('{"multiple_choice.renderer.other_choice":"Annat","multiple_choice.renderer.hint.key":"Tangent","multiple_choice.renderer.otherChoice.placeholderA11y":"S\xE4tt mark\xF6ren i f\xE4ltet f\xF6r att ange ditt svar. Anv\xE4nd \\\\\\"Enter\\\\\\" f\xF6r att bekr\xE4fta","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"Du kan v\xE4lja {{additional_selections}} till","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"Du kan v\xE4lja upp till {{max_selection}}","multiple_choice.renderer.otherChoice.placeholder":"Skriv ditt svar","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"G\xF6r mellan {{min_selection}} och {{max_selection}} val","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"V\xE4lj minst {{additional_selections}} till","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"V\xE4lj minst {{min_selection}}","multiple_choice.renderer.label.keyhelper":"Alternativ {{x}}","multiple_choice.renderer.other":"Annat","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Bekr\xE4fta svar","multiple_choice.renderer.selectionLimit.hint.noMore":"Klart!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"V\xE4lj {{additional_selections}} till","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"V\xE4lj {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"V\xE4lj s\xE5 m\xE5nga du vill"}'),
                    p = JSON.parse(`{"multiple_choice.renderer.other_choice":"Di\u011Fer","multiple_choice.renderer.hint.key":"Anahtar","multiple_choice.renderer.otherChoice.placeholderA11y":"Bilgi alan\u0131na girerek cevab\u0131n\u0131 yaz. Onaylamak i\xE7in 'enter' tu\u015Funu kullan","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"{{additional_selections}} adet daha se\xE7ebilirsiniz","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"En fazla {{max_selection}} adet se\xE7ebilirsiniz","multiple_choice.renderer.otherChoice.placeholder":"Cevab\u0131n\u0131 yaz","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"En az {{min_selection}} ile en fazla {{max_selection}} adet se\xE7im yap\u0131n","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"En az {{additional_selections}} adet daha se\xE7in","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"En az {{min_selection}} adet se\xE7in","multiple_choice.renderer.label.keyhelper":"Se\xE7enek {{x}}","multiple_choice.renderer.other":"Di\u011Fer","multiple_choice.renderer.otherChoice.confirmButtonLabel":"Cevab\u0131n\u0131 onayla","multiple_choice.renderer.selectionLimit.hint.noMore":"Bitti!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"{{additional_selections}} adet daha se\xE7in","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"{{min_selection}} adet se\xE7in","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u0130stedi\u011Finiz kadar se\xE7im yap\u0131n"}`),
                    T = JSON.parse('{"multiple_choice.renderer.other_choice":"\u0406\u043D\u0448\u0435","multiple_choice.renderer.hint.key":"\u041A\u043B\u0430\u0432\u0456\u0448\u0430","multiple_choice.renderer.otherChoice.placeholderA11y":"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C \u0443 \u043F\u043E\u043B\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F, \u0449\u043E\u0431 \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C. \u0414\u043B\u044F \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \xABEnter\xBB","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0449\u0435 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0434\u043E {{maxSelection}}","multiple_choice.renderer.otherChoice.placeholder":"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0432\u043E\u044E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u0417\u0440\u043E\u0431\u0456\u0442\u044C \u0432\u0456\u0434 {{min_selection}} \u0434\u043E {{max_selection}} \u0432\u0438\u0431\u043E\u0440\u0456\u0432","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0440\u0438\u043D\u0430\u0439\u043D\u0456 \u0449\u0435 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0440\u0438\u043D\u0430\u0439\u043D\u0456 {{minSelection}}","multiple_choice.renderer.label.keyhelper":"\u0412\u0430\u0440\u0456\u0430\u043D\u0442 {{x}}","multiple_choice.renderer.other":"\u0406\u043D\u0448\u0435","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C","multiple_choice.renderer.selectionLimit.hint.noMore":"\u0413\u043E\u0442\u043E\u0432\u043E!","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0449\u0435 {{additional_selections}}","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C {{min_selection}}","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432"}'),
                    z = JSON.parse('{"multiple_choice.renderer.other_choice":"\u5176\u4ED6","multiple_choice.renderer.hint.key":"\u9375","multiple_choice.renderer.otherChoice.placeholderA11y":"\u9032\u5165\u8F38\u5165\u6B04\u4F4D\u4EE5\u9375\u5165\u7B54\u6848\u3002 \u4F7F\u7528\u300Center\u300D\u78BA\u8A8D","multiple_choice.renderer.selectionLimit.hint.selectUpToXMore":"\u60A8\u53EF\u4EE5\u518D\u9078\u64C7{{additional_selections}}\u9805","multiple_choice.renderer.selectionLimit.hint.selectUpToX":"\u60A8\u6700\u591A\u53EF\u4EE5\u9078\u64C7{{max_selection}}\u9805","multiple_choice.renderer.otherChoice.placeholder":"\u8F38\u5165\u60A8\u7684\u7B54\u6848","multiple_choice.renderer.selectionLimit.hint.selectXYchoices":"\u9078\u64C7{{min_selection}}-{{max_selection}}\u9805","multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore":"\u81F3\u5C11\u518D\u9078\u64C7{{additional_selections}}\u9805","multiple_choice.renderer.selectionLimit.hint.selectAtLeastX":"\u81F3\u5C11\u9078\u64C7{{min_selection}}\u9805","multiple_choice.renderer.label.keyhelper":"\u9078\u9805{{x}}","multiple_choice.renderer.other":"\u5176\u4ED6","multiple_choice.renderer.otherChoice.confirmButtonLabel":"\u78BA\u8A8D\u7B54\u6848","multiple_choice.renderer.selectionLimit.hint.noMore":"\u5B8C\u6210\uFF01","multiple_choice.renderer.selectionLimit.hint.selectXMore":"\u518D\u9078\u64C7{{additional_selections}}\u9805","multiple_choice.renderer.selectionLimit.hint.selectXchoices":"\u9078\u64C7{{min_selection}}\u9805","multiple_choice.renderer.selectionLimit.hint.selectUnlimited":"\u53EF\u8907\u9078"}')
            },
            29017: (D, b, e) => {
                "use strict";
                e.d(b, {
                    QT: () => K,
                    cg: () => B,
                    Ay: () => J
                });
                var r = e(17771),
                    u = e(73795),
                    m = e(57773),
                    i = e(54407),
                    l = e(34502),
                    c = e(47421),
                    t = e(85829),
                    n = e(97600),
                    a = e(1048),
                    h = e(64343),
                    C = e(9206),
                    x = e(33165),
                    A = e(34717),
                    s = e(32336),
                    k = e(94567),
                    o = e(87506),
                    O = e(8043),
                    g = e(61268),
                    I = e(76601),
                    N = e(32663),
                    S = e(40854),
                    R = e(48004),
                    X = e(4478),
                    L = M => M("block.multipleChoice.hint", "multiple_choice.renderer.selectionLimit.hint.selectUnlimited"),
                    y = (M, d, _) => _ === 0 ? M("block.multipleChoice.selectionLimit.hint.selectUpToX", "multiple_choice.renderer.selectionLimit.hint.selectUpToX", {
                        max_selection: d
                    }) : d === _ ? "" : M("block.multipleChoice.selectionLimit.hint.selectUpToXMore", "multiple_choice.renderer.selectionLimit.hint.selectUpToXMore", {
                        additional_selections: d - _
                    }),
                    w = (M, d, _) => _ === 0 ? M("block.multipleChoice.selectionLimit.hint.selectAtLeastX", "multiple_choice.renderer.selectionLimit.hint.selectAtLeastX", {
                        min_selection: d
                    }) : d <= _ ? "" : M("block.multipleChoice.selectionLimit.hint.selectAtLeastXMore", "multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore", {
                        additional_selections: d - _
                    }),
                    p = (M, d, _) => _ === 0 ? M("block.multipleChoice.selectionLimit.hint.selectXchoices", "multiple_choice.renderer.selectionLimit.hint.selectXchoices", {
                        min_selection: d
                    }) : d === _ ? "" : M("block.multipleChoice.selectionLimit.hint.selectXMore", "multiple_choice.renderer.selectionLimit.hint.selectXMore", {
                        additional_selections: d - _
                    }),
                    T = (M, d, _, f) => f === 0 ? M("block.multipleChoice.selectionLimit.hint.selectXYchoices", "multiple_choice.renderer.selectionLimit.hint.selectXYchoices", {
                        min_selection: d,
                        max_selection: _
                    }) : f < d ? M("block.multipleChoice.selectionLimit.hint.selectAtLeastXMore", "multiple_choice.renderer.selectionLimit.hint.selectAtLeastXMore", {
                        additional_selections: d - f
                    }) : f >= d && f < _ ? M("block.multipleChoice.selectionLimit.hint.selectUpToXMore", "multiple_choice.renderer.selectionLimit.hint.selectUpToXMore", {
                        additional_selections: _ - f
                    }) : "",
                    z = M => {
                        var {
                            t: d,
                            minSelection: _,
                            maxSelection: f,
                            selectionCount: F
                        } = M;
                        return !_ && !f ? L(d) : !_ && f ? y(d, f, F) : _ && !f ? w(d, _, F) : _ && f ? _ === f ? p(d, _, F) : T(d, _, f, F) : ""
                    },
                    V = M => {
                        var {
                            textAlign: d = R.Fm.LEFT,
                            color: _,
                            maxSelection: f,
                            minSelection: F,
                            selectionCount: H,
                            t: le
                        } = M, v = z({
                            t: le,
                            minSelection: F,
                            maxSelection: f,
                            selectionCount: H
                        });
                        return v ? r.createElement(S.A, {
                            bottom: s.LG.bottomHint
                        }, r.createElement(A.Ay, {
                            align: d,
                            "aria-live": "polite",
                            color: _,
                            fontWeight: "regular",
                            htmlTag: "p",
                            type: s.go.multipleChoiceHint
                        }, (0, X.default)(v))) : null
                    },
                    U = e(52809),
                    W = e(39912),
                    ie = e(64944),
                    te = e(22801),
                    G = e(32652),
                    Q;

                function q(M, d) {
                    return d || (d = M.slice(0)), Object.freeze(Object.defineProperties(M, {
                        raw: {
                            value: Object.freeze(d)
                        }
                    }))
                }
                var ee = k.Ay.div(Q || (Q = q([`
  min-height: 30px;
  display: inline-block;
`]))),
                    j = M => {
                        var {
                            allowOtherChoice: d = !1,
                            answer: _,
                            ariaDescribedBy: f,
                            ariaLabelledBy: F,
                            canSelectMore: H,
                            disabled: le = !1,
                            enableSelectionCheckmark: v = !0,
                            fieldRef: oe,
                            focusableRef: ke,
                            formattedChoices: _e,
                            getCustomMessage: Oe,
                            isBlockFocused: ye,
                            isOtherChoiceEditing: E,
                            locale: Ce,
                            maxSelection: Se,
                            minSelection: he,
                            onChangeHandler: fe,
                            otherChoice: ve,
                            otherChoiceRef: Me,
                            selectOtherChoiceHandler: Ae,
                            setIsOtherChoiceEditing: Xe,
                            showKeyHintOnChoices: ae,
                            theme: ne,
                            uniqueId: Ee,
                            verticalAlignment: de = !1
                        } = M, me, {
                            t: ue
                        } = (0, ie.c)(te, Ce, Oe), Ue = (0, m.dv)(), Le = (Y, ce) => {
                            ye && ((0, o.f2)(ce) || ((0, o.C8)(ce) || (0, o.Ci)(ce)) && fe(Y, ce))
                        }, se = (0, U.rQ)(ne), we = !!(d && Me && Ae && Xe), pe = (0, G.L9)(ne, _e.length, we);
                        return r.createElement("div", {
                            "data-qa": "checkboxlist",
                            "data-ref": oe
                        }, r.createElement(ee, null, r.createElement(V, {
                            t: ue,
                            color: (me = ne.colors) === null || me === void 0 ? void 0 : me.secondary,
                            id: (0, u.xo)(Ee),
                            maxSelection: Se,
                            minSelection: he,
                            selectionCount: _.length
                        })), r.createElement("br", null), r.createElement(O.s, {
                            "aria-labelledby": F,
                            verticalAlignment: de,
                            fullWidth: pe
                        }, _e.map((Y, ce) => {
                            var ge = _.includes(Y.ref),
                                ze = !le && (ge || H);
                            return r.createElement(W.R, {
                                key: "choice-container-".concat(Y.ref),
                                color: se,
                                verticalAlignment: de,
                                "aria-label": Y.label,
                                breakpoint: Ue
                            }, r.createElement(g.n, {
                                key: Y.ref,
                                index: ce,
                                choiceRef: Y.ref,
                                label: Y.label,
                                selected: ge,
                                selectable: ze,
                                disabled: !ze,
                                theme: ne,
                                ariaDescribedBy: f,
                                t: ue,
                                tabIndex: 0,
                                onClick: fe,
                                onKeyDown: xe => Le(Y.ref, xe),
                                showKeyHintOnChoices: ae,
                                enableSelectionCheckmark: v,
                                appraisal: Y.appraisal,
                                focusableRef: ce === 0 ? ke : void 0
                            }, r.createElement(A.Ay, {
                                type: s.go.multipleChoiceLabel
                            }, r.createElement(I.A, null, Y.label))))
                        }), we && r.createElement(N.H, {
                            index: _e.length,
                            ariaDescribedBy: f,
                            selectedValue: ve,
                            disabled: !H && !ve,
                            t: ue,
                            choiceRef: Me,
                            onSelect: Ae,
                            theme: ne,
                            verticalAlignment: de,
                            isFocused: !!ve,
                            tabIndex: 0,
                            isEditing: E,
                            setIsEditing: Xe,
                            showKeyHintOnChoices: ae
                        })))
                    },
                    Z = e(50089),
                    K = 300,
                    B = M => {
                        var d, _, {
                                answer: f = [],
                                ariaLabelledBy: F,
                                blockChangeTime: H,
                                blockIndex: le,
                                field: v,
                                focusableRef: oe,
                                getCustomMessage: ke,
                                hasBeenInteractedWith: _e,
                                isActive: Oe,
                                isInInlineGroup: ye,
                                knowledgeQuizProps: E,
                                locale: Ce = "en",
                                onChange: Se,
                                onCommit: he,
                                showKeyHintOnChoices: fe = !0,
                                theme: ve,
                                validationResult: Me,
                                value: Ae
                            } = M,
                            {
                                trackAnswerChangedOnce: Xe
                            } = (0, a.z)(M),
                            ae = (P, $) => {
                                Se(P), Xe(!!($ != null && $.isFromPrefilledAnswer))
                            },
                            {
                                choices: ne,
                                randomize: Ee,
                                vertical_alignment: de,
                                allow_other_choice: me,
                                allow_multiple_selection: ue
                            } = v.properties,
                            Ue = de != null ? de : !1,
                            Le = me != null ? me : !1,
                            se = ue != null ? ue : !1,
                            we = (d = v.validations) === null || d === void 0 ? void 0 : d.min_selection,
                            pe = (_ = v.validations) === null || _ === void 0 ? void 0 : _.max_selection,
                            Y = pe === void 0 || pe === 0 || f.length < pe,
                            ce = !!Object.keys(Me || {}).length,
                            ge = "".concat(v.ref, "-multiple-choice"),
                            ze = (0, u.gt)({
                                isErrorMessageVisible: ce,
                                hasInputInstructions: !1,
                                additionalIds: "",
                                uniqueId: ge
                            }) || "",
                            {
                                result: xe,
                                correctChoices: Be
                            } = (0, r.useMemo)(() => {
                                if (E != null && E.showFeedback) {
                                    var {
                                        result: P,
                                        correctChoices: $
                                    } = (0, Z.t)(Object.assign(Object.assign({}, v), {
                                        scoring: v.scoring
                                    }), f);
                                    return {
                                        result: P,
                                        correctChoices: $
                                    }
                                }
                                return {}
                            }, [v, f, E == null ? void 0 : E.showFeedback]),
                            be = (0, r.useMemo)(() => {
                                var P, $ = ne;
                                return Ee === !0 && ($ = (0, l.C)(ne, v.ref)), E != null && E.showFeedback && ((P = v.scoring) === null || P === void 0 ? void 0 : P.type) === C.De.choicesAllCorrect && Be && ($ = $.map(re => Be.includes(re.ref) ? Object.assign(Object.assign({}, re), {
                                    appraisal: C.V0.correct
                                }) : f.includes(re.ref) ? Object.assign(Object.assign({}, re), {
                                    appraisal: C.V0.incorrect
                                }) : re)), $
                            }, [ne, Ee, E == null ? void 0 : E.showFeedback, v.scoring, Be, f]),
                            De = (0, r.useMemo)(() => new Set(be.map(P => P.ref)), [be]),
                            [Ke, Pe] = (0, r.useState)(!1),
                            Ve = (0, r.useMemo)(() => f == null ? void 0 : f.find(P => !De.has(P)), [ne, f]),
                            Te = "".concat(v.ref, "-other"),
                            Je = (P, $) => {
                                var re = P == null ? void 0 : P.trim(),
                                    je = f.filter(We => De.has(We));
                                if (!re) {
                                    ae(je);
                                    return
                                }
                                Y && (ae(se ? [...je, re] : [re]), !se && !ye && he && setTimeout(() => he($), H))
                            },
                            Ie = (P, $) => {
                                if (P !== Te) {
                                    var re = f.includes(P);
                                    if (re) {
                                        ae(f.filter(je => je !== P));
                                        return
                                    }
                                    Y && (ae(se ? [...f, P] : [P]), !se && he && !(E != null && E.useKnowledgeQuizBehaviour) && setTimeout(() => he($), H))
                                }
                            },
                            Ne = (0, c.c)({
                                isInInlineGroup: ye,
                                ref: v.ref
                            });
                        (0, n.W)({
                            isActive: Oe,
                            allowMultipleSelection: se,
                            blockChangeTime: H,
                            formattedChoices: be,
                            allowOtherChoice: Le,
                            blockIndex: le,
                            ref: v.ref,
                            hasBeenInteractedWith: _e,
                            onChange: ae,
                            onCommit: he,
                            otherChoiceRef: Te,
                            setIsOtherChoiceEditing: Pe,
                            value: Ae
                        }), (0, t.c)({
                            isActive: Oe,
                            isBlockFocused: Ne,
                            answer: f,
                            formattedChoices: be,
                            allowOtherChoice: Le,
                            otherChoiceRef: Te,
                            setIsOtherChoiceEditing: Pe,
                            onChangeHandler: Ie,
                            showKeyHintOnChoices: fe,
                            disabled: E == null ? void 0 : E.showFeedback
                        });
                        var Re = {
                            allowOtherChoice: Le,
                            answer: f,
                            ariaDescribedBy: ze,
                            ariaLabelledBy: F,
                            canSelectMore: Y,
                            disabled: E == null ? void 0 : E.showFeedback,
                            enableSelectionCheckmark: !(E != null && E.useKnowledgeQuizBehaviour),
                            fieldRef: v.ref,
                            focusableRef: ce ? oe : void 0,
                            formattedChoices: be,
                            getCustomMessage: ke,
                            isBlockFocused: Ne,
                            isOtherChoiceEditing: Ke,
                            locale: Ce,
                            onChangeHandler: Ie,
                            otherChoice: Ve,
                            otherChoiceRef: Te,
                            selectOtherChoiceHandler: Je,
                            setIsOtherChoiceEditing: Pe,
                            showKeyHintOnChoices: fe,
                            theme: ve,
                            verticalAlignment: Ue
                        };
                        return r.createElement(m.Ay, null, se ? r.createElement(j, Object.assign({
                            minSelection: we,
                            maxSelection: pe,
                            uniqueId: ge
                        }, Re)) : r.createElement(x.q, Object.assign({}, Re)), !!(E != null && E.showFeedback) && !!xe && r.createElement(i.a, {
                            marginTop: 3
                        }, r.createElement(h.D, {
                            result: xe,
                            locale: Ce,
                            getCustomMessage: ke
                        })))
                    };
                const J = B
            },
            32652: (D, b, e) => {
                "use strict";
                e.d(b, {
                    Qv: () => l,
                    CX: () => a,
                    L9: () => A
                });
                var r = e(52809),
                    u = e(9206);
                const m = JSON.parse('{"type":"multiple_choice","title":"","properties":{"randomize":false,"vertical_alignment":true,"allow_other_choice":false,"allow_multiple_selection":false},"validations":{"required":false}}');
                var i = null,
                    l = u.G0 ? 0 : 500;

                function c(s) {
                    return {
                        properties: {
                            choices: [(0, r.wo)()]
                        }
                    }
                }
                var t = (0, r.aG)(m, c),
                    n = s => s.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
                    a = s => {
                        var k;
                        if (typeof window == "undefined" || !(!((k = window == null ? void 0 : window.location) === null || k === void 0) && k.hash)) return null;
                        var o = window.location.hash.match(new RegExp("answers-".concat(n(s), "=([^&]+)")));
                        return o ? o[1].split(",").map(decodeURIComponent).map(O => isNaN(Number(O)) ? O : parseInt(O, 10)) : null
                    },
                    h = s => new Promise(k => setTimeout(k, s)),
                    C = () => h(l),
                    x = () => h(i),
                    A = function(k, o) {
                        var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                            g;
                        return ((g = k == null ? void 0 : k.fields) === null || g === void 0 ? void 0 : g.alignment) === "center" ? O ? o <= 1 : o <= 2 : !1
                    }
            },
            32663: (D, b, e) => {
                "use strict";
                e.d(b, {
                    H: () => X
                });
                var r = e(17771),
                    u = e(34717),
                    m = e(32336),
                    i = e(22537),
                    l = e(57773),
                    c = e(61268),
                    t = e(39912),
                    n = e(52809),
                    a = e(87506),
                    h = e(80508),
                    C = e(94567),
                    x = e(47571),
                    A = e(87559),
                    s, k, o;

                function O(L, y) {
                    return y || (y = L.slice(0)), Object.freeze(Object.defineProperties(L, {
                        raw: {
                            value: Object.freeze(y)
                        }
                    }))
                }
                var g = 40,
                    I = C.Ay.div(s || (s = O([`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 4px;
  padding-inline-end: 4px;
`]))),
                    N = (0, C.Ay)(x.Ay)(k || (k = O([`
  position: absolute;
  inset-inline-end: 4px;
`]))),
                    S = C.Ay.input(o || (o = O([`
  width: `, `;
  border: none;
  background-color: transparent;
  color: `, `;
  font-weight: 500;
  padding: 0;

  `, `;

  &:focus {
    outline: none;
  }

  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  &::placeholder {
    font-weight: 400;
    color: `, `;
    opacity: 1; /* reset firefox default style opacity */
  }
`])), "calc(100% - ".concat(g, "px)"), L => {
                        var {
                            textColor: y
                        } = L;
                        return y
                    }, L => {
                        var {
                            fontSizeType: y,
                            breakpoint: w,
                            theme: p
                        } = L, T, z = (0, u.$v)(y, w, (T = p == null ? void 0 : p.fields) === null || T === void 0 ? void 0 : T.fontSize);
                        return z && m.yM[z]
                    }, L => {
                        var {
                            textColor: y,
                            backgroundColor: w
                        } = L;
                        return (0, A.jh)(y, w, .2)
                    }),
                    R = r.forwardRef((L, y) => {
                        var w, p, T, z, {
                                onKeyDown: V,
                                onChange: U,
                                value: W,
                                onBlur: ie,
                                onEditConfirm: te,
                                t: G,
                                theme: Q
                            } = L,
                            q = (0, l.dv)(),
                            ee = (p = (w = Q.colors) === null || w === void 0 ? void 0 : w.secondary) !== null && p !== void 0 ? p : "0x000000",
                            j = (z = (T = Q.colors) === null || T === void 0 ? void 0 : T.background) !== null && z !== void 0 ? z : "0x000000";
                        return r.createElement(I, {
                            "data-qa": "other-choice-editor"
                        }, r.createElement(S, {
                            textColor: ee,
                            backgroundColor: j,
                            breakpoint: q,
                            "data-qa": "other-choice-editor/input",
                            fontSizeType: m.go.label,
                            onBlur: ie,
                            onChange: U,
                            onKeyDown: V,
                            placeholder: G("block.multipleChoice.otherChoice.placeholder", "multiple_choice.renderer.otherChoice.placeholder"),
                            ref: y,
                            value: W
                        }), r.createElement(N, {
                            "aria-label": G("block.multipleChoice.otherChoice.confirmButtonLabel", "multiple_choice.renderer.otherChoice.confirmButtonLabel"),
                            color: ee,
                            contextBackgroundColor: j,
                            "data-qa": "other-choice-editor/button",
                            iconButton: !0,
                            iconSvg: h.A,
                            onClick: te,
                            size: "small"
                        }))
                    }),
                    X = L => {
                        var {
                            index: y,
                            ariaDescribedBy: w,
                            choiceRef: p,
                            onSelect: T,
                            t: z,
                            theme: V,
                            selectedValue: U,
                            verticalAlignment: W,
                            disabled: ie,
                            isFocused: te,
                            "aria-checked": G,
                            "data-value-string": Q,
                            role: q,
                            isEditing: ee = !1,
                            setIsEditing: j,
                            showKeyHintOnChoices: Z
                        } = L, [K, B] = (0, r.useState)(U != null ? U : ""), J = (0, r.useRef)(null), M = v => {
                            ((0, i.Ci)(v) || (0, i.C8)(v)) && !ee && j(!0)
                        };
                        (0, r.useEffect)(() => {
                            var v;
                            ee && ((v = J.current) === null || v === void 0 || v.focus())
                        }, [ee]);
                        var d = (0, l.dv)(),
                            _ = v => {
                                var oe = K == null ? void 0 : K.trim();
                                T(oe && oe !== "" ? oe : void 0, v), j(!1)
                            },
                            f = () => {
                                B(U != null ? U : ""), j(!1)
                            },
                            F = v => {
                                v.stopPropagation(), ((0, i.Ci)(v) || (0, a.vY)(v)) && _(v), (0, i.nx)(v) && f()
                            },
                            H = K || z("block.multipleChoice.otherChoice.placeholderA11y", "multiple_choice.renderer.otherChoice.placeholderA11y"),
                            le = (0, n.rQ)(V);
                        return ee ? r.createElement(t.R, {
                            color: le,
                            verticalAlignment: W,
                            "aria-label": H,
                            breakpoint: d,
                            "data-qa": p
                        }, r.createElement(c.n, {
                            index: y,
                            label: H,
                            choiceRef: p,
                            role: void 0,
                            tabIndex: -1,
                            selectable: !1,
                            ariaDescribedBy: w,
                            theme: V,
                            t: z,
                            onClick: () => {},
                            showKeyHintOnChoices: Z
                        }, r.createElement(R, {
                            value: K,
                            ref: J,
                            theme: V,
                            onChange: v => {
                                var {
                                    target: {
                                        value: oe
                                    }
                                } = v;
                                return B(oe)
                            },
                            onKeyDown: F,
                            onBlur: _,
                            onEditConfirm: _,
                            t: z
                        }))) : r.createElement(t.R, {
                            color: le,
                            verticalAlignment: W,
                            "aria-label": H,
                            breakpoint: d,
                            "data-qa": p
                        }, r.createElement(c.n, {
                            index: y,
                            label: H,
                            choiceRef: p,
                            selected: !!U,
                            disabled: ie,
                            onClick: () => j(!0),
                            ariaDescribedBy: w,
                            theme: V,
                            t: z,
                            "aria-checked": G,
                            isFocused: te,
                            role: q,
                            tabIndex: 0,
                            "data-value-string": Q,
                            onKeyDown: M,
                            showKeyHintOnChoices: Z
                        }, r.createElement(u.Ay, {
                            type: m.go.multipleChoiceLabel
                        }, K || z("block.multipleChoice.other", "multiple_choice.renderer.other_choice"))))
                    }
            },
            33165: (D, b, e) => {
                "use strict";
                e.d(b, {
                    q: () => k
                });
                var r = e(17771),
                    u = e(1697),
                    m = e(34717),
                    i = e(32336),
                    l = e(57773),
                    c = e(8043),
                    t = e(61268),
                    n = e(76601),
                    a = e(32663),
                    h = e(39912),
                    C = e(52809),
                    x = e(64944),
                    A = e(22801),
                    s = e(32652),
                    k = o => {
                        var {
                            isBlockFocused: O,
                            formattedChoices: g,
                            answer: I,
                            otherChoice: N,
                            otherChoiceRef: S,
                            onChangeHandler: R,
                            ariaLabelledBy: X,
                            verticalAlignment: L = !1,
                            theme: y,
                            ariaDescribedBy: w,
                            allowOtherChoice: p = !1,
                            canSelectMore: T,
                            selectOtherChoiceHandler: z,
                            isOtherChoiceEditing: V,
                            setIsOtherChoiceEditing: U,
                            showKeyHintOnChoices: W,
                            fieldRef: ie,
                            locale: te,
                            getCustomMessage: G,
                            enableSelectionCheckmark: Q = !0,
                            disabled: q = !1,
                            focusableRef: ee
                        } = o, {
                            t: j
                        } = (0, x.c)(A, te, G), Z = (0, l.dv)(), K = (0, C.rQ)(y), B = g.map(d => {
                            var {
                                ref: _
                            } = d;
                            return _
                        }), J = !!(p && S && z && U), M = (0, s.L9)(y, g.length, J);
                        return r.createElement("div", {
                            "data-ref": ie
                        }, r.createElement(u.z, {
                            items: S && p ? [...B, S] : B,
                            onChange: q ? void 0 : R,
                            selected: N ? S : I[0],
                            isBlockChanging: !O
                        }, r.createElement(c.s, {
                            "aria-labelledby": X,
                            verticalAlignment: L,
                            fullWidth: M
                        }, g.map((d, _) => {
                            var f = I.includes(d.ref),
                                F = !q && (f || T);
                            return r.createElement(u.C, {
                                key: d.ref,
                                value: d.ref,
                                "aria-disabled": q
                            }, H => {
                                var {
                                    focusedValue: le,
                                    props: v
                                } = H;
                                return r.createElement(h.R, {
                                    color: K,
                                    verticalAlignment: L,
                                    "aria-label": d.label,
                                    breakpoint: Z
                                }, r.createElement(t.n, Object.assign({
                                    index: _,
                                    choiceRef: d.ref,
                                    label: d.label,
                                    selected: f,
                                    selectable: F,
                                    disabled: !F,
                                    theme: y,
                                    keyHelperLetter: d.keyboardShortcut,
                                    ariaDescribedBy: w,
                                    t: j,
                                    isFocused: le === d.ref,
                                    showKeyHintOnChoices: W,
                                    enableSelectionCheckmark: Q,
                                    appraisal: d.appraisal,
                                    focusableRef: _ === 0 ? ee : void 0
                                }, v), r.createElement(m.Ay, {
                                    type: i.go.multipleChoiceLabel
                                }, r.createElement(n.A, null, d.label))))
                            })
                        }), J && r.createElement(u.C, {
                            value: S
                        }, d => {
                            var {
                                focusedValue: _,
                                props: f
                            } = d;
                            return r.createElement(a.H, Object.assign({
                                index: g.length,
                                ariaDescribedBy: w,
                                selectedValue: N,
                                disabled: !T && !N,
                                t: j,
                                choiceRef: S,
                                onSelect: z,
                                theme: y,
                                verticalAlignment: L,
                                isFocused: _ === S,
                                isEditing: V,
                                setIsEditing: U,
                                showKeyHintOnChoices: W
                            }, f))
                        }))))
                    }
            },
            34502: (D, b, e) => {
                "use strict";
                e.d(b, {
                    C: () => l
                });
                var r = e(97907),
                    u = e.n(r),
                    m = Date.now(),
                    i = (c, t) => {
                        for (var n = u().create(t), a = c.length, h; a !== 0;) h = Math.floor(n(100) / 100 * a), a--, [c[a], c[h]] = [c[h], c[a]];
                        return c
                    },
                    l = (c, t) => i([...c], "".concat(m, "-").concat(t))
            },
            39912: (D, b, e) => {
                "use strict";
                e.d(b, {
                    R: () => c
                });
                var r = e(94567),
                    u = e(87559),
                    m, i;

                function l(t, n) {
                    return n || (n = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                        raw: {
                            value: Object.freeze(n)
                        }
                    }))
                }
                var c = r.Ay.li(m || (m = l([`
  margin-block-end: 8px;
  list-style: none;
  display: block;
  outline: none;
  border-radius: var(--sampler-theme-border-radius);
  transition: none;
  opacity: 1;
  width: `, `;
  min-width: 150px;

  `, `
  &:focus,
  &:focus-within {
    div[data-choice-component]:not([aria-disabled='true']) {
      box-shadow: `, `;
      background-color: `, `;
    }
  }
`])), t => {
                    var {
                        verticalAlignment: n
                    } = t;
                    return n ? "100%" : "calc(33% - 3px)"
                }, t => {
                    var {
                        verticalAlignment: n,
                        breakpoint: a
                    } = t;
                    return !n && (0, r.AH)(i || (i = l([`
      column-gap: 8px;
      flex: 1 0 31%;
      max-width: calc(33% - 3px);

      &:last-of-type {
        align-items: center;
        display: flex;
      }

      `, `
    `])), a === "sm" && `
            flex: 1 0 100%;
            max-width: calc(100% - 3px);
          `)
                }, t => "inset 0 0 0 2px ".concat(t.color), t => (0, u.VI)(t.color))
            },
            47421: (D, b, e) => {
                "use strict";
                e.d(b, {
                    c: () => u
                });
                var r = e(17771),
                    u = m => {
                        var {
                            isInInlineGroup: i,
                            ref: l
                        } = m, [c, t] = (0, r.useState)(!i), n = h => {
                            var C;
                            return ((C = h == null ? void 0 : h.getAttribute) === null || C === void 0 ? void 0 : C.call(h, "data-ref")) === l ? !0 : h != null && h.parentNode ? n(h.parentNode) : !1
                        }, a = () => {
                            var h, C = n((h = document == null ? void 0 : document.activeElement) === null || h === void 0 ? void 0 : h.parentNode);
                            t(C)
                        };
                        return (0, r.useEffect)(() => {
                            if (!i) {
                                t(!0);
                                return
                            }
                            return window.addEventListener("focus", a, !0), window.addEventListener("blur", a, !0), () => {
                                window.removeEventListener("focus", a, !0), window.removeEventListener("blur", a, !0)
                            }
                        }, []), c
                    }
            },
            60517: (D, b) => {
                b = D.exports = e, b.getSerialize = r;

                function e(u, m, i, l) {
                    return JSON.stringify(u, r(m, l), i)
                }

                function r(u, m) {
                    var i = [],
                        l = [];
                    return m == null && (m = function(c, t) {
                            return i[0] === t ? "[Circular ~]" : "[Circular ~." + l.slice(0, i.indexOf(t)).join(".") + "]"
                        }),
                        function(c, t) {
                            if (i.length > 0) {
                                var n = i.indexOf(this);
                                ~n ? i.splice(n + 1) : i.push(this), ~n ? l.splice(n, 1 / 0, c) : l.push(c), ~i.indexOf(t) && (t = m.call(this, c, t))
                            } else i.push(t);
                            return u == null ? t : u.call(this, c, t)
                        }
                }
            },
            61268: (D, b, e) => {
                "use strict";
                e.d(b, {
                    n: () => x
                });
                var r = e(17771),
                    u = e(15389),
                    m = e(52809),
                    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    l = A => {
                        var s = Math.floor(A % i.length);
                        return i[s]
                    },
                    c = A => {
                        var s = A >= i.length;
                        if (s) {
                            var k = Math.floor(A / i.length) - 1;
                            return c(k) + l(A)
                        }
                        return l(A)
                    },
                    t = e(94567),
                    n = e(39989),
                    a;

                function h(A, s) {
                    return s || (s = A.slice(0)), Object.freeze(Object.defineProperties(A, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var C = t.Ay.div(a || (a = h([`
  width: 100%;
  height: 100%;
  outline: none;
  `, `;
`])), n.Fe),
                    x = A => {
                        var {
                            index: s,
                            theme: k,
                            choiceRef: o,
                            label: O,
                            onClick: g,
                            ariaDescribedBy: I,
                            selected: N,
                            selectable: S = !0,
                            disabled: R = !1,
                            t: X,
                            "data-value-string": L,
                            role: y = "checkbox",
                            tabIndex: w,
                            keyHelperLetter: p,
                            isFocused: T,
                            onKeyDown: z,
                            children: V,
                            showKeyHintOnChoices: U,
                            enableSelectionCheckmark: W = !0,
                            appraisal: ie,
                            focusableRef: te
                        } = A, G, Q = (0, m.rQ)(k), q = (G = k == null ? void 0 : k.colors) === null || G === void 0 ? void 0 : G.background;
                        return r.createElement(C, {
                            "aria-checked": N,
                            "aria-disabled": R,
                            color: Q || "",
                            "data-value-string": L,
                            ref: te,
                            onKeyDown: z,
                            role: y,
                            tabIndex: w
                        }, r.createElement(u.A, {
                            color: Q || "",
                            contextBackgroundColor: q,
                            keyHelperHint: U ? X("label.hint.key", "multiple_choice.renderer.hint.key") : "",
                            keyHelperLetter: U ? p || c(s) : "",
                            dataQa: "choice",
                            dataQaIndex: s,
                            onClick: g,
                            choiceRef: o,
                            disabled: R,
                            selectable: S,
                            selected: N,
                            ariaLabel: O,
                            ariaDescribedBy: I,
                            focused: T,
                            "data-choice-component": !0,
                            enableSelectionCheckmark: W,
                            appraisal: ie
                        }, V))
                    }
            },
            64343: (D, b, e) => {
                "use strict";
                e.d(b, {
                    D: () => ee
                });
                var r = {};
                e.r(r), e.d(r, {
                    ar: () => t,
                    ca: () => n,
                    ch: () => a,
                    cs: () => h,
                    da: () => C,
                    de: () => x,
                    di: () => A,
                    el: () => s,
                    en: () => k,
                    es: () => o,
                    et: () => O,
                    fi: () => g,
                    fr: () => I,
                    he: () => N,
                    hr: () => S,
                    hu: () => R,
                    it: () => X,
                    ja: () => L,
                    ko: () => y,
                    lt: () => w,
                    nl: () => p,
                    no: () => T,
                    pl: () => z,
                    pt: () => V,
                    ru: () => U,
                    sv: () => W,
                    tr: () => ie,
                    uk: () => te,
                    zh: () => G
                });
                var u = e(17771),
                    m = e(23889),
                    i = e(4784),
                    l = e(9206),
                    c = e(64944);
                const t = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u0625\u062C\u0627\u0628\u0629 \u0635\u062D\u064A\u062D\u0629","knowledge-quiz.inline-feedback.incorrect.default":"\u0625\u062C\u0627\u0628\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"}'),
                    n = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Resposta correcta","knowledge-quiz.inline-feedback.incorrect.default":"Resposta incorrecta"}'),
                    a = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u6B63\u786E\u7B54\u6848","knowledge-quiz.inline-feedback.incorrect.default":"\u9519\u8BEF\u7B54\u6848"}'),
                    h = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Spr\xE1vn\xE1 odpov\u011B\u010F","knowledge-quiz.inline-feedback.incorrect.default":"Nespr\xE1vn\xE1 odpov\u011B\u010F"}'),
                    C = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Korrekt svar","knowledge-quiz.inline-feedback.incorrect.default":"Forkert svar"}'),
                    x = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Richtige antwort","knowledge-quiz.inline-feedback.incorrect.default":"Falsche antwort"}'),
                    A = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Richtige antwort","knowledge-quiz.inline-feedback.incorrect.default":"Falsche antwort"}'),
                    s = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u03A3\u03C9\u03C3\u03C4\u03AE \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7","knowledge-quiz.inline-feedback.incorrect.default":"\u03A3\u03C9\u03C3\u03C4\u03AE \u03B1\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7"}'),
                    k = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Correct answer","knowledge-quiz.inline-feedback.incorrect.default":"Incorrect answer"}'),
                    o = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Respuesta correcta","knowledge-quiz.inline-feedback.incorrect.default":"Respuesta incorrecta"}'),
                    O = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\xD5ige vastus","knowledge-quiz.inline-feedback.incorrect.default":"Vale vastus"}'),
                    g = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Oikea vastaus","knowledge-quiz.inline-feedback.incorrect.default":"V\xE4\xE4r\xE4 vastaus"}'),
                    I = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Bonne r\xE9ponse","knowledge-quiz.inline-feedback.incorrect.default":"R\xE9ponse incorrecte"}'),
                    N = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E0\u05DB\u05D5\u05E0\u05D4","knowledge-quiz.inline-feedback.incorrect.default":"\u05EA\u05E9\u05D5\u05D1\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4"}'),
                    S = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"To\u010Dan odgovor","knowledge-quiz.inline-feedback.incorrect.default":"Neto\u010Dan odgovor"}'),
                    R = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Helyes v\xE1lasz","knowledge-quiz.inline-feedback.incorrect.default":"Helytelen v\xE1lasz"}'),
                    X = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Risposta corretta","knowledge-quiz.inline-feedback.incorrect.default":"Risposta errata"}'),
                    L = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u6B63\u89E3","knowledge-quiz.inline-feedback.incorrect.default":"\u4E0D\u6B63\u89E3"}'),
                    y = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\uC815\uB2F5","knowledge-quiz.inline-feedback.incorrect.default":"\uC624\uB2F5"}'),
                    w = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Teisingas atsakymas","knowledge-quiz.inline-feedback.incorrect.default":"Neteisingas atsakymas"}'),
                    p = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Goed antwoord","knowledge-quiz.inline-feedback.incorrect.default":"Fout antwoord"}'),
                    T = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Riktig svar","knowledge-quiz.inline-feedback.incorrect.default":"Feil svar"}'),
                    z = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Prawid\u0142owa odpowied\u017A","knowledge-quiz.inline-feedback.incorrect.default":"B\u0142\u0119dna odpowied\u017A"}'),
                    V = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Resposta correta","knowledge-quiz.inline-feedback.incorrect.default":"Resposta incorreta"}'),
                    U = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442","knowledge-quiz.inline-feedback.incorrect.default":"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442"}'),
                    W = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"R\xE4tt svar","knowledge-quiz.inline-feedback.incorrect.default":"Felaktigt svar"}'),
                    ie = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"Do\u011Fru cevap","knowledge-quiz.inline-feedback.incorrect.default":"Yanl\u0131\u015F cevap"}'),
                    te = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C","knowledge-quiz.inline-feedback.incorrect.default":"\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C"}'),
                    G = JSON.parse('{"knowledge-quiz.inline-feedback.correct.default":"\u6B63\u78BA\u7B54\u6848","knowledge-quiz.inline-feedback.incorrect.default":"\u932F\u8AA4\u7B54\u6848"}');
                var Q = function(j, Z) {
                        var K = {};
                        for (var B in j) Object.prototype.hasOwnProperty.call(j, B) && Z.indexOf(B) < 0 && (K[B] = j[B]);
                        if (j != null && typeof Object.getOwnPropertySymbols == "function")
                            for (var J = 0, B = Object.getOwnPropertySymbols(j); J < B.length; J++) Z.indexOf(B[J]) < 0 && Object.prototype.propertyIsEnumerable.call(j, B[J]) && (K[B[J]] = j[B[J]]);
                        return K
                    },
                    q = (0, m.c)(i.A),
                    ee = j => {
                        var {
                            result: Z,
                            locale: K = "en",
                            getCustomMessage: B
                        } = j, J = Q(j, ["result", "locale", "getCustomMessage"]), {
                            t: M
                        } = (0, c.c)(r, K, B);
                        return Z !== l.V0.correct && Z !== l.V0.incorrect ? null : u.createElement(q, Object.assign({
                            message: Z === l.V0.correct ? M("label.knowledgeQuiz.inlineFeedback.correct", "knowledge-quiz.inline-feedback.correct.default") : M("label.knowledgeQuiz.inlineFeedback.incorrect", "knowledge-quiz.inline-feedback.incorrect.default"),
                            visible: !0,
                            type: Z === l.V0.correct ? i.M.correct : i.M.incorrect
                        }, J))
                    }
            },
            76601: (D, b, e) => {
                "use strict";
                e.d(b, {
                    A: () => i
                });
                var r = e(4478),
                    u = e(17771),
                    m = l => {
                        var {
                            children: c,
                            allowHyperlinks: t = !1
                        } = l;
                        return (0, u.useMemo)(() => typeof c == "number" ? c : (0, r.default)(c, {
                            allowHyperlinks: t
                        }), [c])
                    };
                const i = m
            },
            85829: (D, b, e) => {
                "use strict";
                e.d(b, {
                    c: () => c
                });
                var r = e(17771),
                    u = e(87506),
                    m = e(29017),
                    i = 65,
                    l = 26,
                    c = t => {
                        var {
                            isActive: n = !1,
                            isBlockFocused: a,
                            answer: h,
                            formattedChoices: C,
                            allowOtherChoice: x = !1,
                            otherChoiceRef: A,
                            setIsOtherChoiceEditing: s,
                            onChangeHandler: k,
                            showKeyHintOnChoices: o,
                            disabled: O = !1
                        } = t, g = (0, r.useRef)([]), I = (0, r.useRef)();
                        (0, r.useEffect)(() => (a && window.addEventListener("keydown", R), () => {
                            a && window.removeEventListener("keydown", R)
                        }), [h, a, n, o, document.activeElement]);
                        var N = X => {
                                var L;
                                return x && X === C.length ? A : (L = C[X]) === null || L === void 0 ? void 0 : L.ref
                            },
                            S = X => {
                                var L = i,
                                    y = g.current.length,
                                    w = g.current.join("").toUpperCase(),
                                    p, T = C.find(W => W.keyboardShortcut === w);
                                if (T) p = T.ref;
                                else {
                                    var z = w.charCodeAt(y - 1) - L;
                                    if (y === 2) {
                                        var V = w.charCodeAt(0),
                                            U = V - L + 1;
                                        z = z + U * l
                                    }
                                    p = N(z)
                                }
                                g.current = [], x && s && p === A ? s(!0) : p && k(p, X)
                            },
                            R = X => {
                                var L;
                                if (!(!n || !a || o === !1 || O) && !(0, u.f2)(X) && !(0, u.C8)(X)) {
                                    if ((0, u.Ku)(X == null ? void 0 : X.key)) {
                                        g.current === null || g.current.length === 0 ? (g.current = [X.key], (L = X.persist) === null || L === void 0 || L.call(X), I.current = setTimeout(() => S(X), m.QT)) : g.current = [...g.current || [], X.key], X.preventDefault(), X.stopPropagation();
                                        return
                                    }
                                    I.current !== null && (clearTimeout(I.current), I.current = null)
                                }
                            }
                    }
            },
            97600: (D, b, e) => {
                "use strict";
                e.d(b, {
                    W: () => m
                });
                var r = e(17771),
                    u = e(32652),
                    m = i => {
                        var {
                            isActive: l = !1,
                            allowMultipleSelection: c,
                            blockChangeTime: t = 0,
                            formattedChoices: n,
                            allowOtherChoice: a = !1,
                            blockIndex: h,
                            ref: C,
                            hasBeenInteractedWith: x,
                            onChange: A,
                            onCommit: s,
                            otherChoiceRef: k,
                            setIsOtherChoiceEditing: o,
                            value: O
                        } = i;
                        (0, r.useEffect)(() => {
                            if (l) {
                                var g = (0, u.CX)(C),
                                    I = O == null ? void 0 : O.some(Boolean);
                                if (!(I || !g)) {
                                    var N = n.map(p => p.ref);
                                    a && k && N.push(k);
                                    var S = g.map(p => ["yes", "no", "other", "accept", "reject"].includes(p.toString()) ? "".concat(C, "-").concat(p) : p.toString()),
                                        R = S.filter(p => N.includes(p)).map(p => p.includes("yes") || p.includes("accept") ? !0 : p.includes("no") || p.includes("reject") ? !1 : p),
                                        X = R.length > 0 ? R : null,
                                        L = R.includes(k);
                                    if (!x && X) {
                                        var y = X.filter(p => p !== k),
                                            w = y;
                                        !c && y[0] && (w = [y[0]]), setTimeout(() => A(w, {
                                            isFromPrefilledAnswer: !0
                                        }), t), h === 0 && !c && !L && s && setTimeout(() => s(void 0, {
                                            isFromPrefilledAnswer: !0
                                        }), t + u.Qv), L && setTimeout(() => o && o(!0), t + u.Qv)
                                    }
                                }
                            }
                        }, [l])
                    }
            },
            97907: (D, b, e) => {
                "use strict";
                var r = e(60517),
                    u = function() {
                        var i = 4022871197,
                            l = function(c) {
                                if (c) {
                                    c = c.toString();
                                    for (var t = 0; t < c.length; t++) {
                                        i += c.charCodeAt(t);
                                        var n = .02519603282416938 * i;
                                        i = n >>> 0, n -= i, n *= i, i = n >>> 0, n -= i, i += n * 4294967296
                                    }
                                    return (i >>> 0) * 23283064365386963e-26
                                } else i = 4022871197
                            };
                        return l
                    },
                    m = function(i) {
                        return function() {
                            var l = 48,
                                c = 1,
                                t = l,
                                n = new Array(l),
                                a, h, C = 0,
                                x = new u;
                            for (a = 0; a < l; a++) n[a] = x(Math.random());
                            var A = function() {
                                    ++t >= l && (t = 0);
                                    var o = 1768863 * n[t] + c * 23283064365386963e-26;
                                    return n[t] = o - (c = o | 0)
                                },
                                s = function(o) {
                                    return Math.floor(o * (A() + (A() * 2097152 | 0) * 11102230246251565e-32))
                                };
                            s.string = function(o) {
                                var O, g = "";
                                for (O = 0; O < o; O++) g += String.fromCharCode(33 + s(94));
                                return g
                            };
                            var k = function() {
                                var o = Array.prototype.slice.call(arguments);
                                for (a = 0; a < o.length; a++)
                                    for (h = 0; h < l; h++) n[h] -= x(o[a]), n[h] < 0 && (n[h] += 1)
                            };
                            return s.cleanString = function(o) {
                                return o = o.replace(/(^\s*)|(\s*$)/gi, ""), o = o.replace(/[\x00-\x1F]/gi, ""), o = o.replace(/\n /, `
`), o
                            }, s.hashString = function(o) {
                                for (o = s.cleanString(o), x(o), a = 0; a < o.length; a++)
                                    for (C = o.charCodeAt(a), h = 0; h < l; h++) n[h] -= x(C), n[h] < 0 && (n[h] += 1)
                            }, s.seed = function(o) {
                                (typeof o == "undefined" || o === null) && (o = Math.random()), typeof o != "string" && (o = r(o, function(O, g) {
                                    return typeof g == "function" ? g.toString() : g
                                })), s.initState(), s.hashString(o)
                            }, s.addEntropy = function() {
                                var o = [];
                                for (a = 0; a < arguments.length; a++) o.push(arguments[a]);
                                k(C++ + new Date().getTime() + o.join("") + Math.random())
                            }, s.initState = function() {
                                for (x(), a = 0; a < l; a++) n[a] = x(" ");
                                c = 1, t = l
                            }, s.done = function() {
                                x = null
                            }, typeof i != "undefined" && s.seed(i), s.range = function(o) {
                                return s(o)
                            }, s.random = function() {
                                return s(Number.MAX_VALUE - 1) / Number.MAX_VALUE
                            }, s.floatBetween = function(o, O) {
                                return s.random() * (O - o) + o
                            }, s.intBetween = function(o, O) {
                                return Math.floor(s.random() * (O - o + 1)) + o
                            }, s
                        }()
                    };
                m.create = function(i) {
                    return new m(i)
                }, D.exports = m
            }
        }
    ]);
})();