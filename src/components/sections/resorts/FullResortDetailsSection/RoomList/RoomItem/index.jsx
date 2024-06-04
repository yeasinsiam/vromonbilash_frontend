import ThemeImage from "@/components/theme/ThemeImage";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function RoomItem({
  setShowSelectRoomAndGuestModal,
  setShowMoreDetailsModal,
}) {
  const swiperElRef = useRef();

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

  const resortImageUrls = [
    "/static/media/resort_img/r1.jpg",
    "/static/media/resort_img/r3.jpg",
    "/static/media/resort_img/r5.jpg",
    "/static/media/resort_img/r4.jpg",
  ];

  const openImage = (event, startAt = 0) => {
    event.preventDefault();

    const myGallery = GLightbox({
      elements: resortImageUrls.map((url) => ({
        href: url,
        type: "image",
        // description: feature.texts[0],
      })),
      autoplayVideos: false,
      zoomable: true,
      startAt,
    });
    myGallery.open();
  };

  return (
    <div className="resort_details_page_room_item_wrapper d-flex">
      <div className="resort_list_top_image">
        <swiper-container class="mySwiper" ref={swiperElRef} init="false">
          <swiper-slide class="swiper-slide">
            <div className="card-image img-box">
              <a onClick={(e) => openImage(e, 0)}>
                <ThemeImage
                  src="/static/media/resort_img/r1.jpg"
                  alt="Room Image "
                />
              </a>
            </div>
          </swiper-slide>

          <swiper-slide class="swiper-slide">
            <div className="card-image img-box">
              <a onClick={(e) => openImage(e, 1)}>
                <ThemeImage
                  src="/static/media/resort_img/r3.jpg"
                  alt="Room Image "
                />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div className="card-image img-box">
              <a onClick={(e) => openImage(e, 2)}>
                <ThemeImage
                  src="/static/media/resort_img/r5.jpg"
                  alt="Room Image "
                />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div className="card-image img-box">
              <a onClick={(e) => openImage(e, 3)}>
                <ThemeImage
                  src="/static/media/resort_img/r4.jpg"
                  alt="Room Image "
                />
              </a>
            </div>
          </swiper-slide>
        </swiper-container>
        <div className="discount_price_wrapper">
          <h1>
            <span>15%</span> Off
          </h1>
        </div>
      </div>
      <div className="room_right_content_item">
        <div className="rl_rating mb-3">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faStar} />
              <small>4.5</small>
            </span>
          </a>
        </div>
        <h1 className="room_title">Luxury Room with Balcony</h1>
        <ul className="room_facelity_list ps-0">
          <li className="list-inline-item">Air Conditioning</li>
          <li className="list-inline-item">Air Conditioning</li>
          <li className="list-inline-item">Wifi</li>
          <li className="list-inline-item">Kitchen</li>
          <li className="list-inline-item">Kitchen</li>
          <li className="list-inline-item">Pool</li>
          <li className="list-inline-item">Pool</li>
        </ul>
        <a
          className="view_more_room_details"
          onClick={() => setShowMoreDetailsModal(true)}
        >
          <span>
            <FontAwesomeIcon icon={faEye} />
          </span>{" "}
          View More Details
        </a>
        <div className="resort_list_price_wrapper d-flex justify-content-between align-items-end">
          <div className="price_left_title">
            <span className="start_form">Start form</span>
            <h1>
              <span className="reguler_price">
                <b>৳ </b>1550
              </span>{" "}
              <b>৳ </b> 1400
              <span>/Night</span>
            </h1>
          </div>
          <div className="resort_view_more_btn">
            <button
              className="select_room_btn"
              onClick={() => setShowSelectRoomAndGuestModal(true)}
            >
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
