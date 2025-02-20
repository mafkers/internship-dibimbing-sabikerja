document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
        e.target.reset();
        
        window.location.href = '/apply/register.html';
    }, 1000);
});

document.getElementById('phone').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
});