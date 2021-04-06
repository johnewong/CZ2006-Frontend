import {
  IonCard,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonModal,
  IonPage,
  IonSelectPopover,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  arrowBack,
  arrowForward,
  caretBack,
  caretForward,
  map,
} from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonIcon,
  IonAlert,
  IonImg,
  IonSegment,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "../components/GoogleMapPlugin";
import "moment-timezone";
import moment from "moment";
import MapContainer from "../components/GoogleMapPlugin";

function ClinicDetail(item: any) {
  return (
    <div>
      <IonRow>
        <IonCol>
          <IonLabel>
            <b>Name: </b>
          </IonLabel>
          <IonLabel>{item.clinic.name}</IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonLabel>
            <b>Treatment/Service: </b>
          </IonLabel>
          <IonLabel>{item.treatmentAvailable.treatmentName}</IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonLabel>
            <b>Address: </b>
          </IonLabel>
          <IonLabel>{item.clinic.address}</IonLabel>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonLabel>
            <b>Tel: </b>
          </IonLabel>
          <IonLabel>{item.clinic.tel}</IonLabel>
        </IonCol>
      </IonRow>
    </div>
  );
}

function displayEvent(item: any, index: any) {
  return (
    <IonCard>
      <IonCardContent class="ion-text-left">
        <IonToolbar>
          <IonItem>
            <IonLabel>
              <div className="card-title">
                {" "}
                <b>Clinic 1</b>
              </div>
            </IonLabel>
            <img src="assets/images/Clinic.png" width="130px" />
          </IonItem>
        </IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol size="5">
              <IonLabel> </IonLabel>
              <IonLabel>{item.clinicDate}</IonLabel>
            </IonCol>
          </IonRow>
          {ClinicDetail(item)}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

interface ResultList {
  date: Date;
  location: Number;
  locationName:string;
  treatmentID: Number;
  appointmentDate:Date;
  vetdetail: [];
}

const SearchResult: React.FC = () => {
  const storage = window.localStorage;
  const history = useHistory();
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [resultlist, setResultlist] = useState<ResultList>(
    location.state as ResultList
  );
  const [searchDate, setSearchDate] = useState<Date>();
  const [hasRender, setHasRender] = useState<boolean>(false);

  useEffect(() => {
    let userInfo = storage.getItem("userInfo");

    if (!userInfo) {
      history.push("/Login");
    }

    if (location.state) {
      let a = location.state as ResultList;
      setResultlist(a);
      console.log(location.state)
      setSearchDate(a.date as Date);
    }
  }, [location]);

  function ClinicDetail(item: any) {
    let operatingHourStart = moment(
      item.operatingHourStart
    ).format("hh:mm A");
    
    let operatingHourEnd = moment(
      item.operatingHourEnd
    ).format("hh:mm A");
    return (
      <div>
        <IonRow>
          <IonCol size = "50">
            <IonLabel>
              <b>Operation Hours: </b>
            </IonLabel>
            <IonLabel>{operatingHourStart  + " ~ " + operatingHourEnd}</IonLabel>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Address: </b>
            </IonLabel>
            <IonLabel>{item.vetAddress}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <b>Tel: </b>
            </IonLabel>
            <IonLabel>{item.tel_office_1}</IonLabel>
          </IonCol>
        </IonRow>
      </div>
    );
  }
  let _date: moment.Moment;
  const handleSearch = async (type: boolean) => {
    const api = axios.create({
      //baseURL: `http://yifeilinuxvm.southeastasia.cloudapp.azure.com`
      baseURL: `http://localhost:8080`,
    });

    console.log("resultlist", resultlist);
    console.log("type", type);
   
    if (!type) {
      _date = moment(searchDate).add(-1, "day");
    } else {
      _date = moment(searchDate).add(1, "day");
    }
    console.log("prev date", _date);
    let formatdate = _date.format("YYYY-MM-DD");
    console.log("formatdate", formatdate);
    setSearchDate(_date.toDate());
    await api
      .get(
        "/appointment/search/" +
          resultlist.location +
          "/" +
          formatdate +
          "/" +
          resultlist.treatmentID
      )
      .then((res) => {
        console.log("search data", res.data);
        setResultlist({
          vetdetail: res.data,
          location: resultlist.location,
          locationName:resultlist.locationName,
          date: _date.toDate(),
          treatmentID: resultlist.treatmentID,
          appointmentDate:_date.toDate(),
        });

      
      })
      .catch((error) => {
        setMessage("Failed to search please try again!");
        setIserror(true);
      });

    return;
  };

  function viewVet(item: any) {
    console.log(item);
    history.push({
      pathname: "/MakeAppointment",
      state: {
        veterdetail: item.veterSlot, 
        vetdetail: resultlist.vetdetail, 
        selectedVet: item.vet,
        date: resultlist.date,
        treatmentID : resultlist.treatmentID,
        appointmentDate: resultlist.date,
        location: resultlist.location,
        locationName: resultlist.locationName,
      }
    });
    return;
  }

  function Back() {
    history.push({
      pathname: "/Home",
    });
    return;
  }

  function displayEvent(item: any, index: any) {
    return (
      <IonCard key={index} onClick={() => viewVet(item)}>
        <IonCardContent class="ion-text-left">
          <IonToolbar>
              <img src="assets/images/ClinicName.png" width="400px" />
            </IonToolbar>
          <IonToolbar>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="20">
                    <IonLabel>
                        <b>{item["vet"].vetName}</b>
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonToolbar>
          <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel> </IonLabel>
                <IonLabel>{}</IonLabel>
              </IonCol>
            </IonRow>
            {ClinicDetail(item["vet"])}
          </IonGrid>
          </IonToolbar>
          
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton fill="default" onClick={Back}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonLabel class="ion-text-left" color="#000000">
          <b>{typeof resultlist !== "undefined" && typeof resultlist.locationName !== "undefined" && resultlist.locationName}</b>
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton
              fill="clear"
              color="#000000"
              onClick={() => handleSearch(false)}
            > 
              <IonIcon icon={caretBack} />
              Previous
            </IonButton>
          </IonButtons>
          <IonTitle style={{ fontSize: "22px" }} color="#000000">
            <b> {moment(searchDate).format("DD-MMM-YYYY")}</b>
          </IonTitle>
          <IonButtons slot="primary">
            <IonButton
              fill="clear"
              color="#000000"
              onClick={() => handleSearch(true)}
            >
              Next
              <IonIcon icon={caretForward} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {typeof resultlist !== "undefined" &&
        resultlist.hasOwnProperty("vetdetail") !== false
          ? resultlist.vetdetail.map((item: any, index: any) =>
              displayEvent(item, index)
            )
          : null}

        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}
        >
          {typeof resultlist !== "undefined" && !hasRender && (
            <MapContainer mapList={resultlist.vetdetail} />            
          )}
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => {
            setShowModal(true);           
            }}>
            <IonIcon icon={map} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default SearchResult;
