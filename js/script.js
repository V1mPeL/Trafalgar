
    // ========NAVBAR MENU TOGGLER===========
    let menuBtn = document.querySelector('#menu-btn');
    let navBar = document.querySelector('.navbar-menu');
    let closeBtn = document.querySelector('#navbar-menu-close');
    
    
    menuBtn.onclick = ()=>{
        navBar.classList.toggle('navbar-menu-active');
        navBar.classList.remove('navbar-menu');
    }
    
    closeBtn.onclick = ()=>{
        navBar.classList.remove('navbar-menu-active');
        navBar.classList.toggle('navbar-menu');
    }

    
const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      