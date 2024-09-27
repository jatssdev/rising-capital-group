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


document.addEventListener('DOMContentLoaded', function () {
    const allBoxes = document.querySelectorAll('.journey-box');

    allBoxes.forEach(box => {
        const header = box.querySelector('.box-header');
        header.addEventListener('click', () => {
            const boxContent = box.querySelector('.box-content');
            const isOpen = box.classList.contains('open');

            // Close all other boxes
            allBoxes.forEach(b => {
                if (b !== box) {
                    b.classList.remove('open');
                    b.querySelector('.box-content').style.maxHeight = null;
                    b.querySelector('.toggle-button').textContent = '+';
                }
            });

            // Toggle the current box based on its previous state
            if (isOpen) {
                box.classList.remove('open');
                boxContent.style.maxHeight = null;
                header.querySelector('.toggle-button').textContent = '+';
            } else {
                box.classList.add('open');
                boxContent.style.maxHeight = boxContent.scrollHeight + "px";
                header.querySelector('.toggle-button').textContent = '−';
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