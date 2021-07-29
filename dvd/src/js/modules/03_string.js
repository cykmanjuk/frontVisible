// СТРОКИ -----------------------------

// const name = 'Mikhail';
// const age = 32;

// function getAge() {
//     return age;
// }

//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + 'лет';
//const output = `Привет, вемя зовут ${name}, и мой возраст ${getAge()} лет`;
// const output = `Привет, вемя зовут ${name}, и мой возраст ${age < 30 ? 'A' : 'B'} лет`;

// const output = `
// <div>this is div</div>
// <p>this is P</p>
// `
// console.log(output); 

// const name = 'Mikhail';
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('kha'))
// console.log(name.indexOf('!'))
// console.log(name.startsWith('miha'))
// console.log(name.startsWith('Mikh'))
// console.log(name.endsWith('hail'))
// console.log(name.repeat(3))

// const string = '   password   '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const perosnName = 'Mikhail'
const perosnName2 = 'someOne'
const personAge = 32
const personAge2 = -10

const output = logPerson`Имя: ${perosnName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${perosnName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)