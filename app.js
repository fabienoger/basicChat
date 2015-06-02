var $message = document.getElementById("message");
var $submit = document.getElementById("submit");
var $chat = document.getElementById("chat");
var $tryTime = document.getElementById("tryTime");
var $tryReset = document.getElementById("tryReset");


function tryTime() {
  actuTime();
  insertText("");
}

function actuTime() {
  date = new Date();
  return date.getHours()+ "h " + date.getMinutes() + "m " + date.getSeconds()+ "s";
}

function reset() {
  $chat.innerHTML = "";
  $message.value = "";
}

function addMessage() {
  if($message.value == "/time") {
    insertText("");
  }
  else if ($message.value == "/reset") {
    reset();
  }
  else if ($message.value == "Bonjour" || $message.value == "bonjour" || $message.value == "salut" || $message.value == "yo"){
    insertText($message.value);
    insertText("~ SUPER ADMIN ~ Hello !");
  }
  else if ($message.value != "" && $message.value != " ") {
    insertText($message.value);
  }
}

function insertText (msg){
    var node = document.createElement("p");
    var textNode = document.createTextNode(actuTime() + " : " + msg);
    node.appendChild(textNode);
    $chat.insertBefore(node, $chat.childNodes[0]);
    $message.value = "";
}

$tryReset.onclick = reset;
$tryTime.onclick = tryTime;
$submit.onclick = addMessage;
