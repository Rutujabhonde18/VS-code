document.addEventListener('DOMContentLoaded', () => {
    const pass = document.getElementById("password");
    const conformPass = document.getElementById("conform-password");
    const str = document.getElementById("strength");
    const form = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const showPassword = document.getElementById("show-password");

    // Show/Hide Password
    showPassword.addEventListener('change', () => {
        const type = showPassword.checked ? 'text' : 'password';
        pass.type = type;
        conformPass.type = type;
    });

    // Validate form on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // Username validation
        if (username.value.length > 10) {
            alert("Username must be 10 characters or less.");
            return;
        }

        // Password strength validation
        if (str.innerHTML !== 'strong') {
            alert("Password must be strong to sign up.");
            return;
        } 

        // Password match validation
        if (pass.value !== conformPass.value) {
            alert("Passwords do not match.");
            return;
        }

        // If all validations pass
        swal("", "Congrats! Your account has been created", "success");
    });

    // Password strength checker
    pass.addEventListener('input', () => {
        if (pass.value.length < 4) {
            str.innerHTML = 'weak';
            str.style.color = 'red';
            pass.style.borderColor = 'red';
        } 
        else if (pass.value.length >= 4 && pass.value.length < 8) {
            str.innerHTML = 'medium';
            str.style.color = 'orange';
            pass.style.borderColor = 'orange';
        } 
        else if (pass.value.length >= 8) {
            str.innerHTML = 'strong';
            str.style.color = 'green';
            pass.style.borderColor = 'green';
        }
    });
});
