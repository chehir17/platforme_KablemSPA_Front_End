import React, { Component } from 'react'
import { Button, Modal,Form,Container,Row,Col,Card,Text} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import axios from "axios";
import AddNotif from "./addNotif";


export class NotifDetails extends Component {
state={
 Notifs:[],
 notifp:[],
 notifd:[],
 notifa:[],
 notifall:[],
 etat:'',
 etat1:'',
 visibility:1,
 connected:JSON.parse(localStorage.getItem("userData")),
};


async componentDidMount(){
  if(this.state.connected == null){
   
    window.location = "../user-pages/login-1";   
    }
   
  //get Users
   await axios.get("http://localhost/newgen/blog/public/api/addNotif")
   .then(res => {
       console.log(res)
       this.setState({Notifs : res.data})
   }).catch( err => {
       console.log("errreeur ")
 
    });
    console.log(this.state.Notifs);
   

 
}
async update(id_not) {
  const pa ={
    visibility:this.state.visibility,
   

      };
      console.log(pa);
  await axios.put('http://localhost/newgen/blog/public/api/addNotif/'+id_not,
   { 
    visibility:this.state.visibility,
  

   })
  .then(res => {
   
   console.log(res);
  })
  .catch(err => console.log(err))
}



  render() {

    console.log(this.state.etat);
    console.log(this.state.etat1);
let dt =Date();
console.log(dt);

    for (let i = 0; i < this.state.Notifs.length; i++) {

     if(this.state.Notifs[i].visibility == 3 || this.state.Notifs[i].id_user == this.state.connected[0].id_user  ) {
        this.state.notifa[i] = this.state.Notifs[i];
    }
  
  
   
}

console.log(this.state.connected);
console.log(this.state.Notifs);
console.log(this.state.notifd);
console.log(this.state.notifa);
console.log(this.state.notifp);

    return (
      <div>
        <div className="row">
          <div className="col-md-8">         <h3>Historique des tache </h3>
</div>
          <div className="col-md-4">  <h3>Ajouter une notification  </h3></div>

        </div>

<Row>
<Col xs={8} md={8} >
<table className="table table-striped" size="sm">
  <thead>
  <th>Date</th>
  <th>tache</th>
  <th>VU</th>
  </thead>
  <tbody>
    { this.state.notifa.map( Notif =>( 
          <tr key={Notif.id_notif}>

      <td> {Notif.created_at}</td>
      <td> <h4>{Notif.titre} :</h4>{Notif.notif_body} </td>
      <td><Button type="submit" onClick={() => this.update(Notif.id_notif)}  className="btn btn-sm btn-info"><i className="mdi mdi-checkbox-marked-circle-outline"></i></Button>
      </td>
      </tr>

    ))}
  </tbody>
</table>
      </Col>
      <Col xs={4} md={4}> 
      <AddNotif/> 

      
      </Col>

      </Row>
        
       
      
      </div>
    )
  }
}

export default NotifDetails;
