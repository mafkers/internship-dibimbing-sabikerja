document.addEventListener("DOMContentLoaded", function () {
    // Button - home
    const buttons = {
        ".join-btn": "/jobs.html",
        ".search-job": "/jobs.html",
        ".apply-job": "/jobs.html",
        ".sponsor-button": "/jobs.html"
    };

    Object.keys(buttons).forEach(selector => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener("click", function () {
                window.location.href = buttons[selector];
            });
        }
    });

    // Category Cards Animation - jobs
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Leave a message validation
    const fields = ["name", "email", "subject"];

    fields.forEach((field) => {
        let input = document.getElementById(field);
        let error = document.getElementById(field + "Error");

        if (input) {
            input.addEventListener("input", function () {
                if (input.value.trim() === "") {
                    error.style.display = "block";
                } else {
                    error.style.display = "none";
                }
            });
        }
    });

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            fields.forEach((field) => {
                let input = document.getElementById(field);
                let error = document.getElementById(field + "Error");

                if (input.value.trim() === "") {
                    error.style.display = "block";
                    isValid = false;
                } else {
                    error.style.display = "none";
                }
            });

            if (isValid) {
                alert("Form submitted successfully!");
            }
        });
    }

    // Menu login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const employerBtn = document.querySelector('.btn-employer');
        const candidateBtn = document.querySelector('.btn-candidate');

        employerBtn.addEventListener('click', function () {
            handleLogin('Employer', '/employers/list.html');
        });

        candidateBtn.addEventListener('click', function () {
            handleLogin('Candidate', '/candidates/jobs.html');
        });
    }

    function handleLogin(role, redirectLink) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        alert(`${role} login successful!`);
        window.location.href = redirectLink;
    }
}); 

// Testimonials - about Us
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".testimonial-container");
    const dots = document.querySelectorAll(".dot");

    if (index >= 3) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = 2;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Filter Jobs - jobs
function filterJobs() {
    let titleInput = document.getElementById("search-title").value.toLowerCase();
    let departmentInput = document.getElementById("search-department").value.toLowerCase();
    let locationInput = document.getElementById("search-location").value.toLowerCase();

    let jobCards = document.getElementsByClassName("job-card");

    for (let i = 0; i < jobCards.length; i++) {
        let title = jobCards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        let location = jobCards[i].getElementsByClassName("location")[0].innerText.toLowerCase();
        let description = jobCards[i].getElementsByClassName("description")[0].innerText.toLowerCase();

        let department = "";
        if (title.includes("developer") || title.includes("engineer")) department = "engineering";
        if (title.includes("marketing")) department = "marketing";
        if (title.includes("designer") || title.includes("ui/ux")) department = "design";
        if (title.includes("security")) department = "security";

        let matchTitle = title.includes(titleInput) || description.includes(titleInput);
        let matchDepartment = department.includes(departmentInput) || departmentInput === "";
        let matchLocation = location.includes(locationInput) || locationInput === "";

        if (matchTitle && matchDepartment && matchLocation) {
            jobCards[i].style.display = "block";
        } else {
            jobCards[i].style.display = "none";
        }
    }
}