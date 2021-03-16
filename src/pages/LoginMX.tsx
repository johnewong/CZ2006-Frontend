import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { personCircle } from "ionicons/icons";
import { lockClosed } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg } from '@ionic/react';


const LoginMX: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

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
            <img src= 'http://placekitten.com/g/200/200' />
          </IonCol>
        </IonRow>
        <IonRow></IonRow><IonCol></IonCol>
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
              <IonButton class="button button-outline button-block" color = "#46b0e0">Login</IonButton>
            </IonCol>
          </IonRow>
          {/*SingPassbutton*/}
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block" color = "#46b0e0"  >Sign in with SingPass</IonButton>
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