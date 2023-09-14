const scriptURL = 'https://script.google.com/macros/s/AKfycbxGjtMZK1sCRLorkygB9qmxL5OG9yH695az9TQrBF9r5q0JgU6ZjbMSv3lpv3vhZSSlqA/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
});

function validateForm() {
    var phoneNumber = form.elements["phone"].value;

    // Remove any non-digit characters (e.g., spaces, dashes)
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (phoneNumber.length < 10) {
        alert("Phone number must be at least 10 digits long.");
        return false; // Prevent form submission
    }

    // Continue with form submission if the phone number is valid
    return true;
}
