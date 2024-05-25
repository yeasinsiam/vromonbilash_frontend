import CheckboxFields from "@/components/theme/form-fields/CheckboxFields";
import RangeSliderField from "@/components/theme/form-fields/RangeSliderField";
import RatingField from "@/components/theme/form-fields/RatingField";
import SingleSelectField from "@/components/theme/form-fields/SingleSelectField";
import React from "react";

export default function SidebarFilters() {
  return (
    <div className="resort_list_filtering_sidebar_wrapper">
      <div className="filtering_item filtering_form_mb">
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
      </div>

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Filter By Price</h4>
        </div>
        <RangeSliderField />
      </div>

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Customer Ratings</h4>
        </div>
        <RatingField />
      </div>

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Hotel Types</h4>
        </div>
        <CheckboxFields
          view="list"
          items={[
            { label: "Hotel", value: 1 },
            { label: "Apartment", value: 2 },
            { label: "Resort", value: 3 },
            { label: "Vilo", value: 4 },
          ]}
        />
      </div>
      <div className="filtering_item">
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
      </div>

      <div className="filtering_item">
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
      </div>
    </div>
  );
}
