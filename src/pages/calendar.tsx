import { createRef, RefObject, useState } from "react";

import TuiCalendar from "@toast-ui/react-calendar";
import TuiCalendarWithForwardedRef from "../components/calendar/TuiCalendar";
import { TuiCalendarProps } from "../components/calendar/TuiCalendarWrapper";

import { ISchedule, ICalendarInfo } from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import useFetch from "../hooks/useFetch";

export default function Calendar() {
  const [calendars, loadingCalendar, errorCalendar] = useFetch<ICalendarInfo[]>(
    "/api/calendar/calendars",
    {
      method: "GET",
    }
  );
  const [schedules, loadingSchedule, errorSchedule] = useFetch<ISchedule[]>(
    "/api/calendar/schedules",
    {
      method: "GET",
    }
  );
  const [calendarView, setCalendarView] = useState<string>("month");
  const viewOptions = [
    { key: "day", value: "day", text: "Daily" },
    { key: "week", value: "week", text: "Weekly" },
    { key: "month", value: "month", text: "Month" },
  ];

  const ref = createRef<TuiCalendar>();

  function handleClickNextButton() {
    const calendarInstance = ref.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.next();
    }
  }

  function handleClickPrevButton() {
    const calendarInstance = ref.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.prev();
    }
  }

  return (
    <>
      <select
        onChange={(e) => setCalendarView(e.target.value)}
        defaultValue={calendarView}
      >
        {viewOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button onClick={handleClickPrevButton}>{"<"}</button>
      <button onClick={handleClickNextButton}>{">"}</button>
      {loadingCalendar || loadingSchedule ? (
        <div>Loading...</div>
      ) : errorCalendar || errorSchedule ? (
        <div>Error!!</div>
      ) : (
        <div style={{ height: "100vh" }}>
          <TuiCalendarWithForwardedRef
            ref={ref}
            height="100%"
            view={calendarView}
            schedules={schedules}
            calendars={calendars}
            isReadOnly={true}
            useDetailPopup={true}
          />
        </div>
      )}
    </>
  );
}
