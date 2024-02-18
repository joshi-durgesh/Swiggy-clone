import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className='shadow-xl sticky top-0 left-0 z-10 bg-cyan-800 text-[#ffb545]'>
      <div className='flex justify-between max-w-7xl mx-auto p-2 items-center '>
        <div className='flex items-center '>
          <Link to='/'>
            <img
              src={logo}
              className='w-14 hover:scale-125 ease-in-out duration-300'
            />
          </Link>
        </div>
        <nav className='font-bold'>
          <ul className='flex gap-6'>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/about'>
                <span className='bi bi-patch-question mr-1'></span> About
              </Link>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/contact'>
                <span className='bi bi-headset mr-1'></span> Contact
              </Link>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/signin'>
                <span className='bi bi-person mr-1'></span> Sign In
              </Link>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
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
