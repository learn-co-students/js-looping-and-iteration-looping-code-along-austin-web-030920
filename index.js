// Code your solutions in this file

function writeCards(arry, event) {
    let coll = [];
    for (let i = 0; i < arry.length; i++ ) {
        coll.push(`Thank you, ${arry[i]}, for the wonderful ${event} gift!`);
    }
    return coll;
};

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
};