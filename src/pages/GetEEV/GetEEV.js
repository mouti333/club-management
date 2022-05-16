import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header'
import Sidebarstd from '../../components/Sidebarstd/Sidebarstd'

class GetEEV extends Component {
    state = {
        events:[],
    };
    componentDidMount(){
        this.getevents();
    }
    getevents(){
        axios.get("http://localhost:5000/Student/getAllEEVs").then((res=>{
            this.setState({events:res.data.data})
            console.log(this.state.events)
    }))}
    
    render() {
        return (
            <div className="container-fluid">
            <div className="dashboard-header">
            <div className="row mb-5">
                <Header/>
                </div>
            <div className="row ">
                <div className="col-4">
                <Sidebarstd />
                </div>
                <div className="col-4">
            <center>
            <div style={{display:"flex",width:"100%",paddingTop:"-1rem"}}>
                <table class="table">
  <thead>
    <tr>
    <th scope="col">Numero d'evennement</th>
    <th scope="col">Nom d'evennement</th>
      <th scope="col">Date de l'evennement</th>
      <th scope="col">place </th>

      
    </tr>
  </thead>
  <tbody>
  {this.state.events.map((eventt,index)=>(
        <tr key={index}>
            <th scope="row">{index}</th>
    <td>{eventt.nom}</td>
   

    <td>{eventt.Date}</td>
    <td>{eventt.place}</td>
    
</tr>
    ))
  }
   
  </tbody>
  
</table>
            </div>
            </center>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default GetEEV;