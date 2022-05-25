import React,{Component}  from 'react';
import swal from 'sweetalert';
import { Button,Form,Modal} from 'react-bootstrap';//import { useState } from 'react';
import axios from "axios";




export class Example extends Component {
  
  constructor(props){
    super(props)
    this.state ={
    lots : [],
    lignes : [],
    showAlert: false,
    users : [],
    articles : [],
    connected:JSON.parse(localStorage.getItem("userData")),
etat10:false,
        compilateur:'',
        zone_affec_prob:'',
        annulation:'',
        desc_prob:'',
        code_artc:'',
        date_prod:'',
        oper_1:'',
        costa_U:'',
        machine:'',
        mini:'',
        ligne_assemb:'', 
        table_elec:'',
        qnt_lot:'',
        qnt_scrap:'',
        cause_prob:'',
        class_route_cause:'',
        ac_immed_prend:'',
        rebut_remp:'',
        odl_rel_logic:'',
        nouv_odl:'',
        Desc_acmo:'',
        num_pcs_recup:'',
        qnt_rebut_final:'',
        h_inter_dep_rework:'',
        h_ext_dep:'',
        cout_final:'',
        resultat_pos_tri:'',
        ac_correct_supp:'',
        num_ac_correc_ext:'',
        note:'',
        poids_rebut:'',
        valeur_scrap:'',
        level:'',
        id_article:'',
        date_prod:'',

        

  }
}


async componentDidMount(){

  if (this.state.connected[0].level !="High level") {
    this.setState({etat10 : true});
    
  }
  ///get article

///get suivi ligne
  await axios.get("http://localhost/newgen/blog/public/api/ligne")
  .then(res => {
      console.log(res)
      this.setState({lignes : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })

   //users///
  await axios.get("http://localhost/newgen/blog/public/api/user")
  .then(res => {
      console.log(res)
      this.setState({users : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
     //lots///
 
 
 
}
handleChange50 = event => {
  this.setState({ level: event.target.value });
}
handleChange1 = event => {
  this.setState({ compilateur: event.target.value });
}
handleChange3 = event => {
  this.setState({zone_affec_prob: event.target.value });
}
handleChange4 = event => {
  this.setState({ annulation: event.target.value });
}
handleChange5 = event => {
  this.setState({ desc_prob: event.target.value });
}
handleChange6 = event => {
  this.setState({ id_article: event.target.value });
}
handleChange8 = event => {
  this.setState({ oper_1: event.target.value });
}
handleChange9 = event => {
  this.setState({ costa_U: event.target.value });
}
handleChange10 = event => {
  this.setState({ machine: event.target.value });
}
handleChange11= event => {
  this.setState({mini: event.target.value });
}
handleChange12= event => {
  this.setState({ligne_assemb: event.target.value });
}
handleChange13= event => {
  this.setState({table_elec: event.target.value });
}
handleChange14= event => {
  this.setState({qnt_lot: event.target.value });
}
handleChange15= event => {
  this.setState({qnt_scrap: event.target.value });
}
handleChange16= event => {
  this.setState({cause_prob: event.target.value });
}
handleChange17= event => {
  this.setState({class_route_cause: event.target.value });
}
handleChange18= event => {
  this.setState({ac_immed_prend: event.target.value });
}
handleChange19= event => {
  this.setState({rebut_remp: event.target.value });
}
handleChange20= event => {
  this.setState({odl_rel_logic: event.target.value });
}
handleChange21= event => {
  this.setState({nouv_odl: event.target.value });
}
handleChange22= event => {
  this.setState({	Desc_acmo: event.target.value });
}
handleChange23= event => {
  this.setState({num_pcs_recup: event.target.value });
}
handleChange24= event => {
  this.setState({qnt_rebut_final: event.target.value });
}
handleChange25= event => {
  this.setState({h_inter_dep_rework: event.target.value });
}
handleChange26= event => {
  this.setState({h_ext_dep: event.target.value });
}
handleChange27= event => {
  this.setState({cout_final: event.target.value });
}
handleChange28= event => {
  this.setState({resultat_pos_tri: event.target.value });
}
handleChange29= event => {
  this.setState({ac_correct_supp: event.target.value });
}
handleChange30= event => {
  this.setState({num_ac_correc_ext: event.target.value });
}
handleChange31= event => {
  this.setState({note: event.target.value });
}
handleChange32= event => {
  this.setState({poids_rebut: event.target.value });
}
handleChange33= event => {
  this.setState({valeur_scrap: event.target.value });
}
handleChange330= event => {
  this.setState({date_prod: event.target.value });
}


handleSubmit = async (event) => {
  event.preventDefault();

  const registreScrap = {

    compilateur:this.state.compilateur,
    zone_affec_prob:this.state.zone_affec_prob,
    annulation:this.state.annulation,
    desc_prob:this.state.desc_prob,
    oper_1:this.state.oper_1,
    costa_U:this.state.costa_U,
    machine:this.state.machine,
    mini:this.state.mini,
    ligne_assemb:this.state.ligne_assemb,
    table_elec:this.state.table_elec,
    qnt_lot:this.state.qnt_lot,
    qnt_scrap:this.state.qnt_scrap,
    cause_prob:this.state.cause_prob,
    class_route_cause:this.state.class_route_cause,
    ac_immed_prend:this.state.ac_immed_prend,
    rebut_remp:this.state.rebut_remp,
    odl_rel_logic:this.state.odl_rel_logic,
    nouv_odl:this.state.nouv_odl,
    num_pcs_recup:this.state.num_pcs_recup,
    qnt_rebut_final:this.state.qnt_rebut_final,
    h_inter_dep_rework:this.state.h_inter_dep_rework,
    h_ext_dep:this.state.h_ext_dep,
    cout_final:this.state.cout_final,
    resultat_pos_tri:this.state.resultat_pos_tri,
    ac_correct_supp:this.state.ac_correct_supp,
    num_ac_correc_ext:this.state.num_ac_correc_ext,
    note:this.state.note,
    poids_rebut:this.state.poids_rebut,
    valeur_scrap:this.state.valeur_scrap,
    Desc_acmo:this.state.Desc_acmo,
    level:this.state.level,
    id_article:this.state.id_article,
    date_prod:this.state.date_prod,



  };

 console.log(registreScrap);
  await axios.post(`http://localhost/newgen/blog/public/api/scrap`, {  

    compilateur:this.state.compilateur,
    zone_affec_prob:this.state.zone_affec_prob,
    annulation:this.state.annulation,
    desc_prob:this.state.desc_prob,
    code_artc:this.state.code_artc,
    oper_1:this.state.oper_1,
    costa_U:this.state.costa_U,
    machine:this.state.machine,
    mini:this.state.mini,
    ligne_assemb:this.state.ligne_assemb,
    table_elec:this.state.table_elec,
    qnt_lot:this.state.qnt_lot,
    qnt_scrap:this.state.qnt_scrap,
    cause_prob:this.state.cause_prob,
    class_route_cause:this.state.class_route_cause,
    ac_immed_prend:this.state.ac_immed_prend,
    rebut_remp:this.state.rebut_remp,
    odl_rel_logic:this.state.odl_rel_logic,
    nouv_odl:this.state.nouv_odl,
    num_pcs_recup:this.state.num_pcs_recup,
    qnt_rebut_final:this.state.qnt_rebut_final,
    h_inter_dep_rework:this.state.h_inter_dep_rework,
    h_ext_dep:this.state.h_ext_dep,
    cout_final:this.state.cout_final,
    resultat_pos_tri:this.state.resultat_pos_tri,
    ac_correct_supp:this.state.ac_correct_supp,
    num_ac_correc_ext:this.state.num_ac_correc_ext,
    note:this.state.note,
    poids_rebut:this.state.poids_rebut,
    valeur_scrap:this.state.valeur_scrap,
    Desc_acmo:this.state.Desc_acmo,
    level:this.state.level,
    id_article:this.state.id_article,
    date_prod:this.state.date_prod,


  }
  
  )

  .then(res => {

    console.log(res);
    //console.log(res.data);
    if(res.status==200){
    swal({
      title: "Good job!",
      text: "le demande a été ajouter",
      icon: "success",
  }).then(function() {
    window.location = "../general-pages/registreScrap";    });
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
    
    console.log(this.state.compilateur);

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
    <div className="card-title">
             Nouveau registre rebut
                 </div> 
                 <br/>
                 <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
        


                      <Form.Group>
                        <div className="row">
                        
                        <div className="col-md-6">

                        <label className="form-check-label">compilateur</label>
                 
                         <select   className="form-control" name="compilateur" onChange={this.handleChange1} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           { this.state.users.map( user =>( 
                            <option key={user.id_user} >{user.first_name} {user.last_name} </option>
                      ))}                           </select>       
                        </div>
                        <div className="col-md-6">
                        <label className="form-check-label">zone de probléme</label>
                       
                        <select required  className="form-control" name="zone_affec_prob" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
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
                           <option>Usine</option>

                         </select>
                        </div>
                        </div>
                     
                      </Form.Group>
                      
                      <Form.Group>
                      <div className="row">
                          <div className="col-md-4">
                        <label className="form-check-label">annulation</label>
                        <select required  className="form-control" name="annulation" onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                        <option></option>
                        <option>Oui</option>
                            <option>Non</option>

                         </select> 
                         </div> 
                         <div className="col-md-8">

                        <label className="form-check-label">description de probléme</label>
                        <textarea  style={{backgroundColor: "#ecf2f8"}} className="form-control" required  rows="3"  onChange={this.handleChange5} size="sm"   />
                      </div>     
                       </div>
                      </Form.Group>
                      <Form.Group>
                      <div className="row">
                          <div className="col-md-4">
                        <label className="form-check-label">date produit</label>
                       

                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="date"name="date_prod" onChange={this.handleChange330} size="sm"   />

                        </div>
                        </div>
                            </Form.Group>

                      <Form.Group>
                      <div className="row">
                          <div className="col-md-4">
                        <label className="form-check-label">code produit</label>
                    
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="id_article" onChange={this.handleChange6} size="sm"   />

                            </div>
                            <div className="col-md-4">

                      
                        <label className="form-check-label">opérateure 1</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="id_article" onChange={this.handleChange8} size="sm"   />

                     </div>
                     <div className="col-md-4">

                        <label className="form-check-label">coùt unitaire </label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} step="0.01" type="number"name="costa_U" onChange={this.handleChange9} size="sm"   />
                    </div>
                    </div>

                      </Form.Group>

                    
                      <Form.Group>
                      <div className="row">
                          <div className="col-md-4">
                        <label className="form-check-label">machine</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="machine" onChange={this.handleChange10} size="sm"   />
                        </div>
                        <div className="col-md-4">

                        <label className="form-check-label">mini</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="mini" onChange={this.handleChange11} size="sm"   />
                        </div>

                        <div className="col-md-4">

                        <label className="form-check-label">ligne d'assamblage</label>                     

                            <select required className="form-control" name="ligne_assemb" onChange={this.handleChange12} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                         <option value =''> ligne d'assemblage</option>
                           { this.state.lignes.map( ligne =>( 
                             
                            <option key={ligne.id_ligne} value={ligne.id_ligne}>{ligne.nom_ligne} </option>
                      ))}                           </select>  
                               </div>
                        </div>

                    </Form.Group>
                
                
                
                
                     <Form.Group>
                     <div className="row">
                          <div className="col-md-4">
                        <label className="form-check-label">table éléctrique </label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="dable_elec" onChange={this.handleChange13} size="sm"   />
                        </div>
                        <div className="col-md-4">
                        <label className="form-check-label">quantité au lot</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="" onChange={this.handleChange14} size="sm"   />

                       
                        </div>
                        <div className="col-md-4">
                        <label className="form-check-label">quantité de scrap</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} step="0.01" type="number"name="qnt_scrap" onChange={this.handleChange15} size="sm"   />
                  
                        </div>
                        </div>

                          </Form.Group>
                     
                     
                     
                     <Form.Group>
 
                        <label className="form-check-label"> cause probléme</label>
                        <textarea required rows="3" className="form-control"  style={{backgroundColor: "#ecf2f8"}} type="text"name="cause_prob" onChange={this.handleChange16}   />

                     </Form.Group>
                 

                     <Form.Group>
                       <div className="row">
                       <div className="col-md-4">
                        <label className="form-check-label">Classification de la root cause</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="class_route_cause" onChange={this.handleChange17} size="sm"   />
                        </div>
                        <div className="col-md-4">
                        <label className="form-check-label">action immédiate a prendre</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="ac_immed_prend" onChange={this.handleChange18} size="sm"   />
                        </div>
                        <div className="col-md-4">
                        <label className="form-check-label">remplcement rebut</label>
                        <select required  className="form-control" name="rebut_remp" onChange={this.handleChange19} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                        <option></option>
                        <option>Oui</option>
                            <option>Non</option>   
                            </select>                       
                        </div>
                        </div>

                     </Form.Group>
                    
                    
            
                    
                     <Form.Group>
                       <div className="row">
                       <div className="col-md-6">
                        <label className="form-check-label">ODL à relancer par la logistique</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="odl_rel_logic" onChange={this.handleChange20} size="sm"   />
                        </div>
                        <div className="col-md-6">
                        <label className="form-check-label">Nouvelle ODL</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="nouv_odl" onChange={this.handleChange21} size="sm"   />
                        </div>
                        </div>
                    </Form.Group>

                     <Form.Group>

                        <label className="form-check-label">Description de l'action mise en œuvre</label>
                        <textarea className="form-control" rows="3" required style={{backgroundColor: "#ecf2f8"}} type="text"name="	Desc_acmo" onChange={this.handleChange22} size="sm"   />
                     </Form.Group>


                     <Form.Group>
                     <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label">nombre des pièces récupérées </label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number"name="num_pcs_recup" onChange={this.handleChange23} size="sm"   />
                    
                       </div> <div className="col-md-4">

                        <label className="form-check-label">quantité rebuté final</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number"name="qnt_rebut_final" onChange={this.handleChange24} size="sm"   />
                       </div> <div className="col-md-4">

                        <label className="form-check-label">heur interne dépenser pour rework</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number"name="h_inter_dep_rework" onChange={this.handleChange25} size="sm"   />
                    </div>
                    </div>

                     </Form.Group>


                     <Form.Group>
                     <div className="row">
                        <div className="col-md-4">
                        <label className="form-check-label"> heur externe dépensé</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number"name="h_ext_dep" onChange={this.handleChange26} size="sm"   />
                        </div>
                        <div className="col-md-4">

                        <label className="form-check-label">coùt final</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} step="0.01" type="number"name="cout_final" onChange={this.handleChange27} size="sm"   />
                        </div>

                        <div className="col-md-4">

                        <label className="form-check-label">Résulat positif de tri</label>
                       
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="text"name="resultat_pos_tri" onChange={this.handleChange28} size="sm"   />
                        </div>
                        </div>

                     </Form.Group>

                     
                     <Form.Group>
                        <label className="form-check-label">Actions correctives supplémentaires</label>
                        <textarea rows="3" className="form-control" required style={{backgroundColor: "#ecf2f8"}} type="text"name="ac_correct_supp" onChange={this.handleChange29} size="sm"   />
                     </Form.Group>
                   
                     <Form.Group>
                       <div className="row">
                        <div className="col-md-4">

                        <label className="form-check-label">N° actions correctives externes</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number"name="num_ac_correc_ext" onChange={this.handleChange30} size="sm"   />
                        </div>
                        <div className="col-md-4">

                        <label className="form-check-label">poids de rebut</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}} type="number" step="0.01"  name="poids_rebut" onChange={this.handleChange32} size="sm"   />
                        </div>
                        <div className="col-md-4">

                        <label className="form-check-label">valeur scrap</label>
                        <Form.Control required style={{backgroundColor: "#ecf2f8"}}step="0.01" type="number"name="valeur_scrap" onChange={this.handleChange33} size="sm"   />
                        </div>
                        </div>

                     </Form.Group>

                     <Form.Group>
                        <label className="form-check-label">Note</label>
                        <textarea className="form-control" rows="3" required style={{backgroundColor: "#ecf2f8"}} type="text"name="note" onChange={this.handleChange31} size="sm"   />
                     </Form.Group>

                     <Form.Group hidden={this.state.etat10} >
                        <label className="form-check-label">Level</label>
                      

        
                          
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