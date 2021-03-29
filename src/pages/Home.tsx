import {
  IonContent,
  IonHeader,
  IonPage,
  IonModal,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { navigate } from "ionicons/icons";
import { calendar } from "ionicons/icons";
import Calendar from "react-calendar";
import { search } from "ionicons/icons";
import { person } from "ionicons/icons";
import "./Home.css";
import './Calendar.css';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useHistory } from "react-router";

const Home: React.FC = ({}) => {
  const storage = window.localStorage;
  const history = useHistory();

  const [clinicName, SetClinicName] = useState<string>("Enter Clinic Name");
  const [doctorName, SetDoctorName] = useState<string>("Enter Veter Name");
  const [showModal, setShowModal] = useState(false);
  const [location, SetLocation] = useState<string>("");
  const [date, SetDate] = useState(new Date());

  const onChange = (date: any) => {
    SetDate(date);
  };

  useEffect(() => {
    let userInfo = storage.getItem("userInfo");

    if (!userInfo) {
      history.push("/Login");
    }
  }, [history]);


  const handleSearch = () => {
    return;
  };



  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonModal isOpen={showModal}>
          <Calendar onChange={onChange} value={date} />
          <IonLabel>{date.toDateString()}</IonLabel>
          
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        
        <IonGrid>
          {/*Image logo*/}
          <IonRow>
            <IonCol>
              <img src="assets/images/Logo.png" width="300px" />
            </IonCol>
          </IonRow>
          {/*Login input*/}
          <IonToolbar>
            <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#46b0e0" }}
                icon={navigate}
              />
              <IonSelect
                interface="popover"
                placeholder="Select location"
                style={{ color: "#46b0e0" }}
                onIonChange={(e) => SetLocation(e.detail.value)}
                value={location}
              >
                <IonSelectOption value="Jurong East">
                  Jurong West
                </IonSelectOption>
                <IonSelectOption value="Clementi">Clementi</IonSelectOption>
                <IonSelectOption value="Bishan">Bishan</IonSelectOption>
                <IonSelectOption value="Dover">Dover</IonSelectOption>
                <IonSelectOption value="Tuas">Tuas</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonRow></IonRow>
            <IonCol></IonCol>
          </IonToolbar>
          <IonToolbar>
            <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#46b0e0" }}
                icon={calendar}
              />
            <IonButton class = "button button-clear"  onClick={() => setShowModal(true)}>{date.toDateString()}</IonButton>
            
            </IonItem>
            <IonRow></IonRow>
            <IonCol></IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#46b0e0" }}
                icon={search}
              />
              <IonInput
                class="ion-text-center"
                style={{ color: "#46b0e0" }}
                //type="email"
                value={clinicName}
                onIonChange={(e) => SetClinicName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonRow></IonRow>
            <IonCol></IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#46b0e0" }}
                icon={person}
              />
              <IonInput
                class="ion-text-center"
                style={{ color: "#46b0e0" }}
                //type="email"
                value={doctorName}
                onIonChange={(e) => SetDoctorName(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonToolbar>
          {/*Login button*/}
          <IonRow></IonRow>
          <IonCol></IonCol>
          <IonToolbar>
            <IonButton
              class="button button-outline button-block"
              color="#46b0e0"
              onClick={handleSearch}
              routerLink="/Home/SearchResult"
            >
              <b>Search</b>
            </IonButton>
          </IonToolbar>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
