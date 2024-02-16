import RestaurantCard from "./RestaurantCard";

const TopBrandsSection = ({ data }) => {
  const { title } = data?.header;
  const topBrands = data?.gridElements?.infoWithStyle?.restaurants;

  return (
    <section className='max-w-6xl mx-auto  mt-7 p-2 pb-7 mb-6'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {/* <div className='mb-3'>buttons</div> */}

      <div className='flex  flex-wrap gap-1'>
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
