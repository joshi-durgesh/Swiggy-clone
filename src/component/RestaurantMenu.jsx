import MENU_API from "../utils/constant";
import { useEffect, useState } from "react";
import { BannerSkimmers } from "./Skimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuData(json);
  };

  if (menuData === null) return <BannerSkimmers />;

  const { name, cuisines, areaName, sla, avgRating, totalRatingsString } =
    menuData?.data?.cards[0]?.card?.card?.info;

  const { lastMileTravelString } = sla;

  return (
    <section className='restaurant-info'>
      <div>
        <h2>{name}</h2>
        <p>{cuisines.join(",")}</p>
        <p>
          {areaName},{lastMileTravelString}
        </p>
      </div>
      <div className='restaurant-rating'>
        <span className='bi bi-star-fill'>&nbsp;{avgRating}</span>
        <span>{totalRatingsString}</span>
      </div>
    </section>
  );
};

export default RestaurantMenu;
