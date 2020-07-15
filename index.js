var express = require('express');
var socket = require('socket.io')

var app = express();

app.listen(4000, function () {
    console.log("listening...");
})

app.use(express.static('public'));