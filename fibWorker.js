const { Worker } = require('worker_threads');

const doFib = async (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker('./w.js', {
      workerData: {
        iterations
      }
    });

    worker.once('message', (data) => {
      console.log(`worker [${worker.threadId}]: done in ${Date.now() - start} ms`);
      resolve(data);
    });

    worker.once('error', (err) => reject(err));
  });
}

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