import { useEffect, useRef } from "react";
import { useState } from "react";

export default function PhoneNumberVerificationPopup({ verificationPopup }) {
  const { showPopup, closeVerificationPopup } = verificationPopup;
  const inputWrapperRef = useRef();

  const [isInvalidCode, setIsInvalidCode] = useState(false);

  const handleVerifyCode = () => {
    let code = "";
    const inputs = inputWrapperRef.current.querySelectorAll(".code-input");

    inputs.forEach((input, index) => {
      code += input.value;
    });

    verificationPopup.handleVerifyCode(code);
  };

  useEffect(() => {
    // Get all the input elements
    const inputs = inputWrapperRef.current.querySelectorAll(".code-input");

    // Define the event handler functions
    function handleInput(event) {
      const input = event.target;
      const index = Array.from(inputs).indexOf(input);

      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }

    function handleKeyDown(event) {
      const input = event.target;
      const index = Array.from(inputs).indexOf(input);

      if (event.key === "Backspace" && input.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    }

    // Add event listeners to the input elements
    inputs.forEach((input, index) => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeyDown);
    });

    // Remove event listeners from the input elements
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, []);

  return (
    <div
      id="verification-popup"
      className="number_verify_popup"
      style={{ display: showPopup ? "flex" : "none" }}
    >
      <div className="verify_number_popup-content">
        <span className="close-button" onClick={closeVerificationPopup}>
          ×
        </span>
        <h3>Enter Verification Code</h3>
        <p>We have sent a verification code to your phone number.</p>
        <div ref={inputWrapperRef} className="code-inputs mb-0">
          <input type="text" className="code-input" maxLength={1} />
          <input type="text" className="code-input" maxLength={1} />
          <input type="text" className="code-input" maxLength={1} />
          <input type="text" className="code-input" maxLength={1} />
          <input type="text" className="code-input" maxLength={1} />
          <input type="text" className="code-input" maxLength={1} />
        </div>
        <p className="error-message mt-3">
          {isInvalidCode ? "Invalid Code." : ""}
        </p>
        <button id="submit-code" onClick={handleVerifyCode} className="me-1">
          Verify Code
        </button>
        {/* {verificationPopup.resendCodeCounter > 0 && ( */}
        <button
          id="resend-otp"
          style={{ marginTop: 10 }}
          type="button"
          onClick={verificationPopup.handleResendVerificationCode}
        >
          Resend OTP{" "}
          {verificationPopup.resendCodeCounter > 0 && (
            <>({verificationPopup.resendCodeCounter}s)</>
          )}
        </button>
        {/* )} */}
      </div>
    </div>
  );
}
