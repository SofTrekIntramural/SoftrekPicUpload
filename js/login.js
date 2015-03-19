$(document).ready(function(){
$("#login").click(function(){

var password = $("#password").val();
// Checking for blank fields.
if( password ==''){
$('input[type="text"],input[type="password"]').css("border","2px solid red");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
alert("Please fill in the field!");
}else {
$.post("login.php",{ password1:password},
function(data) {
//if(data=='Invalid Email.......') {
//$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
//$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
//alert(data);} 
else if(data=='Incorrect token!'){
$('input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
alert(data);
} else if(data=='Login successful!'){
$("form")[0].reset();
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
} else{
alert(data);
}
});
}
});
});
