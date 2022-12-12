const btnMobile = document.querySelector('.btn-mobile');
const btnClose = document.querySelector('.menu-mobile-head-icon');
const menuMobileArea = document.querySelector('.menu-mobile-area');
const menuMobile = document.querySelector('.menu-mobile');



btnMobile.addEventListener('click', () => {
    if (btnMobile) {
        menuMobileArea.classList.add('active');
        menuMobile.classList.add('active');
        menuMobileArea.style.opacity = 1;
        menuMobile.style.opacity = 1;
    }
})

btnClose.addEventListener('click', () => {
    if (btnClose) {
        
        setTimeout(() => {
            menuMobileArea.classList.remove('active');
            menuMobile.classList.remove('active');
        }, 500)
        menuMobile.style.opacity = 0;
        menuMobileArea.style.opacity = 0;
    }
})