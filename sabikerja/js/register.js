document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('regEmail').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    
    setTimeout(() => {
        window.location.href = '/apply/payment.html'; 
    }, 1000);
});