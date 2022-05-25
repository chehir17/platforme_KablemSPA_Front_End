
import React, { Component } from 'react'
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';  
import { ButtonGroup,ButtonToolbar,Form ,FormControl, Modal } from 'react-bootstrap';
import "../tables/style.css"; 
import ReactFlexyTable from 'react-flexy-table'
import './index.css';



export class BasicTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      isOpen:false,
        posts : [],
        actions : [],

origine:'',
zone:'',
action:'',
statut:25,
u_id : '',

posts10 : [],
connected:JSON.parse(localStorage.getItem("userData")),
    }
}



openModal = (isd) => {
  this.setState({ isOpen: true , u_id : isd  });
 axios.get("http://localhost/newgen/blog/public/api/action/"+isd)
.then(res => {
    console.log(res)
    this.setState({actions : res.data})
}).catch( err => {
    console.log("errreeur ")

 })
}
closeModal1 = () => this.setState({ isOpen: false });


handleChange18= event => {
  this.setState({ action: event.target.value });
}

handleChange17= event => {
  this.setState({ zone: event.target.value });
}
handleChange16= event => {
  this.setState({ origine: event.target.value });
}


handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    action:this.state.action,
    zone:this.state.zone,
    origine:this.state.origine,
    u_id:this.state.u_id,

  };
  
 console.log(user);
 
  await axios.post(`http://localhost/newgen/blog/public/api/action`, {  
    action:this.state.action,
    zone:this.state.zone,
    origine:this.state.origine,
    u_id:this.state.u_id,

})
.then(res => {

  console.log(res);
  console.log(res.data);
})
.catch(e => {
  console.log(e);
});
}






  openadd = () => this.setState({ etat: false  });
  closeadd = () => this.setState({  etat: true   });




  
async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/planActions")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
     if (this.state.connected[0].level != "High level") {
      for (let i = 0; i < this.state.posts.length; i++) {
        if (this.state.posts[i].level == "High level") {
         this.state.posts10[i] = this.state.posts[i];

        }
      }
      this.setState({posts:this.state.posts10});

     }

}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/planActions/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  })
}


  render() {
    const posts = this.state.posts
    const columns = [
      {
        header: 'id planaction ',
        key: 'id_planaction',
        td: (posts) => <div> {posts.id_planaction}</div>
      },
      {
        header: 'Departement ',
        key: 'departement',
        td: (posts) => <div> {posts.departement}</div>
      },
      {
        header: 'Zone ',
        key: 'zone',
        td: (posts) => <div> {posts.zone}</div>
      },
      {
        header: 'Origine ',
        key: 'origine',
        td: (posts) => <div> {posts.origine}</div>
      },
      {
        header: 'Probléme ',
        key: 'prob',
        td: (posts) => <div> {posts.prob}</div>
      },
      {
        header: 'Cause ',
        key: 'cause',
        td: (posts) => <div> {posts.cause}</div>
      },
      {
        header: 'Action ',
        key: 'action',
        td: (posts) => <div> {posts.action}</div>
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
        header: 'Status ',
        key: 'status',
        td: (posts) => <div> {posts.status}</div>
      },
      {
        header: 'Controle d efficacité  ',
        key: 'contol_effic',
        td: (posts) => <div> {posts.contol_effic}</div>
      },
      {
        header: 'Progresse  ',
        key: 'progress',
        td: (posts) => <div><ProgressBar variant="gradient-info" now={posts.progress}/></div>
      },
      {
        header: 'Annulation  ',
        key: 'annul',
        td: (posts) => <div>{posts.annul}</div>
      },
      {
        header: 'source',
        key: 'id_rapportnc',
        td: (posts) => <div> {posts.id_rapportnc}{posts.id_scrap}{posts.id_dmpp}{posts.id_suiviclient}{posts.id_suivifournisseur}{posts.id_supercontrole}</div>
      },
      {
        header: 'Actions',
        td: (posts) => {
          return (
            <div>

<button className="btn btn-info" onClick={() => this.openModal(posts.id_planaction)}>ajouter action</button>
            <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_planaction)}>
                        <i className="mdi mdi-delete" ></i>
                      </button>  {' '}
   
              <button type="button" className="btn btn-inverse-info btn-icon" href={"../edit/edit_plan_action/"+posts.id_planaction}>
                        <i className="mdi mdi-tune-vertical"></i>
                      </button>    
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
                <a className="mr-5" type="submit" href ="../add/add_planaction" className="btn btn-inverse-info " >
                Ajouter        
              </a>
                <ButtonGroup aria-label="Third group">
                  
                </ButtonGroup>
            
            </ButtonToolbar>

   
<br/> 

            
                <div className="table-responsive" >
                <ReactFlexyTable  caseSensitive   downloadExcelProps={downloadExcelProps}
 columns={columns} className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={this.state.posts}/>

                </div>
              </div>  
            </div> 
          </div>
        </div>

        <Modal 
show={this.state.isOpen}
onHide={this.closeModal1}
 backdrop="static"
 keyboard={false}
 size="md"
 className="model"
>
 <Modal.Header closeButton >
   <Modal.Title >Les actions de plan d'action N° {this.state.u_id} </Modal.Title>
 </Modal.Header>
 <Modal.Body >
 {this.state.actions.map( action =>(
   <ul key={action.id_action}>
<li>{action.zone}/ {action.origine}/ {action.action}</li>

   </ul>
 ))}

   <form className="form-sample" onSubmit={this.handleSubmit}>
<Form.Group>
<label className="form-check-label">Zone</label>
                         <select required  className="form-control" name="zone" onChange={this.handleChange17} size="sm" style={{backgroundColor: "#ecf2f8"}}  >
                           <option disabled value="">Selecter Zone</option>
                           <option value="P1">P1</option>
                           <option value="P2">P2</option>
                           <option value="P3">P3</option>
                           <option value="P1 + P2">P1 + P2</option>
                           <option value="P1 + P2 + P3">P1 + P2 + P3</option>
                           <option value="P">CET</option>
                           <option value="CET">Magasin</option>
                           <option value="P3-1">P3-1</option>
                           <option value="P3-2">P3-2</option>
                           <option value="P3-3">P3-3</option>
                         </select>        
                         <label className="form-check-label">Origine</label>
                         <select required className="form-control" name="origine" onChange={this.handleChange16} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                             <option disabled value="">Selecter Origine</option>
                             <option value="Audit interne">Audit interne</option>
                             <option value="réunion usine">réunion usine</option>
                             <option value="réunion Zone">réunion Zone</option>
                             <option value="réunion Protos">réunion Protos</option>
                             <option value="Audit externe">Audit externe</option>
                             <option value="Audit interne CET">Audit interne CET </option>
                             <option value="Audit interne Ducato 01/12">Audit interne Ducato 01/12</option>
                             <option value="Audit interne Magneti Marelli  22/09">Audit interne Magneti Marelli  22/09</option>
                             <option value="Audit SGS Stage 1 ">Audit SGS Stage 1 </option>
                             <option value="Audit SGS Stage 2">Audit SGS Stage 2</option>
                           </select>    

                             <Form.Group>
                          <label className="form-check-label">Actions</label>
                          <Form.Control className=" form-control"required style={{ backgroundColor: "#ecf2f8"}} type="text"name="action" onChange={this.handleChange18} size="sm"   />                                                    
                          </Form.Group>                  
<button className=" btn btn-info" type="submit">
ajouter
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

