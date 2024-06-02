import Image from "next/image";
import { useState } from "react";
import searchGif from "@/assets/static/media/search.gif";
import { AnimatePresence, motion } from "framer-motion";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import DateRangeField from "@/components/theme/form-fields/DateRangeField";
// import { DateRangePicker } from "react-date-range";
// import DateRangePicker from "react-daterange-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faHotel } from "@fortawesome/free-solid-svg-icons";
import GuestAndRoomsField from "@/components/theme/form-fields/GuestAndRoomsField";

export default function HomeSearchSection() {
  const [activeTab, setActiveTab] = useState("resort"); //[ resort | package ]

  const isClass = (condition, className) => {
    return condition ? className : "";
  };
  return (
    <section className="search_field_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-11 col-xxl-11">
            <div>
              <div className="search_form_wrapper">
                <nav>
                  <div
                    className="nav my_nav_tab nav-tabs mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className={`nav-link ${isClass(
                        activeTab == "resort",
                        "active"
                      )}`}
                      type="button"
                      role="tab"
                      onClick={() => setActiveTab("resort")}
                    >
                      <span>
                        {/* <i className="fa-solid fa-hotel" /> */}
                        <FontAwesomeIcon icon={faHotel} />
                      </span>
                      Resort
                    </button>
                    <button
                      className={`nav-link ${isClass(
                        activeTab == "package",
                        "active"
                      )}`}
                      type="button"
                      role="tab"
                      onClick={() => setActiveTab("package")}
                    >
                      <span>
                        {/* <i className="fa-solid fa-gift" /> */}

                        <FontAwesomeIcon icon={faGift} />
                      </span>
                      Package
                    </button>
                  </div>
                </nav>
                <div className="tab-content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      //   initial={{ y: 10, opacity: 0 }}
                      //   animate={{ y: 0, opacity: 1 }}
                      //   exit={{ y: -10, opacity: 0 }}
                      //   transition={{ duration: 0.2 }}
                    >
                      <div>
                        {activeTab == "resort" ? (
                          <div className={`tab-pane`} role="tabpanel">
                            <div className="resort_package_search_form">
                              <div className="row">
                                <div className="col-md-12 col-lg-4">
                                  <SingleSelectField
                                    label="Location"
                                    selectText=" Select your country"
                                    zIndex={30}
                                  />
                                </div>
                                <div className="col-md-5 col-lg-3">
                                  <DateRangeField
                                    label="Check in - Out"
                                    zIndex={20}
                                  />
                                </div>
                                <div className="col-md-5 col-lg-3">
                                  <GuestAndRoomsField />
                                </div>
                                <div className="col-md-2 col-lg-2">
                                  <button
                                    className="form_submit_search_btn"
                                    type="button"
                                  >
                                    <div className="circle-wrapper text-center text-md-end">
                                      <div className="warning circle" />
                                      <div className="icon">
                                        <Image
                                          src={searchGif}
                                          alt="Search"
                                          style={{ height: "auto" }}
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className={`tab-pane`}>
                            {/* Package Tab */}
                            <div className="resort_package_search_form">
                              <div className="row">
                                <div className="col-md-12 col-lg-5">
                                  <SingleSelectField
                                    label="Location"
                                    selectText=" Select your country"
                                    zIndex={20}
                                  />
                                </div>
                                <div className="col-md-12 col-lg-5">
                                  <SingleSelectField
                                    label="Location"
                                    selectText="Select your package"
                                  />
                                </div>
                                <div className="col-md-2 col-lg-2">
                                  <button
                                    className="form_submit_search_btn"
                                    type="button"
                                  >
                                    <div className="circle-wrapper text-center text-md-end">
                                      <div className="warning circle" />
                                      <div className="icon">
                                        <Image
                                          src={searchGif}
                                          alt="Search"
                                          unoptimized
                                          style={{ height: "auto" }}
                                        />
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
