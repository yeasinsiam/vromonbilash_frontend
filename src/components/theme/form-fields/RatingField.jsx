import { setConditionalClassName } from "@/utils/helpers";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function RatingField({ activeRatings = [], setActiveRatings }) {
  // const [activeRatings, setActiveRatings] = useState([]);

  const setActiveRating = (value) => {
    if (activeRatings.includes(value)) {
      setActiveRatings(
        activeRatings.filter((activeRatings) => activeRatings != value)
      );
    } else {
      setActiveRatings([...activeRatings, value]);
    }
  };

  // useEffect(() => {
  //   if (activeRatings.length > 1) {
  //     // calling cats to attack dogs
  //   }
  // }, [activeRatings]);

  return (
    <div className="rating_stars mt-2">
      <ul className="rating_list ps-0">
        {[1, 2, 3, 4, 5].map((value) => (
          <li
            key={value}
            className={`list-inline-item ${setConditionalClassName(
              activeRatings.includes(value),
              "rating_active"
            )}`}
            onClick={() => setActiveRating(value)}
          >
            <FontAwesomeIcon icon={faStar} />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
