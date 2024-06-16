import {
  faHotel,
  faHouseMedical,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleRoomInformation from "./SingleRoomInformation";
import BookingInformationForm from "./BookingInformationForm";

export default function FullCheckoutSection() {
  return (
    <section className="checkout_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="resort_title_for_checkout mb-3">
              <h1>
                <span>Resort: </span> Courtyard by Marriott New York
              </h1>
              <span>
                <em>
                  <FontAwesomeIcon icon={faLocationDot} />
                </em>{" "}
                5855 W Century Blvd, Los Angeles - 90045
              </span>
            </div>
            {/* ------ Booking Information Wrapper--------- */}
            <div className="booking_information_wrapper">
              <div className="booking_info_sec_title">
                <h1>
                  <span>
                    <FontAwesomeIcon icon={faHotel} />
                  </span>{" "}
                  Room Information
                </h1>
              </div>
              <div className="booking_information_content_wrapper">
                {/* -------- Selected Room Invoice Number One */}
                <SingleRoomInformation />
                <SingleRoomInformation />

                <div className="room_info_in_checkout_wrapper">
                  <div className="room_title">
                    <h4>
                      <span className="me-1">
                        <FontAwesomeIcon icon={faHouseMedical} />
                      </span>
                      Which facilities available in resort
                    </h4>
                  </div>
                  <div className="room_facility_wrapper">
                    <div className="resort_details_sub_title mt-2">
                      <h1>Advantages</h1>
                      <ul className="room_facelity_list room_f_list_checkout ps-0">
                        <li className="list-inline-item">Air Conditioning</li>
                        <li className="list-inline-item">Air Conditioning</li>
                        <li className="list-inline-item">Wifi</li>
                        <li className="list-inline-item">Kitchen</li>
                        <li className="list-inline-item">Kitchen</li>
                        <li className="list-inline-item">Pool</li>
                        <li className="list-inline-item">Pool</li>
                        <li className="list-inline-item">Air Conditioning</li>
                        <li className="list-inline-item">Air Conditioning</li>
                        <li className="list-inline-item">Wifi</li>
                        <li className="list-inline-item">Kitchen</li>
                        <li className="list-inline-item">Kitchen</li>
                        <li className="list-inline-item">Pool</li>
                        <li className="list-inline-item">Pool</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------ Booking Information Wrapper--------- */}
            {/* ------ Guest Information Wrapper--------- */}
            <BookingInformationForm />
            {/* ------ Guest Information Wrapper--------- */}
          </div>
          <div className="col-lg-4">
            <div className="checkout_price_summary_sticky_wrapper">
              <div className="checkout_price_summary_wrapper">
                <div className="price_summary_title">
                  <h4>Price Summary</h4>
                </div>
                <div className="price_summary_items_wrapper">
                  {/* Item */}
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      Room Charges
                    </div>
                    <div className="price_summary_total">
                      <span>৳</span> 25,500
                    </div>
                  </ul>
                  {/* Item */}
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      Total Discount
                    </div>
                    <div className="price_summary_total">
                      <span>৳</span> 1,500
                    </div>
                  </ul>
                  {/* Item */}
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      Coupon Discount
                    </div>
                    <div className="price_summary_total">
                      <span>৳</span> 100
                    </div>
                  </ul>
                  {/* Item */}
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      Taxes % Fees
                    </div>
                    <div className="price_summary_total">
                      <span>৳</span> 200
                    </div>
                  </ul>
                </div>
                <div className="total_price_wrapper d-flex justify-content-between align-items-center">
                  <div className="total_price">
                    <h4>Total Price</h4>
                  </div>
                  <div className="total_price">
                    <h4>
                      <span>৳</span> 22,990
                    </h4>
                  </div>
                </div>
              </div>
              <div className="checkout_price_summary_wrapper">
                <div className="price_summary_title">
                  <h4>Discount &amp; Offer</h4>
                </div>
                <div className="apply_coupon_btn">
                  <input type="text" name="" id="" placeholder="Coupon Code" />
                  <div className="coupon_btn">
                    <button>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FullCheckoutSectionLoading() {
  return (
    <section className="checkout_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="resort_title_for_checkout mb-3">
              <h1>
                <div
                  className="c-skeleton-square me-3"
                  style={{
                    maxWidth: "500px",
                    height: `35px`,
                    borderRadius: "5px",
                  }}
                />
              </h1>
              <span>
                <div
                  className="c-skeleton-square me-3"
                  style={{
                    maxWidth: "350px",
                    height: `35px`,
                    borderRadius: "5px",
                  }}
                />
              </span>
            </div>
            {/* ------ Booking Information Wrapper--------- */}
            <div className="booking_information_wrapper">
              <div className="booking_info_sec_title">
                <h1>
                  <div
                    className="c-skeleton-square me-3"
                    style={{
                      maxWidth: "200px",
                      height: `35px`,
                      borderRadius: "5px",
                    }}
                  />
                </h1>
              </div>
              <div className="booking_information_content_wrapper">
                {/* -------- Selected Room Invoice Number One */}
                <div className="room_invoice_number_wrapper">
                  <div className="room_chekinout_guest_info_wrapper">
                    <div className="date_info_in_checkout_wrapper">
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="resort_info_in_checkout_wrapper d-flex">
                    <div className="left_imgs">
                      <div className="photos-grid-container resort_checkout_lightbox_photo">
                        <div className="sub_img">
                          <div id="multi-link" className="img-box">
                            <a>
                              <div
                                className="c-skeleton-square "
                                style={{
                                  width: "100%",
                                  height: `160px`,
                                  borderRadius: "5px",
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_contents">
                      <div
                        className="c-skeleton-square "
                        style={{
                          maxWidth: "300px",
                          height: `30px`,
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      />

                      {/* --------- Room Invoice Table Wrapper Start-------- */}
                      <div
                        className="c-skeleton-square "
                        style={{
                          width: "100%",
                          height: `120px`,
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      />

                      {/* --------- Room Invoice Table Wrapper End-------- */}
                      <div
                        className="right_content_inner_wrapper d-flex justify-content-between mt-2"
                        style={{ gap: "5px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <div
                            className="c-skeleton-square "
                            style={{
                              width: "100%",
                              height: `20px`,
                              borderRadius: "5px",
                              marginBottom: "10px",
                            }}
                          />
                          <div
                            className="c-skeleton-square "
                            style={{
                              maxWidth: "200px",
                              height: `20px`,
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                        <div className="eco_cottage_img">
                          <div
                            className="c-skeleton-square "
                            style={{
                              minWidth: "40px",
                              height: `40px`,
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room_invoice_number_wrapper">
                  <div className="room_chekinout_guest_info_wrapper">
                    <div className="date_info_in_checkout_wrapper">
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="dates_card_item" style={{ padding: "0" }}>
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            width: "100%",
                            height: `50px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="resort_info_in_checkout_wrapper d-flex">
                    <div className="left_imgs">
                      <div className="photos-grid-container resort_checkout_lightbox_photo">
                        <div className="sub_img">
                          <div id="multi-link" className="img-box">
                            <a>
                              <div
                                className="c-skeleton-square "
                                style={{
                                  width: "100%",
                                  height: `160px`,
                                  borderRadius: "5px",
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_contents">
                      <div
                        className="c-skeleton-square "
                        style={{
                          maxWidth: "300px",
                          height: `30px`,
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      />

                      {/* --------- Room Invoice Table Wrapper Start-------- */}
                      <div
                        className="c-skeleton-square "
                        style={{
                          width: "100%",
                          height: `120px`,
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      />

                      {/* --------- Room Invoice Table Wrapper End-------- */}
                      <div
                        className="right_content_inner_wrapper d-flex justify-content-between mt-2"
                        style={{ gap: "5px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <div
                            className="c-skeleton-square "
                            style={{
                              width: "100%",
                              height: `20px`,
                              borderRadius: "5px",
                              marginBottom: "10px",
                            }}
                          />
                          <div
                            className="c-skeleton-square "
                            style={{
                              maxWidth: "200px",
                              height: `20px`,
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                        <div className="eco_cottage_img">
                          <div
                            className="c-skeleton-square "
                            style={{
                              minWidth: "40px",
                              height: `40px`,
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -------- Selected Room Invoice Number One */}
                </div>
                {/* -------- Selected Room Invoice Number end */}

                <div className="room_info_in_checkout_wrapper">
                  <div className="room_title">
                    <h4>
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          maxWidth: "350px",
                          height: `30px`,
                          borderRadius: "5px",
                        }}
                      />
                    </h4>
                  </div>
                  <div className="room_facility_wrapper">
                    <div className="resort_details_sub_title mt-2">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          maxWidth: "150px",
                          height: `25px`,
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <div
                          className="c-skeleton-square "
                          style={{
                            width: "100%",
                            height: `20px`,
                            borderRadius: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        <div
                          className="c-skeleton-square "
                          style={{
                            maxWidth: "300px",
                            height: `20px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------ Booking Information Wrapper--------- */}
            {/* ------ Guest Information Wrapper--------- */}
            <div className="booking_information_wrapper">
              <div className="booking_info_sec_title">
                <div
                  className="c-skeleton-square me-3"
                  style={{
                    maxWidth: "150px",
                    height: `30px`,
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="booking_information_content_wrapper">
                <div className="guest_info_checkout_form_wrapper">
                  <div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          className="c-skeleton-square "
                          style={{
                            width: "100%",
                            height: `20px`,
                            borderRadius: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        {/* <div
                          className="c-skeleton-square "
                          style={{
                            maxWidth: "300px",
                            height: `20px`,
                            borderRadius: "5px",
                          }}
                        /> */}
                      </div>
                      <div className="form-group">
                        <div
                          className="c-skeleton-square me-3"
                          style={{
                            maxWidth: "450px",
                            height: `60px`,
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------ Guest Information Wrapper--------- */}
          </div>
          <div className="col-lg-4">
            <div className="checkout_price_summary_sticky_wrapper">
              <div className="checkout_price_summary_wrapper">
                <div className="price_summary_title">
                  <h4>
                    <div
                      className="c-skeleton-square me-3"
                      style={{
                        maxWidth: "150px",
                        height: `30px`,
                        borderRadius: "5px",
                      }}
                    />
                  </h4>
                </div>
                <div className="price_summary_items_wrapper">
                  <div
                    className="c-skeleton-square "
                    style={{
                      width: "100%",
                      height: `150px`,
                      borderRadius: "5px",
                    }}
                  />
                  {/* <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "120px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="price_summary_total">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "100px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </ul>
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "100px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="price_summary_total">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "80px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </ul>
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "125px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="price_summary_total">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "70px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </ul>
                  <ul className="mb-3 d-flex justify-content-between">
                    <div className="price_summary_list_content">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "100px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="price_summary_total">
                      <div
                        className="c-skeleton-square me-3"
                        style={{
                          width: "75px",
                          height: `17px`,
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </ul> */}
                </div>
                <div className="total_price_wrapper d-flex justify-content-between align-items-center">
                  <div className="total_price">
                    <div
                      className="c-skeleton-square "
                      style={{
                        width: "100px",
                        height: `20px`,
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="total_price">
                    <div
                      className="c-skeleton-square "
                      style={{
                        width: "80px",
                        height: `20px`,
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout_price_summary_wrapper">
                <div className="price_summary_title">
                  <h4>
                    <div
                      className="c-skeleton-square me-3"
                      style={{
                        maxWidth: "150px",
                        height: `30px`,
                        borderRadius: "5px",
                      }}
                    />
                  </h4>
                </div>
                <div className="apply_coupon_btn">
                  <div
                    className="c-skeleton-square "
                    style={{
                      maxWidth: "100%",
                      height: `60px`,
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
