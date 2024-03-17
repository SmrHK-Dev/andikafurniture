$("#myslider-site").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        }
    }
});

// -----------------------------

$("#slider-comments").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// // -------------------------------

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition === 0) {
        $('.my-nav').css({
            position: 'fixed',
            top: '0',
            width: '100%',
            background: 'rgb(255 255 255 / 80%)',
            zIndex: '99999',
            boxShadow: 'none',
            animation: 'none'
        });
    } else if (lastKnownScrollPosition > 0) {
        $('.my-nav').css({
            position: 'fixed',
            top: '0',
            width: '100%',
            background: '#fff',
            zIndex: '99999',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.17)',
            animation: 'slide-down 0.7s'
        });
    }
})