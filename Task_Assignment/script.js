document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const managerFirstName = document.getElementById('managerFirstName').value;
        const managerLastName = document.getElementById('managerLastName').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const task = document.getElementById('task').value;
        const taskId = document.getElementById('taskId').value;
        const status = document.querySelector('input[name="status"]:checked').value;
        const notes = document.getElementById('notes').value;
        const feedback = document.getElementById('feedback').value;

        const formData = {
            'Manager\'s First Name': managerFirstName,
            'Manager\'s Last Name': managerLastName,
            'Employee\'s First Name': firstName,
            'Employee\'s Last Name': lastName,
            'Task Name': task,
            'Task ID': taskId,
            'Status': status,
            'Additional Notes': notes,
            'Instructions': feedback
        };

        // Display the form data
        displayFormData(formData);
    });

    function displayFormData(formData) {
        const displayDiv = document.createElement('div');
        displayDiv.classList.add('form-data');

        for (const [key, value] of Object.entries(formData)) {
            const field = document.createElement('p');
            field.innerHTML = `<strong>${key}:</strong> ${value}`;
            displayDiv.appendChild(field);
        }

        form.insertAdjacentElement('afterend', displayDiv);
    }
});
