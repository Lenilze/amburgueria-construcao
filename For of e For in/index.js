/*const myName = "Lenilze";
const users = ['Maria', 'João', 'Ana', 'Carlos', 'Beatriz', 'Pedro', 'Rafael', 'Lucas', 'Fernanda', 'Guilherme']

for (const name of users) {
    console.log(name)

} 
*/

const users = {name: 'Lenilze', age: 43, street: "Rua F"}

for (const key in users)
{
    console.log(`${key}: ${users[key]}`)
}
