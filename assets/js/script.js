jQuery(document).ready(function() {
    home();
    menu();
    menu_sticky();
    wowo();
    stickyMenu(jQuery);
    slider();
    resize_height();
    scrolly_images();
    dots();
    parallay();
    scrollFun();
    getEmbedHtml();
});

jQuery(window).scroll(function() {
    wowo();
    menu_sticky();
    // scroll_image_switch();
    scrolly_images();
    dots_scroll();
    scattered_gallery();
    parallay();
    resize_height();
});

jQuery(window).resize(function() {
    resize_height();
    scrollFun();

});

function parallay() {
    var sh = jQuery(window).scrollTop();
    var wh_ha = jQuery(window).height();

    jQuery(".parallay").each(function() {
        var parallax_h = jQuery(this).offset().top;
        if (sh > parallax_h - wh_ha) {
            var parallax_y = (sh - (parallax_h - wh_ha)) / 6;
            parallax_y = parallax_y / 2;
            jQuery(this).css("transform", "translate(0px,-" + parallax_y + "px)");
        }
    });
}

function wowo($) {
    setTimeout(function() {
        var wTop = jQuery(window).scrollTop(),
            wHeight = jQuery(window).height(),
            wBottom = wTop + wHeight;
        jQuery(".wowo:not(.animated)").each(function() {
            var me = jQuery(this),
                meTop = me.offset().top,
                meHeight = me.height(),
                meBottom = meTop + meHeight,
                limitTop = wTop - meHeight,
                limitBottom = wBottom + meHeight;
            if (meTop > limitTop && meBottom < limitBottom) {
                me.addClass("animated");
                setTimeout(function() {
                    me.removeClass("animated wowo");
                }, 1500);
            }
        });
    }, 100);
}

function menu_sticky() {
    var sh = jQuery(window).scrollTop();
    if (sh > 38 && !jQuery("header").hasClass("head-small")) {
        //jQuery("header").addClass("head-small");
    } else if (sh <= 30 && jQuery("header").hasClass("head-small")) {
        //jQuery("header").removeClass("head-small");
    }
    var logo = jQuery('header .head-content .head-content-box .head-logo');
    var scrollTop = jQuery(window).scrollTop();
    var windowHeight = jQuery(window).height();
    var isOnWhiteBox = false;

    jQuery('.white-boxed').each(function() {
        var boxTop = jQuery(this).offset().top;
        var boxBottom = boxTop + jQuery(this).outerHeight();
        if (scrollTop >= boxTop && scrollTop < boxBottom) {
            isOnWhiteBox = true;
        }

        if (scrollTop + windowHeight > boxBottom && scrollTop < boxTop) {
            isOnWhiteBox = false;
        }
    });


    if (isOnWhiteBox) {
        logo.addClass('logo-black-show');
    } else {
        logo.removeClass('logo-black-show');
    }

}

function menu() {
    jQuery(".hamburger").click(function() {
        jQuery(this).toggleClass("open");
        jQuery(".head-menu").toggleClass("open");
        jQuery("header").toggleClass("open");

        if (jQuery(".hamburger").hasClass("open")) {
            setTimeout(function() {
                jQuery(".head-logo").addClass("open");
            }, 800);
        }
        if (!jQuery(".hamburger").hasClass("open")) {
            jQuery("body").removeClass("hidden");
            setTimeout(function() {
                jQuery(".head-logo").removeClass("open");
            }, 1);
            jQuery(".menu .menu-box .menu-box-box .menu-menu .menu-item-has-children .sub-menu").removeClass("open-sub-menu");
        }
    });
    jQuery(".head-menu .menu .menu-item-has-children>a").append("<span class='icon iconfont icondvmp'></span>");
    jQuery("body").on("click", ".head-menu .menu .menu-item-has-children>a .icondvmp", function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(this).parent("a").siblings(".sub-menu-content").slideToggle(300);
        jQuery(this).parents(".menu-item-has-children").toggleClass("is-active");
        jQuery(this).parents(".menu-item-has-children").siblings().children(".sub-menu-content").slideUp(300);
        jQuery(this).parents(".menu-item-has-children").siblings().removeClass("is-active");
    });

    jQuery(".head-menu .menu .menu-item-has-children").hover(function() {
        jQuery("header").toggleClass("sub-menu-show");
        jQuery("header .head-content .head-content-box .head-logo").toggleClass("white-all");
    });

    jQuery("footer .box-and-menus .menus .menu>li.menu-item-has-children>a").append("<span class='icon iconfont icondvmp'></span>");
    jQuery("body").on("click", "footer .box-and-menus .menus .menu>li>a", function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(this).siblings(".sub-menu").slideToggle(300);
        jQuery(this).parents(".menu-item-has-children").toggleClass("is-active");
        jQuery(this).parents(".menu-item-has-children").siblings().children(".sub-menu").slideUp(300);
        jQuery(this).parents(".menu-item-has-children").siblings().removeClass("is-active");
    });
    jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu li.menu-item-has-children")
        .on("mouseenter", function() {
            jQuery("header .head-content").addClass("is-active");
            jQuery("body").addClass("menu-sticky");
        })
        .on("mouseleave", function() {
            jQuery("header .head-content").removeClass("is-active");

            jQuery("body").removeClass("menu-sticky");
        });

    jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .menu-item-has-children").on("mousemove", function() {

        jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").addClass("is-active");
        var he = jQuery(this).find(".sub-menu-content").outerHeight();
        console.log(he);
        setTimeout(function() {
            jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").addClass("is-active-2");

            jQuery('header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .mask').css("height", he);
        }, 300);
        jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").addClass("is-hover");
    });

    jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .menu-item-has-children").on("mouseout", function() {
        jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-hover");
        setTimeout(function() {
            if (!jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").hasClass("is-hover")) {


                jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").addClass("is-active-3");
            }

        }, 200);

        setTimeout(function() {
            if (!jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").hasClass("is-hover")) {

                jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-active-2");

            }

        }, 300);

        setTimeout(function() {
            if (!jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").hasClass("is-hover")) {
                jQuery('header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .mask').css("height", "calc(100% + 16px)");
                //jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-active-2");
                jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-active-3");
            }

        }, 400);
        setTimeout(function() {
            if (!jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").hasClass("is-hover")) {
                jQuery('header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .mask').css("height", "calc(100% + 0px)");
                //jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-active-2");
                jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu").removeClass("is-active");
            }

        }, 800);
    });


    jQuery("header .head-content .head-content-box .head-menu .head-menu-overflow .head-menu-overflow-box .menu .menu-item-has-children").each(function() {
        var i = 5;
        var i2 = 0;
        var i3 = 0;
        jQuery(this).find(".link-item").each(function() {
            jQuery(this).addClass('transition-delay-in-' + i + '');
            i += 2;
        });

        i2 = i + 2;
        i3 = i + 4;
        jQuery(this).find(".sub-menu-content .cards-box .card .box .img").addClass('transition-delay-in-' + i + '');
        jQuery(this).find(".sub-menu-content .cards-box .card .box .text").addClass('transition-delay-in-' + i2 + '');
        jQuery(this).find(".bottom-links-box").addClass('transition-delay-in-' + i3 + '');

    });
}

function stickyMenu($) {
    if ($("header").length) {
        const {
            body
        } = document;
        const nav = document.querySelector("header");
        const scrollUp = "menu-stuck";
        const scrollUpNav = "is-stuck";
        const scrollDown = "scroll-down";
        const scrollNone = "is-top";
        let lastScroll = 0;

        let navOffset = 100;

        function stickyMenuCont() {
            const currentScroll = window.pageYOffset;
            const scrollLimit = 0;
            const scrollValue = window.scrollY;
            // console.log(currentScroll);
            if ($("body").hasClass("autoscroll")) {
                return;
            }
            if (scrollValue >= scrollLimit) {
                if (currentScroll <= navOffset) {
                    body.classList.remove(scrollUp);
                    body.classList.remove(scrollDown);
                    nav.classList.remove(scrollUpNav);
                    return;
                }
                if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                    // down
                    body.classList.remove(scrollUp);
                    body.classList.add(scrollDown);
                    nav.classList.remove(scrollUpNav);
                } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                    // up
                    body.classList.remove(scrollDown);
                    body.classList.add(scrollUp);
                    nav.classList.add(scrollUpNav);
                }
                lastScroll = currentScroll;
            }
        }
        window.addEventListener("scroll", () => {
            stickyMenuCont();
        });
        window.addEventListener("load", () => {
            stickyMenuCont();
        });
    }
}

function home() {
    var modal = "colse";

    var cookie_accept = jQuery.cookie("hero-screen-animation"); //获取cookie

    // console.log(cookie_accept);
    if (cookie_accept == "colse") {} else {
        jQuery(".screen-animation").addClass("show");
        jQuery.cookie("hero-screen-animation", modal, {
            expires: 8640000000000,
            path: "/"
        });
    }

    if (jQuery("[data-scroll-container]").length > 0) {
        var scroll = new LoconativeScroll({
            el: document.querySelector("[data-scroll-container]"),
            // easing:(t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            scrollToEasing: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),

            smooth: true,
            reloadOnContextChange: false,
        });
        let box = jQuery("header.head-small .head-content .head-content-box");

        jQuery("#form_popup iframe").attr("title", "");
        jQuery(document)
            .find("a[href='#form_popup']")
            .click(function(e) {
                e.preventDefault();
                console.log(jQuery(this));

                jQuery("#form_popup").fadeIn(300);
                if (!box.hasClass("is-active")) {
                    box.addClass("is-active");
                }

                jQuery("body").css("overflow", "hidden");

                scroll.stop();
                jQuery('body,html').animate({
                    scrollTop: 0
                }, 600);
            });

        jQuery("#form_popup .form-close-button").click(function(e) {
            jQuery("#form_popup").fadeOut(300);
            if (box.hasClass("is-active")) {
                box.removeClass("is-active");
            }
            jQuery("body").css("overflow", "inherit");

            scroll.start();
        });

        jQuery("#form_popup").click(function(e) {
            e.stopPropagation();
            jQuery("#form_popup").fadeOut(300);
            if (box.hasClass("is-active")) {
                box.removeClass("is-active");
            }
            jQuery("body").css("overflow", "inherit");

            scroll.start();
        });
        jQuery("#form_popup .form-modal-content").click(function(e) {
            e.stopPropagation();
        });
    }
    if (jQuery(".code-container").length > 0) {
        const scrollBoxes = document.querySelectorAll("pre");
        scrollBoxes.forEach((scrollBox) => {
            scrollBox.addEventListener(
                "wheel",
                (event) => {
                    event.stopPropagation();
                }, {
                    passive: false
                }
            );
        });
    }

    // if (jQuery(".hero-banner-video.is-mobile").length > 0) {
    // 	var src_c = jQuery(".hero-banner-video.is-mobile").text();
    // 	var video_3 = new ScrollyVideo({
    // 		scrollyVideoContainer: "hero-banner-video-mobile",
    // 		src: src_c,
    // 		frameThreshold: 0.01,
    // 	});
    // }

    // if (jQuery(".moving-money-forward-video.is-desktop").length > 0) {
    // 	var src_c = jQuery(".moving-money-forward-video.is-desktop").find("source").attr("src");
    // 	var video_4 = new ScrollyVideo({
    // 		scrollyVideoContainer: "moving-money-forward-video-desktop",
    // 		src: src_c,
    // 		frameThreshold: 0.01,
    // 	});
    // }

    // if (jQuery(".moving-money-forward-video.is-mobile").length > 0) {
    // 	var src_c = jQuery(".moving-money-forward-video.is-mobile").find("source").attr("src");
    // 	var video_5 = new ScrollyVideo({
    // 		scrollyVideoContainer: "moving-money-forward-video-mobile",
    // 		src: src_c,
    // 		frameThreshold: 0.01,
    // 	});
    // }

    // if (jQuery(".hero-banner-video.is-desktop").length > 0) {
    // 	var src_c_6 = jQuery(".hero-banner-video.is-desktop").text();
    // 	src_c_6 = src_c_6.split("?")[0];
    // 	//console.log(src_c_6);
    // 	var video_6 = new ScrollyVideo({
    // 		scrollyVideoContainer: "hero-banner-video-desktop",
    // 		src: src_c_6,
    // 		frameThreshold: 0.01,
    // 		//debug:true,
    // 	});
    // }

    //
    //	if(jQuery('.moving-money-forward').length > 0){
    //		if(jQuery(window).width() > 768){
    //		var src_c=jQuery(".moving-money-forward-video.is-desktop").find("source").attr("src");
    //		}else{
    //		var src_c=jQuery(".moving-money-forward-video.is-mobile").find("source").attr("src");
    //
    //		}
    //	    var video_2= new ScrollyVideo({
    //	      scrollyVideoContainer: "moving-money-forward-video",
    //	      src: src_c,
    //	      frameThreshold: 0.01,
    //
    //	    });
    //	}

    setTimeout(function() {
        jQuery(".screen-animation").addClass("step-1");
    }, 500);
    setTimeout(function() {
        jQuery(".screen-animation").addClass("step-2");
    }, 1500);
    setTimeout(function() {
        jQuery(".screen-animation .content h2.hide").slideDown(300);
    }, 2000);
    setTimeout(function() {
        jQuery(".screen-animation").addClass("end");
    }, 3000);

    setTimeout(function() {
        jQuery(".hero-banner .content").addClass("is-show");
    }, 3300);

    setTimeout(function() {
        jQuery(".image-switch").addClass("is-show");
    }, 3800);

    jQuery(".payments-game-changer .cards .card .box").hover(function() {
        jQuery(this).find(".hide-text").stop().slideToggle(500);
    });
    jQuery(".category-cards .cards .card .box").hover(function() {
        jQuery(this).find(".hide-text").stop().slideToggle(200);
    });
    jQuery(".faqs .content .faqs-items .box .faq-title").click(function() {
        jQuery(this).siblings(".faq-text").slideToggle(200);
        jQuery(this).toggleClass("is-active");
        jQuery(this).parents(".box").siblings().children(".faq-text").slideUp(300);
        jQuery(this).parents(".box").siblings().children(".faq-title").removeClass("is-active");
    });

    jQuery("body").on("mousemove", ".news-cards .card .box a", function() {
        jQuery(this).parents(".box").addClass("is-active");
    });
    jQuery("body").on("mouseout", ".news-cards .card .box a", function() {
        jQuery(this).parents(".box").removeClass("is-active");
    });

    jQuery(".experts-cards .cards .card .box").hover(function() {
        jQuery(this).toggleClass("is-active");
    });
    jQuery(".page-banner .documents-cards .card .box .text .btn").hover(function() {
        jQuery(this).parents(".box").toggleClass("is-active");
    });

    if (jQuery(".gated-style").length > 0) {
        jQuery("footer").addClass("is-active");
    }
    if (jQuery(".error-page").length > 0) {
        jQuery("footer").addClass("is-active-full");
    }
    if (jQuery(".CTA-form-box").length > 0) {
        jQuery("footer").addClass("is-active-full");
    }
    if (jQuery(".CTA").length > 0) {
        jQuery("footer").addClass("is-active-full");
    }
    if (jQuery(window).width() < 768) {
        jQuery(".category-cards .cards .card .box").click(function(event) {
            if (jQuery(this).hasClass("is-active")) {} else {
                event.preventDefault();
            }
            jQuery(this).addClass("is-active");
        });

        jQuery(".experts-cards .cards .card .box").click(function(event) {
            if (jQuery(this).hasClass("is-active")) {} else {
                event.preventDefault();
            }
            jQuery(this).addClass("is-active");
        });
    }
    jQuery(".dev-zone .table-title .table-items .item").click(function() {
        var index_c = jQuery(this).index();
        jQuery(this).siblings().removeClass("active");
        jQuery(this).addClass("active");
        jQuery(this).parents(".dev-zone").find(".block").removeClass("active");
        jQuery(this).parents(".dev-zone").find(".block").eq(index_c).addClass("active");
    });

    jQuery(".dev-zone .table-content .block .text .buttons .buttons-box a").click(function(e) {
        e.preventDefault();
        var index_c = jQuery(this).index();
        jQuery(this).siblings().removeClass("active");
        jQuery(this).addClass("active");
        jQuery(this).parents(".block").find(".code").removeClass("active");
        jQuery(this).parents(".block").find(".code").eq(index_c).addClass("active");
        var this_c = jQuery(this);
        var text_c = jQuery(this).text();

        if (text_c == "Response") {
            this_c.parents(".buttons-box").addClass("response");
        } else {
            this_c.parents(".buttons-box").removeClass("response");
        }
    });
    jQuery(".dev-zone").click(function(e) {
        e.stopPropagation();
        jQuery(".dev-zone .table-title span").siblings(".table-items").slideUp(300);
        jQuery(".dev-zone .table-title span").removeClass("active");
    });
    jQuery(".dev-zone .table-title span").click(function(e) {
        e.stopPropagation();
        jQuery(this).toggleClass("active");
        if (jQuery(window).width() < 992) {
            jQuery(this).siblings(".table-items").slideToggle(300);
        }
    });

    jQuery(".dev-zone .table-title .table-items .item").click(function(e) {
        e.stopPropagation();
        var index_c = jQuery(this).text();
        jQuery(this).parents(".table-items").siblings("span").text(index_c);
        jQuery(this).parents(".table-items").siblings("span").removeClass("active");
        jQuery(this).parents(".table-items").slideUp(300);
    });
    jQuery(".tesimonials").each(function() {
        var this_c = jQuery(this);

        if (this_c.find(".placeholder-module").find(".box").length < 2) {
            this_c.find(".position-module").addClass("not-sticky");
        }

    });
}




// function scroll_image_switch() {
// 	if (jQuery(".hero-banner .image-switch").length > 0) {
// 		var wTop = jQuery(window).scrollTop(),
// 			wHeight = jQuery(window).height();
// 		var switch_5_show = 0.2;
// 		var switch_5_hide = 1;

// 		if (jQuery(window).width() > 768) {
// 			var meTop = jQuery("#hero-banner-video-desktop").offset().top;
// 		} else {
// 			var meTop = jQuery("#hero-banner-video-mobile").offset().top;

// 			var switch_5_show = 0.6;
// 			var switch_5_hide = 3;
// 		}
// 		var meTop2 = jQuery(".hero-banner .placeholder").offset().top;
// 		var switch_t = wTop / meTop;
// 		if (switch_t > 1) {
// 			switch_t = 1;
// 		}

// 		var switch_width = switch_t * 100;
// 		switch_width = switch_width * 0.364;
// 		switch_width = switch_width + 73.6;

// 		var switch_1 = switch_t;
// 		switch_1 = switch_1 / 5;
// 		switch_1 = 1.2 - switch_1;

// 		var switch_2 = switch_t;
// 		switch_2 = switch_2 / 3.3333;
// 		switch_2 = 1.3 - switch_2;

// 		jQuery(".hero-banner .image-switch .img").css("width", switch_width + "%");
// 		jQuery(".hero-banner .image-switch .switch-1").css("transform", "scale(" + switch_1 + ")");

// 		jQuery(".hero-banner .image-switch .switch-2").css("transform", "scale(" + switch_2 + ")");
// 		if (switch_1 < 1.15) {
// 			jQuery(".hero-banner .image-switch .switch-1").addClass("mrsk-show");
// 			jQuery(".hero-banner .image-switch .switch-2").addClass("show");
// 		} else {
// 			jQuery(".hero-banner .image-switch .switch-1").removeClass("mrsk-show");
// 			jQuery(".hero-banner .image-switch .switch-2").removeClass("show");
// 		}
// 		//console.log(wTop);

// 		if (wTop > meTop2 + wHeight / 2) {
// 			//console.log(meTop2);
// 			jQuery(".hero-banner .image-switch .switch-3").addClass("show");
// 			jQuery(".hero-banner .image-switch .switch-4").addClass("show");
// 		} else {
// 			jQuery(".hero-banner .image-switch .switch-3").removeClass("show");
// 			jQuery(".hero-banner .image-switch .switch-4").removeClass("show");
// 		}

// 		if (wTop > meTop2 + wHeight * switch_5_show) {
// 			//console.log(meTop2);
// 			jQuery(".hero-banner .image-switch .switch-3").addClass("zoom");
// 			jQuery(".hero-banner .image-switch .switch-4").addClass("zoom");


// 		} else {
// 			jQuery(".hero-banner .image-switch .switch-3").removeClass("zoom");
// 			jQuery(".hero-banner .image-switch .switch-4").removeClass("zoom");

// 		}



// 		if (wTop > meTop2 + wHeight * switch_5_hide) {
// 			jQuery(".hero-banner .image-switch .switch-5").addClass("hide");
// 			jQuery(".hero-banner .image-switch .img").addClass("zoom-end");
// 		} else {
// 			jQuery(".hero-banner .image-switch .switch-5").removeClass("hide");
// 			jQuery(".hero-banner .image-switch .img").removeClass("zoom-end");
// 		}

// 		if (wTop > (meTop2 + wHeight * switch_5_show) + (wHeight / 2)) {
// 			jQuery(".hero-banner .image-switch .switch-5").addClass("show");
// 		}else{
// 			jQuery(".hero-banner .image-switch .switch-5").removeClass("show");
// 		}

// 		if (wTop > (meTop2 + wHeight * switch_5_show) + (wHeight / 2) - 200) {
// 			console.log("111");
// 			var top_all = wTop - ((meTop2 + wHeight * switch_5_show)  + (wHeight / 2));

// 			if (jQuery(window).width() > 768) {
// 				var top_ccc = top_all / 1.3;
// 				var box_height = jQuery("#hero-banner-video-desktop").height();

// 				var h2_height = jQuery(".hero-banner .image-switch .img #hero-banner-video-desktop .bg-img .text h2").height();
// 				h2_height = h2_height + 42;
// 				var h3_height = jQuery(".hero-banner .image-switch .img #hero-banner-video-desktop .bg-img .text h3").height();
// 				var h2_h3_height = h2_height + h3_height;


// 			} else {
// 				var top_ccc = top_all / 1.4;
// 				var box_height = jQuery("#hero-banner-video-mobile").height();

// 				var h2_height = jQuery(".hero-banner .image-switch .img #hero-banner-video-mobile .bg-img .text h2").height();
// 				h2_height = h2_height + 32;
// 				var h3_height = jQuery(".hero-banner .image-switch .img #hero-banner-video-mobile .bg-img .text h3").height();
// 				var h2_h3_height = h2_height + h3_height;

// 			}

// 			//var ting=1000;

// 			//if(wTop > (meTop2 + (wHeight * switch_5_show) )){

// 			if (top_ccc > box_height / 2 + h2_h3_height / 2) {
// 				//console.log(top_ccc);
// 				var top_ccc = box_height / 2 + h2_h3_height / 2;

// 				//					var ss=top_all - top_111;
// 				//					console.log(top_111);


// 			}
// 			//}

// 			jQuery(".hero-banner .image-switch .img .bg-img .text").css("transform", "translate(0,calc(100% - " + top_ccc + "px))");
// 		}


// 		//video
// 		//var next_section_top = jQuery(".hero-banner").next("section").offset().top;
// 		//console.log(next_section_top);
// 		//video end

// 		var mov_meTop = jQuery(".moving-money-forward .content-item").offset().top;
// 		if (wTop > mov_meTop - wHeight / 2) {
// 			jQuery(".moving-money-forward .content-item .boxed-item").addClass("show-img");

// 			var show_img_top = wTop - (mov_meTop - wHeight / 2);
// 			show_img_top = show_img_top / 2;
// 			if (show_img_top > 450) {
// 				show_img_top = 450;
// 			}
// 			jQuery(".moving-money-forward .content-item .boxed-item .img").css("transform", "translate(-100%," + show_img_top + "px)");
// 		} else {
// 			jQuery(".moving-money-forward .content-item .boxed-item").removeClass("show-img");
// 		}

// 		var cta_meTop = jQuery(".CTA-form").offset().top;
// 		var cta_height = jQuery(".CTA-form").height();
// 		var z = wTop - (cta_meTop - wHeight * 0.2);
// 		//console.log(z);
// 		z = z / 400;
// 		z = z * 0.09;
// 		if (z > 0.09) {
// 			z = 0.09;
// 		}
// 		z = 1 - z;
// 		if (z < 0.91) {
// 			z = 0.91;
// 		}
// 		if (z > 0.985) {
// 			z = 1;
// 		}
// 		if (wTop > cta_meTop - wHeight * 0.2) {
// 			//jQuery(".CTA-form .boxed ").css("transform", "scale(" + z + ")");
// 		} else {
// 			//jQuery(".CTA-form").removeClass("show-img");
// 		}
// 	}

// 	if (jQuery(".moving-money-forward").length > 0) {
// 		var wTop = jQuery(window).scrollTop(),
// 			wHeight = jQuery(window).height();
// 		var meTop = jQuery(".moving-money-forward").offset().top;
// 		var height = jQuery(".moving-money-forward .moving-money-forward-box").height();

// 		if (wTop > meTop + height - wHeight) {
// 			jQuery(".moving-money-forward .moving-money-forward-box").addClass("is-active");
// 		} else {
// 			jQuery(".moving-money-forward .moving-money-forward-box").removeClass("is-active");
// 		}
// 	}
// }

function slider() {
    if (jQuery(".news-carousel-slider").length > 0) {
        function initializeSlick() {
            jQuery(".news-carousel-slider").slick({
                dots: false,
                arrows: false,
                infinite: false,
                fade: false,
                speed: 400,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                draggable: true,
                //centerMode: true,
                variableWidth: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            variableWidth: false,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false,
                        },
                    },
                ],
            });
        }

        initializeSlick();

        jQuery(".news-carousel .title-box .box .title h2").click(function() {
            jQuery(this).addClass("active");
            jQuery(this).siblings().removeClass("active");
            var index = jQuery(this).index();

            jQuery(".news-carousel .news-carousel-slider").slick("unslick");

            jQuery(".news-carousel .news-carousel-slider").removeClass("active");
            jQuery(".news-carousel .news-carousel-slider").eq(index).addClass("active");

            initializeSlick();

            var line = jQuery(".news-carousel-slider.active .slider-block").length;
            jQuery('.news-carousel .title-box .box .links .number .count').text(line);
            jQuery('.news-carousel .title-box .box .links .number .active').text("1");
            jQuery(".news-carousel .title-box .box .links .prev-and-next .prev").addClass("no-drop");
            jQuery(".news-carousel .title-box .box .links .prev-and-next .next").removeClass("no-drop");
        });


        var line = jQuery(".news-carousel-slider.active .slider-block").length;
        jQuery('.news-carousel .title-box .box .links .number .count').text(line);

        jQuery(".news-carousel .title-box .box .links .prev-and-next a").click(function(e) {
            e.preventDefault();
        });

        jQuery("body").on("click", ".news-carousel .title-box .box .links .prev-and-next .next:not(.no-drop)", function(e) {
            e.preventDefault();
            jQuery(".news-carousel-slider.active").slick("slickNext");



        });

        jQuery("body").on("click", ".news-carousel .title-box .box .links .prev-and-next .prev:not(.no-drop)", function(e) {

            e.preventDefault();
            jQuery(".news-carousel-slider.active").slick("slickPrev");
        });

        jQuery('.news-carousel-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

            var active = nextSlide + 1;
            jQuery('.news-carousel .title-box .box .links .number .active').text(active);
            if (nextSlide >= 1) {
                jQuery(".news-carousel .title-box .box .links .prev-and-next .prev").removeClass("no-drop");
            } else {
                jQuery(".news-carousel .title-box .box .links .prev-and-next .prev").addClass("no-drop");
            }
            //console.log(nextSlide);

            var count_2 = jQuery(".news-carousel-slider.active .slider-block").length;
            count_2 = count_2 - 1;
            if (count_2 == nextSlide) {
                jQuery(".news-carousel .title-box .box .links .prev-and-next .next").addClass("no-drop");
            } else {
                jQuery(".news-carousel .title-box .box .links .prev-and-next .next").removeClass("no-drop");
            }


        });

        document.querySelector(".news-carousel-slider").addEventListener("wheel", function(e) {
            if (e.deltaX !== 0) {
                e.preventDefault();
                if (e.deltaX > 50) {
                    jQuery(".news-carousel-slider").slick("slickNext");
                } else if (e.deltaX < -50) {
                    jQuery(".news-carousel-slider").slick("slickPrev");
                }
            }
        });
    }

    if (jQuery(".category-cards-slider").length > 0) {
        jQuery(".category-cards-slider").slick({
            dots: false,
            arrows: false,
            infinite: false,
            fade: false,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 5000,
            draggable: true,
            //centerMode: true,
            //variableWidth: true,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 556,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                    },
                },
            ],
        });

        document.querySelector(".category-cards-slider").addEventListener("wheel", function(e) {
            if (e.deltaX !== 0) {
                e.preventDefault();
                if (e.deltaX > 50) {
                    jQuery(".category-cards-slider").slick("slickNext");
                } else if (e.deltaX < -50) {
                    jQuery(".category-cards-slider").slick("slickPrev");
                }
            }
        });
    }
    jQuery(".experts-cards").each(function() {
        var item = jQuery(this).find(".card").length;
        if (item > 3) {
            jQuery(this).addClass("slider-cards");

            jQuery(".experts-cards .cards").slick({
                dots: false,
                arrows: false,
                infinite: false,
                fade: false,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                draggable: true,
                //centerMode: true,
                //variableWidth: true,
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            variableWidth: false,
                        },
                    },
                    {
                        breakpoint: 556,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false,
                        },
                    },
                ],
            });
            document.querySelector(".experts-cards .cards").addEventListener("wheel", function(e) {
                if (e.deltaX !== 0) {
                    e.preventDefault();
                    if (e.deltaX > 50) {
                        jQuery(".experts-cards .cards").slick("slickNext");
                    } else if (e.deltaX < -50) {
                        jQuery(".experts-cards .cards").slick("slickPrev");
                    }
                }
            });
        }
    });

    if (jQuery(".documents-cards").length > 0) {
        jQuery(".documents-cards").slick({
            dots: false,
            arrows: false,
            infinite: false,
            fade: false,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            draggable: true,
            //centerMode: true,
            //variableWidth: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 556,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                    },
                },
            ],
        });
        document.querySelector(".documents-cards").addEventListener("wheel", function(e) {
            if (e.deltaX !== 0) {
                e.preventDefault();
                if (e.deltaX > 50) {
                    jQuery(".documents-cards").slick("slickNext");
                } else if (e.deltaX < -50) {
                    jQuery(".documents-cards").slick("slickPrev");
                }
            }
        });
    }

    //	if (jQuery(window).width() < 992.5) {
    //	if (jQuery('.dev-zone .table-content').length > 0) {
    //		jQuery('.dev-zone .table-content').slick({
    //			dots: true,
    //			arrows: false,
    //			infinite: false,
    //			fade: true,
    //			speed: 800,
    //			slidesToShow: 1,
    //			slidesToScroll: 1,
    //			autoplay: false,
    //			autoplaySpeed: 5000,
    //			draggable: true,
    //			adaptiveHeight:true,
    //
    //		});
    //	}
    //	}

    if (jQuery(".licences-slider").length > 0) {
        jQuery(".licences-slider").slick({
            dots: false,
            arrows: false,
            infinite: true,
            fade: false,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            draggable: true,
            //centerMode: true,
            //variableWidth: true,
            responsive: [{
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 556,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
        document.querySelector(".licences-slider").addEventListener("wheel", function(e) {
            if (e.deltaX !== 0) {
                e.preventDefault();
                if (e.deltaX > 50) {
                    jQuery(".licences-slider").slick("slickNext");
                } else if (e.deltaX < -50) {
                    jQuery(".licences-slider").slick("slickPrev");
                }
            }
        });
    }
    //	const splide = new Splide( '.splide', {
    //	  type   : 'loop',
    //	  drag   : 'free',
    //	  focus  : 'center',
    //	  perPage: 4,
    //	   autoWidth: true,
    //
    //	  autoScroll: {
    //	    speed: 1,
    //	    pauseOnHover: false,
    //	  },
    //	} );
    //
    //	const splide = new Splide( '.splide', {
    //	  type   : 'loop',
    //	  drag   : 'free',
    //	  focus  : 'center',
    //	  perPage: 3,
    //	  autoWidth: true,
    //	  autoScroll: {
    //	    speed: 1,
    //	    pauseOnHover: false,
    //	  },
    //	} );
    //
    //	splide.mount( window.splide.Extensions );

    if (jQuery("#splide-left").length > 0) {
        var splide = new Splide("#splide-left", {
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            autoWidth: true,
            autoScroll: {
                speed: 1,
                pauseOnHover: false,
            },
        });
        splide.mount(window.splide.Extensions);
    }
    if (jQuery("#splide-right").length > 0) {
        var splide2 = new Splide("#splide-right", {
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            autoWidth: true,
            autoScroll: {
                speed: -1,
                pauseOnHover: false,
            },
        });
        splide2.mount(window.splide.Extensions);

        setInterval(function() {
            splide.Components.AutoScroll.play();
            splide2.Components.AutoScroll.play();
        }, 1000);
    }
}

window.onload = function() {
    if (jQuery("footer").length > 0) {
        var element = document.querySelector("footer");
        var height = element.offsetHeight;
        // console.log(height);
        //jQuery(".CTA .CTA-form-box").css('min-height',height);
        //jQuery(".CTA-form .CTA-form-box").css('min-height',height);
        jQuery(".payto-news.article-style .payto-news-box-box").css("min-height", height);
        jQuery(".intro-text-box-box").css("min-height", height);

        var margin_top = -height;
        //jQuery("footer").css('margin-top',margin_top);
    }
};

function resize_height() {
    if (jQuery(".text-and-image").length > 0) {
        var wHeight = jQuery(window).height();
        jQuery(".text-and-image").each(function() {
            var this_c = jQuery(this);
            var height = this_c.find(".image").children(".img").eq(0).height();
            // console.log(height);
            this_c.find(".text-item").css("min-height", height);
            var top = wHeight / 2 - height / 2;
            this_c.find(".image").css("top", top);
        });
    }

    if (jQuery(".tesimonials").length > 0) {
        var wHeight = jQuery(window).height();
        jQuery(".tesimonials").each(function() {
            var this_c = jQuery(this);
            var height = this_c.find(".position-module-box").children(".box").eq(0).outerHeight();
            this_c.find(".position-module-box").css("min-height", height);
        });

        var le = jQuery(".tesimonials .content .placeholder-module .box").length;
        le = le - 3;
        le = le * 24;
        le = le + 80;
        //jQuery(".tesimonials .content .block.position-module .position-module-box").css("top",le+"px");
    }
}

function scrolly_images() {
    var wTop = jQuery(window).scrollTop(),
        wHeight = jQuery(window).height();

    jQuery(".text-and-image .content .text .text-item").each(function() {
        var this_c = jQuery(this);
        var height = this_c.height();
        var logos_he = this_c.offset().top;
        var max = this_c.parents(".text-and-image").find(".img").length;
        if (wTop > logos_he - wHeight / 2 && wTop < logos_he - wHeight / 2 + height) {
            var index = this_c.index();
            //console.log(index);
            if (index > max) {
                index = max;
            }
            this_c.parents(".text-and-image").find(".img").removeClass("is-show");
            this_c.parents(".text-and-image").find(".img").eq(index).addClass("is-show");

            if (this_c.parents(".text-and-image").find(".img").find("video").length > 0) {
                var vdieo = this_c.parents(".text-and-image").find(".img").find("video");
                vdieo.trigger('pause');

                var vdieo_active = this_c.parents(".text-and-image").find(".img").eq(index).find("video");
                vdieo_active.trigger('play');
            }
        } else {}
    });

    jQuery(".tesimonials .content .placeholder-module .box").each(function() {
        var this_c = jQuery(this);
        var index_all = this_c.parents(".placeholder-module").find(".box").length;
        var height = this_c.height();
        var logos_he = this_c.offset().top;
        logos_he = logos_he - 100;
        //var max=this_c.parents(".text-and-image").find(".img").length;
        if (wTop > logos_he - wHeight / 3) {
            var index = this_c.index();
            // console.log(index);
            this_c
                .parents(".tesimonials")
                .find(".position-module-box")
                .addClass("is-step-" + index + "");
            //this_c.parents(".tesimonials").find(".position-module-box").removeClass('is-step-'+index_c+'');
            //this_c.parents(".text-and-image").find(".img").eq(index).addClass('is-show');

            //          this_c.parents(".tesimonials").find(".position-module").find(".box").removeClass('is-show');
            //          this_c.parents(".tesimonials").find(".position-module").find(".box").eq(index).addClass('is-show');
            //          this_c.parents(".tesimonials").find(".position-module").find(".box").eq(index + 1).addClass('is-show');
        } else {
            var index = this_c.index();

            //          if(index == index_all){
            //          	console.log(index);
            //          }
            this_c
                .parents(".tesimonials")
                .find(".position-module-box")
                .removeClass("is-step-" + index + "");
        }
    });
}

function dots() {
    if (jQuery(".article-content").length > 0) {
        var i = 1;

        jQuery(".article-content .content .dots-anchor").each(function() {
            if (i == 1) {
                var active = "active";
            } else {
                var active = "";
            }
            jQuery(".article-content .dots-list .dots-list-box").append("<div class='dots-box " + active + "'></div>");
            i++;
        });

        jQuery("body").on("click", ".article-content .dots-list .dots-list-box .dots-box", function() {
            var this_p = jQuery(this);
            var text_p = this_p.index();
            var i2 = 0;
            jQuery(".article-content .content .dots-anchor").each(function() {
                var this_c = jQuery(this);

                if (i2 == text_p) {
                    //console.log(this_c.attr("data"));

                    jQuery("html,body").stop().animate({
                        scrollTop: this_c.offset().top
                    }, 600);
                }
                i2++;
            });
        });
    }
}

function dots_scroll() {
    var wTop = jQuery(window).scrollTop();
    var wHeight = jQuery(window).height();
    var wBottom = wTop + wHeight;
    if (jQuery(".article-content").length > 0) {
        var i = 0;
        jQuery(".article-content .content .dots-anchor").each(function() {
            var me = jQuery(this);
            var meTop = me.offset().top;
            var meHeight = me.innerHeight();
            var meBottom = meTop + meHeight;

            var limitTop = wTop;
            var limitBottom;

            limitBottom = wTop + wHeight * 0.5;
            var anchor = i;

            if (meTop <= limitBottom) {
                jQuery(".article-content .dots-list .dots-list-box .dots-box").each(function() {
                    var this_c = jQuery(this);
                    var text_c = this_c.index();
                    if (text_c == anchor) {
                        this_c.addClass("active");
                        this_c.siblings().removeClass("active");
                    }
                });
            } else {}
            i++;
        });
    }
}

function scattered_gallery() {
    var wTop = jQuery(window).scrollTop(),
        wHeight = jQuery(window).height();
    if (jQuery(".scattered-gallery").length > 0) {
        var about_height = jQuery(".about-banner").height();
        about_height = about_height + wHeight * 1.3;
        var sg_top = jQuery(".scattered-gallery").offset().top;

        var he = about_height - wHeight;
        var z = wTop - about_height + wHeight;
        z = -z;
        z = he - z;
        z = z / he;
        //he=he/wTop;

        if (z < 2) {
            //console.log(z);
            var img_1_left = z * 400;
            var img_1_rotate = z * 25;
            jQuery(".about-banner .scattered-gallery .gallery-box .gallery .img-box")
                .eq(0)
                .find(".box")
                .css("transform", "translate(-" + img_1_left + "%,0%) rotate(-" + img_1_rotate + "deg)");

            var img_2_left = z * 150;
            var img_2_rotate = z * 15;
            if (z > 0.36) {
                img_2_left = img_2_left + (z - 0.36) * 400;
            }
            jQuery(".about-banner .scattered-gallery .gallery-box .gallery .img-box")
                .eq(1)
                .find(".box")
                .css("transform", "translate(-" + img_2_left + "%,0%) rotate(-" + img_2_rotate + "deg)");
            var img_3_left = z * 150;
            var img_3_rotate = z * 15;
            if (z > 0.36) {
                img_3_left = img_3_left + (z - 0.36) * 400;
            }
            jQuery(".about-banner .scattered-gallery .gallery-box .gallery .img-box")
                .eq(2)
                .find(".box")
                .css("transform", "translate(" + img_3_left + "%,0%) rotate(" + img_3_rotate + "deg)");

            var img_4_left = z * 400;
            var img_4_rotate = z * 25;
            jQuery(".about-banner .scattered-gallery .gallery-box .gallery .img-box")
                .eq(3)
                .find(".box")
                .css("transform", "translate(" + img_4_left + "%,0%) rotate(" + img_4_rotate + "deg)");
        }
    }
}

function scrollFun() {
    var cta_height = $(".CTA-form").innerHeight();
    var paddingTop = ($(window).width() > 768 ? 104 : 70) + cta_height / 2;

    //jQuery(".scroll-logos").css({ "padding-top": paddingTop + "px", "margin-top": -cta_height / 2 });

    jQuery(".tesimonials").each(function() {
        var this_c = jQuery(this);
        var maxHeight = 0;
        this_c.find(".placeholder-module").find(".box").each(function() {
            var he = jQuery(this).outerHeight();

            if (he > maxHeight) {
                maxHeight = he;
            }
        });

        console.log(maxHeight);
        this_c.find(".position-module").find(".box").css("min-height", maxHeight + "px");
    });
}

function getEmbedHtml() {
    var mediaPlatforms = [{
            name: "dailymotion",
            url: [/dailymotion\.com\/video\/(\w+)/, /dai\.ly\/(\w+)/],
            html: function(match) {
                var id = match[1];
                return ['<div style="position: relative; padding-bottom: 100%; height: 0; width: 100%; ">', '<iframe src="https://www.dailymotion.com/embed/video/', id, '" ', 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ', 'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">', "</iframe>", "</div>"].join("");
            },
        },
        {
            name: "spotify",
            url: [/open\.spotify\.com\/(artist\/\w+)/, /open\.spotify\.com\/(album\/\w+)/, /open\.spotify\.com\/(track\/\w+)/],
            html: function(match) {
                var id = match[1];
                return ['<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%; width: 100%;">', '<iframe src="https://open.spotify.com/embed/', id, '" ', 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ', 'frameborder="0" allowtransparency="true" allow="encrypted-media">', "</iframe>", "</div>"].join("");
            },
        },
        {
            name: "youtube",
            url: [/(?:www\.)?youtube\.com\/watch\?v=([\w-]+)(?:&t=(\d+))?/, /(?:www\.)?youtube\.com\/shorts\/([\w-]+)(?:\?t=(\d+))?/, /(?:www\.)?youtube\.com\/v\/([\w-]+)(?:\?t=(\d+))?/, /youtube\.com\/embed\/([\w-]+)(?:\?start=(\d+))?/, /^youtu\.be\/([\w-]+)(?:\?t=(\d+))?/],
            html: function(match) {
                var id = match[1];
                var time = match[2];
                return ['<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%; width: 100%;">', '<iframe src="https://www.youtube.com/embed/', id, time ? "?start=" + time : "", '" ', 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ', 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>', "</iframe>", "</div>"].join("");
            },
        },
        {
            name: "vimeo",
            url: [/vimeo\.com\/(\d+)/, /vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/, /vimeo\.com\/album\/[^/]+\/video\/(\d+)/, /vimeo\.com\/channels\/[^/]+\/(\d+)/, /vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/, /vimeo\.com\/ondemand\/[^/]+\/(\d+)/, /player\.vimeo\.com\/video\/(\d+)/],
            html: function(match) {
                var id = match[1];
                return ['<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%; width: 100%;">', '<iframe src="https://player.vimeo.com/video/', id, '" ', 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ', 'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>', "</iframe>", "</div>"].join("");
            },
        },
        {
            name: "instagram",
            url: [/instagram\.com\/p\/(\w+)/, /instagram\.com\/reel\/(\w+)/],
        },
        {
            name: "twitter",
            url: [/twitter\.com/, /x\.com/],
        },
        {
            name: "googleMaps",
            url: [/google\.com\/maps/, /goo\.gl\/maps/, /maps\.google\.com/, /maps\.app\.goo\.gl/],
        },
        {
            name: "flickr",
            url: [/flickr\.com/],
        },
        {
            name: "facebook",
            url: [/facebook\.com/],
        },
    ];

    function validateUrl(url) {
        var platform = mediaPlatforms.find(function(platform) {
            return platform.url.some(function(regex) {
                var match = url.match(regex);

                if (match) {
                    platform.match = match;
                    return true;
                }
                return false;
            });
        });

        if (platform) {
            var html = platform.html(platform.match);
            return {
                name: platform.name,
                html: html
            };
        } else {
            return null;
        }
    }

    jQuery(".article-content oembed").each(function() {
        var url = jQuery(this).attr("url");
        var result = validateUrl(url);

        if (result) {
            console.log(result.name); // Output: "youtube"
            //	console.log(result.html); // Output: HTML code for the YouTube video

            jQuery(this).before(result.html);
            jQuery(this).remove();
        } else {
            console.log("No matching platform found");
        }
    });
}