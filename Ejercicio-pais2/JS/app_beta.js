export function app () {

console.log('Fase enlazado')

window.addEventListener('scroll', onScroll)
//window.addEventListener('resize', calcularOffset)


let header = document.querySelector('.main_header')

let isSticky = false;

function onScroll(ev) {
    let y = ev.target.scrollingElement.scrollTop

    console.log(y)

    if (y >= 120 && !isSticky) {

        header.classList.add('sticky')
        isSticky = !isSticky
        console.log('Activado')
        
    } else if (y < 120 && isSticky){
        header.classList.remove('sticky')
        console.log('Desactivado')
    }
}

}