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


document.addEventListener('DOMContentLoaded', function() {
    const allBoxes = document.querySelectorAll('.journey-box');

    allBoxes.forEach(box => {
        const header = box.querySelector('.box-header');
        header.addEventListener('click', function() {
            const boxContent = box.querySelector('.box-content');
            const isOpen = box.classList.contains('open');

            // // Close all boxes first
            // allBoxes.forEach(b => {
            //     b.classList.remove('open');
            //     b.querySelector('.box-content').style.maxHeight = null;
            //     b.querySelector('.toggle-button').textContent = '+';
            // });

            // If the clicked box was not open before, open it
            if (!isOpen) {
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

    // Close all boxes
    var allBoxes = document.querySelectorAll('.journey-box');
    allBoxes.forEach(function (b) {
        b.classList.remove('open');
        b.querySelector('.box-content').style.display = 'none';
        b.querySelector('.toggle-button').textContent = '+';
    });

    // If the clicked box was not previously open, open it
    if (!box.classList.contains('open')) {
        box.classList.add('open');
        box.querySelector('.box-content').style.display = 'block';
        box.querySelector('.toggle-button').textContent = '−';
    }
}
