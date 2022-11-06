function inchecToFeet(inches) {
    var feet = inches / 12
    return feet
}
var books = inchecToFeet(36)
// console.log(books)

function kmTomiles(miles) {
    var km = miles * 1.60934;
    return km
}

var km = kmTomiles(2)
// console.log(km)
function eventNumber(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true
    }
    return false
}
// console.log(eventNumber(2024))
function getFect(num) {
    var fect = 1;
    for (var i = 1; i <= num; i++) {
        fect = fect * i
    }
    return fect
}
// console.log(getFect(9))

// Fectorial Reverse 
function getFectRev(num) {
    let fecto = 1;
    for (let i = num; i >= 1; i--) {
        fecto = fecto * i;
    }
    return fecto
}
// console.log(getFectRev(7))
let myNum = 5.3434;

for (let i = 0; i <= 20; i++) {
    const output = Math.random() * 6;
    let random = Math.round(output)
    // console.log(random)
}

// Find Largest Number 
function largestNum(num1, num2, num3) {
    var large = Math.min(num1, num2, num3)
    return large
}

// console.log(largestNum(23, 43, 65))

// All Number Jog fol in Array 
function sumNum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        sum = sum + element
    }
    return sum;
}
let num = sumNum([23, 34, 21])
// console.lo

// Find Largest number In Array 
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element > largest) {
            largest = element
        }
    }
    return largest
}
const larg = [3, 34, 23, 56]
const output = findLargest(larg)
// console.log(output)

// find Array Second Largest Number 
function findSecondLargestElem(arr) {
    let first = -1, second = -1;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > first) {
            second = first; first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    // console.log(second);
    return second;
}
let arr = [12, 35, 1, 10, 34, 1]
// console.log(findSecondLargestElem(arr))

// fibonacchi seriese
function fiboSeries(num) {
    if (typeof num != 'number') {
        return 'please give anumber'
    }
    if (num < 2) {
        return 'positive num plz'
    }

    let fibo = [0, 1]
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo
}
const ar = 'sx'
// console.log(fiboSeries(ar))

//--------- 11 No Problem -------------------

// Remove Array Duplicate element 
function romoveDuplicate(number) {
    let unique = [];
    for (const element of number) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique
}
const duplicate = [12, 34, 56, 78, 09, 12, 34, 56, 78]
// console.log(romoveDuplicate(duplicate))

// Choose One for me 
function chooseOne(items) {
    var item = items[Math.round(Math.random() * items.length)];
    return item
}
let bookName = ['monjhumir', 'moddahubela', 'sedin', 'amoni', 'srabon-chilo']
// console.log(chooseOne(bookName))

// String Reverse 
function stringReverse(text) {
    let string = '';
    for (const element of text) {
        string = element + string
    }
    return string
}
let love = 'i love you'
// console.log(stringReverse(love))

// Calculate wood requerment
function quantity(chair, table, bad) {
    const chairWood = 3;
    const tableWood = 10;
    const badWood = 50;

    // calculate 
    let chairQuantity = chair * chairWood;
    let tableQuantity = table * tableWood;
    let badQuantity = bad * badWood
    let total = chairQuantity + tableQuantity + badQuantity;

    return total
}
// console.log(quantity(1, 1, 1))

// Find chepest phone from array of object 
const phones = [
    { name: 'nokia', price: 1000, quantit: 1 },
    { name: 'sumsang', price: 2000, quantit: 2 },
    { name: 'oppo', price: 3000, quantit: 3 },
    { name: 'walton', price: 4000, quantit: 4 }
];

// Find chepest phone from array of object 
function chepestPhone(phones) {
    let chepest = phones[0]
    for (const phone of phones) {
        if (phone.price < chepest.price) {
            chepest = phone
        }
    }
    return chepest
}

// console.log(chepestPhone(phones))

// Calculate Total quantity product price 
function totalPrice(produtcs) {
    let produc = 0;
    for (const product of produtcs) {
        let totalCost = product.price * product.quantit
        produc = produc + totalCost
    }
    return produc
}
// console.log(totalPrice(phones))

// Jungle Animal Counts 
function animalCount(miles) {
    const first10Miles = 10;
    const second10Miles = 50;
    const third10Miles = 100;
    if (miles <= 10) {
        let first10 = miles * first10Miles;
        return first10
    }
    else if (miles <= 20) {
        const firstDensAnimale = 10 * first10Miles;
        const restSecond = miles - 10;
        const secondDenseAnimal = restSecond * second10Miles;
        const totalAnimal = firstDensAnimale + secondDenseAnimal;
        return totalAnimal
    }
    else {
        const firstDensAnimale = 10 * first10Miles;
        const secondDensAnimale = 10 * second10Miles;
        const restSecond = miles - 20;
        const thirdDenseAnimal = restSecond * third10Miles
        const totalAnimal = thirdDenseAnimal + firstDensAnimale + secondDensAnimale;
        return totalAnimal
    }
}
// console.log(animalCount(30))

// Find Longest String in Array 
let friendName = ['yasin', 'foysal ahmed', 'hamza', 'uddinn shahaa']
function longString(arr) {
    let longest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    return longest
}
// console.log(longString(friendName))