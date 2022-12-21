var sscMarks = 39;
var resultPassOrFail = sscMarks>=35 ? "pass" :"fail";
console.log(`result is  ${resultPassOrFail}`);


 var sscResult = function(sscMarks){
 //var resultPassOrFail =  (sscMarks>=35 && (!sscMarks>100)) ?  "pass" :"fail";
 //var resultPassOrFail =  (sscMarks>=35 && sscMarks<100) ?  "pass" :"fail" 
 resultPassOrFail = (sscMarks < 0||sscMarks>100) ? "in valid data" :(sscMarks > 35 ? "pass" : "fail");
 return resultPassOrFail; 

}
console.log(`result is 23 ${sscResult(23)}`);
console.log(`result is 45  ${sscResult(45)}`);

console.log(`result is 1200 ${sscResult(1200)}`);
console.log(`resul is "ten"${sscResult("ten")}`);
console.log(`result is -10 ${sscResult(-10)}`);



console.log("=========assingement==========");



console.log("========gretest number=========");
var num1 = 10;
var num2 = -10;
var result = num1>=num2 ? num1 : unm2;
 console.log(`the gretest number is (10,-10):${result}`);

 var num1 = 800;
 var num2= 899;
 var result = num1>num2 ? num1 : num2;
 console.log(`the gretest number is (800,899):${result}`);




console.log("=======even or odd number==========");

var isEvenOrOdd =function(value){
var res = value%29==0 ? "even":"odd";
return isEvenOrOdd;
}
console.log(`the result is 29 :${res}`);




 var string = "javascript";
 var result = string.length;
 var res= result%2==0 ? "Even" : "Odd";
 console.log(`javascript length is even or odd: ${res}`);

 console.log("========string length even or odd=======");

var string = " google";
result = string.length;
var res = result%2==0 ? "even ":"odd";
console.log(`google length is even or odd : ${res}`);

var string = " devoloper";
result = string.length;
var res = result%2==0 ? "even ":"odd";
console.log(`devoloper length is even or odd : ${res}`);


console.log("============marriage elability male==============");
 var michal = 21;
 var faf = 17;
 var adam = 21; 
 var isEligibaleForMarrage = michal >= 21 ? " michal You are Eligibale for marriage" : " Sorry michal You are Not Elligibale"
 console.log(isEligibaleForMarrage);
 var isEligibaleForMarrage = faf >= 21 ? " faf You are Eligibale for marriage" : " Sorry faf You are Not Elligibale"
 console.log(isEligibaleForMarrage);
 var isEligibaleForMarrage = adam >=21 ? " adam You are Eligibale for marriage" : " Sorry adam You are Not Elligibale"
 console.log(isEligibaleForMarrage);

 console.log("=================marriage elability female==============");

 var priyanka = 25;
 radhika = 23;
 pooja = 21;

 var isEligibaleForMarrage = priyanka >= 23 ? " priyanka You are Eligibale for marriage" : " Sorry priyanka You are Not Elligibale"
 console.log(isEligibaleForMarrage);
 
 var isEligibaleForMarrage = radhika >= 25 ? " radhika You are Eligibale for marriage" : " Sorry radhika  You are Not Elligibale"
 console.log(isEligibaleForMarrage);
 var isEligibaleForMarrage = priyanka >= 22 ? " pooja You are Eligibale for marriage" : " Sorry pooja You are Not Elligibale"
 console.log(isEligibaleForMarrage);


