import React, { Component } from 'react'
import { Button, Modal,Form,Container,Row,Col,} from 'react-bootstrap';
import { Dropdown ,Toast} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import axios from "axios";
import AddNotif from "./addNotif";


export class AfficheNotif extends Component {
state={
 Notfs:[],
 visibility:1,
 connected:JSON.parse(localStorage.getItem("userData")),
etat:true
};


async componentDidMount(){
  //get Users
  if (this.state.connected != null ) {

   await axios.get("http://localhost/newgen/blog/public/api/addNotif/"+this.state.connected[0].id_user)
   .then(res => {
       console.log(res)
       this.setState({Notfs : res.data})
   }).catch( err => {
       console.log("errreeur ")
 
    })
      
    
    if (this.state.connected[0].role == "admin") {
      this.setState({etat:false });

    }
    else{
      this.setState({etat:true});
    }

  }

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
    console.log(this.state.connected);
    return (
      <div>
   <Dropdown alignRight >
                <Dropdown.Toggle  className="nav-link count-indicator">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ overflowY :"scroll ", scrollbarWidth: "thin", height: 500  , width:300 }} className="dropdown-menu navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0" ><Trans >Nouvelles Notifications </Trans></h6> 
                <div hidden={this.state.etat} style={{marginLeft:110}}>
                <AddNotif/> 

                </div>
                  { this.state.Notfs.map( Notf =>(  
                  <Dropdown.Item key={Notf.id_notif} className="dropdown-item preview-item " onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
      
                    </div>
                <Toast onClose={() => this.update(Notf.id_notif)}>
  <Toast.Header >
    <strong className="me-auto">{Notf.titre}</strong>
    <small style={{
      marginLeft:40
    }}>{Notf.created_at}</small>
  </Toast.Header>
  <Toast.Body>{Notf.notif_body}</Toast.Body>
</Toast>
                   
                      
                  </Dropdown.Item>
                     ))
                    }
                  <div className="dropdown-divider"></div>
             
                </Dropdown.Menu>
              </Dropdown>
      </div>
    )
  }
}

export default AfficheNotif;
