import {
    IonContent,
    IonHeader,
    IonItemOptions,
    IonItemOption,
    IonList,
    IonInput,
    IonToggle,
   IonItemSliding,
    IonIcon, IonItem, IonLabel, IonRadio, IonCheckbox, IonCardTitle, IonCardContent,  IonButton

} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
    settingsOutline, idCardOutline
} from "ionicons/icons";

const Setting: React.FC = () => {


    return (
        <IonContent>

            <IonItem>
            <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={settingsOutline}/>
            <IonLabel>Setting</IonLabel>
        </IonItem>

            <IonList>

                <IonItem>
                    <IonLabel>Account</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Notification</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Language</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Privacy & Security</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>About</IonLabel>
                </IonItem>
            </IonList>




        </IonContent>
    );
};

export default Setting;
