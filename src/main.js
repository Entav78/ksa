import './style.scss'

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("menu").classList.remove("hidden");
});

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("menu").classList.add("hidden");
});


