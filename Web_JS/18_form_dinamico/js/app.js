
export function app() {
    console.log("Cargada app")

const aCursosFront = [
    {code: "HTML-01", titilo: "HTML5"},
    {code: "CSS-02", titilo: "CSS3"},
    {code: "JS-03", titilo: "JavaScript"}
]

const aCursosBack = [
    {code: "Node-04", titilo: "Node JS"},
    {code: "PHP-05", titilo: "PHP"}
]

// Nodo 


const aSelects = document.querySelectorAll('select')
aSelects[0].addEventListener('change', onSelectTech)
aSelects[1].addEventListener('change', onSelectCurso)

function onSelectTech(ev) {
    let aCursosBack
    switch (ev.target.value) {
        case 'F':
            aCursos = aCursosFront
            break;
        case 'B':
            aCursos = aCursosBack   
                break;
        default:
            break;
    }
    let html = ''

    aCursos.forEach(item => {
        html += ` <option value="${item.code}">${item.titulo}</option>`
    });


    aSelects[1].innerHTML += html
    
}

function onSelectCurso (ev) {
    console.log(ev)
}

{/* <option value="HTML-01">HTML5</option>
                        <option value="CSS-02">CSS3</option>
                        <option value="JS-03">JavaScript</option>
                    </optgroup>
                    <optgroup label="Back-end">
                        <option value=""></option>
                        <option value=""></option>
 */}

}