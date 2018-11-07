function logoutConfirm() {
    var txt;
    if (confirm("Are you sure you want to logout?")) {
        window.location="./login.html"
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}