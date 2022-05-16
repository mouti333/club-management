import React, { Component } from 'react';


class Verification extends Component {
    render() {
        return (
          
          <div style={{paddingTop:'17rem',paddingBottom:'3rem'}}>
            <center>
            <ul style={{width:'100%'}}>
              <li>
                <a href="/signupstd">
          <button type="button" className="btn btn-primary btn-lg btn-block" ><i class="fas fa-user-graduate fa-lg"></i>   Register As Student</button>
          </a>
          </li>
          <li>
            <a href="/signupAdmn">
          <button type="button" className="btn btn-secondary btn-lg btn-block" ><i class="fas fa-user-friends fa-lg"></i>    Register As Administration</button>
          </a>
          </li>
          <li>
            <a href="/signupclub">
             <button type="button" className="btn btn-success btn-lg btn-block" ><i class="fas fa-user-friends fa-lg"></i>    Register As Club</button>
             </a>
          </li>
          </ul>
          </center>
          </div>

        );
    }
}

export default Verification;