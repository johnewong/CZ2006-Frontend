import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, calendar, person, settings } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Search from './pages/Search';
import Login from './pages/LoginMX';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import EventList from "./pages/EventList";
import SearchResult from './pages/SearchResult';
import MakeAppointment from './pages/MakeAppointment';
import Home from './pages/Home';
import Setting from "./pages/Setting";
import Account from "./pages/Account";
import Language from "./pages/Language";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/setting" component={Setting} exact={true} />
        <Route path="/account" component={Account} exact={true} />
        <Route path="/language" component={Language} exact={true} />
        <Route path="/search" component={Search} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/register" component={Register} exact={true} />
         <Route path="/loginMX" component={Login} exact={true} />
         <Route path="/EventList" component={EventList} exact={true} />
         <Route path="/ForgetPassword" component={ForgetPassword} exact={true} />
         <Route path="/ResetPassword" component={ResetPassword} exact={true} />
         <Route path="/SearchResult" component={SearchResult} exact={true} />
         <Route path="/MakeAppointment" component={MakeAppointment} exact={true} />
         <Route path="/Home" component={Home} exact={true} />
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/loginMX">
            <Login />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon icon={calendar} />
          </IonTabButton>
          <IonTabButton tab="Login" href="/loginMX">
            <IonIcon icon={person} />
          </IonTabButton>
          <IonTabButton tab="Setting" href="/setting">
            <IonIcon icon={settings} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
