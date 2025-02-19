"use client";

import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "@/styles/calendar.css"; // Custom styles (we'll create this)

type Props = {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
};

function Calendar({ value, onChange, disabledDates }: Props) {
  return (
    <div className="calendar-container">
      <DateRange
        rangeColors={["#1E3A8A"]} // Deep Blue for selected range
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
}

export default Calendar;


