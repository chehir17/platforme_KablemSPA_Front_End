import React, { Component } from 'react'
import axios from "axios";
import { ButtonGroup,ButtonToolbar,FormControl } from 'react-bootstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


export class BasicTable extends Component {
  constructor(props){
    super(props)
    this.state ={

      etat:true,
        posts : [],

        depart:'',
        zone:'',
        origine:'',
        prob:'',
        cause:'',
        support:'',
        date_debut:'',
        date_cloture:'',
        status:'',
        pilote:'',
        action:'',
        responsable:'',
        contol_effic:'',
        doc_ajt_util:'',
        progress:'',
        annul:'',
        rapport_n_c_id:'',
        fich__d_m_p_p_id:'',
    }
}



handleChange = event => {
  this.setState({ 	depart: event.target.value });
}
handleChange1 = event => {
  this.setState({ zone: event.target.value });
}
handleChange2 = event => {
  this.setState({ origine: event.target.value });
}
handleChange3 = event => {
  this.setState({prob: event.target.value });
}
handleChange4 = event => {
  this.setState({ cause: event.target.value });
}
handleChange5 = event => {
  this.setState({ support: event.target.value });
}
handleChange6 = event => {
  this.setState({ date_debut: event.target.value });
}
handleChange7 = event => {
  this.setState({ date_cloture: event.target.value });
}
handleChange8 = event => {
  this.setState({ 		status: event.target.value });
}
handleChange9 = event => {
  this.setState({ 	pilote: event.target.value });
}
handleChange10 = event => {
  this.setState({ 	action: event.target.value });
}
handleChange11= event => {
  this.setState({	responsable: event.target.value });
}
handleChange12= event => {
  this.setState({ 	contol_effic: event.target.value });
}
handleChange13= event => {
  this.setState({ doc_ajt_util: event.target.value });
}
handleChange17= event => {
  this.setState({ 	progress: event.target.value });
}
handleChange14= event => {
  this.setState({ 	annul: event.target.value });
}
handleChange15= event => {
  this.setState({ rapport_n_c_id: event.target.value });
}
handleChange16= event => {
  this.setState({ fich__d_m_p_p_id: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();

  
  


 
  await axios.post(`http://localhost/applay/public/api/plan_action`, {  
    depart:this.state.depart,
    zone:this.state.zone,
    origine:this.state.origine,
    prob:this.state.prob,
    cause:this.state.cause,
    support:this.state.support,
    date_debut:this.state.date_debut,
    date_cloture:this.state.date_cloture,
    status:this.state.status,
    pilote:this.state.pilote,
    action:this.state.action,
    responsable:this.state.responsable,
    contol_effic:this.state.contol_effic,
    doc_ajt_util:this.state.doc_ajt_util,
    progress:this.state.progress,
    annul:this.state.annul,
    rapport_n_c_id:this.state.rapport_n_c_id,
    fich__d_m_p_p_id:this.state.fich__d_m_p_p_id


  })
    .then(res => {

      console.log(res);
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
    });
}











  openadd = () => this.setState({ etat: false  });
  closeadd = () => this.setState({  etat: true   });

  
async componentDidMount(){
    await axios.get("http://localhost/applay/public/api/plan_action")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
    
}

deleteExpense(id) {
  axios.delete('http://localhost/applay/public/api/plan_action/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  })
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
          <h3 className="page-title"> plan d'actions </h3>
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
                <h4 className="card-title">List des Plan d'actions</h4>
                {this.state.etat}
               <br/>               <br/>
               <form onSubmit={this.handleSubmit}>
               <ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
  <button type="button" className="btn btn-inverse-info btn-icon" onClick={this.openadd}>
                        <i className="mdi mdi-plus"></i>
                      </button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
    
  <button type="button" className="btn btn-inverse-danger btn-icon" hidden={this.state.etat} onClick={this.closeadd}>
                        <i className="mdi mdi-close"></i>
                      </button>
  </ButtonGroup>
  
  <ButtonGroup aria-label="Third group">
    
  
<button className="mr-2" type="submit" className="btn btn-inverse-success btn-icon" hidden={this.state.etat}>
<i className="mdi mdi-file-check btn-icon-prepend"></i>          
            </button>

  </ButtonGroup>
 
  <ButtonGroup aria-label="Third group">
    
  

    <FormControl className="mr-2" type="text" 
id="myInput"
size="sm"
onKeyUp={() => this.myFunction()} 
placeholder="cherhcer par idantifiant"
title="Type in a name"/>
</ButtonGroup>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="btn btn-inverse-success btn-icon"
        table="myTable"
        filename="test"
        sheet="tablexls"
        buttonText="csv"
      >
        
      </ReactHTMLTableToExcel>
</ButtonToolbar>

                
                <div className="table-responsive" >
             

                  <table className="table table-sm-bordered hovered" id="myTable"
                  size="sm"
                  >
                    <thead>
                      <tr >
                      <th> Id </th>
                        <th> Departement </th>
                        <th> Zone </th>
                        <th> Origine </th>
                        <th> Probléme </th>
                        <th> Cause </th>
                        <th> Action </th>
                        <th> date de Début  </th>
                        <th> Date de cloture </th>
                        <th> Responsable </th>
                        <th> Support  </th>
                        <th> Status </th>
                        <th> Pilote </th>
                        <th> Controle d'efficacité </th>
                        <th> Documents ajoutés à utiliser </th>
                        <th> Progresse </th>
                        <th> Annuler </th>
                        <th> ID_NonConformité </th>
                        <th> ID_DMPP </th>
                        <th> Action </th>



                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr hidden={this.state.etat} >
                      <td className="py1">
                    
                      </td>
                      <td><input style={{ width: "90px" }}type="text"name="depart" onChange={this.handleChange} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" zone" onChange={this.handleChange1} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="origine" onChange={this.handleChange2} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="prob" onChange={this.handleChange3} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="cause" onChange={this.handleChange4} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" support" onChange={this.handleChange5} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="date"name="date_debut" onChange={this.handleChange6} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="date"name="date_cloture" onChange={this.handleChange7} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" status" onChange={this.handleChange8} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="pilote" onChange={this.handleChange9} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="action" onChange={this.handleChange10} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="responsable" onChange={this.handleChange11} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="contol_effic" onChange={this.handleChange12} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="doc_ajt_util" onChange={this.handleChange13} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="progress" onChange={this.handleChange17} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="annul" onChange={this.handleChange14} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="rapport_n_c_id" onChange={this.handleChange15} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="fich__d_m_p_p_id" onChange={this.handleChange16} size="sm"   /></td>
                      <td> </td>
                      </tr>
                    { this.state.posts.map( post =>(
                      <tr key={post.id}>
                        <td className="py-1">
                        {post.id}
                        </td>
                        <td>{post.depart} </td>
                        <td>{post.zone}</td>
                        <td> {post.origine} </td>
                        <td> {post.prob} </td>
                        <td>{post.cause}</td>
                        <td>{post.action}</td>
                        <td>{post.responsable}</td>
                        <td>{post.support}</td>
                        <td>{post.date_debut}</td>
                        <td>{post.date_cloture}</td>
                        <td>{post.status}</td>
                        <td>{post.pilote}</td>
                        <td>{post.contol_effic}</td>
                        <td>{post.doc_ajt_util}</td>
                        <td>{post.progress}</td>
                        <td>{post.annul}</td>
                        <td>{post.rapport_n_c_id}</td>
                        <td>{post.fich__d_m_p_p_id}</td>

                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(post.id)}>
                        <i className="mdi mdi-delete" ></i>
                      </button>    
                      <a type="button" className="btn btn-inverse-info btn-icon" href={"../edit/edit_pa/"+post.id}>
                        <i className="mdi mdi-tune-vertical"></i>
                      </a>    
                        </td>

                      </tr>
                       ))
                      }
                    </tbody>
                  </table>
                 

                </div>
                </form>
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
      </div>
    )
  }
}

export default BasicTable
