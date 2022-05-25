import React,{Component}  from 'react';

import swal from 'sweetalert';
import { Button,Form,Modal} from 'react-bootstrap';//import { useState } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



export class Example extends Component {

  constructor(props){
    super(props)
    this.state ={
      redirection: false,
      showAlert: false,
clients:[],
articles:[],
suivifrs:[],

        num_rec_cli:'',
        date_rec_cli:'',
        zone:'',
        nom_client:'',
        ref_prod:'',
        nom_projet:'',
        phase_projet:'',
        desc_deff:'',
        photo_ok:null,
        photo_nok:null,
        nbr_piec_ko:'',
        type:'',
        num_rec_four:'',
        recurence:'',
        statut:'open',
        cout_non_quat_s_rec:'',
        nom_client:'',
        connected:JSON.parse(localStorage.getItem("userData")),
        user_id:'',        
    }
}



/////get clients////

async componentDidMount(){
  await axios.get("http://localhost/newgen/blog/public/api/client")
  .then(res => {
      console.log(res)
      this.setState({clients : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })

   ///get article

   await axios.get("http://localhost/newgen/blog/public/api/ar_for_add")
  .then(res => {
      console.log(res)
      this.setState({articles : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
///get suivi fournisseur
   await axios.get("http://localhost/newgen/blog/public/api/sf_for_add")
   .then(res => {
       console.log(res)
       this.setState({suivifrs : res.data})
   }).catch( err => {
       console.log("errreeur ")
 
    })
  
}

//////get articles


///////////////////
//////**** add suivi client + projet+photo */
handleChange1 = event => {
  this.setState({ num_rec_cli: event.target.value });
}
handleChange2 = event => {
  this.setState({ date_rec_cli: event.target.value });
}
handleChange3 = event => {
  this.setState({zone: event.target.value });
}
handleChange4 = event => {
  this.setState({ ref_prod: event.target.value });
}
handleChange5 = event => {
  this.setState({ nom_projet: event.target.value });
}
handleChange6 = event => {
  this.setState({ phase_projet: event.target.value });
}
handleChange7 = event => {
  this.setState({ desc_deff: event.target.value });
}
handleChange8 = event => {
  this.setState({ photo_ok: event.target.files[0] });
}
handleChange9 = event => {
  this.setState({ photo_nok: event.target.files[0]});
}
handleChange10 = event => {
  this.setState({ nbr_piec_ko: event.target.value });
}
handleChange11= event => {
  this.setState({type: event.target.value });
}
handleChange12= event => {
  this.setState({num_rec_four: event.target.value });
}
handleChange13= event => {
  this.setState({recurence: event.target.value });
}

handleChange15= event => {
  this.setState({cout_non_quat_s_rec: event.target.value });
}
handleChange16= event => {
  this.setState({nom_client: event.target.value });
}




handleSubmit = async (event) => {
  event.preventDefault();

  const suiviclient = {
    num_rec_cli:this.state.num_rec_cli,
    date_rec_cli:this.state.date_rec_cli,
    zone:this.state.zone,
    nom_client:this.state.nom_client,
    ref_prod:this.state.ref_prod,
    nom_projet:this.state.nom_projet,
    phase_projet:this.state.phase_projet,
    desc_deff:this.state.desc_deff,
    photo_ok:this.state.photo_ok,
    photo_nok:this.state.photo_nok,
    nbr_piec_ko:this.state.nbr_piec_ko,
    type:this.state.type, 
    num_rec_four:this.state.num_rec_four, 
    recurence:this.state.recurence, 
    statut:this.state.statut, 
    cout_non_quat_s_rec:this.state.cout_non_quat_s_rec, 
    user_id:this.state.connected[0].id_user
  };
  
 console.log(suiviclient);
 

 const formData = new FormData();
 formData.append('id_user',this.state.connected[0].id_user);

 formData.append('num_rec_cli',this.state.num_rec_cli);
 formData.append('date_rec_cli',this.state.date_rec_cli);
 formData.append('zone',this.state.zone);
 formData.append('nom_client',this.state.nom_client);
 formData.append('ref_prod',this.state.ref_prod);
 formData.append('desc_deff',this.state.desc_deff);
 formData.append('nbr_piec_ko',this.state.nbr_piec_ko);
 formData.append('type',this.state.type);
 formData.append('num_rec_four',this.state.num_rec_four);
 formData.append('recurence',this.state.recurence);
 formData.append('statut',this.state.statut);
 formData.append('cout_non_quat_s_rec',this.state.cout_non_quat_s_rec);
 formData.append('nom_projet',this.state.nom_projet);
 formData.append('phase_projet',this.state.phase_projet);
 formData.append('photo_ok',this.state.photo_ok);
 formData.append('photo_nok', this.state.photo_nok);


  await axios.post(`http://localhost/newgen/blog/public/api/suiviClients`,  
    formData,{
      headers: {
      'Content-Type': 'multipart/form-data',
      }
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
    window.location = "../general-pages/suisiClient";    });
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

         </Modal>  <div className="card" >
    <div className="card-body">
    <h2>Nouveaux </h2>

    <div className="card-title">
    Suivi Incidents Client 
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
        
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                            <label className="form-check-label">N° reclamation client </label>
                            <Form.Control required  type="text"name="num_rec_cli" onChange={this.handleChange1} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                        <div className="col-md-6">
                             <label className="form-check-label">Date reclamation client</label>
                             <Form.Control required type="date"name="date_rec_cli" onChange={this.handleChange2} size="sm" style={{backgroundColor: "#ecf2f8"}}   />
                       </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                           <label className="form-check-label">Zone</label>
                         <select required  className="form-control" name="zone" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                           <option value=""> Selecter Zone</option>
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
                         <label className="form-check-label">Réf(code-produit)</label>
                           <Form.Control required  className="form-control" name="ref" onChange={this.handleChange4} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                    
                            </div>
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                        <label className="form-check-label">Projet</label>
                         <Form.Control required  type="text"name=" nom_projet" onChange={this.handleChange5} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-6">
                     
                        
                         <label className="form-check-label">phase de projet </label>
                         <select required  className="form-control" name="phase_projet" onChange={this.handleChange6} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                            <option value="">phase de Projet</option>
                            <option>série</option>
                            <option>proto</option>
                         </select>
                        
                         </div>
                         </div>
                       </Form.Group>
                           <Form.Group>

                          <label className="form-check-label">Description du défaut</label>
                          <textarea className="form-control" required  rows="3"  type="text"name="description du défaut " onChange={this.handleChange7} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                          </Form.Group>   
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Photo ok</label>
                         <Form.Control required className="form-control" type="file" name="photo_ok" onChange={this.handleChange8} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Nok</label>
                         <Form.Control required className="form-control" type="file" name="photo_nok" onChange={this.handleChange9} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">nombre piéce KO</label>
                          <Form.Control required  type="number"name=" psc_ko" onChange={this.handleChange10} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                         </div>
                         </div>
                       </Form.Group>
                          
                       <div className="row">
                       <div className="col-md-4">
                       <Form.Group>

                         <label className="form-check-label">Type incident </label>
                       
                         <select required  className="form-control" name="type" onChange={this.handleChange11} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                         <option value="">Type de Incident</option>
                         <option>Réclamation interne group</option>
                         <option>alerte</option>
                          <option>Réclamation client</option>
                          <option>Prototypes</option>
                         </select>
                       
                         </Form.Group>
                         </div>
                         <div className="col-md-4">
                     
                        
                         <Form.Group>

                          <label className="form-check-label">Numéro Reclamation fournisseur </label>
                        
                          <select  className="form-control" name="num_rec_four" onChange={this.handleChange12} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           <option value="">Numéro de Reclamation fournisseur</option>
                           { this.state.suivifrs.map( suivifr =>( 
                            <option key={suivifr.id_suivifournisseur} value={suivifr.id_suivifournisseur}>{suivifr.id_suivifournisseur} </option>
                      ))}                           </select>
                          </Form.Group>
                          </div>
                          
                          <div className="col-md-4">
                     
                        
                     <Form.Group>

                      <label className="form-check-label">client </label>
                  
                      <select required  className="form-control" name="nom_client"  onChange={this.handleChange16} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                     <option value="">Nom de Client </option>
                      { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.id_client}>{client.nom_client}</option>
                      ))}

                         </select>       
                  
                      </Form.Group>
                      </div>
                      </div>

                          <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                        <label className="form-check-label">Recurence</label>
                         <Form.Control required className="form-control" type="text"name="Recurence" onChange={this.handleChange13} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-6">
                         <label className="form-check-label">CNQ</label>
                         <Form.Control required className="form-control" type="number"name="cnq" onChange={this.handleChange15} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                      
                         </div>
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