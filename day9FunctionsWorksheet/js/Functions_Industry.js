
 /*
Yanely Ramirez
Industry
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //Find an industry problem to solve

 //Roofing Problem:

 //Given

 var roofWidth = 120;

 var roofLength = 120;

 var roofArea = roofLength*roofWidth;

 console.log("The area of your roof is "+roofArea+" inches.");

 alert("You will be able to insert numbers and check to see if it meets the requirements.");

 var userWidth = prompt("What is your desired width?");

 var userLength = prompt("What is your desired length?");

 //Insert a function
 function area (length, width){

  //Insert what you want to do with your numbers
  var area = length * width;

  //Now return your results
  return area;

 }

 //Function Call
 var userRoofArea = area(userLength, userWidth);








