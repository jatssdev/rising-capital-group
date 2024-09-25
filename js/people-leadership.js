document.addEventListener('DOMContentLoaded', function () {
    // Ensure canvas size is correct
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const video = document.createElement('video');
    video.src = 'your-video.mp4';  // Replace with your video file path
    video.muted = true;
    video.autoplay = true;
    video.loop = true;

    let particles = [];
    const particleCount = 100; // Number of particles to generate

    // Define particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 51, 204, 0.8)';  // Particle color
            ctx.fill();
        }
    }

    // Populate particles array
    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }

    // Animate particles and draw video
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw video onto canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Draw particle effects
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    // Start video and particle animation when the video is ready
    video.addEventListener('canplaythrough', () => {
        animate();
    });
});

// Popup functionality
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('popup-overlay');
    if (popup) {
        overlay.style.display = "flex"; // Show the overlay
        popup.style.display = "block"; // Show the popup
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('popup-overlay');
    if (popup) {
        popup.style.display = "none"; // Hide the popup
        overlay.style.display = "none"; // Hide the overlay
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-overlay')) {
        closePopup('popup-1'); // Assume you want to close this popup when overlay is clicked
    }
});
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-overlay')) {
        closePopup('popup-2'); // Assume you want to close this popup when overlay is clicked
    }
});



// Add event listeners to member cards
document.getElementById("member-1").addEventListener("click", function () {
    openPopup("popup-1");
    
});
document.getElementById("member-2").addEventListener("click", function () {
    openPopup("popup-2");
});
document.getElementById("member-3").addEventListener("click", function () {
    openPopup("popup-3");
});
document.getElementById("member-4").addEventListener("click", function () {
    openPopup("popup-4");
});

// Close the popup when clicking outside of it
window.onclick = function (event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
            document.body.classList.remove('popup-open');
        }
    });
};

// Close the popup with the Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        let popups = document.querySelectorAll('.popup');
        popups.forEach(function (popup) {
            if (popup.style.display === "block") {
                popup.style.display = "none";
                document.body.classList.remove('popup-open');
            }
        });
    }
});


