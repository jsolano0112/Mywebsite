const menu = document.getElementById('caja-menu')
const contenedorProjectos = document.getElementById('portfolio-c')

let proyectosLista = []
let opcionDeProyecto

//Clase para proyecto
class Proyecto {
    constructor(nombre, link, imagen, ancho, alto, texto) {
        this.nombre = nombre
        this.link = link
        this.imagen = imagen
        this.ancho = ancho
        this.alto = alto
        this.texto = texto
    }
}

let pizarra = new Proyecto('PIZARRA', 'https://jsolano0112.github.io/Pizarra/', 'img/pizarra.png',200,200, '')
let appControlGastos = new Proyecto('APP CONTROL GASTOS', 'https://github.com/jsolano0112/ControlGastos.git', 'img/appControlGastos.png',200,200, '')
let gusanoPy = new Proyecto('GUSANITO-PYTHON', 'https://github.com/jsolano0112/Gusanito.git', 'img/gusanito.png',200,200, '')
let shoppingCart = new Proyecto('Shopping Cart - Angular', 'https://github.com/jsolano0112/shopping-cart-angular', 'img/shop.PNG',200,200, '')

proyectosLista.push(pizarra, appControlGastos, gusanoPy, shoppingCart)

function mostrarProjectos() {

    proyectosLista.forEach((Proyecto) => {
        //por cada proyecto que existe, hacer lo siguiente:
        opcionDeProyecto = `
        <article class="portfolio_project">
			<a href=${Proyecto.link}>
				<h6>${Proyecto.nombre}</h6>
			</a>
            <p>${Proyecto.texto}</p>
			<img src=${Proyecto.imagen} width=${Proyecto.ancho} height=${Proyecto.alto} alt=${Proyecto.nombre}>
		</article>
        `
        contenedorProjectos.innerHTML += opcionDeProyecto
    })
}


window.addEventListener('load', mostrarProjectos)