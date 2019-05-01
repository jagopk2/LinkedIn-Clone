import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;
// const $ = window.$;
var user_id = 3;
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
    applicationHandler = (job_id) => {
        let url = 'http://localhost:3002/users/apply'
        axios.post(url, {
            job_id,
            user_id
        })
            .then((response) => {
                console.log(response.data)
                if (response.data.status == 'Succesful') {
                    this.setState({
                        timeline_data: this.state.timeline_data.filter((job) => {
                            return job.job_id != job_id;
                        })
                    });
                }else{
                    console.log('cannot proccess apply on backend');
                }


            })
            .catch((error) => {
                console.log(error);
            });
    }
    jobTemplate = () => {
        var final_template = [];
        this.state.timeline_data.forEach((job) => {
            // console.log(job);
            final_template.push(
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>
                        {job.job_name}
                        <span class="new badge" data-badge-caption={job.field}></span>
                    </div>
                    <div className="collapsible-body">
                        <p>{job.description}</p>
                        {/* <a href={job.website}>Visit Us</a><br /> */}
                        <button className="btn " onClick={() => this.applicationHandler(job.job_id)}>Apply</button>

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