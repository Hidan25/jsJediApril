Task 01
https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  sub = body.substr(body.length - tail.length);
  if ((sub = tail));
  return true;
}
Task 02
https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}
Task 03
https://www.codewars.com/kata/5a58d889880385c2f40000aa
function automorphic(n) {
  return Math.pow(n, 2).toString().endsWith(n) ? "Automorphic" : "Not!!";
}
