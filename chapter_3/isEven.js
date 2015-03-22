function isEven(num){
  num > 0 ? (absolute = num) : (absolute = - num);

  if (absolute === 0){
    return "even"
  } else if (absolute === 1){
    return "not even"
  } else {
    var minusTwo = absolute - 2
    return isEven(minusTwo)
  };
};
