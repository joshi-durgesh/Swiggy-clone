import RestaurantCuisineItems, {
  bestSellerCuisine,
} from "./RestaurantCuisineItems";

const RestaurantCuisineAllItems = ({ itemCards }) => {
  const BestSellerCuisine = bestSellerCuisine(RestaurantCuisineItems);

  return (
    <ul>
      {itemCards.map((item) => {
        const { info } = item?.card;
        const { id, ribbon } = info;
        return (
          <li key={id}>
            {ribbon?.text ? (
              <BestSellerCuisine
                key={id}
                items={info}
                bestseller={ribbon?.text}
              />
            ) : (
              <RestaurantCuisineItems key={id} items={info} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurantCuisineAllItems;
