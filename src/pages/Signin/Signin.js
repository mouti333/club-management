import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
     mdp: "",
      msg:""
      
    };
  }
  login(event) {
    event.preventDefault();
    axios.post("http://localhost:5000/users/authen",{
        email: this.state.email,
        mdp: this.state.mdp,
      })
      .then((res) => {
        console.log('status',res.data.status);
        if(res.data.status === "success"||res.data.data__t==="Student"){
          window.location.href="/Sidebarstd"
          localStorage.setItem("idUser",res.data.data.user._id)
          console.log('id heyy',res.data.data.user._id);
        }
        else{
          this.setState({msg:"email or password in valid"})
        }
        console.log(res);
      })
 
  }
  register = (event)=>{
    event.preventDefault();
  window.location.href="/verification"
  }
    render() {
        return (
<div>
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt>
          <img src="imagess/img-01.png" alt="IMG" />
        </div>
        <form className="login100-form validate-form">
          <span className="login100-form-title">
            Member Login
          </span>
          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input className="input100" type="text" name="email" placeholder="Email" onChange={(event) => { this.setState({ email: event.target.value })}} />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="pass" placeholder="Password" onChange={(event) =>{this.setState({ mdp: event.target.value });}} />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={(event) => this.login(event)}>
              Login
            </button>
          </div>
          <div className="text-center p-t-12">
            <span className="txt1">
              Forgot
            </span>
            <a className="txt2" href="#">
              Username / Password?
            </a>
          </div>
          <a onClick={(event) => this.register(event)}>
          <div className="text-center p-t-136" >
            
              Create your Account
              <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
            
          </div>
          </a>
        </form>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Signin;