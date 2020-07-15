var express = require('express');
var socket = require('socket.io')

var app = express();

var server = app.listen(4000, function () {
    console.log("listening...");
})

app.use(express.static('public'));

var io = socket(server)

io.on('connection', function(socket){
    console.log(`connection made at ${socket.id}`);

    socket.on('message', function(message){
        io.sockets.emit('message', message)
    })
})