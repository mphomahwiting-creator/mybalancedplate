document.addEventListener("DOMContentLoaded", function () {
    console.log("My Balanced Plate JavaScript is working!");
});

// Highlight the current page in the navigation
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navigation a, nav a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
