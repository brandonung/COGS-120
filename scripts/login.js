$(document).ready(function(){
    $('#uname').keypress(function(e){
      if(e.which==13)
      $('#submitCreds').click();
    });

    $('#pw').keypress(function(e){
        if(e.which==13)
        $('#submitCreds').click();
      });
});

function validateCreds() {
    event = document.getElementById("login");
    user = document.getElementById("uname");
    pass = document.getElementById("pw");

    if ((user.value == "cogs120") && (pass.value == "cogs120")) {
        goIndex();
    } else {
        alert("Invalid username/password combination! Try again.");
        goLogin();
    }
}