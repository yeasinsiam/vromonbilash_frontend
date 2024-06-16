import ThemeImage from "@/components/theme/ThemeImage";
import Link from "next/link";
import React from "react";

export default function PackageListItem() {
  return (
    <div className="tour_package_item d-flex">
      <div className="package_img_left">
        <Link href="/packages/my-package">
          <ThemeImage
            src="/static/media/packages/pk-1.jpg"
            alt="hotel-resort-tour-package"
          />
        </Link>
        <div className="package_discount">
          <span>5% off</span>
        </div>
      </div>
      <div className="package_content_middle">
        <Link href="/packages/my-package">
          <h1>
            ভ্রমনবিলাস স্পেশাল ডে ট্যুর প্যাকেজ : ঢাকা - নুহাশপল্লী - সাফারি
            পার্ক
          </h1>
        </Link>
        <h4>
          <span>
            <i className="fa-solid fa-location-dot" />
          </span>{" "}
          নুহাশ পল্লী, বঙ্গবন্ধু সাফারি পার্ক,
        </h4>
        <ul className="package_facilities">
          <li className="list-inline-item">Local Transport</li>
          <li className="list-inline-item">Accommodation</li>
          <li className="list-inline-item">Foods</li>
          <li className="list-inline-item">Silent Boat Trips</li>
          {/* <li class="list-inline-item">Fishing</li> */}
        </ul>
        <p>
          পিকনিক বা ট্যুর এর জন্য ঢাকার খুব কাছের জনপ্রিয় স্পট গুলোর মধ্য প্রথমে
          আসে নুহাশ পল্লীর নাম। একই দিনে ঢাকার সন্নিকটে একসাথে দুটি জায়গায় ঘুবে
          আসার সুবর্ণ সুযোগ করে দিতে ভ্রমণবিলাসের বিশেষ আয়োজন ভ্রমনবিলাস স্পেশাল
          ডে ট্যুর প্যাকেজ। যাওয়া -আসা, খাওয়া -দাওয়ার আয়োজনের সব ঝামেলার দায়িত্ব
          নেবে ভ্রমন বিলাস।
        </p>
      </div>
      <div className="package_right_price d-flex">
        <div className="package_price">
          <h4>
            <em>৳</em> 2599
          </h4>
          <span>Per Person</span>
        </div>
        <div className="package_view_details">
          <Link href="/packages/my-package">Details</Link>
        </div>
      </div>
    </div>
  );
}
