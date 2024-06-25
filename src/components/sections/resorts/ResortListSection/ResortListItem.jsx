import Image from "next/image";
import { useEffect, useRef } from "react";
import resort1jpg from "@/assets/static/media/resort_img/r1.jpg";
import resort2jpg from "@/assets/static/media/resort_img/r2.jpg";
import resort3jpg from "@/assets/static/media/resort_img/r3.jpg";
import resort4jpg from "@/assets/static/media/resort_img/r4.jpg";
import resort5jpg from "@/assets/static/media/resort_img/r5.jpg";
import arrowRightPng from "@/assets/static/media/all_icon/arrow_right.png";
import ecoPng from "@/assets/static/media/eco.png";

import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeImage from "@/components/theme/ThemeImage";
import { setConditionalClassName } from "@/utils/helpers";
import Link from "next/link";

export default function ResortListItem({ resort, view = "grid" }) {
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

  const averageRating =
    resort.vromonbilash_rating && resort.resort_rating
      ? (resort.vromonbilash_rating + resort.resort_rating) / 2
      : 0;

  return (
    <div
      className={`resort_list_item ${setConditionalClassName(
        view == "list",
        "resort_horizontal_card_list d-flex"
      )}`}
    >
      <div className="resort_list_top_image">
        <a>
          <swiper-container ref={swiperElRef} init="false">
            {resort.thumbnails.map((thumbnail) => (
              <swiper-slide className="swiper-slide" key={thumbnail.image}>
                <div className="card-image">
                  <ThemeImage
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + thumbnail.image}
                    alt="Resort "
                  />
                </div>
              </swiper-slide>
            ))}

            {/* <swiper-slide className="swiper-slide">
              <div className="card-image">
                <ThemeImage src={resort2jpg} alt="Resort " />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div className="card-image">
                <ThemeImage src={resort3jpg} alt="Resort " />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div className="card-image">
                <ThemeImage src={resort4jpg} alt="Resort " />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div className="card-image">
                <ThemeImage src={resort5jpg} alt="Resort " />
              </div>
            </swiper-slide> */}
          </swiper-container>
        </a>
        {Boolean(resort.discount_percentage) && (
          <div className="discount_price_wrapper">
            <h1>
              <span>{resort.discount_percentage}%</span> Off
            </h1>
          </div>
        )}
      </div>
      <div className="resort_list_content">
        <div className="resort_list_rating_wrapper d-flex justify-content-between align-items-center">
          <div className="rl_rating">
            {Boolean(averageRating) && (
              <span>
                <i className="fa-solid fa-star" />
                <FontAwesomeIcon icon={faStar} />

                <small>{averageRating}</small>
              </span>
            )}
          </div>
          <div className="eco_cottage_wrapper">
            <Image src={ecoPng} alt="Eco Image" style={{ height: "auto" }} />
          </div>
        </div>
        <h1 className="resort_title">
          <Link
            href={{
              pathname: "/resorts/[slug]",
              query: { slug: resort.slug },
            }}
          >
            {resort.title}
          </Link>
        </h1>
        <h6 className="resort_location">
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>{" "}
          {resort.address}
        </h6>
        <ul className="resort_facelity_list ps-0">
          {resort.facilities.map((facility) => (
            <li className="list-inline-item" key={facility.name}>
              {facility.name}
            </li>
          ))}
        </ul>
        <div className="resort_list_price_wrapper d-flex justify-content-between align-items-end">
          <div className="price_left_title">
            <span className="start_form">Start form</span>
            <h1>
              <span className="reguler_price">
                <b>৳ </b>
                {resort.regular_price}
              </span>{" "}
              <b>৳ </b>
              {resort.sale_price} <span>/Night</span>
            </h1>
          </div>
          <div className="resort_view_more_btn">
            <div
              className="stock_availibility"
              style={{
                ...(parseInt(resort.available_room)
                  ? { color: "#425483", backgroundColor: "rgb(196, 228, 255)" }
                  : {
                      color: "red",
                      backgroundColor: "rgb(240, 243, 255)",
                    }),
              }}
            >
              {resort.available_room} <span>Resort Available</span>
            </div>
            <Link
              href={{
                pathname: "/resorts/[slug]",
                query: { slug: resort.slug },
              }}
            >
              View Details{" "}
              <span>
                <Image
                  src={arrowRightPng}
                  alt="Arrow Right "
                  style={{ height: "auto" }}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResortListItemLoading({ view = "grid" }) {
  return (
    <div
      className={`resort_list_item ${setConditionalClassName(
        view == "list",
        "resort_horizontal_card_list d-flex"
      )}`}
    >
      <div className="resort_list_top_image">
        <div
          className="c-skeleton-square "
          style={{
            maxWidth: "100%",
            height: `270px`,
            borderRadius: "5px",
          }}
        />
        {/* <div className="discount_price_wrapper"></div> */}
      </div>
      <div className="resort_list_content">
        <div className="resort_list_rating_wrapper d-flex justify-content-between align-items-center">
          <div className="rl_rating">
            <div
              className="c-skeleton-square "
              style={{
                width: "60px",
                height: `25px`,
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="eco_cottage_wrapper">
            <div
              className="c-skeleton-square "
              style={{
                width: "45px",
                height: `45px`,
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <h1 className="resort_title">
          <div
            className="c-skeleton-square "
            style={{
              maxWidth: "500px",
              height: `25px`,
              borderRadius: "5px",
            }}
          />
        </h1>
        <h6 className="resort_location">
          <div
            className="c-skeleton-square "
            style={{
              maxWidth: "350px",
              height: `20px`,
              borderRadius: "5px",
            }}
          />
        </h6>
        <div
          className="c-skeleton-square mt-1 mb-1"
          style={{
            maxWidth: "200px",
            height: `20px`,
            borderRadius: "5px",
          }}
        />

        <div
          className="resort_list_price_wrapper d-flex justify-content-between align-items-end gap-3"
          style={{ border: "none" }}
        >
          <div className="price_left_title w-50">
            <span className="start_form">
              <div
                className="c-skeleton-square "
                style={{
                  maxWidth: "100px",
                  height: `20px`,
                  borderRadius: "5px",
                }}
              />
            </span>
            <h1>
              <div
                className="c-skeleton-square mt-1"
                style={{
                  maxWidth: "200px",
                  height: `30px`,
                  borderRadius: "5px",
                }}
              />
            </h1>
          </div>
          <div className="resort_view_more_btn w-50 d-flex justify-content-end">
            <div style={{ width: "150px" }}>
              <div
                className="c-skeleton-square "
                style={{
                  height: `20px`,
                  borderRadius: "5px",
                }}
              />
              <div
                className="c-skeleton-square mt-1"
                style={{
                  height: `20px`,
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
