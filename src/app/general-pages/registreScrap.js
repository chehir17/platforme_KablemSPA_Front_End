import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGroup,ButtonToolbar,Form , FormControl } from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactFlexyTable from 'react-flexy-table'
import './index.css';


export class SuiviScrap extends Component {
  constructor(props){
    super(props)
    this.state ={
      type:"scrap",
      etat:true,
      posts : [],
      ops : [],
posts10 : [],
connected:JSON.parse(localStorage.getItem("userData")),
etat100:true,
        
    }
}




  
async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/scrap")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
      
if (this.state.connected[0].role != "user") {
  this.setState({etat100:false});
}
    
}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/scrap/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}



  render() {
    
     
    const posts = this.state.posts
    const columns = [
      {
        header: 'Id SCRAP ',
        key: 'id_scrap',
        td: (posts) => <div> {posts.id_scrap}</div>
      },
      {
        header: ' date compilation ',
        key: 'created_at',
        td: (posts) => <div> {posts.created_at}</div>
      },
      {
        header: 'Compilateur',
        key: 'compilateur',
        td: (posts) => <div> {posts.compilateur}</div>
      },
      {
        header: 'Zone Affectation du Probléme ',
        key: 'zone_affe_prob',
        td: (posts) => <div> {posts.zone_affe_prob}</div>
      },
      {
        header: 'Annulation',
        key: 'annulation',
        td: (posts) => <div> {posts.annulation}</div>
      },
      {
        header: 'Description du Probléme ',
        key: 'desc_prob',
        td: (posts) => <div> {posts.desc_prob}</div>
      },
      {
        header: 'Code Produit  ',
        key: 'code_artc',
        td: (posts) => <div> {posts.id_article}</div>
      },
      {
        header: 'Date Production ',
        key: 'date_prod',
        td: (posts) => <div>{posts.date_production1}</div>
      },
      {
        header: 'Opérateur 1 ',
        key: 'first_name',
        td: (posts) => <div>{posts.first_name}-{posts.last_name}</div>
      },
      {
        header: 'Costo_U',
        key: 'cout_unit',
        td: (posts) => <div>{posts.cout_unit}</div>
      },
      {
        header: 'Machine',
        key: 'machine',
        td: (posts) => <div> {posts.machine}</div>
      },
      {
        header: 'Mini',
        key: 'mini',
        td: (posts) => <div> {posts.mini}</div>
      },
      {
        header: 'Ligne Assemblage',
        key: 'nom_ligne',
        td: (posts) =><div> {posts.nom_ligne}</div>
      },
      {
        header: 'Table électrique',
        key: 'table_elec',
        td: (posts) => <div>{posts.table_elec}</div>
      },
      {
        header: 'Qté du Lot',
        key: 'qnt_produit',
        td: (posts) => <div> {posts.id_lot}</div>
      },
      {
        header: 'Qté de scrap',
        key: 'qnt_scrap',
        td: (posts) => <div> {posts.qnt_scrap}</div>
      },
      {
        header: 'Cause Probéme',
        key: 'cause_prob',
        td: (posts) => <div> {posts.cause_prob}</div>
      },
      {
        header: ' Classification de la cause ',
        key: 'classification_cause',
        td: (posts) => <div> {posts.classification_cause}</div>
      },
      {
        header: 'Actions a prendre',
        key: 'ac_immed_prend',
        td: (posts) => <div> {posts.ac_immed_prend}</div>
      },
      {
        header: 'Rebut remplacé',
        key: 'rebut_remplacer',
        td: (posts) => <div> {posts.rebut_remplacer}</div>
      },
      {
        header: 'ODL a relancer par la logistique ',
        key: 'odl_rep',
        td: (posts) => <div> {posts.odl_rep}</div>
      },
      {
        header: 'Nouvelle ODL',
        key: 'new_odl',
        td: (posts) => <div> {posts.new_odl}</div>
      },
      {
        header: ' Description de  Action mise en oeuvre',
        key: 'Desc_acmo',
        td: (posts) => <div> {posts.Desc_acmo}</div>
      },
      {
        header: 'Nombre des pieces récupérés',
        key: 'N_pecRec',
        td: (posts) => <div> {posts.N_pecRec}</div>
      },
      {
        header: 'Qté Rebutée finale',
        key: 'qnt_rebF',
        td: (posts) => <div> {posts.qnt_rebF}</div>
      },
      {
        header: 'Heures internes dépensés pour rework',
        key: 'h_interne',
        td: (posts) => <div> {posts.h_interne}</div>
      },
      {
        header: 'Heures externes dépensés',
        key: 'h_externe',
        td: (posts) => <div> {posts.h_externe}</div>
      },
      {
        header: 'Cout finale',
        key: 'cout_final',
        td: (posts) => <div> {posts.cout_final}</div>
      },
      {
        header: 'Résultat positif de tri',
        key: 'res_pos',
        td: (posts) => <div> {posts.res_pos}</div>
      },
      {
        header: 'Actions correctives supplémentaires',
        key: 'ac_corr_suppl',
        td: (posts) => <div> {posts.ac_corr_suppl}</div>
      },
      {
        header: 'N° actions correctives externes',
        key: 'N_ac_corr_ex',
        td: (posts) => <div> {posts.N_ac_corr_ex}</div>
      },
      {
        header: 'Notes',
        key: 'note',
        td: (posts) => <div> {posts.note}</div>
      },
      {
        header: 'Poids rebuts',
        key: 'poids_rebut',
        td: (posts) => <div> {posts.poids_rebut}</div>
      },
      {
        header: 'Valeur SCRAP',
        key: 'valeur_scrap',
        td: (posts) => <div> {posts.valeur_scrap}</div>
      },
      {
        header: 'ajout plan action ',
        td: (posts) => <div> {
          <a hidden ={this.state.etat100} href={"../add/add_planaction_source/"+posts.id_scrap+"/"+this.state.type}>ajout plan action   </a>
        }</div>
      },
      {
        header: 'Actions',
        td: (posts) => {
  
          return (
            <div hidden ={this.state.etat100} >
        
            <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_scrap)}>
              <i className="mdi mdi-delete" ></i>
            </button>  {' '}
   
              <a href={"../edit/edit_scrap/"+posts.id_scrap} type="submit" className="btn btn-inverse-info btn-icon">
            
                <i className="mdi mdi-tune-vertical"></i>
            
              </a>  
            </div>
          )
        }
      }
    ]
    const downloadExcelProps = {
      type: 'filtered',
      title: 'test',
      showLabel: true
    }

    return (

      <div>
        <div className="page-header">
          <h3 className="page-title"> Registre de rebut P1/P2 </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">SuiviFournisseur</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Scrap  </h4>
                {this.state.etat}
               <br/>               <br/>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a className="mr-5" type="submit" href ="../add/scrap" className="btn btn-inverse-info "  hidden ={this.state.etat100}>
                Ajouter        
              </a>
                <ButtonGroup aria-label="Third group">
                <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="rft-table-id"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
                </ButtonGroup>
            
            </ButtonToolbar>

                <br/> 
                <div  >
                <ReactFlexyTable  caseSensitive   downloadExcelProps={downloadExcelProps}
               columns={columns} className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.posts}/>

                </div>
              </div>  
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default SuiviScrap;
