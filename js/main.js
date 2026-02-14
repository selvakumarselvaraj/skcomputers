(function ($) {
    "use strict";

    // Shared site header
    const headerContainer = document.getElementById('site-header');
    if (headerContainer) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = [
            { href: 'index.html', label: 'Home' },
            { href: 'about.html', label: 'About' },
            { href: 'service.html', label: 'Service' },
            { href: 'contact.html', label: 'Contact' }
        ];

        const navLinks = navItems.map(({ href, label }) => {
            const activeClass = href === currentPage ? ' active' : '';
            return `<a href="${href}" class="nav-item nav-link${activeClass}">${label}</a>`;
        }).join('');

        headerContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <a href="index.html" class="navbar-brand ms-lg-5">
                    <h1 class="display-5 m-0 text-primary">SK<span class="text-secondary">Computers</span></h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        ${navLinks}
                        <a href="tel:+916380654974" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>+916380654974</a>
                    </div>
                </div>
            </nav>
        `;
    }

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
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

