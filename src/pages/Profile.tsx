import {
  IonContent,
  IonHeader,
  IonLifeCycleContext,
  IonPage,
  IonRoute,
  IonTabBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { female, male, personCircle } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
  IonCheckbox,
  IonText,
} from "@ionic/react";
import { IonRouteInner } from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import { personAddOutline } from "ionicons/icons";
import { calendarNumberOutline } from "ionicons/icons";
import { callOutline } from "ionicons/icons";
import { mailOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";
import { maleFemaleOutline } from "ionicons/icons";

function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

// @ts-ignore
const Profile: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
              />
            </IonCol>
          </IonRow>

          <IonCol>
            <IonIcon
              style={{ fontSize: "70px", color: "#0040ff" }}
              icon={personCircle}
            />
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={personAddOutline}
              />
              <IonLabel position="floating"> User Name</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>

          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#0040ff" }}
              icon={maleFemaleOutline}
            />

            <IonItem>
              <IonLabel>Male</IonLabel>
              <IonCheckbox name={male} />
            </IonItem>
            <IonItem>
              <IonLabel>female</IonLabel>
              <IonCheckbox name={female} />
            </IonItem>
          </IonItem>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={calendarNumberOutline}
              />
              <IonLabel position="floating">Birth Date</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={callOutline}
              />
              <IonLabel position="floating">Mobile number</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={mailOutline}
              />
              <IonLabel position="floating"> Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonButton expand="block" onClick={() => alert("click")}>
              Edit
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
