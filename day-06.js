task 01
https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  let num = 0;
  while (num < bound) {
    num = num + divisor;
    if (num > bound) {
      return num - divisor;
    }
  }
  return num;
}

Task 02
https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}
Task 03 
https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {                                      //or
  let arr = ['zero','one','two','three','four'];               //  let arr = ['zero','one','two','three','four','five'];
  return arr.length;                                           // return arr.indexOf('five');
}
