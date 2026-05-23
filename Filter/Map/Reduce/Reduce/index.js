/* REDUCE 

_ RETORNA UM VALOR UNICO (pode ser um novo array, um objeto, string, number, etc) 
_ ACEITA 4 PARAMENTROS
    - acumulador (obrigatório)
    - valor atual (obrigatório)
    _ index
    - array completo */

const list = [1, 2, 3, 4, 5]   

const sum = list.reduce( (accumulator, valorAtual) => {
    return accumulator + valorAtual 
}, 0)

console.log(sum)

/* -----------------------------------------------------------*/

const cart = [
    {productName: 'Abóbora', priceKg: 5, kg: 1},
    {productName: 'Pepino', priceKg: 3.55, kg: 1.3},
    {productName: 'Limâo', priceKg: 1.2, kg: 2},
    {productName: 'Abacate', priceKg: 5.4, kg: 1.67},
    {productName: 'Morango', priceKg: 11.9, kg: 3},
]

const totalPrice = cart.reduce( (acc, value) => {
    return acc + (value.priceKg * value.kg)
}, 0)

console.log(`Total das compras R$ ${totalPrice}`)