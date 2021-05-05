const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

console.log("Connecting ...");
connect();