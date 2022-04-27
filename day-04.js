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
