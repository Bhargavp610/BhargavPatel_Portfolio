document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});

trigger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    trigger.click();
  }
});

sections.forEach(sec => {
  if (sec.id === targetId) {
    sec.classList.add('show');
  } else {
    sec.classList.remove('show');
  }
});

e.target.parentElement.classList.remove('show');

document.addEventListener('click', e => {
  if (![...triggers].some(t => t.contains(e.target)) &&
      ![...sections].some(s => s.contains(e.target))) {
    sections.forEach(sec => sec.classList.remove('show'));
  }
});

