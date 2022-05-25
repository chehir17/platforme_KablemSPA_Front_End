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

     

export class Article extends Component {
  constructor(props){
    super(props)
    this.deleteExpense = this.deleteExpense.bind(this);
}

   state ={
      isOpen: false,
      articles : [],
      articles1 : [],

      id_article:'',
      code_artc: '',
      nom_artc: '',
      type: '',
      connected:JSON.parse(localStorage.getItem("userData")),

    };
/// get request 

  async componentDidMount(){

    if (this.state.connected != null && this.state.connected[0].role != "admin") {
      console.log("iam here");
      window.location = "../error-pages/error-500";   

    }
  await axios.get("http://localhost/newgen/blog/public/api/articles")
  .then(res => {
      console.log(res)
      this.setState({articles1 : res.data})
  }).catch( err => {
      console.log("errreeur ")
  })

}

// update request 
async openModal(aid) {
  this.setState({ isOpen: true , id_article : aid});

    await axios.get("http://localhost/newgen/blog/public/api/articles/"+aid)
    .then(res => {
        console.log(res)
        this.setState({articles : res.data})
    }).catch( err => {
        console.log("errreeur ")
    })
    { this.state.articles.map(  article =>(
      this.setState({code_artc: article.code_artc}),
      this.setState({nom_artc: article.nom_artc}),
      this.setState({type: article.type})
         ))
           
      }
  

} 
closeModal = () => this.setState({ isOpen: false });

update = async () =>{
     await axios.put(`http://localhost/newgen/blog/public/api/articles/${this.state.id_article}`, { 
       code_artc : this.state.code_artc,
       nom_artc : this.state.nom_artc,
       type: this.state.type,
    })
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
    axios.delete('http://localhost/newgen/blog/public/api/articles/'+id)
    .then((res) => {
      console.log("ereeur")
    }).catch((e) =>{
      console.log(e)
    })
}

// post request 

handleChange = event => {
  this.setState({ code_artc: event.target.value });
}
handleChange1 = event => {
  this.setState({ nom_artc: event.target.value });
}
handleChange2 = event => {
  this.setState({ type: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();

  const article = {
  };
  
 console.log(article);
 
  await axios.post(`http://localhost/newgen/blog/public/api/articles`, {  
    code_artc: this.state.code_artc,
    nom_artc: this.state.nom_artc,
    type: this.state.type
  })
    .then(res => {

      console.log(res);
      console.log(res.data);
      window.location.reload(false);

    })
    .catch(e => {
      console.log(event);
    });
    this.props.history.push('./article');

}
myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
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
          <h3 className="page-title"> Articles </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">articles</li>
            </ol>
          </nav>
        </div>
        <Container>
         <Row>   
           <Col>     
            <Card >
              <CardContent>
                <h4 className="card-title">Liste des Articles</h4>
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
placeholder="cherhcer par code article"
title="Type in a name"/>

                <div className="table-responsive" >
                  <table className="table table-striped" id="myTable">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> code Articles </th>
                        <th> Nom de Article </th>
                        <th> Type </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.articles1.map( article =>(
                      <tr key={article.id_article}>
                        <td className="py-1">{article.id_article}</td>
                        <td>{article.code_artc} </td>
                        <td>{article.nom_artc}</td>
                        <td>{article.type}</td>
                        <td>
                         
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon"
                      onClick={() => this.openModal(article.id_article)} >
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
            <h4 className="card-title">Ajouter un Article</h4>
              <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="col-sm-12">
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
                    style={{ width: "260px" }} 
                    onChange={this.handleChange} />
                  </Form.Group>
                  </div>
                  <div className="col-sm-12">
                 <Form.Group>
                <label className="col-sm-12 col-form-label">Nom de Article</label>
                <TextField 
                required
                type="text"
                id="outlined-basic" 
                label="Nom Article" 
                variant="outlined"
                size="small"
                name="nom_artc"
                style={{ width: "260px" }} 
                onChange={this.handleChange1} />
               </Form.Group>
               </div>
               <div className="col-sm-9">
               <label className="col-sm-9 col-form-label">Type</label>
               <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Control style={{ width: "260px" }} onChange={this.handleChange2} required as="select" name="type" size="md">
                  <option value="">Selecter L'etat de Produit</option>
                  <option value="Matière première">Matière première</option>
                  <option value="Produit Finale">Produit Finale</option>
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
            <Modal.Title >Modifier  Article </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          
            <div className="col-12 grid-margin">
               <div className="card">
                 <div className="card-body">
                   <form className="form-sample">
                      <div className="row">
                          <div className="col-md-6">
                             <Form.Group >
                                <label className="col-sm-12 col-form-label">Code Article</label>
                                <TextField 
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="code_artc"
                                value={this.state.code_artc}
                                onChange={this.handleChange}
                                />
                              </Form.Group>
                            </div>
                            <div className="col-md-6">
                            <Form.Group>
                                <label className="col-sm-12 col-form-label">Nom de Article</label>
                                <TextField 
                                required
                                type="text"
                                id="outlined-basic" 
                                variant="outlined"
                                name="nom_artc"
                                value={this.state.nom_artc}
                                onChange={this.handleChange1}
                                />
                              </Form.Group>
                            </div>
                            <div className="col-sm-9">
                            <label className="col-sm-12 col-form-label">Type</label>
                            <Form.Group controlId="exampleForm.SelectCustom">
                              <Form.Control   value={this.state.type} name="type" required as="select"   onChange={this.handleChange2} >
                                <option>Matière première</option>
                                <option>Produit Finale</option>
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

export default Article;
