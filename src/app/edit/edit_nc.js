import React, { Component } from 'react'
import axios from "axios";
import { Button,Form} from 'react-bootstrap';
import swal from 'sweetalert';


export class edit_nc extends Component {

  constructor(props){
    super(props)
    this.state ={
        ncs : [],
        clients:[],
        articles:[],
    lots:[],

        did:props.match.params.id,

        code_produit:'',
        num_lot_date:'',
    
        nr_fnc:'',
        sujet_non_conformite:'',
        qte_nc:'',
        process:'',
        nom_client:'',
        occurance_defaut:'',
     
        ac_immed:'',
        date_ac_immed:'',
        date_verf_ac_immed:'',
     
        photo_ok:null,
        photo_nok:null,
        photo_idant:null,
        article_id:'',
        thnya:"http://localhost/newgen/blog/public/files/",

    }
}
handleChange = event => {
  this.setState({ 	code_produit: event.target.value });
}
handleChange1 = event => {
  this.setState({   num_lot_date: event.target.value });
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



    await axios.get("http://localhost/newgen/blog/public/api/rapportnc/"+this.state.did)
    .then(res => {
        console.log(res)
        this.setState({ncs : res.data})
    }).catch( err => {
        console.log("errreeur ")

    }) 

    { this.state.ncs.map( nc =>(
      this.setState({nr_fnc: nc.nr_fnc}),
      this.setState({code_produit: nc.id_article}),
      this.setState({num_lot_date: nc.id_lot}),
      this.setState({sujet_non_conformite: nc.sujet_non_conformite}),
      this.setState({qte_nc: nc.qte_nc}),
      this.setState({ process: nc. process}),
      this.setState({nom_client: nc.id_client}),
      this.setState({ occurance_defaut: nc. occurance_defaut}),

      this.setState({ ac_immed: nc. ac_immed}),
    this.setState({date_ac_immed: nc.date_ac_immed}),
    this.setState({date_verf_ac_immed: nc.date_verf_ac_immed})


     // this.setState({photo_ok: this.state.thnya+nc.photo_ok}),
      //this.setState({photo_nok: this.state.thnya+nc.photo_nok}),
      //this.setState({photo_idant: this.state.thnya+nc.photo_idant})

            ))} 


}

  
update = async (e) =>{
  e.preventDefault();

 const ncc={
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

    await axios.put('http://localhost/newgen/blog/public/api/rapportnc/'+this.state.did,{ 
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
    date_verf_ac_immed:this.state.date_verf_ac_immed}
   
   
    )
   .then(res => {

    console.log(res);
    console.log(res.data);

      window.location = "../../general-pages/fich_nc";    
      
     
  })

  .catch(e => {
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



  render() {
  
    return (

   

      <div>
        
        <div className="page-header">
          <h3 className="page-title"> modifer fiche nc </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
               
                  
<div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
   
<div >  
                    
<h4 className="card-title">comformité N </h4>




<form className="form-sample" onSubmit={this.update}>
        <div className="row">
          <div className="col-md-12">
                   <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Code Produit</label>
                           
                           <select    value={this.state.code_produit}  className="form-control" name="ref" onChange={this.handleChange} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           { this.state.articles.map( article =>( 
                            <option key={article.id_article} value={article.id_article}>{article.code_artc} {article.nom_artc}</option>
                      ))}                           </select>       
                           </div>
                         <div className="col-md-8">
                         <label className="form-check-label">N° de Lot/ Date) quantité</label>
                         <Form.Control required value={this.state.num_lot_date} className="form-control" type="text" name="photo_ok" onChange={this.handleChange1} size="sm" style={{backgroundColor: "#ecf2f8"}}  />

                         </div>
                       
                         </div>
                       </Form.Group>
                       <Form.Group>
                      <label className="form-check-label">Sujet de Non Conformité</label>
                      <textarea className="form-control" value={this.state.sujet_non_conformite} required  rows="3"  type="text"name="description du défaut " onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                       <Form.Group>
                      <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">Photo ok</label>
                         <Form.Control  className="form-control" accept={this.state.photo_ok} type="file"name="ok" onChange={this.handleChange13} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Nok</label>
                         <Form.Control   className="form-control" accept={this.state.photo_nok} type="file"name="nok" onChange={this.handleChange14} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         <div className="col-md-4">
                         <label className="form-check-label">Photo Identité</label>
                         <Form.Control  className="form-control" accept={this.state.photo_idant} type="file"name="nok" onChange={this.handleChange15} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                         </div>
                         </div>
                       </Form.Group>    
                       <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Quantité NC </label>
                         <Form.Control className=" form-control" value={this.state.qte_nc}  required style={{ backgroundColor: "#ecf2f8"}} type="number"name="type" onChange={this.handleChange5} size="sm"   />
                         </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Process </label>
                          <select required className="form-control" value={this.state.process} name="ref" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
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
                                 
                           <select required value={this.state.nom_client} className="form-control" name="nom_client"  onChange={this.handleChange7} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                      { this.state.clients.map( client =>( 
                            <option key={client.id_client} value={client.id_client}>{client.nom_client}</option>
                      ))}

                         </select>               
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Occurence au Defaurt </label>
                          <Form.Control className=" form-control" value={this.state.occurance_defaut} required style={{ backgroundColor: "#ecf2f8"}} type="text"name="type" onChange={this.handleChange8} size="sm"   />                       
                           </Form.Group>
                          </div>
                          </div>
                          <Form.Group>
                      <label className="form-check-label">TRAITEMENT NC(Action Immédiate)</label>
                      <textarea className="form-control" required value={this.state.ac_immed} rows="3"  type="text"name=" " onChange={this.handleChange9} size="sm" style={{backgroundColor: "#ecf2f8"}}  />
                      </Form.Group> 
                      <div className="row">
                       <div className="col-md-6">
                       <Form.Group>
                         <label className="form-check-label">Date Action Immédiate </label>
                         <Form.Control className=" form-control"required value={this.state.date_ac_immed} style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_ac_immed" onChange={this.handleChange10} size="sm"   />                         
                           </Form.Group>
                         </div>
                         <div className="col-md-6">
                         <Form.Group>
                          <label className="form-check-label">Date Vérification du l'action immédiate  </label>
                          <Form.Control className=" form-control"required value={this.state.date_verf_ac_immed} style={{ backgroundColor: "#ecf2f8"}} type="date"name="date_verf_action_immed" onChange={this.handleChange11} size="sm"   />                       
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
    </div>
 
           
              </div>   
            </div> 
          </div>
        </div>     
     
    
    </div>

  
       


    )
  }
}

export default edit_nc;
