//your JS code here. If required.
let myPromise1 = new Promise((resolve, reject) => {
  let startTime = new Date();
  setTimeout(() => {
    let endTime = new Date();
    let timeTaken = (endTime - startTime) / 1000; // to convert ms to seconds
    resolve(timeTaken);
  }, 2000);
});
let myPromise2 = new Promise((resolve, reject) => {
  let startTime = new Date();
  setTimeout(() => {
    let endTime = new Date();
    let timeTaken = (endTime - startTime) / 1000; // to convert ms to seconds
    resolve(timeTaken);
  }, 2000);
});
let myPromise3 = new Promise((resolve, reject) => {
  let startTime = new Date();
  setTimeout(() => {
    let endTime = new Date();
    let timeTaken = (endTime - startTime) / 1000; // to convert ms to seconds
    resolve(timeTaken);
  }, 2000);
});

// Do similar for myPromise2 and myPromise3

Promise.all([myPromise1, myPromise2, myPromise3]).then((result) => {
  // Remove 'Loading...' from the table
  document.getElementById('output').innerHTML = '';

  // Iterate over the results and add each one to the table
  result.forEach((time, index) => {
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    
    cell1.innerText = `Promise ${index + 1}`;
    cell2.innerText = time.toFixed(3); // to match the format expected

    row.appendChild(cell1);
    row.appendChild(cell2);
    
    document.getElementById('output').appendChild(row);
  });

  // Add the total time (max time) to the table
  let maxTime = Math.max(...result);
  let row = document.createElement('tr');
  let cell1 = document.createElement('td');
  let cell2 = document.createElement('td');

  cell1.innerText = 'Total';
  cell2.innerText = maxTime.toFixed(3); // to match the format expected

  row.appendChild(cell1);
  row.appendChild(cell2);

  document.getElementById('output').appendChild(row);
});