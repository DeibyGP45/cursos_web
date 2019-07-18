{//Ejemplo Cantidad de MediaArray
/**
 * @description Funcion que calcula la media de n (un tanto de ...) numeros independientes 
 * @param {...[]number} aDatos
 */

function numeroMedia(...aDatos) { //Los tres puntos son la los Datos restantes
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {  
        const item = aDatos[i];
        r += item 
    }
    return r / aDatos.length
}
console.log(numeroMedia(2, 3, 5, 7, 8, 100))

}

////

function numeroPaDoble() {
    let cadena = [1, 3, 5, 9]

    /* for (let i = 0; i < cadena.length; i++) {
        const item = cadena[i];
        
    } */
    
    const cadenaDoble = cadena => cadena.map( cadena =>  cadena * 2)
    
console.log(cadenaDoble)
}

numeroPaDoble()