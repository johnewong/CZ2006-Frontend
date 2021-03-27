import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { personCircle } from "ionicons/icons";
import { lockClosed } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg } from '@ionic/react';

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const LoginMX: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("user02");
  const [password, setPassword] = useState<string>("user02");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    alert("handleLogin");   
    if (!username) {
        setMessage("Please enter a valid username");
        setIserror(true);
        return;
    }
    // if (validateEmail(email) === false) {
    //     setMessage("Your email is invalid");
    //     setIserror(true);
    //     return;
    // }

    // if (!password || password.length < 6) {
    //     setMessage("Please enter your password");
    //     setIserror(true);
    //     return;
    // }

    const loginData = {
        "username": username,
        "password": password
    }

    console.log("loginData", loginData);
    const api = axios.create({
        baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com/account/user`
    })
    api.post("/login", loginData)
        .then(res => {             
            history.push("/dashboard/" + username);
         })
         .catch(error=>{
            setMessage("Auth failure! Please create an account");
            setIserror(true)
         })
  };
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
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

        {/*Login label*/}
          <IonRow>
            <IonCol>
              <IonLabel
                style={{ fontSize: "30px", color: "dark" }}
                > <b>Login</b></IonLabel>
            </IonCol>
          </IonRow>
        <IonRow></IonRow><IonCol></IonCol>
        {/*Login input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={personCircle}
                    />
                  <IonInput
                      type="email"
                      class = "ion-text-center"
                      value={username}
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
                    style={{ fontSize: "30px", color: "#46b0e0" }}
                    icon={lockClosed}
                    />
                  <IonInput
                    type="password"
                    class = "ion-text-center"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block" 
                          color = "#46b0e0"
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
                           color = "#46b0e0"
                ><a href="#">Forget Password?</a></IonButton>  
            </IonCol>
            {/*Register link*/}
            <IonCol class = "ion-text-right"> 
                <IonButton routerLink="/Register"
                           class="button button-clear button-postive" 
                           color = "#46b0e0"
                ><a href="#">Sign Up!</a></IonButton>  
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginMX;