// Fibonacci Seried
function fibonaccSeries(number) {
    let n1 = 0, n2 = 1, next;
    for (let i = 0; i <= number; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}

fibonaccSeries(10);

var fibonacciFN = {
    fibonacci: function (n) {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) +
            this.fibonacci(n - 2);
    }
};

console.log(fibonacciFN.fibonacci(9))



