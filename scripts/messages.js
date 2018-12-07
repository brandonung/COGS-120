var messages = [];

$(document).ready(function(){
    $('#newMsg').keypress(function(e){
      if(e.which==13)
      $('#msgSendBtn').click();
    });
});

function appendMsg() {
    var node = document.createElement("DIV");
    var inner = document.createElement("DIV");
    var pg = document.createElement("P");
    var currtime = document.createElement("SPAN");

    node.setAttribute("class", "outgoing_msg");
    inner.setAttribute("class", "sent_msg");
    var input = document.getElementById("newMsg");
    var textnode = document.createTextNode(input.value);
    pg.appendChild(textnode);
    inner.appendChild(pg);
    
    currtime.setAttribute("class", "time_date");
    inner.appendChild(currtime);
    node.appendChild(inner);

    startTime(currtime);

    document.getElementById("chatBody").appendChild(node);
    document.getElementById("newMsg").value='';
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
  
function startTime(currtime) {
    var today = new Date();
    var ampm = "AM";
    var h = today.getHours();
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h -= 12;
        ampm = "PM";
    }
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    currtime.innerHTML = h + ":" + m + ampm;
    t = setTimeout(function() {
      startTime()
    }, 500);
}