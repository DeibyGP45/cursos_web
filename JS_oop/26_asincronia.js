 

let datos 

function leerDatosAsinc(i, timer = 1000, callback) {
    return setTimeout(

        () => {
            console.log(`lectura de Datos número ${i}`)
        datos = {data: 'Muchos datos'}
        callback(datos)
        leerDatosAsinc(2,1000, () => {
            console.log(datos.data.toLowerCase())
        })
    },
    timer)
    
}

const handler = leerDatosAsinc(
    1,2000, ( ) => console.log(datos.data.toUpperCase() ))
console.log('Leyendo los datos')


