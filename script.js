// JavaScript for Page Navigation
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Show the landing page by default
showPage('landing-page');
