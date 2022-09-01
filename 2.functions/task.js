// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      sum += arr[i];
    } else if(arr[i] > max) {
      max = arr[i];
      sum += arr[i];
    } else {
    sum += arr[i];
    }
  }
    avg = Number((sum  / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let sumElements = func(arrOfArr[i]);
    
    if(sumElements > max) {
      max = sumElements;
    }
  };
 
  return max;
}

console.log(makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker));



// Задание 3
function worker2(arr) {
  
  let min, max, resalt;
  min = max = arr[0];
  resalt = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min) {
      min = arr[i];
   }
    else {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
  };

  resalt = Math.abs(max - min);
    
  return resalt;
 }
 console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98