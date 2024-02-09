import Cuisines, { bestsellerCuisines } from "./Cuisines";

const CuisinesItem = ({ itemCards }) => {
  const BestSeller = bestsellerCuisines(Cuisines);

  return (
    <ul>
      {itemCards.map((item) => {
        return (
          <li key={item?.card?.info?.id}>
            {item.card.info.ribbon.text ? (
              <BestSeller
                data={item?.card?.info}
                bestSeller={item?.card?.info?.ribbon?.text}
              />
            ) : (
              <Cuisines data={item?.card?.info} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CuisinesItem;
