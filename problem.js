function anaToVori(ana) {
    var vori = ana / 16
    return vori
}
// console.log(anaToVori(64))

function pandaCost(shing, shomu, gila) {
    var shingara = shing * 7
    var shomucha = shomu * 10
    var gilapi = gila * 15
    // calculate
    var total = shingara + shomucha + gilapi
    return total
}
// console.log(pandaCost(2, 2, 2))

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
console.log(oddFriend(friend))