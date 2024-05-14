import React from "react";

import HomeLayout from "@/components/layouts/home";
import DownloadAppSection from "@/components/sections/DownloadAppSection";
import QuickServicesSection from "@/components/sections/QuickServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import HomeBannerSection from "@/components/sections/HomeBannerSection";
import HomeSearchSection from "@/components/sections/HomeSearchSection";

export default function HomePage() {
  return (
    <HomeLayout>
      <HomeBannerSection />
      <HomeSearchSection />
      {/* Border Starts */}
      <div className="container section_line">
        <div className="row">
          <div className="col-lg">
            <div
              style={{
                background:
                  "linear-gradient(to right, #ffffff, #092eff7a, #ffffff)",
                height: 1,
                margin: "40px 0 1px 0px",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Border Ends */}
      <AboutSection />
      {/* Border Starts */}
      <div className="container section_line">
        <div className="row">
          <div className="col-lg">
            <div
              style={{
                background:
                  "linear-gradient(to right, #ffffff, #092eff7a, #ffffff)",
                height: 1,
                margin: "40px 0 1px 0px",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Border Ends */}
      <QuickServicesSection />
      <DownloadAppSection />
    </HomeLayout>
  );
}
