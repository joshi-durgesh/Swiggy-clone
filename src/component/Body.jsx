import { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import TopBrandsSection from "./TopBrandsSection";
import AllRestaurant from "./AllRestaurant";
import { SWIGGY_API } from "../utils/constant";
import { BannerSkimmers } from "./Skimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setAllData(json.data.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  if (allData === null) {
    return <BannerSkimmers />;
  }

  const bannerData = allData[0]?.card?.card;
  const topBrandData = allData[1]?.card?.card;
  const allRestoSectionTitle = allData[2]?.card?.card?.title;
  const allRestoData =
    allData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <>
      <BannerSection data={bannerData} />
      <AllRestaurant data={allRestoData} title={allRestoSectionTitle} />
      <TopBrandsSection data={topBrandData} />
    </>
  );
};

export default Body;
