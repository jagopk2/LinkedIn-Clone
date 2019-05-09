import { socket } from '../index';

const reducer = (
  state = {
    pot: 0,
    snackbarIsOpen: false,
    name: null,
    names: [],
    mode: null,
    whoDidIt: null,
    mssg:''
  },
  action
) => {
  console.log('aliakber',state, socket);
  switch (action.type) {
    case 'SEND_MSSG':
    console.log('action', action);
    let mssg = [...state.mssg, action.data[1] + ' :  '+ action.data[0]] 
    state = { ...state, mssg };
    socket && socket.emit('chat', state);
    break;
  

    case 'PITCH_IN':
      console.log(action.type)
      state = { ...state, pot: ++state.pot, mode: 'pitch' };
      socket && socket.emit('UPDATE_POT', state);
      break;
    case 'GET_ONE':
      console.log(action.type)
      state = { ...state, pot: --state.pot, mode: 'get' };
      socket && socket.emit('UPDATE_POT', state);
      break;
    case 'DELIVER_UPDATED_POT_TO_REDUCER':
      console.log(action.type)
      state = { ...state, pot: action.updatedPot.pot };
      break;
    case 'CURRENT_POT_TO_REDUCER':
      console.log(action.type)
      state = { ...state, pot: action.pot };
      break;
    case 'ASSIGNED_USERNAME':
      state = { ...state, name: action.name };
      console.log(state);
      break;
    case 'PUT_ALL_NAMES_TO_REDUCER':
      state = { ...state, names: action.names };
      break;
    case 'PICTHED_IN':
    console.log(action.type)

      state = {
        ...state,
        snackbarIsOpen: true,
        mode: 'pitch',
        whoDidIt: action.name
      };
      break;
    case 'GOT_ONE':
      state = {
        ...state,
        snackbarIsOpen: true,
        mode: 'get',
        whoDidIt: action.name
      };
      break;
    case 'ANOTHER_ONE_PITCHED_IN':
      state = { ...state, snackbarIsOpen: false };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
