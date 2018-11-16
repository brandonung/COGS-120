
// functions to go to pages
function goLogin() {
    window.location="./login.html"
}

function goHome() {
    window.location="./index.html"
}

function goProfile() {
    window.location="./profile.html"
}

function goMessage() {
    window.location="./messages.html"
}

// functions to prompt and hide the event code popup
function promptEventCode() {
    var modal = document.getElementById('eventModal');
    modal.style.display = "block";

}

function hideEventCode() {
    var modal = document.getElementById('eventModal');
    modal.style.display = "none";
}

function validateCode() {
    var input = document.getElementById("ecode");
    if (input.value === "123-456") {
        alert("Valid code entered!");
        window.location="./home.html";
    }
}

// functions to prompt and hide the logout confirmation
function showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// hide popups by clicking outside the popup window
window.addEventListener('load', function() {
    var modal = document.getElementById('myModal');
    var eventCode = document.getElementById('eventModal');
    window.onclick = function(event) {
        if (event.target == modal || event.target == eventCode) {
            modal.style.display = "none";
            eventCode.style.display = "none";
        }
    }
})