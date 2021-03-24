// 1. Переменные
// variable
//camelCase - стиль написания
// const firstName = 'Vladimir' // стараться не String использовать, устаревшее
// const age = 22 // number
// const  isProgrammer = true // boolean
// name = 'Vova'
// const - менять переменные нельзя, они readonly

// const _private = 'private'
// const $ = 'some value'
// const withNum5 = '5'

// const if = 'mkef' - ошибка
// const 5withNum = '5' - ошибка

// 2. Мутирование


// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString()) // - число привел к строке
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString())

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3. Операторы
// let currentYear = 2021
// const birthYear = 1998

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a тоже самое что и операция снизу
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++) // добавили +1 к значению, но покажет после 
// console.log(--currentYear) // добавит и покажет сразу
// console.log(++currentYear) // отнимет и покажет сразу
// console.log(c)

// 4. Типы данных
// const isProgrammer = true
// const name = 'Vladimir'
// const age = 26
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)
// console.log(null)

// 5. Приоритет операторов
// const fullAge = 23
// const birthYear = 1998
// const currentYear = 2021

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //
// console.log(isFullAge)

// 6. Условные операторы 
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = false

// if (isReady === true) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

// isReady ? console.log('Все готово!') : console.log('Все не готово!') //Тернарное выражение

// const num1 = 42 //number
// const num2 = '42' // string

// console.log(num1 === num2) // === - сравнивает не только по переменным, но и по типу данных. Лучше всегда использовать его.


// 7 Булевая логика
// && || !

// 8. Функции

// function calculateAge(year) {
//     return 2020 - year
// }

// console.log(calculateAge(1998))
// console.log(calculateAge(1996))
// console.log(calculateAge(1990))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else{
//         console.log('Вообще-то это уже будущее')
//     }

    

// }

// logInfoAbout('Vladimir', 1998)
// logInfoAbout('ELena', 1990)
// logInfoAbout('ELena', 2022)

// 9. Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Мазда' // cars[3] = 'Мазда' тоже самое
// console.log(cars)

// 10. Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// } тоже самое

// 11. Объекты 
// const person = {
//     firstName: 'Vladimir',
//     lastName: 'Krisan',
//     year: 1998,
//     languages: ['Ru', 'En', 'Jp'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()
