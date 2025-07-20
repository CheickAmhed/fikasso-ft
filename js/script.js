// Main JavaScript file for Fikasso Security website

// Global variables
let currentTestimonialIndex = 0;
let testimonialInterval;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupMobileMenu();
    setupScrollEffects();
    setupAnimations();
    loadServices();
    loadTestimonials();
    setupTestimonialSlider();
    setupCounters();
    setupForms();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Effects
function setupScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Animation Setup
function setupAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .stat-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Load Services
function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    const servicesToShow = mockData.services.slice(0, 6);
    
    servicesGrid.innerHTML = servicesToShow.map(service => `
        <div class="service-card">
            <img src="${service.image}" alt="${service.title}" class="service-image">
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <a href="services.html#service-${service.id}" class="service-link">
                    <span>En savoir plus</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Load Testimonials
function loadTestimonials() {
    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialIndicators = document.getElementById('testimonial-indicators');
    
    if (!testimonialSlider || !testimonialIndicators) return;
    
    // Load first testimonial
    loadTestimonial(0);
    
    // Create indicators
    testimonialIndicators.innerHTML = mockData.testimonials.map((_, index) => `
        <button class="indicator ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></button>
    `).join('');
}

// Load specific testimonial
function loadTestimonial(index) {
    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonial = mockData.testimonials[index];
    
    if (!testimonialSlider || !testimonial) return;
    
    testimonialSlider.innerHTML = `
        <div class="testimonial-stars">
            ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star"></i>').join('')}
        </div>
        <blockquote class="testimonial-content">
            "${testimonial.content}"
        </blockquote>
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.position} • ${testimonial.company}</p>
            </div>
        </div>
    `;
}

// Setup Testimonial Slider
function setupTestimonialSlider() {
    if (!document.getElementById('testimonial-slider')) return;
    
    // Auto-slide testimonials
    testimonialInterval = setInterval(() => {
        nextTestimonial();
    }, 5000);
    
    // Pause on hover
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                nextTestimonial();
            }, 5000);
        });
    }
}

// Navigate to specific testimonial
function goToTestimonial(index) {
    currentTestimonialIndex = index;
    loadTestimonial(index);
    updateTestimonialIndicators();
}

// Next testimonial
function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % mockData.testimonials.length;
    loadTestimonial(currentTestimonialIndex);
    updateTestimonialIndicators();
}

// Update testimonial indicators
function updateTestimonialIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentTestimonialIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Setup Counters
function setupCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Animate counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
    element.classList.add('animate-countUp');
}

// Setup Forms
function setupForms() {
    setupContactForm();
    setupNewsletterForm();
    setupQuoteModal();
}

// Setup Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            const result = await mockFunctions.submitContactForm(data);
            if (result.success) {
                showSuccessMessage(result.message);
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showErrorMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
    });
}

// Setup Newsletter Form
function setupNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            try {
                const result = await mockFunctions.subscribeNewsletter(email);
                if (result.success) {
                    showSuccessMessage(result.message);
                    emailInput.value = '';
                }
            } catch (error) {
                console.error('Error subscribing to newsletter:', error);
                showErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
            }
        });
    });
}

// Setup Quote Modal
function setupQuoteModal() {
    const quoteButtons = document.querySelectorAll('.quote-button');
    const modal = document.getElementById('quote-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (!modal) return;
    
    quoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = button.getAttribute('data-service-id');
            openQuoteModal(serviceId);
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Open Quote Modal
function openQuoteModal(serviceId) {
    const modal = document.getElementById('quote-modal');
    const service = mockData.services.find(s => s.id === parseInt(serviceId));
    
    if (!modal || !service) return;
    
    const modalTitle = modal.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = `Demander un devis - ${service.title}`;
    }
    
    modal.style.display = 'flex';
    modal.setAttribute('data-service-id', serviceId);
}

// Utility Functions
function showSuccessMessage(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00FFD1;
        color: #000000;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function showErrorMessage(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-error';
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: #ffffff;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Initialize page-specific functionality
function initializePageSpecific() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (page) {
        case 'services.html':
            initializeServicesPage();
            break;
        case 'contact.html':
            initializeContactPage();
            break;
        case 'blog.html':
            initializeBlogPage();
            break;
        case 'team.html':
            initializeTeamPage();
            break;
        case 'testimonials.html':
            initializeTestimonialsPage();
            break;
        case 'about.html':
            initializeAboutPage();
            break;
    }
}

// Page-specific initialization functions
function initializeServicesPage() {
    // Load all services
    const servicesGrid = document.getElementById('all-services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = mockData.services.map(service => `
            <div class="service-card-2" id="service-${service.id}">
                <img src="${service.image}" alt="${service.title}" class="service-image">
                <div class="service-content">
                    <div class="service-header">
                        <i class="${service.icon}"></i>
                        <h3 class="service-title">${service.title}</h3>
                    </div>
                    <p class="service-description">${service.description}</p>
                    <div class="service-features">
                        ${service.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="service-actions">
                        <button class="btn btn-primary quote-button" data-service-id="${service.id}">
                            Demander un Devis
                        </button>
                        <button class="btn btn-secondary">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeContactPage() {
    // Additional contact page functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        setupContactForm();
    }
}

function initializeBlogPage() {
    // Blog page functionality
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        loadBlogPosts();
    }
    
    setupBlogSearch();
}

function initializeTeamPage() {
    // Team page functionality
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        loadTeamMembers();
    }
}

function initializeTestimonialsPage() {
    // Testimonials page functionality
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (testimonialsGrid) {
        loadAllTestimonials();
    }
}

function initializeAboutPage() {
    // About page functionality
    setupAboutAnimations();
}

// Load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = mockData.blog.map(post => `
        <article class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-category">${post.category}</span>
                    <span class="blog-date">${new Date(post.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-author">
                    <i class="fas fa-user"></i>
                    <span>${post.author}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Setup blog search
function setupBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterBlogPosts);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBlogPosts);
    }
}

// Filter blog posts
function filterBlogPosts() {
    const searchTerm = document.getElementById('blog-search')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    
    const filteredPosts = mockData.blog.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                             post.excerpt.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || post.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid) {
        if (filteredPosts.length === 0) {
            blogGrid.innerHTML = '<p class="no-results">Aucun article trouvé.</p>';
        } else {
            blogGrid.innerHTML = filteredPosts.map(post => `
                <article class="blog-card">
                    <img src="${post.image}" alt="${post.title}" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-category">${post.category}</span>
                            <span class="blog-date">${new Date(post.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="blog-author">
                            <i class="fas fa-user"></i>
                            <span>${post.author}</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }
    }
}

// Load team members
function loadTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = mockData.team.map(member => `
        <div class="team-card">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="team-content">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-position">${member.position}</p>
                <p class="team-bio">${member.bio}</p>
                <div class="team-specialties">
                    ${member.specialties.map(specialty => `
                        <span class="specialty-tag">${specialty}</span>
                    `).join('')}
                </div>
                <div class="team-social">
                    <a href="mailto:${member.name.toLowerCase().replace(' ', '.')}@fikassotech.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load all testimonials
function loadAllTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = mockData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star"></i>').join('')}
            </div>
            <blockquote class="testimonial-quote">
                "${testimonial.content}"
            </blockquote>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.position}</p>
                    <p class="testimonial-company">${testimonial.company}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup about animations
function setupAboutAnimations() {
    const aboutElements = document.querySelectorAll('.about-card, .value-card, .achievement-item');
    
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    aboutElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        aboutObserver.observe(element);
    });
}

// Initialize page-specific functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializePageSpecific();
});