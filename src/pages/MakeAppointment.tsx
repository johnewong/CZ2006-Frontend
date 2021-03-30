import { IonCard, IonContent,IonBackdrop,IonSelect,IonSelectOption,
   IonHeader, IonButtons, IonPage, IonSlide, IonTitle, IonToolbar,IonModal } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import "./MakeAppointment.css";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, caretBack,caretForward,location, time, person  } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg, IonSegment,IonSegmentButton, IonSlides, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

// let veter_data = [
//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

// ];



const MakeAppointment: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [AvaiTime, setAvailableTime] = useState<string>('');
  const [makeAppoint, setMakeAppoint] = useState<boolean>(false);
  const storage = window.localStorage;
  const history = useHistory();

  const locationpara = useLocation();
  const resultlist = locationpara.state as any;
  console.log(resultlist)
  useEffect(() => {
    let userInfo = storage.getItem("userInfo"); 
  
    if(!userInfo){     
      history.push('/Login');
    } 
  }, [history]);

  const OnClickMakeAppoint = () => {
    let time = AvaiTime;
    if(!time.trim()){
      setMessage("Please choose time slot!");
      setMakeAppoint(true);
    }else{
      setShowModal(true);
    }
      
  };
  
  function veterDetail(item:any){
    //alert("displayDetail"+item.isActive);
    return (
      <div>
         <IonRow>
              <IonCol>
                <IonLabel><b>Name: </b></IonLabel>
                <IonLabel>{item.veter.name}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Treatment/Service: </b></IonLabel>
                <IonLabel>{item.veter.major}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Address: </b></IonLabel>
                <IonLabel>{item.veter.address}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Tel: </b></IonLabel>
                <IonLabel>{item.veter.tel}</IonLabel>
              </IonCol>
            </IonRow>
      </div>
    );
  }

  function displayVeter(item: any, index: any) {
    return (
     <IonCard routerLink= "/Home/SearchResult/MakeAppointment">
        <IonCardContent class="ion-text-left">
          <IonToolbar>
            <IonItem>
            <IonLabel>
              <div className="card-title"> <b>{item.veter.veterName}</b></div>
            </IonLabel>
            <img src= "assets/images/personHead.png" width = "80px" />
            </IonItem>       
          </IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel> </IonLabel>
                <IonLabel>{item.clinicDate}</IonLabel>
              </IonCol>
            </IonRow>       
             {/* {veterDetail(item)} */}
          </IonGrid>
          <IonToolbar > 
              <IonItem>
                <IonLabel class = "ion-text-left"> <b>Avaiable Time Slot</b> </IonLabel>
                <IonSelect   
                  interface="popover"
                  //placeholder="Select Time"
                  onIonChange={e => setAvailableTime(e.detail.value)}
                  value={AvaiTime}>
                  <IonSelectOption value="09:00 - 09:30am">09:00 - 09:30am</IonSelectOption>
                  <IonSelectOption value="09:30 - 10:00am">09:30 - 10:00am</IonSelectOption>
                  <IonSelectOption value="10:00 - 10:30am">10:00 - 10:30am</IonSelectOption>
                  <IonSelectOption value="10:30 - 11:00am">10:30 - 11:00am</IonSelectOption>
                  <IonSelectOption value="11:00 - 11:30am">11:00 - 11:30am</IonSelectOption>
                  <IonSelectOption value="11:30 - 12:00pm">11:30 - 12:00pm</IonSelectOption>
                </IonSelect>
              </IonItem>
              </IonToolbar>
              <IonToolbar>
              <IonButton onClick = {OnClickMakeAppoint}   
                         class = "button button-outline button-block"
                         color = "secondary"><b>Make Appointment</b></IonButton>
                <IonModal isOpen={showModal}  swipeToClose={true} cssClass="calendar-modal"
                          onDidDismiss={() => setShowModal(false)}>  
                  
                  <IonContent fullscreen>
                    <IonGrid>    
                        <IonRow>
                          <IonCol>
                            <IonHeader>
                              <IonLabel><b>Appointment Summary</b></IonLabel>
                            </IonHeader>
                            <IonItem>
                              <IonIcon icon={location}></IonIcon>
                              <IonLabel ><b>Location:</b></IonLabel>
                              <IonLabel>Jurong West Clinic 1</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonIcon icon={person}></IonIcon>
                              <IonLabel><b>Veter Name:</b></IonLabel>
                              <IonLabel>Dortor Name 1</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonIcon icon={time}></IonIcon>
                              <IonLabel><b>Time Slot:</b></IonLabel>
                              <IonLabel>{AvaiTime}</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonButton  className = "buttonCus button-outline" size = "default" onClick={() => {setShowModal(false)}}><b>Cancel</b></IonButton>
                              <IonButton className = "buttonCus button-outline" size = "default" onClick={() => {setShowModal(false); handleMakeAppoint()}}><b>Confirm</b></IonButton>
                            </IonItem>
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                   
                  </IonContent>
                  
                  
                  
                </IonModal>
                
                <IonRow>
                  <IonCol>
                    <IonAlert
                      isOpen={makeAppoint}
                      onDidDismiss={() => setMakeAppoint(false)}
                      header={message}
                      //message='<icon src = "assets/images/Icon.jpg" width="35px" height="35px"> Delete this file?'
                      buttons={["OK"]} 
                    />
                  </IonCol>
                </IonRow>
            </IonToolbar>   
        </IonCardContent>
      </IonCard>
    );
  }

  const handleMakeAppoint = () => {
      setMessage("The appointment has been confirmed!");
      setMakeAppoint(true);
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
      <IonContent >
      {typeof resultlist !== 'undefined' ? resultlist.veterdetail.map((item: any, index:any) => displayVeter(item, index)): null}
      </IonContent>
    </IonPage>
  );
};

export default MakeAppointment;

function value(value: any) {
  throw new Error('Function not implemented.');
}
