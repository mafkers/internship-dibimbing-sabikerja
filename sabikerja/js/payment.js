document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    
    setTimeout(() => {
        window.location.href = '/candidates/index.html'; 
    }, 1000); 
});

document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    e.target.value = value;
});

document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    e.target.value = value;
});

document.getElementById('cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});