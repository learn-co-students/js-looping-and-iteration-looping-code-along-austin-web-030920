// Code your solutions in this file



function writeCards(names, message) {
    let cards = []
    for (let index = 0; index < names.length; index++) {
        cards.push("Thank you, " + names[index] + ", for the wonderful " + message + " gift!")
    }
    return cards
}

function countDown(num) {
    let count = num
    while (count >= 0) {
        console.log(count)
        count -= 1
    }
    
    
}