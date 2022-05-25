import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import List from "./list";
class Sidebar extends Component {

  state = {
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

  componentDidUpdate(prevProps) {
  
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {


    return (
      <nav className="sidebar sidebar-offcanvas"  id="sidebar" >
        <ul className="nav" style={{position:"fixed"}}>
         
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans> <h3>Dashboard</h3> </Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/general-pages/planaction') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/general-pages/planaction">
              <span className="menu-title"><Trans>Plan d'action</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>

           <List/>
          <li className={ this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>gestion des outils </Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-diamond"></i>
            </div>
            <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/fich_nc') ? 'nav-link active' : 'nav-link' } to="/general-pages/fich_nc"><Trans>Rapport Non comformité</Trans></Link></li>
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/registreScrap') ? 'nav-link active' : 'nav-link' } to="/general-pages/registreScrap"><Trans>Registre SCRAP</Trans></Link></li>
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/ficheDmpp') ? 'nav-link active' : 'nav-link' } to="/general-pages/ficheDmpp"><Trans>Fiche DMPP</Trans></Link></li>
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/suiviClient') ? 'nav-link active' : 'nav-link' } to="/general-pages/suiviClient"><Trans>Suivi défaut Client</Trans></Link></li>
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/suiviFournisseur') ? 'nav-link active' : 'nav-link' } to="/general-pages/suiviFournisseur"><Trans>Suivi défaut Fournisseur</Trans></Link></li>
              <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/suiviSuperControle') ? 'nav-link active' : 'nav-link' } to="/general-pages/suiviSuperControle"><Trans>Suivi Super Controle</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {

    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);