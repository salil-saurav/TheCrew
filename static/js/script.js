$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
  },
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // Your Owl Carousel initialization settings
  });

  // Replace the content of the "previous" navigation button
  $('.owl-prev span[aria-label="Previous"]').html("&#x2190;"); // Left arrow symbol

  // Replace the content of the "next" navigation button
  $('.owl-next span[aria-label="Next"]').html("&#x2192;"); // Right arrow symbol
});

$("#scrollToTop").on("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const windowSize = window.innerWidth;

function toggleShadowClass() {
  const windowSize = window.innerWidth;
  const welcomeImg = document.querySelector(".welcome-image");

  if (windowSize <= 768) {
    welcomeImg.classList.add("shadow", "bg-body-tertiary");
  } else {
    welcomeImg.classList.remove("shadow", "bg-body-tertiary");
  }
}

// Call the function when the window loads and whenever the window is resized
window.addEventListener("load", toggleShadowClass);
window.addEventListener("resize", toggleShadowClass);



function toggleBannerGap() {
  const bannerWindowSize = window.innerWidth;
  const bannerElements = document.querySelectorAll(".banner-content");
  console.log(bannerElements)

  for (const banner of bannerElements) {
    if (bannerWindowSize <= 768) {
      banner.classList.remove("gap-5");
      banner.classList.add("gap-3");
    } else {
      banner.classList.remove("gap-3");
      banner.classList.add("gap-5");
    }
  }
}

// Call the function when the window loads and whenever the window is resized
window.addEventListener("load", toggleBannerGap);
window.addEventListener("resize", toggleBannerGap);
