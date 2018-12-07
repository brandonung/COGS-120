var addToChatBody = document.getElementById("msgSendBtn");
var newMsg = document.getElementById("newMsg");
var chatBody = document.getElementById("chatBody");

addToChatBody.addEventListener('click', function(event) {
    event.preventDefault();

    chatBody.innerHTML += newMsg;

    localStorage.setItem('chatMsgs', chatBody.innerHTML);

}, false);

var saved = localStorage.getItem('chatMsgs');

if (saved) {
    chadBody.innerHTML = saved;
}