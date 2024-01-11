function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Chinelo',15))
console.log(criarProduto('Escova', 20))

function criarCarro(marca,modelo,preco){
    return{
        marca,
        modelo,
        preco
    }
}
console.log(criarCarro('Honda','NSX','500.000'))

function criarTimes(nome,pais,liga){
    return{
        nome,
        pais,
        liga
    }
}
console.log(criarTimes('Barcelona','Espanha','Laliga'))
console.log(criarTimes('Manchester City','Inglaterra','Premier Ligue'))