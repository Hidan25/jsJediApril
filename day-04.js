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
task 03
http://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
      if (bag.length == 3) break;
    } else {
      continue;
    }
  }

  return bag;
}
