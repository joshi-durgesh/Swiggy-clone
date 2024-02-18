import { UseSelector, useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const sum = () => {
    let total = 0;
    for (const item of cartItems) {
      total += Math.trunc(
        item.price ? item.price / 100 : item.defaultPrice / 100
      );
    }
    return total.toLocaleString("en-in", {
      style: "currency",
      currency: "INR",
    });
  };

  return cartItems.length === 0 ? (
    <section className=' max-w-2xl mx-auto mt-[160px] mb-8'>
      <div className='flex justify-center flex-col items-center'>
        <img
          src={require("../../public/images/empty_cart.webp")}
          className='w-[350px] mb-4'
        />
        <p className='mb-3 text-xl text-[#ffb545] font-bold'>
          Your cart is empty
        </p>
        <p className='mb-4 text-white'>
          You can go to homepage to view more restaurants
        </p>
        <Link
          to='/'
          className='bg-[#4f170e] rounded-lg font-bold text-[#ffdba5] p-2 px-4'
        >
          SEE RESTAURANTS NEAR YOU
        </Link>
      </div>
    </section>
  ) : (
    <section className=' max-w-2xl mx-auto mt-9 h-[75.2vh] bg-cyan-800'>
      <h1 className='text-center font-semibold text-2xl pt-2 text-[#ffb545]'>
        Cart
      </h1>
      <div className='bg-cyan-800 p-4 h-[75%] overflow-auto'>
        <div>
          {cartItems.map((item) => {
            return <CartItems item={item} />;
          })}
        </div>
      </div>
      <div className='text-right mr-8 mt-3 text-white'>Total : {sum()}</div>
      <div className='flex m-7 justify-center'>
        <button
          className='bg-red-400 font-bold text-white px-3 py-2 shadow-lg rounded-md'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
