import React  from 'react';
import { Button, Modal,Form} from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";



export default function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [matricul, setmatricul] = useState('');
    const [nature, setnature] = useState('');
    const [departement, setdepartement] = useState('');
    const [role, setrole] = useState('');
   // const [remember_token, setremember_token] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = { first_name, last_name, email,password,matricul,nature,departement,role };
  
      setIsPending(true);
  
       axios.post('api/users/', user)
      
      .then(() => {
        console.log("new blog added");
        setIsPending(false);
        //history.go(-1); //
        history.push('/blank-page');
      });
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Nouveau utilisateur
        </Button>
  
        <Modal 
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton >
            <Modal.Title >Nouveau </Modal.Title>
          </Modal.Header>
          <Modal.Body >
             

          <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <form className="form-sample" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Departement</label>
              <div className="col-sm-9">
              <Form.Control  
              type="text" 
              required
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
              />
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Zone</label>
              <div className="col-sm-9">
              <Form.Control 
              type="text"
              required
              value={last_name}
              onChange={(e) => setlast_name(e.target.value)} />
              </div>
            </Form.Group>
          </div>
        </div>
       
        <div className="row">
        <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Origine</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Probléme </label>
              <div className="col-sm-9">
              <Form.Control   
                type="text"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Cause </label>
              <div className="col-sm-9">
              <Form.Control
                 type="text"
                 required
                 value={matricul}
                 onChange={(e) => setmatricul(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label"> Support</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={nature}
                onChange={(e) => setnature(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Date de début</label>
              <div className="col-sm-9">
              <Form.Control 
                type="Date"
                required
                value={departement}
                onChange={(e) => setdepartement(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Date de cloture</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Status</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={departement}
                onChange={(e) => setdepartement(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Pilote</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Controle d'efficacité</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={departement}
                onChange={(e) => setdepartement(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Document ajouter a utiliser</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Progresse</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Annuler</label>
              <div className="col-sm-9">
              <Form.Control 
                type="text"
                required
                value={role}
                onChange={(e) => setrole(e.target.value)}/>
              </div>
            </Form.Group>
          </div>
        </div>
        <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          {!isPending && <Button variant="primary" type="submit">Confirmer</Button>}  
          {isPending && <Button variant="primary" disabled>Adding user...</Button>}  
      </form>
    </div>
  </div>
</div>





          </Modal.Body>
          <Modal.Footer>
 
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  /*

  */