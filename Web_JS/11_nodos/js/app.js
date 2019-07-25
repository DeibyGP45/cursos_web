
export function app() {
    console.log("Cargada app")

    // Nodos
    let aEnlaces = document.querySelectorAll('#social a')
    let lista = document.querySelectorAll('#social ul')
    let counter = 0

    console.log(aEnlaces)

    //Asignación

    aEnlaces.forEach(aEnlaces => aEnlaces.addEventListener('click', onClickEnlace))
    
    // Function

    function onClickEnlace(ev) {

        
        if (counter < 2) {

            ev.target.parentElement.outerHTML = "Ops!"
            console.log(counter++)
        }else {
            ev.target.parentElement.parentElement.outerHTML = 'Puuf, que pena !! '
        }
            
let origen = document.querySelector('#addNodos div')
        console.dir(origen)
        let txtHTML = `<p>Creado desde JS</p>`
        origen.innerHTML = txtHTML

        let html = document.createElement('p')
        let content = document.createTextNode('Creado desde JS como nodo')
        html.appendChild(content)
        console.log(html)
        origen.appendChild(html)

       let aside = document.createElement('aside')
       aside.innerHTML = '<h2>Más info</h2>'
        //...

        aside.innerHTML += '<p> Aqui va la info</p>'

        origen.appendChild(aside)
    }

    





    /* class Lista extends Array {}

    let x = new Lista


    let nodo = document.querySelector('#nodos')

    console.dir(typeof nodo)

    console.dir(nodo instanceof Selection)
    console.dir(nodo instanceof Element)
    console.dir(nodo instanceof HTMLElement)
    console.dir(nodo.children instanceof HTMLCollection)
    console.dir(nodo.childNodes instanceof NodeList)
    console.log(nodo.children instanceof Array)


    nodo.children
 

    console.dir(x)
*/
}