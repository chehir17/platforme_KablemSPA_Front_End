import React, { Component } from 'react'
import { Button, Modal,Form,Container,Row,Col,} from 'react-bootstrap';
import axios from "axios";


export class AddNotif extends Component {
state={
  etatuser:true,
  etatdep:true,
  isOpen: false,
  users:[],

  titre:'',
  notif_body:'',
  visibility:0,
  departement:'',
  id_user:'',

};

openModal = () =>{
  this.setState({ isOpen: true ,});
} 
closeModal = () => this.setState({ isOpen: false });

openuser = () => this.setState({ etatuser: false  });
closeuser = () => this.setState({  etatuser: true   });

opendep = () => this.setState({ etatdep: false  });
closedep = () => this.setState({  etatdep: true   });

///// add notif ///// 
handleChange = event => {
  this.setState({ 	titre: event.target.value });
}
handleChange1 = event => {
  this.setState({  notif_body: event.target.value });
}
handleChange2 = event => {
  this.setState({  departement: event.target.value });
}
handleChange3 = event => {
  this.setState({  id_user: event.target.value });
}
/////// 



async componentDidMount(){
  //get Users
   await axios.get("http://localhost/newgen/blog/public/api/user")
   .then(res => {
       console.log(res)
       this.setState({users : res.data})
   }).catch( err => {
       console.log("errreeur ")
 
    })

}

handleSubmit = async (event) => {
  event.preventDefault();

  const addnotif = {
    titre:this.state.titre,
    notif_body:this.state.notif_body,
    visibility:this.state.visibility,
    departement:this.state.departement,
    id_user:this.state.id_user,

  };
  
 console.log(addnotif);
 
  await axios.post(`http://localhost/newgen/blog/public/api/addNotif`, {  
    titre:this.state.titre,
    notif_body:this.state.notif_body,
    visibility:this.state.visibility,
    departement:this.state.departement,
    id_user:this.state.id_user,
  })
    .then(res => {

      console.log(res);
      console.log(res.data);
window.location.reload(true);
    }).catch(e => {
      console.log(e);
    });

    //this.props.history.push('./');

}
 
  render() {
    return (
      <div>
                          <button  className="btn btn-inverse-info btn-icon" onClick={() => this.openModal()}>  <i className="mdi mdi-plus"> </i></button>

    

      <Modal
        show={this.state.isOpen}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Envoi Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                <Container>
                      
                  <Row>
                 <Col xs={6} md={6}>
                <Form.Check  inline onClick={this.openuser }   label="Envoi Par Utilisateur " name="" />
                </Col>
                <Col xs={6} md={6}>
                <Form.Check inline onClick={this.opendep}   label="Envoi par Departement" name="" />
                </Col>
                </Row>
                
                <Row>
                <Col xs={6} md={6}>
                <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control  onChange={this.handleChange3} hidden={this.state.etatuser}  as="select" name="id_user">
                <option value="" >Selecter Votre destinataire</option>
                { this.state.users.map( user =>( 
                  <option key={user.id_user} value={user.id_user}>{user.nom_user} {user.first_name} {user.last_name}</option>
                  ))}  
                </Form.Control>
              </Form.Group>
              </Col>
              <Col xs={6} md={6}>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control  onChange={this.handleChange2} name="departement" hidden={this.state.etatdep}   as="select" >
                  <option value="">Selecter Departement </option>
                            <option >Qualité</option>
                            <option >Maintenance</option>
                            <option >Production</option>
                            <option >Indust</option>
                            <option >Logistique</option>
                            <option >Comptabilité_Finance</option>
                            <option >RH</option>
                            <option >Achat</option>
                </Form.Control>
              </Form.Group>
              </Col>
                </Row>
                <Row>
                <Col md={12}>
                <Form.Group>
                      <label className="form-check-label">titre</label>
                      <Form.Control className=" form-control" onChange={this.handleChange} required type="text" name="titre" size="sm"   />                         
                </Form.Group> 
              </Col>
                </Row>
                <Row>
                <Col md={12}>
                <Form.Group>
                      <label className="form-check-label">Description</label>
                      <textarea className="form-control" required  rows="3" onChange={this.handleChange1}  type="textarea"name="notif_body"  size="sm" style={{backgroundColor: "#ffffff"}}  />
                </Form.Group> 
              </Col>
                </Row>
            </Container>
            <Modal.Footer>
          <Button className="btn bnt-dark" variant="secondary" onClick={this.closeModal}>
            Annuler
          </Button>
          <Button className="btn bnt-primary" type="submit" variant="primary">Envoi Notif</Button>
        </Modal.Footer>
                </Form>
        </Modal.Body>
 
      </Modal> 
      </div>
    )
  }
}

export default AddNotif;
