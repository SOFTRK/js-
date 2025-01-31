// variables
// let nome = "nome"
// var temp = 'temporario'
// const constante = 'constante'

// nome = 100
// temp = 200

// console.log(nome)
// console.log(temp)
// console.log(constante)

// console
// console.error('ERROR: TYPEERROR')
// console.info('servidor está rodando')
// console.table([
//     1, 2,3
// ])
// console.warn('lib antiga')
// console.time()
// console.clear()

// tipos de dados

let name = 'Github'
const age = 40
let isApproved = false
let date = null
let address

const languages = ['java', 'javascript', 'php']
const numbers = [1, 2, 3]

numbers[3] = 'chocolate'

console.log(numbers, 'estou falando desse')

const user = {
    email: 'teste@teste.com',
    password: 'teste123',
    agge: 10
}

// desestruturacao
const { email, password } = user

console.log(password, email, 'desestruturei o user')

console.log(user, 'user aqui')
// percorrer objeto
console.log(user.agge, 'user aqui')
console.log(user.email, 'user aqui')
console.log(user.password, 'user aqui')



console.log(name)
console.log(age)
console.log(isApproved)
console.log(date)
console.log(address)
console.log(languages)
console.log(user)

console.log(typeof name)
console.log(typeof age)
console.log(typeof isApproved)
console.log(typeof date)
console.log(typeof address)
console.log(typeof languages)
console.log(typeof user)

// métodos string

const fullName = 'Suporte de Domingo'


// metodo que conta caracteres - espaço tbm é um
const contaLetras = fullName.length
console.log(contaLetras)

const stringToArray = fullName.split(' ')
console.log(stringToArray)

const username = 'Ola, ' + stringToArray[0] + ' ' + stringToArray[2]
console.log(username)

// upperCase
const maiusculo = fullName.toUpperCase()
console.log(maiusculo)

// lowerCase
const minusculo = fullName.toLowerCase()
console.log(minusculo)


// busca o indice
console.log(fullName.indexOf('de'), 'indexOf')

// corta string por indice
console.log(fullName.slice(8, 10))

const remember = 'Mariazinha da Silva'

console.log(remember.length, 'remember')

let arrayRemember = remember.split(' ')
console.log(arrayRemember[0], 'slit')
console.log(remember.slice(0, 10), 'slice')


// metodos de array
console.log(arrayRemember)

 const num = [1, 2, 3, 4, 5, 6]
 console.table(arrayRemember)
 console.log(arrayRemember.length, 'conta indice')

 const nameRule = arrayRemember[0] + ' ' + arrayRemember[arrayRemember.length -1];
 console.log(nameRule)

 console.log(arrayRemember[1], 'segundo item de um array')

 //forma antiga
 arrayRemember[4] = 'inseri um iten'
 console.table(arrayRemember)

 // usando metodo push
 arrayRemember.push('adicionei usando o metódo push')
 console.log(arrayRemember)

 //visualizar o ultimo item
 console.log(arrayRemember[arrayRemember.length -1])

// remover o ultimo item
arrayRemember.pop()
console.log(arrayRemember)

arrayRemember.shift()
console.table(arrayRemember, 'shift')

arrayRemember.unshift('novo item unshift')
console.table(arrayRemember, 'unshift')

// metodos de objeto
const product = {
    name: 'camisa',
    price: '15,98',
    inStock: true,
    brand: 'oakley'
}

console.log(product)
console.log(product.name)
console.log(product.inStock)

const { inStock, brand, price } = product

console.log(inStock, 'usando a desetruturação do js')
// adicionando um item direto do js
product.color = ['azul', 'vermelho', 'verde']

//pegando o indice 1 do array dentro do obejto
console.log(product.color[1])