import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { SWIGGY_API } from "../utils/constant";

const AllRestaurant = ({ data, title }) => {
  const [allRestoData] = useState(data);

  return (
    <section className='section-commen'>
      <div>
        <h2>{title}</h2>
      </div>
      <div>buttons</div>

      <div className='all-restaurant'>
        {allRestoData.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </section>
  );
};

export default AllRestaurant;
