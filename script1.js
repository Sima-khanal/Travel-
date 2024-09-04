// script.js

const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load the user's preference from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

function changeLanguage(language) {
  // Get all elements with class 'en' or 'nep'
  const enElements = document.querySelectorAll('.en');
  const nepElements = document.querySelectorAll('.nep');

  // Toggle visibility based on selected language
  if (language === 'en') {
      enElements.forEach(el => el.style.display = 'block');
      nepElements.forEach(el => el.style.display = 'none');
  } else if (language === 'nep') {
      enElements.forEach(el => el.style.display = 'none');
      nepElements.forEach(el => el.style.display = 'block');
  }
}

// script.js

// Personalized greeting
const userName = localStorage.getItem('userName') || 'Guest';
document.getElementById('user-name').textContent = userName;

// Save user preference for visiting the About section
document.getElementById('signup-btn').addEventListener('click', () => {
    alert('Thank you for signing up!');
    // Example action: store preference
    localStorage.setItem('visitedAbout', 'true');
});

// FAQ Toggle
const faqDetails = document.querySelectorAll('details');
faqDetails.forEach(faq => {
    faq.addEventListener('toggle', (event) => {
        if (event.target.open) {
            faqDetails.forEach(otherFaq => {
                if (otherFaq !== faq && otherFaq.open) {
                    otherFaq.open = false;
                }
            });
        }
    });
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const feedContent = document.getElementById('feedContent');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const contentType = document.getElementById('contentType').value;
        const content = document.getElementById('content').value;
        const fileInput = document.getElementById('fileInput').files[0];
        let fileURL = '';

        if (fileInput) {
            const reader = new FileReader();
            reader.onloadend = function() {
                fileURL = reader.result;
                addPostToFeed(contentType, content, fileURL);
            };
            reader.readAsDataURL(fileInput);
        } else {
            addPostToFeed(contentType, content);
        }

        // Clear form
        postForm.reset();
    });

    function addPostToFeed(contentType, content, fileURL = '') {
        const postDiv = document.createElement('div');
        postDiv.classList.add('feed-item');

        if (contentType === 'text') {
            postDiv.innerHTML = `<blockquote>${content}</blockquote>`;
        } else if (contentType === 'image' || contentType === 'photo') {
            postDiv.innerHTML = `<img src="${fileURL}" alt="${content}"><p>${content}</p>`;
        }

        feedContent.prepend(postDiv);
    }
});
