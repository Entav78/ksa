import './style.scss';

const menu = document.getElementById("menu");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");

openMenuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});


const basePath = window.location.hostname === 'localhost' ? '' : '/your-repo-name/';

document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href");

  // Only modify links that are NOT external or anchor links
  if (href && !href.startsWith("http") && !href.startsWith("#")) {
    link.href = basePath + "/" + href;
  }
});




