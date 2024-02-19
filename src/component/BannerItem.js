import { CDN_URL } from "../utils/constant";
import frame from "../../public/images/frame.png";

const BannerItem = ({ banData }) => {
  const { imageId } = banData;
  return (
    <a className='flex-none w-[9.5rem]  block hover:scale-95 duration-300 hover:drop-shadow-[0px_0px_20px_rgba(147,197,253,0.25)]'>
      <div className='relative '>
        <img src={CDN_URL + imageId} className='w-[8rem] p-2' />
        <img
          src={frame}
          className='absolute top-0 left-0 w-[8rem] h-[9.7rem]  '
        />
      </div>
    </a>
  );
};
export default BannerItem;
