// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation and submission feedback
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields before submitting.');
    } else {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
    }
});

// Dynamically load project data
const projectData = [
    {
        title: 'Personal Budget Tracker',
        description: 'A web app to track income and expenses, visualize spending patterns, and manage budgets effectively.'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio showcasing my skills, projects, and contact information.'
    },
    {
        title: 'E-Commerce Platform',
        description: 'A scalable e-commerce platform with user authentication, product management, and payment integration.'
    }
];

const projectsContainer = document.querySelector('#projects .projects');
if (projectsContainer) {
    projectData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Add a back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});