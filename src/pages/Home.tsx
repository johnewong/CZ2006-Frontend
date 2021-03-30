import {
  IonContent,
  IonHeader,
  IonPage,
  IonModal,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { medkitOutline, navigateOutline } from "ionicons/icons";
import { calendarOutline } from "ionicons/icons";
import Calendar from "react-calendar";
import { search } from "ionicons/icons";
import { person } from "ionicons/icons";
import "./Home.css";
import "./CalendarModal.css"
import "./Calendar.css";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useHistory } from "react-router";


function  formatDate(d:  Date) {
  var 
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
  
var treatment_data: any[] = []
const api = axios.create({
 // baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
  baseURL: `http://localhost:8080`
})

const GetTreatments = async () => {
  try {
    const res = await api.get("/treatment");
    console.log("data", res.data);
    return res.data;
  } catch (error) { }

};



export const Home: React.FC = ({}) => {
  
  const storage = window.localStorage;
  const history = useHistory();


  const [treatmentItems, setItems] = useState([]);

  // const [clinicName, SetClinicName] = useState<string>("Enter Clinic Name");
  // const [doctorName, SetDoctorName] = useState<string>("Enter Veter Name");
  const [treatmentID, SetTreatmentID] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [location, SetLocation] = useState<string>("");
  const [date, SetDate] = useState(new Date());
  const [message, setMessage] = useState<string>("");

  const [iserror, setIserror] = useState<boolean>(false);
  const onChange = (date: any) => {
    SetDate(date);
    console.log(date)
  };

  useEffect(() => {
    let userInfo = storage.getItem("userInfo");

    if (!userInfo) {
      history.push("/Login");
    }

    GetTreatments().then(data => setItems(data));

  }, [history]);

  const handleSearch = async () => {
    
    if (!location || location == "") {
      setMessage("Please select a location!");
      setIserror(true);
      return;
    }

    if (!date || date == null ) {
      setMessage("Please select a date!");
      setIserror(true);
      return;
    }

    if (!treatmentID  || treatmentID == "") {
      setMessage("Please select a treatment!");
      setIserror(true);
      return;
    }
    setMessage("");
    setIserror(false);
    var formatdate = formatDate(date) 
    
    await api.get("/appointment/search/" + location + "/" + formatdate + "/" + treatmentID)
        .then(res => {       
            console.log("data",res.data);       
            
            history.push( "/Home/SearchResult",
             { vetdetail: res.data,
                 });

        })
        .catch(error=>{
            setMessage("Failed to search please try again!");
            setIserror(true)
        })

      return;
  };



  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonModal isOpen={showModal}  swipeToClose={true} cssClass="calendar-modal"
           onDidDismiss={() => setShowModal(false)}>
        
          <Calendar onChange={onChange}  value={date} />
          
          <IonGrid >
                <IonButton id="calendarConfirm" onClick={() => setShowModal(false)}>
                  Confirm
                </IonButton>
          </IonGrid>
          
        </IonModal>

        <IonGrid>
          {/*Image logo*/}
          <IonRow>
            <IonCol>
              <img src="assets/images/Logo.png" width="280px" />
            </IonCol>
          </IonRow>
          {/*Login input*/}

          <IonRow>
            <IonCol>
              
           <h6 className="error"> { message } </h6>
            </IonCol>
            </IonRow>
          <IonToolbar >
            <IonItem >
            

              <IonIcon
                        style={{ fontSize: "30px", color: "#ffd401" }}
                        icon={navigateOutline}
                      />
        
              <IonSelect
                class="ion-select"
                interface="popover"
                placeholder="Select location"
                style={{ color: "#000000" }}
                onIonChange={(e) => SetLocation(e.detail.value)}
                value={location}
              >
                <IonSelectOption value="1">
                  Jurong West
                </IonSelectOption>
                <IonSelectOption value="2">Clementi</IonSelectOption>
                <IonSelectOption value="3">Bishan</IonSelectOption>
                <IonSelectOption value="4">Dover</IonSelectOption>
                <IonSelectOption value="5">Tuas</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonRow></IonRow>
            <IonCol></IonCol>
          </IonToolbar>
          <IonToolbar>
            <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#ffd401" }}
                icon={calendarOutline}
              />
              <IonButton
                class="button button-clear calendar "
                onClick={() => setShowModal(true)}
              >
                {date.toDateString()}
              </IonButton>
            </IonItem>
            <IonRow></IonRow>
            <IonCol></IonCol>
            
               <IonItem>
              <IonIcon
                style={{ fontSize: "30px", color: "#ffd401" }}
                icon={medkitOutline}
              />

              <IonSelect
                class="ion-select"
                interface="popover"
                placeholder="Select treatment"
                style={{ color: "#000000" }}
                onIonChange={(e) => SetTreatmentID(e.detail.value!)}
                value={treatmentID}
                
              >
            {
              treatmentItems.map((item, index) => {

                  return (
                <IonSelectOption key={index} value={item['treatmentID']}>{item['treatmentName']}</IonSelectOption>  
                )
              })
            }
              </IonSelect>

            </IonItem> 
          </IonToolbar>
          {/*Login button*/}
          <IonRow></IonRow>
          <IonCol></IonCol>
          <IonToolbar>
            <IonButton
              size = "default"
              color="warning"
              expand="block"
              onClick={handleSearch}
          //    routerLink="/Home/SearchResult"
            >
              <b>Search</b>
            </IonButton>
          </IonToolbar>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
