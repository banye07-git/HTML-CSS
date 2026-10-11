
const fib = [0, 1];
for (let i = 2; i < 20; i++) {
    fib[i] = fib[i-1] + fib[i-2];
    fib.push(fib[i]);
}
console.log(fib);
document.write(`<p>The first 20 numbers in the Fibonacci series: ${fib.join(", ")}.</p>`);