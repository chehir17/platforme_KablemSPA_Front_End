import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button, Modal,Form,ButtonToolbar,ButtonGroup,FormControl} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


export class DepartementLigne extends Component {
  constructor(props){
    super(props)
    this.deleteLignes = this.deleteLignes.bind(this);
}

   state ={
    isOpen: false,
    isOpen1: false,
      
      etatligne:true,
      etatdepatement:true,

  

      lignes : [],
      lignes1 : [],


      id_departement :'',
      nom_departement :'',
      id_ligne : '',
      nom_ligne: '',
      connected:JSON.parse(localStorage.getItem("userData")),

    };
/// get request 
//// open ligne input 
openadd = () => this.setState({ etatligne: false  });
closeadd = () => this.setState({  etatligne: true   });
//// open depar input 


  async componentDidMount(){

    if (this.state.connected != null && this.state.connected[0].role != "admin") {
        console.log("iam here");
        window.location = "../error-pages/error-500";   
  
      }
  this.loadlignes();
  }


loadlignes = async () =>{
  await axios.get("http://localhost/newgen/blog/public/api/ligne")
  .then(res => {
      console.log(res)
      this.setState({lignes : res.data})
  }).catch( err => {
      console.log("errreeur ")
  });
}

// update request 

openModal1 = async (lid) =>{
  this.setState({ isOpen: true , id_ligne : lid});
  await axios.get("http://localhost/newgen/blog/public/api/ligne/"+lid)
  .then(res => {
      console.log(res)
      this.setState({ligne1 : res.data})
  }).catch( err => {
      console.log("errreeur ")
  })
  { this.state.ligne1.map(  client =>(
    this.setState({nom_ligne: client.nom_ligne})
       ))
         
    }
} 
closeModal = () => this.setState({ isOpen: false });
closeModal1 = () => this.setState({ isOpen1: false });




   updateLigne = async () =>{
    await axios.put(`http://localhost/newgen/blog/public/api/ligne/${this.state.id_ligne}`, { 
     nom_ligne : this.state.nom_ligne,

   })
    .then(res => {
      if(res.status === 200){
     //   this.loaddata()
     window.location.reload(false);

        this.openModal = false
      }
    })
    .catch(err => console.log(err))
  }

   /// *** /////


deleteLignes(id_ligne) {
  axios.delete('http://localhost/newgen/blog/public/api/ligne/'+id_ligne)
  .then((res) => {
    console.log("ereeur")
  }).catch((e) =>{
    console.log(e)
  })
}

// post request 
//// for departemet
handleChange = event => {
  this.setState({ nom_departement: event.target.value });
}
// for ligne
handleChange2 = event => {
  this.setState({ nom_ligne: event.target.value });
}


handleSubmitlignes = async (event) => {
  event.preventDefault();

  const ligne = {
    nom_ligne: this.state.nom_ligne,
  };
  
 console.log(ligne);
 
  await axios.post(`http://localhost/newgen/blog/public/api/ligne`, {  
    nom_ligne: this.state.nom_ligne,

  })
    .then(res => {

      console.log(res);
      console.log(res.data);
    })
    .catch(e => {
      console.log(event);
    });
    this.props.history.push('/');


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
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">  Lignes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">departementEtLigne</li>
            </ol>
          </nav>
        </div>
        <Container>
        
           <br/>  
            <Card >
            <CardContent>
            <FormControl className="mr-2" type="text" 
id="myInput"
size="sm"
onKeyUp={() => this.myFunction()} 
placeholder="cherhcer par idantifiant"
title="Type in a name"/>
            <h4 className="card-title">Liste des Lignes</h4>
                <br/>              
                <form onSubmit={this.handleSubmitlignes}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                    <button type="button" className="btn btn-inverse-info btn-icon" onClick={this.openadd}>
                    <i className="mdi mdi-plus"></i>
                    </button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
        
                    <button type="button" className="btn btn-inverse-danger btn-icon" hidden={this.state.etatligne} onClick={this.closeadd}>
                            <i className="mdi mdi-close"></i>
                          </button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                    <button type="submit" className="btn btn-inverse-success btn-icon" hidden={this.state.etatligne}>
                    <i className="mdi mdi-file-check btn-icon-prepend"></i>          
                    </button>
                    </ButtonGroup>
                </ButtonToolbar>
                <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="myTable"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
                <div className="table-responsive" >
                  <table className="table table-striped" id="myTable">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Nom de Ligne </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr hidden={this.state.etatligne} >
                      <td className="py1">            
                      </td>
                      <td><Form.Control required placeholder="Ajouter Nom ligne" style={{ width: "200px" }} type="text"name=" nom_ligne" onChange={this.handleChange2} size="sm"   /></td>
                      <td>
                       </td>
                      </tr>
                    { this.state.lignes.map( ligne =>(
                      <tr key={ligne.id_ligne}>
                        <td className="py-1">{ligne.id_ligne}</td>
                        <td>{ligne.nom_ligne}</td>
                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteLignes(ligne.id_ligne)}>
                        <i className="mdi mdi-delete"></i>
                      </button>    
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal1(ligne.id_ligne)} >
                      <i className="mdi mdi-pen"></i>
                      </Button>
                      </div>    
                        </td>
                      </tr>
                          ))
                        }
                    </tbody>
                  </table>
                </div>
                </form>
          </CardContent>
        </Card>
      </Container>     
     
        <Container>
        <Modal 
         show={this.state.isOpen}
         onHide={this.closeModal1}
          backdrop="static"
          keyboard={false}
          size="md"
          className="model"
        >
          <Modal.Header closeButton >
            <Modal.Title >Modifier Ligne </Modal.Title>
          </Modal.Header>
          <div className="col-12 grid-margin">
          <Modal.Body >
               <div className="card">
                 <div className="card-body">
                   <form className="form-sample">
                      <div className="row">
                             <Form.Group >
                                <label className="col-sm-12 col-form-label">Nom Ligne</label>
                                <TextField 
                                className="col-sm-12"
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="nom_ligne"
                                value={this.state.nom_ligne}
                                onChange={(event) => this.setState({nom_ligne : event.target.value})}/>
                              </Form.Group>
                            </div>
                        <Modal.Footer>
                       <Button className="btn btn-sm" variant="secondary" onClick={this.closeModal1}>
                      Fermer
                    </Button>
                    <Button className="btn btn-sm btn-info btn-block" variant="primary" onClick={()=>{ this.updateLigne()}}>Confimer</Button>
                  </Modal.Footer>      
                </form>
              </div>
            </div>
          </Modal.Body>  
          </div>
        </Modal> 
        </Container>
    </div>
    
    )
  }
}

export default DepartementLigne
