import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

import axios from "axios";
import { MDBContainer } from 'mdbreact';


export class Ppm1 extends Component {
    constructor(props){
        super(props)
        this.state = {
        
          dataLine:[],
          users:[],
          value:[],
          month:[],
    
          cnq:[],
        
    
    
          dataHorizontal: [],
        }
    }
    
    async componentDidMount(){

 
        await axios.get("http://localhost/newgen/blog/public/api/ppm2")
        .then(res => {
            console.log(res)
            this.setState({cnq : res.data})
        }).catch( err => {
            console.log("errreeur ")
     
         })
    
           for (let i = 0; i < this.state.cnq.length; i++) {
            this.state.month[i] = this.state.cnq[i][1];
             this.state.value[i] = Math.round(this.state.cnq[i][0]);

           }

           
    this.setState({ 
      dataLine: {

        labels:this.state.month ,

        datasets: [
          {
            data: this.state.value,

            label: "Piéce par million P1 P2",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          
          }
        ]
      }
    }
 
    
    )}

  render() {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    return (
      <div className="card">
   

                <MDBContainer>
        <h3 className="mt-5">courbe de PPM P1 P2  </h3>
        <Bar data={this.state.dataLine} options={options} />
      </MDBContainer>
      </div>
    )
  }
}

export default Ppm1;