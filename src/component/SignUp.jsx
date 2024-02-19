import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux";
import { addUser } from "../utils/userInfoSlice";

const SignUp = ({ setFormTitle }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const [numInfo, setNumInfo] = useState("");
  const [nameInfo, setNameInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");

  const user = useSelector((store) => store.userinfo.users);

  const Dispatch = useDispatch();
  const validateNumber = () => {
    const regex = /^[0]?[789]\d{9}$/;

    phoneNumber
      ? regex.test(phoneNumber)
        ? setNumInfo("")
        : setNumInfo("Invalid")
      : setNumInfo("*Required");

    user
      ? user[phoneNumber]
        ? setNumInfo("Already exsits")
        : setNumInfo("")
      : setNumInfo("");
  };

  const validateName = () => {
    const regex = /^[a-zA-Z ]{2,30}$/;
    userName
      ? regex.test(userName)
        ? setNameInfo("")
        : setNameInfo("Invalid")
      : setNameInfo("*Required");
  };

  const validateEmail = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    email
      ? regex.test(email)
        ? setEmailInfo("")
        : setEmailInfo("Invalid")
      : setEmailInfo("**Required");
  };

  return (
    <div className='flex flex-col px-7 pt-4'>
      <input
        type='number'
        placeholder='Phone number'
        className='p-3 py-4 mb-1 font-bold'
        id='phone-num'
        value={phoneNumber}
        onChange={(e) => {
          setNumInfo("");
          return setPhoneNumber(e.target.value);
        }}
        onBlur={validateNumber}
      />
      <p className='text-[#ffb545] mt-[-5px] mb-2 text-sm'>{numInfo}</p>
      <input
        type='text'
        placeholder='Name'
        className='p-3 py-4 mb-1 font-bold'
        value={userName}
        onChange={(e) => {
          setNameInfo("");
          return setUserName(e.target.value);
        }}
        onBlur={validateName}
      />
      <p className='text-[#ffb545] mt-[-5px] mb-2 text-sm'>{nameInfo}</p>
      <input
        type='text'
        placeholder='Email'
        className='p-3 py-4 font-bold'
        value={email}
        onChange={(e) => {
          setEmailInfo("");
          return setEmail(e.target.value);
        }}
        onBlur={validateEmail}
      />
      <p className='text-[#ffb545] mt-[-5px] mb-2 text-sm'>{emailInfo}</p>

      <button
        className='mt-4 mb-2 bg-[#ffb545] text-white font-bold text-sm p-3'
        onClick={() => {
          if (!phoneNumber) {
            setNumInfo("**Required");
            return;
          }
          if (!userName) {
            setNameInfo("**Required");
            return;
          }
          if (!email) {
            setEmailInfo("**Required");
            return;
          }
          if (
            numInfo === "Invalid" ||
            nameInfo === "Invalid" ||
            emailInfo === "Invalid"
          ) {
            return;
          }
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
