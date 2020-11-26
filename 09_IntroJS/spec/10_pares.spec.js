
describe('function isEntero', () => {

    let f = require('../10_pares')
    f.esPar()
    
    it('should be true if n is 2', () => {
            let n = 2
        expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false if n is 2.2', () => {
            let n = 2.2
            expect(f.isEntero(n)).toBeFalsy()
    });

    it('should be true if n is -2', () => {
        let n = -2
            expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false if n is -2.2', () => {
        let n = -2.2
            expect(f.isEntero(n)).toBeFalsy()
    });

    it('should be true if n is 0', () => {
        let n = 0
            expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be true if n is "2"', () => {
        let n = '2'
            expect(f.isEntero(n)).toBeTruthy()
    });


});

/* /////////////////////////////////////////////// */

describe('Función esPar', () => {
    let esPar = require('../10_pares.js')

    it('should be true if n = 0 ', () => {
        let n = 0
        expect(esPar(n)).toEqual(true)
    })

    it('should be false if n = 1 ', () => {
        n = 1
        expect(esPar(n)).toEqual(false)
    })

    it('should be true if n = 2 ', () => {
        n = 2
        expect(esPar(n)).toEqual(true)
    })

    it('should be false if n = string "11" ', () => {
        n = '23'
        expect(esPar(n)).toEqual(false)
    })  
    
    let n = '11'
    expect(f.esPar(n)).toBeFalsy()


    it('should be true if n = string "22" ', () => {
        n = '22'
        expect(esPar(n)).toEqual(true)
    })
    it('should be false if n = -5 ', () => {
        let n = -5
        expect(esPar(n)).toEqual(false)
    })    

    it('should be true if n = -4 ', () => {
        let n = -4
        expect(esPar(n)).toEqual(true)
    })

    it('should be -2 if n = "pepe"', () => {
        let x = 'pepe'
        expect(esPar(x)).toEqual(-2);
    })

    it('should be -1 if n = 4.3', () =>  {
        let x = 4.3
        expect(esPar(x)).toEqual(-1);
    });
    
    it('should be -1 if n = -6.7', () =>  {
        let x = -56.7
        expect(esPar(x)).toEqual(-1);
    });

})