import React, { useState } from "react";
import ecoPng from "@/assets/static/media/eco.png";
import Image from "next/image";
import ThemeImage from "@/components/theme/ThemeImage";

export default function SingleRoomInformation() {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const openImage = (event, startAt = 0) => {
    event.preventDefault();

    const myGallery = GLightbox({
      elements: [
        "/static/media/resort_img/r10.jpg",
        "/static/media/resort_img/r11.jpg",
        "/static/media/resort_img/r2.jpg",
        "/static/media/resort_img/r1.jpg",
      ].map((url) => ({
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
    <div className="room_invoice_number_wrapper">
      <div className="room_chekinout_guest_info_wrapper">
        <div className="date_info_in_checkout_wrapper">
          <div className="dates_card_item">
            <h6>CheckIn</h6>
            <h1>24 May, 2024</h1>
          </div>
          <div className="dates_card_item">
            <h6>Check Out</h6>
            <h1>28 May, 2024</h1>
          </div>
          <div className="dates_card_item">
            <h6>Room Type</h6>
            <h1>AC</h1>
          </div>
          <div className="dates_card_item">
            <h6>Guests</h6>
            <h1>2 Adult, 1 Child</h1>
          </div>
        </div>
      </div>
      <div className="resort_info_in_checkout_wrapper d-flex">
        <div className="left_imgs">
          <div className="photos-grid-container resort_checkout_lightbox_photo">
            <div className="sub_img">
              <div id="multi-link" className="img-box">
                <a onClick={(e) => openImage(e, 0)}>
                  <ThemeImage
                    src="/static/media/resort_img/r10.jpg"
                    alt="image"
                  />
                  <div className="transparent-box">
                    <div className="caption">View All</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right_contents">
          <h1>Luxury Room with Balcony</h1>
          {/* --------- Room Invoice Table Wrapper Start-------- */}
          <table className="room_invoice_table table-responsive">
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Extra Adult Price</th>
                <th>Extra Child Price</th>
                <th>Toal Price</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>4 June, 2024</td>
                <td>4,500</td>
                <td>2×1000</td>
                <td>1×700</td>
                <td>7,200</td>
              </tr>
              <tr>
                <td>4 June, 2024</td>
                <td>4,500</td>
                <td>2×1000</td>
                <td>1×700</td>
                <td>7,200</td>
              </tr>
              <tr>
                <td>4 June, 2024</td>
                <td>4,500</td>
                <td>2×1000</td>
                <td>1×700</td>
                <td>7,200</td>
              </tr>
              {isSeeMore && (
                <>
                  <tr>
                    <td>4 June, 2024</td>
                    <td>4,500</td>
                    <td>2×1000</td>
                    <td>1×700</td>
                    <td>7,200</td>
                  </tr>
                  <tr>
                    <td>4 June, 2024</td>
                    <td>4,500</td>
                    <td>2×1000</td>
                    <td>1×700</td>
                    <td>7,200</td>
                  </tr>
                  <tr>
                    <td>4 June, 2024</td>
                    <td>4,500</td>
                    <td>2×1000</td>
                    <td>1×700</td>
                    <td>7,200</td>
                  </tr>
                  <tr>
                    <td>4 June, 2024</td>
                    <td>4,500</td>
                    <td>2×1000</td>
                    <td>1×700</td>
                    <td>7,200</td>
                  </tr>
                  <tr>
                    <td>4 June, 2024</td>
                    <td>4,500</td>
                    <td>2×1000</td>
                    <td>1×700</td>
                    <td>7,200</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <div className="total_invoice_price text-end">
            <h4>
              Total: <span>৳ 14,400</span>
            </h4>
          </div>
          {!isSeeMore && (
            <button id="see-more-button" onClick={() => setIsSeeMore(true)}>
              See More
            </button>
          )}

          {/* --------- Room Invoice Table Wrapper End-------- */}
          <div className="right_content_inner_wrapper d-flex justify-content-between mt-2">
            <ul className="room_facelity_list room_f_list_checkout ps-0 mb-0">
              <li className="list-inline-item">Air Conditioning</li>
              <li className="list-inline-item">Air Conditioning</li>
              <li className="list-inline-item">Wifi</li>
              <li className="list-inline-item">Kitchen</li>
              <li className="list-inline-item">Kitchen</li>
              <li className="list-inline-item">Pool</li>
              <li className="list-inline-item">Pool</li>
            </ul>
            <div className="eco_cottage_img">
              <Image src={ecoPng} alt="Eco Image" style={{ height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
