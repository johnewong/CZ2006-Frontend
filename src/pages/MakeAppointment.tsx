import {
  IonCard,
  IonContent,
  IonBackdrop,
  IonSelect,
  IonSelectOption,
  IonSelectPopover,
  IonHeader,
  IonButtons,
  IonPage,
  IonSlide,
  IonTitle,
  IonToolbar,
  IonModal,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import "./MakeAppointment.css";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  arrowBack,
  caretBack,
  caretForward,
  location,
  time,
  person,
  constructOutline,
} from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonSlides,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import axios from "axios";
import moment from "moment";
import { UserContext } from "../App";


function formatTime(d: Date) {
  var hour = "" + d.getHours(),
    min = "" + d.getMinutes();

  if (d.getHours() < 10) {
    hour = "0" + d.getHours();
  }
  if (d.getMinutes() < 10) {
    min = "0" + d.getMinutes();
  }
  return [hour, min].join(":");
}


const avaiTimeArr: any [] = [];
const MakeAppointment: React.FC = () => {
  const user = useContext(UserContext);

  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [avaiTime, setAvailableTime] = useState<string>("");
  const [makeAppoint, setMakeAppoint] = useState<boolean>(false);
  const [confirmAppoint, setconfirmAppoint] = useState<boolean>(false);
  const [veterName, setveterName] = useState<string>("");
  const [veterID, setveterID] = useState<number>(0);
  const storage = window.localStorage;
  
  const [iserror, setIserror] = useState<boolean>(false);
  const history = useHistory();
  const locationpara = useLocation();
  
  const resultlist = locationpara.state as any;
   
  if(typeof resultlist !== "undefined" &&
  resultlist.hasOwnProperty("veterdetail") !== false){
   
    if(avaiTimeArr.length == 0){
      for(var i=0; i<resultlist.veterdetail.length; i++){
        // if(avaiTimeArr[i] == null){
        //   avaiTimeArr[i] = ""
        // }

          avaiTimeArr.push("")
        
      }
      
    }
  }
  
  useEffect(() => {
    let userInfo = storage.getItem("userInfo");
    
    if (!userInfo) {
      history.push("/Login");
    }else{
      
      user.setIsLoggedIn(true);
    }
  }, [history]);


  function chooseSlots(index: any,time: string,item: any){
    avaiTimeArr[index] = time;
  }

  function redirectEventlist() {
    setconfirmAppoint(false);
    history.push("/EventList");
  }

  
  function onClickMakeAppoint (index: number,item: any) {

    let time = avaiTimeArr[index];
    if ( time == "" ) {
      setMessage("Please choose time slot!");
      setMakeAppoint(true);
    } else {
      
      setveterID(item.veter.veterID);
      setveterName(item.veter.veterName);
      setAvailableTime(avaiTimeArr[index]);
      setShowModal(true);
    }
  };

  const api = axios.create({
    //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
    baseURL: `http://localhost:8080`,
  });

  const handleMakeAppoint = async (veterID: number,vetid: number) => {
    let userinfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

    let time = avaiTime.split("-");

    let date = moment(resultlist.appointmentDate).format("YYYY-MM-DD");
    let startDateTime = moment(date + " " + time[0], "YYYY-MM-DD hh:mm");
    let endDateTime = moment(date + " " + time[1], "YYYY-MM-DD hh:mm");
    
    const appointmentData = {
      appointmentDate: moment(resultlist.appointmentDate).format("YYYY-MM-DDThh:mm:ss+00:00"),
      appointmentStartTime: startDateTime,
      appointmentEndTime: endDateTime,
      customerID: userinfo.userID,
      customerName: userinfo.userName,
      status: 1,
      treatmentID: resultlist.treatmentID,
      createdBy: userinfo.userID,
      vetID: vetid,
      veterID: veterID,
    };
    try {
      await api.post("/appointment/add", appointmentData).then((res) => {
        
        let str = JSON.stringify(res.data);

        setMessage("The appointment has been confirmed!");
        setconfirmAppoint(true);
      });
    } catch (err) {
      setMessage("Add appointment fail! Please try again!");
      setIserror(true);
    }
  };

  function Back() {
    history.push({
      pathname: "/SearchResult",
      state: {
        vetdetail: resultlist.vetdetail,
        date:resultlist.date,
        location: resultlist.location,
        locationName: resultlist.locationName,
      },
    });
    return;
  }

  function showDetail(item: any) {
    //alert("displayDetail"+item.isActive);
    return (
      <div>
        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Name: </b>
            </IonLabel>
            <IonLabel>{item.veter.name}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Treatment/Service: </b>
            </IonLabel>
            <IonLabel>{item.veter.major}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Address: </b>
            </IonLabel>
            <IonLabel>{item.veter.address}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Tel: </b>
            </IonLabel>
            <IonLabel>{item.veter.tel}</IonLabel>
          </IonCol>
        </IonRow>
      </div>
    );
  }

  function displayVeter(item: any, index: any) {
    if (item.availableSlots != null) {
      return (
        <IonCard key={index}>
          <IonCardContent class="ion-text-left">
            <IonToolbar>
              <IonItem>
                <IonLabel>
                  <div className="card-title">
                    {" "}
                    <b>{item.veter.veterName}</b>
                  </div>
                </IonLabel>
                <img
                  src="assets/images/personHead.png"
                  width="80px"
                  className="veterimage"
                />
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
            <IonToolbar>
              <IonItem>
                <IonLabel class="ion-text-left">
                  {" "}
                  <b>Available Slot</b>
                </IonLabel>
                <IonSelect 
                  interface="action-sheet"
                  onIonChange={(e) => chooseSlots(index,e.detail.value,item)}
                >
                  {item.availableSlots.map((item: any, index: any) => {
                    if(item.available == true){
                        
                      var start = new Date(item.startTime);
                      var end = new Date(item.endTime);

                      var startTime = formatTime(start);
                      var endTime = formatTime(end);

                      return (
                        <IonSelectOption
                          key={index}
                          value={startTime + "-" + endTime}
                        >
                          {startTime + " - " + endTime}
                        </IonSelectOption>
                      );
                    
                    }
                  })}
                </IonSelect>
              </IonItem>
            </IonToolbar>
            <IonToolbar>
              <IonButton
                onClick={(e) => onClickMakeAppoint(index,item)}
                class="button button-outline button-block"
                color="secondary"
              >
                <b>Make Appointment</b>
              </IonButton>
             
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
          <IonButtons slot="secondary">
            <IonButton fill="default" onClick={Back}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonLabel class="ion-text-left" color="#000000">
            <b>{typeof resultlist !== "undefined" && typeof resultlist.selectedVet !== "undefined" && resultlist.selectedVet.vetName}</b>
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: "22px" }} color="#000000">
            <b>{typeof resultlist !== "undefined" && typeof resultlist.appointmentDate !== "undefined" &&  moment(resultlist.appointmentDate).format("DD-MM-YYYY")}</b>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {typeof resultlist !== "undefined" &&
        resultlist.hasOwnProperty("veterdetail") !== false
          ? resultlist.veterdetail.map((item: any, index: any) =>
              displayVeter(item, index)
            )
          : null}
      </IonContent>

      <IonModal
                isOpen={showModal}
                swipeToClose={true}
                onDidDismiss={() => setShowModal(false)}
                cssClass="select-modal"
              >
                <IonContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonHeader>
                          <IonLabel>
                            <b>Appointment Summary</b>
                          </IonLabel>
                        </IonHeader>
                        <p></p>
                        <IonItem>
                          <IonIcon icon={location}></IonIcon>
                          <IonLabel>
                            <b>Location:</b>
                          </IonLabel>

                          <IonLabel>
                          {typeof resultlist !== "undefined" && typeof resultlist.selectedVet !== "undefined" && resultlist.selectedVet.vetAddress}
                          
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonIcon icon={person}></IonIcon>
                          <IonLabel>
                            <b>Veter Name:</b>
                          </IonLabel>
                          <IonLabel>{veterName}</IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonIcon icon={time}></IonIcon>
                          <IonLabel>
                            <b>Time Slot:</b>
                          </IonLabel>
                          <IonLabel>{avaiTime}</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                          <IonButton
                            className="buttonCus button"
                            expand="block"
                            size="default"
                            onClick={() => {
                              setShowModal(false);
                            }}
                          >
                            <b>Cancel</b>
                          </IonButton>
                          <IonButton
                            className="buttonCus button"
                            expand="block"
                            size="default"
                            onClick={() => {
                              setShowModal(false);
                              handleMakeAppoint(
                                veterID,
                                resultlist.selectedVet.vetId
                              );
                            }}
                          >
                            <b>Confirm</b>
                          </IonButton>
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
            onDidDismiss={() => redirectEventlist()}
            header={message}
            //message='<icon src = "assets/images/Icon.jpg" width="35px" height="35px"> Delete this file?'
            buttons={["OK"]}
          />

          <IonAlert
            isOpen={iserror}
            header={message}
            onDidDismiss={() =>  setIserror(false)}
            //message='<icon src = "assets/images/Icon.jpg" width="35px" height="35px"> Delete this file?'
            buttons={["OK"]}
          />
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default MakeAppointment;
