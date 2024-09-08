// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent form from submitting the default way

        // Get user input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const contact = (document.getElementById('contact') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const school = (document.getElementById('school') as HTMLInputElement).value;
        const year = (document.getElementById('year') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const work = (document.getElementById('work') as HTMLTextAreaElement).value;

        // Populate resume with user input
        const personalInfo = document.getElementById('personal-info') as HTMLDivElement;
        const educationInfo = document.getElementById('education-info') as HTMLDivElement;
        const skillsInfo = document.getElementById('skills-info') as HTMLDivElement;
        const workInfo = document.getElementById('work-info') as HTMLDivElement;

        personalInfo.innerHTML = `
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
        `;

        educationInfo.innerHTML = `
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${education}</p>
            <p><strong>School/College Name:</strong> ${school}</p>
            <p><strong>Graduation Year:</strong> ${year}</p>
        `;

        skillsInfo.innerHTML = `
            <h2>Skills</h2>
            <p>${skills}</p>
        `;

        workInfo.innerHTML = `
            <h2>Work Experience</h2>
            <p>${work}</p>
        `;

        // Show the generated resume
        resumeDisplay.style.display = 'block';
    });
});
