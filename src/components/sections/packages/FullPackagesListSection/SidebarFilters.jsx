import CheckboxFields from "@/components/theme/form-fields/CheckboxFields";
import DateRangeField from "@/components/theme/form-fields/DateRangeField";
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
      <div className="filtering_item ">
        <SingleSelectField
          label="Destination"
          selectText="Select your country"
          zIndex={15}
        />
      </div>
      {/* <div className="filtering_item ">
        <DateRangeField label="Date Form" zIndex={90} />
      </div> */}

      <div className="filtering_item">
        <div className="filter_title">
          <h4>Package Type</h4>
        </div>
        <CheckboxFields
          view="list"
          items={[
            { label: "Group Package", value: 1 },
            { label: "Corporate Package", value: 2 },
            { label: "বয়স্ক প্যাকেজ", value: 3 },
            { label: "Picnic Package", value: 4 },
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
      <div className="filtering_item">
        <div className="filter_title">
          <h4>Ratings</h4>
        </div>
        <RatingField />
      </div>
    </div>
  );
}
