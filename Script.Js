document.getElementById('contact-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill out all the fields.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!email.includes('@gmail.com')) {
        errorMessage.textContent = 'Please enter a valid email address (@gmail.com).';
        errorMessage.style.display = 'block';
        return;
    }

    emailjs.send('service_1enbxc4', 'template_2lxl5iw', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.display = 'block';
        // Reset form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }, function(error) {
        errorMessage.textContent = 'Failed to send your message. Please try again later.';
        errorMessage.style.display = 'block';
    });
});



    //document.addEventListener('DOMContentLoaded', () => {
    //  const menuIcon = document.querySelector('.menu-icon');
    // const menuLinks = document.querySelector('.menu-links');

    // menuIcon.addEventListener('click', () => {
        //  menuLinks.classList.toggle('active');
    // });
    //});