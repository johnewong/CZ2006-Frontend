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
    settingsOutline,saveOutline,informationCircleOutline, idCardOutline,peopleOutline,notificationsOutline,languageOutline
} from "ionicons/icons";

const Setting: React.FC = () => {


    return (
        <IonContent>
            <IonHeader>

                    <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={settingsOutline}/>
                    <IonTitle>Setting</IonTitle>
                    </IonItem>

            </IonHeader>

            <IonList>

                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={peopleOutline}/>
                    <IonGrid>
                    <IonLabel>Account</IonLabel></IonGrid>

                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={notificationsOutline}/>
                    <IonGrid>
                    <IonLabel>Notification</IonLabel></IonGrid>
                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={languageOutline}/>
                    <IonGrid>
                    <IonLabel>Language</IonLabel></IonGrid>
                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={saveOutline}/>
                    <IonGrid>
                    <IonLabel>Privacy & Security</IonLabel></IonGrid>
                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={informationCircleOutline}/>
                    <IonGrid>
                    <IonLabel>About</IonLabel></IonGrid>
                </IonItem>
            </IonList>




        </IonContent>
    );
};

export default Setting;
