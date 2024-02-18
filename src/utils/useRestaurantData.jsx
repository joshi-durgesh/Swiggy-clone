import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useRestaurantData = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setAllData(json?.data?.cards);
  };

  return allData;
};

export default useRestaurantData;
