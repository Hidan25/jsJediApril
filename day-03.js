task 01
https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (val == false) {
    return "false";
  } else if (val == undefined) {
    return "false";
  } else if (val == null) {
    return "false";
  } else {
    return "True";
  }
}

task 02 
https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n) {
  if (n < 5) {
    return 100 * n;
  } else if (n >= 5 && n < 10) {
    return 95 * n;
  } else if (n >= 10) {
    return 90 * n;
  }
}

task 03
https://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    default:
      return " Enter the current month :)";
  }
}
