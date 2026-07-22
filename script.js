document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation (Burger-Menü)
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Kontaktformular-Verarbeitung
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            formFeedback.textContent = "Vielen Dank! Ihre Nachricht wurde erfolgreich abgesendet.";
            contactForm.reset();

            setTimeout(() => {
                formFeedback.textContent = "";
            }, 5000);
        });
    }
});