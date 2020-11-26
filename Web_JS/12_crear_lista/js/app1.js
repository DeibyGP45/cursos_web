
export function app() {
    console.log("Cargada app")
        let element = new Set()


    // Nodos

    let inElement = document.querySelector('#in_element')

    let btnAñadir = document.querySelector('#btn-añadir')

    let outLista = document.querySelector('#out-lista')


    //Asignación

    btnAñadir.addEventListener('click', onClick)

    
    // Function

    function onClick(ev) {

        let txtHtml = ''
        element.forEach( elemento => txtHtml += `${elemento}`)
        


        //inEle => out


        



    }



}