import Image from "next/image";
import React from "react";
import fullLogoImage from "@/assets/static/media/vb.logo.svg";
import shortLogoImage from "@/assets/static/media/vb.short-logo.png";
import avatarImage from "@/assets/static/media/avatar.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="header_top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-lg-4 d-none d-md-block">
                <div className="top_header_call_wrapper d-flex align-items-center">
                  <div className="th_call_icon">
                    <span>
                      <i className="fa-solid fa-phone-volume" />
                    </span>
                  </div>
                  <div className="th_call_content">
                    <p>Call Anytime</p>
                    <a href="tel:+8801922-700031">+8801922-700031</a>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-4">
                <div className="header_main_logo text-center">
                  <a href="index.html">
                    <Image src={fullLogoImage} alt="vromonbilash" />
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-4">
                <div className="userAccount_wrapper d-flex justify-content-end align-items-center">
                  <div className="userProfile">
                    <div className="navigation">
                      <div className="user-box">
                        <div className="image-box">
                          <Image src={avatarImage} alt="avatar" />
                        </div>
                        <p className="username">Yeasin Rahman Siam</p>
                      </div>
                      <div className="menu-toggle" />
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-regular fa-user" />
                            </span>{" "}
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-regular fa-bookmark" />
                            </span>{" "}
                            My Bookings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-regular fa-heart" />
                            </span>{" "}
                            My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-solid fa-gear" />
                            </span>{" "}
                            Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-solid fa-expand" />
                            </span>{" "}
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-solid fa-right-from-bracket" />
                            </span>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="signIn_wrap d-none d-md-block">
                    <a href="#">Sign In</a>
                  </div>
                  <div className="signUp_wrap common_btn_style d-none d-md-block">
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= Header Main Html Code Start Here ================== */}
          <div className="mainheader">
            <div className="container">
              <div className="row">
                <div className="col-lg">
                  <nav className="main-header_wrapper">
                    <input type="checkbox" className="menu-btn" id="menu-btn" />
                    <label htmlFor="menu-btn" className="menu-icon">
                      <span className="menu-icon__line" />
                    </label>
                    <div className="sticky_logo ">
                      <a href="index.html">
                        <Image src={shortLogoImage} alt="vromonbilash logo" />
                      </a>
                    </div>
                    <ul className="nav-links">
                      <li className="nav-link">
                        <Link className="menu_active" href="/about">
                          About VromonBilash
                        </Link>
                      </li>
                      <li className="nav-link">
                        <a href="#">Packages</a>
                      </li>
                      <li className="nav-link">
                        <a href="#">Resorts</a>
                      </li>
                      <li className="nav-link dropdown_c dropdown_hover">
                        <a href="#">
                          Pages{" "}
                          <span>
                            <i className="fa-solid fa-angles-down" />
                          </span>{" "}
                        </a>
                        <div className="drop-content">
                          <ul className="drop-hover">
                            <li>
                              <a href="#">Resorts List</a>
                            </li>
                            <li>
                              <a href="#">Packages List</a>
                            </li>
                            <li>
                              <a href="#">How To Payment</a>
                            </li>
                            <li>
                              <a href="#">Help</a>
                            </li>
                            <li>
                              <a href="#">FAQ</a>
                            </li>
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="#">Terms &amp; Condition</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-link">
                        <a href="destination.html">Destination</a>
                      </li>
                      <li className="nav-link">
                        <a href="#">Contact</a>
                      </li>
                      <div className="common_btn_style d-block d-lg-none">
                        <a href="#">Sign In</a>
                        <a href="#">Sign Up</a>
                      </div>
                    </ul>
                    <div id="search-wrapper">
                      <i className="search-icon fas fa-search" />
                      <input
                        type="text"
                        id="search"
                        placeholder="Destination, Attraction..."
                      />
                      <button id="search-button">Search</button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
