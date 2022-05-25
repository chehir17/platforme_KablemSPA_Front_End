import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';                       
import axios from "axios";
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import {Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";

export class Bydep extends Component {
    constructor(props){
        super(props)
        this.state = {
        
    
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
    
    async componentDidMount(){

 
        await axios.get("http://localhost/newgen/blog/public/api/bydep")
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
 
    
        }

  render() {
    return (
      <div className="card">
                            <div className="card-body">
                  <div className='card-title'> Action cloturé par departement(Done) </div>

            <MDBContainer>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
      </div>
      </div>

    )
  }
}

export default Bydep;
