// Select DOM elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a"); // All nav links

// Toggle the nav menu when the menu icon is clicked
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  console.log("Menu toggled"); // Debugging: Check if the menu is toggled
});

// Close the nav menu when any nav link is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
    console.log("Menu closed after link clicked"); // Debugging: Ensure menu closes
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});