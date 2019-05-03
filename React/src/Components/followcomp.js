import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;
// const $ = window.$;
var user_id = 3;
class FollowComp extends Component {
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs.fixedactionbtn)

        // $(element).ready(function () {
        //     $('.fixed-action-btn').floatingActionButton();
        // });
    }

    state = {
        companies_data: []
    }
    clickHandler = (company_id) => {
        console.log(company_id);
        let url = "http://localhost:3002/users/followcompany";
        axios.post(url, {
            company_id,
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

        // var companies_data = this.state.companies_data.filter((company) => {
        //     return company.id != company_id;
        // })
        // this.setState({ companies_data });
    }

    companyTemplate = () => {
        var final_template = [];
        // console.log('sdfds')
        // console.log(this.state.companies_data);
        this.state.companies_data.forEach((company) => {
            console.log(company);
            var id = company.id;
            final_template.push(

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="company_profile_info">
                    <div className="company-up-info">
                      <img src={company.picture} alt />
                      <h3>{company.name}</h3>
                      <h4>{company.address}</h4>
                      <ul>
                        <li><a href="#" title className="follow"  onClick={() => this.clickHandler(id)}> Follow </a> </li>
                        <li><a href={company.website} title className="message-us"><i className="fa fa-envelope" /></a></li>
                      </ul>
                    </div>
                    {/* <a href="#" title className="view-more-pro">View Profile</a> */}
                  </div>{/*company_profile_info end*/}
                </div>
            )

        })
        return final_template;
    }

    componentWillMount() {
        let url = 'http://localhost:3002/users/companies'
        axios.post(url)
            .then((response) => {
                // console.log(response.data);
                this.setState({ companies_data: response.data });
                // console.log(this.state.companies_data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        var final_template = this.companyTemplate();
        return (
            <div className="wrapper">
        <section className="companies-info">
          <div className="container">
            <div className="company-title">
              <h3>All Companies</h3>
            </div>{/*company-title end*/}
            {final_template}
          </div>
        </section>{/*companies-info end*/}
      </div>
        );
    }
}
export default FollowComp;