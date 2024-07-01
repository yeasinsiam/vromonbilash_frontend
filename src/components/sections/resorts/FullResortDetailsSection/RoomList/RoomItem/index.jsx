import ThemeImage from "@/components/theme/ThemeImage";
import { useSingleResortCheckoutDataContext } from "@/contexts/resort/details/SingleResortCheckoutDataContext";
import { bdPriceFormat } from "@/utils/helpers";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function RoomItem({ roomCategory, setShowMoreDetailsModal }) {
  const swiperElRef = useRef();

  const { setShowSelectRoomsModal } = useSingleResortCheckoutDataContext();

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

  const resortImageUrls = roomCategory.room_galleries.map(
    (roomGallery) => roomGallery.image,
    []
  );

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

  const averageRating = (
    roomCategory.vromonbilash_rating && roomCategory.category_rating
      ? (roomCategory.vromonbilash_rating + roomCategory.category_rating) / 2
      : 0
  ).toFixed(1);

  return (
    <div className="resort_details_page_room_item_wrapper d-flex">
      <div className="resort_list_top_image">
        <swiper-container class="mySwiper" ref={swiperElRef} init="false">
          {roomCategory.room_galleries.map((roomGallery, index) => (
            <swiper-slide class="swiper-slide" key={roomGallery.image}>
              <div className="card-image img-box">
                <a onClick={(e) => openImage(e, index)}>
                  <ThemeImage src={roomGallery.image} alt="Room Image " />
                </a>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
        {Boolean(roomCategory.discount_percentage) && (
          <div className="discount_price_wrapper">
            <h1>
              <span>{roomCategory.discount_percentage}%</span> Off
            </h1>
          </div>
        )}
      </div>
      <div className="room_right_content_item">
        <div className="rl_rating mb-3">
          {Boolean(averageRating) && (
            <span>
              <FontAwesomeIcon icon={faStar} />
              <small>{averageRating}</small>
            </span>
          )}
        </div>
        <h1 className="room_title">{roomCategory.title}</h1>
        <ul className="room_facelity_list ps-0">
          {roomCategory.facilities.map((facility) => (
            <li className="list-inline-item" key={facility.name}>
              {facility.name}
            </li>
          ))}
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
                <b>৳ </b> {bdPriceFormat(roomCategory.regular_price)}
              </span>{" "}
              <b>৳ </b> {bdPriceFormat(roomCategory.sale_price)}
              <span>/Night</span>
            </h1>
          </div>
          <div className="resort_view_more_btn">
            <button
              className="select_room_btn"
              onClick={() => setShowSelectRoomsModal(roomCategory.slug)}
            >
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
