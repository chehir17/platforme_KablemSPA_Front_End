import React, { Component } from 'react'
import axios from "axios";
import { Button, Modal,Form,FormControl } from 'react-bootstrap';
import {table} from 'react-bootstrap';
import { FormGroup } from '@material-ui/core';
export class BasicTable extends Component {
  state = {
    posts:[],
     isOpen: false,
     u_id : '',
     role: '',     
     highlevel: '',     
     connected:JSON.parse(localStorage.getItem("userData")),

  } 
  // constructor(props){
  //   super(props)

  //   this.deleteExpense = this.deleteExpense.bind(this);
  //   this.update = this.update(this)
  // }
  
  async componentDidMount(){

 this.loaddata()

  }
loaddata = async ()=>{

  await axios.get("http://localhost/newgen/blog/public/api/user")
  .then(res => {
      console.log(res)
      this.setState({posts : res.data})
  }).catch( err => {
      console.log("errreeur ")

   }) 
}


  update = async () =>{
    await axios.put(`http://localhost/newgen/blog/public/api/user/${this.state.u_id}`,
     { role : this.state.role,
      level : this.state.highlevel
    })
    .then(res => {
      if(res.status === 200){
        window.location.reload(false);

        this.loaddata()
        this.openModal = false
      }
    })
    .catch(err => console.log(err))
  }

  openModal = (isd) => {
    this.setState({ isOpen: true , u_id : isd  })
  }
  closeModal = () => this.setState({ isOpen: false });
  handleChange10 = event => {
    this.setState({ highlevel: event.target.value });
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

    console.log()
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div> 
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Tableaux des utilisateurs</h4>
               
                <a className="btn btn-info" href="../add/add_user"> Ajouter un utilisateur</a>    
                <br/>
                <br/>
                
 <FormControl className="mr-2" type="text" 
id="myInput"
size="sm"
onKeyUp={() => this.myFunction()} 
placeholder="cherhcer par Prenom"
title="Type in a name"/>

                <div className="table-responsive" >
                  <table className="table table-striped table-bordered table-sm"
                
                  id="myTable"
                  >
                    <thead>
                      <tr>
                        <th > Id </th>
                        <th> Prenom </th>
                        <th> Nom </th>
                        <th> Email </th>
                        <th> Matricule </th>

                        <th> Nature </th>
                        <th> Departement  </th>
                        <th> Role  </th>
                        <th> Level  </th>

                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    


                 



                    { this.state.posts.map( post =>(
                      <tr key={post.id}>
                        <td > {post.id_user} </td>
                        <td> {post.first_name} </td>
                        <td> {post.last_name} </td>
                        <td> {post.email} </td>
                        <td> {post.matricul} </td>
                        <td> {post.nature}</td>
                        <td> {post.id_departement}</td>
                         <td> {post.role}</td>
                         <td> {post.level}</td>

                        <td>
                        
                          <button type="button" className="btn btn-inverse-info btn-icon" onClick={() => this.openModal(post.id_user)}  >
                            <i className="mdi mdi-tune-vertical"></i>
                          </button>    
                        </td>
                      </tr>
                       ))}
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 grid-margin stretch-card">    
          </div>
          <div className="col-lg-12 grid-margin stretch-card">
          </div>
          <div className="col-lg-12 stretch-card">
          
          </div>
        </div>
        <Modal 
         show={this.state.isOpen}
         onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
          size="md"
        >
        <Modal.Header closeButton >
          <Modal.Title >Nouveau </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="">
                        <label className="col-sm-4 col-form-label">Role utilisateur </label>
                        <div className="col-sm-6">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" variant="info" className="form-check-input" name="role" onChange={(event) => this.setState({role : event.target.value})} defaultChecked value="user" />User 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>

                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="role" onChange={(event) => this.setState({role : event.target.value})} value="qualite" /> Qualité 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>

                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="role" onChange={(event) => this.setState({role : event.target.value})} value="admin" /> Admin 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
           <FormGroup>
           <div className="col-sm-5">

           <div className="form-check">
                          <label className="form-check-label">
                           Level
                          </label>

                            <select  className="form-control"name="highlevel" onChange={this.handleChange10}>
                            <option > level </option>

                            <option value="High level">High level </option>
                            <option value="meduim level">meduim level </option>

                            </select>
                          
                          </div>
                          </div>

           </FormGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={ () =>this.closeModal}>
              </Button>
              <Button variant="primary" onClick={()=>{ this.update()}}>Confimer</Button>
            </Modal.Footer>      
        </Modal.Body>
      </Modal>


    </div>
  )}
}

export default BasicTable
