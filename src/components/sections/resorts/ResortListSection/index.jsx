import Image from "next/image";
import icon8Grid50Png from "@/assets/static/media/all_icon/icons8-grid-50.png";
import icon8List50Png from "@/assets/static/media/all_icon/icons8-list-50.png";
import icon8FilterGif from "@/assets/static/media/all_icon/icons8-filter.gif";
import ResortListItem from "./ResortListItem";
import AdvanceFiltersModal from "./AdvanceFiltersModal";
import { useState } from "react";
import { setConditionalClassName } from "@/utils/helpers";
import SidebarFilters from "./SidebarFilters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ResortListSection() {
  const [currentTab, setCurrentTab] = useState("list"); // 'grid | list'
  const [showAdvanceFilterModal, setShowAdvanceFilterModal] = useState(false);
  return (
    <>
      <section className="resort_list_section resort_list_sorting_tab">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="list_grid_view_wrapper">
                {/* ---------- Resort Grid View & List View Tab --------- */}
                <nav>
                  <div className="nav my_nav_tab nav-tabs mb-3 justify-content-end">
                    <button
                      className={`nav-link ${setConditionalClassName(
                        currentTab == "grid",
                        "active"
                      )}`}
                      type="button"
                      onClick={() => setCurrentTab("grid")}
                    >
                      <span>
                        <Image
                          src={icon8Grid50Png}
                          alt="Grid icon"
                          style={{ height: "auto" }}
                        />
                      </span>
                      Grid View
                    </button>
                    <button
                      className={`nav-link ${setConditionalClassName(
                        currentTab == "list",
                        "active"
                      )}`}
                      type="button"
                      onClick={() => setCurrentTab("list")}
                    >
                      <span>
                        <Image
                          src={icon8List50Png}
                          alt="Grid icon"
                          style={{ height: "auto" }}
                        />
                      </span>
                      List View
                    </button>
                  </div>
                </nav>
                {/* ---------- Resort Grid View & List View Tab --------- */}
                {/* ======== Grid View Tab Content */}
                <div className="tab-content grid_view_collpse">
                  {currentTab === "grid" ? (
                    <div className="tab-pane fade active show">
                      <div className="resort_advance_filter_and_result_alert_wrapper d-flex justify-content-between">
                        {/* -----------Resort Advance Search Filter Button ---------- */}
                        <button
                          type="button"
                          className="d-inline collapse_btn"
                          onClick={() => setShowAdvanceFilterModal(true)}
                        >
                          <span>
                            <Image
                              src={icon8FilterGif}
                              alt="Filter icon"
                              style={{ height: "auto" }}
                            />
                          </span>{" "}
                          Show Advance Filter
                        </button>

                        <div className="show_resort_list_availibility">
                          <div className="alert_message simple-alert">
                            <h3>Showing 6 of 10 Results</h3>
                            <a className="show_alert_close">
                              <span>
                                <FontAwesomeIcon icon={faXmark} />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* -----------Resort Advance Search Filter Button ---------- */}
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ResortListItem />
                        </div>
                      </div>
                      {/* Grid View Row  */}
                    </div>
                  ) : (
                    <>
                      {/* ======== List View Tab Content */}
                      <div className="tab-pane list-tab fade active show">
                        {/* Start Row  List View*/}
                        <div className="row">
                          <div className="col-lg-4 col-xl-3">
                            <SidebarFilters />

                            {/* -----------Resort Advance Search Filter Button ---------- */}
                            <button
                              type="button"
                              className="d-inline collapse_btn mobile-btn"
                              onClick={() => setShowAdvanceFilterModal(true)}
                            >
                              <span>
                                <Image
                                  src={icon8FilterGif}
                                  alt="Filter icon"
                                  style={{ height: "auto" }}
                                />
                              </span>{" "}
                              Show Advance Filter
                            </button>
                            {/* -----------Resort Advance Search Filter Button ---------- */}
                          </div>
                          <div className="col-lg-8 col-xl-9">
                            <ResortListItem view="list" />
                            <ResortListItem view="list" />
                            <ResortListItem view="list" />
                            <ResortListItem view="list" />
                            <ResortListItem view="list" />
                            <ResortListItem view="list" />
                          </div>
                        </div>
                        {/* End Row List View*/}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdvanceFiltersModal
        {...{ showAdvanceFilterModal, setShowAdvanceFilterModal }}
      />
    </>
  );
}
