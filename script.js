// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1500);
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .company-card, .news-card, .stat-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Language Toggle
let currentLang = 'tr';
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        toggleLanguage(currentLang);
    });
});

function toggleLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (lang === 'en') {
            el.dataset.originalText = el.textContent;
            el.textContent = el.dataset.en;
        } else {
            if (el.dataset.originalText) {
                el.textContent = el.dataset.originalText;
            }
        }
    });

    // Handle placeholders
    const inputs = document.querySelectorAll('[data-en-placeholder]');
    inputs.forEach(input => {
        if (lang === 'en') {
            input.dataset.originalPlaceholder = input.placeholder;
            input.placeholder = input.dataset.enPlaceholder;
        } else {
            if (input.dataset.originalPlaceholder) {
                input.placeholder = input.dataset.originalPlaceholder;
            }
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// Smooth scroll with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll with custom easing
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Company cards with stagger effect
    const companyCards = document.querySelectorAll('.company-card');
    companyCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Stats
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat, index) => {
        stat.classList.add('scale-up');
        stat.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(stat);
    });

    // Timeline items with alternating animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
        } else {
            item.classList.add('slide-in-right');
        }
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // News cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('slide-in-left');
        observer.observe(header);
    });

    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('fade-in');
        observer.observe(aboutText);
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.classList.add('fade-in');
        observer.observe(contactForm);
    }

    // Add parallax effect to images
    const parallaxImages = document.querySelectorAll('.company-icon, .news-image');
    parallaxImages.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            img.style.transform = `perspective(1000px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) scale(1.05)`;
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
        });
    });
});

// Counter animation for stats
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const finalValue = parseInt(number.dataset.target);
            animateValue(number, 0, finalValue, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Company Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const companyCards = document.querySelectorAll('.company-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        companyCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form submission is handled by FormSubmit.co
// No additional JavaScript needed for form functionality

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(currentLang === 'tr' ? 'Bültenimize abone oldunuz!' : 'You have subscribed to our newsletter!');
    e.target.reset();
});

// Cookie Consent
const cookieConsent = document.getElementById('cookieConsent');
const acceptBtn = document.querySelector('.cookie-btn.accept');
const declineBtn = document.querySelector('.cookie-btn.decline');

// Check if user has already made a choice
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000);
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.remove('show');
    cookieConsent.classList.add('hide');
});

declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent.classList.remove('show');
    cookieConsent.classList.add('hide');
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Add smooth reveal animation to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});
