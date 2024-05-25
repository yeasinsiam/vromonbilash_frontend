import { setConditionalClassName } from "@/utils/helpers";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function RatingField() {
  const [activeRatings, setActiveRatings] = useState([]);

  const setActiveRating = (value) => {
    // check if activeRatings is empty or has more then 1 rating
    if (!activeRatings.length || activeRatings.length > 1) {
      setActiveRatings([value]); //setting only one value
    } else {
      const firstRating = activeRatings[0];
      // check if clicked value is height
      if (firstRating < value) {
        const startNumber = firstRating;
        const endNumber = value;

        const newActiveRating = Array.from(
          { length: endNumber - startNumber + 1 },
          (_, index) => index + startNumber
        );
        setActiveRatings(newActiveRating);
      } else {
        // check if clicked value is lower
        const startNumber = value;
        const endNumber = firstRating;

        const newActiveRating = Array.from(
          { length: endNumber - startNumber + 1 },
          (_, index) => index + startNumber
        );
        setActiveRatings(newActiveRating);
      }
    }
  };

  useEffect(() => {
    if (activeRatings.length > 1) {
      // calling cats to attack dogs
    }
  }, [activeRatings]);

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
