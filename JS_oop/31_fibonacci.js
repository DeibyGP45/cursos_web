

/** Function calculo
 * 
 * 
 * @description Crea un
 * @param {Number} limite
 * @returns {Array} 
 * 
 */


 

 // la suma de las dos anteriores 

function calcularFbncci(limite) {

     

     if (limite < 1) {
          return [] //throw new Error('Limite no válido') 
     }

     let i = 0
     let j = 1

    let aFibo = [i, j]


        
     //let limite = 10
    
        do {

                 aFibo.push(i + j)

                i = j
                j = aFibo[aFibo.length -1]

        } while ((i + j) <= limite) //CLAVE : Push  y length
       
        return aFibo
}

let limite = 1000


try {
    console.log(calcularFbncci(limite))
} catch (error) {
    console.log(error.messange)
}