import CheckboxFields from "@/components/theme/form-fields/CheckboxFields";
import RangeSliderField from "@/components/theme/form-fields/RangeSliderField";
import RatingField from "@/components/theme/form-fields/RatingField";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import { useResortListFiltersContext } from "@/contexts/sections/resorts/ResortListFiltersContext";
import React, { useState } from "react";

export default function SidebarFilters() {
  const {
    vromonbilashRatings,
    resortRatings,
    priceRange,
    roomType,
    setVromonbilashRatings,
    setResortRatings,
    setPriceRange,
    setRoomType,
  } = useResortListFiltersContext();

  return (
    <div className="resort_list_filtering_sidebar_wrapper">
      {/* <div className="filtering_item filtering_form_mb">
        <div className="filter_title">
          <h4>Search By Filter</h4>
        </div>
      </div>
      <div className="filtering_item filtering_form_mb">
        <SingleSelectField
          label="Destination"
          selectText="Select your country"
          zIndex={15}
        />
      </div>
      <div className="filtering_item ">
        <SingleSelectField label="Popular Type" selectText="Select your type" />
      </div> */}

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

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Vromonbilash Ratings</h4>
        </div>
        <RatingField
          activeRatings={vromonbilashRatings}
          setActiveRatings={setVromonbilashRatings}
        />
      </div>

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Resort Ratings</h4>
        </div>
        <RatingField
          activeRatings={resortRatings}
          setActiveRatings={setResortRatings}
        />
      </div>

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
            setRoomType((oldValue) => (oldValue == value ? "" : value))
          }
        />
      </div>
      {/* <div className="filtering_item">
        <div className="filter_title">
          <h4>Amenities</h4>
        </div>
        <CheckboxFields
          view="list"
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

      {/* <div className="filtering_item">
        <div className="filter_title">
          <h4>Populer Type</h4>
        </div>
        <div className="filter_style_2">
          <ul className="ps-0">
            <li>
              <input className="filter-input" id="pt1" type="checkbox" />
              <label className="filter-button" htmlFor="pt1">
                Free Breakfast Included
              </label>
            </li>
            <li>
              <input className="filter-input" id="pt2" type="checkbox" />
              <label className="filter-button" htmlFor="pt2">
                Free Breakfast Included
              </label>
            </li>
            <li>
              <input className="filter-input" id="pt3" type="checkbox" />
              <label className="filter-button" htmlFor="pt3">
                Free Breakfast Included
              </label>
            </li>
            <li>
              <input className="filter-input" id="pt4" type="checkbox" />
              <label className="filter-button" htmlFor="pt4">
                Free Breakfast Included
              </label>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
