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
    IonPage

} from "@ionic/react";


import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
    settingsOutline,chevronForwardCircleOutline, saveOutline,informationCircleOutline, idCardOutline,peopleOutline,notificationsOutline,languageOutline
} from "ionicons/icons";
import"./Setting.css";

const Setting: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [iserror, setIserror] = useState<boolean>(false);


    return (
        <IonPage>
        <IonContent>
            <IonHeader>
                    <IonItem>
                    <IonTitle>Setting</IonTitle>
                    </IonItem>

            </IonHeader>


            <IonList>


                <IonItem>
                    <IonIcon class="ion-account" style={{ fontSize: "20px", color: "#ffd401" }} icon={peopleOutline}/>
                    <IonGrid>
                    <IonLabel>Account</IonLabel></IonGrid>
                        <IonIcon style={{ fontSize: "20px" } } item-right icon={chevronForwardCircleOutline}/>


                </IonItem>
                <IonItem>
                    <IonIcon class="ion-notification" style={{ fontSize: "20px", color: "#ffd401" }} item-right icon={notificationsOutline}/>
                    <IonGrid>
                    <IonLabel>Notification</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon class="ion-language" style={{ fontSize: "20px", color: "#ffd401" }} item-right icon={languageOutline}/>
                    <IonGrid>
                    <IonLabel>Language</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon class="ion-privacy" style={{ fontSize: "20px", color: "#ffd401" }} item-right icon={saveOutline}/>
                    <IonGrid>
                    <IonLabel>Privacy & Security</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>
                <IonItem>
                    <IonIcon class="ion-about" style={{ fontSize: "20px", color: "#ffd401" }} item-right icon={informationCircleOutline}/>
                    <IonGrid>
                    <IonLabel>About</IonLabel></IonGrid>

                        <IonIcon style={{ fontSize: "20px" }} item-right icon={chevronForwardCircleOutline}/>

                </IonItem>



            </IonList>




        </IonContent>
        </IonPage>
    );
};

export default Setting;
