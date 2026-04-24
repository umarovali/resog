const swiper = new Swiper('.Reviews', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
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

const wrappers = document.querySelectorAll('.video-wrapper');

  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const btn = wrapper.querySelector('.video-btn');

    btn.addEventListener('click', () => {
      document.querySelectorAll('video').forEach(v => {
        if (v !== video) {
          v.pause();
          v.parentElement.querySelector('.video-btn').textContent = '▶';
        }
      });

      if (video.paused) {
        video.play();
        btn.textContent = '❚❚';
      } else {
        video.pause();
        btn.textContent = '▶';
      }
    });

    video.addEventListener('ended', () => {
      btn.textContent = '▶';
    });
  });