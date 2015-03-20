function fizzBuzz(num) {
  first = '';
  second = '';

  if (num % 3 === 0){
    first = "Fizz"
  };

  if (num % 5 === 0){
    second = "Buzz"
  };

  sounds = first + second

  sounds.length > 0 ?  output = sounds : output = num;
  return output
};

console.log(fizzBuzz(1));

for (var number = 0; number <= 100; number ++)
  console.log(fizzBuzz(number));

