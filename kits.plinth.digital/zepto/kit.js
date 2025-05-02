import {
    l as t,
    N as n,
    Z as s
} from "./zeppy-BA3V0evA.js";
t.register("getOffscreenWorker", (() => {
    const e = n("workerIndex.js"),
        r = new Blob([`import "${e}"`], {
            type: "text/javascript"
        }),
        t = window.URL.createObjectURL(r);
    return new Worker(t, {
        type: "module"
    })
})), s.run();