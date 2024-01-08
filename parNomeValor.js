// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Gabriel',
    idade: 18,
    peso:76,
    endereco:{
        logradouro:'Rua muito legal',
        numero:1250

    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
