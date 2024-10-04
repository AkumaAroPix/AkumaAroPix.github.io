// Scroll to Courses
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

// Handle Authentication Form
function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock API call to handle login or registration
    console.log(`Authenticating user: ${email}`);
    alert(`Logged in as ${email}`);
}

// Dynamic Courses (Mock data for now)
const courses = [
    { id: 1, title: "Introduction to Programming", description: "A beginner course on programming" },
    { id: 2, title: "Advanced Mathematics", description: "An advanced course on calculus and linear algebra" },
    { id: 3, title: "Data Science Basics", description: "Learn the basics of data science" }
];

const recommendedCourses = [
    { id: 1, title: "Python for Data Science", description: "A complete course on Python for data science" },
    { id: 2, title: "Machine Learning Essentials", description: "Understand the essentials of machine learning" }
];

// Load Courses Dynamically
function loadCourses() {
    const courseList = document.querySelector('.courses-list');
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        courseList.appendChild(courseItem);
    });
}

// Load Recommendations Dynamically
function loadRecommendations() {
    const recommendationList = document.querySelector('.recommendation-list');
    recommendedCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'recommendation-item';
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        recommendationList.appendChild(courseItem);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    loadRecommendations();
});
