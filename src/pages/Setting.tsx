import React, { useState } from "react";
import axios from "axios";
import {
    IonContent,
    IonHeader,
    IonItemOptions,
    IonItemOption,
    IonList,
    IonInput,
    IonToggle,
    IonItemSliding,
    IonIcon,
    IonItem,
    IonLabel,

    IonTitle,
    IonPage, IonToolbar, IonButton

} from "@ionic/react";


import { IonGrid, IonRow, IonCol } from "@ionic/react";

import"./Setting.css";
import {useHistory} from "react-router-dom";

const Setting: React.FC = () => {
    const history = useHistory();
    const storage = window.localStorage;
    const [checked, setChecked] = useState(false);
    const [iserror, setIserror] = useState<boolean>(false);

    const handleLogout =  () => {
        storage.removeItem("userInfo")
        history.push("/Login/");

    }
    return (
        <IonPage>
        <IonContent>
            <IonHeader>
                    <IonToolbar>
                    <IonTitle>About</IonTitle>
            </IonToolbar>


            </IonHeader>
            <IonItem>
                <p>
                <p>Grooming appointments, boarding schedules, vet visits—our pets have busy lives.
                    Manage it all with the free app for iOS or Android! With our apps,
                    you can handle all your veterinary needs right from your phone.
                    The comprehensive app allows you to make appointment requests,
                    see your pet’s vaccine history, view our office hours and refill prescriptions whenever it’s most convenient for you!
                </p></p>


            </IonItem>





            <IonCol>
                <IonButton
                    //disabled={!handleEdit}
                    expand="block" size="default"
                    color="warning"
                    className="ion-logout"
                    onClick={handleLogout}>





                    <b>logout</b>
                </IonButton>
            </IonCol>

        </IonContent>
        </IonPage>
    );
};

export default Setting;
