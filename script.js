function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate email format for username
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address for the username.');
        return;
    }

    // Check for the specific password to redirect to the dashboard
    if (password === "SmartServTest@123") {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function forgotPassword() {
    alert('Forgot your password? Please follow the instructions sent to your email.');
    // You can implement the actual forgot password logic here (e.g., send a reset email)
}
