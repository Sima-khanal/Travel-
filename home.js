// script.js

document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'Home.html'; // Redirect to the Home.html page
});
document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href ='About.html'; // Redirect to the About.html page
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  

  function updateDateTime() {
    const now = new Date();

    // Format the date as: Day of Week, Month Day, Year
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Format the time as: Hours:Minutes:Seconds AM/PM
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Combine date and time into a single string
    const dateTimeString = `${date}, ${time}`;

    // Update the content of the div with id="datetime"
    document.getElementById('datetime').textContent = dateTimeString;
}

// Call updateDateTime() initially to set the date and time immediately
updateDateTime();

// Set an interval to update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

  
  // Example code for dynamically loading destinations
  window.onload = () => {
    const destinationList = document.querySelector('.destination-list');
  
    // Example destinations data
    const destinations = [
        { name: 'Kathmandu', description: 'City of Light', image: 'https://i.pinimg.com/236x/f0/ea/4e/f0ea4e219aa3e232d31089fbf5a20640.jpg' },
        { name: 'Mustang', description: 'The Big Apple', image: 'https://i.pinimg.com/474x/02/a3/cd/02a3cd8ce7b8b395d1a4225d4a07e472.jpg' },
        { name: 'Pashupati', description: 'City of Heritage', image: 'https://i.pinimg.com/564x/e9/03/69/e90369a2dd399ad90a6aa7fd2f227b6e.jpg' }
    ];
  
    destinations.forEach(dest => {
        const item = document.createElement('div');
        item.className = 'destination-item';
        item.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}" style="width: 100%; height: auto; border-radius: 8px;">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
        `;
        destinationList.appendChild(item);
    });
  };
  
  // Load existing reviews from localStorage on page load
  document.addEventListener('DOMContentLoaded', loadReviews);
  
  // Handle form submission
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();
      addReview();
  });
  
  function addReview() {
      const nameInput = document.getElementById('reviewerName');
      const reviewInput = document.getElementById('reviewText');
      const reviewerName = nameInput.value.trim();
      const reviewText = reviewInput.value.trim();
      
      if (reviewerName !== "" && reviewText !== "") {
          const reviewList = document.getElementById('reviewList');
          const listItem = document.createElement('div');
          listItem.classList.add('review-item');
          
          listItem.innerHTML = `
              <strong>${reviewerName}</strong>
              <p>${reviewText}</p>
              <button class="delete-btn">Delete</button>
          `;
          
          // Append the new review to the review list
          reviewList.appendChild(listItem);
          
          // Save to localStorage
          saveReview(reviewerName, reviewText);
  
          // Add delete functionality
          listItem.querySelector('.delete-btn').addEventListener('click', function() {
              reviewList.removeChild(listItem);
              removeReview(reviewerName, reviewText);
          });
  
          // Clear the input fields
          nameInput.value = "";
          reviewInput.value = "";
      }
  }
  
  function saveReview(name, text) {
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push({ name: name, text: text });
      localStorage.setItem('reviews', JSON.stringify(reviews));
  }
  
  function loadReviews() {
      const reviewList = document.getElementById('reviewList');
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.forEach(function(review) {
          const listItem = document.createElement('div');
          listItem.classList.add('review-item');
          
          listItem.innerHTML = `
              <strong>${review.name}</strong>
              <p>${review.text}</p>
              <button class="delete-btn">Delete</button>
          `;
          
          // Add delete functionality
          listItem.querySelector('.delete-btn').addEventListener('click', function() {
              reviewList.removeChild(listItem);
              removeReview(review.name, review.text);
          });
  
          reviewList.appendChild(listItem);
      });
  }
  
  function removeReview(name, text) {
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews = reviews.filter(review => review.name !== name || review.text !== text);
      localStorage.setItem('reviews', JSON.stringify(reviews));
  }


  // JavaScript to toggle dark mode
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

