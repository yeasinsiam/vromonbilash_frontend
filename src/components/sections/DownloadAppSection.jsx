import Image from "next/image";
import googlePlaySvg from "@/assets/static/media/google-play.svg";
import appStoreSvg from "@/assets/static/media/app-store.svg";
import backgroundPng from "@/assets/static/media/d_bg.png";
import {
  faHandHoldingDollar,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadAppSection() {
  return (
    <section className="download_app_section">
      <div className="container">
        <div className="col-lg">
          <div className="download_app_wrapper_bg ">
            <Image
              src={backgroundPng}
              alt="asdf"
              fill
              style={{
                position: "absolute",
                zIndex: "-1",
                objectFit: "cover",
              }}
            />
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="download_apps_title_wrapper text-center">
                  <h5>VromonBilash</h5>
                  <h1>Your all-in-one Travel App</h1>
                  <p>
                    Get Tour Packages, hotels, holidays assistance in just a few
                    taps. Enjoy real-time Tour, Package updates, schedules,
                    travel info and much more.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="download_app_item d-flex align-items-center">
                  <div className="dai_icon">
                    <span>
                      <i className="fa-solid fa-hand-holding-heart" />
                    </span>
                  </div>
                  <div className="dai_content">
                    <h1>24x7 Help</h1>
                    <p>
                      If we fall short of your expectation in any way, let us
                      know
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="download_app_item d-flex align-items-center">
                  <div className="dai_icon">
                    <span>
                      <i className="fa-solid fa-hand-holding-dollar" />
                    </span>
                  </div>
                  <div className="dai_content">
                    <h1>Payment Trust</h1>
                    <p>
                      If we fall short of your expectation in any way, let us
                      know
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="download_apps">
                  <h1>Download App</h1>
                  <a href="#">
                    <Image src={googlePlaySvg} alt="google play" />
                    <Image src={appStoreSvg} alt="app store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
