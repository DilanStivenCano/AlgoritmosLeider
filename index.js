const number = 3;
for(var i=1; i<number; i++){
  console.log(number-i)
  if (number%3 === 0) {
  console.log('by 3');
}if(number%5 === 0){
  console.log("by 5")
}if(number%3 === 0 & number%5 === 0){
  console.log("by both")
}
}