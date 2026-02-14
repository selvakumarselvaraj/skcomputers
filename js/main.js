(function ($) {
    "use strict";

    // Shared site header
    const headerContainer = document.getElementById('site-header');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function markActiveNav() {
        document.querySelectorAll('[data-nav-page]').forEach((link) => {
            if (link.getAttribute('data-nav-page') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function updateStickyNavbar() {
        const navbar = document.getElementById('site-navbar');
        if (!navbar) {
            return;
        }

        if (window.scrollY > 40) {
            navbar.classList.add('sticky-top');
        } else {
            navbar.classList.remove('sticky-top');
        }
    }

    if (headerContainer) {
        fetch('headers.html')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to load shared header');
                }
                return response.text();
            })
            .then((headerHtml) => {
                headerContainer.innerHTML = headerHtml;
                markActiveNav();
                updateStickyNavbar();
            })
            .catch(() => {
                headerContainer.innerHTML = '';
            });
    }

    window.addEventListener('scroll', updateStickyNavbar);

    // Initiate the wowjs
    new WOW().init();

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Header carousel auto play
    const headerCarousel = document.querySelector('#header-carousel');
    if (headerCarousel) {
        new bootstrap.Carousel(headerCarousel, {
            interval: 3000,
            ride: 'carousel',
            pause: false,
            wrap: true
        });
    }


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);
