import React from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
//import Widget from '../../components/Widget';
import axios from "axios";
import emailjs from "emailjs-com";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class mail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            posts:[],
        };
        
    }
    async componentDidMount(){
        await axios.get("http://localhost/newgen/blog/public/api/planActions")
        .then(res => {
            console.log(res)
            this.setState({posts : res.data})
        }).catch( err => {
            console.log("errreeur ")
     
         })
        }
    sendEmail = (e) => {
     
        e.preventDefault();

    emailjs.sendForm('service_lj2gmya', 'template_va7am88', e.target, 'user_BPFaPxD8K1CHUXr8meB2R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    render() {

        return (
            <div>
                  <div className="card"  >
        <div className="card-header" style={{backgroundColor:'#3c4043', color:'#FFFFFF',fontWeight:900 }}>Nauveau Message</div>
            <div className="container">
            <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="from_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input className="form-control" id="" cols="30" rows="8" placeholder="Your message"  name="message"></input>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        </div>

        );
    }
 
  

}

export default mail ;

