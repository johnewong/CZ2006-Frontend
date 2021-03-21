import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButton

} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  pin, idCardOutline
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonRouteInner } from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import {calendarNumberOutline,timerOutline

} from "ionicons/icons";


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
            <IonItem>
              <IonIcon
                  style={{ fontSize: "20px", color: "#0040ff" }}
                  icon={idCardOutline} slot="start" />


              <IonLabel>Appointment Message</IonLabel>

            </IonItem>

            <IonItem>
            <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={timerOutline} slot="start" />



              <IonIcon style={{ fontSize: "20px", color: "#0040ff" }}
                       icon={calendarNumberOutline} slot="start" />

            </IonItem>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon
                  style={{ fontSize: "20px", color: "#0040ff" }}
                  icon={idCardOutline} slot="start" />


              <IonLabel>Appointment Message</IonLabel>

            </IonItem>

            <IonItem>
              <IonIcon
                  style={{ fontSize: "20px", color: "#0040ff" }}
                  icon={timerOutline} slot="start" />



              <IonIcon style={{ fontSize: "20px", color: "#0040ff" }}
                       icon={calendarNumberOutline} slot="start" />

            </IonItem>
          </IonCard>


        </IonContent>
      </IonPage>
  );
};

export default EventList;
