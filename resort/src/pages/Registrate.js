import React, { Component } from "react";




class Registrate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:"" ,
            lastName: "",
            email: "",
            password: "",
            address: "",
            birthDate:""
        };
        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

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
                birthDate: this.state.birthDate
            })
           
        })
            .then(response => response.text())
            .then(response => {
                console.log(response)
                alert(this.state.email +"" +"has been added successfully")
            })
            .catch(err => {
                console.log(err);
            });
    }


   
    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render() {

       
          
        return (


            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
          
                                <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your first name"
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleChange({ firstName: e.target.value })}
                                    required />
                            </div>
                                  

                            <div className="form-group">
                                <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your last name"
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleChange({ lastName: e.target.value })}
                                    required />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                    <input type="text" className="form-control" placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={(e) => this.handleChange({ email: e.target.value })}
                                    required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password"
                                        value={this.state.password}
                                        onChange={(e) => this.handleChange({ password: e.target.value })}
                                    required />
                            </div>
                            <div className="form-group">
                         
                                <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter your address"
                                        value={this.state.address}
                                        onChange={(e) => this.handleChange({ address: e.target.value })}
                                    required />
                            </div>

                            <div className="form-group">
                                <label>Birth Date</label>
                                    <input type="date" className="form-control" placeholder="Enter your birth date"
                                        value={this.state.birthDate}
                                        onChange={(e) => this.handleChange({ birthDate: e.target.value })}
                                        required/>

                            </div>

                         
                            <button type="submit" className="btn btn-primary btn-block"
                                onClick={(e) => this.create(e)}>Submit</button></form></div>
                </div> </div>



                       
        );
    };


   


}



export default Registrate;