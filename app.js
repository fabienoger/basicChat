var $message = document.getElementById("message");
var $submit = document.getElementById("submit");
var $chat = document.getElementById("chat");
var $tryTime = document.getElementById("tryTime");


function tryTime() {
  insertText("");
}

date = new Date;
dateH = date.getHours();
dateM = date.getMinutes();
dateS = date.getSeconds();

function addMessage() {
  if($message.value == "/time") {
    insertText("");
  }
  else {
    insertText($message.value);
  }
}

function insertText (msg){
    var node = document.createElement("p");
    var textNode = document.createTextNode(dateH + "h " + dateM + "m " + dateS + "s : " + msg);
    node.appendChild(textNode);
    $chat.insertBefore(node, $chat.childNodes[0]);
    $message.value = "";
}

$tryTime.onclick = tryTime;
$submit.onclick = addMessage;
