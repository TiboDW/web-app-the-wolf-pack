import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import {
  ScheduleComponent,
  Day,
  Week,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { getAllMovies } from "../api/movies";

export const AdminKalender = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((movies) => setMovies(movies));
  }, [movies]);

  var data = movies.map((movie) => ({
  
    Id: movie._id,
    Subject: movie.titel,
    StartTime: new Date(2021, 10, 22, 20, 0),
    EndTime: new Date(2021, 10, 22, 21, 0),
  }));

  return (
    <div className="App font-bold flex flex-grow mb-3 text-color-footer">
   
          <SidebarAdmin />
          <div className="mt-2 ml-20 pr-20 float-right w-auto h-auto overflow-auto ">
            <ScheduleComponent
              startHour="9:00"
              endHour="24:00"
              firstDayOfWeek={1}
              eventSettings={{
                dataSource: data,
              }}
            >
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
              </ViewsDirective>
              <Inject services={[Day, Week]} />
            </ScheduleComponent>
          </div>
        </div>
  );
};
export default AdminKalender;
