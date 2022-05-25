import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';                       
import axios from "axios";
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import {Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";
 import Bydep from "../charts/bydep";
 import Bydep_ret from "../charts/bydep_ret";
 import RetardUsine from "../charts/retardUsine";
 import ChartsClotureTot from "../charts/TauxClotureTot";
 import Cnq from "../charts/cnq";
 import Ppm1 from "../charts/ppm1";
 import Ppm2 from "../charts/ppm2";
 import Ppm3 from "../charts/ppm3";
 import Ppm4 from "../charts/ppm4";

 import ByUser from "../charts/byres";
 import ApexChart1 from "../charts/global";


 
// import "react-datepicker/dist/react-datepicker.css";



export class Dashboard extends Component {
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  constructor(props){
    super(props)
    this.state = {
      etat1000:true,
      etat2000:true,
      etat3000:true,
      etat4000:true,


      connected:JSON.parse(localStorage.getItem("userData")),

      users:[],
      byuser:[],
      byuser1:[],

      user100:2,
      clot_not_finish:[],
      Qualité:[],
      RH:[],
      Production:[],
      Comptabilité_Finance:[],
      Indust:[],
      Logistique:[],
      Achat:[],
      Maintenance:[],


      dataHorizontal: [],


    }
  }
  
  

  handleChange100 = event => {
    this.setState({ 	user100: event.target.value });
    this.setState({byuser1 : this.state.byuser[this.state.user100]});

  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async componentDidMount(){

    await axios.get("http://localhost/newgen/blog/public/api/user")
    .then(res => {
        console.log(res)
        this.setState({users : res.data})
    }).catch( err => {
        console.log("errreeur ")
  
     })

    await axios.get("http://localhost/newgen/blog/public/api/bydep_retard")
    .then(res => {
        console.log(res)
        this.setState({clot_not_finish : res.data})
    }).catch( err => {
        console.log("errreeur ")
 
     })
if(  this.state.clot_not_finish.Qualité){
  this.setState({Qualité : this.state.clot_not_finish.Qualité });
}
if(this.state.clot_not_finish.Production){
  this.setState({Production : this.state.clot_not_finish.Production });

}if(this.state.clot_not_finish.RH){
  this.setState({RH : this.state.clot_not_finish.RH });

}if(this.state.clot_not_finish.Comptabilité_Finance){
  this.setState({Comptabilité_Finance : this.state.clot_not_finish.Comptabilité_Finance });
}
if(this.state.clot_not_finish.Maintenance){
  this.setState({Maintenance : this.state.clot_not_finish.Maintenance });
}
if(this.state.clot_not_finish.Indust){
  this.setState({Indust : this.state.clot_not_finish.Indust });
}
if(this.state.clot_not_finish.Logistique){
  this.setState({Logistique : this.state.clot_not_finish.Logistique });
}
if(this.state.clot_not_finish.Achat){
  this.setState({Achat : this.state.clot_not_finish.Achat });
}
  
this.setState({ 

dataHorizontal:  {
  labels: ['Qualité', 'Maintenance', 'Production', 'Indust', 'Logistique', 'Comptabilité & Finance', 'RH','Achat'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [this.state.Qualité.length,
        this.state.Maintenance.length,
        this.state.Production.length, 
        this.state.Indust.length,
         this.state.Logistique.length, 
         this.state.Comptabilité_Finance.length,
          this.state.RH.length,
          this.state.Achat.length],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(201, 203, 207, 1)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  ]
}
  });

    
if(this.state.connected[0].role != "user"  ){
        this.setState({etat1000 : false})
    }
    if(this.state.connected[0].zone == null ){
  
      this.setState({etat1000 : false})
      this.setState({etat2000 : false})
      this.setState({etat3000 : false})

      this.setState({etat4000 : false})
      
          }
          if(this.state.connected[0].zone == "p1_p2" ){
           
            this.setState({etat2000 : false})
            this.setState({etat3000 : true})
    
            this.setState({etat4000 : true})
                }
                if(this.state.connected[0].zone == "P3" ){
              
                  
                  this.setState({etat2000 : true})
                  this.setState({etat3000 : false})
          
                  this.setState({etat4000 : true})
                      }
                     
               
                    }
  render () {
    return (
      <div>
    
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <ApexChart1 hidden={this.state.etat1000}/>
        <div className="row">
        <div className="col-md-6" hidden={this.state.etat1000}>
</div>
        <div className="col-md-6" hidden={this.state.etat1000}>      
</div>

        </div>
<br/>
        <div className="">

              <div className="">
        <div className="stretch-card grid-margin" hidden={this.state.etat1000}>
       <Bydep_ret/> 
     

    
          </div>
          <div className="">
        <div className="stretch-card grid-margin" hidden={this.state.etat1000}>
       <RetardUsine/> 
          </div>
      
    
          </div>
          </div>
          
          </div>
 
<ByUser/>


<div  hidden= {this.state.etat1000}>
<br></br>


<Cnq/>

  </div>
  <div  hidden= {this.state.etat1000}>
<br></br>


<Ppm4/>

  </div>
  <br></br>
  <div className="row" >
  <div className="col-md-4" hidden={this.state.etat4000} >  <Ppm1  />
</div>
  <div className="col-md-4" hidden={this.state.etat2000}>  <Ppm2  />
</div>
  <div className="col-md-4" hidden={this.state.etat3000} >  < Ppm3 />
</div>


  </div>


      </div> 
    );
  }
}

export default Dashboard;