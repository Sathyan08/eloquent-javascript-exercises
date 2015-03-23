function min(first, second){
  (first > second) ? output = second : output = first ;
  return output
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
