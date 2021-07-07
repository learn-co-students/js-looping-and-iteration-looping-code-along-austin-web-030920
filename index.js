// Code your solutions in this file



function writeCards(array, string) {
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return newArray
}


function countDown(integer) {
    let counter = integer
    while (counter >= 0) {
         console.log(counter--);
    }
}