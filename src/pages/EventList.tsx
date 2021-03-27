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
import { Collapse } from "react-collapse";
import React, { useCallback, useState } from "react";
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
const appointment_data = [
  {
    isActive: false,
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
    isActive: false,
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

const EventList: React.FC = () => {
  const [collapseNumber, setCollapseNumber] = useState(0);
  function onClick (index:number) {
    //useCallback(()=>setCollapseNumber(index), [collapseNumber]);
    console.log("click!", index);
    console.log("collapseNumber!", collapseNumber);
    if(index ==  collapseNumber){
      console.log("toggle");
      setCollapseNumber(100);
    }
    else{
      setCollapseNumber(index);
    }   
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EventList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {appointment_data.map((item, index) => {
          // console.log("collapseNumber", collapseNumber);
          // console.log("index date", index, item.appointmentDate);
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
                        icon={index == collapseNumber?chevronDown : chevronUp}
                        onClick={(e) => onClick(index)}
                      />
                    </IonCol>
                  </IonRow>
                  {/* <Collapse isOpened={isButtonCollapseOpen}> */}
                  <Collapse isOpened={index == collapseNumber}>
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
                  </Collapse>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default EventList;
