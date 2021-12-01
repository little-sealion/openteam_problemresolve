function fibonacci(n) {
  if (n < 0) return;
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let result = fibonacci(i);
    arr.push(result);
  }
  return arr;
}
let test = fibonacciSeries(10);
console.log(test);
