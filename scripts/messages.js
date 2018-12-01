var messages = [];

$(document).ready(function(){
    $('#newMsg').keypress(function(e){
      if(e.which==13)
      $('#msgSendBtn').click();
    });
});

function appendMsg() {
    var node = document.createElement("DIV");
    var pg = document.createElement("P");
    node.setAttribute("class", "outgoing_msg sent_msg");
    var input = document.getElementById("newMsg");
    var textnode = document.createTextNode(input.value);
    pg.appendChild(textnode);
    node.appendChild(pg);
    document.getElementById("chatBody").appendChild(node);
    document.getElementById("newMsg").value='';
  //  messages.push(text);
  //  localStorage.setItem("messages", JSON.stringify(messages));
}

/*function loadMessages() {
    if (localStorage.getItem("messages") !== null) {
        var stored_msgs = JSON.parse(localStorage.getItem("messages"));
        
        for(i=0; i<stored_msgs.length; i++) {
            var node = document.getElementById("DIV");
            var pg = document.createElement("P");
            node.setAttribute("class", "outgoing_msg sent_msg");
            pg.appendChild(stored_msgs[i]);
            node.appendChild(pg);
            document.getElementById("chatBody").appendChild(node);
            document.getElementById("newMsg").value='';
        }
    
    } else {
        return;
    }
}*/