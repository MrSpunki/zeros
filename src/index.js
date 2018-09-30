module.exports = function getZerosCount(number) {
  
  var zero = 0;
  
  while(number > 0) {
    number = Math.floor(number / 5);
     zero += number;
  }
  
  return zero;
  
}
