// select DOM items 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu 
let showMenu = false;  //set to false. menu will only show if user clicks hamburger

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {   //if the menu is now shown, do this:
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))

        //set menu state
        showMenu = true;  //here we are resetting the menu state to being shown
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'))

        //set menu state 
        showMenu = false;
    }
}
