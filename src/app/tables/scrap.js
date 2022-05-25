import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonGroup,ButtonToolbar } from 'react-bootstrap';

export class BasicTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      etat:true,
        posts : [],

        code_produit:'',
        num_lot_date:'',
        qte_lot:'',
        nr_fnc:'',
        sujet_non_conformite:'',
        qte_nc:'',
        process:'',
        nom_client:'',
        occurance_defaut:'',
        ac_immed:'',
        date_ac_immed:'',
        date_verf_ac_immed:'',
        ac_ap:'',
        num_ac_ap:'',
        photo_ok:'',
        photo_nok:'',
        photo_idant:'',
        user_id:'',
        article_id:''

    }
}



handleChange = event => {
  this.setState({ 	code_produit: event.target.value });
}
handleChange1 = event => {
  this.setState({   num_lot_date: event.target.value });
}
handleChange2 = event => {
  this.setState({   qte_lot: event.target.value });
}
handleChange3 = event => {
  this.setState({nr_fnc: event.target.value });
}
handleChange4 = event => {
  this.setState({ sujet_non_conformite: event.target.value });
}
handleChange5 = event => {
  this.setState({ qte_nc: event.target.value });
}
handleChange6 = event => {
  this.setState({ process: event.target.value });
}
handleChange7 = event => {
  this.setState({ nom_client: event.target.value });
}
handleChange8 = event => {
  this.setState({occurance_defaut: event.target.value });
}
handleChange9 = event => {
  this.setState({ 	ac_immed: event.target.value });
}
handleChange10 = event => {
  this.setState({ 	date_ac_immed: event.target.value });
}
handleChange11= event => {
  this.setState({	date_verf_ac_immed: event.target.value });
}
handleChange18= event => {
  this.setState({ ac_ap: event.target.value });
}
handleChange12= event => {
  this.setState({ 	num_ac_ap: event.target.value });
}
handleChange13= event => {
  this.setState({ photo_ok: event.target.value });
}
handleChange14= event => {
  this.setState({ 	photo_nok: event.target.value });
}
handleChange15= event => {
  this.setState({ photo_idant: event.target.value });
}
handleChange16= event => {
  this.setState({ user_id: event.target.value });
}
handleChange17= event => {
  this.setState({ 	article_id: event.target.value });
}

handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    code_produit:this.state.code_produit,
    num_lot_date:this.state.num_lot_date,
    qte_lot:this.state.qte_lot,
    nr_fnc:this.state.nr_fnc,
    sujet_non_conformite:this.state.sujet_non_conformite,
    qte_nc:this.state.qte_nc,
    process:this.state.process,
    nom_client:this.state.nom_client,
    occurance_defaut:this.state.occurance_defaut,
    ac_immed:this.state.ac_immed,
    date_ac_immed:this.state.date_ac_immed,
    date_verf_ac_immed:this.state.date_verf_ac_immed,
    ac_ap:this.state.ac_ap,
    num_ac_ap:this.state.num_ac_ap,
    photo_ok:this.state.photo_ok,
    photo_nok:this.state.photo_nok,
    photo_idant:this.state.photo_idant,
    user_id:this.state.user_id,
    article_id:this.state.article_id
  };
  
 console.log(user);
 
  await axios.post(`http://localhost/applay/public/api/fichnc`, {  
    code_produit:this.state.code_produit,
    num_lot_date:this.state.num_lot_date,
    qte_lot:this.state.qte_lot,
    nr_fnc:this.state.nr_fnc,
    sujet_non_conformite:this.state.sujet_non_conformite,
    qte_nc:this.state.qte_nc,
    process:this.state.process,
    nom_client:this.state.nom_client,
    occurance_defaut:this.state.occurance_defaut,
    ac_immed:this.state.ac_immed,
    date_ac_immed:this.state.date_ac_immed,
    date_verf_ac_immed:this.state.date_verf_ac_immed,
    ac_ap:this.state.ac_ap,
    num_ac_ap:this.state.num_ac_ap,
    photo_ok:this.state.photo_ok,
    photo_nok:this.state.photo_nok,
    photo_idant:this.state.photo_idant,
    user_id:this.state.user_id,
    article_id:this.state.article_id


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
    await axios.get("http://localhost/applay/public/api/fichnc1")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
    
}

deleteExpense(id) {
  axios.delete('http://localhost/applay/public/api/fichnc1/'+ id)
  .then((res) => {
    console.log('Expense removed deleted!')
  }).catch((error) => {
    console.log(error)
  })
}



  render() {
    return (

   

      <div>
        <div className="page-header">
          <h3 className="page-title"> Rapport nc </h3>
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
                <h4 className="card-title">List des Rapport NC</h4>
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
  <button type="submit" className="btn btn-inverse-success btn-icon" hidden={this.state.etat}>
<i className="mdi mdi-file-check btn-icon-prepend"></i>          
            </button>
  </ButtonGroup>
</ButtonToolbar>


                
                <div className="table-responsive" >
             

                  <table className="table table-sm-bordered hovered"
                  size="sm"
                  >
                    <thead>
                      <tr >
                        <th> Id </th>
                        <th> code_produit </th>
                        <th> num_lot_date </th>
                        <th> qte_lot </th>
                        <th> nr_fnc </th>
                        <th> sujet_non_conformite </th>
                        <th> qte_nc </th>
                        <th> process </th>
                        <th> nom_client </th>
                        <th>   occurance_defaut</th>
                        <th> ac_immed  </th>
                        <th>   date_ac_immed </th>
                        <th>    date_verf_ac_immed</th>
                        <th>          ac_ap </th>
                        <th>  num_ac_ap </th>
                        <th>          photo_ok </th>
                        <th> photo_nok </th>
                        <th> photo_idant </th>
                        <th> user_id </th>
                        <th> article_id </th>
                        <th> Action </th>



                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr hidden={this.state.etat} >
                      <td className="py1">
                    
                      </td>
                      <td><input style={{ width: "90px" }}type="text"name="code_produit" onChange={this.handleChange} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" num_lot_date" onChange={this.handleChange1} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="qte_lot" onChange={this.handleChange2} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="nr_fnc" onChange={this.handleChange3} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="sujet_non_conformite" onChange={this.handleChange4} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" qte_nc" onChange={this.handleChange5} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="date"name="process" onChange={this.handleChange6} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="date"name="nom_client" onChange={this.handleChange7} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name=" occurance_defaut" onChange={this.handleChange8} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="ac_immed" onChange={this.handleChange9} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="date_ac_immed" onChange={this.handleChange10} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="date_verf_ac_immed" onChange={this.handleChange11} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="ac_ap" onChange={this.handleChange18} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="num_ac_ap" onChange={this.handleChange12} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="photo_ok" onChange={this.handleChange13} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="photo_nok" onChange={this.handleChange14} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="photo_idant" onChange={this.handleChange15} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="user_id" onChange={this.handleChange16} size="sm"   /></td>
                      <td><input style={{ width: "90px" }} type="text"name="article_id" onChange={this.handleChange17} size="sm"   /></td>
                      
                      </tr>
                    { this.state.posts.map( post =>(
                      <tr key={post.id}>
                        <td className="py-1">
                        {post.id}
                        </td>
                        <td>{post.code_produit} </td>
                        <td>{post.num_lot_date}</td>
                        <td> {post.qte_lot} </td>
                        <td> {post.nr_fnc} </td>
                        <td>{post.sujet_non_conformite}</td>
                        <td>{post.qte_nc}</td>
                        <td>{post.process}</td>
                        <td>{post.nom_client}</td>
                        <td>{post.occurance_defaut}</td>
                        <td>{post.ac_immed}</td>
                        <td>{post.date_ac_immed}</td>
                        <td>{post.date_verf_ac_immed}</td>
                        <td>{post.ac_ap}</td>
                        <td>{post.num_ac_ap}</td>
                        <td>{post.photo_ok}</td>
                        <td>{post.photo_nok}</td>
                        <td>{post.photo_idant}</td>
                        <td>{post.user_id}</td>
                        <td>{post.article_id}</td>
                        <td>
                        <button type="button" className="btn btn-inverse-danger btn-icon" onClick={() => this.deleteExpense(post.id)}>
                        <i className="mdi mdi-delete" ></i>
                      </button>    
                      <Link type="button" className="btn btn-inverse-info btn-icon" to="../general-pages/add_planaction" params={{$id:post.id}}>
                        <i className="mdi mdi-tune-vertical"></i>
                      </Link>    
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
