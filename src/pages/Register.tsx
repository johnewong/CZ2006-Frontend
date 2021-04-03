import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonLifeCycleContext,
    IonPage,
    IonRoute,
    IonTabBar,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonSegment,IonSegmentButton,IonGrid, IonRow, IonCol
} from '@ionic/react';

import axios from "axios";
import {personAddOutline,maleFemaleOutline,calendarNumberOutline,callOutline,mailOutline,lockClosedOutline,female, male, personCircle, cardOutline} from "ionicons/icons";


const Register: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [userName, setUsername] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [gender, setGender] = useState<boolean>();
    const [icNumber, setIcNumber] = useState<string>("");
    const [userType, setUserType] = useState<string>("0");

    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleGender = () =>{
    }

    const handleRegister = () => {
        const RegisterData = {
            "userName" : userName,
            "birthDate": birthDate,
            "contactNumber": contactNumber,
            "emailAddress": emailAddress,
            "gender": gender,
            "icNumber": icNumber,
            "password": password,
            "userType": userType,
        };
        //is password matches
        if(password != confirmedPassword)
        {
            setMessage("Please make sure your passwords match.");
            setIserror(true);
        }else
        {
            setMessage("Registered successfully!");
            setIserror(true);
            
            //check database user details

            //if XXX existed:

            const api = axios.create({
                //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
                baseURL: `http://localhost:8080`
            })
             api.post("/account/user", RegisterData)
                .then(res => {
                    //let str =JSON.stringify(res.data); 
                    console.log(res.data);
                   // console.log(str);
                }).catch((error)=>{
                    setMessage("Auth failure! Please create an account");
                    setIserror(true)
                 });
        }
    };

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
                buttons={["OK"]}
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
                    <IonSegment >
                    <IonSegmentButton >
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
                        <IonInput   class = "ion-text-center"  
                                    onIonChange={(e) => setBirthDate(e.detail.value!)}
                                    placeholder = "Birth Date" 
                        >
                        </IonInput>

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
                            onClick={handleRegister}><b>Sign up</b></IonButton>
                <p style={{ fontSize: "medium" }}>
                    have an account?  <a  href="Login"  >Sign in!</a>
                    <div id={"LoginMx"}></div>
            </p>

            </IonCol>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

