let jobz = [{
    "_id": {
        "$oid": "66f6797beb65b789112b134e"
    },
    "title": "Sales Executive",
    "description": "We are looking for a dynamic Sales Executive to join our team in Rajkot. If you have a passion for sales and a knack for building strong client relationships, we want to hear from you.",
    "experience": "0-1 year",
    "education": "12",
    "location": [
        "Rajkot"
    ],
    "skills": [
        "PHP"
    ],
    "__v": 0
},
{
    "_id": {
        "$oid": "66f679cdeb65b789112b1351"
    },
    "title": "Financial Analyst",
    "description": "We are seeking a detail-oriented Financial Analyst to join our headquarters in Gandhinagar. The ideal candidate will have a strong analytical background and experience in financial modelling.",
    "experience": "1-3 years",
    "education": "12",
    "location": [
        "Gandhinagar"
    ],
    "skills": [],
    "__v": 0
},
{
    "_id": {
        "$oid": "66f679e7eb65b789112b1353"
    },
    "title": "Accountant",
    "description": "Our Gandhinagar headquarters is in need of a skilled Accountant to manage financial records, ensure compliance with regulations, and support our financial operations.",
    "experience": "3-5 years",
    "education": "12",
    "location": [],
    "skills": [],
    "__v": 0
},
{
    "_id": {
        "$oid": "66f679fdeb65b789112b1355"
    },
    "title": "Talent Acquisition Executive",
    "description": "We are looking for a knowledgeable Consulting Executive to join our team in Gandhinagar. The ideal candidate will have a strong background in consulting and advisory services",
    "experience": "1-3 years",
    "education": "12",
    "location": [],
    "skills": [],
    "__v": 0
},
{
    "_id": {
        "$oid": "66f67a18eb65b789112b1357"
    },
    "title": "International Traders",
    "description": "We are seeking experienced International Traders to join our Gandhinagar branch. If you have a deep understanding of global markets and a proven track record in international trade, we want you on our team.",
    "experience": "1-3 years",
    "education": "12",
    "location": [],
    "skills": [],
    "__v": 0
},
{
    "_id": {
        "$oid": "66f67a2beb65b789112b1359"
    },
    "title": "Investment Banker",
    "description": "Our Gandhinagar headquarters is in need of a skilled Investment Banker to support our clients in achieving their financial goals through comprehensive investment banking services.",
    "experience": "1-3 years",
    "education": "12",
    "location": [],
    "skills": [],
    "__v": 0
}]
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
    // const apiUrl = 'https://rising-capital-backend.onrender.com/api/jobs'; // Make sure to replace this with your actual API URL

    // // Fetch jobs from the API
    // function fetchJobs() {
    //     $.ajax({
    //         url: apiUrl,
    //         method: 'GET',
    //         success: function (jobs) {
    //             renderJobs(jobs);
    //         },
    //         error: function (err) {
    //             console.error('Error fetching jobs:', err);
    //             alert('Failed to fetch jobs. Please try again later.');
    //         }
    //     });
    renderJobs(jobz)
    // }

    // Render jobs in the left-scroll cards
    function renderJobs(jobs) {
        const $jobsContainer = $('.left-scroll');
        $jobsContainer.empty(); // Clear existing job cards

        jobs.forEach(job => {
            const $jobCard = $(`
        <div class="card" data-id="${job.id}">
            <h4>${job.title}</h4>
            <span style="color:black;font-size: small;">${job.location}</span><br>
            <span style="color:black;font-size: small;">${job.experience}</span>
        </div>
    `);

            $jobCard.click(function () {
                showJobDetails(job);
            });

            $jobsContainer.append($jobCard);
        });
        showJobDetails(jobs[0])
    }

    // Show job details in the right content section
    function showJobDetails(job) {
        const $contentSection = $('#content-1'); // Assuming you want to load details into this div
        $contentSection.html(`
    <h1>${job.title}</h1>
    <p><b>Location</b>: ${job.location.length ? job.location.join(', ') : 'gandhinagar'}</p>
    <hr>
   
    <h2 class='job-heading'>Job Description</h2>
    <p>${job.description}</p>
      <p><b>Experience Required</b>: ${job.experience}</p>
    <p><b>Education Required</b>: ${job.education}</p>
   
         <button class="blue-button">Apply Now</button>
`);
    }

    // Initial call to fetch jobs when the page is ready
    fetchJobs();
});



{/* <div><b>Skills</b>: ${job.skills.map((x) => {
    return `<span>${x}</span>`
})}</div> */}
