import DateRangeField from "@/components/theme/form-fields/DateRangeField";
import GuestAndRoomsField from "@/components/theme/form-fields/GuestAndRoomsField";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import backgroundPng from "@/assets/static/media/d_bg.png";

import searchGif from "@/assets/static/media/search.gif";
import Image from "next/image";
import { useRef, useState } from "react";
import useSWR from "swr";
import SearchableInputField from "@/components/theme/form-fields/SearchableInputField";
import moment from "moment";
import { useResortListFiltersContext } from "@/contexts/sections/resorts/ResortListFiltersContext";

function useWhereToResortValue() {
  const isInitialInputChanged = useRef(false);
  const [value, setValue] = useState("");

  const { data: optionsData, isLoading: isOptionsLoading } = useSWR(
    value != null && isInitialInputChanged.current
      ? `/resorts/suggestions/?search=${value}`
      : null,
    {
      fallbackData: [],
    }
  );

  return {
    isInitialInputChanged,
    value,
    setValue,
    optionsData,
    isOptionsLoading,
  };
}

export default function ResortsSearchSection() {
  const resortListingFiltersContext = useResortListFiltersContext();

  const whereToResortValue = useWhereToResortValue();
  const [checkInCheckOut, setCheckInCheckOut] = useState({
    checkIn: moment(),
    checkOut: moment().add(1, "day"),
  });
  const [adultAndChildCount, setAdultAndChildCount] = useState({
    adult: 1,
    child: 0,
  });

  const handleSearch = () => {
    resortListingFiltersContext.setSearch(whereToResortValue.value);
    resortListingFiltersContext.setCheckInCheckOut(checkInCheckOut);
    resortListingFiltersContext.setAdultAndChildCount(adultAndChildCount);
  };

  return (
    <>
      <section className="breadcrumb_section2">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="breadcrumb_bg_wrapper">
                <Image
                  src={backgroundPng}
                  alt="Breadcrumb Bg"
                  fill
                  style={{
                    position: "absolute",
                    zIndex: "-1",
                    objectFit: "cover",
                  }}
                />
                <h1 className="text-center">Find The Top Hotels Nearby</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="search_field_section search_field_section_others_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-11 col-xxl-11">
              <div>
                <div className="search_form_wrapper">
                  <div className="resort_package_search_form">
                    <div className="row">
                      <div className="col-md-12 col-lg-4">
                        <SearchableInputField
                          label="Where to go?"
                          zIndex={30}
                          options={whereToResortValue.optionsData.map(
                            (option) => ({
                              title: option.title,
                              value: option.title,
                            }),
                            []
                          )}
                          value={whereToResortValue.value}
                          onChange={(value) => {
                            whereToResortValue.setValue(value);
                            whereToResortValue.isInitialInputChanged.current = true;
                          }}
                          isOptionsLoading={whereToResortValue.isOptionsLoading}
                        />
                      </div>
                      <div className="col-md-5 col-lg-3">
                        <DateRangeField
                          label="Check in - Out"
                          minDate={moment()._d}
                          startDate={checkInCheckOut.checkIn}
                          endDate={checkInCheckOut.checkOut}
                          onChange={(startDate, endDate) =>
                            setCheckInCheckOut({
                              checkIn: startDate,
                              checkOut: endDate,
                            })
                          }
                          zIndex={20}
                        />
                      </div>
                      <div className="col-md-5 col-lg-3">
                        <GuestAndRoomsField
                          adultsCount={adultAndChildCount.adult}
                          childrenCount={adultAndChildCount.child}
                          setAdultsCount={(count) =>
                            setAdultAndChildCount({
                              ...adultAndChildCount,
                              adult: count,
                            })
                          }
                          setChildrenCount={(count) =>
                            setAdultAndChildCount({
                              ...adultAndChildCount,
                              child: count,
                            })
                          }
                        />
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <button
                          className="form_submit_search_btn"
                          type="button"
                          onClick={handleSearch}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ResortsSearchSectionLoading() {
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
      <section className="breadcrumb_section2">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="breadcrumb_bg_wrapper">
                <div
                  className="c-skeleton-square "
                  style={{
                    position: "absolute",
                    width: " 100%",
                    height: "100%",
                    inset: "0",
                    animationDuration: "1.5s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search_field_section search_field_section_others_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-11 col-xxl-11">
              <form action="">
                <div className="search_form_wrapper ">
                  {/* <nav>
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
                  </nav> */}
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

// function useWhereToResortValue() {
//   const [value, setValue] = useState("");
//   const [searchValue, setSearchValue] = useState(null);

//   const { data: optionsData, isLoading: isOptionsLoading } = useSWR(
//     searchValue != null ? `/resorts/suggestions/?search=${searchValue}` : null,
//     {
//       fallbackData: [],
//     }
//   );

//   return {
//     value,
//     searchValue,
//     setValue,
//     setSearchValue,
//     optionsData,
//     isOptionsLoading,
//   };
// }
