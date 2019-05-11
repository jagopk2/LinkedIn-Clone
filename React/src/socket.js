import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const configureSocket = dispatch => {

  console.log('in socket file')
  socket.on('connect', () => {
    console.log('connected', socket.id);
  });

  socket.on('UPDATED_CHAT', state => {
    console.log('updatedchat', state)
    dispatch({ type: 'DELIVER_UPDATED_CHAT_TO_REDUCER', updatedChat: state });
  });

  socket.on('UPDATED_POT', state => {
    console.log('updatepot, state')
    dispatch({ type: 'DELIVER_UPDATED_POT_TO_REDUCER', updatedPot: state });
  });
  socket.on('GUESS_WHO_PITCHED_IN', name => {
    dispatch({ type: 'PICTHED_IN', name });
  });
  socket.on('CURRENT_POT', pot =>
    dispatch({ type: 'CURRENT_POT_TO_REDUCER', pot: pot })
  );
  socket.on('CURRENT_CHAT', mssg =>
  dispatch({ type: 'CURRENT_CHAT_TO_REDUCER', mssg: mssg })  
  );
  socket.on('SEND_NAMES_TO_CLIENTS', names =>
    dispatch({ type: 'PUT_ALL_NAMES_TO_REDUCER', names })
  );
  socket.on('GUESS_WHO_GOT_ONE', name => dispatch({ type: 'GOT_ONE', name }));
  return socket;
};

export const getCurrentChat = () => socket.emit('GET_CURRENT_CHAT');

export const sendNameToServer = name =>
  socket.emit('SEND_NAME_TO_SERVER', name);

export const sendPitchInToServer = name =>
  socket.emit('SOMEONE_PITCHED_IN', name);

export const sendGetOneToServer = name => socket.emit('SOMEONE_GOT_ONE', name);

export const chatMessage = (mssg, sender) => 
  socket.emit('chat', {
      message: mssg
  });


// message.addEventListener('keypress', function(){
//   socket.emit('typing', handle.value);
// })

export default configureSocket;
