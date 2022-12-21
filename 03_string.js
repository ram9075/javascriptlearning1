var firstName = "rameshwarradheshwar";
console.log("given string is",firstName,);
console.log("total character in the string is :",firstName.length);
console.log("char at index 3 :",firstName.charAt(3));
var lengthtotal = firstName.length;
console.log("char at last index:",firstName.charAt(lengthtotal-3));

console.log("===========concat==========");
var firstName = "mohit";
var lastName = "sharma";
//concatenation using + operator
var result = firstName + lastName;
console.log("concatenation using + operator:", result);
var result = firstName.concat("ravesh",lastName);
console.log("concatenation using contact():", result);


var greet = "good morning";
var indexOf = greet. indexOf("m");
console.log("index of character m" ,indexOf);
var indexOfnin = greet. indexOf("nin");
console.log("index of substing ",indexOfnin);

var greet ="good morning";
var greetAfterReplace = greet.replace("mornig","afternoon");
console.log("Replace substring morning with afternoon :",greetAfterReplace);

console.log(greet.replace("mor","eve"));

console.log("To Upper case",greet.toUpperCase(""));
console.log("TO Lower Case",greet.toLowerCase());

console.log("includes()",greet.includes("good"));
 var greet = (" good morning ");




var myName = function(num1,num2,){
var result = num1*num2;
return result;
}

var res = myName(10,20,);
console.log(res);

var greet = "good morning";
var resultslice = greet.slice(0,4);
console.log("slice method",resultslice);

console.log("slice() with start index",greet.slice(4));


console.log("slice with index:",greet.slice(-7,-2));
console.log("slice with negetive start and end index :",greet.slice(-7,-2));

var studlist = "dips,jenny,ganni,manni,shani";
var studlistspit = studlist.split(",");
console.log("student list after spilt by char",studlist);
console.log("total number students:",studlistspit.length);


var sentence = "yes you can do it guys, just keep learning and practicing as well";
var wordsInsentence = sentence.split("");
console.log("total words in sentence string is",wordsInsentence.length);


console.log("=========string template=========");
console.log(`yes you can do it "sanket" `);


var firstName = "mohit";
var lastName = "sharma";
console.log("first name is: "+ firstName  + "last name is:"+ lastName); 
console.log(`first name is:${firstName} and last name is ${lastName}`);


console.log("=======back slach========");
console.log("hello ", "\ngood","\nmorning");
