Task 01
http://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str, n) {
  let newStr = str;
  let newN = n;
  while (newN > 0) {
    if (newN % 2 === 1) {
      newStr = "*" + newStr;
    } else {
      newStr = newStr + "*";
    }
    newN--;
  }
  return newStr;
}
task 02 
http://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return [odd, even];
}
