import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addUser } from "../utils/userInfoSlice";

const SignUp = ({ setFormTitle }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const Dispatch = useDispatch();

  return (
    <div className='flex flex-col px-7 pt-4'>
      <input
        type='number'
        placeholder='Phone number'
        className='p-3 py-4 mb-1 font-bold'
        id='phone-num'
        value={phoneNumber}
        onChange={(e) => {
          return setPhoneNumber(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Name'
        className='p-3 py-4 mb-1 font-bold'
        value={userName}
        onChange={(e) => {
          return setUserName(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Email'
        className='p-3 py-4 font-bold'
        value={email}
        onChange={(e) => {
          return setEmail(e.target.value);
        }}
      />
      <button
        className='mt-4 mb-2 bg-[#ffb545] text-white font-bold text-sm p-3'
        onClick={() => {
          setUserInfo((userInfo.phone = phoneNumber));
          setUserInfo((userInfo.name = userName));
          setUserInfo((userInfo.email = email));
          Dispatch(addUser(userInfo));
          setPhoneNumber("");
          setEmail("");
          setUserName("");
          setFormTitle("Login");
        }}
      >
        CONTINUE
      </button>
      <p className='text-[12px] mb-6 text-white'>
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default SignUp;
