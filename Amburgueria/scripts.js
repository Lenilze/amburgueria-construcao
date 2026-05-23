const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSunAll = document.querySelector('.sun-all');    
const buttonFilterAll = document.querySelector('.filter-all');

function currencyFormat(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showAll(produtsArray) {
    let myLi = ""

    produtsArray.forEach(produto =>  {
    myLi +=
     `
        <li >
            <img src="${produto.src}">
            <p>${produto.name}</p>
            <p class="item-price"> ${currencyFormat(produto.price)}</p>
        </li>
     `
})
list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((produt) => ({
        ...produt,
        price: produt.price * 0.9
    }))
    showAll(newPrices)

    }

    function sunAllItems() {
        const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
        
        list.innerHTML =`
        <li >
            
            <p>Total: ${currencyFormat(totalValue)}</p>
            
        </li>
     `
      
    }

    function filterAllItems() {
        const filteredItems = menuOptions.filter((produt) => produt.vegan)
        showAll(filteredItems)
    }

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)  
buttonSunAll.addEventListener('click', sunAllItems) 
buttonFilterAll.addEventListener('click', filterAllItems)