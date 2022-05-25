import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer } from 'mdbreact';
import { Bar } from "react-chartjs-2";



export class ByUser extends Component {
    constructor(props){
        super(props)
        this.state = {
        
          connected:JSON.parse(localStorage.getItem("userData")),
          byuser:[],


      
          dataBar: [],
        }
    }
    
    async componentDidMount(){

 
        await axios.get(`http://localhost/newgen/blog/public/api/byuser/`+ this.state.connected[0].id_user)
        .then(res => {
            console.log(res)
            this.setState({byuser : res.data})
        }).catch( err => {
            console.log("errreeur ")
     
         })
      
    this.setState({ 
    
      dataBar:  {
      labels: ['action en retard', 'action done  ', 'action non cloturé'],
      datasets: [
        {
          label: 'Votre pérformance  ' ,
          data: this.state.byuser,

          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",

          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
          ],
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
      });
 
    
        }

  render() {
    return (
      <div className="col-sm-8">
      <div className="card">    
      <div className="card-body">
      <div className='card-title'> Votre pérformance   </div>

            <MDBContainer>
        <Bar
          data={this.state.dataBar}
          options={this.state.barChartOptions}
        />
      </MDBContainer>
      </div>
      </div>
      </div>
    )
  }
}

export default ByUser;
