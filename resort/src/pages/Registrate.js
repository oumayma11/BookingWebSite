import React from "react";
import Hero from "../components/Hero";

import Banner from "../components/Banner";
const login = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="Registrate"

                >
                    <table>

                        <tr><td>
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="Enter your first name" />
                        </td></tr>
                        <br></br>

                        <tr><td>
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter your last name" />
                        </td></tr>
                        <br></br>

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
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter your address" />
                        </td></tr>
                        <br></br>

                        <tr><td>
                            <label>Birth Date</label>
                            <input type="date" className="form-control" placeholder="Enter your birth date" />
                        </td></tr>
                        <br></br>

                        
                        <tr><td>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button></td></tr>
                       




                    </table>

                </Banner>
            </Hero>

        </>
    );
};

export default login;