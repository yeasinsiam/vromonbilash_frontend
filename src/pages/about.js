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

  return (
    <div>
      <Link href="/">Go Back To Home Page</Link>
      <br />
      <div className="checkin-checkout-calender">
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
