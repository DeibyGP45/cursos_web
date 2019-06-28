const meses = {
    enero : 'january',
    febrero: 'february',
    marzo: 'march',
    abril: 'april',
    mayo:'may',
    junio: 'june',
    julio: 'july',
    agosto: 'august',
    septiembre: 'september',
    octubre: 'october',
    noviembre: 'november',
    diciembre: 'december'

}

const mesesNumer = {
    enero : '01',
    febrero: '02',
    marzo: '03',
    abril: '04',
    mayo:'05',
    junio: '06',
    julio: '07',
    agosto: '08',
    septiembre: '09',
    octubre: '10',
    noviembre: '11',
    diciembre: '12'

}


        //module.exports = {}

function oMeses() {

    for (const key in meses) {
            const index = meses[key];
            console.log (`En ingles ${key} se dice ${index} `)
    }
}

oMeses()

let meses1 =elegirArray(id1)
let meses2 =elegirArray(id2)

function chooseArray(key) {

    let r

    switch (key) {
        case 'es':
        case 'esp':
            r= aMeses
            
            break;
    case 'en':
            r= aMesesIngles
            break;
    case 'n':
            r= aMesesN
            break;
        default:
            throw new error('Código de idioma incorrecto')
            break;
    }
}

function chooseLeng(key) {

    let r

    switch (key) {
        case 'es':
        case 'esp':
            r= Español
            break;
    case 'en':
            r= Ingles
            break;
    case 'n':
            r= N
            break;
        default:
            throw new error('Código de idioma incorrecto')
            break;
    }
}
function mostrarParesMeses(id1,id2) {
        //Elige  dos entre  'es' 'en' 'n' 
    let oMeses = prepararMeses(id1,id2)
    let texto = ``

    for (const mes in oMeses) {
        const ing = oMeses [mes];
        texto += `El mes ${mes} en ${} se dice ${index} \n`
}

try {
     mostrarParesMeses('es','en')
} catch (error) {
    console.error('lo sentimos')
    console.error(e.message)
}

        //module.export
}
