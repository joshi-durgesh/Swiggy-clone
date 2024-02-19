import { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import TopBrandsSection from "./TopBrandsSection";
import AllRestaurant from "./AllRestaurant";
import { SWIGGY_API } from "../utils/constant";
import { BannerSkimmers } from "./Skimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import HeroSection from "./HeroSection";

const Body = () => {
  const [allData, setAllData] = useState(null);
  const defaulLocation = "lat=17.4356874&lng=78.4331776";
  const [location, setLocation] = useState(defaulLocation);

  useEffect(() => {
    fetchAllData();
  }, [location]);

  const fetchAllData = async () => {
    const data = await fetch(SWIGGY_API + location);
    const json = await data.json();
    setAllData(json?.data?.cards);
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
      <HeroSection setLocation={setLocation} />
      <BannerSection data={bannerData} />
      <AllRestaurant data={allRestoData} title={allRestoSectionTitle} />
      <TopBrandsSection data={topBrandData} />
    </>
  );
};

export default Body;
