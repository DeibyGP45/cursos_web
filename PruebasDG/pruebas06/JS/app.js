export function app () {

console.log('olakAse')
//Nodos
let comprar = document.querySelector('#btn_amazon')


//

comprar.addEventListener('click',buyAmazon)
//

function buyAmazon (ev) {
    location.assign('http://www.amazon.es/')
    console.log('go!')
}

} 