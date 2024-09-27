document.addEventListener('DOMContentLoaded', function () {
    // Handle tab switching
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-content')).classList.add('active');
        });
    });

    // Handle journey box toggling
    const allBoxes = document.querySelectorAll('.journey-box');
    allBoxes.forEach(box => {
        const header = box.querySelector('.box-header');
        header.addEventListener('click', () => {
            const isOpen = box.classList.contains('open');
            const boxContent = box.querySelector('.box-content');

            // Close all boxes
            allBoxes.forEach(b => {
                b.classList.remove('open');
                b.querySelector('.box-content').style.maxHeight = null;
                b.querySelector('.toggle-button').textContent = '+';
            });

            // Open the clicked box if it was not open
            if (!isOpen) {
                box.classList.add('open');
                boxContent.style.maxHeight = boxContent.scrollHeight + "px";
                header.querySelector('.toggle-button').textContent = '−';
            }
        });
    });

    // Handle accordion functionality
    const tips = document.querySelectorAll('.tip-item');
    tips.forEach(tip => {
        const header = tip.querySelector('.tip-header');
        header.addEventListener('click', () => {
            const wasActive = tip.classList.contains('active');
            tips.forEach(t => t.classList.remove('active')); // close all
            if (!wasActive) {
                tip.classList.add('active'); // activate the clicked one if it was not active
            }
        });
    });
});

function toggleBox1(boxId) {
    var box = document.getElementById(boxId);
    var content = box.querySelector('.box-content');
    var button = box.querySelector('.toggle-button');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';  // Make the content visible
        button.textContent = '−';  // Change button text to minus
    } else {
        content.style.display = 'none';  // Hide the content
        button.textContent = '+';  // Change button text back to plus
    }
}