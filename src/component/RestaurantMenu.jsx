import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BannerSkimmers } from "./Skimmer";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantCuisineCategory from "./RestaurantCuisineCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (menuData === null) return <BannerSkimmers />;

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
    <section className='max-w-3xl mx-auto '>
      <RestaurantDetails menuData={menuData} />
      <div>
        {categories.map((item, index) => {
          return (
            <RestaurantCuisineCategory
              list={item}
              key={item?.card?.card?.title}
              showItem={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RestaurantMenu;
