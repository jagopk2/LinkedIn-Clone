import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const configureSocket = dispatch => {

  console.log('in socket file')
  socket.on('connect', () => {
    console.log('connected', socket);
  });

  socket.on('UPDATED_CHAT', state => {
    console.log('updatedchat', state)
    dispatch({ type: 'DELIVER_UPDATED_CHAT_TO_REDUCER', updatedChat: state });
  });

  socket.on('CURRENT_CHAT', mssg =>
  dispatch({ type: 'CURRENT_CHAT_TO_REDUCER', mssg: mssg })  
  );
  socket.on('SEND_NAMES_TO_CLIENTS', names =>
    dispatch({ type: 'PUT_ALL_NAMES_TO_REDUCER', names })
  );
  return socket;
};

export const getCurrentChat = () => socket.emit('GET_CURRENT_CHAT');

export const sendNameToServer = name =>
  socket.emit('SEND_NAME_TO_SERVER', name);


export const chatMessage = (mssg, sender) => 
  socket.emit('chat', {
      message: mssg
  });


// message.addEventListener('keypress', function(){
//   socket.emit('typing', handle.value);
// })

export default configureSocket;
