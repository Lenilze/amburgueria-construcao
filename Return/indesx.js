
const cart = [10, 244, 99, 2, 20, 33, 250] 
let finalValuewithDiscount = 0
let finalValueSemDesconto = 0
let valorDesconto = 0

cart.forEach((value) => {
    finalValueSemDesconto += value
})



function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach((value) => {
    
if (value > 30){
    const discount = calculateDiscount(value, 10)
    valorDesconto += discount
    finalValuewithDiscount = finalValuewithDiscount + (value - discount)
} else {
    finalValuewithDiscount += value
}
})

console.log('Valor final com desconto R$', finalValuewithDiscount, 'Valor final sem desconto R$', finalValueSemDesconto, 'Valor do desconto R$', valorDesconto.toFixed(2))





