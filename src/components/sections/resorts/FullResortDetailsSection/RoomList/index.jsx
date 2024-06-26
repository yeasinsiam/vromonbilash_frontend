import React from "react";
import RoomItem from "./RoomItem";

export default function RoomList({
  setShowRoomListAdvanceFilterModal,
  setShowSelectRoomAndGuestModal,
  setShowMoreDetailsModal,
}) {
  return (
    <div className="about_resortd_inner_wrapper">
      <div className="about_resort_details_title d-flex justify-content-between align-items-center">
        <h1 className="select_room_title mt-0">Room Options</h1>
        {/*------------ Room Advance Search Filter Start-------------*/}
        <button
          type="button"
          className="check_availability_btn butn__new"
          onClick={() => setShowRoomListAdvanceFilterModal(true)}
        >
          Room Filter
        </button>
        {/*------------ Room Advance Search Filter End-------------*/}
      </div>
      {/* Room Item  */}
      <RoomItem
        {...{ setShowSelectRoomAndGuestModal, setShowMoreDetailsModal }}
      />
      <RoomItem
        {...{ setShowSelectRoomAndGuestModal, setShowMoreDetailsModal }}
      />
      <RoomItem
        {...{ setShowSelectRoomAndGuestModal, setShowMoreDetailsModal }}
      />
      <RoomItem
        {...{ setShowSelectRoomAndGuestModal, setShowMoreDetailsModal }}
      />
      <RoomItem
        {...{ setShowSelectRoomAndGuestModal, setShowMoreDetailsModal }}
      />

      {/* Room Item  */}
    </div>
  );
}
