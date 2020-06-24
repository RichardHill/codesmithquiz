/* Connect to the message server. */
const webSocketAddress =
  "wss://n0qnpr6sic.execute-api.eu-west-2.amazonaws.com/dev";

const socket = new WebSocket(webSocketAddress);

socket.addEventListener("open", function (event) {
  socket.send("Connection established" + new Date().toString());
});

/* Send a message */

/* Display a message */
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
  processMessage(JSON.parse(event.data));
});

const sendMessage = (message) => {
  const messageToSend = `{
    "action": "sendMessage",
    "name": "Rich",
    "channelId": "General",
    "content": "${message}"}`;

  socket.send(messageToSend);
};

const processMessage = (message) => {
  console.log("The message type is -: " + message.event);
  switch (message.event) {
    case "channel_message": {
      console.log("We got a channel message");
      addTableRow(message);
    }
    case "subscriber_sub": {
      console.log("Someone has joined our channel!");
    }
  }
};

const addTableRow = (message) => {
  var table = document
    .getElementById("messageTable")
    .getElementsByTagName("tbody")[0];
  var row = table.insertRow(0);
  var dateTimeCell = row.insertCell(0);
  var nameCell = row.insertCell(1);
  var messageCell = row.insertCell(2);
  dateTimeCell.innerHTML = new Date().toISOString();
  console.log(message);
  nameCell.innerHTML = message.name === undefined ? "---" : message.name;
  messageCell.innerHTML =
    message.content === undefined ? "---" : message.content;
};
