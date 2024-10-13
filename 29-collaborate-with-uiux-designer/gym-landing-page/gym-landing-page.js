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
  const container = document.querySelector(".membership-plans-wrapper");
  const plans = document.querySelectorAll(".membership-plan");
  // Assuming you want to show the second plan by default, change the index as needed
  const defaultPlanIndex = 1; // index starts from 0
  // Scroll to the selected plan
  const defaultPlan = plans[defaultPlanIndex];
  const planOffset = defaultPlan.offsetLeft;

  // Scroll the container to the desired plan
  container.scrollTo({
    // Decrease the body-inline-padding so that the default plan is shown in the middle
    left: planOffset - 55,
    behavior: "smooth",
  });
};
