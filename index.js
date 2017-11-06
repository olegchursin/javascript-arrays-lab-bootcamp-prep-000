const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}


function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
