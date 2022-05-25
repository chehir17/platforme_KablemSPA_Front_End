import React, { Component } from 'react'
import swal from 'sweetalert';
import { Button,Form,Modal} from 'react-bootstrap';//import { useState } from 'react';
import axios from "axios";

export class AddSuperContolle extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,
      showAlert: false,
      suivisupercontrole : [],
      articles:[],
      clients:[],

      code_artc:'', 
      rev_projet:'', 
      nom_client:'', 
      type_controle:'', 
      doc_refirance:'', 
      methode_controle:'', 
      date_debut:'', 
      duree_estime:'', 
      tracibilite_cablage:'', 
      tracibilite_carton:'', 
      heurs_internedepensees:'', 
      date_final:'',
      connected:JSON.parse(localStorage.getItem("userData")),

    }
  }

  //// get article

  async componentDidMount(){
    if(this.state.connected == null){
   
      window.location = "../user-pages/login-1";   
      }

  
     ///get client
  
     await axios.get("http://localhost/newgen/blog/public/api/client")
    .then(res => {
        console.log(res)
        this.setState({clients : res.data})
    }).catch( err => {
        console.log("errreeur ")
  
     })
  
  }

  
handleChange = event => {
  this.setState({ code_artc: event.target.value });
}
handleChange1 = event => {
  this.setState({ rev_projet: event.target.value });
}
handleChange2 = event => {
  this.setState({ nom_client: event.target.value });
}
handleChange3 = event => {
  this.setState({type_controle: event.target.value });
}
handleChange4 = event => {
  this.setState({ doc_refirance: event.target.value });
}
handleChange5 = event => {
  this.setState({ methode_controle: event.target.value });
}
handleChange6 = event => {
  this.setState({ date_debut: event.target.value });
}
handleChange7 = event => {
  this.setState({ duree_estime: event.target.value });
}
handleChange8 = event => {
  this.setState({ tracibilite_cablage: event.target.value });
}
handleChange9 = event => {
  this.setState({ tracibilite_carton: event.target.value });
}
handleChange10 = event => {
  this.setState({ heurs_internedepensees: event.target.value });
}
handleChange11= event => {
  this.setState({date_final: event.target.value });
}


handleSubmit = async (event) => {

  event.preventDefault();

  const suivisupercontrole = {
    code_artc:this.state.code_artc,
    rev_projet:this.state.rev_projet,
    nom_client:this.state.nom_client,
    type_controle:this.state.type_controle,
    doc_refirance:this.state.doc_refirance,
    methode_controle:this.state.methode_controle,
    date_debut:this.state.date_debut,
    duree_estime:this.state.duree_estime,
    tracibilite_cablage:this.state.tracibilite_cablage,
    tracibilite_carton:this.state.tracibilite_carton,
    heurs_internedepensees:this.state.heurs_internedepensees,
    date_final:this.state.date_final, 
  };
  
 console.log(suivisupercontrole);
 
  await axios.post(`http://localhost/newgen/blog/public/api/suiviSuperControles`, {  
    code_artc:this.state.code_artc,
    rev_projet:this.state.rev_projet,
    nom_client:this.state.nom_client,
    type_controle:this.state.type_controle,
    doc_refirance:this.state.doc_refirance,
    methode_controle:this.state.methode_controle,
    date_debut:this.state.date_debut,
    duree_estime:this.state.duree_estime,
    tracibilite_cablage:this.state.tracibilite_cablage,
    tracibilite_carton:this.state.tracibilite_carton,
    heurs_internedepensees:this.state.heurs_internedepensees,
    date_final:this.state.date_final, 

 


  })
  .then(res => {

    console.log(res);
    //console.log(res.data);
    if(res.status==200){
    swal({
      title: "Good job!",
      text: "le demande a été ajouter",
      icon: "success",
  }).then(function() {
    window.location = "../general-pages/suiviSuperControle"; 
     });
    }
   
  })
  .catch(e => {
    console.log(e);
    
      this.openadd100();
            
  });
}
openadd100 = () => this.setState({ showAlert: true  });

closeModal100 = () => this.setState({ showAlert: false });

 

 
   render(){
    return (
      <>
          
          <div className="col-12 grid-margin" >
         
   
         
         
         <Modal 
         show={this.state.showAlert}
         onHide={this.closeModal100}
         backdrop=""
          keyboard={false}
          size="sm"
          className="model" 
         >
           <Modal.Header closeButton >
  <Modal.Title >Alerte </Modal.Title>
</Modal.Header>
<Modal.Body className="p-3 mb-2 bg-danger text-white" >votre demande a été rejeter veuillez réessayer !!!</Modal.Body>

         </Modal>          <div className="page-header">
      <h3 className="page-title"> Suivi Super Contrôle  </h3>
     
    </div>
  <div className="card" >
 
    <div className="card-body">
    <div className="card-title">
    Ajouter Suivi Super Contrôle 
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Code Produit</label>
                        <Form.Control required className="form-control" type="text"name="" onChange={this.handleChange} size="md" style={{backgroundColor: "#ecf2f8"}}  />

                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Rev Projet</label>
                         <Form.Control required className="form-control" type="text"name="rev_projet" onChange={this.handleChange1} size="md" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Client</label>
                         <select required className="form-control" name="nom_client" onChange={this.handleChange2} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="">Client</option>
                         { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.nom_client}>{client.nom_client}</option>
                          ))}                         
                          </select>                         
                           </div>
                         </div>
                       </Form.Group>  
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Type de contrôle (GP12,SLP,CSL2,Sécurisation) </label>
                         <select required className="form-control" name="type_controle" onChange={this.handleChange3} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value="">Type de contrôle</option>
                             <option value="contrôle Final">contrôle Final</option>
                             <option value="GP12">GP12</option>
                             <option value="CSL2">CSL2</option>
                             <option value="CSL2/SLP">CSL2/SLP</option>
                             <option value="Sécurisation">Sécurisation</option>
                             <option value="SLP">SLP</option>
                           </select>                          
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Doc de référence </label>
                          <Form.Control required className="form-control" type="text"name="doc_refirance" onChange={this.handleChange4} size="md" style={{backgroundColor: "#ecf2f8"}}  />                         
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Méthode de contrôle </label>
                           <select required className="form-control" name="methode_controle" onChange={this.handleChange5} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value="">Méthode de contrôle </option>
                             <option value="Visuellement/Manuel">Visuellement /Manuel</option>
                           </select>
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Date de début</label>
                         <Form.Control required className="form-control" type="date"name="date_debut" onChange={this.handleChange6} size="md" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Durée estimé</label>
                          <Form.Control required  type="date"name="duree_estime" onChange={this.handleChange7} size="md"  style={{backgroundColor: "#ecf2f8"}} />
                         </div>
                         </div>
                       </Form.Group>
                      <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Traçabilité sur câblage </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="tracibilite_cablage" onChange={this.handleChange8} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Traçabilité sur carton  </label>
                          <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="tracibilite_carton" onChange={this.handleChange9} size="sm"   />                       
                           </Form.Group>
                          </div>
                          </div>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Heures internes dépensées </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number"name="heurs_internedepensees" onChange={this.handleChange10} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Date fin  </label>
                          <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_final" onChange={this.handleChange11} size="sm"   />                       
                           </Form.Group>
                          </div>
                          </div> 
                      </div>
                    </div>
                    <a className="btn btn-inverse-dark" href="./suiviSuperControle">
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
export default AddSuperContolle;

  /*

  */