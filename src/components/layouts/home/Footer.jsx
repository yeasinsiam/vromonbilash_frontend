import Image from "next/image";
import React from "react";
import fullLogoImage from "@/assets/static/media/vb.logo.svg";
import paymentGatewayPng from "@/assets/static/media/payment_getway.png";
import {
  faLinkedin,
  faTwitch,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="vb_footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="footer_logo">
                <a href="index.html">
                  <Image src={fullLogoImage} alt="vromonbilash" />
                </a>
                <p>
                  Travel is a transformative and enriching experience that
                  allows individuals to explore new destinations, cultures, and
                  landscapes.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="footer_heading">
                <h1>Pages</h1>
              </div>
              <div className="footer_menu">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">News &amp; Blogs</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="footer_heading">
                <h1>Links</h1>
              </div>
              <div className="footer_menu">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <div className="footer_heading footer_heading_mobile">
                <h1>Booking</h1>
              </div>
              <div className="footer_menu footer_menu_mobile">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Hotel</a>
                  </li>
                  <li>
                    <a href="#">Tour Package</a>
                  </li>
                  <li>
                    <a href="#">Room</a>
                  </li>
                  <li>
                    <a href="#">Resort</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3">
              <div className="footer_heading footer_heading_mobile">
                <h1>We Accept</h1>
              </div>
              <div className="payment_getways">
                <Image
                  src={paymentGatewayPng}
                  alt="Payment Gateway"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_middle">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="footer_middle_wrapper">
                <div className="row">
                  <div className="col-12 col-md-3 col-lg-3">
                    <div className="footer_heading">
                      <h1>Contact Us</h1>
                    </div>
                    <div className="footer_menu footer_contact_menu">
                      <ul className="list-unstyled">
                        <li>
                          <b>Email:</b>{" "}
                          <a href="mailto:support@vromonbilash.com">
                            support@vromonbilash.com
                          </a>
                        </li>
                        <li>
                          <b>Phone:</b>{" "}
                          <a href="tel:+8801922-700031">+8801922-700031</a>
                        </li>
                        <li>
                          <b>Whatsapp:</b>{" "}
                          <a href="tel:+8801922-700031">Message Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-3">
                    <div className="footer_heading">
                      <h1>Dhaka Office</h1>
                    </div>
                    <div className="footer_menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">
                            Road Number 5, Block-C Cox{"'"}s Bazar, Chittagong
                            Division, Bangladesh
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_heading">
                      <h1>Saint Martin Office</h1>
                    </div>
                    <div className="footer_menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">
                            Cox{"'"}s Bazar, Chittagong Division, Bangladesh
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-4">
                    <div className="footer_heading">
                      <h1>Notice</h1>
                    </div>
                    <div className="footer_menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">
                            নুহাশ পল্লী প্রতিদিন সকাল ৯ঃ০০ টা থেকে সন্ধ্যা ৬ঃ০০
                            টা পর্যন্ত খোলা থাকে। প্রবেশ ফি জনপ্রতি ২০০ টাকা ।
                            দশ বছরের নিচে বাচ্চা , ড্রাইভার ও প্রতিবন্ধীদের
                            প্রবেশ ফি লাগবেনা ।
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2">
                    <div className="footer_heading">
                      <h1>Social Share</h1>
                    </div>
                    <div className="footer_social">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                            {/* <i className="fab fa-brands fa-whatsapp" /> */}
                            <FontAwesomeIcon icon={faWhatsapp} />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            {/* <i className="fab fa-brands fa-twitter" /> */}
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            {/* <i className="fab fa-brands fa-linkedin" /> */}
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="footer_copyright">
                <p>© 2024. All rights reserved</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="fc_right text-center text-sm-end">
                <a href="#">Powered by: VromonBilash</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
