const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number > 100) {
        return true
    } else {
        return false 
    }
})
 
console.log(newList)    

/* pode economizar linhas escrevendo o código assim:

const newList = list.filter(number => number > 100)
*/

/*Outro exemplo:*/

const newList2 = list.filter(number => {
    if (number < 100 && number %2 === 0) {
        return true
    } else {
        return false
    }
})  

console.log(newList2)   
