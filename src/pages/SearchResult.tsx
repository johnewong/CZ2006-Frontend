import { IonCard, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, arrowForward, caretBack, caretForward } from "ionicons/icons";
import { useHistory } from "react-router-dom"
import { IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon, IonAlert,IonImg, IonSegment, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

let dataString = "";
let clinic_data = [
  {
    isActive:false,
    clinic: {
      name: "Hougang Vet Center",
      address: "681 Hougang Ave 8, Singapore 530681",
      tel: "62468681",
    },
    veterAvailable: {
      veterName1: "Dr.Lee",
      veterName2: "Dr.Hoh",
      veterName3: "Dr.Seh",
    },
    treatmentAvailable: {
      treatmentName: "Dental Scaling",
    },
  },

  {
    isActive:false,
    clinic: {
      name: "Hougang Vet Center",
      address: "681 Hougang Ave 8, Singapore 530681",
      tel: "62468681",
    },
    veterAvailable: {
      veterName1: "Dr.Lee",
      veterName2: "Dr.Hoh",
      veterName3: "Dr.Seh",
    },
    treatmentAvailable: {
      treatmentName: "Dental Scaling",
    },
  },

  {
    isActive:false,
    clinic: {
      name: "Hougang Vet Center",
      address: "681 Hougang Ave 8, Singapore 530681",
      tel: "62468681",
    },
    veterAvailable: {
      veterName1: "Dr.Lee",
      veterName2: "Dr.Hoh",
      veterName3: "Dr.Seh",
    },
    treatmentAvailable: {
      treatmentName: "Dental Scaling",
    },
  },

];

//const [activeItem, setActiveItem] = React.useState(1);


function ClinicDetail(item:any){
  //alert("displayDetail"+item.isActive);
  return (
    <div>
       <IonRow>
            <IonCol>
              <IonLabel>Clinic: </IonLabel>
              <IonLabel>{item.clinic.name}</IonLabel>
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
              <IonLabel>{item.clinic.address}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Tel: </IonLabel>
              <IonLabel>{item.clinic.tel}</IonLabel>
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
                <div className="card-title">Clinics</div>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="5">
              <IonLabel> </IonLabel>
              <IonLabel>{item.clinicDate}</IonLabel>
            </IonCol>
          </IonRow>       
           {ClinicDetail(item)}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

const SearchResult: React.FC = () => {
  //getData();
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonButtons  slot="secondary" >
              <IonButton fill="default" routerLink = "/Home">
                <IonIcon  icon={arrowBack}/>
              </IonButton>
            </IonButtons>
            <IonLabel class = "ion-text-left" color = "#000000"><b>Jurong West</b></IonLabel>
          </IonToolbar>
          </IonHeader>
          <IonHeader>   
            <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="clear" color="#000000" >
                <IonIcon  icon={caretBack} />
                Previous
              </IonButton>
            </IonButtons>
            <IonTitle style={{fontSize: "22px"}} color = "#000000"><b> 1 Feb 2021</b></IonTitle>
            <IonButtons slot="primary" >
              <IonButton fill="clear" color="#000000">Next
                <IonIcon icon={caretForward} />
              </IonButton>
            </IonButtons>      
          </IonToolbar>
      </IonHeader>
      <IonContent>
        {clinic_data.map((item, index) => displayEvent(item, index))}
      </IonContent>
    </IonPage>
  );
};

export default SearchResult;