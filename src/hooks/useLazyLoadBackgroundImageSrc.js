import { useEffect, useState } from "react";

export default function useLazyLoadBackgroundImageSrc(
  htmlElement = null,
  src,
  blurDataURL = ""
) {
  const [mainSrc, setMainSrc] = useState(blurDataURL);
  useEffect(() => {
    if (htmlElement) {
      const lazyLoadHandler = function () {
        const rect = htmlElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          //   htmlElement.src = htmlElement.dataset.src;
          setMainSrc(src);
        }
      };

      // Attach event listeners
      window.addEventListener("scroll", lazyLoadHandler);
      window.addEventListener("resize", lazyLoadHandler);

      return () => {
        window.removeEventListener("scroll", lazyLoadHandler);
        window.removeEventListener("resize", lazyLoadHandler);
      };
    }
  }, [htmlElement]);

  return mainSrc;
}
