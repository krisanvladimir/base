// 1. Функции

// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name)
// }

// greet2('Lena')
// greet('Vova')

// Function Declaration - могу вызвать раньше ,чем создать
// function greet(name) {
//     console.log('Привет - ', name)
// }

// console.log(typeof greet) // function
// console.dir(greet)

// 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)


// 3. Стрелочные функции
function greet2(name) {
    console.log('Привет - ', name)
}

const arrow = (name, age) => {
    console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет - ', name)

arrow('Vladimir')

const pow2 = num => num ** 2

console.log(pow2(5))

// 4. Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b

console.log(sum()) // тут не заданы параметры, но заданы параметры по умолчанию (a = 40, b = a * 2)

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1,2,3,4,5)
console.log(res)

// 5. Замыкания 
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWidthLastName = createMember('Vladimir')

console.log(logWidthLastName('Krisan'))
console.log(logWidthLastName('Kovalchuk'))