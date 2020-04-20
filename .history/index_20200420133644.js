// Code your solutions in this file
function writeCards(array, string) {
    let messages = [];
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);

    }
    return messages;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
        i--
    }
}