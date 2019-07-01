let {comprobarCaso, mostrarComprobacionDeCaso }= require('../04_caso.js')

describe('Function comprobarCaso',() => {
    it ('should be 0 if all MAY', () => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0)
    });
    it ('should be 1 if all min', () => {
        const cadena = 'hola pepe'
        expect(comprobarCaso(cadena)).toEqual(1)
    });
    it ('should be 2 if all MAY & min', () => {
        const cadena = 'Hola pepe'
        expect(comprobarCaso(cadena)).toEqual(2)
    });
});

describe('Function mostrarComprobacionDeCaso',() => {
    it ('should be "Solo mayúsculas" if all MAY', () => {
        const cadena = 'HOLA PEPE'
        console.log(jasmine.createSpy("log"))
        mostrarComprobacionDeCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('Solo mayúsculas')
    });

    it ('should be "Solo minusculas" if all min', () => {
        const cadena = 'hola pepe'
        console.log(jasmine.createSpy("log"))
        mostrarComprobacionDeCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('Solo minusculas')
    });

    it ('should be "mayusculas o minusculas" if all MAY & min', () => {
        const cadena = 'Hola pepe'
        console.log(jasmine.createSpy("log"))
        mostrarComprobacionDeCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('mayusculas o minusculas')
    });

});