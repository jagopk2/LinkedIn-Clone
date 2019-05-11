import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getCurrentChat,
  sendNameToServer,
  sendGetOneToServer,
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
    getCurrentChat(dispatch);
  }

  handleChange=(e)=>{
    
    this.setState({[e.target.id]:e.target.value})
    console.log(this.state.message);
  }

  handleClick=(e)=>{
    const {dispatch} = this.props 
    let name = 'aliakber';
    console.log(this.state.message);
    e.preventDefault();
 //   dispatch({ type: 'SEND_IN' });
    if(this.state.message !== '')
      dispatch({ type: 'SEND_IN', data:`${this.state.message}`});
    this.state.message = ''; 
 //   chatMessage(this.props.message, name);
  }
  
  getSender = (text) =>{
    return text.substring(0,text.indexOf(':'))
  }

  getMessage = (text) =>{
    return text.substring(text.indexOf(':')+1)
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
<div id="pro-chat">
        <h2>Chat !!!</h2>
        <div id="chat-window">
          <div id="output">
           {
            mssg && mssg.map(text=>{
              return (
                <div>
                  <p><strong>{ this.getSender(text) }</strong>{ this.getMessage(text) }</p>
                </div>
             );
            })
            }
          </div>
        </div>
        <input id="message" onChange={this.handleChange} value={this.state.message} type="text" placeholder="Message"/>
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
