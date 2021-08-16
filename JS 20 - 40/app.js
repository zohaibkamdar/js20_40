 /*//=======================CHAPTER 21 TO 25==============================







 //---------------------------------TASK 01----------------------------------------------


 var firstName = prompt("What is your first name", "Enter your first name");
 var lastName = prompt("What is your last name", "Enter your last name");
 var fullName ;
 fullName = firstName + " " + lastName;
 alert(fullName);



// ============================TASK 02================================


 var a = prompt("Enter mobile model", "Enter your favourate mobile model");
 var b;
 b = a.length;
 document.write("My favouriate mobile is : " + a + "<br>");
 document.write("Length of string is :" + " " + b + "<br><br>" );



// ============================TASK 03================================


 var pak = "Pakistani";
 var pak2;
 pak2 =  pak.indexOf("n");
 document.write("String : " +pak + "<br>");
 document.write("Index of 'n' : " + pak2);



// ============================TASK 04================================


 var x = "Hello World!";
 var y;
 y =  x.lastIndexOf("l");
 document.write("String : " + x + "<br>");
 document.write("Index of 'l' : " + y + "<br><br>"  );



// ============================TASK 05================================


 var pak = "Pakistani";
 var pak2;
 pak2 =  pak[3];
 document.write("String : " +pak + "<br>");
 document.write("Character of Index '3' : " + pak2 + "<br><br>");



// ============================TASK 06================================


 var firstName = prompt("What is your first name", "Enter your first name");
 var lastName = prompt("What is your last name", "Enter your last name");
 alert(firstName + " " + lastName);



// ============================TASK 07================================


 var city = "Hyderabad";
 var city1 = city.replace("Hyder", "Islam" )
 document.write("City : " + city);
 document.write("<br>" + "After Replacement : " + city1 + "<br><br>");



// ============================TASK 08================================


 var message = "Bilal and Sami are best friends. They play cricket and football together.";
 var message1;
 message1 = message.replace( /and/g , "&");
 document.write(message1 + "<br><br>");



// ============================TASK 09================================


 var str = "472";
 document.write("Value : " + str + "<br>");
 document.write("Type : " + typeof(str) + "<br>");
 var conv =  parseInt(str);
 document.write("Value : " + str + "<br>");
 document.write("Type : " + typeof(conv) + "<br><br>");



// ============================TASK 10================================


 var inp = prompt("Enter String");
 document.write("User Input : " + inp + "<br>");
 var inp1 = inp.toLocaleUpperCase();
 document.write("Upper Case : " + inp1 + "<br><br>");



// ============================TASK 11================================


 var inp = prompt("Enter String");
 document.write("User Input : " + inp + "<br>");
 var inp1 = inp.toLowerCase();
 document.write("Upper Case : " + inp1 + "<br><br>");



// ============================TASK 12================================


 var num = 35.36 ;
 document.write("Number : " + num + "<br>");
 var num1 = num.toString();
 document.write("Result : " + num1 +"<br><br>");



// ============================TASK 13================================


 let name = prompt('Enter Your Name');
  if(/^[a-zA-Z]*$/.test(name) == false){
     alert('please enter a valid name')
 }else{
     alert(name)
 }



// ============================TASK 14================================


 let items = ['cake', 'apple pie', 'chips' , 'cookies' , 'patties']
 let search = prompt('enter what you want')
  search = search.toLowerCase();
 for(i=0; i<items.length;i++){
     if(items[i] !== search ){
         alert('not available');
         break;
     }else{
         alert('available')
     }
 }



 //============================TASK 15================================


 let pass = prompt('Enter Password')
 if (pass.match(/[a-z]/g) && pass.match( 
     /[A-Z]/g) && pass.match( 
     /[0-9]/g) && pass.match( 
     /[^a-zA-Z\d]/g) && pass.length >= 6) {
         alert('Great')
     }else{
         alert('please enter a valid password')
     }
    


 //============================TASK 16================================


 var university = 'University of Karachi';
 for(i=0;i<university.length;i++){
      document.write(university[i].split() + '<br>')
 }



// ============================TASK 17================================


 var input = prompt('Enter Something')
 var len = input.length - 1;
 alert(input[len])



// ============================TASK 18================================
 var para = 'The quick brown fox jumps over the lazy dog'
 let count = para.match(/the/ig)
 alert ('the appeared ' + count.length + ' times')





 //--++++++++++++++++++++--CHAPTER 26 TO 30 --+++++++++++++++++++++++++++++++++++++--





 //============================TASK 01================================


 let number = 3.45753;
 document.write('number' + number + '<br> roundoff' + Math.round(number) + '<br> ceil ' + Math.ceil(number) + '<br> floor' + Math.floor(number) )


// ============================TASK 02================================


 let number = +prompt('Enter Number')
  number = parseFloat(number)
 if( Math.sign(number) == -1){
     document.write('number' + number + '<br> roundoff' + Math.round(number) + '<br> ceil ' + Math.ceil(number) + '<br> floor' + Math.floor(number) )
 }


 //============================TASK 03================================


 let num = -3;
 alert(Math.abs(num));



 //============================TASK 04================================


 let randomNumber = Math.random() *6
 let diceNumber = Math.ceil(randomNumber) 
 document.write('The dice rolled: ' + diceNumber)



 //============================TASK 05================================


 let num = Math.random() *2 
 let new_num = Math.ceil(num)
 if(new_num === 1){
     document.write('Heads')
 }else{
     document.write('Tails')
 }



 //============================TASK 06================================


 let randomNumber = Math.random() *100
 let num = Math.ceil(randomNumber) 
 document.write(num)



 //============================TASK 07================================


 let weight = +prompt('Enter Your weight')
     alert(weight)



 //============================TASK 08================================


 let num = Math.random() * 10
 let sec_num = Math.ceil(num);
 console.log(sec_num)
 let input  = +prompt('Guess the number');
 if(input === sec_num){
     alert("you won")
 }else{
     alert("lol")
 }









 //=======================CHAPTER 31 TO 34==============================










//============================TASK 01================================


  var today = new Date();
 document.write(today)


// ============================TASK 02================================


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
 var today = new Date();
 let newMonth = today.getMonth()

 alert(month[newMonth])



// ============================TASK 03================================


 var days = ['','mon','tue','wed','thur','fri','sat','sun']
 var today = new Date();
 var day = today.getDay();

 alert(days[day])



// ============================TASK 04================================


 var today = new Date();
 var day = today.getDay();
 if(day === 5 || day === 6){
     alert('Its Fun day')
 }else{
     alert('its normal')
 }



// ============================TASK 05================================


 var today = new Date();
 var date = today.getDate();
 console.log(date)

 if (date <= 15){
     alert('first fifteen days of month')
 }else{
     alert('last fifteen days on month')
 }



// ============================TASK 06================================


 var today = new Date();
 var day = today.getDay();
 var milliSeconds = today.getMilliseconds()
 console.log(milliSeconds)
 document.write('Current Date:' + today + '<br>');
 let oldDate = new Date('July 20, 69 00:20:18 GMT+00:00') ;
 const oldDateInMin = (oldDate /100000)* -1
 document.write("time in miliseconds" + oldDate.getTime());
 document.write('<br> time in minutes' + Math.ceil(oldDateInMin))



// ============================TASK 07================================


  let today = new Date()
  let time = today.getTime();
  var milliseconds = parseInt((time%1000)/100)
         , seconds = parseInt((time/1000)%60)
         , minutes = parseInt((time/(1000*60))%60)
         , hours = parseInt((time/(1000*60*60))%24);
  console.log(hours)
  if (hours < 12 ){
      alert('its AM')
  }else{
      alert('its PM')
  }


// ============================TASK 08================================


 var date = new Date();
 date.setMonth(11);
 date.setDate(31)
 alert(date)



// ============================TASK 09================================


 let date = new Date()
     date.setDate(18)
     date.setMonth(5)



// ============================TASK 10================================


 var x =("Current date:"); 
 var a = new Date();

 for(var i = 0; i < a.length; i++ ){
     console.log(x+a[i]);
 }




// ============================TASK 11================================


 var x =("Current date:"); 
 var a = new Date();

 for(var i = 0; i < a.length; i++ ){
     console.log(x+a[i]);
 }




// ============================TASK 12================================


 var x =("Current date:"); 
 var a = new Date();

 for(var i = 0; i < a.length; i++ ){
     console.log(x+a[i]);
 }




// ============================TASK 13================================


 function calculate_age(dob) { 
     var diff_ms = Date.now() - dob.getTime();
     var age_dt = new Date(diff_ms); 
  
     return Math.abs(age_dt.getUTCFullYear() - 1970);
 }
 let date = +prompt('Year,Date,Month')
 alert(calculate_age(new Date(date)));




// ============================TASK 14================================


 let name = prompt('Name')
 let oldUnits = +prompt('No old of units')
 let currentUnits = +prompt('Current Units')
 let date = new Date()
 let month = date.getMonth()
 const unitPrice = 16;
 const lateCharges = 350;

 let unitsConsumed = currentUnits - oldUnits;

 let bill = unitsConsumed * unitPrice;
 let lateBill = bill + lateCharges

 var months = new Array();
 months[0] = "January";
 months[1] = "February";
 months[2] = "March";
 months[3] = "April";
 months[4] = "May";
 months[5] = "June";
 months[6] = "July";
 months[7] = "August";
 months[8] = "September";
 months[9] = "October";
 months[10] = "November";
 months[11] = "December";

 document.write('Name: ' + name + '<br>');
 document.write('Month: ' +months[month] + '<br>')
 document.write('Number of units: ' +unitsConsumed+ '<br>')
 document.write('Chare per unit: ' + unitPrice + '<br>');
 document.write('Net Amount payable (within due date): ' + bill + '<br>');
 document.write('Late Payment charges: ' + lateCharges + '<br>');
 document.write('Gross Amount payable (after due date): ' + lateBill + '<br>');









// =======================CHAPTER 35 TO 38==============================









// ============================TASK 01================================


 const time = () => {
     let today = new Date();
     return(
         today
     )
 }
 alert(time())




// ============================TASK 02================================


 let fullName = (fname,lname) => {
     let name = fname + '' + lname;
     alert(name)
 }
 let fName = prompt('First Name')
 let lName = prompt('Last Name')
 fullName(fName,lName)




// ============================TASK 03================================


 function sum(num1,num2){
     alert(num1+num2)
 }
 let num1 = +prompt('num1')
 let num2 = +prompt('num2')
 sum(num1,num2)



// ============================TASK 04================================


 function calc(num1,num2,sign){
     let ans
     if (sign === '+' ){
         alert(num1+num2)
     }else if (sign === '-' ){
         alert(num1-num2)
     }else if (sign === '*' || sign === 'x' || sign === 'X'){
         alert(num1*num2)
     }else// if (sign === '/'){
         alert(num1/num2)
     }else{
         alert('Enter corrent Operation')
     }
 }
 let num1 = +prompt('num1')
 let num2 = +prompt('num2')
 let sign = prompt('sign')
 calc(num1,num2,sign)




// ============================TASK 05================================


 const squr = num => alert(num*num);
 let num = +prompt('Number');
 squr(num)




// ============================TASK 06================================


 function factorial(n){
     let answer = 1;
     if (n == 0 || n == 1){
       return answer;
     }else{
       for(var i = n; i >= 1; i--){
         answer = answer * i;
       }
       return answer;
     }  
   }
   let n = +prompt('number');
   answer = factorial(n)
  alert("The factorial of " + n + " is " + answer);



 //============================TASK 07================================


 function count (start,stop){
     for(i=start; i<=stop; i++){
         document.write(i + '<br>')
     }
 }
 let num1 = +prompt('Num 1')
 let num2 = +prompt('Num 2')
 count(num1,num2)



// ============================TASK 08================================


 function calcHypotenus(base,  per) {
     return Math.sqrt(base*base  + per*per) ;
 }
 let base = +prompt('base')
 let height = +prompt('Height')
 alert(calcHypotenus(base,height))



// ============================TASK 09================================


  function area(height,width){
     let ans = height*width;
     return(
         alert(ans)
     )
  }
  let a= 5;
  let b =10;
  area(4,4)
  area(a,b)



// ============================TASK 10================================


 function palindrome(word) {
     return word == word.split("").reverse().join("");
 }
 let word = 'racecar'
 alert(palindrome(word))



// ============================TASK 11================================


 function capatlize(str) {
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
          You do not need to check if i is larger than splitStr length, as your for does that for you
          Assign it back to the array
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
     }
      Directly return the joined string
     return splitStr.join(' '); 
  }
  let str =  'the quick brown fox'
   alert(capatlize(str))



// ============================TASK 12================================


  function extract(str){
     let loc = str.indexOf('Development');
    return str.slice(loc,15)
  }
  let str = 'Web Development Tutorial' 
  alert(extract(str))



// ============================TASK 13================================


 function count(para){
     let word = /o/ig; 
     let result = paragraph.match(word);
     console.log(result);
     var resultCount=0;
     if(Array.isArray(result)){
     for(var i=0;i<result.length;i++){
       resultCount++;
    }
     alert("result count = "+resultCount);
 }
 
}
 let paragraph =  'JSResourceS.com'
 count(paragraph)



// ============================TASK 14================================


 let PI = Math.PI
     function calcCircumference(r){
         return alert("Circumfernce:" + r*2* PI)
     }
     function calcArea(r){
         return alert('Area:' + PI*r*r)
     }
     calcArea(3)
     calcCircumference(3)*/