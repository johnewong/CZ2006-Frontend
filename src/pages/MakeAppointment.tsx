import { IonCard, IonContent, IonHeader, IonButtons, IonPage, IonSlide, IonTitle, IonToolbar,IonModal } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, caretBack,caretForward  } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg, IonSegment,IonSegmentButton, IonSlides, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

function validateEmail(email: string) {
  
}

const MakeAppointment: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const handleLogin = () => {
 
  };
  

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonButtons  slot="secondary" >
              <IonButton fill="default" routerLink= "/SearchResult">
                <IonIcon  icon={arrowBack}/>
              </IonButton>
            </IonButtons>
            <IonLabel class = "ion-text-left" color = "#000000"><b>Clinic Name 1</b></IonLabel>
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
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}><b>Close</b></IonButton>
        </IonModal>
        <IonCard onClick={() => setShowModal(true)}
                style = {{height: "300px"}}>
                <IonCardHeader>
                  <img src= "assets/images/LockLogo.png" width = "100px" />
                  <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
        <IonGrid>      
          <IonRow >
            <IonCol>

            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol>
            <IonCard style = {{height: "300px"}}>
                <IonCardHeader>
                  <img src= "assets/images/LockLogo.png" width = "100px" />
                  <IonCardTitle class = "ion-text-left">Doctor Name2</IonCardTitle>
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

export default MakeAppointment;