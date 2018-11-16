function appendMsg() {
    var node = document.createElement("DIV");
    var pg = document.createElement("P");
    node.setAttribute("class", "outgoing_msg sent_msg");
    var input = document.getElementById("newMsg");
    var textnode = document.createTextNode(input.value);
    pg.appendChild(textnode);
    node.appendChild(pg);
    document.getElementById("chatBody").appendChild(node);
}