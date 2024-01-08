const nome = "Salvador"
const concatenacao = "Olá "+ nome + "!"

const template = `
    Olá
    ${nome}!`
    console.log(concatenacao,template)
    
    //Expressoes
    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)

    const numero = 1
    const template2 = `
    3 - 2 é 
    igual a: ${numero}!`
    console.log(template2)