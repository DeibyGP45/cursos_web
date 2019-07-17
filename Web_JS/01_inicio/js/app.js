


console.log("Cargada app")

function saludar() {
    console.log('Hola desde una function')
}

console.dir(document)
console.log(document)


document.querySelector('#btn-super').onclick = saludar

document.querySelector('#btn-super').title = 'Info desde JS'