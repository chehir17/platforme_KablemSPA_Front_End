import React, { Component } from 'react'
import axios from "axios";
import ModaleA from '../modal/modaleArticle';
import { Button, Modal,Form,FormControl} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';


export class Article extends Component {

  constructor(props){
    super(props)
    this.state ={
        articles : [],
        isOpen: false

    }
    this.deleteExpense = this.deleteExpense.bind(this);
}
 

  async componentDidMount(){
    await axios.get("http://localhost/newgen/blog/public/api/article")
    .then(res => {
        console.log(res)
        this.setState({articles : res.data})
    }).catch( err => {
        console.log("errreeur ")

    }) 
}

  deleteExpense(id) {
    axios.delete('http://localhost/newgen/blog/public/api/article/'+id)
    .then((res) => {
      console.log("ereeur")
    }).catch((e) =>{
      console.log(e)
    })
}

openModal1 = () => this.setState({ isOpen: true });
closeModal1 = () => this.setState({ isOpen: false });
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
          <h3 className="page-title"> articles </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Liste des Articles</h4>
                <ModaleA />
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
                        <th> Code Article </th>
                        <th> Nom Article </th>
                        <th> N° Lot </th>
                        <th> Date Production</th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.articles.map( article =>(
                      <tr key={article.id}>
                        <td className="py-1">{article.id}</td>
                        <td>{article.code_artc} </td>
                        <td>{article.nom_artc}</td>
                        <td> {article.num_lot} </td>
                        <td> {article.date_prod} </td>
                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(article.id)}>
                        <i className="mdi mdi-delete"></i>
                      </button>    
                      <div className="btn btn-inverse-info btn-icon">
                      <Button 
                      variant="primary" 
                      className="btn btn-info btn-icon" 
                      onClick={this.openModal1} >
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
              </div>   
            </div> 
          </div>
        </div>     
        <Modal 
         show={this.state.isOpen}
         onHide={this.closeModal1}
          backdrop="static"
          keyboard={false}
          size="md"
          className="model"
        >
          <Modal.Header closeButton >
            <Modal.Title >modifier Article </Modal.Title>
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
            <Button variant="secondary" onClick={this.closeModal1}>
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
      </div>
    )
  }
}

export default Article
