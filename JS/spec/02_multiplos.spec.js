
const f= require('../02_multiplos.js')

describe ('Funtion isMultiplo', () => {

    it ('should be true 20 is multiple of 2 ', () => {
        expect(f.isMultiplo(20,2)).toBeTruthy()
    });
    it ('should be  false 21 is multiple of 2 ', () => {
        expect(f.isMultiplo(21,2)).toBeFalsy()
    });
    it ('should be true 21 is multiple of 3 ', () => {
        expect(f.isMultiplo(21,3)).toBeTruthy()
    });
    it ('should be true -21 is multiple of 3 ', () => {
        expect(f.isMultiplo(-21,3)).toBeTruthy()
    });
    it ('should be error "pepe" is multiple of 2 ', () => {
        expect( () => f.isMultiplo('pepe',2)).toThrow()
    });
});




describe('Function extraerMultiplos', () => {
        it('should behave return an array', () => {
            expect(Array.isArray(f.extraerMultiplos())).toBeTruthy()
        });


            it('should be retur an array ...', () => {
                        const aDatos = [1,2,3,4,5,6,7,8,9]
                        const n = 2
                        expect(f.extraerMultiplos(n,aDatos)).toEqual([2,4,6,8])
                    });
            it('should be retur an array ...', () => {
            const aDatos = [1,2,3,4,5,6,7,8,9]
            const n = 3
            expect(f.extraerMultiplos(n,aDatos)).toEqual([3,6,9])

        });
    
});


/* //Espectativas
//isMultiplo(2,20) -> true
console.log('isMultiplo(2,20) debe dar true')
//Prueba
console.log(isMultiplo(2,20))


//Espectativas
//isMultiplo(2,21) -> false
console.log('isMultiplo(2,21) debe dar false')
//Prueba
console.log(isMultiplo(2,21))

//Espectativas
//isMultiplo(3,21) -> false
console.log('isMultiplo(3,21) debe dar true')
//Prueba
console.log(isMultiplo(3,21))

//Espectativas
//isMultiplo(3,-21) -> false
console.log('isMultiplo(3,-21) debe dar true')
//Prueba
console.log(isMultiplo(3,-21)) */


//isMultiplo()