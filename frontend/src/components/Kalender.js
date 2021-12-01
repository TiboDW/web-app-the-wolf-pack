import React, { useEffect, useState } from "react";
import { getAllMovies } from "../api/movies";
import {
  ScheduleComponent,
  Day,
  Week,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { isNullOrUndefined, L10n } from "@syncfusion/ej2-base";
import { getMovieById } from "../api/movies";
import {useLocation} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UpdateMovie } from "../api/movies";
import { initializeApp } from "firebase/app";
import { getStorage, ref , uploadBytes,getDownloadURL  } from "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};  

const firebaseApp = initializeApp(config);

L10n.load({
  "en-US": {
    schedule: {
      newEvent: "Film toevoegen",
    },
  },
});

export const Kalender = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const [movie, setMovie] = useState(undefined);
  const [titel, setTitel] = useState(undefined);
  const [img , setImg] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [regisseur, setRegisseur] = useState(undefined);
  const [cast , setCast] = useState(undefined);
  const [trailer, setTrailer] = useState(undefined);
  const [duur , setDuur] = useState(undefined);
  const [temp, setTemp] = useState(undefined);
  const {getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    getMovieById(id).then(movie => {
      setMovie(movie);
      setTitel(movie.titel);
      setImg(movie.img_url);
      setDescription(movie.description);
      setRegisseur(movie.regisseur);
      setCast(movie.hoofdrollen.join(", "));
      setTrailer(movie.trailer_url);
      setDuur(movie.duur);
    });
  }, [id]);

  useEffect(() => {
    getAllMovies().then((movies) => setMovies(movies));
  }, []);

  function getStartTimeMovie(i, j) {
    var datum = new Date(
      movies
        .filter((movie) => movie.isReleased)
        .map(
          (movie) => movie.vertoningen.map((vertoning) => vertoning.datum)[j]
        )[i]
    );
    var uur = movies
      .filter((movie) => movie.isReleased)
      .map((movie) => movie.vertoningen.map((vertoning) => vertoning.uur)[j])[
      i
    ];
    datum.setHours(parseInt(uur));
    return datum;
  }

  function getEndTimeMovie(i, j) {
    var datum = new Date(
      movies
        .filter((movie) => movie.isReleased)
        .map(
          (movie) => movie.vertoningen.map((vertoning) => vertoning.datum)[j]
        )[i]
    );
    var uur = movies
      .filter((movie) => movie.isReleased)
      .map((movie) => movie.vertoningen.map((vertoning) => vertoning.uur)[j])[
      i
    ];
    datum.setHours(parseInt(uur) + 3);
    return datum;
  }

  function getZaal(){
    return  movies
    .filter((movie) => movie.isReleased)
    .map((movie) => movie.vertoningen.map((vertoning) => vertoning.zaal)[j])[i];
  }

  var dataKalender = [];

  for (
    var i = 0;
    i <= movies.filter((movie) => movie.isReleased).length - 1;
    i++
  ) {
    for (
      var j = 0;
      j <=
      movies
        .filter((movie) => movie.isReleased)
        .map((movie) => movie.vertoningen).length -
        1;
      j++
    ) {
      var data = {
        Id: movies
          .filter((movie) => movie.isReleased)
          .map((movie) => movie._id)[i],
        Subject: movies
          .filter((movie) => movie.isReleased)
          .map((movie) => movie.titel)[i],
        StartTime: getStartTimeMovie(i, j),
        EndTime: getEndTimeMovie(i, j),
        Zaal: getZaal(i,j),
      };
      dataKalender.push(data);
    }
  }

  const editorTemplate = (props) => {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Film</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="Film"
                data-name="Subject"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={movies
                  .filter((movie) => movie.isReleased)
                  .map((movie) => movie.titel)}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
        
          <tr>
            <td className="e-textlabel">Zaal</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="Zaal"
                placeholder= 'Kies zaal'
                data-name="Zaal"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["1", "2", "3", "4"]}
              />
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div />
    );
  };

  function getLocalDateString(date) {
    return date.toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: 'long'
    });
}

  const popupClose = (args) => {
    if (args.type === "Editor" && !isNullOrUndefined(args.data)) {
      let filmElement = args.element.querySelector("#Film");
      if (filmElement) {
        args.data.Film = filmElement.value;

        var end = new Date(args.data.StartTime);
        end.setHours(end.getHours() + 3);
        args.data.EndTime = end;
      }
      let zaalElement = args.element.querySelector("#Zaal");
      if (zaalElement) {
        args.data.Zaal = zaalElement.value;
      }
      
      //Geeft de datum terug voor in vertoningen te steken
      //console.log(getLocalDateString(new Date(args.data.StartTime)).split(" ").slice(1).join(" "));
      //Geeft de dag terug voor in vertoningen te steken
      //console.log(getLocalDateString(new Date(args.data.StartTime)).split(" ")[0]);
      //Geeft het uur terug voor in vertoningen te steken
      //console.log(new Date(args.data.StartTime).toTimeString().substring(0,5))

      console.log(movies.filter(movie => movie.isReleased).find(movie => movie.titel === args.data.Film));
    }  
  };

  return (
    <div className="mt-2 ml-20 pr-20 float-right w-auto h-auto overflow-auto ">
      <ScheduleComponent
        startHour="9:00"
        endHour="24:00"
        firstDayOfWeek={1}
        dateFormat="dd/MM/yyyy"
        timeFormat="HH:mm"
        showQuickInfo={false}
        editorTemplate={editorTemplate}
        eventSettings={{
          dataSource: dataKalender,
        }}
        popupClose={popupClose}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
        </ViewsDirective>
        <Inject services={[Day, Week]} />
      </ScheduleComponent>
    </div>
  );
};
export default Kalender;
