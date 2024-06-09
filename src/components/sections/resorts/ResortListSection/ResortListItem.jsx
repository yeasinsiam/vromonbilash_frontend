import Image from "next/image";
import { useEffect, useRef } from "react";
import resort1jpg from "@/assets/static/media/resort_img/r1.jpg";
import resort2jpg from "@/assets/static/media/resort_img/r2.jpg";
import resort3jpg from "@/assets/static/media/resort_img/r3.jpg";
import resort4jpg from "@/assets/static/media/resort_img/r4.jpg";
import resort5jpg from "@/assets/static/media/resort_img/r5.jpg";
import arrowRightPng from "@/assets/static/media/all_icon/arrow_right.png";
import ecoPng from "@/assets/static/media/eco.png";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeImage from "@/components/theme/ThemeImage";
import { setConditionalClassName } from "@/utils/helpers";
import Link from "next/link";

export default function ResortListItem({ view = "grid" }) {
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
            <swiper-slide className="swiper-slide">
              <div className="card-image">
                <ThemeImage src={resort1jpg} alt="Resort " />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
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
            </swiper-slide>
          </swiper-container>
        </a>
        <div className="discount_price_wrapper">
          <h1>
            <span>15%</span> Off
          </h1>
        </div>
      </div>
      <div className="resort_list_content">
        <div className="resort_list_rating_wrapper d-flex justify-content-between align-items-center">
          <div className="rl_rating">
            <a href="#">
              <span>
                <i className="fa-solid fa-star" />
                <FontAwesomeIcon icon={faStar} />

                <small>4.5</small>
              </span>
            </a>
          </div>
          <div className="eco_cottage_wrapper">
            <Image src={ecoPng} alt="Eco Image" style={{ height: "auto" }} />
          </div>
        </div>
        <h1 className="resort_title">
          <Link
            href={{
              pathname: "/resorts/[slug]",
              query: { slug: "my-resort" },
            }}
          >
            Courtyard by Marriott New York
          </Link>
        </h1>
        <ul className="resort_facelity_list ps-0">
          <li className="list-inline-item">Air Conditioning</li>
          <li className="list-inline-item">Wifi</li>
          <li className="list-inline-item">Kitchen</li>
          <li className="list-inline-item">Pool</li>
        </ul>
        <div className="resort_list_price_wrapper d-flex justify-content-between align-items-end">
          <div className="price_left_title">
            <span className="start_form">Start form</span>
            <h1>
              <span className="reguler_price">
                <b>৳ </b>1500
              </span>{" "}
              <b>৳ </b>
              1400 <span>/Night</span>
            </h1>
          </div>
          <div className="resort_view_more_btn">
            <Link
              href={{
                pathname: "/resorts/[slug]",
                query: { slug: "my-resort" },
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
