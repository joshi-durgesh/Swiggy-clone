import { CDN_URL } from "../utils/constant";

const Cuisines = ({ data }) => {
  const { name, price, description, id, imageId, isVeg, defaultPrice, ribbon } =
    data;
  return (
    <div
      className='flex mb-4 pb-5 border-b-[1px]
    border-b-neutral-300'
    >
      <div className=' basis-10/12'>
        <div>
          {isVeg ? (
            <i className='bi bi-caret-down-square text-green-700'></i>
          ) : (
            <i className='bi bi-caret-up-square text-orange-700'></i>
          )}
        </div>
        <div className='font-semibold'>{name}</div>
        <div className='mb-5'>
          {(price ? price / 100 : defaultPrice / 100).toLocaleString("en-in", {
            style: "currency",
            currency: "INR",
          })}
        </div>
        <div className='text-[12px] text-neutral-400'>{description}</div>
      </div>
      <div className=' basis-2/12 flex items-center relative'>
        <button
          className='absolute bottom-[2] left-7 px-4 border-neutral-400 border-[1px]
          py-1 bg-white text-green-600 font-bold rounded-md shadow-md shadow-stone-100 drop-shadow-md'
        >
          ADD
        </button>
        <div className='w-28 h-24  m-2 rounded-lg overflow-hidden '>
          <img src={CDN_URL + imageId} className='object-fill w-28 h-24' />
        </div>
      </div>
    </div>
  );
};

export const bestsellerCuisines = (Cuisines) => {
  return (props) => {
    const { bestSeller } = props;
    return (
      <div className='relative'>
        <label className='text-orange-400 absolute top-0 left-6'>
          <i className='bi bi-star-fill'></i> {bestSeller}
        </label>
        <Cuisines {...props} />
      </div>
    );
  };
};

export default Cuisines;