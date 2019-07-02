{
    let aDatos = ['perro', 'gato']
    aDatos.length

    //Implementadas como inmutables
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    //Implementadas como mutables
    
    aDatos.sort()
    console.log(aDatos)
console.clear()
    let aNumbers =[32, 3, 2, 21, 56, 5, 9]
    let aNumerosOriginal = aNumbers.slice()
    aNumbers.sort((a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)

}