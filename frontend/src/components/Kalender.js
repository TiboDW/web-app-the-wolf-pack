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

L10n.load({
  "en-US": {
    schedule: {
      newEvent: "Film toevoegen",
    },
  },
});

export const Kalender = () => {
  const [movies, setMovies] = useState([]);

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
    }
    console.log(args.data);
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
