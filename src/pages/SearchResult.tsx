import { IonCard, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, arrowForward, caretBack, caretForward } from "ionicons/icons";
import { useHistory } from "react-router-dom"
import { IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon, IonAlert,IonImg, IonSegment, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';


const SearchResult: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
    
  };
  

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonButtons  slot="secondary" >
              <IonButton fill="default" routerLink= "/Home">
                <IonIcon  icon={arrowBack}/>
              </IonButton>
            </IonButtons>
            <IonLabel class = "ion-text-left" color = "#000000"><b>Jurong West</b></IonLabel>
          </IonToolbar>
          </IonHeader>
          <IonHeader>   
            <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="clear" color="#000000">
                <IonIcon  icon={caretBack} />
                Previous
              </IonButton>
            </IonButtons>
            <IonTitle style={{fontSize: "22px"}} color = "#000000"><b> 1 Feb 2021</b></IonTitle>
            <IonButtons slot="primary" >
              <IonButton fill="clear" color="#000000">Next
                <IonIcon icon={caretForward} />
              </IonButton>
            </IonButtons>
                   
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-float-left">
        <IonGrid>
          
          <IonRow>
            <IonCol>
              <IonCard routerLink= "/MakeAppointment">
                <IonCardHeader>
                  <IonCardTitle class = "ion-text-left">Clinic Name1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class = "ion-text-left">Clinic Name2</IonCardTitle>
                </IonCardHeader>

                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class = "ion-text-left">Clinic Name</IonCardTitle>
                </IonCardHeader>

                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      
      </IonContent>
    </IonPage>
  );
};

export default SearchResult;