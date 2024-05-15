import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function ResortGuestAndRoomsField() {
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
    <div className="input_form_style">
      <label htmlFor="">Guests &amp; Rooms</label>
      <div className="booking-form__input guests-input">
        <button
          ref={buttonRef}
          className={`${showDropdown ? "open" : ""}`}
          id="guests-input-btn"
          type="button"
        >
          {adultsCount} Adult{adultsCount > 1 ? "s" : ""}
          {childrenCount > 0 ? `, ${childrenCount}  children` : ""}
        </button>
        <div
          ref={dropdownRef}
          className={`guests-input__options ${showDropdown ? "open" : ""}`}
          id="guests-input-options"
        >
          <div>
            <span
              className={`guests-input__ctrl minus ${
                adultsCount <= 1 ? "disabled" : ""
              }`}
              onClick={() => handleChangeAdultCount(adultsCount - 1)}
              id="adults-subs-btn"
            >
              {/* <i className="fa-solid fa-minus" /> */}
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className="guests-input__value">
              <span id="guests-count-adults">{adultsCount}</span>
              Adults
            </span>
            <span
              className="guests-input__ctrl plus"
              id="adults-add-btn"
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
              id="children-subs-btn"
            >
              {/* <i className="fa-solid fa-minus" /> */}
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className="guests-input__value">
              <span id="guests-count-children">{childrenCount}</span>
              Children
            </span>
            <span
              className={`guests-input__ctrl plus `}
              onClick={() => handleChangeChildrenCount(childrenCount + 1)}
              id="children-add-btn"
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
