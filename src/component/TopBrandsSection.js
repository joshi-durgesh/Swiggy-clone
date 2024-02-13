import RestaurantCard from "./RestaurantCard";
import SlidingContentBtn from "./SlidingContentBtn";

const TopBrandsSection = ({ data }) => {
  const { title } = data?.header;
  const topBrands = data?.gridElements?.infoWithStyle?.restaurants;

  return (
    <section className='max-w-6xl mx-auto overflow-hidden mt-7 p-2 pb-7 border-b-2 mb-6'>
      <div className='flex justify-between mb-7'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='flex gap-3'>
          <SlidingContentBtn section='toresto' side='left' />
          <SlidingContentBtn section='toresto' side='right' />
        </div>
      </div>
      <div className='flex gap-4'>
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
