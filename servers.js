var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function happyMessage(request, response) {
    response.end("You're an awesome person!");
}

function sadMessage(request, response) {
    response.end("Man, you suck today...");
}

var server1 = http.createServer(happyMessage);
var server2 = http.createServer(sadMessage);

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
    
})
