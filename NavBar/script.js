const NavbarEl = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 40){
        NavbarEl.classList.add('active')
    }
    else{
        NavbarEl.classList.remove('active')
    }
})