
 /*
Yanely Ramirez
Personal Function
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //DISCLAIMER: I hate soda and am only doing this for the purpose of this assignment and no more.

 //Let's start a personal problem

 //Let's find the volume of a soda can
 //This is a personal problem for me because I like to drink a lot

 //Prompt the user on what their radius and height is for the can

 var radius = prompt("What is the radius of your can (inches?");

 //Prompt the user on what their height is for the can

 var height = prompt("What is the height of your can (inches)?");
 

 //Formula to calculate volume is: pi * r * r * h

 function cylinderVolume (radius, height){

  var area = Math.PI * radius * height;
  return area;



 }

//Function Call
var returnedVolume = cylinderVolume(radius, height);
console.log("The volume of your can is "+returnedVolume+" cubic inches.");
