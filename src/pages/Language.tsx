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

const Language: React.FC = () => {

    const [showModal,setShowModal] = useState(false);

    return (
        <IonContent>
            <IonHeader>

                <IonItem>
                    <IonTitle>Language</IonTitle>
                </IonItem>

            </IonHeader>


            <IonList>

                <IonItem>

                    <IonGrid>
                        <IonLabel>English</IonLabel></IonGrid>
                    <IonIcon style={{ fontSize: "20px" } } item-right icon={chevronForwardCircleOutline}/>


                </IonItem>
                <IonItem>

                    <IonGrid>
                        <IonLabel>简体中文</IonLabel></IonGrid>

                    <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>


            </IonList>




        </IonContent>
    );
};

export default Language;
