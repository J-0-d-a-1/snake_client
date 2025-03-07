const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP adress here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JMP");

    // setInterval(() => {
    //   conn.write("Move: up");
    //   setInterval(() => {
    //     conn.write("Move: left");
    //     setInterval(() => {
    //       conn.write("Move: down");
    //       setInterval(() => {
    //         conn.write("Move: right");
    //       }, 50);
    //     }, 50);
    //   }, 50);
    // }, 50);
  });

  return conn;
};

module.exports = connect;
