import { IonCard, IonContent,IonPopover,IonSelect,IonSelectOption,
   IonHeader, IonButtons, IonPage, IonSlide, IonTitle, IonToolbar,IonModal } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, caretBack,caretForward,caretDown, addCircle  } from "ionicons/icons";
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
  const [AvaiTime, setAvailableTime] = useState<string>('brown');
  const [makeAppoint, setMakeAppoint] = useState<boolean>(false);
  const handleMakeAppoint = () => {
    setMessage("");
    setMakeAppoint(true);
    return;
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
      <IonContent fullscreen>
        <IonAlert
          isOpen={makeAppoint}
          onDidDismiss={() => setMakeAppoint(false)}
          cssClass="my-custom-class"
          header={"Appointment Details"}
          message={message}
          buttons={["OK"]}
        />
        <IonCard>
          <IonCardHeader>
            <img src= "assets/images/LockLogo.png" width = "100px" />
          <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
          </IonCardHeader>
          <IonCardContent class = "ion-text-left">
            Location: 501 Jurong West Street 51, # 01-283
            Hong Kah Point, Singapore 640591
          </IonCardContent>
        <IonItem></IonItem>
          <IonToolbar > 
            <IonItem>
              <IonLabel class = "ion-text-left"> <b>Avaiable Time Slot</b> </IonLabel>
              <IonSelect   
                interface="popover"
                placeholder="Select Time"
                onIonChange={e => setAvailableTime(e.detail.value)}
                value={AvaiTime}>
                <IonSelectOption value="9-930">09:00 - 09:30am</IonSelectOption>
                <IonSelectOption value="930-10">09:30 - 10:00am</IonSelectOption>
                <IonSelectOption value="10-1030">10:00 - 10:30am</IonSelectOption>
                <IonSelectOption value="1030-11">10:30 - 11:00am</IonSelectOption>
                <IonSelectOption value="1130-12">11:00 - 11:30am</IonSelectOption>
                <IonSelectOption value="1230-13">11:30 - 12:00pm</IonSelectOption>
              </IonSelect>
            </IonItem>
            </IonToolbar>
            <IonToolbar>
            <IonButton
                      onClick = {handleMakeAppoint} 
                      class = "button button-outline button-block"
                      color = "secondary"><b>Make Appointment</b></IonButton>
          </IonToolbar>        
        </IonCard> 
      <IonCard>
          <IonCardHeader>
            <img src= "assets/images/LockLogo.png" width = "100px" />
          <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
          </IonCardHeader>
          <IonCardContent class = "ion-text-left">
            Location: 501 Jurong West Street 51, # 01-283
            Hong Kah Point, Singapore 640591
          </IonCardContent>
        <IonItem></IonItem>
          <IonToolbar > 
            <IonItem>
              <IonLabel class = "ion-text-left"> <b>Avaiable Time Slot</b> </IonLabel>
              <IonSelect   
                interface="popover"
                placeholder="Select Time"
                onIonChange={e => setAvailableTime(e.detail.value)}
                value={AvaiTime}>
                <IonSelectOption value="9-930">09:00 - 09:30am</IonSelectOption>
                <IonSelectOption value="930-10">09:30 - 10:00am</IonSelectOption>
                <IonSelectOption value="10-1030">10:00 - 10:30am</IonSelectOption>
                <IonSelectOption value="1030-11">10:30 - 11:00am</IonSelectOption>
                <IonSelectOption value="1130-12">11:00 - 11:30am</IonSelectOption>
                <IonSelectOption value="1230-13">11:30 - 12:00pm</IonSelectOption>
              </IonSelect>
            </IonItem>
            
          </IonToolbar>        
        </IonCard>
      
      </IonContent>
    </IonPage>
  );
};

export default MakeAppointment;