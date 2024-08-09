import '../utils/scroll-lock';
import '../utils/focus-lock';

const navMenu = document.querySelector('[data-menu="nav-menu"]');
const navList = document.querySelector('[data-menu="burger-menu"]');
const navButton = document.querySelector('[data-menu="burger-button"]');
const navButtonClosed = document.querySelector('[data-menu="closed-button"]');
const navButtonOpened = document.querySelector('[data-menu="opened-button"]');
const overlay = document.querySelector('[data-burger="overlay"]');
const navItem = document.querySelectorAll('.navigation__item');


const openedList = () => {
  navMenu.classList.remove('navigation--is-closed');
  navMenu.classList.toggle('navigation--is-opened');
  navButtonClosed.style.display = 'none';
  navButtonOpened.style.display = 'block';
  navList.style.display = 'flex';
  overlay.classList.toggle('is-active');
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="main-nav"]', false);
  closeBurgerItemsClickAdd();
};

const closedList = () => {
  navMenu.classList.toggle('navigation--is-closed');
  navMenu.classList.remove('navigation--is-opened');
  navButtonClosed.style.display = 'block';
  navButtonOpened.style.display = 'none';
  navList.style.display = 'none';
  overlay.classList.remove('is-active');
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
  closeBurgerItemsClickRemove();
};


function closeBurgerItemsClickAdd() {
  navItem.forEach((item) => {
    item.addEventListener('click', closedList);
  });
}

function closeBurgerItemsClickRemove() {
  navItem.forEach((item) => {
    item.removeEventListener('click', openedList);
  });
}

const toggleNavigation = () => {
  navButton.addEventListener('click', () => {
    const menuClosed = navMenu.classList.contains('navigation--is-closed');
    if (menuClosed) {
      openedList();
    } else {
      closedList();
    }
  });
};

const showMenuToResize = () => {
  const width = document.body.clientWidth;

  if (width > 1439) {
    if (navMenu.classList.contains('nav--is-opened')) {
      openedList();
      navList.style.removeProperty('display');
    } else {
      closedList();
      navList.style.removeProperty('display');
      overlay.classList.remove('is-active');
      window.scrollLock.enableScrolling();
      window.focusLock.unlock();
    }
  }
};

const initBurgerMenu = () => {
  toggleNavigation();
  window.addEventListener('resize', showMenuToResize);
};

export { initBurgerMenu };
