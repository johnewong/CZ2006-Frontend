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
import React, {useEffect, useState } from "react";
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
import {
  peopleOutline,
  personOutline,
  personAddOutline,
  maleFemaleOutline,
  calendarNumberOutline,
  callOutline,
  mailOutline,
  lockClosedOutline,
} from "ionicons/icons";

const api = axios.create({
  baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
})

const GetProfile = async () => {
  try {
    const res = await api.get("/account/user/all");
    console.log("data", res.data);
    return res.data;
  } catch (error) { }
  
};

const Profile: React.FC = () => {
  const history = useHistory();
  const storage = window.localStorage;
  const [birthday, setBirthday] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profileItems, setItems] = useState([]);

  

  useEffect(() => {
    var userInfo = storage.getItem("userInfo");

    console.log(userInfo);
    //console.log("current user: " + currentUser);

    if (!userInfo) {
      history.push("/Login");
    }

    GetProfile().then(data => setItems(data));

  }, [history]);

  var obj = JSON.parse(localStorage.getItem('userInfo') || '{}');

  var currentUser = obj.userName;
  var currentBirthDate = obj.birthDate;
  var ContactNumber = obj.contactNumber;
  var CurrentEmail = obj.emailAddress;
  //return currentUser;
    //console.log("username is " +obj.userName);

  const handleEdit = () => {
    return;
  };

  // @ts-ignore
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
            </IonCol>
          </IonRow>

          <IonCol>
            <IonIcon
              style={{ fontSize: "70px", color: "#0040ff" }}
              icon={peopleOutline}
            />
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={personOutline}
              />
              <IonLabel position="floating">{currentUser}</IonLabel>
            
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
              <IonLabel position="floating">{currentBirthDate}</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={callOutline}
              />
              <IonLabel position="floating">{ContactNumber}</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#0040ff" }}
                icon={mailOutline}
              />
              <IonLabel position="floating">{CurrentEmail}</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonButton expand="block" onClick={handleEdit}>
              Edit
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
