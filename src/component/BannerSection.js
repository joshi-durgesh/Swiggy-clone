import BannerItem from "./BannerItem";
import SlidingContentBtn from "./SlidingContentBtn";

const BannerSection = ({ data }) => {
  const bannerData = data?.gridElements?.infoWithStyle?.info;
  const { title } = data.header;
  return (
    <section className='max-w-6xl mx-auto p-2 mt-7 border-b-2 pb-7'>
      <div className='flex justify-between items-start'>
        <h2 className='text-2xl mb-7  font-bold'>{title}</h2>
        <div className='flex gap-3'>
          <SlidingContentBtn section='banner' side='left' />
          <SlidingContentBtn section='banner' side='right' />
        </div>
      </div>
      <div className='flex gap-5 flex-nowrap overflow-hidden'>
        {bannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
