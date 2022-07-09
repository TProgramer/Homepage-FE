import { HTMLAttributes, LegacyRef } from "react";
import Calendar, { EventMaps } from "@toast-ui/react-calendar";
import { IOptions, ISchedule } from "tui-calendar";

export type TuiCalendarProps = IOptions &
  EventMaps & {
    height: string;
    view?: string;
    schedules?: ISchedule[];
  } & HTMLAttributes<HTMLElement>;

type TuiCalendarPropsWithRef = {
  forwardedRef: LegacyRef<Calendar>;
} & TuiCalendarProps;

export default function TuiCalendarWrapper(props: TuiCalendarPropsWithRef) {
  return <Calendar {...props} ref={props.forwardedRef} />;
}
