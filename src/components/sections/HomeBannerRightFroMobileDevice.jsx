import Image from "next/image";
import React from "react";
import offerImageJpg from "@/assets/static/media/offer_img.jpg";

export default function HomeBannerRightFroMobileDevice() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <figure className="banner_right__image d-block  d-md-none">
            <Image
              src={offerImageJpg}
              alt="Offer image"
              style={{ height: "auto" }}
            />

            <div className="banner_image_features_mbl">
              <span>
                <i className="fa-solid fa-headphones-simple" />
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
