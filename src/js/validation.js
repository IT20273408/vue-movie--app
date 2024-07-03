
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const terms = document.getElementById('terms');

        if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || !terms.checked) {
            alert('Please fill out all required fields and agree to the terms.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
