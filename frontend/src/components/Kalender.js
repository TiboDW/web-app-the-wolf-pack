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
import { useAuth0 } from "@auth0/auth0-react";
import { UpdateMovie } from "../api/movies";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

const firebaseApp = initializeApp(config);

L10n.load({
  "en-US": {
    schedule: {
      newEvent: "Film event toevoegen",
      editEvent: "Film event aanpassen",
      deleteEvent: "Film event verwijderen",
      delete:"verwijderen",
      cancel:"annuleren"
    },
  },
});

export const Kalender = () => {

  const [movies, setMovies] = useState([]);

  var id;
  
  const { getAccessTokenSilently } = useAuth0();

 

  useEffect(() => {
    getAllMovies().then((movies) => setMovies(movies));
  }, []);

  // Het begin uur van een film terug geven
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
  // Het eind uur gaan terug geven van een film
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
  // De zaal gaan terug geven van een film van een bepaalde vertoning
  function getZaal() {
    return movies
      .filter((movie) => movie.isReleased)
      .map((movie) => movie.vertoningen.map((vertoning) => vertoning.zaal)[j])[
      i
    ];
  }

  // Array van films die in kalender verwerkt wordt
  var dataKalender = [];
  // Editor template opvullen met de bestaande data
  for (var i = 0; i <= movies.filter((movie) => movie.isReleased).length - 1;i++) {
    for (var j = 0; j <= movies.filter((movie) => movie.isReleased).map((movie) => movie.vertoningen).length - 1; j++) {
      var data = {
        Id: movies
          .filter((movie) => movie.isReleased)
          .map((movie) => movie._id)[i],
        Subject: movies
          .filter((movie) => movie.isReleased)
          .map((movie) => movie.titel)[i],
        StartTime: getStartTimeMovie(i, j),
        EndTime: getEndTimeMovie(i, j),
        Zaal: getZaal(i, j),
      };
      dataKalender.push(data);
    }
  }

   // Nodig voor de data in de vertoningen te steken
   function getLocalDateString(date) {
    return date.toLocaleDateString("nl-BE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
  }

  // Als de editortemplate gesloten wordt de data gaan weergeven
  // Als de editortemplate sluit de vertoning update met de extra data en de kalender refreshen (Is beter)
  const popupClose = (args) => {
    var film;
    if (args.type === "Editor" && !isNullOrUndefined(args.data)) {
      // De film die gespeeld wordt
      let filmElement = args.element.querySelector("#Film");
      if (filmElement) {
        args.data.Film = filmElement.value;
        film = movies.filter(movie => movie.isReleased).find(movie => movie.titel === filmElement.value);

        // Begin uur en eind uur + de datum van de film die gespeeld wordt
        var end = new Date(args.data.StartTime);
        end.setHours(end.getHours() + 3);
        args.data.EndTime = end;
         // De zaal waar de film gespeeld wordt
        let zaalElement = args.element.querySelector("#Zaal");
        if (zaalElement) {
          args.data.Zaal = zaalElement.value;

          //Code voor het update van de film
          const movie = await getMovieById(film._id)

          const accessToken = await getAccessTokenSilently();
          await UpdateMovie(film._id,accessToken,);
          window.location.reload();
        }
      }
      //Geeft de datum terug voor in vertoningen te steken
      //console.log(getLocalDateString(new Date(args.data.StartTime)).split(" ").slice(1).join(" "));
      //Geeft de dag terug voor in vertoningen te steken
      //console.log(getLocalDateString(new Date(args.data.StartTime)).split(" ")[0]);
      //Geeft het uur terug voor in vertoningen te steken
      //console.log(new Date(args.data.StartTime).toTimeString().substring(0,5))

      console.log(film._id);
      console.log(movies.filter((movie) => movie.isReleased).find((movie) => movie.titel === args.data.Film));
      console.log(args.data);
    }
  };

  // HTML Editortemplate weergave die de admin kan invullen
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
                placeholder="Kies film"
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
            <td className="e-textlabel">Start uur</td>
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
                placeholder="Kies zaal"
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
