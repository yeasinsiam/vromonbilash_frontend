import React, { useEffect, useRef } from "react";

export default function SelectField() {
  const selectElement = useRef(null);
  useEffect(() => {
    // if (selectElement.current) {
    const select = selectElement.current;
  }, []);

  return (
    <select ref={selectElement} className="form_select">
      <option value={1}> San Jacinto, USA</option>
      <option value={2}>Dhaka, Bangladesh</option>
      <option value={3}>Jacinto, USA</option>
      <option value={4}> San Jacinto, USA</option>
    </select>
  );
}
