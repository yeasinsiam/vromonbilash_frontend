import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import PhoneNumberVerificationPopup from "./PhoneNumberVerificationPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function useVerificationPopup(setVerifiedPhoneNumber) {
  const [oldVerificationPhoneNumber, setOldVerificationPhoneNumber] =
    useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const initialResendCodeCount = 10;
  const [resendCodeCounter, setResendCodeCounter] = useState(0);

  // this is for sending the verification code
  const sendVerificationCode = (phoneNumber) => {
    console.log(`Sending verification code to: ${phoneNumber}`);
  };

  const handleVerifyCode = (code) => {
    if (code == 123456) {
      console.log("verified");
      setVerifiedPhoneNumber(oldVerificationPhoneNumber);
      closeVerificationPopup();
    }
  };

  const showVerificationPopup = (phoneNumber) => {
    setShowPopup(true);

    // Check if New Phone number added
    if (phoneNumber != oldVerificationPhoneNumber) {
      setOldVerificationPhoneNumber(phoneNumber);
      sendVerificationCode(phoneNumber);
      startResendTimer();
    }
  };

  const closeVerificationPopup = () => {
    setShowPopup(false);
  };

  const handleResendVerificationCode = () => {
    // check if resend counter is less then 0
    if (resendCodeCounter <= 0) {
      startResendTimer();
      sendVerificationCode(oldVerificationPhoneNumber);
    }
  };

  const startResendTimer = () => {
    setResendCodeCounter(initialResendCodeCount);
  };

  useEffect(() => {
    if (resendCodeCounter > 0) {
      const timerId = setInterval(() => {
        setResendCodeCounter((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [resendCodeCounter]);

  return {
    showPopup,
    resendCodeCounter,
    showVerificationPopup,
    closeVerificationPopup,
    handleVerifyCode,
    handleResendVerificationCode,
  };
}

export default function BookingInformationForm() {
  const [verifiedPhoneNumber, setVerifiedPhoneNumber] = useState(null);

  const verificationPopup = useVerificationPopup(setVerifiedPhoneNumber);

  const numberValidationFrom = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: yup.object().shape({
      phoneNumber: yup
        .string()
        .required("Phone number is required.")
        .matches(
          /^(?:\+88|88)?(01[3-9]\d{8})$/,
          "Please enter a valid Bangladeshi phone number."
        ),
    }),
    onSubmit: ({ phoneNumber }) => {
      if (!verifiedPhoneNumber)
        verificationPopup.showVerificationPopup(phoneNumber);
    },
  });

  const guestInformationForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      otherSpecialRequestText: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("First name is required."),
      lastName: yup.string().required("Last name is required."),
      email: yup
        .string()
        .email("Please enter a valid email.")
        .required("Email is required."),
      location: yup.string().required("Location is required."),
      otherSpecialRequestText: yup.string(),
    }),
    onSubmit: ({
      firstName,
      lastName,
      email,
      location,
      otherSpecialRequestText,
    }) => {},
  });

  return (
    <div className="booking_information_wrapper">
      <div className="booking_info_sec_title">
        <h1>
          <span>
            <FontAwesomeIcon icon={faUsers} />
          </span>{" "}
          Guest Information
        </h1>
      </div>
      <div className="booking_information_content_wrapper">
        <div className="guest_info_checkout_form_wrapper">
          <div>
            <form onSubmit={numberValidationFrom.handleSubmit}>
              <h2 className="verifyNumber_heading">
                Continue to Next With Number Verification
              </h2>
              <div className="form-group">
                {/* <label for="phoneNumber">Phone Number:</label> */}
                <div className="input-container">
                  <input
                    className="inputPhoneVerify"
                    type="text"
                    name="phoneNumber"
                    placeholder=""
                    readOnly={verifiedPhoneNumber}
                    disabled={verifiedPhoneNumber}
                    onChange={numberValidationFrom.handleChange}
                    onBlur={numberValidationFrom.handleBlur}
                    value={numberValidationFrom.values.phoneNumber}
                  />
                  <span className="label">Enter your phone number</span>
                  {!verifiedPhoneNumber ? (
                    <button type="submit" id="verify-button">
                      Verify
                    </button>
                  ) : (
                    <button
                      id="verify-button"
                      disabled
                      style={{
                        backgroundColor: "rgb(2, 214, 66)",
                        border: "1px solid rgb(2, 214, 66)",
                      }}
                    >
                      Verified
                    </button>
                  )}
                </div>
                {numberValidationFrom.errors.phoneNumber &&
                numberValidationFrom.touched.phoneNumber ? (
                  <p className="error-message">
                    {numberValidationFrom.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
            </form>

            <PhoneNumberVerificationPopup
              {...{
                verificationPopup,
              }}
            />
            <form
              onSubmit={guestInformationForm.handleSubmit}
              id="additional-fields"
              className={!verifiedPhoneNumber && "info_field_hidden"}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder=""
                        name="firstName"
                        onChange={guestInformationForm.handleChange}
                        onBlur={guestInformationForm.handleBlur}
                        value={guestInformationForm.values.firstName}
                      />
                      <span className="label">Your first name</span>
                    </div>
                    {guestInformationForm.errors.firstName &&
                    guestInformationForm.touched.firstName ? (
                      <p className="error-message">
                        {guestInformationForm.errors.firstName}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-container">
                      <input
                        type="text"
                        name="lastName"
                        placeholder=""
                        onChange={guestInformationForm.handleChange}
                        onBlur={guestInformationForm.handleBlur}
                        value={guestInformationForm.values.lastName}
                      />
                      <span className="label">Your last name</span>
                    </div>
                    {guestInformationForm.errors.lastName &&
                    guestInformationForm.touched.lastName ? (
                      <p className="error-message">
                        {guestInformationForm.errors.lastName}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-container">
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        onChange={guestInformationForm.handleChange}
                        onBlur={guestInformationForm.handleBlur}
                        value={guestInformationForm.values.email}
                      />
                      <span className="label">Enter your email</span>
                    </div>
                    {guestInformationForm.errors.email &&
                    guestInformationForm.touched.email ? (
                      <p className="error-message">
                        {guestInformationForm.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-container">
                      <input
                        type="text"
                        name="location"
                        placeholder=""
                        onChange={guestInformationForm.handleChange}
                        onBlur={guestInformationForm.handleBlur}
                        value={guestInformationForm.values.location}
                      />
                      <span className="label">Your Location</span>
                    </div>
                    {guestInformationForm.errors.location &&
                    guestInformationForm.touched.location ? (
                      <p className="error-message">
                        {guestInformationForm.errors.location}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* ------- Special Request ------ */}
              <div className="room_info_in_checkout_wrapper">
                <div className="room_title">
                  <h4>Special request</h4>
                </div>
                <div className="room_facility_wrapper">
                  <div className="resort_details_sub_title mt-0">
                    <div className="filter_checkbox">
                      <ul className="ps-0">
                        <li className="list-inline-item">
                          <input
                            id="all"
                            type="checkbox"
                            defaultValue="checkbox"
                            className="checkbox_animation"
                            name="checkbox"
                          />
                          <label htmlFor="all">Smoking Room</label>
                        </li>
                        <li className="list-inline-item">
                          <input
                            id="hotel"
                            type="checkbox"
                            defaultValue="checkbox"
                            className="checkbox_animation"
                            name="checkbox"
                          />
                          <label htmlFor="hotel">Late check-in</label>
                        </li>
                        <li className="list-inline-item">
                          <input
                            id="apartment"
                            type="checkbox"
                            defaultValue="checkbox"
                            className="checkbox_animation"
                            name="checkbox"
                          />
                          <label htmlFor="apartment">Early check-in</label>
                        </li>
                        <li className="list-inline-item">
                          <input
                            id="resort"
                            type="checkbox"
                            defaultValue="checkbox"
                            className="checkbox_animation"
                            name="checkbox"
                          />
                          <label htmlFor="resort">Drinking Room</label>
                        </li>
                        <li className="list-inline-item">
                          <input
                            id="vilo"
                            type="checkbox"
                            defaultValue="checkbox"
                            className="checkbox_animation"
                            name="checkbox"
                          />
                          <label htmlFor="vilo">Vilo</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <textarea
                    className="w-100 special_request_textarea"
                    cols={20}
                    rows={5}
                    placeholder="Any Other Special Request?"
                    name="otherSpecialRequestText"
                    onChange={guestInformationForm.handleChange}
                    onBlur={guestInformationForm.handleBlur}
                    value={guestInformationForm.values.otherSpecialRequestText}
                  />
                  {guestInformationForm.errors.otherSpecialRequestText &&
                  guestInformationForm.touched.otherSpecialRequestText ? (
                    <p className="error-message">
                      {guestInformationForm.errors.otherSpecialRequestText}
                    </p>
                  ) : null}
                </div>
              </div>
              {/* ------- Special Request ------ */}
              <button type="submit" className="check_availability_btn w-100">
                Submit to Make Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
