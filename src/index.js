document.addEventListener('DOMContentLoaded', function(){
    const buttonMenu = document.querySelector('.mobileMenuBtn');

    buttonMenu.addEventListener('click', function() {
        document.querySelector('.navigation').classList.toggle('visible');
        buttonMenu.classList.toggle('open');
    })
})