$(function() {
    "use strict";

    /**
     * 01.
     * This code only use for 
     * Cooming soon page countdown js
     */
    var currentDate = new Date();
    $('div#clock').countdown(15 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event) {

        switch (event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $(this).find('span#' + event.type).html(event.value);
                break;
            case "finished":
                $(this).fadeTo('slow', .5);
                break;
        }
    });


    /**
     * 02.
     * This page only use for
     * Home page main slider js
     */
    $('.slider-area-start').owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    //02. Testimonial slider js
    $('.testimonial-slider-active').owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /*
        About area Parallax custom js
    */
    $('.parallax-window').parallax({
        imageSrc: 'assets/images/about/about-bg.jpg',
        zIndex: 2,
        iosFix: true,
        androidFix: true
    });


    /*
        Testimonial area Parallax custom js
    */
    $('.testimonial-area-start').parallax({
        imageSrc: 'assets/images/main-slider/slider-1.jpg',
        iosFix: true,
        androidFix: true
    });

    /**
     * Breadcrumb area parallax
     */
    $('.breadcrumb-area-start, .award-area-start').parallax({
        imageSrc: 'assets/images/main-slider/slider-1.jpg',
        iosFix: true,
        androidFix: true
    });



    /*Client Slider JS*/
    $('.client-slider-active').owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            },
            1400: {
                items: 7
            }
        }
    });


    /**
     * Portfolio btn js
     */
    $('.portfolio-button button').click(function() {
        $('.portfolio-button button').removeClass('active');
        $(this).addClass('active');
    });

    var $grid1 = $('.portfolio-grid').isotope({
        itemSelector: '.single-portfolio',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.single-portfolio'
        }
    });

    // filter items on button click
    $('.portfolio-button').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid1.isotope({ filter: filterValue });
    });

    /**
     * magnafic Popup for portfolio
     * js
     */
    $('.mag-image').magnificPopup({
        type: 'image',
        mainClass: 'portfolio-grid',
        gallery: {
            enabled: true
        }
    });

    /**
     * Btm to Top Btn js
     * 
     */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.btm-to-top').show();
        } else {
            $('.btm-to-top').hide();
        }
    });

    $('.btm-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



    /**
     * Navigation fixed in top
     * JS 
     */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.navigation-area-start').addClass('fixed');
        }
        if ($(this).scrollTop() <= 299) {
            $('.navigation-area-start').removeClass('fixed');
        }

    });




    /**
     * Award Counted 
     * JS
     */
    $('.award-counter').counterUp({
        delay: 10,
        time: 3000
    });








    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });



    var Grid = function(width, height) {
        var ctx = document.getElementById('myChart').getContext('2d');
        ctx.canvas.parentNode.style.height = '400px';
        ctx.canvas.parentNode.style.width = '100%';
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: '#1ABC9C',
                    borderColor: '#ffffff',
                    data: [15, 10, 5, 2, 20, 30, 45, 80, 25, 40, 36, 92]
                }]
            },
            options: {
                maintainAspectRatio: false
            }
        });
    }



    /**
     * Mobile menu 
     * js
     */
    $(".main-menu").slicknav({
        prependTo: ".main-menu-area"
    });

}(jQuery));