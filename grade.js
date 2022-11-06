// var number = 39
let string = 'dmwj'
const boolean = true;

let num = 5
let num2 = 4
let res = num % num2
// console.log(res)
if (num >= num2) {
    // console.log(true)
}
let number = 7
while (number < 19) {
    number++
    // console.log(number)
}
let array = [32, 45, 76, 78, 12, 56, 78];
array[4] = 13
// console.log(array.indexOf(13))

function multiplication(num1, num2, num3) {
    let result = num1 * num2 * num3
    return result
}
// console.log(multiplication(5, 3, 4))
let obj = { book: 'monjhumir', pages: 360, writer: 'shondhi' }
obj.writer = 'yasin'
// console.log(obj)

function feetToInch(feet) {
    let inches = feet * 12
    return inches
}
// console.log(feetToInch(3))
function centimeterTometer(centimeter) {
    let miter = centimeter / 100
    return miter;

}
// console.log(centimeterTometer(1400))
function pageCount(page1, page2, page3) {
    let bookOne = 100;
    let bookTwo = 200;
    let bookThree = 300;

    // calculate
    let page1Book = page1 * bookOne;
    let page2Book = page2 * bookTwo;
    let page3Book = page3 * bookThree;
    let totalpages = page1Book + page2Book + page3Book;
    return totalpages
}
// console.log(pageCount(2, 3, 4))

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

let nagetive = [21, 32, 54, 76, 89, 90, 54, 34];
function plusThirtFive(number) {
    let count = []
    for (let i = 0; i < number.length; i++) {
        let num = nagetive[i]
        if (num[i] > 35) {
            count.push(num)
        }
    }
    return count
}
console.log(plusThirtFive(nagetive))