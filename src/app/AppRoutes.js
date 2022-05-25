import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));



const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));

const add_pa = lazy(() => import('./add/add_planaction'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const User = lazy(() => import('./general-pages/userpage'));
const Planaction = lazy(() => import('./general-pages/planaction'));
const Planaction1 = lazy(() => import('./general-pages/planaction copy'));

const Adduser = lazy(() => import('./add/add_user'));
//const addplan = lazy(() => import('./general-pages/add_planaction'));
const test = lazy(() => import('./Test'));

const articles = lazy(() => import('./general-pages/articles'));
const client = lazy(() => import('./general-pages/client1'));
const ligne = lazy(() => import('./general-pages/DepartenetEtLigne'));

const fich_nc = lazy(() => import('./general-pages/fich_nc'));
const fournisseur = lazy(() => import('./general-pages/fournisseur1'));
const suivifournisseur = lazy(() => import('./general-pages/suiviFournisseur'));
const suiviclient = lazy(() => import('./general-pages/suiviClient'));
const scrap = lazy(() => import('./general-pages/registreScrap'));
const dmpp = lazy(() => import('./general-pages/ficheDmpp'));
const super1 = lazy(() => import('./general-pages/suiviSuperControle'));

const edit_pa = lazy(() => import('./edit/edit_plan_action'));
/////ajout pages////
const add_dmpp = lazy(() => import('./add/add-dmpp'));
const add_suiviclient = lazy(() => import('./add/suivi-client'));
const add_suivifr = lazy(() => import('./add/add_suivi_fournisseur'));
const add_scrap = lazy(() => import('./add/scrap'));
const add_rapportnc = lazy(() => import('./add/add_rapportnc'));
const addpl = lazy(() => import('./add/add_planaction'));
const addpl_source = lazy(() => import('./add/add_planaction_source'));
const add_control = lazy(() => import('./add/add_suivi_super_controle'));
const articles1 = lazy(() => import('./add/articles1'));
const lot1 = lazy(() => import('./add/lot1'));


//////edit pages////
const edit_suiviclient = lazy(() => import('./edit/suivi-client'));
const edit_suivi_fournisseur1 = lazy(() => import('./edit/edit_suivi_fournisseur'));

const edit_nc = lazy(() => import('./edit/edit_nc'));
const edit_dmpp = lazy(() => import('./edit/edit_dmpp'));
const edit_scrap = lazy(() => import('./edit/edit_scrap'));
const edit_super = lazy(() => import('./edit/edit_suivi_super_controle'));
///////dash//////////
const bydep = lazy(() => import('./charts/bydep'));
const byuser1 = lazy(() => import('./charts/bydep_ret'));


const taux = lazy(() => import('./charts/TauxClotureTot'));
const onretard = lazy(() => import('./charts/retardUsine'));
const cnq = lazy(() => import('./charts/cnq'));
const global = lazy(() => import('./charts/global'));

const not1 = lazy(() => import('./notif/addNotif'));

const ppm1 = lazy(() => import('./charts/ppm1'));
const ppm2 = lazy(() => import('./charts/ppm2'));
const ppm3 = lazy(() => import('./charts/ppm3'));
const ppm4 = lazy(() => import('./charts/ppm4'));

const showNotif = lazy(() => import('./notif/showNotif'));
const NotifDetails = lazy(() => import('./notif/NotifDetails'));
const bp = lazy(() => import('./general-pages/BlankPage'));
const bu = lazy(() => import('./charts/byres'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
        <Route exact path="('./charts/byres" component={ bu } />

        <Route exact path="/general-pages/BlankPage" component={ bp } />

        <Route exact path="/notif/NotifDetails" component={ NotifDetails } />

        <Route exact path="/notif/showNotif" component={ showNotif } />
        <Route exact path="/charts/global" component={ global } />

        <Route exact path="/charts/ppm1" component={ ppm1 } />
        <Route exact path="/charts/ppm2" component={ ppm2 } />
        <Route exact path="/charts/ppm3" component={ ppm3 } />
        <Route exact path="/charts/ppm4" component={ ppm4 } />

        <Route exact path="/add/articles1" component={ articles1 } />
        <Route exact path="/add/lot1" component={ lot1 } />

        <Route exact path="/charts/retardUsine" component={ onretard } />

        <Route exact path="/charts/retardUsine" component={ onretard } />
        <Route exact path="/charts/TauxClotureTot" component={ taux } />

        <Route exact path="/charts/bydep_ret" component={ byuser1 } />
        <Route exact path="/charts/bydep" component={ bydep } />
        <Route exact path="/charts/cnq" component={ cnq } />

        <Route exact path="/general-pages/suiviSuperControle" component={ super1 } />



        <Route exact path="/edit/edit_suivi_super_controle/:id" component={ edit_super } />

        <Route exact path="/edit/suivi-client/:id" component={ edit_suiviclient } />
        <Route exact path="/edit/edit_suivi_fournisseur/:id" component={ edit_suivi_fournisseur1 } />

        <Route exact path="/edit/edit_nc/:id" component={ edit_nc } />
        <Route exact path="/edit/edit_dmpp/:id" component={ edit_dmpp } />
        <Route exact path="/edit/edit_scrap/:id" component={ edit_scrap } />

        <Route exact path="/add/add_suivi_super_controle/" component={ add_control } />
        <Route exact path="/add/add-dmpp/" component={ add_dmpp } />
        <Route exact path="/add/suivi-client/" component={ add_suiviclient } />
        <Route exact path="/add/add_suivi_fournisseur/" component={ add_suivifr} />

        <Route exact path="/add/scrap/" component={ add_scrap } />

        <Route exact path="/add/add_rapportnc/" component={ add_rapportnc } />
        <Route exact path="/add/add_planaction/" component={ addpl } />
        <Route exact path="/add/add_planaction_source/:id/:type" component={ addpl_source } />






        <Route exact path="/edit/edit_plan_action/:id" component={ edit_pa } />


          <Route exact path="/dashboard" component={ Dashboard } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />

      <Route path="./add/add_planaction/:id" component={ add_pa } />

          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/userpage" component={ User } />
          <Route path="/general-pages/planaction" component={ Planaction } />
          <Route path="/general-pages/planaction copy" component={ Planaction1 } />

          <Route path="/add/add_user" component={ Adduser } />
          <Route path="/general-pages/articles" component={ articles } />
          <Route path="/general-pages/client1" component={ client } />
          <Route path="/general-pages/DepartenetEtLigne" component={ ligne } />

          <Route path="/general-pages/fich_nc" component={ fich_nc } />
          <Route path="/general-pages/fournisseur1" component={ fournisseur } />
          <Route path="/general-pages/suiviFournisseur" component={ suivifournisseur } />
          <Route path="/general-pages/suiviClient" component={ suiviclient } />
          <Route path="/general-pages/registreScrap" component={ scrap } />
          <Route path="/general-pages/ficheDmpp" component={ dmpp } />

          <Route path="/Test/:id/:type" component={ test } />


          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;