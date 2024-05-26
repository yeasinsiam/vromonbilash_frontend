import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";

export default function DateRangeField({
  label,
  startDate = moment().format(),
  endDate = moment().add(7, "day").format(),
}) {
  const { inputRef, dropdownRef, isMobile, showDropdown } = useInitDateRange();

  const [dateRange, setDateRange] = useState([
    {
      startDate,
      endDate,
      key: "selection",
    },
  ]);

  return (
    <div className="position-relative" style={{ zIndex: "10" }}>
      <div className="input_form_style ">
        <label htmlFor="">{label}</label>
        <input
          ref={inputRef}
          value={`${moment(dateRange[0].startDate).format(
            "DD/MM/YYYY"
          )} - ${moment(dateRange[0].endDate).format("DD/MM/YYYY")}`}
          readOnly
        />
      </div>

      {showDropdown ? (
        <motion.div
          key={"home-search-checkout-checkin-calender"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div ref={dropdownRef} className="checkin-checkout-calender">
            <DateRange
              onChange={(item) => setDateRange([item.selection])}
              showSelectionPreview={false}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={dateRange}
              direction={isMobile ? "vertical" : "horizontal"}
              showDateDisplay={false}
              rangeColors={["#312783"]}
            />
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}

const useInitDateRange = () => {
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // show if click on input
  useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;

      const handleClickOnInput = (event) => {
        setShowDropdown((showDropdown) => {
          if (!showDropdown) {
            return true;
          } else {
            return false;
          }
        });
      };

      inputElement.addEventListener("click", handleClickOnInput);

      return () => {
        inputElement.removeEventListener("click", handleClickOnInput);
      };
    }
  }, [inputRef]);

  // Hide dropdown if clicked outside
  useEffect(() => {
    if (inputRef.current && dropdownRef.current && showDropdown) {
      const handleClickOutside = (event) => {
        if (
          !inputRef.current.contains(event.target) &&
          !dropdownRef.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [inputRef, dropdownRef, showDropdown]);

  //   check if mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { inputRef, dropdownRef, isMobile, showDropdown };
};
