import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";
import { TopRestoSkimmers } from "./Skimmer";

const TopBrandsSection = () => {
  const [TopBrands, SetTopBrands] = useState([]);

  const [AllBrands, SetAllBrands] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [inputResto, SetInputResto] = useState("");

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const brands =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    SetTopBrands(brands);
    SetAllBrands(brands);
  };

  return TopBrands.length === 0 ? (
    <TopRestoSkimmers />
  ) : (
    <section className='top-brand-section'>
      <div className='about-banner'>
        <h2>Top restaurant chains in Hyderabad</h2>

        <div className='top-resto-search-bar'>
          <input
            type='text'
            className='search-restaurant'
            id='search-top-resto'
            placeholder='Search for Restaurant'
            value={inputResto}
            onChange={(e) => {
              return SetInputResto(e.target.value);
            }}
          />
          <button
            className='resto-search-btn'
            onClick={() => {
              const searchValue = document
                .getElementById("search-top-resto")
                .value.toLowerCase();

              const searchData = AllBrands.filter((data) => {
                return data.info.name.toLowerCase().includes(searchValue);
              });
              SetTopBrands(searchData);
            }}
          >
            <span className='bi bi-search'></span>
          </button>
        </div>
        <button
          className='top-resto-btn'
          onClick={() => {
            const filterdData = TopBrands.filter((data) => {
              return data.info.avgRating > 4;
            });
            SetTopBrands(filterdData);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className='top-brand-container'>
        {TopBrands.map((brandData) => (
          <RestaurantCard
            key={brandData.info.id}
            resId={brandData.info.id}
            resData={brandData}
          />
        ))}
      </div>
    </section>
  );
};

export default TopBrandsSection;
