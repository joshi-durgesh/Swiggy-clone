const RestaurantDetails = ({ menuData }) => {
  const { name, cuisines, areaName, sla, avgRating, totalRatingsString } =
    menuData?.data?.cards[0]?.card?.card?.info;

  const { lastMileTravelString } = sla;

  return (
    <div className='flex justify-between pb-5 border-b-[1px] border-b-slate-400 border-dashed mt-9'>
      <div>
        <h2 className='font-bold text-lg mb-2'>{name}</h2>
        <p className='text-[13px] text-slate-500'>{cuisines.join(",")}</p>
        <p className='text-[13px] text-slate-500'>
          {areaName},{lastMileTravelString}
        </p>
      </div>
      <div className='flex flex-col justify-center border-[1px] border-slate-300 items-center rounded-xl p-3'>
        <span className='bi bi-star-fill pb-1 text-green-700 font-bold'>
          &nbsp;{avgRating}
        </span>
        <span className='pt-1 text-slate-400 border-t-[1px] font-semibold'>
          {totalRatingsString}
        </span>
      </div>
    </div>
  );
};

export default RestaurantDetails;
