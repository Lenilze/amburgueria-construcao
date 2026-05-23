/* 
- reduzir 10% do valor de mercado de cada empresa
- filtrar as empresas fundadas depois de 1980
- somar o valor de mercado das empresas restantes
*/  


const companies =[
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundation: 1938 },
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundation: 1975 },
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundation: 1968 },
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundation: 2004 },
    {name: 'Amazon', marketValue: 280, CEO: 'Jeff Bezos', foundation: 1994 },
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundation: 1976 },
    {name: 'Apple', marketValue: 2390, CEO: 'Tim Cook', foundation: 1976 }
]

const marketValueOldCompanies = companies.map( (company) => {
    company.marketValue = company.marketValue - company.marketValue / 10
    return company
} ). filter( (company) => company.foundation > 1980).reduce ( (acc, company) => acc + company.marketValue, 0)


console.log(marketValueOldCompanies)   


