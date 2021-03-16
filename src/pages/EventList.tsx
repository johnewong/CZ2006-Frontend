import {
  IonContent,
  IonHeader,
  IonLifeCycleContext,
  IonPage,
  IonRoute,
  IonTabBar,
  IonTitle,
  IonToolbar,
  IonIcon, IonItem, IonLabel, IonReorder, IonReorderGroup,IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButton

} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  female,
  male,
  personCircle,
  trash,
  share,
  caretForwardCircle,
  heart,
  close,
  pin,
  wifi,
  wine, warning, walk
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonRouteInner } from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import {calendarNumberOutline,timerOutline

} from "ionicons/icons";
import { Profiler } from "inspector";



const EventList: React.FC = () => {





  // @ts-ignore
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>EventList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Appointment</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              ###################
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>Location</IonLabel>
              <IonButton fill="outline" slot="end">View</IonButton>
            </IonItem>

            <IonCardContent>
              Current Location:xxxxxxxx
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem href="#" className="ion-activated">
              <IonIcon icon={calendarNumberOutline} slot="start" />
              <IonLabel>Date</IonLabel>
            </IonItem>

            <IonItem href="#">
              <IonIcon icon={timerOutline} slot="start" />
              <IonLabel>Time</IonLabel>
            </IonItem>

            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Appointment 1</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                ###################
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Appointment 2</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                ###################
              </IonCardContent>
            </IonCard>


          </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default EventList;
