fdocument.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email address.');
            return;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (phone === '') {
            alert('Please enter your phone number.');
            return;
        } else if (!isValidPhone(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        form.submit();
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }
});

const formData = { name, email, phone };
        localStorage.setItem('formData', JSON.stringify(formData));

        form.submit();
   });
