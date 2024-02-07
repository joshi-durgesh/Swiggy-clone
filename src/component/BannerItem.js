import { CDN_URL } from "../utils/constant";

const BannerItem = ({ banData }) => {
  const { imageId } = banData;
  return (
    <a href className='flex-none w-[9rem]  block '>
      <img src={CDN_URL + imageId} />
    </a>
  );
};
export default BannerItem;
