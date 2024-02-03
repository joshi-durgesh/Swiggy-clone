import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='site-location'>
          <Link to='/'>
            <img src={LOGO_URL} className='logo' />
          </Link>
          <Link className='location'>
            <span className='city'>Hyderabad</span> MLA Colony, Banjara Hills,
            Hyderabad <span className='bi bi-chevron-down loc-arrow'></span>
          </Link>
        </div>
        <nav className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/search'>
                <span className='bi bi-search'></span>Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/offers'>
                <span className='bi bi-percent'></span> Offers
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/help'>
                <span className='bi bi-patch-question'></span> Help
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signin'>
                <span className='bi bi-person'></span> Sign In
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart'>
                <span className='bi bi-box2 '></span> Cart
              </Link>
            </li>
          </ul>
          {/* <button>
            <span className='bi bi-search'></span>Search
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-percent'></span> Offers
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-patch-question'></span> Help
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-person'></span> Sign In
          </button>
          <button className='nav-buttons cart'>
            <span className='bi bi-box2 '></span> Cart
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
