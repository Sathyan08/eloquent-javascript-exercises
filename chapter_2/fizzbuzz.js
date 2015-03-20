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
  return sounds
};

