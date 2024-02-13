import { useState } from "react";

const CartItems = ({ item }) => {
  const { name, isVeg, price, defaultPrice } = item;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex justify-between pb-3 border-b-[1px] mb-2 border-slate-300 item-center'>
      <div className='flex items-center basis-8/12'>
        <span
          className={
            "p-1  border border-spacing-1 flex items-center justify-center  mr-2 " +
            (isVeg == true ? "border-green-700" : "border-orange-800")
          }
        >
          <span
            className={
              "text-[10px] bi bi-circle-fill  " +
              (isVeg == true ? "text-green-700" : "text-orange-800")
            }
          ></span>
        </span>
        <span>{name}</span>
      </div>
      <div className='flex items-center justify-between basis-4/12'>
        <span className='border border-slate-400 px-2 mr-4  font-bold text-green-700'>
          <button className='text-{20px} text-neutral-500 mr-2 px-2 py-1 bi bi-plush'>
            <span className='bi bi-dash-lg'></span>
          </button>
          {quantity}
          <button
            className='text-{20px} text-green-500 ml-2 px-2 py-1 '
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <span className='bi bi-plus-lg'></span>
          </button>
        </span>
        <span>
          {Math.trunc(
            price ? (price / 100) * quantity : (defaultPrice / 100) * quantity
          ).toLocaleString("en-in", {
            style: "currency",
            currency: "INR",
          })}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
