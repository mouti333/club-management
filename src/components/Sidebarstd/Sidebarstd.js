import React, { Component } from 'react';
import axios from 'axios'

class Sidebarstd extends Component {
   constructor(){
    super()
    this.state={
        photo:null,nom:"",prenom:""
    }
}
 
  componentDidMount() {
    this.getOne();
  };
  getOne = () => {
    axios.get("http://localhost:5000/users/getOneUser/" +localStorage.getItem("idUser"))
      //.then(res => res.jason())
       .then((res) => {
          console.log("nom",res)

        this.setState({
          nom: res.data.data.nom,
          prenom: res.data.data.prenom,
          photo: res.data.data.photo,
          });
      }); 
  };
    render() {
        return (
  <div>
    
  <div className="wrapper d-flex align-items-stretch mt-5">
    <nav id="sidebar">
      <div className="custom-menu">
        
      </div>
      <div className="img bg-wrap text-center py-4" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
        <div className="user-logo">
          <div className="img"><img className="img" src={`http://localhost:5000/sendFile/${this.state.photo}`}></img></div>
        <h3>{this.state.nom}{" "}{this.state.prenom}</h3>
        </div>
      </div>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <a href="#"><span className="fa fa-home mr-3" /> Home</a>
        </li>
        <li>
          <a href="/events"><span className="fas fa-calendar-week mr-3" /> Events</a>
        </li>
        <li>
          <a href="/about"><span className="far fa-address-card mr-3" /> About US</a>
        </li>
        <li>
          <a href="/contact"><span className="fas fa-address-book mr-3" /> Contact US</a>
        </li>
        <li>
          <a href="#"><span className="fa fa-sign-out mr-3" /> Sign Out</a>
        </li>
      </ul>
    </nav>
    {/* Page Content  */}
    <div id="content" className="p-4 p-md-5 pt-5">
      
    </div>
  </div>
</div>



          
        );
    }
}

export default Sidebarstd;