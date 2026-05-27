document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
