import RestaurantCard from "./RestaurantCard";
import SlidingContentBtn from "./SlidingContentBtn";

const TopBrandsSection = ({ data }) => {
  const { title } = data?.header;
  const topBrands = data?.gridElements?.infoWithStyle?.restaurants;
  console.log(title);

  return (
    <section className='top-brand-section section-commen'>
      <div className='about-banner'>
        <h2>{title}</h2>
        <div className='btn-sliding'>
          <SlidingContentBtn section='toresto' side='left' />
          <SlidingContentBtn section='toresto' side='right' />
        </div>
      </div>
      <div className='top-brand-container'>
        {topBrands.map((brandData) => (
          <RestaurantCard
            key={brandData.info.id}
            resId={brandData.info.id}
            resData={brandData}
          />
        ))}
      </div>
    </section>
  );
};

export default TopBrandsSection;
