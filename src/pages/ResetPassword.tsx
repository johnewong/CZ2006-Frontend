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

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [oldEmail, setOldEmail] = useState<string>("Old Password");
  const [newEmail, setNewEmail] = useState<string>("New Password");
  const [confirmEmail, setConfirmEmail] = useState<string>("Confirm New Password");
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
            <img src= "assets/images/KeyLogo.png" width = "500px" />
          </IonCol>
        </IonRow>
        <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>
        {/*Reset password label*/}
          <IonRow>
            <IonCol>
              <IonLabel
                style={{ fontSize: "20px", color: "dark" }}
                >Reset Your Password</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>
        {/*Old Password input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                  <IonInput class = "ion-text-center"
                      type="email"
                      value={oldEmail}
                      onIonChange={(e) => setOldEmail(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          {/*New Password input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                  <IonInput class = "ion-text-center"
                      type="email"
                      value={newEmail}
                      onIonChange={(e) => setNewEmail(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          {/*Confirm New Password input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                  <IonInput class = "ion-text-center"
                      type="email"
                      value={confirmEmail}
                      onIonChange={(e) => setConfirmEmail(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>  
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>         
          {/*Done button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block" color = "#46b0e0"><b>Done</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;