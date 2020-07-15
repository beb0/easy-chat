//front end connection
var socket = io.connect("http://localhost:4000")

var message = document.getElementById('message'),
      usr = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

btn.addEventListener('click', function() {
    socket.emit('message', {
        message : message.value,
        username : usr.value
    })
})

message.addEventListener('keypress', function () {
    socket.emit('typing', usr.value)    
})

socket.on('message', function(data){
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>' + data.username + ':</strong> ' + data.message + '</p>'
})

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message.. </em></p>'
})