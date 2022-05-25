import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button, Modal,Form,FormControl} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


export class Client extends Component {

  constructor(props){
    super(props)
    this.deleteExpense = this.deleteExpense.bind(this);
}

   state ={
      isOpen: false,
      clients : [],
      clients1 : [],

      nom_client: '',
      ref: '',
      id_client: '',
      connected:JSON.parse(localStorage.getItem("userData")),

    };
/// get request 

  async componentDidMount(){
    if (this.state.connected != null && this.state.connected[0].role != "admin") {
      console.log("iam here");
      window.location = "../error-pages/error-500";   

    }
    await axios.get("http://localhost/newgen/blog/public/api/client")
    .then(res => {
        console.log(res)
        this.setState({clients : res.data})
    }).catch( err => {
        console.log("errreeur ")
    }) 
   }



// update request 
openModal =async (cid) =>{
  this.setState({ isOpen: true , id_client : cid});
  await axios.get("http://localhost/newgen/blog/public/api/client/"+cid)
  .then(res => {
      console.log(res)
      this.setState({clients1 : res.data})
  }).catch( err => {
      console.log("errreeur ")
  })
  { this.state.clients1.map(  client =>(
    this.setState({nom_client: client.nom_client}),
    this.setState({ref: client.ref})
       ))
         
    }
} 
closeModal = () => this.setState({ isOpen: false });

update = async () =>{
     await axios.put(`http://localhost/newgen/blog/public/api/client/${this.state.id_client}`, { 
       nom_client : this.state.nom_client,
       ref: this.state.ref })
     .then(res => {
       if(res.status === 200){
        window.location.reload(false);

         this.openModal = false
       }
     })
     .catch(err => console.log(err))

   }

   /// *** /////

  deleteExpense(id) {
    axios.delete('http://localhost/newgen/blog/public/api/client/'+id)
    .then((res) => {
      console.log("ereeur")
    }).catch((e) =>{
      console.log(e)
    })
}

// post request 

handleChange = event => {
  this.setState({ nom_client: event.target.value });
}
handleChange1 = event => {
  this.setState({ ref: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();

  const client = {
  };
  
 console.log(client);
 
  await axios.post(`http://localhost/newgen/blog/public/api/client`, {  
    nom_client: this.state.nom_client,
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
          <h3 className="page-title"> Clients </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <Container>
         <Row>   
           <Col>     
            <Card >
              <CardContent>
                <h4 className="card-title">Liste des Clients</h4>
                <br/>              
                <br/>  
                <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="myTable"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
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
                        <th> Nom de Client </th>
                        <th> Reférrence </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.clients.map( client =>(
                      <tr key={client.id_client}>
                        <td className="py-1">{client.id_client}</td>
                        <td>{client.nom_client} </td>
                        <td>{client.ref}</td>
                        <td>
                       
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal(client.id_client)} >
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
            <h4 className="card-title">Ajouter un Client</h4>
              <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="col-sm-12">
                  <Form.Group >
                    <label className="col-sm-12 col-form-label">Nom de Client</label>
                    <TextField 
                    required
                    type="text"
                    id="outlined-basic" 
                    label="Nom de client" 
                    variant="outlined"
                    size="small"
                    name="nom_client"
                    style={{ width: "300px" }} 
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
                style={{ width: "300px" }} 
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
          backdrop=""
          keyboard={false}
          size="md"
          className="model"
        >
          <Modal.Header closeButton >
            <Modal.Title > Modifier Client </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          
            <div className="col-12 grid-margin">
               <div className="card">
                 <div className="card-body">
                   <form className="form-sample">
                      <div className="row">
                          <div className="col-md-6">
                             <Form.Group >
                                <label className="col-sm-12 col-form-label">Nom de Client</label>
                                <TextField 
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="nom_client"
                                onChange={this.handleChange}
                                value={this.state.nom_client}
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
                                onChange={this.handleChange1}
                                value={this.state.ref}                                
                               />
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

export default Client
