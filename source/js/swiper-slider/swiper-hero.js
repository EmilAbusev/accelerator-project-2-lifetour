
import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperSlider = document.querySelector('.swiper');
const swiperPagination = document.querySelector('.swiper-pagination');

const heroSwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Pagination],
    pagination: {
      el: swiperPagination,
      clickable: true,
      type: 'bullets',
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    breakpoints: {
      1439: {
        allowTouchMove: false,
      }
    },
  });
};

const initHeroSwiper = () => {
  if (document.contains(swiperSlider)) {
    heroSwiper();
  }
};

export { initHeroSwiper };
