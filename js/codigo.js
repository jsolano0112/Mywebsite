const menu = document.getElementById('caja-menu')

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 50){
        menu.classList.add('scrollC')

    }else{
        menu.classList.remove('scrollC')
    }
})