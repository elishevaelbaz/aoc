function findEarliestBus(timeStamp, busIds){
  let earliestTime = Infinity;
  let id;
  let minWait;
  for (let i = 0; i < busIds.length; i++) {
    // assuming none of them will be zero wait (exactly on the timeStamp)
    let busMultiple = Math.floor(timeStamp / busIds[i]) + 1;
    if (busMultiple * busIds[i] < earliestTime){
      earliestTime = busMultiple * busIds[i];
      minWait = earliestTime - timeStamp;
      id = busIds[i];
    }
  } 

  return minWait * id;
}

const buses = [23,41,37,479,13,17,29,373,19]
console.log(findEarliestBus(1000417, buses))