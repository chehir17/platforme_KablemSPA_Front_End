import React,{Component}  from 'react';
import { Button,Form} from 'react-bootstrap';
//import { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

////edit///

export class Example extends Component {

  constructor(props){
    super(props)
    this.state ={
      did:props.match.params.id,

      redirection: false,
suiviClients:[],
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
        photo_ok:'',
        photo_nok:'',
        nbr_piec_ko:'',
        type:'',
        num_rec_four:'',
        recurence:'',
        statut:'',
        cout_non_quat_s_rec:'',
       
        
    }
}





async componentDidMount(){

  await axios.get("http://localhost/newgen/blog/public/api/suiviClients/"+this.state.did)
  .then(res => {
      console.log(res)
      this.setState({suiviClients : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
   { this.state.suiviClients.map( suiviClient =>(
    this.setState({ num_rec_cli: suiviClient. num_rec_cli}),
    this.setState({date_rec_cli: suiviClient.date_rec_cli}),
    this.setState({zone: suiviClient.zone}),
    this.setState({nom_client:suiviClient.id_client}),
    this.setState({ref_prod: suiviClient.id_article}),
    this.setState({nom_projet: suiviClient.nom_projet}),
   this.setState({phase_projet: suiviClient.phase_projet}),
  //  this.setState({ photo_nok: suiviClient. photo_nok}),
    this.setState({ nbr_piec_ko: suiviClient. nbr_piec_ko}),
    this.setState({ desc_deff: suiviClient. desc_deff}),

    this.setState({  type: suiviClient.type_incidant}),
    this.setState({num_rec_four: suiviClient.id_suivifournisseur}),
    this.setState({recurence: suiviClient.recurence}),
    this.setState({ statut: suiviClient. statut}),
    this.setState({ cout_non_quat_s_rec: suiviClient.cout_non_quat_s_rec})
  
    
          ))} 









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
  this.setState({ photo_ok: event.target.value });
}
handleChange9 = event => {
  this.setState({ photo_nok: event.target.value });
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
handleChange14= event => {
  this.setState({statut: event.target.value });
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
  };
  
 console.log(suiviclient);
 
  await axios.put(`http://localhost/newgen/blog/public/api/suiviClients/`+this.state.did, {  
    num_rec_cli:this.state.num_rec_cli,
    date_rec_cli:this.state.date_rec_cli,
    zone:this.state.zone,
    nom_client:this.state.nom_client,
    ref_prod:this.state.ref_prod,
    desc_deff:this.state.desc_deff,
    nbr_piec_ko:this.state.nbr_piec_ko,
    type:this.state.type, 
    num_rec_four:this.state.num_rec_four, 
    recurence:this.state.recurence, 
    statut:this.state.statut, 
    cout_non_quat_s_rec:this.state.cout_non_quat_s_rec, 
    nom_projet:this.state.nom_projet,
    phase_projet:this.state.phase_projet,
    photo_ok:this.state.photo_ok,
    photo_nok:this.state.photo_nok,
  })
    .then(res => {

      console.log(res);
      console.log(res.data);
      window.location = "../../general-pages/suiviClient";    

    }).catch(e => {
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
  <div className="card" >
    <div className="card-body">
    <h2>modification  </h2>

    <div className="card-title">
    Suivi Incidents Client N  
                 </div> 
                 <br/>
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
       
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                            <label className="form-check-label">N° reclamation client </label>
                            <Form.Control required  value={this.state.num_rec_cli} type="text"name="num_rec_cli" onChange={this.handleChange1} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                        <div className="col-md-6">
                             <label className="form-check-label">Date reclamation client</label>
                             <Form.Control required value={this.state.date_rec_cli} type="date"name="date_rec_cli" onChange={this.handleChange2} size="sm" style={{backgroundColor: "#ecf2f8"}}   />
                       </div>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                           <label className="form-check-label">Zone</label>
                         <select required  value={this.state.zone} className="form-control" name="zone" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
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
                         <Form.Control required value={this.state.ref_prod} type="text"name="date_rec_cli" onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}   />

                        
                            </div>
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                        <label className="form-check-label">Projet</label>
                         <Form.Control value={this.state.nom_projet} required  type="text"name=" nom_projet" onChange={this.handleChange5} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-6">
                     
                        
                         <label className="form-check-label">phase de projet </label>
                         <Form.Control required value={this.state.phase_projet} className="form-control" name="phase_projet" onChange={this.handleChange6} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                   
                        
                         </div>
                         </div>
                       </Form.Group>
                           <Form.Group>

                          <label className="form-check-label">Description du défaut</label>
                          <textarea value={this.state.desc_deff} className="form-control" required  rows="3"  type="text"name="description du défaut " onChange={this.handleChange7} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                          </Form.Group>   
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Photo ok</label>
                         <Form.Control value={this.state.photo_ok}  className="form-control" type="file"name="ok" onChange={this.handleChange8} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Nok</label>
                         <Form.Control value={this.state.photo_nok}  className="form-control" type="file"name="nok" onChange={this.handleChange9} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">nombre piéce KO</label>
                          <Form.Control required value={this.state.nbr_piec_ko} type="number"name=" psc_ko" onChange={this.handleChange10} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                         </div>
                         </div>
                       </Form.Group>
                          
                       <div className="row">
                       <div className="col-md-4">
                       <Form.Group>

                         <label className="form-check-label">Type incident </label>
                       
                         <Form.Control required value={this.state.type}  className="form-control" name="type" onChange={this.handleChange11} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                  
                       
                         </Form.Group>
                         </div>
                         <div className="col-md-4">
                     
                        
                         <Form.Group>

                          <label className="form-check-label">Numero Reclamation fournisseur </label>
                        
                          <select value={this.state.num_rec_four} className="form-control" name="num_rec_four" onChange={this.handleChange12} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           { this.state.suivifrs.map( suivifr =>( 
                            <option key={suivifr.id_suivifournisseur} value={suivifr.id_suivifournisseur}>{suivifr.id_suivifournisseur} </option>
                      ))}                           </select>
                          </Form.Group>
                          </div>
                          
                          <div className="col-md-4">
                     
                        
                     <Form.Group>

                      <label className="form-check-label">client </label>
                  
                      <select required value= {this.state.nom_client} className="form-control" name="nom_client"  onChange={this.handleChange16} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                                         <option></option>

                      { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.nom_client}>{client.nom_client}</option>
                      ))}

                         </select>       
                  
                      </Form.Group>
                      </div>
                      </div>

                          <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Recurence</label>
                         <Form.Control value={this.state.recurence} required className="form-control" type="text"name="Recurence" onChange={this.handleChange13} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">CNQ</label>
                         <Form.Control value={this.state.cout_non_quat_s_rec} required className="form-control" type="number"name="cnq" onChange={this.handleChange15} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Statut</label>
                         <Form.Control required value={this.state.statut} className="form-control" name="Statut" onChange={this.handleChange14} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         
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