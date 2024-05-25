import { makeId } from "@/utils/helpers";
import React from "react";

export default function CheckboxFields({
  id = makeId(5),
  view = "grid",
  items = [],
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
              id={`checkbox-field-${id}-${item.value}`}
              type="checkbox"
              //   defaultValue="checkbox"
              className="checkbox_animation"
              name="checkbox"
            />
            <label htmlFor={`checkbox-field-${id}-${item.value}`}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
