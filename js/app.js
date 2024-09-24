document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthday = document.getElementById('birthday').value;
    const error = document.getElementById('error');
    error.textContent = '';
    
    if (!firstName) {
        error.textContent = 'Input is required for First Name!';
        error.style.color = 'red';
        return;
    }
    
    if (!lastName) {
        error.textContent = 'Input is required for Last Name!';
        error.style.color = 'red';
        return;
    }
    
    if (!birthday) {
        error.textContent = 'Input is required for Birthday!';
        error.style.color = 'red';
        return;
    }
    
    const table = document.getElementById('dataTable');
    table.innerHTML += '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + birthday + '</td></tr>';
});
