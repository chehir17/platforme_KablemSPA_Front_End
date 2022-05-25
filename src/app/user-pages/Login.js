import React, { Component } from 'react';
import { Form,Button,FormGroup, Label, Input } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import axios from "axios";
import background from "./mmp.jpg";
import swal from 'sweetalert';
import md5 from 'md5';
export class Login extends Component {



  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: "",
      isLoading: false,
      redirect: false,
      errMsgEmail: "",
      errMsgPwd: "",
      errMsg: "",
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };
/*
  handleChange = event => {
    this.setState({ 	email: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ password: event.target.value });
  }
*/

  onSignInHandler = () => {
    this.setState({ isLoading: false });
    axios.post("http://localhost/newgen/blog/public/api/user-login", {
        email: this.state.email,
    //    password: md5(this.state.password),
           password: this.state.password,

      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });      
        }
        if (
          response.data.status === "failed" &&
          response.data.success === undefined
        ) {
          this.setState({
            errMsgEmail: response.data.validation_error.email,
            errMsgPwd: response.data.validation_error.password,
          });
                swal({
        title: "accés rejeter ",
        text: "Verifier votre email et mot de passe ",
        icon: "error",
    });
          setTimeout(() => {
            this.setState({ errMsgEmail: "", errMsgPwd: "" });
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          swal({
            title: "accés rejeter ",
            text: "Verifier votre email et mot de passe ",
            icon: "error",
        });
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      return <Redirect to="/dashboard" />;
    }
    const isLoading = this.state.isLoading;
    return (
      <div style={{ 
        backgroundImage: `url(${background})` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}>
        <div className="d-flex align-items-center auth px-0"  style={{opacity:0.92}}>
          <div className="row w-100 mx-0">
            <div className="col-lg-9 mx-auto">
              <div className="card">
              
              <div className="row">
<div className="col-md-5 ">
<div className="card-body">
<br/>
<br/>
                <img src={require('../../assets/images/logo.png')}  style ={{ width:450 , height:150 }}alt="logo" />
                <br/>
<br/>
                <h4 className="font-weight-dark">Enregistrer pour continuer</h4>
                <small className="font-weight-light">
Si vous avez pas un compte veuillez contacter l'adminstration .

                </small>

                </div>
</div>
<div className="col-md-7" >

<div className="auth-form-light text-left py-5 px-4 px-sm-5">
               
             
               <Form className="pt-3">
               <Form.Label> Email</Form.Label> 

                 <Form.Group className="d-flex search-field">
                   <Form.Control  type="text" 
                   placeholder="Username"
                 name="email"
                   value={this.state.email}
                   onChange={this.onChangehandler}
                   className="h-auto" />

              <span className="text-danger">{this.state.msg}</span>
           <span className="text-danger">{this.state.errMsgEmail}</span>

                 </Form.Group>
                 <Form.Label> Mot de passe </Form.Label> 

                 <Form.Group className="d-flex search-field">
                   <Form.Control 
                   type="password"
                    placeholder="Password" 
                    name="password"
                    value={this.state.password}
                     className="h-auto"
                    
                     onChange={this.onChangehandler}
                     />
                      <span className="text-danger">{this.state.errMsgPwd}</span>

                 </Form.Group>
                 <div className="mt-3">
                 <Button
           className="text-center mb-4"
           color="success"
           onClick={this.onSignInHandler}
         >
           Valider
           {isLoading ? (
             <span
               className="spinner-border spinner-border-sm ml-5"
               role="status"
               aria-hidden="true"
             ></span>
           ) : (
             <span></span>
           )}
         </Button>              
             </div>
                 <div className="my-2 d-flex justify-content-between align-items-center">
                 
                 </div>
                 <div className="mb-2">
                
                 </div>
                
               </Form>
             </div>

</div>

              </div>
        
            </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login
