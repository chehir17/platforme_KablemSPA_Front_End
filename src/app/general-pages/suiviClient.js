import React, { Component } from 'react'
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';  
import { ButtonGroup,ButtonToolbar,FormControl,Image} from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ReactTable from "react-table";
import "../../assets/imageStyle/imageStyle.css";

// flex table //
import ReactFlexyTable from 'react-flexy-table'
import './index.css';
//////


export class SuiviClient extends Component {
  constructor(props){
    super(props)
    this.state ={
     type:'suiviclient',
        suiviClients : [],
        etat100:true,
        connected:JSON.parse(localStorage.getItem("userData")),
    }
}




  
async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/suiviClients")
    .then(res => {
        console.log(res)
        this.setState({suiviClients : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
     if (this.state.connected[0].role != "user") {
      this.setState({etat100:false});
    }
}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/suiviClients/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}

myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

  render() {
    const suiviClients = this.state.suiviClients
    const columns = [
      {
        header: 'id SuiviClient ',
        key: 'id_suiviclient',
        td: (suiviClients) => <div> {suiviClients.id_suiviclient}</div>
      },
      {
        header: 'Num. Réclamation Client  ',
        key: 'num_rec_cli',
        td: (suiviClients) => <div> {suiviClients.num_rec_cli}</div>
      },
      {
        header: 'Date Réclamation Client ',
        key: 'date_rec_cli',
        td: (suiviClients) => <div> {suiviClients.date_rec_cli}</div>
      },
      {
        header: 'Zone ',
        key: 'zone',
        td: (suiviClients) => <div> {suiviClients.zone}</div>
      },
      {
        header: 'Client ',
        key: 'id_client',
        td: (suiviClients) => <div> {suiviClients.id_client}</div>
      },
      {
        header: 'Référence Produit  ',
        key: 'id_article',
        td: (suiviClients) => <div> {suiviClients.id_article}</div>
      },
      {
        header: 'Projet ',
        key: 'nom_projet',
        td: (suiviClients) => <div> {suiviClients.nom_projet}</div>
      },
      {
        header: 'Phase de Projet ',
        key: 'phase_projet',
        td: (suiviClients) => <div> {suiviClients.phase_projet}</div>
      },
      {
        header: 'Descriptif du défaut ',
        key: 'desc_deff',
        td: (suiviClients) => <div> {suiviClients.desc_deff}</div>
      },
      {
        header: 'Photo ok ',
        key: 'first_name',
        td: (suiviClients) => <div style ={{width:100, height:100}}><img style={{ width:100, height:100, borderRadius:0, overflow:"hidden"}} className="zoom" src={"http://localhost/newgen/blog/public/files/"+suiviClients.photo_ok} /></div>
      },
      {
        header: 'Photo NOK ',
        key: 'support',
        td: (suiviClients) => <div style ={{width:100, height:100}}><img style={{ width:100, height:100, borderRadius:0, overflow:"hidden"}} className="zoom" src={"http://localhost/newgen/blog/public/files/"+suiviClients.photo_nok} /></div>
      },
      {
        header: 'Nombre des pièces KO ',
        key: 'nbr_piec_ko',
        td: (suiviClients) => <div> {suiviClients.nbr_piec_ko}</div>
      },
      {
        header: 'Type incidents  ',
        key: 'type_incidant',
        td: (suiviClients) => <div> {suiviClients.type_incidant}</div>
      },
      {
        header: 'N° de réclamation au fournisseur  ',
        key: 'id_suivifournisseur',
        td: (suiviClients) =><div> {suiviClients.id_suivifournisseur}</div>
      },
      {
        header: 'Récurrence  ',
        key: 'recurence',
        td: (suiviClients) => <div>{suiviClients.recurence}</div>
      },
      {
        header: 'Statut',
        key: 'statut',
        td: (suiviClients) => <div> {suiviClients.statut}</div>
      },
      {
        header: 'CNQ suite réclamation',
        key: 'cout_non_quat_s_rec',
        td: (suiviClients) => <div> {suiviClients.cout_non_quat_s_rec}</div>
      },
      {
        header: 'Actions',
        td: (suiviClients) => {
   
          return (
            <div hidden ={this.state.etat100}>
                 <a href={"../add/add_planaction_source/"+suiviClients.id_suiviclient+"/"+this.state.type}>ajout plan action   </a>

            <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(suiviClients.id_suiviclient)}>
                        <i className="mdi mdi-delete" ></i>
                      </button>  {' '}
   
              <a type="button" className="btn btn-inverse-info btn-icon" href={"../edit/suivi-client/"+suiviClients.id_suiviclient}>
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
          <h3 className="page-title"> Suivis Incident Clients </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">planaction</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des Suivis Incident Clients </h4>
                {this.state.etat}
               <br/>               <br/>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a hidden ={this.state.etat100} className="mr-5" type="submit" href ="../add/suivi-client" className="btn btn-inverse-info " >
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

            
                <div className="table-responsive" >
                <ReactFlexyTable  caseSensitive   downloadExcelProps={downloadExcelProps}
 columns={columns} className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.suiviClients}/>

                </div>
              </div>  
            </div> 
          </div>
        </div>

      </div>

    )

  }
}
    

export default SuiviClient;
