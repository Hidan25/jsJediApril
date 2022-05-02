Task 01 


Task 02
https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
function colorOf(r, g, b) {
  let stringRed;
  let stringGreen;
  let stringBlue;
  if (r < 16) {
    stringRed = "0" + r.toString(16);
  } else stringRed = r.toString(16);
  if (g < 16) {
    stringGreen = "0" + g.toString(16);
  } else stringGreen = g.toString(16);
  if (b < 16) {
    stringBlue = "0" + b.toString(16);
  } else stringBlue = b.toString(16);
  return `#${stringRed}${stringGreen}${stringBlue}`;
}
