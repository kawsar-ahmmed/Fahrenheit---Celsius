var farn = parseInt(prompt("Enter Your Fahrenheit: "));
var cels = parseInt(prompt("Enter Your Celsius : "));

// Fahrenheit - Celsius

var do_cels = (farn - 32) * (5/9);
var do_far = (cels * (9/5)) + 32;
// 
result = document.write("Celsius : ")
document.write(do_cels + "<br/>");

//  Celsius - Fahrenheit

result = document.write("Fahrenheit : ")
document.write(do_far + "<br/>");

