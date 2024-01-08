// Função sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,9,8,7) // Ele ignora os outros números
imprimirSoma()

//Função com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))