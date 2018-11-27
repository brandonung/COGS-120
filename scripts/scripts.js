
// functions to go to pages
function goLogin() {
    window.location="./login.html"
}

function goIndex() {
    window.location="./index.html"
}

function goHome() {
    window.location="./home.html"
}

function goProfile(event) {
    if (event == "sdcc") {
        window.location="./profile.html"    
    } else if (event == "allcal") {
        window.location="./profileAllCal.html"
    } else if (event == "spiderman") {
        window.location="./spiderman.html"
    }  else if (event == "acspiderman") {
        window.location == "./spidermanAllCal.html"
    }
}

function goMessage() {
    window.location="./messages.html"
}

// functions to prompt and hide the event code popup
/*function promptEventCode() {
    var modal = document.getElementById('eventModal');
    modal.style.display = "block";

}

function hideEventCode() {
    var modal = document.getElementById('eventModal');
    modal.style.display = "none";
}

function validateCode() {
    var event = document.getElementById("eventForm");
    if (event.password.value === "123-456") {
        alert("Valid Code");
    } else {
        alert("Invalid Code");
    }
}*/

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