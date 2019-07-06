// Crear un catalogo con funciones constructivas

/*const art1 = {
	descripcion: '',
	codigo:'',
	precio:'', 
} */


function Articulo(descripcion,codigo,precio) {
		this.descripcion = descripcion
		this.codigo = codigo
		this.precio = precio
}

const art2 = new Articulo ("Mesa",121,60)
const art3 = new Articulo ("Silla",60,30)


console.log (art2)


