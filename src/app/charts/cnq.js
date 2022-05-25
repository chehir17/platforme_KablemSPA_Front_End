import React, { Component } from 'react';
import { Bar  } from "react-chartjs-2";

import axios from "axios";
import { MDBContainer } from 'mdbreact';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const pdf = new jsPDF("l", "pt");
export class Cnq extends Component {
    constructor(props){
        super(props)
        this.state = {
        
          dataBar:[],
          users:[],
          value:[],
          month:[],
    
          cnq:[],
        
    
    
          dataHorizontal: [],
        }
    }
    
    async componentDidMount(){

 
        await axios.get("http://localhost/newgen/blog/public/api/cnq")
        .then(res => {
            console.log(res);
            this.setState({cnq : res.data})
         
        }).catch( err => {
            console.log("errreeur ")
     
         })
           if (this.state.cnq[0]) {
            this.state.month[0]=this.state.cnq[0].id;
            this.state.value[0]=this.state.cnq[0].data;
          }  if (this.state.cnq[1]) {
          this.state.month[1]=this.state.cnq[1].id;
          this.state.value[1]=this.state.cnq[1].data;
        }  if (this.state.cnq[2]) {
          this.state.month[2]=this.state.cnq[2].id;
          this.state.value[2]=this.state.cnq[2].data;
        }  if (this.state.cnq[3]) {
          this.state.month[3]=this.state.cnq[3].id;
          this.state.value[3]=this.state.cnq[3].data;
        }  if (this.state.cnq[4]) {
          this.state.month[4]=this.state.cnq[4].id;
          this.state.value[4]=this.state.cnq[4].data;
        }  if (this.state.cnq[5]) {
          this.state.month[5]=this.state.cnq[5].id;
          this.state.value[5]=this.state.cnq[5].data;
        }   if (this.state.cnq[6]) {
          this.state.month[6]=this.state.cnq[6].id;
          this.state.value[6]=this.state.cnq[6].data;
        } if (this.state.cnq[7]) {
          this.state.month[7]=this.state.cnq[7].id;
          this.state.value[7]=this.state.cnq[7].data;
        }  if (this.state.cnq[8]) {
          this.state.month[8]=this.state.cnq[8].id;
          this.state.value[8]=this.state.cnq[8].data;
        }  if (this.state.cnq[9]) {
          this.state.month[9]=this.state.cnq[9].id;
          this.state.value[9]=this.state.cnq[9].data;
        }   if (this.state.cnq[10]) {
          this.state.month[10]=this.state.cnq[10].id;
          this.state.value[10]=this.state.cnq[10].data;
        } if (this.state.cnq[11]) {
          this.state.month[11]=this.state.cnq[11].id;
          this.state.value[11]=this.state.cnq[11].data;
        } if (this.state.cnq[12]) {
          this.state.month[12]=this.state.cnq[12].id;
          this.state.value[12]=this.state.cnq[12].data;
        }
                      
     

           
    this.setState({ 
      dataBar: {

        labels:this.state.month ,
        datasets: [
          {
            data: this.state.value,

            label: "HNQ/mois ",
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(113, 205, 205,0.4)",
              "rgba(170, 128, 252,0.4)",
              "rgba(255, 177, 101,0.4)",
              "rgba(110, 180, 40,0.4)",
              "rgba(120, 120, 90,0.4)",
              "rgba(130, 30, 80,0.4)",
              "rgba(240, 40, 70,0.4)",
              "rgba(130, 250, 60,0.4)",
              "rgba(190, 160, 50,0.4)",

            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134,159,1)",
              "rgba(98,  182, 239,1)",
              "rgba(255, 218, 128,1)",
              "rgba(113, 205, 205,1)",
              "rgba(170, 128, 252,1)",
              "rgba(255, 177, 101,1)",
              "rgba(110, 180, 40,1)",
              "rgba(120, 120, 90,1)",
              "rgba(130, 30, 80,1)",
              "rgba(240, 40, 70,1)",
              "rgba(130, 250, 60,1)",
              "rgba(190, 160, 50,1)",
            ]
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
    }
 
    
    )}
    div2PDF = e => {
      /////////////////////////////
      // Hide/show button if you need
      /////////////////////////////
  
      const but = e.target;
      but.style.display = "";
      let input = window.document.getElementsByClassName("div2PDF")[0];
      html2canvas(input).then(canvas => {
        const img = canvas.toDataURL("image/png");
        const pdf =  jsPDF("l", "pt");
        pdf.addImage(
          img,
          "png",
          input.offsetLeft,
          input.offsetTop,
          input.clientWidth,
          input.clientHeight
        );
        pdf.save("chart.pdf");
        but.style.display = "block";
      });
    };
  render() {

    return (
      <div className="div2PDF">
      <div className="card">

      <div className="card-body">
 

           <MDBContainer >
        <h3 className="mt-5">Heures non qualité </h3>
        <Bar   data={this.state.dataBar} options={{ responsive: true }} />
      </MDBContainer>
      </div>
      </div>
      <div>
          <button onClick={(e) => this.div2PDF(e)}>Export 2 PDF</button>
        </div>
      </div>
    )
  }
}

export default Cnq;
