import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button, Modal,Form,FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export class Fournisseur extends Component {
  constructor(props){
    super(props)
    this.deleteExpense = this.deleteExpense.bind(this);
}

   state ={
      isOpen: false,
      fournisseurs : [],
      fournisseurs1 : [],

      id_fournisseur:'',
      nom_four: '',
      ref: '',
      classification: '',
      
    };
/// get request 

async componentDidMount(){
  
   
  
  await axios.get("http://localhost/newgen/blog/public/api/fournisseur")
  .then(res => {
      console.log(res)
      this.setState({fournisseurs : res.data})
  }).catch( err => {
      console.log("errreeur ")
  });



  }


closeModal = () => this.setState({ isOpen: false });

// update request 
 openModal = async (fid) =>{
  this.setState({ isOpen: true , id_fournisseur : fid});
 
    await axios.get("http://localhost/newgen/blog/public/api/fournisseur/"+fid)
    .then(res => {
        console.log(res)
        this.setState({fournisseurs1 : res.data})
    }).catch( err => {
        console.log("errreeur ")
    });
    { this.state.fournisseurs1.map(  fournisseur =>(
      this.setState({nom_four: fournisseur.nom_four}),
      this.setState({ref: fournisseur.ref}),
      this.setState({classification: fournisseur.classification})
         ))
           
      }
} 
 
update = async () =>{
     await axios.put('http://localhost/newgen/blog/public/api/fournisseur/'+this.state.id_fournisseur, { 
      nom_four : this.state.nom_four,
      ref: this.state.ref,
      classification:this.state.classification
    })
     .then(res => {
       if(res.status === 200){
         this.openModal = false
       }
     })
     .catch(err => console.log(err))
   }
  

   /// *** /////

  deleteExpense(id) {
    axios.delete('http://localhost/newgen/blog/public/api/fournisseur/'+id)
    .then((res) => {
      console.log("ereeur")
    }).catch((e) =>{
      console.log(e)
    })
}

// post request 

handleChange = event => {
  this.setState({ nom_four: event.target.value });
}
handleChange1 = event => {
  this.setState({ ref: event.target.value });
}
handleChange2 = event => {
  this.setState({ classification: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();


  
 
  await axios.post(`http://localhost/newgen/blog/public/api/fournisseur`, {  
    nom_four: this.state.nom_four,
    ref: this.state.ref,
    classification: this.state.classification
  })
    .then(res => {

      console.log(res);
      console.log(res.data);
    })
    .catch(e => {
      console.log(event);
    });
 //   this.props.history.push('/fournisseur1');


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
          <h3 className="page-title"> Fournisseur </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">fournisseur table</li>
            </ol>
          </nav>
        </div>
        <Container>
         <Row>   
           <Col>     
            <Card >
              <CardContent>
                <h4 className="card-title">Liste des Fournisseurs</h4>
                <br/>              
                <br/>  
                <FormControl className="mr-2" type="text" 
id="myInput"
size="sm"
onKeyUp={() => this.myFunction()} 
placeholder="cherhcer par idantifiant"
title="Type in a name"/>

                <div className="table-responsive" >
                  <table className="table table-striped" id="myTable">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Nom de fournisseur </th>
                        <th> Reférrence </th>
                        <th> Classification </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.fournisseurs.map( fournisseur =>(
                      <tr key={fournisseur.id_fournisseur}>
                        <td className="py-1">{fournisseur.id_fournisseur}</td>
                        <td>{fournisseur.nom_four} </td>
                        <td>{fournisseur.ref}</td>
                        <td>{fournisseur.classification}</td>
                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(fournisseur.id_fournisseur)}>
                        <i className="mdi mdi-delete"></i>
                      </button>    
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal(fournisseur.id_fournisseur)} >
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
              </CardContent>  
             </Card>
            </Col>
            <Col>
            <Card >
            <CardContent>
            <h4 className="card-title">Ajouter un fournisseur</h4>
              <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                  <Form.Group >
                    <label className="col-sm-12 col-form-label">Nom de Fournisseur</label>
                    <TextField 
                    required
                    type="text"
                    id="outlined-basic" 
                    label="Nom de fournisseur" 
                    variant="outlined"
                    size="small"
                    name="nom_four"
                    onChange={this.handleChange} />
                  </Form.Group>
                  </div>
                  <div className="col-sm-9">
                 <Form.Group>
                <label className="col-sm-12 col-form-label">Reférrence</label>
                <TextField 
                required
                type="text"
                id="outlined-basic" 
                label="Referrence" 
                variant="outlined"
                size="small"
                name="ref"
                onChange={this.handleChange1} />
               </Form.Group>
               </div>
               <div className="col-sm-9">
               <label className="col-sm-12 col-form-label">Classification</label>
               <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control required onChange={this.handleChange2}  as="select" name="classification">
                  <option value="">classification</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="C3">C3</option>
                </Form.Control>
              </Form.Group>
                 </div>
               <Button className="btn btn-block btn-sm btn-info " variant="primary"  type="submit">Confimer</Button>
             </form>
          </CardContent>
        </Card>
        </Col>           
       </Row>
      </Container>     
      <Modal 
         show={this.state.isOpen}
         onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
          size="md"
          className="model"
        >
          <Modal.Header closeButton >
            <Modal.Title >Modifier Fournisseur N°{this.state.id_fournisseur} </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          
            <div className="col-12 grid-margin">
               <div className="card">
                 <div className="card-body">
                   <form className="form-sample">
                      <div className="row">
                          <div className="col-md-6">
                             <Form.Group >
                                <label className="col-sm-12 col-form-label">Nom Fournisseur</label>
                                <TextField 
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="nom_four"
                                value={this.state.nom_four}
                                onChange={this.handleChange}                                
                                />
                              </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group>
                                <label className="col-sm-12 col-form-label">Reférrence</label>
                                <TextField 
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="ref"
                                value={this.state.ref}
                                onChange={this.handleChange1}                               
                                 />
                              </Form.Group>
                            </div>
                            <div className="col-sm-9">
                            <label className="col-sm-12 col-form-label">Classification</label>
                            <Form.Group controlId="exampleForm.SelectCustom">
                              <Form.Control required value={this.state.classification} onChange={this.handleChange2} name="classification" as="select" >
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                                <option value="C3">C3</option>
                              </Form.Control>
                            </Form.Group>
                              </div>
                          </div>
                        <Modal.Footer>
                       <Button className="btn btn-sm" variant="secondary" onClick={this.closeModal}>
                      Fermer
                    </Button>
                    <Button className="btn btn-sm btn-info btn-block" variant="primary" onClick={()=>{ this.update()}}>Confimer</Button>
                  </Modal.Footer>      
                </form>
              </div>
            </div>
          </div>
          </Modal.Body>  
        </Modal> 
    </div>
    
    )
  }
}

export default Fournisseur
