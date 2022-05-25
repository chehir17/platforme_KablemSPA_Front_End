import React, { Component } from 'react';
import { Dropdown,Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Redirect } from "react-router-dom";
import AddNotif from '../notif/addNotif';
import ShowNotif from '../notif/showNotif'
import Mail from '../general-pages/BlankPage copy'
import axios from "axios";

class Navbar extends Component {

  state = {
    navigate: false,
    connected:JSON.parse(localStorage.getItem("userData")),
    notif:[],
body : '',
titre : '',
time : '',
nom :'',
etat:true,
  };

  async componentDidMount(){

 if (this.state.connected != null) {
   this.setState({nom:this.state.connected[0].first_name+" "+this.state.connected[0].last_name})
   if(  this.state.connected[0].role == "admin")
   {
     this.setState({etat:false})
   }
    await axios.get("http://localhost/newgen/blog/public/api/addNotif/"+this.state.connected.id_user)
    .then(res => {
        console.log(res)
        this.setState({notif : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
     { this.state.notif.map( not =>( 
this.setState({body:not.notif_body}),
this.setState({titre:not.titre}),
this.setState({time:not.created_at})


      ))}
    }
    else{
      return <Redirect to="../user-pages/login-1" />;

    }

    }





  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }

  render () {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="../user-pages/login-1" push={true} />;
   
    }


    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.png')} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/favicon.png')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
               
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link">
                  <div className="nav-profile-img">
                    <img src={require("../../assets/images/faces/face1.jpg")} alt="user"/>
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black"><Trans>{this.state.nom}</Trans></p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
            
                  </Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown alignRight  hidden ={this.state.etat}> 
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count-symbol bg-warning"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="preview-list navbar-dropdown">
              
             
               <Mail/>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
            <ShowNotif />
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="nav-link" href="" onClick={ this.onLogoutHandler}>
                <i className="mdi mdi-power"></i>
              </a>
            </li>
           
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
