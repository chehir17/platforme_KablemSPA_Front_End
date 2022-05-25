import React,{Component}  from 'react';
import { Button,Form,Modal} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";

import swal from 'sweetalert';



export class Example extends Component {

  constructor(props){
    super(props)
    this.state ={
      etat:true,
      type1:"dmpp",

        clients : [],
        articles : [],
        lignes : [],

        ligne:'',
        post:'',
        ref:'',
        nature:'',
        zone:'',
        date_sou:'',
        type:'',
        desc_cli:'',
        cout_estimative:'',
        etat_actu:'',
        etat_modif:'',
        objectif_modif:'',
        showAlert: false

    }
}
async componentDidMount(){


  ///get article

  await axios.get("http://localhost/newgen/blog/public/api/ar_for_add")
 .then(res => {
     console.log(res)
     this.setState({articles : res.data})
 }).catch( err => {
     console.log("errreeur ")

  })
///get suivi ligne
  await axios.get("http://localhost/newgen/blog/public/api/ligne")
  .then(res => {
      console.log(res)
      this.setState({lignes : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })

   await axios.get("http://localhost/newgen/blog/public/api/client")
   .then(res => {
       console.log(res)
       this.setState({clients : res.data})
   }).catch( err => {
       console.log("errreeur ")
 
    })
  }

handleChange = event => {
  this.setState({ 	ligne: event.target.value });
}
handleChange1 = event => {
  this.setState({ post: event.target.value });
}
handleChange2 = event => {
  this.setState({ ref: event.target.value });
}
handleChange3 = event => {
  this.setState({nature: event.target.value });
}
handleChange4 = event => {
  this.setState({ zone: event.target.value });
}
handleChange5 = event => {
  this.setState({ date_sou: event.target.value });
}
handleChange6 = event => {
  this.setState({ type: event.target.value });
}
handleChange7 = event => {
  this.setState({ desc_cli: event.target.value });
}
handleChange8 = event => {
  this.setState({ cout_estimative: event.target.value });
}
handleChange9 = event => {
  this.setState({ etat_actu: event.target.value });
}
handleChange10 = event => {
  this.setState({ etat_modif: event.target.value });
}
handleChange11= event => {
  this.setState({objectif_modif: event.target.value });
}



handleSubmit = async (event) => {
  event.preventDefault();

  const dmpp = {
    ligne:this.state.ligne,
    post:this.state.post,
    ref:this.state.ref,
    nature:this.state.nature,
    zone:this.state.zone,
    date_sou:this.state.date_sou,
    type:this.state.type,
    desc_cli:this.state.desc_cli,
    cout_estimative:this.state.cout_estimative,
    etat_actu:this.state.etat_actu,
    etat_modif:this.state.etat_modif,
    objectif_modif:this.state.objectif_modif, 
  };
  
 console.log(dmpp);
 
  await axios.post(`http://localhost/newgen/blog/public/api/dmpp`, {  
    ligne:this.state.ligne,
    post:this.state.post,
    ref:this.state.ref,
    nature:this.state.nature,
    zone:this.state.zone,
    date_sou:this.state.date_sou,
    type:this.state.type,
    desc_cli:this.state.desc_cli,
    cout_estimative:this.state.cout_estimative,
    etat_actu:this.state.etat_actu,
    etat_modif:this.state.etat_modif,
    objectif_modif:this.state.objectif_modif, 
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
      window.location = "../general-pages/ficheDmpp";    });
      }
     
    })
    .catch(e => {
      console.log(e);
      
        this.openadd();
              
    });
}


openadd = () => this.setState({ showAlert: true  });

closeModal1 = () => this.setState({ showAlert: false });

   render(){
    return (
      <>

         
            
          
          <div className="col-12 grid-margin" >
         
   
         
         
          <Modal 
          show={this.state.showAlert}
          onHide={this.closeModal1}
          backdrop=""
           keyboard={false}
           size="sm"
           className="model" 
          >
            <Modal.Header closeButton >
   <Modal.Title >Alerte </Modal.Title>
 </Modal.Header>
 <Modal.Body className="p-3 mb-2 bg-danger text-white" >votre demande a été rejeter veuillez réessayer !!!</Modal.Body>

          </Modal>
  <div className="card" >
 
    <div className="card-body">
    <div className="card-title">
             Nouveau Demande de modification ...
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-md-12">
        
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                            <label className="form-check-label">Ligne</label>
                            <select  className="form-control" name="ligne" onChange={this.handleChange} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                            <option> </option>

                           { this.state.lignes.map( ligne =>( 
                            <option key={ligne.id_ligne} value={ligne.id_ligne}>{ligne.nom_ligne} </option>
                      ))}                           </select>  
                         </div>
                        <div className="col-md-6">
                             <label className="form-check-label">Post</label>
                             <Form.Control required type="text"name=" post" onChange={this.handleChange1} size="sm"style={{backgroundColor: "#ecf2f8"}}   />
                       </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                           <label className="form-check-label">Réf(code-produit)</label>
                           <select  className="form-control" name="ref" onChange={this.handleChange2} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                          <option></option>
                           { this.state.articles.map( article =>( 
                            <option key={article.id_article} value={article.id_article}>{article.code_artc} {article.nom_artc}</option>
                      ))}                          
                       </select>              
                           </div>
                         <div className="col-md-6">
                            <label className="form-check-label">Nature</label>
                            <select className="form-control" required  name="nature" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                           <option></option>
                            <option>interne</option>
                            <option>externe</option>

                            </select>

                            </div>
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                       <label className="form-check-label">Zone</label>
                         <select required  className="form-control" name="zone" onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                         <option></option>
                           <option>P1</option>
                           <option>P2</option>
                           <option>P3</option>
                           <option>P1 + P2</option>
                           <option>P1 + P2 + P3</option>
                           <option>CET</option>
                           <option>Magasin</option>
                           <option>P3-1</option>
                           <option>P3-2</option>
                           <option>P3-3</option>

                         </select>
                         </div>
                         <div className="col-md-6">
                       <label className="form-check-label">Date souhaité</label>
                         <Form.Control required  type="date"name=" date_sou" onChange={this.handleChange5} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Type</label>
                         <Form.Control required  type="text"name="type" onChange={this.handleChange6} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Client</label>

                         <select required  className="form-control" name="desc_cli"  onChange={this.handleChange7} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                      { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.id_client}>{client.nom_client}</option>
                      ))}

                         </select>     
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Coùt estimative</label>
                          <Form.Control required  type="number"name=" cout_estimative" onChange={this.handleChange8} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                         </div>
                         </div>
                       </Form.Group>
                          
                       <Form.Group>

                         <label className="form-check-label">Etat actuelle </label>
                         <textarea className="form-control" required  rows="3"  type="text" name="etat_actu" onChange={this.handleChange9} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </Form.Group>
                         <Form.Group>

                          <label className="form-check-label">Etat de modification </label>
                          <textarea className="form-control" required  rows="3"   type="text"name="etat_modif" onChange={this.handleChange10} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                          </Form.Group>
                          <Form.Group>

                          <label className="form-check-label">Objectif de modification</label>
                          <textarea className="form-control" required  rows="3"  type="text"name="objectif_modif" onChange={this.handleChange11} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                          </Form.Group>

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
export default Example;

  /*

  */