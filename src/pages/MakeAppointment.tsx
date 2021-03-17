import { IonCard, IonContent, IonHeader, IonInfiniteScrollContent, IonPage, IonSlide, IonTitle, IonToolbar,IonVirtualScroll } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { personCircle } from "ionicons/icons";
import { lockClosed } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg, IonSegment,IonSegmentButton, IonSlides, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

function validateEmail(email: string) {
  
}

const MakeAppointment: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLogin = () => {
 
  };
  const slideOpts = {
    //https://swiperjs.com/swiper-api
    initialSlide: 0,
    speed: 300,
    direction: "horizontal"
    
  };
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol class = "ion-text-left">
              <img src= "assets/images/back.png" width = "30px" />
              <IonLabel
                style={{ fontSize: "20px", color: "dark" }}>
                  <b>Clinic Name1</b>
              </IonLabel>
            </IonCol>        
          </IonRow>
          </IonToolbar>
          </IonHeader>
          <IonHeader>   
            <IonToolbar>
              <IonRow>
                <IonCol>
                  <IonSegment>
                    <IonSegmentButton style = {{height: "60px"}}>
                      Select Date
                    </IonSegmentButton>      
                  </IonSegment>
                </IonCol>
              </IonRow>
            <IonRow>

                <IonCol>
                  <IonSlides pager ={true} options={slideOpts}>
                    <IonSlide>
                      <IonSegment>
                        <IonSegmentButton style = {{height: "60px"}}>Date 1</IonSegmentButton>
                        <IonSegmentButton style = {{height: "60px"}}>Date 2</IonSegmentButton>
                        <IonSegmentButton style = {{height: "60px"}}>Date 3</IonSegmentButton>
                        <IonSegmentButton style = {{height: "60px"}}>Date 4</IonSegmentButton>
                      </IonSegment>
                    </IonSlide>
                  </IonSlides>
                </IonCol>
            </IonRow>  
          
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-float-left">
        <IonGrid>      
          <IonRow >
            <IonCol>
            <IonCard style = {{height: "300px"}}>
                <IonCardHeader>
                  <img src= "assets/images/LockLogo.png" width = "100px" />
                  <IonCardTitle class = "ion-text-left">Doctor Name1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol>
            <IonCard style = {{height: "300px"}}>
                <IonCardHeader>
                  <img src= "assets/images/LockLogo.png" width = "100px" />
                  <IonCardTitle class = "ion-text-left">Doctor Name2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent class = "ion-text-left">
                  Location: 501 Jurong West Street 51, # 01-283
                  Hong Kah Point, Singapore 640591
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MakeAppointment;