// Объекты 
const person = {
    name: 'Vladimir',
    age: 22,
    isProgrammer: true,
    languages: ['ru', 'en', 'jp'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key', //key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this', this)
        console.info('Информация про человека по имени:', this.name)
    }
} 



// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person)
// person['key_4'] = undefined

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person

// console.log(name, personAge, languages)

// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })




//ConTEXT
// person.info()

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    },
        // keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`'${key}': ${this[key]}`)
        // })
        keysAndValues() {
            const self = this
            Object.keys(this).forEach(function(key) {
                console.log(`'${key}': ${self[key]}`)
            }) // function создает свой собственный контекст
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-------Start--------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`'${key}': ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------------')
            }
        })
        if (bottom) {
            console.log('-------End--------')
        }
    }
}

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])


// const bound = logger.keys.bind(person) //bind - возвращает новую функцию
// bound()
// logger.keys.call(person) // call - сразу вызывает функцию
