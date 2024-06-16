import React from "react";
import SidebarFilters from "./SidebarFilters";
import PackageListItem from "./PackageListItem";

export default function FullPackagesListSection() {
  return (
    <section className="tour_package_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-3">
            <SidebarFilters />
          </div>
          <div className="col-lg-9">
            {/* ----- Package Item-------- */}
            <PackageListItem />
            <PackageListItem />
            <PackageListItem />
            <PackageListItem />
            <PackageListItem />
          </div>
        </div>
      </div>
    </section>
  );
}
