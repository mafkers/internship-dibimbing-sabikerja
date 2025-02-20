// Sample job data
const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        date: "2024-02-15",
        status: "active",
    },
    {
        id: 2,
        title: "UX Designer",
        date: "2024-02-14",
        status: "active",
    },
    {
        id: 3,
        title: "Backend Engineer",
        date: "2024-02-10",
        status: "closed",
    },
    {
        id: 4,
        title: "Product Manager",
        date: "2024-02-08",
        status: "active",
    }
];

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function createJobCard(job) {
    return `
        <div class="job-card">
            <h2 class="job-title">${job.title}</h2>
            <p class="job-date">Posted on ${formatDate(job.date)}</p>
            <span class="job-status status-${job.status}">${job.status.charAt(0).toUpperCase() + job.status.slice(1)}</span>
            <br>
            <a href="applicants.html?jobId=${job.id}" class="view-button">View Applicants</a>
        </div>
    `;
}

function displayJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

// Initialize the page
displayJobs();