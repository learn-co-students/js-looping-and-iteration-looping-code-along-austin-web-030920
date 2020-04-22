const writeCards = (names, eventName) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        messages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}


const countDown = (num) => {
    let i = num;

    while (i >= 0) {
        console.log(i);

        i--;
    }
}