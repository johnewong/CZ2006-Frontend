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
    IonRadio,
    IonCheckbox,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonToolbar,
    IonTitle,
    IonPage

} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
    settingsOutline,chevronForwardCircleOutline, saveOutline,informationCircleOutline, idCardOutline,peopleOutline,notificationsOutline,languageOutline
} from "ionicons/icons";

const Account: React.FC = () => {

    const [showModal,setShowModal] = useState(false);

    return (
        <IonContent>
            <IonHeader>

                <IonItem>
                    <IonTitle>Account</IonTitle>
                </IonItem>

            </IonHeader>


            <IonList>

                <IonItem>

                    <IonGrid>
                        <IonLabel>Email Address</IonLabel></IonGrid>
                    <IonIcon style={{ fontSize: "20px" } } item-right icon={chevronForwardCircleOutline}/>


                </IonItem>
                <IonItem>

                    <IonGrid>
                        <IonLabel>Contract Number</IonLabel></IonGrid>

                    <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>

                    <IonGrid>
                        <IonLabel>Password</IonLabel></IonGrid>

                    <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>

            </IonList>




        </IonContent>
    );
};

export default Account;
