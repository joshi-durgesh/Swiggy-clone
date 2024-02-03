import BannerItem from "./BannerItem";
import SlidingContentBtn from "./SlidingContentBtn";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";
import { BannerSkimmers } from "./Skimmer";

const BannerSection = () => {
  const [BannerData, SetBannerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(useState());

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    SetBannerData(
      json?.data?.cards[0].card.card.gridElements.infoWithStyle.info
    );
  };

  return BannerData.length === 0 ? (
    <BannerSkimmers />
  ) : (
    <section className='banner-section'>
      <div className='about-banner'>
        <h2>What's on your mind?</h2>
        <div className='btn-banner'>
          <SlidingContentBtn side='left' />
          <SlidingContentBtn side='right' />
        </div>
      </div>
      <div className='banner-products'>
        {BannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
