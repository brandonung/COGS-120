function logoutConfirm() {
    var txt;
    if (confirm("Are you sure you want to logout?")) {
        window.location="./login.html"
    }
    
    document.getElementById("demo").innerHTML = txt;
}

function goHome() {
    window.location="./index.html"
}

function goProfile() {
    window.location="./profile.html"
}

function promptEventCode() {
    var code = prompt("Please enter your event code", "###-###")
    if (code) {
        window.location="./mboard.html"
    } else {
        return null;
    }

}

function showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

window.addEventListener('load', function() {
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})