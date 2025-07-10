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
  const closeButtons = document.querySelectorAll('.close-btn');

  // Fix #1: Binding targetId inside event handler
  triggers.forEach(trigger => {
    trigger.setAttribute('tabindex', '0');

    trigger.addEventListener('click', () => {
      const targetId = trigger.dataset.target;
      sections.forEach(sec => {
        const shouldShow = sec.id === targetId;
        sec.classList.toggle('show', shouldShow);
        sec.setAttribute('aria-hidden', String(!shouldShow));
      });
    });

    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click(); // reuse click logic
      }
    });
  });

  // Fix #2: Close button actually hides content
  closeButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const section = e.target.closest('.project-content');
      if (section) {
        section.classList.remove('show');
        section.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Optional: Click outside to close all
  document.addEventListener('click', e => {
    if (
      ![...triggers].some(t => t.contains(e.target)) &&
      ![...sections].some(s => s.contains(e.target))
    ) {
      sections.forEach(sec => {
        sec.classList.remove('show');
        sec.setAttribute('aria-hidden', 'true');
      });
    }
  });
});
