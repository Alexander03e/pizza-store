import { useState } from "react";
import { IPizza } from "../../App";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IPizzaCart, addItem } from "../../store/slices/cart";

interface IPizzaItemProps {
  item: IPizza;
}

export const PizzaBlock: React.FC<IPizzaItemProps> = ({ item }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const pizzaTypes: Record<number, string> = {
    0: "тонкое",
    1: "традиционное",
  };

  const { items } = useAppSelector((state) => state.cart);
  const foundItem = items.find(
    (obj) =>
      obj.id === item.id &&
      obj.type === pizzaTypes[activeType] &&
      obj.size === activeSize
  );
  const dispatch = useAppDispatch();

  const addPizzaToCart = () => {
    const cartItem: IPizzaCart = {
      id: item.id,
      title: item.title,
      price: item.price,
      category: item.category,
      imageUrl: item.imageUrl,
      rating: item.rating,
      size: activeSize,
      type: pizzaTypes[activeType],
      count: 0,
    };
    console.log(items.filter((el) => item.id === el.id));
    dispatch(addItem(cartItem));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{item.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {item.types.map((type, i) => (
            <li
              key={i}
              onClick={() => setActiveType(type)}
              className={
                item.types.length != 1
                  ? type === activeType
                    ? "active"
                    : ""
                  : "active"
              }
            >
              {pizzaTypes[type]}
            </li>
          ))}
        </ul>
        <ul>
          {item.sizes.map((size, i) => (
            <li
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ""}
              key={i}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от {Math.round(item.price / 5) * 5} руб.
        </div>
        <div
          onClick={addPizzaToCart}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{foundItem ? foundItem.count : 0}</i>
        </div>
      </div>
    </div>
  );
};
