import Image from "next/image";
import React from "react";
import offerImageJpg from "@/assets/static/media/offer_img.jpg";
import ThemeImage from "../theme/ThemeImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

export default function HomeBannerRightFroMobileDevice() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <figure className="banner_right__image d-block  d-md-none">
            {/* <Image
              src={offerImageJpg}
              alt="Offer image"
              style={{ height: "auto" }}
            /> */}
            <ThemeImage src={offerImageJpg} height="600px" alt="Offer Image" />

            <div className="banner_image_features_mbl">
              <span>
                {/* <i className="fa-solid fa-headphones-simple" /> */}
                <FontAwesomeIcon icon={faHeadphonesSimple} />
              </span>
              <h2>24/7</h2>
              <h4>Guide Supports</h4>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
