import { setConditionalClassName } from "@/utils/helpers";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const SearchableInputField = ({
  label,
  selectText = "Type to search",
  zIndex = 10,
  options,
  value,
  onChange,
  isOptionsLoading,
}) => {
  const dropdownRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(value);

  const debounceSearchInputValueCallback = useDebouncedCallback((value) => {
    onChange(value);
  }, 500);

  // show dropdown if options available
  useEffect(() => {
    if (isInputFocused && options.length && !isOptionsLoading) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [isInputFocused, options, isOptionsLoading]);

  // when click outside of dropdown > hide dropdown
  // useEffect(() => {
  //   if (dropdownRef.current && showDropdown) {
  //     const handleClickOutside = (event) => {
  //       if (
  //         dropdownRef.current &&
  //         !dropdownRef.current.contains(event.target)
  //       ) {
  //         setShowDropdown(false);
  //       }
  //     };

  //     document.addEventListener("click", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }
  // }, [dropdownRef, showDropdown]);

  const handleSelect = (value) => {
    setSearchInputValue(value);
    setShowDropdown(false);
  };

  const handleChangeInput = (e) => {
    const eventValue = e.target.value;
    setSearchInputValue(eventValue);
    debounceSearchInputValueCallback(eventValue);
  };

  return (
    <div
      className="input_form_style"
      style={{
        position: "relative",
        zIndex,
      }}
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      tabIndex="-1"
    >
      <label htmlFor="">{label}</label>
      <div ref={dropdownRef} className="select_and_search_form">
        <div className="form-group select_search_form_group">
          <span className="select_form-arrow">
            <svg
              className="svg-inline--fa fa-caret-down"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
          </span>

          <div className="dropdown">
            <input
              type="text"
              ref={searchBoxRef}
              placeholder={selectText}
              value={searchInputValue}
              onChange={handleChangeInput}
            />
            {showDropdown ? (
              <motion.div
                key={"home-search-location-motion"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="custom-dropdown-menu">
                  <div className="dropdown-menu-inner d-block">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className={`dropdown-menu-item  d-block`}
                        // className={`dropdown-menu-item ${setConditionalClassName(
                        //   option.value == value,
                        //   "is-select"
                        // )} d-block`}
                        onClick={() => handleSelect(option.value)}
                      >
                        {option.title}
                      </div>
                    ))}
                    {/* )} */}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchableInputField;
