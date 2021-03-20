import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { personCircle } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg } from '@ionic/react';

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  const [registeredEmail, setRegisteredEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
      setMessage("");
      setIserror(true);
      return;
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
        <IonRow>
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"A reset email has been sent!"}
                message={message}
                buttons={["OK"]}
              />
            </IonCol>
          </IonRow>
        {/*Image logo*/}
        <IonRow>
          <IonCol>
            <img src= "assets/images/LockLogo.png" width = "200px" />
          </IonCol>
        </IonRow>
        <IonRow></IonRow><IonCol></IonCol>
        {/*Forget password label*/}
          <IonRow>
            
            <IonCol>
              <IonLabel
                style={{ fontSize: "20px", color: "dark" }}
                >Forget Your Password?</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>
        {/*Login input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={mail}
                    />
                <IonItem>
                  <IonInput class = "ion-text-center"
                      type="email"
                      value={registeredEmail}
                      onIonChange={(e) => setRegisteredEmail(e.detail.value!)}>
                  </IonInput>
                </IonItem>
              </IonItem>
            </IonCol>
          </IonRow>  
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>         
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block"
                         color = "#46b0e0" 
                         onClick = {handleLogin}
                         ><b>Send Request</b></IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            {/*Login link*/}
            <IonCol class = "ion-text-center"> 
                <IonButton routerLink="/LoginMX"
                           class="button button-clear button-postive" 
                           color = "#46b0e0"
                ><a href="#">Already have an account? Login here!</a></IonButton>  
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgetPassword;