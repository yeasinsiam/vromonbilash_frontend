import Image from "next/image";
import Link from "next/link";
import hotelBookSvg from "@/assets/static/media/hotel_book.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function CheckoutBreadcrumbSection() {
  return (
    <section className="breadcrumb_section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb_wrapper">
              <nav className="d-flex justify-content-between align-items-center">
                <ol className="cd-breadcrumb ps-0">
                  <h1>Confirm your Booking</h1>
                  <li className="list-inline-item">
                    <Link href="/">
                      Home
                      <span className="ms-1">
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/resorts">
                      Resorts
                      <span className="ms-1">
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      href={{
                        pathname: "/resorts/[slug]",
                        query: { slug: "my-resort" },
                      }}
                    >
                      Resort Details
                      <span className="ms-1">
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item current">
                    <em>Resort Booking</em>
                  </li>
                </ol>
                <div className="book_now_mobile_img">
                  <Image
                    src={hotelBookSvg}
                    alt="hotel book"
                    style={{ height: "auto" }}
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckoutBreadcrumbSectionLoading() {
  return (
    <section className="breadcrumb_section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="c-skeleton-square me-3"
              style={{
                height: `215px`,
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
