document.addEventListener("DOMContentLoaded", () => {
  const customOrderBtn = document.querySelector(".custom-order-btn");
  const header = document.querySelector("header");

  // Custom Order button click
  if (customOrderBtn) {
    customOrderBtn.addEventListener("click", () => {
      alert("Redirecting to the custom order page...");
      window.location.href = "#"; // Replace with actual link
    });
  }

  // Add background to header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
