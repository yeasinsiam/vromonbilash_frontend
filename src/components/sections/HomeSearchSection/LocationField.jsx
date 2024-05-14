import React, { useEffect, useRef, useState } from "react";

export default function SelectField() {
  const dropdownRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (dropdownRef.current && searchBoxRef.current) {
      const dropdownElement = dropdownRef.current;
      const searchBoxElement = searchBoxRef.current;

      const handleClickOnDropdownRef = (event) => {
        setShowDropdown((showDropdown) => {
          if (!showDropdown) {
            return true;
          } else {
            // check if it clicked on dropdown list
            if (
              event.target.classList.contains("dropdown-list") ||
              event.target.closest(".dropdown-list")
            ) {
              return true;
            } else {
              return false;
            }
          }
        });
      };

      dropdownElement.addEventListener("click", handleClickOnDropdownRef);

      return () => {
        dropdownElement.removeEventListener("click", handleClickOnDropdownRef);
      };
    }
  }, [dropdownRef, searchBoxRef]);

  // Hide dropdown if clicked outside
  useEffect(() => {
    if (dropdownRef.current && showDropdown) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
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
  }, [dropdownRef, showDropdown]);

  return (
    <>
      <input type="hidden" />
      <div
        ref={dropdownRef}
        className={`dropdown-select wide form_select ${
          showDropdown ? "open" : ""
        }`}
      >
        <span className="current"> San Jacinto, USA</span>
        <div className="list dropdown-list">
          <div className="dd-search">
            <input
              ref={searchBoxRef}
              id="txtSearchValue"
              autoComplete="off"
              className="dd-searchbox"
              type="search"
              placeholder="Search Location"
              style={{ fontSize: 14, color: "#ddd", fontWeight: 300 }}
            />
          </div>
          <ul>
            <li
              className="option selected"
              data-value={1}
              data-display-text=""
              tabIndex={0}
            >
              {" "}
              San Jacinto, USA
            </li>
            <li
              className="option "
              data-value={2}
              data-display-text=""
              tabIndex={0}
            >
              Dhaka, Bangladesh
            </li>
            <li
              className="option "
              data-value={3}
              data-display-text=""
              tabIndex={0}
            >
              Jacinto, USA
            </li>
            <li
              className="option "
              data-value={4}
              data-display-text=""
              tabIndex={0}
            >
              {" "}
              San Jacinto, USA
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
