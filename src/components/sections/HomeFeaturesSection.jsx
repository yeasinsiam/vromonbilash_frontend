import f1Jpg from "@/assets/static/media/features_img/f1.jpg";
import { useEffect, useRef } from "react";

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
          460: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1600: {
            slidesPerView: 2,
          },
        },
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
              <div className="swiper-container">
                <div className="features_swiper">
                  <swiper-container
                    ref={swiperElRef}
                    init="false"
                    className="swiper-wrapper"
                  >
                    <swiper-slide>
                      <div
                        className="features_swiper-slide swiper-slide "
                        style={{
                          backgroundImage: "url(/features_img/f1.jpg)",
                        }}
                      >
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
                              <i className="fa-solid fa-location-dot" />
                            </em>{" "}
                            North Beach{" "}
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div
                        className="features_swiper-slide swiper-slide "
                        style={{
                          backgroundImage: "url(/features_img/f1.jpg)",
                        }}
                      >
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
                              <i className="fa-solid fa-location-dot" />
                            </em>{" "}
                            North Beach{" "}
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div
                        className="features_swiper-slide swiper-slide "
                        style={{
                          backgroundImage: "url(/features_img/f1.jpg)",
                        }}
                      >
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
                              <i className="fa-solid fa-location-dot" />
                            </em>{" "}
                            North Beach{" "}
                          </span>
                        </div>
                      </div>
                    </swiper-slide>
                    {/* <swiper-slide
                      className="features_swiper-slide swiper-slide swiper-slide--two"
                      style={{
                        backgroundImage: "url(/features_img/f2.jpg)",
                      }}
                    >
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
                            <i className="fa-solid fa-location-dot" />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      className="features_swiper-slide swiper-slide swiper-slide--three"
                      style={{
                        backgroundImage: "url(/features_img/f3.jpg)",
                      }}
                    >
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
                            <i className="fa-solid fa-location-dot" />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      className="features_swiper-slide swiper-slide swiper-slide--four"
                      style={{
                        backgroundImage: "url(/features_img/f4.jpg)",
                      }}
                    >
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
                            <i className="fa-solid fa-location-dot" />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      className="features_swiper-slide swiper-slide swiper-slide--five"
                      style={{
                        backgroundImage: "url(/features_img/f5.jpg)",
                      }}
                    >
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
                            <i className="fa-solid fa-location-dot" />
                          </em>{" "}
                          North Beach{" "}
                        </span>
                      </div>
                    </swiper-slide> */}
                  </swiper-container>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
