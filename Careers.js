let noiseZ;
let size;
let columns;
let rows;
let w;
let h;
let field;

// Create an instance of SimplexNoise
const simplex = new SimplexNoise();

function setup(container) {
    size = 20;
    noiseZ = 0;
    reset(container);
}

function initField() {
    field = new Array(columns);
    for (let x = 0; x < columns; x++) {
        field[x] = new Array(columns);
        for (let y = 0; y < rows; y++) {
            field[x][y] = [0, 0];
        }
    }
}

function calculateField() {
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            let angle = simplex.noise3D(x / 50, y / 50, noiseZ) * Math.PI * 2; // Use SimplexNoise's noise3D
            let length = simplex.noise3D(x / 100 + 40000, y / 100 + 40000, noiseZ);
            field[x][y][0] = angle;
            field[x][y][1] = length;
        }
    }
}

function reset(container) {
    w = container.canvas.size.width;
    h = container.canvas.size.height;
    columns = Math.floor(w / size) + 1;
    rows = Math.floor(h / size) + 1;
    initField();
}

tsParticles
    .load("tsparticles", {
        background: {
            color: {
                value: "#ffffff"
            }
        },

        fpsLimit: 120,
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#961043", "#fff", "#961043", "#fff", "I#961043"]
            },

            opacity: {
                value: 0.1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 1
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outMode: "out",
                bounce: false,
                warp: true,
                noise: {
                    enable: true,
                    delay: {
                        value: 0
                    }
                },
                trail: {
                    enable: true,
                    color: {
                        value: "#fff"
                    },
                    length: 30
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        },
        detectRetina: true,
        pauseOnBlur: true
    })
    .then((container) => {
        container.setNoise({
            init: function () {
                setup(container);
            },
            update: function () {
                calculateField();

                const mousePos = container.interactivity.mouse.position;

                let sumZ;

                if (mousePos) {
                    sumZ =
                        (mousePos.x * mousePos.y) /
                        (25 * container.canvas.size.width * container.canvas.size.height);
                } else {
                    sumZ = 0.004;
                }

                noiseZ += sumZ;
            },
            generate: function (p) {
                const pos = p.getPosition();

                const px = Math.max(Math.floor(pos.x / size), 0);
                const py = Math.max(Math.floor(pos.y / size), 0);

                if (!field || !field[px] || !field[px][py]) {
                    return { angle: 0, length: 0 };
                }

                return {
                    angle: field[px][py][0],
                    length: field[px][py][1]
                };
            }
        });

        container.refresh();
    });
// scripts.js
$(document).ready(function () {
    function getAllJobs() {
        $.ajax({
            url: 'https://rising-capital-backend.onrender.com/api/jobs', // URL of your API
            type: 'GET',
            dataType: 'json',
            success: function (jobs) {
                // Clear existing jobs
                $('#jobs-container').empty();

                // Append new jobs to the container
                jobs.forEach(job => {
                    const $job = $(`<div class="job">
                <div class="col1">
                    <h2 class='heading'>${job.title}</h2>
                    <p><span>${job.experience}</span></p>
                </div>
                <div class="col2">
                    <div class="skills">${job.skills.map(skill => `<p>${skill}</p>`).join('')}</div>
                </div>
            </div>`);
                    $job.click(() => openModal(job));
                    $('#jobs-container').append($job);
                });
            },
            error: function (xhr, status, error) {
                console.error("Failed to fetch jobs: ", status, error);
            }
        });
    }

    const $modal = $('#job-modal');
    const $close = $('.close');

    function openModal(job) {
        $('#modal-title').text(job.title);
        $('#modal-description').text(job.description);
        $('#modal-experience').text(`Experience Required: ${job.experience}`);
        $('#modal-education').text(`Education Required: ${job.education}`);
        $('#modal-location').text(`Location: ${job.location.join(', ')}`);
        $('#modal-skills').text(`Skills: ${job.skills.join(', ')}`);
        $modal.show();
    }

    function closeModal() {
        $modal.hide();
    }

    $close.click(function () {
        closeModal();
    });

    $(window).click(function (e) {
        if ($(e.target).is($modal)) {
            closeModal();
        }
    });

    // Call the function to load jobs when the page is ready
    getAllJobs();
});

