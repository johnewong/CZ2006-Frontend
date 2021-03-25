import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { pin, idCardOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonRouteInner } from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import {
  calendarNumberOutline,
  timerOutline,
  chevronDown,
  chevronUp,
} from "ionicons/icons";
import "./EventList.css";

// const [isActive, setActive] = useState<boolean>(false);

let dataString = "";
let appointment_data = [
  {
    isActive:false,
    appointmentDate: "4 Feb 2020",
    appointmentStartTime: "10:30 AM",
    appointmentEndTime: "11:00 AM",
    vet: {
      vetName: "Hougang Vet Center",
      vetAddress: "681 Hougang Ave 8, Singapore 530681",
      tel: "62468681",
    },
    veter: {
      veterName: "Dr.Lee",
    },
    treatment: {
      treatmentName: "Dental Scaling",
    },
  },
  {
    isActive:false,
    appointmentDate: "5 Feb 2020",
    appointmentStartTime: "10:30 AM",
    appointmentEndTime: "11:00 AM",
    vet: {
      vetName: "Hougang Vet Center",
      vetAddress: "681 Hougang Ave 8, Singapore 530681",
      tel: "62468681",
    },
    veter: {
      veterName: "Dr.Lee",
    },
    treatment: {
      treatmentName: "Dental Scaling",
    },
  },
];

//const [activeItem, setActiveItem] = React.useState(1);

function handleExpand(item:any){
  item.isActive = true;
  alert(item.isActive);
}

function EventDetail(item:any){
  //alert("displayDetail"+item.isActive);
  return (
    <div>
       <IonRow>
            <IonCol>
              <IonLabel>Vet: </IonLabel>
              <IonLabel>{item.veter.veterName}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Treatment/Service: </IonLabel>
              <IonLabel>{item.treatment.treatmentName}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Address: </IonLabel>
              <IonLabel>{item.vet.vetAddress}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Tel: </IonLabel>
              <IonLabel>{item.vet.tel}</IonLabel>
            </IonCol>
          </IonRow>
    </div>
  );
}

function displayEvent(item: any, index: any) {
  
  return (
   <IonCard>
      <IonCardContent class="ion-text-left">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>
                <div className="card-title">Appointment</div>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="5">
              <IonIcon
                style={{ fontSize: "25px", color: "#0040ff" }}
                icon={calendarNumberOutline}
              />
              <IonLabel> </IonLabel>
              <IonLabel>{item.appointmentDate}</IonLabel>
            </IonCol>
            <IonCol size="5">
              <IonIcon
                style={{ fontSize: "25px", color: "#0040ff" }}
                icon={timerOutline}
              />
              <IonLabel> </IonLabel>
              <IonLabel>{item.appointmentStartTime}</IonLabel>
            </IonCol>
            <IonCol>
              <IonIcon
                style={{ fontSize: "25px", color: "#0040ff" }}
                icon={chevronDown}
                onClick={()=>  handleExpand(index)}
              />
            </IonCol>
          </IonRow>
                
           {EventDetail(item)}

          {/* <IonRow>
            <IonCol>
              <IonLabel>Vet: </IonLabel>
              <IonLabel>{item.veter.veterName}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Treatment/Service: </IonLabel>
              <IonLabel>{item.treatment.treatmentName}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Address: </IonLabel>
              <IonLabel>{item.vet.vetAddress}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Tel: </IonLabel>
              <IonLabel>{item.vet.tel}</IonLabel>
            </IonCol>
          </IonRow> */}
          
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

const EventList: React.FC = () => {
  //getData();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EventList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {appointment_data.map((item, index) => displayEvent(item, index))}
      </IonContent>
    </IonPage>
  );
};

export default EventList;
