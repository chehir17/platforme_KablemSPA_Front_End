import React,{Component}  from 'react';
import axios from "axios";




export class Example extends Component {

  state = {
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
    
};




  async componentDidMount(){
  await axios.get("http://localhost/applay/public/api/plan_action/")
  .then(res => {
      console.log(res)
      this.setState({posts : res.data})
  }).catch( err => {
      console.log("errreeur ")

   })
  
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

    const user = {
    };
    
   console.log(user);
   
    await axios.post(`http://localhost/applay/public/api/users`, {  
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      matricul: this.state.matricul,
      nature: this.state.nature,
      departement: this.state.departement,
      role: this.state.role
    })
      .then(res => {

        console.log(res);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
   render(){
    return (

       <>

          <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body"  >
      { this.state.posts.map( post =>(

                 <div className="form-group" key={post.id} >  
                                              </div>   

                       ))}
      <form className="form-sample" >

                        <input   style={{ width: "90px" }}  type="text"name="depart" onChange={this.handleChange} size="sm"  />

                       <input style={{ width: "90px" }}  type="text"name="depart" onChange={this.handleChange1} size="sm"   />
                        <input style={{ width: "90px" }}  type="text"name="depart" onChange={this.handleChange2} size="sm"   />
                        <input style={{ width: "90px" }} value=" {post.origine} " type="text"name="depart" onChange={this.handleChange3} size="sm"   />
                        <input style={{ width: "90px" }} value=" {post.prob} " type="text"name="depart" onChange={this.handleChange4} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.cause}" type="text"name="depart" onChange={this.handleChange5} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.action}" type="text"name="depart" onChange={this.handleChange6} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.responsable}" type="text"name="depart" onChange={this.handleChange7} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.support}" type="text"name="depart" onChange={this.handleChange8} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.date_debut}" type="text"name="depart" onChange={this.handleChange9} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.date_cloture}" type="text"name="depart" onChange={this.handleChange10} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.status}" type="text"name="depart" onChange={this.handleChange11} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.pilote}" type="text"name="depart" onChange={this.handleChange11} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.contol_effic}" type="text"name="depart" onChange={this.handleChange12} size="sm"   />
                       <input style={{ width: "90px" }} value=" {post.doc_ajt_util}" type="text"name="depart" onChange={this.handleChange13} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.progress}" type="text"name="depart" onChange={this.handleChange17} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.annul}" type="text"name="depart" onChange={this.handleChange14} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.rapport_n_c_id}" type="text"name="depart" onChange={this.handleChange15} size="sm"   />
                        <input style={{ width: "90px" }} value="{post.fich__d_m_p_p_id}" type="text"name="depart" onChange={this.handleChange16} size="sm"   />

                   
                      
                       
                    
     
      </form>
     
    </div>
  </div>
</div>





   </>    
 );
  }
}
export default Example;

  /*

  */