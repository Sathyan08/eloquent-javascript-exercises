function range(start, end){
  array = [];

  for(var counter = start; counter <= end; counter ++){
    array.push(counter);
  };

  return array;
};

function sum(array){
  var counter = 0;

  for(var index = 0; index < array.length; index ++){
    counter += array[index];
  };

  return counter;
};

console.log(range(1,3));
