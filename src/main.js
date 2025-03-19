import "./style.scss";
import { setupTrainingSchedule } from "./js/treningstider"; // Import training schedule

// Menu Toggle (For All Pages)
const menu = document.getElementById("menu");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");

if (openMenuBtn && closeMenuBtn) {
  openMenuBtn.addEventListener("click", () => menu.classList.add("active"));
  closeMenuBtn.addEventListener("click", () => menu.classList.remove("active"));
}

// Run treningstider logic **only** if we are on that page
if (document.body.dataset.page === "treningstider") {
  setupTrainingSchedule();
} 



