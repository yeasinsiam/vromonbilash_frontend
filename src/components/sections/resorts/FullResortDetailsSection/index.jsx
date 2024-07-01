import ThemeImage from "@/components/theme/ThemeImage";
import {
  faBullseye,
  faHeart,
  faLocationDot,
  faStar,
  faStarHalf,
  faStarHalfStroke,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useRef, useState } from "react";
import RoomList from "./RoomList";
import AdvanceRoomListFilterModal from "./RoomList/AdvanceFilterModal";
import RatingField from "@/components/theme/form-fields/RatingField";
import Image from "next/image";
import SelectRoomAndGuestModal from "./RoomList/RoomItem/SelectRoomsModal";
import MoreDetailsModal from "./RoomList/RoomItem/MoreDetailsModal";
import Link from "next/link";
import SingleResortDataContextProvider, {
  useSingleResortDataContext,
} from "@/contexts/resort/details/SingleResortDataContext";
import dynamic from "next/dynamic";
import {
  bdPriceFormat,
  formatPrice,
  setConditionalClassName,
} from "@/utils/helpers";
import moment from "moment";
import SingleResortCheckoutDataContextProvider, {
  useSingleResortCheckoutDataContext,
} from "@/contexts/resort/details/SingleResortCheckoutDataContext";

function FullResortDetailsSectionComponent() {
  const swiperElRef = useRef();
  const [showRoomListAdvanceFilterModal, setShowRoomListAdvanceFilterModal] =
    useState(false);
  // const [showSelectRoomAndGuestModal, setShowSelectRoomAndGuestModal] =
  //   useState(false);
  const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);

  // resort data
  const { resortData, checkInDate, checkOutDate } =
    useSingleResortDataContext();

  const resortImageUrls = resortData.galleries.map(
    (gallery) => gallery.image,
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

  //   Init Swiper
  useEffect(() => {
    if (swiperElRef.current) {
      const swiperEl = swiperElRef.current;

      Object.assign(swiperEl, {
        rewind: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 5,
          stretch: 0,
          depth: 70,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        spaceBetween: 10,

        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
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
      });
      swiperEl.initialize();
    }
  }, [swiperElRef]);

  const { handleProcessToCheckout } = useSingleResortCheckoutDataContext();

  const facilities = useMemo(() => {
    const facilitiesData = resortData.facilities;
    const halfLength = Math.ceil(facilitiesData.length / 2);
    const firstHalf = facilitiesData.slice(0, halfLength);
    const secondHalf = facilitiesData.slice(halfLength);
    return [firstHalf, secondHalf];
  }, [resortData]);

  const resortDataVromonbilashRating = parseFloat(
    resortData.vromonbilash_rating || 0
  ).toFixed(1);
  const resortDataResortRating = parseFloat(
    resortData.resort_rating || 0
  ).toFixed(1);

  const resortDataVromonbilashRatingPercentage =
    (resortDataVromonbilashRating / 5) * 100;
  const resortDataResortRatingPercentage = (resortDataResortRating / 5) * 100;

  const averageRating = (
    (resortData.vromonbilash_rating + resortData.resort_rating) /
    2
  ).toFixed(1);

  return (
    <>
      <AdvanceRoomListFilterModal
        {...{
          showRoomListAdvanceFilterModal,
          setShowRoomListAdvanceFilterModal,
        }}
      />
      {resortData.room_categories.map((roomCategory) => (
        <SelectRoomAndGuestModal
          key={roomCategory.slug}
          roomData={roomCategory}
        />
      ))}
      <MoreDetailsModal
        {...{
          showMoreDetailsModal,
          setShowMoreDetailsModal,
        }}
      />
      <section className="resort_details_section">
        <div className="container">
          {/* --------- Resort Name with Lightbox Gallery Row Start ----------- */}
          <div className="row">
            <div className="col-gl">
              <div className="resort_details_heading_wrapper mb-3 mt-4">
                <div className="left_title_wrapper">
                  <h1>{resortData.title}</h1>
                  <span>
                    <em>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </em>{" "}
                    {resortData.address}
                  </span>
                </div>
              </div>
              <div className="photos-grid-container gallery">
                <div className="main-photo img-box">
                  <a onClick={(e) => openImage(e, 0)}>
                    <ThemeImage
                      src={resortData.galleries[0].image}
                      alt="resort image"
                    />
                  </a>
                </div>
                <div>
                  <div className="sub">
                    {resortData.galleries.slice(1, 5).map((gallery, index) => (
                      <div className={`img-box`} key={gallery.image}>
                        <a onClick={(e) => openImage(e, index + 1)}>
                          <ThemeImage src={gallery.image} alt="resort image" />
                          {resortData.galleries.length > 5 && index == 3 && (
                            <div className="transparent-box">
                              <div className="caption">
                                +{resortData.galleries.length - 5}
                              </div>
                            </div>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div
                id="more-img"
                className="extra-images-container hide-element"
              >
                <a
                  href="/static/media/resort_img/r11.jpg"
                  className="glightbox"
                  data-glightbox="type: image"
                >
                  <ThemeImage
                    src={"/static/media/resort_img/r7.jpg"}
                    alt="resort image"
                  />
                </a>
                <a
                  href="/static/media/resort_img/r2.jpg"
                  className="glightbox"
                  data-glightbox="type: image"
                >
                  <ThemeImage
                    src={"/static/media/resort_img/r7.jpg"}
                    alt="resort image"
                  />
                </a>
                <a
                  href="/static/media/resort_img/r1.jpg"
                  className="glightbox"
                  data-glightbox="type: image"
                >
                  <ThemeImage
                    src={"/static/media/resort_img/r7.jpg"}
                    alt="resort image"
                  />
                </a>
              </div> */}
              </div>
            </div>
          </div>
          {/* --------- Resort Name with Lightbox Gallery Row End ----------- */}
          {/* ---------- Date Carousel Row Start ---------- */}
          <div className="row">
            <div className="col-lg">
              <div className="date_carousel py-4">
                <div className="row">
                  <div className="col-lg">
                    <swiper-container
                      ref={swiperElRef}
                      class="myDateSwiperSlider"
                      init="false"
                    >
                      {resortData.price_calender.map((singlePriceCalender) => (
                        <swiper-slide
                          class="date_swiper_slide"
                          key={singlePriceCalender[0]}
                        >
                          <div className="date_item_wraapper">
                            <div className="date_item_header">
                              <time dateTime>
                                {moment(singlePriceCalender[0]).format(
                                  "D MMMM, YYYY"
                                )}
                              </time>
                            </div>
                            <div className="date_item_body">
                              <span>From</span>
                              <h1>
                                <b>৳</b> {bdPriceFormat(singlePriceCalender[1])}
                              </h1>
                            </div>
                          </div>
                        </swiper-slide>
                      ))}
                    </swiper-container>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------- Date Carousel Row End ---------- */}
          {/* ----------- Resort Details Content Row Start ---------- */}
          <div className="row mt-4">
            <div className="col-lg-8">
              <div className="about_resort_details_wrapper">
                {/* ----------Select Room Option Start----------- */}
                <RoomList
                  {...{
                    resortData,
                    setShowRoomListAdvanceFilterModal,
                    setShowMoreDetailsModal,
                  }}
                />
                {/* ----------Select Room Option End----------- */}
                {/* ---------About Resort Hotel Start---------- */}
                <div className="about_resortd_inner_wrapper">
                  <div className="about_resort_details_title">
                    <h1>About This Hotel</h1>
                  </div>
                  <div className="about_resort_description_wrapper">
                    <div className="abd_block">
                      <div className="abd_content">
                        <div
                          className="js-excerpt excerpt-hidden"
                          style={{ height: "auto" }}
                        >
                          <p>{resortData.description}</p>
                        </div>
                      </div>
                      {/* <a role="button" href="#" className="js-show-more">
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>

                {/* ----------Resort Amenities Start----------- */}
                <div className="about_resortd_inner_wrapper ">
                  <div className="about_resort_details_title">
                    <h1>Facilities</h1>
                  </div>
                  <div className="about_resort_description_wrapper">
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <div className="resort_details_sub_title">
                          <ul className="ps-0">
                            {facilities[0].map((facility) => (
                              <li key={facility.name}>
                                <span>
                                  <FontAwesomeIcon icon={faBullseye} />
                                </span>
                                {facility.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="resort_details_sub_title">
                          <ul className="ps-0">
                            {facilities[1].map((facility) => (
                              <li key={facility.name}>
                                <span>
                                  <FontAwesomeIcon icon={faBullseye} />
                                </span>
                                {facility.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ----------Resort Amenities End----------- */}

                <div className="section_line">
                  <div
                    style={{
                      background:
                        "linear-gradient(to right, #ffffff, #092eff7a, #ffffff)",
                      height: "1px",
                      margin: "40px 0 1px 0px",
                    }}
                  ></div>
                </div>
                {/* -------- Section Devider --------- */}
                {/* ----------Customer Revire Option and Chart Start----------- */}
                <div className="about_resortd_inner_wrapper mb-0">
                  <div className="about_resort_details_title">
                    <h1 className="select_room_title">Customer Review</h1>
                  </div>
                  {/* --------- Review Rating Bar Start --------- */}
                  <div className="review_rating_bar_wrapper">
                    <div className="customer_rating_progress_bar">
                      <div className="row align-items-center">
                        <div className="col-xs-12 col-md-6 col-lg-7">
                          <div className="customer_review_left_bar_wrapper">
                            <div className="cr_right_bar_percentage">
                              <ul className="mb-0">
                                <li>
                                  <h5>
                                    VromonBilash Rating
                                    <span className="ms-1">
                                      {resortDataVromonbilashRating}{" "}
                                      <FontAwesomeIcon icon={faStar} />
                                    </span>
                                  </h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar progress-bar-striped progress-bar-animated"
                                      role="progressbar"
                                      style={{
                                        width: `${resortDataVromonbilashRatingPercentage}%`,
                                      }}
                                    >
                                      {resortDataVromonbilashRatingPercentage}%
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <h5>
                                    Resort Rating
                                    <span className="ms-1">
                                      {resortDataResortRating}{" "}
                                      <FontAwesomeIcon icon={faStar} />
                                    </span>
                                  </h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                      role="progressbar"
                                      style={{
                                        width: `${resortDataResortRatingPercentage}%`,
                                      }}
                                    >
                                      {resortDataResortRatingPercentage}%
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-5 text-center">
                          <h1 className="custumer_rating-num">
                            {averageRating}
                          </h1>
                          <div className="c_star_rating">
                            <ul className="ps-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <FontAwesomeIcon icon={faStar} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <FontAwesomeIcon icon={faStar} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <FontAwesomeIcon icon={faStar} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <FontAwesomeIcon icon={faStar} />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="fab fa fa-star-half" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <svg
                                    className="svg-inline--fa fa-star-half-empty"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="star-half-empty"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    data-fa-i2svg=""
                                  >
                                    <g className="missing">
                                      <path
                                        fill="currentColor"
                                        d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                                      />
                                      <circle
                                        fill="currentColor"
                                        cx={256}
                                        cy={364}
                                        r={28}
                                      >
                                        <animate
                                          attributeType="XML"
                                          repeatCount="indefinite"
                                          dur="2s"
                                          attributeName="r"
                                          values="28;14;28;28;14;28;"
                                        />
                                        <animate
                                          attributeType="XML"
                                          repeatCount="indefinite"
                                          dur="2s"
                                          attributeName="opacity"
                                          values="1;0;1;1;0;1;"
                                        />
                                      </circle>
                                      <path
                                        fill="currentColor"
                                        opacity={1}
                                        d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                                      >
                                        <animate
                                          attributeType="XML"
                                          repeatCount="indefinite"
                                          dur="2s"
                                          attributeName="opacity"
                                          values="1;0;0;0;0;1;"
                                        />
                                      </path>
                                      <path
                                        fill="currentColor"
                                        opacity={0}
                                        d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                                      >
                                        <animate
                                          attributeType="XML"
                                          repeatCount="indefinite"
                                          dur="2s"
                                          attributeName="opacity"
                                          values="0;0;1;1;0;0;"
                                        />
                                      </path>
                                    </g>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <span>
                              <FontAwesomeIcon icon={faUser} />
                            </span>
                            Based on {resortData.total_reviews} Review
                            {resortData.total_reviews > 1 && "s"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------- Review Rating Bar Start --------- */}
                  {/* -------- Select With Star Option Start ---------- */}
                  {/* <div className="filtering_item mt-4 mb-0">
                    <div className="filter_title">
                      <h4>Customer Rating</h4>
                    </div>
                    <form action="">
                      <div className="rating_stars mt-2">
                        <ul className="rating_list ps-0">
                          <li className="list-inline-item">
                            <FontAwesomeIcon icon={faStar} />
                            <span>1</span>
                          </li>
                          <li className="list-inline-item">
                            <FontAwesomeIcon icon={faStar} />
                            <span>2</span>
                          </li>
                          <li className="list-inline-item">
                            <FontAwesomeIcon icon={faStar} />
                            <span>3</span>
                          </li>
                          <li className="list-inline-item">
                            <FontAwesomeIcon icon={faStar} />
                            <span>4</span>
                          </li>
                          <li className="list-inline-item">
                            <FontAwesomeIcon icon={faStar} />
                            <span>5</span>
                          </li>
                        </ul>
                      </div>
                      <textarea
                        className="review_message_field w-100"
                        name=""
                        id=""
                        cols={2}
                        rows={5}
                        placeholder="Your Review Message"
                        defaultValue={""}
                      />
                      <button className="cta">
                        Post Review{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </button>
                    </form>
                  </div> */}
                  {/* -------- Select With Star Option Start ---------- */}
                </div>

                {/* ----------Customer Revire Option and Chart End----------- */}
                {/* ------------ Customer Comment Section Html Code Start ------------ */}
                <div className="comments-container">
                  <ul id="comments-list" className="comments-list ps-0">
                    {resortData.reviews.map((review, index) => (
                      <li key={index}>
                        <div className="comment-main-level">
                          {/* Avatar */}
                          <div className="comment-avatar">
                            <Image
                              src="/static/media/mrahat.jpg"
                              alt="mr.rahat"
                              fill
                            />
                          </div>
                          {/* Contenedor del Comentario */}
                          <div className="comment-box">
                            <div className="comment-head">
                              <h6 className="comment-name  mb-0">
                                <a href="#">Mohammad Rahat</a>
                              </h6>
                              <span>{review.created_at} Ago</span>
                              {/* <div className="comment_reply_btn">
                                <a href="#">
                                  <i className="fa fa-reply" />
                                </a>
                                <a href="#">
                                  <FontAwesomeIcon icon={faHeart} />
                                </a>
                              </div> */}
                            </div>
                            <div className="comment-content">
                              {review.comment}
                            </div>
                          </div>
                        </div>
                        {/* Respuestas de los comentarios */}
                        {Boolean(review.reply) && (
                          <ul className="comments-list reply-list">
                            <li>
                              {/* Avatar */}
                              <div className="comment-avatar">
                                <Image
                                  src="/static/media/mrahat.jpg"
                                  alt="mr.rahat"
                                  fill
                                />
                              </div>
                              {/* Contenedor del Comentario */}
                              <div className="comment-box">
                                <div className="comment-head">
                                  <h6 className="comment-name">
                                    <a href="http://creaticode.com/blog">
                                      Faisal Alam
                                    </a>
                                  </h6>
                                  {/* <span>10 Minutes Ago</span> */}
                                  {/* <div className="comment_reply_btn">
                                    <a href="#">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <FontAwesomeIcon icon={faHeart} />
                                    </a>
                                  </div> */}
                                </div>
                                <div className="comment-content">
                                  {review.reply}
                                </div>
                              </div>
                            </li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* <button
                    className="check_availability_btn w-100 mt-5"
                    type="button"
                  >
                    Load 42 more comments
                  </button> */}
                </div>
                {/* ------------ Customer Comment Section Html Code End ------------ */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="resort_details_right_price_body">
                {/* -------- Bottom Price Card-------- */}
                <div className="booking-carts mt-4">
                  <div className="carts-header">
                    <div className="check-in">
                      <span>Check In</span>
                      <br />
                      <strong>{checkInDate.format("DD-MMMM, YYYY")}</strong>
                      <input
                        type="hidden"
                        name="check_in"
                        defaultValue="2024-05-19"
                      />
                    </div>
                    <div className="date-diff">
                      <h2>{checkOutDate.diff(checkInDate, "days")}</h2>
                      <span>Nights</span>
                    </div>
                    <div className="check-out">
                      <span>Check Out</span>
                      <br />
                      <strong>{checkOutDate.format("DD-MMMM, YYYY")}</strong>
                      <input
                        type="hidden"
                        name="check_out"
                        defaultValue="2024-05-20"
                      />
                    </div>
                  </div>
                  <div className="carts-body">
                    <div
                      className="cart-item"
                      id="cartRoomCategory242"
                      data-cart-room-category={242}
                    >
                      <input
                        type="hidden"
                        name="room_categories[]"
                        className="category"
                        defaultValue={242}
                      />
                      <span className="delete-room-item">
                        <svg
                          className="svg-inline--fa fa-trash fa-w-14"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fa"
                          data-icon="trash"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg
                        >
                          <path
                            fill="currentColor"
                            d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                          ></path>
                        </svg>
                        {/* <i class="fa fa-trash"></i> Font Awesome fontawesome.com */}
                      </span>
                      <h5 className="item-category-title">
                        Double Bed Room (Sea View)
                      </h5>
                      <ul className="ps-0">
                        <li>
                          Rooms: <span className="item-total-room">1</span>
                        </li>
                        <li>
                          Adults: <span className="item-total-adult">4</span>
                        </li>
                        <li>
                          Child: <span className="item-total-child">0</span>
                        </li>
                      </ul>
                      <div className="cart-item-price">
                        <ul className="ps-0 mb-0">
                          <li>Total Price:</li>
                          <li>
                            <del className="text-muted original-price" />
                            <span className="total-price">5000</span>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-item-inputs d-none">
                        <div className="category-room-item">
                          <div className="room-name">
                            <span className="room_no">#Room-1</span>
                            <input
                              type="hidden"
                              name="rooms[]"
                              className="categories-room-no"
                              defaultValue={722}
                            />
                          </div>
                          <div className="room-type">
                            <span>Type</span>
                            <br />
                            <select
                              name="room_types[]"
                              className="categories-room-type"
                            >
                              <option value="non-ac">Non-AC</option>
                            </select>
                          </div>
                          <div className="room-adult">
                            <span data-capacity>Adult</span>
                            <br />
                            <select
                              name="room_adults[]"
                              className="categories-room-adult"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4} selected>
                                4
                              </option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                            </select>
                          </div>
                          <div className="room-child">
                            <span>Child</span>
                            <br />
                            <select
                              name="room_child[]"
                              className="categories-room-child"
                            >
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carts-footer">
                    <div className="payment-items">
                      <div className="payment-item sub-total">
                        <ul className="mb-0 ps-0">
                          <li className="title">Sub Total</li>
                          <li className="input-field">
                            <input
                              type="text"
                              name="sub_total"
                              id="subTotalAmount"
                              defaultValue={0.0}
                              disabled
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="payment-item discount">
                        <ul className="mb-0 ps-0">
                          <li className="title">Total Payable</li>
                          <li className="input-field">
                            <input
                              type="text"
                              name="total"
                              id="totalAmount"
                              defaultValue={0.0}
                              disabled
                            />
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="check_availability_btn w-100"
                        onClick={handleProcessToCheckout}
                      >
                        Process to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------- Resort Details Content Row End ---------- */}
        </div>
      </section>
    </>
  );
}

function FullResortDetailsSectionLoading() {
  return (
    <section className="resort_details_section">
      <div className="container">
        <h1>Loading...</h1>
      </div>
    </section>
  );
}

function FullResortDetailsSection() {
  return (
    <SingleResortDataContextProvider {...{ FullResortDetailsSectionLoading }}>
      <SingleResortCheckoutDataContextProvider>
        <FullResortDetailsSectionComponent />
      </SingleResortCheckoutDataContextProvider>
    </SingleResortDataContextProvider>
  );
}

export default dynamic(
  () => {
    return Promise.resolve(FullResortDetailsSection);
  },
  {
    ssr: false,
    loading: () => {
      return <FullResortDetailsSectionLoading />;
    },
  }
);
