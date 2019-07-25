export function app () {


// Existe un input #animal
// Exista un elemento  #output



// NODos
let inAnimal = document.querySelector('#in-animal')
let outAnimal = document.querySelector('#output')
let dlgConfirmar = document.querySelector('.confirmacion')
let aDlgBotones = document.querySelectorAll('.confirmacion button')


//Asignar, manejador de eventos

inAnimal.addEventListener('change',addAnimal)

 // aDlgBotones.addEventListener()

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

    function save() {

        localStorage.setItem('animales',JSON.stringify(animales))
    }

    function render() {

        let html = ''
        html += '<ul>'
        animales.forEach( (item, i) => html += `<li>
         <span class='item' data-id="${i}">${item}</span>
        <a href='#' class='btn-borrar' data-id="${i}">   ❌</a>
        <a href='#' class='btn-editar' data-id="${i}">   ✍</a>
        </li>`) // 
        html += '</ul>'
        outAnimal.innerHTML = html

        ///Nodo DOM (lista) 

        let btnDelete = document.querySelectorAll('.btn-borrar')
        let btnEditar = document.querySelectorAll('.btn-editar')
        let btnItem = document.querySelectorAll('.item')

        //Asignar, manejador de eventos (Lista)

                btnDelete.forEach( enlace => enlace.addEventListener('click',onClickDelete))
                btnEditar.forEach( enlace => enlace.addEventListener('click',onClickEditar))
                btnItem.forEach( enlace => enlace.addEventListener('blur',onClickChange))       
    }
    function onClickDelete(ev) {

        console.log(ev.target.dataset.id)

        animales.splice(ev.target.dataset.id,1)

        save()
        render()
        //btnDelete.outerHTML = ''
        
    }
    
    function onClickDlg (ev) {

        animales.splice(ev.target.dataset.id,1)

        save()
        render()

        }

    function onClickEditar(ev) {

        console.log(ev.target.dataset.id)

        ev.target.previousElementSibling.previousElementSibling.contentEditable = true

        console.dir(ev.target.parentNode)
        
    }

    

    function onClickChange (ev) {

        ev.target.contentEditable = false
        console.log(ev.target.textContent)
        console.log(ev.target.dataset.id)
        animales.splice(
            ev.target.dataset.id, 1 , ev.target.textContent)
            save()
            render()
    }

    
}