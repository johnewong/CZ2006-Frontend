import { IonCard, IonContent, IonHeader, IonModal, IonPage, IonSelectPopover, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, arrowForward, caretBack, caretForward } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom"
import { IonItem, IonLabel, IonInput, IonButton, IonButtons, IonIcon, IonAlert,IonImg, IonSegment, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

let dataString = "";

// let clinic_data = [
//   {
//     isActive:false,
//     clinic: {
//       name: "Hougang Vet Center",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//     treatmentAvailable: {
//       treatmentName: "Dental Scaling",
//     },
//   },

//   {
//     isActive:false,
//     clinic: {
//       name: "Hougang Vet Center",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//     treatmentAvailable: {
//       treatmentName: "Dental Scaling",
//     },
//   },

//   {
//     isActive:false,
//     clinic: {
//       name: "Hougang Vet Center",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//     treatmentAvailable: {
//       treatmentName: "Dental Scaling",
//     },
//   },

// ];
//const [activeItem, setActiveItem] = React.useState(1);



const SearchResult: React.FC = () => {
const history = useHistory();


const location = useLocation();
const resultlist = location.state as any;

  console.log(resultlist)
  function ClinicDetail(item:any){
    //alert("displayDetail"+item.isActive);
    return (
      <div>
        <IonRow>
              <IonCol>
                <IonLabel><b>Description: </b></IonLabel>
                <IonLabel>{item.vetDescription}</IonLabel>
              </IonCol>
            </IonRow>
          
            <IonRow>
              <IonCol>
                <IonLabel><b>Address: </b></IonLabel>
                <IonLabel>{item.vetAddress}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Tel: </b></IonLabel>
                <IonLabel>{item.tel_office_1}</IonLabel>
              </IonCol>
            </IonRow>
      </div>
    );
  }

  function Redirect (item: any) {
    history.push( "/Home/SearchResult/MakeAppointment",
              { veterdetail: item, vetdetail: resultlist.vetdetail});
    return;
  }

  function displayEvent(item: any, index: any) {
    return (
      
    <IonCard onClick={() => Redirect(item.veterSlot)}>
        <IonCardContent class="ion-text-left">
          <IonToolbar>
            <IonItem>
            <IonLabel>
              <div className="card-title"> <b>{item["vet"].vetName}</b></div>
            </IonLabel>
            <img src= "assets/images/Logo.png" width = "150px" />
            </IonItem>       
          </IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel> </IonLabel>
                <IonLabel>{}</IonLabel>
              </IonCol>
            </IonRow>       
            {ClinicDetail(item["vet"])}
          </IonGrid>
        </IonCardContent>
      </IonCard>
    );
  }


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
        {typeof resultlist !== 'undefined' ? resultlist.vetdetail.map((item: any, index: any) => displayEvent(item, index)) : null}
      </IonContent>
    </IonPage>
  );
};

export default SearchResult;