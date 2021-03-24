// // number
// const num = 42 //integer
// const float = 42.42 //float
// const pow = 10e3

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird)) //true
// console.log(Number.isNaN(42)) // false
// console.log(Number.isFinite(Infinity)) //false
// console.log(Number.isFinite(42)) //true

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) // 1 - string = number
// console.log(Number(stringInt) + 2) // 2
// console.log(+stringInt + 2) // 3

// console.log(parseInt(stringFloat) + 2) // не работает с деситичными
// console.log(parseFloat(stringFloat) + 2) // parseFloat исправляет это
// console.log(+stringFloat + 2) // или '+'

// console.log(0.4 + 0.2) //0.600000000000001
// console.log((2 / 5) + (1 / 5)) //0.60000000000001
// console.log(+((0.4 + 0.2).toFixed(1))) // toFixed сколько сохранить знаков после запятой, но приводит в string. Надо перевести в number '+' или parseFloat


// BigInt
// console.log(typeof 9007199254740991n) // n - bigint
// console.log(9007199254740991n - 900719925474099n)
// console.log(-9007199254740991n)
// console.log(9007199254740991.2324n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4) // bigint в number
// console.log(10n - BigInt(4)) // или number в BigInt
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25)) // кв корень
// console.log(Math.pow(5, 3)) // степень
// console.log(Math.abs(-42)) // модуль 42
// console.log(Math.max(42, 12, 23, 11, 422)) // максимальное 
// console.log(Math.floor(4.9)) // округляет в меньшую
// console.log(Math.ceil(4.9)) //  в большую
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.9)) // удаляяет дробную часть
// console.log(Math.random()) // рандомное число


// // 4 Example

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42))
