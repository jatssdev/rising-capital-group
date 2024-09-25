AOS.init();

// header 
const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const header = document.querySelector("#header");

// Navbar Menu Toggle Function
function toggleMenu() {
    header.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
    subMenu = children.querySelector(".submenu");
    subMenu.classList.add("is-active");
    subMenu.style.animation = "slideLeft 0.35s ease forwards";
    const menuTitle = children.querySelector("i").parentNode.childNodes[0]
        .textContent;
    menu.querySelector(".menu__title").textContent = menuTitle;
    menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.35s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("is-active");
    }, 300);

    menu.querySelector(".menu__title").textContent = "";
    menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
    if (!menu.classList.contains("is-active")) {
        return;
    }
    if (e.target.closest(".menu__dropdown")) {
        const children = e.target.closest(".menu__dropdown");
        showSubMenu(children);
    }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        // For larger devices (e.g., desktops and large tablets in landscape)
        if (menu.classList.contains("is-active")) {
            toggleMenu();
            checkScreenSize();
        }
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // For tablets (e.g., 768px to 1023px)
        if (menu.classList.contains("is-active")) {
            toggleMenu(); 
            checkScreenSize();
        }
    } else {
        // For phones (e.g., below 768px)
        // You can add additional functionality for phones if needed
        if (menu.classList.contains("is-active")) {
            toggleMenu();
            checkScreenSize();
        }
    }

    checkScreenSize(); // Ensure the screen size checker runs
});


// Dark and Light Mode with localStorage
(function () {
    let darkMode = localStorage.getItem("darkMode");
    const darkSwitch = document.getElementById("switch");

    // Enable and Disable Darkmode
    const enableDarkMode = () => {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkMode", "enabled");
    };

    const disableDarkMode = () => {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkMode", null);
    };

    // User Already Enable Darkmode
    if (darkMode === "enabled") {
        enableDarkMode();
    }

    // User Clicks the Darkmode Toggle
    darkSwitch.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
})();

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);

// header 
/* ---- particles.js config ---- */


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#961043" // Changed to blue
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#961043", // Changed to blue
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onscroll": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


particlesJS("particles-js-People", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#961043" // Changed to blue
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#961043", // Changed to blue
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onscroll": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js-Approach", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#961043" // Changed to blue
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#961043", // Changed to blue
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onscroll": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js-leadership", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#961043" // Changed to blue
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#961043", // Changed to blue
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onscroll": {
                "enable": true,
                "mode": "push"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

$(document).ready(function () {
    var swiper = new Swiper(".swiper-container-h", {
        direction: "horizontal",
        effect: "slide",
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,

        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            eventsTarget: ".swiper-slide",
            releaseOnEdges: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        }
    });
    const swiperr = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        slidesPerView: 3, // Default value for large screens
        spaceBetween: 40, // Default value for large screens
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        effect: 'slide',

        // Add breakpoints for responsive behavior
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 992px (large tablets)
            800: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 768px (tablets)
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is < 768px (mobile phones)
            100: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // var swiper = new Swiper(".swiper-container-h1", {
    //     direction: "horizontal",
    //     effect: "slide",
    //     autoplay: false,
    //     parallax: true,
    //     speed: 1600,
    //     rtl: true,
    //     loop: true,
    //     loopFillGroupWithBlank: !0,
    //     keyboard: {
    //         enabled: true,
    //         onlyInViewport: true
    //     },
    //     scrollbar: {
    //         el: ".swiper-scrollbar",
    //         hide: false,
    //         draggable: true
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: "bullets",
    //         clickable: "true"
    //     }
    // });
});

$(document).ready(function () {
    var $video = $('#backgroundVideo');
    let lastScrollTop = 0

    function checkScrollPosition() {
        var scrollY = $(window).scrollTop();


        if (scrollY > lastScrollTop) {
            // Scrolling down
            $('#header').css('top', '-100px'); // Adjust this value based on your header height
        } else {
            // Scrolling up
            $('#header').css('top', '0');
        }

        lastScrollTop = scrollY;

        var scaleValue = 1 + scrollY / 200; // Adjust the divisor for desired scaling effect
        $('#particles-js').css('transform', 'scale(' + scaleValue + ')');
        if (scrollY >= 100) {
            $('.text *').css({ 'background-color': 'transparent', 'color': 'white' });
            $('.line').css({ 'background-color': 'transparent' });
            $('.line span').css({ 'color': 'white' });
            $('.line div').css({ 'background-color': 'white' });
            $video.css({ 'opacity': 1, 'z-index': 7 });  // Show video
            $('.text h1').show();
            $('#header').css({ 'background-color': 'rgba(255, 255, 255, 0.703)' });
            $('#header').css({ 'backdrop-filter': 'blur(20px)' });
        } else {
            $video.css({ 'opacity': 0, 'z-index': 1 });  // Show video
            $('#header').css({ 'background-color': 'white' });
            $('#header').css({ 'backdrop-filter': 'blur(0)' });

            $('.text *').css({ 'background-color': 'white', 'color': 'var(--primary)' });
            $('.line').css({ 'background-color': 'white' });
            $('.line span').css({ 'color': 'var(--primary)' });
            $('.line div').css({ 'background-color': 'var(--primary)' });
        }
    }

    $(window).on('scroll', checkScrollPosition);
    checkScrollPosition();







    // videos section 
    $('.openVideoModel').click(function () {

        $('#modelPreviewVideo').attr('src', $(this).attr('data-video'))
        $('section .videos .videoModel').css({ padding: '100px', left: 0, top: 0, transform: 'translate(0,0) scale(1)' })
    })
    $('#closeVideoModel').click(function () {

        $('section .videos .videoModel').css({ padding: '0', left: '50%', top: '50%', transform: 'translate(-50%,-50%) scale(0)' })
    })




    // header 
    $('#peoplelink').mouseenter(showDrop);
    $('#careerslink').mouseenter(showDrop);
    $('header').mouseleave(hideDrop);

    function showDrop() {

        let val = $(this).data('drop'); // Get the data-drop value (people/careers)
        let className = '.dropdown .' + val; // Target the correct ul and heading

        // Show the dropdown container
        $('header .dropdown').slideDown('slow');

        // Show the corresponding content (ul) and hide the other
        $('header .dropdown .careers, header .dropdown .people').hide(); // Hide both first
        $(className).show('slow'); // Show the correct content
    }

    function hideDrop() {
        // Hide the entire dropdown when the mouse leaves the header
        $('header .dropdown').slideUp('slow');
    }


    // header responsive 
    $('.navlinksToggleBtn').click(function () {
        $('.navLinksToggle').toggleClass('active');
    })

    const $target = $('.js-accordion-header');
    const ACTIVE_CLASS = 'is-active';

    $target.on('click', function () {
        const $this = $(this);
        let $arrow = $this.find('.accordion-header');

        // Close all other accordion contents and remove 'is-active' class from other headers
        $target.not($this).removeClass(ACTIVE_CLASS); // Remove 'is-active' from all other headers
        $('.accordion-contents').not($this.siblings('.accordion-contents')).slideUp(); // Close all other contents

        // Toggle the clicked accordion's content
        $arrow.toggleClass(ACTIVE_CLASS);
        $this.toggleClass(ACTIVE_CLASS);
        $this.siblings('.accordion-contents').stop().slideToggle();
    });

    function checkScreenSize() {
        if ($(window).width() <= 768) {
            $('header .specialAnchor').addClass('disabled').on('click', function (e) {
                e.preventDefault(); // Disable the link
            });
            $('header .specialLink').show()
        } else {
            $('header .specialAnchor').removeClass('disabled').off('click'); // Enable the link if screen is larger
            $('header .specialLink').hide()

        }
    }

    // Check screen size on page load

    checkScreenSize();


    // Re-check on window resize
    $(window).resize(function () {
        checkScreenSize();
    });


});

