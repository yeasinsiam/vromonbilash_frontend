import CheckboxFields from "@/components/theme/form-fields/CheckboxFields";
import DateRangeField from "@/components/theme/form-fields/DateRangeField";
import GuestAndRoomsField from "@/components/theme/form-fields/GuestAndRoomsField";
import RangeSliderField from "@/components/theme/form-fields/RangeSliderField";
import RatingField from "@/components/theme/form-fields/RatingField";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import { setConditionalClassName } from "@/utils/helpers";
import React, { useEffect, useRef, useState } from "react";

export default function AdvanceRoomListFilterModal({
  showRoomListAdvanceFilterModal,
  setShowRoomListAdvanceFilterModal,
}) {
  const [showFade, setShowFade] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    let timeoutId = null;

    // show modal
    if (showRoomListAdvanceFilterModal) {
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
  }, [showRoomListAdvanceFilterModal]);

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
                onClick={() => setShowRoomListAdvanceFilterModal(false)}
              />
            </div>
            <div className="modal_body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <DateRangeField label="Check in - Out" zIndex={10} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <SingleSelectField
                      label="Popular Type"
                      selectText="Select your type"
                      zIndex={20}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <GuestAndRoomsField />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <SingleSelectField
                      label="AC/NonAC"
                      isSearchAble={false}
                      zIndex={30}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <SingleSelectField
                      label="Order"
                      isSearchAble={false}
                      zIndex={30}
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="filtering_item">
                    {/* range slider starts */}
                    <div className="filter_title">
                      <h4>Filter By Price</h4>
                    </div>
                    <RangeSliderField />
                    {/* range slider ends */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Room Ratings</h4>
                    </div>
                    <RatingField />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="filtering_item">
                    <div className="filter_title">
                      <h4>Room Features</h4>
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
                </div>
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
                {/* /.col-lg-6 */}
                <div className=" col-lg-12 d-flex align-items-center mt-2">
                  <button
                    type="button"
                    class="check_availability_btn "
                    onClick={() => setShowRoomListAdvanceFilterModal(false)}
                    style={{ marginTop: "0" }}
                  >
                    Apply Filters
                  </button>
                  <div style={{ marginLeft: "1rem" }}>
                    <button type="button" className="btn btn-defaul_listing  ">
                      Reset filters
                    </button>
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
