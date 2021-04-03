import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonChip } from '@ionic/react';

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  const [registeredEmail, setRegisteredEmail] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleSendEmail = async () => {

      const EmailData = {
        "emailaddress": registeredEmail,
      };

      if(validateEmail(registeredEmail)){
        
        setMessage("New password is sending, please check your email!");
        setIserror(true)

        const api = axios.create({
          //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
          baseURL: `http://localhost:8080`
        })
        try {
             api.post("/account/user/forgetpassword", EmailData)
            .then(res => {
                let str =JSON.stringify(res.data); 
                console.log(res.data);
                //console.log(str);
                
            });
          } catch(err){
            setMessage("User Not Existed!");
            setIserror(true)
          }
      }else
      {
        setMessage("Please enter valid email address!");
        setIserror(true)
      }

      
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton routerLink="/Login" class = "button button-clear"> 
          <IonChip color = "dark">
            <IonIcon icon={arrowBack}
                    color="#bd9e07" />
            <IonLabel color="#bd9e07" >Back</IonLabel>
          </IonChip>
        </IonButton>
     
        <IonGrid  className="ion-padding ion-text-center">
        <IonRow>
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                message={message}
                buttons={["OK"]}
              />
            </IonCol>
          </IonRow>
        {/*Image logo*/}
        <IonRow>
          <IonCol>
            <img src= "assets/images/LockLogo.png" width = "150px" />
          </IonCol>
        </IonRow>
        <IonRow></IonRow><IonCol></IonCol>
        <IonRow></IonRow><IonCol></IonCol>
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
                    style={{color: "#ffd401"} }
                    icon={mail}
                    />
                  <IonInput class = "ion-text-center"
                      placeholder = "Enter Registered Email"
                      type="email"
                      value={registeredEmail}
                      onIonChange={(e) => setRegisteredEmail(e.detail.value!)}>
                  </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>  
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>         
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton size = "default"
                          color="warning"
                          expand="block"
                         onClick={() => {
                          handleSendEmail();
                          validateEmail(registeredEmail);
                        }}>
                         <b>Send Request</b></IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            {/*Login link*/}
            <IonCol class = "ion-text-center"> 
                <IonButton routerLink="/Login"
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