const users = [
    { name: 'Alice', age: 30, contact: '(74) 9999-9999'},
    { name: 'Bob', age: 25, contact: '(74) 9888-8888'},
    { name: 'Charlie', age: 35, contact: '(74) 9777-7777'},    
    { name: 'David', age: 40, contact: '(74) 9666-6666'},    
    
]

users.forEach(item => {
    console.log(item)
    
});

/* O forEach é um método de array em JavaScript que permite iterar sobre cada elemento
 de um array e executar uma função para cada um deles. 
 Ele é útil para realizar operações em cada elemento do array,
 como imprimir, modificar ou realizar cálculos. No exemplo acima, 
 o forEach está sendo usado para imprimir cada objeto do array 
 'users' no console.
 Ele pode mostra o item, o index e o array completo,
  dependendo do que for necessário para a operação desejada.
 */