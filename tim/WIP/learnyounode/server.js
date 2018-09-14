const http = require('http');
const map = require('through2-map');

const toUpper = map(function(chunk){
    return chunk.toString().toUpperCase();
})

const server = http.createServer(function(req,res){
    if (req.method == "POST"){
        req.pipe(toUpper).pipe(res);
    }
});

server.listen(parseInt(process.argv[2]));