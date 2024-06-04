import ThemeImage from "@/components/theme/ThemeImage";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import {
  faBullseye,
  faCreditCard,
  faLock,
  faPersonBiking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function MoreDetailsModal({
  showMoreDetailsModal,
  setShowMoreDetailsModal,
}) {
  const [showFade, setShowFade] = useState(false);
  const modalRef = useRef();
  const swiperElRef = useRef();

  useEffect(() => {
    let timeoutId = null;

    // show modal
    if (showMoreDetailsModal) {
      setShowFade(true);
      modalRef.current.style.display = "block";
      timeoutId = setTimeout(() => {
        modalRef.current.classList.add("show");
      }, 100);
      // hide modal
    } else {
      modalRef.current.classList.remove("show");
      timeoutId = setTimeout(() => {
        modalRef.current.style.display = "none";
        setShowFade(false);
      }, 200);
    }
    return () => clearTimeout(timeoutId);
  }, [showMoreDetailsModal]);

  //   Init Swiper
  useEffect(() => {
    if (swiperElRef.current) {
      const swiperEl = swiperElRef.current;

      Object.assign(swiperEl, {
        rewind: true,
        spaceBetween: 16,
        effect: "fade",
        pagination: {
          clickable: true,
          dynamicBullets: true,
        },
        navigation: true,
        injectStyles: [
          `
            .swiper-button-prev svg,
            .swiper-button-next svg{
               width: 20px;
                height: 15px;
                background: #000;
                padding: 5px;
                border-radius: 4px;
                color: #ffff;
            }

            .swiper-pagination-bullet-active {
                background: #000;
            }
      
      `,
        ],
      });
      swiperEl.initialize();
    }
  }, [swiperElRef]);

  return (
    <>
      <div
        ref={modalRef}
        className={`modal vb_custom_modal fade `}
        tabIndex={-1}
        style={{ display: "none" }}
        role="dialog"
      >
        <div className="modal-dialog room_modal_dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="room_select_popup_title">Room Details</h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowMoreDetailsModal(false)}
              />
            </div>

            <div className="modal_body room_popup_slider_content_wrapper">
              <div className="resort_swiper room_img_slider_big swiper">
                <swiper-container
                  ref={swiperElRef}
                  class="mySwiper"
                  init="false"
                >
                  <swiper-slide class="swiper-slide">
                    <div className="card-image">
                      <ThemeImage
                        src="/static/media/resort_img/r1.jpg"
                        alt="Room Image "
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div className="card-image">
                      <ThemeImage
                        src="/static/media/resort_img/r2.jpg"
                        alt="Room Image "
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div className="card-image">
                      <ThemeImage
                        src="/static/media/resort_img/r3.jpg"
                        alt="Room Image "
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div className="card-image">
                      <ThemeImage
                        src="/static/media/resort_img/r5.jpg"
                        alt="Room Image "
                      />
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide">
                    <div className="card-image">
                      <ThemeImage
                        src="/static/media/resort_img/r4.jpg"
                        alt="Room Image "
                      />
                    </div>
                  </swiper-slide>
                </swiper-container>
              </div>
              <h1>Luxury Room with Balcony</h1>
              <p>
                Club rooms are well furnished with air conditioner, 32 inch LCD
                television and a mini bar. They have attached bathroom with
                showerhead and hair dryer and 24 hours supply of hot and cold
                running water. Complimentary wireless internet access is
                available. Additional amenities include bottled water, a safe
                and a desk.
              </p>

              <div className="about_resortd_inner_wrapper room_popup_title_wrapper">
                <div className="about_resort_details_title">
                  <h1>Amenities</h1>
                </div>
                <div className="about_resort_description_wrapper">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="resort_details_sub_title">
                        <h1>
                          <span>
                            <FontAwesomeIcon icon={faPersonBiking} />
                          </span>{" "}
                          Activities
                        </h1>
                        <ul className="ps-0">
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Activities
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Swimming pool
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Spa
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Kids play area
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Gym
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="resort_details_sub_title">
                        <h1>
                          <span>
                            <FontAwesomeIcon icon={faCreditCard} />
                          </span>{" "}
                          Payment Method
                        </h1>
                        <ul className="ps-0">
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Credit card (Visa, Master card)
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Cash
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Debit Card
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className=" col-md-6 col-lg-6">
                      <div className="resort_details_sub_title">
                        <h1>
                          <span>
                            <FontAwesomeIcon icon={faServicestack} />
                          </span>{" "}
                          Services
                        </h1>
                        <ul className="ps-0">
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Dry cleaning
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Room Service
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Special service
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Waiting Area
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Secrete smoking area
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Concierge
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Laundry facilities
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Ironing Service
                          </li>
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Lift
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="resort_details_sub_title">
                        <h1>
                          <span>
                            <FontAwesomeIcon icon={faLock} />
                          </span>{" "}
                          Safety & Security
                        </h1>
                        <ul className="ps-0">
                          <li>
                            <span>
                              <FontAwesomeIcon icon={faBullseye} />
                            </span>{" "}
                            Doctor on Call
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFade && (
        <>
          <div className={`modal-backdrop fade show`}></div>
          <div className={`modal-backdrop fade show`}></div>
        </>
      )}
    </>
  );
}
