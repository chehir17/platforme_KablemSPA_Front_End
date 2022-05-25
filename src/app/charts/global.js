import React, { Component } from 'react';
import axios from "axios";

import ReactApexChart  from 'react-apexcharts'
import { Col,Row,Container,Modal,Button,ButtonToolbar } from 'react-bootstrap';
import { blue } from '@material-ui/core/colors';
import { ProgressBar } from 'react-bootstrap';  




export class ApexChart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {

        isOpen: false,
        nami:'',
    
        karr:[],


      clot_not_finish:[],
      clot_not_finish1:[],

      Qualité:[],
      RH:[],
      Production:[],
      Comptabilité_Finance:[],
      Indust:[],
      Logistique:[],
      Achat:[],
      Maintenance:[],

      Qualité1:[],
      RH1:[],
      Production1:[],
      Comptabilité_Finance1:[],
      Indust1:[],
      Logistique1:[],
      Achat1:[],
      Maintenance1:[],


      series: [{
       
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Total Status des action en retard Par departement'
        },
        xaxis: {
          categories: [],
          labels: {
            formatter: function (val) {
              return val 
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "k"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    
    
    
    };
  }
 async componentDidMount(){

 
        await axios.get("http://localhost/newgen/blog/public/api/bydep")
        .then(res => {
            console.log(res)
            this.setState({clot_not_finish : res.data})
        }).catch( err => {
            console.log("errreeur ")
     
         })

         await axios.get("http://localhost/newgen/blog/public/api/bydep1")
         .then(res => {
             console.log(res)
             this.setState({clot_not_finish1 : res.data})
         }).catch( err => {
             console.log("errreeur ")
      
          })
    if(  this.state.clot_not_finish.Qualité ){
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
      

    if(  this.state.clot_not_finish1.Qualité ){
      this.setState({Qualité1 : this.state.clot_not_finish1.Qualité });
    }
    if(this.state.clot_not_finish1.Production){
      this.setState({Production1 : this.state.clot_not_finish1.Production });
    
    }if(this.state.clot_not_finish1.RH){
      this.setState({RH1 : this.state.clot_not_finish1.RH });
    
    }if(this.state.clot_not_finish1.Comptabilité_Finance){
      this.setState({Comptabilité_Finance1 : this.state.clot_not_finish1.Comptabilité_Finance });
    }
    if(this.state.clot_not_finish1.Maintenance){
      this.setState({Maintenance1 : this.state.clot_not_finish1.Maintenance });
    }
    if(this.state.clot_not_finish1.Indust){
      this.setState({Indust1 : this.state.clot_not_finish1.Indust });
    }
    if(this.state.clot_not_finish1.Logistique){
      this.setState({Logistique1 : this.state.clot_not_finish1.Logistique });
    }
    if(this.state.clot_not_finish1.Achat){
      this.setState({Achat1 : this.state.clot_not_finish1.Achat });
    }
    this.setState({ 
    

      series: [{
        name: 'done',
        data:[this.state.Qualité.length,
          this.state.Maintenance.length,
          this.state.Production.length, 
          this.state.Indust.length,
           this.state.Logistique.length, 
           this.state.Comptabilité_Finance.length,
            this.state.RH.length,
            this.state.Achat.length]},{
              name: 'not done',
        data:[this.state.Qualité1.length,
          this.state.Maintenance1.length,
          this.state.Production1.length, 
          this.state.Indust1.length,
           this.state.Logistique1.length, 
           this.state.Comptabilité_Finance1.length,
            this.state.RH1.length,
            this.state.Achat1.length]}


      ],
      options: {
          colors:[
            '#0094cc','#eed202'
          ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Total statut des actions par département '
        },
        xaxis: {
          categories: ['Qualité', 'Maintenance', 'Production', 'Indust', 'Logistique', 'Comptabilité & Finance', 'RH','Achat'],
          labels: {
            formatter: function (val) {
              return Math.round(val) 
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val 
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      }
      
    }
     ); 
 }


 handelchange = () =>{
     if( this.state.clot_not_finish1.Qualité){
    this.setState({karr:this.state.clot_not_finish1.Qualité});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }     
 }
 handelchange1 = () =>{
    if( this.state.clot_not_finish1.Maintenance){
    this.setState({karr:this.state.clot_not_finish1.Maintenance});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange2 = () =>{
    if(this.state.clot_not_finish1.Production){
    this.setState({karr:this.state.clot_not_finish1.Production});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange3 = () =>{
    if( this.state.clot_not_finish1.Indust){
    this.setState({karr:this.state.clot_not_finish1.Indust});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange4 = () =>{
    if(this.state.clot_not_finish1.Logistique){
    this.setState({karr:this.state.clot_not_finish1.Logistique});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange5 = () =>{
    if(this.state.clot_not_finish1.Comptabilité_Finance){
    this.setState({karr:this.state.clot_not_finish1.Comptabilité_Finance});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange100 = () =>{
    if(this.state.clot_not_finish1.RH){
    this.setState({karr:this.state.clot_not_finish1.RH});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
    }
 }
 handelchange7 = () =>{     
     if(this.state.clot_not_finish1.Achat){
    this.setState({karr:this.state.clot_not_finish1.Achat});
    this.setState({ isOpen: true ,});
    console.log(this.state.karr);
     }
 }


  closeModal = () => this.setState({ isOpen: false });

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  


  render() {
     
    return (
      <div className="card">
      <div className="card-body">
<Container>
    <Row>
        

  
                <div className='card-title'>  </div>
              
                <Col  xs={12} md={10}>
                <div id="chart">
                <ReactApexChart  options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
                </Col>
                <Col style={{ marginTop:'80px' }} xs={1} md={1}>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange()}><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange1()} ><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange2()}><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange3()}><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange4()} ><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange5()} ><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange100()} ><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                <button style={{marginBottom :'10px', backgroundColor:"#0094cc", border:"none",color:"#FFFFFF"}} onClick={() => this.handelchange7()} ><i class="mdi mdi-arrow-right-bold"></i></button><br/>
                </Col>

                </Row>
            </Container>
           
            <Modal
        show={this.state.isOpen}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Tableau des Actions en retard par departement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
         {/*Affichage des Details */}

         <div className="row">
        <div>    
       </div>   
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Action en Retard</h4>
                {this.state.etat}
               <br/>               <br/>
               <ButtonToolbar aria-label="Toolbar with button groups">
                {/*<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-inverse-success btn-icon"
                    table="myTable"
                    filename="suivi incident client"
                    sheet="tablexls"
                    buttonText="csv"
                  >
                    
                  </ReactHTMLTableToExcel> */}  
            </ButtonToolbar>
                <div className="table-responsive" >
                  <table  className="table table-sm-bordered hovered " id="myTable"
                  size="sm"
                  >
                    <thead>
                      <tr >
                        <th> Id </th>
                        <th> Status </th>
                        <th> Progresse </th>
                        <th> Departement </th>
                        <th> Zone </th>
                        <th> Origine </th>
                        <th> Probléme </th>
                        <th> Cause </th>
                        <th> Action </th>
                        <th> date de Début  </th>
                        <th> Date de cloture(Provisoire) </th>
                        <th> Responsable </th>

                      </tr>
                    </thead>
                   
                    <tbody>
                     
                     { this.state.karr.map( post =>(
                      <tr key={post.id_planaction }>
                        <td className="py-1">
                        {post.id_planaction }
                        </td>
                        <td>{post.status}</td>
                        <td><ProgressBar variant="gradient-info" now={post.progress}/></td>
                        <td>{post.departement} </td>
                        <td>{post.zone} </td>

                        <td>{post.origine} </td>
                       <td> <div style={{wordWrap:"break-all"}}>{post.prob} </div></td>
                        <td> <div style={{wordWrap:"break-word"}}>{post.cause}</div></td>
                        <td> <div style={{wordWrap:"break-word"}}>{post.action}</div></td>
                        <td>{post.date_debut}</td>
                        <td>{post.date_cloture}</td>
                        <td>{post.first_name} {post.last_name}</td>
                      </tr>
                       ))
                      }
                    </tbody>
                  </table>
                </div>
                <br />
                <a href={"../preview/general-pages/planaction"} className="btn btn-info btn-sm "  variant="primary"> Voir Details <i class="mdi mdi-arrow-right-bold"></i></a>
              </div>  
            </div> 
          </div>
        </div>
            </Container>
        </Modal.Body>
 
      </Modal> 
      </div>
      </div>




    )
    }
  }
    export default ApexChart1;