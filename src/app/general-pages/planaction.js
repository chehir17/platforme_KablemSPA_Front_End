
import React, { Component } from 'react'
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';  
import { ButtonGroup,ButtonToolbar,Form ,FormControl, Modal } from 'react-bootstrap';
import "../tables/style.css"; 
import ReactFlexyTable from 'react-flexy-table'
import './index.css';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


export class BasicTable extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      isOpen:false,
      posts : [],
      posts1 : [],
      actions : [],
      delete:false,
      modif100:true,

origine:'',
zone:'',
action:'',
statut:25,
u_id : '',
posts10 : [],
connected:JSON.parse(localStorage.getItem("userData")),
etat100:true,
sts1:'',
prg1:'',
etat500:true,
    }
}



openModal = (isd,sts,prg) => {
  this.setState({ isOpen: true , u_id : isd ,sts1:sts,prg1:prg });

}
closeModal1 = () => this.setState({ isOpen: false });


handleChange18= event => {
  this.setState({ sts1: event.target.value });
}

handleChange17= event => {
  this.setState({ prg1: event.target.value });
}



handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    prg1:this.state.prg1,
    sts1:this.state.sts1,
    u_id:this.state.u_id,

  };
  
 console.log(user);
 
  await axios.put(`http://localhost/newgen/blog/public/api/status/`+this.state.u_id, {  
    prg1:this.state.prg1,
    sts1:this.state.sts1,
  

})
.then(res => {
     window.location.reload(true);
  console.log(res);
})
.catch(e => {
  console.log(e);
});
}






  openadd = () => this.setState({ etat: false  });
  closeadd = () => this.setState({  etat: true   });




  
async componentDidMount(){
  if(this.state.connected[0].level == "meduim level"){
    await axios.get("http://localhost/newgen/blog/public/api/index100")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
  }else{
    await axios.get("http://localhost/newgen/blog/public/api/planActions")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
  }
    
   
   
     for (let i = 0; i < this.state.posts.length; i++) {
if (this.state.posts[i].id_dmpp != null) {
  this.state.posts[i].id_dmpp= "DMPP N° "+this.state.posts[i].id_dmpp;
}
if (this.state.posts[i].id_rapportnc != null) {
  this.state.posts[i].id_rapportnc= "non-comformité N° "+this.state.posts[i].id_rapportnc;
}
if (this.state.posts[i].id_scrap != null) {
  this.state.posts[i].id_scrap= "scrap N° "+this.state.posts[i].id_scrap;
}
if (this.state.posts[i].id_suiviclient != null) {
  this.state.posts[i].id_suiviclient= "réclamation client N° "+this.state.posts[i].id_suiviclient;
}
if (this.state.posts[i].id_suivifournisseur != null) {
  this.state.posts[i].id_suivifournisseur= "suivi fouurnisseur N° "+this.state.posts[i].id_suivifournisseur;
}
if (this.state.posts[i].id_supercontrole != null) {
  this.state.posts[i].id_supercontrole= "super controle  N° "+this.state.posts[i].id_supercontrole;
}
      
     }
     if (this.state.connected[0].role != "admin") {
      console.log("3malt hedy ")

      this.setState({delete:true});
           }  
           if (this.state.connected[0].role != "user") {
      
            this.setState({modif100:false});
                 }  
/*if(this.state.connected[0].level != "High level"){
      for (let i = 0; i < this.state.posts.length; i++) {
        if (this.state.posts[i].level != 1) {
          this.state.posts.splice(i , 1);
        }
      }
    }*/
     
     if (this.state.connected[0].role != "user") {
      console.log("3malt hedy ")

      this.setState({etat100:false});
    }
}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/planActions/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  });
  window.location.reload();

}


  render() {
    const posts = this.state.posts;
    const acs = posts.comments;
    const downloadExcelProps = {
      type: 'paged',
      title: 'test',
      showLabel: true
    }
    const columns = [
      {
        header: 'id planaction ',
        key: 'id_planaction',
        td: (posts) => <div> {posts.id_planaction}</div>
      },
      {
        header: 'source',
        key: 'id_dmpp',
        td: (posts) =>  <div> {posts.id_rapportnc}{posts.id_scrap}{posts.id_dmpp}{posts.id_suiviclient}{posts.id_suivifournisseur}{posts.id_supercontrole}</div>
      },
      {
        header: 'Status ',
        key: 'status',
        td: (posts) => <div> {posts.status}</div>
      },
      {
        header: 'Progresse  ',
        key: 'progress',
        td: (posts) => <div><ProgressBar variant="gradient-info" now={posts.progress}/></div>
      },
      {
        header: 'Departement ',
        key: 'departement',
        td: (posts) => <div > {posts.departement}</div>
      },
  
     {
        header: 'Zone ',
        key: 'zone',

        td: (posts) =>  <div>
     
      {posts.zone}


         
           </div>
      },
  
    {
        header: 'Origine ',
        key: 'origine',
        td: (posts) => <div>   
          {posts.origine}
                </div>
      },
    ,{
        header: 'Probléme ',
        key: 'prob',
        td: (posts) => <div style={{whiteSpace:"pre"}}> {posts.prob}</div>
      },
      {
        header: 'Cause ',
        key: 'cause',
        td: (posts) => <div style={{whiteSpace:"pre"}}> {posts.cause}</div>
      },
      {
        header: 'Action ',
        key: 'action',
        td: (posts) => <div style={{whiteSpace:"pre"}}> {posts.action}</div>
      },
   
      {
        header: 'Date de début ',
        key: 'date_debut',
        td: (posts) => <div> {posts.date_debut}</div>
      },
      {
        header: 'Date de cloture ',
        key: 'date_cloture',
        td: (posts) => <div> {posts.date_cloture}</div>
      },
      {
        header: ' NOTE(date de retardement ou docs Utilisés pour controle Efficacité ) ',
        key: 'note',
        td: (posts) => <div> {posts.note}</div>
      },
      {
        header: 'Responsable ',
        key: 'first_name',
        td: (posts) => <div> {posts.first_name} {posts.last_name}</div>
      },
      {
        header: 'Support ',
        key: 'support',
        td: (posts) => <div> {posts.support}</div>
      },
      {
        header: 'Controle d efficacité  ',
        key: 'contol_effic',
        td: (posts) => <div> {posts.contol_effic}</div>
      },
     
     
      {
        header: 'Annulation  ',
        key: 'annul',
        td: (posts) => <div>{posts.annul}</div>
      },
   
      {
        header: 'Actions',
        td: (posts) => {
          if(posts.id_dmpp != null){
          if (this.state.connected[0].id_user == posts.editeur){
            this.state.etat500 = false;

          }
        }
        else{
          if(this.state.connected[0].role == "user"){
            this.state.modif500 = true;

          }
          else{
            this.state.etat500 = false;

          }
          
        }
    
          return (
            <div >

              
<a hidden={this.state.etat500} type="button" className="btn btn-inverse-info btn-icon"  onClick={() => this.openModal(posts.id_planaction,posts.status,posts.progress)}>
                        <i className="mdi mdi-star"></i>
                      </a> 
{
this.state.etat500 = true

}



            <a hidden={this.state.delete} type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_planaction)}>
                        <i className="mdi mdi-delete" ></i>
                      </a>  {' '}
   
              <a hidden={this.state.modif100} type="button" className="btn btn-inverse-info btn-icon" href={"../edit/edit_plan_action/"+posts.id_planaction}>
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
          <h3 className="page-title"> Plan Actions </h3>
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
                <h4 className="card-title">Liste des Plan d'Action </h4>
                {this.state.etat}
               <br/>               <br/>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a  className="mr-5"  href ="../add/add_planaction" className="btn btn-inverse-info " >
                Ajouter        
              </a>
                <ButtonGroup aria-label="Third group">
              
                <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="ttrr"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Télecharger tous les données"
      />
                  <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="rft-table-id"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Télecharger les données filtré"
      />
                </ButtonGroup>
            
            </ButtonToolbar>

   
<br/> 

            
                <div className="table-responsive"  >
           
          
                <ReactFlexyTable id ="table-to-xls" caseSensitive    data={this.state.posts}
 columns={columns} className="rft-table" showExcelButton downloadExcelProps={downloadExcelProps} globalSearch   filterable  sortable  />

                </div>

                <table id="ttrr" hidden>
                  <tr><th>id planaction </th><th>source</th><th>Status </th><th>Progresse  </th><th>Departement </th><th>Zone </th><th>Origine </th><th>Probléme </th><th>Cause </th><th>Action </th><th>Date de début </th><th>Date de cloture </th><th> NOTE(date de retardement ou docs Utilisés pour controle Efficacité ) </th><th>Responsable </th><th>Support </th><th>Controle d efficacité  </th><th>Annulation  </th></tr>
             
             
              {
                this.state.posts.map( posts =>(
                  <tr>
<td>{posts.id_planaction}</td>
<td>{posts.id_rapportnc}{posts.id_scrap}{posts.id_dmpp}{posts.id_suiviclient}{posts.id_suivifournisseur}{posts.id_supercontrole}</td>
<td>{posts.status}</td>
<td>{posts.progress}</td>
<td>{posts.departement}</td>
<td>{posts.zone}</td>
<td>{posts.origine}</td>
<td>{posts.prob}</td>
<td>{posts.cause}</td>
<td>{posts.action}</td>
<td>{posts.date_debut}</td>
<td>{posts.date_cloture}</td>
<td>{posts.note}</td>
<td>{posts.first_name} {posts.last_name}</td>
<td>{posts.support}</td>
<td>{posts.contol_effic}</td>
<td>{posts.annul}</td>
</tr>
                ))
              }
          
                </table>
              </div>  
            </div> 
          </div>
        </div>

        <Modal 
show={this.state.isOpen}
onHide={this.closeModal1}
 backdrop=""
 keyboard={true}
 size="md"
 className="modal"

>
 <Modal.Header closeButton >
   <Modal.Title >Progresse et statue </Modal.Title>
 </Modal.Header>
 <Modal.Body >
 
   <form className="form-sample" onSubmit={this.handleSubmit}>
<Form.Group>
                      
                             <Form.Group>
                             <div>
                             <label className="form-check-label">Progress</label>

  <input className="form-control" type="range" name="progress" value={this.state.prg1} onChange={this.handleChange17}
         min="0" max="100"/>
</div>
<label className="form-check-label">Statut</label>
<select className="form-control" value={this.state.sts1} onChange={this.handleChange18} >
  <option>open</option>
  <option>in progress</option>
  <option>done</option>
  <option>canceld</option>

</select>
                          </Form.Group>                  
<button className=" btn btn-info" type="submit">
Modifier
</button>
</Form.Group>
                         </form>
   



 </Modal.Body>  
        </Modal>



      </div>
    )
  }
}

export default BasicTable

