// Typing Effect for Hero Section
const typingText = document.querySelector('.typing');
const professions = [
    'Artificial Intelligence Student',
    'Machine Learning Enthusiast',
    'Data Analytics Passionate',
    'Problem Solver'
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const current = professions[professionIndex];

    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Navbar Scroll Effect
function handleNavbar() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        // Toggle mobile menu logic here (could add a sidebar or dropdown)
        // For simplicity in this vanilla version, we'll just toggle a class
        console.log('Mobile menu clicked');
    });
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (window.scrollY / scrollTotal) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

// Skill Bar Animation
function animateSkills() {
    const progressFills = document.querySelectorAll('.progress-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute('data-width');
                entry.target.style.width = targetWidth;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressFills.forEach(fill => observer.observe(fill));
}

// Initialize
window.addEventListener('scroll', () => {
    reveal();
    handleNavbar();
    updateScrollProgress();
});

// Run on load
window.addEventListener('DOMContentLoaded', () => {
    type();
    reveal();
    animateSkills();
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
