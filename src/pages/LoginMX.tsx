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
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    if (!email) {
        setMessage("Please enter a valid email");
        setIserror(true);
        return;
    }
    if (validateEmail(email) === false) {
        setMessage("Your email is invalid");
        setIserror(true);
        return;
    }

    if (!password || password.length < 6) {
        setMessage("Please enter your password");
        setIserror(true);
        return;
    }

    const loginData = {
        "email": email,
        "password": password
    }

    const api = axios.create({
        baseURL: `https://reqres.in/api`
    })
    api.post("/login", loginData)
        .then(res => {             
            history.push("/dashboard/" + email);
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
                <IonItem>
                  <IonInput
                      type="email"
                      value={email}
                      onIonChange={(e) => setEmail(e.detail.value!)}>
                  </IonInput>
                </IonItem>
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
                <IonItem>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}>
                  </IonInput>
                </IonItem>
              </IonItem>
            </IonCol>
          </IonRow>
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block" color = "#46b0e0" onClick={handleLogin}>Login</IonButton>
            </IonCol>
          </IonRow>
          <IonRow></IonRow>
          <IonRow>
            <IonCol class = "ion-text-left">
                {/*SignUp Text*/}
                <p style={{ fontSize: "medium" }}>
                    <a href="#">Forget Password?</a>     
                  </p>
            </IonCol>
            <IonCol class = "ion-text-right">
                {/*SignUp Text*/}
                <p style={{ fontSize: "medium" }}>  
                    <a href="#">Sign up!</a>
                  </p>
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginMX;