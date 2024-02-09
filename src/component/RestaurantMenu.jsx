import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BannerSkimmers } from "./Skimmer";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantCuisineList from "./RestaurantCuisineList";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  if (menuData === null) return <BannerSkimmers />;

  return (
    <section className='max-w-3xl mx-auto '>
      <RestaurantDetails menuData={menuData} />
      <RestaurantCuisineList menuData={menuData} />
    </section>
  );
};

export default RestaurantMenu;
