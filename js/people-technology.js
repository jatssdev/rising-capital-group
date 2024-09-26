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
    var swiper = new Swiper(".swiper-container-h1", {
        direction: "horizontal",
        effect: "slide",
        autoplay: false,
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,
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
            type: "bullets",
            clickable: "true"
        }
    });
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


});


function toggleBox(element) {
    const content = element.querySelector('.box-content');
    const isOpen = element.classList.contains('open');
    const allBoxes = document.querySelectorAll('.box');

    // Close all other boxes first
    allBoxes.forEach(box => {
        if (box !== element) {
            box.classList.remove('open');
            box.querySelector('.box-content').style.maxHeight = null;
        }
    });

    // Toggle the clicked box
    if (!isOpen) {
        element.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to fit content
    } else {
        element.classList.remove('open');
        content.style.maxHeight = null; // Collapse
    }
}





document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    // Intersection Observer to detect when cards enter and leave the viewport
    const observerOptions = {
        root: null, // Use the viewport
        threshold: 0.5 // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                entry.target.classList.remove("past");
            } else if (entry.boundingClientRect.top < 0) {
                entry.target.classList.add("past");
                entry.target.classList.remove("in-view");
            } else {
                entry.target.classList.remove("in-view");
                entry.target.classList.remove("past");
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            const content = box.querySelector('.box-content');
            const isOpen = box.classList.contains('open');

            // Close all other boxes
            boxes.forEach((otherBox, otherIndex) => {
                if (otherIndex !== index) {
                    otherBox.classList.remove('open');
                    otherBox.querySelector('.box-content').style.maxHeight = null;
                }
            });

            // Toggle the clicked box
            if (!isOpen) {
                box.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px"; // Adjusts dynamically
            } else {
                box.classList.remove('open');
                content.style.maxHeight = null;
            }
        });
    });
});

