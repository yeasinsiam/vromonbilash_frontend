import React, { useEffect, useRef, useState } from "react";

export default function SelectRoomAndGuestModal({
  showSelectRoomAndGuestModal,
  setShowSelectRoomAndGuestModal,
}) {
  const [showFade, setShowFade] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    let timeoutId = null;

    // show modal
    if (showSelectRoomAndGuestModal) {
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
  }, [showSelectRoomAndGuestModal]);

  return (
    <>
      <div
        ref={modalRef}
        className={`modal vb_custom_modal fade `}
        tabIndex={-1}
        style={{ display: "none" }}
        role="dialog"
      >
        <div className="modal-dialog select_room_modal_dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="room_select_popup_title">
                Filtering to Get More Result...
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowSelectRoomAndGuestModal(false)}
              />
            </div>
            <div className="modal_body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group floating-group">
                    <label className="popup_floating-label">
                      Number of Room
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="form-control select_room_popup_field"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>

                <div className="popup_select_room_guest_type_wrapper_main">
                  <h2>#Room-1</h2>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">
                          Room Type
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">AC</option>
                          <option value="2">Non AC</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">Adult</label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">Child</label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup_select_room_guest_type_wrapper_main">
                  <h2>#Room-2</h2>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">
                          Room Type
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">AC</option>
                          <option value="2">Non AC</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">Adult</label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6 col-md-4">
                      <div className="form-group floating-group">
                        <label className="popup_floating-label">Child</label>
                        <select
                          id="country"
                          name="country"
                          className="form-control select_room_popup_field"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="room_cancel_add_wrapper d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-sm btn-danger cencel_btn"
                      onClick={() => setShowSelectRoomAndGuestModal(false)}
                    >
                      Cencel
                    </button>
                    <button
                      className="btn btn-sm btn-success add_btn"
                      onClick={() => setShowSelectRoomAndGuestModal(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
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
