// Sample applicants data
const applicants = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@email.com",
        status: "Pending",
        jobId: 1
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@email.com",
        status: "Interview",
        jobId: 1
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike.j@email.com",
        status: "Accepted",
        jobId: 1
    }
];

const statusOptions = ["Pending", "Interview", "Accepted", "Rejected"];

function getJobIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('jobId'));
}

function createStatusSelect(currentStatus, applicantId) {
    const options = statusOptions.map(status => 
        `<option value="${status}" ${status === currentStatus ? 'selected' : ''}>${status}</option>`
    ).join('');
    
    return `
        <select class="status-select" onchange="updateStatus(${applicantId}, this.value)">
            ${options}
        </select>
    `;
}

function updateStatus(applicantId, newStatus) {
    const applicant = applicants.find(a => a.id === applicantId);
    if (applicant) {
        applicant.status = newStatus;
        displayApplicants();
    }
}

function createApplicantRow(applicant) {
    return `
        <tr>
            <td>${applicant.name}</td>
            <td>${applicant.email}</td>
            <td><a href="https://fakecv.tiiny.site" class="cv-link">View CV</a></td>
            <td>${createStatusSelect(applicant.status, applicant.id)}</td>
            <td>
                <a href="https://fakecv.tiiny.site" target="_blank">
                    <button class="view-button">View Details</button>
                </a>
            </td>
        </tr>
    `;
}

function displayApplicants() {
    const jobId = getJobIdFromUrl();
    const jobApplicants = applicants.filter(applicant => applicant.jobId === jobId);
    const applicantsList = document.getElementById('applicantsList');
    
    applicantsList.innerHTML = jobApplicants.map(applicant => 
        createApplicantRow(applicant)
    ).join('');
}

// Initialize the page
displayApplicants();