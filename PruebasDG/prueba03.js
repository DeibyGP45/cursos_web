
/**
 * Librer SA
 * 
 * david a
 * 
 * santiago 6
 * 
 * Nfactura 23
 * 
 * 
 * Libro de 20e compro 2ud.
 * Lapices de 2e compro 10e 
 * 
 * Iva 21%
 * 
 */

/**Function generarFactura
 * 
 * @description funcion que recopila todos los datos de la enpresa y los productos listos para la compra  
 * @param   
 * @returns 
 * 
 * 
 */

const empresa = {

        Nombre: "LIBRER SA",
        Telefono: "645273756",


}

const cliente = {
        Nombre: "David A",
        Direccion: "Santiago 6"
}

function Elemento(descripcion,precioUnidad,cantidad) {

    this.descripcion = descripcion
    this.precioUnidad =  precioUnidad
    this.cantidad = cantidad
    let msg = ` ${descripcion} ${precioUnidad} ${cantidad}`
    return msg
}

  const elemento01 = new Elemento ('Libro A', 20, 10)



function generarFactura () {

}


function mostrarFactura() {
}

console.log(Elemento())

let x = []


