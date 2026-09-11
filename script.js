const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
});
