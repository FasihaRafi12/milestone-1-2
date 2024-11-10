// TypeScript file to add interactivity
document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");
  
    // Toggle visibility function
    toggleSkillsButton?.addEventListener("click", () => {
      if (skillsSection) {
        if (skillsSection.style.display === "none") {
          skillsSection.style.display = "block";
        } else {
          skillsSection.style.display = "none";
        }
      }
    });
  });