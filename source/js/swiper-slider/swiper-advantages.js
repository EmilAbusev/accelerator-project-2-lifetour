import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = document.querySelector('.slider-advantages');
const swiperButtonPrev = document.querySelector('.advantages__navigation-prev');
const swiperButtonNext = document.querySelector('.advantages__navigation-next');

let mySwiper;

const desktopAdvantagesSwiper = () => {
  if (window.innerWidth >= 1440 && swiperSlider.dataset.desktop === 'false') {
    mySwiper = new Swiper(swiperSlider, {
      modules: [Navigation],
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
      },
      centeredSlides: true,
      breakpoints: {
        1440: {
          slidesPerView: 3.585,
          spaceBetween: 30,
          initialSlide: 2,
          slidesPerGroup: 2,
        },
      },
    });

    document.querySelector('.slider-advantages').style.display = 'flex';
    swiperSlider.dataset.desktop = 'true';
  }

  if (window.innerWidth < 1440) {
    swiperSlider.dataset.desktop = 'false';
    if (swiperSlider.classList.contains('.swiper-initialized')) {
      document.querySelector('.slider-advantages').style.display = 'flex';
      mySwiper.destroy(true, true);
    }
  }
};

window.addEventListener('resize', () => {
  desktopAdvantagesSwiper();
});

export { desktopAdvantagesSwiper };
