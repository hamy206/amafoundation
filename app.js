document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons on the page
    const buttons = document.querySelectorAll("button");

    // Apply modern styles to each button
    buttons.forEach((button) => {
        // Add base styles
        button.style.backgroundImage = "linear-gradient(45deg, #007BFF, #0056b3)";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "8px";
        button.style.padding = "10px 20px";
        button.style.fontSize = "1rem";
        button.style.cursor = "pointer";
        button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        button.style.transition = "all 0.3s ease";

        // Add hover effect
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
        });

        // Remove hover effect
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });

        // Add focus effect
        button.addEventListener("focus", () => {
            button.style.outline = "2px solid #0056b3";
        });

        // Remove focus effect
        button.addEventListener("blur", () => {
            button.style.outline = "none";
        });
    });
});