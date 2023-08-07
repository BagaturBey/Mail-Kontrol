const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

emailInput.addEventListener('input', function () {
    if (isValidEmail(emailInput.value)) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
});

submitButton.addEventListener('click', function () {
    if (isValidEmail(emailInput.value)) {
        result.textContent = 'Mail adresi doğrulaması başarılı: ' + emailInput.value;
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}