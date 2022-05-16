import React, { Component } from 'react';
import axios from 'axios';
import sidebar from '../../components/sidebar/Sidebar';
import Table from '../table/Table'

class Update extends Component {
    constructor(){
        super()
        
        this.state={
            nom:"",prenom:"",email:"",password:"",niveaudetude:"",ddn:"",photo:null
        }
       this.getOne()
    }
    validate (){
        let isError = false;
        const errors = {
            emailErr:'',
            passwordErr:'',
        }
        const rgex1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/   //mdp
       
        if((this.state.password ==='')||(this.state.password.length>50)||!rgex1.test(this.state.password)){
        isError=true;
        errors.passwordErr='veuillez verifier votre password '
        }
        const regex2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   //email
    if((this.state.email ==='')||(this.state.email.length>50)||!regex2.test(this.state.email)) {
        isError=true;
        errors.emailErr = 'veuillez verifier votre email';
    }
    if(isError){
        this.setState({
            ... this.state,
            ... errors
        })
    }
    return isError;

}

componentDidMount() {
    this.getOne();
  }
 getOne = () => {
   console.log('id',localStorage.getItem('idPerson'))
    axios.get("http://localhost:5000/Student/getOneStudent/" +localStorage.getItem("idPerson"))
      //.then(res => res.jason())
      .then((res) => {
        console.log('nom',res.data.data.DDN)
        this.setState({
            nom:res.data.data.nom,
            prenom:res.data.data.prenom,
            email:res.data.data.email,
            mdp:res.data.data.password,
            niveaudetude:res.data.data.niveau_Etude,
            ddn:res.data.data.DDN
          
        });
      });
  };

  update = (event) => {
    let err = this.validate()
    event.preventDefault();
    if(!err){
      const fd = new FormData();
      fd.append('image',this.state.photo,this.state.photo.name)
      fd.append('nom',this.state.nom)
      fd.append('prenom',this.state.prenom)
      fd.append('email',this.state.email)
      fd.append('mdp',this.state.password)
      fd.append('DDN',this.state.ddn)
      fd.append('niveau_Etude',this.state.niveaudetude)
      

        axios.put("http://localhost:5000/Student/updateStudent/"+ localStorage.getItem("idPerson"),fd)
           
        
        .then(res=>{
            console.log('dataaaaaaaaaaaaaaaaaaaaaa',res)
            window.location.href='/sidebar'
        })
        .catch((err)=>{
            console.log(err)
        })
    }}
  
    render() {
        return (
<div>
  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
    <div className="card">
      <h5 className="card-header">Basic Form</h5>
      <div className="card-body">
        <form action="#" id="basicform" data-parsley-validate>
          <div className="form-group">
            <label htmlFor="inputUserName">nom</label>
            <input id="inputUserName" type="text" name="name" 
            data-parsley-trigger="change" 
            required placeholder="Enter user name" autoComplete="off" className="form-control" 
            value={this.state.nom}
            onChange={event=>this.setState({nom:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputUserName">prenom</label>
            <input id="inputUserName" type="text" value={this.state.prenom} name="name" data-parsley-trigger="change" required placeholder="Enter lastname" autoComplete="off" className="form-control" onChange={event=>this.setState({prenom:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input id="inputEmail" type="email" name="email" value={this.state.email} data-parsley-trigger="change" required placeholder="Enter email" autoComplete="off" className="form-control" onChange={event=>this.setState({email:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input id="inputPassword" type="password" placeholder="Password" required className="form-control" onChange={event=>this.setState({password:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputRepeatPassword">field</label>
            <input id="inputRepeatPassword"  value={this.state.niveaudetude} data-parsley-equalto="#inputPassword" type="password" required placeholder="Password" className="form-control" onChange={event=>this.setState({niveaudetude:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Date de naissance</label>
            <input id="inputEmail" type="text" name="email"  
            data-parsley-trigger="change" required placeholder="Enter email" autoComplete="off" 
            className="form-control" 
            value={this.state.ddn} onChange={event=>this.setState({ddn:event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">upload your photo</label>
            <input id="inputEmail" type="file"   
            data-parsley-trigger="change" required placeholder="Enter email" autoComplete="off" 
            className="form-control" onChange={event=>this.setState({photo:event.target.files[0]})}
              />
          </div>
          <div className="row">
            <div className="col-sm-6 pb-2 pb-sm-4 pb-lg-0 pr-0">
              <label className="be-checkbox custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Remember me</span>
              </label>
            </div>
            <div className="col-sm-6 pl-0">
              <p className="text-right">
                <button type="submit" className="btn btn-space btn-success" onClick={(event) => {this.update(event);}} >Update</button>
                <button className="btn btn-space btn-secondary" href="/header">Cancel</button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Update;