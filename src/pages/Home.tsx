import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { navigate } from "ionicons/icons";
import { calendar } from "ionicons/icons";
import { search } from "ionicons/icons";
import { person } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg } from '@ionic/react';


const Home: React.FC = () => {
  const [location, SetLocation] = useState<string>("Jurong West");
  const [date, SetDate] = useState<string>("1 Feb 2021");
  const [clinicName, SetClinicName] = useState<string>("Happy Pet Clinic");
  const [doctorName, SetDoctorName] = useState<string>("Dr Goh Seng Hong");
  const [iserror, SetIserror] = useState<boolean>(false);
  const [message, SetMessage] = useState<string>("");
  const handleSearch = () => {
      return;
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
        {/*Image logo*/}
        <IonRow>
          <IonCol>
            <img src= "assets/images/Logo.png" width = "300px" />
          </IonCol>
        </IonRow>
        {/*Login input*/}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={navigate}
                    />
                  <IonInput class = "ion-text-center"
                      style={{color: "#46b0e0"} }
                      //type="email"
                      value={location}
                      onIonChange={(e) => SetLocation(e.detail.value!)}>
                  </IonInput>       
              </IonItem>
              <IonRow></IonRow><IonCol></IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={calendar}
                    />
                  <IonInput class = "ion-text-center"
                      style={{color: "#46b0e0"} }
                      //type="email"
                      value={date}
                      onIonChange={(e) => SetDate(e.detail.value!)}>
                  </IonInput>       
              </IonItem>
              <IonRow></IonRow><IonCol></IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={search}
                    />
                  <IonInput class = "ion-text-center"
                      style={{color: "#46b0e0"} }
                      //type="email"
                      value={clinicName}
                      onIonChange={(e) => SetClinicName(e.detail.value!)}>
                  </IonInput>       
              </IonItem>
              <IonRow></IonRow><IonCol></IonCol>
              <IonItem>
                <IonIcon
                    style={{ fontSize: "30px", color: "#46b0e0"} }
                    icon={person}
                    />
                  <IonInput class = "ion-text-center"
                      style={{color: "#46b0e0"} }
                      //type="email"
                      value={doctorName}
                      onIonChange={(e) => SetDoctorName(e.detail.value!)}>
                  </IonInput>       
              </IonItem>
            </IonCol>
          </IonRow>  
          <IonRow></IonRow><IonCol></IonCol><IonRow></IonRow><IonCol></IonCol>         
          {/*Login button*/}
          <IonRow></IonRow><IonCol></IonCol>
          <IonRow>
            <IonCol> 
              <IonButton class="button button-outline button-block"
                         color = "#46b0e0" 
                         onClick = {handleSearch}
                         routerLink = "/SearchResult"
                         ><b>Search</b></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;