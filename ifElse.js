const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado com: '+ nota)

    }else{
        console.log('Reprovado com: '+nota)
    }
}

imprimirResultado(6.9)
imprimirResultado(7)
imprimirResultado('Epaa') // Cuidado!!!