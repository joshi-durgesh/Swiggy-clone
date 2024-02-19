import { UseSelector, useSelector } from "react-redux";
import { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const user = useSelector((store) => store.userinfo.users);

  const loginHandler = () => {
    user
      ? user[phoneNumber]
        ? setValidationMsg("success")
        : setValidationMsg("Invalid phone number")
      : setValidationMsg("no user found");
  };

  return (
    <div className='flex flex-col px-7 pt-4'>
      <input
        type='number'
        placeholder='Phone number'
        className='p-3 py-4 font-bold '
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p className='text-white'>{validationMsg}</p>
      <button
        className='mt-4 mb-2 bg-[#ffb545] text-white font-bold text-sm p-3'
        onClick={loginHandler}
      >
        LOGIN
      </button>
      <p className='text-[12px] mb-6 text-white'>
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default Login;
