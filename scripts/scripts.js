function logoutConfirm() {
    var txt;
    if (confirm("Are you sure you want to logout?")) {
        window.location="./login.html"
    }
    
    document.getElementById("demo").innerHTML = txt;
}

function goProfile() {
    window.location="./profile.html"
}