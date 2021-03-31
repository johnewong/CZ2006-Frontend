import { IonCard, IonContent,IonBackdrop,IonSelect,IonSelectOption,IonSelectPopover,
   IonHeader, IonButtons, IonPage, IonSlide, IonTitle, IonToolbar,IonModal } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import "./MakeAppointment.css";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, caretBack,caretForward,location, time, person  } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonImg, 
  IonSegment,IonSegmentButton, IonSlides, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import axios from 'axios';
  
// let veter_data = [
//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

//   {
//     isActive:false,
//     veter: {
//       name: "Dr Goh",
//       major: "Pet Surgery",
//       address: "681 Hougang Ave 8, Singapore 530681",
//       tel: "62468681",
//     },
//   },

// ];

function  formatTime(d:  Date) {
  var 
      hour = '' + (d.getHours() + 1),
      min = '' + d.getMinutes()
     
 

  return [hour, min].join(':');
}


const MakeAppointment: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [AvaiTime, setAvailableTime] = useState<string>('');
  const [makeAppoint, setMakeAppoint] = useState<boolean>(false);
  const [confirmAppoint, setconfirmAppoint] = useState<boolean>(false);
  const storage = window.localStorage;
  const history = useHistory();

  const [iserror, setIserror] = useState<boolean>(false);
  const locationpara = useLocation();
  const resultlist = locationpara.state as any;
  useEffect(() => {
    let userInfo = storage.getItem("userInfo"); 
  
    if(!userInfo){     
      history.push('/Login');
    } 
  }, [history]);

  const OnClickMakeAppoint = () => {
    let time = AvaiTime;
    if(!time.trim()){
      setMessage("Please choose time slot!");
      setMakeAppoint(true);
    }else{
      setShowModal(true);
    }
      
  };
  


  function RedirectEventlist(){
    setconfirmAppoint(false)
    history.push("/EventList")
  }
  const api = axios.create({
    baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
    //baseURL: `http://localhost:8080`
  })
  const handleMakeAppoint = async () => {
    
    const appointmentData = {
      "appointmentDate": "2021-03-31T00:00:00.000Z",
      "appointmentEndTime": "2021-03-31T20:23:32.625Z",
      "appointmentStartTime": "2021-03-31T22:23:31.625Z",
      "customerID": 2,
      "customerName": "user02",
      "status": 1,
      "treatmentID": 1,
      "vetID": 1,
      "veterID": 1
    }
    try {
      await api.post("/appointment/add", appointmentData)
      .then(res => {       
          console.log("data",res);       
          
          let str =JSON.stringify(res.data); 

          setMessage("The appointment has been confirmed!");
          setconfirmAppoint(true);

      })
     
    } catch (err) {
      console.error(err.response);
      setMessage("Add appointment fail! Please try again!");
      setIserror(true)
    }
  };

  function Back(){
   
      history.push({
        pathname: '/Home/SearchResult',
        state: {
          vetdetail: resultlist.vetdetail
        }
      });
    return;
  }


  function showDetail(item:any){
    //alert("displayDetail"+item.isActive);
    return (
      <div>
         <IonRow>
              <IonCol>
                <IonLabel><b>Name: </b></IonLabel>
                <IonLabel>{item.veter.name}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Treatment/Service: </b></IonLabel>
                <IonLabel>{item.veter.major}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Address: </b></IonLabel>
                <IonLabel>{item.veter.address}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel><b>Tel: </b></IonLabel>
                <IonLabel>{item.veter.tel}</IonLabel>
              </IonCol>
            </IonRow>
      </div>
    );
  }

  function displayVeter(item: any, index: any) {
    console.log(resultlist.selectedVet)
    if(item.availableSlots != null){
     
    return (
     <IonCard key={index}>
        <IonCardContent class="ion-text-left">
          <IonToolbar>
            <IonItem>
            <IonLabel>
              <div className="card-title"> <b>{item.veter.veterName}</b></div>
            </IonLabel>
            <img src= "assets/images/personHead.png" width = "80px" className='veterimage'  />
         
            </IonItem>      
             
          </IonToolbar>
          
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel> </IonLabel>
                <IonLabel>{item.clinicDate}</IonLabel>
              </IonCol>
            </IonRow>       
             {/* {showDetail(item)} */}
          </IonGrid>
          <IonToolbar > 
              <IonItem>
                <IonLabel class = "ion-text-left"> <b>Available Time Slot</b> </IonLabel>
                <IonSelect   
                  //placeholder="Select Time"
                  
                  onIonChange={e => setAvailableTime(e.detail.value)}
                  value={AvaiTime}
                >
                  { item.availableSlots.map((item: any, index:any) =>{
                
                  var start = new Date(item.startTime);
                  var end = new Date(item.endTime);

                  var startTime = formatTime(start);
                  var endTime = formatTime(end);

                  return (
                  <IonSelectOption  value={startTime + "-" + endTime}>{startTime + " - " + endTime}</IonSelectOption>

                  )
                  })
                  }
     
                </IonSelect>
              </IonItem>
              </IonToolbar>
              <IonToolbar>
              <IonButton onClick = {OnClickMakeAppoint}   
                         class = "button button-outline button-block"
                         color = "secondary"><b>Make Appointment</b></IonButton>
                <IonModal   isOpen={showModal}  swipeToClose={true} 
                          onDidDismiss={() => setShowModal(false)} cssClass ='select-modal' >  
                  
                  <IonContent  >
                    <IonGrid >    
                        <IonRow>
                          <IonCol>
                            <IonHeader>
                              <IonLabel><b>Appointment Summary</b></IonLabel>
                            </IonHeader>
                            <p></p>
                            <IonItem>
                              <IonIcon icon={location}></IonIcon>
                              <IonLabel><b>Location:</b></IonLabel>
                             
                              <IonLabel>
                             {resultlist.selectedVet.vetAddress}
                            </IonLabel>
                      
                            </IonItem>
                            <IonItem>
                              <IonIcon icon={person}></IonIcon>
                              <IonLabel><b>Veter Name:</b></IonLabel>
                              <IonLabel>{item.veter.veterName}</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonIcon icon={time}></IonIcon>
                              <IonLabel><b>Time Slot:</b></IonLabel>
                              <IonLabel>{AvaiTime}</IonLabel>
                            </IonItem>
                            <IonItem lines="none">
                              <IonButton  className = "buttonCus button"  expand="block" size="default" onClick={() => {setShowModal(false)}}><b>Cancel</b></IonButton>
                              <IonButton  className = "buttonCus button" expand="block" size="default" onClick={() => {setShowModal(false); handleMakeAppoint()}}><b>Confirm</b></IonButton>
                              
                            </IonItem>
                           
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                   
                  </IonContent>
                  
                  
                  
                </IonModal>
                
                <IonRow>
                  <IonCol>
                    <IonAlert
                      isOpen={makeAppoint}
                      onDidDismiss={() => setMakeAppoint(false)}
                      header={message}
                      //message='<icon src = "assets/images/Icon.jpg" width="35px" height="35px"> Delete this file?'
                      buttons={["OK"]} 
                    />

                    <IonAlert
                      isOpen={confirmAppoint}
                      onDidDismiss={() => RedirectEventlist()}
                      header={message}
                      //message='<icon src = "assets/images/Icon.jpg" width="35px" height="35px"> Delete this file?'
                      buttons={["OK"]} 
                    />
                  </IonCol>
                </IonRow>
            </IonToolbar>   
        </IonCardContent>
      </IonCard>
    );
    
  }
  }

  
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonButtons  slot="secondary" >
              <IonButton fill="default" onClick= {Back}>
                <IonIcon  icon={arrowBack}/>
              </IonButton>
            </IonButtons>
            <IonLabel class = "ion-text-left" color = "#000000"><b>Clinic Name 1</b></IonLabel>
          </IonToolbar>
          </IonHeader>
          <IonHeader>   
            <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="clear" color="#000000">
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
      <IonContent >
      {typeof resultlist !== 'undefined' && resultlist.hasOwnProperty('veterdetail') !==  false ? resultlist.veterdetail.map((item: any, index:any) => displayVeter(item, index)): null}
      </IonContent>
    </IonPage>
  );
};

export default MakeAppointment;

function value(value: any) {
  throw new Error('Function not implemented.');
}
