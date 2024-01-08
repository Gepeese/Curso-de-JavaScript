const prod1 = {} //Criação de um objeto vazio
prod1.nome = 'Celular'
prod1.preco = 5000.50

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
}

console.log(prod2)

const concessionaria = {
    veiculos:{
    carros:{
        modelo: "Senna",
        marca: "McLaren",
        ano: 2018,
        preco:400000.0,
    },
    motos:{
        modelo: "Z900",
        marca: "kawasaki",
        ano:2020,
        preco: 39000,
    }  
},
    Funcionarios:{
        nome:"Salvador"
    }
}
console.log(concessionaria)


console.log("LOJA")
const loja = {
    
    produto:{
        nome: "Camisa",
        tamanho: "M",
        preco: 45.59
    },
    categoria:{
        nomeCateg:"Roupas",
        numeroCateg: 1

    }
}

console.log(loja)