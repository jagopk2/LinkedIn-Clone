import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;
// const $ = window.$;
class Timeline extends Component {
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs.collapsible)
    
        $(element).ready(function () {
          $('.collapsible').collapsible({
            accordion: true  
          });
        });
      }

    state = {
        timeline_data: []
    }

    jobTemplate = () => {
        var final_template = [];
        this.state.timeline_data.forEach((job) => {
            console.log(job);
            final_template.push(
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>
                        {job.job_name}
                        <span className="new badge">1</span></div>
                    <div className="collapsible-body">
                        <p>{job.description}</p>
                        <a href={job.website}>{job.company_name}</a>
                    </div>
                </li>

            )

        })
        return final_template;
    }

    componentWillMount() {
        let url = 'http://localhost:3002/users/timeline'
        axios.post(url)
            .then((response) => {
                // console.log(response.data);
                this.setState({ timeline_data: response.data });
                // console.log(this.state.timeline_data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        var final_template = this.jobTemplate();
        return (

            <div className="container">
                <ul className="collapsible" ref="collapsible" >
                    {final_template}
                </ul>
            </div>
        );
    }
}
export default Timeline;