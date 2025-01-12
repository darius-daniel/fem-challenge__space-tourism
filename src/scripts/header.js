const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const body = document.getElementsByTagName('body')[0];
let mobileMenuState = false;

hamburgerIcon.onclick = function () {
  console.log('clicked');
  mobileMenuState = !mobileMenuState;
  if (mobileMenuState) {
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');

    const menuClose = document.createElement('img');
    menuClose.src = '/shared/icon-close.svg';
    menuClose.classList.add('mobile-menu__close');
    menuClose.onclick = function () {
      mobileMenuState = false;
      mobileMenu.classList.add('hidden');
    };
    mobileMenu.append(menuClose);

    const mobileNav = document.createElement('nav');
    mobileNav.classList.add('mobile-nav', 'text-preset-8');

    const navItems = document.createElement('ul');
    navItems.classList.add('mobile-nav__nav');

    const navItemsArray = ['Home', 'Destination', 'Crew', 'Technology'];
    navItemsArray.forEach((item, idx) => {
      const navItem = document.createElement('li');

      const navLink = document.createElement('a');
      navLink.classList.add('mobile-nav__nav-link');
      if (item === 'Home') {
        navLink.href = '/';
      } else {
        navLink.href = `/${item.toLowerCase()}`;
      }

      const numbering = document.createElement('span');
      numbering.textContent = idx.toString().padStart(2, '0');
      numbering.classList.add('mobile-nav__numbering');

      if (navLink.pathname === window.location.pathname) {
        document
          .getElementsByClassName('active-link')[0]
          .classList.remove('active-link');
        navLink.classList.add('active-link');
      }

      navLink.append(numbering, item);
      navItem.append(navLink);
      navItems.append(navItem);
    });

    mobileNav.appendChild(navItems);
    mobileMenu.appendChild(mobileNav);
    body.append(mobileMenu);
  }
};

const navLinks = document.getElementsByClassName('nav__nav-link');
Array.prototype.forEach.call(navLinks, function (link) {
  if (link.pathname === window.location.pathname) {
    link.classList.add('active-link');
  }
});
