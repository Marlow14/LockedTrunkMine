const net = require('net');

var server = net.createServer(function(socket){
    const date = new Date();

    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getMinutes().toString().padStart(2,'0');

    const dateString = `${year}-${month}-${day} ${hour}:${minute}
`;

    socket.end(dateString);
});
server.listen(parseInt(process.argv[2]));

