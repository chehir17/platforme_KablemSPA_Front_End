import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";

class ChartsClotureTot extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          actionDones:'',
          action100:'100',
        }
      }
      async  componentDidMount(){
        /////// affichage des action done
        await axios.get("http://localhost/newgen/blog/public/api/actionDone")
        .then(res => {
            console.log(res)
            if(res.data != null){
                this.setState({actionDones : res.data})
            }else{
                this.setState({actionDones : 0})
            }
         
        }).catch( err => {
            console.log("errreeur ")
         })
         this.state.action100=  this.state.action100 - this.state.actionDones;
          
         console.log(  this.state.action100);
         console.log(  this.state.actionDones);

    this.setState({
 

         dataDoughnut: {
            labels: [Math.round(this.state.actionDones) + "%",Math.round(this.state.action100)+"%"],
            datasets: [
              {
                data: [this.state.actionDones,this.state.action100],       
                backgroundColor: ["#46BFBD","#fe7c96"],
                hoverBackgroundColor: [
                    "#1bcfb4",
                    "#f06292"


                 
                ]
              }
            ],
          }
       
    });

      }

render() {
    console.log(this.state.actionDones);
    return (
      <div className="card">
              <div className="card-body">

                <div className="card-title">Taux de cloture des action  </div>

    <MDBContainer>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4">
    <ul>
      <li>
        <span className="legend-dots bg-success"></span>Action Done
        <span className="float-right"> { Math.round(this.state.actionDones)}%</span>
      </li>
      <li>
        <span className="legend-dots bg-danger"></span>Action en attente
        <span className="float-right"> {Math.round(this.state.action100)}%</span>
      </li>
    </ul>
  </div>
  
    </MDBContainer>
    </div>
    </div>

 
    );
  }
}

export default ChartsClotureTot;