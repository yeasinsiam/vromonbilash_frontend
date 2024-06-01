import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GuestAndRoomsField({
  dropdownZIndex = 10,
  zIndex = 10,
}) {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonElement = buttonRef.current;

      const handleClickOnButton = (event) => {
        setShowDropdown((showDropdown) => {
          if (!showDropdown) {
            return true;
          } else {
            return false;
          }
        });
      };

      buttonElement.addEventListener("click", handleClickOnButton);

      return () => {
        buttonElement.removeEventListener("click", handleClickOnButton);
      };
    }
  }, [buttonRef]);

  // Hide dropdown if clicked outside
  useEffect(() => {
    if (buttonRef.current && dropdownRef.current && showDropdown) {
      const handleClickOutside = (event) => {
        if (
          !buttonRef.current.contains(event.target) &&
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
  }, [buttonRef, dropdownRef, showDropdown]);

  const handleChangeAdultCount = (count) => {
    if (count >= 1) {
      setAdultsCount(count);
    }
  };
  const handleChangeChildrenCount = (count) => {
    if (count >= 0) {
      setChildrenCount(count);
    }
  };

  return (
    <div
      className="input_form_style"
      style={{
        position: "relative",
        zIndex,
      }}
    >
      <label htmlFor="">Guests &amp; Rooms</label>
      <div className="booking-form__input guests-input">
        <button
          ref={buttonRef}
          className={`${showDropdown ? "open" : ""}`}
          type="button"
        >
          {adultsCount} Adult{adultsCount > 1 ? "s" : ""}
          {childrenCount > 0 ? `, ${childrenCount}  children` : ""}
        </button>

        {showDropdown ? (
          <motion.div
            key={"home-search-location-motion"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={dropdownRef}
              className={`guests-input__options open`}
              // className={`guests-input__options ${showDropdown ? "open" : ""}`}
              style={{ zIndex: dropdownZIndex }}
            >
              <div>
                <span
                  className={`guests-input__ctrl minus ${
                    adultsCount <= 1 ? "disabled" : ""
                  }`}
                  onClick={() => handleChangeAdultCount(adultsCount - 1)}
                >
                  {/* <i className="fa-solid fa-minus" /> */}
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className="guests-input__value">
                  <span>{adultsCount}</span>
                  Adults
                </span>
                <span
                  className="guests-input__ctrl plus"
                  onClick={() => handleChangeAdultCount(adultsCount + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
              <div>
                <span
                  className={`guests-input__ctrl minus ${
                    childrenCount <= 0 ? "disabled" : ""
                  }`}
                  onClick={() => handleChangeChildrenCount(childrenCount - 1)}
                >
                  {/* <i className="fa-solid fa-minus" /> */}
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className="guests-input__value">
                  <span>{childrenCount}</span>
                  Children
                </span>
                <span
                  className={`guests-input__ctrl plus `}
                  onClick={() => handleChangeChildrenCount(childrenCount + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
