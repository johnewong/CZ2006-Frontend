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
    IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert,IonCheckbox,IonText,IonGrid, IonRow, IonCol
} from '@ionic/react';

import axios from "axios";
import { useHistory } from "react-router-dom";
import {personAddOutline,maleFemaleOutline,calendarNumberOutline,callOutline,mailOutline,lockClosedOutline,female, male, personCircle} from "ionicons/icons";


const Register: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userName, setUsername] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [gender, setGender] = useState<boolean>();
    const [icNumber, setIcNumber] = useState<string>("");
    const [userType, setUserType] = useState<string>("0");

    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleRegister = () => {
        const RegisterData = {
            "userName" : userName,
            "birthDate": birthDate,
            "contactNumber": contactNumber,
            "emailAddress": emailAddress,
            "gender": true,
            "icNumber": icNumber,
            "password": password,
            "userType": userType,


        };
    
        const api = axios.create({
            //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
            baseURL: `http://192.168.0.108:8080`
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
        <IonGrid>
        <IonRow>
          <IonCol>
          </IonCol>
        </IonRow>

          <IonCol>
            <IonIcon
                style={{ fontSize: "70px", color: "#0040ff" }}
                icon={personCircle}
            />
          </IonCol>


                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#0040ff" }}
                            icon={personAddOutline}
                        />
                        <IonLabel position="floating"> User Name</IonLabel>
                        <IonInput onIonChange={(e) => setUsername(e.detail.value!)} 
                        >

                        </IonInput>
                    </IonItem>
                </IonCol>

            <IonItem>
                <IonIcon
                    style={{ fontSize: "20px", color: "#0040ff" }}
                    icon={maleFemaleOutline}
                />

                <IonItem>
                    <IonLabel>Male</IonLabel>
                    <IonCheckbox name={male}/>
                </IonItem>
                <IonItem>
                    <IonLabel>female</IonLabel>
                    <IonCheckbox name={female}/>
                </IonItem>
            </IonItem>

                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#0040ff" }}
                            icon={calendarNumberOutline}
                        />
                        <IonLabel position="floating">Birth Date</IonLabel>
                        <IonInput onIonChange={(e) => setBirthDate(e.detail.value!)} >
                        </IonInput>

                    </IonItem>
                </IonCol>



                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#0040ff" }}
                            icon={callOutline}
                        />
                        <IonLabel position="floating">Mobile number</IonLabel>
                        <IonInput>


                        </IonInput>
                    </IonItem>
                </IonCol>


            <IonCol>
            <IonItem>
                <IonIcon
                    style={{ fontSize: "20px", color: "#0040ff" }}
                    icon={mailOutline}
                />
            <IonLabel position="floating"> Email</IonLabel>
            <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                >
            </IonInput>
            </IonItem>
            </IonCol>


            <IonCol>
            <IonItem>
                <IonIcon
                    style={{ fontSize: "20px", color: "#0040ff" }}
                    icon={lockClosedOutline}
                />
              <IonLabel position="floating"> Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                >
              </IonInput>
            </IonItem>
            </IonCol>

                <IonCol>
                    <IonItem>
                        <IonIcon
                            style={{ fontSize: "20px", color: "#0040ff" }}
                            icon={lockClosedOutline}
                        />
                        <IonLabel position="floating"> Confirm Password</IonLabel>
                        <IonInput
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>


            <IonCol>
            
              <IonButton expand="block" onClick={handleRegister}>Sign up</IonButton>
                <p style={{ fontSize: "medium" }}>
                 have an account?  <a  href="LoginMX"  >Sign in!</a>
                    <div id={"LoginMx"}></div>
            </p>

            </IonCol>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

