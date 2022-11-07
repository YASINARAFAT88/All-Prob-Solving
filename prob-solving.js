// 1
function inchecToFeet(inches) {
    var feet = inches / 12
    return feet
}
var books = inchecToFeet(36)
// console.log(books)

// 2
function kmTomiles(miles) {
    var km = miles * 1.60934;
    return km
}

var km = kmTomiles(2)
// console.log(km)

// 3
function eventNumber(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true
    }
    return false
}
// console.log(eventNumber(2024))

// 4
function getFect(num) {
    var fect = 1;
    for (var i = 1; i <= num; i++) {
        fect = fect * i
    }
    return fect
}
// console.log(getFect(9))

// 4.2
// Fectorial Reverse 
function getFectRev(num) {
    let fecto = 1;
    for (let i = num; i >= 1; i--) {
        fecto = fecto * i;
    }
    return fecto
}
// console.log(getFectRev(7))

// 5
// Ludo Code
for (let i = 0; i <= 20; i++) {
    const output = Math.random() * 6;
    let random = Math.round(output)
    // console.log(random)
}

// 6
// Find Largest Number 
function largestNum(num1, num2, num3) {
    var large = Math.min(num1, num2, num3)
    return large
}

// console.log(largestNum(23, 43, 65))

// 7
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

// 8
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

// 9
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

// 10
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

// 11
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

// 12
// Choose One for me 
function chooseOne(items) {
    var item = items[Math.round(Math.random() * items.length)];
    return item
}
let bookName = ['monjhumir', 'moddahubela', 'sedin', 'amoni', 'srabon-chilo']
// console.log(chooseOne(bookName))

// 13
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

// 14
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

// 15
// Find chepest phone from array of object 
const phones = [
    { name: 'nokia', price: 1000, quantit: 1 },
    { name: 'sumsang', price: 2000, quantit: 2 },
    { name: 'oppo', price: 3000, quantit: 3 },
    { name: 'walton', price: 4000, quantit: 4 }
];
// 15
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

// 16
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

// 17
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

// 18
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

//Assignment Complate

// 19
function anaToVori(ana) {
    var vori = ana / 16
    return vori
}
// console.log(anaToVori(64))

// 20
function pandaCost(shing, shomu, gila) {
    var shingara = shing * 7
    var shomucha = shomu * 10
    var gilapi = gila * 15
    // calculate
    var total = shingara + shomucha + gilapi
    return total
}
// console.log(pandaCost(2, 2, 2))

// 21
function picnicBudget(num) {
    var first100 = 5000
    var second200 = 4000
    var third200 = 3000
    if (num <= 100) {
        var first100people = num * first100
        return first100people
    } else if (num <= 200) {
        var first100people = 100 * first100
        var firstRest = num - 100
        var second200People = firstRest * second200
        var restPeople = second200People + first100people
        return restPeople
    } else if (num <= 300) {
        var first100people = 100 * first100
        var second200People = 100 * second200
        var firstRest = num - 200
        var rest = firstRest * third200
        var total = first100people + second200People + rest
        return total
    }
}
// console.log(picnicBudget(204))

// 22
function oddFriend(list) {
    let oddFr = [];
    for (let i = 0; i < list.length; i++) {
        const len = list[i].length;
        if (len % 2 !== 0) {
            oddFr.push(list[i]);
        }
    }
    return oddFr;
}
var friend = ['foysal', 'asa', 'arafat', 'ahmed'];
// console.log(oddFriend(friend))

//-----New Problem Concetual---------

// 23
// Count Vowel in string 
function countVowel(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter == 'a' || letter == "e" || letter == "i" || letter == "o" || letter == "u")
            count = count + 1
    }
    return count
}
let word = 'hello im yasin arafat'
// console.log(countVowel(word))

// 24
//Mular kg count price per kg + Error Handle
function mularKg(quantity) {
    if (typeof quantity != 'number') {
        return 'plz input valied quantity'
    }
    let price = 0;
    if (quantity <= 2) {
        price = quantity * 30;
    } else {
        price = quantity * 25;
    }
    return price
}
// console.log(mularKg(3))

// 25
// Electricity Bill Count 
function elctricityBill(unit) {
    let bill = 0;
    if (unit <= 100) {
        bill = unit * 5
    } else if (unit <= 200) {
        let firstBill = 100 * 5
        let remaining = (unit - 100) * 6;
        bill = remaining + firstBill
    } else if (unit > 200) {
        let firstBill = 100 * 5
        let secondBill = 100 * 6
        let remaining = (unit - 200) * 7;
        bill = remaining + firstBill + secondBill
    }
    return bill
}
// console.log(elctricityBill(300))

// 26
//Find 80+ in Array
function find80Plus(mark) {
    if (Array.isArray(mark) != true) {
        return 'plz input array'
    }
    for (let i = 0; i < mark.length; i++) {
        let element = mark[i]
        if (element >= 80) {
            return true
        }
    }
    return false;
}
// console.log(find80Plus([21, 43, 80]))

// 27
//Find Second Largest Number in Array Perfectly
function secondLargest(number) {
    let largest = 0;
    let secondlarge = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i]
        if (element > largest) {
            secondlarge = largest
            largest = element
        } else if (element > secondlarge) {
            secondlarge = element
        }
    }
    return secondlarge
}
// console.log(secondLargest([21, 34, 56, 87, 97, 89, 95]))