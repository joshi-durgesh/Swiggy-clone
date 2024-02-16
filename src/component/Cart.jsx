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
    <section className=' max-w-2xl mx-auto mt-[180px] '>
      <div className='flex justify-center flex-col items-center'>
        <img
          src={require("../../public/images/empty_cart.webp")}
          className='w-[350px] mb-4'
        />
        <p className='mb-3 text-xl text-neutral-600 font-bold'>
          Your cart is empty
        </p>
        <p className='mb-4'>You can go to homepage to view more restaurants</p>
        <Link to='/' className='bg-orange-500 font-bold text-white p-2 px-4'>
          SEE RESTAURANTS NEAR YOU
        </Link>
      </div>
    </section>
  ) : (
    <section className=' max-w-2xl mx-auto mt-9 '>
      <div className='bg-zinc-100 p-4 shadow-lg'>
        <h1 className='text-center font-bold text-2xl '>Cart</h1>
        <div>
          {cartItems.map((item) => {
            return <CartItems item={item} />;
          })}
        </div>
        <div className='text-right'>Total : {sum()}</div>
      </div>
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
