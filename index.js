function hasTargetSum(array, target) {
  // Write your algorithm here
  let checkedNums = new Set();
  for (let num of array){
    let complement = target - num;
    if (checkedNums.has(complement)) return true;
    checkedNums.add(num);
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  time O(3n + 2)
  space O(n)
*/

/* 
  Add your pseudocode here
  create empty object 
  itterate over an array
  create complement number by subtracting from target 
  check to see if created object has complement number as a key, if so then return true
  push complement number into object
  return false if no complement number in object once itteration completes
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
