$(document).ready(function(){
    $('#newMsg').keypress(function(e){
      if(e.which==13)
      $('#msgSendBtn').click();
    });
});

function appendMsg() {
    var node = document.createElement("DIV");
    var pg = document.createElement("P");
    var profpic = document.createElement("IMG");
    var piclink = document.createElement("A");
    var currtime = document.createElement("SPAN");

    node.setAttribute("class", "message");
    var input = document.getElementById("newMsg");
    var textnode = document.createTextNode(input.value);
    
    profpic.setAttribute("src", "images/selfie.jpg");
    profpic.setAttribute("onclick", "goProfile('sdcc')");
    profpic.setAttribute("class", "message");

    piclink.setAttribute("class", "user");
    piclink.setAttribute("href", "profile.html");

    piclink.innerHTML="It's Me: ";

    currtime.setAttribute("class", "time-right");
    currtime.setAttribute("id", "time");


    pg.appendChild(profpic);
    pg.appendChild(piclink);
    pg.appendChild(textnode);
    pg.appendChild(currtime);
    
    startTime(currtime);

    node.appendChild(pg);
    document.getElementById("msgboard").appendChild(node);
    document.getElementById("newMsg").value='';
  //  messages.push(text);
  //  localStorage.setItem("messages", JSON.stringify(messages));
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
