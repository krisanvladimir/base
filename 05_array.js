// Массивы 
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedez']
// const people = [
//     {name: 'Vladimir', budjet: 4200},
//     {name: 'Elena', budjet: 3500},
//     {name: 'Viktoria', budjet: 1700}
// ]

const fib = [1, 1, 2, 3, 5, 8, 13]
// console.log(cars)

// Function
function aaItemToEnd() {

}

// Method
// cars.push('Рено') // в конец массива
// cars.unshift("Волга") // в начало
// const firstCar = cars.shift() // удаляет и возвращает первый объект
// const lastCar = cars.pop() // удаляет и возвращает последний объект

// console.log(cars.reverse()) // перевернуть массив

// const index = (cars.indexOf('BMW'))
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     if (person.budjet === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.budjet === 3500
// })
// const person = people.find(function(person) {
//     return person.budjet === 3500
// })


// const person = people.find(person => person.budjet === 3500)
// console.log(person)


// console.log(cars.includes('Mazda')) // есть ли в массиве Мазда


// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// }) // привели весь массив к верхнему регистру

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const powFib = fib.map(pow2).map(sqrt)
// console.log(powFib) // возвел в квадрат и вернул в исходник с помощью .map - который принимает в себя параметры


// const pow2Fib = fib.map(num => num ** 2) // каждый элемент fib возвел в квадрат
// console.log(pow2Fib) 
// console.log(upperCaseCars) 
// console.log(cars) // без изменений 


const pow3 = num => num ** 2
// const pow3Fib = fib.map(pow3)
// const filteredNumbeers = pow3Fib.filter(num => {
//     return num > 20
// })
// console.log(pow3Fib)
// console.log(filteredNumbeers)


//Методы: map - преобразовывает данные, filter - фильтрует данные


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)


const people = [
    {name: 'Vladimir', budjet: 4200},
    {name: 'Elena', budjet: 3500},
    {name: 'Viktoria', budjet: 1700}
]

const allBudget = people.filter(person => person.budjet > 2000).reduce((acc, person) => {
    acc += person.budjet
    return acc
}, 0)
console.log(allBudget)