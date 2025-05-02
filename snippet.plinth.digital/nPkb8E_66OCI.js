/* 2025-02-27T19:07:45.154Z - Zepto : Integration PoC */
import {
    kitConfig
} from "https://kits.plinth.digital/_kit-config/kK2frTERf8bx.js";
window.PlinthosConfig = {
    ...{
        "debug": false,
        "kitPath": "zepto",
        "staging": false,
        "disabled": false,
        "colorSpace": "srgb",
        "stageContent": {},
        "renderTargets": [{
            "debug": false,
            "start": true,
            "ioStops": true,
            "ioStarts": true,
            "stageKey": "zeppy",
            "antialias": false,
            "background": true,
            "contentKey": "profile",
            "instanceKey": "background",
            "fadeDuration": 1000,
            "maxPixelRatio": 1.5,
            "disableBindings": false
        }],
        "colorManagement": true,
        "lazyLoadEnabled": true,
        "lazyLoadInterval": 200,
        "dataAttributePrefix": "pd",
        "mutationObserverDebump": 200,
        "mutationObserverEnabled": true,
        "intersectionObserverEnabled": true,
        "intersectionObserverPriority": "lowest"
    },
    ...(window.PlinthosConfig ? ? {}),
    ...kitConfig,
};
const kitPath = window.PlinthosConfig.staging ? "https://kits.plinth.digital/zepto__STAG/kit.js" : "https://kits.plinth.digital/zepto/kit.js";
setTimeout(() =>
    import (kitPath));