import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,/*MDBSelect*/ } from 'mdbreact';
import { Button,Form} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export class EditPlanAction extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,
      did:props.match.params.id,

        pas : [],
        users:[],

        departement:'',
        zone:'',
        origine:'',
        action:'',
        status:'',
        prob:'',
        cause:'',
        support:'',
        date_debut:'',
        date_cloture:'',
        contol_effic:'',
        responsable:'',
        annul:'',
        note:'',
    }
}

async componentDidMount(){
  await axios.get("http://localhost/newgen/blog/public/api/planActions/"+this.state.did)
  .then(res => {
      console.log(res)
      this.setState({pas : res.data})
  }).catch( err => {
      console.log("errreeur ")

  }) 

  { 
    this.state.pas.map( nc =>(
    this.setState({departement: nc.departement}),
    this.setState({zone: nc.zone}),
    this.setState({origine: nc.origine}),
    this.setState({prob: nc.prob}),
    this.setState({cause: nc.cause}),
    this.setState({support: nc.support}),
    this.setState({ date_debut: nc. date_debut}),
    this.setState({date_cloture: nc.date_cloture}),
    this.setState({ status: nc. status}),
    this.setState({action: nc.action}),
    this.setState({responsable: nc.id_user}),
    this.setState({contol_effic: nc. contol_effic}),
    this.setState({annul: nc.annul}),
    this.setState({note: nc.note})
    
          ))}
          
       
        
           await axios.get("http://localhost/newgen/blog/public/api/user")
           .then(res => {
               console.log(res)
               this.setState({users : res.data})
           }).catch( err => {
               console.log("errreeur ")
         
            })

} 

handleChange = event => {
  this.setState({ departement: event.target.value });
}
handleChange1 = event => {
  this.setState({ zone: event.target.value });
}
handleChange2 = event => {
  this.setState({ origine: event.target.value });
}
handleChange3 = event => {
  this.setState({prob: event.target.value });
}
handleChange4 = event => {
  this.setState({ cause: event.target.value });
}
handleChange5 = event => {
  this.setState({ support: event.target.value });
}
handleChange6 = event => {
  this.setState({ date_debut: event.target.value });
}
handleChange7 = event => {
  this.setState({ date_cloture: event.target.value });
}
handleChange10 = event => {
  this.setState({ action: event.target.value });
}
handleChange11= event => {
  this.setState({	responsable: event.target.value });
}
handleChange12= event => {
  this.setState({ contol_effic: event.target.value });
}

handleChange14= event => {
  this.setState({ annul: event.target.value });
}
handleChange140= event => {
  this.setState({ note: event.target.value });
}



handleSubmit = async (event) => {
  event.preventDefault();

  const planaction = {
    departement:this.state.departement,
    zone:this.state.zone,
    origine:this.state.origine,
    prob:this.state.prob,
    cause:this.state.cause,
    support:this.state.support,
    date_debut:this.state.date_debut,
    date_cloture:this.state.date_cloture,
    status:this.state.status,
    action:this.state.action,
    responsable:this.state.responsable,
    contol_effic:this.state.contol_effic,
    annul:this.state.annul,
    note:this.state.note,
  };
  
 console.log(planaction);
 
  await axios.put(`http://localhost/newgen/blog/public/api/planActions/`+this.state.did, {  
    departement:this.state.departement,
    zone:this.state.zone,
    origine:this.state.origine,
    prob:this.state.prob,
    cause:this.state.cause,
    support:this.state.support,
    date_debut:this.state.date_debut,
    date_cloture:this.state.date_cloture,
    status:this.state.status,
    action:this.state.action,
    responsable:this.state.responsable,
    contol_effic:this.state.contol_effic,
    annul:this.state.annul,
    note:this.state.note,

  })
    .then(res => {

      console.log(res);
      console.log(res.data);
      window.location = "../../general-pages/planaction";    

    }).catch(e => {
      console.log(e);
      swal({
        title: "accés rejeter ",
        text: "Verifier votre demander puis réssayer  encore  ",
        icon: "error",
    });
    });
 //   this.props.history.push('./planaction');
    /*this.setState({ redirection: true });

    const { redirection } = this.state;

    if (redirection) {
      return <Redirect to='../general-pages/suiviClient'/>;
  }*/
}
 
 
   render(){
    return (
      <>
          
          <div className="col-12 grid-margin" >
          <div className="page-header">
      <h3 className="page-title"> Plan d'Action  </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>generalPages</a></li>
          <li className="breadcrumb-item active" aria-current="page">add_plan_action</li>
        </ol>
      </nav>
    </div>
  <div className="card" >
 
    <div className="card-body">
    <div className="card-title">
    Ajouter Plan Action 
                 </div> 
                 <br/>
      <form className="form-sample"  onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Departement</label>
                         

                           <select required  value={this.state.departement} className="form-control" name="departement" onChange={this.handleChange} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           <option  value="">Selecter Departement</option>
                            <option >Qualité</option>
                            <option >Maintenance</option>
                            <option >Production</option>
                            <option >Indust</option>
                            <option >Logistique</option>
                            <option >Comptabilité_Finance</option>
                            <option >RH</option>
                            <option >Achat</option>

                          
                           </select>

                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Zone</label>
                         <select value={this.state.zone} required  className="form-control" name="zone" onChange={this.handleChange1} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                           <option value="">Zone</option>
                           <option value="P1">P1</option>
                           <option value="P2">P2</option>
                           <option value="P3">P3</option>
                           <option value="P1 + P2">P1 + P2</option>
                           <option value="P1 + P2 + P3">P1 + P2 + P3</option>
                           <option value="P">CET</option>
                           <option value="CET">Magasin</option>
                           <option value="P3-1">P3-1</option>
                           <option value="P3-2">P3-2</option>
                           <option value="P3-3">P3-3</option>
                         </select>                       
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Origine</label>
                         <select value={this.state.origine} required className="form-control" name="origine" onChange={this.handleChange2} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value="">Origine</option>
                             <option value="Audit interne">Audit interne</option>
                             <option value="réunion usine">réunion usine</option>
                             <option value="réunion Zone">réunion Zone</option>
                             <option value="réunion Protos">réunion Protos</option>
                             <option value="Audit externe">Audit externe</option>
                             <option value="Audit interne CET">Audit interne CET </option>
                             <option value="Audit interne Ducato 01/12">Audit interne Ducato 01/12</option>
                             <option value="Audit interne Magneti Marelli  22/09">Audit interne Magneti Marelli  22/09</option>
                             <option value="Audit SGS Stage 1 ">Audit SGS Stage 1 </option>
                             <option value="Audit SGS Stage 2">Audit SGS Stage 2</option>
                             
                           </select>                         
                           </div>
                         </div>
                         <br/>
                       <Form.Group>
                      <label className="form-check-label">Problémes </label>
                      <textarea value={this.state.prob} className="form-control" required  rows="3"  type="textarea"name="prob" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                       </Form.Group>  
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Cause </label>
                         <Form.Control value={this.state.cause} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="cause" onChange={this.handleChange4} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Actions</label>
                          <textarea value={this.state.action} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="action" onChange={this.handleChange10} size="sm"   />                                                    
                          </Form.Group>
                          </div>
                          </div> 
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Date de début</label>
                         <Form.Control value={this.state.date_debut} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_debut" onChange={this.handleChange6} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Date de clôture</label>
                        <Form.Control value={this.state.date_cloture} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_cloture" onChange={this.handleChange7} size="sm"   />                                                    
                           </Form.Group>
                          </div>
                          </div>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Responsable</label>
                         <select value={this.state.responsable} required className="form-control" name="responsable" onChange={this.handleChange11} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="" >Responsable</option>
                         { this.state.users.map( user =>( 
                            <option key={user.id_user} value={user.id_user}>{user.nom_user} {user.first_name} {user.last_name}</option>
                          ))} 
                           </select>                             
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Support</label>
                        <Form.Control value={this.state.support} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="support" onChange={this.handleChange5} size="sm"   />                                                                        
                           </Form.Group>
                          </div>
                          </div>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Controle d'efficacité</label>
                         <Form.Control value={this.state.contol_effic} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="contol_effic" onChange={this.handleChange12} size="sm"   />                         
                           </Form.Group>

                         </div>
                          <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Note(date de retardement ou docs Utilisés pour controle Efficacité )</label>
                         <Form.Control className=" form-control" style={{ backgroundColor: "#ecf2f8"}} type="text"name="note" onChange={this.handleChange140} size="sm"   />                         
                           </Form.Group>
                         </div>
                      </div>          
                      <Form.Group>
                         <label className="form-check-label">Annuler</label>
                         <select value={this.state.annul} required className="form-control" name="annul" onChange={this.handleChange14} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                              <option value="" >ANNULER</option>
                              <option value="Oui" >Oui</option>
                             <option value="Non">Non</option>
                           </select> 
                      </Form.Group>
                </div>   
              </div>
              <a className="btn btn-inverse-dark" href="./planaction">
             Retour
          </a>
        <Button className="btn btn-inverse-success" type="submit">Confimer</Button>
      </form>
    </div>
  </div>
</div>
      
      </>
    );
  }
}
export default EditPlanAction;

  /*

  */