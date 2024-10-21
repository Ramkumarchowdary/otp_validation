import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
useEffect(()=>{
    if(inputRefs.current[0]){
        inputRefs.current[0].focus()
    }
})



  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};
  console.log(inputRefs);
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpinput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
