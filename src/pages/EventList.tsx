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

import {
  calendarNumberOutline,
  timerOutline,
  chevronDown,
  chevronUp
} from "ionicons/icons";
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
                  <IonLabel> </IonLabel>
                  <IonLabel>4 Feb 2021</IonLabel>
                </IonCol>
                <IonCol size="5">
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={timerOutline}
                  />
                  <IonLabel> </IonLabel>
                  <IonLabel>10:30 AM</IonLabel>
                </IonCol>
                <IonCol>
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={chevronDown}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Vet: </IonLabel>
                  <IonLabel>Dr.Lee </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Treatment/Service: </IonLabel>
                  <IonLabel>Dental Scaling</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Address: </IonLabel>
                  <IonLabel>681 Hougang Ave 8, Singapore 530681</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Tel: </IonLabel>
                  <IonLabel>62468681</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent class="ion-text-left">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel>
                    <div className="card-title">Appointment 2</div>
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
                  <IonLabel>4 Feb 2021</IonLabel>
                </IonCol>
                <IonCol size="5">
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={timerOutline}
                  />
                  <IonLabel> </IonLabel>
                  <IonLabel>10:30 AM</IonLabel>
                </IonCol>
                <IonCol>
                  <IonIcon
                    style={{ fontSize: "25px", color: "#0040ff" }}
                    icon={chevronUp}
                  />
                </IonCol>
              </IonRow>

            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EventList;
