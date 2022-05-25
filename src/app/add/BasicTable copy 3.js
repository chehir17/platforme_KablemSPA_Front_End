import React, { Component } from 'react'
import axios from "axios";

export class BasicTable1 extends Component {
  constructor(props){
    super(props)
    this.state ={
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
async componentDidMount(){
    await axios.get("http://localhost/applay/public/api/plan_action")
    .then(res => {
        console.log(res)
        this.setState({posts : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
    
}
//ajout




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

  const user = {
  };
  
 console.log(user);
 
  await axios.post(`http://localhost/applay/public/api/plan_action`, {  
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password,
    matricul: this.state.matricul,
    nature: this.state.nature,
    departement: this.state.departement,
    role: this.state.role,
    
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
    progress:this.state.progressthis,
    annul:this.state.annul,
    rapport_n_c_id:this.state.rapport_n_c_id,
    fich__d_m_p_p_id:this.state.fich__d_m_p_p_id,


  })
    .then(res => {

      console.log(res);
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
    });
}







  render() {
    return (

   

      
                  <table className="table table-sm-bordered ">
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Departement </th>
                        <th> Zone </th>
                        <th> Origine </th>
                        <th> Probléme </th>
                        <th> Cause </th>
                        <th> Action </th>
                        <th> Responsable </th>
                        <th> Support  </th>
                        <th> date de Début  </th>
                        <th> Date de cloture </th>
                        <th> Status </th>
                        <th> Pilote </th>
                        <th> Controle d'efficacité </th>
                        <th> Document ajouter a utiliser </th>
                        <th> Progresse </th>
                        <th> Annuler </th>
                        <th> ID_NonConformité </th>
                        <th> ID_DMPP </th>
                        <th> Action </th>



                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr >
                        <td className="py-1"></td>
                        <td><input type="text" size="sm"   /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                      

                      </tr>
                    
                    </tbody>
                  </table>
              
    )
  }
}

export default BasicTable1


