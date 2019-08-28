


console.log("Cargada app")

//MODO FACIL (enlace function)

function saludar() {
    console.log('Hola desde una function')
}

console.dir(document)
console.log(document)

//MODO NORMAL

document.querySelector('#btn-super').onclick = saludar

document.querySelector('#btn-super').title = 'Info desde JS'