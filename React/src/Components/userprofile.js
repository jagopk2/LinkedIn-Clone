import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
// import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollIntoView from 'react-scroll-into-view'
var user_id = 3;
var final_template = [];
export class UserProfile extends Component {
    componentDidMount() {

    }

    componentWillMount() {
        const { id } = this.props.match.params;
        user_id = id;
        if (!this.state.user) {
            let url = `http://localhost:3002/users/getuser`;
            axios.post(url, {
                user_id
            }).then((response1) => {
                console.log(response1.data)

                let url2 = 'http://localhost:3002/users/uappliedjobs';
                axios.post(url2, {
                    user_id
                })
                    .then((response2) => {
                        console.log('dasfsdfds')
                        console.log(response2.data);

                        this.setState({
                            ...this.state,
                            user: response1.data,
                            timeline_data: response2.data
                        });
                        // console.log(this.state.timeline_data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }).catch((err) => {
                if (err) {
                    console.log(err)
                }
            });

        }



        // if (this.state.timeline_data.length > 0) {

        // }
    }
   


    generate_template = () => {
        final_template = [];
        this.state.timeline_data.forEach((job) => {
            console.log(job);
            if (job.company_name !== 'notfound') {
                final_template.push(
                    <div>
                        {/* <div className="col-lg-6">
                            <div className="main-ws-sec">
                                <div className="posts-section"> */}
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
                                    <li><a href="#" title>{job.status}</a></li>
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
                        {/* </div> */}
                        {/*posts-section end*/}
                        {/* </div> */}
                        {/*main-ws-sec end*/}
                        {/* </div> */}
                    </div>

                )
            }else{
                final_template.push(
                    <div>No Applied Jobs</div>
                
                )
            }

        })

    }
    state = {
        user: null,
        timeline_data: []
    }
    render() {
        console.log('dsfada')
        console.log(this.state);
        if (this.state.user && this.state.timeline_data) {
            this.generate_template()
            // console.log(this.state.user);
            // console.log(this.state.timeline_data);
            console.log(final_template)
            var user = this.state.user;
            return (


                <div>
                    <section className="cover-sec">
                        <img src="images/resources/cover-img.jpg" alt />
                    </section>
                    <main>
                        <div className="main-section">
                            <div className="container">
                                <div className="main-section-data">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="main-left-sidebar">
                                                <div className="user_profile">
                                                    <div className="user-pro-img">
                                                        <img src={'http://localhost:3002/download/' + user.picture} style={{ height: '50%', width: '50%', objectFit: 'contain' }} alt />
                                                        <a href="#" title><i className="fa fa-camera" /></a>
                                                    </div>
                                                    {/*user-pro-img end*/}
                                                    <div className="user_pro_status">
                                                        <ul className="flw-hr">
                                                            <li><a href={user.email} title className="flww" ><i className="fa fa-envelope" />
                                                                Email</a></li>

                                                        </ul>
                                                        <ul className="flw-status">
                                                            <li>
                                                                <span>Following</span>
                                                                <b>34</b>
                                                            </li>
                                                            <li>
                                                                <span>Followers</span>
                                                                <b>155</b>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/*user_pro_status end*/}
                                                    <ul className="social_links">
                                                        <li><a href="#" title><i className="la la-globe" /> www.{user.firstname}.com</a>
                                                        </li>
                                                        <li><a href="#" title><i className="fa fa-facebook-square" />
                                                            Http://www.facebook.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-twitter" />
                                                            Http://www.Twitter.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-google-plus-square" />
                                                            Http://www.googleplus.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-behance-square" />
                                                            Http://www.behance.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-pinterest" />
                                                            Http://www.pinterest.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-instagram" />
                                                            Http://www.instagram.com/{user.firstname}...</a></li>
                                                        <li><a href="#" title><i className="fa fa-youtube" />
                                                            Http://www.youtube.com/{user.firstname}...</a></li>
                                                    </ul>
                                                </div>
                                                {/*user_profile end*/}
                                            </div>
                                            {/*main-left-sidebar end*/}
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="main-ws-sec">
                                                <div className="user-tab-sec">
                                                    <h3>"{user.firstname} {user.lastname}"</h3>
                                                    <div className="star-descp">
                                                        <span>Graphic Designer at Self Employed</span>
                                                        <ul>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star-half-o" /></li>
                                                        </ul>
                                                    </div>
                                                    {/*star-descp end*/}
                                                    <div className="tab-feed st2">
                                                        <ul>
                                                            <li data-tab="info-dd" className="active">
                                                                <a href="#" title>
                                                                    <img src="images/ic2.png" alt />
                                                                    <span>Info</span>
                                                                </a>
                                                            </li>
                                                            <li data-tab="show_jobs">
                                                                <ScrollIntoView selector="#show_jobs">
                                                                    <a href={"/uprofile/" + user_id} title>
                                                                        <img src="images/ic4.png" alt />
                                                                        <span>Applied Jobs</span>
                                                                    </a>
                                                                </ScrollIntoView>
                                                            </li>
                                                        </ul>
                                                    </div>{/* tab-feed end*/}
                                                </div>
                                                {/*user-tab-sec end*/}
                                                <div className="product-feed-tab current" id="info-dd">
                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title className="overview-open">Personal Info</a></h3>
                                                        <h4>First Name </h4>
                                                        <h5>{user.firstname}</h5>
                                                        <h4>Last Name </h4>
                                                        <h5>{user.lastname}</h5>
                                                        <h4>Phone Number</h4>
                                                        <h5>{user.phoneNumber}</h5>
                                                    </div>
                                                    {/*user-profile-ov end*/}
                                                    {/*user-profile-ov end*/}
                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title className="ed-box-open">Education</a> </h3>
                                                        <h4>Master of Computer Science</h4>
                                                    </div>
                                                    {/*user-profile-ov end*/}
                                                    <div className="user-profile-ov">
                                                        <h3><a href="#" title className="lct-box-open">Location</a></h3>
                                                        <h4>Pakistan</h4>
                                                        <p>151/4 BT Chownk, Karachi </p>
                                                    </div>
                                                    {/*user-profile-ov end*/}
                                                    <div className="user-profile-ov my-cv-info">
                                                        <h3><a href="#" title className="skills-open">CV</a> </h3>
                                                        <img />
                                                        <img src={'http://localhost:3002/download/' + user.cv} style={{ height: '100%', width: '100%', objectFit: 'contain' }} alt="Image" />
                                                    </div>
                                                    {/*user-profile-ov end*/}
                                                </div>
                                                <a ></a>
                                                {/* {final_template} */}
                                                <div ref="show_jobs">
                                                    {final_template}

                                                </div>
                                                {/*product-feed-tab end*/}

                                            </div>
                                            {/*main-ws-sec end*/}
                                        </div>
                                    </div>
                                </div>{/* main-section-data end*/}
                            </div>
                        </div>
                    </main>
                </div>

            )
        } else {
            console.log('asdfsdffffffffffff')
            console.log(this.state)
            return (
                <div>Loading..</div>
            )
        }
    }
}

export default UserProfile
