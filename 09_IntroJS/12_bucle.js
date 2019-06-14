/* let limite =100

for (let i = 0; i < limite; i++) {
    let cuad = i*i
    console.log(i, cuad)
    suma = suma + cuad
} */


const aDatos = ['perro', 'gato','caballo', 'ornitorrinco']

for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    if (i > 0) {
        item = item +'s'
    }
    console.log(`Tengo ${i+1} ${item}`)
}