"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

//Start weekday on Monday
moment.locale("ko", {
  week: {
    dow: 1,
    doy: 1,
  },
});

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  const data: [] = [];

  /* 
    Scroll to current hour function 
  */
  const scrollToCurrentHour = () => {
    if (!calendarRef.current) return;
    const container = calendarRef.current.querySelector(
      ".rbc-time-content"
    ) as HTMLElement;
    if (!container) return;

    const now = new Date();
    const hourHeight = container.scrollHeight / 24;
    const scrollPosition = now.getHours() * hourHeight;
    container.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  // scroll on first render
  useEffect(() => {
    scrollToCurrentHour();
  }, []);

  // scroll on view or date change
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToCurrentHour();
    }, 0);
    return () => clearTimeout(timeout);
  }, [view, date]);

  /* 
    End of scroll to current hour function 
  */

  return (
    <div ref={calendarRef} style={{ height: "90vh", padding: 10 }}>
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        style={{ height: "100%" }}
        views={["week", "day"]}
        view={view}
        date={date}
        onView={setView}
        onNavigate={setDate}
        step={30}
        timeslots={2}
        min={new Date(2025, 0, 1, 0, 0)}
        max={new Date(2025, 0, 1, 23, 59, 59)}
      />
    </div>
  );
};

export default BigCalendar;
