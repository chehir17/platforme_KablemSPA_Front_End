import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button, Modal,Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export class Lot extends Component {
  constructor(props){
    super(props)
    this.deleteExpense = this.deleteExpense.bind(this);
}

   state ={
      isOpen: false,
      lots1 : [],
      lots : [],

      articles:[],
      id_piece:'',
      client: '',
      p1_p2: '',
      p3: '',
      frns: '',
      month: '',
      
    };
/// get request 

  async componentDidMount(){

  await axios.get("http://localhost/newgen/blog/public/api/piece")
  .then(res => {
      console.log(res)
      this.setState({lots : res.data})
  }).catch( err => {
      console.log("errreeur ")
  })

}

// update request 

 openModal = async (lid) =>{
  this.setState({ isOpen: true , id_piece : lid});
  await axios.get("http://localhost/newgen/blog/public/api/piece/"+lid)
  .then(res => {
      console.log(res)
      this.setState({lots1 : res.data})
  }).catch( err => {
      console.log("errreeur ")
  })
  { this.state.lots1.map(  clients =>(
    this.setState({client : clients.client}),
    this.setState({p1_p2 : clients.p1_p2}),
    this.setState({p3: clients.p3}),
    this.setState({frns: clients.frns}),
    this.setState({month: clients.month})


       ))
         
    }
} 
closeModal = () => this.setState({ isOpen: false });
update = async () =>{
     await axios.put(`http://localhost/newgen/blog/public/api/lots/${this.state.id_lot}`, { 
       num_lot : this.state.num_lot,
       date_prod : this.state.date_prod,
       qnt_produit: this.state.qnt_produit,
    })
     .then(res => {
       if(res.status === 200){
        window.location.reload(false);

         this.openModal = false
       }
     }).catch(err => console.log(err))
   }
       /// *** /////

  deleteExpense(id) {
    axios.delete('http://localhost/newgen/blog/public/api/lots/'+id)
    .then((res) => {
      console.log("ereeur")
    }).catch((e) =>{
      console.log(e)
    })
}

// post request 

handleChange = event => {
  this.setState({ client: event.target.value });
}
handleChange1 = event => {
  this.setState({ p1_p2: event.target.value });
}
handleChange2 = event => {
  this.setState({ p3: event.target.value });
}
handleChange20 = event => {
  this.setState({ frns: event.target.value });
}
handleChange3 = event => {
  this.setState({ month: event.target.value });
}
handleSubmit = async (event) => {
  event.preventDefault();

  const article = {
    client: this.state.client,
    p1_p2: this.state.p1_p2,
    p3: this.state.p3,
    month: this.state.month
  };
  
 console.log(article);
 
  await axios.post(`http://localhost/newgen/blog/public/api/piece`, {  
    client: this.state.client,
    p1_p2: this.state.p1_p2,
    p3: this.state.p3,
    frns: this.state.frns,
    month: this.state.month

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
          <h3 className="page-title"> Lots </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">lot</li>
            </ol>
          </nav>
        </div>
        <Container>
         <Row>   
           <Col>     
            <Card >
              <CardContent>
                <h4 className="card-title">Liste piece livré</h4>
                <br/>              
                <br/>  
                <div className="table-responsive" >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Piéce livré client </th>
                        <th> Piéce livré P1_P2 </th>
                        <th> Piéce livré P3 </th>
                        <th> Piéce livré Fournisseur </th>
                        <th>  mois </th>

                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.lots.map( lot =>(
                      <tr key={lot.id_lot}>
                        <td className="py-1">{lot.id_lot}</td>
                        <td>{lot.client} </td>
                        <td>{lot.p1_p2}</td>
                        <td>{lot.p3}</td>
                        <td>{lot.frns}</td>
                        <td>{lot.month}</td>

                        <td>
                           
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal(lot.id_piece)} >
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
            <h4 className="card-title">Ajouter piece livré</h4>
              <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="col-sm-12">
                  <Form.Group >
                    <label className="col-sm-12 col-form-label">Client </label>
                    <TextField 
                    required
                    type="number"
                    id="outlined-basic" 
                    variant="outlined"
                    size="small"
                    name="num_lot"
                    onChange={this.handleChange} />
                  </Form.Group>
                  </div>
                  <div className="col-sm-12">
                 <Form.Group>
                <label className="col-sm-12 col-form-label">p1_p2</label>
                <TextField 
                required
                type="number"
                id="outlined-basic" 
                variant="outlined"
                size="small"
                style={{ width: "220px" }} 
                name="date_prod"
                onChange={this.handleChange1} />
               </Form.Group>
               </div>
               <div className="col-sm-12">
               <label className="col-sm-12 col-form-label">p3</label>
               <Form.Group controlId="exampleForm.SelectCustom">
               <TextField 
                required
                type="number"
                id="outlined-basic" 
                variant="outlined"
                size="small"
                name="qnt_produit"
                onChange={this.handleChange2} />
              </Form.Group>
                 </div>
                 <div className="col-sm-12">
               <label className="col-sm-12 col-form-label">Fournisseur</label>
               <Form.Group controlId="exampleForm.SelectCustom">
               <TextField 
                required
                type="number"
                id="outlined-basic" 
                variant="outlined"
                size="small"
                name="qnt_produit"
                onChange={this.handleChange20} />
              </Form.Group>
                 </div>

                 <div className="col-sm-12">
                 <Form.Group controlId="exampleForm.SelectCustom">

                         <label className="form-check-label">month</label>
                           <select  className="form-control" name="ref" onChange={this.handleChange3} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
                           <option  value=""></option>
                            <option  value="01">01</option>
                            <option  value="02">02</option>
                            <option  value="03">03</option>
                            <option  value="04">04</option>
                            <option  value="05">05</option>
                            <option  value="06">06</option>
                            <option  value="07">07</option>
                            <option  value="08">08</option>
                            <option  value="09">09</option>
                            <option  value="10">10</option>
                            <option  value="11">11</option>
                            <option  value="12">12</option>

                                                </select>
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
            <Modal.Title >Modifier Article article </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          
            <div className="col-12 grid-margin">
               <div className="card">
                 <div className="card-body">
                   <form className="form-sample">
                      <div className="row">
                          <div className="col-md-12">
                             <Form.Group >
                                <label className="col-sm-12 col-form-label">client</label>
                                <TextField 
                                required
                                type="number"
                                id="outlined-basic" 
                                variant="outlined"
                                name="num_lot"
                                size="small"
                                onChange={this.handleChange}
                                value={this.state.client}                                
                                />
                              </Form.Group>
                            </div>
                            <div className="col-sm-12">
                            <Form.Group>
                                <label className="col-sm-12 col-form-label">p1_p2</label>
                                <TextField 
                                required
                                type="number"
                                id="outlined-basic" 
                                variant="outlined"
                                name="date_prod"
                                size="small"
                                onChange={this.handleChange1}
                                value={this.state.p1_p2}/>
                              </Form.Group>
                            </div>
                            <div className="col-sm-12">
                            <Form.Group>
                                <label className="col-sm-12 col-form-label">p3 </label>
                                <TextField 
                                required
                                type="number"
                                id="outlined-basic" 
                                variant="outlined"
                                size="small"
                                name="qnt_produit"
                                onChange={this.handleChange2}
                                value={this.state.p3}/>
                              </Form.Group>
                              </div>

                              <div className="col-sm-12">
                            <Form.Group>
                                <label className="col-sm-12 col-form-label">Fournisseur </label>
                                <TextField 
                                required
                                type="number"
                                id="outlined-basic" 
                                variant="outlined"
                                size="small"
                                name="qnt_produit"
                                onChange={this.handleChange20}
                                value={this.state.frns}/>
                              </Form.Group>
                              </div>
                              <div className="col-sm-12">

                              <Form.Group controlId="exampleForm.SelectCustom">

<label className="form-check-label">month</label>
  <select  className="form-control"  value={this.state.month}
 name="ref" onChange={this.handleChange3} size="sm"  style={{backgroundColor: "#ecf2f8"}} >
  <option  value=""></option>
   <option  value="01">1</option>
   <option  value="02">2</option>
   <option  value="03">3</option>
   <option  value="04">4</option>
   <option  value="05">5</option>
   <option  value="06">6</option>
   <option  value="07">7</option>
   <option  value="08">8</option>
   <option  value="09">9</option>
   <option  value="10">10</option>
   <option  value="11">11</option>
   <option  value="12">12</option>

                       </select>
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

export default Lot;
