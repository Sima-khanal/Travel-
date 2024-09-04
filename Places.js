document.addEventListener('DOMContentLoaded', function () {
  // Navigation Links
  document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Home.html';
  });

  document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'About.html';
  });

  document.getElementById('Places-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Places.html';
  });

  document.getElementById('Services-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Services.html';
  });

  document.getElementById('Pricing-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Pricing.html';
  });

  // Dark Mode Toggle
  const themeToggleButton = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('toggle-icon');
  const body = document.body;

  themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      toggleIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun.png'; // Change to sun icon for light mode
    } else {
      toggleIcon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png'; // Change back to moon icon for dark mode
    }
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById('navbar-hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  hamburger.addEventListener('click', function() {
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
  });
});
