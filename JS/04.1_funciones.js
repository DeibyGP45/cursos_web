/**
 * @description Calcular la suma de los cuadrados de n numeros
 * @param {array} aDatos
 * @returns {number,array}
 */

function calcularSC(...aDatos) {
    let r = 0
    let aCuadrados = []
    console.log(aDatos)

    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        let x = item * item
        aCuadrados.push(x)
        r += x
    }
    return [r, aCuadrados]
    return {sumaTotal: r, aCuadrados: aCuadrados}

}

/* let sumaTotal
let aCuadrados */
/* let aResultados = calcularSC(1,5,7,8)
sumaTotal= aResultados[0]
aCuadrados = aResultados[1] */

//let [sumaTotal, aCuadrados] = calcularSC(1,5,7,8)
let {aCuadrados,sumaTotal} = calcularSC(1,5,7,8)


console.log(calcularSC(2,2,2,4))
 

