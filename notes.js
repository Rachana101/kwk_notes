Tool to check our js
- console.log("insert variable")
Note: User never sees, only developers tool

VARIABLE: defining an idea or quanitity for the computer for it to remember
*camelCase --first word is lower case, first letter of second word is capitalized

Data Types:
1) "STRINGS": Must be putninto quotes, respresents text
    var harryStyles = "perfect human being";

2)NUMBERS: DO NOT use quotes, represents a quantity or amount. Can use operatores to perform math.
    var harryNumber = 1;
  a) < -- > greater than or less than. Ex: 8>5
  b) +,-,*,/ -->
  c) == or === --> equal to
  d) <= or >== --> less than or equal to and greater than or equal to
  e) % --> remainder ex: 16%3 computer will return 1  cause that's the remainder of 16/3.

  How to use number and string variables

  var dogName = "Cricket";
  var dogLeash = 1;
  var poopBags = 2;
  var waterBottles = 1;

  var numItems = dogLeash + poopBags + waterBottles;

  SUMMARY: 1) Broke down our problem into parts, 2) Defined our variables, 3) Used our variables to perform a task

  INTERPOLATION: integrating numerical values into strings using variables. MUST USE BACKTICKS (``).

  console.log(`Take ${dogName} on a walk! Don't forget to bring ${numItems} intems!`)

ARRAYS: a list of strings and/or numbers. Represented using square brackets. First item, assigned an index number of 0.
   var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

   console.log(arraySports[0]) --> "soccer"
   console.log(arraySport[4]) --> "diving"

   arraySports.length --> .length tells computer to print the number of items in an array

arraySports.push("gymnastics") --> adds an item to the end of an arrayDare
arraySports.pop --> removes the last item of an array

iQuery (ELEMENT ASCESSORS): library of shortcuts we download onto our html page. Link goes on second to last line  of our body, right above the js link. <script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>

EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (often times a button) for a click. On the click, perform a function (action)

Define specific area on HTML page using jQuery ($)
var dareButton = $('.darebutton');

area      listen for    action
dareButton.on('click', showDare);

another example:
dareButton.on('hover', showDare)

ADDING ELEMENTS TO THE WEBPAGE:
1) Think of user experience? What do w want the user to see/do?
2) Create an area or <div> in html page to add the Elements
3) Use jQuery -- $('nameofdiv') to tell computer where to look in my html file.
4) Create a function (action) to add the items to the html <div>
  a) .text --> only adds the words without any html formatting. CSS does NOT apply
  b) .append --> adds html elements to the html file. MUST use BACKTICS

  var truthContainer = $('.truthcontainer')

  function showTruth() {
    truthContainer.text(arrayTruth[2]);
    truthContainer.append(arrayTruth[3]);
  }

CONDITIONALS

1. Define the condition (what do you want to be true?)
2. Determine the action if the user meets the condition
3. Determine the action if the user does NOT meet the condition
4. Conditions exist in functions

if(condition){
  action if user meets the condition
}
else{
  action if user does not meet the condition
}


if(userNumber > 7){
  container.append(`<img src = ""`)
}
else{
  container.append(`<p>Sorry, Not Sorry!</p>`)
}
