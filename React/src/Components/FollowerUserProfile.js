import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {fetchUserProfile} from '../actions/FollowerUserProfileAction'
import {followBlockStatus} from '../actions/FollowBlockStatusAction'


class FollowerUserProfile extends Component {

    state={
        location:null
    }

    componentWillMount(){

        let user_id = this.props.location.state.user_id;
        console.log(this.props.location.state);
        this.setState({status:this.props.location.state.status, user_id:user_id})
        this.props.dispatch(fetchUserProfile(user_id));

    }

    handleSubmit=(e)=>{
        if(this.props.user.status !== "pending")
            this.props.dispatch(followBlockStatus(this.state.user_id, this.state.status));
        else
            this.props.dispatch(followBlockStatus(this.state.user.id, this.state.status));
        this.setState({location:'change'})    
    }

    render() {

        
        if(this.state.location)
        {
            return <Redirect to = '/company/followers' />;
        }

        console.log('state', this.state)
        let { userDetails } = this.props.user;
        let { skills } = this.props.user;
        
    let user = <div>
                {userDetails ? 
                <div>
                    <h3>{ userDetails["firstname"] }</h3>
                    <h3>{ userDetails["lastname"] }</h3>
                    <h3>{ userDetails["email"] }</h3>
                    <h3>{ userDetails["address"] }</h3>
                    <h3>{ userDetails["phoneNumber"] }</h3>
                    <h3>{ userDetails["field"] }</h3>                     
                </div>
                :
                <h3>Loading Page Content !</h3>
                }
            </div>;

    
    // // if(skills)
    // // for(i=0; i<skills.length; i++)
    // // {
        
    // // }

    let skill = skills && skills.map((key)=>
    {
        console.log(key["skill"])
        return(
            <div>
                <h3>{key["skill"]}</h3>
            </div>
        )
    });

    return (
        <div className= "container"> 
            { user }
            <h3>skills Required</h3>
            { skill }
            <div className="card-action">
                <button className="btn waves-effect waves-light" type={this.state.status} name="action" onClick={this.handleSubmit}>
                { this.state && this.state.status==='approved' ? "Following" : "Blocked" }
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
    console.log('userProfile',state);
    return{
        user:state.FollowerProfile.user
    }
}

export default connect(mapStateToProps)(FollowerUserProfile);
