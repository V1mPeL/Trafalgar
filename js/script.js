
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

    
try{const swiper = new Swiper('.swiper', {
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
} catch {
  console.log("Swiper error")
}
      


console.clear();

let signupBtn = document.querySelector('.app.front .btn.signup');
let loginBtn = document.querySelector('.app.back .btn.login');
let loginForm = document.querySelector('.app.front');
let signupForm = document.querySelector('.app.back');
let container = document.querySelector('.modalcontainer');
let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('.modal-close');
let blueBtn = document.querySelectorAll('.btnBlue');
let whiteBtn = document.querySelectorAll('.btnWhite');

signupBtn.addEventListener('click', () => {
	container.classList.toggle('active');
});
loginBtn.addEventListener('click', () => {
	container.classList.toggle('active');
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.toggle('displaynone');
});

blueBtn.forEach(addEventListener('click', () => {
  modal.classList.remove('displaynone');
})
);

whiteBtn.forEach(addEventListener('click', () => {
  modal.classList.remove('displaynone');
})
);




