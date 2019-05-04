import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;
// const $ = window.$;
var user_id = 3;
var final_template = [];
class Timeline extends Component {
    componentDidMount() {

    }

    state = {
        timeline_data: [],
        companies_data: []
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
                } else {
                    console.log('cannot proccess apply on backend');
                }


            })
            .catch((error) => {
                console.log(error);
            });
    }
    jobTemplate = () => {

        //     var final_template = [];
        this.state.timeline_data.forEach((job) => {
            console.log(job);
            final_template.push(
                <div>
                    <div className="col-lg-6">
                        <div className="main-ws-sec">
                            <div className="posts-section">
                                <div className="post-bar">
                                    <div className="post_topbar">
                                        <div className="usy-dt">
                                            <img src={'http://localhost:3002/download/' + job.picture} alt="Image" height={50} width={50} />
                                            <div className="usy-name">
                                                <h3>{job.company_name}</h3>
                                                <span><img src="images/clock.png" alt />3 min ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="epi-sec">
                                        <ul className="descp">
                                            <li><img src="images/icon8.png" alt /><span>{job.company_name}</span></li>
                                            <li><img src="images/icon9.png" alt /><span>Pakistan</span></li>
                                        </ul>
                                        <ul className="bk-links">
                                            <li><a href="#" title><i className="la la-envelope" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="job_descp">
                                        <h3>{job.job_name}</h3>
                                        <ul className="job-dt">
                                            <li><a href="#" title>Full Time</a></li>
                                            <li><span>$30 / hr</span></li>
                                        </ul>
                                        <p>{job.description}... <a href={job.website} title>view more</a></p>
                                        <ul className="skill-tags">
                                            <li><a href="#" title>HTML</a></li>
                                            <li><a href="#" title>PHP</a></li>
                                            <li><a href="#" title>CSS</a></li>
                                            <li><a href="#" title>Javascript</a></li>
                                            <li><a href="#" title>Wordpress</a></li>
                                        </ul>
                                    </div>

                                </div>
                                {/*post-bar end*/}
                            </div>
                            {/*posts-section end*/}
                        </div>
                        {/*main-ws-sec end*/}
                    </div>
                </div>

            )


        })


        return final_template;
        // console.log(this.state.timeline_data);
    }

    componentWillMount() {
        let url = 'http://localhost:3002/users/timeline';
        axios.post(url)
            .then((response) => {
                var companies_data = [];
                console.log(response.data);

                this.setState({ timeline_data: response.data.timeline_result });
                // console.log(this.state.timeline_data);
            })
            .catch((error) => {
                console.log(error);
            });

    }


    render() {
        var final_template = this.jobTemplate();
        return (
            <main>
                <div class="main-section">
                    <div class="container">
                        <div class="main-section-data">
                            <div class="row">
                 
                                
                                {final_template}
                            </div>
                        </div>
                    </div>
                </div>
            </main >


        );
    }
}
export default Timeline;