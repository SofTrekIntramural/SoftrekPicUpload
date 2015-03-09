function handleLogin() {
    var form = $("#loginForm");    
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    var u = $("#username", form).val();
    var p = $("#password", form).val();
    var d = $("dev", form).val();
    console.log("click");
    if(u != '' && p!= '') {
        $.post("http://democv.softrek.com:8082/clearview-api", {username:u,password:p,dev:d}, function(res) {
            if(res == true) {
                //store
                window.localStorage["username"] = u;
                window.localStorage["password"] = p;
                window.localStorage["dev"] = d;
                $.mobile.changePage("some.html");
            } else {
                navigator.notification.alert("Your login failed", function() {});
            }
         $("#submitButton").removeAttr("disabled");
        },"json");
    } else {
        //Thanks Igor!
        navigator.notification.alert("You must enter a username, password and dev", function() {});
        $("#submitButton").removeAttr("disabled");
    }
    return false;
}
