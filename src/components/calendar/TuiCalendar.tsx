import { forwardRef } from "react";

import dynamic from "next/dynamic";
const TuiCalendar = dynamic(() => import("./TuiCalendarWrapper"), {
  ssr: false,
});

import Calendar from "@toast-ui/react-calendar";
import { TuiCalendarProps } from "./TuiCalendarWrapper";

const TuiCalendarWithForwardedRef = forwardRef<Calendar, TuiCalendarProps>(
  function forwardRefTuiCalendar(props, ref) {
    return <TuiCalendar {...props} forwardedRef={ref} />;
  }
);

export default TuiCalendarWithForwardedRef;
