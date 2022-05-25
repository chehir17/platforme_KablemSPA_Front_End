import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button, Modal,Form} from 'react-bootstrap';
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
      nom_four: '',
      ref: '',
      f_id : '',
    };
/// get request 

  async componentDidMount(){
  this.loaddata();
  }

loaddata = async () =>{
  await axios.get("http://localhost/applay/public/api/fournisseur")
  .then(res => {
      console.log(res)
      this.setState({fournisseurs : res.data})
  }).catch( err => {
      console.log("errreeur ")
  });
}

// update request 
openModal = (fid) =>{
  this.setState({ isOpen: true , f_id : fid});
} 
closeModal = () => this.setState({ isOpen: false });

update = async () =>{
     await axios.put(`http://localhost/applay/public/api/fournisseurs/${this.state.f_id}`, { 
       nom_four : this.state.nom_four,
      ref: this.state.ref })
     .then(res => {
       if(res.status === 200){
         this.loaddata()
         this.openModal = false
       }
     })
     .catch(err => console.log(err))
   }

   /// *** /////

  deleteExpense(id) {
    axios.delete('http://localhost/applay/public/api/fournisseur/'+id)
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

handleSubmit = async (event) => {
  event.preventDefault();

  const fournisseur = {
  };
  
 console.log(fournisseur);
 
  await axios.post(`http://localhost/applay/public/api/fournisseur`, {  
    nom_four: this.state.nom_four,
    ref: this.state.ref,
  })
    .then(res => {

      console.log(res);
      console.log(res.data);
    })
    .catch(e => {
      console.log(event);
    });

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
                <h4 className="card-title">Liste des Fournisseur</h4>
                <br/>              
                <br/>  
                <div className="table-responsive" >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Nom de fournisseur </th>
                        <th> Reférrence </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.fournisseurs.map( fournisseur =>(
                      <tr key={fournisseur.id}>
                        <td className="py-1">{fournisseur.id}</td>
                        <td>{fournisseur.nom_four} </td>
                        <td>{fournisseur.ref}</td>
                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(fournisseur.id)}>
                        <i className="mdi mdi-delete"></i>
                      </button>    
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal(fournisseur.id)} >
                      <i class="mdi mdi-pen"></i>
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
            <Modal.Title >Ajouter Un Nouveau Fournisseur </Modal.Title>
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
                                size="big"
                                name="nom_four"
                                onChange={(event) => this.setState({nom_four : event.target.value})}/>
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
                                size="big"
                                onChange={(event) => this.setState({ref : event.target.value})}/>
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
