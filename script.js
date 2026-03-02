function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

document.querySelectorAll(".skill-circle").forEach(circle => {
  const percent = circle.getAttribute("data-percent");
  const progress = circle.querySelector(".progress");
  const offset = 314 - (314 * percent) / 100;
  setTimeout(() => {
    progress.style.strokeDashoffset = offset;
  }, 800);
});
