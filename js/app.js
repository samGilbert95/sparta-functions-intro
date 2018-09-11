console.log("Working!");
// ===== FUNCTIONS =====

// ===== NAMED FUNCTIONS =====
//function addNum(){
//  console.log(number);
//  number++;
//};

// ===== ANONYMOUS FUNCTIONS =====
//var addNum = function(){
//  number++;
//  console.log(number);
//}

// ===== OBJECT FUNCTION =====
//var obj = new Object();
//obj.addNum = function(){
//  var result = 10+5;
//  console.log(result);
//}
//obj.addNum();

// ===== ES6 ARROW FUNCTIONS =====
//var n1 = 20;
//var n2 = 10;
//var addNum = (num1,num2) => {
//  number = num1 + num2;
//  return number;
//}
// ===== NESTED FUNCTIONS =====
//var no = addNum(n1,n2);
//console.log(no);
//var nestNo = addNum(addNum(5,6),no);
//console.log(nestNo);
var first = "Sam ";
var sur = "Gilbert";

var joinString = (string1,string2) => {
  var newString = string1 + string2;
  function logString(string){
    console.log(string);
    return string;
  }
  logString(newString);
  return newString;
}

joinString(first,sur);


// ===== SCOPE =====
// var outVar = 5;
//
// function doSome(){
//   var inVar = 10;
//   console.log(outVar);
// }

// function doSome(potato){
//   console.log(potato);                //Step 4: Log data passed from parent.
// }
// function doSomeTwo(potato){           //Step 2: Pass data to function.
//   console.log("Passed The Potato");
//   doSome(potato);                     //Step 3: Pass data to another function.
// }
// doSomeTwo('Careful: Hot Potato!');    //Step 1: Define Data.
