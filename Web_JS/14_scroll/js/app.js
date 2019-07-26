export function app () {
    console.log('ddd')

    window.addEventListener('scroll', onScroll)

    let header = document.querySelector('body>header')

    let divTop = document.querySelector()

    let aSections = document.querySelectorAll('section')

    aSections.forEach(item => console.dir(item))

    let aOffsets = []

    let aEnlaces = document.querySelectorAll('nav a')

    aEnlaces.forEach( enlace => enlace)
    
    


    function calcularOffset() {

        aSections.forEach( 
        item => aOffsets.push(item.offSetTop)
    )
    console.dir(aOffsets)
    }

    function onScroll(ev) {
        let y = ev.target.scrollingElement.scrollTop
            console.log(y)

            if (y >= 40 && !isSticky ) {
                
                //poner en sticky
                header.classList.add('sticky')
                isSticky = !isSticky
                calcularOffset()
            } else if (y < 40 && isSticky ) {

                header.classList.remove('sticky')
                calcularOffset()
                !isSticky = isSticky
            }

            

    }
}