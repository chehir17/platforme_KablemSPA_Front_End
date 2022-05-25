import React, { Component } from 'react'
import axios from "axios";
import { Button,Form} from 'react-bootstrap';
import swal from 'sweetalert';



export class edit_nc extends Component {

  constructor(props){
    super(props)
    this.state ={
      did:props.match.params.id,

      lots : [],
    lignes : [],
    users : [],
    articles : [],
    scraps :[],

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

    }
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
  this.setState({ code_artc: event.target.value });
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

   //users///
  await axios.get("http://localhost/newgen/blog/public/api/user")
  .then(res => {
      console.log(res)
      this.setState({users : res.data})
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
 
   await axios.get("http://localhost/newgen/blog/public/api/scrap/"+this.state.did)
   .then(res => {
       console.log(res)
       this.setState({scraps : res.data})
   }).catch( err => {
       console.log("errreeur ")
   
   }) 
   
   { this.state.scraps.map( scrap =>(
          this.setState({compilateur:scrap.id_user}),
           this.setState({zone_affec_prob :scrap.zone_affe_prob}),
           this.setState({annulation :scrap.annulation}),
           this.setState({desc_prob :scrap.desc_prob}),
           this.setState({ code_artc: scrap.id_article }),
           this.setState({oper_1 :scrap.id_operateur}),
           this.setState({costa_U :scrap.cout_unit}),
           this.setState({machine :scrap.machine}),
           this.setState({mini :scrap.mini}),
           this.setState({ligne_assemb :scrap.id_ligne}),
           this.setState({table_elec :scrap.table_elec}),
           this.setState({qnt_lot :scrap.id_lot}),
           this.setState({qnt_scrap :scrap.qnt_scrap}),
           this.setState({cause_prob :scrap.cause_prob}),
           this.setState({class_route_cause :scrap.classification_cause}),
           this.setState({ac_immed_prend :scrap.ac_immed_prend}),
           this.setState({rebut_remp :scrap.rebut_remplacer}),
           this.setState({odl_rel_logic :scrap.odl_rep}),
           this.setState({nouv_odl :scrap.new_odl}),
           this.setState({Desc_acmo :scrap.Desc_acmo}),
           this.setState({num_pcs_recup :scrap.N_pecRec}),
           this.setState({qnt_rebut_final :scrap.qnt_rebF}),
           this.setState({h_inter_dep_rework :scrap.h_interne}),
           this.setState({h_ext_dep :scrap.h_externe}),
           this.setState({cout_final :scrap.cout_final}),
           this.setState({resultat_pos_tri :scrap.res_pos}),
           this.setState({ac_correct_supp :scrap.ac_corr_suppl}),
           this.setState({num_ac_correc_ext :scrap.N_ac_corr_ex}),
           this.setState({note :scrap.note}),
           this.setState({poids_rebut :scrap.poids_rebut}),
           this.setState({valeur_scrap:scrap.valeur_scrap})
   ))}


}

  
update = async (e) =>{
 const ncc={
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
 
 };
 console.log(ncc);

  e.preventDefault();
  await axios.put('http://localhost/newgen/blog/public/api/scrap/'+this.state.did,
   { 
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
   })
  .then(res => {
   console.log(res);
   window.location = "../../general-pages/registreScrap";    

  })
  .catch(e => {
    console.log(e);
    swal({
      title: "accés rejeter ",
      text: "Verifier votre demander puis réssayer  encore  ",
      icon: "error",
  });
  });
}



  render() {
  
    return (
  
            
          
      <div className="col-12 grid-margin" >
      <div className="card" >
     
        <div className="card-body">
        <div className="card-title">
                 modifier registre rebut N {this.state.did}
                     </div> 
                     <br/>
                     <form className="form-sample" onSubmit={this.update}>
            <div className="row">
              <div className="col-md-12">
            
    
    
                          <Form.Group>
                            <div className="row">
                            
                            <div className="col-md-6">
    
                            <label className="form-check-label">compilateur</label>
                     
                             <Form.Control value={this.state.compilateur}  className="form-control" name="compilateur" onChange={this.handleChange1} size="sm"  style={{backgroundColor: "#ecf2f8"}}/>
                            
                            </div>
                            <div className="col-md-6">
                            <label className="form-check-label">zone de probléme</label>
                           
                            <select   value={this.state.zone_affec_prob} className="form-control" name="zone_affec_prob" onChange={this.handleChange3} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
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
                            </div>
                         
                          </Form.Group>
                          
                          <Form.Group>
                          <div className="row">
                              <div className="col-md-4">
                            <label className="form-check-label">annulation</label>
                            <select  value={this.state.annulation}  className="form-control" name="annulation" onChange={this.handleChange4} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                                <option>Oui</option>
                                <option>Non</option>
    
                             </select> 
                             </div> 
                             <div className="col-md-8">
    
                            <label className="form-check-label">description de probléme</label>
                            <textarea value={this.state.desc_prob} style={{backgroundColor: "#ecf2f8"}} className="form-control" required  rows="3"  onChange={this.handleChange5} size="sm"   />
                          </div>     
                           </div>
                          </Form.Group>
                          <Form.Group>
                          <div className="row">
                              <div className="col-md-4">
                            <label className="form-check-label">code produit</label>
                           
    
                                 <Form.Control value={this.state.code_artc}  className="form-control" name="ref" onChange={this.handleChange6} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                                      
                                </div>
                                <div className="col-md-4">
    
                            <label className="form-check-label">opérateure 1</label>
                            <Form.Control value={this.state.oper_1}   className="form-control" name="oper_1" onChange={this.handleChange8} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                   
                         </div>
                         <div className="col-md-4">
    
                            <label className="form-check-label">coùt unitaire </label>
                            <Form.Control value={this.state.cout_unit} step="0.01" required style={{backgroundColor: "#ecf2f8"}} type="number"name="costa_U" onChange={this.handleChange9} size="sm"   />
                        </div>
                        </div>
    
                          </Form.Group>
    
                        
                          <Form.Group>
                          <div className="row">
                              <div className="col-md-4">
                            <label className="form-check-label">machine</label>
                            <Form.Control value={this.state.machine} required style={{backgroundColor: "#ecf2f8"}} type="text"name="machine" onChange={this.handleChange10} size="sm"   />
                            </div>
                            <div className="col-md-4">
    
                            <label className="form-check-label">mini</label>
                            <Form.Control value={this.state.mini} required style={{backgroundColor: "#ecf2f8"}} type="text"name="mini" onChange={this.handleChange11} size="sm"   />
                            </div>
    
                            <div className="col-md-4">
    
                            <label className="form-check-label">ligne d'assamblage</label>                     
    
                                <Form.Control value={this.state.id_ligne} className="form-control" name="ligne_assemb" onChange={this.handleChange12} size="sm"  style={{backgroundColor: "#ecf2f8"}} />
                              
                                   </div>
                            </div>
    
                        </Form.Group>
                    
                    
                    
                    
                         <Form.Group>
                         <div className="row">
                              <div className="col-md-4">
                            <label className="form-check-label">table éléctrique </label>
                            <Form.Control value={this.state.table_elec}  style={{backgroundColor: "#ecf2f8"}} type="text"name="dable_elec" onChange={this.handleChange13} size="sm"   />
                            </div>
                            <div className="col-md-4">
                            <label className="form-check-label">quantité au lot</label>
                         
                            <div className="col-md-4">
                        <label className="form-check-label">quantité au lot</label>
                        <Form.Control  value={this.state.qnt_lot} style={{backgroundColor: "#ecf2f8"}} type="text"name="" onChange={this.handleChange14} size="sm"   />

                       
                        </div>
                            </div>
                            <div className="col-md-4">
                            <label className="form-check-label">quantité de scrap</label>
                            <Form.Control value={this.state.qnt_scrap} step="0.01"  style={{backgroundColor: "#ecf2f8"}} type="number"name="qnt_scrap" onChange={this.handleChange15} size="sm"   />
                      
                            </div>
                            </div>
    
                              </Form.Group>
                         
                         
                         
                         <Form.Group>
     
                            <label className="form-check-label"> cause probléme</label>
                            <textarea  rows="3" value={this.state.cause_prob} className="form-control"  style={{backgroundColor: "#ecf2f8"}} type="text"name="cause_prob" onChange={this.handleChange16}   />
    
                         </Form.Group>
                     
    
                         <Form.Group>
                           <div className="row">
                           <div className="col-md-4">
                            <label className="form-check-label">Classification de la root cause</label>
                            <Form.Control value={this.state.class_route_cause}  style={{backgroundColor: "#ecf2f8"}} type="text"name="class_route_cause" onChange={this.handleChange17} size="sm"   />
                            </div>
                            <div className="col-md-4">
                            <label className="form-check-label">action immédiate a prendre</label>
                            <Form.Control  value={this.state.ac_immed_prend} style={{backgroundColor: "#ecf2f8"}} type="text"name="ac_immed_prend" onChange={this.handleChange18} size="sm"   />
                            </div>
                            <div className="col-md-4">
                            <label className="form-check-label">remplcement rebut</label>
                            <select  value={this.state.rebut_remp} className="form-control" name="rebut_remp" onChange={this.handleChange19} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
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
                            <Form.Control value={this.state.odl_rel_logic}  style={{backgroundColor: "#ecf2f8"}} type="text"name="odl_rel_logic" onChange={this.handleChange20} size="sm"   />
                            </div>
                            <div className="col-md-6">
                            <label className="form-check-label">Nouvelle ODL</label>
                            <Form.Control value={this.state.nouv_odl}  style={{backgroundColor: "#ecf2f8"}} type="text"name="nouv_odl" onChange={this.handleChange21} size="sm"   />
                            </div>
                            </div>
                        </Form.Group>
    
                         <Form.Group>
    
                            <label className="form-check-label">Description de l'action mise en œuvre</label>
                            <textarea className="form-control" value={this.state.Desc_acmo} rows="3"  style={{backgroundColor: "#ecf2f8"}} type="text"name="	Desc_acmo" onChange={this.handleChange22} size="sm"   />
                         </Form.Group>
    
    
                         <Form.Group>
                         <div className="row">
                            <div className="col-md-4">
                            <label className="form-check-label">numero piéce </label>
                            <Form.Control value={this.state.num_pcs_recup}  style={{backgroundColor: "#ecf2f8"}} type="number"name="num_pcs_recup" onChange={this.handleChange23} size="sm"   />
                        
                           </div> <div className="col-md-4">
    
                            <label className="form-check-label">quantité rebuté final</label>
                            <Form.Control value={this.state.qnt_rebut_final}  style={{backgroundColor: "#ecf2f8"}} type="number"name="qnt_rebut_final" onChange={this.handleChange24} size="sm"   />
                           </div> <div className="col-md-4">
    
                            <label className="form-check-label">heur interne dépenser pour rework</label>
                            <Form.Control value={this.state.h_inter_dep_rework}  style={{backgroundColor: "#ecf2f8"}} type="number"name="h_inter_dep_rework" onChange={this.handleChange25} size="sm"   />
                        </div>
                        </div>
    
                         </Form.Group>
    
    
                         <Form.Group>
                         <div className="row">
                            <div className="col-md-4">
                            <label className="form-check-label"> heur externe dépensé</label>
                            <Form.Control value={this.state.h_ext_dep}  style={{backgroundColor: "#ecf2f8"}} type="number"name="h_ext_dep" onChange={this.handleChange26} size="sm"   />
                            </div>
                            <div className="col-md-4">
    
                            <label className="form-check-label">coùt final</label>
                            <Form.Control value={this.state.cout_final} step="0.01" style={{backgroundColor: "#ecf2f8"}} type="number"name="cout_final" onChange={this.handleChange27} size="sm"   />
                            </div>
    
                            <div className="col-md-4">
    
                            <label className="form-check-label">Résulat positif de tri</label>
                           
                            <Form.Control  value={this.state.resultat_pos_tri} style={{backgroundColor: "#ecf2f8"}} type="text"name="resultat_pos_tri" onChange={this.handleChange28} size="sm"   />
                            </div>
                            </div>
    
                         </Form.Group>
    
                         
                         <Form.Group>
                            <label className="form-check-label">Actions correctives supplémentaires</label>
                            <textarea rows="3" value={this.state.ac_correct_supp} className="form-control" required style={{backgroundColor: "#ecf2f8"}} type="text"name="ac_correct_supp" onChange={this.handleChange29} size="sm"   />
                         </Form.Group>
                       
                         <Form.Group>
                           <div className="row">
                            <div className="col-md-4">
    
                            <label className="form-check-label">N° actions correctives externes</label>
                            <Form.Control value={this.state.num_ac_correc_ext}  style={{backgroundColor: "#ecf2f8"}} type="number"name="num_ac_correc_ext" onChange={this.handleChange30} size="sm"   />
                            </div>
                            <div className="col-md-4">
    
                            <label className="form-check-label">poids de rebut</label>
                            <Form.Control  value={this.state.poids_rebut} step="0.01" style={{backgroundColor: "#ecf2f8"}} type="number"name="poids_rebut" onChange={this.handleChange32} size="sm"   />
                            </div>
                            <div className="col-md-4">
    
                            <label className="form-check-label">valeur scrap</label>
                            <Form.Control  value={this.state.valeur_scrap} step="0.01" style={{backgroundColor: "#ecf2f8"}} type="number"name="valeur_scrap" onChange={this.handleChange33} size="sm"   />
                            </div>
                            </div>
    
                         </Form.Group>
    
                         <Form.Group>
                            <label className="form-check-label">Note</label>
                            <textarea className="form-control" value={this.state.note} rows="3"  style={{backgroundColor: "#ecf2f8"}} type="text"name="note" onChange={this.handleChange31} size="sm"   />
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
    
 
    );
  }
}

export default edit_nc;
