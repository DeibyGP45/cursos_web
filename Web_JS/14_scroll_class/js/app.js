import arboles from './imagenes.json.js'

export class App {

constructor() {

    console.log('ddd')


    this.aImagenes = arboles.map( item => {


        const img = new Image()
        img.alt = item.nombre,
        img.src = './assets/' + item.source
        return img
    } )

    window.addEventListener('scroll', this.onScroll.bind(this))
    window.addEventListener('resize', this.calcularOffset.bind(this))

    //Nodos del DOM

    this.header = document.querySelector('body>header')
    this.divTop = document.querySelector('.top')
    this.aSections = document.querySelectorAll('section')

    this.aEnlaces = document.querySelectorAll('nav a')
    this.aImgWrappers = document.querySelectorAll('.img-wrapper')

        ///Nodos del dialog
 this.dlgImg = document.querySelector('#dlg-img')
    this.dlgBtn = document.querySelector('button')

    //Manejadores de eventos

    aSections.forEach(item => console.dir(item))

    this.isSticky = false;

    this.aOffsets = []


    aEnlaces.forEach((enlace, i) => enlace.addEventListener(
        'click', (ev) => {this.onClickMenu(ev, i) }
    ))
    
    //Incorpora los objetos Image al Dom
    //

    this.aImgWrappers.forEach( (item , i) => {

            if (i%2) {
                item[i].classList.add('img-wrapper-left')
            }else {
                item[i].classList.add('img-wrapper-right')
            }
            item.appendChild(this.aImagenes[i])
            item.addEventListener('click', () => { this.onClickImg(i) }
            
            )
    }
    
    )

   


}
    calcularOffset() {
        this.aOffsets = []
        this.aSections.forEach( 
        item => this.aOffsets.push(item.offsetTop)
    )
    console.dir(this.aOffsets)
    }


    onScroll(ev) {
        let y = ev.target.scrollingElement.scrollTop
            console.log(y)

            if (y >= 40 && !isSticky ) {
                
                //poner en sticky
                this.header.classList.add('sticky')
                // header.firstChild.firstChild
                this.header.children[0]
                this.divTop.classList.add('top-sticky')
                this.isSticky = !this.isSticky
                calcularOffset()
            } else if (y < 40 && this.isSticky ) {

                this.header.classList.remove('sticky')
                this.divTop.classList.remove('top-sticky')
                calcularOffset()
                this.isSticky = !this.isSticky
        }
    }
        
        spyScroll (ascrollElement) {

            this.setActive(this.aOffsets.length)

            for (let i = 1; i < this.aOffsets.length; i++) {
                 if (ascrollElement < this.aOffsets [1] -90) {
                     this.setActive(i - 1)
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

    onClickMenu(ev, i) {
        ev.preventDefault()
        this.calcularOffset()
        console.log(this.aOffsets[i])
        window.scrollTo(0,this.aOffsets[i]-90)

        this.setActive(i)
    }

    setActive (i) {
         aEnlaces.forEach( enlace => enlace.classList.remove('active') )

        aEnlaces[i].classList.add('active')
    }

    onClickImg () {
        this.dlgImg.showModal()
        if ( this.dlgImg.hasChildNodes[0]) {
            this.dlgImg.removeChild(this.dlgImg.childNodes[0])
        }
       
        dlgImg.appendChild(aImagenes[i].cloneNode())
    }

    onClickClose () {
        this.dlgImg.close()
    }


 }

 