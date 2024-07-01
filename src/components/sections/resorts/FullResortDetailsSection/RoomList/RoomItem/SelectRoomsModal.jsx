import { useSingleResortCheckoutDataContext } from "@/contexts/resort/details/SingleResortCheckoutDataContext";
import React, { useEffect, useRef, useState } from "react";

export default function SelectRoomsModal({ roomData }) {
  const [showFade, setShowFade] = useState(false);
  const modalRef = useRef();
  const {
    showSelectRoomsModal,
    setShowSelectRoomsModal,
    handleHttpGetCheckoutData,
  } = useSingleResortCheckoutDataContext();

  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [roomCheckoutData, setRoomCheckoutData] = useState([]);

  useEffect(() => {
    let timeoutId = null;

    // show modal
    if (showSelectRoomsModal == roomData.slug) {
      setShowFade(true);
      modalRef.current.style.display = "block";
      timeoutId = setTimeout(() => {
        modalRef.current.classList.add("show");
      }, 100);

      setNumberOfRooms(1);
      // hide modal
    } else {
      modalRef.current.classList.remove("show");
      timeoutId = setTimeout(() => {
        modalRef.current.style.display = "none";
        setShowFade(false);
      }, 200);
    }
    return () => clearTimeout(timeoutId);
  }, [showSelectRoomsModal]);

  useEffect(() => {
    setRoomCheckoutData([]);

    const numberOfRoomsArray = Array.from(
      { length: numberOfRooms },
      (_, index) => index + 1
    );

    const defaultRoomType =
      roomData.room_type == "B" ? "A" : roomData.room_type == "A" ? "A" : "N";

    setRoomCheckoutData(
      numberOfRoomsArray.map(
        (number) => ({
          id: number,
          roomType: defaultRoomType,
          adult: 1,
          child: 0,
        }),
        []
      )
    );
  }, [numberOfRooms]);

  const changeRoomCheckoutData = (id, field, value) => {
    const newRoomCheckoutData = [...roomCheckoutData];

    newRoomCheckoutData[
      roomCheckoutData.findIndex((roomCheckout) => roomCheckout.id == id)
    ][field] = value;

    setRoomCheckoutData(newRoomCheckoutData);
  };

  const handelCloseModal = () => {
    setNumberOfRooms(0);
    setShowSelectRoomsModal(""); // this will hide the modal
  };
  const handelConfirmRoom = () => {
    if (roomCheckoutData.length)
      handleHttpGetCheckoutData(roomData, roomCheckoutData);
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
        <div className="modal-dialog select_room_modal_dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="room_select_popup_title">
                Filtering to Get More Result...
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={handelCloseModal}
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
                      className="form-control select_room_popup_field"
                      value={numberOfRooms}
                      onChange={(e) =>
                        setNumberOfRooms(parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5, 6].map((roomNumberCount) => (
                        <option key={roomNumberCount} value={roomNumberCount}>
                          {roomNumberCount}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {roomCheckoutData.map((data) => (
                  <RoomCheckoutItem
                    key={data.id}
                    {...{ data, roomData, changeRoomCheckoutData }}
                  />
                ))}

                <div className="col-lg-12">
                  <div className="room_cancel_add_wrapper d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-sm btn-danger cencel_btn"
                      onClick={handelCloseModal}
                    >
                      Cencel
                    </button>
                    <button
                      className="btn btn-sm btn-success add_btn"
                      onClick={handelConfirmRoom}
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

function RoomCheckoutItem({ data, roomData, changeRoomCheckoutData }) {
  return (
    <div key={data.id} className="popup_select_room_guest_type_wrapper_main">
      <h2>#Room-{data.id}</h2>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="form-group floating-group">
            <label className="popup_floating-label">Room Type</label>
            <select
              className="form-control select_room_popup_field"
              value={data.roomType}
              onChange={(e) =>
                changeRoomCheckoutData(data.id, "roomType", e.target.value)
              }
            >
              {roomData.room_type == "B" ? (
                <>
                  <option value="A">AC</option>
                  <option value="N">Non AC</option>
                </>
              ) : roomData.room_type == "A" ? (
                <option value="A">AC</option>
              ) : (
                <option value="N">Non AC</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="form-group floating-group">
            <label className="popup_floating-label">Adult</label>
            <select
              value={data.adult}
              onChange={(e) =>
                changeRoomCheckoutData(
                  data.id,
                  "adult",
                  parseInt(e.target.value)
                )
              }
              className="form-control select_room_popup_field"
            >
              {Array.from(
                {
                  length:
                    parseInt(roomData.adult) + parseInt(roomData.extra_adult),
                },
                (_, index) => index + 1
              ).map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="form-group floating-group">
            <label className="popup_floating-label">Child</label>
            <select
              value={data.child}
              onChange={(e) =>
                changeRoomCheckoutData(
                  data.id,
                  "child",
                  parseInt(e.target.value)
                )
              }
              className="form-control select_room_popup_field"
            >
              <option value={0}>0</option>
              {Array.from(
                {
                  length:
                    parseInt(roomData.child) + parseInt(roomData.extra_child),
                },
                (_, index) => index + 1
              ).map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
