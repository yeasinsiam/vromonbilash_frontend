import CheckboxFields from "@/components/theme/form-fields/CheckboxFields";
import GuestAndRoomsField from "@/components/theme/form-fields/GuestAndRoomsField";
import RangeSliderField from "@/components/theme/form-fields/RangeSliderField";
import RatingField from "@/components/theme/form-fields/RatingField";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import { useResortListFiltersContext } from "@/contexts/sections/resorts/ResortListFiltersContext";
import { setConditionalClassName } from "@/utils/helpers";
import React, { useEffect, useRef, useState } from "react";

export default function AdvanceFiltersModal({
  showAdvanceFilterModal,
  setShowAdvanceFilterModal,
}) {
  const [showFade, setShowFade] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    let timeoutId = null;

    // show modal
    if (showAdvanceFilterModal) {
      setShowFade(true);
      modalRef.current.style.display = "block";
      timeoutId = setTimeout(() => {
        modalRef.current.classList.add("show");
      }, 100);
      // hide modal
    } else {
      modalRef.current.classList.remove("show");
      timeoutId = setTimeout(() => {
        modalRef.current.style.display = "none";
        setShowFade(false);
      }, 200);
    }
    return () => clearTimeout(timeoutId);
  }, [showAdvanceFilterModal]);

  const [vromonbilashRatings, setVromonbilashRatings] = useState([]);
  const [resortRatings, setResortRatings] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: 500,
    max: 5000,
  });
  const [roomType, setRoomType] = useState("");

  const resortListFiltersContext = useResortListFiltersContext();

  const applyFilters = () => {
    resortListFiltersContext.setVromonbilashRatings(vromonbilashRatings);
    resortListFiltersContext.setResortRatings(resortRatings);
    resortListFiltersContext.setPriceRange(priceRange);
    resortListFiltersContext.setRoomType(roomType);
    setShowAdvanceFilterModal(false);
  };

  return (
    <>
      <div
        ref={modalRef}
        className={`modal vb_custom_modal fade `}
        tabIndex={-1}
        style={{ display: "none" }}
        role="dialog"
      >
        <div className="modal-dialog resort_modal_dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="room_select_popup_title">
                Filtering to Get More Result...
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAdvanceFilterModal(false)}
              />
            </div>
            <div className="modal_body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Filter By Price</h4>
                    </div>
                    <RangeSliderField
                      startRange={priceRange.min}
                      endRange={priceRange.max}
                      minRange={priceRange.min}
                      maxRange={priceRange.max}
                      onChange={(min, max) => setPriceRange({ min, max })}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>AC/NonAC</h4>
                    </div>
                    <CheckboxFields
                      view="list"
                      items={[
                        { label: "AC", value: "A" },
                        { label: "Non AC", value: "N" },
                      ]}
                      checked={[roomType]}
                      onChecked={(value) =>
                        setRoomType((oldValue) =>
                          oldValue == value ? "" : value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Vromonbilash Ratings</h4>
                    </div>
                    <RatingField
                      activeRatings={vromonbilashRatings}
                      setActiveRatings={setVromonbilashRatings}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Resort Ratings</h4>
                    </div>
                    <RatingField
                      activeRatings={resortRatings}
                      setActiveRatings={setResortRatings}
                    />
                  </div>
                </div>

                {/* <div className="col-lg-4">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Customer Ratings</h4>
                    </div>
                    <RatingField />
                  </div>
                </div> */}
                {/* <div className="col-lg-4">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Hotel Types</h4>
                    </div>
                    <CheckboxFields
                      items={[
                        { label: "Hotel", value: 1 },
                        { label: "Apartment", value: 2 },
                        { label: "Resort", value: 3 },
                        { label: "Vilo", value: 4 },
                      ]}
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="btn-toolbar mb-3" role="toolbar">
                <div className="btn-group btn-group-sm">
                  <button
                    type="button"
                    className="btn btn-defaul_listing"
                    id="freqselect"
                  >
                    Select Frequent
                  </button>
                  <button
                    type="button"
                    className="btn btn-defaul_listing"
                    id="selectall"
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    className="btn btn-defaul_listing"
                    id="clearall"
                  >
                    Clear All
                  </button>
                </div>
              </div> */}
              <div className="row">
                {/* <div className="col-lg-6">
                  <h4 id="user" className="listing_view_header">
                    Amenities{" "}
                  </h4>

                  <CheckboxFields
                    items={[
                      { label: "Air Conditioning", value: 1 },
                      { label: "Room Services", value: 2 },
                      { label: "Dining", value: 3 },
                      { label: "Caretaker", value: 4 },
                      { label: "Free Internet", value: 5 },
                      { label: "Business Service", value: 6 },
                      { label: "Bonfire", value: 7 },
                      { label: "Mask", value: 8 },
                      { label: "Spa", value: 9 },
                      { label: "Swimming pool", value: 10 },
                      { label: "Fitness Centre", value: 11 },
                      { label: "Bar", value: 12 },
                      { label: "Bonfire", value: 13 },
                    ]}
                  />
                </div> */}
                {/* /.col-lg-6 */}
                {/* <div className="col-lg-6">
                  <h4 id="user" className="listing_view_header">
                    Amenities{" "}
                  </h4>

                  <CheckboxFields
                    items={[
                      { label: "Air Conditioning", value: 1 },
                      { label: "Room Services", value: 2 },
                      { label: "Dining", value: 3 },
                      { label: "Caretaker", value: 4 },
                      { label: "Free Internet", value: 5 },
                      { label: "Business Service", value: 6 },
                      { label: "Bonfire", value: 7 },
                      { label: "Mask", value: 8 },
                      { label: "Spa", value: 9 },
                      { label: "Swimming pool", value: 10 },
                      { label: "Fitness Centre", value: 11 },
                      { label: "Bar", value: 12 },
                      { label: "Bonfire", value: 13 },
                    ]}
                  />
                </div> */}
                {/* /.col-lg-6 */}
                <div className=" col-lg-12 d-flex align-items-center mt-2">
                  <button
                    type="button"
                    className="check_availability_btn "
                    onClick={() => applyFilters()}
                    style={{ marginTop: "0" }}
                  >
                    Apply Filters
                  </button>
                  <div style={{ marginLeft: "1rem" }}>
                    {/* <button type="button" className="btn btn-defaul_listing  ">
                      Reset filters
                    </button> */}
                  </div>
                </div>
              </div>
              {/* /.row */}
            </div>
          </div>
        </div>
      </div>

      {showFade && (
        <>
          <div className={`modal-backdrop fade show`}></div>
          <div className={`modal-backdrop fade show`}></div>
        </>
      )}
    </>
  );
}
