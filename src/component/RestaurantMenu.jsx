import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BannerSkimmers } from "./Skimmer";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantCuisineCategory from "./RestaurantCuisineCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

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
        {categories.map((item) => {
          return (
            <RestaurantCuisineCategory
              list={item}
              key={item?.card?.card?.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RestaurantMenu;
