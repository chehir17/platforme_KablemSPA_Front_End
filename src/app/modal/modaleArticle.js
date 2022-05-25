import React,{Component}  from 'react';
import { Button, Modal,Form} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

export class ModaleA extends Component {

  state = {
    isOpen: false
  };  

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  state = {
    code_artc: '',
    nom_artc: '',
    num_lot: '',
    date_prod: '',
  }

  handleChange = event => {
    this.setState({ code_artc: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ nom_artc: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ num_lot: event.target.value });
  }
  handleChange3 = event => {
    this.setState({ date_prod: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const article = {
      code_artc: this.state.code_artc,
      nom_artc: this.state.nom_artc,
      num_lot: this.state.num_lot,
      date_prod: this.state.date_prod
    };
    
   console.log(article);
   
    await axios.post(`http://localhost/applay/public/api/article`, {  
      code_artc: this.state.code_artc,
      nom_artc: this.state.nom_artc,
      num_lot: this.state.num_lot,
      date_prod: this.state.date_prod
    })
      .then(res => {

        console.log(res);
        console.log(res.data);
      })
      .catch(e => {
        console.log(event);
      });
  }

 render(){
  return (
    <>
         <Button 
           variant="primary" 
           className="btn btn-info btn-icon" 
           onClick={this.openModal} >
          <i class="mdi mdi-plus-circle"></i>
          </Button>

        <Modal 
         show={this.state.isOpen}
         onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
          size="md"
          className="model"
        >
          <Modal.Header closeButton >
            <Modal.Title >Ajouter Un Nouveau Article </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          
<div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <form className="form-sample" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
          <Form.Group >
              <label className="col-sm-12 col-form-label">Code Article</label>
              <TextField 
              required
              type="text"
              id="outlined-basic" 
              label="Code Article" 
              variant="outlined"
              size="small"
              name="code_artc"
              onChange={this.handleChange}  />
            </Form.Group>
          </div>
          <div className="col-md-6">
          <Form.Group>
              <label className="col-sm-12 col-form-label">Nom Article</label>
              <TextField 
              required
              type="text"
              id="outlined-basic" 
              label="Nom Article" 
              variant="outlined"
              size="small"
              name="nom_artc"
              onChange={this.handleChange1}  />
            </Form.Group>
          </div>
        </div>
       
        <div className="row">
        <div className="col-md-6">
        <Form.Group>
              <label className="col-sm-12 col-form-label">Numero de Lot</label>
              <TextField 
              required
              type="text"
              id="outlined-basic" 
              label="Numero de Lot" 
              variant="outlined"
              size="small"
              name="num_lot"
              onChange={this.handleChange2}  />
            </Form.Group>
          </div>
          <div className="col-md-6">
          <Form.Group>
              <label className="col-sm-12 col-form-label">Date Production</label>
              <TextField 
              required
              type="date"
              id="outlined-basic" 
              size="small" 
              name="date_prod"
              onChange={this.handleChange3} 
              />
            </Form.Group>
          </div>
        </div>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Fermer
            </Button>
            <Button className="btn btn-info" variant="primary" type="submit">Confimer</Button>
            </Modal.Footer>      
      </form>
    </div>
  </div>
 </div>

          </Modal.Body>  
        </Modal>
      </>
   );
  }
}

export default ModaleA;
