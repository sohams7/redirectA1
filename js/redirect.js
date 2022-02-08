function myFunction()
{
var em =document.forms["myForm"]["Mail"].value;
var pw =document.forms["myForm"]["Pass"].value;
if(em=="admin@gmail.com" && pw=="admin")
{
window.location.href="listing.html";
}
else if(em=="soham@gmail.com" && pw=="soham")
{
window.location.href="listing.html";
}
else{
alert("Invalid email and password");
}
}
