import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const AllRestaurant = ({ data, title }) => {
  const [allRestoData] = useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update"
    );
    const json = await data.json();
    console.log(json);
  };

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
