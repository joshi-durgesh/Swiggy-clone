import { CDN_URL } from "../utils/constant";

const BannerItem = ({ banData }) => {
  const { imageId } = banData;
  return (
    <a href=''>
      <img src={CDN_URL + imageId} className='banner-img' />
    </a>
  );
};
export default BannerItem;
