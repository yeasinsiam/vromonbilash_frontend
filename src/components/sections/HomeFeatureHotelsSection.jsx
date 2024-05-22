import React from "react";
import ThemeImage from "../theme/ThemeImage";
import hotel1jpg from "@/assets/static/media/hotel1.jpg";
import hotel2jpg from "@/assets/static/media/hotel2.jpg";
import hotel3jpg from "@/assets/static/media/hotel3.jpg";
import hotel4jpg from "@/assets/static/media/hotel4.jpg";

export default function HomeFeatureHotelsSection() {
  return (
    <section className="features_hotel_section">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="section_title">
              <h2 className="line-title">Features Hotels</h2>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 col-lg-3">
            <a href="#">
              <div className="features_hotel_item">
                <div className="features_hotel_img">
                  {/* <Image src={hotel1jpg} alt="asdf" /> */}
                  <ThemeImage
                    src={hotel1jpg}
                    // height="460px"
                    alt="feature hotel banner"
                  />
                  <div className="hotel_location">
                    <span>
                      <em>
                        <i className="fa-solid fa-location-dot" />
                      </em>{" "}
                      New York
                    </span>
                  </div>
                </div>
                <div className="f_hotel_content">
                  <h1>Baga Comfort</h1>
                  <div className="hotel_price_rating d-flex justify-content-between">
                    <span>
                      <em>$455</em> / Starting At
                    </span>
                    <ul>
                      <li className="list-inline-item">4.5</li>
                      <li className="list-inline-item">
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <a href="#">
              <div className="features_hotel_item">
                <div className="features_hotel_img">
                  <ThemeImage
                    src={hotel2jpg}
                    // height="460px"
                    alt="feature hotel banner"
                  />
                  <div className="hotel_location">
                    <span>
                      <em>
                        <i className="fa-solid fa-location-dot" />
                      </em>
                      California
                    </span>
                  </div>
                </div>
                <div className="f_hotel_content">
                  <h1>New Apollo Hotel</h1>
                  <div className="hotel_price_rating d-flex justify-content-between">
                    <span>
                      <em>$455</em> / Starting At
                    </span>
                    <ul>
                      <li className="list-inline-item">4.5</li>
                      <li className="list-inline-item">
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <a href="#">
              <div className="features_hotel_item">
                <div className="features_hotel_img">
                  <ThemeImage
                    src={hotel3jpg}
                    // height="460px"
                    alt="feature hotel banner"
                  />
                  <div className="hotel_location">
                    <span>
                      <em>
                        <i className="fa-solid fa-location-dot" />
                      </em>{" "}
                      New York
                    </span>
                  </div>
                </div>
                <div className="f_hotel_content">
                  <h1>Baga Comfort</h1>
                  <div className="hotel_price_rating d-flex justify-content-between">
                    <span>
                      <em>$455</em> / Starting At
                    </span>
                    <ul>
                      <li className="list-inline-item">4.5</li>
                      <li className="list-inline-item">
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <a href="#">
              <div className="features_hotel_item">
                <div className="features_hotel_img">
                  <ThemeImage
                    src={hotel4jpg}
                    // height="460px"
                    alt="feature hotel banner"
                  />
                  <div className="hotel_location">
                    <span>
                      <em>
                        <i className="fa-solid fa-location-dot" />
                      </em>{" "}
                      New York
                    </span>
                  </div>
                </div>
                <div className="f_hotel_content">
                  <h1>Baga Comfort</h1>
                  <div className="hotel_price_rating d-flex justify-content-between">
                    <span>
                      <em>$455</em> / Starting At
                    </span>
                    <ul>
                      <li className="list-inline-item">4.5</li>
                      <li className="list-inline-item">
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
