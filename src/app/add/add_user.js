import React,{Component}  from 'react';
import { Button,Form} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";
import emailjs from "emailjs-com";
import { Switch, Route, Redirect } from 'react-router-dom';

import swal from 'sweetalert';
import md5 from 'md5';



export class Example extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    matricul: '',
departements:[],
    nature: '',
    departement: '',
    zone: '',
    connected:JSON.parse(localStorage.getItem("userData")),

    name:'',
    from_name:"nouveux application ",
    message:'',
    salut:"Kablem vous inviter au nouveau application . voici votre login et mot de passe ",
  }
  async componentDidMount(){
    if (this.state.connected != null && this.state.connected[0].role != "admin") {
      window.location = "../error-pages/error-500";   

    }
    //get departement
  }
  handleChange = event => {
    this.setState({ first_name: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ last_name: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ email: event.target.value });
  }
  handleChange3 = event => {
    this.setState({ password: event.target.value });
  }
  handleChange4 = event => {
    this.setState({ matricul: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ nature: event.target.value });
  }
  handleChange6 = event => {
    this.setState({ departement: event.target.value });
  } 
  handleChange7 = event => {
    this.setState({ zone: event.target.value });
  }
 
 /* handleSubmit = async (event) => {
    event.preventDefault();


    const user = {

      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      matricul: this.state.matricul,
      nature: this.state.nature,
      departement: this.state.departement
    };
    
   console.log(user);
   
    await axios.post(`http://localhost/newgen/blog/public/api/user`, {  
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      matricul: this.state.matricul,
      nature: this.state.nature,
      departement: this.state.departement,

    })
      .then(res => {

        console.log(res);
        console.log(res.data);
      })
      .catch(event => {
        console.log(event);
      });
  }*/
  sendEmail = async (e) => {
     
    e.preventDefault();

emailjs.sendForm('000', '00', e.target, '000')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    const user = {

      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      matricul: this.state.matricul,
      nature: this.state.nature,
      departement: this.state.departement,
      zone: this.state.zone,

    };
    
   console.log(user);
   
    await axios.post(`http://localhost/newgen/blog/public/api/user`, {  
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: md5(this.state.password),
      matricul: this.state.matricul,
      nature: this.state.nature,
      departement: this.state.departement,
      zone: this.state.zone,

    })
      .then(res => {

        console.log(res);
        console.log(res.data);
        if(res.status==200){
          swal({
            title: "Good job!",
            text: "le demande a été ajouter , essayer de donner les droit d'accées pour cette utilisateur ",
            icon: "success",
        }).then(function() {
          window.location = "../general-pages/userpage";    });
          }
         
      })
      .catch(event => {
        console.log(event);
      });
  }


   render(){
    return (
      <>

         
            
          
          <div className="col-12 grid-margin">
  <div className="card">
 
    <div className="card-body">
    <div className="card-title">
             Nouveau
                 </div> 
                 <br/>
      <form className="form-sample"  onSubmit={this.sendEmail}>
        <div className="row">
          <div className="col-md-6">
             
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Prenom</label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="first_name"
              onChange={this.handleChange} />
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Nom</label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="last_name"
              onChange={this.handleChange1} />
              </div>
            </Form.Group>
          </div>
        </div>
       
        <div className="row">
        <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="email"
              onChange={this.handleChange2}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Mot de passe </label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="password"
              onChange={this.handleChange3}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Matricule </label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="matricul"
              onChange={this.handleChange4}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label"> Nature</label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              name="nature"
              onChange={this.handleChange5}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-4">

<div className="row">

      <label className="col-sm-3 col-form-label"> Zone</label>
      <div className="col-sm-9">

    <select required className="form-control" onChange={this.handleChange7}>
<option></option>
<option value="p1_p2">p1_p2</option>
<option value="p3">p3</option>



    </select>
    </div>
    </div>
    </div>
        </div>
   

        <div className="row">
          <div className="col-md-6">
          <label className="form-check-label">Departement</label>

          <select required className="form-control" name="departement" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           <option  value="">Selecter Departement</option>
                            <option >Qualité</option>
                            <option >Maintenance</option>
                            <option >Production</option>
                            <option >Indust</option>
                            <option >Logistique</option>
                            <option >Comptabilité_Finance</option>
                            <option >RH</option>
                            <option >Achat</option>
                            <option >IT</option>
                            <option >Direction Opérationnel</option>
                          
                           </select>
                   
          </div>
         
        </div>
        <div className="row pt-5 mx-auto" hidden >
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control"value={"Bonjour "+this.state.first_name + this.state.last_name} placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" value={this.state.email} placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" value="nouveau application"placeholder="Subject" name="from_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input className="form-control" id="" cols="30" rows="8" placeholder="Your message" value={"Kablem vous inviter au nouveau application . voici votre login et mot de passe \n login:"+this.state.email+"\n mdp:"+this.state.password}  name="message"></input>
                        </div>
      
                    </div>
            <Button className="btn btn-inverse-dark">
              Fermer
            </Button>
            <Button className="btn btn-inverse-success"  value="Send Message" type="submit">Confimer</Button>
      </form>
    </div>
  </div>
</div>





      
      </>
    );
  }
}
export default Example;

  /*

  */