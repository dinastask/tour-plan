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

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [7.838196, 98.298813],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.838196, 98.298813],
      {
        balloonContent: "цвет <strong>воды пляжа бонди</strong>",
      },
      {
        preset: "islands#icon",
        iconColor: "#0095b6",
      }
    )
  );
}
