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
import {IonRouteInner} from "@ionic/react-router/dist/types/ReactRouter/IonRouteInner";
import {personAddOutline,maleFemaleOutline,calendarNumberOutline,callOutline,mailOutline,lockClosedOutline,female, male, personCircle} from "ionicons/icons";
import userEvent from "@testing-library/user-event";
import {register} from "../serviceWorkerRegistration";



function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
}

const checkboxList = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },

]

const Register: React.FC = () => {
    const storage = window.localStorage;
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState<string>("eve.holt@reqres.in");
    const [password, setPassword] = useState<string>("cityslicka");
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (!email) {
        setMessage("Please enter a valid email");
        setIserror(true);
        return;
    }
    if (validateEmail(email) === false) {
        setMessage("Your email is invalid");
        setIserror(true);
        return;
    }

    if (!password || password.length < 6) {
        setMessage("Please enter your password");
        setIserror(true);
        return;
    }

      function validateEmail(email: string) {
          const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
          return re.test(String(email).toLowerCase());
      }


    const registerData = {
        "email": email,
        "password": password,

    }



    const api = axios.create({
        baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
    })
    api.post("/user", registerData)
        .then(res => {
            console.log("data",res);

            let str =JSON.stringify(res.data);
            storage.setItem("userInfo", str);
            history.push("/Home/");
        })
        .catch((error)=>{
            setMessage("register failure! ");
            setIserror(true)
        })
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
            <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
            />
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
                        <IonInput name={"name"} >

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
                        <IonInput>


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
            
              <IonButton expand="block" onClick={handleLogin}>Sign up</IonButton>
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
