import {
  IonContent,
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

interface UserInfo {
  userID: number;
  contactNumber:string;
  customerName: string;
  emailAddress:string;
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

  const [profileItems, setItems] = useState([]);
  const [contactNumber, setContactNumber] = useState<string>("");
  // const [emailAddress, setEmailAddress] = useState<string>("");
  const [gender, setGender] = useState<boolean>();
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icNumber, setIcNumber] = useState<string>("");
  const [userType, setUserType] = useState<string>("0");


  useEffect(() => {

    const obj = JSON.parse(localStorage.getItem('userInfo') || '{}');
    setContactNumber(obj["contactNumber"])
    console.log(obj["contactNumber"])
    setBirthday(obj["birthDate"])
    console.log(obj["birthDate"])
    setUsername(obj["userName"])
    console.log(obj["userName"])
    setemailAddress(obj["emailAddress"])
    console.log(obj["emailAddress"])


    if (!userInfo) {
      history.push("/Login");
    }
    else{
      setUserInfo(obj);
    }
  }, [history]);


  const handleEdit = async () => {
    const EditData = {
      "userName": userName,
      "birthdate": birthday,
      "contactNumber": contactNumber,
      "emailAddress": emailAddress,
      "gender": gender,
      "icNumber": icNumber,
      "userType": userType,


    };
    const api = axios.create({
      baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
      //baseURL: `http://localhost:8080`
    })
    console.log(EditData)

    // try {
    //   await api.post("/account/user/profile", EditData)
    //       .then(res => {
    //         let str = JSON.stringify(res.data);
    //         console.log(res.data);
    //         // console.log(str);
    //         setMessage("update successfully!");
    //         setIserror(true);
    //
    //
    //       });
    // } catch (err) {
    //   setMessage("Information missing!");
    //   setIserror(true)
    // }
  }



  // const currentUser = obj.userName;
  // const currentBirthDate = obj.birthDate;
  // const ContactNumber = obj.contactNumber;
  // const CurrentEmail = obj.emailAddress;

  //return currentUser;
    //console.log("username is " +obj.userName);



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

              <IonInput value={userName}
                        class = "ion-text-center"
                        placeholder = "username"
                        onIonChange={(e) => setUsername(e.detail.value!)}></IonInput>
            </IonItem>
          </IonCol>

          <IonItem>
            <IonIcon
              style={{ fontSize: "20px", color: "#ffd401" }}
              icon={maleFemaleOutline}
            />
            <IonSegment >
              <IonSegmentButton  >
                <IonLabel >Male</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton>
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
              <IonLabel >{}</IonLabel>
              <IonInput value={birthday}
                        class = "ion-text-center"
                        placeholder = "birthDay"
                        onIonChange={(e) => setBirthday(e.detail.value!)} ></IonInput>
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
