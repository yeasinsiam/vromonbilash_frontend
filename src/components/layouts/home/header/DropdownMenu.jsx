import {
  faAngleDoubleDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function DropdownMenu() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <li
      className="nav-link dropdown_c dropdown_hover"
      onMouseOver={() => setShowDropdown(true)}
      onMouseOut={() => setShowDropdown(false)}
    >
      <a href="#">
        Pages{" "}
        <span>
          {/* <i className="fa-solid fa-angles-down" /> */}
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </span>{" "}
      </a>
      <div className="drop-content">
        {showDropdown ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={"pages-menu-dropdown"}
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   exit={{ opacity: 0 }}
              //   transition={{ duration: 0.2 }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="drop-hover">
                <li>
                  <a href="#">Resorts List</a>
                </li>
                <li>
                  <a href="#">Packages List</a>
                </li>
                <li>
                  <a href="#">How To Payment</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </li>
  );
}
