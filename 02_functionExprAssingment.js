var square = function(num){
 console.log("square of", num,num*num);
}
console.log(typeof square);
square(5);
square(6);
square(25);
square(100);

swapvalues("virat","anushka");
console.log("========swap value function========");
function swapvalues(value1,value2){
 console.log("before swap",value1,value2);
 var temp = value1;
 var value1 = value2;
 var value2 = temp;
 console.log("after swap", value1,value2);
}
swapvalues("1000","2000");

function add( value1,value2){
}