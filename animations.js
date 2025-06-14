// Typing effect for name
const text = "Bhargav Patel";
const speed = 100;
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Scroll animation for sections
function revealOnScroll() {
  const sections = document.querySelectorAll(".animate");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.onload = () => {
  typeWriter();
  revealOnScroll();
};

window.addEventListener("scroll", revealOnScroll);
