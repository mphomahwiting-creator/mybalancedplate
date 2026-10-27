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

        // Search and filter meals
    const mealSearch = document.getElementById("mealSearch");
    const mealType = document.getElementById("mealType");
    const mealCards = document.querySelectorAll(".meal-card");
    const mealSearchFeedback =
        document.getElementById("mealSearchFeedback");

    if (mealSearch && mealType && mealSearchFeedback) {

        function filterMeals() {
            const searchText = mealSearch.value.trim().toLowerCase();
            const selectedType = mealType.value;
            let visibleMeals = 0;

            mealCards.forEach(function (card) {
                const cardText = card.textContent.toLowerCase();
                const cardCategory = card.dataset.category;

                const matchesSearch = cardText.includes(searchText);
                const matchesType =
                    selectedType === "all" ||
                    cardCategory === selectedType;

                if (matchesSearch && matchesType) {
                    card.style.display = "";
                    visibleMeals++;
                } else {
                    card.style.display = "none";
                }
            });

            const mealsContainer = document.querySelector(".meals-container");

if (mealsContainer) {
    mealsContainer.classList.toggle(
        "single-result",
        visibleMeals === 1
    );
}

            if (visibleMeals === 0) {
                mealSearchFeedback.textContent =
                    "No meals found. Try another search or filter.";
            } else {
                mealSearchFeedback.textContent =
                    visibleMeals +
                    (visibleMeals === 1 ? " meal found." : " meals found.");
            }
        }

        mealSearch.addEventListener("input", filterMeals);
        mealType.addEventListener("change", filterMeals);

        filterMeals();
    }



// Recipe details for the Featured Meals page
const recipes = {
    // Meal 1
    meal1: {
        title: "Golden Rice & Grill Platter",
        sections: [
            {
                name: "Steak",
                ingredients: [
                    "1 steak (approximately 200 g)",
                    "1 tablespoon cooking oil",
                    "Salt and black pepper to taste",
                    "Garlic seasoning to taste"
                ],
                instructions: [
                    "Season the steak with salt, pepper, and garlic.",
                    "Heat the oil in a pan over medium-high heat.",
                    "Cook the steak, turning as needed, until it reaches your preferred doneness.",
                    "For food safety, whole beef steaks should reach 63°C internally and rest for 3 minutes before serving."
                ]
            },
            {
                name: "Yellow Rice",
                ingredients: [
                    "1 cup long-grain white rice",
                    "2 cups water or chicken broth",
                    "1 teaspoon turmeric",
                    "1 tablespoon butter or oil",
                    "Salt to taste"
                ],
                instructions: [
                    "Rinse the rice.",
                    "Sauté the rice briefly in butter or oil.",
                    "Add the water or broth, turmeric, and salt.",
                    "Bring to a boil, cover, and simmer for 15–20 minutes until the liquid is absorbed."
                ]
            },
            {
                name: "Stewed Beans",
                ingredients: [
                    "1 can (approximately 425 g) kidney or pinto beans, rinsed",
                    "1/2 onion, diced",
                    "1 garlic clove, minced",
                    "1/2 cup tomato sauce",
                    "1 teaspoon cumin",
                    "1 teaspoon smoked paprika",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Sauté the onion and garlic until soft.",
                    "Add the cumin, paprika, tomato sauce, and beans.",
                    "Simmer for 15–20 minutes until the sauce thickens."
                ]
            },
            {
                name: "Stewed Pumpkin",
                ingredients: [
                    "1 cup pumpkin or butternut squash, cubed",
                    "1/2 onion, diced",
                    "1/2 cup vegetable broth",
                    "A pinch of nutmeg",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Sauté the onion until translucent.",
                    "Add the pumpkin and vegetable broth.",
                    "Cover and simmer for approximately 15 minutes until tender.",
                    "Mash slightly if desired."
                ]
            },
            {
                name: "Steamed Broccoli",
                ingredients: [
                    "1 cup broccoli florets",
                    "A pinch of salt"
                ],
                instructions: [
                    "Steam the broccoli for 4–5 minutes until bright green and tender-crisp.",
                    "Season lightly with salt and serve."
                ]
            }
        ]
    },

    // Meal 2
    meal2: {
        title: "Grilled Cheesy Chicken & Scrambled Egg Plate",
        sections: [
            {
                name: "Grilled Chicken Breast with Cheese and Sauce",
                ingredients: [
                    "1 chicken breast (approximately 150–200 g)",
                    "1 slice cheddar or provolone cheese",
                    "2 tablespoons creamy sauce",
                    "Salt and pepper to taste",
                    "Garlic powder to taste"
                ],
                instructions: [
                    "Season the chicken with salt, pepper, and garlic powder.",
                    "Grill or pan-sear until thoroughly cooked. Chicken should reach 74°C internally.",
                    "Place the cheese on top during the final minute of cooking and allow it to melt.",
                    "Serve with the creamy sauce drizzled over the chicken or on the side."
                ]
            },
            {
                name: "Scrambled Eggs",
                ingredients: [
                    "2–3 large eggs",
                    "1 tablespoon butter or milk",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Whisk the eggs with salt and pepper.",
                    "Melt the butter in a non-stick pan over low heat.",
                    "Add the eggs and stir gently until soft curds form and the eggs are cooked.",
                    "Remove from the heat and serve."
                ]
            }
        ]
    },

    // Meal 3
    meal3: {
        title: "Golden Cheese & Mushroom Omelette",
        sections: [
            {
                name: "Cheese Omelette",
                ingredients: [
                    "2–3 large eggs",
                    "1/4 cup shredded cheddar or mozzarella cheese",
                    "1 tablespoon butter",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Whisk the eggs with salt and pepper.",
                    "Melt the butter in a pan over medium heat.",
                    "Pour in the eggs.",
                    "As the edges set, lift them with a spatula to let uncooked egg flow underneath.",
                    "When the top is nearly set, sprinkle cheese over one half.",
                    "Fold the omelette over and slide onto a plate."
                ]
            },
            {
                name: "Sautéed Mushrooms",
                ingredients: [
                    "1 cup sliced cremini or button mushrooms",
                    "1 tablespoon olive oil or butter",
                    "1 garlic clove, minced",
                    "Salt and pepper to taste",
                    "Fresh parsley"
                ],
                instructions: [
                    "Heat the oil or butter in a skillet.",
                    "Add the mushrooms and cook undisturbed for 2 minutes to brown.",
                    "Stir, add the garlic, salt, and pepper, and cook until tender.",
                    "Garnish with fresh parsley and serve alongside the omelette."
                ]
            }
        ]
    },

    // Meal 4
    meal4: {
        title: "Beef and Cheesy Stuffed Squash",
        sections: [
            {
                name: "Beef Stew with Carrots",
                ingredients: [
                    "1/2 lb (approximately 225 g) beef stew meat, cubed",
                    "2 carrots, sliced",
                    "1/2 onion, diced",
                    "1 cup beef broth",
                    "1 tablespoon tomato paste",
                    "1 teaspoon Worcestershire sauce",
                    "Flour for dusting",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Season the beef and lightly dust it with flour.",
                    "Brown the beef in a pot, then remove it temporarily.",
                    "Sauté the onion and carrots.",
                    "Add the tomato paste and beef broth, scraping the bottom of the pot.",
                    "Return the beef to the pot.",
                    "Cover and simmer for 1.5–2 hours until the beef is tender."
                ]
            },
            {
                name: "Corn on the Cob",
                ingredients: [
                    "1 ear of corn",
                    "Salt to taste"
                ],
                instructions: [
                    "Boil the corn in salted water for 5–7 minutes, or grill until lightly charred.",
                    "Serve alongside the beef stew."
                ]
            },
            {
                name: "Green Beans",
                ingredients: [
                    "1 cup fresh green beans",
                    "A little garlic and cooking oil, if desired"
                ],
                instructions: [
                    "Steam or sauté the green beans.",
                    "Cook until tender, adding garlic and a little oil if desired."
                ]
            },
            {
                name: "Stuffed Acorn Squash with Cheese",
                ingredients: [
                    "1/2 acorn squash",
                    "1/4 cup cooked quinoa or rice",
                    "2 tablespoons grated cheese",
                    "1 tablespoon dried cranberries (optional)",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Preheat the oven to 200°C.",
                    "Roast the squash half cut-side down for approximately 25 minutes.",
                    "Turn it over and fill the cavity with the cooked quinoa or rice.",
                    "Add the grated cheese and optional cranberries.",
                    "Bake for another 10 minutes until the cheese is melted and bubbly."
                ]
            }
        ]
    }
};

// View Recipe popup functionality
const recipeModal = document.getElementById("recipeModal");
const recipeTitle = document.getElementById("recipeTitle");
const recipeDetails = document.getElementById("recipeDetails");
const closeRecipe = document.getElementById("closeRecipe");

// Open the correct recipe when a button is clicked
if (recipeModal && recipeTitle && recipeDetails && closeRecipe) {


    document.querySelectorAll(".view-recipe-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            // Get the selected recipe
            const recipe = recipes[button.dataset.recipe];

            if (!recipe) return;

            // Set the recipe title
            recipeTitle.textContent = recipe.title;

            // Clear any previously displayed recipe
            recipeDetails.replaceChildren();

            // Display each recipe section
            recipe.sections.forEach(function (section) {

                // Section name
                const sectionHeading = document.createElement("h3");
                sectionHeading.textContent = section.name;

                // Ingredients heading
                const ingredientsHeading = document.createElement("h4");
                ingredientsHeading.textContent = "Ingredients";

                // Ingredients list
                const ingredientsList = document.createElement("ul");

                section.ingredients.forEach(function (ingredient) {
                    const item = document.createElement("li");
                    item.textContent = ingredient;
                    ingredientsList.appendChild(item);
                });

                // Preparation heading
                const instructionsHeading = document.createElement("h4");
                instructionsHeading.textContent = "Preparation";

                // Preparation instructions
                const instructionsList = document.createElement("ol");

                section.instructions.forEach(function (instruction) {
                    const item = document.createElement("li");
                    item.textContent = instruction;
                    instructionsList.appendChild(item);
                });

                // Add the section to the popup
                recipeDetails.append(
                    sectionHeading,
                    ingredientsHeading,
                    ingredientsList,
                    instructionsHeading,
                    instructionsList
                );
            });

            // Display the popup
            recipeModal.classList.add("show");
            recipeModal.setAttribute("aria-hidden", "false");

            // Move keyboard focus to the close button
            closeRecipe.focus();
        });
    });

    // Close the popup
    function hideRecipe() {
        recipeModal.classList.remove("show");
        recipeModal.setAttribute("aria-hidden", "true");
    }

    closeRecipe.addEventListener("click", hideRecipe);

    // Close when clicking outside the recipe content
    recipeModal.addEventListener("click", function (event) {
        if (event.target === recipeModal) {
            hideRecipe();
        }
    });

    // Close when pressing Escape
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            recipeModal.classList.contains("show")
        ) {
            hideRecipe();
        }
    });
}
});
