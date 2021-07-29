// ФУНКЦИИ --------------------------------

//function Declaration
// function greet(name){
//     console.log('Привет -', name)
// }

// //Function Expression
// const greet2 = function(name) {
//     console.log('Привет2 -', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// АНОНИМНЫЕ ФУНКЦИИ ---------------------

// let counter = 0

// const interval = setInterval(function(){
//     if(counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(counter++);
//     }
  
// }, 1000)

// const interval2 = setTimeout(function(){
//     if(counter === 5) {
//         clearTimeout(interval2)
//     } else {
//         console.log(counter++);
//     }
  
// }, 1000)



// СТРЕЛОЧНЫЕ ФУНКЦИИ --------------------

function greet(name) {
    console.log('Привет -', name)
}

const arrow = (name) => {
    console.log('Привет -', name)
}

const arrow2 = name => console.log('Привет -', name)

// const pow2 = num => {
//     return num ** 2
// }

// const pow3 = num => num ** 2

// console.log(pow3(5))


// // ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41,4))
// console.log(sum())

// function sumAll(...all) {
//     let result = 0 
//     for (let num of all) {
//         result += num
//     }
//     return result
// } 
// const res = sumAll(1,2,3,4,5,6)

// console.log(res)



// ЗАМЫКАНИЯ --------------------------------------------

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)

    }
}

const logWithLastName = createMember('Mikhail')

console.log(logWithLastName(' Studio54'))