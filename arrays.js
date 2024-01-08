const valores = [7.7, 8.2, 9.5, 10, 2.5]
console.log(valores[0], valores[4])
console.log(valores[5])

valores[5] = 13
console.log(valores)
console.log(valores.length)

valores.push(false, null, NaN , 'Teste', {id:6})
console.log(valores)

console.log(valores.pop()) // pega o ultimo valor
delete valores[10] // exclui um valor
console.log(valores)

console.log(typeof valores)

//exercicio
console.log('**************************')
console.log('EXERCICIO')
const marcasCarros = ['Ford', 'Ferrari' , 'Lamborghini', 'Maserati', 'Honda']
console.log(marcasCarros)
marcasCarros.push('Nissan')
console.log(marcasCarros)
console.log(marcasCarros.pop())
delete marcasCarros[5]
console.log(marcasCarros)
console.log(marcasCarros[2])

console.log('************************')
console.log("EXERCICIO 2")
const paises = ['Brasil', 'Japão', 'Dinamarca', 'Belgica', 'Suíça']
paises.push('França', 'Inglaterra')
console.log(paises)
delete paises[1]
console.log(paises)