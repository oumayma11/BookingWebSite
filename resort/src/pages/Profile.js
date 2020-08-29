import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Hero from "../components/Hero";
import Banner from "../components/Banner";


class Profile extends Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }


    }

   
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log("heloooooooooooooooo"+token)
    
        this.setState({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email
        })
    }

  

       



    

   


    render() {
        return (
            <>
                <Hero>
                    <Banner
                        title="Profile"

                    >
                        <table>

                            <tbody>
                                <tr>
                                    <td>Fist Name</td>
                                    <td>{this.state.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>


                        </table>

                    </Banner>
                </Hero>

            </>
        );
    };
}

export default Profile;