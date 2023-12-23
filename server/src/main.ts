import { Server } from "socket.io";
const server = new Server();

server.on("connect", (socket) => {
  console.log("A user connected");
});
console.clear();
server.listen(8080);
