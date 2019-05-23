import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactTimeout from 'react-timeout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router'
const $ = window.$;
// const $ = window.$;
var user_id = localStorage.getItem('user_id');;
var final_template = [];
var skills = [];
class Timeline extends Component {
    componentDidMount() {

    }

    state = {
        timeline_data: [],
        companies_data: [],
        skills: []
    }
    applicationHandler = (e) => {
        e.preventDefault()
        console.log(e.target.job_id.value)
        console.log(e.target.refrential.value)
        var job_id = e.target.job_id.value;
        var refrential = e.target.refrential.value ? e.target.refrential.value: 0;
        let url = 'http://localhost:3002/users/apply'
        axios.post(url, {
            job_id,
            user_id,
            refrential
        })
            .then((response) => {
                
                if (response.data.status == 'Succesful') {
                    toast("Succesfully Applied", {

                        onClose: () => {
                          
                        }
                      });
                    this.setState({
                        timeline_data: this.state.timeline_data.filter((job) => {
                            return job.job_id != job_id;
                        })
                    });
                    console.log(this.state.timeline_data)

                } else {
                    console.log('cannot proccess apply on backend');
                }


            })
            .catch((error) => {
                console.log(error);
            });
    }
    //pending
    getskills = (job_id)=> {
        // skills = [];
        // let url = 'http://localhost:3002/users/getskills';
        // axios.post(url, {
        //     job_id
        // })
        //     .then((response) => {
        //         // console.log(response.data);
        //         response.data.forEach((skill) => {
        //             skills.push(
        //             <li><a href="#" title>{skill}</a></li>
        //             )
        //         })
        //         // console.log(this.state.timeline_data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        //     return skills;
    }
    jobTemplate = () => {

        //     var final_template = [];
        this.state.timeline_data.forEach((job) => {
        //    var  myskills = this.getskills(job.id);
            // console.log(skills)
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
                                            {/* {myskills} */}
                                            {/* <li><a href="#" title>HTML</a></li>
                                            <li><a href="#" title>PHP</a></li>
                                            <li><a href="#" title>CSS</a></li>
                                            <li><a href="#" title>Javascript</a></li>
                                            <li><a href="#" title>Wordpress</a></li> */}
                                        </ul>
                                    </div>
                                    <div className="epi-sec">
                                        <form onSubmit={this.applicationHandler}>
                                            <span><strong>Enter Reference Code =></strong> </span>
                                            {/* <h5>Enter Reference Code if any ??</h5> */}
                                            <input type="text" name="refrential" id ="refrential" style={{marginRight: '20px'}} /> 
                                            <input type="text" name="job_id" id ="job_id" value={job.job_id} type="hidden" /> 
                                        <button className="btn btn-danger center" type="submit">apply</button>
                                        </form>   
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
        axios.post(url,{
            user_id 
        })
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
    //    window.location.reload();
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