const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Phone: ${formData.get('phone') || '-'}`,
        `Subject: ${formData.get('subject')}`,
        `Message: ${formData.get('message')}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/6281214166691?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});