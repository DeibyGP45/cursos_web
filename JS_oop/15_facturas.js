/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/

const factura = {

    empresa: {
        Nempresa:'Noseque SA',
        direccion:'C/ lola 23',
        teléfono:'915427583',
        Nif:''
    },

    cliente: {

        Ncliente:'David garcia',
        direccion:'C/ mari',
        teléfono:'698532675',
        Nif:''
    },

    elementos: [

        elemento01 = {
            descripcion:'Paquete',
            precioUnidad:'45',
            cantidad:'2',
            importeTotals: function () {
                console.log(this.precioUnidad * this.cantidad)
            }
            
        }

    ],

    infoEmpresa: {
        Nfactura:'015',
        IVA: '21%',
        fPago: ['Contado','Tarjeta','Online'],
        fecha:new Date(2019,7,4),

    },

    ImporteTotal: function () {},
}
/** function ImporteTotal
 * 
 * @description Obtener precio total de todos los producto obtenido segun su precio
 * @param {}
 * @returns {number}
 */

//console.clear()
//factura.elementos[0].importeTotals()
console.log(factura)
 /** function MostrarFactura
  * 
  * @description Muestra toda la factura con toda la informacion de la empresa y cliente
  * @param {}
  * @returns {string}
  * 
  */

  
// function MostrarFactura () {console.log(JSON.stringify(factura))}
// MostrarFactura()
