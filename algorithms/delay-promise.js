/*
Write a function that returns a promise that resolves after n milliseconds
*/

function delay(n) {
  new Promise((resolve) => {
    setTimeout(() => resolve(console.log("done waiting")), 1000);
  });
}

(async () => {
  console.time("test");
  await delay(1000);
  console.timeEnd("test");
})();
