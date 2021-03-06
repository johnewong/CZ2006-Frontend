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
import { Collapse } from "react-collapse";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { pin, idCardOutline } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import { IonRouteInner } from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import {
  calendarNumberOutline,
  timerOutline,
  chevronDown,
  chevronUp,
} from "ionicons/icons";
import "./EventList.css";
import { userInfo } from "node:os";
import moment from "moment";


interface UserInfo {
  userID: number;
  customerName: string;
}
interface Vet {
  vetName: string;
  tel_office_1: string;
  tel_office_2: string;
  vetAddress: string;
  postal_code: string;
}
interface Veter {
  veterName: string;
}
interface Treatment {
  treatmentName: string;
}
interface Appointment {
  appointmentNumber: string;
  appointmentDate: Date;
  appointmentStartTime: Date;
  appointmentEndTime: Date;
}

interface Item {
  appointment: Appointment;
  treatment: Treatment;
  vet: Vet;
  veter: Veter;
}

const EventList: React.FC = () => {
  const history = useHistory();
  const storage = window.localStorage;
  const [appointmentList, setAppointment] = useState<Array<Item>>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [temp, setTemp] = useState(0);

  const getAppointments = async (_userInfoObj: UserInfo) => {
    try {
      const res = await api.get("appointment/customer/" + _userInfoObj.userID);
     // console.log("treatment data", res.data);
      return res.data;
    } catch (error) {}
  };
  useEffect(() => {
    let _userInfo = storage.getItem("userInfo");
    let _userInfoObj = JSON.parse(_userInfo || "{}");
    
    if (!_userInfo) {
      history.push("/Login");
    } else {
     setUserInfo(_userInfoObj);
     getAppointments(_userInfoObj).then((data) => setAppointment(data));
    }
    
  }, [temp]);
  
  useEffect(()=>{
    setInterval(()=>{
      setTemp((prevTemp)=>prevTemp+1)
    }, 10000)
  }, [])

  
  const api = axios.create({
    //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`,
    baseURL: `http://localhost:8080`,
  });

  
  const [collapseNumber, setCollapseNumber] = useState(0);
  function onClick(index: number) {
    //useCallback(()=>setCollapseNumber(index), [collapseNumber]);
  //  console.log("click!", index);
  //  console.log("collapseNumber!", collapseNumber);
    if (index == collapseNumber) {
 //     console.log("toggle");
      setCollapseNumber(100);
    } else {
      setCollapseNumber(index);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EventList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {appointmentList.length == 0 && (
          <IonRow>
          <IonCol>
            <img src= "assets/images/no-record-found.png" width = "100%" />
          </IonCol>
        </IonRow>
        )}

        {appointmentList.length > 0 &&
          appointmentList.map((item, index) => {
            // console.log("collapseNumber", collapseNumber);
            // console.log("index date", index, item.appointmentDate);
            let appointmentDate = moment(
              item.appointment.appointmentStartTime
            ).format("DD-MMMM");
            let appointmentStartTime = moment(
              item.appointment.appointmentStartTime
            ).format("hh:mm");
            return (
              <IonCard key={index}>
                <IonCardContent class="ion-text-left">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonLabel>
                          <div className="card-title">
                            {item.appointment.appointmentNumber}
                          </div>
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
                        <IonLabel>
                          <b>{appointmentDate}</b>
                        </IonLabel>
                      </IonCol>
                      <IonCol size="5">
                        <IonIcon
                          style={{ fontSize: "25px", color: "#0040ff" }}
                          icon={timerOutline}
                        />
                        <IonLabel> </IonLabel>
                        <IonLabel>
                          <b>{appointmentStartTime}</b>
                        </IonLabel>
                      </IonCol>
                      <IonCol>
                        <IonIcon
                          style={{ fontSize: "25px", color: "#0040ff" }}
                          icon={
                            index == collapseNumber ? chevronDown : chevronUp
                          }
                          onClick={(e) => onClick(index)}
                        />
                      </IonCol>
                    </IonRow>
                    {/* <Collapse isOpened={isButtonCollapseOpen}> */}
                    <Collapse isOpened={index == collapseNumber}>
                      <IonRow>
                        <IonCol>
                          <IonLabel>
                            <b>Appointment with:</b>
                          </IonLabel>
                          <IonLabel>{item.veter.veterName}</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>
                            <b>Vet:</b>
                          </IonLabel>
                          <IonLabel>{item.vet.vetName}</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>
                            <b>Treatment/Service:</b>
                          </IonLabel>
                          <IonLabel>{item.treatment.treatmentName}</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>
                            <b>Address:</b>
                          </IonLabel>
                          <IonLabel>{item.vet.vetAddress}</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonLabel>
                            <b>Tel:</b>
                          </IonLabel>
                          <IonLabel>{item.vet.tel_office_1}</IonLabel>
                        </IonCol>
                      </IonRow>
                    </Collapse>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            );
          })}
      </IonContent>
    </IonPage>
  );
};

export default EventList;
