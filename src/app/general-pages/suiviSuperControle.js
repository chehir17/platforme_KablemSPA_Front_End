
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGroup,ButtonToolbar,Form ,FormControl, Image } from 'react-bootstrap';
//import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactFlexyTable from 'react-flexy-table'
import './index.css';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
export class SuiviSuperControle extends Component {
  constructor(props){
    super(props)
    this.state ={
     type:'super',
        suiviSuperControles : [],
        etat100:true,
        connected:JSON.parse(localStorage.getItem("userData")),
        delete:false,
        qul: false,
    }
}




  
async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/suiviSuperControles")
    .then(res => {
        console.log(res)
        this.setState({suiviSuperControles : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
     if (this.state.connected[0].role != "user") {
      this.setState({etat100:false});

    }
    if (this.state.connected[0].role != "admin") {
      this.setState({delete:true});
           }  
         

}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/suiviSuperControles/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}

  render() {
    const posts = this.state.suiviSuperControles

    const downloadExcelProps = {
      type: 'filtered',
      title: 'test',
      showLabel: true
    }
    const columns = [
      {
        header: 'Id  ',
        key: 'id_supercontrole',
        td: (posts) => <div> {posts.id_supercontrole}</div>
      },
      {
        header: 'Code produit  ',
        key: 'id_article',
        td: (posts) => <div> {posts.id_article} </div>
      },
      {
        header: ' Rev Projet  ',
        key: 'rev_projet',
        td: (posts) => <div> {posts.rev_projet} </div>
      },
      {
        header: 'Client (Nom)    ',
        key: 'id_client',
        td: (posts) => <div> {posts.id_client}  </div>
      },
      {
        header: 'Type de contrôle (GP12,SLP,CSL2,Sécurisation)',
        key: 'type_controle',
        td: (posts) => <div>{posts.type_controle} </div>
      },
      {
        header: ' Doc de référence ',
        key: 'doc_refirance',
        td: (posts) => <div> {posts.doc_réfirance}</div>
      },
      {
        header: 'Méthode de contrôle ',
        key: 'methode_controle',
        td: (posts) => <div> {posts.methode_controle}</div>
      },
      {
        header: 'Date de début',
        key: 'date_début',
        td: (posts) => <div> {posts.date_début}</div>
      },
      {
        header: 'Durée estimé   ',
        key: 'duree_estime',
        td: (posts) => <div> {posts.durée_estimé}</div>
      },
      {
        header: 'Traçabilité sur câblage',
        key: 'tracibilite_cablage',
        td: (posts) => <div> {posts.traçibilité_cablage}</div>
      },
      {
        header: 'Traçabilité sur carton ',
        key: 'tracibilite_carton',
        td: (posts) => <div> {posts.traçibilité_carton}</div>
      },
      {
        header: 'Heures internes dépensées ',
        key: 'heurs_internedepensees',
        td: (posts) => <div> {posts.heurs_internedépensées}</div>
      },
      {
        header: ' Date fin  ',
        key: 'date_final',
        td: (posts) => <div> {posts.date_final}</div>
      },
      {
        header: 'Actions',
        td: (posts) => {
          return (
            <div hidden ={this.state.etat100} >
              <td>      <a href={"../add/add_planaction_source/"+posts.id_supercontrole+"/"+this.state.type}>ajout plan action   </a>
</td>
<td><button hidden={this.state.delete} type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_supercontrole)}>
<i className="mdi mdi-delete" ></i>
</button> </td>
   <td> <a  className="btn btn-inverse-warning btn-icon" href={"../edit/edit_suivi_super_controle/"+posts.id_supercontrole}><i className="mdi mdi-tune-vertical"></i>   </a>
</td>

            </div>
          )
        }
      }
    
    ]
    return (

      <div>
        <div className="page-header">
          <h3 className="page-title"> Suivi des super-contrôles </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">suiviSuperControle</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des Suivi des super-contrôles</h4>
                {this.state.etat}
               <br/>               <br/>
               <form onSubmit={this.handleSubmit}>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a hidden ={this.state.etat100} className="mr-5" type="submit" href ="../add/add_suivi_super_controle" className="btn btn-inverse-info " >
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
                <ReactFlexyTable  caseSensitive  columns={columns} downloadExcelProps={downloadExcelProps}
  className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.suiviSuperControles}/>

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

export default SuiviSuperControle

