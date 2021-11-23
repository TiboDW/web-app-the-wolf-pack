import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import {
  ScheduleComponent,
  Day,
  Week,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

export const AdminKalender = () => {
  return (
    <div className="App font-bold">
      <div class="container mx-auto px-6 mt-16 text-left text-color-footer flex-grow">
        <div class="border-gray-300 flex flex-wrap">
          <SidebarAdmin />
          <div class="mt-2 ml-20 pr-20 float-right w-3/4 overflow-auto">
            <ScheduleComponent timezone='CET' startHour='9:00' endHour='24:00' firstDayOfWeek={1}>
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
              </ViewsDirective>
              <Inject services={[Day, Week]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminKalender;
