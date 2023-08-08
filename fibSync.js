function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const doFib = (iterations) => new Promise((resolve) => {
  const start = Date.now();
  const result = fib(iterations);
  console.log(`doFib done in: ${Date.now() - start} ms`);

  resolve(result);
});

const main = async() => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log(`main calculation done in: ${Date.now() - start} ms`);
  console.log(values);
}

main();