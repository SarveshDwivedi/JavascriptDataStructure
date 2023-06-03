// Recursive function

let counter = 1;

function recursivefn(num) {
    if (counter > num) {
        return;
    }

    console.log("Counter=>", counter)
    counter++
    recursivefn(num)
}

recursivefn(10);