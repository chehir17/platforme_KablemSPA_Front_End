import React from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Form, InputGroupText } from 'reactstrap';
//import Widget from '../../components/Widget';
import axios from "axios";
import emailjs from "emailjs-com";


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

    emailjs.sendForm('service_lj2gmya520000', 'temlkkplate_va7am88', e.target, 'user_BPhhFaPxD8K1CHUXr8meB2R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    render() {

        return (
            <div >
                  <div className="card"  >
        <div className="card-header" style={{backgroundColor:'#3c4043', color:'#FFFFFF',fontWeight:900  }}>Nauveau Message</div>
            <div className="container" style={{width:400}}>
                <b> Cette fonctionalité n'est pas disponible </b>
            <form >
                <br/>
                    <div className="col-sm-12" style={{marginLeft:20}}>
                        <div >
                            <label>nom de recevoir </label>
                            
                            <input disabled type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div >
                        <label>A </label>

                            <input  disabled type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div >
                        <label>Objet </label>

                            <input disabled type="text" className="form-control" placeholder="Subject" name="from_name"/>
                        </div>
                        <div >
                        <label>message </label>

                            <textarea disabled className="form-control" id="" cols="30" rows="8" placeholder="Your message"  name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input disabled type="submit" className="btn btn-info" value="Send Message"></input>
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

