export function app () {


// Existe un input #animal
// Exista un elemento  #output




let animales = []


// NODos
let inAnimal = document.querySelector('#in-animal')
let outAnimal = document.querySelector('#output')

//Asignar, manejador de eventos

inAnimal.addEventListener('change',addAnimal)


// Funtion 

    function addAnimal() {
        animales.push(inAnimal.value)
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