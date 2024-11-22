document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const mainContent = document.querySelector(".main");
  
    dropdown.addEventListener("mouseenter", () => {
      dropdownContent.style.display = "block";
      mainContent.style.transition = "margin-top 0.3s ease";
      mainContent.style.marginTop = `${dropdownContent.offsetHeight}px`;
    });
  
    dropdown.addEventListener("mouseleave", () => {
      dropdownContent.style.display = "none";
      mainContent.style.transition = "margin-top 0.3s ease";
      mainContent.style.marginTop = "0";
    });
  });
  