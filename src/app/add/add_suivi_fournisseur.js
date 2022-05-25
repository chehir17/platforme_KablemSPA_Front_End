import React, { Component } from 'react'
import swal from 'sweetalert';
import { Button,Form,Modal} from 'react-bootstrap';//import { useState } from 'react';
import axios from "axios";

export class AddSuiviFournisseur extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,
      showAlert: false,
        suiviFournisseurs : [],
        articles:[],
        fournisseurs:[],

        class:'',

        code_artc:'',
        nom_four:'',
        desc_prob:'',
        pcs_ko_detecte:'',
        triage:'',
        tot_pcs_ko:'',
        decision:'',
        derogation:'',
        cout_tret:'',
        statut:'',
        notes:'',
        piece_joint:'',
        connected:JSON.parse(localStorage.getItem("userData")),

        
    }
}
  


/////get article////

async componentDidMount(){
  if(this.state.connected == null){
   
    window.location = "../user-pages/login-1";   
    }
  await axios.get("http://localhost/newgen/blog/public/api/ar_for_add")
  .then(res => {
      console.log(res)
      this.setState({articles : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })

   ///get article

   await axios.get("http://localhost/newgen/blog/public/api/fournisseur")
  .then(res => {
      console.log(res)
      this.setState({fournisseurs : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })

}





handleChange = event => {
  this.setState({ code_artc: event.target.value });
}

handleChange111 = event => {
  this.setState({ class: event.target.value });
}
handleChange1 = event => {
  this.setState({ nom_four: event.target.value });
}
handleChange3 = event => {
  this.setState({desc_prob: event.target.value });
}
handleChange4 = event => {
  this.setState({ pcs_ko_detecte: event.target.value });
}
handleChange5 = event => {
  this.setState({ tirage: event.target.value });
}
handleChange6 = event => {
  this.setState({ tot_pcs_ko: event.target.value });
}
handleChange7 = event => {
  this.setState({ decision: event.target.value });
}
handleChange8 = event => {
  this.setState({ derogation: event.target.value });
}
handleChange9 = event => {
  this.setState({ cout_tret: event.target.value });
}
handleChange10 = event => {
  this.setState({ statut: event.target.value });
}
handleChange11= event => {
  this.setState({notes: event.target.value });
}
handleChange12= event => {
  this.setState({piece_joint: event.target.value });
}
 


      
handleSubmit = async (event) => {
  event.preventDefault();

  const suiviFournisseur = {
    code_artc:this.state.code_artc,
    nom_four:this.state.nom_four,
    desc_prob:this.state.desc_prob,
    pcs_ko_detecte:this.state.pcs_ko_detecte,
    tirage:this.state.tirage,
    tot_pcs_ko:this.state.tot_pcs_ko,
    decision:this.state.decision,
    derogation:this.state.derogation,
    cout_tret:this.state.cout_tret,
    statut:this.state.statut,
    notes:this.state.notes, 
    piece_joint:this.state.piece_joint,
    class:this.state.class

  };
  
 console.log(suiviFournisseur);
 
  await axios.post(`http://localhost/newgen/blog/public/api/suiviFournisseurs`, {  
    code_artc:this.state.code_artc,
    nom_four:this.state.nom_four,
    desc_prob:this.state.desc_prob,
    pcs_ko_detecte:this.state.pcs_ko_detecte,
    tirage:this.state.tirage,
    tot_pcs_ko:this.state.tot_pcs_ko,
    decision:this.state.decision,
    derogation:this.state.derogation,
    cout_tret:this.state.cout_tret,
    statut:this.state.statut,
    notes:this.state.notes, 
    piece_joint:this.state.piece_joint,
    class:this.state.class

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
    window.location = "../general-pages/suiviFournisseur";
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
      <h3 className="page-title"> Suivi défaut Fournisseur  </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>generalPages</a></li>
          <li className="breadcrumb-item active" aria-current="page">add_suivi_fournisseur</li>
        </ol>
      </nav>
    </div>
  <div className="card" >
 
    <div className="card-body">
    <div className="card-title">
    Ajouter Suivi défaut Fournisseur 
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                   <div className="row">
                       <div className="col-md-4">
                        <label className="form-check-label">Code Article</label>
                        <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="code_artc" onChange={this.handleChange} size="sm"   />                         


                           </div>
                           <div className="col-md-4">
                          <label className="form-check-label">Fournisseur</label>
                        
                         <select required className="form-control" name="nom_four" onChange={this.handleChange1} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="" ></option>
                         { this.state.fournisseurs.map( fournisseur =>( 
                            <option key={fournisseur.id_fournisseur} value={fournisseur.nom_four}>{fournisseur.nom_four}</option>
                          ))}
                          </select>                         
                           </div>

                           <div className="col-md-4">
                          <label className="form-check-label">classification</label>
                         <select required className="form-control" name="nom_four" onChange={this.handleChange111} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="" ></option>
                         <option value="C1" >C1</option>
                         <option value="C2" >C2</option>
                         <option value="C3" >C3</option>

                       
                          </select>                         
                           </div>
                         </div>
                         <br/>
                       <Form.Group>
                      <label className="form-check-label">Description de problème </label>
                      <textarea className="form-control" required  rows="3"  type="textarea"name="desc_prob" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                       </Form.Group>  
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Pcs KO détectées </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number"name="pcs_ko_detecte" onChange={this.handleChange4} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">TRIAGE (oui/Non)  </label>
                          <select required className="form-control" name="triage" onChange={this.handleChange5} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value=""></option>
                             <option value="Oui">Oui</option>
                             <option value="Non">Non</option>
                           </select>                            
                          </Form.Group>
                          </div>
                          </div> 
                          <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label"> Total des pcs KO </label>
                          <Form.Control required  type="number"name=" tot_pcs_ko" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Décision</label>
                         <select required className="form-control" name="decision" onChange={this.handleChange7} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value=""></option>
                             <option value="Retour Production">Retour Production</option>
                             <option value="Reworker<">Reworker</option>
                             <option value="Retour Fournisseur">Retour Fournisseur</option>
                             <option value="Mise au Rebut">Mise au Rebut</option>
                           </select>                         
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Dérogation (Oui/Non)</label>
                         <select required className="form-control" name="derogation" onChange={this.handleChange8} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value=""></option>
                             <option value="Oui">Oui</option>
                             <option value="Non">Non</option>
                           </select>                        
                         </div>
                         </div>
                       </Form.Group>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label"> Coût De traitement  </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number"name="cout_tret" onChange={this.handleChange9} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Statut</label>
                        <select required className="form-control" name="statut" onChange={this.handleChange10} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value="" >Statut</option>
                             <option value="In Progress" style={{ backgroundColor: "red"}} >In Progress</option>
                             <option value="Done" style={{ backgroundColor: "green"}}>Done</option>
                           </select>                            
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <label className="form-check-label">Notes </label>
                      <textarea className="form-control" required  rows="3"  type="textarea"name="notes" onChange={this.handleChange11} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                      <Form.Group>
                      <label className="form-check-label">Piéces jointe </label>
                      <Form.Control  className="form-control" type="file"name="piece_joint" onChange={this.handleChange12} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                          
          </div>   
        </div>
        <a className="btn btn-inverse-dark" href="./suiviFournisseur">
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
export default AddSuiviFournisseur;

  /*

  */