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
});

const sendMessage = (message) => {
  const messageToSend = `{
    "action": "sendMessage",
    "name": "Rich",
    "channelId": "General",
    "content": "${message}"}`;

  socket.send(messageToSend);
};
