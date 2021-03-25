import React from "react";

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton, IonAvatar, IonList,
} from "@ionic/react";
import {Session} from "inspector";



class User {
    id: any;
    profilePic: string | undefined;
    name: any;
    title: any;
}

export const EventList = ({ users }: any) => {
    interface UserItemProps {
        user: User;
        sessions: Session[];
    }

    const SpeakerItem: React.FC<UserItemProps> = ({ user, sessions }) => {
        // @ts-ignore
        // @ts-ignore
        return (
            <>
                <IonCard className="speaker-card">
                    <IonCardHeader>
                        <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tabs/speakers/${user.id}`}>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <IonAvatar slot="start">
                                <img src={process.env.PUBLIC_URL + user.profilePic} alt="Speaker profile pic" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>{user.name}</h2>
                                <p>{user.title}</p>
                            </IonLabel>
                        </IonItem>
                    </IonCardHeader>

                    <IonCardContent>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <IonList lines="none">
                            {sessions.map(session => (
                                <IonItem detail={false} routerLink={`/tabs/speakers/sessions/${session}`}>
                                    <IonLabel>
                                        <h3>{session}</h3>
                                    </IonLabel>
                                </IonItem>
                            ))}
                            <IonItem detail={false} routerLink={`/tabs/speakers/${user.id}`}>
                                <IonLabel>
                                    <h3>About {user.name}</h3>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </>
        );
    };



}
