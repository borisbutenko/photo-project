(function($) {

    $(function() {

        "use strict";


        /*----------------------------
         mobile menu
         ------------------------------ */
        // $('#mobile-menu-active').meanmenu();
        // $('#mobile-menu-active-dark').meanmenu();

        /*----------------------------
         wow js active
         ------------------------------ */
        new WOW().init();


        /*----------------------------
         Countdown
         ------------------------------ */
        $("#DateCountdown").TimeCircles({
            "animation": "ticks",
            "bg_width": 2,
            "fg_width": 0.03333333333333333,
            "circle_bg_color": "#fff",
            "time": {
                "Days": {
                    "text": "Days",
                    "color": "#c92c61",
                    "show": true
                },
                "Hours": {
                    "text": "Hours",
                    "color": "#c92c61",
                    "show": true
                },
                "Minutes": {
                    "text": "Mins",
                    "color": "#c92c61",
                    "show": true
                },
                "Seconds": {
                    "text": "Secs",
                    "color": "#c92c61",
                    "show": true
                }
            }
        });


        //toogle-menu
        $('.icon_cog').on('click', function () {
            $('.settings-open').slideToggle(500)
        });
        $('.icon_search').on('click', function () {
            $('.inner-form').slideToggle(500)
        });
        $('.icon_bag_alt').on('click', function () {
            $('.cart-open').slideToggle(500)
        });

        /* expand menu */
        $('.icon_menu').on('click', function () {
            $('.menu-expand').slideToggle(400)
            $(".icon_close").on('click',function () {
                $(".menu-expand").slideUp("slow");

            });
        });


        /*---------------------
         venobox
         --------------------- */
        $('.venobox').venobox();


        /*----------------------------
         price-slider
         ------------------------------ */
        $("#slider-range").slider({
            range: true,
            min: 14.00,
            max: 53.00,
            values: [18.00, 40.00],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));


        /*----------------------------
         TOP Menu Stick
         ------------------------------ */

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 180) {
                $(".header-area").removeClass("sticky");
            } else {
                $(".header-area").addClass("sticky");
            }
        });

        /* light-header */
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 180) {
                $(".light-header-area").removeClass("sticky-light");
            } else {
                $(".light-header-area").addClass("sticky-light");
            }
        });

        /* fixed-header-light */
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 180) {
                $(".fixed-header-light").removeClass("fixed-sticky-light");
            } else {
                $(".fixed-header-light").addClass("fixed-sticky-light");
            }
        });


        /*----------------------------
         new-product-carosel
         ------------------------------ */
        $(".new-product-carosel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: true,
            items: 3,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
        });


        /*----------------------------
         feature-carosel
         ------------------------------ */
        $(".feature-carosel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: true,
            items: 4,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         feature-carosel
         ------------------------------ */
        $(".home2-feature-carosel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: true,
            items: 5,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1499, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
        });


        /*----------------------------
         testimonial-carousel
         ------------------------------ */
        $(".testimonial-carousel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: true,
            navigation: true,
            items: 1,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["PREV", "NEXT"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         blog-carousel
         ------------------------------ */
        $(".blog-carousel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: true,
            items: 1,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         promotion-carousel
         ------------------------------ */
        $(".promotion-carousel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: false,
            items: 1,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         main-banner-carousel
         ------------------------------ */
        $(".main-banner-carousel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: false,
            items: 2,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         add-bottom-carousel
         ------------------------------ */
        $(".add-bottom-carousel").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: false,
            items: 1,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
        });

        /*----------------------------
         product-tab-slider
         ------------------------------ */
        $(".product-tab-slider").owlCarousel({
            autoPlay: false,
            slideSpeed: 2000,
            pagination: false,
            navigation: true,
            items: 4,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [768, 4],
            itemsMobile: [479, 3],
        });

        /*--------------------------
         scrollUp
         ---------------------------- */
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            scrollSpeed: 900,
            animationInSpeed: 1000, // Animation in speed (ms)
            animationOutSpeed: 1000, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        $('.js-meanmenu-reveal').on('click', function() {
            $(this).next('.mean-nav').slideToggle(300);
        });

        // if ( $('.swiper-photos').length )
        //     var swiperPhotos = new Swiper ('.swiper-photos', {
        //         slidesPerView: 6,
        //         spaceBetween: 30,
        //         autoplay: 3000,
        //         loop: true,
        //         // Ajax on
        //         // lazyLoading: true,
        //         // lazyLoadingInPrevNext: true,
        //         // preloadImages: false,
        //         // lazyLoadingOnTransitionStart: true
        //     });
        //
        // var swiperPhotoSingle = new Swiper ('.swiper-photo-single', {
        //     nextButton: '.swiper-button-next',
        //     prevButton: '.swiper-button-prev',
        //     buttonDisabledClass: ''
        // });

        // $('.swiper-photo-single').on('click', 'a[data-action=lazy-swiper]', function () {
        //     nextI($('a.swiper-button-next'), $('a.swiper-button-prev'));
        // });
        //
        // nextI($('a.swiper-button-next'), $('a.swiper-button-prev'));
        //
        // function nextI(btnNext$, btnPrev$) {
        //     var index       = swiperPhotoSingle.snapIndex,
        //         slideNext$  = $(swiperPhotoSingle.slides[index + 1]),
        //         slidePrev$  = $(swiperPhotoSingle.slides[index - 1]),
        //         targetNext$ = slideNext$.find('img'),
        //         targetPrev$ = slidePrev$.find('img'),
        //         srcNext     = targetNext$.attr('src'),
        //         srcPrev     = targetPrev$.attr('src');
        //
        //     if ( targetNext$.length ) {
        //         btnNext$.attr('href', srcNext);
        //     } else {
        //         btnNext$.attr('href', '#0');
        //     }
        //
        //     if ( targetPrev$.length ) {
        //         btnPrev$.attr('href', srcPrev);
        //     } else {
        //         btnPrev$.attr('href', '#0');
        //     }
        // }

        $('.like-dislike').on('click', '[data-action]', function() {
            var self$   = $(this),
                data    = self$.data('action'),
                target$ = self$.parents('.like-dislike');

            $('.like-dislike [data-action]').removeClass('color-green color-red');

            switch(data) {
                case 'like':
                    self$.addClass('color-green');
                    target$
                        .removeClass('disliked')
                        .addClass('liked');
                    break;
                case 'dislike':
                    self$.addClass('color-red');
                    target$
                        .removeClass('liked')
                        .addClass('disliked');
                    break;
                default:
                    return false;
            }
        });

        $("[data-select]").select2({
            placeholder : "Выберите друга"
        });

        $('[data-like]').on('click', function() {
            var data = $(this).data('like');

            $(this)
                .parents('.footer-banner').find('[data-like]')
                .removeClass('color-red color-green');

            if ( data === 'up' ) $(this).addClass('color-green');
            if ( data === 'dw' ) $(this).addClass('color-red');

        });

    });

})(jQuery);