const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    noSwiping: true,
    noSwipingClass: 'top-slider_element',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const map = L.map('map',   {zoomControl: false},)
  .setView({
    lat: 55.0292912506868,
    lng: 82.92610725397645,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "/source/images/marker/main-marker.png",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
  }
);

const marker = L.marker(
  {
    lat: 55.0292912506868,
    lng: 82.92610725397645,
  },
  {
    icon: mainPinIcon,
  },
);

setInterval(function() {
  map.invalidateSize();
}, 2000);

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

marker.addTo(map);

Fancybox.bind();