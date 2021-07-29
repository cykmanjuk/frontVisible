
for(let line = "#"; line.length <8; line +="#") {
    console.log(line);
};

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

  let xer = function() {
    const y = 20;
    const z = 10;   
    console.log(y + z);
  };
  xer();
const y = 10;
const z = 10;
console.log(y + z);


const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    }; 

console.log(power(2, 10));


const horn = () => {
    console.log("Toot");
    }; 

function min(a, b) {
    if (a < b) return a;
    else return b;
}
console.log(min(0, 10));

console.log(min(0, -10));


function isEven(n) {
    if(n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(76));



function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted +=1;
        }
    }
    return counted;
}
function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

console.log('MASSIVES--------------');

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);

let doh = "Эгегей";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());


let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);


let day1 = {
    squirrel: false,
    events: ["работал","трогал дерево", "ел пиццу", "бегал"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Пошел на работу",
    "трогал дерево": "Потрогал дерево"
};



let anObject = {left:1, right: 2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);


console.log(Object.keys({x: 0, y:0, z: 2}));

let objectA = {a:1, b:2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA);


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);


const score = {visitors: 0, hove: 0};
score.visitors = 1;
console.log(score.visitors);


let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["работал", "трогал дерево", "ел пиццу", "бегал", "смотрел телевизор"], false);
addEntry(["работал", "ел мороженое", "ел цветную капусту", "ел лазанью", "трогал дерево", "чистил зубы"], false);
addEntry(["выходной", "катался на велосипеде", "отдыхал", "ел арахис", "пил пиво"], false);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));


function tableFor(event, journal) {
    let table = [0,0,0,0];
    for (let i = 0; i < journal.lenth; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index +=1;
        if (entry.squirrel) index +=2;
        table[index] +=1;
    }
    return table;0
}
 console.log(tableFor("ел пиццу", journal));

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(journal));

// for (let event of journalEvents(journal)) {
//     let correlation = phi(tableFor(events, journal));
//     of (correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":", correlation);
//     }
// }
console.log([1,2,3,2,1].indexOf(2));

console.log([1,2,3,2,1].lastIndexOf(2));

console.log([0,1,2,3,4].slice(2, 4));

console.log([0,1,2,3,4].slice(2));

function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

console.log(" окей \n ".trim()); 

console.log(String(6).padStart(3,"00"));

let sentence = "Птицы-секретари умеют громко топать";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

console.log("ЛА".repeat(3));

let striпg = "аЬс";
console.log(striпg.leпgth);
console.log(striпg[1]); 

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4,1,9,-2));


let wordsSecond = ["никогда", "полностью"];
console.log(["я это", ...wordsSecond, "не пойму"]);


function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

let {name} = {name: "Фараджи", age: 23};
console.log(name);



console.log("JSON --------------------");

let string = JSON.stringify({squirrel: false,
                            events: ["выходной"]});

console.log(string);
console.log(JSON.parse(string).events);


function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    
    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(1, 10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));


function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);




function arrayToList(array) {
    let list = null;
    for(let i = array.length - 1; i>-0; i--) {
        list = {value: array[i], rest:list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function nth(list, n) {
    if (!list) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10,20,30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10,20,30]), 1));



function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));



console.log("ФУНКЦИИ ВЫСШЕГО ПОРЯДКА");

let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
};
console.log(total);


for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}
console.log(repeatLog(5));


function repeat(n, action) {
    for (let i = 0; i< n; i++) {
        action(i);
    }
}

repeat(3, console.log);


let labels = [];
repeat(5, i => {
    labels.push(`Блок ${i + 1}`);
});

console.log(labels);


function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


function noisy(f) {
    return(...args) => {
        console.log("вызов для", args);
        let result = f(...args);
        console.log("вызов для", args, "возвращает", result);
        return result;
    };
}
noisy(Math.min)(3,2,1);


function unless(test, then) {
    if(!test) then();
}
repeat(10, n => {
    unless(n % 2 == 1, () => {
        console.log(n, " - четное чисто");
    });
});

  
["A", "B"].forEach(c => console.log(c));

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// console.log(filter(SCRIPTS, script => script.living));

// console.log(scripts.filter(s => s.direction == "ttb"));

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(ma(rtlScripts, s=> s.name));

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a, b) => a + b, 0));



function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));


function textScript(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

