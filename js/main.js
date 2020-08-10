var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slaider-button--next",
    prevEl: ".slaider-button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
