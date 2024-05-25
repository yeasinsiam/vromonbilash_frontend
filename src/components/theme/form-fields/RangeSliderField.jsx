import { useEffect, useRef, useState } from "react";

export default function RangeSliderField() {
  const sliderRef = useRef(null);
  const [min, setMin] = useState(5000);
  const [max, setMax] = useState(15000);

  useEffect(() => {
    const sliderEl = sliderRef.current;

    const moneyFormat = wNumb({
      decimals: 0,
      thousand: ",",
      prefix: "$",
    });
    noUiSlider.create(sliderEl, {
      start: [5000, 1000000],
      step: 1,
      range: {
        min: [5000],
        max: [15000],
      },
      format: moneyFormat,
      connect: true,
    });

    // Set visual min and max values and also update value hidden form inputs
    const slideOnUpdateHandler = (values, handle) => {
      setMin(values[0]);
      setMax(values[1]);
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
            <span className="slider-range-value1">{min}</span>
          </div>
          <span>to</span>
          <div className="text-right caption">
            <span className="slider-range-value2">{max}</span>
          </div>
        </div>
        {/* <div className="price_apply_btn">
          <button>Apply</button>
        </div> */}
      </div>
    </>
  );
}
