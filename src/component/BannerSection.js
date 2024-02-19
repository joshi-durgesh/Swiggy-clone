import BannerItem from "./BannerItem";

const BannerSection = ({ data }) => {
  const bannerData = data?.gridElements?.infoWithStyle?.info;
  const { title } = data?.header;
  return (
    <section className='max-w-6xl mx-auto p-2 mt-7 border-b-[1px] border-[#ffb545] pb-7 mb-7'>
      <div className='flex justify-between items-start'>
        <h2 className='text-2xl mb-7  font-bold text-[#ffb545]'>{title}</h2>
      </div>
      <div className='flex gap-3  py-4 overflow-auto'>
        {bannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
