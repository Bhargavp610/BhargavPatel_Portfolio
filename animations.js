document.addEventListener('DOMContentLoaded', () => {
  // Animate sections on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  const sections = document.querySelectorAll('.project-content');
  const triggers = document.querySelectorAll('.collapsible-title');

  // Function to close all sections
  const closeAllSections = () => {
    sections.forEach(sec => {
      sec.style.display = 'none'; // Hide all sections
    });
  };

  // Set up click event for each trigger
  triggers.forEach(trigger => {
    trigger.setAttribute('tabindex', '0');

    trigger.addEventListener('click', () => {
      const targetId = trigger.nextElementSibling; // Get the corresponding project content
      const isOpen = targetId.style.display === 'block';

      // Close all sections first
      closeAllSections();

      // If the clicked section is not open, open it
      if (!isOpen) {
        targetId.style.display = 'block';
      }
    });

    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click(); // reuse click logic
      }
    });
  });

  // Close button functionality
  sections.forEach(section => {
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close-btn');
    closeButton.setAttribute('aria-label', 'Close');
    section.prepend(closeButton); // Add close button to the top of the section

    closeButton.addEventListener('click', () => {
      section.style.display = 'none'; // Hide the section
    });
  });

  // Optional: Click outside to close all
  document.addEventListener('click', e => {
    if (![...triggers].some(t => t.contains(e.target)) &&
        ![...sections].some(s => s.contains(e.target))) {
      closeAllSections();
    }
  });
});

