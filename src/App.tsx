import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, list, person, settings } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Login from "./pages/Login";
import React, { useContext, useEffect, useState } from "react";
import MainTab from "./MainTab";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import MakeAppointment from "./pages/MakeAppointment";
import SearchResult from "./pages/SearchResult";
import ResetPassword from "./pages/ResetPassword";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import EventList from "./pages/EventList";
import Home from "./pages/Home";
interface IUserManager {
  setIsLoggedIn: Function;
}

const user: IUserManager = {
  setIsLoggedIn: () => {}
};
export const UserContext = React.createContext<IUserManager>(user);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;

  const history = useHistory();
  const storage = window.localStorage;
  // useEffect(()=>{
  //   let userInfo = storage.getItem("userInfo");
  //     console.log("userInfo",userInfo);
  //     if(!userInfo)
  //     {
  //       history.push('/Login');
  //     }
  // },[history]);


  return (
    <IonApp>
      <IonReactRouter>
     
      <Route path="/*" component={isLoggedIn?  MainTab : Login} />
      <Route path="/register" component={Register} exact={true} />
      <Route
        path="/ForgetPassword"
        component={ForgetPassword}
        exact={true}
      />
      <Route path="/Login" component={Login} exact={true} />
      <Route path="/register" component={Register} exact={true} />
     
      </IonReactRouter>
    </IonApp>
  );
  
};

export default App;
