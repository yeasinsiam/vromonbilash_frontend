import Image from "next/image";
import offerImageJpg from "@/assets/static/media/offer_img.jpg";
import { useState } from "react";
import ThemeImage from "../theme/ThemeImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

export default function HomeBannerSection() {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section className="mainHeading">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="none"
        poster="/static/media/Multipurpose travel and tour booking.jpg"
      >
        <source
          // src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          src="/static/media/Multipurpose travel and tour booking.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="mainHeading__content">
              <article className="mainHeading__text">
                <p className="mainHeading__preTitle">Welcome to VromonBilash</p>
                <h2 className="mainHeading__title">
                  Find the top Hotels nearby<span>.</span>
                </h2>
                <p className="mainHeading__description">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="cta">Discover Now</button>
                <span
                  id="play-video"
                  className="video-play-button"
                  title="Watch our story"
                  onClick={() => setOpenVideo(true)}
                >
                  <span />
                </span>
                <div
                  id="video-overlay"
                  className={`video-overlay ${openVideo ? "open" : ""}`}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/TF22bgokALk?si=mb3nrSwbykMpzi9E"
                    frameBorder="0"
                    allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <span
                    onClick={() => setOpenVideo(false)}
                    className="video-overlay-close"
                  >
                    ×
                  </span>
                </div>
              </article>
              <figure className="mainHeading__image">
                {/* <Image src={offerImageJpg} alt="Offer image" /> */}
                <ThemeImage src={offerImageJpg} height={600} />
                <div className="banner_image_features">
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
      </div>
    </section>
  );
}
