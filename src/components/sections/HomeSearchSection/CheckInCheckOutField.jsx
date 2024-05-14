import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import DateRangePicker from "react-daterange-picker";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

export default function CheckInCheckOutField() {
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const today = moment();
  const [selectedDateRange, setSelectedDateRange] = useState(
    moment.range(today.clone().subtract(7, "days"), today.clone())
  );

  console.log(selectedDateRange);
  //   show if click on input
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

  return (
    <div className="input_form_style position-relative">
      <label htmlFor="">Check in - Out</label>
      <input ref={inputRef} />
      {showDropdown ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={"home-search-checkout-checkin-calender"}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.2 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={dropdownRef}
              className="home-search-checkin-checkout-calender"
            >
              working on it
              {/* <DateRangePicker
                numberOfCalendars={2}
                onSelect={(value, states) => {
                  setSelectedDateRange(value);
                }}
              /> */}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </div>
  );
}
