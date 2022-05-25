import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGroup,ButtonToolbar,Form, FormControl } from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactFlexyTable from 'react-flexy-table'
import './index.css';

export class FichDmpp extends Component {
  constructor(props){
    super(props)
    this.state ={
     type:'dmpp',

        posts : [],
        etat100:true,
        connected:JSON.parse(localStorage.getItem("userData")),
    }
}




  
async componentDidMount(){
  
    await axios.get("http://localhost/newgen/blog/public/api/dmpp")
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
  axios.delete('http://localhost/newgen/blog/public/api/dmpp/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}


  render() {
    const posts = this.state.posts

    const downloadExcelProps = {
      type: 'filtered',
      title: 'test',
      showLabel: true
    }
    const columns = [
      {
        header: 'Id  ',
        key: 'id_dmpp',
        td: (posts) => <div> {posts.id_dmpp}</div>
      },
      {
        header: 'Ligne  ',
        key: 'nom_ligne',
        td: (posts) => <div> {posts.nom_ligne} </div>
      },
      {
        header: ' Poste  ',
        key: 'post',
        td: (posts) => <div> {posts.post} </div>
      },
      {
        header: 'Réf   ',
        key: 'code_artc',
        td: (posts) => <div> {posts.code_artc}  </div>
      },
      {
        header: 'Nature  ',
        key: 'nature',
        td: (posts) => <div>{posts.nature} </div>
      },
      {
        header: 'Zone ',
        key: 'zone',
        td: (posts) => <div> {posts.zone}</div>
      },
      {
        header: '  Date souhaité  ',
        key: 'date_sou',
        td: (posts) => <div> {posts.date_sou}</div>
      },
      {
        header: 'Type (produit/process/Changement de réf)   ',
        key: 'type',
        td: (posts) => <div> {posts.type}</div>
      },
      {
        header: 'Description client  ',
        key: 'nom_client',
        td: (posts) => <div> {posts.nom_client}</div>
      },
      {
        header: 'Coût estimatif  ',
        key: 'cout_estimative',
        td: (posts) => <div> {posts.cout_estimative}</div>
      },
      {
        header: 'Etat actuel  ',
        key: 'etat_actu',
        td: (posts) => <div> {posts.etat_actu}</div>
      },
      {
        header: 'Etat modifié ',
        key: 'etat_modif',
        td: (posts) => <div> {posts.etat_modif}</div>
      },
      {
        header: ' Objectif modification  ',
        key: 'objectif_modif',
        td: (posts) => <div> {posts.objectif_modif}</div>
      },
      {
        header: 'Actions',
        td: (posts) => {
          return (
            <div >
      <a  href={"../add/add_planaction_source/"+posts.id_dmpp+"/"+this.state.type}>ajout plan action   </a>

<button hidden ={this.state.etat100} type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_dmpp)}>
<i className="mdi mdi-delete" ></i>
</button>    
<a  hidden ={this.state.etat100} className="btn btn-inverse-warning btn-icon" href={"../edit/edit_dmpp/"+posts.id_dmpp}><i className="mdi mdi-tune-vertical"></i>   </a>

            </div>
          )
        }
      }
    
    ]
    console.log(this.state.type1);
    return (

      <div>
        <div className="page-header">
          <h3 className="page-title"> Demande de Modification Produit Process </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">ficheDmpp</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">List des fiches DMPPS </h4>
               <br/>               <br/>
               <form onSubmit={this.handleSubmit}>
               <ButtonToolbar aria-label="Toolbar with button groups">
 
  
  
  
 
  <ButtonGroup aria-label="Third group">
  <a  className="mr-5" type="submit" href ="../add/add-dmpp" className="btn btn-inverse-info " >Ajouter</a>

  


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
  className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.posts}/>

                </div>
             
                </form>
              </div>
              
            </div>
            
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
        
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
           
          </div>
          <div className="col-lg-12 stretch-card">
          
          </div>
        </div>
      </div>
    )
  }
}

export default FichDmpp
