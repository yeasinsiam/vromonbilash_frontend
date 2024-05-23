import { motion } from "framer-motion";
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
              event.target.classList.contains("dropdown-menu") ||
              event.target.closest(".dropdown-menu")
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
            {/* <i class="fa-solid fa-caret-down"></i> Font Awesome fontawesome.com */}
          </span>

          <div className="dropdown">
            <div ref={searchBoxRef} className="dropdown-select">
              Afghanistan
            </div>
            {showDropdown ? (
              <motion.div
                key={"home-search-location-motion"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="dropdown-menu"
                  style={{ display: "block", marginTop: "4px" }}
                  // style={{ display: showDropdown ? "block" : "none" }}
                >
                  <input
                    placeholder="Search..."
                    type="text"
                    className="dropdown-menu-search"
                  />
                  <div
                    className="dropdown-menu-inner"
                    style={{ display: "block" }}
                  >
                    <div
                      className="dropdown-menu-item selected"
                      data-value="Select your country"
                      style={{ display: "block" }}
                    >
                      Select your country
                    </div>
                    <div
                      className="dropdown-menu-item is-select"
                      data-value="Afghanistan"
                      style={{ display: "block" }}
                    >
                      Afghanistan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Albania"
                      style={{ display: "block" }}
                    >
                      Albania
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Algeria"
                      style={{ display: "block" }}
                    >
                      Algeria
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="American Samoa"
                      style={{ display: "block" }}
                    >
                      American Samoa
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Andorra"
                      style={{ display: "block" }}
                    >
                      Andorra
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Angola"
                      style={{ display: "block" }}
                    >
                      Angola
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Anguilla"
                      style={{ display: "block" }}
                    >
                      Anguilla
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Antigua Barbuda"
                      style={{ display: "block" }}
                    >
                      Antigua Barbuda
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Argentina"
                      style={{ display: "block" }}
                    >
                      Argentina
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Armenia"
                      style={{ display: "block" }}
                    >
                      Armenia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Aruba"
                      style={{ display: "block" }}
                    >
                      Aruba
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Australia"
                      style={{ display: "block" }}
                    >
                      Australia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Austria"
                      style={{ display: "block" }}
                    >
                      Austria
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Azerbaijan"
                      style={{ display: "block" }}
                    >
                      Azerbaijan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bahamas"
                      style={{ display: "block" }}
                    >
                      Bahamas
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bahrain"
                      style={{ display: "block" }}
                    >
                      Bahrain
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bangladesh"
                      style={{ display: "block" }}
                    >
                      Bangladesh
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Barbados"
                      style={{ display: "block" }}
                    >
                      Barbados
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Belarus"
                      style={{ display: "block" }}
                    >
                      Belarus
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Belgium"
                      style={{ display: "block" }}
                    >
                      Belgium
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Belize"
                      style={{ display: "block" }}
                    >
                      Belize
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Benin"
                      style={{ display: "block" }}
                    >
                      Benin
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bermuda"
                      style={{ display: "block" }}
                    >
                      Bermuda
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bhutan"
                      style={{ display: "block" }}
                    >
                      Bhutan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bolivia"
                      style={{ display: "block" }}
                    >
                      Bolivia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bonaire"
                      style={{ display: "block" }}
                    >
                      Bonaire
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bosnia Herzegovina"
                      style={{ display: "block" }}
                    >
                      Bosnia Herzegovina
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Botswana"
                      style={{ display: "block" }}
                    >
                      Botswana
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Brazil"
                      style={{ display: "block" }}
                    >
                      Brazil
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Brunei"
                      style={{ display: "block" }}
                    >
                      Brunei
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Bulgaria"
                      style={{ display: "block" }}
                    >
                      Bulgaria
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Burundi"
                      style={{ display: "block" }}
                    >
                      Burundi
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Cambodia"
                      style={{ display: "block" }}
                    >
                      Cambodia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Cameroon"
                      style={{ display: "block" }}
                    >
                      Cameroon
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Canada"
                      style={{ display: "block" }}
                    >
                      Canada
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Central African"
                      style={{ display: "block" }}
                    >
                      Central African
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Chad"
                      style={{ display: "block" }}
                    >
                      Chad
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Chile"
                      style={{ display: "block" }}
                    >
                      Chile
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="China"
                      style={{ display: "block" }}
                    >
                      China
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Colombia"
                      style={{ display: "block" }}
                    >
                      Colombia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Comoros"
                      style={{ display: "block" }}
                    >
                      Comoros
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Congo"
                      style={{ display: "block" }}
                    >
                      Congo
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Croatia"
                      style={{ display: "block" }}
                    >
                      Croatia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Cuba"
                      style={{ display: "block" }}
                    >
                      Cuba
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Curacao"
                      style={{ display: "block" }}
                    >
                      Curacao
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Cyprus"
                      style={{ display: "block" }}
                    >
                      Cyprus
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Czech"
                      style={{ display: "block" }}
                    >
                      Czech
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Denmark"
                      style={{ display: "block" }}
                    >
                      Denmark
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Djibouti"
                      style={{ display: "block" }}
                    >
                      Djibouti
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Dominica"
                      style={{ display: "block" }}
                    >
                      Dominica
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="East Timor"
                      style={{ display: "block" }}
                    >
                      East Timor
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Ecuador"
                      style={{ display: "block" }}
                    >
                      Ecuador
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Egypt"
                      style={{ display: "block" }}
                    >
                      Egypt
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Eritrea"
                      style={{ display: "block" }}
                    >
                      Eritrea
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Estonia"
                      style={{ display: "block" }}
                    >
                      Estonia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Ethiopia"
                      style={{ display: "block" }}
                    >
                      Ethiopia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Finland"
                      style={{ display: "block" }}
                    >
                      Finland
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="France"
                      style={{ display: "block" }}
                    >
                      France
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Gabon"
                      style={{ display: "block" }}
                    >
                      Gabon
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Gambia"
                      style={{ display: "block" }}
                    >
                      Gambia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Georgia"
                      style={{ display: "block" }}
                    >
                      Georgia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Germany"
                      style={{ display: "block" }}
                    >
                      Germany
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Ghana"
                      style={{ display: "block" }}
                    >
                      Ghana
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Gibraltar"
                      style={{ display: "block" }}
                    >
                      Gibraltar
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Greece"
                      style={{ display: "block" }}
                    >
                      Greece
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Greenland"
                      style={{ display: "block" }}
                    >
                      Greenland
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Grenada"
                      style={{ display: "block" }}
                    >
                      Grenada
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Guadeloupe"
                      style={{ display: "block" }}
                    >
                      Guadeloupe
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Guam"
                      style={{ display: "block" }}
                    >
                      Guam
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Guatemala"
                      style={{ display: "block" }}
                    >
                      Guatemala
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Guinea"
                      style={{ display: "block" }}
                    >
                      Guinea
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Guyana"
                      style={{ display: "block" }}
                    >
                      Guyana
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Haiti"
                      style={{ display: "block" }}
                    >
                      Haiti
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Hawaii"
                      style={{ display: "block" }}
                    >
                      Hawaii
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Honduras"
                      style={{ display: "block" }}
                    >
                      Honduras
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Hongkong"
                      style={{ display: "block" }}
                    >
                      Hongkong
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Hungary"
                      style={{ display: "block" }}
                    >
                      Hungary
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Iceland"
                      style={{ display: "block" }}
                    >
                      Iceland
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Indonesia"
                      style={{ display: "block" }}
                    >
                      Indonesia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="India"
                      style={{ display: "block" }}
                    >
                      India
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Iran"
                      style={{ display: "block" }}
                    >
                      Iran
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Iraq"
                      style={{ display: "block" }}
                    >
                      Iraq
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Ireland"
                      style={{ display: "block" }}
                    >
                      Ireland
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Israel"
                      style={{ display: "block" }}
                    >
                      Israel
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Italy"
                      style={{ display: "block" }}
                    >
                      Italy
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Jamaica"
                      style={{ display: "block" }}
                    >
                      Jamaica
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Japan"
                      style={{ display: "block" }}
                    >
                      Japan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Jordan"
                      style={{ display: "block" }}
                    >
                      Jordan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Kazakhstan"
                      style={{ display: "block" }}
                    >
                      Kazakhstan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Kenya"
                      style={{ display: "block" }}
                    >
                      Kenya
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Kiribati"
                      style={{ display: "block" }}
                    >
                      Kiribati
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Korea North"
                      style={{ display: "block" }}
                    >
                      Korea North
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Korea South"
                      style={{ display: "block" }}
                    >
                      Korea South
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Kuwait"
                      style={{ display: "block" }}
                    >
                      Kuwait
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Kyrgyzstan"
                      style={{ display: "block" }}
                    >
                      Kyrgyzstan
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Laos"
                      style={{ display: "block" }}
                    >
                      Laos
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Latvia"
                      style={{ display: "block" }}
                    >
                      Latvia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Lebanon"
                      style={{ display: "block" }}
                    >
                      Lebanon
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Lesotho"
                      style={{ display: "block" }}
                    >
                      Lesotho
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Liberia"
                      style={{ display: "block" }}
                    >
                      Liberia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Libya"
                      style={{ display: "block" }}
                    >
                      Libya
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Liechtenstein"
                      style={{ display: "block" }}
                    >
                      Liechtenstein
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Lithuania"
                      style={{ display: "block" }}
                    >
                      Lithuania
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Luxembourg"
                      style={{ display: "block" }}
                    >
                      Luxembourg
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Macau"
                      style={{ display: "block" }}
                    >
                      Macau
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Macedonia"
                      style={{ display: "block" }}
                    >
                      Macedonia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Madagascar"
                      style={{ display: "block" }}
                    >
                      Madagascar
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Malaysia"
                      style={{ display: "block" }}
                    >
                      Malaysia
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Malawi"
                      style={{ display: "block" }}
                    >
                      Malawi
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Maldives"
                      style={{ display: "block" }}
                    >
                      Maldives
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Mali"
                      style={{ display: "block" }}
                    >
                      Mali
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Malta"
                      style={{ display: "block" }}
                    >
                      Malta
                    </div>
                    <div
                      className="dropdown-menu-item"
                      data-value="Martinique"
                      style={{ display: "block" }}
                    >
                      Martinique
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
