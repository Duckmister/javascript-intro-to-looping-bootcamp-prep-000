

function forLoop(array){
  for (var i=0; i<26; i++){
    if(i===1){
      array.push('I am 1 strange loop.');
    } else{
      array.push('I am ' + ${i} + ' strange loops.')
    }
  }
  return array
}

var array = {}

function forLoop(array){
  for (var i = 0; i < 26; i++){
    if (i===1){
    array.push("I am " ${i} " strange loop.");
    }
    else{
      array.push("I am " ${i} " strange loops.");
    }
  }
  return array;
}

function whileLoop(n){
  while (n>0){
    return --n;
  }
  if (n=0){
    return "done";
  }
}
