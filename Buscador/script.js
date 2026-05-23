let p = document.querySelector('p');
let input = document.querySelector('input');

const contacts = [
    {nome: 'Maria', telefone: '123456789'},
    {nome: 'João', telefone: '987654321'},
    {nome: 'Ana', telefone: '555555555'},
    {nome: 'Carlos', telefone: '111111111'},
    {nome: 'Beatriz', telefone: '222222222'},
    {nome: 'Pedro', telefone: '333333333'},     
    {nome: 'Rafael', telefone: '444444444'},
    {nome: 'Lucas', telefone: '555555555'},
    {nome: 'Fernanda', telefone: '666666666'},
    {nome: 'Guilherme', telefone: '777777777'},
    {nome: 'Lenilze', telefone: '74 991244902'},
]
Beatriz
function search() {
    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].nome.toLowerCase()) {
            p.innerHTML = `Contato encontrado Nome: ${contacts[i].nome} Telefone: ${contacts[i].telefone}`;
        break;

       } else {
            p.innerHTML = 'Contato não encontrado';
        }
    
        
    }

}