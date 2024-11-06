;
(function ($) {
    "use strict";
    $('.cg_get_appy_tab_wrap .cg_get_appy_tab li a').on('click', function (e) {
        var tab_height = $('.cg_get_appy_tab_slider_item').outerHeight();
        $('.cg_get_appy_tab_content').css({
            'height': tab_height + 'px',
        });
    });

    /*===========  cg_feedback_masonry  ===========*/
    function cg_feedback_masonry() {
        if ($('.cg_feedback_masonry').length > 0) {
            var $grid = $('.cg_feedback_masonry').isotope({
                itemSelector: '.cg_feedback_two_slider_item',
                percentPosition: false,
                layoutMode: 'masonry',
                filter: '.google_play',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1
                }
            });

            $(".cg_feedback_two_tab li a").on('click', function () {
                $('.apple_app_store').removeClass('d_none');
                $(".cg_feedback_two_tab li a").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $grid.isotope({
                    filter: selector,
                });
                return false;
            });
        }
    }
    cg_feedback_masonry();

    function menu_fixed() {
        var h_m_f = $('.cg_header');

        function menu_scroll_fixed(e) {
            var windowTop = $(window).scrollTop();
            var adDcl = "fixedMenu";
            if (windowTop > 0) {
                e.addClass(adDcl);
            } else {
                e.removeClass(adDcl);
            }
        }
        menu_scroll_fixed(h_m_f);

        $(window).scroll(function () {
            menu_scroll_fixed(h_m_f);
        });
    }
    menu_fixed();


    function cg_get_appy_tab_slider() {
        if ($('.cg_get_appy_tab_slider').length > 0) {
            $('.cg_get_appy_tab_slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 2000,
                arrows: false,
                dots: false,
                autoplay: true,
                pauseOnHover: false,
                responsive: [{
                        breakpoint: 1026,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                        }
                        },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        }
                        },
                    {
                        breakpoint: 679,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                        }
                        }
                    ]
            });
        }
    }
    cg_get_appy_tab_slider();

    function cg_lifestyle_feedback_slider() {
        if ($('.cg_lifestyle_feedback_slider').length > 0) {
            $('.cg_lifestyle_feedback_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                speed: 1000,
                arrows: true,
                dots: false,
                pauseOnHover: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            arrows: false,
                        }
                        }
                    ]
            });
        }
    }
    cg_lifestyle_feedback_slider();


    /*--------- WOW js-----------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init();
    }
    wowAnimation();

    //js for latest_news_slider
    $('.cg_review_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        asNavFor: '.cg_review_slider',
        focusOnSelect: true,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
                }
            ]
    });

    function cg_review_slider() {

        //js for latest_news_slider
        $('.cg_review_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 1000,
            arrows: true,
            dots: false,
            asNavFor: '.cg_review_text_slider',
            pauseOnHover: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                    }
                    }
                ]
        });
    }
    cg_review_slider();

    function cg_video_slider_wrap() {
        //js for cg_video_slider_wrap
        $('.cg_video_slider_wrap').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        dots: false,
                    }
                    }
                ]
        });
    }
    cg_video_slider_wrap();

    function cg_travel_video_slider() {
        //js for cg_travel_video_slider
        $('.cg_travel_video_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: false,
                    }
                    }]
        });
    }
    cg_travel_video_slider();

    function rightClickOFf() {
        /* Right click , ctrl+u and ctrl+shift+i disabled */
        $('body').on('contextmenu', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }
    //rightClickOFf();

    function addCladdddssInFAq() {
        $('.cg_accordion .cg_faq_title').each(function () {
            var $this = $(this);
            $this.on('click', function (m) {
                var has = $this.parent().hasClass('open');
                $('.cg_accordion .cg_faq_title').parent().removeClass('open');
                if (has) {
                    $this.parent().removeClass('open');
                } else {
                    $this.parent().addClass('open');
                }
            });
        });
    }
    addCladdddssInFAq();

    /*----------------------------------------------------
                            Flexslider
    ----------------------------------------------------*/

    function social_slider_screen() {
        if ($(".social_slider_screen").length) {
            $('#sliders').flexslider({
                animation: "slide",
                directionNav: false,
                animationLoop: false,
                manualControls: ".w_items_wrap .w_items",
                slideshow: false,
                touch: true,
            });
        }
    }
    social_slider_screen();

    /*===========Portfolio isotope js===========*/
    function portfolioMasonry() {
        var portfolio = $("#work-portfolio");
        if (portfolio.length) {
            portfolio.imagesLoaded(function () {
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: ".portfolio_item",
                    layoutMode: 'masonry',
                    filter: "*",
                    animationOptions: {
                        duration: 1000
                    },
                    transitionDuration: '0.5s',
                    masonry: {

                    }
                });

                // Add isotope click function
                $("#portfolio_filter div").on('click', function () {
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
                });
            });
        }
    }
    portfolioMasonry();

    function popupGallery() {
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function () {
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            });
        }
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
            });
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    popupGallery();

    function tab_hover() {
        var tab = $(".apz_price_tab");
        if ($(window).width() > 450) {
            if ($(tab).length > 0) {
                tab.append('<li class="hover_bg"></li>');
                if ($('.apz_price_tab li a').hasClass('active_hover')) {
                    var pLeft = $('.apz_price_tab li a.active_hover').position().left,
                        pWidth = $('.apz_price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    });
                }
                $('.apz_price_tab li a').on('click', function () {
                    $('.apz_price_tab li a').removeClass('active_hover');
                    $(this).addClass('active_hover');
                    var pLeft = $('.apz_price_tab li a.active_hover').position().left,
                        pWidth = $('.apz_price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    });
                });
            }
        }

    }
    tab_hover();


    function myMap() {
        if ($("#contact_map").length > 0) {
            var mapCanvas = document.getElementById("contact_map");
            var myCenter = new google.maps.LatLng(40.716614, -74.002786);
            var mapOptions = {
                center: myCenter,
                zoom: 13
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'images/location.png'
            });
            marker.setMap(map);
        }
    }
    myMap();

    /* ===== Parallax Effect===== */
    function parallaxEffect() {
        if ($('.parallax-effect').length) {
            $('.parallax-effect').parallax();
        }
    }
    parallaxEffect();

    function bootstrapTabControl() {
        var i, items = $('.cg_how_it_tab .nav-link'),
            pane = $('.tab-pane');
        // next
        $('.nexttab').on('click', function () {
            for (i = 0; i < items.length; i++) {
                if ($(items[i]).hasClass('active') === true) {
                    break;
                }
            }
            if (i < items.length - 1) {
                // for tab
                $(items[i]).removeClass('active');
                $(items[i + 1]).addClass('active');
                // for pane
                $(pane[i]).removeClass('active show');
                $(pane[i + 1]).addClass('active show');
            }

        });
        // Prev
        $('.prevtab').on('click', function () {
            for (i = 0; i < items.length; i++) {
                if ($(items[i]).hasClass('active') === true) {
                    break;
                }
            }
            if (i != 0) {
                // for tab
                $(items[i]).removeClass('active');
                $(items[i - 1]).addClass('active');
                // for pane
                $(pane[i]).removeClass('active show');
                $(pane[i - 1]).addClass('active show');
            }
        });
    }
    bootstrapTabControl();


    // Dropdown Menu
    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.cg_header_menu ul li.nav-item > a.dropdown-toggle').on('click', function (event) {
                event.preventDefault();
                $(this).parent().find('.dropdown-menu').first().toggle(500);
                $(this).parent().siblings().find('.dropdown-menu').hide(500);
            });
        }
    }
    active_dropdown();


    $('.cg_finance_features_item').on('click', function () {
        var index = $('.cg_finance_features_item').index(this);
        $('.cg_finance_features_item').removeClass('active').eq(index).addClass('active');
        $('.screen_changer .screen_bg').removeClass('active').eq(index).addClass('active');
    });

    function feedbackSlider() {
        //js for cg_travel_video_slider
        $('.feedback_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }      
            }]
        });
    }
    feedbackSlider();
    
    
    function testimonialSlider() {
        //js for cg_travel_video_slider
        $('.cg_testimonial_info').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }      
            }]
        });
    }
    testimonialSlider();
    
    function cg_health_about_slider(){
            $('.cg_health_about_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 2000,
                arrows: true,
                dots: false,
                autoplay: true,
                fade: true,
                responsive: [
                    {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                    {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                    {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }
                ]
            });
        }
        cg_health_about_slider();

})(jQuery);