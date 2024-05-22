import quickServiceBannerJpg from "@/assets/static/media/quick-service-banner.jpg";
import starPng from "@/assets/static/media/star.png";
import Image from "next/image";
import ThemeImage from "../theme/ThemeImage";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuickServicesSection() {
  return (
    <section className="quick_services_for_holiday">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="qsfh_left_img">
              {/* <Image
                src={quickServiceBannerJpg}
                alt="Quick Service Banner"
                style={{ width: "100%", height: "auto" }}
              /> */}
              <ThemeImage
                src={quickServiceBannerJpg}
                // height="600px"
                alt="Quick Service Banner"
              />
              <div className="spin_star_animation">
                <div>
                  <Image src={starPng} alt="Star" style={{ height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="dqfh_right_contents">
              <h1>The Best Holidays Start Here!</h1>
              <p>
                Book your hotel with us and don{"'"}t forget to grab an awesome
                hotel deal to save massive on your stay. Book your hotel with us
                and don{"'"}t forget to grab an awesome hotel deal to save
                massive on your stay.
              </p>
            </div>
            <div className="row mt-lg-3 mt-5">
              <div className="col-md-6 col-lg-6">
                <div className="qsfh_icon_item">
                  <div className="qsfh_icon">
                    <span>
                      {/* <i className="fa-solid fa-utensils" /> */}
                      <FontAwesomeIcon icon={faUtensils} />
                    </span>
                  </div>
                  <div className="qsfh_content">
                    <h1>Quality Food</h1>
                    <p>
                      Departure defective arranging rapturous did. Conduct
                      denied adding worthy little.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="qsfh_icon_item">
                  <div className="qsfh_icon iconbg_2">
                    <span>
                      {/* <i className="fa-solid fa-utensils" /> */}
                      <FontAwesomeIcon icon={faUtensils} />
                    </span>
                  </div>
                  <div className="qsfh_content">
                    <h1>Quick Services</h1>
                    <p>
                      Departure defective arranging rapturous did. Conduct
                      denied adding worthy little.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="qsfh_icon_item">
                  <div className="qsfh_icon iconbg_3">
                    <span>
                      {/* <i className="fa-solid fa-utensils" /> */}
                      <FontAwesomeIcon icon={faUtensils} />
                    </span>
                  </div>
                  <div className="qsfh_content">
                    <h1>High Security</h1>
                    <p>
                      Departure defective arranging rapturous did. Conduct
                      denied adding worthy little.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="qsfh_icon_item">
                  <div className="qsfh_icon iconbg_4">
                    <span>
                      {/* <i className="fa-solid fa-utensils" /> */}
                      <FontAwesomeIcon icon={faUtensils} />
                    </span>
                  </div>
                  <div className="qsfh_content">
                    <h1>24 Hours Alert</h1>
                    <p>
                      Departure defective arranging rapturous did. Conduct
                      denied adding worthy little.
                    </p>
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
