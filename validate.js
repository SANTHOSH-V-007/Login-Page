document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.querySelector('.toggle-password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

    // Form validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Email validation
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#28a745';
        }

        // Password validation
        if (!passwordInput.value || passwordInput.value.length < 6) {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = '#28a745';
        }

        if (isValid) {
            // Simulate login (in a real app, you would make an API call)
            alert('Login successful! Redirecting...');
            
            // Here you would typically redirect to dashboard
            // window.location.href = '/dashboard.html';
        }
    });

    // Helper function for email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Social login handlers
    document.querySelector('.google').addEventListener('click', function() {
        alert('Signing in with Google...');
    });

    document.querySelector('.facebook').addEventListener('click', function() {
        alert('Signing in with Facebook...');
    });

    document.querySelector('.apple').addEventListener('click', function() {
        alert('Signing in with Apple...');
    });
});