export function app () {

console.log('Fase enlazado')

window.addEventListener('scroll', onScroll)
//window.addEventListener('resize', calcularOffset)


let header = document.querySelector('.main_header')

let isSticky = false

function onScroll(ev) {
    let y = ev.target.scrollingElement.scrollTop

    console.log(y)

    if (y >= 40 && !isSticky) {

        header.classList.add()
        
    } else {
        
    }
}

}