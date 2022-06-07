
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
    

