import { useState, useEffect } from "react";
import RestaurantCard, { OffersRestaurantCard } from "./RestaurantCard";

const AllRestaurant = ({ data, title }) => {
  const [allRestoData] = useState(data);

  // const OffersCard = OffersRestaurantCard(<RestaurantCard />);
  // console.log(OffersCard);

  return (
    <section className='max-w-6xl mx-auto pb-7'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='mb-3'>buttons</div>

      <div className='flex flex-wrap gap-2'>
        {allRestoData.map((data) => {
          // const offers = data.info.aggregatedDiscountInfoV3;
          // if (offers) {
          //   const offerDetail = `${offers.header} ${offers.subHeader}`;
          //   return <OffersCard key={data.info.id} resData={data} />;
          // }
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </section>
  );
};

export default AllRestaurant;
