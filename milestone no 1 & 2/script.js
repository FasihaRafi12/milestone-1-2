// TypeScript file to add interactivity
document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    // Toggle visibility function
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection) {
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block";
            }
            else {
                skillsSection.style.display = "none";
            }
        }
    });
});
