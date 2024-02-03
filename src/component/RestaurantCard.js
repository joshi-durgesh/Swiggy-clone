import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName, id } =
    resData?.info;
  const { slaString } = sla;

  return (
    <Link className='resto-card' to={"/restaurant/" + id}>
      <div className='resto-img-container'>
        <img className='resto-card-img' src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className='resto-detail-container'>
        <h3 className='resto-name overflow-text'>{name}</h3>
        <div className='resto-rating'>
          <span className='bi bi-star-fill star'></span>&nbsp;
          {avgRating} <span className='bi bi-dot dot'></span>
          &nbsp; {slaString}
        </div>
        <div className='overflow-text resto-cuisine'>{cuisines.join(",")}</div>
        <div className='resto-area'>{areaName}</div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
