document.querySelector('.cta-button').addEventListener('click', function (event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId); 

    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slides .slide');
const totalSlides = slides.length;

function showSlide() {
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    
    currentSlide = (currentSlide + 1) % totalSlides;  
}

setInterval(showSlide, 3000);  
showSlide();

// Validasi Contact Us 
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const packageInput = document.getElementById('package');

form.addEventListener('submit', function(event) {
    let isValid = true;

    resetValidation();

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Please enter your name.");
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    if (packageInput.value === "") {
        showError(packageInput, "Please select a travel package.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(inputElement, message) {
    alert(message);
    inputElement.classList.add('invalid');
}

function resetValidation() {
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    packageInput.classList.remove('invalid');
}
