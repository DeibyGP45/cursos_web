 

 const respuestas = [
    '',
    ['Esto es un mensaje', 2],

    ['construido a cachitos', 4],
    ['mediante La lectura secuencial',6],
    ['de varios items de un array', ]
 ]



function leerDatosAsinc(i, timer = 1000, callback) {
    setTimeout( () => {
            let datos 
            console.log(`lectura de Datos número ${i}`)
        callback(respuestas [i])
            },timer)
                    
}
        let i= 1
        leerDatosAsinc(1, 2000, (datos) => {
            console.log(datos[0])
            i = datos[1]
            leerDatosAsinc(2,3000,(datos) => {
                    console.log(datos[0])
                    i = datos[1]
                leerDatosAsinc(3,4000,(datos) => {
                    console.log(datos[0])
                    i = datos[1]
                    leerDatosAsinc(4,1000,(datos) => {
                        console.log(datos[0])
                        i = datos[1]
            })
        })
    })
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