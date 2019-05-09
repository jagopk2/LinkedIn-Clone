var socket=io.connect('http://localhost:3001');

console.log('aliakber');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback'),
    sendemail = document.getElementById('sendemail');

$("#"+btn).on('click', function(){
    console.log('aliakeber in button click')
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// sendemail.addEventListener('click', function(){
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
// });

message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value);
})

socket.on('chat', function(data) {
    feedback.innerHTML = ""
    output.innerHTML += '<p><strong>'+data.handle+"</strong>"+data.message+"</p>";
}); 

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+data +' is typing a message...</em></p>'
})
