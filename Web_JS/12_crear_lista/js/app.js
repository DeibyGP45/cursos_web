export function app () {


// Existe un input #animal
// Exista un elemento  #output



// NODos
let inAnimal = document.querySelector('#in-animal')
let outAnimal = document.querySelector('#output')

//Asignar, manejador de eventos

inAnimal.addEventListener('change',addAnimal)

let animales = []

// Existe estorage??

if (localStorage.getItem('animales')) {
    animales =  JSON.parse(localStorage.getItem('animales'))
    render() 
}
// Function 

    function addAnimal() {
        animales.push(inAnimal.value)
        localStorage.setItem('animales',JSON.stringify(animales))
        console.log(JSON.stringify(animales))
        inAnimal.value = ''

        render()
    }

    function render() {

        let html = ''
        html += '<ul>'
        animales.forEach( item => html += `<li>${item}</li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

    }


}