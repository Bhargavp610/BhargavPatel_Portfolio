document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add slide-up animation class
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all sections that should animate
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
