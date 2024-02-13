import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    if (onlineStatus) {
      document.getElementById("online-status").style.color = "green";
    }
    if (!onlineStatus) {
      document.getElementById("online-status").style.color = "red";
    }
  });

  return (
    <header className='shadow-xl sticky top-0 left-0 z-10 bg-white'>
      <div className='flex justify-between max-w-7xl mx-auto p-2 items-center '>
        <div className='flex items-center '>
          <Link to='/'>
            <img
              src={LOGO_URL}
              className='w-14 hover:scale-125 ease-in-out duration-300'
            />
          </Link>
          <Link className='z-10  group ml-3'>
            <span className='group-hover:text-orange-600'>Hyderabad</span> MLA
            Colony, Banjara Hills, Hyderabad{" "}
            <span className='bi bi-chevron-down loc-arrow'></span>
          </Link>
        </div>
        <nav className='font-semibold'>
          <ul className='flex gap-6'>
            <li>
              <span className='bi bi-wifi text-xl' id='online-status'></span>
            </li>
            {/* <li className='hover:text-orange-600'>
              <Link to='/search'>
                <span className='bi bi-search mr-1'></span>Search
              </Link>
            </li> */}
            <li className='hover:text-orange-600'>
              <Link to='/about'>
                <span className='bi bi-patch-question mr-1'></span> About
              </Link>
            </li>
            <li className='hover:text-orange-600'>
              <Link to='/contact'>
                <span className='bi bi-headset mr-1'></span> Contact
              </Link>
            </li>
            <li className='hover:text-orange-600'>
              <Link to='/signin'>
                <span className='bi bi-person mr-1'></span> Sign In
              </Link>
            </li>
            <li className='hover:text-orange-600'>
              <Link to='/cart'>
                <span className='bi bi-box2 mr-1 '></span> Cart (
                {cartItems.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
