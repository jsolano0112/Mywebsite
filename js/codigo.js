window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("box_menu");
    nav.classList.toggle('abajo', window.scrollY>0);
})