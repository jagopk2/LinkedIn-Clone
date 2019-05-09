import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  getCurrentPot,
  sendNameToServer,
  sendPitchInToServer,
  sendGetOneToServer,
  chatMessage
} from '../socket';
import { getAName } from '../usernames';
import SnackBarNotif from '../SnackbarNotif';

class Chat extends Component {

  state={
    message:''
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const name = getAName();
    console.log('name', name)
    getCurrentPot(dispatch);
    dispatch({ type: 'ASSIGNED_USERNAME', name });
    sendNameToServer(name);
  }

  closeSnackbar = () => this.props.dispatch({ type: 'ANOTHER_ONE_PITCHED_IN' });

  getOne = () => {
    const { dispatch, name } = this.props;
    dispatch({ type: 'GET_ONE' });
    sendGetOneToServer(name);
  };

  pitchIn = () => {
    const { dispatch, name } = this.props;
    dispatch({ type: 'PITCH_IN' });
    sendPitchInToServer(name);
  };

  handleChange=(e)=>{
    
    this.setState({[e.target.id]:e.target.value})
    console.log(this.state.message);
  }

  handleClick=(e)=>{
    const {dispatch} = this.props 
    let name = 'aliakber';
    console.log(this.state.message);
    e.preventDefault();
    dispatch({ type: 'SEND_MSSG', data:[`${this.state.message}`,`${name}`  ]});
    chatMessage(this.state.message, name);
  }

  render() {
    console.log('this.props', this.props);
    const {
      pot,
      name,
      names,
      snackbarIsOpen,
      mode,
      whoDidIt,
      mssg
    } = this.props;
    return (
<div id="mario-chat">
        <h2>Mario Chat</h2>
        <div id="chat-window">
          <div id="output" >
            {
            mssg &&mssg.map(text=>{
              return (
                <div>
                  
                  {text}
                </div>
              )
            })
            }
          </div>
        </div>
        <input id="message" onChange={this.handleChange} type="text" placeholder="Message"/>
        <button id="send" onClick={this.handleClick}>Send</button>
      </div> 
   );
  }
}

const mapStateToProps = state => (
  {
  pot: state.chatreducer.pot,
  name: state.chatreducer.name,
  names: state.chatreducer.names,
  snackbarIsOpen: state.chatreducer.snackbarIsOpen,
  mode: state.chatreducer.mode,
  whoDidIt: state.chatreducer.whoDidIt,
  mssg: state.chatreducer.mssg
});

export default connect(mapStateToProps)(Chat);
