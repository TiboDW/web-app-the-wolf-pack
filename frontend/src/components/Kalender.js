import React, {useEffect,useState} from 'react';
import { getAllMovies } from "../api/movies";
import {
    ScheduleComponent,
    Day,
    Week,
    Inject,
    ViewsDirective,
    ViewDirective,
  } from "@syncfusion/ej2-react-schedule";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
 
export const Kalender = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(movies => setMovies(movies));
  }, []);

  function getStartTimeMovie(i,j){
    var datum = new Date(movies.filter(movie => movie.isReleased).map(movie => movie.vertoningen.map(vertoning => vertoning.datum)[j])[i]);
    var uur = movies.filter(movie => movie.isReleased).map(movie => movie.vertoningen.map(vertoning => vertoning.uur)[j])[i];
    datum.setHours(parseInt(uur));
    return datum;
  };

  function getEndTimeMovie(i,j){
    var datum = new Date(movies.filter(movie => movie.isReleased).map(movie => movie.vertoningen.map(vertoning => vertoning.datum)[j])[i]);
    var uur = movies.filter(movie => movie.isReleased).map(movie => movie.vertoningen.map(vertoning => vertoning.uur)[j])[i];
    datum.setHours((parseInt(uur) + 3));
    return datum;
  };

  var dataKalender = [];
  
    for(var i = 0; i <= movies.filter(movie => movie.isReleased).length - 1; i++){
      for(var j = 0; j <= movies.filter(movie => movie.isReleased).map(movie => movie.vertoningen).length -1; j++){
        var data = {
          Id: movies.filter(movie => movie.isReleased).map(movie => movie._id)[i],
          Subject: movies.filter(movie => movie.isReleased).map(movie => movie.titel)[i],
          StartTime: getStartTimeMovie(i,j),
          EndTime: getEndTimeMovie(i,j)
      };
        dataKalender.push(data);
      }
    };

    return (
        <div className="mt-2 ml-20 pr-20 float-right w-auto h-auto overflow-auto ">
        <ScheduleComponent
          startHour="9:00"
          endHour="24:00"
          firstDayOfWeek={1}
          enableAdaptiveUI={true}
          showQuickInfo={false}
          eventSettings={{
            dataSource: dataKalender
          }}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
          </ViewsDirective>
          <Inject services={[Day, Week]} />
        </ScheduleComponent>
      </div>
    )
}
export default Kalender