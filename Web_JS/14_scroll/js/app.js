import arboles from './imagenes.json.js' //Exportar imagen a la pagina 

export function app () {
    console.log('ddd')


    let aImagenes = arboles.map( item => { //Funcion map para repartir las imagenes 


        const img = new Image()
        img.alt = item.nombre,
        img.src = './assets/' + item.source
        return img
    } )

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', calcularOffset)

    let header = document.querySelector('body>header')

    let divTop = document.querySelector('.top')

    let aSections = document.querySelectorAll('section')

    aSections.forEach(item => console.dir(item))

    let isSticky = false;

    let aOffsets = []

    let aEnlaces = document.querySelectorAll('nav a')

    aEnlaces.forEach((enlace, i) => enlace.addEventListener(
        'click', (ev) => {onClickMenu(ev, i) }
    ))
    
    let aImgWrappers = document.querySelectorAll('.img-wrapper')

    aImgWrappers.forEach( (item , i) => {

            if (i%2) {
                item[i].classList.add('img-wrapper-left')
            }else {
                item[i].classList.add('img-wrapper-right')
            }
            item.appendChild(aImagenes[i])
            item.addEventListener('click', () => { onClickImg(i) }
            
            )
    }
    
    )

    let dlgImg = document.querySelector('#dlg-img')
    let dlgBtn = document.querySelector('button')


    function calcularOffset() {
        aOffsets = []
        aSections.forEach( 
        item => aOffsets.push(item.offsetTop)
    )
    console.dir(aOffsets)
    }

    function onScroll(ev) {
        let y = ev.target.scrollingElement.scrollTop
            console.log(y)

            if (y >= 40 && !isSticky ) {
                
                //poner en sticky
                header.classList.add('sticky')
                // header.firstChild.firstChild
                header.children[0]
                divTop.classList.add('top-sticky')
                isSticky = !isSticky
                calcularOffset()
            } else if (y < 40 && isSticky ) {

                header.classList.remove('sticky')
                divTop.classList.remove('top-sticky')
                calcularOffset()
                isSticky = !isSticky
        }
        function spyScroll(ascrollElement) {

            setActive(aOffsets.length)

            for (let i = 1; i < aOffsets.length; i++) {
                 if (ascrollElement < aOffsets [1] -90) {
                     setActive(i - 1)
                     break
                 }
            }

            /* if (ascrollElement < aOffsets [1] -90) {
                setActive(0 ) 
            }else if (ascrollElement < aOffsets [2] -90){
                setActive(1)
            }else if (ascrollElement < aOffsets [3] -90){
                setActive(2)
            }else if (ascrollElement < aOffsets [4] -90){
                setActive(3)
            }else {
                setActive(4) 
            } */
                                        



            aSections [1]
            aSections [2]
            aSections [3]
            aSections [4]

        }
    }

    function onClickMenu(ev, i) {
        ev.preventDefault()
        calcularOffset()
        console.log(aOffsets[i])
        window.scrollTo(0,aOffsets[i]-90)

        setActive(i)
    }

    function setActive (i) {
         aEnlaces.forEach( enlace => enlace.classList.remove('active') )

        aEnlaces[i].classList.add('active')
    }

    function onClickImg () {
        dlgImg.showModal()
        if ( dlgImg.hasChildNodes[0]) {
            dlgImg.removeChild(dlgImg.childNodes[0])
        }
       
        dlgImg.appendChild(aImagenes[i].cloneNode())
    }

    function onClickClose () {
        dlgImg.close()
    }


 }