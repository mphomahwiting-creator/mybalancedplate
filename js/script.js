document.addEventListener("DOMContentLoaded", function () {
    console.log("My Balanced Plate JavaScript is working!");

    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navigation a, nav a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // Validate the contact form
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Remove unnecessary spaces
            document.getElementById("name").value =
                document.getElementById("name").value.trim();

            document.getElementById("message").value =
                document.getElementById("message").value.trim();

            // Check the form fields
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                formFeedback.textContent =
                    "Please complete all required fields correctly.";
                return;
            }

            // Display the success message
            formFeedback.textContent =
                "Validation successful! Your form is ready to submit.";
        });
    }
});
