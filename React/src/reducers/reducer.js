import { socket } from '../index';

const reducer = (
  state = {
    pot: 0,
    snackbarIsOpen: false,
    name: null,
    names: [],
    mode: null,
    whoDidIt: null,
    mssg:[]
  },
  action
) => {
  console.log('aliakber',state, socket);
  switch (action.type) {
    case 'SEND_IN':
    console.log('action', action);
    let name = localStorage.getItem('chatName');
    let mssg = [...state.mssg, name + ' :  '+ action.data] 
  //  console.log(action, mssg);
  //  alert('aliakber');
    state = { mssg: mssg };
    console.log('send_mssg', state);
    socket && socket.emit('UPDATE_CHAT', state);
    break;

    case 'DELIVER_UPDATED_CHAT_TO_REDUCER':
      console.log('DELIVER_UPDATED_CHAT_TO_REDUCER',action)
      state = { ...state, mssg:action.updatedChat.mssg };
      break;

    case 'CURRENT_CHAT_TO_REDUCER':
      console.log(action.type)
      state = { ...state, mssg: action.mssg };
      break;
    case 'ASSIGNED_USERNAME':
      state = { ...state, name: action.name };
      console.log(state);
      break;
    case 'PUT_ALL_NAMES_TO_REDUCER':
      state = { ...state, names: action.names };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
