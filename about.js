document.addEventListener('DOMContentLoaded', () => {
  const hamburgers = document.querySelectorAll('.hamburger');

  hamburgers.forEach(hamburger => {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          const navLinks = hamburger.nextElementSibling;
          navLinks.classList.toggle('active');
      });
  });
});
// Function to toggle between dark and light modes
const toggleTheme = () => {
    const body = document.body;
    const icon = document.getElementById('toggle-icon');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        icon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png'; // Moon icon for light mode
    } else {
        body.classList.add('dark-mode');
        icon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun-symbol.png'; // Sun icon for dark mode
    }
  
    // Save the theme preference to localStorage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  };
  
  // Load saved theme preference from localStorage
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-icon').src = 'https://img.icons8.com/ios-filled/50/ffffff/sun-symbol.png'; // Sun icon for dark mode
    }
  };
  
  // Handle Form Submission
  document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const contentType = document.getElementById('contentType').value;
    const content = document.getElementById('content').value;
    const fileInput = document.getElementById('fileInput').files[0];
  
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post-item');
  
    // Add content based on type
    if (contentType === 'text') {
        const textContent = document.createElement('p');
        textContent.textContent = content;
        postElement.appendChild(textContent);
    } else if (contentType === 'image' && fileInput) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(fileInput);
        image.alt = 'Uploaded Image';
        image.style.width = '100%';
        postElement.appendChild(image);
    } else if (contentType === 'video' && fileInput) {
        const video = document.createElement('video');
        video.controls = true;
        video.src = URL.createObjectURL(fileInput);
        video.style.width = '100%';
        postElement.appendChild(video);
    }
  
    // Append new post to feed
    document.getElementById('feedContent').appendChild(postElement);
  
    // Clear form
    this.reset();
  });
  
  // Add event listeners for theme toggle and page navigation
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.addEventListener('DOMContentLoaded', loadTheme);
  
  // Navigation links handling
  document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'Home.html'; // Redirect to the Home.html page
  });
  document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'About.html'; // Redirect to the About.html page
  });
  document.getElementById('Places-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'Places.html'; // Redirect to the places.html page
  });
  document.getElementById('Services-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'Services.html'; // Redirect to the services.html page
  });
  document.getElementById('Pricing-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'Pricing.html'; // Redirect to the prices.html page
  });
  