// Code your solutions in this file
const array= []
function writeCards(recepiants, feeling) {
    console.log("recepiants", recepiants);
    console.log(feeling);
    
    for (let i = 0; i < recepiants.length; i++) {
    array.push(`Thank you, ${recepiants[i]}, for the wonderful ${feeling} gift!`);
    debugger;
    }
        return array;
}

function countDown(i) {
    while (i > 0) {
        console.log(i);
        i--;
    }
 console.log(i)
}
