const { workerData, parentPort } = require('worker_threads');

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const result = fib(workerData.iterations);

parentPort.postMessage(result);