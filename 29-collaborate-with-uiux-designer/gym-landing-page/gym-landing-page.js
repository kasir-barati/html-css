/**
 *
 * @param {HTMLButtonElement} buttonElement
 */
function toggleMenu(buttonElement) {
  document.getElementById("navLinks").classList.toggle("active");
  buttonElement.ariaExpanded =
    buttonElement.ariaExpanded === "false" ? "true" : "false";
}
