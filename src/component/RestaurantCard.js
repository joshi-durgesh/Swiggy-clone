import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    areaName,
    id,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  aggregatedDiscountInfoV3
    ? ({ header, subHeader } = aggregatedDiscountInfoV3)
    : "";
  const { slaString } = sla;

  return (
    <Link
      className='w-[280px] p-3  flex flex-col flex-none hover:scale-90 transition-all duration-300'
      to={"/restaurant/" + id}
    >
      <div className='w-auto h-40 rounded-xl shadow-lg mb-3 overflow-hidden relative'>
        <img
          className='w-[260px] h-40 object-fill '
          src={CDN_URL + cloudinaryImageId}
        />
        <div className='absolute w-full h-full top-0 left-0  bg-gradient-to-t from-zinc-900 from-[10%]  to-transparent to-[40%]'></div>
        <h2 className='text-neutral-200 text-xl font-bold align-middle absolute left-9 bottom-2'>
          {aggregatedDiscountInfoV3 ? `${header} ${subHeader}` : ""}
        </h2>
      </div>
      <div className='ml-2'>
        <h3 className='text-ellipsis w-[210px] text-nowrap overflow-hidden font-bold mb-1'>
          {name}
        </h3>
        <div className='flex items-center font-bold'>
          <span className='flex item-center justify-center w-5 h-5 rounded-full bg-green-700 '>
            <span className='bi bi-star-fill  text-white  text-sm'></span>
          </span>
          &nbsp;
          {avgRating} <span className='bi bi-dot dot'></span>
          &nbsp; {slaString}
        </div>
        <div className='overflow-hidden text-ellipsis text-nowrap w-[220px]'>
          {cuisines.join(",")}
        </div>
        <div className=''>{areaName}</div>
      </div>
    </Link>
  );
};

export const OffersRestaurantCard = (restoCard) => {
  return (props) => {
    console.log(props);
  };
};

export default RestaurantCard;
