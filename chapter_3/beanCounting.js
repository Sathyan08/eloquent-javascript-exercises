function countChar(string, target){
  var count = 0;
  for(var index = 0; index < string.length; index ++){
    if (string.charAt(index) === target){
      count ++;
    };
  };

  return count
};

function countBs(string){
  return countChar(string, 'B')
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
