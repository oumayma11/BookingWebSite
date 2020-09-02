import React, { Component } from "react";
const randomstring = require('randomstring');


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};


class Registrate extends Component {

    

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            address: null,
            birthDate: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                address:""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        Address: ${this.state.address}
        birthDate: ${this.state.birthDate}

      `);
            this.create(e);
            const secretToken = randomstring.generate();
            console.log('secretToken', secretToken);


        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            
            case "address":
                formErrors.address =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    create(e) {
        // add entity - POST
        e.preventDefault();
        fetch("/api/new", {
            "method": "POST",
            "headers": {

                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "accept": "application/json",
                "Content-Type": "application/json",

            },

            "body": JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                birthDate: this.state.birthDate,
              
            })
           

        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                alert(this.state.email + "" + "has been added successfully please check your email to verify your account")

            })
            .catch(err => {
                console.log(err);
            });
    }




    render() {
        const { formErrors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                            <input
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                            <div className="form-group">
                                <label htmlFor="address">address</label>
                            <input
                                placeholder="address"
                                type="text"
                                name="address"
                                noValidate
                                onChange={this.handleChange}
                                />
                                {formErrors.address.length > 0 && (
                                    <span className="errorMessage">{formErrors.address}</span>
                                )}
                            
                        </div>
                            <div className="form-group">
                                <label htmlFor="birthDate">birthDate</label>
                            <input
                                placeholder="birthDate"
                                type="date"
                                name="birthDate"
                                noValidate
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="createAccount">
                                <button type="submit" className="btn btn-primary btn-block"
                                >Create Account</button>
                        </div>
                    </form>
                    </div>
                </div></div>
        );
    }
}
export default Registrate;