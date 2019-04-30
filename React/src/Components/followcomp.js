import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const $ = window.$;
// const $ = window.$;
class FollowComp extends Component {
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs.fixedactionbtn)
        
        $(element).ready(function () {
            $('.fixed-action-btn').floatingActionButton();
        });
    }

    state = {
        companies_data: []
    }
    clickHandler = (e) => {
        console.log(e);
        var companies_data = this.state.companies_data.filter((company)=>{
            return company.id != e;
        })
        this.setState({companies_data});
    }

    companyTemplate = () => {
        var final_template = [];
        this.state.companies_data.forEach((company) => {
            console.log(company);
            var id = company.id;
            final_template.push(

                <div class="col s6 m3">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://via.placeholder.com/50" />
                            <span class="card-title">{company.name}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.clickHandler(id)}><i class="material-icons">add</i></a>
                            {/* <div class="fixed-action-btn" ref="fixedactionbtn">
                                <a class="btn-floating btn-large red">
                                    <i class="large material-icons">mode_edit</i>
                                </a>
                                <ul>
                                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                                </ul>
                            </div> */}

                        </div>
                        <div class="card-content">
                            <p>{company.address}</p>
                            Phone Number = <b>{company.phoneNumber}</b><br />
                            <a href={company.website}>Visit our Website</a>
                        </div>

                    </div>
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

            <div className="container">
                <div className="row">
                    {final_template}
                </div>
            </div>
        );
    }
}
export default FollowComp;