import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const $ = window.$;
// const $ = window.$;
var user_id = localStorage.getItem('user_id');
// var final_template = ['<div>Loading</div>'];
class FollowComp extends Component {
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs.fixedactionbtn)

        // $(element).ready(function () {
        //     $('.fixed-action-btn').floatingActionButton();
        // });
    }
    state = {
        companies_data: [],
        follow: true
    }
    clickHandler = (company_id) => {
        console.log(company_id);
        let url = "http://localhost:3002/users/followuser";
        axios.post(url, {
            follower_id :company_id,
            user_id
        }).then((response) => {
            // console.log(response.data);
            if (response.data.status == 'Succesful') {
                this.setState({
                    companies_data: this.state.companies_data.filter((company) => {
                        return company.id != company_id;
                    })
                });
            } else {
                console.log('cannot proccess apply on backend');
            }
        }).catch((error) => {
            console.log(error);
        });

    }




    companyTemplate = () => {
        var final_template = [];
        // console.log('sdfds')
        this.state.companies_data.forEach((company) => {
            console.log(company);
            var companypicture = `http://localhost:3002/download/${company.picture}`;
            var id_link = `http://localhost:3000/uprofile/${company.id}`
            var id = company.id;
            final_template.push(
                <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="company_profile_info">
                    <div className="company-up-info">
                        <img src={companypicture} alt="Image" height={150} width={150} />
                        <h3>{company.firstname} {company.lastname}</h3>
                        <h4>{company.address}</h4>
                        <ul>
                            <li><a href="user/followusers#" title className="follow" onClick={() => this.clickHandler(company.id)}> Follow </a> </li>
                            <li><a href={id_link} title className="message-us"><i className="fa fa-envelope" /></a></li>
                        </ul>
                    </div>
                    {/* <a href="#" title className="view-more-pro">View Profile</a> */}
                </div>{/*company_profile_info end*/}
            </div>

            )

        })

        // console.log(this.state.companies_data);

        console.log(final_template)
        return final_template;
    }

    componentWillMount() {
        let url = 'http://localhost:3002/users/getalluser'
        axios.post(url,{
            user_id 
        })
            .then((response) => {
                console.log(response.data);
                this.setState({ companies_data: response.data });
                // console.log(this.state.companies_data);
            })
            .catch((error) => {
                console.log(error);
            });

            console.log()
    }

    render() {
        var final_template = this.companyTemplate();
        console.log(final_template);
        return (
            <div className="wrapper">
                <section className="companies-info">
                    <div className="container">
                        <div className="company-title">
                            <h3>All Companies</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                            <div className="row">

                                {final_template}
                            </div>
                        </div>
                    </div>
                </section>{/*companies-info end*/}
            </div>
        );
    }
}
export default FollowComp;