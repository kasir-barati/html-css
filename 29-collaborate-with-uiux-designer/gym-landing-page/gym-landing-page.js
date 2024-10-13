/**
 *
 * @param {HTMLButtonElement} buttonElement
 */
function toggleMenu(buttonElement) {
  document.getElementById("navLinks").classList.toggle("active");
  buttonElement.ariaExpanded =
    buttonElement.ariaExpanded === "false" ? "true" : "false";
}

window.onload = function () {
  scrollToDefault(".membership-plans-wrapper", ".membership-plan", 1);
  scrollToDefault(".about-us__carousel-wrapper", ".about-us__image", 2);
  scrollToDefault(".trainers-staff__wrapper", ".staff", 2);
};

/**
 *
 * @param {string} containerSelector
 * @param {string} itemSelector
 * @param {number} defaultIndex starts from 0
 */
function scrollToDefault(containerSelector, itemSelector, defaultIndex) {
  const container = document.querySelector(containerSelector);
  const plans = document.querySelectorAll(itemSelector);
  // Assuming you want to show the item inside the container by default, change the index as needed
  // Scroll to the selected plan
  const defaultPlan = plans[defaultIndex];
  const planOffset = defaultPlan.offsetLeft;

  // Scroll the container to the desired plan
  container.scrollTo({
    // Decrease the body-inline-padding so that the default plan is shown in the middle
    left: planOffset - 55,
    behavior: "smooth",
  });
}
