import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon,/*MDBSelect*/ } from 'mdbreact';
import { Button,Form} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";
import {UseHistory} from 'react-router-dom';
import swal from 'sweetalert';

export class EditSuiviFournisseur extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,
      fid:props.match.params.id,


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
       // piece_joint:'',
 
        
    }
}
  


/////get article////

async componentDidMount(){

  await axios.get("http://localhost/newgen/blog/public/api/suiviFournisseurs/"+this.state.fid)
  .then(res => {
      console.log(res)
      this.setState({suiviFournisseurs : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
   { this.state.suiviFournisseurs.map(  sf =>(
    this.setState({code_artc: sf.id_article}),
    this.setState({nom_four: sf.id_fournisseur}),
    this.setState({desc_prob: sf.desc_prob}),
    this.setState({pcs_ko_detecte: sf.pcs_ko_detecte}),
    this.setState({triage: sf.triage}),
    this.setState({tot_pcs_ko: sf.tot_pcs_ko}),
    this.setState({decision: sf.decision}),
    this.setState({derogation: sf.derogation}),
    this.setState({cout_tret: sf.cout_tret}),
    this.setState({statut	: sf.statut}),
    this.setState({notes: sf.notes}),
    this.setState({class: sf.class})

   // this.setState({piece_joint: sf.piece_joint})
       ))
       
        
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
  this.setState({ triage: event.target.value });
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
/*handleChange12= event => {
  this.setState({piece_joint: event.target.value });
}*/
 


      
handleSubmit = async (event) => {
  event.preventDefault();

  const suiviFournisseur = {
    code_artc:this.state.code_artc,
    nom_four:this.state.nom_four,
    desc_prob:this.state.desc_prob,
    pcs_ko_detecte:this.state.pcs_ko_detecte,
    triage:this.state.triage,
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
 
  await axios.put(`http://localhost/newgen/blog/public/api/suiviFournisseurs/`+this.state.fid, {  
    code_artc:this.state.code_artc,
    nom_four:this.state.nom_four,
    desc_prob:this.state.desc_prob,
    pcs_ko_detecte:this.state.pcs_ko_detecte,
    triage:this.state.triage,
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
      console.log(res.data);
      window.location = "../../general-pages/suiviFournisseur";    

    })
    .catch(e => {
      console.log(e);
      swal({
        title: "accés rejeter ",
        text: "Verifier votre demander puis réssayer  encore  ",
        icon: "error",
    });
    });

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
      <h3 className="page-title"> Modifier Suivi défaut Fournisseur  </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>generalPages</a></li>
          <li className="breadcrumb-item active" aria-current="page">edit_suivi_fournisseur</li>
        </ol>
      </nav>
    </div>
  <div className="card" >
 
    <div className="card-body">
    <div className="card-title">
    Modifier Suivi défaut Fournisseur 
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                   <div className="row">
                       <div className="col-md-4">
                        <label className="form-check-label">Code Article</label>
                        <Form.Control  value={this.state.code_artc} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="code_artc" onChange={this.handleChange} size="sm"   />                         

                        
                           </div>
                           <div className="col-md-4">
                          <label className="form-check-label">Fournisseur</label>
                         <select required value={this.state.nom_four} className="form-control" name="nom_four" onChange={this.handleChange1} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="" >Fournisseur/classification</option>
                         { this.state.fournisseurs.map( fournisseur =>( 
                            <option key={fournisseur.id_fournisseur} value={fournisseur.nom_four}>{fournisseur.nom_four}</option>
                          ))}
                          </select>                         
                           </div>

                           <div className="col-md-4">
                          <label className="form-check-label">classification</label>
                         <select required value={this.state.class} className="form-control" name="nom_four" onChange={this.handleChange111} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value="" >classification</option>
                         <option value="C1" >C1</option>
                         <option value="C2" >C2</option>
                         <option value="C3" >C3</option>

                       
                          </select>                         
                           </div>
                         </div>
                         <br/>
                       <Form.Group>
                      <label className="form-check-label">Description de problème </label>
                      <textarea className="form-control" value={this.state.desc_prob} required  rows="3"  type="textarea"name="desc_prob" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                       </Form.Group>  
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Pcs KO détectées </label>
                         <Form.Control value={this.state.pcs_ko_detecte} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number"name="pcs_ko_detecte" onChange={this.handleChange4} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">TRIAGE (oui/Non)  </label>
                          <select required value={this.state.triage} className="form-control" name="triage" onChange={this.handleChange5} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
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
                          <Form.Control required value={this.state.tot_pcs_ko}  type="number"name=" tot_pcs_ko" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Décision</label>
                         <select required value={this.state.decision} className="form-control" name="decision" onChange={this.handleChange7} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option value="Retour Production">Retour Production</option>
                             <option value="Reworker">Reworker </option>
                             <option value="Retour Fournisseur">Retour Fournisseur</option>
                             <option value="Mise au Rebut">Mise au Rebut</option>
                           </select>                         
                           </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Dérogation (Oui/Non)</label>
                         <select required value={this.state.derogation} className="form-control" name="derogation" onChange={this.handleChange8} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
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
                         <Form.Control value={this.state.cout_tret} className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number" name="cout_tret" onChange={this.handleChange9} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                        <label className="form-check-label">Statut</label>
                        <select required value={this.state.statut} className="form-control" name="statut" onChange={this.handleChange10} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option style={{ backgroundColor: "red"}} value="In Progress" >In Progress</option>
                             <option style={{ backgroundColor: "green"}} value="Done">Done</option>
                           </select>                            
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <label className="form-check-label">Notes </label>
                      <textarea value={this.state.notes} className="form-control" required  rows="3"  type="textarea"name="notes" onChange={this.handleChange11} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                          {/*                   
                      <Form.Group>
                      <label className="form-check-label">Piéces jointe </label>
                      <Form.Control value={this.state.piece_joint} required className="form-control" type="file"name="piece_joint" onChange={this.handleChange12} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group>  */}  
                          
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
export default EditSuiviFournisseur;

  /*

  */