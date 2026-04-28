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
    el: '.blue-pagination_review',
    clickable: true,
  },
  navigation: {
    nextEl: '.blue_swiper_btns_review .swiper-button-next',
    prevEl: '.blue_swiper_btns_review .swiper-button-prev',
  },

  breakpoints: {
    0: {
      navigation: false,
      pagination: false,
    },
    401: {
      navigation: {
        nextEl: '.blue_swiper_btns_review .swiper-button-next',
        prevEl: '.blue_swiper_btns_review .swiper-button-prev',
      },
      pagination: {
        el: '.blue-pagination_review',
        clickable: true,
      },
    }
  }
});

