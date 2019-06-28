/**Asincronia
 * 
 * En otros lenguajes es multihilo - mutithread
 * Dandose concurrencia real
 * 
 * En Javascript hay un solo hilo que gestiona el bucle de eventos
 * 
 */

setTimeout(  () => {
    console.log('Loading...')
}, 0)

console.log("Mensaje 2")
console.log("Mensaje 3")

setTimeout(  () => {
    console.log('Ok')
}, 2000)

console.log("Mensaje 5")