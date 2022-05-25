import React,{Component}  from 'react';
import { Button, Modal,Form} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';


export class ModaleC extends Component {

  state = {
    isOpen: false
  };  

  
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
 render(){
  return (
    <>
         <Button 
           variant="primary" 
           className="btn btn-info btn-icon"
           onClick={() => this.openModal(client.id)} >
           <i class="mdi mdi-pen"></i>
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
              <label className="col-sm-12 col-form-label">Nom de Client</label>
              <TextField 
              required
              type="text"
              id="outlined-basic" 
              label="Nom de client" 
              variant="outlined"
              size="big" />
            </Form.Group>
          </div>
          <div className="col-md-6">
          <Form.Group>
              <label className="col-sm-12 col-form-label">Reférrence</label>
              <TextField 
              required
              type="text"
              id="outlined-basic" 
              label="Referrence" 
              variant="outlined"
              size="big" />
            </Form.Group>
          </div>
        </div>
                        <Modal.Footer>
                       <Button variant="secondary" onClick={this.closeModal}>
                      Fermer
                    </Button>
                    <Button variant="primary" type="submit">Confimer</Button>
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

export default ModaleC;
