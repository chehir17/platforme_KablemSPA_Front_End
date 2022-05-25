
import React, { Component } from 'react'
import axios from "axios";
import { ButtonGroup,ButtonToolbar,Form ,FormControl, Image } from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactFlexyTable from 'react-flexy-table'
import './index.css';


export class SuiviFournisseur extends Component {
  constructor(props){
    super(props)
    this.state ={
      type:'suivifournisseur',

        suiviFournisseurs : [],

        etat100:true,
        connected:JSON.parse(localStorage.getItem("userData")),
    }
}




  
async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/suiviFournisseurs")
    .then(res => {
        console.log(res)
        this.setState({suiviFournisseurs : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
     if (this.state.connected[0].role != "user") {
      this.setState({etat100:false});
    }
}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/suiviFournisseurs/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}

  render() {
    const suiviFournisseurs = this.state.suiviFournisseurs

    const downloadExcelProps = {
      type: 'filtered',
      title: 'test',
      showLabel: true
    }
    const columns = [
      {
        header: 'Id  ',
        key: 'id_suivifournisseur',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.id_suivifournisseur}</div>
      },
      {
        header: 'DATE  ',
        key: 'created_at',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.created_at}</div>
      },
      {
        header: 'Code Article ',
        key: 'id_article',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.id_article}</div>
      },
      {
        header: ' Nom Fournisseur ',
        key: 'id_fournisseur',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.id_fournisseur} </div>
      },
      {
        header: 'Classification  ',
        key: 'classification',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.class} </div>
      },
      {
        header: 'Description de Probléme ',
        key: 'desc_prob',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.desc_prob} </div>
      },
      {
        header: 'Pcs KO détectées ',
        key: 'pcs_ko_detecte',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.pcs_ko_detecte}</div>
      },
      {
        header: ' Tirage(Oui/Non)  ',
        key: 'triage',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.triage}</div>
      },
      {
        header: 'Total des pcs KO  ',
        key: 'tot_pcs_ko',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.tot_pcs_ko}</div>
      },
      {
        header: 'Décision  ',
        key: 'decision',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.decision}</div>
      },
      {
        header: 'Dérogation (Oui/Non) ',
        key: 'derogation',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.derogation}</div>
      },
      {
        header: 'Cout de Traitement  ',
        key: 'cout_tret',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.cout_tret}</div>
      },
      {
        header: 'Statut ',
        key: 'statut',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.statut}</div>
      },
      {
        header: 'Notes  ',
        key: 'notes',
        td: (suiviFournisseurs) => <div> {suiviFournisseurs.notes}</div>
      },
      {
        header: 'Piéces Jointe  ',
        key: 'piece_joint',
        td: (suiviFournisseurs) => <div>{suiviFournisseurs.piece_joint}</div>
      },
      {
        header: 'Actions',
        td: (suiviFournisseurs) => {
          return (
            <div hidden ={this.state.etat100}>
   <a href={"../add/add_planaction_source/"+suiviFournisseurs.id_suivifournisseur+"/"+this.state.type}>ajout plan action   </a>

<button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(suiviFournisseurs.id_suivifournisseur)}>
<i className="mdi mdi-delete" ></i>
</button>    
<a type="button" className="btn btn-inverse-info btn-icon" href={"../edit/edit_suivi_fournisseur/"+suiviFournisseurs.id_suivifournisseur}>
<i className="mdi mdi-tune-vertical"></i>
</a>    
            </div>
          )
        }
      }
    
    ]
    return (

      <div>
        <div className="page-header">
          <h3 className="page-title"> Suivi Défaut Fournisseur </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">suiviFournisseur</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste de Suivi Défaut Fournisseur </h4>
                {this.state.etat}
               <br/>               <br/>
               <form onSubmit={this.handleSubmit}>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a hidden ={this.state.etat100} className="mr-5" type="submit" href ="../add/add_suivi_fournisseur" className="btn btn-inverse-info " >
                Ajouter        
              </a>
                <ButtonGroup aria-label="Third group">
                 
                </ButtonGroup>
                <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="rft-table-id"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      /> 
            </ButtonToolbar>

            <div className="table-responsive" >
                <ReactFlexyTable  caseSensitive columns={columns}  downloadExcelProps={downloadExcelProps}
  className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.suiviFournisseurs}/>

                </div>

              
                </form>
              </div>  
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default SuiviFournisseur

