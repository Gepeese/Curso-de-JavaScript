const notas = [6,7,8,9,10,3]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Gabriel',
    sobrenome:'Salvador',
    idade:18,
    peso:78
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

