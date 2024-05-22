import Image from "next/image";
import { useEffect, useRef } from "react";
import ThemeImage from "../theme/ThemeImage";

import f1Jpg from "@/assets/static/media/features_img/f1.jpg";
import f2Jpg from "@/assets/static/media/features_img/f2.jpg";
import f3Jpg from "@/assets/static/media/features_img/f3.jpg";
import f4Jpg from "@/assets/static/media/features_img/f4.jpg";
import f5Jpg from "@/assets/static/media/features_img/f5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function HomeFeaturesSection() {
  const swiperElRef = useRef();

  // init swiper
  useEffect(() => {
    if (swiperElRef.current) {
      const swiperEl = swiperElRef.current;

      // const handleAfterInit = () => {
      //   setImagesLoaded(true);
      // };

      Object.assign(swiperEl, {
        effect: "coverflow",
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
        mousewheel: {
          thresholdDelta: 70,
        },

        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        },
        injectStyles: [
          `
       .swiper {
          overflow-x: hidden;
          overflow-y: auto;
          padding-bottom: 20px;
       }
      `,
        ],
        // on: {
        //   afterInit: handleAfterInit,
        // },
      });
      swiperEl.initialize();

      // return () => {
      //   swiperEl.swiper.off("afterInit", handleAfterInit);
      // };
    }
  }, [swiperElRef]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="features_section_main">
              <div className="features_content_left">
                <div className="dqfh_right_contents">
                  <h4>VromonBilash Features</h4>
                  <h1>Discover the best lovely place with VromonBilash</h1>
                  <p>
                    Discover enchanting destinations with our curated tours.
                    Experience breathtaking landscapes, rich cultures, and
                    unforgettable adventures. Your dream journey awaits with
                    seamless planning and personalized itineraries. Let explore
                    the world together!
                  </p>
                </div>
              </div>
              <div className="swiper-container_wrapper">
                <swiper-container
                  ref={swiperElRef}
                  init="false"
                  class="swiper-wrapper"
                >
                  <swiper-slide class="features_swiper-slide swiper-slide">
                    <div className="features_swiper-slide-wrapper">
                      <ThemeImage
                        src={f1Jpg}
                        // height="384px"
                        alt="feature images"
                      />

                      <div className="features_price">
                        <span>Start form</span>
                        <h1>
                          ৳ 3500 <span>/Night</span>
                        </h1>
                      </div>
                      <div className="slide-content">
                        <h3>Dreamer Paradise Beach Resort</h3>
                        <span>
                          <em>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="features_swiper-slide swiper-slide">
                    <div className="features_swiper-slide-wrapper">
                      <ThemeImage
                        src={f2Jpg}
                        // height="384px"
                        alt="feature images"
                      />

                      <div className="features_price">
                        <span>Start form</span>
                        <h1>
                          ৳ 3500 <span>/Night</span>
                        </h1>
                      </div>
                      <div className="slide-content">
                        <h3>Dreamer Paradise Beach Resort</h3>
                        <span>
                          <em>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="features_swiper-slide swiper-slide">
                    <div className="features_swiper-slide-wrapper">
                      <ThemeImage
                        src={f3Jpg}
                        // height="384px"
                        alt="feature images"
                      />

                      <div className="features_price">
                        <span>Start form</span>
                        <h1>
                          ৳ 3500 <span>/Night</span>
                        </h1>
                      </div>
                      <div className="slide-content">
                        <h3>Dreamer Paradise Beach Resort</h3>
                        <span>
                          <em>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="features_swiper-slide swiper-slide">
                    <div className="features_swiper-slide-wrapper">
                      <ThemeImage
                        src={f4Jpg}
                        // height="384px"
                        alt="feature images"
                      />

                      <div className="features_price">
                        <span>Start form</span>
                        <h1>
                          ৳ 3500 <span>/Night</span>
                        </h1>
                      </div>
                      <div className="slide-content">
                        <h3>Dreamer Paradise Beach Resort</h3>
                        <span>
                          <em>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="features_swiper-slide swiper-slide">
                    <div className="features_swiper-slide-wrapper">
                      <ThemeImage
                        src={f5Jpg}
                        // height="384px"
                        alt="feature images"
                      />

                      <div className="features_price">
                        <span>Start form</span>
                        <h1>
                          ৳ 3500 <span>/Night</span>
                        </h1>
                      </div>
                      <div className="slide-content">
                        <h3>Dreamer Paradise Beach Resort</h3>
                        <span>
                          <em>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper-container>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
