function writeCards(array, event) {
    var newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(number){
    let countDown = 0;
    while (countDown <= number) {
        console.log(number--)
    }
}