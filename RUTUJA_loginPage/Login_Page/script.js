function generateCaptcha() {
    const captcha = document.getElementById('captcha');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for(let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captcha.innerHTML = captchaText;
}

// Call generateCaptcha when page loads
window.onload = generateCaptcha;

// Show/Hide password functionality
const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
});

// Form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaText = document.getElementById('captcha').innerText;

    if(captchaInput === captchaText){
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: `Welcome, ${username}!`,
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Captcha Mismatch',
            text: 'Please try again.',
        });
        // Refresh captcha
        generateCaptcha();
    }
});


