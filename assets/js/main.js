const swiper = new Swiper('.Reviews', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  }
});


new Swiper(".reviewsSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".rev-next",
    prevEl: ".rev-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});
