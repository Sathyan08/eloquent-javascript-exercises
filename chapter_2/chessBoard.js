var leftJustified = "# # # # "
var rightJustified = " # # # #"

for (var num = 1; num <= 8; num ++){
  num % 2 === 0 ? output = rightJustified : output = leftJustified;
  console.log(output)
};
