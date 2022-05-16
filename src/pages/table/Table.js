import React, { Component } from 'react';
import axios from 'axios'

class Table extends Component {
    state = {
        personnes:[],
    };
    componentDidMount(){
        this.getusers();
    }
    
    getusers(){
        axios.get("http://localhost:5000/users/getAllusers").then((res=>{
            this.setState({personnes:res.data.data})
            console.log(this.state.personnes)
        }))

    }
    deleteUser=(userId)=>{
        axios.delete('http://localhost:5000/users/DelUser/'+userId)
        console.log('userid ',userId)
       this.getusers();
    }
    UpdateUser(id) {
        localStorage.setItem("idPerson", id);
        console.log("idPerson ", localStorage.getItem("idPerson"));
        window.location.href = "/update";
      }
    render() {
       
        return (
            <div>
                <table class="table">
  <thead>
    <tr>
    <th scope="col">numero</th>
    <th scope="col">id</th>
    <th scope="col">photo</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">delete</th>
      <th scope="col">update</th>

      
    </tr>
  </thead>
  <tbody>
  {this.state.personnes.map((person,index)=>(
        <tr key={index}>
            <th scope="row">{index}</th>
    <td>{person._id}</td>
   <img src={`http://localhost:5000/sendFile/${person.photo}`} style={{borderRadius: '50%', width: '30% ', height: 'auto'}} />

    <td>{person.email}</td>
    <td>{person.mdp}</td>
    <td><button type="button" class="btn btn-danger" onClick={()=>this.deleteUser(person._id)} ><i class="fas fa-trash" ></i></button></td>
    <td><button type="button" class="btn btn-success" onClick={()=>this.UpdateUser(person._id)}><i class="fas fa-marker"></i></button></td>
</tr>
    ))
  }
   
  </tbody>
  
</table>
            </div>
        );
    }
}

export default Table;