const net = require("net");
// const { stdout } = require("node:process");

const connect = function (data) {
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('You are connected to the server');
    conn.write('Name: LOG');
    // conn.write('Move: up');
    // setInterval(() => conn.write('Move: up'), 50);
  })

  return conn;
};


module.exports = {
  connect
}