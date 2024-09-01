import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = document.querySelector('.slider-gallery');
const swiperButtonPrev = document.querySelector('.gallery__navigation-prev');
const swiperButtonNext = document.querySelector('.gallery__navigation-next');

let mySwiper;

const initGallerySwiper = () => {
  if (window.innerWidth <= 1439 && swiperSlider.dataset.desktop === 'false') {
    mySwiper = new Swiper(swiperSlider, {
      modules: [Navigation],
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
      },

      speed: 500,
      loop: true,
      watchOverflow: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 6,
          initialSlide: 0,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
          initialSlide: 0,
          slidesPerGroup: 1,
        },
        1439: {
          slidesPerGroup: 0,
          spaceBetween: 0,
        },
      },
    });

    swiperSlider.dataset.desktop = 'true';
  }

  if (window.innerWidth > 1439) {
    swiperSlider.dataset.desktop = 'false';
    if (swiperSlider.classList.contains('.swiper-initialized')) {
      mySwiper.destroy(true, true);
    }
  }
};

window.addEventListener('resize', () => {
  initGallerySwiper();
});


export { initGallerySwiper };
