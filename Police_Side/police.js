// police.js

function validateAdmin() {
    var adminId = document.getElementById('adminId').value;
    var adminPassword = document.getElementById('adminPassword').value;

    // Replace the following values with your desired admin credentials
    var correctAdminId = 'admin';
    var correctAdminPassword = 'admin123';

    if (adminId === correctAdminId && adminPassword === correctAdminPassword) {
        alert('Login successful!'); // You can redirect or perform other actions here
    } else {
        alert('Invalid admin credentials. Please try again.');
    }
}
