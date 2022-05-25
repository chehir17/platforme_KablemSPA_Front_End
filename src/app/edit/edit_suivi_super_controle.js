import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,/*MDBSelect*/ } from 'mdbreact';
import { Button,Form} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export class EditSuperContolle extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,

      suivisupercontroles : [],
      articles:[],
      clients:[],

      Sid:props.match.params.id,

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
      date_final:''
   
    }
  }

  //// get article

  async componentDidMount(){

    await axios.get("http://localhost/newgen/blog/public/api/suiviSuperControles/"+this.state.Sid)
    .then(res => {
        console.log(res)
        this.setState({suivisupercontroles : res.data})
    }).catch( err => {
        console.log("errreeur ")
  
     })
     { this.state.suivisupercontroles.map(  suivisupercontrole =>(
      this.setState({code_artc: suivisupercontrole.id_article}),
      this.setState({rev_projet: suivisupercontrole.rev_projet}),
      this.setState({nom_client: suivisupercontrole.id_client}),
      this.setState({type_controle: suivisupercontrole.type_controle}),
      this.setState({doc_refirance: suivisupercontrole.doc_réfirance}),
      this.setState({methode_controle:suivisupercontrole.methode_controle}),
      this.setState({date_debut: suivisupercontrole.date_début}),
      this.setState({duree_estime: suivisupercontrole.durée_estimé}),
      this.setState({tracibilite_cablage: suivisupercontrole.traçibilité_cablage}),
      this.setState({tracibilite_carton: suivisupercontrole.traçibilité_carton}),
      this.setState({heurs_internedepensees: suivisupercontrole.heurs_internedépensées}),
      this.setState({date_final: suivisupercontrole.date_final})
         ))
         
          
      } 


    await axios.get("http://localhost/newgen/blog/public/api/ar_for_add")
    .then(res => {
        console.log(res)
        this.setState({articles : res.data})
    }).catch( err => {
        console.log("errreeur ")
  
     })
  
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
 
  await axios.put(`http://localhost/newgen/blog/public/api/suiviSuperControles/`+this.state.Sid, {  
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
      console.log(res.data);
      window.location = "../../general-pages/suiviSuperControle";    

    }) .catch(e => {
      console.log(e);
      swal({
        title: "accés rejeter ",
        text: "Verifier votre demander puis réssayer  encore  ",
        icon: "error",
    });
    });
}
 
 

 
   render(){
    return (
      <>
          
          <div className="col-12 grid-margin" >
          <div className="page-header">
      <h3 className="page-title"> Suivi Super Contrôle  </h3>
      <nav aria-label="breadcrumb">

      </nav>
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
                        <Form.Control value={this.state.code_artc} required className="form-control" type="text"name="rev_projet" onChange={this.handleChange} size="md" style={{backgroundColor: "#ecf2f8"}}  />

                          
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Rev Projet</label>
                         <Form.Control value={this.state.rev_projet} required className="form-control" type="text"name="rev_projet" onChange={this.handleChange1} size="md" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Client</label>
                         <Form.Control value={this.state.nom_client} required className="form-control" type="text"name="rev_projet" onChange={this.handleChange2} size="md" style={{backgroundColor: "#ecf2f8"}}  />

                                             
                           </div>
                         </div>
                       </Form.Group>  
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Type de contrôle (GP12,SLP,CSL2,Sécurisation) </label>
                         <select value={this.state.type_controle} required className="form-control" name="type_controle" onChange={this.handleChange3} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option disabled>Choisie le de contrôle type</option>
                             <option>contrôle Final</option>
                             <option>GP12</option>
                             <option>CSL2</option>
                             <option>CSL2/SLP</option>
                             <option>Sécurisation</option>
                             <option>SLP</option>
                           </select>                          
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Doc de référence </label>
                          <Form.Control value={this.state.doc_refirance} required className="form-control" type="text"name="doc_refirance" onChange={this.handleChange4} size="md" style={{backgroundColor: "#ecf2f8"}}  />                         
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Méthode de contrôle </label>
                           <select value={this.state.methode_controle}  required className="form-control" name="methode_controle" onChange={this.handleChange5} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option>Visuellement /Manuel</option>
                           </select>
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Date de début</label>
                         <Form.Control required value={this.state.date_debut}  className="form-control" type="date"name="date_debut" onChange={this.handleChange6} size="md" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Durée estimé</label>
                          <Form.Control required value={this.state.duree_estime}  type="date"name="duree_estime" onChange={this.handleChange7} size="md"  style={{backgroundColor: "#ecf2f8"}} />
                         </div>
                         </div>
                       </Form.Group>
                      <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Traçabilité sur câblage </label>
                         <Form.Control className="form-control" value={this.state.tracibilite_cablage}   required style={{ backgroundColor: "#ecf2f8"}} type="text"name="tracibilite_cablage" onChange={this.handleChange8} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Traçabilité sur carton  </label>
                          <Form.Control className=" form-control"  value={this.state.tracibilite_carton}  required style={{ backgroundColor: "#ecf2f8"}} type="text"name="tracibilite_carton" onChange={this.handleChange9} size="sm"   />                       
                           </Form.Group>
                          </div>
                          </div>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Heures internes dépensées </label>
                         <Form.Control className="form-control" value={this.state.heurs_internedepensees} required style={{ backgroundColor: "#ecf2f8"}} type="number"name="heurs_internedepensees" onChange={this.handleChange10} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Date fin  </label>
                          <Form.Control className="form-control" value={this.state.date_final}   required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_final" onChange={this.handleChange11} size="sm"   />                       
                           </Form.Group>
                          </div>
                       </div>
                     </div>
                   </div>
              <Button className="btn btn-inverse-dark">
                Fermer
              </Button>
              <Button className="btn btn-inverse-success" type="submit">Confimer</Button>
      </form>
    </div>
  </div>
</div>





      
      </>
    );
  }
}
export default EditSuperContolle;

  /*

  */