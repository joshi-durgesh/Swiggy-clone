import RestaurantCuisineAllItems from "./RestaurantCuisineAllItems";

const RestaurantCuisineCategory = ({ list, showItem, setShowIndex }) => {
  const { itemCards, title } = list?.card?.card;
  // const [showItem, setShowItem] = useState(false);

  const clickHandler = () => {
    //  setShowItem(!showItem);
    setShowIndex();
  };

  return (
    <div key={title}>
      <div
        className='flex justify-between  my-4 cursor-pointer'
        onClick={clickHandler}
      >
        <h1 className='text-lg font-bold'>{title}</h1>
        <span className='bi bi-caret-down-fill mr-5'></span>
      </div>
      {showItem && <RestaurantCuisineAllItems itemCards={itemCards} />}
      <div className='h-4 w-auto bg-slate-100'></div>
    </div>
  );
};

export default RestaurantCuisineCategory;
