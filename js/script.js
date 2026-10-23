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
            // Validate the contact number
const phoneInput = document.getElementById("phone");
const phoneValue = phoneInput.value.trim();
const phoneDigits = phoneValue.replace(/\D/g, "");

const validLocalNumber =
    phoneDigits.length === 10 && phoneDigits.startsWith("0");

const validInternationalNumber =
    phoneValue.startsWith("+27") &&
    phoneDigits.length === 11 &&
    phoneDigits.startsWith("27");

if (
    phoneValue !== "" &&
    !validLocalNumber &&
    !validInternationalNumber
) {
    phoneInput.setCustomValidity(
        "Please enter a valid South African phone number with 10 digits, or use the +27 country code."
    );
} else {
    phoneInput.setCustomValidity("");
}

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
