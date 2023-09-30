const fibonacci = function(number) {
    if (number < 0)
    {
        return "OOPS";
    }
  let count = [];
  let sum = 1;
  count.push(sum);
  for (let x = 0; x < parseInt(number) -1; x++ )
  {
    if (x == 0)
    {
        count.push(1);
    }
    else 
    {
        sum = sum + count[x-1];
        count.push(sum);
    }
  }
  return sum;

};

// Do not edit below this line
module.exports = fibonacci;
