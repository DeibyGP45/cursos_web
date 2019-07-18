
export class App {

//Calcular el area de un cuadrado, un triangulo o un circulo
    constructor () {

        console.log("Cargada app")

        this.aBtns = document.querySelectorAll('button')

        this.inNumber = document.querySelector('#inNumber')


        this.outResult = document.querySelector('#outResult')

        
        

        this.aBtns.forEach( (btn) => {btn.addEventListener('click', this.onBtnClick.bind(this))})

        console.log(this)
    }

onBtnClick(evento) {

    let message
    let n = 0
    console.log(evento.target.id)
    switch (evento.target.id) {
        case 'aCuadrado':
                n = this.inNumber.value
                
            let totalCuadrado = n * n

                console.log(this.inNumberTotal)

            message = `El área del cuadrado es ${totalCuadrado} m2`
            break;

        case 'aTriangulo':
                n = this.inNumber.value
                
            let totalTriangulo = (n * n) /2 //Altura * Base / 2

            //Altura y base tienen el mismo numero
            
                    message = `El área del triangulo 🔺 es ${totalTriangulo} m2`


            break;
        case 'aCirculo':
                n = this.inNumber.value
                
                let totalCirculo = Math.round(Math.PI * (n * n))

                    message = `El área del circulo es ${totalCirculo} m2`
            break;    
        default:
            message = 'Boton sin funcionar'
    } 

    console.log(this)
        this.outResult.value = message
}
    }
