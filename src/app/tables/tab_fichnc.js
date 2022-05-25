import React, { Component } from 'react'
import axios from "axios";
import { ButtonGroup,ButtonToolbar,Form,FormControl,Modal  } from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "../../assets/imageStyle/imageStyle.css";

// flex table //
import ReactFlexyTable from 'react-flexy-table'
import { Col } from 'react-bootstrap';
//////

export class BasicTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts : [],
      actions : [],
      etat100:true,
      connected:JSON.parse(localStorage.getItem("userData")),


        u_id : '',
        type:'nc',
        ac_ap:'',
   
        isOpen: false

    }
}

 openModal = (isd) => {
  this.setState({ isOpen: true , u_id : isd  });
 axios.get("http://localhost/newgen/blog/public/api/ac_ap/"+isd)
.then(res => {
    console.log(res)
    this.setState({actions : res.data})
}).catch( err => {
    console.log("errreeur ")

 })
}
closeModal1 = () => this.setState({ isOpen: false });


handleChange18= event => {
  this.setState({ ac_ap: event.target.value });
}

handleChange17= event => {
  this.setState({ type: event.target.value });
}


handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    ac_ap:this.state.ac_ap,
    type:this.state.type,
    u_id:this.state.u_id,

  };
  
 console.log(user);
 
  await axios.post(`http://localhost/newgen/blog/public/api/ac_ap`, {  
    ac_ap:this.state.ac_ap,
    type:this.state.type,
    u_id:this.state.u_id,
     

})
.then(res => {
  window. location. reload(false)
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
  await axios.get("http://localhost/newgen/blog/public/api/rapportnc")
  .then(res => {
      console.log(res)
      this.setState({posts : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
    
///////////////////////

if (this.state.connected[0].role != "user") {
  this.setState({etat100:false});
}
}

deleteExpense(id) {
  axios.delete('http://localhost/newgen/blog/public/api/rapportnc/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  })
}

deleteExpenseAcAp(id) {
  axios.delete('http://localhost/newgen/blog/public/api/ac_ap/'+ id)
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
        header: 'Id Rapport NC ',
        key: 'id_rapportnc',
        td: (posts) => <div> {posts.id_rapportnc}</div>
      },
      {
        header: 'Date Création ',
        key: 'created_at',
        td: (posts) => <div> {posts.created_at}</div>
      },
     
      {
        header: 'Code Article ',
        key: 'code_artc',
        td: (posts) => <div> {posts.code_artc}</div>
      },
      {
        header: 'N° Lot/date ',
        key: 'id_lot',
        td: (posts) => <div> {posts.id_lot}</div>
      },
   
      {
        header: 'Sujet Non Conformité',
        key: 'sujet_non_conformite',
        td: (posts) => <div> {posts.sujet_non_conformite}</div>
      },
      {
        header: 'Photo ok ',
        key: 'photo_ok',
        td: (posts) => <div><img style={{ width:100, height:100, borderRadius:0, overflow:"hidden"}} className="zoom" src={"http://localhost/newgen/blog/public/files/"+posts.photo_ok} /></div>
      },
      {
        header: 'Photo NOK ',
        key: 'photo_nok',
        td: (posts) => <div><img style={{ width:100, height:100, borderRadius:0, overflow:"hidden"}} className="zoom" src={"http://localhost/newgen/blog/public/files/"+posts.photo_nok} /></div>
      },
      {
        header: 'Photo Idantité ',
        key: 'photo_idant',
        td: (posts) => <div><img style={{ width:100, height:100, borderRadius:0, overflow:"hidden"}} className="zoom" src={"http://localhost/newgen/blog/public/files/"+posts.photo_idant} /></div>
      },
      {
        header: 'Quantité NC ',
        key: 'qte_nc',
        td: (posts) => <div> {posts.qte_nc}</div>
      },
      {
        header: 'Process',
        key: 'process',
        td: (posts) => <div> {posts.process}</div>
      },
      {
        header: 'Nom Client  ',
        key: 'nom_client',
        td: (posts) =><div> {posts.nom_client}</div>
      },
      {
        header: 'Occurance Défaut  ',
        key: 'occurance_defaut',
        td: (posts) => <div>{posts.occurance_defaut}</div>
      },
      {
        header: 'Action Immédiate',
        key: 'ac_immed',
        td: (posts) => <div> {posts.ac_immed}</div>
      },
      {
        header: 'Date Action Immédiate',
        key: 'date_ac_immed',
        td: (posts) => <div> {posts.date_ac_immed}</div>
      },
      {
        header: 'Date vérification Action Immédiate',
        key: 'date_verf_ac_immed',
        td: (posts) => <div> {posts.date_verf_ac_immed}</div>
      },
      {
        header: 'ac ap',
        td: (posts) =>
        <div>   
        {
          <button className="btn btn-info" onClick={() => this.openModal(posts.id_rapportnc)}>ajouter ac/ap</button>
        }</div>

        },
      {
        header: 'ajout plan action ',
        td: (posts) => <div> {
          <a hidden ={this.state.etat100} href={"../add/add_planaction_source/"+posts.id_rapportnc+"/"+this.state.type}>ajout plan action   </a>
        }</div>
      },
      {
        header: 'Actions',
        td: (posts) => {
   
   
          return (
            <div hidden ={this.state.etat100}>
        
            <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(posts.id_rapportnc)}>
              <i className="mdi mdi-delete" ></i>
            </button>  {' '}
   
              <button type="submit" className="btn btn-inverse-info btn-icon">
                <a href={"../edit/edit_nc/"+posts.id_rapportnc}>
                <i className="mdi mdi-tune-vertical"></i>
                </a>
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
          <h3 className="page-title"> Rapport Non Conformité </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des Rapport Non Conformité </h4>
                {this.state.etat}
               <br/>               <br/>
               <ButtonToolbar aria-label="Toolbar with button groups">
                <a hidden ={this.state.etat100} className="mr-5" type="submit" href ="../add/add_rapportnc" className="btn btn-inverse-info " >
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

   
<br/> 

            
                <div className="table-responsive" >
                <ReactFlexyTable  caseSensitive   downloadExcelProps={downloadExcelProps}
               columns={columns} className="rft-table" showExcelButton  globalSearch   filterable  sortable  data={posts}/>

                </div>
              </div>  
            </div> 
          </div>

        </div>


  <Modal 
  show={this.state.isOpen}
  onHide={this.closeModal1}
  backdrop=""
  keyboard={false}
  size="md"
  >
 <Modal.Header closeButton >
   <Modal.Title >Action corrective /préventive de la non-conformité {this.state.u_id} </Modal.Title>
 </Modal.Header>
 <Modal.Body >
 {this.state.actions.map( action =>(
 
   <ul key={action.id_acap}>
      
      <li>
        <Col xs={10} md={10} >
        {action.type}/ {action.acap}
        </Col>
        <Col xs={2} md={2}  >
           <button hidden ={this.state.etat100} type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpenseAcAp(action.id_acap)}>
              <i className="mdi mdi-delete" ></i>
            </button> 
      </Col>
        </li>
   </ul>
  
 

 ))}


                      <form className="form-sample" onSubmit={this.handleSubmit} hidden ={this.state.etat100}>
                    <Form.Group>
                          <label className="form-check-label">type </label>
                          <select required className="form-control" name="type" onChange={this.handleChange17} size="sm"  style={{backgroundColor: "#ffffff"}} >
                             <option value="">Choisie le type</option>
                             <option>ac</option>
                             <option>ap</option>
                           </select>     
                         
                            <label className="form-check-label">action </label>
                         <input className=" form-control"required style={{ backgroundColor: "#ffffff"}} type="acap"name="type" onChange={this.handleChange18} size="sm"   />                     
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
