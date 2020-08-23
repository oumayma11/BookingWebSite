import React from "react";
import Hero from "../components/Hero";

import Banner from "../components/Banner";
const login = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="Login"
                    
                >
                    <table>

                        <tr><td>
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </td></tr>
                        <br></br>

                        <tr><td>
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </td></tr>
                        <br></br>

                        <tr><td>
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </td></tr>
                        <br></br>
                        <tr><td>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button></td></tr>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <a href="http://localhost:3000/registrate"><p className="forgot-password text-right">create an account</p></a>

                    


                    </table>
                   
                </Banner>
            </Hero>

        </>
    );
};

export default login;