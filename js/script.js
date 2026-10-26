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

        // Interactive image gallery
    const galleryImages = document.querySelectorAll("main img");

    // Create the image viewer
    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged image viewer");

    const enlargedImage = document.createElement("img");
    enlargedImage.alt = "";

    const closeButton = document.createElement("button");
    closeButton.className = "image-lightbox-close";
    closeButton.type = "button";
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Close enlarged image");

    lightbox.appendChild(enlargedImage);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    // Open an image when clicked
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function (event) {
            event.preventDefault();

            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt || "Enlarged meal image";
            lightbox.style.display = "flex";
            closeButton.focus();
        });
    });

    // Close the image viewer
    function closeLightbox() {
        lightbox.style.display = "none";
        enlargedImage.src = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close using the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});
