import { useState } from "react";
import CuisinesItem from "./CuisinesItem";

const RestaurantCuisineList = ({ menuData }) => {
  const categories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (value) => {
        return (
          value?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <div className='flex flex-col gap-3'>
        {categories.map((list) => {
          const { title, itemCards } = list?.card?.card;
          const handleClick = () => {
            console.log("clicked");
          };

          return (
            <div key={title} onClick={handleClick}>
              <div className='flex justify-between  my-4 cursor-pointer'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <span className='bi bi-caret-down-fill mr-5'></span>
              </div>
              <div>
                <CuisinesItem itemCards={itemCards} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantCuisineList;
