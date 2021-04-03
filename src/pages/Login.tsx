import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import "./Login.css"
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { personCircleOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg } from '@ionic/react';
import { UserContext } from '../App';


function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const LoginMX: React.FC = () => {
  const user = useContext(UserContext);

  const storage = window.localStorage;
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(()=>{
    let userInfo = storage.getItem("userInfo");

    //if(userInfo) history.push('/home');
  },[history]);

  const handleLogin = async () => {
    if(username == "" || password == "")
    {
      setMessage("Please enter username or password!");
      setIserror(true)
    }else{
        const loginData = {
          "username": username,
          "password": password
      }

      console.log("loginData", loginData);
      const api = axios.create({
          baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
       //S baseURL: `http://localhost:8080`
      })
      await api.post("/account/user/login", loginData)
          .then(res => {       
              console.log("data",res);       

              let str =JSON.stringify(res.data); 
              storage.setItem("userInfo", str);
              user.setIsLoggedIn(true);
              history.push({
                pathname: "/Home",
               
              });
          })
          .catch((error)=>{
              setMessage("Auth failure! Please create an account");
              setIserror(true)
          })
    }
    
        
  };
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonAlert
          isOpen={iserror}
          onDidDismiss={() => setIserror(false)}
          message={message}
          buttons={["OK"]}
              />
        <IonGrid>
        <IonRow>
          <IonCol>
          </IonCol>
        </IonRow>
        {/*Image logo*/}
        <IonRow>
          <IonCol>
            <img src= "assets/images/Logo.png" width = "300px" />
          </IonCol>
        </IonRow>
        <IonRow></IonRow><IonCol></IonCol>
        {/*Login input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon
                    style={{ color: "#ffd401" }}
                    icon={personCircleOutline}
                    />
                  <IonInput
                      type="email"
                      class = "ion-text-center"
                      value={username}
                      placeholder = "Username"
                      onIonChange={(e) => setUsername(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>          
          {/*Password input*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon
                    style={{ color: "#ffd401" }}
                    icon={lockClosedOutline}
                    />
                  <IonInput
                    type="password"
                    class = "ion-text-center"
                    value={password}
                    placeholder = "Password"
                    onIonChange={(e) => setPassword(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton  size = "default"
                          color="warning"
                          expand="block"
                          onClick={handleLogin}
                          //routerLink="/Home"
                          ><b>Login</b></IonButton>
            </IonCol>
          </IonRow>
          <IonRow></IonRow>
          
          <IonRow>
            {/*Forget password link*/}
            <IonCol class = "ion-text-left"> 
                <IonButton routerLink="/ForgetPassword"
                           class="button button-clear button-postive" 
                           color = "#ffd401"
                ><a href="#">Forget Password?</a></IonButton>  
            </IonCol>
            {/*Register link*/}
            <IonCol class = "ion-text-right"> 
                <IonButton routerLink="/Register"
                           class="button button-clear button-postive" 
                           color = "#ffd401"
                ><a href="#">Sign Up!</a></IonButton>  
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginMX;
