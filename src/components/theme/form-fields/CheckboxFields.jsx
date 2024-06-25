// import { makeId } from "@/utils/helpers";
import React from "react";

export default function CheckboxFields({
  // id = makeId(5),
  view = "grid",

  items = [],
  checked = [],
  onChecked = () => {},
}) {
  return (
    <div className="filter_checkbox">
      <ul className="ps-0">
        {items.map((item) => (
          <li
            key={item.value}
            className={`${view == "grid" ? "list-inline-item" : ""}`}
          >
            <input
              id={`checkbox-field-${item.value}`}
              type="checkbox"
              checked={checked.includes(item.value)}
              //   defaultValue="checkbox"
              className="checkbox_animation"
              onChange={() => onChecked(item.value)}
            />
            <label htmlFor={`checkbox-field-${item.value}`}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
