import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpLogin = () => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phonenumber.length < 10 || regex.test(phonenumber)) {
      alert("invalid phone number format");
      return;
    }
    setshowOtpInput(true)
  };

  const onOtpSubmit=(otp)=>{
    console.log(otp)
  };

  return (
    <div>
      {!showOtpInput? <form action="" onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phonenumber}
          onChange={handlePhoneNumber}
          placeholder="Enter Phone Number "
        />
        <button type="submit">Submit</button>
      </form>: <div>
        <p>Enter otp sent to {phonenumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/></div>}
    </div>
  );
};

export default PhoneOtpLogin;
