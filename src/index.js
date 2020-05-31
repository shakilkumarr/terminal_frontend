import io from "socket.io-client";

import TerminalUI from "./TerminalUI";

const serverAddress = "http://localhost:8080"; /* SERVER ADDRESS */

const startTerminal = container => (socket) => {
  const terminal = new TerminalUI(socket);
  terminal.attachTo(container);
  terminal.startListening();
}

const connectToSocket = serverAddress => new Promise((res) => {
  const socket = io(serverAddress);
  res(socket);
});

/** START THE PROCESS */
(() => {
  const container = document.getElementById('terminal-container');
  connectToSocket(serverAddress)
    .then(startTerminal(container));
})();
