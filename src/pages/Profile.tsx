import {
  IonContent, IonDatetime,
  IonHeader,
  IonLifeCycleContext,
  IonPage,
  IonRoute, IonSegment, IonSegmentButton,
  IonTabBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import"./Profile.css"
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
import "./Profile.css"

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
import moment from "moment";

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

interface UserInfo {
  userID: number;
  contactNumber:string;
  customerName: string;
  emailAddress:string;
}


function validateEmail(email: string) {
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}


const Profile: React.FC = () => {

  const obj = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const history = useHistory();
  const storage = window.localStorage;
  const [userInfo, setUserInfo] = useState<UserInfo>({customerName: "123", emailAddress: "", userID: 0,contactNumber:""});
  const [userName, setUsername] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [emailAddress, setemailAddress]=useState<string>("");
  const [password, setPassword] = useState<string>("123123");
  const [userID, setuserID] = useState<string>("");
  const [profileItems, setItems] = useState([]);
  const [contactNumber, setContactNumber] = useState<string>("");
  // const [emailAddress, setEmailAddress] = useState<string>("");
  const [gender, setGender] = useState<boolean>();
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icNumber, setIcNumber] = useState<string>("");
  const [userType, setUserType] = useState<string>("0");
  const [DisplayName, setDisplayName] = useState<string>("");



  useEffect(() => {

    const obj = JSON.parse(localStorage.getItem('userInfo') || '{}');
    setContactNumber(obj["contactNumber"]);
    setBirthday(obj["birthDate"]);
    setUsername(obj["userName"]);
    setemailAddress(obj["emailAddress"]);
    setPassword(obj["password"]);
    setuserID(obj["userID"]);
    setGender(obj["gender"]);
    setDisplayName(obj["displayName"]);
    // console.log(obj["contactNumber"]);
    // console.log(obj["birthDate"]);
    // console.log(obj["userName"]);
    // console.log(obj["emailAddress"]);
    // console.log(obj["password"]);
    // console.log(obj["userID"]);
    // console.log("gender:",obj["gender"]);
    // console.log(obj["displayName"])



    if (!userInfo) {
      history.push("/Login");
    }
    else{
      setUserInfo(obj);
    }
  }, [history]);


  const handleEdit = async () => {
    if(!validateEmail(emailAddress)){
      setMessage("Please enter valid email address!");
      setIserror(true)
      return;
    }


    const EditData = {
      "userName": userName,
      "birthDate": birthday,
      "contactNumber": contactNumber,
      "emailAddress": emailAddress,
      "gender": gender,
      "icNumber": icNumber,
      "userType": userType,
      "password": password,
      "userID":userID,
      "displayName":DisplayName


    };
    const api = axios.create({
      baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
      //baseURL: `http://localhost:8080`
    })
    console.log(EditData)

    try {
      await api.post("/account/user/profile", EditData)
          .then(res => {
            let str = JSON.stringify(res.data);
            console.log(res.data);
            // console.log(str);
            setMessage("update successfully!");
            setIserror(true);
          });
      } catch (err) {
        setMessage("Information missing!");
        setIserror(true)
      }
  }




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonAlert
            isOpen={iserror}
            onDidDismiss={() => setIserror(false)}
            //header={}
            message={message}
            buttons = {[
              {
                text: 'OK',
              }
            ]}
        />

        <IonGrid>

          <IonCol>
            <img src="assets/images/Logo.png" width="200px" />
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#ffd401" }}
                icon={personOutline}
              />
              <IonLabel style={{ fontSize: "20px" }}  class="ion-username">{}</IonLabel>

              <IonInput value={DisplayName}
                        class = "ion-text-center"
                        placeholder = "username"
                        onIonChange={(e) => setDisplayName(e.detail.value!)}></IonInput>
            </IonItem>
          </IonCol>

          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#ffd401" }}
              icon={maleFemaleOutline}
            />
            <IonSegment  value={gender+""}>
              <IonSegmentButton
                  value = "false"
                  onClick = {() => setGender(false)} >
                <IonLabel >Male</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                  value = "true"
                  onClick = {() => setGender(true)} >
                <IonLabel>Female</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonItem>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#ffd401" }}
                icon={calendarNumberOutline}
              />


              <IonDatetime value={birthday}
                        displayFormat="DD-MMM-YYYY"
                        min="1900-01-01" max="2021-01-01"
                        className="birthday"
                        class = "ion-text-center"
                        placeholder = "birthDay"
                        onIonChange={(e) => setBirthday(e.detail.value!)} ></IonDatetime>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#ffd401" }}
                icon={callOutline}
              />
              <IonLabel >{}</IonLabel>
              <IonInput
                  type="number"
                  value={contactNumber}
                  class = "ion-text-center"
                          placeholder = "Contact Number"
                          onIonChange={(e) => setContactNumber(e.detail.value!)} >
              </IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                style={{ fontSize: "20px", color: "#ffd401" }}
                icon={mailOutline}
              />
              {/*<IonLabel >{CurrentEmail}</IonLabel>*/}
              <IonInput
                type="email"
                class="ion-text-center"
                value={emailAddress}
                placeholder = "Email address"
                onIonChange={(e) => setemailAddress(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonItem>
              <IonIcon
                  style={{ fontSize: "20px", color: "#ffd401" }}
                  icon={lockClosedOutline}
              />
              <IonInput
                  type="password"
                  class = "ion-text-center"
                  placeholder = "Passsword"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
              >
              </IonInput>
            </IonItem>
          </IonCol>

          <IonCol>
            <IonButton
                //disabled={!handleEdit}
                expand="block" size="default"
                color="warning"
                onClick={handleEdit}>
             <b>Edit</b>
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
