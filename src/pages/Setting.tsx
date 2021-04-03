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
import {
    settingsOutline,chevronForwardCircleOutline, saveOutline,informationCircleOutline, idCardOutline,peopleOutline,notificationsOutline,languageOutline
} from "ionicons/icons";
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
                <p></p></p>


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
