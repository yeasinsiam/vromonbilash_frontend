import Image from "next/image";
import offerImageJpg from "@/assets/static/media/offer_img.jpg";

export default function HomeBannerSection() {
  return (
    <section className="mainHeading">
      <video
        poster="/static/media/Multipurpose travel and tour booking.mp4"
        playsInline
        autoPlay
        muted
        loop
        preload="none"
      >
        <source
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
                <a
                  id="play-video"
                  className="video-play-button"
                  href="#"
                  title="Watch our story"
                >
                  <span />
                </a>
                <div id="video-overlay" className="video-overlay">
                  <a className="video-overlay-close">×</a>
                </div>
              </article>
              <figure className="mainHeading__image">
                <Image src={offerImageJpg} alt="Offer image" />
                <div className="banner_image_features">
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
      </div>
    </section>
  );
}
