const muswiper = new Swiper(".swiper_comment", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: false,
  grabCursor: true,

  navigation: {
    nextEl: ".map_swiper_pagination .swiper-button-next",
    prevEl: ".map_swiper_pagination .swiper-button-prev",
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
    nextEl: '.connection_swiper_btns .swiper-button-next',
    prevEl: '.connection_swiper_btns .swiper-button-prev',
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


const swiperrr = new Swiper('.comments_wrapperr', {
  slidesPerView: 'auto',
  loop: false,
  spaceBetween: 20,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.blue_swiper_btns-comment .swiper-button-next',
    prevEl: '.blue_swiper_btns-comment .swiper-button-prev',
  },
});


const leftContainer = document.querySelector(".scrolling-left");
const rightContainer = document.querySelector(".scrolling-right");

let leftScroll = 0;
let rightScroll = 0;

let speed = 0.5;

function updateSpeed() {
  const w = window.innerWidth;

  if (w < 576) {
    speed = 0.2; 
  } else if (w < 1024) {
    speed = 0.35; 
  } else {
    speed = 0.5; 
  }
}

window.addEventListener("resize", updateSpeed);
updateSpeed();

function autoScroll() {

  leftScroll += speed;
  leftContainer.style.transform = `translateX(-${leftScroll}px)`;

  if (leftScroll >= leftContainer.scrollWidth / 2) {
    leftScroll = 0;
  }

  rightScroll += speed;
  rightContainer.style.transform = `translateX(${rightScroll}px)`;

  if (rightScroll >= rightContainer.scrollWidth / 2) {
    rightScroll = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();




new Swiper('.team-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
});

new Swiper('.specials-swiper', {
  slidesPerView: 'auto', 
  spaceBetween: 20,
  centeredSlides: false,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const admissionSwiper = new Swiper('.admission-swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  loopedSlides: 5, // Чтобы loop не ломался при авто-ширине

  navigation: {
    nextEl: '.blue_swiper_btns .swiper-button-next',
    prevEl: '.blue_swiper_btns .swiper-button-prev',
  },
  pagination: {
    el: '.blue_swiper_btns .swiper-pagination',
    clickable: true,
  },
});