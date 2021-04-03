import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    IonContent,
    IonHeader,
    IonLifeCycleContext,
    IonPage,
    IonRoute,
    IonTabBar,
    IonTitle,
    IonToolbar,
    IonDatetime,
    IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonSegment,IonSegmentButton,IonGrid, IonRow, IonCol, IonRouterLink
} from '@ionic/react';

import axios from "axios";
import {personAddOutline,maleFemaleOutline,calendarNumberOutline,callOutline,mailOutline,lockClosedOutline,female, male, personCircle, cardOutline} from "ionicons/icons";
import moment from 'moment';
import "./Register.css"

function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

const Register: React.FC = () => {
    const history = useHistory();
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [userName, setUsername] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [gender, setGender] = useState<boolean>(true);
    const [icNumber, setIcNumber] = useState<string>("");
    const [userType, setUserType] = useState<string>("0");

    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

      
    const handleRegister = async () => {

        let formatDate = moment(birthDate).format("YYYY-MM-DD");
        const RegisterData = {
            "userName" : userName,
            "displayName" : userName,
            "birthDate": formatDate,
            "contactNumber": contactNumber,
            "emailAddress": emailAddress,
            "gender": gender,
            "icNumber": icNumber,
            "password": password,
            "userType": userType,
        };
        if(validateEmail(emailAddress))
        {
            //is password matches
            if(password != confirmedPassword)
            {
                setMessage("Please make sure your passwords match.");
                setIserror(true);
            }else
            {
                
                const api = axios.create({
                    //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
                    baseURL: `http://localhost:8080`
                })

                try {
                    await api.post("/account/user", RegisterData)
                    .then(res => {
                        let str =JSON.stringify(res.data); 
                        console.log(res.data);
                    // console.log(str);
                    setMessage("Registered successfully!");
                    setIserror(true);
                    redirectEventlist();
                    });
                } catch(err){
                    setMessage("User Existed!");
                    setIserror(true)
                }
            }
        }else
        {
            setMessage("Please enter valid email address!");
            setIserror(true)
        }

    }
        
    function redirectEventlist() {
        setIserror(false);
        history.push("/login");
      }
  // @ts-ignore
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        {/*Confirm password alert*/}
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
          <IonRow>
            <IonCol>
              <img src="assets/images/Logo.png" width="200px" />
            </IonCol>
          </IonRow>
          </IonCol>
                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#ffd401" }}
                            icon={personAddOutline}
                        />
                        <IonInput   class = "ion-text-center" 
                                    onIonChange={(e) => setUsername(e.detail.value!)} 
                                    placeholder = "User Name"
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>

            <IonItem>
                <IonIcon
                    style={{ fontSize: "20px", color: "#ffd401" }}
                    icon={maleFemaleOutline}
                />
                    <IonSegment  value="Male">
                        <IonSegmentButton 
                            value = "Male"
                            onClick = {() => setGender(false)} >
                            <IonLabel >Male</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton 
                            value = "Female"
                            onClick = {() => setGender(true)} >
                            <IonLabel>Female</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
            </IonItem>

                <IonCol>
                    {/*<IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#ffd401" }}
                            icon={calendarNumberOutline}
                        />
                        <IonInput   class = "ion-text-center"  
                                    onIonChange={(e) => setBirthDate(e.detail.value!)}
                                    placeholder = "Year - Month - Date" 
                        >
                        </IonInput>

                    </IonItem>*/}
                    <IonItem >
                        <IonIcon
                                style={{ fontSize: "20px", color: "#ffd401" }}
                                icon={calendarNumberOutline}
                            />
                        <IonDatetime    className = "birthday"
                                        displayFormat="DD-MMM-YYYY"
                                        min="1900-01-01" max="2021-01-01"
                                        placeholder = "Birth Date"
                                        value={birthDate} 
                                        onIonChange={e => setBirthDate(e.detail.value!)}
                                        ></IonDatetime>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#ffd401" }}
                            icon={cardOutline}
                        />
                        <IonInput   class = "ion-text-center"  
                                    onIonChange={(e) => setIcNumber(e.detail.value!)}
                                    placeholder = "IC Number" 
                        >
                        </IonInput>

                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#ffd401" }}
                            icon={callOutline}
                        />
                        <IonInput   class = "ion-text-center"  
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
            <IonInput
                class = "ion-text-center"  
                placeholder = "Email Address"
                value={emailAddress}
                onIonChange={(e) => setEmailAddress(e.detail.value!)}
                >
            </IonInput>
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
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#ffd401" }}
                            icon={lockClosedOutline}
                        />
                        <IonInput
                            type="password"
                            class = "ion-text-center"  
                            placeholder = "Confirm Password"
                            value={confirmedPassword}
                            onIonChange={(e) => setConfirmedPassword(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>


            <IonCol>
            
              <IonButton    size="default"
                            color="warning"
                            expand="block"
                            
                            onClick={() => {
                                handleRegister();

                              }}>
                            <b>Sign up</b></IonButton>
                <p style={{ fontSize: "medium" }}>
                    have an account?  <a  href="Login"  >Sign in!</a>
                    <div id={"Login"}></div>
            </p>

            </IonCol>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

