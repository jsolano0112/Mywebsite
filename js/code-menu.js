//boton cerrar
$(function () {

    $("hamburger-content").click (function () {
        $("menu").addClass ('open')
    })

    $("close").click (function () {
        $("menu").removeClass ('open')
    })

})