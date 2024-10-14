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
  const itemOffset = defaultPlan.offsetLeft;
  const scrollOffset = container.clientWidth / 7;

  // Scroll the container to the desired plan
  container.scrollTo({
    left: itemOffset - scrollOffset,
    behavior: "smooth",
  });
}

// Run the following code when the page's width is bigger than 744px
if (window.innerWidth > 744) {
  let carouselIndex = 1;

  showCarousels(carouselIndex);

  function showCarousel(carouselNumber) {
    carouselIndex += carouselNumber;
    showCarousels(carouselIndex);
  }
  function currentCarousel(carouselNumber) {
    carouselIndex = carouselNumber;
    showCarousels(carouselIndex);
  }
  function showCarousels(carouselNumber) {
    const carousels = document.getElementsByClassName("about-us__image");
    const carouselIndicators = document.querySelectorAll(
      ".about-us__carousel-indicators .carousel-control"
    );

    if (carouselNumber > carousels.length) {
      carouselIndex = 1;
    }
    if (carouselNumber < 1) {
      carouselIndex = carousels.length;
    }

    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.display = "none";
    }
    for (let i = 0; i < carouselIndicators.length; i++) {
      carouselIndicators[i].className = carouselIndicators[i].className.replace(
        " carousel-control__active",
        ""
      );
    }

    carousels[carouselIndex - 1].style.display = "flex";
    carouselIndicators[carouselIndex - 1].className +=
      " carousel-control__active";
  }
}
