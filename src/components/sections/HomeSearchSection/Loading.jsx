import React from "react";

export default function HomeSearchSectionLoadingPlaceholder() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .search_field_section #nav-tab {
            margin-bottom: 10px;
            /* display: flex;
            justify-content: center; */
          }
          .search_field_section .circle-area {
            justify-content: center !important;
          }
        }
      `}</style>
      <section className="search_field_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-11 col-xxl-10">
              <form action="">
                <div className="search_form_wrapper ">
                  <nav>
                    <div className=" d-flex" id="nav-tab" role="tablist">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "100px",
                          height: `30px`,
                          borderRadius: "5px",
                        }}
                      />
                      <div
                        className="c-skeleton-square"
                        style={{
                          width: "100px",
                          height: `30px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </nav>
                  <div className="tab-content">
                    <div className={`tab-pane active`} role="tabpanel">
                      <div className="resort_package_search_form">
                        <div className="row gy-3">
                          <div className="col-md-12 col-lg-4 d-flex align-items-center">
                            <div
                              className="c-skeleton-square me-2"
                              style={{
                                width: "100%",
                                height: `65px`,
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                          <div className="col-md-12 col-lg-3 d-flex align-items-center">
                            <div
                              className="c-skeleton-square me-2"
                              style={{
                                width: "100%",
                                height: `65px`,
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                          <div className="col-md-12 col-lg-3 d-flex align-items-center">
                            <div
                              className="c-skeleton-square me-2"
                              style={{
                                width: "100%",
                                height: `65px`,
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                          <div className="circle-area col-md-12 col-lg-2 d-flex justify-content-end">
                            <div
                              className="c-skeleton-square me-2"
                              style={{
                                width: "90px",
                                height: `90px`,
                                borderRadius: "9999px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
