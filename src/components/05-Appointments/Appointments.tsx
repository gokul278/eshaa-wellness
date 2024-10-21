import React from "react";
import FullCalendar from "@fullcalendar/react"; // Updated name
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./Appointments.css";

const Appointments: React.FC = () => {
  return (
    <div className="calendarView">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="90vh"
      />
    </div>
  );
};

export default Appointments;
