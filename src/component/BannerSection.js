import BannerItem from "./BannerItem";
import SlidingContentBtn from "./SlidingContentBtn";

const BannerSection = ({ data }) => {
  const bannerData = data?.gridElements?.infoWithStyle?.info;
  const { title } = data.header;
  return (
    <section className='banner-section'>
      <div className='about-banner'>
        <h2>{title}</h2>
        <div className='btn-sliding'>
          <SlidingContentBtn section='banner' side='left' />
          <SlidingContentBtn section='banner' side='right' />
        </div>
      </div>
      <div className='banner-products'>
        {bannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
