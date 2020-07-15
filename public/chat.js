//front end connection
var socket = io.connect("http://localhost:4000")

var message = document.getElementById('message'),
      usr = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

btn.addEventListener('click', function() {
    socket.emit('message', {
        message : message.value,
        username : usr.value
    })
})

socket.on('message', function(data){
    output.innerHTML += '<p><strong>' + data.username + ':</strong> ' + data.message + '</p>'
})