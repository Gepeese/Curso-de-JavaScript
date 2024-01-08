Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra com: '+ nota)
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado com: '+ nota)
    }else if(nota.entre(4, 6.99)){ 
        console.log('Recuperação com: '+ nota)
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado com: '+nota)
    }else{
        console.log('Nota inválida '+nota)
    }
}
imprimirResultado(1029)
