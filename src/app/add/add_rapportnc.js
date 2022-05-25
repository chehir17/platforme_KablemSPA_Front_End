import React, { Component } from 'react'
import swal from 'sweetalert';
import { Button,Form,Modal} from 'react-bootstrap';
// upload image 
//import { useState } from 'react';
import axios from "axios";

export class FichNC extends Component {
    constructor(props){
        super(props)
        this.state ={
          redirection: false,
          showAlert: false,
    clients:[],
    articles:[],
    lots:[],
    code_produit:'',
    num_lot_date:'',
    qte_lot:'',
    nr_fnc:'nc',
    sujet_non_conformite:'',
    qte_nc:'',
    process:'',
    nom_client:'',
    occurance_defaut:'',
    ac_immed:'',
    date_ac_immed:'',
    date_verf_ac_immed:'',
    ac_ap:'',
    num_ac_ap:'',
    photo_ok: null,
    photo_nok: null,
    photo_idant: null,
    user_id:'',
    connected:JSON.parse(localStorage.getItem("userData")),

  }
    }


  /////get clients////

async componentDidMount(){

  if(this.state.connected == null){
   
    window.location = "../user-pages/login-1";   
    }
   
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
     //lots///
     await axios.get("http://localhost/newgen/blog/public/api/lot")
     .then(res => {
         console.log(res)
         this.setState({lots : res.data})
     }).catch( err => {
         console.log("errreeur ")
   
      })
    
  }

  handleChange = event => {
    this.setState({ code_produit: event.target.value });
  }
  handleChange1 = event => {
    this.setState({   num_lot_date: event.target.value });
  }
  handleChange2 = event => {
    this.setState({   qte_lot: event.target.value });
  }
  handleChange3 = event => {
    this.setState({nr_fnc: event.target.value });
  }
  handleChange4 = event => {
    this.setState({ sujet_non_conformite: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ qte_nc: event.target.value });
  }
  handleChange6 = event => {
    this.setState({ process: event.target.value });
  }
  handleChange7 = event => {
    this.setState({ nom_client: event.target.value });
  }
  handleChange8 = event => {
    this.setState({occurance_defaut: event.target.value });
  }
  handleChange9 = event => {
    this.setState({ 	ac_immed: event.target.value });
  }
  handleChange10 = event => {
    this.setState({ 	date_ac_immed: event.target.value });
  }
  handleChange11= event => {
    this.setState({	date_verf_ac_immed: event.target.value });
  }
  handleChange18= event => {
    this.setState({ ac_ap: event.target.value });
  }
  handleChange12= event => {
    this.setState({ 	num_ac_ap: event.target.value });
  }
  handleChange13= event => {
    this.setState({ photo_ok: event.target.files[0] });
    console.log(event.target.files[0]);
  }
  handleChange14= event => {
    this.setState({ photo_nok: event.target.files[0] });
    console.log(event.target.files[0]);

  }
  handleChange15= event => {
    this.setState({ photo_idant: event.target.files[0] });
    console.log(event.target.files[0]);
  }
  handleChange16= event => {
    this.setState({ user_id: event.target.value });
  }
  handleChange17= event => {
    this.setState({ article_id: event.target.value });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
  
    const user = {
      code_produit:this.state.code_produit,
      num_lot_date:this.state.num_lot_date,
      nr_fnc:this.state.nr_fnc,
      sujet_non_conformite:this.state.sujet_non_conformite,
      qte_nc:this.state.qte_nc,
      process:this.state.process,
      nom_client:this.state.nom_client,
      occurance_defaut:this.state.occurance_defaut,
      ac_immed:this.state.ac_immed,
      date_ac_immed:this.state.date_ac_immed,
      date_verf_ac_immed:this.state.date_verf_ac_immed,
      photo_ok:this.state.photo_ok,
      photo_nok:this.state.photo_nok,
      photo_idant:this.state.photo_idant,
    };
    
   console.log(user);
    const formData = new FormData();
    formData.append('photo_ok',this.state.photo_ok);
    formData.append('photo_nok', this.state.photo_nok);
    formData.append('photo_idant', this.state.photo_idant);

    formData.append('code_produit',this.state.code_produit);
    formData.append('num_lot_date', this.state.num_lot_date);
    formData.append('nr_fnc', this.state.nr_fnc);
    formData.append('sujet_non_conformite',this.state.sujet_non_conformite);
    formData.append('qte_nc', this.state.qte_nc);
    formData.append('process', this.state.process);
    formData.append('nom_client',this.state.nom_client);
    formData.append('occurance_defaut', this.state.occurance_defaut);
    formData.append('ac_immed', this.state.ac_immed);
    formData.append('date_ac_immed', this.state.date_ac_immed);
    formData.append('date_verf_ac_immed', this.state.date_verf_ac_immed);
    console.log(formData);

    await axios.post(`http://localhost/newgen/blog/public/api/rapportnc`,  
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
    /*window.location = "../tables/tab_fichnc";  */  });
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
    <h3>Nouveaux</h3>

    <div className="card-title">
    rapport non-conformité
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Code Produit</label>
                           
                           <select  className="form-control" name="ref" onChange={this.handleChange} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           { this.state.articles.map( article =>( 
                            <option key={article.id_article} value={article.id_article}>{article.code_artc} {article.nom_artc}</option>
                      ))}                           </select>       
                           </div>
                         <div className="col-md-8">
                         <label className="form-check-label">N° de Lot/ Date) quantité</label>
                         <Form.Control required className="form-control" type="text" name="photo_ok" onChange={this.handleChange1} size="sm" style={{backgroundColor: "#ecf2f8"}}  />

                         </div>
                       
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <label className="form-check-label">Sujet de Non Conformité</label>
                      <textarea className="form-control" required  rows="3"  type="text"name="description du défaut " onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                       <label className="form-check-label">Photo ok</label>
                         <Form.Control required className="form-control" type="file" name="photo_ok" onChange={this.handleChange13} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                        
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Nok</label>
                         <Form.Control required className="form-control" type="file" name="photo_nok" onChange={this.handleChange14} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Identification </label>
                         <Form.Control required className="form-control" type="file" name="photo_idant" onChange={this.handleChange15} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         </div>
                       </Form.Group>    
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Quantité NC </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="number"name="type" onChange={this.handleChange5} size="sm"   />
                         </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Process </label>
                          <select required className="form-control" name="ref" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option disabled>Choisie le Process</option>
                             <option>P1</option>
                             <option>P2</option>
                             <option>P3</option>
                           </select>                          
                           </Form.Group>
                          </div>
                          </div>
                          <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Non Client </label>
                                 
                           <select required  className="form-control" name="nom_client"  onChange={this.handleChange7} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                      { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.id_client}>{client.nom_client}</option>
                      ))}

                         </select>               
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Occurence au Defaurt </label>
                          <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="type" onChange={this.handleChange8} size="sm"   />                       
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <label className="form-check-label">TRAITEMENT NC(Action Immédiate)</label>
                      <textarea className="form-control" required  rows="3"  type="text"name=" " onChange={this.handleChange9} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                      <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Date Action Immédiate </label>
                         <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_ac_immed" onChange={this.handleChange10} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Date Vérification du l'action immédiate  </label>
                          <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_verf_action_immed" onChange={this.handleChange11} size="sm"   />                       
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
export default FichNC;

  /*

  */