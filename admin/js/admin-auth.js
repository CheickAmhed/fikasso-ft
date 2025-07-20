// Admin Authentication System

// Default admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'password'
};

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Login function
function login(username, password) {
    if (username === adminCredentials.username && password === adminCredentials.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        return true;
    }
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('adminLoginTime');
    window.location.href = 'login.html';
}

// Check authentication on page load
function checkAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Initialize login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    
    if (loginForm) {
        // Check if already logged in
        if (isLoggedIn()) {
            window.location.href = 'dashboard.html';
            return;
        }
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                // Success - redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Show error
                loginError.style.display = 'flex';
                setTimeout(() => {
                    loginError.style.display = 'none';
                }, 3000);
            }
        });
    }
    
    // Setup logout buttons
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', logout);
    });
});

// Session timeout (24 hours)
function checkSessionTimeout() {
    const loginTime = localStorage.getItem('adminLoginTime');
    if (loginTime) {
        const timeDiff = Date.now() - new Date(loginTime).getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff > 24) {
            logout();
        }
    }
}

// Check session timeout every 5 minutes
setInterval(checkSessionTimeout, 5 * 60 * 1000);