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

  // Handle project section expand/collapse
  const sections = document.querySelectorAll('.project-content');
  const triggers = document.querySelectorAll('.collapsible-title');
  const closeButtons = document.querySelectorAll('.close-btn');

  triggers.forEach(trigger => {
    trigger.setAttribute('tabindex', '0'); // for accessibility
    const targetId = trigger.dataset.target;

    // Click or Enter/Space triggers toggle
    const activate = () => {
      sections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.add('show');
        } else {
          sec.classList.remove('show');
        }
      });
    };

    trigger.addEventListener('click', activate);
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.remove('show');
    });
  });

  // Optional: Click outside to close any open section
  document.addEventListener('click', e => {
    if (
      ![...triggers].some(t => t.contains(e.target)) &&
      ![...sections].some(s => s.contains(e.target))
    ) {
      sections.forEach(sec => sec.classList.remove('show'));
    }
  });
});
