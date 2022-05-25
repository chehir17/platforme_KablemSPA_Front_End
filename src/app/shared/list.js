import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

export class List extends Component {
    constructor(props){
        super(props)
    this.state={
        etat10:true,


        connected:JSON.parse(localStorage.getItem("userData")),
    };
}
toggleMenuState(menuState) {
   
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }
    componentDidMount(){
          if (this.state.connected !=null && this.state.connected[0].role =="admin") {
            this.setState({etat10 : false});
          }
        }

  render() {
    return (
      <div  hidden={this.state.etat10}>
          <li className={ ('/general-pages') ? 'nav-item active' : 'nav-item' } >
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
             
           
           <span className="menu-title"><Trans>gestion de données</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-database"></i>
              </div>

 <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ ('/general-pages/userpage') ? 'nav-link active' : 'nav-link' } to="/general-pages/userpage"><Trans>Utilisateurs</Trans></Link>       </li>
              <li className="nav-item"> <Link className={ ('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/add/articles1"><Trans>Articles </Trans></Link></li>
              <li className="nav-item"> <Link className={ ('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/add/lot1"><Trans>Piéce livré  </Trans></Link></li>
              <li className="nav-item"> <Link className={ ('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/client1"><Trans>Clients</Trans></Link></li>
              <li className="nav-item"> <Link className={ ('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/fournisseur1"><Trans>Fournisseurs</Trans></Link></li>
              <li className="nav-item"> <Link className={ ('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/DepartenetEtLigne"><Trans>lignes</Trans></Link></li>
              <li className="nav-item"> <Link className={ ('/notif/NotifDetails') ? 'nav-link active' : 'nav-link' } to="/notif/NotifDetails"><Trans>historique des tàche</Trans></Link></li>
              </ul>
            </Collapse>   
            </li>
               </div>
    )
  }
}

export default List
