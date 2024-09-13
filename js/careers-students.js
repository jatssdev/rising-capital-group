document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-content')).classList.add('active');
        });
    });
});


// JavaScript to handle the toggle of the journey boxes
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.journey-box');

    boxes.forEach(box => {
        const toggleButton = box.querySelector('.toggle-button');
        toggleButton.addEventListener('click', function () {
            // Toggle the open class
            box.classList.toggle('open');
            
            // Update the toggle button
            if (box.classList.contains('open')) {
                toggleButton.textContent = '×'; // Change to close symbol
            } else {
                toggleButton.textContent = '+'; // Change back to plus symbol
            }
        });
    });
});

// JavaScript for accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const tips = document.querySelectorAll('.tip-item');

    tips.forEach(tip => {
        tip.querySelector('.tip-header').addEventListener('click', function () {
            // Toggle active class for accordion
            tip.classList.toggle('active');

            // Close other open accordions
            tips.forEach(item => {
                if (item !== tip) {
                    item.classList.remove('active');
                }
            });
        });
    });
});
