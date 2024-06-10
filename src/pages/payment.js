import fullLogoImage from "@/assets/static/media/vb.logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <section className="make_payment_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 col-xxl-7">
            <div className="make_payment_wrapper">
              <div className="success_message text-center">
                <div className="logo">
                  <Link href="/">
                    <Image src={fullLogoImage} alt="vromonbilash" />
                  </Link>
                </div>
                <h1>Your Submission Was Received</h1>
                <h2>Thank you for your booking request</h2>
              </div>
              {/* ------- Payment Policy ------ */}
              <div className="make_payment_header d-flex justify-content-between align-items-center text-center">
                <div className="order_number">
                  <h2>
                    Booking Number <span>#AB2FG6790K2</span>
                  </h2>
                </div>
                <div className="goBooking_details text-end">
                  <a href>Go Booking Details</a>
                </div>
              </div>
              <div className="payment_policy_content">
                <h1>How to Make Payment</h1>
                <p>
                  At Vromon Bilash, we want to make your booking process as easy
                  and convenient as possible. That’s why we offer you a variety
                  of payment options to suit your preferences and needs. You can
                  choose to pay online or offline.
                </p>
                <h5>Here are some details about our payment policy:</h5>
                <p>
                  <span>*</span> You must pay 75% of the total payment to be
                  confirmed at the time of booking. You can pay the rest of the
                  payment at the time of your check-in.
                </p>
                <p>
                  <span>*Online payment: </span>You can pay online with your{" "}
                  <b>credit card, debit card, PayPal, mobile banking</b>, or{" "}
                  <b>other online payment methods</b>. We use a secure and
                  encrypted payment gateway to ensure that your information is
                  safe and protected.
                </p>
                <p>
                  <span>*Offline payment: </span>You can pay offline with cash,
                  cheque, bank transfer, or other offline payment methods. You
                  can contact our customer support team to arrange the payment
                  details and confirm your reservation. You will receive a
                  confirmation email and invoice once your payment is received
                  and verified.
                </p>
                <p>
                  <span>*Full payment: </span>You can pay the full amount of
                  your reservation at the time of booking or anytime before your
                  check-in date. This option may give you access to some
                  discounts and offers that are available for full payment only.
                </p>
                <p>
                  <span>*Full payment: </span>You can pay the full amount of
                  your reservation at the time of booking or anytime before your
                  check-in date. This option may give you access to some
                  discounts and offers that are available for full payment only.
                </p>
              </div>
              {/* ------- Payment Policy ------ */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
