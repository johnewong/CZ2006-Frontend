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
import { calendarNumberOutline, timerOutline, chevronDown } from "ionicons/icons";
import "./EventList.css";

const EventList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EventList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent class="ion-text-left">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel>
                    <div className="card-title">Appointment 1</div>
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="5">
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={calendarNumberOutline}
                  />                  
                  <IonLabel>4 Feb 2021</IonLabel>
                </IonCol>
                <IonCol size="5">
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={timerOutline}
                  />
                  <IonLabel>10:30 AM</IonLabel>
                </IonCol>
                <IonCol>
                <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={chevronDown}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
          {/* <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={idCardOutline}
              slot="start"
            />
            <IonLabel>Appointment Message</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={calendarNumberOutline}
              slot="start"
            />
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={timerOutline}
              slot="start"
            />
          </IonItem> */}
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={idCardOutline}
              slot="start"
            />

            <IonLabel>Appointment Message</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={timerOutline}
              slot="start"
            />

            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={calendarNumberOutline}
              slot="start"
            />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EventList;
