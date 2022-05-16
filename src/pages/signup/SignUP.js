import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

class SignUP extends Component {
    constructor(){
        super()
        this.state={
            nom:"",prenom:"",email:"",password:"",niveaudetude:"",ddn:"",photo:null,role:"",activiter:"",nom_du_club:"",Statut:"",displayStd:false,displayAdmin:false,displayClub:false
        }}
componentDidMount(){
  this.render()
}
affichstd(){
    this.setState({displayStd:true})
    this.setState({displayClub:false})
    this.setState({displayAdmin:false})
    this.setState({role:"student"})
}        
affichadmin(){
    this.setState({displayAdmin:true})
    this.setState({displayClub:false})
    this.setState({displayStd:false})
    this.setState({role:"administration"})
} 
affichclub(){
    this.setState({displayClub:true})
    this.setState({displayAdmin:false})
    this.setState({displayStd:false})
    this.setState({role:"club"})
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
envoyer(){
 
    let err = this.validate()
    if(!err && this.state.role==="student"){
      const fd = new FormData();
      fd.append('image',this.state.photo,this.state.photo.name)
      fd.append('nom',this.state.nom)
      fd.append('prenom',this.state.prenom)
      fd.append('email',this.state.email)
      fd.append('mdp',this.state.password)
      fd.append('DDN',this.state.ddn)
      fd.append('niveau_Etude',this.state.niveaudetude)
      fd.append('role',this.state.role)
      
      
      

        axios.post("http://localhost:5000/Student/addStudent",fd)
           
        
        .then(res=>{
            console.log('dataaaaaaaaaaaaaaaaaaaaaa',res)
            window.location.href='/sidebar'
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    else if(!err && this.state.role==="administration"){
        {
            const fd1 = new FormData();
            fd1.append('image',this.state.photo,this.state.photo.name)
            fd1.append('nom',this.state.nom)
            fd1.append('prenom',this.state.prenom)
            fd1.append('email',this.state.email)
            fd1.append('mdp',this.state.password)
            fd1.append('Statut',this.state.Statut)
            fd1.append('role',this.state.role)
            
            
            
      
              axios.post("http://localhost:5000/administr/addadministr",fd1)
                 
              
              .then(res=>{
                  console.log('dataaaaaaaaaaaaaaaaaaaaaa',res)
                  window.location.href='/header'
              })
              .catch((err)=>{
                  console.log(err)
              })
          }

    }
    else if (!err && this.state.role==="club"){
      {
        const fd2 = new FormData();
        fd2.append('image',this.state.photo,this.state.photo.name)
        fd2.append('nom_du_club',this.state.nom_du_club)
        fd2.append('activiter',this.state.activiter)
        fd2.append('email',this.state.email)
        fd2.append('mdp',this.state.password)
        fd2.append('role',this.state.role)
        
        
        
  
          axios.post("http://localhost:5000/Club/addClub",fd2)
             
          
          .then(res=>{
              window.location.href='/header'
          })
          .catch((err)=>{
              console.log(err)
          })
      }

    }
}
    render() {
       let std = (<div>
  <div classname="input-group">
    <label><h3>Name</h3>
      <input classname="input--style-3" type="text" placeholder="Name" name="name" onChange={event=>this.setState({nom:event.target.value})}></input>
    </label>
  </div>
  <div classname="input-group">
    <label><h3>LastName</h3>
      <input classname="input--style-3" type="text" placeholder="Name" name="name" onChange={event=>this.setState({prenom:event.target.value})}></input>
    </label>
  </div>
  <div className="input-group">
            <label><h3>Birthdate</h3>
              <input className="input--style-3 js-datepicker" type="date" placeholder="Birthdate" name="birthday" onChange={event=>this.setState({ddn:event.target.value})}/>
              </label>
            </div>
            <div className="input-group">
            <label><h3 >Field of study</h3>
              <input className="input--style-3" type="text" placeholder="Field of study"  onChange={event=>this.setState({niveaudetude:event.target.value})}/>
              </label>
            </div>

</div>
        
    )
    let admin =(<div>

         <div classname="input-group">
    <label><h3>Name</h3>
      <input classname="input--style-3" type="text" placeholder="Name" name="name" onChange={event=>this.setState({nom:event.target.value})}></input>
    </label>
  </div>
  <div classname="input-group">
    <label><h3>LastName</h3>
      <input classname="input--style-3" type="text" placeholder="LastName" name="name" onChange={event=>this.setState({prenom:event.target.value})}></input>
    </label>
  </div>
  <div classname="input-group">
    <label><h3>Statut</h3>
      <input classname="input--style-3" type="text" placeholder="Statut" name="name" onChange={event=>this.setState({Statut:event.target.value})}></input>
    </label>
  </div>

    </div>
    )

    let club = (<div>
              <div classname="input-group">
    <label><h3>Name of Club</h3>
      <input classname="input--style-3" type="text" placeholder="Name" name="name" onChange={event=>this.setState({nom_du_club:event.target.value})}></input>
    </label>
  </div>
  <div classname="input-group">
    <label><h3>Activity</h3>
      <input classname="input--style-3" type="text" placeholder="Activity" name="name" onChange={event=>this.setState({activiter:event.target.value})}></input>
    </label>
  </div>
        </div>
    )

     if (!this.state.displayStd){
            std=null
    } 
    if (!this.state.displayAdmin){
        admin=null
} 
if(!this.state.displayClub){
        club=null
}
   
    
       
       return (
            
          <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
    <div className="wrapper wrapper--w780">
      <div className="card card-3">
        <div className="card-heading" />
        <div className="card-body">
          <center><h2 >Registration Info</h2></center>
          <form >
            <div className="input-group">
            <label><h3 >Email</h3>
              <input className="input--style-3" type="email" placeholder="Email" name="email" onChange={event=>this.setState({email:event.target.value})}/>
              </label>
            </div>
            <div className="input-group">
            <label><h3 >Password</h3>
              <input className="input--style-3" type="password" placeholder="password" name="phone" onChange={event=>this.setState({password:event.target.value})}/>
              </label>
            </div>
     <div>
  <div className="custom-control custom-radio custom-control-inline">
    <input type="radio" className="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample" onClick={()=>{this.affichstd()}}/>
    <label className="custom-control-label" htmlFor="defaultInline1"><h3>Student</h3></label>
  </div>
  <div className="custom-control custom-radio custom-control-inline">
    <input type="radio" className="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample" onClick={()=>{this.affichadmin()}}/>
    <label className="custom-control-label" htmlFor="defaultInline2"><h3>Administration</h3></label>
  </div>
  
  <div className="custom-control custom-radio custom-control-inline">
    <input type="radio" className="custom-control-input" id="defaultInline3" name="inlineDefaultRadiosExample" onClick={()=>{this.affichclub()}}/>
    <label className="custom-control-label" htmlFor="defaultInline3"><h3>Club</h3></label>
  </div>
</div>
{std}
{admin}
{club}
            <div className="input-group">
            <label>< >Upload Your Photo</>
              <input className="input--style-3" type="file" placeholder="Your Photo"   onChange={event=>this.setState({photo:event.target.files[0]})} />
              </label>
            </div>
            <div className="p-t-10">
              <button className="btn btn--pill btn--green" type="submit" onClick={()=>{this.envoyer()}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
           
 

        );
    }
}

export default SignUP;