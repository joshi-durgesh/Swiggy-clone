import { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import TopBrandsSection from "./TopBrandsSection";
import AllRestaurant from "./AllRestaurant";
import { SWIGGY_API } from "../utils/constant";
import { BannerSkimmers } from "./Skimmer";

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
      <TopBrandsSection data={topBrandData} />
      <AllRestaurant data={allRestoData} title={allRestoSectionTitle} />
    </>
  );
};

export default Body;
