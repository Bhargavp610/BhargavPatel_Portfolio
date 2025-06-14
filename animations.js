// Simple JS to add animation classes on page load (optional)
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-fade-in').forEach(el => {
    el.style.opacity = 0;
    el.classList.add('animate-fade-in');
  });

  document.querySelectorAll('.animate-slide-up').forEach(el => {
    el.style.opacity = 0;
    el.classList.add('animate-slide-up');
  });
});
