import React from "react";
import RoomItem from "./RoomItem";

export default function RoomList({
  resortData,
  setShowRoomListAdvanceFilterModal,
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
      {resortData.room_categories.map((roomCategory) => (
        <RoomItem
          key={roomCategory.slug}
          {...{
            roomCategory,
            setShowMoreDetailsModal,
          }}
        />
      ))}

      {/* Room Item  */}
      <button className="check_availability_btn w-100 mt-5" type="button">
        Load more rooms
      </button>
    </div>
  );
}
