import Link from "next/link";

import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import moment from "moment";

export default function AboutPage() {
  const [state, setState] = useState([
    {
      startDate: moment().format(),
      endDate: moment().add(7, "day").format(),
      key: "selection",
    },
  ]);

  console.log(state);
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <div className="home-search-checkin-checkout-calender">
        <DateRange
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={false}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          showDateDisplay={false}
          rangeColors={["#312783"]}
        />
      </div>
    </div>
  );
}
