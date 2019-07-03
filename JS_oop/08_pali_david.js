let cadena = "La ruta nos aporto otro paso natural"


/** function isPali
 * @description comprobar si in string es palindroma
 * @param {string} cadena
 * @returns {boolean}
 */


 

 const isPali = (cadena = '') => {

    let r = false
    //const cadenaSinEspacio = cadena.split(' ').join('').toLowerCase()
    const cadenaSinEspacio = cadena.replace(/ /g,'').toLowerCase()
    console.log(cadenaSinEspacio)
    const cadenaInversa = cadenaSinEspacio.split('').reverse().join('')
    console.log(cadenaInversa)

    if (cadenaSinEspacio === cadenaInversa) {r = true}
    return r
 }

isPali("La ruta nos aporto otro paso natural")

    isPaliShort = (cadena = '') => {
        sinEspacios = cadena.split(' ').join('').toLowerCase()
        return sinEspacios === 
            sinEspacios.split('').reverse().join('') ? true : false 
    }

module.exports = {}
module.exports.isPali = isPali
module.exports.isPaliShort = isPaliShort













    /* for (let i = 0; i < cadena.length; i++) {
        const item = cadena[i];
    }

    let x = cadena.split("").reverse()
  */