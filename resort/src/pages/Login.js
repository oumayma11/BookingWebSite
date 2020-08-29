import React, { Component } from "react";
import Hero from "../components/Hero";

import Banner from "../components/Banner";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:''
        }

        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);



    }

    create(e) {
        // add entity - POST
        e.preventDefault();
        fetch("/api/login", {
            "method": "POST",
            "headers": {

                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",

            },

            "body": JSON.stringify({
                email: this.state.email,
                password: this.state.password,

            })

        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                localStorage.setItem('usertoken', response)
                this.props.history.push('/profile')






            }
        )
                   

               
            
            .catch(err => {
                console.log(err);
            });
    }
   


    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render () {
        return (
            <>
                <Hero>
                    <Banner
                        title="Login"

                    >
                        <form noValidate onSubmit={this.onSubmit}>
                            <table>
                                <tbody>

                            <tr><td>
                                <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email"
                                            value={this.state.email}
                                            onChange={(e) => this.handleChange({ email: e.target.value })}/>
                            </td></tr>

                            <tr><td>
                                <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password"
                                            value={this.state.password}
                                            onChange={(e) => this.handleChange({ password: e.target.value })} />
                            </td></tr>

                            <tr><td>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </td></tr>
                            <tr><td>
                                        <button type="submit" className="btn btn-primary btn-block"
                                            onClick={(e) => this.create(e)}>Submit</button></td></tr>
                           
                            <a href="http://localhost:3000/registrate"><p className="forgot-password text-right">create an account</p></a>



</tbody>
                            </table>
                        </form>
                    </Banner>
                </Hero>

            </>
        );
    };
}
export default Login;