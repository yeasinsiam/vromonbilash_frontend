import { useEffect, useRef, useState } from "react";

export default function RangeSliderField({
  startRange = 1000,
  endRange = 5000,
  minRange = 1000,
  maxRange = 5000,
  onChange = () => {},
}) {
  const sliderRef = useRef(null);
  const [min, setMin] = useState(startRange);
  const [max, setMax] = useState(endRange);

  useEffect(() => {
    const sliderEl = sliderRef.current;

    const moneyFormat = wNumb({
      decimals: 0,
      // thousand: ",",
      // prefix: "৳",
    });
    noUiSlider.create(sliderEl, {
      start: [min, max],
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
      setMin(values[0]);
      setMax(values[1]);
    };

    const slideOnChangeHandler = ([min, max]) => {
      onChange(min, max);
    };

    sliderEl.noUiSlider.on("update", slideOnUpdateHandler);
    sliderEl.noUiSlider.on("change", slideOnChangeHandler);

    return () => {
      sliderEl.noUiSlider.off("update");
      sliderEl.noUiSlider.off("change");
      sliderEl.noUiSlider.destroy();
    };
  }, []);

  const numberFormat = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div ref={sliderRef} className="slider-range mt-3" />
      <div className="slider-labels d-flex justify-content-between align-items-center mt-3">
        <div className="price_range_count d-flex">
          <span>Price: </span>
          <div className="caption">
            <span className="slider-range-value1">৳{numberFormat(min)}</span>
          </div>
          <span>to</span>
          <div className="text-right caption">
            <span className="slider-range-value2">৳{numberFormat(max)}</span>
          </div>
        </div>
        {/* <div className="price_apply_btn">
          <button>Apply</button>
        </div> */}
      </div>
    </>
  );
}
