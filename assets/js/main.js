const muswiper = new Swiper(".swiper_comment", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: false,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerGroup: 1,
});


const videoContainers = document.querySelectorAll('.connection-swiper-video, .connection_video');

videoContainers.forEach(container => {
  const video = container.querySelector('video');
  const button = container.querySelector('.connection_play_pause');
  const icon = button.querySelector('i');

  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
      button.style.opacity = '0.5';
    } else {
      video.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
      button.style.opacity = '1';
    }
  });

  video.addEventListener('ended', () => {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    button.style.opacity = '1';
  });
});

const connectionSwiper = new Swiper('.connection-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,

  loop: false,

  observer: true,
  observeParents: true,

  pagination: {
    el: '.connection-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      enabled: true,
    },
    400: {
      enabled: false,
    }
  }
});

const swiper = new Swiper('.review_swiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  loop: false,
  spaceBetween: 20,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reiew_swiper_btns .swiper-button-next',
    prevEl: '.reiew_swiper_btns .swiper-button-prev',
  },

  breakpoints: {
    0: {
      navigation: false,
      pagination: false,
    },
    401: {
      navigation: {
        nextEl: '.reiew_swiper_btns .swiper-button-next',
        prevEl: '.reiew_swiper_btns .swiper-button-prev',
      },
      pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
    }
  }
});

// new Swiper(".reviewsSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   loop: true,

//   navigation: {
//     nextEl: ".rev-next",
//     prevEl: ".rev-prev",
//   },

//   breakpoints: {
//     320: { slidesPerView: 1 },
//     640: { slidesPerView: 2 },
//     1024: { slidesPerView: 4 }
//   }
// });





// const container = document.querySelector(".scroll-content");

// let scrollAmount = 0;

// function autoScroll() {
//   scrollAmount += 0.5;
//   container.style.transform = `translateX(-${scrollAmount}px)`;

//   if (scrollAmount >= container.scrollWidth / 2) {
//     scrollAmount = 0;
//   }

//   requestAnimationFrame(autoScroll);
// }

// autoScroll();