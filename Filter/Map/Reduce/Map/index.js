
const number = [1, 2, 3, 4, 5, 6, 7,]

const double = number.map( (item) => {
    const newItem = item * 2
    return newItem
})

console.log(double)

/* Pode fazer a mesma coisa assim */
const double2 = number.map( (item) => item * 4)

console.log(double2)
/*-------------------------------------------------*/


const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
]

const newList = list.map( (user) => {
    const newUser = {
        name: user.name,
        bracelet: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)
 
/*-------------------------------------------------*/

const students = [
    {name: 'Rodolfo', grade: 8},
    {name: 'Maria', grade: 5},
    {name: 'João', grade: 9},
    {name: 'Bruno', grade: 7},
    {name: 'Carla', grade: 3},    
    {name: 'Ana', grade: 10},    
    {name: 'Julio', grade: 4},   
]

const newStudents = students.map( (student) => {

    const newUser = {

        name: student.name,
        situation: student.grade >= 5 ? 'Aprovado' : 'Reprovado'    
    }

    return newUser    
} )

console.log(newStudents)