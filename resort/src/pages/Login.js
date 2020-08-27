import React, { Component } from "react";
import Hero from "../components/Hero";
import { login } from '../components/ClientFunction'

import Banner from "../components/Banner";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)



    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push('/profile')
            }
        })

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
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </td></tr>

                            <tr><td>
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </td></tr>

                            <tr><td>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </td></tr>
                            <tr><td>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button></td></tr>
                           
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