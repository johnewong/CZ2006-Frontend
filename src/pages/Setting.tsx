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

const Setting: React.FC = () => {

    const [showModal,setShowModal] = useState(false);

    return (
        <IonContent>
            <IonHeader>

                    <IonItem>
                    <IonTitle>Setting</IonTitle>
                    </IonItem>

            </IonHeader>
            

            <IonList>

                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} icon={peopleOutline}/>
                    <IonGrid>
                    <IonLabel>Account</IonLabel></IonGrid>
                        <IonIcon style={{ fontSize: "20px" } } item-right icon={chevronForwardCircleOutline}/>


                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} item-right icon={notificationsOutline}/>
                    <IonGrid>
                    <IonLabel>Notification</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} item-right icon={languageOutline}/>
                    <IonGrid>
                    <IonLabel>Language</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} item-right icon={saveOutline}/>
                    <IonGrid>
                    <IonLabel>Privacy & Security</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon style={{ fontSize: "20px", color: "#0040ff" }} item-right icon={informationCircleOutline}/>
                    <IonGrid>
                    <IonLabel>About</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
            </IonList>




        </IonContent>
    );
};

export default Setting;
