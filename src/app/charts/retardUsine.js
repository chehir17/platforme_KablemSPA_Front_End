import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";

class RetardUsine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          actionRetard:[],
          retard:'',
          NotDone:'',
          nd : '',
        }
      }
      async  componentDidMount(){
        /////// affichage des action done
        await axios.get("http://localhost/newgen/blog/public/api/actionOnRetard")
        .then(res => {
            console.log(res)
            this.setState({actionRetard : res.data})
        }).catch( err => {
            console.log("errreeur ")
         })
         this.setState({
          nd:this.state.actionRetard[2],

            retard:this.state.actionRetard[1],
            done:this.state.actionRetard[0],
        });
          
         console.log(  this.state.retard);
         console.log(  this.state.NotDone);

    this.setState({
 

         dataDoughnut: {
            labels: [Math.round(this.state.retard) + "%",Math.round(this.state.done)+"%",Math.round(this.state.nd)+"%"],
            datasets: [
              {
                data:[ Math.round(this.state.retard),Math.round(this.state.done),Math.round(this.state.nd)],       
                backgroundColor: ["#fe7c96","#46BFBD","#0275d8 "],
                hoverBackgroundColor: [
                  "#f06292",  
                  "#1fdbbf",
                   
                    "#0275d8 "


                 
                ]
              }
            ],
          }
       
    });

      }

render() {
    return (
      <div className="card">
      <div className="card-body">
      <div className="card-title">Taux des actions  </div>
    <MDBContainer>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4">
    <ul>
      <li>
        <span className="legend-dots bg-danger"></span>Taux  des Action en retard
        <span className="float-right"> {Math.round(this.state.retard)}%</span>
      </li>
      <li>
        <span className="legend-dots bg-success"></span> Taux  des Action  done 
        <span className="float-right"> { Math.round(this.state.done)}%</span>
      </li>
      <li>
        <span className="legend-dots bg-info"></span>Taux  des Action non cloturées 
        <span className="float-right"> { Math.round(this.state.nd)}%</span>
      </li>
    </ul>
  </div>
    </MDBContainer>
    </div>
    </div>

 
    );
  }
}

export default RetardUsine;