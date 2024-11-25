// Add event listener to navbar links
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add event listener to project cards
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const projectName = card.querySelector("h2").textContent;
            alert(`You clicked on ${projectName}!`);
        });
    });
});
