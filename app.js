
document.write("<hr>");
document.write("<b>" + "JavaScript Assignment from 1 to 67 Chapters" + "</b>" + "<br>");
document.write("<hr>");

document.write("<hr>");
document.write("<b>" + "Chpater 1 Alert" + "</b>" + "<br>");

document.write("<hr>");



// =====================
// Q 1. Write a script to greet your website visitor using JS alert box.

// alert("Welcome to our website.");





//==================
// 2. Write a script to display following message on your web  page:


// var user = prompt("Enter your password");
//    if(user === null){
//     alert("Enter! please enter a valid password. ");
//    }else {
//        alert("Thank you and welcome");
//    }









//===============
// 3. Write a script to display following message on your web page: (Hint : Use line break)

//  alert("Welcome to JS land."  +  "\n" +  "Happy Coding!");








//==============
// 4. Write a script to display following messages in sequence:

//first alert message
// alert("Welcome to JS land.");

//second alert message
// alert( "Happy Coding!");










//================
// 5. Generate the following message through browser’s developer console:

// var msgToConsole = alert("Hello.. I can run JS through my web browser's console.");


//Message show in console
// console.log(msgToConsole);








//================== 
// 6. Make use of alerts in your new/existing HTML & CSS project.

// i USED it in my proect like that:
// function myButton(){
// var buuton = document.getElementById("button");
// button = alert("click me");
// }





//       End chapter 1
document.write("<br><br><br>");


document.write("<hr>");
document.write("<b>" + "Chpater 2 Variables for strings" + "</b>" + "<br>");
document.write("<hr>");

document.write("<br><br><br>");

//=================
// 1. Declare a variable called username.
var username;




//=====================
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = 'Govind Rai';






//===================
//  3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var titleMesaage = "Hello World";
// alert(titleMesaage);





//==============
//  4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var bioData = [
    name = "Govind Rai",
    age = 234,
    Dept = "Mobile App Development "

]

// for (i=0; i < bioData.length ; i++){
// document.write(bioData +"<br>");
// }







//=============
// 5. Write a script to display the following alert using one JS variable

var showAlert = "PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(showAlert);





//============
// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "govindrai024@gmail.com";

// alert(" My email address is : " + email);








// ====================

//  7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
// alert(book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript");

// 9. Store following string in a variable and show in alert and browser through JS

var showImg = '           ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(showImg);



//   End chapter 2


document.write("<br><br><br>");
//======= Chapter 3 Start

//==end chapter 3
document.write("<hr>");
document.write("Chapter 3 Variable for numbers" + "<br><br>");
document.write("<hr>");

document.write("<br><br><br>");




//================
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 23;
// alert(" I am "+age + " years old.");






// =============

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”

// var user 
// var trackingPeople 





// ================
// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 1996;
// document.write("My birth year is: " + birthYear);
// document.write("<br>"+  " Data type of my declared variable is: "+typeof(birthYear));







// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var visiterName = ' Babu bhai ';
var productTitle = ' T-shirt ';
var quantity = 5;
var clothCenterName = ' www.xyzClothing.com ';

document.write(visiterName + " ordered " + quantity + productTitle + " on " + clothCenterName + ' Clothing store.');








document.write("<br><br><br>");
//              End chapter 3

//              Start  chapter 4

document.write("<hr>");
document.write("Chapter 4 Variable Names: legal and Illegal" + "<br><br><br>");
document.write("<hr>");
document.write("<br><br><br>");





// 1. Declare 3 variables in one statement.
var x, y, z;

// 2. Declare 5 legal & 5 illegal variable names.

// legal variables
var book;
var bookName;
var BoodId;
var book_page_number
var $bookAutherName



// Illegal variables
// var 13book;
// var -bookname;
// var Boodid21;
// var book page number
// var bookauthername

// 3. Display this in your browser

// a) A heading stating “Rules for naming JS variables”

document.write("Rules for naming JS variables." + "<br><br>");

// b) Variable names can only contain ______, ______,
// ______ and ______For example $my_1stVariable

document.write(" Variable names can only contain, numbers, $ , and _. For example: $my_1stVariable." + "<br>");

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name

document.write("Variables must begin with a letter, $ or _. For example $name, _name or name." + "<br>");


// d) Variable names are case _________
document.write("Variable names are case sensitive." + "<br>");

// e) Variable names should not be JS _____________

document.write("Variable names should not be JS keywords.");



document.write("<br><br><br>");


//                  end chapter 4


//                  Start  chapter 5


document.write("<hr>");
document.write(" Start Chapter 5 Math Experssion  ");
document.write("<hr>");
document.write("<br><br><br>");

//=======================
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<hr>");
document.write(" 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser." + "<br><br>");

var a = 3;
var b = 5;
var c = a + b;
document.write(" Sum of 3 and 5 is: " + c + "<br><br>");








//============================
document.write("<hr>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("2. Repeat task1 for subtraction, multiplication, division & modulus." + "<br><br>");



// // subtraction
var c = a - b;
document.write(" Substraction  of 3 and 5 is: " + c + "<br>");

// Multiplication
var c = a * b;
document.write(" Multiplication  of 3 and 5 is: " + c + "<br>");

//  Division
var c = a / b;
document.write(" Division  of 3 and 5 is: " + c + "<br>");

// modulus
var c = a % b;
document.write(" Modulus of 3 and 5 is: " + c + "<br> <br>");


document.write("<hr>");

document.write("3. Do the following using JS Mathematic Expressions" + "<br>");

// a. Declare a variable.
var test;

// b. Show the value of variable in your browser like “Value  after variable declaration is: ??”.
document.write("a & b. Value  after variable declaration is: " + test + "<br>");

// c. Initialize the variable with some number.
var num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("c & d. Initial value: " + num + "<br>");

// e. Increment the variable.
var num = ++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("e & f. Value after increment is " + num + "<br>");

// g. Add 7 to the variable after addition is: 13”.
num += 7;
document.write("g & h. Value after additon is: " + num + "<br>");

// i. Decrement the variable.
var num = --num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("i & j. Value after additon is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var num = num % 3;

// l. Output : “The remainder is : 0”.
document.write("k & l. The remainder is : " + num + "<br><br>");










//=============================
document.write("<hr>");

document.write(" 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output." + "<br><br>");

var costOfTicket = 6000;
var totalCost = costOfTicket * 5;

document.write("Total cost to buy 5 ticket to a movie is: " + totalCost + "PKR");












//===================
document.write("<hr>");


document.write("  5. Write a script to display multiplication table of any number in your browser. E.g." + "<br><br>");

// var table = +prompt("Enter table value: ");

// for (var i = 1; i <= 10; i++ ){
//     document.write(+ table + "x" + i + "="+ table*i+ "<br>");
// }








//========================
document.write("<hr>");

document.write(" 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here." + "<br><br>");


// a. Store a Celsius temperature into a variable.
var CelTemp = 25;
var CelToF = (CelTemp * 9 / 5) + 32;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.write("a. 25  &#176C is: " + CelToF + " &#176f" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var FTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var FToCel = ((FTemp - 32) * 5 / 9);
document.write("c&d. 70  &#176F is: " + FToCel + " &#176C");












//==================
document.write("<hr>");


document.write(" 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable." + "<br><br>");

document.write("<br>" + "<b>" + " Shopping Cart" + "</b>" + "<br><br>");

// a. Price of item 1
var priceOfItem1 = 650;

// b. Price of item 2
var priceOfItem2 = 100;

// c. Ordered quantity of item 1
var OrderQuantity1 = 3;

// d. Ordered Quantity of item 2
var OrderQuantity2 = 7;

// e. Shipping charges
var ShippingCharges = 100;

// Compute the total cost & show the receipt in your browser.


var totalCost = priceOfItem1 * OrderQuantity1 + priceOfItem2 * OrderQuantity2 + ShippingCharges;


document.write("Price of item 1 is : " + priceOfItem1 + "<br>" + "Quantity of item 1 is :" + OrderQuantity1 + "<br>" + "Price of item 2 is : " + priceOfItem2 + "<br>" + "Quantity of item 2 is :" + OrderQuantity2 + "<br>" + "Shipping Charges : " + ShippingCharges + "<br><br>" + "Total cost of your order is : " + totalCost);













//===============
document.write("<hr>");

document.write(" 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser." + "<br><br>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;

document.write("Total Marks: " + totalMarks + "<br>")
document.write("Obtained Marks: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%")






//=====================
document.write("<hr>");

document.write("9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee " + "<br><br>");

var dollar = 104.80;
var dollars = 10;
var saudiRiyal = 28;
var saudiRiyals = 25;

totalUsDollars = dollar * dollars;
totalSaudiyals = saudiRiyal * saudiRiyals;

totalCurrrency = totalUsDollars + totalSaudiyals;


document.write("<br>" + "<b>" + " Currency in PKR" + "</b>" + "<br><br>");

document.write("Total Currency is PKR: " + totalCurrrency);














//=====================
document.write("<hr>");

document.write("10. Write a program to initialize a variable with some number and do arithmetic in following sequence: " + "<br><br>");

var num1 = 20;
//  a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression

num1 = num1 + 5 * 10 / 2;
document.write("Total sum of expression is: " + num1);














//=====================
document.write("<hr>");

document.write("11. The Age Calculator: Forgot how old someone is? Calculate it! " + "<br><br>");

// a. Store the current year in a variable.
var currentYear = 2020;

// b. Store their birth year in a variable.
var birthYear = 1996

// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NNyears old”.
age = currentYear - birthYear;

document.write("Current year is: " + currentYear + "<br>");
document.write("birth year is: " + birthYear + "<br>");
document.write("Your Age is: " + age);














//=====================
document.write("<hr>");

document.write("12. The Geometrizer: Calculate properties of a circle. " + "<br><br>");

document.write("<br>" + "<b>" + "The Geometrizer " + "</b>" + "<br><br>");

// a. Store a radius into a variable
var radius = r;
var π = 3.142;
var r = 20;
var circumference = 2 * π * r;
var area = π * (r * r);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



document.write("The radius of circle is: " + r + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");
















//=====================
document.write("<hr>");

document.write("13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. " + "<br><br>");

document.write("<br>" + "<b>" + "The LifeTime Supply Calculator " + "</b>" + "<br><br>");

// a. Store your favorite snack into a variable
var favSnack = 'Twinkies';

// b. Store your current age into a variable.
var currentAge = 23;

// c. Store a maximum age into a variable.
var MaxAge = 24;

// d. Store an estimated amount per day (as a number).
var estimateAmPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life.

var restOflife = MaxAge - currentAge;
var year = 365;
var totalEat = ((restOflife * year) * estimateAmPerDay);

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


document.write("Favourite Snack: " + favSnack + "<br>" + "Current age: " + currentAge + "<br>" + "Estimated Maximum Age: " + MaxAge + "<br>" + " Amount of snacks per day: " + estimateAmPerDay + "<br>" + " You will need  " + totalEat + " to last you until the ripe old age of  " + restOflife + "<br>");













//                        end chapter 5


document.write("<hr>");
document.write("Math Experssion Assignment / chpater 5 End");
document.write("<hr>");

document.write("<br><br><br>");




//                     start  chapter 6




document.write("<hr>");
document.write("Start  Chapter 6 to 9 Math Experssion ");
document.write("<hr>");

document.write("<br><br><br>");


//============
document.write("<hr>");

document.write("1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser. " + "<br><br>");

// var a = 10;
// document.write("Result" + "<br>");
// document.write("The value of a is: " + a + "<br>");

// document.write("........................." + "<br><br>");

// a = ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now value of a is: " + a + "<br><br>");

// // ...
// a = 11;
// document.write("The value of a++ is:" + a + "<br>");


// a + a++;
// document.write("Now value of a is: " + a + "<br><br>");

// // ......
// a = 11
// document.write("The value of --a is: " + a + "<br>");


// a = --a;
// document.write("Now value of a is: " + a + "<br><br>");

// // ....
// a = 11;
// document.write("The value of a-- is: " + a + "<br>");


// a = a--;
// document.write("Now value of a is: " + a + "<br><br>");




















document.write("<hr>");
//========
// document.write("2. What will be the output in variables a, b & result after execution of the following script:. " + "<br><br>");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("resutl is " + result + "<br><br>");

// --a;
// var result = --a;
// document.write("resutl is  " + result + " --a of a Prefix Decrement " + "<br>");

// --a - --b
// var result = --a - --b;
// document.write("resutl is  " + result + " --a - --b of a and b Prefix Decrement  " + "<br>");

// var result = --a - --b + ++b + b--;
// document.write("resutl is  " + result + "  of  --a - --b + ++b + b-- a and  b Prefix Decrement and Prefix Inrement and Post Decrement of b" + "<br>");



















//===========
document.write("<hr>");

document.write("3. Write a program that takes input a name from user & greet the user. " + "<br><br>");

// var nameOfuser = prompt("Enter your name: ");
// alert("Welcome to my JS world"+nameOfuser);











//============= Q5
document.write("<hr>");


document.write("5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default " + "<br><br>");


// var table = +prompt("Enter table value: ");
// table =5

// if (table == " "){
//     table;
// }else{
//     for (var i = 1; i <= 10; i++ ){
//         document.write(+ table + "x" + i + "="+ table*i+ "<br>");
//     }

// }












//========== 6
document.write("<hr>");


document.write(" 6. Take " + "<br><br>");

// a) Take three subjects name from user and store them in 3 different variables.

// var firstSub = prompt("Enter first subject:" );
// var secondSub = prompt("Enter second subject: "  );
// var thirdSub = prompt("Enter third subject:" );


// // b) Total marks for each subject is 100, store it in another variable.

// var totalMarkss1= 100;
// var totalMarkss2= 100;
// var totalMarkss3= 100;



// // c) Take obtained marks for first subject from user and stored it in differentvariable.

// var obtainedMarks1 = +prompt("Enter first subject obtained marks: ");

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// var obtainedMarks2 = +prompt("Enter second subject obtained marks: ");

// var obtainedMarks3 = +prompt("Enter third subject obtained marks: ");

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// // calculate percentage
// percentge1 = obtainedMarks1*100/totalMarkss1;
// percentge2 = obtainedMarks2*100/totalMarkss2;
// percentge3 = obtainedMarks3*100/totalMarkss3;

// // calculate  final total percentage
// finnalPer = percentge1 + percentge2 + percentge3;

// // final total ob marks
// Fobtotal = obtainedMarks1 + obtainedMarks2 +obtainedMarks3;

// // final total marks

// FtotalMark = totalMarkss1 + totalMarkss2 + totalMarkss3;

// const  firstsub1 =  document.getElementById('firstsubject').innerHTML =firstSub;
// const  firstsub2 =  document.getElementById('secondsubject').innerHTML =secondSub ;
// const  firstsub3 =  document.getElementById('thirdsubject').innerHTML =thirdSub;


// const  totalMark1 =  document.getElementById('totalMarks1').innerHTML =totalMarkss1;

// const  totalMark2 =  document.getElementById('totalMarks2').innerHTML =totalMarkss2;
// const  totalMark3 =  document.getElementById('totalMarks3').innerHTML =totalMarkss3;

// const  obMrk1 =  document.getElementById('obtainMarks1').innerHTML =obtainedMarks1;
// const  obMrk2 =  document.getElementById('obtainMarks2').innerHTML =obtainedMarks2;
// const  obMrk3 =  document.getElementById('obtainMarks3').innerHTML =obtainedMarks3;

// const  Prec1 =  document.getElementById('PercentageOfmarks1').innerHTML =percentge1+ "%";
// const  Prec2 =  document.getElementById('PercentageOfmarks2').innerHTML =percentge2+ "%";
// const  Prec3 =  document.getElementById('PercentageOfmarks3').innerHTML =percentge3 + "%";


// const  finalTotalMrk =  document.getElementById('finalTotalMarks').innerHTML =+FtotalMark ;
// const  finalTotalObMrk =  document.getElementById('finalTotalObMrks').innerHTML = +Fobtotal;
// const  finalTotalObPerc =  document.getElementById('finalTotalPercetange').innerHTML =+ finnalPer + "%";








//========================== End Chapter 6 to 9
document.write("<br><br><br>");

document.write("<hr>");
document.write("<hr>");
document.write("  End Chapter 6 to 9 Math Experssion ");
document.write("<hr>");






document.write("<br><br><br>");

//==========================
document.write("<hr>");
document.write(" Start 9 to 11  User inputs and conditional Statements  ");
document.write("<hr>");

document.write("<br><br><br>");



document.write(" 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”" + "<br><br>");


// var user2 = prompt("Enter city: ");

// if (user2) {
//     user2 == karachi;
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome");
// }











//================
document.write("<hr>");

document.write(" 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am." + "<br><br>");

// var gender = prompt("Enter your gender: ")

// if(gender == 'male'){
//     document.write("Good Morning Sir.")
// }else{
//     document.write("Good Morning Ma'am.")
// }















document.write("<hr>");


//===============
document.write(" 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: " + "<br><br>");

document.write("<table>");
document.write("<tr>");
document.write("<th>" + " " + "Single color" + " " + "</th>");
document.write("<th>" + " " + "Message" + " " + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Red" + " " + "</th>");
document.write("<td>" + " " + "Must stop" + " " + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Yellow" + " " + "</th>");
document.write("<td>" + " " + "Read to move" + " " + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + " " + "Green" + " " + "</th>");
document.write("<td>" + " " + "Move on" + " " + "</td>");
document.write("</tr>");

document.write("<table>");


















//===============Q4
document.write("<hr>");

document.write(" 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” " + "<br><br>");


// var fuel = +prompt("Enter you fuel: ");

// if (fuel == 0.25) {
//     document.write("Please refill the fuel in your car")
// } else {
//     document.write(" Move your car")
// }











//===============Q5
document.write("<hr>");
document.write("5. Run this script, & check whether alert message would be displayed or not. Record the outputs. " + "<br><br>");

// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// };

document.write("a. alert is running" + "<br>");

// b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

document.write("b. alert is not running" + "<br>");


//c 

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

document.write("c. There are two alert box first is" + "<br>" + "condition 2 is true" + "<br>" + "condition 4 is true" + "<br>");

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

document.write("d. alert is running" + "<br>");


//e

//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


document.write("e. alert is running" + "<br>" + "true" + "<br>");
document.write("<hr>");


document.write("<hr>");





















//===============Q6
document.write("6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table. " + "<br><br>");


document.write("Mark Sheet" + "<br><br>");

// var sub1 =+prompt( "Enter your first subject marks:");
// var sub2 = +prompt("Enter your second subject marks: ");
// var sub3 = +prompt("Enter your third subject marks: ");
// var totalMarks = +prompt( "Enter you total marks:");
// var obMarks = (sub1+sub2+sub3);
// percentage = ((obMarks * 100)/ totalMarks);
// var grade;
// var remarks;

// conditions
// if(percentage >= 80){
//      grade = 'A-one';
//      remarks = 'excellent';
// }else if(percentage >= 70){ 

//      grade = 'A';
//      remarks = 'Good';
// }else if(percentage >= 60){ 

//     grade = 'B';
//     remarks = 'you need to improve';
// }
// else if (percentage < 60){ 

//     grade = 'Fail';
//     remarks = 'Sorry';
// }


// document.write("Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+obMarks+"<br>");
// document.write("Percentage:  "+percentage+"%"+"<br>");
// document.write("Grade: "+grade+"<br>");
// document.write("Remarks: "+remarks+"<br>");


document.write("<hr>");
document.write("<hr>");




















//===============Q7
document.write("7. Guess game Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. " + "<br><br>");


document.write("Guess game" + "<br><br>");

document.write("a. If user guesses the same number, show “Bingo! Correct answer”." + "<br>");
document.write("b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”." + "<br><br><br>");

// var guessNum = 10;
// var user = prompt("Enter guess number ");

// if (user == guessNum){
//     document.write("Bingo! Correct answer");
// }
// else if(user < guessNum || user > guessNum){
//     document.write("Close enough to the correct answe");
// }


document.write("<hr>");

document.write("<hr>");




























//=============== Q8
document.write("8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. " + "<br><br>");

// var user = prompt("Enter your value");
// var userValue =  user % 3 == 0;
// if (userValue){
//     document.write("the number is divisible by 3"+"<br><br>");
// }else {
//     document.write("Sorry pick another value"+"<br><br>");
// }





document.write("<hr>");

document.write("<hr>");





















//=============== Q9
document.write("9. Write a program that checks whether the given input is an even number or an odd number. " + "<br><br>");

// var user = prompt("Enter number");

// if(user %2 == 0){
//     document.write("Even number"+"<br>");
// }else{
//     document.write("Odd number"+"<br><br>");
// }


document.write("<hr>");

document.write("<hr>");


























//=============== Q10
document.write("10. Write a program that takes temperature as input and shows a message based on following criteria " + "<br><br><br>");


// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp1 = prompt("Enter temperature: ");

// if(temp1 > 40){
//     document.write("It is too hot outside.");
// }else if (temp1 > 30){
//     document.write("The Weather today is Normal.");
// }else if (temp1 > 20){
//     document.write("Today’s Weather is cool.");
// }else if (temp1 > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }







document.write("<hr>");

//=============== Q11
document.write("11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: " + "<br><br><br>");


// var num1 = +prompt("Enter first number: ");
// var op = prompt("Enter operator number: ");
// var num2 = +prompt("Enter second number: ");


// if (op == '+'){
//  document.write("Addition:  " ,num1 + num2) ;
// }else if(op == '-'){
//     document.write("Substraction:  ",num1 - num2) ;
// }else if(op == '*'){
//     document.write("Multiplication:  ",num1 * num2) ;
// }else if(op == '/'){
//     document.write("Division:  ",num1 / num2) ;
// }else if(op == '/'){
//     document.write("Modulus:  ",num1 % num2) ;
// }





//===========End chapter 9 to 11
document.write("<br><br><br>");













//==========================
document.write("<hr>");
document.write(" Start  Chapter 12 to 13  User inputs and conditional Statements ");

document.write("<hr>");


document.write("<br><br><br>");


document.write(" 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)." + "<br><br>");

// var char = prompt("Enter the character to check: ");
// var value = char.charCodeAt(0);

// //checking uppercase
// if(value >= 65 && value <= 90 ){
//     document.write(char+" is a Uppercase ");    
// } 
// //checking lowercase
// else if(value >= 97 && value <= 122 ){
//     document.write(char +" is a lowercase ");    
// }
// //checking for number
// else if(value){
//     document.write(char +" is a number ");    
// }

document.write("<hr>");

















document.write("<hr>");


document.write(" 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal." + "<br><br>");

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if(num1 == num2){
//     document.write("Both are equal");
// }else if(num1 >= num2)
// {
//      document.write("This is number larger " + num1);
// }
// else if(num2 >= num1)
// {
//     document.write("This is number larger " + num2);
// }

document.write("<hr>");













document.write("3. Write a program that takes input a number from user & state whether the number is positive, negative or zero." + "<br><br>");

// var user = +prompt("Enter number: ");

// if (user > 0){
//         document.write(user + " is positive ");
// }else if(user < 0){
//     document.write( user+ " is negative ");
// }else if(user == 0){
//     document.write(user + " zero " , );
// }
document.write("<hr>");



















document.write("4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise" + "<br><br>");



// var checkVowel = function(isVowel) {

//     var vowels = ["a", "e", "i", "o", "u"];

//     for(var i = 0; i < vowels.length; i++){ 
//         if(isVowel === vowels[i]){
//             return true;
//          }
//     }

//     return false;

// };

// var char = prompt("Enter character:");
// char.length = 1;
// if (checkVowel(char)){
// 	document.write(char + " is a vowel");
// } else {
// 	document.write(char + " is not a vowel");
// }

document.write("<hr>");



























document.write("<hr>");


document.write("5. Write a program that" + "<br><br>");

// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.


// var userPassword = "mera password"; //user password

// var user = prompt("Enter your password"); // input from user


// if(user === ''){
//     alert("Please enter your password");  // if empty
// }
// // if match password
// else if(user === userPassword){
//     alert("Correct! The password you entered matches the original password"); 
// }
// //if not match
// else if (user !== userPassword){
//     alert("Incorrect password");
// }

document.write("<hr>");






















document.write("<hr>");


document.write("6. This if/else statement does not work. Try to fix it:" + "<br><br>");

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

document.write(greeting);













document.write("<hr>");

document.write("7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements" + "<br><br>");

// var hours =+prompt("Enter hours");
// user.length = 24;



// if( hours >= 0000 && hours < 1200){
//     document.write("Good morning");
// }else if( hours >= 1200 && hours < 1700){
//     document.write("Good Afternoon");
// }else if( hours >= 2100 && hours <= 2359){
//     document.write("Good Good night");
// }




//===========End chapter 12 to 13 
document.write("<br><br><br>");
















//==========================
document.write("<hr>");
document.write("<b>" + "Start Chapter 14 to 16  Array " + "</b>");
document.write("<hr>");
document.write("<br><br><br>");







//========================== Q1
document.write(" 1. Declare an empty array using JS literal notation to storestudent names in future.." + "<br><br>");

var stdNames = [];








//===========Q2
document.write(" 2. Declare an empty array using JS object notation to store student names in future.." + "<br><br>");

var allStdNames = new Array();

document.write("<hr>");











//====================Q3
document.write(" 3. Declare and initialize a strings array." + "<br><br>");

var stringArray = [

    name = ' Govind Rai ',
    status = ' Application developer '

];

document.write("This is string array " + "<br>" + stringArray + "<br><br>" + "<br><br>");

document.write("<hr>");


















//====================Q4
document.write(" 4. Declare and initialize a numbers array." + "<br><br>");

var number = [1, 3, 5, 6, 7];

document.write("This is numbers array " + "<br>" + number + "<br><br>" + "<br><br>");



document.write("<hr>");













//====================Q5
document.write(" 5. Declare and initialize a boolean array." + "<br><br>");

var boolenNum = [false, true];
document.write("This is boolean array " + "<br>" + number + "<br><br>" + "<br><br>");
document.write("<hr>");











//====================Q6
document.write(" 6. Declare and initialize a mixed array." + "<br><br>");

var mixArray = ["computer science", 2, "rai", "Govind", false, true];
document.write("This is mixed array " + "<br>" + mixArray + "<br><br>" + "<br><br>");











//====================Q7
document.write("<hr>");

document.write(" 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:" + "<br><br>");


document.write("<b>" + "QULIFICATIONS" + "<br><br>");

var eduQualif = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];

document.write("<ol>")
for (i = 0; i <= eduQualif.length; i++) {
    document.write("<li>" + eduQualif[i] + "</li>" + "<br>")
}
document.write("</ol>" + "</b>")













//====================Q8
document.write("<hr>");

document.write(" 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:" + "<br><br>");

//students names
var stdsName = [
    std1 = 'Govind Rai',
    std2 = 'Ahmed',
    std3 = 'Raza'
];


// students score
var stdsScore = [
    stdScore1 = 480,
    stdScore12 = 360,
    stdScore13 = 450
];

// total marks
var totalMarks = 500;

// calculate percentage
percentage1 = ((stdsScore[0] * 100) / totalMarks);
percentage2 = ((stdsScore[1] * 100) / totalMarks);
percentage3 = ((stdsScore[2] * 100) / totalMarks);

// display score and percentage
document.write(" Score of " + stdsName[0] + " is " + stdsScore[0] + "." + " Percentage: " + percentage1 + "%." + "<br>");
document.write(" Score of " + stdsName[1] + " is " + stdsScore[1] + "." + " Percentage: " + percentage2 + "%." + "<br>");
document.write(" Score of " + stdsName[2] + " is " + stdsScore[2] + "." + " Percentage: " + percentage3 + "%." + "<br>");











//====================Q9
document.write("<hr>");

document.write("9. Initialize an array with color names. Display the array elements in your browser." + "<br><br>");

var color = ['red', 'green', 'yellow'];
document.write(color + "<br><br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: " + color + "<br><br>");


// // b. Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.push(addcolor); 
document.write("Updated Array: " + color + "<br><br>");



// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add  first color of your choice");
// color.unshift(addcolor); 
// var addcolor = prompt("Add second color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: " + color + "<br><br>");


// d. Delete the first color in the array. Display the updated array in your browser.
color.shift();
document.write("Updated Array for delete first color: " + color + "<br><br>");



// e. Delete the last color in the array. Display the updated array in your browser.
color.pop();
document.write("Updated Array for delete last color: " + color + "<br><br>");


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var addColorindex = prompt("At which index want to add color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  " + color + "<br><br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then

// var addColorindex = prompt("At which index want to delete color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  " + color + "<br><br>");















//====================Q10
document.write("<hr>");

document.write("10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method." + "<br><br>");

// var stdsScores = [333,443,453,588];
// stdsScores.sort();
// document.write("Score of students in sort and ascending order:  "+stdsScores+"<br><br>" );















//====================Q11
document.write("<hr>");

document.write("11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array." + "<br><br>");

var cities = ["karachi", "Lahore", "Isamabad", "Quetta", "Peshawar"];
document.write("Cities: " + cities + "<br><br>");

var copy = cities.slice(1, 3);
document.write("Selected Cities list: " + "<br>" + copy);













//====================Q12
document.write("<hr>");

document.write("12. Write a program to create a single string from thebelow mentioned array:." + "<br><br>");

document.write("Array:" + "<br>");
var arr = [" This ", " is ", " my ", " cat "];
document.write(arr + "<br><br>");

//creating here
document.write("String: " + "<br>");

var string = arr.join("");
document.write(string + "<br>");














//====================Q13
document.write("<hr>");

document.write("13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)." + "<br><br>");

var arr1 = ["keyboard", "mouse", "printer", "monitor"];
document.write(arr1 + "<br><br>");


//output keyboard
var takingOutput = arr1.slice(0, 1);
document.write("out: " + "<br>" + takingOutput + "<br>");

//output mouse
var takingOutput = arr1.slice(1, 2);
document.write("out: " + "<br>" + takingOutput + "<br>");

//output printer
var takingOutput = arr1.slice(2, 3);
document.write("out: " + "<br>" + takingOutput + "<br>");

//output monitor
var takingOutput = arr1.slice(3, 4);
document.write("out: " + "<br>" + takingOutput + "<br>");
















//====================Q14
document.write("<hr>");

document.write("14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)" + "<br><br>");


document.write(arr1 + "<br><br>");


//output keyboard
var takingOutput = arr1.slice(-1);
document.write("out: " + "<br>" + takingOutput + "<br>");

//output mouse
var takingOutput = arr1.slice(-2, -1);

document.write("out: " + "<br>" + takingOutput + "<br>");


//output printer
var takingOutput = arr1.slice(-3, -2);

document.write("out: " + "<br>" + takingOutput + "<br>");

// //output monitor
var takingOutput = arr1.slice(-4, -3);
document.write("out: " + "<br>" + takingOutput + "<br>");



//===========End chapter 14 to 16  


//==========================
document.write("<hr>");
document.write("<b>" + " Start Chapter 17 to 20 " + "</b>");
document.write("<hr>");




//==========================Q1
document.write("<hr>");

document.write(" 1. Declare and initialize an empty multidimensional array.(Array of arrays)" + "<br><br>");

var multiDemArry = [[],[],[]];














//==========================Q2
document.write("<hr>");

document.write(" 2. Declare and initialize a multidimensional arrayrepresenting the following matrix:." + "<br><br>");

var multiDemArry1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (i = 0; i < multiDemArry1.length; i++) {
    document.write(multiDemArry1[i] + '<br>');
}


















//==========================Q3
document.write("<hr>");

document.write(" 3. Write a program to print numeric counting from 1 to 10.." + "<br><br>");

for (i = 1; i <= 10; i++) {
    document.write([i] + '<br>');
}
















//==========================Q4
document.write("<hr>");

document.write(" 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user" + "<br><br>");

// var tableNum = +prompt("Enter table number which you want to print: ");
// var tablelength = +prompt("Enter table length which you want to print: ");


// for (var i = 1; i <= tablelength; i++ ){
//     document.write(+ tableNum + "x" + i + "="+ tableNum*i+ "<br>");
// }












//==========================Q5
document.write("<hr>");

document.write(" 5. Write a program to print items of the following array using for loop:" + "<br><br>");

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


for (var i = 0; i < fruits.length; i++) {
    document.write("<li>"+fruits[i] +"</li>"+ "<br>");
}



document.write("<br>");

// showing index
document.write("Element at index 0 " + fruits[0] + "<br>");
document.write("Element at index 1 " + fruits[1] + "<br>");
document.write("Element at index 2 " + fruits[2] + "<br>");
document.write("Element at index 3 " + fruits[3] + "<br>");
document.write("Element at index 4 " + fruits[4] + "<br>");













//==========================Q6
document.write("<hr>");

document.write(" 6. Generate the following series in your browser. See example output." + "<br><br>");

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("<b>" + "Counting: " + "</b>" + "<br><br>");

for (i = 1; i <= 15; i++) {
    document.write([i] + ",");
}



document.write("<br><br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverse = counting.reverse();
document.write("<b>" + "Reverse counting: " + "<br>" + "</b>" + reverse + "<br><br>");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<b>" + "Even: " + "</b>" + "<br><br>");


// for(i = 0; i <= 20; i+i+2){
//     document.write(add[i]+",");
//     }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<b>" + "Odd: " + "</b>" + "<br><br>");

// for(i = 1; i <= 20; i+i+2){
//     document.write(odd[i]+",");
//     }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<b>" + "Series: " + "</b>" + "<br><br>");
var array = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
for (i = 0; i < array.length; i++) {
    document.write(array[i] + ",");
}













//==========================Q7
document.write("<hr>");

document.write(" 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a  program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:" + "<br><br>");

// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// var items = prompt("Welcome to our backry,what do you want to order?: ");

//  if(a === items){
//   alert(items + " is available at index number " + " " + a.indexOf + " in or backry ");
// }else{
//     alert("We are sorry " + items + " is not available at our backry.");
//  }

















//==========================Q8
document.write("<hr>");

document.write(" 8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12]." + "<br><br>");

var arr = [24, 53, 78, 91, 12];
document.write("Array items: " + (arr) + "<br><br>");


document.write("The largeest number: " + Math.max.apply(null, arr));










//==========================Q9
document.write("<hr>");

document.write(" 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]" + "<br><br>");

var arr = [24, 53, 78, 91, 12];
document.write("Array items: " + (arr) + "<br><br>");


document.write("The smallest number: " + Math.min.apply(null, arr));













//==========================Q10
document.write("<hr>");

document.write(" 10. Write a program to print multiples of 5 ranging 1 to 100." + "<br><br>");

for (i = 1; i <= 20; i++) {
    document.write([i * 5] + ",");
}


document.write("<br><br>");
document.write("<hr><hr>");
document.write("<b>"+" End Chapter 17 to 20 "+"</b>");
document.write("<hr><hr>");
document.write("<br><br>");
//========================== End 












//========================Start Chpater 21 to 25




//========= String Method
document.write("<hr>");
document.write("<b>" + "String Method" + "</b>" + "<br>");

document.write("<b>" + "Chapter 21 to 25" + "</b>" + "<br><br>");
document.write("<hr>");



document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name." + "</b>" + "<br><br>");

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + lastName;

// alert("Welcome " + fullName);

//======Q1 end




document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of userinput in your browser" + "</b>" + "<br><br>");

//input from user
// var favModel = prompt("Enter your favorite mobile phone model:");

//checking  number of strings
// var userInputLength = favModel.length;

// document.write("My favorite phone is: "+favModel+"<br>"+"length of string: " + userInputLength);


//======Q2 end




document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word = "Pakistan";

//finding index
var findindex = word.indexOf("n");

// show in browser
document.write("String: " + word + "<br>" + "Index of 'n' is: " + findindex);



//======Q3 end




document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word1 = "Hello World";

//finding index
var findLastIndex = word1.lastIndexOf("l");

// show in browser
document.write("String: " + word1 + "<br>" + "Last index of 'l' is: " + findLastIndex);



//======Q4 end




document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word2 = "Pakistani";

//find the char at 3rd index
var findChar = word2.charAt(3);

//show in browser
document.write("String: " + word2 + "<br>" + "Characher at index 3: " + findChar);


//======Q5 end




document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Repeat Q1 using string concat() method." + "</b>" + "<br><br>");

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(lastName); 

// document.write("Welcome " + fullName);


//======Q6 end




document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var text = "Hyderabad";

//replacing Hyder to Islam
var newText = text.replace("Hyder", "Islam");

//show on browser
document.write("City: " + text + "<br>" + "After replaacement: " + newText);


//======Q7 end




document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var message = "Ali  and  Sami are best friends. They play cricket  and  football together.";

//replacing Hyder to Islam
var newMessage = message.replace(/ and /g, "&");

//show on browser
document.write("Message: " + message + " " + "<br>" + "After replaacement: " + newMessage);



//======Q8 end




document.write("<hr>");
//======Q9 Start

document.write("<b>" + "9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser." + "</b>" + "<br><br>");

var str = "472";
var num = 472;

// converting string to number
var strToNum = Number(str);

//checking data type 
var strType = typeof (str);

//conveting number to string
var numToStr = num.toString()

//checking data type 
var numType = typeof (num);


//show in browser
document.write("Value: " + strToNum + "<br>" + "Type: " + strType + "<br>" + "Value " + numToStr + "<br>" + "Type: " + numType);





//======Q9 end




document.write("<hr>");
//======Q10 Start

document.write("<b>" + "10. Write a program that takes user input. Convert and show the input in capital letters.." + "</b>" + "<br><br>");

//taking input from user
// var inputForCapLetter =  prompt("Enter char to covert it into capital letters:");

//convertng input to capital letters
// var capLetter = inputForCapLetter.toUpperCase();

//show in browser
// document.write("User input: "+inputForCapLetter+"<br>"+"Upper Case: "+capLetter);


//======Q10 end




document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Write a program that takes user input. Convert and show the input in title case." + "</b>" + "<br><br>");

//taking input from user
// var inputTitleCase =  prompt("Enter char to covert it into title case: ");

//selecting first char by slice mwthod
// var firstChar = inputTitleCase.slice(0,1);

// converting first char to uppercase
// firstChar = firstChar.toUpperCase();

//converting other char to lower case rather than 1
// var otherChar = inputTitleCase.slice(1);

//converting other into lowercase
//  otherChar = otherChar.toLowerCase();

//concating firstchar and otherChar
// var titleCase1 = firstChar + otherChar;

//show in browser
// document.write("User input: " + inputTitleCase + "<br>"+"Title Case: " + titleCase1);



//======Q11 end




document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser." + "</b>" + "<br><br>");

//Declare variable
var num = 35.36;

//Converting number to string
var num1ToStr = num.toString()

//find the char at 2rd index
var findChar = num1ToStr.charAt(2);

//Removing the dot
var rem = findChar.replace(".", "3536");

//result in browser
document.write("Number: " + num + "<br>" + "Result: " + rem);

//======Q12 end




document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ ." + "</b>" + "<br><br>");

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your surname: ");

//finding first char
// var firstChar = userName.charAt(0);

// //finding last char
// var lastChar = userName.charAt(userName.length - 1);

// var text = firstChar + lastChar;
// //finding all
// for (var i = 0; i <  text.length; i++) {
//     if ( text.charAt(i)==   text.charAt(33);) {

//         alert("Please enter a valid username. ");

//     }
// }



//======Q13 end




document.write("<hr>");
//======Q14 Start

document.write("<b>" + " 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:." + "</b>" + "<br><br>");

var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

//input from user
// var items = prompt("Search Items: ");

//find index
// var find = arr.indexOf(items);

//coverting user input to lowercase
// var char = items.toUpperCase();


// for (var i = 0; i < arr.length; i++) {
//     if (items == arr[i]) {
//         document.write(arr[i] + " is " + "<b>" + "available " + "</b>" + "at index " + find + "in our bakery.");
//     } else if (items !== arr[i]) {
//         document.write(" We are sorry." + items + "<b>" + "is not available " + "</b>"  + "in our bakery.");
//         break;
//     } else if (arr[i] == char) {
//         alert("Please enter in lowercase.");
//     }
// }



//======Q14 end




document.write("<hr>");
//======Q15 Start

document.write("<b>" + " 15. Write a program to take password as an input from user. The password must qualify these requirements:" + "</b>" + "<br><br>");

// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.

//taking input from user
// var pass = prompt("Enter your password.");


// for(var i = 0; i < pass.length; i++){
// if((pass.charAt(i)) > 127 && (pass.charAt(i) ) ){
//     alert("enter in valid");
// }
// }



//======Q15 end




document.write("<hr>");
//======Q16 Start

document.write("<b>" + " 16. Write a program to convert the following string to an array using string split method." + "</b>" + "<br><br>");

// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = 'University of Karachi';

university.split([]);

for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>");

}


//======Q16 end




document.write("<hr>");
//======Q17 Start

document.write("<b>" + " 17. Write a program to display the last character of a user input." + "</b>" + "<br><br>");

// var userInput = prompt("Enter your country name");

//finding last index
// var findLastChar = userInput.slice(-1);

// document.write("User input: "+ userInput + "<br>"+"Last character of input: "+findLastChar);


//======Q17 end




document.write("<hr>");
//======Q18 Start

document.write("<b>" + " 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string." + "</b>" + "<br><br>");

var str = 'The quick brown fox jumps over the lazy dog';
var match = str.match(/the/gi);
document.write("Sentence: "+str+"<br>");
document.write("There are  "+match.length+" occurrance(s) of word "+match+"<br>");















//========= 
document.write("<hr>");
document.write("<b>" + "End of Chapter 21 to 25 " + "</b>" + "<br>");
document.write("<hr>");




//========= Math Method Start
document.write("<hr>");
document.write("<b>" + "Start Math  Method" + "</b>" + "<br>");

document.write("<b>" + "Start Chapter 26 to 30" + "</b>" + "<br><br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + " 1. Write a program that takes a positive integer from user & display the following in your browser." + "</b>" + "<br><br>");

// input from user
// var user = Number(prompt("Enter number"));

// converting into int
// var int = parseInt(user);

// // a. number
// var num = Number(int);

// // b. round off value of the number
// var roundoff = Math.round(int);

// // c. floor value of the number
// var floorval = Math.floor(int);

// // d. ceil value of the number
// var ceilVal = Math.ceil(int);

// //show on browser
// document.write("number: "+num+"<br>"+"round of value: "+roundoff+"<br>"+"floor value: "+floorval+"<br>"+"ceil value: "+ceilVal);



//======Q1 End

document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program that takes a negative floating point number from user & display the following in your browser." + "</b>" + "<br><br>");

// // input from user
// var user = Number(-prompt("Enter number"));

// var float = parseFloat(user);
// // a. number
// var num = Number(float);

// // b. round off value of the number
// var roundoff = Math.round(float);

// // c. floor value of the number
// var floorval = Math.floor(float);

// // d. ceil value of the number
// var ceilVal = Math.ceil(float);

// //show on browser
// document.write("number: "+num+"<br>"+"round of value: "+roundoff+"<br>"+"floor value: "+floorval+"<br>"+"ceil value: "+ceilVal);





//======Q2 End

document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a program that displays the absolute value of a number." + "</b>" + "<br><br>");

// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var Val = -4;

// //finding absolute 
// var abVal = Math.abs(Val);

//  document.write("The absolute value of -4 is: "+abVal);




//======Q3 End

document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:." + "</b>" + "<br><br>");


var dicVal = Math.floor(Math.random() * 4);
var dicVal2 = Math.floor(Math.random() * 6);

document.write("random disc value: " + dicVal + "<br>" + " random disc value: " + dicVal2);



//======Q4 End

document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser." + "</b>" + "<br><br>");


var heads = 1;
var tails = 0;

/* Random number 0 or 1  */
var toss = Math.floor(Math.random() * 2);
/* If statement */
if (toss === 0) {

    document.write((heads += 1) + " <br>" + " ramdom coin value: " + "Head");

} else {

    document.write((tails += 1) + " <br>" + " ramdom coin value: " + "Tails ");
}


//======Q5 End

document.write("<hr>");
//======Q6 Start

document.write("<b>" + " 6. Write a program that shows a random number between 1 and 100 in your browser." + "</b>" + "<br><br>");

//Generating random number from 1 to 100
var rdnum = Math.floor(Math.random() * 100);

document.write("ramdom number between 1 to 100: " + rdnum);


//======Q6 End

document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:" + "</b>" + "<br><br>");


// a. 50
// b. 50kgs
// c. 50.2kgs
// // d. 50.2kilograms

// var user = Number(prompt("Enter your wright"));

// var parse =parseFloat(user);

// document.write("The weight of user is: "+   parse );
// document.write("The weight of user is: "+   parse +" kgs");
// document.write("The weight of user is: "+   parse +" kgs");
// document.write("The weight of user is: "+   parse +" kilograms");


//======Q7 End

document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user." + "</b>" + "<br><br>");


// var UserInput = Number(prompt("Enter Secrete number"));

// //Generating random number from 1 to 10
// var rdnum = Math.floor(Math.random() *10);

// //match with user number
// if (UserInput == rdnum){
//     alert("Congratulation, you are the winner!");

// }else{
//     alert("Try again.");
// }




//========= 
document.write("<hr>");
document.write("<b>" + "End of Chapter 26 to 30 " + "</b>" + "<br>");
document.write("<hr>");



//========= Date Method Start

document.write("<hr>");
document.write("<b>" + "Start Date Method " + "</b>" + "<br>");
document.write("<b>" + "Start Chapter 31 to 34" + "</b>" + "<br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a program that displays current date and time in your browser" + "</b>" + "<br><br>");

var date = new Date();

document.write(date);





//======Q1 End


document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program that alerts the current month in words. For example December" + "</b>" + "<br><br>");


var current = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var ForMonth = month[current.getMonth()];

document.write("Current Month: " + ForMonth);


//======Q2 End


document.write("<hr>");
//======Q3 Start

document.write("<b>" + "2. Write a program that alerts the current month in words. For example December" + "</b>" + "<br><br>");

var current = new Date();

var day = new Array();

day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var ForDay = day[current.getDay()];

document.write("Today is: " + ForDay);



//======Q3 End


document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today." + "</b>" + "<br><br>");



var current = new Date();

var day = new Array();

day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var ForDay = day[current.getDay()];


if ((ForDay == 'Sunday') || (ForDay == 'Saturday')) {
    document.write("It's fun day.");
} else {
    document.write("It's not fun day.Do your job with heart");
}





//======Q4 End


document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”." + "</b>" + "<br><br>");

var current = new Date();

var date = current.getDate();


if (date < 16) {
    document.write("First fifteen days of the month.");
} else {
    document.write("Last days of the month");
}


//======Q5 End


document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.." + "</b>" + "<br><br>");


var date = new Date();

//millisecond since midnight, jan 1 1970
var time = date.getTime();

//millisecond since midnight, jan 1 1970

var minutes = (time * 60 * 60);

document.write("Current Date: " + date + "<br>");
document.write("Elapsed miliseconds since January 1, 1970: " + time + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes);









//======Q6 End


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”" + "</b>" + "<br><br>");


var timeForCheck = new Date();

var gettime = timeForCheck.getHours();


if (gettime < 12 && gettime > 1) {
    document.write("it's AM");
} else {
    document.write("it's PM");
}





//======Q7 End


document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate." + "</b>" + "<br><br>");


// var cuurent = new Date();
// var lasterDate = (current - ('Thur Dec 31 2020 00:00:00'))
// document.write(lasterDate);








//======Q8 End


document.write("<hr>");
//======Q9 Start

document.write("<b>" + " 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015" + "</b>" + "<br><br>");


// var date = new Date(Jun, 18, 2015);

// var today = new Date();

// var diff = today - date;

// document.write(diff);




//======Q9 End


document.write("<hr>");
//======Q10 Start

document.write("<b>" + " 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015." + "</b>" + "<br><br>");


var date = new Date();
var second = date.getSeconds();

//total second from beginning of 2020
var totalSec = (((60 * 60 * 24 * 30) * (5)) + ((60 * 60 * 24) * (21)) + second); //first 1 month * 5 and then 1 day * 21 days.

document.write("on reference date " + date + "<br><br>");
document.write(totalSec + " seconds had passed since biginning of 2020");



//======Q10 End


document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Create a Date object for the current date and time Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.." + "</b>" + "<br><br>");



var date = new Date();


document.write("Currnet date: " + date + "<br><br>");

date.setHours(1);
document.write("1 hour ago it was: " + date + "<br><br>");





//======Q11 End


document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?." + "</b>" + "<br><br>");



var date = new Date();

//current
document.write("Currnet date: " + date + "<br><br>");

date.setFullYear(date.getFullYear() - 100);
//100 year back

document.write("100 years back, it was: " + date + "<br><br>");



//======Q12 End


document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a program to ask the user about his age. Calculate and show his birth year in your browser." + "</b>" + "<br><br>");


// var dob =  Number(prompt("Enter your age: ","23"));


// // get user year 

// // current year
// var current = new Date();
//  var  year = current.getFullYear(); 


// //geting year of user birth
//  var dobYear =   year - dob; 

// document.write("Yout age is "+dob+"<br><br>");
// document.write("Yout birth year  is  "+dobYear);




//======Q13 End


document.write("<hr>");
//======Q14 Start

document.write("<b>" + "14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:." + "</b>" + "<br><br>");


// a. Customer Name
// b. Current Month 
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,


// a. Customer Name
var myName = 'Jeo'

// c. Number of units
var numOfUnit = 410;

// d. Charges per unit
var chargePerUnit = 16


// e. Net Amount Payable (within Due Date)
var netAmount = numOfUnit * chargePerUnit;

// f. Late Payment Surcharge
var LatePay = 300;


// g. Gross Amount Payable (after Due Date) Where,
var grossAmount =  netAmount + LatePay;



// b. Current Month 
var current = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var ForMonth = month[current.getMonth()];




document.write("<b>"+"K-ELECTRICITY BILL"+"</b>"+"<br><br>");

document.write("Customer name: "+myName+"<br>");
document.write("Month: "+ForMonth+"<br>");
document.write("Number of Units: "+numOfUnit+"<br>");
document.write("Charges per Unit: "+chargePerUnit+"<br>");
document.write("Net Amount Payable (Within Due Date): "+netAmount+"<br>");
document.write("Late payment charges: "+LatePay+"<br>");
document.write("Gross Amount Payable (After Due Date): "+grossAmount+"<br>");







//========= 
document.write("<hr>");
document.write("<br><br><br><b>" + "End of Chapter 31 to 34 " + "</b>" + "<br>");
document.write("<hr>");



//========= Function Start

document.write("<hr>");
document.write("<b>" + "Start Function " + "</b>" + "<br>");
document.write("<b>" + "Start Chapter 35 to 38" + "</b>" + "<br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a function that displays current date & time in your browser." + "</b>" + "<br><br>");



function Time() {
    var now = new Date() ;
   
    document.write("Current time: "+now) ;
   }

Time();





//==============End Q1


document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a function that takes first & last name and then it greets the user using his full name." + "</b>" + "<br><br>");

// function greet() {
//     Fname = ' Rai '
//     Lname = ' Geo '
   
//     alert("Welcome "+Fname+Lname) ;
//    }

// greet();



//==============End Q2


document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a function that adds two numbers (input by user) and returns the sum of two numbers." + "</b>" + "<br><br>");

// var num1 = Number(prompt("Enter First number"));
// var num2 = Number(prompt("Enter Second number"));


// function sum(num1,num2) {

//     document.write(num1+num2) ;
//    }

// sum(num1,num2);





//==============End Q3


document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser" + "</b>" + "<br><br>");


// var num1 = Number(prompt("Enter First number","5"));
// var op = prompt("Enter operator","*");
// var num2 = Number(prompt("Enter Second number","3"));


// function Calculator(num1,num2) {

//     if(op === '+'){
//         document.write(num1+num2);
//     }else if(op === '-'){
//         document.write(num1-num2);
//     }
//     else if(op === '/'){
//         document.write(num1/num2);
//     }
//     else if(op === '*'){
//         document.write(num1*num2);
//     }
    
//    }

//    Calculator(num1,num2);






//==============End Q4


document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a function that squares its argument" + "</b>" + "<br><br>");



function Square(num) {
    var num = 9;
    document.write(num*num) ;
   }

   Square(num);



//==============End Q5


document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Write a function that computes factorial of a number." + "</b>" + "<br><br>");


function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }

  var f= factorial(5);

  document.write("The factorial 5 is: "+f);



//==============End Q6


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a function that take start and end number as inputs & display counting in your browser." + "</b>" + "<br><br>");


// var  CountingStrt = prompt("Enter starting number of counting :")
// var  CountingEnd = prompt("Enter ending number of counting :")


// function Counting() {
//     for(i = CountingStrt; i <= CountingEnd ; i++ ){
//         document.write([i]+" ");
//     }
    
// }

// Counting();



//==============End Q6


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "8. Write a nested function that computes hypotenuse of a right angle triangle." + "</b>" + "<br><br>");

// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function alculateHypotenuse() {
    
    
//     function calculateSquare() {
        
    
//     }
    
// }









//==============End Q7


document.write("<hr>");
//======Q8 Start

document.write("<b>" + "9. Write a function that calculates the area of a rectangle." + "</b>" + "<br><br>");

// A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function AreaOfRectangle() {
//     var widthValue = 58;
//     var heightValue = 44;

//     var Area = widthValue*heightValue;
//     document.write("Area of rectangle is: "+Area);
    
// }

// AreaOfRectangle();













//==============End Q8


document.write("<hr>");
//======Q9 Start

document.write("<b>" + "10. Write a JavaScript function that checks whether a passed string is palindrome or not?" + "</b>" + "<br><br>");










//==============End Q10


document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case " + "</b>" + "<br><br>");
// var strNew = 'the quick brown fox';

// function UppercaseOnly() {
   
//     //to uppercase
//     var capital = strNew.toUpperCase("The Quick Brown Fox");

//     document.write(capital);

        
// }

// document.write("EXAMPLE STRING: "+strNew +"<br><br>");

// UppercaseOnly();










//==============End Q11


document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. " + "</b>" + "<br><br>");

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = "";
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }

// var l=   findLongestWord("The quick brown fox jumped over the lazy dog");
// document.write(l);














//==============End Q12


document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' " + "</b>" + "<br><br>");











//==============End Q13


document.write("<hr>");
//======Q14 Start

document.write("<b>" + "14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here" + "</b>" + "<br><br>");



// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2 πr
// Area of circle  = πr2


// Circumference of circle

function calcCircumference(r) {
    var r = 34;
    var π = 3.14523;

    return (2*r*π);
    
}

 var f= calcCircumference(22);
document.write("Circumference of circle Is L  "+f+"<br><br>");


//Area of circle

function Areaofcircle(r) {
    
    var π = 3.14523;

    return (2*(r*r)*π);
    
}

 var output = Areaofcircle(44);
document.write("Area of circle is :  "+output+"<br><br>");




document.write("<hr>");
document.write("<b>" + "End of Chapter 35 to 38 " + "</b>" + "<br>");
document.write("<hr>");













//====================



