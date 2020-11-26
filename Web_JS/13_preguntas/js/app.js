export function app () {


    let btnInfo = document.querySelector('.boton')
    let InfoMore = document.querySelector('.Info-more')

    let btnInfo2 = document.querySelector('.q')
    let InfoMore2 = document.querySelector('.respuesta')

    let superBoton = document.querySelector('.super-boton')

    //let Btns = document.querySelectorAll('.boton')





    btnInfo.addEventListener('click', onClick)
/*     btnInfo2.addEventListenerAll('click', onClickRes)
 */
    /* btnInfo2.forEach(btn => btn.addEventListener('click', 
    onClickQ)) */


    superBoton.addEventListener('mouseover',onClickSup)
    superBoton.addEventListener('mouseout',onClickSup)

    function onClickQ(ev) {
        aRespuestas.forEach(res => res.classList.add('oculto'))
        ev.target.nextElementSibling.classList.toggle('oculto')
    }




    /* function onClickBoton(params) {
        Text.classList.toogle('oculto')

    } */

    function onClick(ev) {
        
        console.log('nice')

        InfoMore.classList.toggle('Info-more')
        

    }

    function onClickRes(ev) {

        console.log('nicetoo')
        InfoMore2.classList.toggle('Info-more')

        // previousElementSibling
    }

        function onClickSup(ev) {
            superBoton.classList.toggle('hover-boton')
            
        }




    /* let h2 = document.querySelector('h2')

    h2.id = 'h2-01'
    h2.name = 'h2-01'
    h2.setAttribute('title', 'no hay preguntas' )
    console.log(h2.getAttribute('title'))

    //h2.className += ' cl4' NO usar

    h2.classList.add('cl4')
    h2.classList.remove('cl1')
    h2.classList.toggle('cl3')
    h2.classList.toggle('cl3') */

}