import { IonCard, IonContent,IonPopover,IonSelect,IonSelectOption,
   IonHeader, IonButtons, IonPage, IonSlide, IonTitle, IonToolbar,IonModal } from '@ionic/react';
import React, { useState } from 'react';
import "./MakeAppointment.css";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, caretBack,caretForward,location, time, person  } from "ionicons/icons";
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
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [AvaiTime, setAvailableTime] = useState<string>('');
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
              <IonButton fill="default" routerLink= "/Home/SearchResult">
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
        <IonCard>
          <IonCardHeader>
            <img src= "assets/images/PersonHead.png" width = "100px" />
          <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className = "doctorDetailFontSize">
            <div>Location: 501 Jurong West Street 51,</div> 
            <div># 01-283 Hong Kah Point, </div>
            <div>Singapore 640591</div>
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
                      onClick = {() => setShowModal(true)}   
                      class = "button button-outline button-block"
                      color = "secondary"><b>Make Appointment</b></IonButton>
              <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonContent fullscreen className="ion-padding ion-text-center">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonHeader>
                          <IonToolbar >
                            <IonLabel  className = "modal">Appointment Summary</IonLabel>
                          </IonToolbar>
                          <IonRow><IonCol></IonCol></IonRow><IonRow><IonCol></IonCol></IonRow>
                          <IonItem>
                            <IonIcon icon={location}></IonIcon>
                            <IonLabel className = "ion-text-center">Jurong West Clinic 1</IonLabel>
                          </IonItem>
                          <IonItem>
                            <IonIcon icon={person}></IonIcon>
                            <IonLabel className = "ion-text-center">Dortor Name 1</IonLabel>
                          </IonItem>
                          <IonItem>
                            <IonIcon icon={time}></IonIcon>
                            <IonLabel className = "ion-text-center">09:00 - 09:30</IonLabel>
                          </IonItem>
                        </IonHeader>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonContent>
                
                <IonButton onClick={() => {setShowModal(false); handleMakeAppoint()}}><b>Confirm Appointment</b></IonButton>
              </IonModal>
              <IonRow>
                <IonCol>
                  <IonAlert
                    isOpen={makeAppoint}
                    onDidDismiss={() => setMakeAppoint(false)}
                    cssClass="my-custom-class"
                    header={"The appointment has been confirmed!"}
                    message={message}
                    buttons={["OK"]}
                  />
                </IonCol>
              </IonRow>
          </IonToolbar>        
        </IonCard> 
      <IonCard>
          <IonCardHeader>
            <img src= "assets/images/PersonHead.png" width = "100px" />
          <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className = "doctorDetailFontSize">
            <div>Location: 501 Jurong West Street 51,</div> 
            <div># 01-283 Hong Kah Point, </div>
            <div>Singapore 640591</div>
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
      
      </IonContent>
    </IonPage>
  );
};

export default MakeAppointment;