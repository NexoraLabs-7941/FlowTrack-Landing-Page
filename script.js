const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const faqQuestions = document.querySelectorAll(".faq-question");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    item.classList.toggle("open");
  });
});
