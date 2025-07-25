(function(e) {
    function p(a, c) {
        if (a && a.length) {
            var d = {},
                b;
            if (0 < c)
                for (b = 1; b <= c; b++) d[b] = !1;
            for (b = 0; b < a.length; b++) d[a[b]] = !0;
            return d
        }
    }

    function l(a) {
        return null === a || void 0 === a ? a : !!a
    }

    function v(a, c) {
        if (!c || !c.length) return a;
        for (var d = {}, b = 0; b < c.length; b++) d[c[b]] = !!a[c[b]];
        return d
    }

    function n(a, c) {
        if (!a && 0 !== a) return a;
        for (var d = {}, b = 0; b < c; b++) d[b + 1] = !!(a & 1), a >>= 1;
        return d
    }

    function w(a) {
        if (a && "object" === typeof a) {
            var c = {},
                d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var b = a[d] || {},
                        e = b.purpose_id || b.PurposeId,
                        g = b.vendors || b.PubRestrictionEntry;
                    b = b.restriction || b.RestrictionType;
                    if (e && g && g.length) {
                        c[e] = c[e] || {};
                        for (var k = 0; k < g.length; k++) c[e][g[k]] = b
                    }
                }
            return c
        }
    }

    function x(a) {
        var c = "gpp_" + ++z;
        m[c] = a;
        return c
    }
    var A = {
            getVendorConsents: function(a) {
                var c = e._global("__adroll_consent_gpp"),
                    d = ((c || {}).sections || {}).tcfeuv1,
                    b = ((c || {}).sections || {}).tcfeuv2,
                    f = e._global("__adroll_consent"),
                    g = e._global("__adroll_consent_data") || {};
                c = e._global("__adroll_consent_is_gdpr");
                g = g.euconsent || (d || {}).str || (b || {}).str || "";
                var k = e.b64tobits(g),
                    m = {},
                    l = {},
                    h, n = e._is_defined;
                if ("B" === g[0]) {
                    var q = k.substr(132, 24);
                    k = e.b64toint(g.substr(26, 3)) >> 2
                } else q = k.substr(152, 24), k = (e.b64toint(g.substr(35, 4)) & 2097151) >> 5;
                d = e.extendObj({}, f, p(((d || {}).TcfV1Consent || {}).VendorIds), p((b || {}).VendorConsent));
                if (a && a.length)
                    for (h = 0; h < a.length; h++) l[a[h]] = n(d[a[h]]) ? d[a[h]] : null;
                else {
                    for (h in d) d.hasOwnProperty(h) && (l[h] = d[h]);
                    for (h = 1; h <= k; h++) l[h] = n(d[h]) ? d[h] : null
                }
                for (h = 1; 24 >= h; h++) m[h] = !!parseInt(q[h - 1]);
                return [{
                    metadata: g.substr(0, 18) +
                        g.substr(20, 2),
                    gdprApplies: !!c,
                    hasGlobalScope: !1,
                    purposeConsents: m,
                    vendorConsents: l
                }, !0]
            },
            getConsentData: function(a) {
                if (a && "1.1" !== String(a)) return [null, !1];
                a = e._global("__adroll_consent_data") || {};
                var c = e._global("__adroll_consent_is_gdpr"),
                    d = e._global("__adroll_consent_gpp") || {};
                return [{
                    consentData: a.euconsent || ((d.sections || {}).tcfeuv2 || {}).str || "",
                    gdprApplies: !!c,
                    hasGlobalScope: !1
                }, !0]
            },
            ping: function() {
                var a = e._global("__adroll_consent_data") || {},
                    c = e._global("__adroll_consent_gpp") || {};
                return [{
                    gdprAppliesGlobally: !1,
                    cmpLoaded: !(!a.euconsent && !c.str)
                }, !0]
            }
        },
        r = !1,
        y = {},
        q = {},
        B = 0,
        t = {
            getTCData: function(a) {
                var c = l(e._global("__adroll_consent_is_gdpr")),
                    d = e._global("__adroll_consent_data") || {},
                    b = ((e._global("__adroll_consent_gpp") || {}).sections || {}).tcfeuv2,
                    f = d.eucookie,
                    g = (f || {}).publisher_tc || {},
                    k = {
                        tcfPolicyVersion: 2,
                        gdprApplies: c,
                        cmpStatus: "loaded",
                        outOfBand: {},
                        purpose: {},
                        vendor: {},
                        publisher: {
                            customPurpose: {}
                        }
                    };
                f ? (k = 130 === f.cmp_id ? 54 : f.cmp_id, k = {
                    tcString: d.euconsent,
                    tcfPolicyVersion: 2,
                    cmpId: k,
                    cmpVersion: f.cmp_version,
                    gdprApplies: c,
                    gvlVersion: f.vendor_list_version,
                    cmpStatus: "loaded",
                    isServiceSpecific: l(f.is_service_specific),
                    useNonStandardStacks: l(f.use_non_standard_stacks),
                    publisherCC: f.publisher_iso_country,
                    purposeOneTreatment: l(f.purpose_one_treatment),
                    outOfBand: {
                        allowedVendors: p(f.allowed_vendors),
                        disclosedVendors: p(f.disclosed_vendors)
                    },
                    purpose: {
                        consents: n(f.purposes_allowed, 24),
                        legitimateInterests: n(f.purposes_li_transparency, 24)
                    },
                    vendor: {
                        consents: v(f.vendor_consent, a),
                        legitimateInterests: v(f.vendor_legitimate_interest,
                            a)
                    },
                    specialFeatureOptins: n(f.special_feature_opt_ins, 12),
                    publisher: {
                        consents: n(g.pub_purposes_consent, 24),
                        legitimateInterests: n(g.pub_purposes_li_transparency, 24),
                        customPurpose: {
                            consents: n(g.custom_purposes_consent, g.num_custom_purposes),
                            legitimateInterests: n(g.custom_purposes_li_transparency, g.num_custom_purposes)
                        },
                        restrictions: w(f.publisher_restrictions)
                    }
                }) : b && (k = 130 === b.CmpId ? 54 : b.CmpId, k = {
                    tcString: b.str,
                    tcfPolicyVersion: 2,
                    cmpId: k,
                    cmpVersion: b.CmpVersion,
                    gdprApplies: c,
                    gvlVersion: b.VendorListVersion,
                    cmpStatus: "loaded",
                    isServiceSpecific: l(b.IsServiceSpecific),
                    useNonStandardStacks: l(b.UseNonStandardStacks),
                    publisherCC: b.PublisherCC,
                    purposeOneTreatment: l(b.PurposeOneTreatment),
                    outOfBand: {},
                    purpose: {
                        consents: p(b.PurposeConsent, 24),
                        legitimateInterests: p(b.PurposesLITransparency, 24)
                    },
                    vendor: {
                        consents: v(p(b.VendorConsent), a),
                        legitimateInterests: v(p(b.VendorLegitimateInterest), a)
                    },
                    specialFeatureOptins: p(b.SpecialFeatureOptIns, 12),
                    publisher: {
                        restrictions: w(b.PublisherRestrictions)
                    }
                });
                return [k, !0]
            },
            ping: function() {
                var a =
                    (t.getTCData() || [])[0] || {},
                    c = "disabled",
                    d = e._global("__adroll_consent_banner") || {};
                a.gdprApplies && (c = "banner" === d.state ? "visible" : "hidden");
                return [{
                    gdprApplies: a.gdprApplies,
                    cmpLoaded: !0,
                    cmpStatus: "loaded",
                    displayStatus: c,
                    apiVersion: "2.0",
                    cmpVersion: a.cmpVersion || 1,
                    cmpId: a.cmpId || 54,
                    gvlVersion: a.gvlVersion || 41,
                    tcfPolicyVersion: a.tcfPolicyVersion
                }, !0]
            },
            addEventListener: function(a) {
                var c = "tcfv2_" + ++B;
                q[c] = a;
                t._triggerEvent(c)
            },
            removeEventListener: function(a, c) {
                var d = !1;
                c in q && (d = !0, delete q[c]);
                a(d)
            },
            _triggerEvent: function(a) {
                var c = q[a],
                    d = t.getTCData(),
                    b = (d || [])[0] || {},
                    f = "tcloaded",
                    g = e._global("__adroll_consent_data") || {},
                    k = e._global("__adroll_consent_banner") || {};
                null === g.arconsent || "banner" === k.state ? f = "cmpuishown" : r && (f = "useractioncomplete");
                b.cmpId || (b.cmpId = 54, b.cmpVersion = 1, b.gvlVersion = 41);
                d && 2 === d.length ? (b.eventStatus = f, b.listenerId = a, c(b, d[1])) : c({}, !1);
                "banner" === k.state && (r = !0)
            }
        },
        m = {},
        z = 0,
        u = {
            ping: function() {
                var a = "loading";
                e._global("__adroll_consent_data") && (a = "loaded");
                var c = [-1],
                    d = "not ready",
                    b = [],
                    f = e._global("__adroll_consent_gpp") || {};
                f.str && f.header && f.sections && (d = "ready", b = f.header.Sections);
                e._global("__adroll_consent_is_gdpr") && (c = [2]);
                var g = "hidden";
                "banner" === (e._global("__adroll_consent_banner") || {}).state && (g = "visible");
                return {
                    gppVersion: "1.1",
                    cmpStatus: a,
                    cmpDisplayStatus: g,
                    signalStatus: d,
                    supportedAPIs: ["2:tcfeuv2"],
                    cmpId: 54,
                    sectionList: b,
                    applicableSections: c,
                    gppString: f.str,
                    parsedSections: f.sections
                }
            },
            addEventListener: function(a) {
                return {
                    eventName: "listenerRegistered",
                    listenerId: x(a),
                    data: !0,
                    pingData: u.ping()
                }
            },
            removeEventListener: function(a, c) {
                a = !1;
                c in m && (a = !0, delete m[c]);
                return {
                    eventName: "listenerRemoved",
                    listenerId: c,
                    data: a,
                    pingData: u.ping()
                }
            },
            hasSection: function(a, c) {
                a = e._global("__adroll_consent_gpp");
                var d = null;
                a && (d = c in a.sections);
                return d
            },
            getSection: function(a, c) {
                a = e._global("__adroll_consent_gpp");
                var d = null;
                a && c in a.sections && (d = [a.sections[c]]);
                return d
            },
            getField: function(a, c) {
                a = e._global("__adroll_consent_gpp");
                var d = null,
                    b = c.split(".");
                c = b[0];
                b = b[1];
                a && a.sections[c] && (d = a.sections[c][b] || null);
                return d
            },
            _triggerEvents: function(a) {
                var c = m[a],
                    d = [
                        ["cmpStatus", "loaded"]
                    ];
                var b = e._global("__adroll_consent_data") || {};
                var f = e._global("__adroll_consent_banner") || {},
                    g = u.ping();
                null === b.arconsent || "banner" === f.state ? d.push(["signalStatus", "not ready"], ["cmpDisplayStatus", "visible"]) : r && (d = [
                    ["cmpDisplayStatus", "hidden"],
                    ["signalStatus", "ready"]
                ]);
                y.euconsent !== b.euconsent && d.push(["sectionChange", "tcfeuv2"]);
                for (b = 0; b < d.length; b++) c({
                    eventName: d[b][0],
                    listenerId: a,
                    data: d[b][1],
                    pingData: g
                }, !0);
                "banner" === f.state && (r = !0)
            }
        };
    e._install_cmp = function() {
        e._set_global("__cmp", function(a, b, c) {
            (a = A[a]) && c.apply(null, a(b))
        });
        var a = e._cmp_calls;
        e._cmp_calls = [];
        for (var c = 0; c < a.length; c++) e._global("__cmp").apply(e, a[c]);
        e._set_global("__tcfapi", function(a, b, c, e) {
            b = t[a];
            "addEventListener" === a || "removeEventListener" === a ? b.call(null, c, e) : b ? c.apply(null, b(e)) : c.apply(null, [null, !1])
        });
        a = e._tcfapi_calls || [];
        e._tcfapi_calls = [];
        for (c = 0; c < a.length; c++) e._global("__tcfapi").apply(e,
            a[c]);
        e._set_global("__gpp", function(a, b, c) {
            (a = u[a]) ? b(a(b, c), !0): b(null, !1)
        })
    };
    e._trigger_consent_event = function() {
        var a = e._global("__adroll_consent_data") || {},
            c = e._global("__adroll_consent_banner") || {},
            d;
        for (d in q) q.hasOwnProperty(d) && t._triggerEvent(d);
        for (d in m) m.hasOwnProperty(d) && u._triggerEvents(d);
        "banner" !== c.state && (r = !1);
        y = e.extendObj({}, a)
    };
    (function() {
        if (e._has_global("__cmp") || e._has_global("__gpp") || e._has_global("__tcfapi") && !e._has_global("_adroll_tcfapi_placeholder_installed")) e._install_cmp =
            function() {};
        else {
            e._cmp_calls = [];
            e._set_global("__cmp", function(a, d, b) {
                "ping" === a ? b({
                    gdprAppliesGlobally: !1,
                    cmpLoaded: !1
                }) : e._cmp_calls.push([a, d, b])
            });
            e._tcfapi_calls = [];
            e._set_global("__tcfapi", function(a, d, b, f) {
                "ping" === a ? b({
                    gdprApplies: void 0,
                    cmpLoaded: !1,
                    cmpStatus: "loaded",
                    displayStatus: void 0,
                    apiVersion: "2.0",
                    cmpVersion: 1,
                    cmpId: 54,
                    gvlVersion: 41,
                    tcfPolicyVersion: 2
                }, !0) : e._tcfapi_calls.push([a, d, b, f])
            });
            window.addEventListener("message", function(a) {
                try {
                    var c = "string" === typeof a.data ? e.jsonParse(a.data) :
                        a.data
                } catch (f) {}
                var b = (c || {}).__tcfapiCall;
                (b || {}).command && e._global("__tcfapi").call(this, b.command, b.version, function(c, d) {
                    c = e.jsonStringify({
                        __tcfapiReturn: {
                            returnValue: c,
                            success: d,
                            callId: b.callId
                        }
                    });
                    a.source.postMessage(c, "*")
                }, b.parameter)
            }, !0);
            var a = window.document.createElement("iframe");
            a.style = "width:0; height:0; border:0; padding:0; visibility:hidden; position:absolute; margin:0 0 0 -1000px;";
            a.name = "__tcfapiLocator";
            e._body().appendChild(a);
            e._set_global("__gpp", function(a, d, b) {
                var c = {
                    gppVersion: "1.1",
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    supportedAPIs: ["2:tcfeuv2"],
                    cmpId: 0,
                    sectionList: [],
                    applicableSections: [-1],
                    gppString: ""
                };
                switch (a) {
                    case "ping":
                        d(c, !0);
                        break;
                    case "addEventListener":
                        d({
                            eventName: "listenerRegistered",
                            listenerId: x(d),
                            data: !0,
                            pingData: c
                        }, !0);
                        break;
                    case "removeEventListener":
                        a = b in m;
                        delete m[b];
                        d({
                            eventName: "listenerRemoved",
                            listenerId: b,
                            data: a,
                            pingData: c
                        }, !0);
                        break;
                    default:
                        d(null, !0)
                }
            })
        }
    })()
})(window.__adroll);