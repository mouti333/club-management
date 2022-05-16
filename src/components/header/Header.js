import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
<div>
                  <div className="dashboard-header" style={{display:"flex"}}>
          <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <a className="navbar-brand" href="index.html">EVENTS'COM</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto navbar-right-top">
                <li className="nav-item">
                  <div id="custom-search" className="top-search-bar">
                    <input className="form-control" type="text" placeholder="Search.." />
                  </div>
                </li>

      

                
                <li className="nav-item dropdown nav-user">
                  <a className="nav-link nav-user-img" href="/signin" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-sign-in-alt"></i>Connexion</a>
                  <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                    <div className="nav-user-info">
                      <h5 className="mb-0 text-white nav-user-name">Ahmed Zwawi</h5>
                      <span className="status" /><span className="ml-2">Available</span>
                    </div>
                    <a className="dropdown-item" href="#"><i className="fas fa-user mr-2" />Account</a>
                    <a className="dropdown-item" href="/signup"><i class="fas fa-sign-in-alt"></i>Login</a>
                    <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2" />Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
            </div>


        );
    }
}

export default Header;