import React from "react";
import Banner from "../components/Banner";
const Verify = () => {
    return (
        
<form className="form-signin" >
    <h2 className="form-signin-heading">Verify Your Email</h2>

    <label htmlFor="secretToken" className="sr-only">Secret Token</label>
    <input type="secretToken" id="secretToken" name="secretToken" className="form-control" placeholder="Secret Token" required autoFocus>
    </input>
        <br />

        <button className="btn btn-lg btn-default btn-block" type="submit">Verify</button>
</form>
    );
}
export default Verify;