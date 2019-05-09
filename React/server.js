const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

server.listen(8000, () => console.log('connected to port 8000!'));

app.use(cors());

let pot = 0;
let names = [];
let serverNames = [];
let mssg = '';
io.on('connection', socket => {
  console.log('in socket');
  socket.on('UPDATE_POT', state => {
    pot = state.pot;
    socket.broadcast.emit('UPDATED_POT', state);
  });

  socket.on('chat', state => {
    mssg = state.mssg;
    socket.broadcast.emit('chat', state);
  });


  socket.on('GET_CURRENT_POT', () => socket.emit('CURRENT_POT', pot));

  socket.on('SEND_NAME_TO_SERVER', name => {
    serverNames = [...serverNames, { socketId: socket.id, name }];
    names = [...names, name];
    socket.broadcast.emit('SEND_NAMES_TO_CLIENTS', names);
    socket.emit('SEND_NAMES_TO_CLIENTS', names);
  });

  socket.on('SOMEONE_PITCHED_IN', name => {
    socket.broadcast.emit('GUESS_WHO_PITCHED_IN', name);
  });

  socket.on('SOMEONE_GOT_ONE', name => {
    socket.broadcast.emit('GUESS_WHO_GOT_ONE', name);
  });

  socket.on('disconnect', () => {
    serverNames = serverNames.filter(data => data.socketId !== socket.id);
    names = serverNames.map(data => data.name);
    socket.broadcast.emit('SEND_NAMES_TO_CLIENTS', names);
    socket.emit('SEND_NAMES_TO_CLIENTS', names);
  });

  socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });


});
