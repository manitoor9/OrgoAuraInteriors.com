
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuBtn.innerHTML =
        navbar.classList.contains("active")
        ? "✕"
        : "☰";
});











document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 200);
});



























document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});












// ========== FADE-IN ON SCROLL ==========
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

cards.forEach((card) => {
  card.classList.add("hide");
  observer.observe(card);
});



























document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const button = this.querySelector("button");

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Fake loading state
  button.textContent = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    alert("Message sent successfully!");
    this.reset();
    button.textContent = "Send Message";
    button.disabled = false;
  }, 1200);
});
