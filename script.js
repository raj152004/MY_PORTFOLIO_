document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzbWYGO0cA4_Ifan0RlmYYz3d-KiqKXOPdLv9r9AgOR7ZGq1QKDkmgqSFcD7Zc6gIEkAg/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      alert("Thank you! Your form was submitted successfully.");
      form.reset();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    });
});
window.location.href = "#portfolio-section-id";  
