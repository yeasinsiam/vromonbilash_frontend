import { useEffect, useRef, useState } from "react";

export default function RangeSliderField({
  startRange,
  endRange,
  minRange,
  maxRange,
  onChange,
}) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderEl = sliderRef.current;

    const moneyFormat = wNumb({
      decimals: 0,
      thousand: ",",
      prefix: "৳",
    });
    noUiSlider.create(sliderEl, {
      start: [startRange, endRange],
      step: 1,
      range: {
        min: [minRange],
        max: [maxRange],
      },
      format: moneyFormat,
      connect: true,
    });

    // Set visual min and max values and also update value hidden form inputs
    const slideOnUpdateHandler = (values, handle) => {
      onChange(values[0], values[1]);
    };
    sliderEl.noUiSlider.on("update", slideOnUpdateHandler);

    return () => {
      sliderEl.noUiSlider.off("update");
      sliderEl.noUiSlider.destroy();
    };
  }, []);

  return (
    <>
      <div ref={sliderRef} className="slider-range mt-3" />
      <div className="slider-labels d-flex justify-content-between align-items-center mt-3">
        <div className="price_range_count d-flex">
          <span>Price: </span>
          <div className="caption">
            <span className="slider-range-value1">{startRange}</span>
          </div>
          <span>to</span>
          <div className="text-right caption">
            <span className="slider-range-value2">{endRange}</span>
          </div>
        </div>
        {/* <div className="price_apply_btn">
          <button>Apply</button>
        </div> */}
      </div>
    </>
  );
}
