 

 const respuestas = [
    '',
    ['Esto es un mensaje', 3],

    ['construido a cachitos', 7],
    ['mediante La lectura secuencial',8],
    ['de varios items de un array',9 ]
 ]



function leerDatosAsinc(i, timer = 1000) { () => {

        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (i) {
                    console.log(`lectura de Datos número ${i}`)
                            callback(respuestas [i])

                } else {

                    reject (new Error ('Error de lectura'))
                }

            
            },timer)
        })

    }
                    
}
        let i= 1

        leerDatosAsinc(i, 2000)
        .then( (datos) => {
             console.log(datos[0])
            i = datos[1]
            return leerDatosAsinc(i,3000)

        }).then( (datos) => {
        console.log(datos[0])
            i = datos[1]
            return leerDatosAsinc(i,2000)

        }).then( (datos) => {
        console.log(datos[0])
            i = datos[1]
            return leerDatosAsinc(i,1000)

        }).then( (datos) => {
            console.log(datos[0])
        }).catch( (error) => {
            console.log(error.message)
        })

         console.log('Leyendo los datos')



            /* const cuadrado = (x) => {return x*x}

            callback = cuadrado

            callback(4) */
    
        



/* 
const handler = leerDatosAsinc(
    1,2000, ( ) => console.log(datos.data.toUpperCase() ))
console.log('Leyendo los datos')
 */