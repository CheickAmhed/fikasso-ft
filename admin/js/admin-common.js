// Common admin functionality

// Initialize common admin features
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeModals();
    initializeNotifications();
    setActiveNavItem();
});

// Sidebar functionality
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    const mainContent = document.getElementById('admin-main');
    
    if (sidebarToggle && sidebar && mainContent) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('expanded');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !sidebarToggle.contains(e.target) &&
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('expanded');
            }
        });
    }
}

// Modal functionality
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        const cancelBtns = modal.querySelectorAll('.btn-cancel');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
        
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', () => closeModal(modal));
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
}

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal(modal) {
    if (typeof modal === 'string') {
        modal = document.getElementById(modal);
    }
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form if exists
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

// Notification system
function initializeNotifications() {
    // Remove existing notifications after 5 seconds
    setTimeout(() => {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.remove();
        });
    }, 5000);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 209, 0.1)' : 'rgba(255, 68, 68, 0.1)'};
        color: ${type === 'success' ? '#00FFD1' : '#ff4444'};
        border: 1px solid ${type === 'success' ? 'rgba(0, 255, 209, 0.3)' : 'rgba(255, 68, 68, 0.3)'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-weight: 500;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        animation: slideIn 0.3s ease;
        min-width: 300px;
    `;
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Set active navigation item
function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop();
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Confirmation dialog
function confirmAction(message, onConfirm) {
    const isConfirmed = confirm(message);
    if (isConfirmed && typeof onConfirm === 'function') {
        onConfirm();
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format datetime
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Generate unique ID
function generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Validate form
function validateForm(formElement) {
    const requiredFields = formElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            field.style.borderColor = '#333333';
        }
    });
    
    return isValid;
}

// Handle image upload
function handleImageUpload(inputElement, previewElement) {
    const file = inputElement.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (previewElement) {
                previewElement.src = e.target.result;
                previewElement.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
}

// Search functionality
function setupSearch(searchInputId, tableId) {
    const searchInput = document.getElementById(searchInputId);
    const table = document.getElementById(tableId);
    
    if (searchInput && table) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}

// Data management utilities
const AdminData = {
    // Get data from localStorage
    get: function(key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
    },
    
    // Set data to localStorage
    set: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Add item to collection
    add: function(key, item) {
        const data = this.get(key);
        item.id = item.id || generateId();
        item.createdAt = new Date().toISOString();
        item.updatedAt = new Date().toISOString();
        data.push(item);
        this.set(key, data);
        return item;
    },
    
    // Update item in collection
    update: function(key, id, updates) {
        const data = this.get(key);
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...updates, updatedAt: new Date().toISOString() };
            this.set(key, data);
            return data[index];
        }
        return null;
    },
    
    // Delete item from collection
    delete: function(key, id) {
        const data = this.get(key);
        const filteredData = data.filter(item => item.id !== id);
        this.set(key, filteredData);
        return filteredData;
    },
    
    // Find item by ID
    find: function(key, id) {
        const data = this.get(key);
        return data.find(item => item.id === id);
    }
};

// Initialize admin data if not exists
function initializeAdminData() {
    // Initialize services if not exists
    if (!localStorage.getItem('adminServices')) {
        AdminData.set('adminServices', mockData.services);
    }
    
    // Initialize team if not exists
    if (!localStorage.getItem('adminTeam')) {
        AdminData.set('adminTeam', mockData.team);
    }
    
    // Initialize testimonials if not exists
    if (!localStorage.getItem('adminTestimonials')) {
        AdminData.set('adminTestimonials', mockData.testimonials);
    }
    
    // Initialize blog if not exists
    if (!localStorage.getItem('adminBlog')) {
        AdminData.set('adminBlog', mockData.blog);
    }
    
    // Initialize contact messages if not exists
    if (!localStorage.getItem('contactMessages')) {
        AdminData.set('contactMessages', []);
    }
}

// Initialize admin data on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminData();
});

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);