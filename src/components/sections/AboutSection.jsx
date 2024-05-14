import Image from "next/image";
import aboutBannerThreePng from "@/assets/static/media/about-banner-three.png";

export default function AboutSection() {
  return (
    <>
      <section className="about_vromonbilash">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="vb_about_banner">
                <Image
                  src={aboutBannerThreePng}
                  alt="About vromonbilash banner"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <div className="dqfh_right_contents">
                <h4>About VromonBilash</h4>
                <h1>Get The Best Travel Experience With Vromon Bilash</h1>
                <p>
                  Travel is a transformative and enriching experience that
                  allows individuals to explore new destinations, cultures, and
                  landscapes. It is a fundamental human activity that has been
                  practiced for centuries and continues to be a source of joy,
                  learning, and personal growth.
                </p>
                <div className="common_btn_style mt-5">
                  <a href="#">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <div className="about_vb_counter">
                    <h1>150k</h1>
                    <span>Happy Traveler</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about_vb_counter">
                    <h1>95.7%</h1>
                    <span>Satisfaction Rate</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about_vb_counter">
                    <h1>5000+</h1>
                    <span>Tour Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
