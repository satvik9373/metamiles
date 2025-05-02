document.body.dataset.pdCrt = "true";
document.addEventListener("plinthoskitready", (e) => {
    let scrollDebump = false;
    const heroMarker = document.getElementById("hero-content-bottom");
    let heroMarkerTop;

    resize();
    updateOffset();

    function updateOffset() {
        let ratio = (heroMarkerTop - document.scrollingElement.scrollTop) / window.innerHeight;
        ratio = Math.min(1, Math.max(0, ratio));
        Plinthos.displays.background.bindings.heroOffset = ratio;
    }

    window.addEventListener("resize", resize);

    function resize() {
        heroMarkerTop = Math.round((heroMarkerTop = heroMarker.getBoundingClientRect().top + window.scrollY));
        scroll();
    }

    window.addEventListener("scroll", scroll);

    function scroll() {
        if (scrollDebump) return;
        scrollDebump = true;
        requestAnimationFrame(() => (scrollDebump = false));
        updateOffset();
    }

    let floatStopTimer;
    Plinthos.displays.background.addEventListener("contentchange", (e) => {
        if (e.contentKey === "float-beams") {
            floatStopTimer = setTimeout(() => {
                Plinthos.displays.background.stop();
            }, 1000);
        } else {
            clearTimeout(floatStopTimer);
            Plinthos.displays.background.start();
        }
    });

    // Plinthos.displays.background.addEventListener('start', e => {
    //     document.getElementById('crt-toggle-button').classList.remove('hide');
    // })

    // Plinthos.displays.background.addEventListener('stopping', e => {
    //     document.getElementById('crt-toggle-button').classList.add('hide');
    // })
});

(() => {
    // document.getElementById('crt-toggle-button').addEventListener('click', () => {
    //     document.body.dataset.pdCrt = document.body.dataset.pdCrt === 'true' ? 'false' : 'true';
    //     const instigator = document.querySelector('[data-plinthos-instigator]');
    //     Plinthos.displays.background.show(
    //         Plinthos.displays.background.contentKey,
    //         Plinthos.getAncestryDataset(instigator)
    //     );
    // });

    let cursorX = 0;
    let cursorY = 0;
    const followSpeed = 0.15;
    let followLockout = false;
    const promptDelay = 2000;

    const scrollPrompt = document.getElementById("scroll-prompt");
    let scrollPromptMoveDebump = false;
    let scrollPromptExpandTimeout;

    function deferScrollPrompt() {
        scrollPrompt.classList.remove("scroll");
        clearTimeout(scrollPromptExpandTimeout);
        scrollPromptExpandTimeout = setTimeout(() => {
            scrollPrompt.classList.add("scroll");
        }, promptDelay);
    }

    document.addEventListener("mousemove", (e) => {
        if (window.innerWidth < 994) return;
        if (scrollPromptMoveDebump) return;
        scrollPromptMoveDebump = true;
        requestAnimationFrame(() => (scrollPromptMoveDebump = false));
        cursorX = e.clientX;
        cursorY = e.clientY;
        scrollPrompt.classList.remove("hide");
        deferScrollPrompt();
    });

    function followCursor() {
        if (followLockout) return;
        if (window.innerWidth < 994) return;
        followLockout = true;
        const xDiff = cursorX - scrollPrompt.offsetLeft;
        const yDiff = cursorY - scrollPrompt.offsetTop;
        const xStep = xDiff * followSpeed;
        const yStep = yDiff * followSpeed;
        scrollPrompt.style.left = scrollPrompt.offsetLeft + xStep + "px";
        scrollPrompt.style.top = scrollPrompt.offsetTop + yStep + "px";
        requestAnimationFrame(() => {
            followLockout = false;
            followCursor();
        });
    }
    followCursor();

    document.addEventListener("scroll", (e) => {
        deferScrollPrompt();
    });

    document.addEventListener("mouseout", (e) => {
        scrollPrompt.classList.add("hide");
        clearTimeout(scrollPromptExpandTimeout);
    });

    window.addEventListener("resize", resize);

    function resize() {
        if (window.innerWidth < 994) {
            scrollPrompt.classList.add("hide");
        } else {
            followCursor();
        }
    }
    resize();
})();